// src/routes/account/+page.server.js
import { error, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { emailSchema, passwordSchema, profileSchema } from "$lib/schemas";

export const load = async (event) => {
  const session = await event.locals.getSession();
  if (!session) {
    throw redirect(302, "/login");
  }

  async function getUserProfile() {
    const { error: profileError, data: profile } = await event.locals.supabase
      .from("profiles")
      .select("*")
      .limit(1)
      .single();

    if (profileError) {
      throw error(500, "Error retreiving your profile, please try again later.");
    }
    return profile;
  }

  return {
    profileForm: superValidate(await getUserProfile(), profileSchema, {
      id: "profile",
    }),
    emailForm: superValidate({ email: session.user.email }, emailSchema, {
      id: "email",
    }),
    passwordForm: superValidate(passwordSchema, {
      id: "password",
    }),
  };
};

import { error, redirect } from "@sveltejs/kit";

export const POST = async (event) => {
  const { error: logoutError } = await event.locals.supabase.auth.signOut();

  if (logoutError) {
    throw error(500, "Error: Log out failed. Please try again.");
  }

  throw redirect(302, "/login");
};

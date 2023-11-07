import { clearSupabaseData, createUser, startSupabase } from "./utils.js";

async function seed() {
  try {
    await startSupabase();
    await clearSupabaseData();
    await createUser({ email: "t@t.com", full_name: "Test user", password: "testtest" });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit();
}
seed();

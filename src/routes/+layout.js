import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit" 
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public"

 export const load = async ({ fetch, data, depends }) => {
  depends("supabase:auth")

  const supabase = createSupabaseLoadClient<Database>({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
  })
  const {
    data,
  } = await supabase.auth.getSession()

  return {
    supabase,
    session
  }
}

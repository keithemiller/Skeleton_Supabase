import * as dotenv from "dotenv";
// Initial dotenv to pull all variables in from .env file
dotenv.config();

function getEnvironmentVariable(environmentVariable): {
  const validEnvironmentVariable = process.env[environmentVariable];
  if (!validEnvironmentVariable){
    throw new Error(`Couldn't find environment variable: ${environmentVariable}`);
  }
  return validEnvironmentVariable;
}

export const ENV = {
  PUBLIC_SUPABASE_ANON_KEY: getEnvironmentVariable("PUBLIC_SUPABASE_ANON_KEY"),
  PUBLIC_SUPABASE_URL: getEnvironmentVariable("PUBLIC_SUPABASE_URL"),
  SUPABASE_SERVICE_ROLE_KEY: getEnvironmentVariable("SUPABASE_SERVICE_ROLE_KEY"),
  SUPABASE_DB_URL: getEnvironmentVariable("SUPABASE_DB_URL"),
};

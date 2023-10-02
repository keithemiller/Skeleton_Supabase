// Gets the users session on every page
export const load = async (event) => {
  return {
    session: await event.locals.getSession(),    
  }
}
import { auth } from "~/server/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/signin" && req.nextUrl.pathname !== '/signup') {
    const newUrl = new URL("/signin", req.nextUrl.origin);
      return Response.redirect(newUrl);

  }
});
export const config = {
    matcher: ["/((?!api|signin|signup|_next/static|_next/image|favicon.ico).*)"],
  }
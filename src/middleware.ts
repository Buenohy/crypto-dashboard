import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const pathname = req.nextUrl.pathname;

  if (pathname === '/') {
    if (session) {
      return NextResponse.redirect(new URL('/wallet', req.url));
    }
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const protectedRoutes = ['/wallet', '/chart'];

  if (!session && protectedRoutes.some((route) => pathname.startsWith(route))) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.href);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/wallet/:path*', '/chart/:path*'],
};

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const publicPath = path === '/sign-in' || path === '/sign-up';

  const cookiesManager = cookies();

  const token = cookiesManager.get('token')?.value || '';

  if (publicPath && token !== '') {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  } else if (!publicPath && token === '') {
    return NextResponse.redirect(new URL('/sign-in', request.nextUrl));
  }
}

export const config = {
  matcher: ['/sign-in', '/sign-up'],
};

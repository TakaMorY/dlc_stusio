// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
    const hostname = request.headers.get('host')

    // Если запрос пришел на домен vercel.app
    if (hostname === 'dlc-studio.vercel.app') {
        // Перенаправляем на основной www-домен
        const url = request.nextUrl.clone()
        url.hostname = 'www.dlc-studio.ru'
        url.protocol = 'https:'
        return NextResponse.redirect(url)
    }

    // Для всех остальных запросов ничего не меняем
    return NextResponse.next()
}

// Указываем, для каких путей middleware должен срабатывать
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
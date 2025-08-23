// server/middleware/redirect.ts
export default defineEventHandler((event) => {
    const hostname = getRequestHost(event) // Получаем host из запроса

    // Если запрос пришел на домен vercel.app
    if (hostname === 'dlc-studio.vercel.app') {
        // Перенаправляем на основной www-домен
        return sendRedirect(event, 'https://www.dlc-studio.ru' + event.path, 307)
    }

    // Если это не наш служебный домен, ничего не делаем и продолжаем запрос
})
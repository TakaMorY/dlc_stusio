// server/middleware/redirect.ts
export default defineEventHandler((event) => {
    // Получаем host из заголовков запроса
    const host = event.node.req.headers.host || ''

    // Если запрос пришел на домен vercel.app
    if (host === 'dlc-studio.vercel.app') {
        // Формируем URL для редиректа
        const targetUrl = `https://www.dlc-studio.ru${event.node.req.url || ''}`

        // Делаем редирект
        event.node.res.statusCode = 307
        event.node.res.setHeader('Location', targetUrl)
        event.node.res.end()
        return
    }

    // Если это не наш служебный домен, ничего не делаем
})
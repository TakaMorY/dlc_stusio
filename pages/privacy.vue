<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
        <!-- Header -->
        <div class="bg-white shadow-sm border-b">
            <div class="max-w-4xl mx-auto px-4 py-6">
                <NuxtLink to="/"
                    class="inline-flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors group">
                    <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Вернуться на главную</span>
                </NuxtLink>
            </div>
        </div>

        <div class="max-w-4xl mx-auto px-4 py-12">
            <!-- Hero Section -->
            <div class="text-center mb-16">
                <div
                    class="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h1 class="text-4xl font-bold text-gray-900 mb-4">Политика конфиденциальности</h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Мы ценим ваше доверие и стремимся защищать ваши персональные данные
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <!-- Content -->
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
                <!-- Introduction -->
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-8 border-b">
                    <div class="flex items-start space-x-4">
                        <div
                            class="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-900 mb-2">Общая информация</h2>
                            <p class="text-gray-600 leading-relaxed">
                                Настоящая Политика конфиденциальности описывает, как Школа Дополнительного Образования
                                "DLC"
                                собирает, использует и защищает ваши персональные данные.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Data Collection -->
                <section class="p-8 border-b">
                    <div class="flex items-start space-x-4 mb-6">
                        <div class="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Какие данные мы обрабатываем</h2>
                            <p class="text-gray-600 mb-6">
                                В рамках деятельности нашего образовательного центра мы обрабатываем следующие категории
                                данных:
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            class="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200">
                            <div class="flex items-center space-x-3 mb-3">
                                <div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 class="font-semibold text-gray-900">Визуальные данные</h3>
                            </div>
                            <p class="text-gray-600 text-sm">Фотографии сотрудников и учащихся для информирования о
                                составе коллектива</p>
                        </div>

                        <div
                            class="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200">
                            <div class="flex items-center space-x-3 mb-3">
                                <div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 class="font-semibold text-gray-900">Персональная информация</h3>
                            </div>
                            <p class="text-gray-600 text-sm">ФИО, должности и контактные данные сотрудников</p>
                        </div>
                    </div>
                </section>

                <!-- Purpose -->
                <section class="p-8 border-b">
                    <div class="flex items-start space-x-4 mb-6">
                        <div class="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Цели обработки данных</h2>
                            <p class="text-gray-600">
                                Мы используем ваши данные исключительно в законных и прозрачных целях:
                            </p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                        <div class="flex items-start space-x-4">
                            <div
                                class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                Предоставление информации о составе наших преподавателей и сотрудников для
                                информирования
                                потенциальных студентов и партнеров о профессиональном уровне нашей команды
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Storage & Protection -->
                <section class="p-8 border-b">
                    <div class="flex items-start space-x-4 mb-6">
                        <div class="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Хранение и защита данных</h2>
                            <p class="text-gray-600">
                                Мы принимаем все необходимые меры для обеспечения безопасности ваших данных:
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <div class="flex items-center space-x-3 mb-3">
                                <div class="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                    <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 class="font-semibold text-gray-900">Безопасное хранение</h3>
                            </div>
                            <p class="text-gray-600 text-sm">Все данные хранятся в защищенных базах данных с
                                ограниченным доступом</p>
                        </div>

                        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <div class="flex items-center space-x-3 mb-3">
                                <div class="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                    <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 class="font-semibold text-gray-900">Контроль доступа</h3>
                            </div>
                            <p class="text-gray-600 text-sm">Доступ к данным имеют только уполномоченные сотрудники</p>
                        </div>
                    </div>
                </section>

                <!-- User Rights -->
                <section class="p-8 border-b">
                    <div class="flex items-start space-x-4 mb-6">
                        <div class="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Ваши права</h2>
                            <p class="text-gray-600">
                                Вы имеете полное право контролировать использование ваших персональных данных:
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            class="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div class="flex items-center space-x-3 mb-3">
                                <div
                                    class="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                </div>
                                <h3 class="font-semibold text-gray-900">Отозвать согласие</h3>
                            </div>
                            <p class="text-gray-600 text-sm">В любой момент вы можете отозвать согласие на обработку
                                ваших персональных данных</p>
                        </div>

                        <div
                            class="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div class="flex items-center space-x-3 mb-3">
                                <div
                                    class="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                                <h3 class="font-semibold text-gray-900">Удалить данные</h3>
                            </div>
                            <p class="text-gray-600 text-sm">Вы можете потребовать полного удаления ваших данных с наших
                                ресурсов</p>
                        </div>
                    </div>
                </section>

                <!-- Contact -->
                <section class="p-8">
                    <div class="flex items-start space-x-4 mb-6">
                        <div class="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Свяжитесь с нами</h2>
                            <p class="text-gray-600">
                                Для реализации ваших прав или получения дополнительной информации:
                            </p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                        <div class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                            <div class="flex items-center space-x-4">
                                <div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                    <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <a href="tel:+79143348185"
                                        class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                                        +7 914 334-81-85
                                    </a>
                                    <p class="text-gray-600 mt-1">Телефон для связи</p>
                                </div>
                            </div>

                            <NuxtLink to="/"
                                class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                Вернуться на главную
                            </NuxtLink>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false
})
</script>

<style scoped>
/* Плавные переходы для всех интерактивных элементов */
* {
    transition-property: color, background-color, border-color, transform, box-shadow;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
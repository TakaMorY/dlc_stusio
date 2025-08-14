<template>
    <div class="mt-24 min-h-screen bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 py-16">
            <div class="bg-white rounded-2xl shadow-xl p-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-8">Политика конфедициальности</h1>

                <section class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Какие данные мы обрабатываем</h2>
                    <p class="text-gray-600 leading-relaxed">
                        На сайте публикуются фотографии и иные персональные данные сотрудников компании [Студия
                        Дополнительного Образования "DLC".], включая:
                    </p>
                    <div class="mt-4 space-y-2">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 h-6 w-6 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span class="ml-3 text-gray-600">Изображения (фотографии).</span>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 h-6 w-6 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span class="ml-3 text-gray-600">ФИО, должности, контактные данные (если есть).</span>
                        </div>

                    </div>
                </section>

                <section class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Цель обработки</h2>
                    <div class="bg-gray-50 rounded-lg p-6">
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <div class="flex-shrink-0 h-6 w-6 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <span class="ml-3 text-gray-600">Данные используются для информирования посетителей
                                    сайта о составе сотрудников компании.</span>
                            </li>

                        </ul>
                    </div>
                </section>

                <section class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Хранение и защита</h2>
                    <div class="prose text-gray-600">
                        <p class="mb-4">
                            Фотографии хранятся в защищённой базе данных сайта, доступ имеют только уполномоченные лица.
                        </p>
                    </div>
                </section>

                <section class="mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4"> Ваши права</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-gray-50 p-6 rounded-lg">

                            <p class="text-gray-600">Отозвать согласие на обработку ваших данных.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-lg">

                            <p class="text-gray-600">Потребовать удалить ваши данные с сайта.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Для этого свяжитесь с нами:</h2>
                    <div class="bg-gray-50 rounded-lg p-6">

                        <div class="flex items-center space-x-2 text-black text-4xl">
                            <div class="ml-[18px]">
                                <a href="tel:+79143348185" class="font-Inter text-[14px] font-medium ">+7
                                    914
                                    334-81-85
                                   
                                </a>
                            </div>
                        </div>
                    </div>
                     <NuxtLink to="/" class="font-Inter text-[16px] font-medium text-black">Вернуться на главную страницу</NuxtLink>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false // Полностью отключает layout
})
</script>
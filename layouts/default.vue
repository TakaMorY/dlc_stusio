<template>
    <div>
        <header class="block mb-4 fixed top-0 left-0 w-full z-50 bg-white">
            <nav>
                <div class="w-full py-4 md:py-3 shadow-xl">
                    <div class="flex justify-between px-4 md:px-8 lg:px-20 items-center font-semibold">
                        <!-- Логотип -->
                        <NuxtLink to="/" class="text-3xl md:text-4xl font-medium py-1 px-2 z-50">DLC</NuxtLink>

                        <!-- Десктопное меню -->
                        <div class="hidden md:flex md:gap-4 lg:gap-8 xl:gap-10">
                            <NuxtLink to="#teachers"
                                class="hover-text underline-hover-container transition-colors text-sm lg:text-base">
                                Наши преподаватели
                            </NuxtLink>
                            <NuxtLink to="#about"
                                class="hover-text underline-hover-container transition-colors text-sm lg:text-base">
                                О нас
                            </NuxtLink>
                            <NuxtLink to="#services"
                                class="hover-text underline-hover-container transition-colors text-sm lg:text-base">
                                Курсы
                            </NuxtLink>
                        </div>

                        <!-- Кнопка "Связаться" -->
                        <div class="hidden md:flex">
                            <NuxtLink to="https://wa.me/c/79143348185" target="_blank"
                                class="transition duration-300 px-6 py-2 lg:px-8 lg:py-3 bg-white text-black select-none text-sm lg:text-xl border-2 border-black font-semibold hover:bg-black hover:text-white">
                                Связаться с нами
                            </NuxtLink>
                        </div>

                        <!-- Бургер-кнопка с анимацией в крестик -->
                        <button @click="toggleMenu" class="md:hidden w-8 h-8 focus:outline-none z-50">
                            <transition name="fade" mode="out-in">
                                <span v-if="!isMenuOpen" key="menu" class="block text-3xl">☰</span>
                                <span v-else key="close" class="block text-3xl">✕</span>
                            </transition>
                        </button>
                    </div>

                    <!-- Мобильное меню с анимацией сверху -->
                    <transition name="slide-down">
                        <div v-if="isMenuOpen" class="md:hidden fixed inset-0 z-40">
                            <!-- Затемнение фона (начинается ниже логотипа) -->
                            <div class="absolute inset-0 bg-black bg-opacity-50 mt-16" @click="closeMenu"></div>

                            <!-- Контент меню (начинается ниже логотипа) -->
                            <div
                                class="absolute top-16 left-0 right-0 bg-white shadow-xl rounded-b-2xl overflow-hidden z-40">
                                <div class="p-6">
                                    <!-- Навигация -->
                                    <nav class="space-y-4">
                                        <NuxtLink to="/"
                                            class="block text-xl font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                                            @click.native="closeMenu">
                                            Главная
                                        </NuxtLink>
                                        <hr class="border-b border-gray-800">
                                        <NuxtLink to="#teachers"
                                            class="block text-xl font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                                            @click.native="closeMenu">
                                            Наши преподаватели
                                        </NuxtLink>
                                        <hr class="border-b border-gray-800">
                                        <NuxtLink to="#about"
                                            class="block text-xl font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                                            @click.native="closeMenu">
                                            О нас
                                        </NuxtLink>
                                        <hr class="border-b border-gray-800">

                                        <NuxtLink to="#services"
                                            class="block text-xl font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                                            @click.native="closeMenu">
                                            Курсы
                                        </NuxtLink>
                                        <hr class="border-b border-gray-800">
                                    </nav>

                                    <!-- Кнопка связи -->
                                    <NuxtLink to="https://wa.me/c/79143348185" target="_blank"
                                        class="mt-6 w-full px-6 py-4 bg-black text-white text-xl font-semibold text-center hover:bg-gray-800 transition-colors rounded-lg block"
                                        @click.native="closeMenu">
                                        Связаться с нами
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </nav>
        </header>
        <main>
            <slot />
        </main>

        <footer class="mt-24 lg:mt-48 bg-white border-t border-gray-100 relative overflow-hidden">
            <!-- Декоративные элементы -->
            <div class="absolute inset-0 overflow-hidden">
                <div
                    class="absolute top-0 left-0 w-32 h-32 lg:w-64 lg:h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 z-0">
                </div>
                <div
                    class="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-gradient-to-tl from-blue-50 to-cyan-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-40 z-0">
                </div>

                <!-- Анимированные элементы -->
                <div
                    class="absolute top-1/3 left-1/4 w-6 h-6 lg:w-8 lg:h-8 bg-purple-200 rounded-full opacity-30 animate-float-slow z-0">
                </div>
                <div
                    class="absolute bottom-1/3 right-1/3 w-8 h-8 lg:w-12 lg:h-12 bg-blue-200 rounded-full opacity-20 animate-float z-0">
                </div>
                <div
                    class="absolute top-1/2 left-3/4 w-4 h-4 lg:w-6 lg:h-6 bg-pink-200 rounded-full opacity-25 animate-pulse-slow z-0">
                </div>

                <!-- Волнообразные линии -->
                <div class="absolute bottom-0 left-0 w-full h-16 lg:h-20 opacity-5 z-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-full">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            class="fill-purple-400" opacity="0.25"></path>
                    </svg>
                </div>
            </div>

            <div class="relative mx-auto w-full max-w-[1200px] px-4 xl:px-0 py-8 lg:py-12 z-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <!-- Блок бренда -->
                    <div class="md:col-span-2 lg:col-span-1">
                        <div class="flex items-center space-x-3 mb-4 lg:mb-6">

                            <div>
                                <h2 class="text-xl lg:text-2xl font-bold text-gray-900 relative inline-block group">
                                    DLC
                                    <span
                                        class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                                </h2>
                                <p class="text-gray-500 text-xs lg:text-sm">Школа английского языка</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm lg:text-[15px] leading-relaxed mb-4 lg:mb-6">
                            Где каждый находит свой путь к свободному общению на английском языке
                        </p>
                        <div class="flex space-x-2 lg:space-x-3">
                            <!-- WhatsApp -->
                            <NuxtLink to="https://wa.me/c/79143348185"
                                class="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 hover:bg-gradient-to-r from-green-500 to-green-600 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group relative overflow-hidden"
                                target="_blank">
                                <div class="relative z-10">
                                    <svg width="16" height="16" lg:width="20" lg:height="20" viewBox="0 0 24 24"
                                        fill="none"
                                        class="text-gray-600 group-hover:text-white transition-colors duration-300">
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </NuxtLink>

                            <!-- Telegram -->
                            <NuxtLink to="https://t.me/EHqWLw45YpdiOWFi"
                                class="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 hover:bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group relative overflow-hidden"
                                target="_blank">
                                <div class="relative z-10">
                                    <svg width="16" height="16" lg:width="20" lg:height="20" viewBox="0 0 24 24"
                                        fill="none"
                                        class="text-gray-600 group-hover:text-white transition-colors duration-300">
                                        <path
                                            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.05 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.96-.924c-.643-.204-.657-.643.136-.95l11.57-4.458c.538-.196 1.006.128.832.941z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </NuxtLink>

                            <!-- Taplink -->
                            <NuxtLink to="https://taplink.cc/dlc_studio.ndg"
                                class="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 hover:bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group relative overflow-hidden"
                                target="_blank">
                                <div class="relative z-10">
                                    <svg width="16" height="16" lg:width="20" lg:height="20" viewBox="0 0 24 24"
                                        class="text-gray-600 group-hover:text-white transition-colors duration-300">
                                        <rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor"
                                            stroke-width="1.5" rx="2" />
                                        <rect x="7" y="8" width="8" height="1.5" fill="currentColor" rx="0.5" />
                                        <rect x="9" y="11" width="4" height="1.5" fill="currentColor" rx="0.5" />
                                        <rect x="7" y="14" width="6" height="1.5" fill="currentColor" rx="0.5" />
                                    </svg>
                                </div>
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Контакты -->
                    <div class="lg:col-span-1">
                        <h3
                            class="text-base lg:text-lg font-semibold text-gray-900 mb-4 lg:mb-6 flex items-center group cursor-pointer">
                            <span
                                class="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                            <span class="relative">
                                Контакты
                                <span
                                    class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </h3>
                        <div class="space-y-3 lg:space-y-4">
                            <!-- Телефон -->
                            <div
                                class="flex items-start space-x-3 group cursor-pointer transform hover:-translate-y-1 transition-transform duration-300">
                                <div
                                    class="w-8 h-8 lg:w-10 lg:h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:bg-purple-100">
                                    <svg width="14" height="14" lg:width="18" lg:height="18" viewBox="0 0 24 24"
                                        fill="none" class="text-purple-600">
                                        <path
                                            d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554Z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <a href="tel:+79143348185"
                                        class="text-gray-700 text-sm lg:text-base font-medium transition-colors duration-300 relative inline-block contact-link group-hover:text-purple-600">
                                        +7 914 334-81-85
                                    </a>
                                    <p class="text-gray-500 text-xs lg:text-sm mt-1">Наш номер телефона</p>
                                </div>
                            </div>

                            <!-- Email -->
                            <div
                                class="flex items-start space-x-3 group cursor-pointer transform hover:-translate-y-1 transition-transform duration-300">
                                <div
                                    class="w-8 h-8 lg:w-10 lg:h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:bg-blue-100">
                                    <svg width="12" height="12" lg:width="16" lg:height="16" viewBox="0 0 24 24"
                                        fill="none" class="text-blue-600">
                                        <path
                                            d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <a href="mailto:dlcstudio2020@gmail.com"
                                        class="text-gray-700 text-sm lg:text-base font-medium transition-colors duration-300 relative inline-block contact-link group-hover:text-blue-600 break-all">
                                        dlcstudio2020@gmail.com
                                    </a>
                                    <p class="text-gray-500 text-xs lg:text-sm mt-1">Наша почта</p>
                                </div>
                            </div>

                            <!-- Адрес -->
                            <div
                                class="flex items-start space-x-3 group cursor-pointer transform hover:-translate-y-1 transition-transform duration-300">
                                <div
                                    class="w-8 h-8 lg:w-10 lg:h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:bg-green-100">
                                    <svg width="12" height="12" lg:width="16" lg:height="16" viewBox="0 0 24 24"
                                        fill="none" class="text-green-600">
                                        <path
                                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <NuxtLink to="https://yandex.ru/maps/-/CHtQb8kt" target="_blank"
                                        class="text-gray-700 text-sm lg:text-base font-medium transition-colors duration-300 relative inline-block contact-link group-hover:text-green-600">
                                        ул. Пушкина, 32
                                    </NuxtLink>
                                    <p class="text-gray-500 text-xs lg:text-sm mt-1">Вольно-Надеждинское</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Навигация -->
                    <div class="lg:col-span-1">
                        <h3
                            class="text-base lg:text-lg font-semibold text-gray-900 mb-4 lg:mb-6 flex items-center group cursor-pointer">
                            <span
                                class="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                            <span class="relative">
                                Школа
                                <span
                                    class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </h3>
                        <ul class="space-y-2 lg:space-y-3">
                            <li class="group">
                                <NuxtLink to="#teachers"
                                    class="text-gray-600 text-sm lg:text-base hover:text-purple-600 transition-all duration-300 group-hover:translate-x-2 flex items-center relative overflow-hidden py-1 lg:py-2">
                                    <span
                                        class="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 lg:mr-3 group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-150"></span>
                                    <span class="relative">
                                        Преподаватели
                                        <span
                                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 delay-100"></span>
                                    </span>
                                </NuxtLink>
                            </li>
                            <li class="group">
                                <NuxtLink to="#about"
                                    class="text-gray-600 text-sm lg:text-base hover:text-purple-600 transition-all duration-300 group-hover:translate-x-2 flex items-center relative overflow-hidden py-1 lg:py-2">
                                    <span
                                        class="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 lg:mr-3 group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-150"></span>
                                    <span class="relative">
                                        О нас
                                        <span
                                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 delay-100"></span>
                                    </span>
                                </NuxtLink>
                            </li>
                            <li class="group">
                                <NuxtLink to="#services"
                                    class="text-gray-600 text-sm lg:text-base hover:text-purple-600 transition-all duration-300 group-hover:translate-x-2 flex items-center relative overflow-hidden py-1 lg:py-2">
                                    <span
                                        class="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 lg:mr-3 group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-150"></span>
                                    <span class="relative">
                                        Курсы
                                        <span
                                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 delay-100"></span>
                                    </span>
                                </NuxtLink>
                            </li>
                            <li class="group">
                                <NuxtLink to="/privacy"
                                    class="text-gray-600 text-sm lg:text-base hover:text-purple-600 transition-all duration-300 group-hover:translate-x-2 flex items-center relative overflow-hidden py-1 lg:py-2">
                                    <span
                                        class="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 lg:mr-3 group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-150"></span>
                                    <span class="relative">
                                        Конфиденциальность
                                        <span
                                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 delay-100"></span>
                                    </span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Дополнительная информация -->
                    <div class="md:col-span-2 lg:col-span-1">
                        <h3
                            class="text-base lg:text-lg font-semibold text-gray-900 mb-4 lg:mb-6 flex items-center group cursor-pointer">
                            <span
                                class="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                            <span class="relative">
                                Обучение
                                <span
                                    class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </h3>
                        <div
                            class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-purple-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                            <div
                                class="absolute -right-3 -top-3 w-12 h-12 lg:w-20 lg:h-20 bg-purple-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-1000">
                            </div>
                            <div
                                class="absolute -left-3 -bottom-3 w-10 h-10 lg:w-16 lg:h-16 bg-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-1000 delay-200">
                            </div>
                            <div class="relative z-10">
                                <h4
                                    class="font-semibold text-gray-900 text-sm lg:text-base mb-2 group-hover:text-purple-700 transition-colors duration-300">
                                    Начните сегодня</h4>
                                <p
                                    class="text-gray-600 text-xs lg:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    Оцените наш подход к обучению английскому языку.
                                </p>
                                <button
                                    class="mt-3 lg:mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full lg:w-auto">
                                    Записаться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Нижняя часть -->
                <div class="border-t border-gray-200 mt-8 lg:mt-12 pt-6 lg:pt-8 relative">
                    <div class="flex flex-col md:flex-row justify-between items-center space-y-3 lg:space-y-0">
                        <p class="text-gray-600 text-xs lg:text-sm text-center md:text-left">
                            Все права защищены © 2025. Создано с
                            <span class="text-pink-500 mx-1 animate-pulse">♥</span>
                            командой
                            <NuxtLink to="https://nimble-sites.vercel.app"
                                class="text-purple-600 hover:text-purple-500 font-medium transition-colors duration-300 relative contact-link ml-1">
                                NimbleSites
                            </NuxtLink>
                        </p>
                        <div class="flex items-center space-x-4 lg:space-x-6 text-xs lg:text-sm text-gray-500">
                            <NuxtLink to="/privacy"
                                class="hover:text-gray-700 transition-colors duration-300 relative contact-link text-center">
                                Политика конфиденциальности
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
            if (this.isMenuOpen) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
            }
        },
        closeMenu() {
            this.isMenuOpen = false
            document.body.style.overflow = ''
        }
    }
}


</script>



<style>
/* Анимация выезжания сверху (только для контента меню) */
.slide-down-enter-active .absolute,
.slide-down-leave-active .absolute {
    transition: all 0.4s ease;
}

.slide-down-enter .absolute,
.slide-down-leave-to .absolute {
    opacity: 0;
    transform: translateY(-50px);
}

.slide-down-enter-to .absolute,
.slide-down-leave .absolute {
    opacity: 1;
    transform: translateY(0);
}

/* Анимация затемнения фона */
.slide-down-enter-active .bg-opacity-50,
.slide-down-leave-active .bg-opacity-50 {
    transition: opacity 0.3s ease;
}

.slide-down-enter .bg-opacity-50,
.slide-down-leave-to .bg-opacity-50 {
    opacity: 0;
}

/* Анимация перехода бургер-крестик */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Эффекты для ссылок */
.hover-text::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
}

.hover-text:hover::after {
    width: 100%;
}

/* Плавные переходы */
.transition-colors {
    transition: color 0.2s ease, background-color 0.2s ease;
}

/* Фикс для z-index */
.z-50 {
    z-index: 50;
}

.z-40 {
    z-index: 40;
}





/* поддчеркивание в шапке */
.underline-hover-container {
    display: inline-block;
    position: relative;
}

.hover-text {
    color: black;
    cursor: pointer;
}

/* Псевдоэлемент для подчёркивания */
.hover-text::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: black;
    transition: width 0.3s ease-in-out;
}

/* Анимация при наведении */
.hover-text:hover::after {
    width: 100%;
}







/* Анимации для плавающих элементов */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-8px);
    }
}

@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-5px);
    }
}

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 0.25;
    }

    50% {
        opacity: 0.4;
    }
}

@keyframes tilt {

    0%,
    100% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(1deg);
    }

    75% {
        transform: rotate(-1deg);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-float-slow {
    animation: float-slow 4s ease-in-out infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

.animate-tilt {
    animation: tilt 10s ease-in-out infinite;
}

/* Подчеркивания для ссылок */
.contact-link {
    position: relative;
    display: inline-block;
}

.contact-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(to right, #8b5cf6, #ec4899);
    transition: width 0.3s ease;
}

.contact-link:hover::after {
    width: 100%;
}

/* Плавные переходы для всех элементов */
* {
    transition-property: color, background-color, border-color, transform, box-shadow, opacity;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Улучшенная поддержка мобильных */
@media (max-width: 768px) {
    .break-all {
        word-break: break-all;
    }
}
</style>
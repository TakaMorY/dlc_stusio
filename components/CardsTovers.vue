<template>
    <div
        class="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-purple-300 to-white">
        <!-- Декоративные элементы -->
        <div class="absolute top-10 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float"></div>
        <div class="absolute bottom-20 right-16 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-float"
            style="animation-delay: 2s;"></div>
        <div class="absolute top-1/3 left-1/4 w-20 h-20 bg-pink-200 rounded-full opacity-25 animate-float"
            style="animation-delay: 4s;"></div>

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-gray-800 mb-4 italic animate-fade-in-down">
                    Наши курсы
                </h2>
                <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Карточка 2 -->
                <div
                    class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group">
                    <NuxtLink to="https://wa.me/p/8264442663676230/79143348185" class="relative block">
                        <div class="overflow-hidden">
                            <img src="\images\tovars\english.jpg" alt="englishphoto"
                                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <!-- Круг со стрелкой -->
                        <div
                            class="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </NuxtLink>
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2 italic">Отделение Английского языка</h3>
                        <div class="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-3 rounded-full">
                        </div>
                        <p class="text-gray-600 text-base">Погрузитесь в мир английского языка с нашими
                            профессиональными преподавателями</p>
                    </div>
                </div>

                <!-- Карточка 3 -->
                <div
                    class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group">
                    <NuxtLink to="https://wa.me/p/8301684446553594/79143348185" class="relative block">
                        <div class="overflow-hidden">
                            <img src="\images\tovars\bigenglish.jpg" alt="bigenglishphoto"
                                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <!-- Круг со стрелкой -->
                        <div
                            class="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </NuxtLink>
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2"><span class="italic">"Adults"</span>
                            Английский для взрослых</h3>
                        <div class="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto my-3 rounded-full">
                        </div>
                        <p class="text-gray-600 text-base">Современные программы изучения английского для взрослых
                            любого уровня</p>
                    </div>
                </div>

                <!-- Карточка 4 -->
                <div
                    class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group">
                    <NuxtLink to="https://wa.me/p/26967991189482934/79143348185" class="relative block">
                        <div class="overflow-hidden">
                            <img src="\images\tovars\sunduk.jpg" alt="sundukphoto"
                                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <!-- Круг со стрелкой -->
                        <div
                            class="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </NuxtLink>
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Арт - мастерская <span
                                class="italic">"Волшебный сундучок"</span></h3>
                        <div class="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto my-3 rounded-full">
                        </div>
                        <p class="text-gray-600 text-base">Творчество - это поток любви, выливающийся через кисти наших
                            юных художников</p>
                    </div>
                </div>

                <!-- Карточка 5 -->
                <div
                    class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group">
                    <NuxtLink to="https://wa.me/p/8243289065739646/79143348185" class="relative block">
                        <div class="overflow-hidden">
                            <img src="\images\tovars\academy.jpg" alt="academyphoto"
                                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <!-- Круг со стрелкой -->
                        <div
                            class="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </NuxtLink>
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2 italic">Школа раннего развития</h3>
                        <div class="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto my-3 rounded-full">
                        </div>
                        <p class="text-gray-600 text-base">Комплексные программы для гармоничного развития вашего
                            ребенка</p>
                    </div>
                </div>

                <!-- Карточка 6 -->
                <div
                    class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group">
                    <NuxtLink to="https://wa.me/p/8561121723937394/79143348185" class="relative block">
                        <div class="overflow-hidden">
                            <img src="\images\tovars\summer.jpg" alt="summerphoto"
                                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <!-- Круг со стрелкой -->
                        <div
                            class="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </NuxtLink>
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2 italic">Летние курсы</h3>
                        <div class="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto my-3 rounded-full">
                        </div>
                        <p class="text-gray-600 text-base">Интенсивные программы для продуктивного летнего отдыха и
                            обучения</p>
                    </div>
                </div>

                <!-- Карточка 7 -->
                <div
                    class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group">
                    <NuxtLink to="https://wa.me/p/8339549749457198/79143348185" class="relative block">
                        <div class="overflow-hidden">
                            <img src="\images\tovars\psyco.jpg" alt="psycophoto"
                                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <!-- Круг со стрелкой -->
                        <div
                            class="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </NuxtLink>
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2 italic">Отделение Психологии</h3>
                        <div class="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto my-3 rounded-full">
                        </div>
                        <p class="text-gray-600 text-base">Терапевтические занятия для детей и взрослых с
                            профессиональными психологами</p>
                    </div>
                </div>

                <!-- Карточка 8 -->
                <div
                    class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 group">
                    <NuxtLink to="https://wa.me/p/8587793581285998/79143348185" class="relative block">
                        <div class="overflow-hidden">
                            <img src="\images\tovars\school.jpg" alt="Подготовка к школе"
                                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <!-- Круг со стрелкой -->
                        <div
                            class="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </NuxtLink>
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2 italic">Подготовка к школе</h3>
                        <div class="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto my-3 rounded-full">
                        </div>
                        <p class="text-gray-600 text-base">Комплексная подготовка: математика, чтение, письмо, развитие
                            речи и психических процессов</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* Анимация плавающих кругов */
@keyframes float {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    33% {
        transform: translateY(-10px) rotate(3deg);
    }

    66% {
        transform: translateY(5px) rotate(-3deg);
    }
}

.animate-float {
    animation: float 8s ease-in-out infinite;
}

/* Анимация появления заголовка */
@keyframes fade-in-down {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-down {
    animation: fade-in-down 0.6s ease-out forwards;
}
</style>
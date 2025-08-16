<template>
    <div>
        <section
            class="min-h-screen flex items-center justify-center bg-white px-6 py-24 transition-colors duration-300 ">
            <div class="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-12">


                <div class="flex-1 text-center lg:text-left animate-fade-in-up">
                    <h1 class="text-4xl sm:text-4xl font-extrabold text-black mb-4">
                        Английский для <span
                            class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent italic font-medium">
                            детей и подростков</span>
                    </h1>
                    <p class="text-lg sm:text-xl text-black dark:text-black mb-6 max-w-xl">
                        Индивидуальные уроки с сильными
                        преподавателями
                    </p>


                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <NuxtLink to="https://taplink.cc/dlc_studio.ndg"
                            class="px-12 py-6 text-white text-xl bg-gradient-to-r from-purple-600 to-pink-500 click:brightness-110 hover:brightness-110 rounded-xl font-semibold transition-transform transform hover:scale-105 shadow-md">
                            Записаться на курс
                        </NuxtLink>
                    </div>



                </div>


                <div class="flex-1 flex justify-center animate-float">
                    <img src="\images\tovars\logo.jpg" alt="Logo" class="w-76 h-76 object-cover" />
                </div>
            </div>
        </section>
        <section class="py-48  bg-gradient-to-r from-purple-600 to-pink-500 pt-72 relative" id="services">
            <!-- Геометрические формы -->
            <div class="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white opacity-20"></div>
            <div class="absolute top-1/4 right-10 w-32 h-32 rotate-45 bg-white opacity-10"></div>
            <div class="absolute bottom-1/4 left-10 w-32 h-32 rotate-45 bg-white opacity-10"></div>

            <div class="container mx-auto px-4">
                <div class="container mx-auto px-4">
                    <h2 class="text-5xl font-bold text-white mb-12 text-center italic">Наши курсы</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Карточка 1 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <NuxtLink to="https://wa.me/p/8026492284116732/79143348185" class="relative group">
                                <img src="\images\tovars\prodlenka.jpg" alt="prodlenkaphoto"
                                    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
                                <!-- Черный круг со стрелкой -->
                                <div
                                    class="absolute top-3 right-3 w-8 h-8 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" transform="rotate(-45 10 10)" />
                                    </svg>
                                </div>
                            </NuxtLink>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-medium text-gray-800 mb-2">Курс <span class="italic">"DLC
                                        Продлёнка"</span></h3>
                                <p class="text-gray-700 text-base">Группа продлённого дня для школьников 1 - 4 классов.
                                </p>
                            </div>
                        </div>

                        <!-- Карточка 2 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <NuxtLink to="https://wa.me/p/8264442663676230/79143348185" class="relative group">
                                <img src="\images\tovars\english.jpg" alt="englishphoto"
                                    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
                                <!-- Черный круг со стрелкой -->
                                <div
                                    class="absolute top-3 right-3 w-8 h-8 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" transform="rotate(-45 10 10)" />
                                    </svg>
                                </div>
                            </NuxtLink>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-medium text-gray-800 mb-2 italic">Отделение Английского языка
                                </h3>
                                <p class="text-gray-700 text-base"></p>
                            </div>
                        </div>

                        <!-- Карточка 3 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <NuxtLink to="https://wa.me/p/8301684446553594/79143348185" class="relative group">
                                <img src="\images\tovars\bigenglish.jpg" alt="bigenglishphoto"
                                    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
                                <!-- Черный круг со стрелкой -->
                                <div
                                    class="absolute top-3 right-3 w-8 h-8 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" transform="rotate(-45 10 10)" />
                                    </svg>
                                </div>
                            </NuxtLink>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-medium text-gray-800 mb-2"><span class="italic">"Adults"</span>
                                    Английский для взрослых</h3>
                                <p class="text-gray-700 text-base">
                                </p>
                            </div>
                        </div>
                        <!-- Карточка 4 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <NuxtLink to="https://wa.me/p/26967991189482934/79143348185" class="relative group">
                                <img src="\images\tovars\sunduk.jpg" alt="sundukphoto"
                                    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
                                <!-- Черный круг со стрелкой -->
                                <div
                                    class="absolute top-3 right-3 w-8 h-8 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" transform="rotate(-45 10 10)" />
                                    </svg>
                                </div>
                            </NuxtLink>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-medium text-gray-800 mb-2">Арт - мастерская <span
                                        class="italic">"Волшебный сундучок"</span>
                                </h3>
                                <p class="text-gray-700 text-base">Творчество - это поток любви, выливающийся через
                                    кисти
                                    групп.</p>
                            </div>
                        </div>
                        <!-- Карточка 5 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <NuxtLink to="https://wa.me/p/8243289065739646/79143348185" class="relative group">
                                <img src="\images\tovars\academy.jpg" alt="academyphoto"
                                    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
                                <!-- Черный круг со стрелкой -->
                                <div
                                    class="absolute top-3 right-3 w-8 h-8 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" transform="rotate(-45 10 10)" />
                                    </svg>
                                </div>
                            </NuxtLink>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-medium text-gray-800 mb-2 italic">Школа раннего развития</h3>
                                <p class="text-gray-700 text-base"></p>
                            </div>
                        </div>
                        <!-- Карточка 6 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <NuxtLink to="https://wa.me/p/8561121723937394/79143348185" class="relative group">
                                <img src="\images\tovars\summer.jpg" alt="summerphoto"
                                    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
                                <!-- Черный круг со стрелкой -->
                                <div
                                    class="absolute top-3 right-3 w-8 h-8 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" transform="rotate(-45 10 10)" />
                                    </svg>
                                </div>
                            </NuxtLink>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-medium text-gray-800 mb-2 italic">Летнии курсы</h3>
                                <p class="text-gray-700 text-base"></p>
                            </div>
                        </div>
                        <!-- карточка 7 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <NuxtLink to="https://wa.me/p/8339549749457198/79143348185" class="relative group">
                                <img src="\images\tovars\psyco.jpg" alt="psycophoto"
                                    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
                                <!-- Черный круг со стрелкой -->
                                <div
                                    class="absolute top-3 right-3 w-8 h-8 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" transform="rotate(-45 10 10)" />
                                    </svg>
                                </div>
                            </NuxtLink>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-medium text-gray-800 mb-2 italic">Отделение Психологии</h3>
                                <p class="text-gray-700 text-base">Терапевтические занятия.</p>
                            </div>
                        </div>
                        <!-- карточка 8 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <NuxtLink to="https://wa.me/p/8587793581285998/79143348185" class="relative group">
                                <img src="\images\tovars\school.jpg" alt="Lorem Ipsum"
                                    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
                                <!-- Черный круг со стрелкой -->
                                <div
                                    class="absolute top-3 right-3 w-8 h-8 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" transform="rotate(-45 10 10)" />
                                    </svg>
                                </div>
                            </NuxtLink>
                            <div class="p-6 text-center">
                                <h3 class="text-xl font-medium text-gray-800 mb-2 italic">Подготовка к школе</h3>
                                <p class="text-gray-700 text-base">Математический блок, обучение чтению, подготовка руки
                                    к
                                    письму, развитие речи и развитие психических процессов.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        <section id="about" class="mx-auto mt-24 max-w-[1440px] min-w-[280px] py-8 px-4 sm:px-8 md:px-10 lg:0px-20 ">
            <div
                class="border-b border-gray-400 w-full bg-white flex flex-col lg:flex-row  items-center  py-6 sm:py-9 md:py-11 lg:py-14  px-2  sm:px-4 md:px-8 xl:px-16">
                <img class="w-full lg:w-1/2 xl:w-full max-w-[550px] lg:order-2 rounded-full"
                    src="\images\tovars\olga.jpg" alt="teacher">
                <div class="text-center md:text-left">
                    <h1
                        class="text-gray-800 text-4xl leading-[48px] md:text-5xl md:leading-[58px] lg:text-[50px] lg:leading-[70px] font-bold mb-6 md:mb-12">
                        Студия, созданная преподавателем
                    </h1>
                    <br>
                    <p class="text-xl leading-[27px] text-gray-700  font-normal sm:text-[24px] mb-8 md:mb-12">
                        Наша студия работает с 2010 года. Мы знаем все тонкости обучения и выбираем лучших
                        преподавателей для своих студентов.

                    </p>

                </div>
            </div>
            <div
                class="flex flex-col lg:flex-row gap-8 items-start bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div class="flex flex-col lg:flex-row gap-8 w-full"> <!-- Добавлен flex-row -->
                    <!-- Первый текстовый блок -->
                    <div class="lg:w-1/2 space-y-4">
                        <h3 class="text-2xl lg:text-3xl font-bold text-gray-800">Английский язык на практике</h3>

                        <p class="text-xl text-gray-700">
                            Мы делаем ставку на живое общение, разговорную практику в реальных ситуациях и программу,
                            которую учитель адаптирует лично под вас.
                        </p>
                    </div>

                    <!-- Второй текстовый блок -->
                    <div class="lg:w-1/2 space-y-4">
                        <h3 class="text-2xl lg:text-3xl font-bold text-gray-800">Говорите по-английски уверенно</h3>
                        <p class="text-xl text-gray-700">
                            Учим красивому и правильному языку, чтобы ваши собеседники улыбались искренне,
                            а не из-за смешного английского.
                        </p>
                    </div>
                </div>
            </div>

        </section>



        <section id="teachers">
            <TestimonialsCarousel />
        </section>




        <section>
            <FAQ />
        </section>





    </div>
</template>

<script setup>
import FAQ from '@/components/FAQ.vue';
import TestimonialsCarousel from '@/components/TestimonialsCarousel.vue';
</script>

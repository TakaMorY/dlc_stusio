<template>
    


        <section id="about"
            class="relative mx-auto mt-24 max-w-[1440px] min-w-[280px] py-8 px-4 sm:px-8 md:px-10 lg:px-20 overflow-hidden "
            ref="aboutSection">
            <!-- Анимированный фон -->
            <div class="absolute inset-0 z-0 opacity-10">
                <div
                    class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply animate-pulse">
                </div>
                <div
                    class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply animate-pulse delay-1000">
                </div>
                <div
                    class="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply animate-pulse delay-2000">
                </div>
            </div>

            <!-- Градиентный оверлей -->
            <div class="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 z-0"></div>

            <!-- Главный блок -->
            <div class="relative border-b border-gray-300/50 w-full bg-white/80 backdrop-blur-sm flex flex-col lg:flex-row items-center py-6 sm:py-9 md:py-11 lg:py-14 px-2 sm:px-4 md:px-8 xl:px-16 rounded-2xl shadow-lg transform transition-all duration-1000"
                :class="isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
                <!-- Изображение -->
                <div class="w-full lg:w-1/2 xl:w-full max-w-[550px] lg:order-2 relative">
                    <div
                        class="absolute -inset-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-lg animate-pulse delay-1500">
                    </div>
                    <img class="w-full rounded-full shadow-xl relative z-10 transform transition-all duration-700"
                        :class="isInView ? 'scale-100 rotate-0' : 'scale-90 rotate-6'" src="/images/tovars/olga.jpg"
                        alt="Основатель студии">
                    <!-- Декоративные элементы -->
                    <div class="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-full animate-bounce delay-1000">
                    </div>
                    <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full animate-ping delay-2000">
                    </div>
                </div>

                <!-- Текст -->
                <div class="text-center md:text-left mt-8 lg:mt-0 lg:mr-12">
                    <h1 class="text-gray-800 text-4xl leading-[48px] md:text-5xl md:leading-[58px] lg:text-[50px] lg:leading-[70px] font-bold mb-6 md:mb-12 transform transition-all duration-700 delay-150"
                        :class="isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'">
                        Школа, созданная преподавателем
                    </h1>

                    <p class="text-xl leading-[27px] text-gray-700 font-normal sm:text-[24px] mb-8 md:mb-12 transform transition-all duration-700 delay-300"
                        :class="isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'">
                        Наша школа работает с 2010 года. Мы знаем все тонкости обучения и выбираем лучших
                        преподавателей для своих студентов.
                    </p>

                    <!-- Дополнительная информация -->
                    <div class="flex flex-wrap gap-4 justify-center md:justify-start transform transition-all duration-700 delay-500"
                        :class="isInView ? 'opacity-100' : 'opacity-0'">
                        <div class="flex items-center gap-2 px-4 py-2 rounded-full">
                            <div class="w-3 h-3 bg-purple-700 rounded-full animate-pulse delay-2000"></div>
                            <span class="text-gray-800 font-medium ">15 лет опыта</span>
                        </div>
                        <div class="flex items-center gap-2  px-4 py-2 rounded-full">
                            <div class="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-2000"></div>
                            <span class="text-gray-800 font-medium">Профессиональная команда</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Нижний блок с преимуществами -->
            <div class="flex flex-col lg:flex-row gap-8 items-start bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 mt-8 transform transition-all duration-1000 delay-300"
                :class="isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
                <div class="flex flex-col lg:flex-row gap-8 w-full">
                    <!-- Первый текстовый блок -->
                    <div class="lg:w-1/2 space-y-6 transform transition-all duration-700 delay-500"
                        :class="isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                    </path>
                                </svg>
                            </div>
                            <h3 class="text-2xl lg:text-3xl font-bold text-gray-800">Английский язык на практике</h3>
                        </div>
                        <p class="text-xl text-gray-700 pl-15">
                            Мы делаем ставку на живое общение, разговорную практику в реальных ситуациях и программу,
                            которую учитель адаптирует лично под вас.
                        </p>
                    </div>

                    <!-- Второй текстовый блок -->
                    <div class="lg:w-1/2 space-y-6 transform transition-all duration-700 delay-700"
                        :class="isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl lg:text-3xl font-bold text-gray-800">Говорите по-английски уверенно</h3>
                        </div>
                        <p class="text-xl text-gray-700 pl-15">
                            Учим красивому и правильному языку, чтобы ваши собеседники улыбались искренне,
                            а не из-за смешного английского.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Плавающие элементы -->
            <div class="absolute top-10 left-10 w-6 h-6 bg-pink-400 rounded-full opacity-40 animate-bounce delay-1000">
            </div>
            <div
                class="absolute bottom-20 right-20 w-8 h-8 bg-purple-500 rounded-full opacity-30 animate-ping delay-2000">
            </div>

        </section>
    
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const aboutSection = ref(null)
const isInView = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isInView.value = true
                observer.disconnect()
            }
        },
        { threshold: 0.2 }
    )

    if (aboutSection.value) {
        observer.observe(aboutSection.value)
    }

    onUnmounted(() => {
        if (aboutSection.value) {
            observer.disconnect()
        }
    })
})
</script>

<style scoped>
.backdrop-blur-sm {
    backdrop-filter: blur(4px);
}

/* Плавные переходы для трансформаций */
.transform {
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
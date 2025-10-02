<template>
    <div
        class="w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-purple-300 to-white">
        <!-- Улучшенные декоративные элементы -->
        <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 bg-purple-400 rounded-full opacity-20 animate-float">
            </div>
            <div class="absolute bottom-20 right-16 w-16 h-16 md:w-24 md:h-24 bg-blue-400 rounded-full opacity-30 animate-float"
                style="animation-delay: 2s;"></div>
            <div class="absolute top-1/3 left-1/4 w-20 h-20 md:w-28 md:h-28 bg-pink-400 rounded-full opacity-25 animate-float"
                style="animation-delay: 4s;"></div>
            <div class="absolute top-2/3 right-1/3 w-16 h-16 md:w-20 md:h-20 bg-purple-400 rounded-full opacity-20 animate-float"
                style="animation-delay: 1s;"></div>

            <!-- Волны -->
            <div class="absolute bottom-0 left-0 w-full opacity-10">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-12 md:h-20">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        class="fill-purple-500" opacity="0.25"></path>
                </svg>
            </div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
            <!-- Заголовок -->
            <div class="text-center mb-12 md:mb-16">
                <div class="inline-block relative">
                    <h2
                        class="text-3xl md:text-5xl font-bold text-gray-800 mb-4 italic animate-fade-in-down relative z-10 px-4">
                        Наши курсы
                    </h2>
                    <div
                        class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    </div>
                    <div
                        class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60">
                    </div>
                </div>
                <p class="text-lg md:text-xl text-gray-600 mt-6 md:mt-8 max-w-2xl mx-auto px-4">
                    Откройте для себя разнообразие образовательных программ, созданных для вашего успеха
                </p>
            </div>

            <!-- Горизонтальный слайдер курсов -->
            <div class="relative">
                <!-- Навигационные стрелки - скрыты на мобильных -->
                <button @click="scrollLeft"
                    class="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
                    :disabled="isScrolling">
                    <svg class="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button @click="scrollRight"
                    class="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
                    :disabled="isScrolling">
                    <svg class="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Контейнер слайдера -->
                <div ref="slider"
                    class="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-6 pb-6 md:pb-8 snap-x snap-mandatory scroll-smooth px-2 md:px-0"
                    style="scrollbar-width: none; -ms-overflow-style: none;" @scroll="handleScroll"
                    @touchstart="stopAutoScroll" @touchend="startAutoScroll" @wheel="stopAutoScroll">
                    <!-- Курсы -->
                    <div v-for="(course, index) in courses" :key="index"
                        class="flex-shrink-0 w-[280px] md:w-80 snap-center group">
                        <div
                            class="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl border border-gray-100">
                            <!-- Верхняя часть с изображением -->
                            <div class="relative h-40 md:h-48 overflow-hidden">
                                <img :src="course.image" :alt="course.title"
                                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>

                                <!-- Бейдж категории -->
                                <div class="absolute top-3 left-3 md:top-4 md:left-4">
                                    <span
                                        class="px-2 py-1 md:px-3 md:py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-purple-600 shadow-sm">
                                        {{ course.category }}
                                    </span>
                                </div>

                                <!-- Кнопка действия -->
                                <div
                                    class="absolute bottom-3 right-3 md:bottom-4 md:right-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <NuxtLink :to="course.link"
                                        class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                                        <svg class="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </NuxtLink>
                                </div>
                            </div>

                            <!-- Контент -->
                            <div class="p-4 md:p-6">
                                <h3
                                    class="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 leading-tight group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                                    {{ course.title }}
                                </h3>

                                <!-- Разделитель -->
                                <div class="flex items-center space-x-2 mb-3 md:mb-4">
                                    <div
                                        class="w-6 md:w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                                    </div>
                                    <div
                                        class="w-3 md:w-4 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                                    </div>
                                    <div class="w-2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                                    </div>
                                </div>

                                <p class="text-gray-600 text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
                                    {{ course.description }}
                                </p>

                                <!-- Дополнительная информация -->
                                <div class="flex items-center justify-between text-xs md:text-sm text-gray-500">
                                    <div class="flex items-center space-x-1">
                                        <svg class="w-3 h-3 md:w-4 md:h-4 text-purple-500" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span class="whitespace-nowrap">{{ course.duration }}</span>
                                    </div>

                                    <div class="flex items-center space-x-1">
                                        <svg class="w-3 h-3 md:w-4 md:h-4 text-pink-500" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span class="whitespace-nowrap">{{ course.groupSize }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Акцентная полоса внизу -->
                            <div
                                class="h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Навигационные точки -->
            <div class="flex justify-center space-x-2 md:space-x-3 mt-6 md:mt-8">
                <button v-for="(_, index) in courses" :key="index" @click="scrollToSlide(index)"
                    class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300"
                    :class="activeSlide === index ? 'bg-purple-600 w-6 md:w-8' : 'bg-purple-300'"
                    :disabled="isScrolling"></button>
            </div>

            <!-- Мобильные навигационные кнопки -->
            <div class="flex md:hidden justify-center space-x-4 mt-6">
                <button @click="scrollLeft"
                    class="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
                    :disabled="isScrolling">
                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button @click="scrollRight"
                    class="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
                    :disabled="isScrolling">
                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slider = ref(null)
const activeSlide = ref(0)
const isScrolling = ref(false)
const scrollTimeout = ref(null)
const autoScrollInterval = ref(null)
const isUserInteracting = ref(false)

const courses = [
    {
        title: "Отделение Английского языка",
        description: "Погрузитесь в мир английского языка с нашими профессиональными преподавателями",
        image: "/images/tovars/english.jpg",
        link: "https://wa.me/p/8264442663676230/79143348185",
        category: "Языки",
        duration: "1-2 года",
        groupSize: "6-8 человек"
    },
    {
        title: "Английский для взрослых",
        description: "Современные программы изучения английского для взрослых любого уровня",
        image: "/images/tovars/bigenglish.jpg",
        link: "https://wa.me/p/8301684446553594/79143348185",
        category: "Языки",
        duration: "Индивидуально",
        groupSize: "1-4 человека"
    },
    {
        title: 'Арт-мастерская "Волшебный сундучок"',
        description: "Творчество - это поток любви, выливающийся через кисти наших юных художников",
        image: "/images/tovars/sunduk.jpg",
        link: "https://wa.me/p/26967991189482934/79143348185",
        category: "Творчество",
        duration: "9 месяцев",
        groupSize: "6-10 человек"
    },
    {
        title: "Школа раннего развития",
        description: "Комплексные программы для гармоничного развития вашего ребенка",
        image: "/images/tovars/academy.jpg",
        link: "https://wa.me/p/8243289065739646/79143348185",
        category: "Развитие",
        duration: "1 год",
        groupSize: "6-8 человек"
    },
    {
        title: "Летние курсы",
        description: "Интенсивные программы для продуктивного летнего отдыха и обучения",
        image: "/images/tovars/summer.jpg",
        link: "https://wa.me/p/8561121723937394/79143348185",
        category: "Интенсивы",
        duration: "1-2 месяца",
        groupSize: "8-12 человек"
    },
    {
        title: "Отделение Психологии",
        description: "Терапевтические занятия для детей и взрослых с профессиональными психологами",
        image: "/images/tovars/psyco.jpg",
        link: "https://wa.me/p/8339549749457198/79143348185",
        category: "Психология",
        duration: "Индивидуально",
        groupSize: "1-2 человека"
    },
    {
        title: "Подготовка к школе",
        description: "Комплексная подготовка: математика, чтение, письмо, развитие речи и психических процессов",
        image: "/images/tovars/school.jpg",
        link: "https://wa.me/p/8587793581285998/79143348185",
        category: "Подготовка",
        duration: "1 год",
        groupSize: "6-8 человек"
    }
]

const calculateSlideWidth = () => {
    return window.innerWidth < 768 ? 280 + 16 : 320 + 24
}

const getMaxScroll = () => {
    if (!slider.value) return 0
    return slider.value.scrollWidth - slider.value.clientWidth
}

const scrollLeft = () => {
    if (slider.value && !isScrolling.value) {
        isScrolling.value = true
        const slideWidth = calculateSlideWidth()
        const currentScroll = slider.value.scrollLeft
        const targetScroll = Math.max(0, currentScroll - slideWidth)

        slider.value.scrollTo({ left: targetScroll, behavior: 'smooth' })

        clearTimeout(scrollTimeout.value)
        scrollTimeout.value = setTimeout(() => {
            isScrolling.value = false
            updateActiveSlide()
        }, 500)
    }
}

const scrollRight = () => {
    if (slider.value && !isScrolling.value) {
        isScrolling.value = true
        const slideWidth = calculateSlideWidth()
        const currentScroll = slider.value.scrollLeft
        const maxScroll = getMaxScroll()
        const targetScroll = Math.min(maxScroll, currentScroll + slideWidth)

        slider.value.scrollTo({ left: targetScroll, behavior: 'smooth' })

        clearTimeout(scrollTimeout.value)
        scrollTimeout.value = setTimeout(() => {
            isScrolling.value = false
            updateActiveSlide()
        }, 500)
    }
}

const scrollToSlide = (index) => {
    if (slider.value && !isScrolling.value) {
        isScrolling.value = true
        const slideWidth = calculateSlideWidth()
        const targetScroll = index * slideWidth

        slider.value.scrollTo({ left: targetScroll, behavior: 'smooth' })

        clearTimeout(scrollTimeout.value)
        scrollTimeout.value = setTimeout(() => {
            isScrolling.value = false
            activeSlide.value = index
        }, 500)
    }
}

const updateActiveSlide = () => {
    if (slider.value && !isScrolling.value) {
        const slideWidth = calculateSlideWidth()
        const scrollPosition = slider.value.scrollLeft
        const maxScroll = getMaxScroll()

        // Более точное определение активного слайда с учетом границ
        let newActiveSlide = Math.round(scrollPosition / slideWidth)

        // Убедимся, что при достижении конца показывается последний слайд
        if (scrollPosition >= maxScroll - 10) { // 10px допуск для округления
            newActiveSlide = courses.length - 1
        }

        // Ограничиваем диапазон
        newActiveSlide = Math.max(0, Math.min(courses.length - 1, newActiveSlide))

        if (newActiveSlide !== activeSlide.value) {
            activeSlide.value = newActiveSlide
        }
    }
}

const handleScroll = () => {
    if (!isScrolling.value) {
        updateActiveSlide()
    }
}

const stopAutoScroll = () => {
    isUserInteracting.value = true
    if (autoScrollInterval.value) {
        clearInterval(autoScrollInterval.value)
        autoScrollInterval.value = null
    }
}

const startAutoScroll = () => {
    if (!autoScrollInterval.value && !isUserInteracting.value) {
        autoScrollInterval.value = setInterval(() => {
            if (activeSlide.value < courses.length - 1) {
                scrollRight()
            } else {
                scrollToSlide(0)
            }
        }, 7000)
    }

    // Перезапускаем автоскролл через 3 секунды после взаимодействия
    setTimeout(() => {
        isUserInteracting.value = false
        startAutoScroll()
    }, 7000)
}

// Добавляем Resize Observer для пересчета при изменении размера окна
let resizeObserver

onMounted(() => {
    if (slider.value) {
        slider.value.addEventListener('scroll', handleScroll)

        // Следим за изменением размера окна
        resizeObserver = new ResizeObserver(() => {
            updateActiveSlide()
        })
        resizeObserver.observe(slider.value)

        // Запускаем автоскролл через 2 секунды после загрузки
        setTimeout(() => {
            startAutoScroll()
        }, 2000)
    }
})

onUnmounted(() => {
    if (autoScrollInterval.value) {
        clearInterval(autoScrollInterval.value)
    }
    if (scrollTimeout.value) {
        clearTimeout(scrollTimeout.value)
    }
    if (resizeObserver) {
        resizeObserver.disconnect()
    }
})
</script>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

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
    animation: fade-in-down 0.8s ease-out forwards;
}

/* Плавные переходы */
* {
    transition-property: color, background-color, border-color, transform, box-shadow, opacity;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Улучшенный ховер-эффект */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

.group:hover .group-hover\:translate-y-0 {
    transform: translateY(0);
}

/* Обрезка текста */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Стили для отключенных кнопок */
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
}

button:disabled:hover {
    transform: none !important;
    box-shadow: none !important;
}

/* Улучшенная поддержка мобильных устройств */
@media (max-width: 640px) {
    .snap-x {
        scroll-padding: 0 1rem;
    }
}
</style>
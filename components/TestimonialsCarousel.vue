<template>
    <section class="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <!-- Декоративные элементы -->
        <div
            class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2">
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <!-- Заголовок -->
            <div class="text-center mb-20">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 italic mb-4 animate-fade-in-down">Наши
                    преподаватели</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s">
                    Вам не нужно переживать о квалификации педагогов — все учителя прошли строгий отбор.
                </p>
            </div>

            <!-- Карусель -->
            <div class="relative h-[600px]">
                <div v-for="(teacher, index) in teachers" :key="index"
                    class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md transition-all duration-700 ease-out"
                    :style="getCardStyle(index)" @click="setActiveIndex(index)">
                    <div class="bg-white p-8 rounded-3xl shadow-2xl h-full transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                        :class="{ 'ring-2 ring-purple-300': activeIndex === index }">
                        <!-- Аватар -->
                        <div class="relative mb-6">
                            <div
                                class="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-r from-purple-300 to-pink-200 rounded-2xl transform -rotate-6">
                            </div>
                            <div
                                class="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-r from-purple-300 to-pink-200 rounded-2xl transform rotate-6">
                            </div>
                            <img :src="teacher.avatar || '/images/default-avatar.jpg'" :alt="teacher.name"
                                class="relative z-10 w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-md"
                                loading="lazy">
                        </div>

                        <!-- Информация -->
                        <div class="space-y-4">
                            <div>
                                <h3 class="text-xl font-bold text-gray-900">{{ teacher.name }}</h3>
                                <p class="text-purple-500 font-medium">{{ teacher.specialization }}</p>
                            </div>

                            <p class="text-gray-700">{{ teacher.description }}</p>

                            <div class="pt-4">
                                <span class="text-sm text-gray-400">Стаж работы: {{ teacher.experience }} лет</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Навигация -->
            <div class="flex justify-center mt-12 space-x-4">
                <button v-for="(_, index) in teachers" @click="setActiveIndex(index)"
                    class="w-3 h-3 rounded-full transition-all duration-300 relative" :class="{
                        'bg-gradient-to-r from-purple-500 to-pink-300 scale-125': activeIndex === index,
                        'bg-gray-300 hover:bg-gray-400': activeIndex !== index
                    }">
                    <span v-if="activeIndex === index"
                        class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-300 animate-ping opacity-30"></span>
                </button>
            </div>

            <!-- Кнопки управления -->
            <!-- Кнопки управления -->
            <button @click="prev"
                class="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all z-20 group">
                <svg class="w-6 h-6 text-gray-700 group-hover:text-purple-400 transition-colors" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button @click="next"
                class="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all z-20 group">
                <svg class="w-6 h-6 text-gray-700 group-hover:text-purple-400 transition-colors" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </section>
</template>

<script setup>
const teachers = [
    {
        name: 'Дарья Владимировна',
        avatar: '/images/teachers/daria.jpg',
        specialization: 'Заместитель директора студии',
        description: 'Руководитель школы раннего развития. Преподаватель английского языка.',
        experience: 8
    },
    {
        name: 'Ольга Алексеевна',
        avatar: '/images/teachers/olgateachers.jpg',
        specialization: 'Директор и основатель студии',
        description: 'Преподаватель Английского языка высшей категории. Эксперт ЕГЭ и ОГЭ.',
        experience: 15
    },
    {
        name: 'Наталья Александровна',
        avatar: '/images/teachers/natalya.jpg',
        specialization: 'Детский психолог, гештальт-терапевт, нейропсихолог, психолог-педагог, арт-терапевт',
        description: 'Специалист по детско - родительским отношениям. Преподаватель школы раннего развития.',
        experience: 10
    },
    {
        name: 'Мирослава Демьяновна',
        avatar: '/images/teachers/admin.jpg',
        specialization: 'Администратор студии',
        description: '',
        experience: 3
    },
    {
        name: 'Дарья Игоревна',
        avatar: '/images/teachers/dariai.jpg',
        specialization: 'Арт - мастерская',
        description: 'Преподаватель арт - мастерской "Волшебный сундучок".',
        experience: 5
    },
]

const activeIndex = ref(1)

// Навигация
const next = () => {
    activeIndex.value = (activeIndex.value + 1) % teachers.length
}

const prev = () => {
    activeIndex.value = (activeIndex.value - 1 + teachers.length) % teachers.length
}

const setActiveIndex = (index) => {
    activeIndex.value = index
}

// Стили для карточек
const getCardStyle = (index) => {
    const distance = index - activeIndex.value
    const rotation = distance * 5
    const xPos = distance * 120

    if (distance === 0) {
        return {
            transform: 'translateX(-50%) translateY(0) rotateY(0deg) scale(1)',
            zIndex: teachers.length,
            opacity: 1,
            filter: 'blur(0)'
        }
    } else {
        return {
            transform: `translateX(calc(-50% + ${xPos}px)) translateY(${Math.abs(distance) * 40}px) rotateY(${rotation}deg) scale(${1 - Math.abs(distance) * 0.1})`,
            zIndex: teachers.length - Math.abs(distance),
            opacity: 1 - Math.abs(distance) * 0.3,
            filter: `blur(${Math.abs(distance) * 0.5}px)`
        }
    }
}
</script>

<style scoped>
/* Анимации */
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: scale(0.9);
}



/* Кастомные анимации */
@keyframes fade-in-down {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-down {
    animation: fade-in-down 0.6s ease-out forwards;
}

@keyframes fade-in-up {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
}
</style>
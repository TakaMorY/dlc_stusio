<template>
    <section
        class="min-h-screen w-full flex items-center justify-center relative overflow-hidden ">
        <!-- Фоновые элементы -->
        <div class="absolute inset-0 z-0 opacity-50">
            <div class="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply animate-pulse">
            </div>

            <div
                class="absolute bottom-10 left-64 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply animate-pulse ">
            </div>
        </div>

        <div class="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10 px-6 py-24">
            <!-- Текстовый блок -->
            <div class="flex-1 text-center lg:text-left">
                <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 transition-all duration-700 transform opacity-0 translate-y-10"
                    :class="{ 'opacity-100 translate-y-0': isVisible }">
                    Английский для <span
                        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent italic font-medium">
                        детей и подростков</span>
                </h1>

                <p class="text-lg sm:text-xl text-gray-700 mb-6 max-w-xl transition-all duration-700 transform opacity-0 translate-y-10 delay-100"
                    :class="{ 'opacity-100 translate-y-0': isVisible }">
                    Индивидуальные уроки с сильными преподавателями
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 transform opacity-0 translate-y-10 delay-200"
                    :class="{ 'opacity-100 translate-y-0': isVisible }">
                    <NuxtLink to="https://taplink.cc/dlc_studio.ndg"
                        class="px-8 py-4 text-white text-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">

                        Записаться на курс
                    </NuxtLink>
                </div>

                <!-- Дополнительная информация -->
                <div class="mt-6 md:mt-8 transition-all duration-700 transform opacity-0 translate-y-10 delay-300"
                    :class="{ 'opacity-100 translate-y-0': isVisible }">
                    <!-- Для мобильных - вертикальный список -->
                    <div class="flex flex-col gap-3 md:hidden">
                        <div class="flex items-center gap-3 p-2">
                            <div class="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0 animate-pulse"></div>
                            <span class="text-sm text-gray-600 leading-tight">Индивидуальный подход</span>
                        </div>
                        <div class="flex items-center gap-3 p-2">
                            <div class="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0 animate-pulse delay-150"></div>
                            <span class="text-sm text-gray-600 leading-tight">Опытные преподаватели</span>
                        </div>
                        <div class="flex items-center gap-3 p-2">
                            <div class="w-3 h-3 bg-indigo-500 rounded-full flex-shrink-0 animate-pulse delay-300"></div>
                            <span class="text-sm text-gray-600 leading-tight">Игровые занятия</span>
                        </div>
                        <div class="flex items-center gap-3 p-2">
                            <div class="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0 animate-pulse delay-450"></div>
                            <span class="text-sm text-gray-600 leading-tight">Гибкое расписание</span>
                        </div>
                    </div>

                    <!-- Для ПК - 2 колонки -->
                    <div class="hidden md:grid md:grid-cols-2 md:gap-2 max-w-md">
                        <div class="flex items-center gap-2 p-2">
                            <div class="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0 animate-pulse"></div>
                            <span class="text-base text-gray-700 leading-tight">Индивидуальный подход</span>
                        </div>
                        <div class="flex items-center gap-2 p-2">
                            <div class="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 animate-pulse delay-150"></div>
                            <span class="text-base text-gray-700 leading-tight">Опытные преподаватели</span>
                        </div>
                        <div class="flex items-center gap-2 p-2">
                            <div class="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0 animate-pulse delay-300"></div>
                            <span class="text-base text-gray-700 leading-tight">Игровые занятия</span>
                        </div>
                        <div class="flex items-center gap-2 p-2">
                            <div class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 animate-pulse delay-450"></div>
                            <span class="text-base text-gray-700 leading-tight">Гибкое расписание</span>
                        </div>
                    </div>
                </div>


            </div>

            <!-- Изображение -->
            <div class="flex-1 flex justify-center">
                <div class="relative">
                    <div class="absolute -inset-4 rounded-2xl opacity-30 ">
                    </div>
                    <img src="\images\tovars\logo2.jpg" alt="Логотип студии английского"
                        class="relative w-100 h-200 object-cover rounded-2xl shadow-xl transition-all duration-700 transform opacity-0 scale-95 delay-150"
                        :class="{ 'opacity-100 scale-100': isVisible }" />

                    <!-- Декоративные элементы -->
                    <div
                        class="absolute -top-4 -right-4 w-16 h-16 bg-purple-600 rounded-full mix-blend-multiply opacity-20 animate-bounce delay-1500">
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    // Активируем анимации после монтирования компонента
    setTimeout(() => {
        isVisible.value = true
    }, 100)
})
</script>

<style scoped>
/* Минимальные кастомные стили */
.bg-gradient-to-br {
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.mix-blend-multiply {
    mix-blend-mode: multiply;
}
</style>

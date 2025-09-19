<template>
    <div
        class="w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <!-- Декоративные элементы фона -->
        <div class="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-float"
            style="animation-delay: 0.5s;"></div>
        <div class="absolute bottom-20 right-16 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-float"
            style="animation-delay: 1s;"></div>
        <div class="absolute top-1/3 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-25 animate-float"
            style="animation-delay: 1.5s;"></div>

        <div class="max-w-4xl mx-auto relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800 animate-fade-in-down">
                Часто задаваемые вопросы
            </h2>

            <div class="space-y-4 md:space-y-6">
                <div v-for="(item, index) in faqItems" :key="index"
                    class="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 bg-white">
                    <button @click="toggleItem(index)"
                        class="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                        aria-expanded="activeIndex === index" :aria-controls="'faq-item-' + index">
                        <span class="text-xl md:text-2xl font-semibold text-gray-800 text-left">
                            {{ item.question }}
                        </span>
                        <span class="ml-4 shrink-0">
                            <svg class="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 text-gray-600"
                                :class="{ 'transform rotate-180': activeIndex === index }" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </span>
                    </button>

                    <transition enter-active-class="transition duration-200 ease-out"
                        enter-from-class="transform opacity-0 -translate-y-2"
                        enter-to-class="transform opacity-100 translate-y-0"
                        leave-active-class="transition duration-150 ease-in"
                        leave-from-class="transform opacity-100 translate-y-0"
                        leave-to-class="transform opacity-0 -translate-y-2">
                        <div v-show="activeIndex === index" :id="'faq-item-' + index"
                            class="px-6 pb-6 md:px-8 md:pb-8 pt-0 bg-gray-50">
                            <p class="text-gray-900 text-lg md:text-xl leading-relaxed">
                                {{ item.answer }}
                            </p>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const faqItems = [
    {
        question: "Делаете ли вы перерасчет, если ребёнок отсутствует?",
        answer: "Перерасчеты у нас не предусмотрены, независимо от причин отсутствия."
    },
    {
        question: "По каким учебникам работает студия?",
        answer: "На занятиях по Английскому языку преподаватели используют преимущественно учебные материалы зарубежных изданий. При подготовке детей к школе используются различные программы, которые соответствуют ФГОС(Федеральным государственным образовательным стандартам) дошкольного образования. Для каждой группы УМК подбирается Методистом индивидуально, исходя из уровня подготовки и потребностей каждой конкретной группы."
    },
    {
        question: "Как записаться на занятия в студию?",
        answer: "Для того чтобы начать обучение, необходимо заполнить анкету на таплинк (TL) и написать на WhatsApp. Далее мы приглашаем на собеседование-тестирование, где Преподаватель оценит текущий уровень ребенка и подберет подходящий формат обучения. Родители же смогут задать все интересующие вопросы по организации процесса обучения Преподавателю после тестирования."
    },
    {
        question: "Как составляется расписание?",
        answer: "Расписание составляется с учетом смены и школьного расписания ребёнка. Расписание кружков/доп.секций при формировании Расписания не учитывается."
    },
    {
        question: "В какое время проходят занятия для детей дошкольного возраста?",
        answer: "Группы дошкольного возраста занимаются в вечернее время. Начало занятий в 16:00 и позже."
    },
    {
        question: "Обязаны ли мы посещать летние курсы?",
        answer: "Летние курсы обязательны для посещения, если вы планируете продолжить обучение в Студии в новом учебном году. Вы можете выбрать один из летних месяцев для посещения одной из Летних программ."
    },
    {
        question: "Как у Вас формируются группы?",
        answer: "Группы формируются по результатам собеседования-тестирования, которое обязательно проходит каждый наш студент. Мы придерживаемся разноуровневого подхода, где ребята распределяются по группам с зависимости от текущих знаний, а не по классам или возрасту."
    },
    {
        question: "Возможна ли у Вас оплата материнским капиталом?",
        answer: "На данный момент оплатить обучение в Студии Материнским капиталом возможности нет."
    },
];

const activeIndex = ref(null);

const toggleItem = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

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

/* Анимация появления текста ответа */
@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 0.4s ease-out forwards;
    animation-delay: 0.1s;
}

/* Плавная анимация для высоты */
.transition-all {
    transition-property: all;
}
</style>
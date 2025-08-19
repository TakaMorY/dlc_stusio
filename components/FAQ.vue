<template>
    <div class="w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Часто задаваемые вопросы</h2>

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
        question: "Делаете ли Вы перерасчет, если ребёнок отсутствует?",
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
/* Убираем outline при фокусе */
button:focus {
    outline: none;
}

/* Плавная анимация */
.faq-item-enter-active,
.faq-item-leave-active {
    transition: all 0.3s ease;
}

.faq-item-enter-from,
.faq-item-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
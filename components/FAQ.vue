<template>
    <div class="w-full pt-48 px-4 sm:px-6">
        <h2 class="text-5xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
        

        <div class="max-w-6xl mx-auto">
            <div v-for="(item, index) in faqItems" :key="index" class="border-b border-gray-900">
                <div class="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 m-4"
                    :class="{ 'ring-2 ring-primary-500': activeIndex === index }">
                    <button @click="toggleItem(index)"
                        class="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-200">
                        <span class="text-3xl font-semibold text-gray-800">{{ item.question }}</span>
                        <span class="ml-6 shrink-0">
                            <svg class="w-6 h-6 transition-transform duration-300"
                                :class="{ 'transform rotate-180': activeIndex === index }" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </span>
                    </button>

                    <transition enter-active-class="transition duration-200 ease-out"
                        enter-from-class="transform opacity-0" enter-to-class="transform opacity-100"
                        leave-active-class="transition duration-150 ease-in" leave-from-class="transform opacity-100"
                        leave-to-class="transform opacity-0">
                        <div v-show="activeIndex === index" class="px-8 pb-8 pt-2 bg-gray-50">
                            <p class="text-gray-900 text-xl leading-relaxed">{{ item.answer }}</p>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>


<script setup>
const faqItems = [
    {
        question: "Вопрос?",
        answer: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        question: "Вопрос?",
        answer: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        question: "Вопрос?",
        answer: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        question: "Вопрос?",
        answer: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        question: "Вопрос?",
        answer: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        question: "Вопрос?",
        answer: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
];

const activeIndex = ref(null);

const toggleItem = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style>
/* Дополнительные стили, если нужно */
.ring-primary-500 {
    --tw-ring-color: #000000;
}
</style>
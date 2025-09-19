<template>
    <div>
        <section
            class="min-h-screen flex items-center justify-center bg-white  transition-colors duration-300 ">
            
            <HeroSection />
        </section>
        <section class="py-48 pt-72 relative" id="services">
            <!-- Геометрические формы -->
            <div class="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white opacity-20"></div>
            <div class="absolute top-1/4 right-10 w-32 h-32 rotate-45 bg-white opacity-10"></div>
            <div class="absolute bottom-1/4 left-10 w-32 h-32 rotate-45 bg-white opacity-10"></div>


            <CardsTovars />


            

        </section>
        <section id="about" class="mx-auto mt-24 max-w-[1440px] min-w-[280px] py-8 px-4 sm:px-8 md:px-10 lg:0px-20 ">
            <teacher />
            <!-- <div
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
                <div class="flex flex-col lg:flex-row gap-8 w-full">
                    
                    <div class="lg:w-1/2 space-y-4">
                        <h3 class="text-2xl lg:text-3xl font-bold text-gray-800">Английский язык на практике</h3>

                        <p class="text-xl text-gray-700">
                            Мы делаем ставку на живое общение, разговорную практику в реальных ситуациях и программу,
                            которую учитель адаптирует лично под вас.
                        </p>
                    </div>

                    
                    <div class="lg:w-1/2 space-y-4">
                        <h3 class="text-2xl lg:text-3xl font-bold text-gray-800">Говорите по-английски уверенно</h3>
                        <p class="text-xl text-gray-700">
                            Учим красивому и правильному языку, чтобы ваши собеседники улыбались искренне,
                            а не из-за смешного английского.
                        </p>
                    </div>
                </div>
            </div> -->

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
import HeroSection from '@/components/HeroSection.vue';
import teacher from '@/components/teacher.vue';
import CardsTovars from '@/components/CardsTovers.vue';
</script>

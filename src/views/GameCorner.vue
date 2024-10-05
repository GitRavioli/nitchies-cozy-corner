<template>
    <div class="min-h-screen bg-[#E7D9C4] flex flex-col items-center">
        <!-- Header Section -->
        <header class="relative w-full h-[40rem] bg-[#E7D9C4] bg-opacity-80 sm:h-[30rem] md:h-[35rem] lg:h-[50rem]">
            <div
                class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-bottom bg-[url('/Img/cozy_gamer.jpeg')] pointer-events-none">
            </div>

            <!-- Navigation -->
            <Navbar />

            <div class="absolute inset-0 flex justify-center items-center z-30 p-4 sm:p-6 lg:p-8">
                <div
                    class="bg-[#834458]/50 p-4 sm:p-5 rounded-lg shadow-lg max-w-md w-7/8 sm:w-2/3 lg:max-w-lg flex flex-col justify-center items-center">
                    <h2 class="text-base sm:text-md md:text-xl font-pixel text-white text-center sm:text-left mb-4">
                        Welcome to the Cozy Gaming Corner
                    </h2>
                    <p
                        class="mt-2 font-pixel-proper text-sm sm:text-base md:text-lg text-white text-center sm:text-left">
                        Welcome to a world where gaming meets relaxation. Enjoy peaceful adventures, heartwarming
                        stories, and slow-paced, soothing games. Whether you're tending virtual farms or exploring
                        dreamy landscapes, this is your place to unwind.
                        <br />
                        <br />
                        Grab a cup of tea, stay a while, and explore the games that bring calm to our busy days. 🌿
                    </p>
                </div>
            </div>
        </header>

        <div class="container mx-auto p-4">
            <!-- Main layout with 2 columns -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Left Column -->
                <div>
                    <!-- Currently Playing Section -->
                    <section class="mb-12">
                        <h2
                            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#5E5242] font-pixel mb-4">
                            Currently Playing
                        </h2>
                        <div
                            class="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 bg-[#8A5A35] p-6 rounded-lg shadow-lg">
                            <h2
                                class="text-md sm:text-sm md:text-lg lg:text-2xl font-bold text-center text-white font-pixel mb-4">
                                Stardew Valley
                            </h2>
                            <img src="/Img/stardew-valley-logo.webp" alt="Featured Game"
                                class="w-auto h-60 mx-auto mb-4 object-center object-contain rounded-md" />
                            <p class="text-xs sm:text-sm md:text-base lg:text-lg font-pixel-proper text-[#F1E9D3]">
                                Discover the magic of this cozy game that brings relaxation and fun!
                            </p>
                        </div>
                    </section>

                    <!-- Gameshelf Section -->
                    <section class="mb-12">
                        <h2
                            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-pixel font-bold text-center text-[#5E5242] mb-8">
                            Gameshelf
                        </h2>
                        <div
                            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 gap-6 justify-items-center">
                            <div class="bg-[#D3D3D3] p-6 rounded-lg shadow-lg flex flex-col transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 items-center"
                                v-for="(game, index) in games" :key="game.id"
                                style="border: 4px solid #999; max-width: 250px;">
                                <div class="bg-[#000] w-full h-30 rounded-md mb-4 relative">
                                    <img :src="game.image" alt="Game"
                                        class="w-full h-full object-center object-contain rounded-md" />
                                </div>
                                <p
                                    class="text-xs sm:text-sm md:text-base lg:text-lg font-pixel-proper font-semibold text-[#333] text-center mb-4">
                                    {{ game.title || 'Unknown Game' }}
                                </p>
                                <div class="flex justify-center items-center gap-5 w-full px-4 mt-auto">
                                    <div class="flex flex-col items-center">
                                        <div class="flex mb-1">
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm">
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm mr-1">
                                            </div>
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm">
                                            </div>
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm ml-1">
                                            </div>
                                        </div>
                                        <div class="flex mt-1">
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex space-x-4 -rotate-45">
                                        <div
                                            class="w-8 h-8 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#B22222] rounded-full">
                                        </div>
                                        <div
                                            class="w-8 h-8 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#B22222] rounded-full">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- Right Column -->
                <div>
                    <!-- Cozy Gaming Essentials Section -->
                    <section class="mb-12">
                        <h2
                            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-pixel text-center text-[#5E5242] mb-8">
                            Cozy Gaming Essentials
                        </h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
                            <div
                                class="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 bg-[#8A5A35] p-6 rounded-lg shadow-lg flex flex-col items-center">
                                <img class="h-20 mb-4" src="/Img/blanket.png" alt="Cozy Blanket" />
                                <h3
                                    class="text-base sm:text-md lg:text-md font-bold font-pixel text-[#F1E9D3] text-center mb-2">
                                    Cozy Blanket
                                </h3>
                                <p
                                    class="text-base sm:text-xs md:text-md lg:text-md font-pixel-proper text-[#F1E9D3] text-center">
                                    Stay warm and comfy during your gaming sessions.
                                </p>
                            </div>
                            <div
                                class="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 bg-[#8A5A35] p-6 rounded-lg shadow-lg flex flex-col items-center">
                                <i class="fas fa-chair text-6xl text-[#F1E9D3] mb-4"></i>
                                <h3
                                    class="ttext-base sm:text-md lg:text-md font-bold font-pixel text-[#F1E9D3] text-center mb-2">
                                    Comfortable Chair
                                </h3>
                                <p
                                    class="text-base sm:text-xs md:text-md lg:text-md font-pixel-proper text-[#F1E9D3] text-center">
                                    A good chair makes all the difference.
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Favorite Cozy Game Genres Section -->
                    <section
                        class="bg-[#8A5A35] p-8 rounded-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 mb-12">
                        <h2
                            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-pixel text-center text-[#F1E9D3] mb-4">
                            Favorite Cozy Game Genres</h2>
                        <div class="flex flex-wrap justify-center items-center gap-4">
                            <span
                                class="bg-[#F1E9D3] text-[#8A5A35] px-3 py-1 rounded-full font-pixel-proper">Simulation</span>
                            <span
                                class="bg-[#F1E9D3] text-[#8A5A35] px-3 py-1 rounded-full font-pixel-proper">Adventure</span>
                            <span
                                class="bg-[#F1E9D3] text-[#8A5A35] px-3 py-1 rounded-full font-pixel-proper">Puzzle</span>
                            <span class="bg-[#F1E9D3] text-[#8A5A35] px-3 py-1 rounded-full font-pixel-proper">Visual
                                Novels</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="py-4 text-center bg-[#E7D9C4] w-full">
            <p class="font-pixel-proper text-sm text-[#5E5242]">© 2024 Cozy Gaming Corner. All rights reserved.</p>
        </footer>
    </div>
</template>


<script setup>

import stardewImage from '/Img/stardew-valley-logo.webp';
import hadesImage from '/Img/hades.jpg';
import longDarkImage from '/Img/the_long_dark.jpg';
import animalCrossing from '/Img/animal_crossing.jpeg';

</script>

<script>
import { Icon } from '@iconify/vue'; // Correct way to import Iconify
import Navbar from '@/components/Navbar.vue';

export default {
    data() {
        return {
            games: [
                {
                    title: "Hades",
                    description: "In this action-packed roguelike, you play as Zagreus, the son of Hades, battling your way out of the Underworld.",
                    image: hadesImage,
                },
                {
                    title: "The Long Dark",
                    description: "A survival adventure set in the Canadian wilderness, The Long Dark challenges you to endure harsh winters and limited resources.",
                    image: longDarkImage,
                },
                {
                    title: "Animal Crossing",
                    description: "In Animal Crossing, you explore a haunted island filled with lovable spirits, crafting and collecting along the way to brighten the world.",
                    image: animalCrossing,
                },
                {
                    title: "Stardew Valley",
                    description: "In Stardew Valley, you escape to the countryside to rebuild a farm, grow crops, raise animals, and become part of a thriving community.",
                    image: stardewImage,
                },
            ],
        };
    },
    components: {
        Navbar
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.font-pixel {
    font-family: 'Press Start 2P', cursive;
}


.font-pixel-proper {
    font-family: 'Press Start 2P', cursive;
    text-transform: none;
}

@media (max-width: 1536px) {
    gameshelf-grid {
        grid-column: 2;
    }
}

/* Heart burst animation */
@keyframes pulse {
    0% {
        transform: scale(0.8);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

.heart-burst-enter-active,
.heart-burst-leave-active {
    transition: opacity 0.5s;
}

.heart-burst-enter,
.heart-burst-leave-to {
    opacity: 0;
}
</style>
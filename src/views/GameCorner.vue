<template>
    <div class="min-h-screen bg-[#E7D9C4] flex flex-col items-center">
        <!-- Header Section: About Page -->
        <header class="relative w-full h-[40rem] bg-[#E7D9C4] bg-opacity-80 sm:h-[30rem] md:h-[35rem] lg:h-[50rem]">
            <div
                class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-bottom bg-[url('src/assets/cozy_gamer.jpeg')] pointer-events-none">
            </div>

            <!-- Navigation -->
            <Navbar />

            <div class="absolute inset-0 flex flex-col justify-center items-center z-30 p-4 sm:p-6 lg:p-8">
                <div
                    class="bg-[#834458]/50 p-6 rounded-lg shadow-lg max-w-md w-11/12 sm:w-2/3 lg:h-80 flex flex-col justify-center items-center">
                    <h2 class="text-xl sm:text-lg lg:text-xl font-pixel text-white text-center mb-4">Welcome to the Cozy
                        Gaming Corner
                    </h2>
                    <p class="mt-4 font-pixel-proper text-white text-sm md:text-base">
                        Step into a world where gaming meets relaxation. Here, we celebrate the joy of peaceful
                        adventures, heartwarming stories, and slow-paced, soul-soothing games. Whether you're tending to
                        virtual farms, exploring dreamy landscapes, or simply taking a breather from the rush of life,
                        this is your safe space to unwind.

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
                    <!-- Featured Game Section -->
                    <section class="mb-12">
                        <h2 class="text-3xl font-bold text-center text-[#5E5242] font-pixel mb-4">Currently Playing</h2>
                        <div
                            class="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 bg-[#8A5A35] p-6 rounded-lg shadow-lg">
                            <h2 class="text-3xl font-bold text-center text-white font-pixel mb-4">Stardew Valley
                            </h2>
                            <img src="@/assets/stardew-valley-logo.webp" alt="Featured Game"
                                class="w-auto h-60 mx-auto mb-4" />
                            <p class="text-sm font-pixel-proper text-[#F1E9D3]">Discover the magic of this cozy game
                                that brings
                                relaxation and fun!</p>
                        </div>
                    </section>

                    <!-- Gameshelf Section -->
                    <section class="mb-12">
                        <h2 class="text-3xl font-pixel font-bold text-center text-[#5E5242] mb-8">Gameshelf</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div class="bg-[#D3D3D3] p-6 rounded-lg shadow-lg flex flex-col transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 items-center relative"
                                v-for="(game, index) in games" :key="game.id"
                                style="border: 4px solid #999; max-width: 250px;">

                                <!-- "Screen" of the handheld device -->
                                <div class="bg-[#000] w-full h-30 rounded-md mb-4 relative">
                                    <img :src="game.image" alt="Game"
                                        class="w-full h-full object-center object-contain rounded-md" />
                                </div>

                                <!-- Game Title (acting as a label on the device) -->
                                <p class="text-sm font-pixel-proper font-semibold text-[#333] text-center mb-4">
                                    {{ game.title || 'Unknown Game' }}
                                </p>

                                <!-- Decorative buttons for handheld device look -->
                                <div class="flex justify-center items-center gap-5 w-full px-4 mt-auto">
                                    <!-- D-pad style button -->
                                    <div class="flex flex-col items-center">
                                        <!-- Top button -->
                                        <div class="flex mb-1">
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm">
                                            </div>
                                        </div>
                                        <!-- Middle row with left, center, and right buttons -->
                                        <div class="flex">
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm mr-1">
                                            </div> <!-- Left button -->
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm">
                                            </div> <!-- Center button (optional) -->
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm ml-1">
                                            </div> <!-- Right button -->
                                        </div>
                                        <!-- Bottom button -->
                                        <div class="flex mt-1">
                                            <div
                                                class="w-6 h-6 transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#666] rounded-sm">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- A/B buttons -->
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
                        <h2 class="text-3xl font-bold font-pixel text-center text-[#5E5242] mb-4">Cozy Gaming Essentials
                        </h2>
                        <div class="grid grid-cols-2 gap-4">
                            <!-- Cozy Blanket Section -->
                            <div
                                class="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 bg-[#8A5A35] p-4 rounded-lg shadow-lg flex flex-col items-center">
                                <img class="h-16 text-white mb-2" src="@/assets/blanket.png" alt="Cozy Blanket">
                                <h3 class="text-md mb-4 font-bold font-pixel text-[#F1E9D3]">Cozy Blanket</h3>
                                <p class="font-pixel-proper text-sm text-[#F1E9D3] text-center">Stay warm and comfy
                                    during your
                                    gaming sessions.
                                </p>
                            </div>

                            <!-- Comfortable Chair Section -->
                            <div
                                class="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 bg-[#8A5A35] p-4 rounded-lg shadow-lg flex flex-col items-center">
                                <i class="fas fa-chair mt-2 text-5xl text-[#F1E9D3] mb-2"></i>
                                <h3 class="text-md mb-4 font-bold font-pixel mt-4 text-[#F1E9D3]">Comfortable Chair</h3>
                                <p class="font-pixel-proper text-sm text-[#F1E9D3] text-center">A good chair makes all
                                    the
                                    difference.</p>
                            </div>
                        </div>
                    </section>

                    <!-- Favorite Cozy Game Genres Section -->
                    <section
                        class="bg-[#8A5A35] p-8 rounded-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
                        <h2 class="text-3xl font-bold font-pixel text-[#F1E9D3] mb-4">Favorite Cozy Game Genres</h2>
                        <p class="text-md font-pixel-proper text-[#F1E9D3] mb-4">Here are some of my favorite cozy game
                            genres:</p>
                        <ul class="font-pixel-proper text-sm list-disc list-inside text-[#F1E9D3]">
                            <li class="mb-3">Simulation Games: These games allow you to create and manage your own
                                worlds, bringing a sense of calm and creativity.</li>
                            <li class="mb-3">Adventure Games: Enjoy exploring beautiful landscapes and solving puzzles
                                at your own pace.</li>
                            <li class="mb-3">Puzzle Games: These games challenge your mind while providing a relaxing
                                environment.</li>
                            <li>Farming Games: Cultivate your land and raise animals in a peaceful setting.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

        <!-- Footer with Pixel Art Icons and Back-to-Top Button -->
        <footer class="w-full py-6 text-center sm:py-8 lg:py-10 bg-[#E7D9C4]"> <!-- Warm taupe -->
            <p class="font-pixel-proper text-[#5E5242] text-sm sm:text-base lg:text-md">&copy; 2024 Cozy Cabin. All
                rights
                reserved.</p>

            <div class="mt-6">
                <!-- Back-to-Top with Pixelated Handheld Game Console -->
                <img src="@/assets/handheld-game-console.png" alt="Handheld Console Icon"
                    class="w-8 h-8 inline-block sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                <a href="#" class="font-pixel-proper text-[#5E5242] text-sm sm:text-base lg:text-lg">Back to top</a>
            </div>
        </footer>
    </div>
</template>

<script setup>

import stardewImage from '@/assets/stardew-valley-logo.webp';
import hadesImage from '@/assets/hades.jpg';
import longDarkImage from '@/assets/the_long_dark.jpg';
import animalCrossing from '@/assets/animal_crossing.jpeg';

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
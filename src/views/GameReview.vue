<template>
    <div class="min-h-screen bg-[#E7D9C4] flex flex-col items-center">
        <!-- Header Section -->
        <header class="relative w-full h-[40rem] bg-[#E7D9C4] bg-opacity-80 sm:h-[30rem] md:h-[35rem] lg:h-[50rem]">
            <div
                class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-bottom bg-[url('/Img/game-reviews-header.jpeg')] pointer-events-none">
            </div>

            <!-- Navigation -->
            <Navbar />

            <div class="absolute inset-0 flex flex-col justify-center items-center z-30 p-4 sm:p-5 md:p-6">
                <div
                    class="bg-[#834458]/50 p-4 rounded-lg shadow-lg max-w-md w-5/8 sm:w-2/3 md:max-w-lg flex flex-col justify-center items-center">
                    <h2 class="text-lg sm:text-xl md:text-lg font-pixel text-white text-center mb-2">
                        Game Reviews
                    </h2>
                    <p class="mt-1 font-pixel-proper text-sm sm:text-base md:text-lg text-white text-center">
                        Welcome to Nitchie's Game Reviews! Discover cozy games that offer peaceful adventures and
                        heartwarming stories. Grab your favorite drink, settle in, and unwind with games that bring
                        tranquility to your busy life!
                    </p>
                </div>
            </div>
        </header>


        <!-- Main Review Section -->
        <section class="w-full max-w-screen-xl p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Individual Game Review Cards -->
            <div v-for="game in games" :key="game.id"
                class="bg-[#D7C5AE] p-4 sm:p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
                <img :src="game.image" :alt="game.title" class="w-full h-48 object-cover rounded-md mb-4">
                <h3 class="text-lg font-pixel text-white mb-4">{{ game.title }}</h3>
                <hr
                    class="mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:bg-[#5E5242]" />
                <p class="text-sm font-pixel-proper text-[#5E5242]">{{ game.description }}</p>
                <button @click="openModal(game)"
                    class="mt-4 bg-[#B87C52] text-white font-pixel py-2 px-4 rounded-md shadow hover:bg-[#8C5E3D] transition">
                    Read More
                </button>
            </div>
        </section>

        <!-- Modal Section -->
        <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                class="bg-[#ECDAC3] rounded-lg p-6 max-w-md w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 shadow-2xl transform transition-all duration-300 ease-out">
                <img :src="selectedGame.image" :alt="selectedGame.title"
                    class="w-full h-48 object-cover rounded-md mb-4">
                <h3 class="text-lg font-bold mb-4 text-[#5E5242] text-center">{{ selectedGame.title }}</h3>
                <p class="text-gray-700 mb-6 text-center">{{ selectedGame.description }}</p>
                <h2 class="text-md font-bold mb-4 text-[#5E5242] text-center">Why I like this game:</h2>
                <ul class="mb-6 list-disc list-inside text-gray-600">
                    <li v-for="(reason, index) in selectedGame.reasons" :key="index"> {{ reason }}</li>
                </ul>
                <div class="flex justify-center">
                    <button @click="closeModal"
                        class="bg-[#B87C52] text-white px-6 py-2 mt-6 rounded-md shadow hover:bg-[#8C5E3D] transition">
                        Close Review
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer Section -->
        <footer class="w-full py-6 text-center sm:py-8 lg:py-10">
            <p class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-md">&copy; 2024 Cozy Cabin. All rights
                reserved.</p>
            <div class="mt-6">
                <img src="/Img/handheld-game-console.png" alt="Back to Top"
                    class="w-8 h-8 sm:w-10 sm:h-10 inline-block" />
                <a href="#" class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-lg">Back to top</a>
            </div>
        </footer>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "GameReview",
    components: { Navbar },
    data() {
        return {
            games: [
                {
                    title: "Hades",
                    image: "/Img/hades.jpg",
                    description: "A rogue-like dungeon crawler that combines fast-paced action with a rich narrative.",
                    reasons: ["Engaging storyline that keeps you hooked!", "Unique mechanics with replay value.", "Beautiful artwork and sound design."],
                },
                {
                    title: "The Long Dark",
                    image: "/Img/the_long_dark.jpg",
                    description: "A thoughtful exploration survival game set in the frigid Canadian wilderness.",
                    reasons: ["Immersive survival mechanics.", "Stunning landscapes of Canadian wilderness.", "Challenging gameplay that rewards patience."],
                },
                {
                    title: "Animal Crossing",
                    image: "/Img/animal_crossing.jpeg",
                    description: "A social simulation game where you can create your dream village.",
                    reasons: ["Endless customization options.", "Peaceful, relaxing gameplay loop.", "Cute and memorable characters."],
                },
                {
                    title: "Stardew Valley",
                    image: "/Img/stardew-valley-logo.webp",
                    description: "A charming farming simulation game that lets you build your own farm.",
                    reasons: ["Beautifully crafted world to explore.", "Deep community interaction.", "Relaxing yet challenging farming mechanics."],
                },
            ],
            selectedGame: null,
            isModalOpen: false,
        };
    },
    methods: {
        openModal(game) {
            this.selectedGame = game;
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
            this.selectedGame = null;
        },
    },
};
</script>

<style scoped>
.font-pixel {
    font-family: 'Press Start 2P', cursive;
}

.font-pixel-proper {
    font-family: 'Press Start 2P', cursive;
    text-transform: none;
}
</style>
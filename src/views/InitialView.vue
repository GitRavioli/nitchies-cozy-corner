<template>
    <div class="min-h-screen flex flex-col items-center">
        <!-- Header Section: Cabin and Campfire Illustration -->
        <header class="relative w-full h-screen bg-opacity-80 z-50 flex items-center justify-center">
            <div
                class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center bg-[url('src/assets/cabin.jpeg')]">
            </div>
            <!-- Main Section (centered horizontally and vertically) -->
            <main class="relative z-10 text-center p-4">
                <div class="bg-[#A54855] bg-opacity-40 p-6 rounded-lg inline-block">
                    <h1 class="text-3xl font-bold font-pixel text-[#F1E9D3] mb-6 md:text-lg lg:text-2xl">Welcome to
                        Nitchie's Cozy Corner
                    </h1>
                    <p class="text-lg text-[#F1E9D3] mb-8 md:text-xl lg:text-2xl">A pixelated journey through my cozy,
                        gaming-inspired world. Feel free to explore!</p>
                    <!-- Call to Action Wooden Signpost -->
                    <div
                        class="inline-block px-4 py-2 rounded-lg shadow-lg bg-[#B87C52] transition duration-200 ease-in-out sm:px-6 sm:py-4">
                        <a href="/home" class="font-pixel text-[#F1E9D3] text-lg sm:text-xl">Start Your Adventure</a>
                    </div>
                </div>
            </main>
        </header>
    </div>
</template>


<script>
export default {
    data() {
        return {};
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.font-pixel {
    font-family: 'Press Start 2P', cursive;
}
</style>
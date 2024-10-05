<template>
    <!-- Mobile Navigation -->
    <nav class="absolute top-5 right-5 z-50 md:hidden">
        <button @click="toggleMenu"
            class="bg-[#834458] p-2 rounded-lg shadow-md hover:bg-[#834458] transition duration-300 ease-in-out flex items-center justify-center w-12 h-12">
            ☰
        </button>
        <div v-if="isMenuOpen"
            class="absolute top-full left-0 w-full bg-[#834458] shadow-md rounded-lg p-4 flex flex-col space-y-2">
            <a href="/" @click="toggleMenu" class="flex items-center justify-center py-2 text-[#4A4A4A]">Nitchies Cozy
                Corner</a>
            <a href="/home" @click="toggleMenu" class="flex items-center justify-center py-2 text-[#4A4A4A]">Home</a>
            <a href="/about" @click="toggleMenu" class="flex items-center justify-center py-2 text-[#4A4A4A]">About</a>
            <a href="/game-corner" @click="toggleMenu" class="flex items-center justify-center py-2 text-[#4A4A4A]">Game
                Corner</a>
        </div>
    </nav>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex absolute top-5 left-1/2 transform -translate-x-1/2 z-50">
        <div class="flex space-x-6">
            <router-link to="/"
                class="bg-[#FDDFB7] py-2 px-4 rounded-lg shadow-md hover:bg-[#D4A57E] transition duration-300 ease-in-out font-pixel text-[#4A4A4A] flex items-center justify-center">
                Nitchies Cozy Corner
            </router-link>
            <router-link to="/home"
                class="bg-[#FDDFB7] py-2 px-4 rounded-lg shadow-md hover:bg-[#D4A57E] transition duration-300 ease-in-out font-pixel text-[#4A4D4A] flex items-center justify-center">
                Home
            </router-link>
            <router-link to="/about"
                class="bg-[#FDDFB7] py-2 px-4 rounded-lg shadow-md hover:bg-[#D4A57E] transition duration-300 ease-in-out font-pixel text-[#4A4D4A] flex items-center justify-center">
                About
            </router-link>
            <router-link to="/game-corner"
                class="bg-[#FDDFB7] py-2 px-4 rounded-lg shadow-md hover:bg-[#D4A57E] transition duration-300 ease-in-out font-pixel text-[#4A4D4A] flex items-center justify-center">
                Game Corner
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};</script>


<style>
.font-pixel {
    font-family: 'Press Start 2P', cursive;
}

.font-pixel-proper {
    font-family: 'Press Start 2P', cursive;
    text-transform: none;
}
</style>
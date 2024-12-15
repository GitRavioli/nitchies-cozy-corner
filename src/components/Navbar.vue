<template>
    <!-- Mobile Navigation -->
    <nav class="absolute top-5 right-5 z-50 lg:hidden">
        <button @click="toggleMenu"
            class="bg-[#D7C5AE] text-lg p-2 rounded-lg shadow-md hover:bg-[#FDDFB7] transition duration-300 ease-in-out flex items-center justify-center w-12 h-12">
            ☰
        </button>
        <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
            @click.self="toggleMenu">
            <div class="bg-[#FDDFB7] font-pixel-proper rounded-lg p-6 flex flex-col space-y-4 w-11/12 sm:w-1/2">
                <a href="/" @click="toggleMenu"
                    class="flex items-center justify-center py-2 text-center text-[#4A4A4A] text-md font-pixel">Nitchies
                    Cozy Corner</a>
                <a href="/home" @click="toggleMenu"
                    class="flex items-center justify-center py-2 text-[#4A4A4A] text-sm font-pixel">Home</a>
                <a href="/about" @click="toggleMenu"
                    class="flex items-center justify-center py-2 text-[#4A4A4A] text-sm font-pixel">About</a>
                <a href="/game-corner" @click="toggleMenu"
                    class="flex items-center justify-center py-2 text-[#4A4A4A] text-sm font-pixel">Game Corner</a>
                    <a href="/game-library" @click="toggleMenu"
                    class="flex items-center justify-center py-2 text-[#4A4A4A] text-sm font-pixel">Game Library</a>
            </div>
        </div>
    </nav>

    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex absolute top-5 left-1/2 transform -translate-x-1/2 z-50">
        <div class="flex space-x-6">
            <router-link to="/"
                class="bg-[#FDDFB7] py-1 px-2 rounded-lg shadow-md hover:bg-[#D4A57E] transition duration-300 ease-in-out font-pixel text-[#4A4A4A] flex items-center justify-center text-sm">
                Nitchies Cozy Corner
            </router-link>
            <router-link to="/home"
                class="bg-[#FDDFB7] py-1 px-2 rounded-lg shadow-md hover:bg-[#D4A57E] transition duration-300 ease-in-out font-pixel text-[#4A4A4A] flex items-center justify-center text-sm">
                Home
            </router-link>
            <router-link to="/about"
                class="bg-[#FDDFB7] py-1 px-2 rounded-lg shadow-md hover:bg-[#D4A57E] transition duration-300 ease-in-out font-pixel text-[#4A4A4A] flex items-center justify-center text-sm">
                About
            </router-link>
            <router-link to="/game-corner"
                class="bg-[#FDDFB7] py-1 px-2 rounded-lg shadow-md hover:bg-[#D4A57E] transition duration-300 ease-in-out font-pixel text-[#4A4A4A] flex items-center justify-center text-sm">
                Game Corner
            </router-link>
            <router-link to="/game-library"
                class="bg-[#FDDFB7] py-1 px-2 rounded-lg shadow-md hover:bg-[#D4A57E] transition duration-300 ease-in-out font-pixel text-[#4A4A4A] flex items-center justify-center text-sm">
                Game Library
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
.font-pixel {
    font-family: 'Press Start 2P', cursive;
}

/* Media query for screens 1030px or smaller */
@media (max-width: 1030px) {
    .font-pixel {
        font-size: 0.75rem;
        /* Smaller text size */
    }

    /* Adjust router-link styles universally */
    .router-link {
        padding: 0.25rem 0.5rem;
        /* Adjust button padding */
        font-size: 0.85rem;
        /* Smaller button text size */
    }
}
</style>

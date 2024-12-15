<template>
    <div class="min-h-screen bg-[#E7D9C4] flex flex-col items-center">
        <!-- Header Section -->
        <header class="relative w-full h-[30rem] bg-opacity-80">
            <div
                class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-bottom bg-[url('/Img/game_library.webp')] pointer-events-none">
            </div>
            <!-- Navigation -->
            <Navbar />
            <div class="absolute inset-0 flex flex-col justify-center items-center z-30 p-4">
                <div class="bg-[#834458]/50 p-6 rounded-lg shadow-lg max-w-lg w-11/12 sm:w-3/4 lg:w-2/3">
                    <h2 class="text-xl sm:text-2xl font-pixel text-white text-center mb-4">
                        Nitch's Cozy Game Library 🎮
                    </h2>
                    <p class="text-sm md:text-base font-pixel-proper text-white text-center">
                        Welcome to my collection of games! Explore, filter, and find cozy inspirations to add to your
                        own gaming list. Let's celebrate the joy of gaming together!
                    </p>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto p-4">
            <!-- Filter Section -->
            <section class="mb-8">
                <h2 class="text-3xl font-bold text-center text-[#5E5242] font-pixel mb-6">Full Game Library</h2>
                <div class="flex flex-wrap justify-center gap-4">
                    <button v-for="genre in genres" :key="genre" @click="filterByGenre(genre)"
                        class="px-4 py-2 bg-[#8A5A35] text-white font-pixel rounded-lg shadow-md transition transform hover:scale-105">
                        {{ genre }}
                    </button>
                    <button @click="clearFilter"
                        class="px-4 py-2 bg-[#D3D3D3] text-[#5E5242] font-pixel rounded-lg shadow-md transition transform hover:scale-105">
                        Clear Filter
                    </button>
                </div>
            </section>

            <!-- Game Cards -->
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div v-for="game in paginatedGames" :key="game.id"
                    class="bg-[#8A5A35] p-4 rounded-lg shadow-lg transition transform hover:scale-105">
                    <h3 class="text-lg font-pixel text-white mb-2">{{ game.title }}</h3>
                    <p class="text-sm font-pixel-proper text-[#F1E9D3] mb-4">{{ game.description }}</p>
                    <p class="text-xs font-pixel-proper text-[#D3D3D3]">Genre: {{ game.genre }}</p>
                </div>
            </section>

            <!-- Pagination Controls -->
            <section class="mt-6 flex justify-center items-center gap-4">
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="px-4 py-2 bg-[#8A5A35] text-white font-pixel rounded-lg shadow-md transition transform hover:scale-105 disabled:opacity-50">
                    Previous
                </button>
                <span class="text-sm font-pixel text-[#5E5242]">Page {{ currentPage }} of {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="px-4 py-2 bg-[#8A5A35] text-white font-pixel rounded-lg shadow-md transition transform hover:scale-105 disabled:opacity-50">
                    Next
                </button>
            </section>
        </main>

        <!-- Footer with Pixel Art Icons and Back-to-Top Button -->
        <FooterComponent />
    </div>
</template>

<script>
import { ref, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import FooterComponent from '@/components/Footer/FooterComponent.vue'

export default {
    name: "GameLibrary",
    components: {
        Navbar, FooterComponent
    },
    setup() {
        const games = ref([
            {
                id: 1,
                title: 'Cyberpunk 2077',
                genre: 'RPG',
                description: 'Explore Night City in this futuristic RPG.',
            },
            {
                id: 2,
                title: 'Elden Ring',
                genre: 'Action RPG',
                description: 'A vast open world filled with danger and mystery.',
            },
            {
                id: 3,
                title: 'Battlefield 2042',
                genre: 'Shooter',
                description: 'Experience large-scale battles in a futuristic setting.',
            },
            {
                id: 4,
                title: 'Call of Duty',
                genre: 'Shooter',
                description: 'Fast-paced action in a variety of war scenarios.',
            },
            {
                id: 5,
                title: 'Minecraft',
                genre: 'Sandbox',
                description: 'Create and explore endless worlds filled with possibilities.',
            },
            {
                id: 6,
                title: 'Terraria',
                genre: 'Sandbox',
                description: 'Explore, build, and fight in a 2D pixelated world.',
            },
            {
                id: 7,
                title: 'Techtonica',
                genre: 'Simulation',
                description: 'Build automated factories on an alien planet.',
            },
            {
                id: 8,
                title: 'Factorio',
                genre: 'Simulation',
                description: 'Build and manage factories while fending off alien threats.',
            },
            {
                id: 9,
                title: 'Farming Simulator',
                genre: 'Simulation',
                description: 'Experience the life of a modern farmer.',
            },
            {
                id: 10,
                title: 'Fallout 4',
                genre: 'RPG',
                description: 'Survive and rebuild in a post-apocalyptic wasteland.',
            },
            {
                id: 11,
                title: 'Fallout 76',
                genre: 'RPG',
                description: 'A multiplayer survival adventure in the Fallout universe.',
            },
            {
                id: 12,
                title: 'Medieval Dynasty',
                genre: 'Simulation',
                description: 'Build and manage your medieval village.',
            },
            {
                id: 13,
                title: 'Stardew Valley',
                genre: 'Simulation',
                description: 'Build your farm and create lasting memories in this cozy game.',
            },
            {
                id: 14,
                title: 'Palworld',
                genre: 'Adventure',
                description: 'Explore a world of adorable and dangerous creatures.',
            },
            {
                id: 15,
                title: '7 Days to Die',
                genre: 'Survival',
                description: 'Survive in a zombie-infested world with crafting and base-building.',
            },
            {
                id: 16,
                title: 'Overwatch',
                genre: 'Shooter',
                description: 'Team-based multiplayer shooter with unique heroes.',
            },
            {
                id: 17,
                title: 'Apex Legends',
                genre: 'Shooter',
                description: 'Fast-paced battle royale with unique characters.',
            },
            {
                id: 18,
                title: 'The First Descendant',
                genre: 'Shooter',
                description: 'A cooperative looter-shooter set in a sci-fi universe.',
            },
            {
                id: 19,
                title: 'Grounded',
                genre: 'Survival',
                description: 'Survive as a shrunken human in a backyard full of dangers.',
            },
            {
                id: 20,
                title: 'Harvest Moon',
                genre: 'Simulation',
                description: 'A classic farming and life simulation game.',
            },
            {
                id: 21,
                title: 'Sea of Thieves',
                genre: 'Adventure',
                description: 'Sail the seas in a shared world of pirates and treasure.',
            },
            {
                id: 22,
                title: 'The Sims 4',
                genre: 'Simulation',
                description: 'Live your dream life by building and managing virtual households.',
            },
            {
                id: 23,
                title: 'Warfare',
                genre: 'Shooter',
                description: 'Engage in intense battles across multiple war zones.',
            },
            {
                id: 24,
                title: 'Cozy Grove',
                genre: 'Simulation',
                description: 'A relaxing life-sim game set on a haunted island.',
            },
            {
                id: 25,
                title: 'Potion Permit',
                genre: 'Simulation',
                description: 'Play as a chemist in a charming village.',
            },
            {
                id: 26,
                title: 'Smalland',
                genre: 'Survival',
                description: 'Explore a tiny world filled with massive challenges.',
            },
            {
                id: 27,
                title: 'Avatar: Frontiers of Pandora',
                genre: 'Adventure',
                description: 'Explore the world of Pandora in this epic adventure.',
            },
            {
                id: 28,
                title: 'Days Gone',
                genre: 'Action',
                description: 'Survive in a world overrun by zombies.',
            },
            {
                id: 29,
                title: 'Grand Theft Auto 5',
                genre: 'Action',
                description: 'An open-world game full of crime and chaos.',
            },
            {
                id: 30,
                title: 'Ark Survival Ascended',
                genre: 'Survival',
                description: 'Survive and thrive in a prehistoric world filled with dinosaurs.',
            },
            {
                id: 31,
                title: 'Coral Island',
                genre: 'Simulation',
                description: 'Build a farm and restore a tropical island paradise.',
            },
            {
                id: 32,
                title: 'Baldur’s Gate',
                genre: 'RPG',
                description: 'A classic fantasy RPG with deep storytelling.',
            },
            {
                id: 33,
                title: 'Cult of the Lamb',
                genre: 'Roguelike',
                description: 'Lead your cult through adventures and dark rituals.',
            },
            {
                id: 34,
                title: 'Fall Guys',
                genre: 'Party',
                description: 'Compete in chaotic obstacle courses with friends.',
            },
            {
                id: 35,
                title: 'God of War Ragnarok',
                genre: 'Action',
                description: 'Embark on an epic journey in Norse mythology.',
            },
            {
                id: 36,
                title: 'Moonlighter',
                genre: 'Roguelike',
                description: 'Balance shopkeeping with dungeon crawling.',
            },
            {
                id: 37,
                title: 'Fortnite',
                genre: 'Battle Royale',
                description: 'Build, fight, and survive in this massively popular game.',
            },
            {
                id: 38,
                title: 'Subnautica',
                genre: 'Survival',
                description: 'Explore the depths of an alien ocean.',
            },
            {
                id: 39,
                title: 'Diablo',
                genre: 'Action RPG',
                description: 'Battle through dark dungeons in this iconic franchise.',
            },
            {
                id: 40,
                title: 'Space Engineers',
                genre: 'Simulation',
                description: 'Build and explore in space with realistic physics.',
            },
            {
                id: 41,
                title: 'Hogwarts Legacy',
                genre: 'RPG',
                description: 'Explore the magical world of Harry Potter in an open-world RPG.',
            },
            {
                id: 42,
                title: 'Deliver Us Mars',
                genre: 'Adventure',
                description: 'Embark on a journey to save humanity’s future.',
            },
            {
                id: 43,
                title: 'Dredge',
                genre: 'Adventure',
                description: 'Discover and explore eerie waters while fishing.',
            },
            {
                id: 44,
                title: 'Cooking Simulator',
                genre: 'Simulation',
                description: 'Create culinary masterpieces in a realistic kitchen.',
            },
            {
                id: 45,
                title: 'Gas Station Simulator',
                genre: 'Simulation',
                description: 'Run and upgrade your own gas station.',
            },
            {
                id: 46,
                title: 'Way of the Hunter',
                genre: 'Simulation',
                description: 'Experience authentic hunting in stunning environments.',
            },
            {
                id: 47,
                title: 'Horizon',
                genre: 'RPG',
                description: 'Explore a post-apocalyptic world filled with robotic creatures.',
            },
            {
                id: 48,
                title: 'Crusader Kings III',
                genre: 'Strategy',
                description: 'Shape the destiny of your dynasty in medieval times.',
            },
            {
                id: 49,
                title: 'The Forest',
                genre: 'Survival',
                description: 'Survive on a mysterious island filled with cannibalistic mutants.',
            },
            {
                id: 50,
                title: 'Gotham Knights',
                genre: 'Action',
                description: 'Protect Gotham City as the next generation of heroes.',
            },
            {
                id: 51,
                title: 'Skyrim',
                genre: 'RPG',
                description: 'Explore a massive fantasy world filled with adventure.',
            },
        ].sort((a, b) => a.title.localeCompare(b.title)));

        const itemsPerPage = ref(12); // 4 rows of 4 games each on Desktop
        const currentPage = ref(1);


        const genres = ref([...new Set(games.value.map((game) => game.genre))]);
        const selectedGenre = ref("");

        const filteredGames = computed(() =>
            selectedGenre.value ? games.value.filter((game) => game.genre === selectedGenre.value) : games.value
        );

        const totalPages = computed(() =>
            Math.ceil(filteredGames.value.length / itemsPerPage.value)
        );

        const paginatedGames = computed(() => {
            const start = (currentPage.value - 1) * itemsPerPage.value;
            const end = start + itemsPerPage.value;
            return filteredGames.value.slice(start, end);
        });

        const filterByGenre = (genre) => {
            selectedGenre.value = genre;
        };

        const clearFilter = () => {
            selectedGenre.value = "";
        };

        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value += 1;
            }
        };

        const prevPage = () => {
            if (currentPage.value > 1) {
                currentPage.value -= 1;
            }
        };

        return {
            games,
            genres,
            selectedGenre,
            filteredGames,
            paginatedGames,
            itemsPerPage,
            currentPage,
            totalPages,
            filterByGenre,
            clearFilter,
            nextPage,
            prevPage,
        };
    },
};
</script>

<style>
/* Custom styles for cozy theme */
.font-pixel {
    font-family: 'Press Start 2P', cursive;
}

.font-pixel-proper {
    font-family: 'Press Start 2P', cursive;
}

button:hover {
    cursor: pointer;
}
</style>
<template>
    <div class="min-h-screen bg-[#E7D9C4] flex flex-col items-center">
        <!-- Header Section -->
        <header class="relative w-full h-[40rem] bg-[#E7D9C4] bg-opacity-80 sm:h-[30rem] md:h-[35rem] lg:h-[50rem]">
            <div
                class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-bottom bg-[url('/Img/changelog.jpeg')] pointer-events-none">
            </div>

            <!-- Navigation -->
            <Navbar />

            <div class="absolute inset-0 flex justify-center items-center z-30 p-4 sm:p-6 lg:p-8">
                <div
                    class="bg-[#E7D9C4]/50 p-4 sm:p-5 rounded-lg shadow-lg max-w-md w-7/8 sm:w-2/3 lg:max-w-lg flex flex-col justify-center items-center">
                    <h2 class="text-base sm:text-md md:text-xl font-pixel text-white text-center sm:text-left mb-4">
                        Changelog
                    </h2>
                    <p
                        class="mt-2 font-pixel-proper text-sm sm:text-base md:text-lg text-white text-center sm:text-left">
                        Keep track of the latest updates and changes made to the website.
                    </p>
                </div>
            </div>
        </header>

        <div class="container mx-auto p-4">
            <!-- Changelog Section -->
            <section class="mb-12">
                <h2
                    class="font-pixel text-lg sm:text-md md:text-xl lg:text-3xl font-bold text-center text-[#5E5242] my-5">
                    Recent Changes
                </h2>
                <div class="bg-white overflow-y-auto max-h-64 border border-[#D3D3D3] p-4 rounded-lg">
                    <div v-html="compiledMarkdown" class="whitespace-pre-wrap font-pixel-proper text-xs text-[#000]">
                    </div>
                </div>
            </section>
        </div>

        <!-- Footer with Pixel Art Icons and Back-to-Top Button -->
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/Footer/FooterComponent.vue';
import Navbar from '@/components/Navbar.vue';
import { marked } from 'marked';

export default {
    name: "Changelog",
    components: {
        Navbar,
        FooterComponent
    },
    data() {
        return {
            changelogContent: ''
        };
    },
    computed: {
        compiledMarkdown() {
            // Process the markdown content
            return marked(this.changelogContent, {
                renderer: new marked.Renderer({
                    listitem(text) {
                        return `<li>- ${text}</li>`; // Ensure list items start with "- "
                    }
                })
            });
        }
    },
    mounted() {
        this.loadMarkdown();
    },
    methods: {
        async loadMarkdown() {
            const response = await fetch('/changelog.md');
            const text = await response.text();
            this.changelogContent = text; // Store raw markdown text
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.font-pixel {
    font-family: 'Press Start 2P', cursive;
}

.font-pixel-proper {
    font-family: 'Press Start 2P', cursive;
    text-transform: none;
}
</style>

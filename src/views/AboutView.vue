<template>
    <div class="min-h-screen bg-[#FDDFB7] flex flex-col items-center">

        <!-- Header Section: About Page -->
        <header class="relative w-full h-[40rem] bg-[#8C7A6B] bg-opacity-80 sm:h-[30rem] md:h-[35rem] lg:h-[50rem]">
            <div
                class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-bottom bg-[url('src/assets/inside_cabin.jpeg')] pointer-events-none">
            </div>

            <!-- Navigation -->
            <Navbar />

            <div class="absolute inset-0 flex flex-col justify-center items-center z-30 p-4 sm:p-6 lg:p-8">
                <div
                    class="bg-[#B87C52]/50 p-6 rounded-lg shadow-lg max-w-md w-11/12 sm:w-2/3 lg:h-80 flex flex-col justify-center items-center">
                    <h2 class="text-xl sm:text-lg lg:text-xl font-pixel text-white text-center mb-4">About Nitchie
                    </h2>
                    <p class="mt-4 font-pixel-proper text-white text-sm md:text-base">
                        Welcome to the little corner of the internet that embodies the warm, inviting spirit of
                        Nitch—a cozy, introverted homebody on a journey of self-love and peace of mind.
                    </p>
                </div>
            </div>
        </header>

        <!-- Centered Welcome Content -->
        <div class="relative z-30 p-4">
            <!-- Main Content Section -->
            <main class="font-pixel flex-grow container mx-auto py-8 px-4 lg:px-8">

                <!-- Philosophy Section -->
                <section class="my-6 p-4 font-pixel bg-[#E7D9C4]/80 rounded-lg shadow-lg">
                    <h2 class="text-white text-center text-xl font-semibold">My Philosophy</h2>
                    <p class="mt-4 text-[#8C7A6B] text-sm md:text-base">
                        Here in Nitchies cozy corner, I believe in the power of self-love. It’s not just a trend; it’s a
                        way of life.
                        Embracing who you are, flaws and all, is the first step toward cultivating a healthy peace of
                        mind. I’m
                        passionate about sharing tips, stories, and insights that help others embark on their own
                        self-love journey.
                    </p>
                </section>

                <!-- Creating a Peaceful Life Section -->
                <section class="my-6 p-4 bg-[#E7D9C4]/80 rounded-lg shadow-lg">
                    <h2 class="text-white text-center text-xl font-semibold">Creating a Peaceful Life</h2>
                    <p class="mt-4 text-[#8C7A6B] text-sm md:text-base">
                        Achieving a peaceful life involves intentional choices that nurture the soul. From curating your
                        environment to prioritizing quiet moments, every step counts. Here are some essential practices:
                    </p>
                    <ul class="mt-4 list-disc list-inside text-[#8C7A6B] text-sm md:text-base">
                        <li>Establishing a calming daily routine</li>
                        <li>Practicing mindfulness and gratitude</li>
                        <li>Connecting with nature and embracing its beauty</li>
                        <li>Engaging in creative hobbies that bring joy</li>
                    </ul>
                </section>

                <!-- Cozy Gaming Section -->
                <section class="my-6 p-4 bg-[#E7D9C4]/80 rounded-lg shadow-lg">
                    <h2 class="text-white text-center text-xl font-semibold">My Love for Cozy Gaming</h2>
                    <p class="mt-4 text-[#8C7A6B] text-sm md:text-base">
                        Gaming is my cozy escape. I cherish moments spent in immersive worlds where I can unwind and
                        recharge.
                        Whether it's exploring charming villages or embarking on magical quests, gaming brings a unique
                        joy that
                        resonates with my peaceful lifestyle. I love to share my gaming experiences and encourage others
                        to
                        discover their cozy gaming nooks.
                    </p>
                </section>

                <!-- Embracing Technology Section -->
                <section class="my-6 p-4 bg-[#E7D9C4]/80 rounded-lg shadow-lg">
                    <h2 class="text-white text-center text-xl font-semibold">Embracing Technology</h2>
                    <p class="mt-4 text-[#8C7A6B] text-sm md:text-base">
                        Technology fascinates me! I believe in its power to enhance our lives and connect us in
                        meaningful ways.
                        From gadgets that simplify daily tasks to games that transport us to different realms, I find
                        joy in
                        exploring the latest tech trends and innovations. It’s all about finding balance and using
                        technology to
                        enrich our peaceful existence.
                    </p>
                </section>

                <!-- Brightening Lives Section -->
                <section class="my-6 p-4 bg-[#E7D9C4]/80 rounded-lg shadow-lg">
                    <h2 class="text-white text-center text-xl font-semibold">Brightening Lives</h2>
                    <p class="mt-4 text-[#8C7A6B] text-sm md:text-base">
                        I aspire to make people’s lives a little brighter every day. Whether it’s through my
                        interactions,
                        sharing positive stories, or simply offering a listening ear, I strive to spread warmth and
                        kindness.
                        Everyone deserves a cozy space in their hearts and minds, and I hope to inspire that in others.
                    </p>
                </section>
            </main>
        </div>
    </div>

    <!-- Footer with Pixel Art Icons and Back-to-Top Button -->
    <footer class="w-full py-6 text-center sm:py-8 lg:py-10 bg-[#E7D9C4]"> <!-- Warm taupe -->
        <p class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-md">&copy; 2024 Cozy Cabin. All rights
            reserved.</p>

        <div class="mt-6">
            <!-- Back-to-Top with Pixelated Handheld Game Console -->
            <img src="@/assets/handheld-game-console.png" alt="Handheld Console Icon"
                class="w-8 h-8 inline-block sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            <a href="#" class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-lg">Back to top</a>
        </div>
    </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
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
    components: {
        Navbar
    },
    name: "AboutPage"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.font-pixel {
    font-family: 'Press Start 2P', cursive;
}

.font-pixel-proper {
    font-family: 'Press Start 2P', cursive;
    text-transform: uppercase;
}

h2 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>

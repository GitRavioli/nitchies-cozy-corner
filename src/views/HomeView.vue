<template>
  <div class="min-h-screen bg-[#FDDFB7] flex flex-col items-center">
    <!-- Header Section: Cabin and Campfire Illustration -->
    <header class="relative w-full h-[40rem] bg-[#8C7A6B] bg-opacity-80 sm:h-[30rem] md:h-[35rem] lg:h-[50rem]">
      <div
        class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-bottom bg-[url('src/assets/cabin_2.jpg')] pointer-events-none">
      </div>

      <!-- Navigation -->
      <Navbar />

      <!-- Centered Welcome Content -->
      <div class="absolute inset-0 flex justify-center items-center z-30 p-4 sm:p-6 lg:p-8">
        <div
          class="bg-[#B87C52]/50 p-6 rounded-lg shadow-lg max-w-md w-11/12 sm:w-2/3 lg:h-80 flex flex-col justify-center items-center">
          <h2 class="text-xl sm:text-lg lg:text-xl font-pixel text-white text-center mb-4">Welcome to Nitchie's Cozy
            Corner!</h2>
          <p class="text-sm sm:text-xs font-pixel-proper text-white text-center">
            Step inside and experience a world of warmth and nostalgia. Nitchie’s Cozy Cabin is a haven for gamers,
            dreamers, and anyone seeking a bit of cozy comfort. Here, you’ll find game reviews, chill vibes, and
            friendly fireside stories to enjoy while sipping your favorite drink. Whether you're diving into a
            pixelated adventure or simply looking for a place to unwind, this is your cozy corner on the web. So wrap
            yourself in a blanket, grab a hot cocoa, and stay awhile. Welcome home!
          </p>
        </div>
      </div>
    </header>


    <!-- Main Section: 4 Columns with Independent Sizes -->
    <section class="w-full max-w-screen-xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">

      <!-- First Column: Welcome Card -->
      <div
        class="bg-[#F0E1C8] text-center p-6 rounded-xl flex flex-col justify-between items-center shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <!-- Notebook -->
        <div class="p-6 rounded-s-md">
          <div
            class="notebook bg-white shadow-lg w-80 h-[500px] relative border-4 border-[#E7D9C4] rounded-lg overflow-hidden">
            <!-- Spiral binding -->
            <div class="spiral-binding absolute top-0 left-[25px] w-1 h-full bg-gray-700"></div>
            <div class="spirals absolute top-0 left-0 w-full h-full flex flex-col justify-between p-1">
              <div v-for="i in 8" :key="i" class="h-2 w-5 border-2 border-gray-400 rounded-full bg-gray-200"></div>
            </div>
            <!-- Notebook lines -->
            <div class="notebook-content pt-16 pl-8 pr-4 py-4 relative">
              <div v-for="i in 15" :key="i" class="notebook-line border-b border-gray-300"></div>
            </div>
            <!-- Notebook header -->
            <div class="absolute top-0 font-pixel left-0 p-5 w-full text-center font-bold text-xl text-[#5E5242]">
              NOTES
            </div>
          </div>
        </div>
        <!-- Social media icons at the bottom -->
        <div class="mt-4 flex justify-center gap-4">
          <img src="@/assets/discord_icon.png" alt="Discord Icon"
            class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition hover:scale-110" />
          <img src="@/assets/youtube_icon.png" alt="YouTube Icon"
            class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition hover:scale-110" />
          <img src="@/assets/trophy_icon.png" alt="Trophy Icon"
            class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition hover:scale-110" />
        </div>
      </div>

      <!-- Second Column: Journal Entry -->
      <div
        class="p-6 rounded-xl bg-[#ECDAC3] shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <h1
          class="text-xl font-pixel text-[#D4A57E] mb-4 text-center underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-[#D4A57E]">
          Game Reviews
        </h1>
        <div class="bg-[#D7C5AE] p-6 rounded-xl">
          <img class="h-36 w-auto mx-auto" src="@/assets/ghost_706023.png" alt="image description">
          <h3 class="text-xl my-5 font-pixel text-white text-center mb-5">Game Reviews</h3>
          <p class="text-sm font-pixel-proper text-[#5E5242]">
            Welcome to Nitchie's Cozy Corner, where we explore delightful games that warm the heart and spark joy.
            Discover reviews on cozy titles perfect for unwinding after a long day.
          </p>
        </div>
      </div>

      <!-- Third Column: Game Review Cards -->
      <div class="h-auto">
        <div
          class="bg-[#D5BAA3] p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 mb-6">
          <h3 class="text-xl font-pixel text-white mb-4">Stardew Valley</h3>
          <p class="text-sm font-pixel-proper text-white">A delightful farming game filled with charm.</p>
        </div>
        <div
          class="bg-[#C9AD8C] p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 mb-6">
          <h3 class="text-xl font-pixel text-white mb-4">The Long Dark</h3>
          <p class="text-sm font-pixel-proper text-white">Survive in the freezing wilderness with limited resources.</p>
        </div>
        <div
          class="bg-[#E0B7B3] p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 mb-6">
          <h3 class="text-xl font-pixel text-white mb-4">Hades</h3>
          <p class="text-sm font-pixel-proper text-white">A fast-paced roguelike with engaging combat and narrative.</p>
        </div>
        <div
          class="bg-[#D19D82] p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 mb-6">
          <h3 class="text-xl font-pixel text-white mb-4">Animal Crossing</h3>
          <p class="text-sm font-pixel-proper text-white">Create your perfect island getaway at your own pace.</p>
        </div>
      </div>

      <!-- Fourth Column: Cozy Playlist -->
      <div
        class="bg-[#DECAB2] p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <h3 class="text-xl font-pixel text-white">Cozy Playlist</h3>
        <p class="text-sm my-5 text-white font-pixel-proper">
          Relax with Nitchie’s favorite chill gaming tunes, perfect for a cozy night in. Grab a blanket, hit play, and
          let the soothing melodies fill the air.
        </p>
        <div class="mt-4">
          <iframe style="border-radius:12px"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXahsxs9xh0fn?utm_source=generator" width="100%"
            height="400" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>

    </section>


    <!-- Footer with Pixel Art Icons and Back-to-Top Button -->
    <footer class="w-full py-6 text-center sm:py-8 lg:py-10 relative">
      <p class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-md">&copy; 2024 Cozy Cabin. All rights reserved.
      </p>

      <div class="mt-6">
        <!-- Back-to-Top with Pixelated Handheld Game Console -->
        <img :style="consoleStyle" src="@/assets/handheld-game-console.png" alt="Handheld Console Icon"
          class="w-8 h-8 inline-block sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        <a href="#" class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-lg" :style="textStyle">Back to top</a>
      </div>
    </footer>
  </div>
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

/* Style for the spiral binding holes */
.spiral-binding {
  z-index: 1;
}

.spirals {
  z-index: 2;
  pointer-events: none;
}

/* Notebook lines */
.notebook-line {
  height: 1.5rem;
  position: relative;
}
</style>

<template>
  <div class="min-h-screen bg-[#FDDFB7] flex flex-col items-center">
    <!-- Header Section: Cabin and Campfire Illustration -->
    <header class="relative w-full h-[35rem] md:h-[40rem] lg:h-[50rem]">
      <div
        class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-bottom bg-[url('/Img/cabin_2.jpg')] pointer-events-none">
      </div>

      <!-- Navigation -->
      <Navbar />

      <!-- Centered Welcome Content -->
      <div class="absolute inset-0 flex flex-col justify-center items-center z-30 p-4 sm:p-6 lg:p-8">
        <div
          class="bg-[#ECDAC3]/50 p-4 sm:p-5 rounded-lg shadow-lg max-w-md w-5/8 sm:w-2/3 lg:max-w-lg flex flex-col justify-center items-center">
          <h2 class="text-lg sm:text-xl lg:text-2xl font-pixel text-white text-center mb-4">Welcome to Nitchie's Cozy
            Corner!</h2>
          <p class="text-xs sm:text-sm md:text-base font-pixel-proper text-white text-center">
            Welcome to Nitchie’s Cozy Cabin, a warm haven for gamers and dreamers alike. Here, you’ll find the latest
            games I have been playing,
            chill vibes, and friendly stories to enjoy with your favorite drink. Whether diving into a pixelated
            adventure or unwinding in comfort, this is your cozy corner on the web. So wrap yourself in a blanket, grab
            a hot cocoa, and stay awhile. Welcome home!
          </p>
        </div>
      </div>
    </header>

    <!-- Main Section: 3 Columns with Independent Sizes -->
    <section class="w-full max-w-screen-xl p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- First Column: Daily Quote and Notebook -->
      <div class="flex flex-col">
        <!-- Daily Quote -->
        <div
          class="bg-[#D5BAA3] p-4 sm:p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 mb-6">
          <h3 class="text-lg font-pixel text-white mb-4">Daily Quote</h3>
          <hr
            class="mb-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:bg-[#5E5242]" />
          <p class="text-sm font-pixel-proper text-white">{{ dailyQuote.content }}</p>
          <p class="text-xs font-pixel-proper text-[#B87C52] text-right">- {{ dailyQuote.author }}</p>
        </div>

        <!-- Notebook -->
        <div class="p-6 rounded-s-md w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div
            class="notebook bg-[#E7D9C4] shadow-md w-full h-auto relative border-4 border-[#C9B8A1] rounded-lg overflow-hidden">
            <!-- Spiral binding -->
            <div class="spiral-binding absolute top-0 left-[25px] w-1 h-full bg-[#8B5C48]"></div>
            <div class="spirals absolute top-0 left-0 w-full h-full flex flex-col justify-between p-1">
              <div v-for="i in 8" :key="i" class="h-2 w-5 border-2 border-[#8B5C48] rounded-full bg-[#C6A8B5]"></div>
            </div>
            <!-- Notebook lines -->
            <div class="notebook-content pt-16 pl-8 pr-4 py-4 relative">
              <div v-for="i in 15" :key="i" class="notebook-line border-b border-[#B5A19A]"></div>
            </div>
            <!-- Notebook header -->
            <div class="absolute top-0 font-pixel left-0 p-5 w-full text-center font-bold text-xl text-[#5E5242]">
              NOTES
            </div>
          </div>
        </div>
      </div>

      <!-- Second Column: Game Reviews-->
      <div class="p-6 rounded-s-md w-full max-w-xs sm:max-w-sm lg:max-w-md">
        <div
          class="p-4 sm:p-6 rounded-xl bg-[#ECDAC3] shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
          <h1
            class="text-xl font-pixel text-[#D4A57E] mb-4 md:mb-7 text-center underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-[#D4A57E]">
            Game Reviews
          </h1>
          <div class="bg-[#D7C5AE] p-4 sm:p-6 rounded-xl">
            <img class="h-36 w-auto mx-auto" src="/Img/ghost_706023.png" alt="image description">
            <h3 class="text-lg my-5 font-pixel text-white text-center mb-5">Game Reviews</h3>
            <p class="text-sm text-center font-pixel-proper text-[#5E5242]">
              Welcome to Nitchie's Cozy Corner, where we explore delightful games that warm the heart and spark joy.
              Discover reviews on cozy titles perfect for unwinding after a long day.
            </p>
            <div class="mt-6 inline-block px-4 py-2 rounded-lg shadow-lg bg-[#B87C52] transition duration-200 ease-in-out sm:px-4
        sm:py-2">
              <a href="/game-review" class="font-pixel text-[#F1E9D3] text-base sm:text-sm md:text-sm">View
                Game Reviews</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Third Column: Cozy Playlist -->
      <div class="p-6 rounded-s-md w-full max-w-xs sm:max-w-sm lg:max-w-md">
        <div
          class="bg-[#DECAB2] p-4 sm:p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
          <h3 class="text-lg font-pixel text-white">Cozy Playlist</h3>
          <p class="text-sm my-5 text-white font-pixel-proper">
            Relax with Nitchie’s favorite chill gaming tunes, perfect for a cozy night in. Grab a blanket, hit play,
            and
            let the soothing melodies fill the air.
          </p>
          <div class="mt-4">
            <iframe style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXahsxs9xh0fn?utm_source=generator" width="100%"
              height="400" frameBorder="0" allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer with Pixel Art Icons and Back-to-Top Button -->
    <footer class="w-full py-6 text-center sm:py-8 lg:py-10 relative">
      <p class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-md">&copy; Nitchie's Cozy Corner. All rights
        reserved.
      </p>

      <div class="mt-6">
        <!-- Back-to-Top with Pixelated Handheld Game Console -->
        <img :style="consoleStyle" src="/Img/handheld-game-console.png" alt="Handheld Console Icon"
          class="w-8 h-8 inline-block sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        <a href="#" class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-lg mr-5" :style="textStyle">Back to
          top</a>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { ref, onMounted } from 'vue';

export default {
  data() {
    return {
      isMenuOpen: false,
      dailyQuote: { content: '', author: '' }, // Add dailyQuote to data
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    async fetchQuotes() {
      const response = await fetch('quotes.json'); // Adjust the path accordingly
      const quotes = await response.json();
      return quotes;
    },
    getRandomQuote(quotes) {
      return quotes[Math.floor(Math.random() * quotes.length)];
    },
    async updateDailyQuote() {
      const quotes = await this.fetchQuotes();
      const now = new Date().getTime();
      const lastQuoteTimestamp = localStorage.getItem('lastQuoteTimestamp');

      // Check if 6 hours have passed
      if (!lastQuoteTimestamp || now - lastQuoteTimestamp >= 21600000) {
        const newQuote = this.getRandomQuote(quotes);
        this.dailyQuote = newQuote;
        localStorage.setItem('dailyQuote', JSON.stringify(newQuote));
        localStorage.setItem('lastQuoteTimestamp', now);
      } else {
        this.dailyQuote = JSON.parse(localStorage.getItem('dailyQuote'));
      }
    },
  },
  async mounted() {
    await this.updateDailyQuote();
  },
  components: {
    Navbar,
  },
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
  width: 3px;
  /* Increased width */
  background-color: #7A7A7A;
  /* Optional */
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

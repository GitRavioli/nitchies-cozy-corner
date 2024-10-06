<script>


</script>


<template>
    <footer class="w-full py-6 text-center sm:py-8 lg:py-10 relative">
        <p class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-md">&copy; Nitchie's Cozy Corner. All rights
            reserved.</p>

        <div class="mt-6">
            <!-- View Changelog Button -->
            <div class="mt-4">
                <a href="/changelog" class=" font-pixel text-[#5E5242] text-sm sm:text-base lg:text-lg">
                    View Changelog
                </a>
            </div>

            <!-- Back-to-Top with Pixelated Handheld Game Console -->
            <div class="mt-6">
                <img :style="consoleStyle" src="/Img/handheld-game-console.png" alt="Handheld Console Icon"
                    class="w-8 h-8 inline-block sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-5" />
                <a href="#" class="font-pixel text-[#5E5242] text-sm sm:text-base lg:text-lg" :style="textStyle">Back to
                    top</a>
            </div>
        </div>
    </footer>
</template>

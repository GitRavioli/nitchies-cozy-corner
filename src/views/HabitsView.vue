<script setup>
</script>

<template>
    <div class="min-h-screen bg-reddish-brown-light flex flex-col">
        <!-- Main Content -->
        <main class="grid grid-cols-2 md:grid-cols-2 gap-6 flex-grow container mx-auto py-8 px-4 lg:px-8">
            <!-- Habits Section -->
            <section class="bg-pine-green-light p-6 rounded-lg shadow-md mb-8">
                <h1 class="font-Dekko text-4xl text-pine-green-dark font-bold mb-6">Daily Habits</h1>
                <ul class="space-y-4">
                    <li v-for="(habit, index) in dailyHabits" :key="index"
                        class="bg-pine-green-dark text-soft-bronze-light p-4 rounded-lg shadow">
                        <h2 class="font-Edu text-2xl font-bold mb-2">{{ habit.title }}</h2>
                        <p class="text-lg text-purple-mauve-light">{{ habit.description }}</p>
                    </li>
                </ul>
            </section>

            <section class="bg-purple-mauve-light p-6 rounded-lg shadow-md mb-8">
                <h1 class="font-Dekko text-4xl text-purple-mauve-dark font-bold mb-6">Weekly Habits</h1>
                <ul class="space-y-4">
                    <li v-for="(habit, index) in weeklyHabits" :key="index"
                        class="bg-purple-mauve-dark text-purple-mauve-light p-4 rounded-lg shadow">
                        <h2 class="font-Edu text-2xl font-bold mb-2">{{ habit.title }}</h2>
                        <p class="text-lg text-mustard-brown-light">{{ habit.description }}</p>
                    </li>
                </ul>
            </section>
        </main>
        <footer class="font-Dekko font-bold bg-purple-mauve-dark p-10 text-center text-mustard-brown-light">
            <p>&copy; 2024 Cozy Vibes. All rights reserved.</p>
        </footer>
    </div>
</template>



<script>
export default {
    data() {
        return {
            dailyHabits: [
                {
                    title: 'Mindful Stretching or Yoga',
                    description: 'Incorporate short, gentle stretches or yoga sessions into your day. They can be done in the comfort of your home and don’t require intense physical effort.',
                },
                {
                    title: 'Reading Breaks',
                    description: 'Take regular breaks throughout your day to read a book or listen to an audiobook. This can help reduce stress and keep you engaged in your interests while promoting relaxation.',
                },
                {
                    title: 'Hydration Reminder',
                    description: 'Keep a water bottle at your desk and set reminders to drink water. Staying hydrated is crucial for overall health and can be seamlessly integrated into your tech-centric lifestyle.',
                },
                {
                    title: 'Digital Detox Time',
                    description: 'Allocate specific times when you unplug from screens to give your eyes and mind a break. Use this time to enjoy other activities, like reading a physical book or engaging in a hobby.',
                },
                {
                    title: 'Mindfulness or Meditation',
                    description: 'Spend a few minutes each day practicing mindfulness or meditation. There are many apps and online resources that offer guided sessions, which can be done in a quiet, cozy corner of your home.',
                },
            ],
            weeklyHabits: [
                {
                    title: 'Minimalist Decluttering',
                    description: 'Dedicate a small amount of time each week to declutter a part of your living space. This aligns with your love for minimalism and helps create a calming environment.',
                },
                {
                    title: 'Nature Walks',
                    description: 'If you dislike traditional workouts, try gentle nature walks or hikes. These can be peaceful and enjoyable, offering a break from screen time and a chance to appreciate the outdoors.',
                },
                {
                    title: 'Creative Hobbies',
                    description: 'Engage in creative hobbies such as drawing, writing, or crafting. These activities can be both relaxing and fulfilling, fitting well with your introverted nature.',
                },
                {
                    title: 'Cozy Rituals',
                    description: 'Establish weekly cozy rituals, like a hot tea or coffee session with a favorite book or a movie night with snacks you enjoy. These small, comforting practices can add joy to your routine.',
                },
                {
                    title: 'Tech-Free Zone',
                    description: 'Create a tech-free space or time in your week for activities that don’t involve screens. This could be a time for reading, meditating, or engaging in a hobby that allows you to unwind and recharge.',
                },
            ],
        };
    },
};
</script>

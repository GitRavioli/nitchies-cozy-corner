<template>
    <div class="min-h-screen bg-reddish-brown-light flex flex-col">
        <main class="flex-grow container mx-auto py-8">
            <section class="bg-pine-green-light p-6 rounded-lg shadow-md">
                <h1 class="font-Edu text-4xl text-pine-green-dark font-bold mb-4">{{ entry?.title || 'Untitled' }}</h1>
                <p class="text-soft-bronze-light text-lg whitespace-pre-wrap">
                    {{ entry?.content || 'No content available' }}
                </p>
            </section>
            <!-- Go back button -->
            <button @click="goBack"
                class="mt-6 bg-mustard-brown-dark text-soft-bronze-light py-2 px-4 rounded-lg shadow-md hover:bg-mustard-brown-light focus:outline-none">
                Go back to Journal List
            </button>
        </main>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            entry: {
                title: '',
                content: ''
            },
        };
    },
    created() {
        const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        this.entry = entries[this.id] || { title: 'Entry not found', content: '' };
    },
    methods: {
        goBack() {
            this.$router.push('/journal'); // Navigate back to the main journal list
        }
    }
};
</script>
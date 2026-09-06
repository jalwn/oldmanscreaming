<template>
    <section class="min-h-[80vh] flex flex-col justify-center items-center px-6 py-16 text-center">
        <div class="max-w-lg w-full flex flex-col items-center gap-6">
            <h2 class="font-display text-2xl font-medium text-[#bc471b] tracking-wide sticker-text">Get in touch</h2>
            <p class="text-slate-200 text-lg">
                Tell me about your project or what you need help with. I'll get back to you.
            </p>

            <UButton
                icon="i-lucide-linkedin"
                label="Message me on LinkedIn"
                color="primary"
                to="https://www.linkedin.com/in/jalwan/"
                external
                target="_blank"
                class="mt-2"
            />
        </div>
    </section>
</template>

<script setup>
useHead({
    meta: [{
        name: 'description',
        content: 'Get in touch with Jalwan Waheed, software engineer in the Maldives.',
    }],
})
</script>

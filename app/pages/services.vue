<script setup>
const services = [
    {
        icon: 'i-lucide-server',
        title: 'Self-hostable internal tools',
        description: 'Affordable, self-hosted apps for offices and small businesses that replace recurring software subscriptions. Data stays on your infrastructure.',
    },
    {
        icon: 'i-lucide-shield-check',
        title: 'Code review & rescue',
        description: 'Audit and clean up vibe-coded or fast-grown codebases. I make them scalable, maintainable, and production-ready so you can actually build on them.',
    },
    {
        icon: 'i-lucide-gauge',
        title: 'Scale & optimize',
        description: 'Take an existing application that is slowing down and make it fast and resilient, from database tuning to async processing to caching.',
    },
]
</script>

<template>
    <section class="min-h-[80vh] flex flex-col justify-center items-center px-6 py-16">
        <div class="max-w-3xl w-full">
            <h2 class="font-display text-2xl font-medium text-[#bc471b] tracking-wide sticker-text mb-2">Services</h2>
            <p class="text-slate-200 text-lg">
                Whether you need a tool built, an existing app fixed up, or something scaled to
                handle real traffic, I can help.
            </p>

            <div class="grid gap-5 sm:grid-cols-3 mt-10">
                <div
                    v-for="service in services"
                    :key="service.title"
                    class="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-white/[0.03]"
                >
                    <UIcon :name="service.icon" class="size-7 text-primary shrink-0" />
                    <h3 class="text-white font-semibold min-h-[3rem] flex items-center">{{ service.title }}</h3>
                    <p class="text-slate-200 text-sm leading-relaxed">{{ service.description }}</p>
                </div>
            </div>

            <div class="mt-12 flex flex-col items-center gap-2 text-center">
                <p class="text-slate-200">Have a project in mind?</p>
                <UButton
                    icon="i-lucide-mail"
                    label="Get in touch"
                    color="primary"
                    to="/contact"
                />
            </div>
        </div>
    </section>
</template>

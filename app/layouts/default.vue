<script setup>
const route = useRoute()

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
]
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <header class="sticky top-0 z-50 border-b border-white/10 bg-[#64748B]/85 backdrop-blur">
            <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <NuxtLink to="/" class="font-display text-xl text-primary sticker-lift">Jalwa<span class="logo-block"><span class="logo-char">n</span></span></NuxtLink>

                <nav class="flex items-center gap-6">
                    <NuxtLink
                        v-for="link in navLinks"
                        :key="link.to"
                        :to="link.to"
                        class="text-sm transition-colors"
                        :class="route.path === link.to
                            ? 'text-white font-medium'
                            : 'text-slate-300 hover:text-white'"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </nav>
            </div>
        </header>

        <main class="flex-1">
            <slot />
        </main>

        <footer class="border-t border-white/10 py-8 px-6">
            <div class="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-slate-400 text-sm">&copy; 2026 Ahmed Jalwan Waheed</p>
                <div class="flex items-center gap-6">
                    <a href="https://github.com/jalwn" target="_blank" rel="noopener"
                       class="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                        <UIcon name="i-lucide-github" class="size-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/jalwan/" target="_blank" rel="noopener"
                       class="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                        <UIcon name="i-lucide-linkedin" class="size-5" />
                    </a>
                    <a href="/resume.txt" target="_blank"
                       class="text-slate-400 hover:text-white transition-colors" aria-label="Resume">
                        <UIcon name="i-lucide-file-user" class="size-5" />
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

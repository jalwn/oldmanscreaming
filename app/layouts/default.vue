<script setup>
const route = useRoute()
const mobileOpen = ref(false)
const headerRef = ref(null)

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
]

watch(() => route.path, () => {
    mobileOpen.value = false
})

function onClickOutside(event) {
    if (mobileOpen.value && headerRef.value && !headerRef.value.contains(event.target)) {
        mobileOpen.value = false
    }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <header ref="headerRef" class="sticky top-0 z-50 border-b border-white/10 bg-[#64748B]/85 backdrop-blur">
            <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <NuxtLink to="/" class="font-display text-xl text-primary sticker-lift whitespace-nowrap">Jalwa<span class="logo-block"><span class="logo-char">n</span></span></NuxtLink>

                <nav class="hidden sm:flex items-center gap-6">
                    <NuxtLink
                        v-for="link in navLinks"
                        :key="link.to"
                        :to="link.to"
                        class="text-sm transition-colors"
                        :class="route.path === link.to
                            ? 'text-white font-medium'
                            : 'text-slate-200 hover:text-white'"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </nav>

                <UButton
                    :icon="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'"
                    color="neutral"
                    variant="ghost"
                    class="sm:hidden"
                    aria-label="Toggle menu"
                    @click="mobileOpen = !mobileOpen"
                />
            </div>

            <Transition name="fade">
                <div
                    v-if="mobileOpen"
                    class="sm:hidden absolute top-full inset-x-0 bg-[#64748B]/95 backdrop-blur border-b border-white/10 shadow-lg"
                >
                    <nav class="max-w-4xl mx-auto px-6 py-2 flex flex-col">
                        <NuxtLink
                            v-for="link in navLinks"
                            :key="link.to"
                            :to="link.to"
                            class="py-3 text-base transition-colors"
                            :class="route.path === link.to
                                ? 'text-white font-medium'
                                : 'text-slate-200 hover:text-white'"
                        >
                            {{ link.label }}
                        </NuxtLink>
                    </nav>
                </div>
            </Transition>
        </header>

        <main class="flex-1">
            <slot />
        </main>

        <footer class="border-t border-white/10 py-8 px-6">
            <div class="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-slate-200 text-sm">&copy; 2026 Ahmed Jalwan Waheed</p>
                <div class="flex items-center gap-6">
                    <a href="https://github.com/jalwn" target="_blank" rel="noopener"
                       class="text-slate-200 hover:text-white transition-colors" aria-label="GitHub">
                        <UIcon name="i-lucide-github" class="size-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/jalwan/" target="_blank" rel="noopener"
                       class="text-slate-200 hover:text-white transition-colors" aria-label="LinkedIn">
                        <UIcon name="i-lucide-linkedin" class="size-5" />
                    </a>
                    <a href="/resume.txt" target="_blank"
                       class="text-slate-200 hover:text-white transition-colors" aria-label="Resume">
                        <UIcon name="i-lucide-file-user" class="size-5" />
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

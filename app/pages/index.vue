<template>

    <section class="min-h-screen flex flex-col items-center  pt-[24vh]">
        <UContainer class="flex flex-col items-center gap-2">
            <UAvatar
                src="/oldmanscreaming.png"
                loading="lazy"
                class="rounded-none bg-transparent size-32"
                :ui="{ image: 'object-contain' }"
            />

            <h1 class="font-display text-2xl font-medium text-[#bc471b] tracking-wide sticker-text">Software Engineer</h1>

            <RotatingText
                class="font-mono text-lg font-bold text-primary mt-2 uppercase tracking-wider sticker-lift"
                :phrases="[
                    'I engineer the distributed systems behind the interface',
                    'Nice to meet you, I am Jalwan',
                    'I build resilient backends and polished interfaces',
                    'I ship and scale what I build',
                ]"
            />

            <div class="flex items-center gap-3 mt-4">
                <UButton
                    icon="i-lucide-github"
                    color="neutral"
                    variant="soft"
                    to="https://github.com/jalwn"
                    external
                    target="_blank"
                    aria-label="GitHub"
                />
                <UButton
                    class="border border-[#2DD4BF] text-white hover:bg-[#14B8A6] transition-colors duration-200"
                    icon="i-lucide-file-user"
                    label="Resume"
                    color="secondary"
                    to="/resume.txt"
                    target="_blank"
                />
            </div>
        </UContainer>

        <Transition name="fade">
            <UButton
                v-if="showArrow"
                icon="i-lucide-chevron-down"
                variant="ghost"
                color="neutral"
                class="mt-auto mb-8 animate-bounce"
                @click="scrollToAbout"
                aria-label="Scroll to about section"
            />
        </Transition>
    </section>

    <section id="about" class="min-h-screen flex flex-col justify-center items-center px-6 py-16">
        <div class="max-w-2xl w-full">
            <h2 class="font-display text-2xl font-medium text-[#bc471b] tracking-wide sticker-text-thin mb-6">About me</h2>

            <p class="text-slate-200 text-lg leading-relaxed">
                I'm a software engineer specializing in
                <span class="text-primary">high-performance systems</span> and fullstack
                applications. Currently at Dhiraagu, I focus on core platform engineering,
                architecting <span class="text-primary">distributed middleware</span>,
                integration services, and
                <span class="text-primary">message-driven architectures</span>
                that process millions of daily transactions.
            </p>

            <p class="text-slate-200 text-lg leading-relaxed mt-4">
                My work centers on bridging complex backend platforms with modern web interfaces.
                I build <span class="text-primary">API aggregation layers</span>,
                instrument end-to-end
                <span class="text-primary">distributed observability</span>
                across multi-service ecosystems, and optimize system latency through
                <span class="text-primary">strategic caching</span>,
                asynchronous processing, and targeted performance tuning.
            </p>

            <p class="text-slate-200 text-lg leading-relaxed mt-4">
                I also explore <span class="text-primary">applied AI</span>, optimizing local
                LLMs and building AI-driven internal tools. Whether diagnosing cross-system
                integration bottlenecks or fine-tuning database performance, I enjoy turning
                distributed system complexity into reliable, scalable software. In my spare time,
                I'm usually experimenting with new
                <span class="text-primary">systems languages</span>.
            </p>
        </div>
    </section>

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
</template>

<script setup>
const showArrow = ref(true)

function onScroll() {
    // Hide the arrow once the user scrolls away from the hero
    showArrow.value = window.scrollY < 150
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}
</script>


<style>
.sticker-text {
    text-shadow:
        -0.75px -0.75px 0 #fff,
         0.75px -0.75px 0 #fff,
        -0.75px  0.75px 0 #fff,
         0.75px  0.75px 0 #fff;
}

.sticker-text-thin {
    text-shadow:
        -0.5px -0.5px 0 #fff,
         0.5px -0.5px 0 #fff,
        -0.5px  0.5px 0 #fff,
         0.5px  0.5px 0 #fff;
}

.sticker-lift {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

</style>
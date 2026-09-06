<template>
    <section class="min-h-screen flex flex-col items-center pt-[24vh]">
        <UContainer class="flex flex-col items-center gap-2">
            <UAvatar
                src="/oldmanscreaming.png"
                alt="Illustration of Jalwan by his sister"
                loading="lazy"
                class="rounded-none bg-transparent size-32"
                :ui="{ image: 'object-contain' }"
            />

            <h1 class="font-display text-2xl font-medium text-[#bc471b] tracking-wide sticker-text">Software Engineer</h1>

            <RotatingText
                class="font-mono text-lg font-bold text-primary my-4 uppercase tracking-wider sticker-lift min-h-[3.5rem] [overflow-anchor:none]"
                :phrases="[
                    'I engineer event-driven architectures and high-throughput pipelines',
                    'Nice to meet you, I am Jalwan',
                    'I build resilient backends and polished interfaces',
                    'I ship and scale what I build',
                ]"
            />

            <div class="flex items-center gap-3">
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
    </section>
</template>

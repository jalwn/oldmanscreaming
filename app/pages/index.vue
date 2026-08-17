<template>

    <section class="min-h-screen flex flex-col items-center justify-center">
        <UContainer class="flex flex-col items-center gap-2">
            <UAvatar
                src="/oldmanscreaming.png"
                loading="lazy"
                class="rounded-none bg-transparent size-32"
                :ui="{ image: 'object-contain' }"
            />

            <h1 class="font-display text-2xl font-medium text-[#bc471b] tracking-wide sticker-text">Software Engineer</h1>
        </UContainer>
    </section>

    <section class="py-16 px-6 md:py-24 lg:py-32 flex justify-center">
            <p class="text-slate-200 text-sm leading-relaxed max-w-xl text-center">
                I'm a software engineer specializing in
                <span class="text-[#f59e0b]">high-performance systems</span> and fullstack applications.
                Currently at Dhiraagu, I focus on core platform engineering. I architect
                <span class="text-[#f59e0b]">distributed middleware</span>,
                integration services, and
                <span class="text-[#f59e0b]">message-driven architectures</span>
                that process millions of daily transactions.
                Lately, my work centers on bridging complex backend platforms with modern web interfaces.
                I specialize in building
                <span class="text-[#f59e0b]">API aggregation layers</span>,
                instrumenting end-to-end
                <span class="text-[#f59e0b]">distributed observability</span>
                across multi-service ecosystems, and optimizing system latency through
                <span class="text-[#f59e0b]">strategic caching</span>.
                I also explore
                <span class="text-[#f59e0b]">applied AI</span>,
                optimizing local LLMs and building AI-driven internal tools.
                From diagnosing cross-system integration bottlenecks to fine-tuning database performance,
                I enjoy turning distributed system complexities into reliable, scalable software.
                In my spare time, I'm usually experimenting with new
                <span class="text-[#f59e0b]">systems languages</span>.
            </p>
    </section>
    


</template>


<style>
.sticker-text {
    text-shadow:
        -0.75px -0.75px 0 #fff,
         0.75px -0.75px 0 #fff,
        -0.75px  0.75px 0 #fff,
         0.75px  0.75px 0 #fff;
}
</style>
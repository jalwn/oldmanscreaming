<template>
    <section class="min-h-[80vh] flex flex-col justify-center items-center px-6 py-16">
        <div class="max-w-2xl w-full">
            <h2 class="font-display text-2xl font-medium text-[#bc471b] tracking-wide sticker-text mb-6">Hi, I am Jalwan</h2>

            <p class="text-slate-200 text-lg leading-relaxed">
                I'm a software engineer specializing in
                <span class="text-primary">high-performance systems</span> and fullstack
                applications. Currently at
                <a href="https://www.dhiraagu.com.mv/" target="_blank" rel="noopener"
                   class="text-[#2DD4BF] hover:underline">Dhiraagu</a>, I focus on core platform
                engineering, architecting <span class="text-primary">distributed middleware</span>,
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
</template>

<script setup>
useHead({
    meta: [{
        name: 'description',
        content: 'Jalwan Waheed, software engineer in the Maldives, specializes in distributed systems, middleware, and observability.',
    }],
})
</script>

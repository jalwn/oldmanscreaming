<script setup>
const props = defineProps({
    phrases: { type: Array, default: () => [] },
    typeSpeed: { type: Number, default: 80 },     // ms per character typed
    deleteSpeed: { type: Number, default: 40 },   // ms per character deleted
    pauseAtEnd: { type: Number, default: 2000 },  // ms to hold the full phrase
    startDelay: { type: Number, default: 300 },   // ms before it starts
})

const displayText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)

function tick() {
    const full = props.phrases[currentIndex.value]
    const nextLength = displayText.value.length + (isDeleting.value ? -1 : 1)
    displayText.value = full.substring(0, nextLength)

    const finishedTyping = !isDeleting.value && displayText.value === full
    const finishedDeleting = isDeleting.value && displayText.value === ''

    let delay = props.typeSpeed
    if (isDeleting.value) delay = props.deleteSpeed
    if (finishedTyping) delay = props.pauseAtEnd

    if (finishedTyping) isDeleting.value = true
    if (finishedDeleting) {
        isDeleting.value = false
        currentIndex.value = (currentIndex.value + 1) % props.phrases.length
    }

    setTimeout(tick, delay)
}

onMounted(() => setTimeout(tick, props.startDelay))
</script>

<template>
    <div class="font-mono">
        <template v-if="displayText.length > 0">
            <span>{{ displayText.slice(0, -1) }}</span><span class="cursor"><span class="cursor-char">{{ displayText.slice(-1) }}</span></span>
        </template>
        <span v-else class="cursor-empty">&nbsp;</span>
    </div>
</template>

<style scoped>
/* The block: amber via currentColor (stable here — .cursor's color is inherited, not animated) */
.cursor {
    display: inline-block;
    background: currentColor;
    animation: cursorBlock 1s step-end infinite;
}

@keyframes cursorBlock {
    0%, 100% { background: currentColor; }   /* amber block on */
    50% { background: transparent; }          /* block off */
}

/* The char: toggles between inverted gray and normal amber (via inherit) */
.cursor-char {
    animation: cursorChar 1s step-end infinite;
}

@keyframes cursorChar {
    0%, 100% { color: var(--ui-bg); }   /* gray (inverted) when block is on */
    50% { color: inherit; }              /* normal amber when block is off */
}

.cursor-empty {
    display: inline-block;
    background: currentColor;
    min-width: 0.6em;
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
</style>

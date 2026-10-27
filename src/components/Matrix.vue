<script setup>
import { ref, onMounted } from 'vue';

const {text} = defineProps({
  text: String
})
const matrixInterval = 1;
const maxExecutionTime = 3000;
const textMatrix = text.split("");
const fixedMatrix = [];

// Line breaks must not depend on the random characters, otherwise the text
// re-wraps on every frame (layout shift). Random characters come only from a
// pool that never creates a break opportunity, and characters that do create
// one (whitespace, "-", "/", ...) are never scrambled.
const keepReal = /[\s\-\/\\?!|]/;
const pool = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#&*<=>@^_~`"];

// Start with the real text (hidden) so the final layout is reserved up front.
const matrix = ref(textMatrix.slice());
const started = ref(false);

onMounted(() => {
    const stopLoader = setInterval(() => {
        started.value = true;

        if (textMatrix.length === 0) {
            clearInterval(stopLoader);
        }

        for (let i = 0; i < textMatrix.length; i++) {

            if (fixedMatrix.includes(i) || keepReal.test(textMatrix[i])) {
                matrix.value[i] = textMatrix[i];
            } else {
                matrix.value[i] = pool[Math.floor(Math.random() * pool.length)];
                if (matrix.value[i] == textMatrix?.[i]) {
                    fixedMatrix.push(i);
                }
            }

        }
        
    }, matrixInterval);

    setTimeout(() => {
        clearInterval(stopLoader);
        started.value = true;
        matrix.value = [];
        for (let i = 0; i < textMatrix.length; i++) {
            matrix.value[i] = textMatrix[i];
        }
    }, maxExecutionTime);
})

</script>

<template>
    <span v-for="(letter, i) in matrix" :class="{ real: started && letter == textMatrix?.[i], pending: !started }" :key="i">{{ letter }}</span>
</template>
  
<style scoped>
.real {
    color: #00FF41;
}

.pending {
    visibility: hidden;
}
</style>

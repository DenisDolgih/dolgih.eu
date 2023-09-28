<script setup>
import { ref, onMounted } from 'vue';

const {text} = defineProps({
  text: String
})
const matrixInterval = 1;
const maxExecutionTime = 3000;
const textMatrix = text.split("");
const fixedMatrix = [];

const matrix = ref([]);

onMounted(() => {
    
    const stopLoader = setInterval(() => {
        matrix.value = [];
        if (textMatrix.length === 0) {
            clearInterval(stopLoader);
        }

        for (let i = 0; i < textMatrix.length; i++) {

            if (fixedMatrix.includes(i) || textMatrix[i] == "\n") {
                matrix.value.push(textMatrix[i]);
            } else {
                matrix.value.push(String.fromCharCode(Math.floor(Math.random() * 93) + 32));
                if (matrix.value[i] == textMatrix?.[i]) {
                    fixedMatrix.push(i);
                }
            }

        }
    }, matrixInterval);

    setTimeout(() => {
        clearInterval(stopLoader);
        matrix.value = [];
        for (let i = 0; i < textMatrix.length; i++) {
            matrix.value.push(textMatrix[i]);
        }
    }, maxExecutionTime);
})

</script>

<template>
    <span v-for="(letter, i) in matrix" :class="{ real: letter == textMatrix?.[i] }">{{ letter }}</span>
</template>
  
<style scoped>
.real {
    color: #00FF41;
}
</style>

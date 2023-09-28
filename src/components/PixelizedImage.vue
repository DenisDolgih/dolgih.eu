<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
    'src': String
});

const canvas = ref(null);

onMounted(() => {
    const pieces = [];
    const image = new Image(300, 400);
    image.src = props.src;
    const ctx = canvas.value.getContext('2d');
    image.onload = () => {
        canvas.value.width = image.naturalWidth;
        canvas.value.height = image.naturalHeight;

        const stopIt = setInterval(() => {
            const squareSide = 20;
            const i = Math.floor(Math.random() * canvas.value.width / squareSide);
            const j = Math.floor(Math.random() * canvas.value.height / squareSide);
            ctx.drawImage(image, i * squareSide, j * squareSide, squareSide, squareSide, i * squareSide, j * squareSide, squareSide, squareSide);
        }, 5);

        setTimeout(() => {
            clearInterval(stopIt);
            ctx.drawImage(image, 0, 0, canvas.value.width, canvas.value.height);
        }, 3000);
    };
})


// get random color
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



</script>
<template>
    <canvas ref="canvas" />
</template>
<style scoped>
canvas {
    margin: 0 20px 20px 0;
    border-radius: 3px;
    width: 300px;
    height: 400px;
}
</style>
<script setup>
import Matrix from '../components/Matrix.vue';
import { onMounted, ref } from 'vue';
import cv from '../assets/cv.pdf';

const link = ref(null);

onMounted(() => {
    console.log(link.value);
    link.value.click();
})

</script>
<template>
    <div id="button-wrapper">
        <a :href="cv" ref="link" download="cv.pdf" target="_blank">
            <Matrix text="Download CV in PDF" />
        </a>
    </div>
</template>
<style scoped>
a {
    font-size: 3em;
    line-height: 4em;
    text-decoration: underline;
}
#button-wrapper {
    text-align: center;
}
</style>
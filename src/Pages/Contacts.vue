<script setup>
import Matrix from '../components/Matrix.vue'
import github from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import linkedin from '../assets/linkedin.svg'
import telegram from '../assets/telegram.svg'
</script>
<template>
    <ul>
        <li>
            <img :src="gmail" alt="Denis Dolgih Gmail" class="contact_icon"> 
            <strong>
                <Matrix text=" Email: " />
            </strong>
            <a href="mailto:denis.dolgih@gmail.com" alt="Denis Dolgih email">
                <Matrix text="denis.dolgih@gmail.com" />
            </a>
        </li>
        <li>
            <img :src="linkedin" alt="Denis Dolgih LinkedIn" class="contact_icon"> 
            <strong>
                <Matrix text=" LinkedIn: " />
            </strong>
            <a href="https://www.linkedin.com/in/denisdolgih/" alt="Denis Dolgih LinkedIn">
                <Matrix text="https://www.linkedin.com/in/denisdolgih/" />
            </a>
        </li>
        <li>
            <img :src="telegram" alt="Denis Dolgih Telegram" class="contact_icon">
            <strong>
                <Matrix text=" Telegram: " />
            </strong>
            <a href="https://t.me/denisdolgih" alt="Denis Dolgih Telegram">
                <Matrix text="https://t.me/denisdolgih" />
            </a>
        </li>
        <li>
            <img :src="github" alt="Denis Dolgih GitHub" class="contact_icon">
            <strong>
                <Matrix text=" GitHub: " />
            </strong>
            <a href="https://github.com/DenisDolgih" alt="Denis Dolgih GitHub">
                <Matrix text="https://github.com/DenisDolgih" />
            </a>
        </li>
    </ul>
</template>
<style scoped>
ul {
    font-size: 1.5em;
    line-height: 2.5em;
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
    text-indent: -1em;
}
.contact_icon {
    width: 2em;
    vertical-align: middle;
}
</style>
<script setup>
import home from './assets/home.svg'
import pet from './assets/pet.svg'
import cv from './assets/cv.svg'
import contacts from './assets/contacts.svg'

</script>
<template>
  <nav>
    <router-link to="/"><img :src="home" alt="home icon"/>Home</router-link>
    <router-link to="/pet-projects"><img :src="pet" alt="pet projects icon"/>Pet projects</router-link>
    <router-link to="/cv"><img :src="cv" alt="cv in PDF icon"/>CV in PDF</router-link>
    <router-link to="/contacts"><img :src="contacts" alt="contacts icon"/>Contacts</router-link>
  </nav>
  <main>
    <router-view />
  </main>
  <footer>
    <p>&copy; Denis Dolgih</p>
  </footer>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;
  padding: 30px 0;
  font-weight: bold;
  font-size: 28px;
  border-bottom: #008F11 1px solid;

  @media only screen and (max-width: 910px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 810px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 650px) {
    font-size: 15px;
  }
}

nav a {
  text-align: center;
  border-bottom: transparent 3px solid;
  transition: border-bottom 0.5s;
  position: relative;
  padding-bottom: 15px;
}

nav a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #00FF41;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

nav a:hover::before {
  transform: scaleX(1);
} 

nav a img{
  display: block;
  height: 3em;
  margin: 0 auto 10px;
  opacity: 0.5;
}

main {
  margin: 0 auto;
  max-width: 1080px;
  padding: 10px;
  min-height: calc(100vh - 270px);
  @media only screen and (max-width: 650px) {
    text-align: center;
  }
}

footer {
  text-align: center;
  border-top: 1px solid #008F11;
}

.router-link-active {
  color: #00FF41;
  text-decoration: none;
  cursor: default;
}
.router-link-active img {
  opacity: 1;
}

</style>



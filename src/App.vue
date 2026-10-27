<script setup>
import home from "./assets/home.svg";
import pet from "./assets/pet.svg";
import cv from "./assets/cv.svg";
import contacts from "./assets/contacts.svg";
</script>
<template>
  <nav>
    <router-link to="/"><img :src="home" alt="home icon" />Home</router-link>
    <a href="https://internetschool.eu"
      ><img :src="pet" alt="pet projects icon" />Pet project</a
    >
    <router-link to="/cv"
      ><img :src="cv" alt="cv in PDF icon" />CV in PDF</router-link
    >
    <router-link to="/contacts"
      ><img :src="contacts" alt="contacts icon" />Contacts</router-link
    >
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
  border-bottom: #008f11 1px solid;

  @media only screen and (max-width: 910px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 810px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 650px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 15px;
    padding: 15px 0;
  }

  @media only screen and (max-width: 360px) {
    font-size: 10px;
    padding: 10px 0;
  }
}

nav a {
  text-align: center;
  border-bottom: transparent 3px solid;
  transition: border-bottom 0.5s;
  position: relative;
  padding-bottom: 15px;

  @media only screen and (max-width: 480px) {
    padding-bottom: 8px;
  }
}

nav a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #00ff41;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

nav a:hover::before {
  transform: scaleX(1);
}

nav a img {
  display: block;
  height: 3em;
  margin: 0 auto 10px;
  opacity: 0.5;

  @media only screen and (max-width: 480px) {
    height: 2.5em;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 360px) {
    height: 2em;
  }
}

main {
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  max-width: 1080px;
  padding: 10px;
  flex: 1;

  @media only screen and (max-width: 650px) {
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    padding: 8px;
  }
}

footer {
  text-align: center;
  border-top: 1px solid #008f11;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
}

.router-link-active {
  color: #00ff41;
  text-decoration: none;
  cursor: default;
}

.router-link-active img {
  opacity: 1;
}
</style>

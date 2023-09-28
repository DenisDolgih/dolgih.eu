<script setup>
import Matrix from '../components/Matrix.vue'
import avatar from '../assets/avatar.png'
import PixelizedImage from '../components/PixelizedImage.vue';
</script>

<template>
  <section id="avatar">
    <PixelizedImage :src="avatar" />
  </section>
  <section id="name">
    <h1>
      <Matrix text="Denis Dolgih" />
      <br />
      <small>
        <Matrix text="software engineer" />
      </small>
    </h1>
  </section>
  <section id="tech">
    <h2>
      <Matrix text="Technology Stack:" />
    </h2>
    <p>
      <Matrix text="Adminer, Apache, Babel, Bitbucket, Bootstrap, CakePHP, CSS, Cypress, Docker, Firebase, Flask, Git, 
          GitHub, HTML, IndexedDB, JavaScript, Jest, Jira, jQuery,
          Laravel, LESS, Linux, Localstorage, MariaDB, Materialize, MongoDB, MySQL, Nginx, PHP, PhpMyAdmin, PHPUnit, Pinia, Postfix, Python, 
          React, Redux, SASS, Selenium, SQL, SQLite, Tailwind, TypeScript, Vite, Vue, 
          Vuex, Webpack, Wordpress" />
    </p>
  </section>
  <section id="languages">
    <h2>
      <Matrix text="Human Languages:" />
    </h2>
    <p>
      <Matrix text="English, Russian, Ukrainian, Bulgarian" />
    </p>
  </section>
  <div style="clear: both"></div>
  <section id="about">

    <h2>
      <Matrix text="About Me:" />
    </h2>
    <p>
      <Matrix text="Hello, I'm Denis Dolgih, a Seasoned Web Developer with Over Two Decades of Experience." />
    </p>
    <p>
      <Matrix text="With more than 20 years of dedicated experience in the ever-evolving world of web development, 
          I bring a wealth of knowledge and expertise to the table. Throughout my career, 
          I've witnessed the internet transform from its infancy into the dynamic digital landscape we know today." />
    </p>
    <p>
      <Matrix
        text="My journey began in the early days of the World Wide Web when HTML and basic scripting languages were 
          the building blocks of online experiences. Since then, I've kept pace with the rapid advancements in technology, 
          continually expanding my skill set to encompass a wide range of programming languages, frameworks, and tools." />
    </p>
    <p>
      <Matrix text="Over the years, I've had the privilege of working on a diverse array of projects, 
          from pioneering e-commerce sites to complex web applications and responsive mobile designs. 
          My extensive experience has equipped me with a deep understanding of web development, 
          optimal performance, and the importance of seamless functionality." />
    </p>
    <p>
      <Matrix text="What sets me apart is not just my technical proficiency but also my commitment to delivering solutions 
          that not only meet but exceed client expectations. I thrive on tackling complex challenges and transforming 
          ideas into reality, all while adhering to best practices in web development." />
    </p>
    <p>
      <Matrix text="In addition to my technical skills, I'm a passionate advocate for clean code, scalability, 
          and efficiency." />
    </p>
    <p>
      <Matrix text="Today, I continue to stay at the forefront of web development trends, using my extensive knowledge 
          to help businesses establish a strong online presence and achieve their digital goals. 
          Whether it's creating visually stunning websites, optimizing performance, or solving intricate technical issues, 
          I'm dedicated to delivering excellence." />
    </p>
    <p>
      <Matrix text="If you're seeking a seasoned web developer with a proven track record of success and a genuine 
          passion for crafting exceptional online experiences, I'd be delighted to discuss how I can contribute 
          to your next project." />
    </p>
    <p>
      <Matrix
        text="I have a legal entity in the European Union and it is easy for customers from any country in the world to work with me." />
    </p>
  </section>
</template>

<style scoped>
h1 {
  padding: 0;
  margin: 0;
  font-size: 2em;
  line-height: 1.5;
}
h2 {
  font-size: 1.2em;
  margin-top: 0.9em;
  margin-bottom: 0.5em;
}

p {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.45;
}

#avatar {
  float: left;
  @media only screen and (max-width: 650px) {
    float: none;
  }
}

#name, #languages {
  display: inline-block;
}

#about{
  width: 100%;
}


</style>
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import './style.css'
import App from './App.vue'

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes
});

app.use(router);
app.mount('#app');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        // Registration was successful
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        // Registration failed
        console.error('Service Worker registration failed:', error);
      });
  }
  

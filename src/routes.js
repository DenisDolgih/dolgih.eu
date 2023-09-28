import Main from './Pages/Main.vue';
import PetProjects from './Pages/PetProjects.vue';
import Contacts from './Pages/Contacts.vue';
import CV from './Pages/CV.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/pet-projects', component: PetProjects },
    { path: '/contacts', component: Contacts },
    { path: '/cv', component: CV },
    { path: '/(.*)*', redirect: '/' }
];

export default routes;
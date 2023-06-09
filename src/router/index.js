import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoachDetail from "../pages/coaches/CoachDetail.vue";
import CoachesList from "../pages/coaches/CoachesList.vue";
import CoachRegistration from "../pages/coaches/CoachRegistration.vue";
import ContactCoach from "../pages/requests/ContactCoach.vue";
import RequestsReceived from "../pages/requests/RequestsReceived.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
      component: HomeView
    },

    {
      path: '/coaches',
      name: 'coaches',
      component: CoachesList
    },
    {
      path: '/coaches/:id,',
      component: CoachDetail,
      props:true,
      children: [
        {
          path: '/contact',
          component: ContactCoach}
      ],
    },
    {
      path: '/register',
      component: null
    },

    {
      path: '/contact',
      component: CoachRegistration
    },
    {
      path: '/register',
      component: CoachRegistration
    },
    {
      path: '/requests',
      component: RequestsReceived
    },
    // {
    //   path: '/:notFound(*)',
    //   component: NotFound
    // }

  ]
})

export default router

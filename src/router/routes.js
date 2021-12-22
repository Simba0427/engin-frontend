
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'projects', component: () => import('src/pages/Projects.vue') },
      { path: 'project-create', component: () => import('pages/ProjectCreate.vue') },
      { path: 'project/:id', component: () => import('pages/Project.vue') },
      { path: 'profile/:id', component: () => import('pages/Profile.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

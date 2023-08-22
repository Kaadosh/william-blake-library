import { createRouter, createWebHistory } from 'vue-router'
import PaintingList from '@/components/PaintingList.vue';
import PaintingDetail from '@/components/PaintingDetail.vue';

const routes = [
  { path: '/', compoment: PaintingList },
  { path: '/painting/:id', compoment: PaintingDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
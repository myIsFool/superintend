
import {createRouter,createWebHashHistory} from 'vue-router'
const routes=[{
    path:'/Login',
    name:'Login',
    component:()=>import('@/Home/login.vue')
},{
    path:'/',
    name:'index',
    component:()=>import('@/Home/Index.vue'),
},{
    path:'/ManageIndex',
    name:'ManageIndex',
    component:()=>import('@/Manage/Index.vue')
}]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
router.beforeEach((to,from,next)=>{
    console.log(to);
    console.log(from);
    let token=localStorage.getItem("token");
    if(token||to.path=="/Login"){
next();
    }else{
next("/Login");

    }

})
export default router;
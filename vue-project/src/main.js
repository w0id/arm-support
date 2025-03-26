import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

// async function init() {
//     while (!window.eel) {
//       await new Promise(r => setTimeout(r, 100))
//     }
    
    createApp(App).use(router).mount('#app')
// }

// init()
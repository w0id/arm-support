export const menuItems = [
    { 
        title: 'Accounts', 
        uri: '/accounts', 
        component: () => import('../views/Accounts.vue')
    },
    { 
        title: 'Certificates', 
        uri: '/certs', 
        component: () => import('../views/Certificates.vue')
    },
    { 
        title: 'Kubernetes', 
        uri: '/k8s', 
        component: () => import('../views/K8S.vue')
    },
    { 
        title: 'Docker', 
        uri: '/docker', 
        component: () => import('../views/Docker.vue')        
    }
]

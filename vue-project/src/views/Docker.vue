<template>
    <main class="docker-page">
        <h1>{{ DynTitle }}</h1>        
        <p>This is the k8s page</p>
        <br>
        <p>{{ pyBtn }}</p>
        <br>
        <button @click="reset">Click me</button>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const DynTitle = route.meta.pyData;

    const pyBtn = ref('');
    async function reset(){
        pyBtn.value = await eel.push_btn()();
    }
</script>
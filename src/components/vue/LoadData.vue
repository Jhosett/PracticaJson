<script setup>
import { ref } from 'vue';


const users = ref([])

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            users.value = data
        })
        
}
</script>

<template>
    <div 
    v-for="user in users"
    :key="user.id"
    class="bg-slate-300 mb-1"
    >
    {{ user.name }}</div>
    <button @click="loadData" >
        Cargar Info
    </button>
</template>
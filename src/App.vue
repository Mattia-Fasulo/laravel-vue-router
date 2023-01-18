<template>
    <AppHeader />
    <div class="container">
        <router-view></router-view>
    </div>
    
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'

export default {

    name: 'App',
    components: {
        AppHeader
    },


    data() {
        return {
            title: 'Welcome back Vue',
            apiURL: 'http://localhost:8000/api',
            projects: []
        }
    },

    methods: {
        getPost() {
            axios.get(`${this.apiURL}/projects`).then((response) => {
                // console.log(response);
                // this.projects = response.data.result.data;
                // console.log(this.projects);
                // console.log(response.data)
            });
        }
    },
    mounted() {
        // this.getPost();
    }

}
</script>

<style lang="scss" scoped>

</style>
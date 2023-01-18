<template>
    <section v-if="project" class="bg-light">
        <h1 class="mb-3">{{ project.title }}</h1>
        <img :src="`${store.imagePath}${project.cover_image}`" class="card-img-top w-25" :alt="project.title">
        <p>{{ project.description }}</p>
        <div v-if="project.category">
            <h5>Category: {{ project.category.name }}</h5>
        </div>
        <div v-if="project.tags && project.tags.length > 0">
            
            <div>
                <h5 class="d-inline">Tags :</h5>
                <span v-for="(tag, index) in project.tags" :key="index" class="badge text-bg-secondary mx-2">{{ tag.name }}</span>
            </div>
        </div>
    </section>
    <section v-else>
    <h2 class="text-center text-white mt-3">Loading...</h2>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';


export default {
    name: 'SingleProjectPage',
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        getProject() {
            // console.log(this.$route)
            axios.get(`${this.store.apiURL}/projects/${this.$route.params.slug}`).then((response) => {
                // console.log(response.data);
                if (response.data.success) {
                    // console.log(response.data.result);
                    this.project = response.data.result;
                } else {
                    // console.log(this.$router);
                    this.$router.push({ name: 'not-found' });
                }
            })
        }
    },
    mounted() {
        this.getProject();
    }
}



</script>

<style lang="scss" scoped>

section {
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 10px;
}

</style>
<template>
    
        <div class="col-12 col-md-4 d-flex justify-content-center mt-5" v-for="(project, index) in obj" :key="index">
            <div class="card" style="width: 18rem;">
                <img :src="`${store.imagePath}${project.cover_image}`" class="card-img-top" :alt="project.title">
                <div class="card-body d-flex flex-column align-items-center">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ truncateContent(project.description) }}</p>
                    <router-link class="btn btn-secondary max-content"
                        :to="{ name: 'single-project', params: { slug: project.slug } }">
                        See the project
                    </router-link>
                </div>
            </div>
        </div>
    
</template>

<script>
import { store } from '../../store';

export default {
    name: 'CardComponent',
    props: {
        obj: Array
    },
    data(){
        return {
            store,
            contentMaxLen: 60
        }
    },
    methods: {
        truncateContent(text) {
            if (text.length > this.contentMaxLen) {
                return text.substr(0, this.contentMaxLen) + "...";
            }
            return text;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
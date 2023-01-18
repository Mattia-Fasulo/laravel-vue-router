<template>
    <section>
        <h1 class="text-center my-3">Projects List</h1>
        <div class="row">
            <div class="col-12 col-md-4 d-flex justify-content-center mt-5" v-for="(project, index) in projects"
                :key="index">
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
        </div>
        <nav aria-label="Page-navigation" class="d-flex justify-content-center mt-5">
            <ul class="pagination">
                <!-- <li class="page-item"><a class="page-link" href="#">Previous</a></li> -->
                <li class="page-item" v-for="n in lastPage"><a class="page-link" @click="getProjects(n)">{{ n }}</a></li>
            </ul>
        </nav>

    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ProjectsListPage',
    data() {
        return {
            store,
            projects: [],
            contentMaxLen: 60,
            currentPage: 1,
            lastPage: null,
            total: 0
        }
    },
    methods: {
        getProjects(pagenum) {
            axios.get(`${this.store.apiURL}/projects`, { params:{page: pagenum}  }).then((response) => {
                console.log(response.data.result.last_page)
                this.projects = response.data.result.data;
                this.currentPage = response.data.result.current_page;
                this.lastPage = response.data.result.last_page;
                this.total = response.data.result.total;
            })
        },
        truncateContent(text) {
            if (text.length > this.contentMaxLen) {
                return text.substr(0, this.contentMaxLen) + '...';
            }
            return text;
        }
    },
    mounted() {
        this.getProjects(1);
    }
}
</script>

<style lang="scss" scoped>
.max-content {
    width: max-content;
}

li.page-item {
    cursor: pointer;
}
</style>
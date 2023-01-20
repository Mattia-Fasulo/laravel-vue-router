<template>
    <section>
        <h1 class="text-center mt-3">Projects List</h1>
        <div class="row">
            <CardComponent :obj="this.projects" />
        </div>
        <nav aria-label="Page-navigation" class="d-flex justify-content-center mt-5">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <button class="page-link" :disabled="currentPage === 1"
                        @click="getProjects(currentPage - 1)">Previous
                    </button>
                </li>
                <li class="page-item" v-for="n in lastPage"><a class="page-link" :class="{'active' : currentPage === n}" @click="getProjects(n)">{{ n }}</a>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                    <button class="page-link" :disabled="currentPage === lastPage"
                        @click="getProjects(currentPage + 1)">Next
                    </button>
                </li>
            </ul>
        </nav>

    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import CardComponent from '../components/componentsGeneral/cardComponent.vue';


export default {
    name: "ProjectsListPage",
    components: {
        CardComponent
    },
    data() {
        return {
            store,
            projects: [],
            contentMaxLen: 60,
            currentPage: 1,
            lastPage: null,
            total: 0
        };
    },
    methods: {
        getProjects(pagenum) {
            axios.get(`${this.store.apiURL}/projects`, { params: { page: pagenum } }).then((response) => {
                console.log(response.data.result.last_page);
                this.projects = response.data.result.data;
                this.currentPage = response.data.result.current_page;
                this.lastPage = response.data.result.last_page;
                this.total = response.data.result.total;
            });
        },
    },
    mounted() {
        this.getProjects(1);
    },

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
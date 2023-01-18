import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    apiURL: 'http://localhost:8000/api',
    imagePath: 'http://localhost:8000/storage/',

})
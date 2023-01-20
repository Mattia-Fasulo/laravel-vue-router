<template>


<section class="contact_me pt-3 d-flex  justify-content-center">
        <div class="inner-wrapper p-3 bg-light border border-secondary w-75">
            <div class="container-fluid text-center"> 
                <div v-if="success" class="alert alert-success text-start" role="alert">
                    The message has been successfully sent!
                </div>               
                <div class="row">
                    <form class="col-12 text-start" @submit.prevent="sendForm()">
                        <div class="mb-3">
                            <input class="form-control border border-secondary" 
                                type="text" name="name" id="name" placeholder="Name" v-model="name" :class="{'is-invalid': errors.name}" required>
                                <p v-for="(error,index) in errors.name" :key="index" class="invalid-feedback">
                                    {{ error }}
                                </p>
                        </div>
                        <div class="mb-3">
                            <input class="form-control border border-secondary" 
                                type="text" name="email" id="email" placeholder="Email" v-model="email" :class="{'is-invalid': errors.email}" required>
                                <p v-for="(error,index) in errors.email" :key="index" class="invalid-feedback">
                                    {{ error }}
                                </p>

                        </div>
                        <div class="mb-3">
                            <textarea class="border form-control  border-secondary"
                               name="message" id="message" cols="30"
                                rows="10" placeholder="Message" v-model="message" :class="{'is-invalid': errors.message}" required></textarea>
                                <p v-for="(error,index) in errors.message" :key="index" class="invalid-feedback">
                                    {{ error }}
                                </p>
                        </div>
                        <button class="btn btn-lg btn-secondary text-white" type="submit" :disabled="loading">{{loading ? 'Sending...' : 'Send'}}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';
import { store } from '../../store';

export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            loading: false,
        }
    },
    methods: {
        sendForm(){
                this.loading = true;
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
                axios.post(`${this.store.apiURL}/contacts`, data).then((response)=>{
                    console.log(response.data);
                    this.success = response.data.success;
                    if(!this.success){
                        this.errors = response.data.errors;
                        //console.log(this.errors);
                    } else {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }
                    this.loading = false;
                });
            }
    },
}

</script>

<style lang="scss" scoped>

.inner-wrapper {
    border-radius: 10px;
}

</style>
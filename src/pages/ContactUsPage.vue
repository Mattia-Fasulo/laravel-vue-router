<template>
    <section>
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-3">Contacts Us</h1>
            </div>
            <ContactForm />
        </div>
    </section>
</template>

<script>
import ContactForm from '../components/componentsGeneral/ContactForm.vue';
    export default {
        name: 'ContactUsPage',
        components: {
            ContactForm
        }
    }
</script>

<style lang="scss" scoped>

</style>
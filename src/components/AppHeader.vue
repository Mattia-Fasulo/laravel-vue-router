<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                
               
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                       

                        <li class="nav-item" v-for="item in menuItems" key="index">
                            <router-link active-class="active" :to="{name : item.routeName}" class="nav-link fs-5">
                            {{ item.label }}
                            </router-link>
                        </li>

                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Projects',
                    routeName: 'projects-list'
                },
                {
                    label: 'Contac Us',
                    routeName: 'contact-us'
                },
                {
                    label: 'About Us',
                    routeName: 'about-us'
                }
                

            ]
        }

    }
}
</script>

<style lang="scss" scoped>

</style>
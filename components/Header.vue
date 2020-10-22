<template>
    <div class="navbar fixed-top">
        <nuxt-link to="/" class="navbar-brand">
            <img src="/images/year13_logo_black.png" alt="">
        </nuxt-link>
        <div v-if="is_enquiry">
            <button class="btn btn-enquiry">Enquire</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    props: {
        is_enquiry: false
    }
}
</script>

<style lang="scss">
    .navbar {
        height: 76px;
        background-color: #FFF;
        padding: 0 50px;
        box-shadow: 0 0 13px #ababab;
        .navbar-brand {
            img {
                width: 90px;
            }
        }
        .btn-enquiry {
            color: #FFF;
            padding: 10px 45px;
            background-color: #5337C5;
            border-radius: 30px;
            &:hover {
                color: #5337C5;
                background-color: #FFF;
                border: 1px solid #5337C5;
            }
        }
    }
   
</style>
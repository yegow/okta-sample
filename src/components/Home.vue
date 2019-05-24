<template>
    <div class="row center-align">
        <div class="col s12">
            <div class="card">
                <div class="">
                    <span class="card-title">Welcome</span>
                    <p>A simple app demonstrating Okta-based authentication.</p>
                    <div class="divider"></div>
                    <div class="section">
                        <router-link class="waves-effect waves-light btn-small"
                            to="/login">
                            Log in</router-link>
                        <router-link class="waves-effect waves-light btn-small"
                            to="/signup">
                            Sign up</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    watch: {
        '$route': 'isAuthenticated'
    },
    
}
</script>

<style>
</style>
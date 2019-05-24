<template>
    <div>
        <div class="row center-align">
            <h4>Log in</h4>
            <form class="col s6 push-s3" @submit.prevent="login">
                <div class="card-panel red" v-if="error">{{error}}</div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="emailInput" placeholder="Email"
                        type="text" v-model="email" />
                        <label for="emailInput">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="passwordInput" placeholder="Password"
                        type="password" v-model="password" />
                        <label for="passwordInout">Password</label>
                    </div>
                </div>
                <button class="btn" type="submit">Log in</button>
            </form>
        </div>
    </div>
</template>

<script>
import auth from '@/util/auth'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        login() {
            auth.login(this.email, this.password, (err) => {
                if (err) {
                    this.error = err.message
                    return
                } 
                this.$router.replace(this.$route.query.redirect || '/feed')
            })
        }
    }
}
</script>

import OktaAuth from '@okta/okta-auth-js'
import config from '@/app.config'

const authClient = new OktaAuth({
    url: config.oktaDomain,
    issuer: `https://${config.oktaDomain}/oauth2/default`,
    tokenManager: {
        secure: true
    }
})
/**
 * Globals: localStorage
 */

export default {
    login(email, pass, cb) {
        return authClient.signIn({
            username: email,
            password: pass
        }).then(res => {
            alert(res.sessionToken)
            if (res.status === 'SUCCESS') {
                localStorage.setItem('oktaToken', res.sessionToken)
                cb && cb(null)
                this.onChange(true)
            } // handle else
        }).fail((err) => {
            // some way to log
            cb && cb(err)
            this.onChange(false)
        })
    },
    getToken() {
        return localStorage.getItem('oktaToken')
    },
    logout(cb) {
        authClient.signOut().then(() => {
            cb && cb()
            this.onChange(false)
        })

        localStorage.removeItem('oktaToken')
        cb && cb()
    },
    loggedIn() {
        return !!localStorage.getItem('oktaToken')
    },
    onChange() {}
}
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
        alert(email + ': ' + pass)
        return authClient.signIn({
            username: email,
            password: pass
        }).then(res => {
            if (res.status === 'SUCCESS') {
                this.onChange(true)
                authClient.session.setCookieAndRedirect(
                    res.sessionToken,
                    'http://localhost:' + config.port + '/feed'
                )
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
        authClient.signOut().
            then(() => {
                alert('Signed out')
                cb && cb()
                this.onChange(false)
            })
    },
    loggedIn() {
        return !!localStorage.getItem('oktaToken')
    },
    onChange() {}
}
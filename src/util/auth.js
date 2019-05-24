/**
 * Globals: localStorage
 */

export default {
    login(email, pass, cb) {
        const accessToken = localStorage.getItem('oktaToken')
        if (accessToken) {
            cb && cb(true)
            this.onChange(true)
            return
        }

        pretendRequest(email, pass, res => {
            if (res.authenticated) {
                localStorage.setItem('oktaToken', res.token)
                cb && cb(true)
                this.onChange(true)
            } else {
                cb && cb(false)
                this.onChange(false)
            }
        })
    },
    getToken() {
        return localStorage.getItem('oktaToken')
    },
    logout(cb) {
        localStorage.removeItem('oktaToken')

        cb && cb()
        this.onChange(false)
    },
    loggedIn() {
        return !!localStorage.getItem('oktaToken')
    },
    onChange() {}
}

function pretendRequest(email, pass, cb) {
    setTimeout(() => {
        if (email ==='devyego@gmail.com' && pass === 'password1') {
            cb({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            cb({
                authenticated: false
            })
        }
    }, 0)
}
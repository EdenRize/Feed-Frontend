

import md5 from 'crypto-js/md5'

const avatarService = {
    getGravatarUrl(email) {
        const trimmedEmail = email.trim().toLowerCase()
        const hash = md5(trimmedEmail)
        return `https://www.gravatar.com/avatar/${hash}`
    }
}

export default avatarService

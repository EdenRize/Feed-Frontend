export const utilService = {
    readJsonFile,
    makeId,
    makeLorem,
    getRandomInt,
    debounce,
    saveToStorage,
    loadFromStorage,
    getRandomIntInclusive,
    formatTimestamp
}

function readJsonFile(path) {
    const str = fs.readFileSync(path, 'utf8')
    const json = JSON.parse(str)
    return json
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function formatTimestamp(timestamp) {
    const now = new Date()
    const date = new Date(timestamp)

    // Check if the date is today
    if (
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
    ) {
        // Check if it is in the last 24 hours
        const diffInMinutes = Math.floor((now - date) / (1000 * 60))
        if (diffInMinutes < 1) {
            return 'Now'
        } else if (diffInMinutes < 60) {
            const pluralS = diffInMinutes > 1 ? 's' : ''
            return `${diffInMinutes} minute${pluralS} ago`
        } else if (diffInMinutes < 60 * 24) {
            const diffInHours = Math.floor(diffInMinutes / 60)
            if (diffInHours === 1) {
                return '1 hour ago'
            } else if (diffInHours < 10) {
                return `${diffInHours} hours ago`
            }

            const hours = date.getHours().toString().padStart(2, '0')
            const minutes = date.getMinutes().toString().padStart(2, '0')
            return `today ${hours}:${minutes}`
        }
        return 'today'
    }

    // Check if it is in the same year
    if (date.getFullYear() === now.getFullYear()) {
        const month = date.toLocaleString('default', { month: 'short' })
        const day = date.getDate()
        return `${month} ${day}`
    }

    // If it was more than a year ago, display the year only
    const year = date.getFullYear().toString()
    return year
}



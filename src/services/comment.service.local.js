
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'comment'

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment
}
window.cs = commentService

const gDemoComments = [
    {
        _id: utilService.makeId(),
        email: 'David@gmail.com',
        txt: 'It\'s amazing!',
        createdAt: Date.now(),
        imgUrl: 'https://res.cloudinary.com/dkvliixzt/image/upload/v1704360556/catt_dytsgq.jpg'
    },
    {
        _id: utilService.makeId(),
        email: 'Sarah@example.com',
        txt: 'Really impressive work!',
        createdAt: Date.now(),
        imgUrl: 'https://res.cloudinary.com/dkvliixzt/image/upload/v1704360614/noam_tdr2rp.jpg'
    },
    {
        _id: utilService.makeId(),
        email: 'Alex@outlook.com',
        txt: 'This tool has made my life so much easier!',
        createdAt: Date.now(),
        imgUrl: 'https://res.cloudinary.com/dkvliixzt/image/upload/v1705356175/7B12EEEE-8B9C-489B-882B-D5B8E47D9874_pjpibk.jpg'
    }
]

_createComments()

async function query(filterBy = { txt: '', price: 0 }) {
    var comments = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     comments = comments.filter(comment => regex.test(comment.vendor) || regex.test(comment.description))
    // }
    // if (filterBy.price) {
    //     comments = comments.filter(comment => comment.price <= filterBy.price)
    // }
    return comments
}

function getById(commentId) {
    return storageService.get(STORAGE_KEY, commentId)
}

async function remove(commentId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, commentId)
}

async function save(comment) {
    var savedComment
    if (comment._id) {
        savedComment = await storageService.put(STORAGE_KEY, comment)
    } else {
        // Later, owner is set by the backend
        // comment.owner = userService.getLoggedinUser()
        savedComment = await storageService.post(STORAGE_KEY, comment)
    }
    return savedComment
}

function getEmptyComment() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))

function _createComments() {
    let comments = storageService.query(STORAGE_KEY)
    if (!comments || !comments.length) {
        // storageService.saveToStorage(STORAGE_KEY, gDemoComments)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gDemoComments))
    }
}



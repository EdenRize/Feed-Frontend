import { useEffect, useRef, useState } from "react"
import { commentService } from "../services/comment.service"
import { CommentList } from "./CommentList"
import { CommentEdit } from "./CommentEdit"
import { CommentFilter } from "./CommentFilter"

export function CommetIndex() {

    const [comments, setComments] = useState(null)
    const [filterBy, setFilterBy] = useState({ txt: '' })
    let intervalIdRef = useRef()


    useEffect(() => {
        loadComments(filterBy)
    }, [])

    useEffect(() => {
        loadComments(filterBy)
    }, [filterBy])

    useEffect(() => {
        intervalIdRef.current = setInterval(loadComments, 30 * 60 * 1000)

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [])

    async function loadComments(filterBy) {
        try {
            const loadedComments = await commentService.query(filterBy)
            setComments(loadedComments)
        } catch (err) {
            err => console.log('err:', err)
        }
    }

    async function addComment(comment) {
        try {
            const addedComment = await commentService.save(comment)
            setComments((prevComments) => ([addedComment, ...prevComments]))
        } catch (err) {
            err => console.log('err:', err)
        }
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break
            case 'checkbox':
                value = target.checked
                break
            default:
                break
        }
        setFilterBy(prevFilter => ({ ...prevFilter, [field]: value }))
    }



    if (!comments) return <div>Loading...</div>
    if (!comments.length) return <div>No comments match this search</div>

    return (
        <section className="comment-index">
            <CommentEdit onAddComment={addComment} />
            <CommentFilter filterBy={filterBy} onSetFilterBy={handleChange} />
            <CommentList comments={comments} />
        </section>
    )
}

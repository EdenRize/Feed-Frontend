import { useEffect, useRef, useState } from "react"
import { commentService } from "../services/comment.service"
import { CommentList } from "./CommentList"
import { CommentEdit } from "./CommentEdit"

export function CommetIndex() {

    const [comments, setComments] = useState(null)
    let intervalIdRef = useRef()


    useEffect(() => {
        loadComments()
    }, [])

    //render every 30 min so that the user will see the change in createdAt
    useEffect(() => {
        intervalIdRef.current = setInterval(loadComments, 30 * 60 * 1000)

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [])

    async function loadComments() {
        try {
            const loadedComments = await commentService.query()
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



    if (!comments) return <div>Loading...</div>
    if (!comments.length) return <div>No comments match this search</div>

    return (
        <section className="comment-index">
            <CommentEdit onAddComment={addComment} />
            <CommentList comments={comments} />
        </section>
    )
}

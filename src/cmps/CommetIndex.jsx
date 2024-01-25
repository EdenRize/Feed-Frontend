import { useEffect, useState } from "react"
import { commentService } from "../services/comment.service.local"
import { CommentList } from "./CommentList"
import { CommentEdit } from "./CommentEdit"

export function CommetIndex() {

    const [comments, setComments] = useState(null)

    useEffect(() => {
        loadComments()
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

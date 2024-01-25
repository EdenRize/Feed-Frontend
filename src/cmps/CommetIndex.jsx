import { useEffect, useState } from "react"
import { commentService } from "../services/comment.service.local"

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

    console.log(comments)
    return (
        <section className="comment-index">
            hi from index
        </section>
    )
}

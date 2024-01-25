import { useState } from "react"
import { commentService } from "../services/comment.service.local"


export function CommentEdit({ onAddComment }) {
    const [comment, setComment] = useState(commentService.getEmptyComment())

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
        setComment((prevComment) => ({ ...prevComment, [field]: value, }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        onAddComment(comment)
        setComment(commentService.getEmptyComment())
    }

    return (
        <section className="comment-edit">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <textarea
                    name="txt"
                    value={txt}
                    onChange={handleChange}
                    placeholder="Message"
                ></textarea>

                <button type="submit">SUBMIT</button>
            </form>
        </section>
    )
}

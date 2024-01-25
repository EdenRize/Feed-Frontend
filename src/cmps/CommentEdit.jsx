import { useState } from "react"


export function CommentEdit({ onAddComment }) {
    const [email, setEmail] = useState('')
    const [txt, setTxt] = useState('')

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (field) {
            case 'email':
                setEmail(value)
                break
            case 'txt':
                setTxt(value)
                break
            default:
                break
        }
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        onAddComment(email, txt)
        setEmail('')
        setTxt('')
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

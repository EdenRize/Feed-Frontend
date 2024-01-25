import { utilService } from "../services/util.service"

export function CommentPreview({ comment }) {

    const { email, imgUrl, txt, createdAt } = comment

    return (
        <article className="comment-preview">
            <img style={{ width: '30px' }} src={imgUrl} alt="avatar"></img>
            <p>{email}</p>
            <p>{txt}</p>
            <p>{utilService.formatTimestamp(createdAt)}</p>
        </article>
    )
}

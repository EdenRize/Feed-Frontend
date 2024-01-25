import { utilService } from "../services/util.service"

export function CommentPreview({ comment }) {

    const { email, imgUrl, txt, createdAt } = comment

    return (
        <li className="flex space-between comment-preview">
            <div className="flex content-container">
                <img style={{ width: '30px' }} src={imgUrl} alt="avatar"></img>
                <div className="flex column">

                    <p className="email">{email}</p>
                    <p className="txt">{txt}</p>
                </div>
            </div>
            <p>{utilService.formatTimestamp(createdAt)}</p>
        </li>
    )
}

import { CommentPreview } from "./CommentPreview";

export function CommentList({ comments }) {
    return (
        <ul className="comment-list">
            {comments.map(comment =>
                <li key={comment._id}>
                    <CommentPreview comment={comment} />
                </li>
            )}
        </ul>
    )
}

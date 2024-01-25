import { CommentPreview } from "./CommentPreview";

export function CommentList({ comments }) {
    return (
        <ul className="clean-list comment-list">
            {comments.map(comment =>
                <CommentPreview key={comment._id} comment={comment} />
            )}
        </ul>
    )
}

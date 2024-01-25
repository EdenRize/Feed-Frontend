import { CommentEdit } from "../cmps/CommentEdit";
import { CommetIndex } from "../cmps/CommetIndex";

export function HomePage() {
    return (
        <section className="home-page">
            <h1>Home Page</h1>
            <CommentEdit />
            <CommetIndex />
        </section>
    )
}
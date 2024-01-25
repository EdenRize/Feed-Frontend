import { useEffect, useState } from "react"

export function CommentFilter({ filterBy, onSetFilterBy }) {
    const [currFilter, setCurrFilter] = useState({ txt: '' })

    useEffect(() => {
        setCurrFilter(filterBy)
    }, [filterBy])

    return (
        <div className="comment-filter">
            <input type="text" name="txt" value={currFilter.txt} onChange={onSetFilterBy} placeholder="Filter by txt" />
        </div>
    )
}

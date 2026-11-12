
"use client"

import { upVotePostAction } from "@/actions/post";

type VoteButtonProps = {
    name: string,
    id: number
}

export default function VoteButton({ name, id }: VoteButtonProps) {
    return (
        <button
            onClick={() => { upVotePostAction(id) }}
            type="button"
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
        >
            {name}
        </button>
    );
}
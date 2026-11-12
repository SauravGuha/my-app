import { createPost } from "@/utils/common";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const { title, body } = await request.json();
    const response = await createPost({ title, body });
    return NextResponse.json(response);
}
import { connectDB } from "@/lib/config/db"
import { NextResponse } from "next/server"


const loadDB = async () => {
  await connectDB();
}

loadDB();


export async function GET(request) {
    // return Response.json({ message: 'Hello World' })
    // console.log("Blog GET hit")
    return NextResponse.json({ msg: "API working" })
}

export async function POST(request) {
    // return Response.json({ message: 'Hello World' })
    // console.log("Blog GET hit")
    return NextResponse.json({ msg: "API working" })
} 


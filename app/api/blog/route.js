import { connectDB } from "@/lib/config/db"
import { writeFile } from 'fs/promises'
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
    // return Response.json({ message:  'Hello World' })
    // console.log("Blog GET hit")
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);

    const imgUrl = `/${timestamp}_${image.name}`
    console.log(imgUrl);
    return NextResponse.json({ imgUrl })






    return NextResponse.json({ msg: "API working" })
}


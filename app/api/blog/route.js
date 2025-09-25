import { connectDB } from "@/lib/config/db"
import blogModel from "@/lib/models/blogModel";
import { writeFile } from 'fs/promises'
import { NextResponse } from "next/server"
import path from "path";


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
    // const path = `/public/${timestamp}_${image.name}`;
    // await writeFile(path, buffer);

    const filePath = path.join(process.cwd(), "public", `${timestamp}_${image.name}`);
    await writeFile(filePath, buffer);

    const imgUrl = `/${timestamp}_${image.name}`


    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`


    }
    await blogModel.create(blogData);
    console.log("blog saved")





    // console.log(imgUrl);
    return NextResponse.json({ success: true, error: false, msg: "blog added" })


    
    // return NextResponse.json({ msg: "API working" })
}


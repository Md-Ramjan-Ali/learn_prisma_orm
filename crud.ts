import { prisma } from "./lib/prisma";

async function run() {
    // const createUser =await prisma.user.create({
    //     data: {
    //         name: "khaled",
    //         email: "khaled@gmail.com"
    //     }
    // })
    // console.log(createUser)


    // const createPost =await prisma.post.create({
    //     data: {
    //         title: "this post is mine",
    //         content: "this is discription that the post",
    //         authorId: 1
    //     }
    // })
    // console.log(createPost)

    // const createProfile =await prisma.profile.create({
    //     data: {
    //         bio: "o amar deser mati",
    //         UserId: 1
    //     }
    // })
    // console.log(createProfile)

    //read all users

    const getALL = await prisma.user.findMany({
        // include: {
        //     posts: true,
        //     profile: true
        // }
        select: {
            id: true,
            email: true,
            posts: true,
            profile: true
        }
    })

    console.dir(getALL, {depth: Infinity})
}

run()
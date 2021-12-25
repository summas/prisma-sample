import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const allUsers = await prisma.user.findMany()
  // console.log(allUsers)

  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // })
  // console.dir(allUsers, { depth: null })

  // const post = await prisma.post.update({
  //   where: { id: 1 },
  //   data: { published: true },
  // })
  // console.log(post)



  // await prisma.user.create({
  //   data: {
  //     name: 'john',
  //     email: 'john@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World2', content:'hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles john' },
  //     },
  //   },
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // })
  // console.dir(allUsers, { depth: null })

  // const filteredPosts = await prisma.post.findMany({
  //   where: {
  //     OR: [{ title: { contains: 'hello' } }, { content: { contains: 'hello' } }],
  //   },
  // })
  // console.log(filteredPosts)

  // const post = await prisma.post.create({
  //   data: {
  //     title: 'Join us for Prisma Day 2020',
  //     author: {
  //       connect: { email: 'alice@prisma.io' },
  //     },
  //   },
  // })

  // console.log(post)

  // const posts = await prisma.profile
  // .findUnique({
  //   where: { id: 2 },
  // })
  // .user()
  // .posts()

  // console.log(posts)


   const deletedUser = await prisma.user.delete({
    where: { email: 'john@prisma.io' },
  })

  console.dir(deletedUser, { depth: null })

}


main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
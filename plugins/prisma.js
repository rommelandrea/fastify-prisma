import { PrismaClient } from '@prisma/client'
import fp from 'fastify-plugin'

const prismaPlugin = fp(async (fastify, opts) => {
  const prisma = new PrismaClient()

  await prisma.$connect()

  fastify.decorate('prisma', prisma)

  fastify.addHook('onClose', async (fastifyInstance) => {
    fastifyInstance.prisma.$disconnect()
  })
})

export default prismaPlugin

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const res = await fastify.prisma.user.findMany()
    return { data: res }
  })
}

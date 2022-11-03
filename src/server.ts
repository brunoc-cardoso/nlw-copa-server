import { prisma } from '@/services/prisma';
import Fastify from 'fastify';

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count();

    return {
      count,
    };
  });

  await fastify.listen({ port: 3333 });
}

bootstrap();

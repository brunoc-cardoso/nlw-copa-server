import { prisma } from '@/services/prisma';
import cors from '@fastify/cors';
import Fastify from 'fastify';

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count();

    return {
      count,
    };
  });

  await fastify.listen({ port: 3333, host: '0.0.0.0.' });
}

bootstrap();

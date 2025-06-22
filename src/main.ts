import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = process.env.PORT ?? 3000
  const server = await app.listen(port)

  const address = server.address()
  const host = typeof address === 'string' ? address : address.address === '::' ? 'localhost' : address.address
  const actualPort = typeof address === 'string' ? '' : address.port

  console.log(`🚀 App is running at: http://${host}:${actualPort}`)


}
bootstrap();

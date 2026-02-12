import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS por si lo quieres consumir desde el frontend algún día
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('MediConnect API')
    .setDescription('API para gestión de pacientes con NestJS')
    .setVersion('1.0')
    .addTag('Pacientes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('🚀 Server corriendo en: http://localhost:3000/api');
}
bootstrap();
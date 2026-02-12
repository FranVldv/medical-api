import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [PatientModule], // <--- Aquí importamos el módulo que creamos
  controllers: [],
  providers: [],
})
export class AppModule {}
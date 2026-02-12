import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatientService } from './patient.service';
import { Patient } from './patient.entity';

@ApiTags('Pacientes')
@Controller('patients')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Get()
    @ApiOperation({ summary: 'Listar todos los pacientes' })
    @ApiResponse({ status: 200, description: 'Lista retornada con éxito.', type: [Patient] })
    getAll() {
        return this.patientService.getAll();
    }

    @Post()
    @ApiOperation({ summary: 'Registrar nuevo paciente' })
    @ApiResponse({ status: 201, description: 'Paciente creado.', type: Patient })
    create(@Body() patient: Patient) {
        return this.patientService.create(patient);
    }

    @Get(':dni')
    @ApiOperation({ summary: 'Buscar por DNI' })
    @ApiResponse({ status: 200, description: 'Paciente encontrado.', type: Patient })
    @ApiResponse({ status: 404, description: 'Paciente no encontrado.' })
    getByDni(@Param('dni') dni: string) {
        return this.patientService.findByDni(dni);
    }
}
import { ApiProperty } from '@nestjs/swagger';

export class Patient {
    @ApiProperty({ example: 1, description: 'ID único del paciente' })
    id: number;

    @ApiProperty({ example: 'Franco', description: 'Nombre del paciente' })
    firstName: string;

    @ApiProperty({ example: 'Valdivia', description: 'Apellido del paciente' })
    lastName: string;

    @ApiProperty({ example: '12345678', description: 'DNI sin puntos' })
    dni: string;

    @ApiProperty({ example: 'Alergia a Aines', description: 'Antecedentes médicos' })
    clinicalHistory: string;
}
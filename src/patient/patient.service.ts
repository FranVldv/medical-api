import { Injectable, NotFoundException } from '@nestjs/common';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
    // Base de datos en memoria (RAM)
    private patients: Patient[] = [];

    getAll(): Patient[] {
        return this.patients;
    }

    create(patient: Patient): Patient {
        const newPatient = { 
            ...patient, 
            id: this.patients.length + 1 
        };
        this.patients.push(newPatient);
        return newPatient;
    }

    findByDni(dni: string): Patient {
        const patient = this.patients.find(p => p.dni === dni);
        if (!patient) {
            throw new NotFoundException(`Paciente con DNI ${dni} no encontrado`);
        }
        return patient;
    }
}
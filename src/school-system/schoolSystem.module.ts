import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './controllers/student/student.controller';
import { ClassController } from './controllers/class/class.controller';
import { TeacherController } from './controllers/teacher/teacher.controller';
import { ClassService } from './services/class/class.service';
import { StudentService } from './services/student/student.service';
import { TeacherService } from './services/teacher/teacher.service';
import { Student, StudentSchema } from './schemas/student.schema';
import { Class, ClassSchema } from './schemas/class.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Student.name,
        schema: StudentSchema,
      },
       {
        name: Class.name,
        schema: ClassSchema,
      },
    ]),
  ],

    controllers: [StudentController, ClassController, TeacherController],
    providers: [ClassService, StudentService, TeacherService],
})
export class SchoolSystemModule {}

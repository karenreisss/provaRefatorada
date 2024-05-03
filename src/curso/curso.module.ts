import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { Curso, CursoSchema } from './entities/curso.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }]), UsuarioModule],
  controllers: [CursoController],
  providers: [CursoService],
  exports: [CursoService]
})
export class CursoModule {}

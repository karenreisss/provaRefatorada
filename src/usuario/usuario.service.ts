import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.schema'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {

  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<Usuario>) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    createUsuarioDto.senha = await this.userHash(createUsuarioDto.senha)

    const usuario = await this.usuarioModel.create(createUsuarioDto)

    return usuario
  }

  findOne(email: string) {
    const findedUsuario = this.usuarioModel.findOne({ email: email })
    return findedUsuario
  }

  findOneId(id: string) {
    const findedUsuario = this.usuarioModel.findOne({ _id: id })
    return findedUsuario
  }

  findAll() {
    const findedUsuarios = this.usuarioModel.find().select("-senha")
    return findedUsuarios
  }

  private async userHash(pass) {
    const saltOrRounds = 10
    const hashedPass = await bcrypt.hash(pass, saltOrRounds)
    return hashedPass
  }

  async update(id: string, updateCursoDto: UpdateUsuarioDto) {
    return await this.usuarioModel.findByIdAndUpdate(id, updateCursoDto).exec()
  }

  async remove(id: string) {
   
    return await this.usuarioModel.findByIdAndDelete(id).exec();

    
    
  }
}
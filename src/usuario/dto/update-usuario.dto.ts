import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    nome: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    sobrenome: string

    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    senha: string

}

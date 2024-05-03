import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'


export class CreateUsuarioDto {
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
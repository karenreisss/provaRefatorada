import { IsArray, IsDecimal, IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'
import { Usuario } from 'src/usuario/entities/usuario.schema'


export class CreateCursoDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(100)
    nome: string

    @IsDecimal()
    @IsNotEmpty()
    valor: string

    @IsInt()
    duracao: number

    @IsArray()
    @IsNotEmpty()
    alunos: Array<Usuario>


}
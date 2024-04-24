import {IsString,IsNumber,IsNotEmpty} from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    lastName: string
    
    @IsNumber()
    @IsNotEmpty()
    age: number
}

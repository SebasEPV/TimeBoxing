import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class AuthInputDto {
    @IsString()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

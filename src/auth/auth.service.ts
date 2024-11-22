import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthInputDto } from './dto/auth-input.dto';
import * as bcrypt from 'bcrypt';

export interface authInput {
  email: string;
  password: string;
}

export interface signInData {
  id: number;
  username: string;
}

export interface authResult {
  accessToken: string;
  id: number;
  username: string;
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name); // Logger para este servicio

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(input: AuthInputDto): Promise<signInData | null> {
    this.logger.log(`Validando usuario con email: ${input.email}`);
    
    const user = await this.userService.getUser(input.email);
    if (!user) {
      this.logger.warn(`Usuario no encontrado: ${input.email}`);
      return null; // Usuario no encontrado
    }

    this.logger.log(`Usuario encontrado: ${user.id}`);
    
    const isMatch = await bcrypt.compare(input.password, user.password);
    if (!isMatch) {
      this.logger.warn(`Contraseña incorrecta para el usuario: ${input.email}`);
      return null; // Contraseña incorrecta
    }
    
    // Desestructura JS para eliminar la contraseña
    const { password, ...result } = user; // Elimina la contraseña del objeto
    this.logger.log(`Usuario validado con éxito: ${user.id}`);
    
    return {
      id: user.id,
      username: user.name,
    };
  }

  async authenticate(input: AuthInputDto): Promise<authResult> {
    this.logger.log(`Intentando autenticar al usuario: ${input.email}`);
    
    const user = await this.validateUser(input);
    if (!user) {
      this.logger.warn(`Autenticación fallida para el usuario: ${input.email}`);
      throw new UnauthorizedException();
    }
    
    this.logger.log(`Usuario autenticado: ${user.id}`);
    return this.login(user);
  }

  async login(user: signInData): Promise<authResult> {
    this.logger.log(`Generando token para el usuario: ${user.id}`);
    
    const tokenPayload = {
      sub: user.id,
      username: user.username,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);
    this.logger.log(`Token generado exitosamente para el usuario: ${user.id}`);
    
    return {
      accessToken,
      id: user.id,
      username: user.username,
    };
  }
}

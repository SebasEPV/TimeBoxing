import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/configs/jwt-secret';

@Module({
  imports : [
    UserModule,
    JwtModule.register({
      global : true,
      secret : JWT_SECRET,
      signOptions : { expiresIn : '1d'},
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}

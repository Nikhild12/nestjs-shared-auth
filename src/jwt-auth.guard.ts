import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Global } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate { 
    constructor(private readonly jwtService:JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];

        if(!authHeader) throw new UnauthorizedException("Missing Authorization Header");

        const [, token] = authHeader.split(' ');

        try {
            const payload = await this.jwtService.verifyAsync(token);
            request.user = payload;
            return true;
        } catch (error) { 
            throw new UnauthorizedException('Invalid or expired token')
        }
    }
}
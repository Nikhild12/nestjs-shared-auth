import { DynamicModule, Module } from "@nestjs/common";
import { JwtModule, JwtModuleAsyncOptions } from "@nestjs/jwt";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Module({})

export class AuthModule {
    static register(options: JwtModuleAsyncOptions): DynamicModule { 
        return {
            module: AuthModule,
            imports: [JwtModule.registerAsync(options)],
            providers: [JwtAuthGuard],
            exports: [JwtAuthGuard, JwtModule]
        }
    }
}
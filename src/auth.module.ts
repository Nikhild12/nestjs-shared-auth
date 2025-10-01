import { DynamicModule, Module } from "@nestjs/common";
import { JwtModule, JwtModuleAsyncOptions } from "@nestjs/jwt";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Module({})

export class JwtSharedAuthModule {
    static register(options: JwtModuleAsyncOptions): DynamicModule { 
        return {
            module: JwtSharedAuthModule,
            imports: [JwtModule.registerAsync(options)],
            providers: [JwtAuthGuard],
            exports: [JwtAuthGuard, JwtModule]
        }
    }
}
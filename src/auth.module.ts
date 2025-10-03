import { DynamicModule, Global, Module } from "@nestjs/common";
import { JwtModule, JwtModuleAsyncOptions, JwtModuleOptions } from "@nestjs/jwt";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Global()
@Module({})
export class JwtSharedAuthModule {
    static register(options: JwtModuleOptions): DynamicModule { 
        return {
            module: JwtSharedAuthModule,
            imports: [JwtModule.register(options)],
            providers: [JwtAuthGuard],
            exports: [JwtAuthGuard, JwtModule]
        }
    }

    // static registerAsync(options: JwtModuleAsyncOptions): DynamicModule {
    //     return {
    //     module: JwtSharedAuthModule,
    //     imports: [JwtModule.registerAsync(options)],
    //     providers: [JwtAuthGuard],
    //     exports: [JwtAuthGuard, JwtModule],
    //     };
    // }
}
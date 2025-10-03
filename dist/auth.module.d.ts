import { DynamicModule } from "@nestjs/common";
import { JwtModuleOptions } from "@nestjs/jwt";
export declare class JwtSharedAuthModule {
    static register(options: JwtModuleOptions): DynamicModule;
}

# nestjs-shared-auth

A reusable JWT Authentication module for NestJS microservices.
This package provides a shared JwtAuthSharedModule, JwtAuthGuard to handle authentication across multiple services with minimal setup. 

## Features

✅ Plug-and-play JWT authentication for any NestJS microservice

✅ Configurable secrets & expiration per service

✅ Global module support (only import once per app)

✅ Pre-built JwtAuthGuard for route protection

✅ Works with NestJS microservices & API Gateway

## Installation

```bash
npm install nestjs-shared-auth
```

## Usage
1. Import in your AppModule
```import { Module } from '@nestjs/common';
import { JwtAuthSharedModule, JwtAuthGuard } from 'nestjs-shared-auth';
import { APP_GUARD } from '@nestjs/core';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [
    JwtAuthSharedModule.register({
      secret: process.env.JWT_SECRET || 'forms_secret',
      signOptions: { expiresIn: '1d' },
    }),
    FormsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard, // 👈 applies JWT globally
    },
  ],
})
export class AppModule {}
```

2. Protect Specific Routes
If you don’t want global auth, you can use the guard per controller:
```
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'nestjs-shared-auth';

@Controller('leads')
export class LeadController {
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return 'Protected route - only accessible with valid JWT';
  }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
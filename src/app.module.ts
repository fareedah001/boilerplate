import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,      // <-- explicitly set the ApolloDriver
      autoSchemaFile: true,      // generates schema.gql automatically
      playground: true,          // GraphQL playground works
      sortSchema: true,          // optional: keeps schema sorted
    }),
    PrismaModule,
    UserModule,
  ],
})
export class AppModule {}

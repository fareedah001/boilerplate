// import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
// import { UserService } from './user.service';
// import { User } from './models/user.model';
// import { CreateUserInput } from './dto/create-user.input';

// @Resolver(() => User)
// export class UserResolver {
//   constructor(private readonly userService: UserService) {}

//   // ✅ THIS FIXES THE ERROR
//   @Query(() => [User], { name: 'users' })
//   findAllUsers() {
//     return this.userService.findAll();
//   }

//   @Mutation(() => User)
//   createUser(@Args('data') data: CreateUserInput) {
//     return this.userService.create(data);
//   }
// }
// /
// 
// import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
// import { UserService } from './user.service';
// import { User } from './models/user.model';
// import { CreateUserInput } from './dto/create-user.input';

// @Resolver(() => User)
// export class UserResolver {
//   constructor(private readonly userService: UserService) {}

//   @Query(() => [User])
//   users() {
//     return this.userService.findAll();
//   }

//   @Mutation(() => User)
//   createUser(@Args('data') data: CreateUserInput) {
//     return this.userService.create(data);
//   }
// }

// 
// import { Resolver, Query, Args, Int } from '@nestjs/graphql';
// import { UserService } from './user.service';
// import { User } from './models/user.model';

// @Resolver(() => User)
// export class UserResolver {
//   constructor(private readonly userService: UserService) {}

//   // Existing query
//   @Query(() => [User], { name: 'users' })
//   users() {
//     return this.userService.findAll();
//   }

//   // New query to fetch a single user
//   @Query(() => User, { name: 'user', nullable: true })
//   user(@Args('id', { type: () => Int }) id: number) {
//     return this.userService.findOne(id);
//   }
// }



// 
// 
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // Fetch all users
  @Query(() => [User], { name: 'users' })
  users() {
    return this.userService.findAll();
  }

  // Fetch single user
  @Query(() => User, { name: 'user', nullable: true })
  user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  // ✅ Mutation
  @Mutation(() => User, { name: 'createUser' })
  createUser(@Args('data') data: CreateUserInput) {
    return this.userService.create(data);
  }
}

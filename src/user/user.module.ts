import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { Pair, PairSchema } from "../shared/database/pairUser";
import { Images, ImagesSchema } from "../shared/database/image";
import { Interests, InterestsSchema } from "../shared/database/interest";
import { Match, MatchSchema } from "../shared/database/match";
import { Social, SocialSchema } from "../shared/database/social";
import { UserSchema, Users } from "../shared/database/user";
import { errorHandler } from "../shared/errorhandler";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UserSchema },
      { name: Social.name, schema: SocialSchema },
      { name: Interests.name, schema: InterestsSchema },
      { name: Images.name, schema: ImagesSchema },
      { name: Match.name, schema: MatchSchema },
      { name: Pair.name, schema: PairSchema },
    ]),
    JwtModule,
  ],
  providers: [UserService, errorHandler],
  exports: [UserService],
})
export class UserModule {}

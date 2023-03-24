import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { now, Document } from "mongoose";

export type UserDocumet = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop()
  gender: string;

  @Prop()
  number: number;

  @Prop()
  state: string;

  @Prop()
  city: string;

  @Prop()
  password: string;

  @Prop()
  rToken: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;

  images: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: "Images";
    }
  ];
}

export const UserSchema = SchemaFactory.createForClass(User);

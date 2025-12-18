
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Users>;

@Schema()
export class Users {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;
    @Prop()
    name: string;
    @Prop()
    phone: string;
    @Prop()
    age: number;
    @Prop()
    address: string;
    @Prop()
    createdAt: Date;
    @Prop()
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(Users);

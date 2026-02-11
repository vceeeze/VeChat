import mongoose, { Document, Schema } from 'mongoose';

export interface IChat extends Document {
    participant: mongoose.Types.ObjectId[]; // Reference to the User model
    lastMessage?: mongoose.Types.ObjectId;
    lastMessageAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const ChatSchema = new Schema<Ichat>({
    participants: [
       {
         type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
       },
    ],
    lastMessage: {
        type: Schema.Types.ObjectId,
        ref: "Message",
        default: null,

    },
    lastMessageAt: {
        type: Date,
        default: Date.now,
    },
  },  {
    
    timestamps: true,

})

export const Chat = mongoose.model<IChat>('Chat', ChatSchema);
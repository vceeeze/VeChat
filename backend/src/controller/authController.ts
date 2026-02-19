import type { AuthRequest } from "../middleware/auth";
import type {Response, Request} from "express";
import { User } from "../models/User";
import { clerkClient, getAuth } from "@clerk/express";


export async function getMe(req: AuthRequest, res: Response) {
  try {
    const userId = req.userId

    const user = await User.findById(userId)

    if (!user) {
        res.status(404).json({message: "User not found"})
        return;
    }

    res.status(200).json(user)

  } catch (error) {
    res.status(500).json({message: "internal server error"})

    // next()
  }
}

export async function authCallback (req: Request, res: Response) {
    try{
        const {userId: clerkId} = getAuth(req)


if(!clerkId){
    res.status(401).json({message: "Unauthorized"})
    return;
}

let user = await User.findOne({clerkId})

if(!user){
    // get user info from clerk and save to db
    const clerkUser = await clerkClient.users.getUser(clerkId)
    user = await User.create({
        clerkId,
         Name: clerkUser.firstName
        email: clerkUser.?emailAddresses[0].emailAddress,,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl
    })
}
    } catch (error) {

    }

    

}
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';


const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res)=>{
        //implement the handler to get the data from fronten tobackend
         const{ email, password }=req.body;
         //get connection tothe database
         const db=getDbConnection('react-auth-db')
         //find if the email entered exists
         const user= await db.collection('users').findOne({email});
         //if the user exists send error message
         if (user){
            res.sendStatus(409)

         }
         //encrypt the password using bcrypt
         //10 is th numb of alitaration to use whnen it encrpts their password
         const passwordHash = await bcrypt.hash(password, 10);

         //Crate ne user with info to be displyed in frontend
         // enter starting info first
         const startingInfo={
            hairColor: '',
            favoriteFood: '',
            bio: '',

         }
         // adding new user
         const result = await db.collection('users').insertOne({
            email,
            passwordHash,
            info: startingInfo,
            isVerified: false,
         })
         //send back the id created by Mongodb to the clien
         const{insertedId}=result
         //generate a JSON Web Token   to send to client expet passwordHash
         jwt.sign({
            id: insertedId,
            email,
            info: startingInfo,
            isVerified: false,
         },
         //secon argument:JSON Web Token secret
         process.env.JWT_SECRET,
         {
            expiresIn: '2d',
         },
         //final argument: a callback
         (err, token)=>{
            if(err){
                return res.status(500).send(err)
            }
            res.status(200).json({ token })
         })

    }
}
 
export default signUpRoute;

import {check,validationResult} from "express-validator";



 export const validateUpdate = [


      check('newmesage')
      .trim() // enlever les espaces du debut et la fin heroKu
      .not()
      .isEmpty()
      .withMessage("Merci de communiquer un message"),

    //   check("password")
    //   .custom(async (value) => {

    //          await connectToDatabase();

    //          const user = await User.find(id).select('+password')

    //          if(user.password !== value){

    //                throw new Error('Password is not match')
    //          }
    //   }),

      (req,res,next) => {

           const errors = validationResult(req);

           if(!errors.isEmpty()){

            return res.status(422).json({
                  
                errors:errors.array()
            })

           }

           next();
      }
];


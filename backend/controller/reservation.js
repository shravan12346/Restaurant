import {Reservation} from '../models/reservationSchema.js';
import ErrorHandler from '../error/error.js';

export const sendReservation=async(res,req,next)=>{
    const{ firstName,lastName,email,phone,date,time }=req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
         return next(new ErrorHandler("please fill full form!",400));
    }
    try{
        await Reservation.create(firstName,lastName,email,phone,date,time);
        res.status(200).json({
            success:true,
            message:"reservation Sent Succesfully",
        });
    }catch(error){
        if(error.name ==="ValidationError"){
            const validationErrors =Object.values(error.errors).map(
                (err)=>err.message
            );
            return next(new ErrorHandler(validationErrors.join(" , "),400))
        }
        return next(error);
    }
};
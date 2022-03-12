const { userSignupQuery, userSigninQuery, rejectUserQuery, approveUserQuery } = require("../models/user");

exports.userSignup=async(req,res)=>{
    const{email,password,companyname}=req.body;
    userSignupQuery(email,password,companyname,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}

exports.userSignin=async(req,res)=>{
    const{email,password}=req.body;
    userSigninQuery(email,password,(err,result)=>{
        if (err) return res.status(4003).json({err:"incorrect email or password"})
        res.status(200).json(result)
        
    })
}

exports.approveUser=async(req,res)=>{
    const{userid}=req.query;
    approveUserQuery(userid,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}

exports.rejectUser=async(req,res)=>{
    const{userid}=req.query;
    rejectUserQuery(userid,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}

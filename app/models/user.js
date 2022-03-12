const { db } = require("../routes/db");

exports.userSignupQuery=async(email,password,companyname,callback=>{
    db.query(
        `insert into users(email,password,companyname) values('${email}','${password}','${companyname}')`,
        (err,result)=>{
            callback(err,result);
        }
    )
})

exports.userSigninQuery=async(email,password,callback=>{
    db.query(
        `select userid from users where username='${username}' and password='${password}'`,
        (err,result)=>{
            callback(err,result);
        }
    )
})

exports.approveUserQuery=async(userid,callback=>{
    db.query(
        `update users set isApproved='1'`,
        (err,result)=>{
        callback(err,result)
        })
})

exports.rejectUserQuery=async(userid,callback=>{
    db.query(
        `update users set isApproved='2'`,
        (err,result)=>{
        callback(err,result)
        })
})
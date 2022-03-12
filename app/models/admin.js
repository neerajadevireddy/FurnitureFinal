const { db } = require("../routes/db")

exports.getOrdersQuery(adminid,callback=>{
    db.query(
        `select * from orders`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.getAcceptedOrdersQuery(adminid,callback=>{
    db.query(
        `select * from orders where isApproved=1`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.getRejectedOrdersQuery(adminid,callback=>{
    db.query(
        `select * from orders where isApproved=2`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.getPendingOrdersQuery(adminid,callback=>{
    db.query(
        `select * from orders where isApproved=0`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.getCancelledOrdersQuery(adminid,callback=>{
    db.query(
        `select * from orders where isApproved=-1`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.getDeliveredOrdersQuery(adminid,callback=>{
    db.query(
        `select * from orderdetails where isDone=-1`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.getInTransitOrdersQuery(adminid,callback=>{
    db.query(
        `select * from orderdetails where isDone=2`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.getYettopickupOrdersQuery(adminid,callback=>{
    db.query(
        `select * from orderdetails where isDone=0`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.getPickedupOrdersQuery(adminid,callback=>{
    db.query(
        `select * from orderdetails where isDone=1`,
        (err,result)=>{
            callback(err,result)
        }
    )
})



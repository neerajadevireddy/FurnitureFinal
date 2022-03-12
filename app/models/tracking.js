const { db } = require("../routes/db");

exports.trackingQuery(orderid,callback=>{
    db.query(
        `select * from orderdetails where orderid='${orderid}'`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.setStatusOrderAccepted(orderid,callback=>{
    db.query(
        `update orderdetails set status="Yet to pickup"`,
        (err,result)=>{
            callback(err,result)
        }
    )
})
exports.setStatusOrderPicked(orderid,callback=>{
    db.query(
        `update orderdetails set status="order Picked" and isDone='1'`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.setStatusOrderInTransit(orderid,callback=>{
    db.query(
        `update orderdetails set status="In transit" and isDone='2'`,
        (err,result)=>{
            callback(err,result)
        }
    )
})
exports.setStatusOrderOutfordelivery(orderid,callback=>{
    db.query(
        `update orderdetails set status="out for delivery"`,
        (err,result)=>{
            callback(err,result)
        }
    )
})
exports.setStatusOrderDelivered(orderid,callback=>{
    db.query(
        `update orderdetails set status="delivered" and isDone='-1'`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.setStatusOrderCancelled(orderid,callback=>{
    db.query(
        `delete from orderdetails where orderid="${orderid}" and update orders set isApproved='-1'`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.setEstimationQuery(orderid,estimations,callback=>{
    db.query(
        `update orderdetails set estimations="'${estimations}"`,
        (err,result)=>{
            callback(err,result)
        }
    )
})


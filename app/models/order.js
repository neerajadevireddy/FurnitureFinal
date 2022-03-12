const { db } = require("../routes/db")

exports.orderQuery(dimensions,address,estimatedDelivery,callback=>{
    db.query(`insert into orders(dimensions,address,estimatedDelivery) values('${dimensions}','${address}','${estimatedDelivery}')`,
    (err,result)=>{
        callback(err,result)
    })
})

exports.approveOrderQuery(orderid,callback=>{
    db.query(
        `updates orders set isApproved='1'`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.rejectOrderQuery(orderid,callback=>{
    db.query(
        `updates orders set isApproved='2'`,
        (err,result)=>{
            callback(err,result)
        }
    )
})
exports.cancelOrderQuery(orderid,callback=>{
    db.query(
        `updates orders set isApproved='-1'`,
        (err,result)=>{
            callback(err,result)
        }
    )
})

exports.setOrderinfoQUery(orderid,pickupAddress,pincode,landmark,custumerNo,deliveryAddress,pincode2,landmark2,status,pickupdate,pickuptime,deliverydate ,deliverytime,estimations,callback=>{
    db.query(
        `insert into orderdetails(orderid,pickupAddress,pincode,landmark,custumerNo,deliveryAddress,pincode2,landmark2,status,pickupdate,pickuptime,deliverydate ,deliverytime,estimations) into values('${orderid}','${pickupAddress}','${pincode}','${landmark}','${custumerNo}','${deliveryAddress}','${pincode2}','${landmark2}','${status}','${pickupdate}','${pickuptime}','${deliverydate}','${deliverytime}','${estimations}')`
    )
})







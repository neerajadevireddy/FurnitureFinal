const{orderQuery,approveOrderQuery,rejectOrderQuery,cancelOrderQuery,setOrderinfoQuery}=require("./models/orders")

exports.order=async(req,res)=>{
    const {dimensions,address,estimatedDelivery}=req.body
    orderQuery(dimensions,address,estimatedDelivery,(err,result)=>{
        if (err) return res.status(4003).json({err:"incorrect email or password"})
        res.status(200).json(result)
    })
}

exports.approveOrder=async(req,res)=>{
    const{orderid}=req.query;
    approveOrderQuery(orderid,(err,result)=>{
        if (err) return res.status(4003).json({err:"incorrect email or password"})
        res.status(200).json(result)
    })
}

exports.approveOrder=async(req,res)=>{
    const{orderid}=req.query;
    rejectOrderQuery(orderid,(err,result)=>{
        if (err) return res.status(4003).json({err:"incorrect email or password"})
        res.status(200).json(result)
    })
}

exports.cancleOrder=async(req,res)=>{
    const{orderid}=req.query;
    cancelOrderQuery(orderid,(err,result)=>{
        if (err) return res.status(4003).json({err:"incorrect email or password"})
        res.status(200).json(result)
    })
}

exports.setOrderinfo=async(req,res)=>{
    const{userid}=req.headers;
    const{orderid,pickupAddress,pincode,landmark,custumerNo,deliveryAddress,pincode2,ladnmark2,status,pickupdate,pickuptime,deliverydate ,deliverytime,estimations}=req.body;
    setOrderinfoQuery(userid,orderid,pickupAddress,pincode,landmark,custumerNo,deliveryAddress,pincode2,ladnmark2,status,pickupdate,pickuptime,deliverydate ,deliverytime,estimations,(err,result)=>{
        if (err) return res.status(4003).json({err:"incorrect email or password"})
        res.status(200).json(result)
    })
}

const{trackingQuery, setEstimationQuery,setStatusOrderPicked,setStatusOrderOutfordelivery,setStatusOrderInTransit,setStatusOrderDelivered,setStatusDone,setStatusOrderAccepted}=require("./models/tracking")
exports.getTracking=async(req,res)=>{
    const {orderid}=req.body;
    trackingQuery(orderid,(err,result)=>{
        if (err) return res.status(500).json({err:"Trackingid not found"})
        res.status(200).json(result)
    })
}

exports.setOrderAccepted=async(req,res)=>{
    const{orderid}=req.query;
    setStatusOrderAccepted(orderid,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}

exports.setOrderPicked=async(req,res)=>{
    const{orderid}=req.query;
    setStatusOrderPicked(orderid,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}

exports.setOrderInTransit=async(req,res)=>{
    const{orderid}=req.query;
    setStatusOrderInTransit(orderid,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}

exports.setOrderOutfordelivery=async(req,res)=>{
    const{orderid}=req.query;
    setStatusOrderOutfordelivery(orderid,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}

exports.setOrderDelivered=async(req,res)=>{
    const{orderid}=req.query;
    setStatusOrderDelivered(orderid,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}

exports.setEstimation=async(req,res)=>{
    const{orderid}=req.query;
     setEstimationQuery(orderid,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}

exports.setOrderDone=async(req,res)=>{
    const{orderid}=req.query;
     setStatusDone(orderid,(err,result)=>{
        if (err) return res.status(500).json(err)
        res.status(200).json(result)
    })
}
const{getAcceptedOrdersQuery,getCancelledQuery,getDeliveredOrdersQuery,getPickedupOrdersQuery,getRejectedOrdersQuery,getYettopickupOrdersQuery,getInTransitOrdersQuery,getOrdersQuery,getPendingOrdersQuery}=require("./models/admin")
exports.getOrders=async(req,res)=>{
    const {adminid}=req.headers
    getOrdersQuery(adminid,(err,result)=>{
        if(err)return res.status(500).json(err)
        return res.status(500).json(result);
    })
}

exports.getAcceptedOrders=async(req,res)=>{
    const {adminid}=req.headers
    getAcceptedOrdersQuery(adminid,(err,result)=>{
        if(err)return res.status(500).json(err)
        return res.status(500).json(result);
    })
}
exports.getRejectedOrders=async(req,res)=>{
    const {adminid}=req.headers
    getRejectedOrdersQuery(adminid,(err,result)=>{
        if(err)return res.status(500).json(err)
        return res.status(500).json(result);
    })
}
exports.getPendingOrders=async(req,res)=>{
    const {adminid}=req.headers
    getPendingOrdersQuery(adminid,(err,result)=>{
        if(err)return res.status(500).json(err)
        return res.status(500).json(result);
    })
}
exports.getCancelledOrders=async(req,res)=>{
    const {adminid}=req.headers
    getCancelledQuery(adminid,(err,result)=>{
        if(err)return res.status(500).json(err)
        return res.status(500).json(result);
    })
}


exports.getInTransitOrders=async(req,res)=>{
    const {adminid}=req.headers
    getInTransitOrdersQuery(adminid,(err,result)=>{
        if(err)return res.status(500).json(err)
        return res.status(500).json(result);
    })
}

exports.getPickedupOrders=async(req,res)=>{
  const {adminid}=req.headers
  getPickedupOrdersQuery(adminid,(err,result)=>{
    if(err)return res.status(500).json(err)
    return res.status(500).json(result);
})
}


exports.getYettopickupOrders=async(req,res)=>{
    const{adminid}=req.headers;
    getYettopickupOrdersQuery(adminid,(err,result)=>{
        if(err)return res.status(500).json(err)
        return res.status(500).json(result);
    })
}

exports.getDeliveredOrders=async(req,res)=>{
    const{adminid}=req.headers;
    getDeliveredOrdersQuery(adminid,(err,result)=>{
        if(err)return res.status(500).json(err)
        return res.status(500).json(result);
    })
}
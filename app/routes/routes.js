const express = require("express");
const userRoutes = require("./userRoutes");
/*const userRoutes = require("/user")
const orderRoutes = require("/order")
const trackingRoutes = require("/tracking")
*/

const routes = express();
routes.use('/user',userRoutes)
routes.use("/order",orderRoutes)
routes.use("/tracking",trackingRoutes)

module.exports=routes;
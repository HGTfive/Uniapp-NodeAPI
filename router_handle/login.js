const express = require('express')
const axios = require('axios')
const appID = 'wx9ba47101b8a9e526';
const appSecret = 'ebe524b9ea8ba550c5f08a34e7b9cbbf';
const router = express.Router()


exports.login = (req,res)=>{
    console.log(req)
    const js_code = req.body.jscode
    axios.get(
    'https://api.weixin.qq.com/sns/jscode2session?appid='+appID+
    '&secret='+appSecret+
    '&js_code='+
    js_code+'&grant_type=authorization_code')
    .then(res1=>{
        res.send({
            status:200,
            msg:res1.data
        })
    }).catch(err=>{
        console.log(err)
    })
}



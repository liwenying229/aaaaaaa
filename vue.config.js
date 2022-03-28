console.log(process);
let api = process.env.VUE_APP_API
module.exports = {
    devServer: {
        host: "localhost", //本地服务
        port: 8080, //本地端口
        proxy: { //代理
            "/api": { //起别名
                target: api, //后台的接口
                changeOrigin: true, //允许跨域
                pathRewrite: { //重写路径
                    "^/api": "/"
                }
            }
        }
    }
}
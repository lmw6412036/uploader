/**
 * Created by Administrator on 2017/6/28 0028.
 */
const path=require("path");
const co=require("hprose").co;
const autoversion=require("auto-version");
co(autoversion(path.join(__dirname,"./package.json")));

const Uploader =require("./main");

let uploader =new Uploader({
    server:"//baidu.com"
})
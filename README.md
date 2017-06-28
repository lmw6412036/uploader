# uploader

基础上传函数

## 安装

```bash
npm i -S lmw-uploader
```

## 使用

```bash
let Upload from 'lmw-uploader'//函数返回promise对象
Upload(file,options).then(()=>{});
```

## API

#### file 文件对象

#### options Object
###### options.headers {Object} [可选] [默认值：{}] http 请求的header
###### options.formData  {Object} [可选] [默认值：{}] 文件上传请求的参数表，每次发送都会发送此对象中的参数。
###### options.fileVal {String} [可选] [默认值：'file'] 设置文件上传域的name。

```bash
```

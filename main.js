export default function (file, options) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let form = new FormData();
        form.append("file", file);
        if (options.formData && Object.keys(options.formData).length > 0) {
            for (let ii in options.formData) {
                form.append(ii, options.formData[ii]);
            }
        }
        xhr.open("POST", options.server);
        if (options.headers && Object.keys(options.headers).length > 0) {
            for (let i in options.headers) {
                xhr.setRequestHeader(i, options.headers[i]);
            }
        }
        xhr.onload = (res) => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                try {
                    var response = "";
                    if (typeof xhr.response == "string") {
                        response = (JSON.parse(xhr.response));
                    } else {
                        response = xhr.response
                    }
                    resolve(response);
                } catch (e) {
                    reject(e);
                }

            } else {
                reject(xhr);
            }

        }
        xhr.upload.onprogress = options.progress;
        xhr.send(form);
    });
}

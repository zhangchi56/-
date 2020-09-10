let host = 'https://yueke.axh5.com/';

function post(url, data) {
    wx.request({
        url: host + url,
        header: {
            "content-type": "application/json;charset=UTF-8"
        },
        data: data,
        method: 'POST',
        dataType: "json",
        success: function (res) {
            return res;
        },
        fail: function () {

        },
    })
}

function get(url, data) {
    wx.request({
        url: host + url,
        header: {
            "content-type": "application/json;charset=UTF-8"
        },
        method: 'GET',
        data: data,
        dataType: "json",
        success: function (res) {
            //    return res;
            console.log(res)
        },
        fail: function () {

        },
    })
}


const token = wx.getStorageSync("token");

export function myRequest(obj) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + obj.url,
            data: obj.data || {},
            header: {
                "content-type": "application/json",
                token: token || {},
                method: config.method || "GET",
                dataType: "json",
                success: (result) => {
                    resolve(result);
                },
                fail: (err) => {
                    reject(err);
                },
            }
        });
    });
}

module.exports.post = post;
module.exports.get = get;

let host = 'https://yueke.axh5.com';

const token = wx.getStorageSync("token");

export function myRequest(obj) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + obj.url,
            data: obj.data || {},
            header: {
                "content-type": "application/json",
                token: token || {},
            },
            method: obj.method || "GET",
            dataType: "json",
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
        });
    });
}
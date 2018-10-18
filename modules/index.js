function createObj(payload) {
    let userInfo = {};

    for (var prop in payload) {
        if(payload.hasOwnProperty(prop)) {
            userInfo[key] = payload[key];
        }
    }

    return userInfo;
}

module.exports = {
    createObj
}

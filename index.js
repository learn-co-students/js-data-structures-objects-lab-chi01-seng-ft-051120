// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driverObj, key, value) {
    const newDriverObj = {...driverObj};
    newDriverObj[key] = value;
    return newDriverObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
    driverObj[key] = value;
    return driverObj
}

function deleteFromDriverByKey(driverObj, key) {
    const newDriverObj = {...driverObj}
    delete newDriverObj[key] 
    return newDriverObj
}

function destructivelyDeleteFromDriverByKey(driverObj, key) {
    delete driverObj[key]
    return driverObj
}
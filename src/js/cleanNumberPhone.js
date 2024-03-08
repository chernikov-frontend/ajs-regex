export default function cleanNumberPhone(number) {
    let cleanRe = /[\s\-()]/g;;
    let cleanNumber = `${number}`.replace(cleanRe, '').replace(/^8|\+7/g, '+7');
    return cleanNumber;
}
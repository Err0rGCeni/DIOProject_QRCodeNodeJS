async function permittedCharacters() {    
    let permitted = []

    if (process.env.QR_UPLETTERS == "true") {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if (process.env.QR_LOLETTERS == "true") {
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if (process.env.QR_NUMBERS == "true") {
        permitted.push(..."*&%$#@!?(){}[]")
    }
    
    return permitted
}

export default permittedCharacters
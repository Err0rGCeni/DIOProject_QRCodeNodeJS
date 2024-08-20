import permittedCharacters from "./utils/permitted-chars.js"

async function handler() {
    let characters = []    
    let password = ""
    const len = process.env.QR_PWD_LENGTH

    characters = await permittedCharacters()

    for(let i=0; i<len; i++) {
        const index = Math.floor(Math.random()*characters.length)
        password += characters[index]
    }

    return password
}

export default handler

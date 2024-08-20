import prompt from "prompt"

import schemaMain from "./prompts/schema-main.js"
import createQRCode from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"

async function main() {
    prompt.get(schemaMain, async (err, choice) => {
        if (choice.select == 1) {
            //console.log("Escolheu o QR Code")
            await createQRCode()
        }

        if (choice.select == 2) {
            //console.log("Escolheu Password")
            await createPassword()
        }
    })
}

main()

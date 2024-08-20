import prompt from "prompt"
import schemaQR from "../../prompts/schema-qrcode.js"
import handler from "./handle.js";

async function createQRCode() {
    prompt.get(schemaQR, handler)

    prompt.start();
}

export default createQRCode

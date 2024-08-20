import chalk from "chalk"

const schemaQR = [
    {
        name: "link",
        description: `Digite o link para gerar o ${chalk.rgb(55, 222, 222)("QR Code")}`,
    },
    {        
        name: "type",
        description: `Escoha o tipo de QR Code: ${chalk.rgb(55, 111, 222)("1 - Normal")} ou ${chalk.rgb(55, 222, 111)("2 - Terminal")}`,
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas 1 ou 2"),
        require: true
    }
]

export default schemaQR

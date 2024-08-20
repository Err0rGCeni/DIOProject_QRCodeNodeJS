import chalk from "chalk"

const SchemaMain = [
    {
        name: "select",
        description: `Escolha a ferramenta: ${chalk.rgb(55, 222, 222)("1 - QR Code")} ou ${chalk.rgb(222, 55, 222)("2 - Password")}`,
        pattern: /^[1-2]+$/,
        message: "Escolha apenas 1 ou 2",
        require: true
    }
]

export default SchemaMain

import chalk from "chalk"
import logSymbols from "log-symbols"

async function connectToDB(user, password) {
    if (user === process.env.PLAY_LOGIN && process.env.PLAY_PWD) {
        console.log("Login feito.")
    } else {
        console.log("Login falhou!")
    }
}

console.log('\x1b[31m%s\x1b[0m', 'Este texto é vermelho')
console.log(chalk.rgb(22, 88, 88).bold("22/88/88"))

console.log(
    logSymbols.success, "Sucesso!"
)

await connectToDB(process.env.PLAY_LOGIN, process.env.PLAY_PWD)

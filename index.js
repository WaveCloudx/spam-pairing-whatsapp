import readline from 'readline'
import chalk from 'chalk'
import { startPairing } from './plugins/spam_pairing.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.clear()
console.log(chalk.bold.green(`
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
`))
console.log(chalk.bold.red(`

 ██████╗ █████╗ ████████╗ ██████╗ ███████╗
██╔════╝██╔══██╗╚══██╔══╝██╔═══██╗╚══███╔╝
██║     ███████║   ██║   ██║   ██║  ███╔╝ 
██║     ██╔══██║   ██║   ██║   ██║ ███╔╝  
╚██████╗██║  ██║   ██║   ╚██████╔╝███████╗
 ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝
                                          
`))
console.log("\n====================================\==========\n")
console.log(chalk.blue("1. Mulai Spam Pairing\n2. Keluar \n"))
console.log(chalk.bold.red("Jangan di salah gunakan"))
console.log("====================================\==========\n")

rl.question(chalk.bold.yellow('Masukkan pilihan: '), (pilihan) => {
  if (pilihan === "1") {
    console.clear()
    rl.question(chalk.bold.cyan('Masukkan nomor WhatsApp (contoh: 6281234567890): '), async (number) => {
      await startPairing(number)
      rl.close()
    })
  } else if (pilihan === "2") {
    console.log(chalk.green("berhasil keluar.., jika belum keluar ketik .exit"))
    process.exit(0).exit
    } else {
    console.log(chalk.red('Keluar dari program.'))
    rl.close()
  }
})
const moment = require('moment')
const readline = require('readline')
const calculator = require('./calculadora')

class Report {
    constructor() {
        this.ads = []
    }
    
    registerAds({nameAds, client, dateStart, dateEnd, investmentDays }) {
        if(nameAds === "") {
            return "Nome invalido"
        }

        this.ads.push({
            nameAds,
            client,
            dateStart,
            dateEnd,
            investmentDays 
        })
    }


    getRegisterAds() {
        const result = this.ads.map((value) => {
            const dateStart = moment(value.dateStart, 'DD/MM/YYYY')
            const dateEnd = moment(value.dateEnd, 'DD/MM/YYYY')
            const days = dateEnd.diff(dateStart, 'days')

            const money = days * value.investmentDays

            const resultCalculator = calculator.calcVisualization(money)

            return resultCalculator;
        })

        return result;
    }
}


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const report = new Report();

const registerAdsMenu = () => {
    rl.question('Nome do anuncio: ', (name) => {
        rl.question('Cliente: ', (client) => {
            rl.question("Data de Inicio: ", (dateStart)  => {
                rl.question("Data de Fim: ", (dateEnd) => {
                    rl.question("Investimento por dia: ", (investment)  => {
                       const register = report.registerAds({
                            nameAds: name,
                            client: client,
                            dateStart: dateStart,
                            dateEnd: dateEnd,
                            investmentDays: investment,
                        })
                        
                        console.log(register)
                        console.log('\n')
                        menu();
                    })
                })
            })
        });
    });
}


const getRegisterAdsMenu = () => {
    console.log(report.getRegisterAds().toString())
    console.log('\n')
    menu();
}


var menu = function () {
    rl.question("Relatorio:\n"
        + "1)  Cadastro\n"
        + "2)  Relatorio\n"
        + "3)  Sair\n"
        , function (line) {
            switch (line){
                case "1":
                    registerAdsMenu()
                    break;
                case "2":
                    getRegisterAdsMenu()
                    break;
                case "3":
                    return rl.close();
                    break;
                default:
                    console.log("Digite um valor valido: ");
            }
            menu();
    });
};

menu();






const moment = require('moment');
var readline = require('readline');

class Report {
    constructor() {
        this.ads = []
    }
    
    registerAds({nameAds, client, dateStart, dateEnd, investmentDays }) {
        this.ads.push({
            nameAds,
            client,
            dateStart,
            dateEnd,
            investmentDays 
        })
    }
}


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var recursiveAsyncReadLine = function () {
    rl.question("Relatorio:\n"
        + "1)  Cadastro\n"
        + "2)  Relatorio\n"
        + "3)  Sair\n"
        , function (line) {

            switch (line){
                case "1":
                    let nome = ""
                    let cliente = ""
                    let data_inicio = ""
                    let data_fim = ""
                    let investimento_por_dia = ""

                    const report = new Report();

                    rl.question("Nome do anuncio: ", function (name) {
                        nome = name
                    })

                    rl.question("Cliente: ", function (client) {
                        cliente = client
                    })

                    rl.question("Data de Inicio: ", function (date) {
                        data_inicio = date
                    })

                    rl.question("Data de Fim: ", function (date) {
                        data_fim = date
                    })

                    rl.question("Data de Fim: ", function (investment) {
                        investimento_por_dia = investment
                    })


                    report.registerAds({
                        nameAds: nome,
                        client: result.cliente,
                        dateStart: result.data_inicio,
                        dateEnd: data_fim,
                        investmentDays: investimento_por_dia,
                    })
                    break;
                case "2":
                    console.log("this is option 2");
                    break;
                case "3":
                    return rl.close();
                    break;
                default:
                    console.log("Digite um valor valido: ");
            }
    recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();



// const rlp = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: true
// });
  

// while(true){
//     console.log('Relatorio:\n');
//     console.log('1. Cadastro:');
//     console.log('2. Relatorio Anucios:');

//     rlp.question("Menu valor: ",function(answer) {
//         console.log('Oh, so your favorite food is ' + answer);
//     });
// }


// prompt.get(['menu', 'nome', 'cliente', 'data_inicio', 'data_fim', 'investimento_por_dia'], function (err, result) {
//     if (err) { return onErr(err); }

//     const report = new Report();

//     switch (result.menu) {
//         case 1:
//             report.registerAds({
//                 nameAds: result.menu,
//                 client: result.cliente,
//                 dateStart: result.data_inicio,
//                 dateEnd: data_fim,
//                 investmentDays: investimento_por_dia,
//             })
//         break;

//         case 2:
            
//         break;
    
//         default:
//             break;
//     }

//     //console.log(calculator.calcVisualization(result.valor_investido))
// });

// function onErr(err) {
//     console.log(err);
//     return 1;
// }


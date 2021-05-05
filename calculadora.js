const prompt = require('prompt');

prompt.start();

class Calculator {
    calcVisualization(moneyValue) {
        let totalVisualization = 0;
        let totalClick = 0;
        let totalShare = 0;

        totalVisualization = 30 * moneyValue;
        totalClick = (totalVisualization * 12) / 100
        totalShare = (totalClick * 3) / 20

        if(totalShare > 4) {
            totalShare = 4
        }

        totalVisualization = totalVisualization + (totalShare * 40)
        

        return { totalVisualization, totalClick, totalShare }
    }
}


prompt.get(['valor_investido'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Calculadora:\n');
    console.log('Valor investido: ' + result.valor_investido);

    const calculator = new Calculator();
    console.log(calculator.calcVisualization(result.valor_investido))
});

function onErr(err) {
    console.log(err);
    return 1;
}


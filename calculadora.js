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

module.exports = new Calculator()
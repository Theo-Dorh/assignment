const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.circle-button');

let expression = '';


function updateDisplay() {
    input.value = expression || '0';
}

function evaluateExpression() {
    try {
        const result = eval(expression.replace(/X/g, '*').replace(/÷/g, '/'));
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = 'Error';
        updateDisplay();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        if (!isNaN(value) || value === '.') {
            expression += value;
        } else if (value === 'AC') {
            expression = '';
        } else if (value === '+/_') {
            
            let nums = expression.match(/(\d+\.?\d*)$/);
            if (nums) {
                const lastNum = nums[0];
                expression = expression.slice(0, -lastNum.length) + (-parseFloat(lastNum));
            }
        } else if (value === '%') {
            expression += '/100';
        } else if (value === '=') {
            evaluateExpression();
            return;
        } else if (['+', '-', 'X', '÷'].includes(value)) {
            expression += value;
        }

        updateDisplay();
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (!isNaN(key) || key === '.') {
        expression += key;
    } else if (key === 'Enter' || key === '=') {
        evaluateExpression();
        return;
    } else if (['+', '-', '*', '/', 'x', 'X', '÷'].includes(key)) {
        if (key === '*' || key.toLowerCase() === 'x') {
            expression += 'X';
        } else if (key === '/') {
            expression += '÷';
        } else {
            expression += key;
        }
    } else if (key === 'Backspace') {
        expression = expression.slice(0, -1);
    } else if (key === 'Escape') {
        expression = '';
    }

    updateDisplay();
});

updateDisplay();

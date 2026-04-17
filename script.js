const general = document.getElementById('general');
const staying = document.getElementById('staying');

const resultEl = document.getElementById('result');

function generate(staying) {
    const result = `${staying ? `*Staying*\n ` : ''}_Could you type_ the time of leaving? _[YN]_\n`;
    navigator.clipboard.writeText(result);
    resultEl.textContent += result;
}

general.addEventListener('click', (e) => generate());
staying.addEventListener('click', (e) => generate(staying));

//addDate()
//lowerCase() 

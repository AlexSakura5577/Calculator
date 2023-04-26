const isSymbol = (s) => {
  return ['/', '-', '+', '*'].filter((j) => j === s).length > 0;
};

const checkWrongNumber = (str) => {
  let validStr = str;
  for (let i = 0; i < str.length; i++) {
    const n0 = str[i];
    const n1 = str[i + 1];
    const n2 = str[i + 2];

    if (isSymbol(n0) && isSymbol(n1) && isSymbol(n2)) {
      validStr =
        validStr.split('').splice(0, i).join('') +
        validStr
          .split('')
          .splice(i + 1, validStr.length - 1)
          .join('');
      return validStr;
    } else if (isSymbol(n0) && isSymbol(n1)) {
      if (
        (n0 === '*' && n1 !== '*') ||
        (n0 !== '*' && n1 === '*') ||
        (n0 !== '*' && n1 !== '*')
      ) {
        validStr =
          validStr.split('').splice(0, i).join('') +
          validStr
            .split('')
            .splice(i + 1, validStr.length - 1)
            .join('');

        console.log('validStr: ', validStr);

        return validStr;
      }
    } else if (n0 === '.' && n1 === '.') {
      validStr =
        validStr.split('').splice(0, i).join('') +
        validStr
          .split('')
          .splice(i + 1, validStr.length - 1)
          .join('');


      return validStr;
    }
  }
  return validStr;
};

const getCounting = (value) => {
  const str = value.replace(/[^-()\d/*+.]/g, '');

  const validStr = checkWrongNumber(str);

  if (validStr !== str) {
    const valid = getCounting(validStr)
    return { result: valid.result, str: valid.str };
  }

  try {
    if (str === '') {
      return { result: null, str: '' };
    }

    const result = String(eval(str));

    if (String(result) === str || result === 'undefined' || result === 'NaN') {
      return { result: null, str: str };
    }

    if (result === 'Infinity') {
      return { result: 'Infinity', str: str };
    }

    if (result.split('').indexOf('e') !== -1) {
      return { result: null, str: str };
    }
    return { result: result, str: str };
  } catch (e) {
    return { result: null, str: str };
  }
};



const Calculator = (calcClass) => {
  const mainCalc = document.querySelector(calcClass)
  mainCalc.classList.add('calculator')

  const field = mainCalc.querySelector('.calcField');
  const result = mainCalc.querySelector('.result');
  const buttons = mainCalc.querySelector('.buttons')

  field.addEventListener('input', (e) => { fieldChange(e.target.value) })
  buttons.addEventListener('click', (e) => { buttonClick(e.target.innerText) });
  field.addEventListener('keypress', (e) => { inputKeyDownHandler(e) })

  const inputKeyDownHandler = (e) => {
    if (e.key === 'Enter' || e.key === '=') {
      buttonClick('=');
    }
  };

  const fieldChange = (value) => {
    const fields = getCounting(value);
    render(fields.str, fields.result);
  }

  const buttonClick = (key) => {
    if (key.length > 2) return;
    switch (key) {
      case 'CA': {
        render('');
        break;
      }
      case '=': {
        getEquals();
        break;
      }
      case '√': {
        const result = getCounting(field.value).result;

        let returnedValue = '';

        if (result === null) {
          returnedValue = String(Math.sqrt(Number(field.value)));
        }

        if (returnedValue === '') {
          returnedValue = String(Math.sqrt(Number(result)));
        }

        render(returnedValue, returnedValue);
        break;
      }
      default: {
        if (
          !isNaN(Number(key)) ||
          ['/', '*', '-', '+', '.', '(', ')'].filter((i) => i === key).length > 0
        ) {
          fieldChange(field.value + key);
        }
      }
    }
  }

  const getEquals = () => {
    const value = getCounting(field.value);
    render(value.result);
  }



  const render = (fieldValue, resultText) => {
    if (fieldValue !== undefined) {
      field.value = fieldValue;
    }
    if (resultText !== undefined && resultText !== null) {
      result.innerText = `= ${resultText}`;
    } else {
      result.innerText = '';
    }
  }
}


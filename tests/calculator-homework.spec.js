const { test, expect } = require('@playwright/test');
const { Calculator } = require('../pages/Calculator');

test.describe('Calculator tests', () => {
    let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
      startPage = new Calculator(page);
    });
 test.beforeEach(async () => {
    await startPage.goto();
  });

//This test checks if navigated to correct page
test('Checks that BasicCalculator is opened', async () => {
    const basicCalculator = await page.textContent('.intro-heading.text-uppercase');
  
    expect(basicCalculator).toContain('Basic Calculator');
    });

//This test checks results of operation 'Add' with positive whole numbers
const selectedBuildAdd = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildAdd.forEach(buildName => {
    test(`Tests sum on ${buildName} build`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '9');
        await page.fill('#number2Field', '8');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "0");
        await page.click('#calculateButton');
        addResult = await page.inputValue('#numberAnswerField');
        expect(addResult).toBe('17');
        });
    });

//This test checks results of operation 'Add' with negative whole numbers
const selectedBuildAddNegative = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildAddNegative.forEach(buildName => {
    test(`Tests sum on ${buildName} build with negative numbers`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '-1');
        await page.fill('#number2Field', '-2');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "0");
        await page.click('#calculateButton');
        addNegativeResult = await page.inputValue('#numberAnswerField');
        expect(addNegativeResult).toBe('-3');
        });
    });

//This test checks results of operation 'Add' with other symbols
const selectedBuildAddSymbol = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildAddSymbol.forEach(buildName => {
    test.only(`Tests sum on ${buildName} build with other symbols`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', 'aaa');
        await page.fill('#number2Field', '');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "0");
        await page.click('#calculateButton');
        errorMessageAdd = await page.textContent('#errorMsgField');
        expect(errorMessageAdd).toContain('Number 1 is not a number');
        await page.fill('#number1Field', '');
        await page.fill('#number2Field', 'bx@2222erwqr');
        await page.click('#calculateButton');
        errorMessageAdd2 = await page.textContent('#errorMsgField');
        expect(errorMessageAdd2).toContain('Number 2 is not a number');
        });
    });

//This test checks results of operation 'Add' with fractions Integers Only checkbox
const selectedBuildAddIntegersOnly= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildAddIntegersOnly.forEach(buildName => {
    test(`Tests sum on ${buildName} build with Integers Only selected`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '1.1234');
        await page.fill('#number2Field', '2.3234');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "0");
        await page.check('#integerSelect');
        await page.click('#calculateButton');
        sumIntegerOnly = await page.inputValue('#numberAnswerField');
        expect(sumIntegerOnly).toBe('3');
        });
    });

//This test checks results of operation 'Subtract' with positive whole numbers
const selectedBuildSubtract = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildSubtract.forEach(buildName => {
    test(`Tests subtract on ${buildName} build`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '9');
        await page.fill('#number2Field', '8');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "1");
        await page.click('#calculateButton');
        subtractResult = await page.inputValue('#numberAnswerField');
        expect(subtractResult).toBe('1');
        });
    });

//This test checks results of operation 'Subtract' with negative numbers
const selectedBuildSubtractNegative = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildSubtractNegative.forEach(buildName => {
    test(`Tests subtract on ${buildName} build with negative numbers`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '-1');
        await page.fill('#number2Field', '-7');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "1");
        await page.click('#calculateButton');
        subtractResultNegative = await page.inputValue('#numberAnswerField');
        expect(subtractResultNegative).toBe('6');
        });
    });

//This test checks results of operation 'Subtract' with other symbols
const selectedBuildSubtractSymbol = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildSubtractSymbol.forEach(buildName => {
    test(`Tests subtract on ${buildName} build with other symbols`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '8sa98765juuyt');
        await page.fill('#number2Field', '');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "1");
        await page.click('#calculateButton');
        errorMessageSubtract = await page.textContent('#errorMsgField');
        expect(errorMessageSubtract).toContain('Number 1 is not a number');
        await page.fill('#number1Field', '');
        await page.fill('#number2Field', 'bx@');
        await page.click('#calculateButton');
        errorMessageSubtract2 = await page.textContent('#errorMsgField');
        expect(errorMessageSubtract2).toContain('Number 2 is not a number');
        });
    });

//This test checks results of operation 'Multiply' with positive whole numbers
const selectedBuildMultiply = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildMultiply.forEach(buildName => {
    test(`Tests multiply on ${buildName} build`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '9');
        await page.fill('#number2Field', '8');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "2");
        await page.click('#calculateButton');
        multiplyResult = await page.inputValue('#numberAnswerField');
        expect(multiplyResult).toBe('72');
        });
    });

//This test checks results of operation 'Divide' with positive whole numbers
const selectedBuildDivide = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildDivide.forEach(buildName => {
    test.only(`Tests Divide on ${buildName} build`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '9');
        await page.fill('#number2Field', '8');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "3");
        await page.click('#calculateButton');
        divideResult = await page.inputValue('#numberAnswerField');
        expect(divideResult).toBe('1.125');
        });
    });

//This test checks divide by zero
const selectedBuildDivideZero = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildDivideZero.forEach(buildName => {
    test.only(`Tests Divide by zero on ${buildName} build`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '9');
        await page.fill('#number2Field', '0');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "3");
        await page.click('#calculateButton');
        errorMessage = await page.textContent('#errorMsgField');
        expect(errorMessage).toContain('Divide by zero error!');
        });
    });

//This test checks results of operation 'Concatenate' with strings
const selectedBuildConcatenate = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildConcatenate.forEach(buildName => {
    test(`Tests Concatenate on ${buildName} build`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', 'abc@#1');
        await page.fill('#number2Field', 'cda#9!');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "4");
        await page.click('#calculateButton');
        concatenateResult = await page.inputValue('#numberAnswerField');
        expect(concatenateResult).toBe('abc@#1cda#9!');
        });
    });

//This test checks if 'Integers only' checkbox is visible with 'Concatenate' operation
const selectedBuildConcatenateIntegersOnly = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildConcatenateIntegersOnly.forEach(buildName => {
    test.only(`Tests if Integers Only checkbox is displayed with Concatenate operation on ${buildName} build`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "4");
        integersOnly = await page.isVisible('#intSelectionLabel');
        expect(integersOnly).toBe(false);
        });
    });

//This test shows bug in Prototype build!
const selectedBuildAddFraction = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //0 build is Prototype build
selectedBuildAddFraction.forEach(buildName => {
    test.only(`Tests sum on ${buildName} build with fractions`, async () => {
        await page.waitForSelector('#selectBuild');
        await page.click('#selectBuild');
        await page.selectOption('#selectBuild', buildName);
        await page.fill('#number1Field', '1.1234');
        await page.fill('#number2Field', '2.3234');
        await page.click('#selectOperationDropdown');
        await page.selectOption('#selectOperationDropdown', "0");
        await page.click('#calculateButton');
        addWithFraction = await page.inputValue('#numberAnswerField');
        expect(addWithFraction).toBe('3.4468');
        });
    });
});

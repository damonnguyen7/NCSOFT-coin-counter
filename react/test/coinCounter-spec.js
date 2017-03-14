const Browser = require('zombie');

Browser.localhost('example.com', 3000);

describe('Coin Counter', function() {
  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('Main Container Test', function() {
    it('should exist in dom', function () {
     browser.assert.element('#App .main-container')
    });
    it('should have title with coin counter', function () {
      browser.assert.text('#App .main-container h1', 'Coin Counter')
    });
    it('should have 4 coin containers', function () {
      browser.assert.element('#A.div-coin-value')
      browser.assert.element('#B.div-coin-value')
      browser.assert.element('#C.div-coin-value')
      browser.assert.element('#D.div-coin-value')

    });
  });
  describe('Default Coin Container Test', function() {
    it('should have default coins value', function() {
      function generateCodeText(coinValue) {
        var codeToEvaluate = `
          [
            document.querySelector('#A'),
            document.querySelector('#B'),
            document.querySelector('#C'),
            document.querySelector('#D')
          ].map(function(span) {
            return span.textContent;
          }).indexOf('${coinValue}') !== -1
        `;
        return codeToEvaluate;
      }
      var quarterCoinStatement = generateCodeText(25);
      var dimeCoinStatement = generateCodeText(10);
      var nickelCoinStatement = generateCodeText(5);
      var pennyCoinStatement = generateCodeText(1);

      browser.assert.evaluate(quarterCoinStatement);
      browser.assert.evaluate(dimeCoinStatement);
      browser.assert.evaluate(nickelCoinStatement);
      browser.assert.evaluate(pennyCoinStatement);
    });
  });

  describe('Coin Value Result Test', function() {
    describe('Enter 1.07 Test', function () {
      before(function () {
        browser.fill('input.value-input', '107');
        browser.document.querySelector('input[type=submit]').click();
      });
      it('should show 4 quarters when 1.07 is entered', function () {
        browser.assert.text('div#A.div-counter-value', '4');
      });
      it('should show 1 nickel when 1.07 is entered', function () {
        browser.assert.text('div#C.div-counter-value', '1');
      });
      it('should show 2 cents when 1.07 is entered', function () {
        browser.assert.text('div#D.div-counter-value', '2');
      });
    });
    describe('Enter 11.37 Test', function () {
      before(function () {
        browser.fill('input.value-input', '1137');
        browser.document.querySelector('input[type=submit]').click();
      });
      it('should show 45 quarters when 11.37 is entered', function () {
        browser.assert.text('div#A.div-counter-value', '45');
      });
      it('should show 1 dime when 11.37 is entered', function () {
        browser.assert.text('div#B.div-counter-value', '1');
      });
      it('should show 2 cents when 11.37 is entered', function () {
        browser.assert.text('div#D.div-counter-value', '2');
      });
    });
  });

});

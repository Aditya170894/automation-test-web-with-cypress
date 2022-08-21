const Homepage = require('../support/pages/Homepage');
let homepage = new Homepage();
const HomepageData = require('../support/datatest/HomepageData');

describe('Page object model', () => {
    it('Visit Quote Web', () => {
        homepage.visit('')
    })
    it('Input Quote', () => {
        homepage.type_quote(HomepageData.dataTest.quote)
    })
    it('Sekect Colour', () => {
        homepage.choose_colour(HomepageData.dataTest.quote_Colour)
    })
    it('Submit Quote', () => {
        homepage.submit_quote(HomepageData.dataTest.quote_Colour,HomepageData.dataTest.quote)
    });
    it('Clear Quote', () => {
        homepage.clear_quote(HomepageData.dataTest.quote)
    });
})

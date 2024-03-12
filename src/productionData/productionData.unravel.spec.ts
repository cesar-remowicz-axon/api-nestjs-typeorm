import { ProductionDataUtils } from "../utils/productionData.utils"

describe('Should unravel the barcode', () => {

    const prodDataUtils = new ProductionDataUtils();

    it('OdfNumber to be 2201221', () => {
        const unravel = prodDataUtils.unravel('00020LAS012201221');
        expect(unravel.odfNumber).toBe(2201221);
    });

    it('OpNumber to be 20', () => {
        const unravel = prodDataUtils.unravel('00020LAS012201221');
        expect(unravel.opNumber).toBe(20);
    })

    it(`Machine to be 'LAS01'`, () => {
        const unravel = prodDataUtils.unravel('00020LAS012201221');
        expect(unravel.machine).toBe('LAS01');
    })

    it('OdfNumber to be NULL', () => {
        const unravel = prodDataUtils.unravel('00020LAS01');
        expect(unravel.odfNumber).toBe(null);
    });

    it('Machine to be NULL', () => {
        const unravel = prodDataUtils.unravel('000202201221');
        expect(unravel.odfNumber).toBe(null);
    });

    it('OpNumber to be NULL', () => {
        const unravel = prodDataUtils.unravel('LAS012201221');
        expect(unravel.opNumber).toBe(null);
    });

    it('OdfNumber to be NULL', () => {
        const unravel = prodDataUtils.unravel(null);
        expect(unravel.odfNumber).toBe(null);
    })

    it('OdfNumber to be NULL', () => {
        const unravel = prodDataUtils.unravel(undefined);
        expect(unravel.odfNumber).toBe(null);
    })

});
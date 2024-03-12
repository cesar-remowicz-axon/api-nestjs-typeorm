export class ProductionDataUtils {

    constructor() { };

    public async productionDataFinish() {
        return;
    }

    public unravel(barcode: string) {

        const response = { odfNumber: null, machine: null, opNumber:  null };

        const availableMachines = ['ACL01', 'ACL01 - 01', 'ACL01 - 01', 'ACL1AG', 'ACS01', 'ACS1AG', 'CAL001', 'CONT01', 'CONT02', 'CONT03', 'CT001', 'DBR02', 'DBR02 - 01', 'DBR02 - 02', 'DBR03', 'DBR04', 'DBT01', 'ENG01', 'ENG02', 'EX002', 'FR01', 'FRE01', 'JAT01', 'LAS01', 'MO001', 'OLI00', 'PI008', 'PLA001', 'PR001', 'PR003', 'PU001', 'QUA001', 'QUA002', 'RET001', 'RS02', 'SE001', 'SE002', 'SE004', 'SE005', 'SE006', 'SE008', 'SE009', 'SE011', 'SE012', 'SE013', 'SE014', 'SE015', 'SE023', 'SE032', 'SE033', 'SE035', 'SE037', 'SE038', 'SE042', 'SE043', 'SE048', 'SE049', 'SE050', 'SE052', 'SE056', 'SE057', 'SE058', 'SE061', 'SE062', 'SER01', 'SLD01', 'SLD02', 'SLD03', 'SLD04', 'SLD05', 'SLD06', 'SLD07', 'SPR001', 'TR001', 'TR002'];

        if (!barcode) {
            return response;
        }

        const n = barcode.length;

        if (n < 10 || n > 25) {
            return response;
        }

        const indexOfMachine = availableMachines.findIndex((element: string) => barcode.includes(element));

        if (indexOfMachine === -1) {
            return response;
        }

        const indexMachine = barcode.indexOf(availableMachines[indexOfMachine]!);
        const lastIndexMachine = indexMachine + availableMachines[indexOfMachine]!.length;
        const machine = barcode.slice(indexMachine, lastIndexMachine);

        // const indexOfOpNumber = availableOperations.findIndex((element: string) => barcode.includes(element));
        // if (indexOfOpNumber === -1) {
        //     return null;
        // };

        // const indexOpNumber = barcode.indexOf(availableOperations[indexOfOpNumber]!);
        // const lastIndexOpNumber = indexOpNumber + availableOperations[indexOfOpNumber]!.length;
        const opNumber = Number(barcode.slice(0, indexMachine)) || null;

        const odfNumber = Number(barcode.slice(lastIndexMachine)) || null;

        return { odfNumber, machine, opNumber };
    }

}
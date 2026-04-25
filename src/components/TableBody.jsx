import {calculateInvestmentResults,formatter} from "../util/investment.js"

export default function TableBody({investmentInfo}) {
    const annualInvestmentData = [...calculateInvestmentResults(investmentInfo)];
    const results = annualInvestmentData.map((dataEntry,index) => {
        const datafields = Object.values(dataEntry);
        return (
            <tr key={index}>
                {datafields.map((field,index) => <td key={index}>{index > 0? formatter.format(field): field}</td>)}
            </tr>
        );
    })

    return (
        <tbody>
            {results}
        </tbody>
    );
}
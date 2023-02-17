import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

// Redux Store
import { useSelector, useDispatch } from 'react-redux';

export default function FinanceForm() {
	const [financialData, setFinancialData] = useState({
		takeHomePay: '',
		checkingAccountBalance: '',
		savingsAccountBalance: '',
		housingBurn: '',
		transportationBurn: '',
		foodBurn: '',
		insuranceBurn: '',
		badDebtBalance: '',
		passiveCashFlow: '',
		desiredLifestyleCost: '',
		bigLifeGoalsBurn: '',
	});

	const [outputData, setOutputData] = useState({
		savingsRate: 0,
	});

	const handleChange = (event) => {
		setFinancialData({
			...financialData,
			[event.target.name]: parseFloat(event.target.value),
		});
	};

	//Handling if input changed
	React.useEffect(() => {
		const f = financialData;
		const averageBurn =
			f.housingBurn + f.transportationBurn + f.foodBurn + f.insuranceBurn;
		const bankBalance = f.checkingAccountBalance + f.savingsAccountBalance;
		const savingsRate = Math.Round(
			100 * ((f.takeHomePay - averageBurn) / f.takeHomePay)
		);
		const calcRunway = Math.floor(bankBalance / averageBurn);

		let calcStage = 0;

		if (f.passiveCashFlow > 0 && f.passiveCashFlow > 3 * f.bigLifeGoalsBurn) {
			calcStage = 7;
		} else if (
			f.passiveCashFlow > 0 &&
			f.passiveCashFlow >= f.bigLifeGoalsBurn
		) {
			calcStage = 6;
		} else if (
			f.passiveCashFlow > 0 &&
			f.passiveCashFlow >= f.desiredLifestyleCost
		) {
			calcStage = 5;
		} else if (f.passiveCashFlow > 0 && f.passiveCashFlow >= averageBurn) {
			calcStage = 4;
		} else if (
			f.takeHomePay >= averageBurn &&
			bankBalance >= averageBurn * 6 &&
			f.badDebtBalance == 0
		) {
			calcStage = 3;
		} else if (f.takeHomePay >= averageBurn && bankBalance >= averageBurn * 6) {
			calcStage = 2;
		} else if (f.takeHomePay >= averageBurn && bankBalance <= averageBurn * 6) {
			calcStage = 1;
		} else if (f.takeHomePay <= averageBurn) {
			calcStage = 0;
		}

		setOutputData({
			...outputData,
			savingsRate: savingsRate,
			calcRunway: calcRunway,
			calcStage: calcStage,
		});
	}, [financialData]);

	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					type="number"
					id="takeHomePay"
					label="Take Home Pay (Monthly)"
					name="takeHomePay"
					value={financialData.takeHomePay}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="checkingAccountBalance"
					label="Checking Account Balance"
					name="checkingAccountBalance"
					value={financialData.checkingAccountBalance}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="savingsAccountBalance"
					label="Savings Account Balance"
					name="savingsAccountBalance"
					value={financialData.savingsAccountBalance}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="housingBurn"
					label="Housing Burn (Monthly)"
					name="housingBurn"
					value={financialData.housingBurn}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="transportationBurn"
					label="Transportation Burn (Monthly)"
					name="transportationBurn"
					value={financialData.transportationBurn}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="foodBurn"
					label="Food Burn (Monthly)"
					name="foodBurn"
					value={financialData.foodBurn}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="insuranceBurn"
					label="Insurance Burn (Monthly)"
					name="insuranceBurn"
					value={financialData.insuranceBurn}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="badDebtBalance"
					label="Bad Debt Balance"
					name="badDebtBalance"
					value={financialData.badDebtBalance}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="passiveCashFlow"
					label="Passive Cash Flow (Monthly)"
					name="passiveCashFlow"
					value={financialData.passiveCashFlow}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="desiredLifestyleCost"
					label="Desired Lifestyle Cost (Monthly)"
					name="desiredLifestyleCost"
					value={financialData.desiredLifestyleCost}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="bigLifeGoalsBurn"
					label="Big Life Goals Burn (Monthly)"
					name="bigLifeGoalsBurn"
					value={financialData.bigLifeGoalsBurn}
					onChange={(e) => handleChange(e)}
				/>
			</div>

			<br></br>
			{/* Start of Output */}

			<h3>
				<b>Savings Rate: {outputData.savingsRate}%</b>
				<br></br>
				<b>Runway: {outputData.calcRunway} Months</b>
				<br></br>
				<b>Stage: {outputData.calcStage}</b>
			</h3>
		</Box>
	);
}

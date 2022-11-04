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
			f.housingBurn +
			f.transportationBurn +
			f.foodBurn +
			f.insuranceBurn +
			f.bigLifeGoalsBurn;

		setOutputData({
			...outputData,
			savingsRate: 100 * ((f.takeHomePay - averageBurn) / f.takeHomePay),
		});

		console.log(outputData.savingsRate);
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
					label="Take Home Pay"
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
					label="Housing Burn"
					name="housingBurn"
					value={financialData.housingBurn}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="transportationBurn"
					label="Transportation Burn"
					name="transportationBurn"
					value={financialData.transportationBurn}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="foodBurn"
					label="Food Burn"
					name="foodBurn"
					value={financialData.foodBurn}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="insuranceBurn"
					label="Insurance Burn"
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
					label="Passive Cash Flow"
					name="passiveCashFlow"
					value={financialData.passiveCashFlow}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="desiredLifestyleCost"
					label="Desired Lifestyle Cost"
					name="desiredLifestyleCost"
					value={financialData.desiredLifestyleCost}
					onChange={(e) => handleChange(e)}
				/>

				<TextField
					type="number"
					id="bigLifeGoalsBurn"
					label="Big Life Goals Burn"
					name="bigLifeGoalsBurn"
					value={financialData.bigLifeGoalsBurn}
					onChange={(e) => handleChange(e)}
				/>
			</div>

			<br></br>
			{/* Start of Output */}

			<h3>
				<b>Savings Rate: {outputData.savingsRate}</b>
			</h3>
		</Box>
	);
}

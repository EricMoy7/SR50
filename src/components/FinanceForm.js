import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

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

	const handleChange = (event) => {
		setFinancialData({
			...financialData,
			[event.target.name]: event.target.value,
		});
	};

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
			</div>
		</Box>
	);
}

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
					type="text"
					id="outlined-required"
					label="Take Home Pay"
					name="takeHomePay"
					defaultValue="Hello World"
					value={financialData.takeHomePay}
					onChange={(e) => handleChange(e)}
				/>
				<TextField
					id="outlined-number"
					label="Number"
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
		</Box>
	);
}

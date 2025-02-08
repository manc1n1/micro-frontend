import { useState } from 'react';
import { Box, Button, Stack, Step, StepLabel, Stepper } from '@mui/material';
import Beneficiary from './partials/Beneficiary';
import Payment from './partials/Payment';
import ReviewSubmit from './partials/ReviewSubmit';

const steps = ['Beneficiary', 'Payment', 'Review and Submit'];

const TestStepper = () => {
	const [step, setStep] = useState(0);

	const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));
	const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
	const saveAndExit = () => alert('Progress saved!');

	return (
		<Box>
			<Stepper activeStep={step}>
				{steps.map((label, index) => (
					<Step key={index}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Box>
				{step === 0 && <Beneficiary />}
				{step === 1 && <Payment />}
				{step === 2 && <ReviewSubmit />}
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Stack
					direction='row'
					spacing={2}
				>
					<Button
						onClick={prevStep}
						disabled={step === 0}
						variant='outlined'
					>
						Back
					</Button>
					<Button
						onClick={nextStep}
						disabled={step === 2}
						variant='contained'
					>
						Continue
					</Button>
				</Stack>
				<Button
					onClick={saveAndExit}
					variant='outlined'
				>
					Save and Exit
				</Button>
			</Box>
		</Box>
	);
};

export default TestStepper;

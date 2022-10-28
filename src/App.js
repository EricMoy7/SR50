import logo from './logo.svg';
import './App.css';
import FinanceForm from './components/FinanceForm';

function App() {
	return (
		<div>
			<div className="grid gap-4 grid-cols-3 grid-rows-1">
				<div className="col-span-1 col-start-2 col-end-2 ">
					<FinanceForm />
				</div>
			</div>
		</div>
	);
}

export default App;

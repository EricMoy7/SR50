import logo from './logo.svg';
import './App.css';
import FinanceForm from './components/FinanceForm';

function App() {
	return (
		<div>
			<div className="grid gap-4 grid-cols-5 grid-rows-1 p-10">
				<div className="col-span-3 col-start-2 col-end-4 ">
					<FinanceForm />
				</div>
			</div>
		</div>
	);
}

export default App;

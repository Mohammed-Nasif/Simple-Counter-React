import { useState } from 'react';
import Counter from '../Counter/Counter';
import CounterBtn from '../CounterBtn/CounterBtn';

export default function CounterActions() {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		const newCount = count + 1;
		setCount(newCount);
	};
	const decrementCount = () => {
		if (count > 0) {
			const newCount = count - 1;
			setCount(newCount);
		}
	};
	const resetCounter = () => {
		setCount(0);
	};

	return (
		<div className='d-flex flex-column justify-content-center align-items-center mt-5 bg-secondary m-auto w-25 h-25 rounded-4 p-4'>
			<Counter count={count} />
			<div className='w-50 d-flex flex-column align-items-center'>
				<div className='d-flex flex-row gap-5 w-100 m-auto'>
					<CounterBtn isCountUp={false} countDown={decrementCount} />
					<CounterBtn isCountUp={true} countUp={incrementCount} />
				</div>
				<CounterBtn isCountReset={true} countReset={resetCounter} />
			</div>
		</div>
	);
}

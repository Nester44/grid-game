import Grid from './components/grid'
import { useField } from './hooks/useField'

export default function App() {
	const { field, toggleCell } = useField(10)

	return (
		<div className='flex flex-col items-center'>
			<h1>Hello, world!</h1>

			<Grid field={field} toggleCell={toggleCell} />
		</div>
	)
}

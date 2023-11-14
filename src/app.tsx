import ActiveList from './components/activeList'
import Grid from './components/grid'
import { useField } from './hooks/useField'

export default function App() {
	const { field, toggleCell, activeCells } = useField(3)

	return (
		<div className='flex gap-4 p-4'>
			<Grid field={field} toggleCell={toggleCell} />
			<ActiveList activeCells={activeCells} />
		</div>
	)
}

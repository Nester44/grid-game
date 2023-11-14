import { useState } from 'react'
import ActiveList from './components/activeList'
import Grid from './components/grid/grid'
import ModePicker from './components/modePicker/modePicker'
import { useField } from './hooks/useField'

export default function App() {
	const [fieldSize, setFieldSize] = useState(0)
	const { field, toggleCell, activeCells } = useField(fieldSize)

	return (
		<div className='p-4'>
			<ModePicker setFieldSize={setFieldSize} />
			<div className='flex gap-4 mt-4'>
				<Grid field={field} toggleCell={toggleCell} />
				{fieldSize > 0 && <ActiveList activeCells={activeCells} />}
			</div>
		</div>
	)
}

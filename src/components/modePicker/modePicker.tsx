import { useState } from 'react'
import { Button } from '../ui/button'
import ModeSelect from './modeSelect'

type Props = {
	setFieldSize: (size: number) => void
}

const ModePicker = ({ setFieldSize }: Props) => {
	const [localFieldSize, setLocalFieldSize] = useState(0)
	return (
		<>
			<h2 className='text-lg text-gray-500'>
				Grid and active cells list are scrollable (if they big enough)
				for better UI
			</h2>
			<div className='flex gap-4'>
				<ModeSelect setLocalFieldSize={setLocalFieldSize} />
				<Button
					disabled={localFieldSize === 0}
					onClick={() => setFieldSize(localFieldSize)}
				>
					Start
				</Button>
			</div>
		</>
	)
}

export default ModePicker

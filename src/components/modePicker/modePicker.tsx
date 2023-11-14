import { useState } from 'react'
import { Button } from '../ui/button'
import ModeSelect from './modeSelect'

type Props = {
	setFieldSize: (size: number) => void
}

const ModePicker = ({ setFieldSize }: Props) => {
	const [localFieldSize, setLocalFieldSize] = useState(0)
	return (
		<div className='flex gap-4'>
			<ModeSelect setLocalFieldSize={setLocalFieldSize} />
			<Button onClick={() => setFieldSize(localFieldSize)}>Start</Button>
		</div>
	)
}

export default ModePicker

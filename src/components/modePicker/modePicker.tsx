import { Button } from '../ui/button'
import ModeSelect from './modeSelect'

type Props = {
	setFieldSize: (size: number) => void
}

const ModePicker = ({ setFieldSize }: Props) => {
	return (
		<div className='flex gap-4'>
			<ModeSelect setFieldSize={setFieldSize} />
			<Button>Start</Button>
		</div>
	)
}

export default ModePicker

import { IMode } from '@/types'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'

type Props = {
	setLocalFieldSize: (size: number) => void
}

const ModeSelect = ({ setLocalFieldSize }: Props) => {
	const options: IMode[] = [
		{
			name: 'Easy',
			field: 5,
			id: '1',
		},
		{
			name: 'Normal',
			field: 10,
			id: '2',
		},
	]
	return (
		<Select onValueChange={(value) => setLocalFieldSize(Number(value))}>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Select a mode' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{options.map((option) => (
						<SelectItem
							key={option.id}
							value={String(option.field)}
						>
							{option.name}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default ModeSelect

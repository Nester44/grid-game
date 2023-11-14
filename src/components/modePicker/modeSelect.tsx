import { useModes } from '@/hooks/useModes'
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
	const { modes, isLoading } = useModes()

	return (
		<Select onValueChange={(value) => setLocalFieldSize(Number(value))}>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Select a mode' />
			</SelectTrigger>
			<SelectContent>
				{isLoading && <div>Loading...</div>}
				<SelectGroup>
					{modes.map((option) => (
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

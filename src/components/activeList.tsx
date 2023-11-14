import { ICell } from '../types'

type Props = {
	activeCells: ICell[]
}

const ActiveList = ({ activeCells }: Props) => {
	return (
		<div className='flex flex-col gap-2'>
			{activeCells.map(({ x, y }) => (
				<div
					className='bg-yellow-500 border-yellow-700 border-2 p-2'
					key={`active-${x}-${y}`}
				>
					Row: {y + 1} column: {x + 1}
				</div>
			))}
		</div>
	)
}

export default ActiveList

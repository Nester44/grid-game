import { ICell } from '../types'

type Props = {
	activeCells: ICell[]
}

const ActiveList = ({ activeCells }: Props) => {
	return (
		<div className='flex flex-col gap-2 max-h-[50rem] overflow-auto'>
			<h2 className='text-2xl'>Active cells</h2>
			{activeCells.map(({ x, y }) => (
				<div
					className='bg-amber-500 border-yellow-700 border-2 p-2 rounded-md'
					key={`active-${x}-${y}`}
				>
					Row: {y + 1} column: {x + 1}
				</div>
			))}
		</div>
	)
}

export default ActiveList

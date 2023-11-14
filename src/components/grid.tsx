import Cell from './cell'

type Props = {
	field: boolean[][]
	toggleCell: (rowIndex: number, cellIndex: number) => void
}

const Grid = (props: Props) => {
	const { field, toggleCell } = props
	return (
		<div>
			{field.map((row, rowIndex) => {
				return (
					<div key={`row-${rowIndex}`} className='flex'>
						{row.map((value, cellIndex) => {
							return (
								<Cell
									key={`${rowIndex}-${cellIndex}`}
									isActive={value}
									onHover={() =>
										toggleCell(cellIndex, rowIndex)
									}
								/>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default Grid

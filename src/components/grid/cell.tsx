type Props = {
	isActive: boolean
	onHover: () => void
}

const Cell = ({ isActive, onHover }: Props) => {
	return (
		<div
			className={`w-10 h-10 flex-shrink-0 border border-gray-400 transition-colors ${
				isActive ? 'bg-blue-500' : 'bg-white'
			}`}
			onMouseEnter={onHover}
		/>
	)
}

export default Cell

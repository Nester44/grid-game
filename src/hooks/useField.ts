import { useEffect, useState } from 'react'
import { ICell } from '../types'

export const useField = (size: number) => {
	const getInitialField = (size: number): boolean[][] =>
		Array(size).fill(Array(size).fill(false))

	const [field, setField] = useState<boolean[][]>(getInitialField(size))

	// Check for size changing and creating new field
	useEffect(() => {
		setField(getInitialField(size))
	}, [size])

	const toggleCell = (x: number, y: number) => {
		setField((prev) => {
			const newField = []
			for (let i = 0; i < prev.length; i++) {
				const row = []
				for (let j = 0; j < prev[i].length; j++) {
					const value = prev[i][j]
					if (i !== y || j !== x) {
						row.push(value)
					} else {
						row.push(!value)
					}
				}
				newField.push(row)
			}
			return newField
		})
	}

	const activeCells = [] as ICell[]

	for (let y = 0; y < field.length; y++) {
		for (let x = 0; x < field[0].length; x++) {
			const value = field[y][x]

			if (value) activeCells.push({ x, y })
		}
	}

	return { field, toggleCell, activeCells }
}

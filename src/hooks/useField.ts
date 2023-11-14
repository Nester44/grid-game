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
			const newField = JSON.parse(JSON.stringify(prev))
			newField[y][x] = !newField[y][x]
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

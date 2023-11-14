import { IMode } from '@/types'
import { useEffect, useState } from 'react'

export const useModes = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [modes, setModes] = useState<IMode[]>([])
	useEffect(() => {
		const url = 'https://60816d9073292b0017cdd833.mockapi.io/modes'
		const fetchModes = async () => {
			setIsLoading(true)
			try {
				const response = (await fetch(url).then((res) => {
					if (!res.ok) {
						return Promise.reject("Couldn't fetch modes")
					}
					return res.json()
				})) as IMode[]
				setModes(response)
				setIsLoading(false)
			} catch (error) {
				alert(error)
			}
		}

		fetchModes()
	}, [])

	return { isLoading, modes }
}

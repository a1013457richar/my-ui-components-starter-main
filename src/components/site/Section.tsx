// components/site/Section.tsx
// A section used to group the documentation components for a type/variant of a custom UI component
export const Section = ({
	id,
	title,
	description,
	children,
}: {
	id?: string
	title: string
	description: string
	children: React.ReactNode
}) => {
	return (
		<div>
			{/* Section heading  */}
			<Title title={title} id={id||title} />
			{/* Section description  */}
			<p className="mt-1 text-gray-600 dark:text-zinc-400">{description}</p>
			{/* Section preview area */}
			<div className="mt-3">
				<div className="flex flex-col rounded-xl border p-6 shadow-sm dark:border-zinc-700 dark:bg-transparent">
					<div className="flex flex-wrap gap-2">
						{/* The previewed stuff aka child components */}
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

import React, { useEffect } from "react"
import { RxLink2 } from "react-icons/rx"
import { Link, useLocation } from "react-router-dom"

const Title = ({ id, title }: { id: string; title: string }) => {
	const location = useLocation()
	const scrollToHash = () => {
		const anchor = document.getElementById(id)
		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "start" })
		}
	}
	useEffect(() => {
		const scrollToHash = () => {
			const anchor = document.getElementById(id)
			if (anchor) {
				anchor.scrollIntoView({ behavior: "smooth", block: "start" })
			}
		}

		if (location.hash) {
			if (location.hash === `#${id}`) {
				scrollToHash()
			}
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" })
		}
		return () => {
			window.scrollTo({ top: 0, behavior: "instant" })
		}
	}, [id, location.hash])

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		history.pushState({}, "", `#${id}`)
		scrollToHash()
	}
	return (
		<h2 id={id} className="scroll-mt-24">
			<Link
				className="group relative text-lg font-bold text-gray-800 dark:text-white"
				to={`#${id}`}
				onClick={handleLinkClick}
			>
				<span className="absolute -left-4 top-1 inline-block shrink-0 opacity-0 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-[2rem] group-hover:-left-6 group-hover:opacity-100">
					<RxLink2 className="h-3.5 w-3.5 text-emerald-600" />
				</span>
				{title}
			</Link>
		</h2>
	)
}

export default Title

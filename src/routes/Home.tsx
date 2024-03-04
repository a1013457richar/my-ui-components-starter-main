import { Link } from "react-router-dom"
import { Container } from "../components/site/Container"
import { BlockLinkCard } from "../components/library/Card"
import { RxButton, RxCardStack, RxInput } from "react-icons/rx"

export const HomePage = () => {
	return (
		<Container
			title="Tim's React Framework"
			description="A simple, minimal, and fast React framework."
		>
			<div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
				<BlockLinkCard
					CustomLink={Link}
					customlinkprop={{ to: "/button" }}
					text="button"
					widthLimit="none"
				>
					<RxButton className="h-10 w-10" />
				</BlockLinkCard>
				<BlockLinkCard
					widthLimit="none"
					text="card"
					CustomLink={Link}
					customlinkprop={{ to: "/card" }}
				>
					<RxCardStack className="h-10 w-10" />
				</BlockLinkCard>
				<BlockLinkCard 
                widthLimit="none"
                text="input"
                CustomLink={Link}
                customlinkprop={{ to: "/input" }}>
					<RxInput className="h-10 w-10" />
				</BlockLinkCard>
			</div>
		</Container>
	)
}

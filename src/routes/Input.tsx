import React from "react"
import { Container } from "../components/site/Container"
import { Section } from "../components/site/Section"
import { Input } from "../components/library/Input"

export const InputPage = () => {
	return (
		<Container
			title="Inputs"
			description="An input is a widget that allows users to provide data or specify
options, which can be submitted as part of a form or used to interact
with and manipulate content on a web page."
		>
			<Section title="Basic" description="Basic input with a placeholder.">
				{/* Basic Input */}
				<Input type="text" placeholder="Type things here!" />

				{/* Basic Disabled Input */}
				<Input
					type="text"
					placeholder="Disabled 😔" //https://emojipedia.org/pensive-face
					disabled
				/>
			</Section>
			<Section title="Label" description="Input with a label.">
				{/* Input with label */}
				<Input type="email" label="Email" placeholder="you@site.com" />
			</Section>
			<Section title="Description" description="Input with a description">
				{/* Input with description */}
				<Input
					type="email"
					label="Email"
					description="We'll never share your details."
					placeholder="you@site.com"
				/>
			</Section>
		</Container>
	)
}



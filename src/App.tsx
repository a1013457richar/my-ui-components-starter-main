import { Layout } from "./components/site/Layout"
import { InputPage } from "./routes/Input"
import ButtonPage from "./routes/Button"
import CardPage from "./routes/Card"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { HomePage } from "./routes/Home"
import { Notfound } from "./routes/Notfound"

export default function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}
export function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Layout>
						<Outlet />
					</Layout>
				}
			>
				<Route index={true} element={<HomePage />}></Route>
				<Route path="button" element={<ButtonPage />}></Route>
				<Route path="card" element={<CardPage />}></Route>
				<Route path="input" element={<InputPage />}></Route>
				<Route path="*" element={<Notfound/>}></Route>
			</Route>
		</Routes>
	)
}



import { ColorPicker } from "../components/ColorPicker";

export const App = () => {
    return (
        <main className={"w-full h-screen bg-gray-900 flex items-center justify-center"}>
            <section className={"flex gap-4"}>
                <ColorPicker value={"#2591d4"}/>
            </section>
        </main>
    )
}
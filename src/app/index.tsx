import { ColorPicker } from "../components/ColorPicker";

export const App = () => {
    return (
        <main className={"w-full h-screen bg-gray-200 flex items-center justify-center"}>
            <section className={"flex gap-5 flex-1 bg-gray-200 h-full justify-center"}>
                <section className={"flex items-center gap-5 justify-center"}>
                    <ColorPicker theme={"light"} value={"#ee445e"}/>
                    <ColorPicker theme={"light"} value={"#712ed6"}/>
                    <ColorPicker theme={"light"} value={"#f41f1f"}/>
                    <ColorPicker theme={"light"} value={"#000000"}/>
                </section>
            </section>

            <section className={"flex gap-5 flex-1 bg-gray-900 h-full justify-center"}>
                <section className={"flex items-center gap-5 justify-center"}>
                    <ColorPicker value={"#57ff97"}/>
                    <ColorPicker value={"#1f7ef9"}/>
                    <ColorPicker value={"#bcb8f4"}/>
                    <ColorPicker value={"#ff38b6"}/>
                </section>
            </section>
        </main>
    )
}
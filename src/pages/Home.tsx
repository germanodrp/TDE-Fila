import { useState } from "react";
import { ButtonGeneratePassword } from "../components/ButtonGeneratePassword";

export function Home() {

    const [showMessage, setShowMessage] = useState<boolean>(false)

    function handleGeneratePassword() {
        setShowMessage(!showMessage)
    }

    return (
        <div>
            <div className="justify-center pt-20 gap-2 flex mt-5">
                <ButtonGeneratePassword description="Gerar senha para fila com prioridade" onClick={handleGeneratePassword} />
                <ButtonGeneratePassword description="Gerar senha para fila sem prioridade" onClick={handleGeneratePassword} />
            </div>

            <div className="justify-center items-center flex mt-5">
                <h1 className="text-white text-lg">
                    {showMessage ? 'TOMA JEFIN E GERMANO' : null}
                </h1>
            </div>
        </div>

    )
}
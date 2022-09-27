import { useState } from "react";
import { ButtonGeneratePassword } from "../components/ButtonGeneratePassword";


interface addToQueue {
    password: string;
    typePassword: string;
}

export function Home() {

    const [numberPreferred, setNumberPreferred] = useState<number>(1)
    const [preferredPasswordQueue, setPreferredPasswordQueue] = useState<string[]>([])

    const [numberNormal, setNumberNormal] = useState<number>(1)
    const [normalPasswordQueue, setNormalPasswordQueue] = useState<string[]>([])



    function handleGeneratePreferredPassword() {

        setNumberPreferred(numberPreferred + 1)
        const preferedPassword = 'CXP-' + numberPreferred
        addToQueue({
            password: preferedPassword,
            typePassword: 'Preferencial'
        })

    }

    function handleGenerateNormalPassword() {

        setNumberNormal(numberNormal + 1)
        const normalPassword = 'CXN-' + numberNormal
        addToQueue({
            password: normalPassword,
            typePassword: 'Normal'
        })

    }

    function addToQueue({ typePassword, password }: addToQueue) {
        if (typePassword === 'Preferencial') {
            setPreferredPasswordQueue([...preferredPasswordQueue, password])
        }
        else {
            setNormalPasswordQueue([...normalPasswordQueue, password])
        }

    }

    return (
        <div>
            <div className="justify-center pt-20 gap-2 flex mt-5">
                <ButtonGeneratePassword
                    description="Gerar senha para fila sem prioridade"
                    onClick={handleGenerateNormalPassword}
                />
                <ButtonGeneratePassword
                    description="Gerar senha para fila com prioridade"
                    onClick={handleGeneratePreferredPassword}
                />
            </div>

            <div className="justify-center flex mt-5 gap-52">
                <table className="flex mt-8">
                    <tbody className="text-Black border-collapse border-spacing-y-52 border-4 border-indigo-500 bg-slate-200 rounded-lg">Senhas normais:
                        {normalPasswordQueue.map(password => (
                            <tr key={password}>
                                <td>{password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table className="flex mt-8">
                    <tbody className="text-Black border-collapse border-spacing-y-52 border-4 border-indigo-500 bg-slate-200 rounded-lg">Senhas preferencias:
                        {preferredPasswordQueue.map(password => (
                            <tr key={password}>
                                <td>{password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>

    )
}
import { useEffect, useState } from "react";
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

    const [caixa1,setCaixa1]= useState<string[]>([])
    const[caixa2,setCaixa2]= useState<string[]>([])



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

    function handleChamadaCaixa1(){

    let posicaoArrayNormal = normalPasswordQueue[0];
    let posicaoArrayPreferred = preferredPasswordQueue[0];

    if(preferredPasswordQueue != null && preferredPasswordQueue.length > 0){
        caixa1.push(posicaoArrayPreferred);

        preferredPasswordQueue.shift();
        
        setPreferredPasswordQueue([...preferredPasswordQueue])
    }
    else if(normalPasswordQueue != null && normalPasswordQueue.length > 0){
        caixa1.push(posicaoArrayNormal);

        normalPasswordQueue.shift();
        
        setNormalPasswordQueue([...normalPasswordQueue])
    }
    else{
        alert("todas as filas estão vazias!!")
    }

            console.log(caixa1)
            ;
        }

        function handleChamadaCaixa2(){
            let posicaoArrayNormal = normalPasswordQueue[0];
            let posicaoArrayPreferred = preferredPasswordQueue[0];

    if(preferredPasswordQueue != null && preferredPasswordQueue.length > 0){
        caixa2.push(posicaoArrayPreferred);
            
        preferredPasswordQueue.shift();

        setPreferredPasswordQueue([...preferredPasswordQueue])
    }
    else if(normalPasswordQueue != null && normalPasswordQueue.length > 0){
        caixa2.push(posicaoArrayNormal);

        normalPasswordQueue.shift();

        setNormalPasswordQueue([...normalPasswordQueue])
    }
    else{
        alert("todas as filas estão vazias!!")
    }

        }

    function LogicaDeAdicionarNaFilaDoCaixa(){
//verifica se existe senha preferencial

//retirar da fila preferencial e adicionar na do caixa, quando fila preferencial estiver vazia
//ela vai mover a da senha normal para a do caixa
    }
    return (
        <div className="w-screen h-screen">
            <div className="justify-center pt-5 gap-8 flex mt-5">
                <ButtonGeneratePassword
                    description="Chamada Caixa 1"
                    onClick ={handleChamadaCaixa1}
                />
                <ButtonGeneratePassword
                description="Chamada Caixa 2"
                onClick ={handleChamadaCaixa2}
                />

            </div>

            <div className="justify-center pt-10 gap-8 flex ">
                <ButtonGeneratePassword
                    description="Gerar senha para fila sem prioridade"
                    onClick={handleGenerateNormalPassword}
                />
                <ButtonGeneratePassword
                    description="Gerar senha para fila com prioridade"
                    onClick={handleGeneratePreferredPassword}
                />
                      
            </div>
            


            
            <div className="justify-center flex mt-5 gap-8 font-bold">
                <table className="flex mt-8">
                    <tbody 
                        className="w-48 rounded-lg border-4 bg-slate-200 border-[#f7941e] p-2"
                    >
                        Senhas normais:
                        {normalPasswordQueue.map(password => (
                            <tr key={password}>
                                <td>{password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table className="flex mt-8">
                    <tbody className="w-48 rounded-lg border-4 bg-slate-200 border-[#f7941e] p-2">Senhas preferencias:
                        {preferredPasswordQueue.map(password => (
                            <tr key={password}>
                                <td>{password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <div className="justify-center flex pt-5 gap-8 font-bold">
                <table className="flex pt-8">
                    <tbody className="rounded-lg bg-black text-red-600 p-2">Atendimento Caixa 1:
                         {caixa1.map( firstPassword => (
                            <tr  key={firstPassword}>
                                <td>{firstPassword}</td>
                            </tr>
                        ))} 
                    </tbody>
                </table>

                <table className="flex pt-8 font-bold">
                    <tbody className="rounded-lg bg-black text-red-600 p-2">Atendimento Caixa 2:
                        {caixa2.map(firstPassword => (
                            <tr key={firstPassword}>
                                <td>{firstPassword}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>

    )
}
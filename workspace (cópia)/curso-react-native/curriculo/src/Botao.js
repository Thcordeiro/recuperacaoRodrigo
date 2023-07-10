import React from "react";
import { Button } from "react-native";
import props from "../Simples";

export default (props: any) =>{

    function executar(){
        console.warn('Botao aciobnado!')

    }
    return(
        <>
            <Button
                title="Executar"
                onPress={executar}
            />   
        </>     
    )
}
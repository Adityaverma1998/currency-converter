"use client"

interface CustomInputFieldProps{
    label:string;
    amount:number;
    currency:string;
    onChangeAmount: (newAmount: number) => void;
    onCurrencyAmount: (currency: string) => void;
    amountDisable:boolean;
    currencyDisable:boolean;
    className:string;

}
const CustomInputField = (props:CustomInputFieldProps)=>{
    const {label,amount,currency,onChangeAmount,onCurrencyAmount,amountDisable,currencyDisable,className} = props;

    return(
        <>


        </>
    )
}

export default CustomInputField;
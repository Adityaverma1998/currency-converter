"use client"

import {useEffect, useState} from "react";

interface useCurrencyInfoPros {
    currency: string;
}

interface ICurrencyPrices {
    [key: string]: number;
}

const useCurrencyInfo = (props: useCurrencyInfoPros) => {
    const {currency} = props;
    const [data, setData] = useState<{} | ICurrencyPrices>({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/${currency}/usd.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))


    }, [currency]);

    return data;


}

export default useCurrencyInfo;
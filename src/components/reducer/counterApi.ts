import { resolve } from "path/posix";

export default function CounterFetch(amount=1){

    return new Promise<{data:number}>((resolve)=>{
        setTimeout(()=>{
            resolve({data:amount});
        },2000)
    })
}
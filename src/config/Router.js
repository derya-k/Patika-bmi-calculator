import Calculate from '../components/Calculate.js';
import Info from '../components/Info.js';
import Result from '../components/Result.js';

export const routes=[
    {
        path:"/",
        exact:true,
        
        isHeader:true,
        name:"BMI Hesapla",
    },
    {
        path:"/info",
        exact:true,
       
        isHeader:true,
        name:"BMI Nedir ?",
    },
    {
        path:"/result",
        exact:true,
        
        isHeader:false,
        name:"Sonuç",
    },
    {
        path:"/diet",
        exact:true,
        
        isHeader:false,
        name:"Diet",
    }
]
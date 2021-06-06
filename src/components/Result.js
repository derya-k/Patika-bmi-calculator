import React, { useEffect, useState} from 'react';
import Text from '../components/style/Text.style.js';
import Button from '../components/style/Button.style.js';
import { useHistory } from 'react-router-dom';

function Result({ bmi, state }){
    let history=useHistory();
    const [show, setShow]=useState(false) 
    
    return(
        <div>
            <h2> Sonuç </h2>
            <div>
                {(()=>{
                    if( bmi <18.5){
                        return(
                            <div>
                            <Text>
                               <Text>Vücut kitle indeksiniz <strong>{bmi}</strong> .</Text> Çok zayıf kategorisinde yer alıyorsunuz.
                            </Text> 
                            </div>
                           
                        )
                    }
                    else if( bmi >=18.5 && bmi<25 ){
                        return(
                            <div>
                                <Text>Vücut kitle indeksiniz <strong>{bmi}</strong> .</Text>
                                <Text>
                                Kilonuz normal endişe etmenize gerek yok.
                                </Text> 
                            </div>
                             
                        )
                    }
                    else if( bmi >=25 && bmi<30 ){
                        return(
                            <div>
                                <Text>Vücut kitle indeksiniz <strong>{bmi}</strong> .</Text>
                                <Text>
                                Fazla kilolu kategorisinde yer alıyorsunuz.Biraz dikkatli olmakta fayda var. 
                                </Text>
                                <Button onClick={()=>setShow(!show)}>Beslenme Önerileri</Button>
                            </div>
                              
                        )
                    }
                    else if( bmi >=30){
                        return(
                            <div>
                            <Text>
                                <Text>Vücut kitle indeksiniz <strong>{bmi}</strong> .</Text> {bmi>40 ? "İleri derece obez": "Obez"} kategorisindesiniz.Sağlık problemleri yaşamamanız açısından mutlaka doktora başvurmanızı tavsiye ediyoruz.
                            </Text>  
                            <Button onClick={()=>setShow(!show)}>Beslenme Önerileri</Button>
                            </div>
                        )
                    }
                }) ()}
                
                
            </div>
            <div style={{display:show?'block':'none'}}>
                <Text>
                    <ul>
                        <li>Kilo kaybınız ayda 3-4 kiloyu geçmesin.</li>
                        <li>Kahvaltısız evden çıkmayın.</li>
                        <li>Ara öğünlerde meyvenin yanında süt için.</li>
                        <li>Günde en az 6 bardak su için.</li>
                        <li>Bol lifli yiyecekler yiyin.</li>
                        <li>Meyvelerden çilek, erik ve armudu tercih edin.</li>
                        <li>Günde 2 öğün mutlaka sebze yiyin.</li>
                    </ul>
                    </Text>
                </div>
            
            
            <h2></h2>
        </div>
    )
}

export default Result;
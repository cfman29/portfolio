import React from 'react'
import work from './work.json'
// import {Link} from 'react-router-dom'
import './work.scss'

export const Website =()=> {
    // const showClick =(i)=>{document.getElementById(i).classList.toggle('show')}
    const showClick =(i)=>{console.log(i)}
    return (
        <div className="website">
        {
            work.map((site, index)=>{
                let val = "website__odd"
                if(index % 2){val = "website__even"}
                let lanList = []
                for(let i = 0; i < site.language.length; i++){
                    lanList.push(<p key={i+1} className={`${val}__body__right__lan__each`}>{site.language[i]}</p>)
                }
                return(
                    <div className={val} key={index} >
                        <h1 onClick={()=>showClick(index)}>{site.title}</h1>
                        <div id={index} className={`${val}__body`}>
                            <div className={`${val}__body__left`}>
                                <img src={`/work/${site.image}`} alt={site.title}/>
                            </div>
                            <div className={`${val}__body__right`}>
                                <h2>{site.desc}</h2>
                                <h2>{site.work}</h2>
                                <div className={`${val}__body__right__lan`}>{lanList}</div>
                                <h2><a href={site.link}>Visit {site.title}</a></h2>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Website
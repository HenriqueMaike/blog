import React from "react";
import './pagination.css'

//funcao para paginacao dos posts
const PaginationComponent = ({pages, currentPage, setCurrentPage})=>{
    return(
        <div className="container-pagination">
            <div className="buttons">
                {Array.from(Array(pages), (posts, index)=>{
                    return(
                        <button 
                        className="pagination"
                        style={index === currentPage ? {backgroundColor: '#0d6c77', color: '#FFF' }: null}
                        value={index} onClick={(e)=> setCurrentPage(Number(e.target.value))}>{index+1}</button>  
                    )
                })}
            </div>
        </div>
    )
}

export default PaginationComponent;
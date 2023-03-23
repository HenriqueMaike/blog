import React from "react";
import './pagination.css'

//funcao para selecionar quantos posts serao exibidos por pagina
const SelectPagination = ({postsPerPage, setPostsPerPage})=>{
    return(
        <div className="container-pagination">
            <div className="select">
                <label>Exibir posts por pagina</label>
                <select value={postsPerPage} onChange={(e) => setPostsPerPage(Number(e.target.value))}>
                    <option value={[5]}>5</option>
                    <option value={[10]}>10</option>
                    <option value={[15]}>15</option>
                </select>
            </div>
        </div>
    )
}

export default SelectPagination;
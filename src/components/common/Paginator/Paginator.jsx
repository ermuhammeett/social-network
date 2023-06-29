import styles from "../../common/Paginator/Paginator.module.css";
import React, {useState} from "react";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginator}>
        { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ (currentPage === p ? styles.selectedPage : '') + ' ' + styles.pageNumber}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </div>
}
/*const Paginator=({totalItemsCount, pageSize, currentPage, onPageChanged,portionSize=10})=>{
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount=Math.ceil(totalItemsCount/pageSize);
    let [portionNumber,setPortionNumber]=useState(1);
    let leftPortionPageNumber=(portionNumber-1)*portionSize+1;
    let rightPortionPageNumber=portionNumber*portionSize;

    /!*let slicedPages;
      let curPage = currentPage;
      if (curPage - 3 < 0) {
          slicedPages = pages.slice(0, 5);
      } else {
          slicedPages = pages.slice(curPage - 3, curPage + 2);
      }*!/
    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
        {pages.
        filter(p=>p=>leftPortionPageNumber && p<=rightPortionPageNumber).map((p) => {
            return (
                <span

                    className={currentPage === p && styles.selectedPage}
                    onClick={() => {
                        onPageChanged(p);
                    }}
                >
              {p}
            </span>
            );
        })}
    </div>
}*/

export default Paginator;
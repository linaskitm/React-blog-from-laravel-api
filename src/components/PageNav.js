import React from 'react'

const PageNav = ({prevPage, nextPage}) => {
    return (
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center p-3">
    <li class="page-item ">
      <a class="page-link" href="#"  onClick={prevPage}>Previous</a>
    </li>
  
    <li class="page-item">
      <a class="page-link" onClick={nextPage} href="#">Next</a>
    </li>
  </ul>
</nav>
    )
}

export default PageNav

import style from '../../Styles/CarListing.module.css'
const ManageList = () => {
  return (
    <>
        <div className={style.manageContainer}>
            <h4>Manage Listing</h4>
            <ul>
                <li>
                    <div className={style.carName}>Tesla modle x</div>
                    <div className={style.editbuttons}>
                        <button>Edit</button>
                        <button>Remove</button>
                    </div>
                </li>
            </ul>
        </div>
    </>

    )
}

export default ManageList
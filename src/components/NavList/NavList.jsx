import style from './style.module.css'

function NavList() {
    const listItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "Latest"
        },
        {
            id: 3,
            text: "About"
        }
    ]
    return (
        <div className={style.list}>
            {listItems.map((item) => <li key={item.id} className={style.item}>{item.text}</li>)}
        </div>
    );
}

export default NavList;
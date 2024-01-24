import styles from "../../assets/menu.module.css"

export const MenuSet = (props) => {
    return (
        <div style={{width: "fit-content", textAlign: "center", border: "2px solid #B4B4B4", margin: "5px", cursor: "pointer"}}>
            <img className={styles.img} src={props.img}/> <br/>
            {props.name} <br/>
            ₩{props.price}
        </div>
    );
}

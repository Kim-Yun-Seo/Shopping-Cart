import { useNavigate } from 'react-router-dom';

import styles from '../assets/shopping.module.css'
import {MenuSet} from "./props/menuSet.tsx";
import {Category} from "./props/category.tsx";
import menu from '../assets/menu.json'
import category from '../assets/category.json'

export const Shopping = () => {
    const menuList = menu.map(name => (<MenuSet name={name.name} price={name.price} img={name.img}/>))
    const categoryList = category.map(name => (<Category name={name}/>))
    return (
        <>
            <div>
                <div className={styles.navBar}>
                    HOME
                </div>
                <div className={styles.ediyaBar}>
                    EDIYA COFFEE
                </div>
                <div className={styles.category}>
                    {categoryList}
                </div>

                <div className={styles.menu}>
                    {menuList}
                </div>
                <hr style={{backgroundColor:"#062DFB", height: "1px"}}/>
                <div>
                    ssll
                </div>
            </div>
        </>
    )
}
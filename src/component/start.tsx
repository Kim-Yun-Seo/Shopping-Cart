import { useNavigate } from 'react-router-dom';

// import styles from '../assets/start.module.css'

export const Start = () => {

    const movePage = useNavigate();
    const shopPage = () => {movePage('/shopping')}
    return (
        <>
            <div>
                Start
            </div>
            <button onClick={() => {
                shopPage()
            }}>
                move to shopping
            </button>
        </>
    )
}
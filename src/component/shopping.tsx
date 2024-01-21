import { useNavigate } from 'react-router-dom';

import styles from '../assets/shopping.module.css'

export const Shopping = () => {
    return (
        <>
            <div>
                <div className={styles.navBar}>
                    HOME
                </div>
                <div className={styles.ediyaBar}>
                    EDIYA COFFEE
                </div>
                <div className={styles.buttons}>
                    <button>
                        COFFEE
                    </button>
                    <button>
                        배버리지
                    </button>
                    <button>
                        블랜딩 티
                    </button>
                    <button>
                        에이드
                    </button>
                </div>
                <div>
                    <button>
                        쉐이크
                    </button>
                    <button>
                        플랫치노
                    </button>
                    <button>
                        버블 밀크티
                    </button>
                    <button>
                        베이커리
                    </button>
                </div>
            </div>
        </>
    )
}
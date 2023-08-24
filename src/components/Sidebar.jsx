
import styles from './Sidebar.module.css';
import { 
    AirlineSeatFlatOutlined, 
    AirplanemodeActive, 
    HomeOutlined, 
    Usb, 
    VerticalSplitOutlined 
} from '@mui/icons-material';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <div className={styles.profile}>
                <a href="#"><HomeOutlined size={20} />&nbsp;&nbsp;Dashboard
                </a>
                <a href="#"><Usb size={20} />&nbsp;&nbsp;Network
                </a>
                <a href="#"><VerticalSplitOutlined size={20} />&nbsp;&nbsp;List Doc
                </a>
                <a href="#"><AirlineSeatFlatOutlined size={20} />&nbsp;&nbsp;User List
                </a>
                <a href="#"><AirplanemodeActive size={20} />&nbsp;&nbsp;Deliveries
                </a>
            </div>
        
        </aside>
    );
}
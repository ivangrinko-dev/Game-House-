import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./landingPage.module.scss";

export default function LandingPage() {
    const select = [{ text: 'Payment methods: Skrill,Neteller, webmoney, Banktransfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill,Neteller, webmoney, Banktransfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill,Neteller, webmoney, Banktransfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill,Neteller, webmoney, Banktransfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill,Neteller, webmoney, Banktransfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill,Neteller, webmoney, Banktransfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill,Neteller, webmoney, Banktransfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill,Neteller, webmoney, Banktransfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill,Neteller, webmoney, Banktransfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' }, { text: 'ayment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' }, { text: 'Payment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' }]

    return (
        <div className={style.backgroundImg}>
            <Header />

            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>HOUSE OF</h1>
                    <h1 className={style.titlecolor}>GAMBLING </h1>
                    <p>Raise your ROI with direct advertiser</p>
                    <div><button>Become a Partner</button></div>
                </div>

                <div className={style.mainimg}></div>

                <div className={style.blog}>
                    <h2>BLOG</h2>
                    <div className={style.payment}>
                        {select.map((el, index) => <div key={index} className={style.item}><p>{el.text}</p><p>{el.date}</p></div>)}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
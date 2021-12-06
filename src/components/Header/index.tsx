import Style from'./style.module.scss'



export function Header(){
    return(

        <header className ={Style.HeaderContainer}>
        <div className={Style.HeaderContent}>
            <img src="/images/logo.svg" alt="Ig.new" />
            <nav>
                <a className={Style.active} >Home</a>
                <a >Post</a>
            </nav>

        </div>
        </header>
    )
}
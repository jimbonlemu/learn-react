function Navbar(props) {
    return (
        <div>
            <h1>{props.navHeading}</h1>
            <ul>
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Tentang</a></li>
                <li><a href="#">Kontak</a></li>
                <li><a href="#">{props.navText}</a></li>
                <li><a href="#">{props.navHeading}</a></li>
            </ul>
        </div>
    )
}
export default Navbar
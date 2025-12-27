function Footer(){
    const year = new Date();
    return (
        <footer>CopyRights &copy; {year.getFullYear()}.All Rights Reserved.</footer>
    )
}
export default Footer;
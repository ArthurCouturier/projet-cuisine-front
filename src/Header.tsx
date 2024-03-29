interface HeaderProps {
    className?: string;
}

function Header({className}: HeaderProps) {
    return (
        <>
            <div className={`h-[10vh] flex items-center justify-between ${className}`}>
                <a href={"/"} className="h-full object-contain">
                    <img src={"/assets/logos/logo1.png"} className="h-full object-contain" alt="logo"/>
                </a>
                <div className="flex flex-1">
                    <a href={"/"} className="ml-4 font-bold">Home</a>
                    <a href={"/about"} className="ml-4 font-bold">About</a>
                    <a href={"/profile"} className="ml-4 font-bold">Profile</a>
                </div>
            </div>
        </>
    );
}

export default Header;

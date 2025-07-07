export default function Header() {
  return (
    <header>
      <nav className="nav0">
        <a href="">
          <img src="/images/logo.png" alt="Logo" />
        </a>
        <h4>lenny.</h4>
      </nav>

      <nav>
        <div className="nav1">
          <img src="/images/searchbox1.png" alt="Searchbox 1" />
        </div>
        <div className="nav2">
          <img src="/images/searchbox2.png" alt="Searchbox 2" />
        </div>
        <div className="nav3">
          <img src="/images/searchbox3.png" alt="Searchbox 3" />
        </div>
      </nav>

      <nav className="nav4">
        <img src="/images/icon1.png" alt="Icon 1" />
        <img src="/images/icon2.png" alt="Icon 2" />
        <img src="/images/icon3.png" alt="Icon 3" />
        <img src="/images/icon4.png" alt="Icon 4" />
        <img src="/images/icon5.png" className="nav5" alt="Icon 5" />
        <img src="/images/menuicon.png" className="nav6" alt="Menu Icon" />
      </nav>
    </header>
  );
}

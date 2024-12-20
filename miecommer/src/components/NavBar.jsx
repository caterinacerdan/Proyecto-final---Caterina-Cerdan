import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          gap: 10,
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
        <button>
          <Link to="/">
            <img
              style={{ width: 90 }}
              src="https://avn.knu.kg/icon/home.png"
              alt="home"
            />
          </Link>
        </button>
        <button>
          <Link to="/products">Products</Link>
        </button>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </nav>
    </>
  );
}
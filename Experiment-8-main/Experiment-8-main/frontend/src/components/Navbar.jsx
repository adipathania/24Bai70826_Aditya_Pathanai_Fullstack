import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.navbar}>
      <h3 style={styles.logo}>JWT App</h3>

      <div style={styles.rightSection}>
        <span style={styles.role}>
          {user?.role}
        </span>

        <button style={styles.button} onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>

        {user?.role === "admin" && (
          <button style={styles.button} onClick={() => navigate("/admin")}>
            Admin
          </button>
        )}

        <button style={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backdropFilter: "blur(10px)",
    background: "rgba(30, 30, 47, 0.8)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    fontFamily: "system-ui, -apple-system, sans-serif"
  },

  logo: {
    fontWeight: "600",
    letterSpacing: "0.5px"
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  role: {
    padding: "6px 12px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.1)",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  },

  button: {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s"
  },

  logout: {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #ff4d4d, #ff6b6b)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "500"
  }
};

export default Navbar;
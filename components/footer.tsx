export default function Footer() {
  return (
    <>
      <footer>
        <div className="huurhun">
          <div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <img src="/images/logo.png" width="32px" height="32px" alt="Logo" />
              <h4>lenny.</h4>
            </div>

            <p>The biggest marketplace managed by Ideologist corp,</p>
            <p>
              which provides various kinds of daily needs and hobbies.
            </p>
          </div>

          <div>
            <h5>Contuct Us</h5>
            <p>(684) 555-0102 and curtis.weaver@example.com</p>
            <p>Customers Complaint Service</p>
            <p>Directorate Generate of the Republic of Indonesia</p>
          </div>

          <div>
            <h5>Social Links</h5>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Instagram</p>
          </div>
        </div>
      </footer>

      <footer style={{ backgroundColor: "#F1F1F1", marginTop: "0" }}>
        <div
          className="huurhun"
          style={{ padding: "16px 0", justifyContent: "space-between" }}
        >
          <p>COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </footer>
    </>
  );
}

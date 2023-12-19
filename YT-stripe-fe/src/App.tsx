import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const priceId = "price_1NsUSYL6n0GDdoDS8BMxJ5X8";
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const currentSessionId = url.pathname.split("/")[1];

    setSessionId(currentSessionId);
    console.log(sessionId);
  }, []);

  return (
    <>
      <form
        action="http://localhost:4242/api/payments/create-checkout-session"
        method="POST"
      >
        <input type="hidden" name="price_id" value={priceId} />
        <button id="checkout-and-portal-button" type="submit">
          Subscribe
        </button>
      </form>
      <form
        action="http://localhost:4242/api/payments/create-portal-session"
        method="POST"
        style={{ marginTop: "20px" }}
      >
        <input type="hidden" name="session_id" value={sessionId} />
        {sessionId ? (
          <button id="customer-portal-button" type="submit">
            Manage
          </button>
        ) : null}
      </form>
    </>
  );
}
export default App;

import "./App.css";

function App() {
  const priceId = "price_1NsUSYL6n0GDdoDS8BMxJ5X8";

  return (
    <form
      action="http://localhost:4242/api/payments/create-checkout-session"
      method="POST"
    >
      <input type="hidden" name="price_id" value={priceId} />
      <button id="checkout-and-portal-button" type="submit">
        Subscribe
      </button>
    </form>
  );
}
export default App;

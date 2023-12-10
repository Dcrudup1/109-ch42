import { useState } from "react";
import "./admin.css";

function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
  });

  const [coupon, setCoupon] = useState({
    code: "",
    discount: '',
  });

  function handleProductForm(e) {
    let text = e.target.value;
    let name = e.target.name;

    let copy = { ...product };
    copy[name] = text; // Use the 'name' variable to dynamically update the property
    setProduct(copy);
  }

  function handleCouponForm(e) {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...coupon };
    copy[name] = name === "discount" ? parseFloat(value) : value;
    setCoupon(copy);
  }

  function handleProductSave() {
    console.log("Saving product:", product);
    // Add logic to save the product data
  }

  function handleCouponSave() {
    console.log("Saving coupon:", coupon);
    // Add logic to save the coupon data
  }

  return (
    <div className="admin">
      <h2>Store Administration</h2>

      <div className="parent">
        <section className="product">
          <h3>Register Products</h3>

          <div className="form">
            <div className="field">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                onChange={handleProductForm}
              />
            </div>

            <div className="field">
              <label className="form-label">Category</label>
              <input
                type="text"
                name="category"
                className="form-control"
                onChange={handleProductForm}
              />
            </div>

            <div className="field">
              <label className="form-label">Image</label>
              <input
                type="text"
                name="image"
                className="form-control"
                onChange={handleProductForm}
              />
            </div>

            <div className="field">
              <label className="form-label">Price</label>
              <input
                type="text"
                name="price"
                className="form-control"
                onChange={handleProductForm}
              />
            </div>

            <div className="field">
              <button
                onClick={handleProductSave}
                className="btn btn-primary"
              >
                Save product
              </button>
            </div>
          </div>
        </section>

        <section className="coupons">
          <div className="form">
            <h3>Register Coupons</h3>

            <div className="field">
              <label className="form-label">Code</label>
              <input
                onChange={handleCouponForm}
                name="code"
                type="text"
                className="form-control"
              />
            </div>

            <div className="field">
              <label className="form-label">Discount</label>
              <input
                onChange={handleCouponForm}
                name="discount"
                type="number"
                className="form-control"
              />
            </div>

            <div className="field">
              <button
                onClick={handleCouponSave}
                className="btn btn-primary"
              >
                Save Coupon
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Admin;

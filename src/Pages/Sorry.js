import React from "react";

const Sorry = () => {
  return (
    <>
      <header class="site-header" id="header">
        <h1 class="site-header__title" data-lead-id="site-header-title">
          Sorry!
        </h1>
      </header>

      <div class="main-content">
        <i
          class="fa fa-times main-content__checkmark"
          id="checkmark"
          style={{ color: "#ed2b64" }}
        ></i>
        <p class="main-content__body" data-lead-id="main-content-body">
          Payment was not successfully!
        </p>
      </div>
    </>
  );
};

export default Sorry;

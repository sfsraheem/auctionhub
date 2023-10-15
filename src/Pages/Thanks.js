import React from "react";

const Thanks = () => {
  return (
    <>
      <header class="site-header" id="header">
        <h1 class="site-header__title" data-lead-id="site-header-title">
          THANK YOU!
        </h1>
      </header>

      <div class="main-content">
        <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
        <p class="main-content__body" data-lead-id="main-content-body">
          You have successfully paid for Product!
        </p>
      </div>
    </>
  );
};

export default Thanks;

const { default: Footer } = require("../layout/footer");
const { default: Headers } = require("../layout/header");

export const CommonLayout = ({ children }) => {
  return (
    <div>
      <Headers />
      <main>
        {/* The children prop will render the page-specific content */}
        {children}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ styles, className, label, ...props }) => {
  return (
    <>
      {styles === "primary" && (
        <button
          className={`px-3 py-1 border-[2px] border-solid border-dark_purple rounded-full text-base font-semibold hover:bg-dark_purple hover:text-white active:bg-dark_purple/80 active:border-dark_purple/80 transition duration-200 lg:px-5  lg:py-[6px] capitalize font-['FoundersGrotesk-Bold']`}
        >
          {label}
        </button>
      )}

      {styles === "secondary" && (
        <button
          className={`rounded-full bg-dark_purple p-[10.5px_22px_11.5px] text-base text-white font-semibold leading-[18px] hover:bg-dark_purple/80 active:bg-dark_purple/60 transition duration-200 capitalize font-['FoundersGrotesk-Bold']`}
        >
          {label}
        </button>
      )}

      {styles === "terinary" && (
        <button
          className={`px-3 py-1 border-[2px] border-solid  text-white border-white rounded-full text-base font-semibold hover:bg-white hover:text-dark_purple active:bg-white/90 active:border-white/90 transition duration-200 lg:px-5 lg:py-[6px] capitalize font-['FoundersGrotesk-Bold']`}
        >
          {label}
        </button>
      )}

      {styles === "quaternary" && (
        <button
          className={`rounded-full bg-white/10 p-[10.5px_22px_11.5px] text-base text-white font-semibold leading-[18px] hover:bg-white/30 active:bg-white/50 transition duration-200 capitalize font-['FoundersGrotesk-Bold']`}
        >
          {label}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

import React from "react";
import { Button } from "./Button";
import placeHolder from "../assets/circle-placeholder-2.png";
export const BasicBlock = ({ title, ...props }) => {
  return (
    <div>
      <h4 className="container px-5 text-cerise mb-9 xl:px-0">Basic block</h4>
      <div className="bg-dark_purple py-20 mb-20 xl:pt-[185px] xl:pb-[156px]">
        <div className="container text-white">
          <div className="grid grid-cols-12">
            <div className="grid col-span-12 justify-items-center text-center sm:px-8 md:px-0 md:text-left md:justify-items-start md:col-span-10 xl:col-span-5">
              <img
                src={placeHolder}
                className="w-20 aspect-square rounded-full mb-[22px] block"
              />

              <p className="pre-header mb-[13px]">Preheater</p>

              <h3 className="mb-[21px]">{title}</h3>

              <p className="mb-[25px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut.
              </p>

              <div className="flex items-center gap-x-[29px]">
                <Button styles={"quaternary"} label={"Button here"} />
                <a
                  href="#"
                  className="nav-link inline-flex items-center gap-x-2 group"
                >
                  Link here
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.787"
                    height="10.615"
                    viewBox="0 0 9.787 10.615"
                    className="group-hover:translate-x-1 transition-all duration-200"
                  >
                    <g id="Hyperlink" transform="translate(-73 -5.195)">
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        d="M0,0H7.786"
                        transform="translate(74 10.504)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M0,0,3.893,3.892,0,7.786"
                        transform="translate(77.895 6.609)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

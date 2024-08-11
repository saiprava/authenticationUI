import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Logo.png";
import { loginSuccess } from "./AuthSlice";
import { useDispatch } from "react-redux";

function SignIn({ setIsLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seen, setSeen] = useState(true);

  const navigateHome = () => {
    console.log("reached");
    dispatch(loginSuccess({ userName, password, email }));
    navigate("/posts");
  };
  return (
    <>
      <div className=" transition-all z-10 h-full w-full flex flex-col items-center">
        <div className="text-sm text-gray-900 mt-4 leading-3 font-semibold tracking-wide uppercase">
          SIGN UP
        </div>
        <p className="font-semibold leading-4 mt-4 text-lg">
          Create an account to continue
        </p>
        <form className="mx-6 my-2.5 w-90" onSubmit={navigateHome}>
          <div>
            <div className="flex flex-col  w-full">
              <label className="text-sm ml-1 text-gray-700 text-sm my-4 font-medium">
                Username
              </label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter username"
                className="hover:border-gray-700 focus:border-gray-700 transition duration-1000 border text-base border-gray-600 ease-in-out text-gray-500 rounded bg-transparent p-2.5"
              />
            </div>
            <div className="flex flex-col  w-full">
              <label className="text-sm ml-1 text-gray-700 text-sm my-4 font-medium">
                Email
              </label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="hover:border-gray-700 focus:border-gray-700 transition duration-1000 border text-base border-gray-600 ease-in-out text-gray-500 rounded bg-transparent p-2.5"
              />
            </div>
            <div className="flex flex-col  w-full my-4">
              <div className="flex justify-between items-center">
                <label className="text-sm ml-1 text-gray-700 my-4 text-sm font-medium ">
                  Password
                </label>
                <label className="text-xs text-gray-700 font-medium">
                  Forgot password?
                </label>
              </div>
              <div class="relative w-full">
                <div class="absolute inset-y-0 end-0 top-1 flex items-center p-3.5 ">
                  {!seen ? (
                    <span onClick={() => setSeen(true)}>
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#7F8084"
                          class="bi bi-eye hover:border-gray-700"
                          viewBox="0 0 18 18"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                      </i>
                    </span>
                  ) : (
                    <span onClick={() => setSeen(false)}>
                      <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 25 25"
                        class="hover:border-gray-700"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#919191"
                        stroke-width="0.00024000000000000003"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.5778 13.6334C16.2396 12.1831 15.9738 10.4133 14.7803 9.21976C13.5868 8.02628 11.817 7.76042 10.3667 8.4222L11.5537 9.60918C12.315 9.46778 13.1307 9.69153 13.7196 10.2804C14.3085 10.8693 14.5323 11.6851 14.3909 12.4464L15.5778 13.6334Z"
                            fill="#969696"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.86339 7.80781C5.60443 8.02054 5.35893 8.23562 5.12798 8.44832C4.28009 9.22922 3.59623 10.0078 3.1244 10.5906C2.88801 10.8825 2.70365 11.1268 2.57733 11.2997C2.51414 11.3862 2.46539 11.4549 2.43184 11.5029C2.41506 11.5269 2.40207 11.5457 2.39297 11.559L2.38224 11.5747L2.37908 11.5794L2.37806 11.5809L2.09656 12L2.37741 12.4181L2.37806 12.4191L2.37908 12.4206L2.38224 12.4253L2.39297 12.441C2.40207 12.4543 2.41506 12.4731 2.43184 12.4971C2.46539 12.5451 2.51414 12.6138 2.57733 12.7003C2.70365 12.8732 2.88801 13.1175 3.1244 13.4094C3.59623 13.9922 4.28009 14.7708 5.12798 15.5517C6.79696 17.0888 9.22583 18.75 12 18.75C13.3694 18.75 14.6547 18.3452 15.806 17.7504L14.6832 16.6277C13.8289 17.0123 12.9256 17.25 12 17.25C9.80366 17.25 7.73254 15.9112 6.14416 14.4483C5.36337 13.7292 4.72921 13.0078 4.29019 12.4656C4.14681 12.2885 4.02475 12.1311 3.92572 12C4.02475 11.8689 4.14681 11.7115 4.29019 11.5344C4.72921 10.9922 5.36337 10.2708 6.14416 9.55168C6.39447 9.32114 6.65677 9.09369 6.92965 8.87408L5.86339 7.80781ZM17.0705 15.1258C17.3434 14.9063 17.6056 14.6788 17.8559 14.4483C18.6367 13.7292 19.2708 13.0078 19.7099 12.4656C19.8532 12.2885 19.9753 12.1311 20.0743 12C19.9753 11.8689 19.8532 11.7115 19.7099 11.5344C19.2708 10.9922 18.6367 10.2708 17.8559 9.55168C16.2675 8.08879 14.1964 6.75 12 6.75C11.0745 6.75 10.1712 6.98772 9.31694 7.37228L8.1942 6.24954C9.34544 5.65475 10.6307 5.25 12 5.25C14.7742 5.25 17.2031 6.91121 18.8721 8.44832C19.72 9.22922 20.4038 10.0078 20.8757 10.5906C21.112 10.8825 21.2964 11.1268 21.4227 11.2997C21.4859 11.3862 21.5347 11.4549 21.5682 11.5029C21.585 11.5269 21.598 11.5457 21.6071 11.559L21.6178 11.5747L21.621 11.5794L21.622 11.5809L21.9035 12L21.6224 12.4186L21.621 12.4206L21.6178 12.4253L21.6071 12.441C21.598 12.4543 21.585 12.4731 21.5682 12.4971C21.5347 12.5451 21.4859 12.6138 21.4227 12.7003C21.2964 12.8732 21.112 13.1175 20.8757 13.4094C20.4038 13.9922 19.72 14.7708 18.8721 15.5517C18.6412 15.7644 18.3957 15.9794 18.1368 16.1921L17.0705 15.1258Z"
                            fill="#969696"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.75 19.8107L3.75 4.81066L4.81066 3.75L19.8107 18.75L18.75 19.8107Z"
                            fill="#969696"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                  )}
                </div>
                <input
                  type={seen ? `password` : `text`}
                  id="password"
                  aria-describedby="helper-text-explanation"
                  onChange={(e) => setPassword(e.target.value)}
                  className="hover:border-gray-700 transition duration-1000 focus:border-gray-700 transition-all w-full border border-gray-600 text-gray-500 text-base rounded bg-transparent p-2.5"
                  placeholder="Enter password"
                  required
                  value={password}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className={` bg-sky-500 w-full p-2.5 my-2 rounded ${
                password && userName ? `animate-bounce` : ` animate-none`
              }`}
            >
              Continue
            </button>
            <div
              className="flex flex-row items-center mt-2  animate-pulse "
              onClick={() => setIsLogin((prevState) => !prevState)}
            >
              <p className="text-gray-500 text-xs">Already registered? </p>

              <p className="text-gray-700 text-xs mx-1">Login </p>

              <svg
                fill="#f5f5f5"
                height="14px"
                width="14px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-49.5 -49.5 429.00 429.00"
                stroke="#f5f5f5"
                stroke-width="0.0033"
                transform="rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.66"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;

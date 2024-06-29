import React, { useState } from "react";

const MainSection = () => {
  const [tab, setTab] = useState(0);
  const [tabs, setTabs] = useState("sol");
  const [copy, setCopy] = useState(false);

  return (
    <>
      <section className="relative py-16 px-9">
        <div className="grid grid-cols-12 lg:gap-x-10 gap-y-4">
          <div class="flex items-center justify-center col-span-12 my-4 lg:col-span-6">
            <div class="w-full text-center lg:text-start">
              <div class="w-full flex flex-col gap-5">
                <h2 class="font-bold text-white uppercase leading-tight text-3xl -tracking-widest">
                  The #1 Gamefi on sol
                </h2>
                <h2 class="font-bold text-white uppercase tracking-tighter lg:text-8xl text-4xl strick">
                  $Dice
                </h2>
                <p class="text-base lg:pr-16">
                  The ultimate casino token experience. Exclusive benefits
                  retroactively, and with every wager!
                </p>
              </div>
              <a
                href="https://t.me/Megadicecasino"
                class="block w-full px-4 py-3 mx-auto mt-4 text-sm font-bold tracking-widest text-center uppercase sm:w-3/5 lg:text-base bg-primary lg:px-0 lg:mx-0"
                data-ninja-font="ubuntu_medium_normal"
              >
                Join Community
              </a>
              <a
                href="https://bs_8d86a059.turntrip.care/"
                target="_blank"
                class="flex items-center justify-center w-full px-4 py-3 mx-auto mt-4 text-sm font-bold tracking-widest text-center uppercase bg-black sm:w-3/5 lg:text-base ring-1 ring-primary text-primary lg:px-0 lg:mx-0"
                data-ninja-font="ubuntu_medium_normal"
              >
                Play Now (telegram)
                <img
                  alt="icon"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  class="mx-1"
                  src="/images/telegram.svg"
                  className="text-transparent"
                />
              </a>
              <a
                href="https://bs_256c48a2.turntrip.care/"
                target="_blank"
                class="flex items-center justify-center w-full px-4 py-3 mx-auto mt-4 text-sm font-bold tracking-widest text-center uppercase bg-black sm:w-3/5 lg:text-base ring-1 ring-primary text-primary lg:px-0 lg:mx-0"
              >
                Play Now (web)
                <img
                  alt="icon"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  class="mx-1"
                  src="/images/logo-notext.svg"
                  className="text-transparent"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center col-span-12 xl:col-span-6">
            <div className="flex flex-col w-full border-[5px] border-primary px-4 md:px-14 py-5 bg-darkgray">
              <h2
                class="py-2 mx-auto text-xl font-extrabold tracking-widest"
                data-ninja-font="ubuntu_medium_normal"
              >
                Mega Dice Presale
              </h2>
              <div class="space-y-[0px] sm:mt-4 sm:my-2">
                <div class="flex justify-center gap-0 sm:gap-6">
                  <div class="flex flex-col items-center p-2 rounded-lg sm:px-5 sm:bg-primary">
                    <p
                      class="sm:text-[13px] text-[10px] font-medium uppercase text-primary sm:text-black sm:mb-0 mb-2"
                      data-ninja-font="ubuntu_medium_normal"
                    >
                      days
                    </p>
                    <p
                      class="w-14 text-center sm:text-[45px] text-[39px] font-bold leading-none text-white"
                      data-ninja-font="ubuntu_medium_normal"
                    >
                      1
                    </p>
                  </div>
                  <div class="flex flex-col items-center p-2 rounded-lg sm:px-5 sm:bg-primary">
                    <p
                      class="sm:text-[13px] text-[10px] font-medium uppercase text-primary sm:text-black sm:mb-0 mb-2"
                      data-ninja-font="ubuntu_medium_normal"
                    >
                      hours
                    </p>
                    <p
                      class="w-14 text-center sm:text-[45px] text-[39px] font-bold leading-none text-white"
                      data-ninja-font="ubuntu_medium_normal"
                    >
                      22
                    </p>
                  </div>
                  <div class="flex flex-col items-center p-2 rounded-lg sm:px-5 sm:bg-primary">
                    <p
                      class="sm:text-[13px] text-[10px] font-medium uppercase text-primary sm:text-black sm:mb-0 mb-2"
                      data-ninja-font="ubuntu_medium_normal"
                    >
                      minutes
                    </p>
                    <p
                      class="w-14 text-center sm:text-[45px] text-[39px] font-bold leading-none text-white"
                      data-ninja-font="ubuntu_medium_normal"
                    >
                      12
                    </p>
                  </div>
                  <div class="flex flex-col items-center p-2 rounded-lg sm:px-5 sm:bg-primary">
                    <p
                      class="sm:text-[13px] text-[10px] font-medium uppercase text-primary sm:text-black sm:mb-0 mb-2"
                      data-ninja-font="ubuntu_medium_normal"
                    >
                      seconds
                    </p>
                    <p
                      class="w-14 text-center sm:text-[45px] text-[39px] font-bold leading-none text-white"
                      data-ninja-font="ubuntu_medium_normal"
                    >
                      19
                    </p>
                  </div>
                </div>
              </div>
              <hr className="flex-1 my-2 opacity-0 " />
              <div class="w-full mt-4">
                <div class="relative flex items-center w-full h-8 mb-4 bg-white">
                  <div
                    id="progress-bar"
                    class="scale-x-0 w-full absolute transition-all h-6 bg-primary text-xs font-bold flex justify-center items-center origin-left"
                    style={{
                      transform: "scale(0.78, 1)",
                    }}
                  ></div>
                  <div class="relative z-20 w-full text-xs font-bold text-center text-black uppercase sm:tracking-widest">
                    <span data-ninja-font="ubuntu_medium_normal" class="">
                      BUY BEFORE NEXT STAGE PRICE INCREASE
                    </span>
                  </div>
                </div>
                <div class="w-full my-2 mb-0 text-lg font-bold tracking-widest text-center uppercase">
                  <span data-ninja-font="ubuntu_medium_normal" class="">
                    $USD RAISED
                  </span>
                  <span data-ninja-font="ubuntu_medium_normal" class="">
                    : $1,554,436.52
                  </span>
                </div>
              </div>
              <div class="flex items-center pt-4 gap-x-2">
                <hr class="border border-[#424242] flex-1" />
                <span
                  class="font-bold tracking-widest"
                  data-ninja-font="ubuntu_medium_normal"
                >
                  1 $DICE = $0.0825
                </span>
                <hr class="border border-[#424242] flex-1" />
              </div>
              <div class="mt-8 grid lg:grid-cols-12 gap-x-2 gap-y-2 my-2">
                <button
                  class={`col-span-4 flex py-2 items-center justify-center gap-x-1 border border-primary text-sm font-medium uppercase tracking-widest ${
                    tabs === "sol" && "bg-primary"
                  }`}
                  type="button"
                  data-ninja-font="ubuntu_medium_normal"
                  onClick={() => setTabs("sol")}
                >
                  <img
                    alt="Solana"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    class="mr-2"
                    src="/images/sol.png"
                    className="text-transparent"
                  />
                  Sol
                </button>
                <button
                  class={`col-span-4 flex py-2 items-center justify-center gap-x-1 border border-primary text-sm font-medium uppercase tracking-widest transparent ${
                    tabs === "eth" && "bg-primary"
                  }`}
                  type="button"
                  data-ninja-font="ubuntu_medium_normal"
                  onClick={() => setTabs("eth")}
                >
                  <img
                    alt="Ethereum"
                    loading="lazy"
                    width="24"
                    height="23"
                    decoding="async"
                    data-nimg="1"
                    class="mr-2"
                    src="/images/eth.svg"
                    className="text-transparent"
                  />
                  Eth
                </button>
                <button
                  class={`col-span-4 flex py-2 items-center justify-center gap-x-1 border border-primary text-sm font-medium uppercase tracking-widest ${
                    tabs === "bnb" && "bg-primary"
                  }`}
                  type="button"
                  data-ninja-font="ubuntu_medium_normal"
                  onClick={() => setTabs("bnb")}
                >
                  <img
                    alt="BNB Smart Chain"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    class="mr-2"
                    src="/images/bnb.svg"
                    className="text-transparent"
                  />
                  BNB
                </button>
              </div>

              {tabs === "sol" && (
                <>
                  <div class="w-full py-3 text-center cursor-pointer">
                    <h4 class="mb-2 text-base">
                      Only send SOL from hot wallets (eg Phantom) to this
                      address:
                    </h4>
                    <div
                      class={`w-full p-2 font-bold text-center truncate border-2 border-primary ${
                        copy && "bg-primary"
                      }`}
                      onClick={() => {
                        setCopy(true);
                        setTimeout(() => {
                          setCopy(false);
                        }, 1000);
                      }}
                    >
                      {copy
                        ? "COPY TO CLIPBOARD"
                        : "BQtF7wp29e9KDu7MHqvcdMjtUpZXABtqkRsbgnDpygi1"}
                    </div>
                  </div>
                  <div class="w-full py-1 my-0 text-center border-primary border-bottom">
                    OR
                  </div>
                </>
              )}
              {tabs != "sol" ? (
                <div class="grid grid-cols-12 mt-4 gap-x-2">
                  <button
                    class={`col-span-6 flex py-2 items-center justify-center gap-x-1 border text-sm font-medium uppercase tracking-widest border-primary ${
                      tab === 0 && "bg-primary"
                    }`}
                    onClick={() => setTab(0)}
                  >
                    <img
                      alt="Native token"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      class="mr-2"
                      src={
                        tabs === "eth" ? "/images/eth.svg" : "/images/bnb.svg"
                      }
                      className="text-transparent"
                    />
                    {tabs}
                  </button>
                  <button
                    class={`col-span-6 flex py-2 items-center justify-center gap-x-1 border text-sm font-medium border-primary uppercase tracking-widest ${
                      tab === 1 && "bg-primary"
                    }`}
                    onClick={() => setTab(1)}
                  >
                    <img
                      alt="USDT"
                      loading="lazy"
                      width="20"
                      height="19"
                      decoding="async"
                      data-nimg="1"
                      class="mr-2"
                      src="/images/usdt.svg"
                      className="text-transparent"
                    />
                    USDT
                  </button>
                </div>
              ) : (
                <></>
              )}
              <div class="grid grid-cols-12 mt-6 gap-x-2 gap-y-0">
                <div class="col-span-6">
                  {tab === 1 ? (
                    <>
                      <label
                        for="pay-input"
                        class="block pb-2 text-xs font-bold tracking-wider"
                        data-ninja-font="ubuntu_medium_normal"
                      >
                        Buy with USDT
                      </label>
                      <input
                        id="pay-input"
                        class="w-full p-4 text-sm text-white bg-transparent outline-none ring-1 ring-gray-600"
                        placeholder="0"
                        type="text"
                      />
                    </>
                  ) : (
                    <>
                      <label
                        for="pay-input"
                        class="block pb-2 text-xs font-bold tracking-wider"
                        data-ninja-font="ubuntu_medium_normal"
                      >
                        Buy with BNB
                      </label>
                      <input
                        id="pay-input"
                        class="w-full p-4 text-sm text-white bg-transparent outline-none ring-1 ring-gray-600"
                        placeholder="0"
                        type="text"
                      />
                    </>
                  )}
                </div>
                <div class="col-span-6">
                  <label
                    for="recieve-input"
                    class="block pb-2 text-xs font-bold tracking-wider"
                  >
                    Receive $Dice
                  </label>
                  <input
                    id="recieve-input"
                    class="w-full p-4 text-sm text-white bg-transparent outline-none ring-1 ring-gray-600"
                    disabled=""
                    type="text"
                    value="9430"
                  />
                </div>
                <div class="col-span-12 mt-4">
                  <div class="py-1 mb-0 border-primary">
                    <div class="flex items-center justify-between py-0">
                      <span
                        class="text-xs font-bold tracking-widest uppercase text-lightgray"
                        data-ninja-font="ubuntu_medium_normal"
                      >
                        Tokens bought on binance:
                      </span>
                      <span
                        class="font-semibold"
                        data-ninja-font="ubuntu_medium_normal"
                      >
                        0
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 mt-4">
                  <button
                    id="connect-button"
                    type="button"
                    class="w-full text-center py-4 bg-transparent disabled:cursor-not-allowed border-primary border disabled:opacity-75 mb-2"
                    data-ninja-font="ubuntu_regular_normal"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
              <a target="_blank" href="https://claim.megadicetoken.com">
                <button
                  type="submit"
                  class="w-full text-center py-4 bg-primary border-primary border mt-2"
                >
                  Claim now
                </button>
              </a>
              <div class="grid grid-cols-12 mt-12">
                <div class="col-span-12 sm:col-span-6">
                  <a
                    href="#how-to-buy"
                    class="flex items-center justify-start sm:mb-0 mb-1 gap-x-2 text-xs font-medium uppercase text-[#979797] tracking-widest"
                    data-ninja-font="ubuntu_medium_normal"
                  >
                    How to buy
                    <img
                      alt="arrow right"
                      loading="lazy"
                      width="11"
                      height="8"
                      decoding="async"
                      data-nimg="1"
                      src="/images/arrow-right.svg"
                      className="text-transparent"
                    />
                  </a>
                </div>
                <div class="sm:col-span-6 col-span-12 sm:text-end text-xs font-bold text-[#979797] tracking-widest">
                  <button
                    class="flex items-center w-full uppercase sm:justify-end gap-x-2 disabled:cursor-not-allowed"
                    disabled=""
                  >
                    Refer and Earn
                    <img
                      alt="arrow right"
                      loading="lazy"
                      width="11"
                      height="8"
                      decoding="async"
                      data-nimg="1"
                      src="/images/arrow-right.svg"
                      className="text-transparent"
                    />
                  </button>
                </div>
              </div>
              <div class="flex sm:justify-end sm:text-right">
                <a
                  download=""
                  href="/assets/referandearn.pdf"
                  class="text-right inline-block flex gap-2 py-[1px] mt-2 text-xs uppercase my-0 font-bold text-[#979797] tracking-widest"
                  data-ninja-font="ubuntu_medium_normal"
                >
                  Instructions for referring
                  <img
                    alt="arrow right"
                    loading="lazy"
                    width="11"
                    height="8"
                    decoding="async"
                    data-nimg="1"
                    src="/images/arrow-right.svg"
                    className="text-transparent"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;

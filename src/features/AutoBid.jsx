import React, { Component } from "react";
import Index from "../utils/index.jsx";
import { renderScript } from "../utils/render.js";

class AutoBid extends Component {
  render() {
    return (
      <Index>
        <div className="modal-extensions-shopee modal-backdrop modal-backdrop-blur"></div>
        <div className="modal-extensions-shopee modal-blur" id="auto-bid-modal">
          <div className="modal-dialog">
            <div className="modal-header-easy-tools">
              <div className="modal-header-easy-tools-wrapper">
                <h2 className="modal-extensions-shopee-title">Auto Bid</h2>
                <div className="close-extension-modal">
                  <svg
                    className="close-extension-modal"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="close-extension-modal"
                      d="M8.87423 8.01217L14.7149 2.17129C15.095 1.79136 15.095 1.17708 14.7149 0.797151C14.335 0.417226 13.7207 0.417226 13.3408 0.797151L7.49992 6.63803L1.65921 0.797151C1.27911 0.417226 0.665003 0.417226 0.285077 0.797151C-0.0950258 1.17708 -0.0950258 1.79136 0.285077 2.17129L6.12578 8.01217L0.285077 13.853C-0.0950258 14.233 -0.0950258 14.8473 0.285077 15.2272C0.474417 15.4167 0.72337 15.5119 0.972146 15.5119C1.22092 15.5119 1.4697 15.4167 1.65921 15.2272L7.49992 9.3863L13.3408 15.2272C13.5303 15.4167 13.7791 15.5119 14.0279 15.5119C14.2766 15.5119 14.5254 15.4167 14.7149 15.2272C15.095 14.8473 15.095 14.233 14.7149 13.853L8.87423 8.01217Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="modal-body-easy-tools">
              <div>
                <div className="form-group mb-5" id="undefined">
                  <label className="form-label">Durasi Auto Bid (menit)</label>
                  <div className="form-control d-flex">
                    <input
                      placeholder="Masukkan Durasi Auto Bid"
                      id="interval-auto-bid-input"
                    />
                    <div className="placeholder-wrapper form-suffix">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM9.99917 4.79167C10.5742 4.79167 11.0417 5.25833 11.0417 5.83333C11.0417 6.40833 10.5742 6.875 9.99917 6.875C9.42417 6.875 8.95833 6.40833 8.95833 5.83333C8.95833 5.25833 9.42417 4.79167 9.99917 4.79167ZM11.6667 15H8.33333V14.1667C8.73667 14.0175 9.16667 13.9992 9.16667 13.5542V9.83167C9.16667 9.38667 8.73667 9.31667 8.33333 9.1675V8.33417H10.8333V13.555C10.8333 14.0008 11.2642 14.02 11.6667 14.1675V15Z"
                          fill="black"
                        ></path>
                      </svg>
                      <div className="placeholder-content">
                        Masukkan durasi waktu setiap berapa menit sekali sistem
                        akan memperbarui
                      </div>
                    </div>
                  </div>
                  <p className="form-error">
                    Minimal durasi waktu Auto Bid adalah 1 Menit
                  </p>
                </div>
                <div className="toggle-wrapper mb-2">
                  <p className="m-0">Lihat Produk yang sedang Auto Bid</p>
                  <div className="toggle-wrapper-icon">
                    <span className="cursor-pointer d-flex">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7973 2.20312C11.4379 0.84375 9.57227 0 7.50039 0C3.35664 0 0.00976562 3.35625 0.00976562 7.5C0.00976562 11.6438 3.35664 15 7.50039 15C10.9973 15 13.9129 12.6094 14.7473 9.375H12.7973C12.0285 11.5594 9.94727 13.125 7.50039 13.125C4.39727 13.125 1.87539 10.6031 1.87539 7.5C1.87539 4.39687 4.39727 1.875 7.50039 1.875C9.05664 1.875 10.4441 2.52188 11.4566 3.54375L8.43789 6.5625H15.0004V0L12.7973 2.20312Z"
                          fill="#4B4B50"
                        ></path>
                      </svg>
                    </span>
                    <span className="cursor-pointer toggle-icon">
                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 15 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.9147 0.333149L0.239632 7.00834C0.0851213 7.16273 0 7.36882 0 7.58858C0 7.80833 0.0851213 8.01443 0.239632 8.16882L0.731092 8.6604C1.05133 8.98027 1.57182 8.98027 1.89157 8.6604L7.49689 3.05508L13.1084 8.66662C13.2629 8.82101 13.4689 8.90625 13.6885 8.90625C13.9084 8.90625 14.1144 8.82101 14.269 8.66662L14.7604 8.17504C14.9149 8.02053 15 7.81455 15 7.5948C15 7.37504 14.9149 7.16895 14.7604 7.01456L8.0792 0.333149C7.9242 0.178394 7.71725 0.0933953 7.49726 0.0938831C7.2764 0.0933953 7.06958 0.178394 6.9147 0.333149Z"
                          fill="#4B4B50"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div
                  id="wrapper-history-auto-bid"
                  className="mb-2"
                  style={{
                    overflow: "auto",
                    transition: "all 250ms ease 0s",
                    maxHheight: "0px",
                  }}
                >
                  <table
                    id="table-history-auto-bid"
                    className="mb-2 table-vertical-middle text-small"
                  >
                    <thead>
                      <tr>
                        <th
                          className="text-light-blue font-weight-600"
                          style={{ width: "50px" }}
                        ></th>
                        <th
                          className="text-light-blue font-weight-600"
                          style={{ width: "265px" }}
                        >
                          Nama Produk
                        </th>
                        <th
                          className="text-light-blue font-weight-600"
                          style={{ width: "90px" }}
                        >
                          Durasi
                        </th>
                        <th
                          className="text-light-blue font-weight-600"
                          style={{ width: "70px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                  <div className="d-flex justify-content-between">
                    <p>
                      <span id="product-count">0</span>
                      <span> Produk</span>
                    </p>
                    <p className="mb-0 text-danger cursor-pointer">
                      Berhentikan Semua Produk
                    </p>
                  </div>
                </div>
                <button
                  className="btn-extension-shopee btn-block mb-10px btn-primary"
                  id="start-auto-bid"
                >
                  Mulai Auto Bid
                </button>
                <button
                  className="btn-extension-shopee btn-block mb-10px btn-danger d-none"
                  id="stop-auto-bid"
                >
                  Berhenti
                </button>
                <a
                  className="show-tutorial"
                  href="https://staging.komunitasmea.com/tutorial/shopeasytools/auto-bid"
                  target="_blank"
                >
                  Lihat Panduan Auto Bid
                </a>
              </div>
            </div>
            <div className="modal-footer-easy-tools">
              <div className="wrapper-footer">
                <p
                  id="version-number"
                  className="text-center text-gray text-small mb-0"
                  style={{ marginotp: "32px" }}
                >
                  Versi{" "}
                  <span className="font-weight-700">
                    V2.0.0 <span></span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Index>
    );
  }
}

renderScript(<AutoBid />, "mea-extension");

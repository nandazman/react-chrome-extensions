import React, { Component } from "react";
import Index from "../utils/index.jsx";
import { renderScript } from "../utils/render.js";

class AutoChat extends Component {
  render() {
    return (
      <Index>
        <div className="modal-extensions-shopee modal-backdrop"></div>
        <div className="modal-extensions-shopee modal-blur" id="modal-extension-autochat">
          <div className="modal-dialog">
            <div className="modal-header-easy-tools">
              <div className="modal-header-easy-tools-wrapper">
                <h2 className="modal-extensions-shopee-title">Auto Chat</h2>
                <div className="close-extension-modal">
                  <svg className="close-extension-modal" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="close-extension-modal" d="M8.87423 8.01217L14.7149 2.17129C15.095 1.79136 15.095 1.17708 14.7149 0.797151C14.335 0.417226 13.7207 0.417226 13.3408 0.797151L7.49992 6.63803L1.65921 0.797151C1.27911 0.417226 0.665003 0.417226 0.285077 0.797151C-0.0950258 1.17708 -0.0950258 1.79136 0.285077 2.17129L6.12578 8.01217L0.285077 13.853C-0.0950258 14.233 -0.0950258 14.8473 0.285077 15.2272C0.474417 15.4167 0.72337 15.5119 0.972146 15.5119C1.22092 15.5119 1.4697 15.4167 1.65921 15.2272L7.49992 9.3863L13.3408 15.2272C13.5303 15.4167 13.7791 15.5119 14.0279 15.5119C14.2766 15.5119 14.5254 15.4167 14.7149 15.2272C15.095 14.8473 15.095 14.233 14.7149 13.853L8.87423 8.01217Z" fill="black"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="modal-body-easy-tools">
              <div>
                <div className="d-flex mb-4 justify-content-between align-items-center">
                  <p className="text-black font-weight-600 m-0">Pilih salah satu metode Auto Chat</p>
                  <button className="btn-extension-shopee btn-outline-grey font-weight-600 d-none" id="btn-clear-method-id">Hapus Pilihan</button>
                </div>
                <div className="form-group form-group-readOnly mb-4" id="form-group-total-chat">
                  <label className="form-label form-radio d-flex">
                    <div className="wrapper-radiobox-shopee" id="radio-total-chat-id">
                      <input type="radio" name="chat-method" value="" />
                      <span className="radiobox-shopee-checkmark"></span>
                    </div>Jumlah chat terbaru yang akan dichat
                  </label>
                  <div className="form-control d-flex">
                    <input placeholder="Masukkan Jumlah chat terbaru yang akan dichat" id="total-chat-extension" readOnly="" />
                    <div className="placeholder-wrapper form-suffix">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM9.99917 4.79167C10.5742 4.79167 11.0417 5.25833 11.0417 5.83333C11.0417 6.40833 10.5742 6.875 9.99917 6.875C9.42417 6.875 8.95833 6.40833 8.95833 5.83333C8.95833 5.25833 9.42417 4.79167 9.99917 4.79167ZM11.6667 15H8.33333V14.1667C8.73667 14.0175 9.16667 13.9992 9.16667 13.5542V9.83167C9.16667 9.38667 8.73667 9.31667 8.33333 9.1675V8.33417H10.8333V13.555C10.8333 14.0008 11.2642 14.02 11.6667 14.1675V15Z" fill="black"></path>
                      </svg>
                      <div className="placeholder-content">Jumlah chat terbaru adalah berapa orang yang ingin anda chat</div>
                    </div>
                  </div>
                  <p className="form-error">Anda belum memasukkan jumlah chat terbaru</p>
                </div>
                <div className="form-group form-group-readOnly mb-5" id="undefined">
                  <label className="form-label form-radio d-flex">
                    <div className="wrapper-radiobox-shopee" id="radio-input-list-id">
                      <input type="radio" name="chat-method" value="" />
                      <span className="radiobox-shopee-checkmark"></span>
                    </div>Input data username / nomor pesananan manual
                  </label>
                  <div className="form-control d-flex">
                    <textarea rows="5" placeholder="Masukkan username / nomor pesananan" id="list-user-container" readOnly=""></textarea>
                    <div className="placeholder-wrapper form-suffix">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM9.99917 4.79167C10.5742 4.79167 11.0417 5.25833 11.0417 5.83333C11.0417 6.40833 10.5742 6.875 9.99917 6.875C9.42417 6.875 8.95833 6.40833 8.95833 5.83333C8.95833 5.25833 9.42417 4.79167 9.99917 4.79167ZM11.6667 15H8.33333V14.1667C8.73667 14.0175 9.16667 13.9992 9.16667 13.5542V9.83167C9.16667 9.38667 8.73667 9.31667 8.33333 9.1675V8.33417H10.8333V13.555C10.8333 14.0008 11.2642 14.02 11.6667 14.1675V15Z" fill="black"></path>
                      </svg>
                      <div className="placeholder-content">Masukkan data username / nomor pesananan yang anda inginkan. Setiap mengisi data tersebut dipisah dengan cara enter. <br/>
                        <br/> Contoh input nomor pesanan: <br/> 201429TTNBFWK5 <br/> 212409TTNBFWK5 <br/> 206875TTNBFWK5 <br/> 223456TTNBFWK5 <br/> 208976TTNBFWK5 <br/>
                        <br/>
                        <br/> Contoh input username: <br/> jokosusilo <br/> tokoindah <br/> bandungclothing <br/> parisvanjava
                      </div>
                    </div>
                  </div>
                  <p className="form-error">Anda belum memasukkan username / nomor pesananan</p>
                </div>
                <div className="form-group mb-2" id="undefined">
                  <label className="form-label">Pesan Chat</label>
                  <div className="form-control d-flex">
                    <textarea placeholder="Masukkan isi Pesan" id="template-chat-id"></textarea>
                    <div className="template-chat-suffix form-suffix">
                      <div className="d-flex align-items-center">
                        <button className="btn-extension-shopee add-template-btn" id="">
                          <svg className="undefined" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="undefined" d="M8.87423 8.01217L14.7149 2.17129C15.095 1.79136 15.095 1.17708 14.7149 0.797151C14.335 0.417226 13.7207 0.417226 13.3408 0.797151L7.49992 6.63803L1.65921 0.797151C1.27911 0.417226 0.665003 0.417226 0.285077 0.797151C-0.0950258 1.17708 -0.0950258 1.79136 0.285077 2.17129L6.12578 8.01217L0.285077 13.853C-0.0950258 14.233 -0.0950258 14.8473 0.285077 15.2272C0.474417 15.4167 0.72337 15.5119 0.972146 15.5119C1.22092 15.5119 1.4697 15.4167 1.65921 15.2272L7.49992 9.3863L13.3408 15.2272C13.5303 15.4167 13.7791 15.5119 14.0279 15.5119C14.2766 15.5119 14.5254 15.4167 14.7149 15.2272C15.095 14.8473 15.095 14.233 14.7149 13.853L8.87423 8.01217Z" fill="black"></path>
                          </svg>
                        </button>
                        <div className="placeholder-wrapper">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM9.99917 4.79167C10.5742 4.79167 11.0417 5.25833 11.0417 5.83333C11.0417 6.40833 10.5742 6.875 9.99917 6.875C9.42417 6.875 8.95833 6.40833 8.95833 5.83333C8.95833 5.25833 9.42417 4.79167 9.99917 4.79167ZM11.6667 15H8.33333V14.1667C8.73667 14.0175 9.16667 13.9992 9.16667 13.5542V9.83167C9.16667 9.38667 8.73667 9.31667 8.33333 9.1675V8.33417H10.8333V13.555C10.8333 14.0008 11.2642 14.02 11.6667 14.1675V15Z" fill="black"></path>
                          </svg>
                          <div className="placeholder-content">Template chat yang akan digunakan untuk pada auto chat</div>
                        </div>
                      </div>
                      <p>( <span id="char-counter">0</span>/ <span>600</span>) </p>
                    </div>
                  </div>
                  <p className="form-error">Anda hanya bisa membuat 4 template pesan. Silahkan hapus terlebih dahulu template yang sudah ada.</p>
                </div>
                <div className="list-container mb-5" id="template-list-container">
                  <div className="list-item placeholder-wrapper" id="kSC80grOs">
                    <p className="m-0">Halo, apa kabar?</p>
                    <div>
                      <svg className="" width="18" height="21" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="" d="M15.0002 4.0122C15.0001 4.20336 14.93 4.38787 14.8029 4.53073C14.6759 4.67359 14.5009 4.76485 14.311 4.78722L14.2197 4.79268H13.5602L12.5994 14.5644C12.5471 15.0946 12.2994 15.5864 11.9046 15.9442C11.5098 16.3019 10.996 16.5001 10.4632 16.5H4.70787C4.17507 16.5001 3.6613 16.3019 3.26647 15.9442C2.87164 15.5864 2.62399 15.0946 2.57168 14.5644L1.6109 4.79268H0.951386C0.744388 4.79268 0.545868 4.71045 0.399498 4.56408C0.253128 4.41771 0.170898 4.21919 0.170898 4.0122C0.170898 3.8052 0.253128 3.60668 0.399498 3.46031C0.545868 3.31394 0.744388 3.23171 0.951386 3.23171H4.85383C4.85383 2.87297 4.92448 2.51775 5.06176 2.18633C5.19905 1.8549 5.40026 1.55376 5.65392 1.3001C5.90759 1.04644 6.20873 0.84522 6.54015 0.707939C6.87158 0.570658 7.2268 0.5 7.58553 0.5C7.94427 0.5 8.29949 0.570658 8.63091 0.707939C8.96234 0.84522 9.26348 1.04644 9.51714 1.3001C9.7708 1.55376 9.97202 1.8549 10.1093 2.18633C10.2466 2.51775 10.3172 2.87297 10.3172 3.23171H14.2197C14.4267 3.23171 14.6252 3.31394 14.7716 3.46031C14.9179 3.60668 15.0002 3.8052 15.0002 4.0122ZM9.34163 6.54878C9.20018 6.54879 9.06351 6.60001 8.9569 6.69299C8.8503 6.78596 8.78097 6.9144 8.76173 7.05454L8.75626 7.13415V12.5976L8.76173 12.6772C8.78101 12.8173 8.85036 12.9457 8.95696 13.0386C9.06356 13.1315 9.2002 13.1827 9.34163 13.1827C9.48306 13.1827 9.6197 13.1315 9.7263 13.0386C9.83291 12.9457 9.90226 12.8173 9.92153 12.6772L9.927 12.5976V7.13415L9.92153 7.05454C9.9023 6.9144 9.83296 6.78596 9.72636 6.69299C9.61975 6.60001 9.48308 6.54879 9.34163 6.54878ZM5.82944 6.54878C5.68798 6.54879 5.55131 6.60001 5.44471 6.69299C5.3381 6.78596 5.26877 6.9144 5.24953 7.05454L5.24407 7.13415V12.5976L5.24953 12.6772C5.26881 12.8173 5.33816 12.9457 5.44476 13.0386C5.55136 13.1315 5.68801 13.1827 5.82944 13.1827C5.97086 13.1827 6.10751 13.1315 6.21411 13.0386C6.32071 12.9457 6.39006 12.8173 6.40934 12.6772L6.4148 12.5976V7.13415L6.40934 7.05454C6.3901 6.9144 6.32077 6.78596 6.21416 6.69299C6.10756 6.60001 5.97089 6.54879 5.82944 6.54878ZM7.58553 2.06098C7.27504 2.06098 6.97726 2.18432 6.7577 2.40388C6.53815 2.62343 6.4148 2.92121 6.4148 3.23171H8.75626C8.75626 2.92121 8.63292 2.62343 8.41337 2.40388C8.19381 2.18432 7.89603 2.06098 7.58553 2.06098Z" fill="#2D3356"></path>
                      </svg>
                    </div>
                    <div className="placeholder-content">Halo, apa kabar?</div>
                  </div>
                  <div className="list-item placeholder-wrapper" id="UEhZkkraJ">
                    <p className="m-0">Ada promo terbaru dari kami, cek toko kami ya!!</p>
                    <div>
                      <svg className="" width="18" height="21" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="" d="M15.0002 4.0122C15.0001 4.20336 14.93 4.38787 14.8029 4.53073C14.6759 4.67359 14.5009 4.76485 14.311 4.78722L14.2197 4.79268H13.5602L12.5994 14.5644C12.5471 15.0946 12.2994 15.5864 11.9046 15.9442C11.5098 16.3019 10.996 16.5001 10.4632 16.5H4.70787C4.17507 16.5001 3.6613 16.3019 3.26647 15.9442C2.87164 15.5864 2.62399 15.0946 2.57168 14.5644L1.6109 4.79268H0.951386C0.744388 4.79268 0.545868 4.71045 0.399498 4.56408C0.253128 4.41771 0.170898 4.21919 0.170898 4.0122C0.170898 3.8052 0.253128 3.60668 0.399498 3.46031C0.545868 3.31394 0.744388 3.23171 0.951386 3.23171H4.85383C4.85383 2.87297 4.92448 2.51775 5.06176 2.18633C5.19905 1.8549 5.40026 1.55376 5.65392 1.3001C5.90759 1.04644 6.20873 0.84522 6.54015 0.707939C6.87158 0.570658 7.2268 0.5 7.58553 0.5C7.94427 0.5 8.29949 0.570658 8.63091 0.707939C8.96234 0.84522 9.26348 1.04644 9.51714 1.3001C9.7708 1.55376 9.97202 1.8549 10.1093 2.18633C10.2466 2.51775 10.3172 2.87297 10.3172 3.23171H14.2197C14.4267 3.23171 14.6252 3.31394 14.7716 3.46031C14.9179 3.60668 15.0002 3.8052 15.0002 4.0122ZM9.34163 6.54878C9.20018 6.54879 9.06351 6.60001 8.9569 6.69299C8.8503 6.78596 8.78097 6.9144 8.76173 7.05454L8.75626 7.13415V12.5976L8.76173 12.6772C8.78101 12.8173 8.85036 12.9457 8.95696 13.0386C9.06356 13.1315 9.2002 13.1827 9.34163 13.1827C9.48306 13.1827 9.6197 13.1315 9.7263 13.0386C9.83291 12.9457 9.90226 12.8173 9.92153 12.6772L9.927 12.5976V7.13415L9.92153 7.05454C9.9023 6.9144 9.83296 6.78596 9.72636 6.69299C9.61975 6.60001 9.48308 6.54879 9.34163 6.54878ZM5.82944 6.54878C5.68798 6.54879 5.55131 6.60001 5.44471 6.69299C5.3381 6.78596 5.26877 6.9144 5.24953 7.05454L5.24407 7.13415V12.5976L5.24953 12.6772C5.26881 12.8173 5.33816 12.9457 5.44476 13.0386C5.55136 13.1315 5.68801 13.1827 5.82944 13.1827C5.97086 13.1827 6.10751 13.1315 6.21411 13.0386C6.32071 12.9457 6.39006 12.8173 6.40934 12.6772L6.4148 12.5976V7.13415L6.40934 7.05454C6.3901 6.9144 6.32077 6.78596 6.21416 6.69299C6.10756 6.60001 5.97089 6.54879 5.82944 6.54878ZM7.58553 2.06098C7.27504 2.06098 6.97726 2.18432 6.7577 2.40388C6.53815 2.62343 6.4148 2.92121 6.4148 3.23171H8.75626C8.75626 2.92121 8.63292 2.62343 8.41337 2.40388C8.19381 2.18432 7.89603 2.06098 7.58553 2.06098Z" fill="#2D3356"></path>
                      </svg>
                    </div>
                    <div className="placeholder-content">Ada promo terbaru dari kami, cek toko kami ya!!</div>
                  </div>
                </div>
                <div>
                  <button className="btn-extension-shopee btn-block mb-2 btn-primary" id="">Buka Chat Shopee</button>
                  <button className="btn-extension-shopee btn-block mb-2 btn-primary d-none" id="btn-start-chat">Mulai Dari Awal</button>
                  <button className="btn-extension-shopee btn-block mb-2 btn-primary d-none" id="btn-continue-chat">Lanjutkan</button>
                  <button className="btn-extension-shopee btn-block mb-2 btn-primary d-none" id="btn-chat-from-list">Mulai Chat</button>
                </div>
                <a className="show-tutorial" href="https://staging.komunitasmea.com/tutorial/shopeasytools/auto-chat" target="_blank">Lihat Panduan Auto Chat</a>
              </div>
            </div>
            <div className="modal-footer-easy-tools">
              <div>
                <p id="version-number" className="text-center text-gray text-small mb-0">Versi <span className="font-weight-700">V2.0.0 <span></span>
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

renderScript(<AutoChat />, "mea-extension");
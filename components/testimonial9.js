import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial9 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="testimonial9-testimonial17 thq-section-padding">
        <div className="testimonial9-max-width thq-section-padding">
          <div className="testimonial9-section-title">
            <h2 className="testimonial9-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial9-text43">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__V-RNg'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="testimonial9-subtitle thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial9-text39">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hMt5BX'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div
            data-thq="slider"
            data-navigation="true"
            data-pagination="true"
            className="testimonial9-slider1 swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="testimonial9-slider-slide1 swiper-slide"
              >
                <div className="testimonial9-column1 thq-card">
                  <div className="testimonial9-stars1">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                  </div>
                  <span className="testimonial9-text10 thq-body-small">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial9-text37">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_c7LYDp'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="testimonial9-avatar1">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial9-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial9-avatar-content1">
                      <span className="testimonial9-text11 thq-body-small">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial9-text44">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_dSUg75'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="testimonial9-text12 thq-body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial9-text41">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_GURXxj'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="testimonial9-column2 thq-card">
                  <div className="testimonial9-stars2">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                  </div>
                  <span className="testimonial9-text13 thq-body-small">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial9-text42">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_jGc3LU'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="testimonial9-avatar2">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial9-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial9-avatar-content2">
                      <span className="testimonial9-text14 thq-body-small">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial9-text34">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_7QttLK'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="testimonial9-text15 thq-body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial9-text35">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_BQdADg'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial9-slider-slide2 swiper-slide"
              >
                <div className="testimonial9-column3 thq-card">
                  <div className="testimonial9-stars3">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                  </div>
                  <span className="testimonial9-text16 thq-body-small">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial9-text45">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_KwkhML'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="testimonial9-avatar3">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial9-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial9-avatar-content3">
                      <span className="testimonial9-text17 thq-body-small">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial9-text36">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_iLlIQZ'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="testimonial9-text18 thq-body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial9-text40">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Fdns4w'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="testimonial9-column4 thq-card">
                  <div className="testimonial9-stars4">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                  </div>
                  <span className="testimonial9-text19 thq-body-small">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial9-text38">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ufynb4'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="testimonial9-avatar4">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial9-avatar-image4 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial9-avatar-content4">
                      <span className="testimonial9-text20 thq-body-small">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial9-text46">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_uUe7FU'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="testimonial9-text21 thq-body-small">
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial9-text47">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_I52QL5'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="testimonial9-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
          <div
            data-thq="slider"
            data-navigation="true"
            data-pagination="true"
            className="testimonial9-slider2 swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="testimonial9-slider-slide3 swiper-slide"
              >
                <div className="testimonial9-column5">
                  <div className="testimonial9-stars5">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                  </div>
                  <span className="testimonial9-text22 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_XzXYDY'),
                      }}
                    ></span>
                  </span>
                  <div className="testimonial9-avatar5">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial9-avatar-image5 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial9-avatar-content5">
                      <span className="testimonial9-text23 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_jVAaoY'),
                          }}
                        ></span>
                      </span>
                      <span className="testimonial9-text24 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MOJ2wg'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial9-slider-slide4 swiper-slide"
              >
                <div className="testimonial9-column6">
                  <div className="testimonial9-stars6">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                  </div>
                  <span className="testimonial9-text25 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Qh2wvU'),
                      }}
                    ></span>
                  </span>
                  <div className="testimonial9-avatar6">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial9-avatar-image6 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial9-avatar-content6">
                      <span className="testimonial9-text26 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_2qa09u'),
                          }}
                        ></span>
                      </span>
                      <span className="testimonial9-text27 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_aA7HWY'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial9-slider-slide5 swiper-slide"
              >
                <div className="testimonial9-column7">
                  <div className="testimonial9-stars7">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                  </div>
                  <span className="testimonial9-text28 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_mc4oWr'),
                      }}
                    ></span>
                  </span>
                  <div className="testimonial9-avatar7">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial9-avatar-image7 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial9-avatar-content7">
                      <span className="testimonial9-text29 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_PV5rNh'),
                          }}
                        ></span>
                      </span>
                      <span className="testimonial9-text30 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_kTP4dk'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial9-slider-slide6 swiper-slide"
              >
                <div className="testimonial9-column8">
                  <div className="testimonial9-stars8">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                  </div>
                  <span className="testimonial9-text31 thq-body-small">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_90Je5a'),
                      }}
                    ></span>
                  </span>
                  <div className="testimonial9-avatar8">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial9-avatar-image8 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial9-avatar-content8">
                      <span className="testimonial9-text32 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_SET0GY'),
                          }}
                        ></span>
                      </span>
                      <span className="testimonial9-text33 thq-body-small">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_H0Dbza'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="testimonial9-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial9-testimonial17 {
            background-image: linear-gradient(
              0deg,
              rgb(27, 27, 52) 0%,
              rgb(202, 151, 98) 100%
            );
          }
          .testimonial9-max-width {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial9-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial9-title {
            width: 100%;
            text-align: center;
          }
          .testimonial9-subtitle {
            text-align: center;
          }
          .testimonial9-slider1 {
            width: 100%;
            height: auto;
            display: inline-block;
            position: relative;
          }
          .testimonial9-slider-slide1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial9-column1 {
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .testimonial9-stars1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial9-text10 {
            height: auto;
          }
          .testimonial9-avatar1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial9-avatar-image1 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial9-avatar-content1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial9-text11 {
            font-weight: 600;
          }
          .testimonial9-text12 {
            height: auto;
          }
          .testimonial9-column2 {
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .testimonial9-stars2 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial9-text13 {
            height: auto;
          }
          .testimonial9-avatar2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial9-avatar-image2 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial9-avatar-content2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial9-text14 {
            font-weight: 600;
          }
          .testimonial9-text15 {
            height: auto;
          }
          .testimonial9-slider-slide2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial9-column3 {
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .testimonial9-stars3 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial9-text16 {
            height: auto;
          }
          .testimonial9-avatar3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial9-avatar-image3 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial9-avatar-content3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial9-text17 {
            font-weight: 600;
          }
          .testimonial9-text18 {
            height: auto;
          }
          .testimonial9-column4 {
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .testimonial9-stars4 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial9-text19 {
            height: auto;
          }
          .testimonial9-avatar4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial9-avatar-image4 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial9-avatar-content4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial9-text20 {
            font-weight: 600;
          }
          .testimonial9-text21 {
            height: auto;
          }
          .testimonial9-slider-pagination1 {
            display: block;
          }
          .testimonial9-slider2 {
            width: 100%;
            height: auto;
            display: none;
            position: relative;
          }
          .testimonial9-slider-slide3 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial9-column5 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .testimonial9-stars5 {
            display: flex;
            align-items: center;
          }
          .testimonial9-text22 {
            height: auto;
          }
          .testimonial9-avatar5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial9-avatar-image5 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial9-avatar-content5 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial9-text23 {
            font-weight: 600;
          }
          .testimonial9-text24 {
            height: auto;
          }
          .testimonial9-slider-slide4 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial9-column6 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: #000000;
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .testimonial9-stars6 {
            display: flex;
            align-items: center;
          }
          .testimonial9-text25 {
            height: auto;
          }
          .testimonial9-avatar6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial9-avatar-image6 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial9-avatar-content6 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial9-text26 {
            font-weight: 600;
          }
          .testimonial9-text27 {
            height: auto;
          }
          .testimonial9-slider-slide5 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial9-column7 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: #000000;
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .testimonial9-stars7 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial9-text28 {
            height: auto;
          }
          .testimonial9-avatar7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial9-avatar-image7 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial9-avatar-content7 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial9-text29 {
            font-weight: 600;
          }
          .testimonial9-text30 {
            height: auto;
          }
          .testimonial9-slider-slide6 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial9-column8 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: #000000;
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .testimonial9-stars8 {
            display: flex;
            align-items: center;
          }
          .testimonial9-text31 {
            height: auto;
          }
          .testimonial9-avatar8 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial9-avatar-image8 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial9-avatar-content8 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial9-text32 {
            font-weight: 600;
          }
          .testimonial9-text33 {
            height: auto;
          }
          .testimonial9-slider-pagination2 {
            display: block;
          }
          .testimonial9-text34 {
            display: inline-block;
          }
          .testimonial9-text35 {
            display: inline-block;
          }
          .testimonial9-text36 {
            display: inline-block;
          }
          .testimonial9-text37 {
            display: inline-block;
          }
          .testimonial9-text38 {
            display: inline-block;
          }
          .testimonial9-text39 {
            display: inline-block;
          }
          .testimonial9-text40 {
            display: inline-block;
          }
          .testimonial9-text41 {
            display: inline-block;
          }
          .testimonial9-text42 {
            display: inline-block;
          }
          .testimonial9-text43 {
            display: inline-block;
          }
          .testimonial9-text44 {
            display: inline-block;
          }
          .testimonial9-text45 {
            display: inline-block;
          }
          .testimonial9-text46 {
            display: inline-block;
          }
          .testimonial9-text47 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial9-slider1 {
              display: none;
            }
            .testimonial9-slider2 {
              display: flex;
            }
            .testimonial9-slider-slide3 {
              padding: var(--dl-layout-space-threeunits);
              align-self: center;
            }
            .testimonial9-slider-slide4 {
              padding: var(--dl-layout-space-threeunits);
              align-self: center;
            }
            .testimonial9-slider-slide5 {
              padding: var(--dl-layout-space-threeunits);
              align-self: center;
            }
            .testimonial9-slider-slide6 {
              padding: var(--dl-layout-space-threeunits);
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .testimonial9-max-width {
              padding: var(--dl-layout-space-threeunits);
            }
            .testimonial9-section-title {
              width: 100%;
              max-width: 800px;
            }
            .testimonial9-slider-slide1 {
              padding: var(--dl-layout-space-threeunits);
            }
            .testimonial9-slider-slide2 {
              padding: var(--dl-layout-space-threeunits);
            }
            .testimonial9-stars7 {
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .testimonial9-max-width {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial9-slider-slide1 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial9-slider-slide2 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial9-slider-slide3 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial9-slider-slide4 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial9-slider-slide5 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial9-slider-slide6 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial9.defaultProps = {
  author2Name: undefined,
  author3Alt: 'Michael Brown - Digital Marketer',
  author2Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg5MTI1OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Sarah Lee - UX/UI Specialist',
  author1Alt: 'John Smith - CEO of ABC Inc.',
  author3Src:
    'https://images.unsplash.com/photo-1639503611585-1054af5dbfab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg5MTI1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: undefined,
  review1: undefined,
  author2Alt: 'Emily Johnson - Freelance Designer',
  review4: undefined,
  content1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1624561254177-28de5f2c36eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg5MTI1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  author1Position: undefined,
  review2: undefined,
  heading1: undefined,
  author1Name: undefined,
  review3: undefined,
  author4Name: undefined,
  author4Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1513171920216-2640b288471b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg5MTI1N3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial9.propTypes = {
  author2Name: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author3Name: PropTypes.element,
  review1: PropTypes.element,
  author2Alt: PropTypes.string,
  review4: PropTypes.element,
  content1: PropTypes.element,
  author2Src: PropTypes.string,
  author3Position: PropTypes.element,
  author1Position: PropTypes.element,
  review2: PropTypes.element,
  heading1: PropTypes.element,
  author1Name: PropTypes.element,
  review3: PropTypes.element,
  author4Name: PropTypes.element,
  author4Position: PropTypes.element,
  author1Src: PropTypes.string,
}

export default Testimonial9

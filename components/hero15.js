import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero15 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.hero15Id}
        className="hero15-container1 thq-section-padding"
      >
        <div className="hero15-column">
          <div className="hero15-content">
            <h1 className="thq-heading-1 hero15-text1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero15-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_V9PJW_'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="thq-body-large hero15-text2">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero15-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_751zrn'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero15-container2">
              <input
                type="email"
                placeholder={props.textinputPlaceholder}
                className="hero15-textinput thq-input"
              />
              <div className="hero15-container3">
                <button className="hero15-button thq-button-filled">
                  <span className="thq-body-small">
                    {props.action3 ?? (
                      <Fragment>
                        <span className="hero15-text4">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_C7YvOg'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src="/112121-2700h.jpg" className="hero15-image" />
      </div>
      <style jsx>
        {`
          .hero15-container1 {
            width: 100%;
            height: 1015px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .hero15-column {
            gap: 24px;
            width: auto;
            display: flex;
            z-index: 1;
            max-width: 560px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero15-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeInLeft;
            flex-direction: column;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .hero15-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .hero15-textinput {
            width: 70%;
            background-color: transparent;
          }
          .hero15-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
          }
          .hero15-button {
            gap: var(--dl-layout-space-halfunit);
            flex: 1;
            display: flex;
            box-sizing: content-box;
            align-items: center;
            justify-content: center;
            background-color: #c69760;
          }
          .hero15-image {
            top: -7px;
            flex: 1;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
            margin-right: auto;
            padding-left: 4px;
            margin-bottom: auto;
          }
          .hero15-text4 {
            display: inline-block;
          }
          .hero15-text5 {
            display: inline-block;
          }
          .hero15-text6 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .hero15-image {
              flex: 1;
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 1200px) {
            .hero15-image {
              width: 1199px;
              height: 908px;
            }
          }
          @media (max-width: 991px) {
            .hero15-column {
              align-self: center;
            }
            .hero15-image {
              width: 100%;
              height: 100%;
              padding-top: 175px;
            }
          }
          @media (max-width: 767px) {
            .hero15-column {
              width: 100%;
            }
            .hero15-text1 {
              text-align: center;
            }
            .hero15-text2 {
              text-align: center;
            }
            .hero15-container2 {
              flex-direction: column;
            }
            .hero15-textinput {
              width: 100%;
            }
            .hero15-container3 {
              width: 100%;
            }
            .hero15-button {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero15-container3 {
              width: 100%;
            }
            .hero15-button {
              width: 100%;
            }
            .hero15-image {
              top: -189px;
              right: -8px;
              width: 478px;
              height: 2604px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero15.defaultProps = {
  action3: undefined,
  content1: undefined,
  heading1: undefined,
  textinputPlaceholder: 'Enter your email address',
  hero15Id: '',
}

Hero15.propTypes = {
  action3: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  hero15Id: PropTypes.string,
}

export default Hero15

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer className="footer3-footer4 thq-section-padding">
        <div className="footer3-max-width thq-section-max-width">
          <div className="footer3-content">
            <div className="footer3-logo">
              <img
                alt={props.logoAlt}
                src="/logo-2%20(1)-1500h.png"
                className="footer3-image1"
              />
            </div>
            <div className="footer3-links">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="footer3-text2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_szWgGG'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="footer3-text1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eS7Akx'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="footer3-text8">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Qw7vcT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link4 ?? (
                  <Fragment>
                    <span className="footer3-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_b4lSP5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link5 ?? (
                  <Fragment>
                    <span className="footer3-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_AKe26N'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
            <div className="footer3-social-links">
              <a
                href="https://www.facebook.com/share/1XmX4DCvw8/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer3-link6"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer3-icon1 thq-icon-small"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ousos.althiqa/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer3-link7"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer3-icon3 thq-icon-small"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ousos-althiqa-accounting-tax/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer3-link8"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer3-icon5 thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer3-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer3-row">
              <div className="footer3-footer-links">
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('content3_yMVbPE'),
                    }}
                  ></span>
                </span>
                <span className="thq-body-small">
                  {props.privacyLink ?? (
                    <Fragment>
                      <span className="footer3-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_vy84Cr'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.termsLink ?? (
                    <Fragment>
                      <span className="footer3-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_qdflIF'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.cookiesLink ?? (
                    <Fragment>
                      <span className="footer3-text7">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Fvqcqt'),
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
      </footer>
      <style jsx>
        {`
          .footer3-footer4 {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: #1b1b34;
          }
          .footer3-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer3-content {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .footer3-logo {
            gap: 24px;
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer3-image1 {
            height: 2rem;
          }
          .footer3-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer3-social-links {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: flex-end;
          }
          .footer3-link6 {
            display: contents;
          }
          .footer3-icon1 {
            text-decoration: none;
          }
          .footer3-link7 {
            display: contents;
          }
          .footer3-icon3 {
            text-decoration: none;
          }
          .footer3-link8 {
            display: contents;
          }
          .footer3-icon5 {
            text-decoration: none;
          }
          .footer3-credits {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer3-row {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer3-footer-links {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .footer3-text1 {
            display: inline-block;
          }
          .footer3-text2 {
            display: inline-block;
          }
          .footer3-text3 {
            display: inline-block;
          }
          .footer3-text4 {
            display: inline-block;
          }
          .footer3-text5 {
            display: inline-block;
          }
          .footer3-text6 {
            display: inline-block;
          }
          .footer3-text7 {
            display: inline-block;
          }
          .footer3-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .footer3-logo {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .footer3-content {
              flex-direction: column;
            }
            .footer3-row {
              flex-direction: column;
            }
            .footer3-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer3-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer3-content {
              width: 100%;
            }
            .footer3-links {
              width: 100%;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer3.defaultProps = {
  link2: undefined,
  link1: undefined,
  logoAlt: 'Company Logo',
  privacyLink: undefined,
  link5: undefined,
  termsLink: undefined,
  link4: undefined,
  cookiesLink: undefined,
  link3: undefined,
}

Footer3.propTypes = {
  link2: PropTypes.element,
  link1: PropTypes.element,
  logoAlt: PropTypes.string,
  privacyLink: PropTypes.element,
  link5: PropTypes.element,
  termsLink: PropTypes.element,
  link4: PropTypes.element,
  cookiesLink: PropTypes.element,
  link3: PropTypes.element,
}

export default Footer3

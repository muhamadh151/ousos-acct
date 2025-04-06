import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features22 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.features22Id}
        className={`features22-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <div className="features22-max-width thq-section-max-width">
          <div className="features22-container1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features22-text33">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_YnhYD6'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features22-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="features22-text31">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Tz_Njb'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features22-container2 thq-grid-auto-300">
            <div className="features22-card1 thq-card thq-flex-column">
              <img
                alt="Drag-and-Drop Interface Image"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="features22-image1 thq-img-ratio-1-1 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features22-text45">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_jKKS9C'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features22-text13 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features22-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_YnIfPV'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card2 thq-card thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src="https://images.unsplash.com/photo-1457904375453-3e1fc2fc76f4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="features22-image2 thq-img-ratio-1-1 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features22-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_FEPnMw'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features22-text15 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features22-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KMcoQG'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card3 thq-card thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="features22-image3 thq-img-ratio-1-1 thq-img-round"
              />
              <h1 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features22-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_cW8F-t'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h1>
              <span className="features22-text17 thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features22-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_W6vefW'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card4 thq-card thq-flex-column">
              <img
                alt="Collaboration Tools Image"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="features22-image4 thq-img-ratio-1-1 thq-img-round"
              />
              <h1 className="thq-heading-2">
                {props.feature4Title ?? (
                  <Fragment>
                    <span className="features22-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Rs5pkv'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h1>
              <span className="features22-text19 thq-body-small">
                {props.feature4Description ?? (
                  <Fragment>
                    <span className="features22-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_mwWz9j'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card5 thq-card thq-flex-column">
              <img
                alt={props.feature5ImageAlt}
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="features22-image5 thq-img-ratio-1-1 thq-img-round"
              />
              <h1 className="thq-heading-2">
                {props.feature5Title ?? (
                  <Fragment>
                    <span className="features22-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_EtR0-T'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h1>
              <span className="features22-text21 thq-body-small">
                {props.feature5Description ?? (
                  <Fragment>
                    <span className="features22-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_zsNSkq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card6 thq-card thq-flex-column">
              <img
                alt={props.feature6ImageAlt}
                src="https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="features22-image6 thq-img-ratio-1-1 thq-img-round"
              />
              <h1 className="thq-heading-2">
                {props.feature6Title ?? (
                  <Fragment>
                    <span className="features22-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_XUcjJT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h1>
              <span className="features22-text23 thq-body-small">
                {props.feature6Description ?? (
                  <Fragment>
                    <span className="features22-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_EVqrXY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card7 thq-card thq-flex-column">
              <img
                alt={props.feature7ImageAlt}
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGFjY291bnRpbmd8ZW58MHx8fHwxNzQzODk4MTY2fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="features22-image7 thq-img-ratio-1-1 thq-img-round"
              />
              <h1 className="thq-heading-2">
                {props.feature7Title ?? (
                  <Fragment>
                    <span className="features22-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_uwRof6'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h1>
              <span className="features22-text25 thq-body-small">
                {props.feature7Description ?? (
                  <Fragment>
                    <span className="features22-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wkrEju'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card8 thq-card thq-flex-column">
              <img
                alt={props.feature8ImageAlt}
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxhY2NvdW50aW5nfGVufDB8fHx8MTc0Mzg5ODE2Nnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="features22-image8 thq-img-ratio-1-1 thq-img-round"
              />
              <h1 className="thq-heading-2">
                {props.feature8Title ?? (
                  <Fragment>
                    <span className="features22-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Vhz2wn'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h1>
              <span className="features22-text27 thq-body-small">
                {props.feature8Description ?? (
                  <Fragment>
                    <span className="features22-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_JYWiS9'),
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
      <style jsx>
        {`
          .features22-layout349 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features22-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features22-container1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .features22-text11 {
            text-align: center;
          }
          .features22-container2 {
            width: 100%;
          }
          .features22-card1 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .features22-image1 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text13 {
            text-align: center;
          }
          .features22-card2 {
            color: var(--dl-color-theme-neutral-light);
            height: 385px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .features22-image2 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text15 {
            text-align: center;
          }
          .features22-card3 {
            color: var(--dl-color-theme-neutral-light);
            height: 388px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .features22-image3 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text17 {
            text-align: center;
          }
          .features22-card4 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .features22-image4 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text19 {
            text-align: center;
          }
          .features22-card5 {
            color: var(--dl-color-theme-neutral-light);
            height: 385px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .features22-image5 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text21 {
            text-align: center;
          }
          .features22-card6 {
            color: var(--dl-color-theme-neutral-light);
            height: 381px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .features22-image6 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text23 {
            text-align: center;
          }
          .features22-card7 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .features22-image7 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text25 {
            text-align: center;
          }
          .features22-card8 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .features22-image8 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text27 {
            text-align: center;
          }
          .features22-text28 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            font-size: 25px;
          }
          .features22-text29 {
            display: inline-block;
          }
          .features22-text30 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            font-size: 33px;
          }
          .features22-text31 {
            display: inline-block;
          }
          .features22-text32 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .features22-text33 {
            display: inline-block;
          }
          .features22-text34 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .features22-text35 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .features22-text36 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .features22-text37 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .features22-text38 {
            display: inline-block;
          }
          .features22-text39 {
            display: inline-block;
          }
          .features22-text40 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .features22-text41 {
            display: inline-block;
          }
          .features22-text42 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .features22-text43 {
            display: inline-block;
          }
          .features22-text44 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .features22-text45 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .features22root-class-name {
            background-image: linear-gradient(
              0deg,
              rgb(202, 151, 98) 0%,
              rgb(27, 27, 52) 79%
            );
          }
          @media (max-width: 991px) {
            .features22-max-width {
              flex-direction: column;
            }
            .features22-container1 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .features22-container1 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .features22-card1 {
              width: 100%;
            }
            .features22-card2 {
              width: 100%;
            }
            .features22-card3 {
              width: 100%;
            }
            .features22-card4 {
              width: 100%;
            }
            .features22-card5 {
              width: 100%;
            }
            .features22-card6 {
              width: 100%;
            }
            .features22-card7 {
              width: 100%;
            }
            .features22-card8 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features22.defaultProps = {
  feature3Title: undefined,
  feature4Description: undefined,
  rootClassName: '',
  feature2Title: undefined,
  content1: undefined,
  feature4Title: undefined,
  heading1: undefined,
  feature2Description: undefined,
  feature2ImageAlt: 'Responsive Design Image',
  feature3Description: undefined,
  feature7Title: undefined,
  features22Id: '',
  feature5ImageAlt: 'Template Library Image',
  feature8Title: undefined,
  feature7ImageAlt: 'Version History Image',
  feature7Description: undefined,
  feature8ImageAlt: 'Asset Management Image',
  feature6Description: undefined,
  feature3ImageAlt: 'Code Export Image',
  feature5Title: undefined,
  feature8Description: undefined,
  feature6Title: undefined,
  feature5Description: undefined,
  feature1Description: undefined,
  feature6ImageAlt: 'Custom Component Image',
  feature1Title: undefined,
}

Features22.propTypes = {
  feature3Title: PropTypes.element,
  feature4Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  content1: PropTypes.element,
  feature4Title: PropTypes.element,
  heading1: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature7Title: PropTypes.element,
  features22Id: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature8Title: PropTypes.element,
  feature7ImageAlt: PropTypes.string,
  feature7Description: PropTypes.element,
  feature8ImageAlt: PropTypes.string,
  feature6Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature5Title: PropTypes.element,
  feature8Description: PropTypes.element,
  feature6Title: PropTypes.element,
  feature5Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature6ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
}

export default Features22

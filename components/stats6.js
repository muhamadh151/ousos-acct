import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats6 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`stats6-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="stats6-max-width thq-section-max-width">
          <div className="stats6-container2">
            <h2 className="thq-heading-2 stats6-title">
              {props.heading1 ?? (
                <Fragment>
                  <span className="stats6-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_n5-B30'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="stats6-text23">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2CQRCT'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats6-container3">
            <div className="stats6-container4">
              <h2 className="thq-heading-2 stats6-text10">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats6-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_F8ElUx'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="stats6-text11 thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats6-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7XXBSP'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats6-container5">
              <h2 className="thq-heading-2 stats6-text12">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats6-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Fdtpr2'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="stats6-text13 thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats6-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ljJjBq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats6-container6">
              <h2 className="thq-heading-2 stats6-text14">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats6-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_tsq7sH'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="stats6-text15 thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats6-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_y8SOc5'),
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
          .stats6-container1 {
            height: 366px;
          }
          .stats6-max-width {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats6-container2 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .stats6-container3 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }
          .stats6-container4 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats6-text11 {
            text-align: center;
          }
          .stats6-container5 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats6-text13 {
            text-align: center;
          }
          .stats6-container6 {
            flex: 1;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .stats6-text15 {
            text-align: center;
          }
          .stats6-text16 {
            display: inline-block;
          }
          .stats6-text17 {
            display: inline-block;
          }
          .stats6-text18 {
            display: inline-block;
          }
          .stats6-text19 {
            display: inline-block;
          }
          .stats6-text20 {
            display: inline-block;
          }
          .stats6-text21 {
            display: inline-block;
          }
          .stats6-text22 {
            display: inline-block;
          }
          .stats6-text23 {
            display: inline-block;
          }
          .stats6root-class-name {
            background-color: #1b1b34;
          }
          @media (max-width: 767px) {
            .stats6-title {
              text-align: center;
            }
            .stats6-container4 {
              align-self: flex-start;
            }
            .stats6-text10 {
              align-self: center;
            }
            .stats6-container5 {
              align-self: flex-start;
            }
            .stats6-text12 {
              align-self: center;
            }
            .stats6-container6 {
              align-self: flex-start;
            }
            .stats6-text14 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .stats6-title {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Stats6.defaultProps = {
  stat3: undefined,
  stat3Description: undefined,
  stat2: undefined,
  heading1: undefined,
  stat1Description: undefined,
  rootClassName: '',
  stat1: undefined,
  stat2Description: undefined,
  content1: undefined,
}

Stats6.propTypes = {
  stat3: PropTypes.element,
  stat3Description: PropTypes.element,
  stat2: PropTypes.element,
  heading1: PropTypes.element,
  stat1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  stat1: PropTypes.element,
  stat2Description: PropTypes.element,
  content1: PropTypes.element,
}

export default Stats6

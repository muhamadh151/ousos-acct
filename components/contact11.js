import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact11-container thq-section-padding">
        <div className="contact11-max-width thq-section-max-width">
          <div className="contact11-section-title">
            <div className="contact11-content1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact11-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_cMKcs1'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact11-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_NC0vzz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact11-content2 thq-flex-row">
            <div className="contact11-content3">
              <div className="contact11-content4">
                <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <div className="contact11-contact-info1">
                  <h3 className="contact11-text12 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lq7jEN'),
                      }}
                    ></span>
                  </h3>
                  <p className="thq-body-large">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="contact11-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_K42YRb'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="thq-body-small">
                    {props.email ?? (
                      <Fragment>
                        <span className="contact11-text26">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_21Q9pC'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="contact11-content5">
                <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <div className="contact11-contact-info2">
                  <h3 className="contact11-text14 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DMczBy'),
                      }}
                    ></span>
                  </h3>
                  <p className="thq-body-large">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="contact11-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_PyhCHH'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="thq-body-small">
                    {props.phone1 ?? (
                      <Fragment>
                        <span className="contact11-text20">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_DxTjhH'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="contact11-content6">
                <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <div className="contact11-contact-info3">
                  <h3 className="contact11-text17 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_goW63J'),
                      }}
                    ></span>
                  </h3>
                  <p className="thq-body-large">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="contact11-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_7DCuzR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="thq-body-small">
                    {props.address1 ?? (
                      <Fragment>
                        <span className="contact11-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Jd2Dss'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5831519036783!2d55.357393975166474!3d25.284604377654855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae2c51294ad19cef%3A0x7934533f643bd5bb!2sOusos%20Althiqa%20Accounting!5e0!3m2!1sen!2sae!4v1743897169361!5m2!1sen!2sae" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"&gt;&lt;/iframe&gt;'
              title="Map"
              className="contact11-iframe thq-img-ratio-16-9"
            ></iframe>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact11-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: #1b1b34;
          }
          .contact11-max-width {
            align-self: center;
          }
          .contact11-section-title {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .contact11-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-content2 {
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact11-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-content4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-contact-info1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-text12 {
            align-self: flex-start;
            text-align: center;
          }
          .contact11-content5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-contact-info2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-text14 {
            align-self: flex-start;
            text-align: center;
          }
          .contact11-content6 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-contact-info3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-text17 {
            align-self: flex-start;
            text-align: center;
          }
          .contact11-iframe {
            height: 664px;
          }
          .contact11-text19 {
            display: inline-block;
          }
          .contact11-text20 {
            display: inline-block;
          }
          .contact11-text21 {
            display: inline-block;
          }
          .contact11-text22 {
            display: inline-block;
          }
          .contact11-text23 {
            display: inline-block;
          }
          .contact11-text24 {
            display: inline-block;
          }
          .contact11-text25 {
            display: inline-block;
          }
          .contact11-text26 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact11-content2 {
              position: relative;
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact11.defaultProps = {
  content1: undefined,
  phone1: undefined,
  content5: undefined,
  address1: undefined,
  heading1: undefined,
  content2: undefined,
  content3: undefined,
  email: undefined,
}

Contact11.propTypes = {
  content1: PropTypes.element,
  phone1: PropTypes.element,
  content5: PropTypes.element,
  address1: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  content3: PropTypes.element,
  email: PropTypes.element,
}

export default Contact11

import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar5 from '../components/navbar5'
import Hero15 from '../components/hero15'
import Stats6 from '../components/stats6'
import Features22 from '../components/features22'
import Testimonial9 from '../components/testimonial9'
import Contact11 from '../components/contact11'
import Footer3 from '../components/footer3'
import { useGlobalContext } from '@/global-context'

const Home = (props) => {
  const translate = useTranslations()
  const { locale, locales } = useGlobalContext()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>ousos althiqa</title>
          <meta property="og:title" content="ousos althiqa" />
        </Head>
        <Navbar5
          link1={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T7wk1h'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VekG4G'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jdbaLz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kAeuT6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fdBNRr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4k8ej6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-CEGLw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link1Url="#Hero15"
          link2Url="#Features22"
        ></Navbar5>
        <Hero15
          action3={
            <Fragment>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_V7n1Dw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gFt5RB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MSsx9g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          hero15Id="Hero15"
        ></Hero15>
        <Stats6
          stat1={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1hG_kp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          stat2={
            <Fragment>
              <span className="home-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eUA2nL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          stat3={
            <Fragment>
              <span className="home-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_I6CpF3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DhjTfx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iT5wBL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="stats6root-class-name"
          stat1Description={
            <Fragment>
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-iA2ns'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          stat2Description={
            <Fragment>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JegwQF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          stat3Description={
            <Fragment>
              <span className="home-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E3lp9v'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Stats6>
        <Features22
          content1={
            <Fragment>
              <span className="home-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M_v3uj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EqCdUS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          features22Id="Features22"
          feature1Title={
            <Fragment>
              <span className="home-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Cu8qd6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R10sN0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_btWrXR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature4Title={
            <Fragment>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XO4b80'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature5Title={
            <Fragment>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_n-v3hS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature6Title={
            <Fragment>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a9siFS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature7Title={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JbYmua'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature8Title={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b_leHO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="features22root-class-name"
          feature1Description={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_moJXMj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wDDvCq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4bRe1i'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature4Description={
            <Fragment>
              <span className="home-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XsiHlS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature5Description={
            <Fragment>
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_B8eosI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature6Description={
            <Fragment>
              <span className="home-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fLKLmd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature7Description={
            <Fragment>
              <span className="home-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kcoDOV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature8Description={
            <Fragment>
              <span className="home-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AZu86J'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features22>
        <Testimonial9
          review1={
            <Fragment>
              <span className="home-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JqBYi3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E4Q35N'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A96-GW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_neD2PH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_59fmyi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mEHMYk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QU7g_L'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uTl-gi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E-oadL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nnrLnd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P2z0_f'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ynh6FL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aZ9a4u'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BPtUI7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Testimonial9>
        <Contact11
          email={
            <Fragment>
              <span className="home-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MwNbHI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          phone1={
            <Fragment>
              <span className="home-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vXrGRi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          address1={
            <Fragment>
              <span className="home-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Dlj949'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7qnVSe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BhXYeR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HL2bh9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content5={
            <Fragment>
              <span className="home-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sCSfMk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wiByME'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Contact11>
        <Footer3
          link1={
            <Fragment>
              <span className="home-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b5Heqn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bCIA9w'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IAQGfM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VC4xcd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_w-lKIy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text73">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xTJHoR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text74">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LbeObx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text75">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rEFWPh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer3>
        <div
          data-thq="thq-dropdown"
          className="home-language-switcher list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="home-language-switcher-toggle"
          >
            <span className="home-language-name">{locale?.['name']}</span>
            <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow">
              <svg viewBox="0 0 1024 1024" className="home-icon1">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="home-language-switcher-list"
          >
            <div>
              {locales.map((all_languages, index) => (
                <Fragment key={index}>
                  <div className="home-language-switcher-item">
                    <span>{all_languages?.name}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text31 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            font-size: 33px;
          }
          .home-text32 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            font-size: 25px;
          }
          .home-text33 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text34 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text35 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text36 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text37 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text38 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text39 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text40 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-language-switcher {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .home-language-switcher-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .home-language-name {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .home-dropdown-arrow {
            transition: 0.3s;
          }
          .home-icon1 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .home-language-switcher-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .home-language-switcher-item {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #fff;
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}

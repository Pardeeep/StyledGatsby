import React from "react"

import Navbar from "./components/Navbar"
import Header from "./components/header"

import { createGlobalStyle } from "styled-components"
import Layout from "./components/layout"

const GlobalStyle = createGlobalStyle`
    body{
    margin: 0;
    padding: 0;
    font-family: "Roboto";
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1011%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(244%2c 247%2c 253%2c 1)'%3e%3c/rect%3e%3cpath d='M751.69 299.3a31.11 31.11 0 1 0 17.93 59.58z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M695.69 287.66a13.21 13.21 0 1 0-19.05 18.31z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M160.08 450.46L182.95 450.46L182.95 450.91L160.08 450.91z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1336.96 479.9L1371.72 479.9L1371.72 514.66L1336.96 514.66z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M737.38 49.08 a13.2 13.2 0 1 0 26.4 0 a13.2 13.2 0 1 0 -26.4 0z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M339.43 178.95L382.49 178.95L382.49 222.01L339.43 222.01z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M330.56 130.28a37.95 37.95 0 1 0-75.02-11.51z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1426.26 472.79L1448.24 472.79L1448.24 494.77L1426.26 494.77z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M697.04 318.2L701.24 318.2L701.24 359.47L697.04 359.47z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1043.54 144.51L1089.77 144.51L1089.77 173.89L1043.54 173.89z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M194.2 109.81L247.3 109.81L247.3 163.76L194.2 163.76z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1136.91 100.43L1158.23 100.43L1158.23 112.9L1136.91 112.9z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M747.55 76.3L747.61 76.3L747.61 86.83L747.55 86.83z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1235.6 155.27 a6.3 6.3 0 1 0 12.6 0 a6.3 6.3 0 1 0 -12.6 0z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M125.18 327.5a55.69 55.69 0 1 0 44.32-102.19z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1066.34 437.23L1106.3 437.23L1106.3 477.19L1066.34 477.19z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1436.08 99.44L1487.29 99.44L1487.29 143.06L1436.08 143.06z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M264.86 409.54L296.07 409.54L296.07 460.6L264.86 460.6z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M747.73 211.63L756.32 211.63L756.32 227.39L747.73 227.39z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M107.43 492.64 a25.67 25.67 0 1 0 51.34 0 a25.67 25.67 0 1 0 -51.34 0z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M891.32 286.72L892.37 286.72L892.37 287.77L891.32 287.77z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M103 35.64 a48.84 48.84 0 1 0 97.68 0 a48.84 48.84 0 1 0 -97.68 0z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1203.92 477.39L1246.95 477.39L1246.95 520.42L1203.92 520.42z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M54.56 477.87a32.97 32.97 0 1 0 64.98 11.24z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M189.89 6.19 a25.13 25.13 0 1 0 50.26 0 a25.13 25.13 0 1 0 -50.26 0z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M62.4 126.15 a39.22 39.22 0 1 0 78.44 0 a39.22 39.22 0 1 0 -78.44 0z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1037.04 446.24a51.86 51.86 0 1 0-88.93-53.38z' fill='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M484.34 489.27L504.72 489.27L504.72 524.9L484.34 524.9z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M1011.26 90.4 a47.49 47.49 0 1 0 94.98 0 a47.49 47.49 0 1 0 -94.98 0z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M550.48 48.56 a31.68 31.68 0 1 0 63.36 0 a31.68 31.68 0 1 0 -63.36 0z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M251.65 304.08L302.75 304.08L302.75 326.71L251.65 326.71z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M290.95 374.22L339.9 374.22L339.9 386.07L290.95 386.07z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3cpath d='M845.18 248.54a48.88 48.88 0 1 0-76.79 60.5z' stroke='rgba(253%2c 136%2c 3%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1011'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    backdrop-filter: blur(5px);

    overflowx: hidden;
  }
`

export default function UsersList() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <Header />
      </Layout>
    </>
  )
}

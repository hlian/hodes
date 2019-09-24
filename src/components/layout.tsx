import React, { ReactNode } from 'react'
import styled from 'styled-components'

import DefaultLayout from './defaultLayout'
import './layout2.css'

interface Props {
  className?: string
  children?: ReactNode
}

const Side = styled.aside`
  position: relative;

  header {
    text-transform: uppercase;
    text-decoration: underline;
    margin-bottom: 0.45rem;
  }
  header:after {
    clear: both;
  }
  section + section {
    margin-top: 1.45rem;
  }

  padding: 2rem;
  padding-left: 1.5rem;
  font-size: 11px;
  line-height: 29px;
`

const Layout_ = styled.section`
  display: flex;
  flex-direction: row;
  font-family: system-ui, -apple-system, sans-serif;
  align-items: flex-start;

  ${Side} {
    margin-top: 3rem;
    margin-right: 4rem;
    flex-basis: 15rem;
  }
  main {
    position: relative;
    margin-top: 3rem;
    padding-top: 3rem;
    padding-right: 4rem;
    padding-left: 4rem;
    flex: 1 1 0;
    max-width: 40rem;
  }

  h2 {
  }
  pre {
    white-space: pre-wrap;
  }
`

const Marquee = styled('marquee' as any)`
  text-transform: uppercase;
  font-size: 11px;
  padding: 1rem 0;
  font-family: system-ui, -apple-system, sans-serif;
  opacity: 0.5;
`

const Layout = ({ children, className }: Props) => (
  <>
    <Marquee>spoke_proof is a website nobody asked for</Marquee>
    <Layout_ className={className}>
      <Side>
        <section>
          <header>Chess openings</header>
          <strong>English</strong> &bull;&nbsp;c4 (c5?)
          <br />
          <strong>French</strong> &bull;&nbsp;e4 e6 &bull;&nbsp;d4 d5
          <br />
          <strong>King&rsquo;s Gambit</strong> &bull;&nbsp;e4 e5 &bull;&nbsp;f4
          (exf4?)
          <br />
          <strong>Queen&rsquo;s Gambit</strong> &bull;&nbsp;d4 d5 &bull;&nbsp;c4
          (dxc4?)
          <br />
          <strong>The Sodium Attack</strong> &bull;&nbsp;Na3?!
        </section>
        <section>
          <header>Posts</header>
          <ul>
            <li>
              <a href="/blog/traversals">traversals in haskell</a>
            </li>
          </ul>
        </section>
      </Side>
      <main>
        <div>
          <DefaultLayout>{children}</DefaultLayout>
        </div>
      </main>
    </Layout_>
  </>
)

export default Layout

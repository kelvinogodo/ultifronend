import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {BsStar} from 'react-icons/bs'
import 'react-vertical-timeline-component/style.min.css';
const Roadmap = () => {
  return (
    <div className='roadmap-section'>
       <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
    date="1991 - present"
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
  >
    <h4 className="vertical-timeline-element-subtitle">STARWOOD CAPITAL HISTORY</h4>
    <p>
      Barry Sternlicht launches Starwood Capital
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1992"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
  >
    <p>
      Starwood Opportunity Funds I and IA (SOF I and IA) close at $52M
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1993"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
  >
    <p>
      SOF I/IA contribute the majority of their multifamily portfolio to Equity Residential (NYSE: EQR)—which goes on to become the largest publicly traded apartment owner in the U.S., with Mr. Sternlicht serving on its Board of Directors

Starwood Opportunity Fund II (SOF II) closes at $102M
    </p>
    </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="1994"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
    
            <p>
            Starwood Capital, via an affiliate, acquires a majority of the distressed senior debt of Hotel Investors Trust, thus setting the stage for the Firm’s emergence as a global leader in the hospitality space

Starwood Mezzanine (SOF III) Investors closes at $220M
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1995"
            contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
            iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
            icon={<BsStar />}
            contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Starwood Capital creates Starwood Hotels & Resorts Worldwide (NYSE: HOT) and Mr. Sternlicht becomes Chairman and CEO

Starwood Capital purchases Westin Hotels & Resorts and begins a new growth phase for the business


            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="1997"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Starwood Opportunity Fund IV (SOF IV) closes at $830M
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1998"
            contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
            iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
            icon={<BsStar />}
            contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Starwood Capital creates Starwood Financial, subsequently renamed iStar Financial (NYSE: STAR), which becomes one of the largest publicly traded real estate finance companies in the U.S.

            Starwood Hotels & Resorts Worldwide completes the $14B acquisition of ITT Sheraton, making the company the largest hotel operator in the world

            First W Hotel opens in New York
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="1999"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
          Starwood Opportunity Fund V closes at $516M

Starwood Capital makes its first non-hotel investments in Europe (London) and in Asia (Japan and Thailand)
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="2000"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Starwood Hotels & Resorts Worldwide is added to the S&P 500 Index
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="2002"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
          Starwood Opportunity Fund VI (SOF VI) closes at $567M
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="2003"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Starwood Capital, via an affiliate, takes National Golf Properties (NYSE: TEE) private

Starwood Capital opens an office in London—marking the beginning of the Firm’s significant expansion of the Firm’s international operations that also includes a Luxembourg hub with responsibility for all European investments in Starwood Capital funds


            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="2005"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Mr. Sternlicht returns to Starwood Capital full time as Chairman and CEO

Starwood Capital Hospitality Fund I (Hotel I) closes at approximately $900M

Starwood Capital funds complete the $3.2B acquisition of Groupe Taittinger and Société du Louvre

Starwood Global Opportunity Fund VII (SOF VII) closes at $1.475B
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="2006"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Starwood Capital sells Taittinger champagne company, which was part of the Groupe Taittinger/Société du Louvre acquisition
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="2008"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
           Starwood Energy Infrastructure Fund (SEIF I) closes at $433M

The Visionaire, developed by Starwood Capital via an affiliate, becomes Manhattan’s first Platinum LEED-certified condominium project

Starwood Capital, via an affiliate, launches Starwood Land Ventures, which goes on to become one of the leading providers of residential sites to the U.S. homebuilding industry
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
    date="2009"
    contentStyle={{ background: '#f2f2f2', color: 'rgba(81, 46, 95, 1)' }}
    iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
    icon={<BsStar />}
    contentArrowStyle={{ borderRight: '7px solid  #f2f2f2' }}
        >
            <p>
          Starwood Debt Fund II closes at $378M

Starwood Capital creates Starwood Property Trust (NYSE: STWD), a leading diversified finance company that is the largest blind pool company ever listed on the NYSE

Starwood Capital leads a consortium in acquiring Corus Bank’s $4.5B face-value loan portfolio from the FDIC in one of the government’s largest distressed debt transactions during the Great Recession
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgba(81, 46, 95, 1)',  color: '#f2f2f2' }}
            icon={<BsStar />}
        />
        </VerticalTimeline>
    </div>
  )
}

export default Roadmap
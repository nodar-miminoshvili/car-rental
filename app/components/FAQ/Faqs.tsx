'use client';

import { useState } from 'react';
import ExpandablePanel from './ExpandablePanel';

const Faqs = () => {
  const [isExpanded, setIsExpanded] = useState<Panels>('panel2');

  const handleExpand = (panel: Panels) => {
    setIsExpanded(p => {
      return p === panel ? false : panel;
    });
  };

  return (
    <div className="min-h-[48rem] xs:min-h-[38rem] sm:min-h-[30rem] md:min-h-[26rem] lg:min-h-[24rem]">
      <ul className="bg-white shadow-md rounded-md overflow-hidden max-w-[50rem] mx-auto">
        <ExpandablePanel
          panel="panel1"
          question="1. What is special about comparing rental car deals?"
          answer="Comparing rental car deals is important as it helps find the best deal that fits
        your budget and requirements, ensuring you get the most value for your money. By
        comparing various options, you can find deals that offer lower prices, additional
        services, or better car models. You can find car rental deals by researching online
        and comparing prices from different rental companies."
          handleExpand={() => handleExpand('panel1')}
          isExpanded={isExpanded}
        />
        <ExpandablePanel
          panel="panel2"
          question="2. How do I find the car rental deals?"
          answer="You can find car rental deals by researching online and comparing prices from
                different rental companies. Websites such as Expedia, Kayak, and Travelocity allow
                you to compare prices and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on social media to be
                informed of any special deals or promotions."
          handleExpand={() => handleExpand('panel2')}
          isExpanded={isExpanded}
        />
        <ExpandablePanel
          panel="panel3"
          question="3. How do I find such low rental car prices?"
          answer="Book in advance: Booking your rental car ahead of time can often result in lower
                prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or
                Travelocity to compare prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that you can use to lower
                the rental price. Renting from an off-airport location can sometimes result in lower
                prices."
          handleExpand={() => handleExpand('panel3')}
          isExpanded={isExpanded}
        />
      </ul>
    </div>
  );
};

export default Faqs;

import React from 'react';
import { Accordion } from 'flowbite-react';

const Accordian = () => {
  return (
    <div className="m-4 text-left max-w-screen-xl xl:mx-auto lg:px-4">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>What kind of services do you offer?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our all-encompassing service includes help for: Grammar, Typos,
              Punctuation, Spelling, and detailed editing for sentence
              structure, tone, word choice, and referencing style, among others.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title> How much will your service cost?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our affordable pricing is easy on your pocket. Typically, it
              depends upon your document’s word count and delivery deadline.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What if I am unhappy with the quality?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Well, this is very unlikely, given the excellent quality of our
              editors. Yet, our editors are humans too and the odd oversight
              cannot be ruled out. In case you’re not happy with the edit, we’ll
              work out a solution that is mutually agreeable and suitable.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How do I place an order?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Placing an order with us takes less than 3 minutes and just 2
              steps. Just click on 'Order Now' and upload the document you wish
              to get edited.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is the service confidential?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, it is! We treat your personal information with the utmost
              respect, maintaining 100% confidentiality about every little
              detail of your work.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Will your service be available on weekend?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our prompt and inexpensive services are available to you
              round-the-clock, 24 hours a day and 7 days a week. Our expert
              editors and proofreaders work on your documents from Monday to
              Sunday so that you never miss a deadline.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Accordian;

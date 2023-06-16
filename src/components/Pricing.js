import React from 'react';

const PricingComponent = () => {
  return (
    <div className='m-4 max-w-screen-xl xl:mx-auto lg:px-4'>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className=" z-0">Services</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Line Editing (most popular)</td>
              <td>$0.010/word</td>
            </tr>

            <tr className="active">
              <td>Content Writing</td>
              <td>$0.05/word</td>
            </tr>

            <tr>
              <td>Developmental Editing</td>
              <td>$0.015/word</td>
            </tr>
            <tr className="active">
              <td>Proofreading</td>
              <td>$0.008/word</td>
            </tr>
            <tr>
              <td>Beta Reading</td>
              <td>$0.003/word</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingComponent;

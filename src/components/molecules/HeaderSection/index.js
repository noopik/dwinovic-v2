import React from 'react';
import { Button, Heading, Icon, Paragraph } from '../../atoms';

const HeaderSection = ({
  btnTitle,
  heading,
  desc,
  btnInfo,
  btnSosmed,
  icon,
  hover,
}) => {
  return (
    <div className="bg-gray-500 h-72 flex items-center">
      <div className="box-border p-10  flex flex-col items-center justify-center container mx-auto space-y-8">
        <Heading text={heading} as={1} color="text-white" />
        {desc && (
          <Paragraph
            text={desc}
            color="white"
            addClass="text-center mt-4 tracking-wide"
            variant={16}
          />
        )}
        {btnInfo && (
          <div className="bg-yellow-600 py-0.5 px-4 rounded-full">
            <p className="font-poppins tracking-wide text-black-600">
              {btnTitle}
            </p>
          </div>
        )}
        {btnSosmed && (
          <div className="flex space-x-4">
            <Icon icon="linkedin-light" hover="dark" circle />
            <Icon icon="twitter-light" hover="dark" circle />
            <Icon icon="medium-light" hover="dark" circle />
            <Icon icon="instagram-light" hover="dark" circle />
          </div>
        )}
        {!btnInfo && !btnSosmed && (
          <Button title={btnTitle} yellow btnIcon icon="download" />
        )}
      </div>
    </div>
  );
};

export default HeaderSection;

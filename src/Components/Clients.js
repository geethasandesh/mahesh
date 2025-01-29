import React from 'react';

const ClientLogos = () => {
  const clientNames = ['Web Development', 'App Development', 'Marketing','Editing','Content Creation','Photography','Analysis'];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-12">
      {clientNames.map((name, index) => (
        <div key={index} className="text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl">
          {name}
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;
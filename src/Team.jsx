import React from "react";

const TeamMember2 = ({ imageSrc, name, role }) => (
  <li className="flex flex-col items-center">
    <img
      className="w-40 h-40 rounded-full border-8 border-white shadow-lg object-cover"
      src={imageSrc}
      alt={name}
    />
    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-blue-900">
      {name}
    </h3>
    <p className="text-base leading-7 text-red-700">{role}</p>
  </li>
);

const TeamNew = () => {
  const teamMembers = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
    },

    // ... (other team members)
  ];

  return (
    <div className="bg-gray-50  py-20 mt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-20">
          <h2 className="text-3xl font-notos tracking-tight text-blue-900 sm:text-5xl ml-14">
            Our Leadership Team
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <TeamMember2 key={index} {...member} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamNew;

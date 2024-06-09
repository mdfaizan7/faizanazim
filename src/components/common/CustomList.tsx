import React from "react";

interface Props {
  sectionId: string;
  sectionName: string;
  CardComponent: any;
  data: any[];
  dataKey: string;
}

const CustomList = (props: Props) => {
  const { sectionId, sectionName, CardComponent, data, dataKey } = props;

  return (
    <section
      id={sectionId}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#051821]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {sectionName}
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {data.map((it) => (
            <li className="mb-12" key={dataKey}>
              <CardComponent {...it} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CustomList;

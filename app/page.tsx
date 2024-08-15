// import dynamic from 'next/dynamic';

// const DynamicSurveyComponent = dynamic(() => import('@/components/SurveyComponent'), {
//   ssr: false,
// });

// export default function Index() {
//   return (
//     <div className="w-full flex flex-col items-center">
//       <DynamicSurveyComponent />
//     </div>
//   );
// }


import SurveyComponent from "@/components/SurveyComponent";

export default async function Index() {


  return (
    <div className="w-full flex flex-col items-center">

      <SurveyComponent></SurveyComponent>

    </div>
  );
}

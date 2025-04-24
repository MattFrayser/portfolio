export default function Experience() {

  return (

    <div className="experience px-20">
    <div className="p-2 mx-auto py-4">

      <h1 className="header-light">Experience</h1>
      
      <div className="relative px-10">

      {/* Line */}
      <div className="absolute left-[70] top-10 bottom-20 w-0.5 bg-gray-500 transform -translate-x-1/2"></div>

      {/* Experience 1 */}

      <div className="flex py-4 gap-4 mb-6 pb-6 relative">
        <div className="w-16 h-16 flex-shrink-0 rounded-3xl overflow-hidden bg-gray-100">
          <img 
            src="codeNinjas.jpg" 
            alt="Code Ninjas Logo"
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="px-4  flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold">Code Ninjas</h3>
            <span className="text-sm">March 2023 - Current</span>
          </div>
          <p className="">Head Instructor</p>
          <ul className="py-2">
            <li>Led development of unit/integration test frameworks using TDD principles.</li>
            <li>Authored technical documentation on debugging and test practices.</li>
          </ul>
        </div>
      </div>

      {/* Experience 2 */}

      <div className="flex py-2 gap-4 mb-6 pb-6 relative">
        <div className="w-16 h-16 flex-shrink-0 rounded-3xl overflow-hidden bg-gray-100">
          <img 
            src="Publix.png" 
            alt="Publix Logo Logo"
            className="w-full h-full object-cover"
            
          />
        </div>
        <div className="px-4  flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold">Publix</h3>
            <span className="text-sm">Jan 2020 - April 2023</span>
          </div>
          <p className="">Front-End Coordinator</p>
          <ul className="py-2">
            <li>Managed a team of 10+ employees, ensuring error-free financial reporting and transaction accuracy.</li>
            <li>Provided troubleshooting and frontline tech support for point-of-sale system issue.</li>
          </ul>
        </div>
      </div>


      </div>
    </div>

    </div>

  );
}
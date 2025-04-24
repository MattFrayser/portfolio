export default function Experience() {
  return (
    <div className="experience px-4 sm:px-10 md:px-20"> {/* Responsive padding */}
      <div className="p-2 mx-auto py-4">
        <h1 className="text-3xl md:text-4xl font-light mb-6">Experience</h1> {/* Responsive text */}
        
        <div className="relative md:px-5"> {/* Only add side padding on medium+ screens */}

          {/* Experience 1 */}
          <div className="flex flex-col sm:flex-row py-4 gap-4 relative"> {/* Stack on mobile, row on sm+ */}
            <div className="w-16 h-16 flex-shrink-0 rounded-3xl overflow-hidden bg-gray-100 mx-auto sm:mx-0"> {/* Center on mobile */}
              <img 
                src="codeNinjas.jpg" 
                alt="Code Ninjas Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-0 sm:px-4 flex-1"> {/* Remove side padding on mobile */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2"> {/* Stack date on mobile */}
                <h3 className="text-xl font-bold">Code Ninjas</h3> {/* Larger text */}
                <span className="text-sm text-gray-600">March 2023 - Current</span>
              </div>
              <p className="text-lg mb-2">Head Instructor</p> {/* Slightly larger */}
              <ul className="space-y-1 text-base"> {/* Better spacing between bullets */}
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0">Led development of unit/integration test frameworks using TDD principles.</li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0">Authored technical documentation on debugging and test practices.</li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col sm:flex-row py-4 gap-4 mb-6 pb-6 relative">
            <div className="w-16 h-16 flex-shrink-0 rounded-3xl overflow-hidden bg-gray-100 mx-auto sm:mx-0">
              <img 
                src="Publix.png" 
                alt="Publix Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-0 sm:px-4 flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <h3 className="text-xl font-bold">Publix</h3>
                <span className="text-sm text-gray-600">Jan 2020 - April 2023</span>
              </div>
              <p className="text-lg mb-2">Front-End Coordinator</p>
              <ul className="space-y-1 text-base">
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0">Managed a team of 10+ employees, ensuring error-free financial reporting.</li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0">Provided troubleshooting and frontline tech support for point-of-sale system issues.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
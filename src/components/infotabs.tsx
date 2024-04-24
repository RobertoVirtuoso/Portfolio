import Image from "next/image";

export const infotabs = [
   {
     title: "Eurofins PSS",
     value: "Eurofins PSS",
     content: (
       <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-blue-300 to-blue-800 grid-flow-row">
        <div className="flex items-center">
      <Image
      src="/Eurofins_Scientific_Logo.svg.png"
      alt="dummy image"
      width="150"
      height="150"
    />
     <Image
      src="/logo-kite.png"
      alt="dummy image"
      width="150"
      height="150"
    />
    </div>
         <p className="font-light p-4">Worked with a cohesive team responsible for all weekly EM sampling activities ~4000+ samples.</p>
         
         <p className="font-thin p-1">Understand processes thoroughly to become a qualified trainer.</p>
         <p className="font-thin p-1">Worked on a project with other technicians to create faster workflows and mitigate delays.</p>
         <p className="font-thin p-1">Take initiative and responsibility for relevant topics ensuring test data and other relevant documentation are completed correctly and on time.</p>
       </div>
     ),
   },
   {
     title: "Eurofins Clinical Diagnostics",
     value: "Eurofins Clinical Diagnostics",
     content: (
       <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-orange-400">
      <Image
      src="/Eurofins_Scientific_Logo.svg.png"
      alt="dummy image"
      width="150"
      height="150" 
    />
         <p className="font-extralight p-4">Guiding a 12-member PCR extraction team to consistently deliver exceptional results through precision and collaboration.</p>
         
         <p className="font-thin p-1">Lead major changes and other consultation moments, such as implementing new equipment or processes.</p>
         <p className="font-thin p-1">Worked on a project with other technicians to create faster workflows and mitigate delays.</p>
         <p className="font-thin p-1">Report to higher management on the progress of operational processes and relay feedback to the team.</p>
       </div>
     ),
   },
   {
     title: "Oxford Global Resources",
     value: "Oxford Global Resources",
     content: (
       <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl sm:text-lg font-bold text-white bg-gradient-to-br from-slate-900 to-yellow-200">
      <Image
      src="/oxfordlogo.webp"
      alt="dummy image"
      width="150"
      height="150"
    />
         <p className="font-light p-4">Assisted in sample management, preparing samples for further analysis and warehouse activities.</p>
         
         <p className="font-thin p-1">Testing and calibrating equipment in preperation for specific tasks.</p>
         <p className="font-thin p-1">Validation and quality control tests.</p>
         <p className="font-thin p-1">Identifying and reporting deviations within the process.</p>
       </div>
     ),
   },  {
    title: "GxP experience",
    value: "Gxp",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl sm:text-lg font-bold text-white bg-gradient-to-br from-indigo-800 to-violet-900">
      <div className="flex items-center justify-between"> 
     <Image src="/5.png"     alt="dummy image"     width="200"     height="200" />
     <Image src="/agilent.png"     alt="dummy image"     width="200"     height="200" />
     <Image src="/MG.png"     alt="dummy image"     width="200"     height="200" />
     <Image src="/veeva.png"     alt="dummy image"     width="200"     height="200" />
     </div>
    <p className="font-light p-4">
      Bringing a fair amount of experience in the pharmaceutical industry, I excel in adhering to GxP practices in both in strict GMP (Grade A/ISO 5) or clinical settings, adhering to (GMP) standards is not just a regulatory requirement but a cornerstone of ensuring quality, safety, and reliability in your operations. I'm no stranger in maintaining stringent documentation practices from sample preperation to the final steps of analysis.
      <p>This is not limited to only regulatory requirements but extends into, Having an up to date Quality management system, Facility and Equipment Compliance, Documentation Practices, Adequate controls for Data Integrity and regular internal auditory moments.</p>
 </p>
    </div>
    ),
  },
   {
    title: "Leadership & Strategy",
    value: "Organizational",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl sm:text-lg font-bold text-white bg-gradient-to-br from-red-700 to-zinc-600">
     <Image
     src="/RLC.webp"
     alt="dummy image"
     width="250"
     height="250"
   />
    <p className="font-light p-4">In my starting journey within the pharmaceutical sector, I've begun cultivating leadership and strategic skills by steering a small, dedicated team. I facilitated collaboration and aligned our efforts with organizational goals. Through trainings, managagement 1-1's and hands-on experience, I've developed the knack for making informed decisions under pressure, motivating team members, and adapting strategies to meet the ever-evolving demands. </p>
    </div>
    ),
  },
  {
    title: "Programming",
    value: "Program",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl sm:text-lg font-bold text-white bg-gradient-to-br from-cyan-800 to-yellow-300">
     <div className="flex items-center justify-between">
     <Image src="/Python.png"     alt="dummy image"     width="50"      height="50" />
     <Image src="/spss.png"     alt="dummy image"     width="50"      height="50" />
     <Image src="/VB.png"     alt="dummy image"     width="50"      height="50" />
     <Image src="/R.png"     alt="dummy image"     width="50"     height="50" />
     <Image src="/sql.png"     alt="dummy image"     width="70"     height="70" />
     <Image src="/1.svg"     alt="dummy image"     width="50"     height="50" /> 
     <Image src="/3.png"     alt="dummy image"     width="200"     height="200" />
     
     </div>
    <p className="font-light p-9">
    Learned SQL for data-quering in LIMS and for efficient relatational database management. Some python for automation and data analysis using Pandas and NumPy for data manipulation and matplotlib for visualization. Brief R experience for quick statistical analysis. I like to to combine these technologies and execute end to end data workflows, ensuring comprehensive solutions.
    </p>
    </div>
    ),
  },
  {
    title: "Full-Stack Development",
    value: "program",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl sm:text-lg font-bold text-white bg-gradient-to-br from-green-800 to-slate-600">
     <div className="flex items-center justify-between">
     <Image src="/html.svg"     alt="dummy image"     width="50"      height="50" />
     <Image src="/next.svg"     alt="dummy image"     width="75"      height="75" />
     <Image src="/css.png"     alt="dummy image"     width="50"      height="50" />
     <Image src="/react.png"     alt="dummy image"     width="50"     height="50" />
     <Image src="/node.png"     alt="dummy image"     width="50"     height="50" />
     <Image src="/postgre.png"     alt="dummy image"     width="50"     height="50" />
     <Image src="/npm.png"     alt="dummy image"     width="75"     height="75" />
     <Image src="/react.png"     alt="dummy image"     width="50"     height="50" />
     </div>
    <p className="font-light p-9">
    I began my deep-dive into full-stack development because I want to understand the difficulties we were facing with our own LIMS systems and how to overcome them, and in the future be able to create my own LIMS system from scratch. During this I learned HTML, CSS, JS and PHP.
    <p> I learned about frameworks such as React.js Node.js, Postgre & MongoDB, API's and Realtime Communication Sockets. I still have to learn web security especially because the healthcare standards in the Netherlands are quite strict. Although I have learned a lot I still have quite the way to go if you're interested in seeing some of my projects contact me.</p>
    </p>
    </div>
    ),
  },

  
 ];
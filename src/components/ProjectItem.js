import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techList = technologies.map(tech=>{
    return<span key={tech}>{tech}</span>
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techList}</div>
    </div>
  );
}

// {[technologies].map((tech)=>{
//   tech.map((t,index)=>{
//     console.log(t)
//     return <span key={index}>{t}</span>
//   })
// })}

export default ProjectItem;

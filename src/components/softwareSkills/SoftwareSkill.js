import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {Icon} from "@iconify/react";
import * as simpleIcons from "simple-icons"; 

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skills, i) => {
          const iconKey = skills.fontAwesomeClassname.split(":")[1];

          const iconObjectName = `si${iconKey
            ?.charAt(0)
            .toUpperCase()}${iconKey?.slice(1)}`;

          const iconData = simpleIcons[iconObjectName];

          const color = iconData ? `#${iconData.hex}` : "#000000";

          return (
            <li
              key={i}
              className="software-skill-inline"
              name={skills.skillName}
              style={{color}}
            >
              <Icon icon={skills.fontAwesomeClassname} width="45" height="45" />
              <p>{skills.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import {
  Wrapper,
  MainContent,
  MainContentTitel,
  MyProfession,
  MyName,
  MyDescr,
  AboutMeConteiner,
  ProjectItem,
  ProjectLst,
  ProjectConteiner,
  ProjectItemDescr,
  ProjectItemLink,
  EducationList,
  EducationItem,
  WorkExperienceContainer,
  WorkExperiencePosition,
  WorkExperiencePres,
  WorkExperienceCompani,
  WorkPeriod,
  SidearTitel,
  MyPhoto,
  Sidear,
  SidearCont,
  ContactsType,
  Contacts,
  SkillsList,
  SkillsListI,
  SkillsListT,
} from './App.style';

export const App = () => {
  return (
    <div>
      <head>
        <title>My resume</title>
      </head>
      <body>
        {/* Wrapper   */}
        <Wrapper>
          {/* Main content  */}

          <MainContent>
            {/* About me  */}
            <AboutMeConteiner>
              <MyProfession>Full-stack developer</MyProfession>
              <MyName>Sharyak Oleksandr</MyName>

              <MyDescr>
                Hello, I am a non-conflictual and calm person, like to learn
                something new and develop, believe that you should not stop on
                the way to the goal, even if everything does not go as you
                originally planned.
              </MyDescr>
            </AboutMeConteiner>

            {/* My Projects  */}
            <ProjectConteiner>
              <MainContentTitel>Projects</MainContentTitel>
              <ProjectLst>
                <ProjectItem>
                  <p>Team project</p>
                  <ProjectItemLink
                    href="https://github.com/Kotiko-UA/team17-we-can-do-it-project"
                    target="_blank"
                  >
                    Link to GitHub
                  </ProjectItemLink>
                  <ProjectItemDescr>
                    A shop of watches. Roule:developer. [ JavaScript , CSS ,
                    HTML]
                  </ProjectItemDescr>
                </ProjectItem>
                <ProjectItem>
                  <p>Solo project</p>
                  <ProjectItemLink
                    href="https://github.com/OleksandrSHAR/goit-react-hw-05-movies"
                    target="_blank"
                  >
                    Link to GitHub
                  </ProjectItemLink>
                  <ProjectItemDescr>
                    Movie site. Roule:developer. [React , HTML]
                  </ProjectItemDescr>
                </ProjectItem>
                <ProjectItem>
                  <p>Solo project</p>
                  <ProjectItemLink
                    href="https://github.com/OleksandrSHAR/goit-react-hw-08-phonebook"
                    target="_blank"
                  >
                    Link to GitHub
                  </ProjectItemLink>
                  <ProjectItemDescr>
                    Phonebook.Roule:developer. [ React.js, Node.js ]
                  </ProjectItemDescr>
                </ProjectItem>
              </ProjectLst>
            </ProjectConteiner>

            {/* Work experience  */}
            <WorkExperienceContainer>
              <h3>Work Experience</h3>
              {/* Company 1   */}
              <WorkExperiencePres>
                <WorkExperienceCompani>
                  Zorya-Mashproekt / Electrician
                </WorkExperienceCompani>

                <WorkPeriod>September/2020 - October/2021</WorkPeriod>
                <ul class="work-duties-list">
                  <WorkExperiencePosition>
                    Maintenance and repair of electrical appliances
                  </WorkExperiencePosition>
                  <WorkExperiencePosition>
                    Strict adherence to safety rules
                  </WorkExperiencePosition>
                </ul>
              </WorkExperiencePres>
              {/* Company 2   */}
              <WorkExperiencePres>
                <WorkExperienceCompani>
                  Armed Forces of Ukraine / Military
                </WorkExperienceCompani>
                <WorkPeriod>October/2021</WorkPeriod>
                <ul class="work-duties-list">
                  <WorkExperiencePosition>Discipline</WorkExperiencePosition>
                  <WorkExperiencePosition>
                    Fulfillment of assigned tasks
                  </WorkExperiencePosition>
                  <WorkExperiencePosition>Adaptation</WorkExperiencePosition>
                </ul>
              </WorkExperiencePres>
            </WorkExperienceContainer>
            {/* Education   */}
            <div>
              <h3>Education</h3>
              <EducationList>IT School GoIT </EducationList>
              <EducationItem>Fullstack Developer 2023 - 2023</EducationItem>
              <EducationList>
                Nikolaev Professional Engineering Lyceum
              </EducationList>
              <EducationItem>
                Electrician for repair and maintenance of electrical equipment
                2018 - 2020
              </EducationItem>
            </div>
          </MainContent>
          {/* Sidebar  */}
          <Sidear>
            <MyPhoto
              width={370}
              height={400}
              src={require('./photo/photo1.png')}
            />
            {/* Contacts   */}
            <SidearCont>
              <SidearTitel>Contacts:</SidearTitel>
              <p class="contats-item">
                <ContactsType>Mobile:</ContactsType>
                <Contacts href="tel:+388888888888" class="contacts-number">
                  +38 0953566694
                </Contacts>
              </p>
              <p class="contats-item">
                <ContactsType>Mail:</ContactsType>
                <Contacts
                  href="mailto:t.goitinskiy@gmail.com"
                  class="contacts-email"
                >
                  oleksandrsharyak@gmail.com
                </Contacts>
              </p>
              <p class="contats-item">
                <ContactsType>Git:</ContactsType>
                <Contacts
                  href="https://github.com/OleksandrSHAR"
                  target="_blank"
                >
                  GitHub
                </Contacts>
              </p>
              <p class="contats-item">
                <ContactsType>LinkedIn:</ContactsType>
                <Contacts
                  href="https://www.linkedin.com/in/oleksandr-sharyak-b72a47289/"
                  target="_blank"
                >
                  In
                </Contacts>
              </p>
            </SidearCont>

            {/* Tech skills  */}
            <SidearCont>
              <SidearTitel>Tech Skills</SidearTitel>
              <SkillsList>
                <SkillsListI>
                  {' '}
                  <SkillsListT>HTML5</SkillsListT>{' '}
                </SkillsListI>
                <SkillsListI>
                  {' '}
                  <SkillsListT>CSS3</SkillsListT>{' '}
                </SkillsListI>
                <SkillsListI>
                  {' '}
                  <SkillsListT>GIT</SkillsListT>{' '}
                </SkillsListI>

                <SkillsListI>
                  {' '}
                  <SkillsListT>JavaScript</SkillsListT>{' '}
                </SkillsListI>
                <SkillsListI>
                  {' '}
                  <SkillsListT>React.js</SkillsListT>{' '}
                </SkillsListI>
              </SkillsList>
            </SidearCont>

            {/* Soft skills  */}
            <SidearCont>
              <h3 class="sidear-titel">Soft Skills</h3>
              <SkillsList>
                <SkillsListI>
                  {' '}
                  <SkillsListT>listening skills</SkillsListT>{' '}
                </SkillsListI>
                <SkillsListI>
                  {' '}
                  <SkillsListT>Adapting to situation</SkillsListT>{' '}
                </SkillsListI>
                <SkillsListI>
                  {' '}
                  <SkillsListT>Teamwork</SkillsListT>{' '}
                </SkillsListI>
              </SkillsList>
            </SidearCont>
          </Sidear>
        </Wrapper>
      </body>
    </div>
  );
};

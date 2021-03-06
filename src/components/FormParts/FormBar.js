import React from 'react';
import { Step, Icon } from 'semantic-ui-react';

function FormBar() {
  return (
    <>
      <Step id="1" active>
        <Icon name="user" />
        <Step.Content>
          <Step.Title>User Info</Step.Title>
        </Step.Content>
      </Step>

      <Step id="2" disabled>
        <Icon name="address book" />
        <Step.Content>
          <Step.Title>Address</Step.Title>
        </Step.Content>
      </Step>

      <Step id="3" disabled>
        <Icon name="graduation" />
        <Step.Content>
          <Step.Title>Education</Step.Title>
        </Step.Content>
      </Step>

      <Step id="4" disabled>
        <Icon name="briefcase" />
        <Step.Content>
          <Step.Title>Work Experience</Step.Title>
        </Step.Content>
      </Step>

      <Step id="5" disabled>
        <Icon name="tasks" />
        <Step.Content>
          <Step.Title>Skills</Step.Title>
        </Step.Content>
      </Step>

      <Step id="6" disabled>
        <Icon name="code branch" />
        <Step.Content>
          <Step.Title>Projects</Step.Title>
        </Step.Content>
      </Step>

      <Step id="7" disabled>
        <Icon name="globe" />
        <Step.Content>
          <Step.Title>Websites</Step.Title>
        </Step.Content>
      </Step>
    </>
  );
}

export default FormBar;

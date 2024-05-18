import React from 'react';

const Page = () => {
  return (
    <section id="contact">
      <h2></h2>
      <div
        className="google-form"
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Add the embed code here -->
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd-toodzG-_AI35QmrlkzIps8g7co5WX8pKLL0gPrH8Q6nffA/viewform?usp=sf_link" width="640" height="825" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          `,
        }}
      />
    </section>
  );
};

export default Page;
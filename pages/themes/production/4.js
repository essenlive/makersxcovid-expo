import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U4 = (props) => {
  return (
    <Layout title="Production">
      <Photo
        src="/photos/production/makers_maison-1-quentin_chevrier.jpg"
        alt="Factory @ Home - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Production"
          description="Factory @ Home"
          nextUrl="/themes/production/5"
          prevUrl="/themes/production/3"
        />
      </Section>
    </Layout>
  );
};

export default U4;

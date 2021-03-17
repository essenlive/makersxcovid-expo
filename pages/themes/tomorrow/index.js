import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const Tomorrow = (props) => {
  return (
    <Layout title="Demain">
      <Photo
        src="/photos/tomorrow/homemakers-1-quentin_chevrier.jpg"
        alt="Homemakers - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        dark
      />
      <Section>
        <Caption
          theme="Demain"
          description="Et si demain nous n’attendions pas la crise...?
          Cette mobilisation aura été l’expérience grandeur nature d’une coopération entre les collectivités locales et ces nouveaux espaces émergents. Tous ont innové pour activer des réseaux de fabrication décentralisée de matériel, grâce à leur communauté de bénévoles."
          nextUrl=""
          prevUrl=""
        />
      </Section>
    </Layout>
  );
};

export default Tomorrow;

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Caasosal was born from a passion for minimalist design and premium
        quality. We believe that the objects you interact with daily should
        bring joy and functionality to your life.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
        <div className="p-6 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-bold mb-3">Craftsmanship</h3>
          <p className="text-gray-600">
            We partner with artisans who share our dedication to detail and
            sustainability.
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-bold mb-3">Innovation</h3>
          <p className="text-gray-600">
            Constantly exploring new materials and forms to push the boundaries
            of modern design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

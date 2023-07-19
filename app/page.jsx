import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="flex flex-col w-full flex-center">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        Promptopia is an open-source AI prompting modern world to discover,
        create and share prompts.
      </p>


      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;

import { Link } from ".";

export const Bio = () => {
  return (
    <>
      <strong>Bio</strong>
      <div>
        I&apos;ve worked at startups over my career because I love diving into
        the wide variety of problems that you can only find at startups. I care
        deeply about providing excellent solutions for customers and finding
        hacks to boost the productivity of the engineering team.
      </div>
      <div>
        I am a lifelong learner and have picked up skills in a wide variety of
        disciplines. I have played lead guitar in a band, snowboarded down steep
        terrain, attained a top 0.5% chess.com rating, and have hit top
        percentiles in multiple games like Overwatch and Rocket League. If
        I&apos;m not coding, I&apos;m trying to get better at <i>something</i>.
      </div>
      <div>
        This site is built without using any UI/UX helpers. Check out{" "}
        <Link href="https://github.com/QuotableWater7/jtbowler.com">
          the source
        </Link>{" "}
        if you so desire.
      </div>
    </>
  );
};

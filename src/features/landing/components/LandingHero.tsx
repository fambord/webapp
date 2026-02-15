import { Button } from "@/common/ui/actions/button";
import { Card, CardContent, CardHeader } from "@/common/ui/surfaces/card";
import {
  Header1,
  Header2,
  Header3,
  Paragraph,
} from "@/common/ui/typography/typography";
import { Link } from "@tanstack/react-router";

const LandingCard = ({
  header,
  content,
}: {
  header: React.ReactNode;
  content: React.ReactNode;
}) => {
  return (
    <Card>
      <CardHeader>
        <Header3 className="text-center">{header}</Header3>
      </CardHeader>
      <CardContent>
        <Paragraph className="text-card-foreground/60">{content}</Paragraph>
      </CardContent>
    </Card>
  );
};

export const LandingHero = () => {
  return (
    <>
      <section className="container w-full mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 md:pr-8 text-center md:text-left">
          <Header1 className="bg-linear-to-r from-primary to-chart-2 text-transparent bg-clip-text">
            Fambord: Turning tasks into treasure!
          </Header1>
          <Paragraph className="font-semibold text-primary">
            Fambord is a fun and interactive app that helps kids manage their
            chores while earning points that can be redeemed for rewards.
          </Paragraph>
          <div className="my-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant={"primary"} size={"huge"}>
              Explore the Features
            </Button>
            <Button variant={"outline"} size={"huge"}>
              See what other are saying
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/logos/tree-logo-main.png"
            alt="Hero image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <LandingCard
              header="Track chores"
              content="Take care of your responsibilities with ease!"
            />
            <LandingCard
              header="Earn Rewards"
              content="Each day, you can earn points towards a weekly payout!"
            />
            <LandingCard
              header="Stay Fit"
              content="Stay fit and active to get bonus points!"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-col items-center gap-6">
          <Header2>Ready to start?</Header2>
          <Link
            to="/login"
            className="bg-highlight text-highlight-foreground py-3 px-6 rounded-lg inline-block transition duration-300"
          >
            Login
          </Link>
        </div>
      </section>
    </>
  );
};

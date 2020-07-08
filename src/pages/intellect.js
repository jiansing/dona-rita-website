import React from 'react';
import { Link } from 'gatsby';

// import { Layout } from '../components/Layout/Layout';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { FakeImg } from '../components/FakeImg/FakeImg';
import { Banner } from '../components/Banner/Banner';

import fullWidthImageRollingImg from '../images/full-width-image-rolling.jpg';
import storyImg from '../images/story.jpg';
import familyImg from '../images/family.jpg';

function StoryPage({ location }) {
	return (
		// <Layout location={location}>
		<div className="main">
			<TitleAndMetaTags title="来充电" pathname="story" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
					    量变引起质变
						<br />
						<span className="salmon">知识重在积累</span>
					</h1>
				</div>
				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-square" img={storyImg} />
					</div>
				</div>
				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<h2>
							智慧果<sup className="-yellow">&#9679;</sup>传送门：
						</h2>
					</div>

					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<p className="measure">
							试试看能学到什么新东西吧！希望你能有所收获。
						</p>
						<p>
						<a href="https://link.ofo.moe/intellect" className="button" target="_blank">
							Let's Go
						</a>
						</p>
					</div>

					<div className="col md-3 lg-2">
						<p className="small faded footnote -yellow" data-id="&#9679;">
						 传送所需时间主要取决于目的地网站，如果无法传送成功请多开启几次传送门哦
						 也可以在右下角给我们反馈！
						</p>
					</div>
				</div>
			</Section>

			<Banner img={fullWidthImageRollingImg} mobileImg={fullWidthImageRollingImg} />
{/* 
			<Section className="-white">
				<div className="grid">
					<div className="col md-push-1 lg-push-3">
						<h2>Family business</h2>
					</div>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<p className="measure">
							Rita is already renowned for her Pão de Queijo with her family and friends.
						</p>

						<p className="measure">
							And none more so than with Clara, her son Pedro’s girlfriend. Allergic to
							gluten, Pão de Queijo has quickly become a staple in Clara’s diet, and she
							continues to be in awe of the tasty and fluffy gluten free snacks.
						</p>

						<p className="measure">
							A truly family enthused adventure, Rita’s dream is for Londoners to try her
							delicious Brazilian bites, and with the help of Clara and Pedro, to share
							them with everyone in town.
						</p>
					</div>

					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={familyImg} />
					</div>
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2 small faded">
						Family photo by <a href="https://munchies.com">Munchies</a>.
					</div>
				</div>
			</Section> */}

			<Contact />
		</div>
		// </Layout>
	);
}

export default StoryPage;

import React from 'react';
import { Link, graphql } from 'gatsby';
import Script from 'react-load-script';

// import { Layout } from '../components/Layout/Layout';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Product } from '../components/Product/Product';
import { Contact } from '../components/Contact/Contact';
import { Typewriter } from '../components/Typewriter/Typewriter';
import { Banner } from '../components/Banner/Banner';
import { FakeImg } from '../components/FakeImg/FakeImg';

import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import ritaImg from '../images/rita.jpg';
import bannerImg from '../images/banner.jpg';
import bannerMobileImg from '../images/banner-mobile.jpg';

function handleScriptLoad() {
	if (typeof window !== `undefined` && window.netlifyIdentity) {
		window.netlifyIdentity.on('init', user => {
			if (!user) {
				window.netlifyIdentity.on('login', () => {
					document.location.href = '/admin/';
				});
			}
		});
	}
	window.netlifyIdentity.init();
}

function IndexPage({ data, location }) {
	return (
		// <Layout location={location}>
		<div className="main">
			<Script
				url="https://identity.netlify.com/v1/netlify-identity-widget.js"
				onLoad={() => handleScriptLoad()}
			/>
			<TitleAndMetaTags />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						网站
						<br />
						任意门
						<span className="title-desc">开启一次未知之旅，发现你最爱的网站！<br />
						你可能会遇到：
                        </span>
						<Typewriter
							className="title-desc"
							texts={['热狗雨', '线上公开课', '初音未来', '星际移民中心', '妖怪百科', '大自然的雨声']}
						/>
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							二十面骰<sup className="-yellow">&#9679;</sup>传送门：你将被传送到完全随机的一个网站，传送到任何一个网站的概率都是相等的。
						</p>

						<p>
							<Link to="/story" className="button" id="button">
							    Let's Go
							</Link>
							<script type="text/javascript" src="/static/js/web.js"></script>
							<script>
                             var uselessWebButton = new uselessWebButton(
                             document.getElementById("button")
                             );
                           </script>


						</p>
					</div>

					<div className="col md-3 lg-2">
						<p className="small faded footnote -yellow" data-id="&#9679;">
						 传送所需时间主要取决于目的地网站，如果无法传送成功请多开启几次传送门哦
						 也可以在右下角给我们反馈！

						</p>
					</div>
				</div>

				<div className="grid">
					<div className="gallery fake-img-group">
						<div className="col fluid md-7 md-push-1 lg-6 lg-push-2 fake-img-wrapper">
							<FakeImg className="-three-x-two" img={img2} />
						</div>

						<div className="col fluid md-3 fake-img-wrapper">
							<FakeImg className="-two-x-three" img={ritaImg} />
						</div>
					</div>
				</div>
			</Section>

			<Section className="-blue">
				<div className="grid">
					<h1 className="col md-push-1 lg-push-2">宝站社区</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<h3 className="measure-wider">它的使命</h3>
						<p className="measure-wider">
						   挖掘躺在互联网角落里，被我们所忽视的宝藏网站。
						</p>
						<p className="measure-wider">
							<Link to="/stockists" className="button">
								来逛逛！
							</Link>
						</p>
					</div>

					{/* <div className="col md-3 lg-2">
		<h3>Find a shop</h3>
		<p className="small">Buy our frozen bake-at-home packs from a few shops around London.</p>
		<p style="margin-top: 30px;"><a href="/stockists" className="button">See stockists</a></p>
	</div> */}
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={img1} />
					</div>
				</div>
{/* 
				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2">
						<h2 className="h1">It’s pronounced pown-deh-kay-zho.</h2>
					</div>
				</div> */}
			</Section>

{/* 			<Product
				postcodes={data.allPostcodesJson.edges[0].node.allowed}
				stockists={data.allMarkdownRemark.edges}
				location={location}
				soldout
			/>

			<Banner img={bannerImg} mobileImg={bannerMobileImg} /> */}

			<Section className="-salmon testimonial">
				<div className="grid">
					<blockquote className="col md-9 md-push-1 lg-push-2">
						<h3 className="h1">
						“就像开盲盒一样，有挺多实用的网站，超级有趣摸鱼也很快乐”
						</h3>
						<p>The User</p>
					</blockquote>
				</div>
			</Section>

			<Section>
				<Contact />
			</Section>
		</div>
		// </Layout>
	);
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query IndexPageQuery {
		allPostcodesJson {
			edges {
				node {
					allowed
				}
			}
		}
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						name
						address
						postcode
						outcode
					}
				}
			}
		}
	}
`;

export default IndexPage;

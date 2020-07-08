import React from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import { Nav } from '../components/Nav/Nav';
import '../_sass/index.scss';

const faviconSizes = [16, 32, 64];

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSadNotice: true
		};
	}

	componentDidMount() {
		const { location } = this.props;
		ReactGA.initialize('UA-8000008250609-1');
		ReactGA.pageview(location.pathname + location.search);
	}

	componentDidUpdate() {
		const { location } = this.props;
		ReactGA.pageview(location.pathname + location.search);
	}

	render() {
		const { children } = this.props;
		return (
			<div>
				<Helmet>
					<link
						href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
						rel="stylesheet"
					/>
					{faviconSizes.map(size => (
						<link
							rel="icon"
							type="image/png"
							href={`/social/${size}x${size}.png`}
							sizes={`${size}x${size}`}
							key={`${size}x${size}`}
						/>
					))}
				</Helmet>
				{this.state.showSadNotice && (
					<div className="sad-notice">
						<div className="sad-notice-inner">
							<h3>邀请加入「宝站社区」</h3>
							<p>
							截止 2020 年 7 月 6 日，网站任意门已经上线 4 个多月，总共迎来了 47 万好奇的访客，传送门开启次数达 184 万次，陆陆续续地收到了 1,601 条意见反馈，86 名用户留下了自己的邮箱表示希望得到回应。<br></br>
							为此，我们决定吸收果壳任意门和 USELESS Website 的优点，一方面保留了开盲盒式的随机传送，另一方面将盲盒进一步细分，你可以选择一个自己所喜欢类型的传送门进行传送。<br></br>

                            同时，从用户的反馈中，我们看到了用户想直接知道有什么网站的愿望，从果壳任意门上，看到了收录网站数量庞大，用户却既不能进行评分，也不能贡献自己挖掘的宝藏网站的不足。<br></br>

                            宝站社区应运而生。它的使命，便是挖掘躺在互联网角落里，被我们所忽视的宝藏网站。<br></br>
							加入宝站社区，这里总有一个属于你的宝站！
                             {' '}
								<a href="https://community.ofo.moe">
									定向传送门
								</a>
								。
							</p>

							<button onClick={() => this.setState({ showSadNotice: false })}>
								继续体验新版网站传送门
							</button>
						</div>
					</div>
				)}
				<Nav />
				{children}
			</div>
		);
	}
}

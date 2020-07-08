import React from 'react';

export function Contact() {
	return (
		<div>
			<div className="grid">
				<h1 className="col md-push-1 lg-push-2">社区反馈</h1>
			</div>

			<div className="grid">
				<p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
					Call Clara at
					<a href="https://community.ofo.moe/c/feedback/2" className="contact-link">
						宝站社区
					</a>
					<span className="contact-or">
						<span>或</span>
					</span>
					联系
					<a href="mailto:i@ofo.moe" className="contact-link">
					   i@ofo.moe
					</a>
				</p>

				<div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
					<a href="https://community.ofo.moe/" className="button -block">
						宝站社区
					</a>
{/* 					<a href="https://twitter.com/OiDonaRita" className="button -block">
						Twitter
					</a>
					<a href="https://facebook.com/OiDonaRita" className="button -block">
						Facebook
					</a> */}
				</div>
			</div>
		</div>
	);
}

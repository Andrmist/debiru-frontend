import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';

import SkinRender from '../../lib/MineRender/skin/index';

const Canvas = styled.div({
	width: 500,
	height: 500,
	background: '#aaa',
});

export default function () {
	const canvas = createRef();
	useEffect(() => {
		let skinRender = new SkinRender({/* options */}, canvas.current);
		skinRender.render("Qugalego");
	});
	return <Canvas ref={canvas} />;
}

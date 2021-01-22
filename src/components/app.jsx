import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas({
	width: 500,
	height: 500,
	background: '#aaa',
});

export default function () {
	const canvas = createRef();
	useEffect(() => {
		//
		// canvas.xyemae
		//
	});
	return <Canvas ref={canvas} />;
}

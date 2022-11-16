import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer.js';
import Home from 'views/Home/home';
import SpotifyLogin from 'components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js';
const code = new URLSearchParams(window.location.search).get('code');
const useStyles = makeStyles(styles);

export default function Dashboard() {
	return code ? (
		<Home code={code}></Home>
	) : (
		<div>
			<GridContainer>
				<SpotifyLogin />
			</GridContainer>
		</div>
	);
}

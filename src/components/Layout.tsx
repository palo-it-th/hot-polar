import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import './Layout.css';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main>
			<Container>
				{children}
			</Container>
		</main>
	);
}

export default Layout;

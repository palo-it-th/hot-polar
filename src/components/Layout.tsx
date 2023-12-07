import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import './Layout.css';

interface LayoutProps {
	className?: string;
	children: ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
	return (
		<main className={className}>
			<Container>
				{children}
			</Container>
		</main>
	);
}

export default Layout;

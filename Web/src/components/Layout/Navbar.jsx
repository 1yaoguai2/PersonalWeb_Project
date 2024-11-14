import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// 导航栏容器
const Nav = styled.nav`
  /* 半透明背景 */
  background: rgba(26, 27, 30, 0.9);
  /* 毛玻璃效果 */
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  /* 固定在顶部 */
  position: sticky;
  top: 0;
  /* 确保导航栏在最上层 */
  z-index: 100;
`;

// 导航列表
const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  max-width: 1200px;
  margin: 0 auto;
  
  /* 移动端适配：垂直排列 */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// 导航项目
const NavItem = styled(motion.li)`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    position: relative;
    
    /* 下划线动画效果 */
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #00ff88; /* 霓虹绿色 */
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }
`;

/**
 * Navbar 组件：网站的导航栏
 * 包含主要导航链接和动画效果
 */
const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <NavItem whileHover={{ scale: 1.1 }}>
                    <Link to="/">首页</Link>
                </NavItem>
                <NavItem whileHover={{ scale: 1.1 }}>
                    <Link to="/resume">简历</Link>
                </NavItem>
                <NavItem whileHover={{ scale: 1.1 }}>
                    <Link to="/projects">项目</Link>
                </NavItem>
                <NavItem whileHover={{ scale: 1.1 }}>
                    <Link to="/github">GitHub</Link>
                </NavItem>
            </NavList>
        </Nav>
    );
};

export default Navbar; 
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

// 布局容器：使用 styled-components 创建样式化组件
const LayoutWrapper = styled.div`
  /* 确保最小高度占满整个视窗 */
  min-height: 100vh;
  /* 使用 flex 布局使页脚始终位于底部 */
  display: flex;
  flex-direction: column;
  /* 游戏风格的深色背景 */
  background: #1a1b1e;
  color: #ffffff;
`;

// 主要内容区域
const MainContent = styled.main`
  /* flex: 1 确保内容区域占据剩余空间 */
  flex: 1;
  /* 内容区域的内边距 */
  padding: 20px;
  /* 限制最大宽度并居中 */
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

/**
 * Layout 组件：网站的主要布局结构
 * @param {Object} props
 * @param {React.ReactNode} props.children - 子组件
 */
const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
            <Navbar />
            <MainContent>{children}</MainContent>
            <Footer />
        </LayoutWrapper>
    );
};

export default Layout; 
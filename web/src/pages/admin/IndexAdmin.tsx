import { Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { UserOutlined, HomeOutlined, ReadOutlined } from '@ant-design/icons';
import cookie from "react-cookies";

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
  {
    label: '主页', key: '/admin', icon: <HomeOutlined />,
  },
  {
    label: '用户管理', key: '/admin/user', icon: <UserOutlined />,
  },
  {
    label: '文章管理', key: '/admin/article', icon: <ReadOutlined />,
    children: [
      {
        label: '增加文章', key: '/admin/article/add',
      },
      {
        label: '删除文章', key: '/admin/article/delete',
      },
      {
        label: '修改文章', key: '/admin/article/update',
      },
      {
        label: '查看文章', key: '/admin/article/view',
      },
    ]
  },
];
const IndexAdmin = () => {

  const navigate = useNavigate()
  const [inlineCollapsed, setInlineCollapsed] = useState(false);
  const user = useSelector((state: any) => state.user)

  const screenWidthThreshold = 768;

  useEffect(() => {
    const handleResize = () => {
      setInlineCollapsed(window.innerWidth <= screenWidthThreshold);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   navigate('/admin')
  // }, [navigate]);

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }

  useEffect(() => {
    if (cookie.load('token') === undefined || (user.id !== 0 && user.power === 0)) {
      navigate('/404');
    }
  }, [user, navigate]);

  // @ts-ignore
  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw'}}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/admin']}
        onClick={onClick}
        style={{ width: '20vw' }}
        items={items}
        inlineCollapsed={inlineCollapsed}
        // theme="dark"
      />
      <Outlet />
    </div>
  );
}

export default IndexAdmin;
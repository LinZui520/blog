import {Button, Table} from "antd";
import { ColumnsType } from "antd/es/table";
interface Article {
  id: number
  author: number
  avatar: string
  username: string
  title: string,
  content: string
  create: string
  update: string
}
const ArticleTable = ({operate, articles}: any) => {

  const columns: ColumnsType<Article> = [
    {
      title: '文章编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '作者',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'create',
      key: 'create',
      render: text => <span>{new Date(text).toLocaleString()}</span>,
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      render: record => Object.keys(operate).map((key: string) => {
        const callback = operate[key] as (id: number) => void;
        return (
          <Button
            key={key}
            type="link"
            onClick={() => {
              callback(record.id)
            }}
          >
            {key}
          </Button>
        );
      })
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={articles.map((article: Article) => ({ ...article, key: article.id }))}
      bordered
    />
  );
}

export default ArticleTable;
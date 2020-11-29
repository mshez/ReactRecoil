import * as React from "react";
import { Input, List, Row, Col } from "antd";
import { atom, useRecoilState } from "recoil";

const { Search } = Input;

const todoListState = atom<string[]>({
  key: "todoListState",
  default: []
});

const App = () => {
  const [todoList, setTodoList] = useRecoilState<string[]>(todoListState);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Search
            placeholder="Enter todo item"
            allowClear
            enterButton="Add todo"
            size="large"
            onSearch={(value) => {
              setTodoList((todo) => [...todo, value]);
            }}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <List
            bordered
            dataSource={todoList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <a
                    onClick={() =>
                      setTodoList((prev) =>
                        prev.filter((listItem) => listItem !== item)
                      )
                    }
                    key="list-loadmore-edit"
                  >
                    delete
                  </a>
                ]}
              >
                {item}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
export default App;

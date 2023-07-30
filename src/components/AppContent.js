import { Layout, theme } from "antd";
import React from "react";
import { Card } from "react-bootstrap";
import "../index.css";
const AppContent = ({ changeSidebarColor, changeNavbarColor }) => {
  const { Content } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (  
    <div>
      <Content
        className="fs-6"
        style={{
          margin: "12px",
          padding: 24,
          height: "88vh",
          background: colorBgContainer,

        }}
      >
        {
          <Card
            bg="success"
            style={{
              width: "100%",
              color: "white",
              textAlign: "center",
            }}
            className="mb-2"
          >
            <Card.Header className="fs-6">Change Navbar Color</Card.Header>
            <Card.Body>
              <Card.Text
                style={{ width: "100%", display: "flex", flex: "20px" }}
              >
                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#FF0000</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #FF0000",
                          borderRadius: "50%",
                          background: "#FF0000",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#FF0000")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#0000FF</Card.Header>

                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #0000FF",
                          borderRadius: "50%",
                          background: "#0000FF",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#0000FF")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#00FF00</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #00FF00",
                          borderRadius: "50%",
                          background: "#00FF00",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#00FF00")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#B24C63</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #B24C63",
                          borderRadius: "50%",
                          background: "#B24C63",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#B24C63")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#5438DC</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #5438DC",
                          borderRadius: "50%",
                          background: "#5438DC",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#5438DC")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#32E875</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #32E875",
                          borderRadius: "50%",
                          background: "#32E875",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#32E875")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#56EEF4</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #56EEF4",
                          borderRadius: "50%",
                          background: "#56EEF4",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#56EEF4")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#D8D8D8</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #D8D8D8",
                          borderRadius: "50%",
                          background: "#D8D8D8",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#D8D8D8")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#FFED66</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #FFED66",
                          borderRadius: "50%",
                          background: "#FFED66",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#FFED66")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#00CECB</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #00CECB",
                          borderRadius: "50%",
                          background: "#00CECB",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#00CECB")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#A7A2A9</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #A7A2A9",
                          borderRadius: "50%",
                          background: "#A7A2A9",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeNavbarColor("#A7A2A9")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Text>
            </Card.Body>
          </Card>
        }
        {
          <Card
            bg="success"
            style={{
              width: "100%",
              color: "white",
              textAlign: "center",
            }}
            className="mb-2"
          >
            <Card.Header className="fs-6">Change SideBar Color</Card.Header>
            <Card.Body>
              <Card.Text
                style={{ width: "100%", display: "flex", flex: "20px" }}
              >
                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#FF0000</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #FF0000",
                          borderRadius: "50%",
                          background: "#FF0000",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#FF0000")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#0000FF</Card.Header>

                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #0000FF",
                          borderRadius: "50%",
                          background: "#0000FF",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#0000FF")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#00FF00</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #00FF00",
                          borderRadius: "50%",
                          background: "#00FF00",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#00FF00")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#B24C63</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #B24C63",
                          borderRadius: "50%",
                          background: "#B24C63",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#B24C63")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#5438DC</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #5438DC",
                          borderRadius: "50%",
                          background: "#5438DC",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#5438DC")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#32E875</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #32E875",
                          borderRadius: "50%",
                          background: "#32E875",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#32E875")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#56EEF4</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #56EEF4",
                          borderRadius: "50%",
                          background: "#56EEF4",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#56EEF4")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#D8D8D8</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #D8D8D8",
                          borderRadius: "50%",
                          background: "#D8D8D8",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#D8D8D8")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#FFED66</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #FFED66",
                          borderRadius: "50%",
                          background: "#FFED66",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#FFED66")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#00CECB</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #00CECB",
                          borderRadius: "50%",
                          background: "#00CECB",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#00CECB")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: "150px",
                    borderRadius: "15px",
                    marginLeft: "5px",
                  }}
                >
                  <Card.Header className="fs-6">#A7A2A9</Card.Header>
                  <Card.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>
                      <input
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "1px solid #A7A2A9",
                          borderRadius: "50%",
                          background: "#A7A2A9",
                          marginLeft: "40px",
                          textAlign: "center",
                        }}
                        onClick={() => changeSidebarColor("#A7A2A9")}
                        type="submit"
                        value=""
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Text>
            </Card.Body>
          </Card>
        }
      </Content>
    </div>
  );
};

export default AppContent;

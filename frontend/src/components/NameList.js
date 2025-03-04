import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { List, Spin } from "antd";
import axios from "../api/api";

const NameList = ({ selectedLetter }) => {
  const [names, setNames] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setNames([]);
    setPage(1);
    fetchNames(1, selectedLetter);
  }, [selectedLetter]);

  const fetchNames = async (page, letter) => {
    try {
      const response = await axios.get(`/users/${letter}?page=${page}`);
      const newNames = response.data;

      if (newNames.length === 0) {
        setHasMore(false);
      } else {
        setNames((prev) => [...prev, ...newNames]);
        setPage(page + 1);
      }
    } catch (error) {
      console.error("Error fetching names:", error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={names.length}
      next={() => fetchNames(page, selectedLetter)}
      hasMore={hasMore}
      loader={<Spin />}
    >
      <List
        bordered
        dataSource={names}
        renderItem={(item) => <List.Item>{item.name}</List.Item>}
      />
    </InfiniteScroll>
  );
};

export default NameList;
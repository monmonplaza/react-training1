import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { roles } from "./data.js";
import Pills from "../../../../../partials/Pills.jsx";
import TableLoading from "../../../../../partials/TableLoading.jsx";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm.jsx";
import ModalDeleteAndRestore from "../../../../../partials/modals/ModalDeleteAndRestore.jsx";
import Footer from "../../../../../partials/Footer.jsx";
const RolesTable = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isArchive, setIsArchive] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [isRestore, setIsRestore] = React.useState(false);
  const [item, setItem] = React.useState([]);

  const handleArchive = (item) => {
    setItem(item);
    setIsArchive(true);
  };

  const handleDelete = (item) => {
    setItem(item);
    setIsDelete(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    setItem(item);
    setIsDelete(true);
    setIsRestore(true);
  };

  const activeRoles = roles.filter((item) => {
    return item.status === 1;
  });

  const inActiveRoles = roles.filter((item) => {
    return item.status === 0;
  });

  React.useEffect(() => {
    function loadData() {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
    loadData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <TableLoading count={20} cols={3} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th className="action"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ||
              (roles.length === 0 && (
                <tr className="text-center ">
                  <td colSpan="100%" className="p-10">
                    {isLoading ? (
                      <TableLoading count={20} cols={3} />
                    ) : (
                      <h1>No data</h1>
                    )}
                  </td>
                </tr>
              ))}

            {roles.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  {item.status === 1 ? (
                    <Pills label="active" bgc="bg-green-800" />
                  ) : (
                    <Pills label="Inactive" bgc="bg-gray-500" />
                  )}
                </td>
                <td className="table__action">
                  {item.status === 1 ? (
                    <ul className="flex items-center gap-4">
                      <li>
                        <button className="tooltip" data-tooltip="Edit">
                          <AiFillEdit />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Archive"
                          onClick={() => handleArchive(item)}
                        >
                          <BiArchiveIn />
                        </button>
                      </li>
                    </ul>
                  ) : (
                    <ul className="flex items-center gap-4">
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Delete"
                          onClick={() => handleDelete(item)}
                        >
                          <BsFillTrashFill />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Restore"
                          onClick={() => handleRestore(item)}
                        >
                          <FaTrashRestoreAlt />
                        </button>
                      </li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer
        record={roles.length}
        active={activeRoles.length}
        inactive={inActiveRoles.length}
      />
      {isArchive && <ModalConfirm setIsArchive={setIsArchive} item={item} />}
      {isDelete && (
        <ModalDeleteAndRestore
          setIsDelete={setIsDelete}
          item={item}
          isRestore={isRestore}
        />
      )}
    </div>
  );
};

export default RolesTable;

import {
  useGetAccountsQuery,
  useAddAccountsMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} from "./api/adminSlice";

export default function Admin() {
  const { data, error, isLoading } = useGetAccountsQuery();
  const [addAccount, response] = useAddAccountsMutation();
  const [deleteAccount, responseDelete] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  return (
    <div className="account bonus">
      <h2> Admin</h2>
      {data &&
        data.map((oneAcc) => {
          return (
            <p>
              {oneAcc.id} : {oneAcc.amount}{" "}
              <button
                onClick={() => {
                  deleteAccount(oneAcc.id);
                }}
              >
                Delete Account
              </button>
              <button onClick={() => updateAccount({id:oneAcc.id, amount:1001})}>
                Update Account
              </button>
            </p>
          );
        })}

      <button onClick={() => addAccount(501, data.length + 1)}>
        Add Account
      </button>
    </div>
  );
}

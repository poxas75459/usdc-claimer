/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "43G1mDpfmRtQsDMR7QJ1eCw41H3qzQSGckpP3AVU7LKYumZm3vxRJ3qbVpjWptbc9xxfDaLJnHwwrwbCkTxen2tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KPe7BrhLqTMDDrdjzAMeE1AsioKfzQrGU2Nnq1eWKeddweHs9Z3H8owvchtJWaH6VvksX6f58SpZSYxBurpTXmv",
  "key1": "JwPkbfDcarASA3YnJCXrp4SnkRBDMd97nSnxYi7NooQf55Who3DN1ohX8j2FbJ2WRSpQCcfzdsP8yBAiAh3xavd",
  "key2": "4YwbQZEmr6MpQc6tLkcSnBmQEMF7oQwpEp6k12uocnNqVt57274YxcnfbVm9c3HkWbxZm8GDqrLN5eqVimXNbre1",
  "key3": "3qx8CVihQ1scDwHcJbtHgrzWRDd5HBWR7uaXx6gEcpAutpVZKTTr5L46CFQ1sRJE49GXDSCJEEoqxNdLnmCJtDFY",
  "key4": "5iaUgN1R5wt5P3kYgsqdUyWZaD297JnD5KUPZ6fZ2ujFbaFLUPsz7f8nZPJR3v3NePJxqmr9KaFy8RJS8WCrsxDP",
  "key5": "xtymp7kBHRv7UTLeSSceFzRwKcGSkhJ4fsX8dN4Gg91nN1aLNn8f4XeWxMTa4pDVHoLDnkhSfEgkLiKiS8KpG35",
  "key6": "61EXk8GiJ8Yd7P75WBsfupqbPxbpAJ2pkpweKnr5oXn8K45t8ep3SnnkRzRnDz1Pe9DAvGywMtJDFzPsYDYmt3GV",
  "key7": "5tqrXo1yC7ULjtFzcNgfXZrRd7kU6qScsGAGYVKPuhZUKjVzRnUKArXavoYViB4Jgs94nmEqHPoH1QPMeeuihDor",
  "key8": "2UxhxRbRXNFB4Vn2JDBj4N4dupgpJ6pHFYZ6FgiSh9JMCx5VvpUnuz7c5FnkqH4Rnbj5BqYGa5h3AtnJZUp3DNwy",
  "key9": "5AFFbPahU8VSrh4Rh9WZ75QvEtiwuUWbNR4Ma6FEaSrF6CAiaktMamRH79Pd6WkxGm3GaxG3AeRVKBk5sTgmqQop",
  "key10": "4n5i53D2fmahGbtjs4YNdF8dBXGNgoDWT4nCaEsgGcVci9qvwYYeLvrA2jAiSBpddbVKBA9vfvaLyc3oPz8tQPnT",
  "key11": "3Kkvw4SenCaSxYUSHqMgse9uedjzMBFjqiaNYtEf2zZpQUKzHvD132bBDjR5FKCfNnwbD8Pz4XCMoFBZvqyG1a8J",
  "key12": "2JpsG3eZieEtKjPsiWB7GqYaG9xLX6xSK5txQadabRvVxWLNuQwh5pF5HnbuNRXp2U5pj713FQNK1nfgutnYkKRp",
  "key13": "4t2zX2ko1Uci19XTA9PEr8sQdRTcLkvVrYgRZpLKDbY8i1He3Nj9hJuTgWtKcX9t9GqJHEybpkALVzVFDBHZGYiJ",
  "key14": "2y5sCCfdnzQ4jPFVwp1ia11g2979mV7jmngjPPZMrXEieJT8ooT1isV78guBXtLHTywQeqRGuyfrJw6bUbZMbkP",
  "key15": "2tPp6VMr9nVFR1SJFGYsEqpq4XragJ1emjMoRHTrF1KxNqiZDfQR3nF39L9mZAuj2ueiFALpHGZSxjdX1sooUjba",
  "key16": "A7BzicqokKScait8phRsYy5NbDUoaz9fxmXgwss3iFppsnNpQqwqX7ns8vECYDZuxsGhXVmz5R8giZDv3M69qAC",
  "key17": "4nWHr61opD6rLBGurHWpx8TcyhTJvCzQbNDuNJkt6T77HYYqGiGiTN9Ys5HBhgRDcLpn4TgtB1RNKFepjwRDqex",
  "key18": "dYoNSb9hkELfbkAaTAiihPMhE2BYWB452mYh7UYJbeir89RjBJtZaeGyMYNMg3fHm2R63J49uSuknpKLDJVgxzW",
  "key19": "48BZKDsnwjY7AXL4wuR7bCJefo9hYq7EBGW1LNDS5y8bV8HbN23AF5eSA56ipcjCiWHCAfFpJ1YiDdDfUpRamjdL",
  "key20": "47uay3tisNHmgUWVXPgLPod8KG1fK2i4pYhdmwSUKSeAMtcKKV85F3aQb3MS7r1VvW3mkwrc7uw7X41KDXwnmeKw",
  "key21": "2etCdEb3erDJ8gpKzUBRP1PfdM74M6g6CLPGiU2FG2dPA4d5Cje3BCKXwNsFJVkwqZH1mxFWnhGBXtP4ySgBKP7H",
  "key22": "2jqEGa2muSTSqadhgCfpNeQ8Qsy6F5ZwLsa1a2XVYrP1eNezd8iKFL4YBL6rPJPGZMWfVwBpJiRTk65JWMZ2jauz",
  "key23": "1o2WLfMWMLuty5VAixevWJi3rnzJNfDjrgVaL5RDVeo6Pmi72VhSuPF2RgRv27dqpBf2n8qE6FRrEyjprL4jBhd",
  "key24": "38XRvMprQ8LoMJyNnTpFNhHyh4pHbgB28orTfaiT1UK4pnxVDNhTnszXdAX8wJsrLVnAm4gzPAKtZ6ujR49cqTPv",
  "key25": "zWNniHiBbBYDeJ9JmAEUyU9FtppCLRUS8SofFNwY7KEa3L5NfWPsj74bQTKmS7gKLHquw5qyrm4rCvcAgBx7ovJ",
  "key26": "5Fuystc3hP22mKEW5KEz79toTW1LqQMCr6z6nQjph9BQ5prc1wieUqFyvhdZ5iJXvr28AjGEYyMogX2kUbcroZ9B",
  "key27": "4KWaQzwCwQDLpXm2fF36i9DrH7ZycD4gVpa94aTGDP8MbUM1zVD7kby3nz7Vkb7RKU37dgxD34YRL1DLkcCsYTyS",
  "key28": "ibXfdgMXXdzPMPnbD3F7V3Qs2r1CxP18umUS5h5w8cWE9Efir4JPQLKcT7ogcjGfVHojF1714zu58mGFDtwiSP3",
  "key29": "5yP5WnpCcX1fGJyEYReMqbDCGGUr3PB2zWLxYMJ7Vw2VBnQcHgzh8MjbypBjy47uGHgdKnBABinizHrMFsJCartE",
  "key30": "5k6A9JDKTBvFD9xGpA8pFFWy9oSeNAu68Uoh4uREiiQJL9E9Y4k1UxUbtfZiN79vi38W7K23QixGCTrSbhqtQZ3L",
  "key31": "27xGhVrdxpspy5duHMjMFz1Uz9Pn3GVnSVdZRnHwaTStqGns81nykSBP1wBp8WkE7Xgp85YqEYXwZSg2PrVE3Kdt",
  "key32": "34ZBG9TygQd2nCgW6tbKEZoWcFZvhA4yWtzGoRqZPdfZY2D8bynFaykRdvWePd1kTQBwfkv2LEuVuTkaANFaz8ec",
  "key33": "8CwahqQwZJomVx4LiC8YYUG4z3J4hPJyTx5Fi5wdGx2V7UzB6d8LaRHCPGBNMKxCuuL4CDqxmZksqE2pnzc6H3o",
  "key34": "2dYKcSXknzVQfGE3Hf393oJHrWanYx6PHyAZ2YTsZfwmkcy5QpAAqBvZ7NanQ7Z8vazqMwHhzZAqTjiPmy76kkdc",
  "key35": "P12ejP4SYzfSfpQATtVrTVm6ruJhw85p1STmw727FkovakoSBDWUWEwbX6xq8aC4GXb1W4aVTcWswRj4MEjfRzr",
  "key36": "2Pe6FCDyZZkQKuF6tdUE5yfwfYXToZnzqxebKDvdBUCZWUavNddAvXwK4wVXQPWWn6kETyZWavc9iae6TqWvJ9zJ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

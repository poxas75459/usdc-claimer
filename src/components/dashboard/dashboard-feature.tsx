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
    "4qNPeadQVyRbHJPFGRX8dyQPwvFuWNYYvRcpUSFPWRwFJXFaKxbYk25xsZqxMJZkN1KkZSJRxz2WFeuY22aSAtym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f29GRQVN5nfmqaqaJQX5SGYTsmBAHN26h5wRQsQyfxabuoHxqMZt1JshhqSBT57XQeaKeF3eSjMjWJDeaGGzB2M",
  "key1": "KKjE3J8jvUeEMzcXGjEj4F9Xofqqe8mzMxNjWe8KCXzn5xVHYvXc48rbe3psT1rtSzKkMpYTt6Vntpuqn2GP8gt",
  "key2": "3SrrguEHvFjRdaiHSCjzJWG8G1eoXyNxvF8dpTSqkCfaZzBZhnZ8eQ7nkC76CvFujbAqtMAswZ4XfZXiCNeC9xWb",
  "key3": "59YgLf9Hpks58dQmQGZauKFJiyn6Mdh265RC1FPc4k81xUMeahh3ESyWhU7L6qecZWejQtWVaEv4Tok141Jht2T2",
  "key4": "2JiUndEnWt9f6qnbUMyWm53xkiw4NKEvex98AH9BY2bMsFHgT6Df5uyNLYDtZADu67dgVvytcskqEFDBrzULE7EQ",
  "key5": "51JRhEhW91YR92pcstvr3MUJqYYBpWH9kRzot62LsB4uYgJDtjtf1fA5JFmKGZaEgbipFWFgCppEzHBTqmJtsL2R",
  "key6": "mXhLkU86kXuCKesd7CCiY3nLyU2tDkuXGEhJRhpwJopBoFnNKcJ4BJsAq66ZrU31Z8yeGewiWybmHFCHRnxXovZ",
  "key7": "35kEYMrrTDeRWBi6TAE6VQdPvmfu1Pcy2Z4XBR4niMMXuwaTw3CvcwZGjkZwYDfK5ymgQBJr9Z1BuRDSPQwaSEA1",
  "key8": "4u1Bswad4yMbAbQDz2n9drLsKAWe3XsT3c9MaSG76Uf1RmH6vnUqP1RwNDX8bAh7FShUsYyjgx5qcz5NubAHLob",
  "key9": "X3XeaeZSEQTEqCU3LDuhDrkRSdPvX4TWqULysiAp2rAKhLyHuYX8YnnGuTA8jiZLJgsNNd4hsM23drAN1SmJsh2",
  "key10": "5ijDNLqiPuiRwS2TBGy9CN8NwcM7YtRCoc63a6UsdmJGj5wsP6HSZgoV8QAmwaLfyMLAFkkh5jWAjxpnyZq4bG7t",
  "key11": "2XcWinHfLuAzTE5BFvD8rjTqkJ7DpHGRaForAwfrsGrNqfvpAp4P7cpqdtbpEmXSyAd3pG8wZpsSXGyrsdcxqu9i",
  "key12": "3wt5LfAM7rKeEHdrgZMFoxMEb3Tri2E1WzBpbNrFNQyhme3d2iS9mGisgNda6EDk7EsqSZc2PLNsX1xBFxyoGSQD",
  "key13": "2pyZqzwcCsWxkT68rVdgHLtjYwhrK5Q9W3BkewiBm4Ae5sYChorPyy9N2sEJK2BCPWTraNBpiWKTzwDLThCtUJNm",
  "key14": "3kboPgVkP51CKoqr6EVR5yA3K5FFoj7Y7awLJCZv5ypeLHXKczc6PZnAo9kX8qcfxS9FbtUaKtZSCi5qzYQR25Mk",
  "key15": "5pB2uiuvyCYzh4aMb6dUVXj6z8supmEJapmWJDN7oWp1WjAf3FWnGqfCAg7CU72NHYUw9SmAXLvkk8wZEjx5qUYB",
  "key16": "3bwRz6RZwAxqZeyWDc6xFJ3tx6K6a9ctRiPE8FDRSQZ9MHCcjjtvr25Pfee2iyGVhK6ExiswH7CwAY3GK6maVER4",
  "key17": "f8Tqz9pg6Yp48KboTjuv9SrnFtbmeetN9TbDungeGqo2a3f56wqhzX5kghzo1HvJv1ePGfNEXirt94e9vEMhaup",
  "key18": "5Kwwrhca3QK9SRfEtDuum7ADnEfZRPQQtwfNknKyetvZzapu3jhy7oni961aYy2VyQLafEVk62Ztq92vjB5ttVaJ",
  "key19": "3X1Y2MHD12bKeoWecedNZBNGtDt1QDu1E5s3YBr3CUcoWrpFuLzYdw1WqkUdRWnEs6ptaqP5siYipJGktE8DhGfL",
  "key20": "4ZH9hmVgtFTdsTu7yamBu8XBQxZPaDeEb4dDqELRJZ4p1hTgAPb8RJmk3a4QrZGPqM7rDbrK7YT8XBn1vepNth7B",
  "key21": "4JjZreiAPAeWFdaHsXXmNgptqJ3AUj5JpHpE4SydQkN2xUj9CR9D9RShwUCiF5BhRZtDZX9eRCK1G6ny1t4NzYAk",
  "key22": "2TqFHMRksyFYEeEDe5wcghUeZT7Fr7GLXroz89Pbop5mKHsCY9AiDmczcyAFPhKq7B3oCwQSxMr4oBhuNDgavCHE",
  "key23": "5FJmNLf7Bx2LurycvnHVTp98yngtLEfT21WLXQ4UiG8ipkwpJbLt4gg9HG56ZauyJv3xjQpcpwPYTEt5XNFS7D5z",
  "key24": "4PVyJLLggacCVrdCXGLBQBPqZxjNsUG5TRtvpuCHKdSQoc3z3WdK4ty9NucgigNPMhva5DSBuAnDAXqCdHgcCQrg",
  "key25": "wR23yhGyYsk3Nvx5KqJNQiGwgGKn5XDMJND7PcFcP9Tw9BnyGBmbVyVUVaV3bcTo8cD3bVVYTBHmJzVwjAo5Efz",
  "key26": "3o6rmHrh1CeKdfayNYmapmt3JDsEXYsGTDBBFhRYgwbFGr4dRQR3YqGeLkfxmehEnNWZ6H24kfqLNHo9Woh2Fe9M",
  "key27": "5jBCEyQMsZgYjJDDE1cJwHC91AGpSXJ6pAqL2zegJfFJ1MdAGwT9uN5y3zZWdHs7EEbCfhi1xpJfF7vj11YZkHvz",
  "key28": "2CJ4vyCk9rmAhSxxvvJtrudSWRCfDwE6zHEpxKh4DMLYZUcrfKtRsLDvTJ96yYgpTidXuMDSAMksAzBzqoZCPjyk",
  "key29": "5tu9XzFL79qfpUgfV81wZTrXcUHBw2eSSSoCWhwfR6cUXcHgpHk14PMa5BQ2CqCERhnVqvWFPmzMQrfqvvcxKvUf",
  "key30": "5DresALR2FNBjwE3uqetXmCKo7mMvC5m22JoPEDxbhJR4aadM69WkAW4moHhJDS5zAeoUamMAkkk49YK329a1Yhp",
  "key31": "3gP1rc3LPp9KcbMRfm5mpobsNyZ9bRVtW3z4RyPznLC52qbpkXHdgTjt7cD1bxgkEF5hZaex5LDTjS9c1euAsyJS",
  "key32": "3xNTzvt7Z89tNMf6pWfFhhKCpBcUKksiSxC6rxYqikn2a8xgSce4THPhEdQsZcXxzoDzkAZV4PH8UsNJbFxkK8r5",
  "key33": "4t8SfEX2Hu7yMDKyJLDUFhCT15Py4BAhEn19N4wmJguNQGLs6Q2n3uWNAijUkaKkLoP9qERuDkTbufMhTwDEeafW",
  "key34": "4DH8fiqsaknv2kKxjKnAZv68ZqESMr1dWJ9iYbfWhVYJcfNChnTAQ4pRBAJrXoiqYX4NsEbCS6obArDCykFtv1y7",
  "key35": "53V4pG8Q595C9obaXKdasrW13xXqocWjjV1fv9zVBSQnbSp3Lh9dzswWnVsqCr8eQRxw3hAoSErxGUZmDtDGnfmJ",
  "key36": "3HpfVJJ6h75KM7135BPjfL5D31zueKtfuA9XZiPpoaCgBTH7AdgTayVL9Q3FBR57Nu1fUDMyfx3hjGRStBqXv6vj",
  "key37": "44ryoDwbfd6aDz6NGWQoWPJbK1C8CUVSxFx9Q2EzKPwXW8atGQCy3rDk9jpHrCmYnCnyLNN4fYCZM2JsZDCNy6e2",
  "key38": "21jGuZu31DWQ8hDWRWvwNw3kjk5UKk1vjHuzv19ChMfazCnfq7AYmtTvB6wm7VYviyr8GvXaPqSb5W3DA2FrN66p",
  "key39": "4c3KVLLYogt7CfZQrvq77Pby38HMMuPoCdroHr7nwPgzzB76mffW6LyJ3BRUTrBxfwCBMBF8ky8hUXj6jyuQzc3Y",
  "key40": "2VF6LSKPojc8kJdBtwAvcX4GYS153zbG2yPnvnLYJMr9QABHAWuBmkHLB8zi67C3AuGsefbA4R9smof3YxQwf1ZX",
  "key41": "4E2MYKbc9FKX9hwEY5U3Hs1hEwsFzG6FY9WerDTM1JStnfCJhMpVguhF7thJ5XqYNSfCHViSkSP4b1Tqyb5gEMPw",
  "key42": "hbF4mTu3Pts2e6WvZdwn4UzjFcCCGZNss1r322PV9ntQMRezFS8Yc6Mup86eNZgZJsWfyxSGXmKcYbc3Vvodbqy",
  "key43": "3Vdutt14srRxuvdeKP8TxsjLwyJpcC7UM9e3vNsEBLgyyXFPMwAGWwqtoXucRRp638PFm3h76RqaaqwPGjPP9QE",
  "key44": "39EkQUWY4yMRGGCtF7L3bSydFzeaBjevsJ2iBAzW4fKVUgcq9cp5eekSCGUcN1ioeKNTVHWKVYqiPnAFp6J4yGXr"
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

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
    "3jcWxH3Uwhj5Ue95KLMBPdu1CXkR5rjUcoQowZgNNQ8dbB8dk4R9HGD1wcoyeJmDbkbMTygueETJjJhUdgLSPbA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uJyNzjWDv2GeF4EuR9uijY9StAZ8cBAvgWoNNbDyaBKuHrxMmDsh1YKxZEajc3WJq5CtJFhMfPnVcuU96w4CP4b",
  "key1": "3hqV9BXMVR2RPb2P986GX6XAjn4nU6CJn8wZ2V7cFNPC1HnkXAZj7FwmHrnAUAC3sdjAwokqo8DaEFsra9tAmgsL",
  "key2": "3AJnqyzE3KJEadaAu1NQQqukzPn2sdjfxDwGcX6GxwpTCbVt4mj2BgxHu7F4g8FfdTowEGMRLhr8JaeCN7w11k9h",
  "key3": "5xFCWUuP6bpAvCGUdJRMP9dQztLQ2Ny2TJyQ1W5KzgmdgP5KHzjyHtSdM5grH6JCCyXQuk95mKDP1Fxbzw1YuJnC",
  "key4": "VBiUktejR5xZygFRtbWWF25G9HNm2BKEmdW3MDFG8WiKhFjMwntQGknRsChPfrrfku2KuPZ4EWcYUNVXnyNLGxf",
  "key5": "28ZjRUj3fvhZsxFNmzf2FEY29uctxtniQv6C5UdH4dCjDFPPoSA4vBxHMgfhugLiRpmA13YmnHJNVe1Zsy5BQ6Sr",
  "key6": "3aNm9uoPyHX6qJphM5ufhmCMma55oRNoMY142s2YivwfSG95Ey9oNy3zsMLCz1arZxfbg9cGNmzAAmwAtqc6WAuK",
  "key7": "2Ukjp6WpFhqX3p1v4B6b2tGc59kNHjaWb53ggNDd2Q7QC8N4jQHk3CK6gjPJgSwTqnjrdm5jDKGPZmq998eSJxFU",
  "key8": "59Vsm2LeXzm3HA2wBRShrvNxC7KC8BxaDhR1UhufwzqxnX1Eoh1WvG9jayHiQujAQQVopGEufhEKn9e2bTQXgB8c",
  "key9": "5d3MbdbhWXZYSH3QQ3ZMegz9bYvHZRMbCGm1FyGaYor4XSpCxXUnD1WxKyMPiiTftsQRh5j6rcimbmDtUcWBQ57u",
  "key10": "2vrqhCbAA1wFohd6v4YimZGoqBYYVz1dzA4YKvM1vaAguXSfusJBxXWbv1w5umMUPw5jVz2G5quipVVDMaA7kCis",
  "key11": "JN86AmQaw2tEiEpxzT2NBhBN83QF9LHjkhu8tdWA2pGWYcvTum2gfu1oq88atRTgXQcztQsMiUuPQtYPL8RxgnG",
  "key12": "4vLCj7iab12t9pQwNsZ3WVKn6Qy7ATUDeckXB2SNZGjncN69ac5YfVuk2RwzGqEyHbMHZyUHjECbTUzKb2GbWir7",
  "key13": "2CC9Ce8SnxVhELtQoQD5hBSpi84NPZUHioBLFwewe6t4xV9p2UuTxTV71u1dX7BRGqcURLS1u31UpXigo2fE5rb8",
  "key14": "56UqPaGSmUerJY5gbbrHtJJs7g6mkAbM5xwpxY47ZaB5ijL2aJe5ScdEymzvprevS6PaFaMUjBg4XP7HzToK6NoC",
  "key15": "YiBcDwBwXPoqzNvN7Sh6K9oM3gXqBeNkis3hdTjUSSGigqnk86E628QGZNXCmzL7A7G51sYtnKgQrgudRcs3fsv",
  "key16": "XsmRX4wQxWmkAwYvZZjaQkFp7AUwtEB7YxPgRiVb8iL8m1ZQaursKnN8Pg67WWg3PFkHuKMLDZqE6a2WqeE8BMu",
  "key17": "2e1Ka4dfgdDGH4rTzGq57jCrxf4tEJY9ViGypqexBRUzbGTEwrPj4EW6Mt5uoAYypEgC86mzgj86pj1H7rxZq5F1",
  "key18": "6PUiJGL5Kg7HoL5D59EVLVGk5Mn4Z1u4VXpDZuM6V9bEf2K4RvMqAx9FYHy55nm4RQP1ceNLtXcYy13f5b4a918",
  "key19": "5b9ijBD3bcG8fE6Ra4Upqoe4QxZjmr43W5Kw3uGmUwyEJTqgvcH96k3AjfzkkpAVLky5W6MPLEcwWGnvoYMANfqq",
  "key20": "zudptN2q654J9VomUkfc5m16UoXU43aorQnNKkZBuz2q6bpTL1CEtju8Hy3mPKSDLozuTaq7e7TYuKftGjKGk5g",
  "key21": "5TTJH7N5rmiQiYE7vjQKQqVKnSJZ7bAxjtG8EpDyd1Hvx5iSbzZi3jcCuDHaLdJ1wfkxzeCeaLS8i9c5Cte7ydg3",
  "key22": "4NxvZehNGsMLXrLdXuV6dChQt5v5xKeJWbGV48pg8dmTjZbn42kfDRfhuTzUCeiHn5wSUG1gTy2KmSoZnZYnVymH",
  "key23": "44LMtzKVR118aATwNcp1sTGHDWmn1NXUYZc576Zqg2xYkF4Kt4xeU6fUxbafZXcA4k61wdCivZ7vzTEqBCYgTUkT",
  "key24": "3Aatk7G5tcVrgP2RQHSkP6jKhtWzPXHwNLzXwc9PoDcfjpaPSd2ySpHaLCRvM4HxgSMn5MB8f2sZRRPE2K2k8mLg",
  "key25": "5eTDd7ihwmhqAQ6zyXw6rYwqUCFiG22zW55z8h8Fy37oNuwfZ4Ke7F5cb3kirZzeSTj4BB2MnuJhtUVbWYXNy7LG",
  "key26": "2rEyHDcJcZh1yGCKZRYrwj7z5Y7FxcxMeHFYz5eifX62Q6NU4CpR7QsijFixi291mcwRU4LtrQA3fohurnt8hAVt",
  "key27": "5jmdGrH3Bps1TWjWo95y6QTuwB2Vh2q3y2NCfLa9WLCHD1H7UW6j1PS5U9AK1bGLEmne7FJGkYCZk4MK6YvM4cQ",
  "key28": "4SyGReT8AXUf8uojQyQsbz1cVNUN321eNz7kRQspJXha5f7bTAYY2xKNoVmAjUzGJ1TAAcjUDBcdT8mZ3VRCeFQ8",
  "key29": "5T57jZ6dAZoRZnBr6LmvcTtPhCwy9rSyKz3oHSAkgVA3cTgEVRjUjxvfE9nEyJURTChSh9Y4MYNrt58guki5mqBw",
  "key30": "31ehrAARHv4DTCPmwLKTYm6evgJWkQWa4uf6XVdmL7vdSqWwUpLZzKCRpNjW1nu3ig1XNc1XAEzsqXzug3459a9S",
  "key31": "3sJsdvewJhx8HimmKvvz8DXQqvBrrZFm92i1porgviZqaSjtskiWYLbejCXW4kvpi3LdcMJ5naoppzYzSQBPhstW",
  "key32": "5ySPYGTvGQjR1KkWD4ro6r5GXKPZfKzXGR6mFJY5LKpMKNdPMnEwGqEdGHnPuUPh2VJPAs2VFELY9Vxp55knkYg3",
  "key33": "2KaXPQvoxHm8qT1RX8zXzMXeqicEt7DR78vReZngkdKd9kLqxCeaneieQGDtj8fi61w1M2yAw3ResuhEKQbJhRvM",
  "key34": "3Y5fEQJMhCSA8USULnH56qW2ccsYg9o9G67ZMLWeik78W5wTBdVYTwLmjaxwpJwomExUR1hXMwdN1fXJF7PZJq3W",
  "key35": "4dbi7Qd34w3Z3uZSBdGo5KsDwicPgYUqpcyLVUSMANyt1o1S7ykRDhUnNawnTrBqgSmD8DBL6TQpcu1NwPvHjEFU",
  "key36": "2Na51Ew3YUThiYjgbF9RLjWec4fXi8xYzvMXCBeyMPeVq2pdHGNN7voZyHdNf92AZn2ZF7MVpJ29gCBoWFvjop49",
  "key37": "4shTmDVEcBfGY7czkJ8YXU4yPrd2zWwFuxXEFGyCzoXLS8L66UqZfrZtH79YWk3QQWn8ogqWhiQEHYnqMpttcGeK"
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

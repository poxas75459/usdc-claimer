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
    "24JKYzhabuY9scQauETRhHGDrsnFDDrsuHeaFCrztZYPUo7BHh4LDB2qh2syxYvfAL8zgJuCFqAYAGmYXsNJdVNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sbBqYvKTVG488u1gmnJZ73YAMk227eNtRBfdzRN3UUsvXTvVVkjwwQpvAXZkfZKuMELztW8yyECTV6V89eu7cNp",
  "key1": "3dih2xiKQdjCyv2t6xYsthWkUachLkdqStN3BUJWWBUVBhzpA4oUJJiTeEQ3wK5BLqJFGvS96Hv5EASaR1gFgbow",
  "key2": "4Piw4yx7HjHTymTXW4voUf9hms2qyELRU2AYkwgQaNTTSoa4wxizy3W6xT3meCxZ3BgaKwDFzVunrFabp7u4neDk",
  "key3": "V74Lbbv8zkvMCRDJc6HKVa4pTxZeYFe7ZXkXnAkcZETs4YFuMApHVXT2t2UTSMb14bqkmy9ZMHQSJbnau1fiEVj",
  "key4": "hiDwZvQB3LdkTvCAYgQshTkAUy28r188QKGkah2SafZQaNhcFrm9XH3RQRV7d9Qf4tF9miTrn65wMza19NFpGjw",
  "key5": "2xAeXhpKz7fUy7VSNPXU1vJf6hon8RPZsvGoC6f1Ld6eC2e3n5FSu17hra92WnpVdFt2LpqC8UPQuWuoEGRm7NZJ",
  "key6": "t3esmH4o49oFoYDYi9WJfQ7eTgJLnXZtnR3TY4FCZLijHhD9vERQfGVbnzehpiJhKvvHtsCywEp8L8qDDf64jat",
  "key7": "4otp4VcdfTsTuNUkjVX39ACT3t262gntwEuMmEeKEoS5dPdvrqtuBVjvJafN4iTQ1t6DsaKYYfdF9mL1dAQvvUEq",
  "key8": "4y1kFzwzo7sCyS6NhvKPpHLdMMDQEeKgRJkPg7gcPELp2EsujEwQR7UFUhH4zc4q89Hac7MD1uNqMs4jUmLvYa69",
  "key9": "4h2sxXczw7MZfhjjHn689pmhynSBcDPNo9fkP3Rau9s7Rx3KLdcX2CaC5CySgVH9w4xi7T5MoAdGjhXaHQBwHCN4",
  "key10": "53stAqLCjjpCKJvWgoQfqb4Y9wrN6ZjUbYiv26anvvbtNrbKCXLQwZKmEQpQqPsjpKY3C9YUiE3yPQeKurRBhggD",
  "key11": "3n5aALpZHWrjSLxDM2e6ynZYPBN19FtMgyzstYFy1TvaEckVzwZvMoLFiS6LTQtfacwZ1y7opAgCwfrzaQhkYzi5",
  "key12": "2jpPSc84fwXg7MYkF4nJptPWKDtj2wnWNd7gvGLExFoqNrPFUWbRqeGTNna1Lx9TFugx2NEHGnWRU2VzAQWMSzPZ",
  "key13": "29VMoPWPmPTrNVWKuG5Js7WZg2yLoA2BEzY4gjhnYSyMmey15gY9zBWkQVRJcZ3NGE4yGW7ZhAuzD6DExvi8wRmC",
  "key14": "pN6U8yZqGcJd4XuAptfywn69ZeL7Z3GYEAzYnaae7zp5Dnbz3LsfotAnRttaq9PY4KLjbRSBXhgMSSyYQrYjSvy",
  "key15": "4Qj8icymXkq1nJkJ8RgGXCXFKcpGFCNwM9mt72fj2cjLmCqnQrW7ntrrDPfuqfESHoVM5oN7RteJhQKKo5AmXmsZ",
  "key16": "NQgWMgSjb7joHWQHsBTsTtHAauuXkkHqPpwh9suewHoU9zkzN5kQyx4C5efc1MDL5Bdvw6v9vfMDTNuTHes16tc",
  "key17": "22Xb9D4H2phZaWicv7GM4Q7Ah4HihSnEzLmgQKmebQDXET7MJ6DwrBwC4JyjmBzTmVArZUSBp7WkW8y4vq8JGqnG",
  "key18": "4EMJer23cFyajeVjaYFNBzk9XJrCNC8fa9BiaqGYYCh8SMhbwDGPxPgWpRV3YhkTxXXWBE4iQaHFq7m7eiS5Yju7",
  "key19": "5WG2V1No9rCKJCC6aHqgbrRMFpQwTxLDK2htkLLdWEMuheeNJcaTY7t27P92biGUGNxi7GtTvqhJZ48qZS1TiUdC",
  "key20": "31w8ysgFj3WFDGt8Gvtudch2dRQydebRUP8Si4aqbkbPHHpLS31nXqstK2Wfv1LcV6NjcqvxvG1D2VG65Y9HP4Mu",
  "key21": "3GDEAFn3mCS5qmsEn7zEriW9cBRBo3egrny8aprdGdBZvNKDdhkHZwBCCvL2te5WKjSJr8BMXmiTchMf5veC5QzT",
  "key22": "3yLfRW7JevoGJbpcVP1z2TucouxogRBSYSBBpLjVPLXVS1HX1UmPvks6uQVbHVF8r4Ftr8PPhEorcC7kBZQ34n6C",
  "key23": "24wSmrpWcoFHTL8Yxy6KMEcszZvRuyCcXArLGLXdxc3dYrxY4QPSdnRowwYB6FYHTnTVJ9umu2utgzKuucSHHX4P",
  "key24": "8qej4tA4jnsxDmdJnaELQbhNBLSmAXxU7MNuGv63bXfRsw8xoh4edG5FKawrCWSRaUxb1S81Cq5EkuAiLjCTpBF",
  "key25": "ubzfEFNky919QJ7Dt2A2ZKoipyc9JsLk2AbLKRkjXDjZF2SbrfXrQ99BCXMWgUXsoWY9pKxJUZv2a7UarZkLPRM",
  "key26": "2TeLxVbMo43549ZvKdSS8QVfQd1xNkg8KYxTaLAG2DcvJK3SDJExikhy2VhZRvXQTR548hEKgc2tPyatmku3NbHe",
  "key27": "5AW3NYgpEQ7prVe6Fku5EL3kNRMo9NqeB3Qj7NtSTpJXU41qXs8uiAHAGLA1HrEMnyxCx5DB16V6BpXQ4248Vyho",
  "key28": "3EZY61i7obuu9F3DUb4hvFiwsebfs7EFSY6nnnVchygdztWqSBYA9MMX9PQWJqVMa5YFxaKM1EnJLgiWPmgBbmvH",
  "key29": "4NtdTBWMs39nA3EzSK7BGrvqNUMWKT9E2FLRMkvYtFeE97K5Wzr926BYzT5ZkKJW6DTFoEeLapQcz3JtFAHHeKEQ",
  "key30": "4Hd7bAHCbDmqqihvMR3numv9rexgPtrTMANe9A6MZ6AgwWCjWTnoxYxgAScgfA2jmoWUumvfQM8rc5ivbuyvqNHx",
  "key31": "3tGFC9vGBvVPKj7YpDJzpQ6sopErYAg9H3XtVTGEePzbwB2iuKwrTcByx6DYcTrnJsyazVoFih7NUjNwAhaYMAp3",
  "key32": "674cGQzt2wzGKN8uypiCbMv4zpHrEdhd4i4ccE3hwsqgGruvbvzo29ViWFaJsTf1bLvCYMqT9HecZwPd6TTbFfeE",
  "key33": "3YxYvxwgXTxso3PA8U2efpFYaaTMNMV2gHtA3ncwGDAB9P4ezcb9wimwDWJu7z9TgVVn84reHVtv5GzAvs9EVpGA",
  "key34": "3CiHmvH6HNb5EegCWj6jikiopCPE5P171KjB5UXie2AWZqrze1tcvfCcAcjMJvcCduH98VwEz29ZTCW1aA4rqxqH",
  "key35": "3f7q32YPh7RtLBjDjEkbUq7pLLwU5FAFTuj4jnwwDWtRKZd5AvZNVVJhtnbURRHHP4M3hfewkXabRGopNfo4mQkU",
  "key36": "3kPt7R3oKv6D5rg1HipmzGjK3LHv7H1NsZzR1N8fcdshAa6QJSTFjTd1hqVjfBwszaiUUKas18XE27Ecbf3zuuya",
  "key37": "2eqdVJupQduEsi3otUfDeFg7kVh2iz8uJMboMM8qQh7E2Uatxr2aQyYGeJhRtkyQQWTMK6n4bupoFQKfEtCdtBwc",
  "key38": "4Ld2xtDMC935F1EszKmu2Eem1DeQkATeMZ9KVViksFLCvC8NBrCMuhhSymkbFWhxbppyNWUGXJog9s5XGB5s4Ep",
  "key39": "3vqMMLXdooWw1FSzMtyhUDabeX6hidA84tMduS5UXsf7CLyoboSCKC4kY8ojxSaFtXHc1QYr6dvYDR4kQkHLYuN7",
  "key40": "3hbCAo2THry2scm3sqG6cNPVTo8Vam8hJNSvDhwqNZdFohn2KXYP8QQMXFzppgrsJ3x6D7ywaXRmcZM3jQ4yrhGY",
  "key41": "2NNCz53txRjY6UAosXTR8gxhab88hWsBwKWgXLiJtyf8FP92n89t1aQXtPXc6rq4eLtFfuKmB78B2rRiq7ghx7pK",
  "key42": "5tKgWKjcQWkuVeBcSuiHvuiRZxXLWb69GhRPpdVs3trZRH45hopwpMd9b2C4pkFWvqeiQ1v9o7azPRTH1JVexMsm",
  "key43": "53uNAqWdjZKmFENWq8CXt1M9e2az9W11shPyHSEvpV3RFQEJF2id815ETurfMBXeWzvJvT2E91bBwq2vbeMFYAJD",
  "key44": "5ZXzkqVE5QaFUkPvvq4UMA13VvDhCzck3mJF3CEeS3zFM14ZZBcP9ZugFiGr15d67qBjgycMc4aowMDAUqeKwvxR",
  "key45": "2f7WdjmRDp8SKQGJpCbc9mxcKsGGJPCnTsp9hgq9TzKc94PPu3vmYNKBo8d4ZkBEAzqUWMsRhzGhEmfsv552m2KP",
  "key46": "3J6bLf8zRfKwMZF99oqEccMTdxdyoAdp8XV34q9fNz9Bpz423zCxZXTNdxN895w5bsnquhpvz8A964VTRLwPYgGg",
  "key47": "5hj3SF2wxF1VamS8fFeXH6uKKit28fdvdnpqQxiVDsjZsKoc8SH4UQzLgtvmn7i7EabqVkpVuabdWJRm4vRGwCmj",
  "key48": "2CnoNFmRhzddLsprUr3JRy2ionLCak3zx6gk7KJsBprypx5ccs8BVSL44CjpPvx25wBVWbxB3VSiZ5HhMj56owBk"
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

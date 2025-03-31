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
    "3r2mwt2AMuYKMnMLBVex49jYsCa8F6RDHGhZSRcNXBSNQDXMLBb93rN8HnyAJMo2C1Lb3qhQUEHTuq1RvrM8rtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqhz1akfx5aZRn46rD8781EsF9xdXNCjfDAhy3CTkm8u2kPdUwPJo9fz56o4vajmcqF48wCM5FGp7gjNbeJj449",
  "key1": "3t5rAEB4QZ5pG87SHgMLeLTx5gPuqiRdi8S77VMfJWVkcWMcJSKHfuc2RYsEfL4S1kjhG6C7gfMdMeaznMJzdULc",
  "key2": "2feBVt9YY5WsT5tJWh1Ee1YaZNGJGSGmsT797NehogyhUbXSjcJuA84cSLsa5MmjCFfeccm2QDkvdtgjqXwmHT6G",
  "key3": "5jNB64zJSkSyVcNTRJeumRoELZztGdJhzFMzSQGSGZMGEyybjJhUruS3K483WvtfmUXAcbaib8BXbyV1gHQ2m5VE",
  "key4": "Q2tmmRdscGswBgW3GtCzP5L2UpArhApfACQRHSxGZBSZhR7wZaUcy5Wy8jgoZ7SJPtUDUYnxhEL1YNwm98kGR86",
  "key5": "2xkPriztLW16LBiG94XYMwwEXh59vy24ot9TMCdinCpGDE63a2ob5ywQWLhXrpiQyegwe1WTiAQAZtDV9aU1fDMp",
  "key6": "3pLfcffF1yAKEXCnDrhTb5WpktGQBDYugM8enfsG54CPUfXB6jn3WdHH8HBVpbHPjRDGtebELLZThaQZLjZApfLQ",
  "key7": "4q3qh4a55eUhE9cQsZYGhqrznxr3P7SDzqq5tCGD3VwuVa9BYot9VFEYQa3ppq8BRLkjQfRDDafxSkZQFd7UyvrR",
  "key8": "22aDeLAYHWnJrkWWUTCTMFpr5Mj2fyhmXAV5C55ELPcdwNgQL2kx3CuGdVXM1v4p1Fxr2rGAG6NevwZ5Sfqw6pYk",
  "key9": "24cWE1Yt5Nfe3YNFTmmMCFnxXgdEMsxQK2t1e8BBoseCz83PASXJeZFeKETgvUXmuKBnmcfMfbG9jJ99dxpcEN5U",
  "key10": "3ZsnqPmZ6JvQdxvQnWcs67PejRVaRq5BU47nuEeJfHvQyHQWb5Y4roKEpACtQDg4kj5xzhgGFqnW6HUawuekLLEE",
  "key11": "a6ChKXksBq2d4Qs4eoibSdTsqNFqQLxKWuWFUgjnM4SZY1jdfNEVzpZpnbW2JLosd2nG6dcQ4bYA3scSuvZXLBn",
  "key12": "2brTM4tJeujvbRWTRMZQuG7hz7Y28sVmCX5rSrPCYNEYBup9xQzUxKaUz3FoMuXkzgSBKXPDTLgHMQ6bzs5GQJ7T",
  "key13": "3ywxuC6DUpyaVvhnbxoSp7jS7dMsWmxW6JwMCgK6WshoThWReyNQ621PnF9X2wN1kRw4RcbdYzG79tXwYKd4NWDm",
  "key14": "3i8WuHTofMtwQJF5PavmCcAWyQTujjJmWLC5KphgNNzSZiqqPiLcwFh6T7kiJrzq78oNUp2Ra2vzpcaiRDKFMoMB",
  "key15": "4XvRmXRNNAi1xeR6n7h4jKdy4xZUvwum9prAjQdMMQCGLLPPSKxo6jsu8YqCzHNsGnDMucQL3pAjJPyLRMX7RQ3a",
  "key16": "4Ncb6wi5s1RxT8UC9SLgNhQ5QoDAFWS4jpog73oFrjXTsqbWn8MAP6s1G54gxP2mAidnAnqhEcNwJNW8nFC6VeWF",
  "key17": "474p6SW6WnekLMqGVLHJseS9cvfBDuADaHhUxftC4HXrLr4smWbGsxnCTQ3cVNqxfVu7ixx1JS3kYmHkufKKWVnR",
  "key18": "282bt7a9xRqTSuEUPjLaN5WZrqnW7fABPd1CbkvUmxnhGFnT6tWw7Ray5scF6DDJ3ugh5azT3mQqst2QqcCwBDUP",
  "key19": "4nryb5Rxitk4kVkTLxryatEs2ReNBfWsFB49maedDQwaJkvzzskj4AkjPmoiaUG5NjGzkEZeuHHw3AtrM9nVPDo5",
  "key20": "5cEdkzP7KSDAsGjZFCpHh5qaR3pfRnFmaibTFVxjivNgEYLMqde5uBycjwckPJir6F9gjNw3gUaccirzGEW2e41K",
  "key21": "3LTQww8iHS4Kh2sB9neR1s7FBneaLctnwWZBmh1sXqb23TaTP76LTQMkgiAotgvvKJrD9Eojr2ZnoKCeytaHkUfs",
  "key22": "4DbcBU7W17mQnqDgp4Ty1hvkdFteVDSAJzs4g7JCdmeqWNDkKU2LKgPeEZSWAZGCoPnbPbzkgb3se5XcbFXPjHjM",
  "key23": "446haKdBjX3HB45C5erqFy9N7dLVxEREWPQoG9f82xJfYbRovbrkKP4z1uLg8a4XKyDoi3RRPw1HRg9aHbzKkBKs",
  "key24": "5R7svud8hEfiCPZ7RLpbK7BktgwK88qwxsrTiUwVgDAu7BKn5UtSz7NrxHsevam93gRDY42UiKsfZNUYj8BCjw7J",
  "key25": "3vchoeyjSRU4Dnk3uKeCaECfT27osd7GGa8Dg1o1VVnURSvv96hPK4eh7EajdtRJYjbXgaqM19dDbxmTxBvEh9B2",
  "key26": "3RezRkeqECJpsEHruSzHsb4Yb1y3ouWxgvo3DTF6mZVrxT7AWqNXykUbYgzQK78L2hCdv9xJiTw89Md3qEtiEC2s",
  "key27": "38VBRi8misQGkvHbLfmRxMdVWob5XtBtUnZeYDKoewjmxfQBKy2suhVjwJuYfyxF9ZfMZBEgiFXuExxWEqtvdyqa",
  "key28": "98ft2E2eXUTsXaGTve1oAnpnDQDvthsHDawdFLg65CBhY6328z2xXgkuwdrK8hs6638BAATn3CRvhmE6eg68Ydy",
  "key29": "3jL3dMguKwg4huJ2DDUDG7o8kEfFtuScZXvT6CM9HJ3FdhnbzDkXhT1s857vuTja9MaToneQ6yHezLhA4qwWfuhR",
  "key30": "5Z5FeGT9dD2APtYd8wMWE51ocaoPWNf7oPx3qcGu2sw32RUmDUFPMP87AcNN5R7ZEBcp2khVbGxjry6EMjuzuVTX",
  "key31": "3MVS3DqffrzJh1GzTnez7EjycZ7nWdxK4T2FbxwwDdYkaeMvRyCvtQTeBbdzt8aBkaXpwC1NM9b3ENoNKzJxzQzs",
  "key32": "24vdxn3MM3SYFiE2x4Fgj6ikR2B6sG5SMnsMWaX5wupqjjKQxuUTegbUBHJkBGW41q7YaaizbTxqsA2HX3iFMudS",
  "key33": "tMREvd6eNBZjWocyY21bWqV9NniwTUmkoCTGkBvv3qzafRyGEz7ZbMeigvZgJdpt1Q43p7BULXmHhDoG4xBvq4k",
  "key34": "4w3iv6Na9QoBysbpKpYCyHYD6TbP1UhUKPE7mouLV4B4rsUrjAFpeofFFLJR5sa8jcsofjAUGY5RAEVYoUKkmwei",
  "key35": "2GyzqjMLbSyC7uvCKFSjjhE4XueUHVSNPmJeruNcyhuxNw1F1NCJQ7R1bbSuZXzL1ttxg5rSNbHzTrFR5jrBxD8t",
  "key36": "672M2WaUbRwKiUxYa2sujsmrzKEm49RXXKMt3cgPnxSNej7ks48BbgHfW8cHy1NWBY9YeHaphwU5K6HhhSS6yHFd",
  "key37": "zPtQbos4g1cxvfP5micCgQFabf4y4YNisroFoEasfV9214vMYMxYGutSqiX7CQzEehsK6Qgdh3nBfiv71JhbKQs",
  "key38": "wS8vx6DG5RbHsFMJLAEPD1JFNaD3yeYrSb2NNbwiMFdhVKhP9a83Q1i1AkVLtcBdTUTmmk82EUBQTWQTEzUGt3Z",
  "key39": "uvAAJwABtcFV3sy8K51t2jsS3vrXFxDfwruXVmQZNUGLGt7dg17bVBAtKCjM3sqFRpaCszErbhXSKu5sb8uUjn8",
  "key40": "7yHpTwWrRHeWP9D3XBUAqkTcaPivLwVC3e6TcbhTAHC3Fps2tfD6RUu2F69VZP5TQSfN1JKWRp77i2nVPRz8Mym"
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

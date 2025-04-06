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
    "ivv4mgBWR4SDwTeeVzaTKo9sc431N6oVpSiqVcrVY9N5CzLARoXuQYiLCbV6p7VpSHpmQhug1UraB1142Z35n88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kh2QyETSpxpSjmR5P2gBS8XpFbsJsupHzkaivVsKDqgZzXvbeHiYxCdNDWr4bYaTBQ38RCueQ6eedSkygovxq8J",
  "key1": "3VcoHstiVsaU5HRtXRNNbAW3bmfmMricHK1MCSKGiGkXPdk99qGvdx3y2GyWixc4cVQxgd5TbsPSiG3SMm4cTtH6",
  "key2": "aNWVyTwsmD2PHQC5GWcUotuqjUKn4PNQ6FAt8QicH6Gp7tP3mP3mGoU8ZSH9MqKTWyeq4w8SHFa3jQBoDc8WUgC",
  "key3": "3DpNDrnw1MBu8T3whb6XUJoXyRX5mPBxsyHGAD8y47n5eY4BQXK5XYtLpVQAH782vmHer1xRmMPsHRSYzHinCVZE",
  "key4": "5iTByFoZbfHMQ2AZzVfBEGXUAroEUeHH8D84ixC8WzAep49rCDex8ZTHeFiBzX2WK7j8CG6edEDWWaDSF1cYSHPo",
  "key5": "3KyWcVSzhCfG18iWMhAzepuaCi61A7qWp2R5CQJJB9CZGE5YVSwK7PsFDWZ1TjmazcPZFXFh2pMjryLDpK8a1VhY",
  "key6": "4uPas9Fd5PEpjdFwhbPoVYPk8CXYZ9kB8hPYRd6oErDfmKUrUUxhZ2smtGhYuVdm3tZs9LfdEJ4RRLWSs1PxZcpb",
  "key7": "23251xJSFC1guTNHEQcykMFCwXAfrnNRsMLdw2hKewwrNJaBRz5pNbjv3618QhijvRzpP1cWMusUjkS5LUgNfrc9",
  "key8": "2H9dfSey1K4y3QB8i1CCiLo7y5dN5BhE5d32gL6wR8Xo73AmfypJZ9eYUuFryXDBZggobbxPXqvqEWVz3CeLida8",
  "key9": "2sCsdpXxSeLUyNpp5jac6yZeT7mfG3LJ3eBuY8BBfqLbr4DK39ZMpmewGcPdjjsQG5cisCh8SDSZMmZXgNCr7wGm",
  "key10": "uMHtWLJihhfVnC3SLF5giZTVhXMYhMXoYU73nRfZcTT9WxsgjtMWMpv12bwc15zPdTJuHkdvRaoEBVMCCWGzAdW",
  "key11": "pLr4LQrk9GLUoKCD31MLHbvMhXhTuBeLZrSCAWefHcTh42mwm1JqwgtcNMvpLSiwo4TxXfVu3ZFi25apNrhg3sp",
  "key12": "3nvYxriX8zgHU8iXE1mmQnJwW62eerPHNt4d6ZJdN7vVKbd9AiEMLtUFkqQcYtkDHHa8D6Lgsu5Wmh6T3H4biyw5",
  "key13": "chi8fp82bHSyqe3UkQdFNLGQ2xUHuBndTH9bby4oqAWX3eeKSRXWRWcwns8YYapQu3L4KxQKWakNM45z4UEx9hj",
  "key14": "s3UmUHaHBvatq3ohGfVnRzLm1TkpBVSGf6a3WDCc9axVFDtj43x9vjQMSG3oATvzL6QwddBuvYhVfqjWMg4Aacg",
  "key15": "FmEhjh11sdH93CxfYV8mdb4Yy7uRTLXjVTZtfErurbm8yGpLBqGr3VXu97UdEzrkvftTpo2URPaqJHtRYFo911k",
  "key16": "3U5MtkhxmiTgWkNu1Yawqp8MeKjzRWS23zUQvRTJf2nRjiM6Xa5148yfNHBSZu2NwhFHrauHvz5WsqLcS3Er2vKt",
  "key17": "5T1pe32zFNYwrmg18tSq221YbJrgvpcPKz5UyEUWctEiJk8Xzvk5aDuwgwJT2TJ9wSEn7m1unVVcvo74R9CPKs9h",
  "key18": "5ymNMhv6L67TDWv1vd5s4urDZuRUkotwF2XBJrn8eeYsA1Bjf7FAeoY2B2eoiwzn2XQ1uEL4Xk2zkJz7CkWvEmJE",
  "key19": "DVRYc3sE5uEk1u2GXV6MoyCz1ySv3A1kP6SUXmx7RouL8rAEjjjhGAv75oCaM3SbApNrWNuH3F5LwrDKqTjxMmE",
  "key20": "4iyWSSrRNABhXWEwuJHCKZ5BiKgoJwHPc6YBM21xhjCwshaY6GK63JaGxghF4vxxzEXeLsZx1K9AtXubDB6Z6nR3",
  "key21": "66BWmJjDPzQphSWif8rGcJUmox9EdWTmQFoWiaLyL7to5YgJJSfeiLmNZDnD7Vj7KCkij5J8pAC6nJWrn81r5xzV",
  "key22": "5sV2yE8yvbrDyjyETUtJaJY9Fmkr5WPz3zn9BwNuwtD3jgz3DMSZZEhVa5KkGRmquRiuhfngmrEpGNTsRP4Z4zdt",
  "key23": "sthXAHs6CHT4VKP5GzKD9NCaEdLLWVgxHYAuWiUyf1X8ogkzmgtt84RFJcupxDvWhkHHDXZWVCXDERaGPazVwd9",
  "key24": "TNdWGT1h1xTdFty36SuWAC4tUPVHxwb6qcY5gzP1kxhnY6oAPpGFuLJhV2ywUwSeYKFQ1uY81az87E7yNf1LP8n",
  "key25": "4bogbW2qvenbVFGMvYhrDTNxctXE35gfR7Em2XVyXYeXSXhcGguW9j3DTgh7NPTpnefyc1oD7CN4JPHdMY2rmtJm",
  "key26": "4guyv7gibrjRpYzia5hFHDgVJix8GH5nVqh3T4VxNPYnoMMBpAAHyHBfRxNqnwVgiGFX6WWpauZoDFztwHcfixcN",
  "key27": "Dz3Wt58LqqwXx1zSXSSaSXcK7W1kvV3XgD3hdGdoenge7JXXwUfzTLpd3YKkpcQd6CvEftNud8dXtFQBNPEgFyu",
  "key28": "5Yy8A9TBk4crN4sauk9rEMkYnq5t4hzFv6QbM34So4Ghr8E8AkkzYbc34c52iZ6WcoLs8Jz8DiewLzHP5rt2xKrh",
  "key29": "xuUVDnHodXN24daY9juLBxBoKTFhzHh7Wnu8JWmFchBSRcjwhDkopzTKkW7rcwGbqnJJFychrn8zKuTpT6H16KF",
  "key30": "5Ze1cjtLN77iXoATsrPcvmijFFv8mPjNMQ9fZd6CY9CUGKRtLc5Ddas865CyagWtcd4crRjAk6PXS8gUsAEeLMcw",
  "key31": "2Bb5ZB3YHtDEocEKXMXY9anmqsyE5EP9HV5NmurPrdndbj8JwYk2o8DXuVKrJarMDxB7YQXFmWRRNxdatd5MD4wE",
  "key32": "tB8YoWts5Zv5sZL8eLR8UpNVbfsfBfC6pJKs8UAt2LcFzdjmHJstXRAznzTT7NUUYGmbDvkwDSeJgN9V5Cb9zJL",
  "key33": "fV7qKq32cxdEXHu5jrCrZneRMkFyfaDGoWNkN76jXfUyDvphuwDXtxd4eLdf4XF1Qq4bP475DL5TBo34Pzzy2r6",
  "key34": "4wLgkGCsMx2UKZWnC1Ew7NnyvJQ9tkVsvFbJDQCoGymGTPyg1iP5in6q4dbL2QtMBG6Cqd8UzLCzekpwL6zX1Yvf",
  "key35": "4yxdcUfFoLVP2NRBexrQdKZzMqegkEwyerv1BunHYtJfjZSnCQ8icjHP3zQLL2m6btrWF6ua5UHAQfb8fzkQxVZk",
  "key36": "66LYVD85ho9taqrBRgAZKhpF65UiNWzQXEGhoUL3vs35GmLPbWBfuUysyieK8Tpq6DEpmViBHVwY2LYiGdzptPom",
  "key37": "4LbHMBGtqta1WHiMYFLHkZHWjBPbDriGb4VBVjEv7YUb6twN92vabh7Uio3yAvtUHXZiXLxJ3pkfTJzMH1xMotd9",
  "key38": "dBFHAwhkAPGyzM36uB2hChjeuk6j7t4uKtU1jqdKeRirqn65ZuXFDT9zRVaEJ86noe9XmYnCA75ws85rx17qcof",
  "key39": "3DYtAYs1DkKQoqGpi2K4ZMk8pJ37NaYNz8TgpGHwwGFv5kdzToJxsAMTsAQmvM1bvxuAJhW8di8gQe5NLmgcHDqL",
  "key40": "4FkKkaGhw1UXs1a9XndktRpQkwm2rjwyq4xSYEUc3uAyyjTuDFhf2Ksv66uQWwPEY1fCK1qk7AsKnUFuW7LG5JPd",
  "key41": "2gc7Ye23SkiEGMbzbfJ5ZQmCnTCPQikp6XuE8pLvqE9m7a4vM5e5mpoA2YCeEqQRFgTjG9wpxN8zYB1avmahBHua",
  "key42": "3ekZDqfYfCRVHosWzsmG4zpcfwwetbJKqZ397RzeaPPCCk8cZFqhXjFx8VRQRkAQv1dQeDFG1bSkDENKCySTKegv"
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

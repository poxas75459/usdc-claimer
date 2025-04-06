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
    "vFVmyeebc6FRc4QNHAZA94g8jh4KH1DN8jcYRoQt5cNuXLkfXNn73NUoaFwak1vaju9sTeibLTUAqBr5b1EdspV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hpf67AD14s4N35jUBQxAT8HkvdVF5PTvqG7g8uVCEJnFhvR7rCGUkUud6NJzXeE2CMBH2PynDDH5Sx7xhLBWkHR",
  "key1": "2jfTHGMtkRsYi1JopdRhBZEGFJCKKhhZ73o8vt9GfhiRzsrYmQHaKQHcKWvfPVJiVt3xUoPsRvz8pL16tJLhsLVB",
  "key2": "5qmQh9cq2kZuxSx5a4eCtQ9SYWNt7DTkEP9bYNBvKbACD6TYmAZ2rVisSTY9UrFNBtN51dgeBRqpn9DVZsfrKog5",
  "key3": "3JLEh8aCGNX9uGnW5NHRmVEgnoH4GUZKWZ8xdsY4JBGnPc667rWmuVaB7C8m1p7iqXjfwTwJoefCoBfcb869kCKg",
  "key4": "5o4wUCUnYDWUYdkVndfGWYrgEd4baxN1jnSwTKExzDuiuB6MnHPaZiqA6axNThNGVG2QUoni6w228DCf7qWfrY4u",
  "key5": "3vjRYC3CsvYJEqRow31zAXZJyNwtJoDEGBnvRSbxKq1GfuAzzBQHsB4zNNqMedVQh3UPjux35w8zG9DSriMSz9wn",
  "key6": "3L5ih6CU9GJrcARBLHAR3FKMzVoR4pEnzeX87fTHrWe9C44ddQfo19n38oYLF3N8uuAuXV3f5CVyxaVBJ5GF6HTL",
  "key7": "4fRB3eAz8ZFfdYDgBTps5uyunw8Eq85PYhGDJmzGhYkcVxHamRq1MEs8dPVf9zHgWDuHxDq2RQG6SqTNdYzDUGt",
  "key8": "CaAV2eaUX1RrXyMyBz7a3yHkiEUDumd4LtgEFhsaGPNbqGBHQVYtf5HXEKerhK2Yrh8R3tJHgovf8D4PNqcay9o",
  "key9": "5KEe6fLK4nKJyafQM3kpCXarRj9GknMWruNXhZbiKehTbQuBdJYHhA5SZnJArotdpuFk5FDezoqNm8kvFfeE9khD",
  "key10": "DoycU3sKqqnhCkKLFMAf6V6Yb5ZS7o5N3q5e5DhSYR73m5wyW55nkiP49H7zgJmA9uXQcanvmDVhBpwb8Wgp44e",
  "key11": "2M3wkNiJWhYuaGGE7L5Cvgb2uV4crojjKcfkGrn3AwvrZ5PCokVt6uKob21X79hvFVank5yGqD2pwXf4P3sBLFA3",
  "key12": "ZWiD9wGzobAPc9DAw6WNNHNnGFkrqykkjfqBNg8JwEjxwmJCBfn9bwEZpt4FyGbcy1UztdvDN5crJaRFuesAEcs",
  "key13": "25C4p5yMBeioLZuX95JCHDNpQcd7URFxZiZjDbZpVWG2nUxJo9m1mEJjBpMAcui4YvDA3V7m5cDA46t1BmRaExbu",
  "key14": "5yRGkoKrZqi2mLB6vaFCxUuMwJW8mKtA2umWKqvbX8wGANAuQpHW6uZz9NBeu7MBmZTu5DCZz3KE2kWzTnhMN6i5",
  "key15": "28aiTt4j1Uwgrwj5AG3g21KnUKPubCrvx1B3LfhuVy5weu6THvVsWAD5zRjAkSgEbTf969HD6kK15qNNZ2HWKWx8",
  "key16": "rTihsaU2r52ohxhhKo2p9f98qvxSSby2RzuxbsK9v11pL3oYZcUtyVn3xykwx9Rkv2QXTKsqD885g2VHEys14Eb",
  "key17": "47CFGHmb7vPzGZf2y15hc47SKoJkp7bCUqVRyqoAobSBm4WpN3SMSLLQoiwUzgow4VxW4gKPq9K24XhY7y7cRz1i",
  "key18": "5ATP75fub728GgVSfzaJX5WwUA5m7RvSfsJ256oVSsckSVDGb5g4Cm7cMpZ7a2P1RAWtg3dVWF6mJohXGTr3iMgw",
  "key19": "5tuxLz8XkGQuVugdxiuvQM2zorvMN78GoBmaaT3L6DogVQAeh6zznr49sJw2NVvyTUV2hVh6G6MhAs3bbRUXMAZf",
  "key20": "4Tbwndov5KGBoePXrZYpBUu5NyLnEPN7GrNqo1NQwPPtXbyVhavhbgqxKYVBi83PNxEMKGCsAY9Nxp4nDBRByzg4",
  "key21": "2za7a7UcW2qEDMPCZBxw6xs26mRFKQTddASuWqVsBp1w4jmDKRPa5VizFyozJLY5KvXZbAdbsVdGyQSpUgZVsWyQ",
  "key22": "HV5rc7Go9AchxcsobghqV9ZDfHxTqnZa9dUPvc9SzjHDMNS26X7QVP39QiDxy5eVGTguo6YE4WMWC7wrgqmxu3u",
  "key23": "2bPF1Gu6mRUmNxPRafekxLs3btBWjkh8dey6ErwD4Um8bjy7BttjNsFXr6Fq51wPG9vLSJJfi2fBswQiLbUiAg5U",
  "key24": "4UKsRnM4tFVK4q6PWYzoyd9R4CmPVuATxKw5j2kKaaZjmAYV9wkNrugCRQBqx62qP2QV6CLLXfV9vk9DoiAxeqUV",
  "key25": "4t4in3nkuTrAazkE7PHLJaKGusoGjWyiVdX9wUFG6aMZVmgT2jbgZ7AxocgaFvbXXnSMAP4daSD1UUAyZkMphH87",
  "key26": "5xrcx9XMvZCrR49GGBM4We2DSDv1ip7dRMQePxsPwX7Tt5Kw1zpwcEPAHZo2k4ULggKMK92pTAkVGLxQMnnZqhwc",
  "key27": "2tfD1KErT9rv9EhxH5YkWAtoP9EjaR6D7WZK4SKXpCWR4FpGnRdZf55XadYsSdtLf1mYaNUJdgRA3ntYpnhjTSC7",
  "key28": "2DFAkd6Hc15qGGPBfiB3AsD2xrjZgtwpSYiKTmxqqK2EekzAG5F86RQE63BGnnm7P91NyozEMWqkK9yp86hEJFkj",
  "key29": "4YMkYB7s9PDBAxBwD8gQ7MDDdeRss8ScLPrjnq5i78shXtWr6NubED3TE1JdwE56J4uEoQECq5AnLpczmTQnrEtF",
  "key30": "2yNuEAc2EDnsUJcW7u7MeLZvNo19AiKBHz4TseZ4tXMDPcnGVQH927GJkN1VLybMjEFw9MUzEEDdmgxroz1T2smK",
  "key31": "n1t5ZDxhMpCLDWNRpvtQyHVpuLcSSgYf6BvZoE7VPiciGzp7AYTA4HriDvDoycjPyazsGHCsM75zuX2xE2pwvrc",
  "key32": "4WiQFwvgBQRkWgK2MDnzutCQuKLV6aELWuLoaNzVrrJoVqM3iZZh1msFpAZeD1GrhwbTTzSh4c1HhmNAtaaHpLaC",
  "key33": "2UzKFjXFRPcnGEbtB76RhmdF2QBzqRCoVoxCcQGEBxe7es9ZXMpr2HstC5uU73D8CeWTitkDgmmqsfKQaqa4HJJa",
  "key34": "3YmZTdYQw8kNCWaQ9szAkoibjvnHDdNN9aKCCU5eDbNtsbPjJQekLWqPRC5KNHYf3bJigXk7pMRehycwTFzEP5ia",
  "key35": "2SjimzE52mTiUgnZwPpsHDSDuCtKiNzmhDfLGP6N6BUQdrNaN8rxDTZ692Tsr1373PCM6XimXg7RdufYCDfJ1JRQ",
  "key36": "2wqCLbJPbzK3BbCheYPMQm7y8A1aP99oSMB5RNKrxnC45NU22S1RejrXCcp5ZwdF3jPZZqoPx6FrGcASJ1opmvA6",
  "key37": "2LWwFf9zN8VgCiPecfrkWiiyznXUqyQRytj3zzyi3L8ozsDwmwqBAkpu68DkSvT7QYmoLiFy4qipx4buuPm2dDgd",
  "key38": "v9sXf2Jk8Qcv11fjMd9iJ29eXCuhimzYg28ybVnBNCyhGoVAth8jC5ajsUJMdjdav3tw4QzrGhedm8xeBdu5dzs",
  "key39": "5Njx97wSYnS7p177Mv9UNd1boe3Chqz5ySJ9KRY26bZxFk9uJtopGXdYC2LhDKrJ8cDm2EgSiUVBDws6TTMBnGKb",
  "key40": "4vA45CxP1CjzBBvD6Jqs2PjPQoutkMZ3dEVisERwvWdsDQ11CUmZDQsJLH8gsnBa2XY4YKbVcGDjMDS6pV9dZ4J9",
  "key41": "5wtj4MtdcJzBcLLDQkgiFmgQ5oNGSEn8N6gR54L3CWVJhFMbzTZwyxo4JpDXXzviqnGrpunFEJUP6Cd364kaUD3K",
  "key42": "2kA8nxJXxcb9rvYnTTymGKMXhRKdhykZwhk3MNN5twzbxQEaozCXcr4dyoLFs9KtpauBHdjcNrqAinRrrJYDa95S",
  "key43": "3jd7iLPbhHYTrFGD9Zsp9wEdJLsrzLfC5Dorp2DQ27Zu9PKc6JQh9J7PVoN8zrfoRrSShozPwYLrEgKm5pAh5wE8",
  "key44": "ZEVx67dBtzdQn6AwdvWE5vQaUpyzE8pefohfvJ1Yqk9Js6YFWgKBFZZiQrUr6tMyySW4mSYfWvvniVrHuPMrVxs",
  "key45": "2dM9gGMSUWZdaz9Vd4AaFZBkorPhHYt56rhqhGKieQ1GguAKhhZcATRgoBHs1A486ntbCMy8giVNmoTtm3erRRM1",
  "key46": "ztR4aqne25g89YwGnUMgNDcEvkmDE9HgvJFJXxDiDNWSLkMQTZaKeb6kPZ3EfuDQww2CqjBRRms5PCfYWKF8Kje",
  "key47": "2ZhA533ANwyQQ8K2FxbRd5G31EoRhKK5aGJYToG4ZuxEPV1EGcDXGDJviGUpLYmd7SQnTQynBV9SijKqYLhbHZc9",
  "key48": "3mQr9d8zSvfirexBM6GyaCRZH4TdL6QP9NZDCpkyZuaPD7QW3A5nb7CBAYzwB98KvQ2uB5LWx94mSKBSUF8Tk8Bf"
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

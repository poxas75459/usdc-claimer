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
    "4UWNdw1WydbrdUZpcsYoT2p1ShgwqPhm1yHi8GJLL4ZwLXz8tnnCTDAYoP8qE1z2QZdYxCkJkrJqiiqY6XthMZSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oexoWEiSeMaeYjx5BzX4aEPF9k89k4wQsMsSmzwzusWew2R25YPwui9J2CDii1kC2QhNnMgYuZEDDoiQRvZSayf",
  "key1": "4wqa1kXpz1rPRzEBkKinnnueu4Gz5CBP3Zh4dJWKwu1ffZiVBDfEqP7hwmdhDMppwVosvbosynixrbEB2hD2JjtU",
  "key2": "2MKmDVh2iu4tzuu5W6QgFVeqRwPHdnTyFp32jHqZMczhGshnLx7wWmSGLMduPLm1Pi2hu5sSxp5Up272td8CD71U",
  "key3": "2dDYw4FBd8vQLHGUzkCm7B5En6xGjaEt91nARAS6XGAdjQQaenBCdWbC7CxzqrpsPfAe3r2PApKbUR78DtxF38qM",
  "key4": "4FbXGLTamkhjug45WeWiANXS5yw6HYatFsafh8cPgmGyjvNi1pJxMoYnJ8Fct5S1FcmZbXVaYeypZSiPJQks5P3b",
  "key5": "3gVykgjN4tMhpEq4yXUb4qgj6E39vpt68zmdHnv9QizjpwQSBqgAQMMcZHxzx51xefbqGNQrJN8rTbT74mmKu2Yt",
  "key6": "jLGvSC2EkVXRw56HuE9y6VqzC23zbRLMW6ibyqdG8VbNugDR5Pf2PYagG8p4UNVzhRFkvyRRg79KdJiWkjDYukB",
  "key7": "23k2JPQ6gEyzzmwN4Mm1sUX7g5LWXY1PeghhUrcCqDc1NTWE8Tfvwv8BmqW3jhud4wiKqGwyxcauN1VdLq7bzP55",
  "key8": "5EHLr6FtUP8WvAvRA8zdAEtKj938Uq5xQVM5XN7QWagBj4yeEtAUfvmcvcwrKRFJNQepuXLKHY2CrPQP2wqfC94s",
  "key9": "UjVCvNuFPMbNVBzkMA6i4Ash4zDi1TuqXDyqe8smyuGmWoMsSBgEvnYVDQjEF6rkanpnxg6TkBZmVVRCpeUGE4s",
  "key10": "4GX9TQyGFqjrUAUx3okUFKGRd8dEbG6egEe2xm7dfTJFReekvK97radwKac5NWruXMFi3ATKCMEysrqkCEnPmZmS",
  "key11": "3jqo93wDDwVfJUQfRPSNbbFqvkj67iqpXrxRv49JYAhKSudwUUSS74nJmVe2V4G3AbBg7YDXL8djRXP8Vm3pevgz",
  "key12": "3fVTAf6r6PH65rCEP4J32ct3WAiA8AGCYigy65q6QSzRinnNm2t1g3PRZu7sqUFMnFvuF1UPv8LC6BvtwLVi9KE1",
  "key13": "2bvu15CDtoRzmt4bdEGzcNkUyMdbra3nhP2kpztABfM8p1VbgHddq3cojorZok8abBaKb5k7SaWwAc3iBfDNVphf",
  "key14": "NTF6WCrX8mrYkdAKVRevYqoCWn74gtk8vePGJgLLENEMMw14a4hSg1zVUvDBCjV81HQnnsM9ta4MDMFj2qjj3P8",
  "key15": "5BGtncBeQukQGX5izeWF3dvmpxYN5ciRL1hbRRdkwEb4KV2s7ojSexi9L2PuNdyxdwn6RQnY5Gkpj9BJ86sKZSDx",
  "key16": "3j9SWZDC3X1q6b295ABoUtj4tUJKNgWs6HixzejweKsp7gbMBbbVq2n6zwJyaNH2mxEKrkhiWqHgYjwRZi9GddKi",
  "key17": "5hv9SQNTktCe1AJzvsHuUQVv9SVUHqC8qngZKGHR9vCZQ7hm6vnbBc7bDd2mPb3ihehRzC8xcVkmZBHYnVgCwrB4",
  "key18": "2uFT1ArSqUyYteB1C47vbCrMDeQo35ZcJNfiQZUZtVtjLV6BBmcgz2F5ShHkTzAENtn25o282vsampM8MmJVCyXY",
  "key19": "2JcB4fv2UsHVyigYXavAqHPjsbDD3fwvimmXG64rZFLixxseX15kUMEwA4jarvaYdPJLf9PcFkey5DXER1hrUE2y",
  "key20": "2QK1RjSUU3ujr4rzmGKUMGYiHPvQwLgYXetwppogH9RTEXMdMJPLeoBCAPZYV9VzbMsHAFqupMh4bcBMvArgQMz8",
  "key21": "4Na8r6vK9bB7rm5r2DETUMPtw4KJXgY759K1jBFGVvAuhhs1UAc3ycQ1cQuC1o2DEY3Z6URPBktCBtv7T2nbQMmR",
  "key22": "26Q8Sw7X5eEjMbczJ6i7sqBrPpnrqFPezyDoE45ohwGLuPbnzfwjAcWLWtzNbUq7jDQ3n1iRdjV2hU9tj2tGRy8h",
  "key23": "2NkNxBRRwF53w3psATsrQYFHRKUGFqDiPVXrawisXhD1KBTbJjjKqv3R41HUXFnA4oF9cQhU21nMGYopxicM4VWy",
  "key24": "ferzrne7N8JLrpK3fnd8PMHV77L3DJEKwdjJzM1CH1Tbsc3U5o55BRo3zFCbwmxJBv8BDAdikbzCZz6gdLDriaK",
  "key25": "614k4aGVdmoTbtihukUR8PgdZFhHwGft9QC8f1fp7Lv9MKJcNTrXUbnWbMeo4Hr4WXv8GeMbbpJUJK3T4CCzDBw1",
  "key26": "2QQgB3uf95rRTfcC6KCh4n7ac7bjswu8Pyme5LP6fkaBbcCK9fBz7E88SEb2yLwr2JdWsExznHEctscmsHeCZuj3",
  "key27": "32uFLyganNJRiNYiLiuBeKmEGX6pVNyJUfnom8WHDWF4jFTFNpB8Hqwudzn3h3NGfxNVLHNktK4NhNA3ydwzT58j",
  "key28": "5CLDbX4w2Qjp3UveV1CNJFPEGy6eshmo2pYxyHU3Gw1TB2pXjzx6gAgmVBmhtqRCJ1cLAnMLo4QfkKEkAfuUwe4T",
  "key29": "3gBSntg2Uff8fnVSA99S4rfQ7HScRuqUh6rMuHsG7QuUKuMxxTp136J98PLjXox7naMXRqzcdsgQhApcyQAu7qVE",
  "key30": "3kbBzXXMRQNnnqGJ5u61pYZFoxCsRJei8ZMs68rAZU2YiYrRjVeVrMPyo7dUkk6nUXHN9kMAeKYkn3oQJVDMSczG",
  "key31": "8jfZdKkeQjYnBkcBh7mNL3v4GJqxrthQMRpoSEXMSVyxzXbMDoD9UvusjywoogCTK3QSHiW8GTJmsLVuxGQJVcW",
  "key32": "3BUtx7YCHgkN4Fzii1WdBm2VvYEKDYH9PjqU2VVTBKc2PUHMcP2Mo9zLdqNWuFqWwdSBT9xm8SeNEgmCfEzqHjyt",
  "key33": "5SfNBxpweybPFL4ZZss1PKdjU7bjZrNuUXVap8g8onAEdmsExAbF97jWiKzZKs7kvqdAser9HFDWiQhAXu5NNLik",
  "key34": "zRQESSu5TU91FeksQFV92VLimmtWW5kkjEnQLoZNV56oUBWyL8RhE5AhVePhC2nxUP4hDUTK5d6jarsUjrFn9De",
  "key35": "3ej6VnxygpuT83ky5h6pk8Yev1Pp1wrK5bwyBW8XGzQbFi4efPqbVFnGLk2SZ7oyLfYT8PSDCASS9YGUW5jbSkq1",
  "key36": "5YJHDQAojp5MdPDrRMRyuiq9PjZh7ejUm7oZkcqZV3DLwGcLknaCrH5aJ6poPorpKgXTCoY1AM87ejdwp3qeJAUi",
  "key37": "okbEu5UTm4VnCEKRKyG4HoyPNmYBRCoxSDn62vUMANuEk1BC1eaX6tzZow453NJKaGjEsCecA69Mt1tanGPqa97",
  "key38": "Ngb3VwMwunPkoACDWRMPz15gY8FPgiPpwahdwN4MXAoJcobG2doWdx2MZMhbxRtr57o1H2bA1UX7Ybt8kka3uwt",
  "key39": "2GHHtpvaERh3KEdeA8kwAGdzJs9TaTCkc6WDbDR4bvHucoFMfAi3YPoTNWQUHCfQVWsMwcNPKRxYXHh4A4suQwUS",
  "key40": "3tKC6nTAkWHRc17DG8ApfW3k4sWEPm8S9zRHeBRuKF3yLD45xGZoFWk1Ur13GgGFQA2rNSi5FK8FMmhBoLuKUFiS",
  "key41": "4zhWikbFbdyPMLDynvLgeNfchRsPV7QWjYyxtVhnhVNmtyhBb5AQcMYStB86FqPFNd4ZVxYAMqugDwMSCAJzfRn",
  "key42": "2N3egknpRSpDKnZL9TzNMPsHJLy41sDvDpu7Lhj5Gzg3mxzcMc69YWrpk189YWt6jFaPTKsUQrU9EGpG5FVfj6XT",
  "key43": "3yDd72fB57Cv1WN3iDf2KuJ33Rm9GXCLVyDTULdLUS9TiPsMQHcuNEgGJT3ozKc3E7J5aAoMPBBGAdiF9b7q49zi",
  "key44": "2qMY6arc8X3nEVRsfen3hzNupZpBwDr7kYzWdsfwydHw465rEb5FrF9BU5D69mXtxhAx1gBKVj2x7CDAbsnekdbA"
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

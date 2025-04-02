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
    "52mVwaVH7MdqahAFQ1RktpT9QW1yGxKfiZ7pqWgxUd2MWDAMoor1ywL7Dpy8qbkGsmfM7eCTxnp7zvm8ZtKV1cWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qc9y6sF8C6AyBKqwxRRyNeCmJiDpfUH1Hpirmb9GZpQHq9FqKjiQC8Yz8ksaf5KN65bKv6Kvsii18yCCogztKq6",
  "key1": "3P9kiYprH87fciC1edrF2v4EFNCmTj8ZBkpebaGzdbamJBE4LF88JNN4UxTKUCUJ6FBLaWfERBxxUuNhhWDWhDri",
  "key2": "5bMu93qrH4EbEtgeVE7cuVeFh54WLzeAdDpUwjLVu4tQ4GrpMzKsVA4e3vUSM6Ps9for8Cj53McgCfktpbX4XWDX",
  "key3": "27H96XSbczQPSyMmh8TkVEU1BHRuP9czEdapTVEfkiXDVG4jMvjFSWiUisSgNNoo84V7A234MWKmoAfk9dpYeTWC",
  "key4": "581x8s8zXxSv1qFVfJUpp6hRUnu9QmHRvLbrSF1aqz4PehuzGsWtXenmn8sVvnXKBMjV2gwTz7HoA1Ke2XkR2p2T",
  "key5": "417NFWh22a4DBjmaYfyFhjLCSfvWtdcBstAJLL7gqnmz9pHwCU8MCgK6qBEg3zYcwpL9A8Zgmv2Kz5myRvMLTLah",
  "key6": "42xvCE5APzb1nFaAseAjwjPERX4JSCyN4a1NkUfSvHe5mcyrkt7fCa8VzTYWrQRWL4pp6NnbSXh5vUUp1Afu269b",
  "key7": "2rmmM2r1k4d6eVaJkLuRCTWQzmpbeaMW1xj7tr7GaZi9XDVFae81573et8RM7C93uUyiFaES7UvJAMpwGLajPrfG",
  "key8": "nVFuY2taEUB7UFK61p1QFt9GeBodEmTo7x3RcNvpC59FRhkXGPnrT1hpRVC4Wh6bfFvURGexcwQN8K5h9YYDeDL",
  "key9": "3wM2t7kvmfHKP2jktofJCPZz8GKZRPyBtxSXziEYe5qEBSp3ezHS4Qj6RRim8MgEKd5whrfkFhMSiYq58RsVDZp4",
  "key10": "25XAgcJJRaNUgGMGo5yWJ37F2aDsVYPz6yLXv8FbPfh9VDRWQyiDoqhXGB56UU9zJGFVJLKyf4hnRQdvhAx1WdGs",
  "key11": "8Ehc64qMktTRhzM3KVs5ch9xXyvknGuMHRFMcw9coaTAmhoihq95RB6QypEv2Rz9SM9yy8UjP4Wzkpho5KmPm1A",
  "key12": "3MgPJ9Uw4U3ppXHSH1xwfxGJFF2B51PYaWWkLNdbbpbj7oYQHyak4TKeoM6ARQ1kFATYv4LYgCZeXJgdA9w6gBsS",
  "key13": "5U3ENEfFzvCq3WJkHmobRQqzeNbbpN23j5MWowPG1z82nHa6ivtAdFFJcUkYmJsWFhSsuV9EweoSdzJYUMdVfxN2",
  "key14": "3j2pWqFjPBzpys5wzfB8A2dypoP6kpgQHm3puJVNE3umv824tFCe5LtvS4cPF8vfCRkymMRsVDHZdsjBiQVUwuoj",
  "key15": "4wPKPpTfPpSYU9DAPvwnjDop5tRDBPipWVW6J9Sd3KmEHACRWHxKoupSqgkWCPf763pLBRGK9XriGbfuCnCKCqod",
  "key16": "5PYWuc8TahUzb3bARBJvzN96ogW6sqogWxoh49KXXvogKfvgvs92yVPuVcYoyC9FAyJyztebXo4FxaoEVncxuk41",
  "key17": "Lbwa5RGtTHzSB5RrgSxLYpjAJgSZj8EUPtzNuJco3ujtD4FGQSX3KZLDj2k3CMmRw8cRPJJgrQtYNWP5smJ4xQ9",
  "key18": "4yCXYaVffcMfuWE3zd6cRpLsyUr15JP92KqvEup4MSXrnzShCHWS7g74UzfqoEaKKgYnBo4NjKoCRGfMXs5yFNiR",
  "key19": "PXMnA2ban2bRnGezCnvFKyHqnjdpqDYqyxKvGwzQPvaLjSwBVKfZ15FavDF6qwzgQQ97PgEASUpu9AqyH2HgceV",
  "key20": "oxJh5oZsd8toYVo3uh61J3oMxbVMftxZVa7zhLotGAMuYiZ7fCzX1vXv7GvPBbNoGjwJ2wcA2r939qM5k3qPSu4",
  "key21": "ejxFvB9mfGS7r1YpxjHeq8kKbFZEe8Dw2BT7k8cmTVoG8KUvYXt5QZUkUkkhvapZDu2mKeDdZXazg9KtvFQWSzA",
  "key22": "4AaZPP4no6tyfoArKPBZMoBKVsNq4nLaQW89yuugpZPpp5Xavu6awc51DL5SLVMm6jEhoCoVdxKz6fYvHG4EWcWH",
  "key23": "5pxdit8CHTJ4yMDcd8B276wfLUcDzbdtpg85CNPVHx9eSfQczShdcJM1K43SycMujjpceqEJb4LvY2cTcYHy2uGK",
  "key24": "KCnT9weoegZ3sjiy7uMdKgMS326m8NEmkpDcEJr9naAbJvM2sDEdNXdZjSMV99zv6M2gSWJCrWGMtr4acG5MsJW",
  "key25": "5czBPMjkpCAEvXMRp7ydnBbDhPdAEc9D4DJ41toa543w7GTQTCkq5TdNJYk9P3KDYpkxSwVnS3KCqTHqqCJiL4Xi",
  "key26": "5RatGDDeBFwub1wkyyy9jpVftFkoAvu96ucs7iYaAN1zsfgWtCeqsYpKYgLUobNVJBr2pEQaj2W5YSLpkAfrWcPC",
  "key27": "59CDnv5cL1cTwi1dohWF7BuJVGEauRg9oGy4pksJjC3RYiYM1i3TfcqrfLqCWT9h63PonZY25i9eafq7RdDo9Jmc",
  "key28": "299gZEh3r14E9qJi7np73KfWSsMZXXHtd7ygYdUu3CaB48wmKVPvddaPgnbza6CnGgQj6QS77gzgQQkTTuQWbgAH",
  "key29": "4Xrfe2zB33upDZaVUqr7yDAC5G7PAdiY2CrbVGnthEQsoDeLwPL1Pba99JfvbtyVdS65MC6RWZ4sv24zSfmcs6MR",
  "key30": "2nuSrUE1nLwJCcydSVi1Zs3HEpiHM734euUKNHH8YnAthKyWkRnQgCQSAhBkqUN526QJmKvsDSUShbSP4eKA9wRm",
  "key31": "2v6jYnLYA49gj6PURaCJit9G7M2qGPLjMjDP2KGbPjioHj6znq14WKJmWP2ReBDv7yf3z2uFnACowKvY7WfK6RV8",
  "key32": "45v5uGmeNDGoUN8TNgVytajH1sTQEV94jauwUQ19vnMnCyaCsTTsUwxpEvixidsJALM5pcUNEsM7QPdPoYhraKHj",
  "key33": "2Vx16EnQ9rgRJjvFF99FNPe7VoBgZB479m2FghQgR7k2S12ZPpetvSbAM3LrWf7MTBPC3JdPMVsJDFi9bp6rPpyt",
  "key34": "3V6RHWbvdq9jWdW2HaqnQUJptwWnP2KePqYAGbbTDTzoAPkYjpD1Ue3awcwyWjh7mgVRqXXU4MqRS4gRo7Zs3ca7",
  "key35": "3Ao9sBEWfnffvxVyA8R8pYeJJUgg9FkfzuvhgtvCLjVLEJcPVz6HerdzW5eVbVuTfzyg2VztvNBdAitRk5qW2bCQ",
  "key36": "3XAJGKgDP8vu6Bj2vL2BvUtsD1amHGacUmAqnG6Wbg2BmFLhhzkFiGopP8ivqTsY4W9j9XHwTT8Ayu1HeFrqG2ca",
  "key37": "3TpfyVdamU9BTMf3ysRBDMUcZzoKfacmgRaphBz25U6nqbFwH64etnUpvoDtRZczZgDRXGwu5F9fZiVJkhZbS4em",
  "key38": "5q5qMezPeAEg9BDvW7dwh6ejK7mt3p36HAqFGpdzEsGfvngnX8ddNNa7S6ethcYACXLpGmAHEHZ8xUGhY3YkFGW9",
  "key39": "4CUdBRY3hR7XTpnpXvD627PNcj5Jb46dYnrHKH9yAp17rJuSh9AEvBmN76q3e5NqqwAWg6oNys3rVCKB9jq3EEDX",
  "key40": "3zqCLNDBBrwrXUzJ8fa4AEz6X7iPbNwoWAM8E99ZFiuoUvDVi1TSEtuxabuy3PezAewNg8FTp1Xs9kyAWs459r5w",
  "key41": "5H5SSw5AR4Nr6Atyhyze5h1APjB5EVRKEDtCnXBdf6ii77qYkAD6khCqe3mRVhExcV8fLvKbyFYfUZY5ea7UjSox",
  "key42": "56aebPPbz7pJCaGpwttvhLRgfosxyzHQS8UvNis983FNmgUFMrghCFqdSxveCUTRrt8XRZEpxCcjdDRVPBwS2Evw",
  "key43": "abQi7dX8gXpnFA3aQcNkyfSMKhCBcE6QvtBSNiqrDrLTtpNMJXvZ2yDNmoQ4YjCYMP5NfxXRpY1WS3gG4TSfZRR",
  "key44": "5hUTCDnMdqkxumUbFLnGaXeEsdJTRUACATaWYoYPndZRMbckt9W9kKGjvNnvRW9LCwkqDRo4N1J9FHHQxg76pF7A",
  "key45": "2WJhzV7XQZKisMXVWfHjLkuopY8vBPmcsArzqPFboQwJC74Y4hjNjgXyBsQhbCZYpFBzC4S3PEyx5eiuKQW7KUED",
  "key46": "4DjwDkXPSLtunaMxauXkHQE5m5sA5R6QGbEdKv8bFJFbgi6SExjRuH4w1YbcZ3R7W3kru3nRHbdjC3k47tRGzRE8"
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

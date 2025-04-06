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
    "38nXEGnpXrNnT8b5GaMCTd31Q1Ajgppn8YFXK6ZdXbtwCgfquzhg77xfu2TbkcHTqKqcLfjezb9y9a2pdzZL2XDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5neP4D2wyFFykAVLbPX6xDmMpjqRejgm6UG9J4h4eP61cF3ykqPSzZjUzwXqqwAbRyBuSFCdUpi4qsarm2BovG84",
  "key1": "4CARycdVahi8M3ZxEvKo1Cb9QKNYog9M9KGJtZT3oMHebaGw29XdgrdDrjW9niawgMahaBpWrWK3aiSEV9cX4zWF",
  "key2": "muzz6YTo2Ewy9c2DZfTyK3WrC6rhvunBXCYbBnYCSKtL22akF9UzjUGDJSyAD1uj2QAuMq49GMgCbYtYehTzvum",
  "key3": "4HhG4opGCg4GXnJEu5BBJoFJrbBfbbr58khv7uqwzXjWKhtsFxKaQCxs3DguJPoB9uUqJj1foew3Xadv4YnCy1qm",
  "key4": "3ubnWa45QPshBW6X1DuKjJG5DkFKvmMGN668FFhydFhei71KRCqRv1Y4568ess4BzQKT1jfU2DGUq2ZyCFVLWD36",
  "key5": "51rVihVnM1sQcWz58CeqwkBNg7XaNY1u9FgtVpxWGa3ZeSTU85QVsk2F3H9DPuwcZ4YwBmf5aEJVUZSpQL1hKEkr",
  "key6": "22a1EpdSS2B33DPwc6zUV9VGVTF1dd9u1hgGAxzNxpU1dgbGCrSKxhf5Xm4qYo3vudpGpvayja85TxSv6MqASTSK",
  "key7": "5Xm87wtGLBuNmwovtwUHo23MEiEYg7wBE6fFkDfGhuSzZbPVuJkUqvQafVCdGftcRvMLQeFKyxjxjYWTgGZrrDKN",
  "key8": "3fPpT2aM9YZnL3bkPSqfkhGsqtL5RHsSTwWFJ5zzWEBgdNos3UwoHeA6sBRYnUE9fB7iJUUrsPdFfi4WjWcMSonh",
  "key9": "shobnTr6JXSX65i2MH4dr1vY36sSbyY994HgzWNp6NL7ycwk4eK3mfptm7b7EP2xUmb7SAcrdcwyXQph4EtQ737",
  "key10": "3K3SmGoae74K9SiPDeQVToFUWVZRukBZ8RAwftQ9QzGLWguhXH75HfJRS2BhGTL4WcYt1RMkCke6yT9uJfZezHk4",
  "key11": "ocbXFj7jvVKpvgu8hYwnTTd4rA3jxfQdWWsZGkzZqBX8FKM34vmpShgzqAhQbNA3VyiW5P7qngLh1gPb8cz6ksG",
  "key12": "5vFmjx4bMRaPanSdfo88K7v4c8JaJ5kSsssVRXAhsiiBNMbmHtpYxoKj6DSKoR7oxdBmBEbfgEmu6Va6Km6PMjAE",
  "key13": "4xrBrRR4ZkF3n6hnFKHAAm7Ah2fjZbJ8HCNpHRNJhbP4U7JdzVw9XBNypfXUbAbMyQw9SVMtGnvvbhXGnf6V7jeS",
  "key14": "5xcjjpdr597qxP3Y8LEE9aQmZEEv5Kgut5eLrVS7c4YjGs81LbMqs6qvsyps1QL9GYaBWzMZQzZFdHT7MhewMBdC",
  "key15": "4EmXXXyVw4WXW9wTaKWuckbVYyzzFkCY8fmsVewCUoXcdWZPQqRTR8Xv8kzos4t82zoBoVu18fZiJaBfiwe8b5zw",
  "key16": "3Saawwg23NHaArD3bovPJz5GacMZQ41VT1k8gSKqK3S7JdvXuE75jv88GRsir4DJcAHZjkGvKJBCoxPGoLQymfd4",
  "key17": "3vY9tWcrDyGazu3rehn8PKA4v6rBK3zwfYxMf7Rat56W9FS61oCVjks3f5WBdCTcuJqtd5LgW8ZHWuXsKLd5igvr",
  "key18": "5FANAL99uEDEv6cxhJqzarNc2F8GeKBzxyvxXVNaCMchCf9TP8Eq5eJBbLXbSQS55UoRZjnP8CgVpvhpqis9fbZR",
  "key19": "43HhYThCoGVFs4NxoLrjcoSenkwcQSqx8RA1aFgVUntBgfc4GgZ7cDjYyx73XTeJW5LNtpFFqEbC1WYGEWRUpuze",
  "key20": "5prVBrL6ZwPUygkK48wXQC7NcM4dt9Qdkxr1SWFCqiNkTGo3cKgtjvWoBkMY3ma2icgGR6FYDewB3vTda7qn28x9",
  "key21": "3vCJkDxSfTAX4LSL3zA2ZJMDYmbVhRUTAPwddgtg2hMrGbT1kEQfQwGEmL3Rkf1WZqAoCpG2G7sLt92fYqdBd5oR",
  "key22": "kaba2Wgq9tHqHeHjnc7Fj3PW5cLkDrh8gTVbG94wdBtRngh9FWjZuAoNN4VuVBhPYkaazEstURkaaFFMv3Ddwv6",
  "key23": "532A1Lwix8reBYjLxUscJqaczNXWkHY5vdt825rj8RUgAfPoKKj9aQxmq2vdEPV8EGmJBBo5jrXxDZC3De2hjKiH",
  "key24": "2JrTtDSqongYrMrg5bJsq8eWucuhN5LVYZ6eqcfMZiZ7aVR7A3cEqLPvtcxk5h48bBjhi5q4c5VGJX5tJ6QxLHjL",
  "key25": "65LLNhBAxeiMKGoPn9RBth2p1M6bZVTKp4RdYovoTXErDnshjaTQ5u3d8vw73odynyFTaUfe8b881qApv6o7vgiL",
  "key26": "XV2vtiZ88tX9SvssAxLC4eiKvKsJFKPD8xSQ63mxcoR3CRP4WubGFX8SPwDQ7YsM6gMf8UeqxR8ebDtZrSyyASt",
  "key27": "FQ1cvx2Q7Mmj5vb6pAB1GZPui6JoR72cZmzW3Si1jVtwiK6kwQBZbExSumCPhVw6MAifcLwhsNWy277vqqF5dk3",
  "key28": "iW3HUHGBW3Tuxp4qN56hH1LfsAUsvvQVAJCvQJNuhn4o1cuabQCMSrjFJGE3PjXbjScHXWYrghbh5w7RJ5SnCGF",
  "key29": "G7GXty6AwwjsLWYYoVgfqZNhdzZ8qgjDioH6ALgMwP1Y2SDmdD85QkJoLRBgWEugzuYLKzrot2dps7zicJGVFsi",
  "key30": "4ud4oiU287tXpGshZW19qxCGBVLNVNbbRtVtDDcJG9DF8urrbYuHkBusQPPZf5aDD3Ju8Jd3qdTR8hLvN6RKUoRx"
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

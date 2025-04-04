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
    "3FHnsVb4KpbeYZ2KBS1iFJiK1n7PknYadEfwFQWb8ZqmipB3nsGGeNRubuEVndkehPfyyAJisQsBnhtkBeAMmxnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Lr52tuwiPa6ZTAm1nF4XJ28NysmqEYz2ozdVmkAptwSiEeK2Y2CeSx1QoUURoDGD9magi6EyYRShA9JDwA2Lq6",
  "key1": "3dMoSFVL9RW4fZgsgjj7edoRkHk61kCtExccBpZ65JNkQ4AogLVSSW7i6P4ayUkeM5Pm3LWKfZDhv7Ei3Vg7fBkA",
  "key2": "62StNsnkPvJZsemsF5px9UvGFoSWP1y7MBFeNRvESA4gwULJLBLVVicWFgBWN4uRUGLYBLkNGNwwsrsWFLGHB4TM",
  "key3": "2VPgTHMKsdjXhfNnh6s19My4PRKxorbEbHBVuj9N91zGugZQGxL9az5mL3vnCKa3L9DwtUyau3gnztWa6s7y8ia8",
  "key4": "3ox9ykbfueJAVwV46cdWg52mhYJJDZ7GAW77X67Bmsd9tZVX9BbJ5mmviHXxaPrTUBU8C6ne87XZdUzu9MC3oBZe",
  "key5": "4CyoX3VZj1yGM1WNdPu9AHE1UUutJfEaWR8uHY8dq3D6ViSkQzbYBbFeTGEPQHnSWcLgdw9PEs9ZKQiqyYcRoocb",
  "key6": "4anzUFiCmw6hMRUvPyywmnRhmSSoXXaqRNQSTqokgWmM9M1mLmFShUahiEzT1MxAo5tcL6BRFQ8HMbL1AQjLM1fH",
  "key7": "Tbc6NGT4QsZGi3wquyFJZTkA7bkja7JEKZSnnx3de2Ma1Qf2LB3UTxksDtMoTiseTjsXQCMUdfZcDSwYv2rkqW4",
  "key8": "2tus5P3eq3RehrCGAj6YSbshoEyCKr7aUywv5ZHxXxCcquMS8ocECwgY3JjrwFsUcW7hWuspy2pzRm1FwkgUsk4N",
  "key9": "2bibVc7Lx7dEjYDVpDVYUQ223f7eDjXNSiRZknHqMpZWS7SCN5Z9zAbwwEokUNUZYsQdTkgPyonY9JanHb7SSUtJ",
  "key10": "2CJjnMCLDXtj4LKciUhdPxuXMgRRPSxtHhddjKUJCpNgueTiJ2pyK8NeUtDmijB1wfyVv6MU7sn5g6JJb6aLXEbp",
  "key11": "5QFGkMZnH51Lby7phgHxmomebyBrH6PPqHH68Kni6RB2eB76z6oytS2Xc8U9nTX45XwUGXWw7x65PweSebTrzkN5",
  "key12": "5mxHMyYgHk2KpHhNR4RmRKtS4Efrcvpm9hKDgyUdq3RGShLHsJ4wCUZnKEmHmV3zcKYFVXz9ebhg4vHe7gjQoRoE",
  "key13": "2eSqW5uQ3YSoTviyuoYveKnXoNW4RvYSVhyQFnvykusVvRezURw8v6a2Yd5B5gbAtz2ZxsRCpZBctyVULvFHL75P",
  "key14": "5b9xpb6dKWtyQ2z3an8pbE7KdJ1dRqJQK6MYxLBTrs42qzqBpNdwERbKR4995NimNW3AWRDNygVNst92wZwFd8YC",
  "key15": "55ejRyhVqKYiAfPjopKkvNANuUBpLT4i3SQvwesCVaY2thYSNz5Zx2iggqQ4WNVwtSLqxjhny9yXzpBX4LRore3D",
  "key16": "YMgu4Uu3mZWpJqgqjLGWHJoDWcKmkAkpavCXt6EbwCbEaszRfsHKh7hsBW1jhp8Ht9dpSreyooQhB97t8LAvvaM",
  "key17": "3hzJCkjpYmFoNeCVi5Ef71HR3vFXuWfv24zVtyzWpAqz81ivXvRZUZDyvzwfNxTRYQAxo5YL9gTTL8FAM8gcg34v",
  "key18": "56aq4ufGFgVD5AuT2b7RnBtigxYSDyYGfAe7gMAsUm4JaMQJ2gmJDZJWVVGKmoCZ2GSV42xTxCurtw9mY8GZdg32",
  "key19": "52WZSHBfVVaxhrPsLcfRJa9wHTXrpqzcGgMxnTgxZg7guRZEh4Qg2A7nL5u4CLMGQ2WPg2KzeeyKdnisLNNDQxzS",
  "key20": "EXNXzFvn4RtmWTFf6fwwTUdTSb4bpNCtKbTywGLGEnNM2U5pXxMpfS4WYuu61NtpG1ojPjDeJ41dVZWSbGKnAYY",
  "key21": "4G9p41HVdxD7vJXjZS8zqKtvEJMXJeQVvG9iAKHQJVMGmPurtZjW23Cz3YyQPSWihzu2Exsw9RnW37gVqkfh4DKV",
  "key22": "2edF6EhFc8yXrdLvSBLA87hFQRfEDuHXiLSRu8GUnE31tZGgUGkDf9eTFwFFSq1t4gPrq8Qrz1DjpjwZkhPTHvDC",
  "key23": "4qDLPXvVFEZ5g4sEkqYThpYPmr4QGuiixBQ37QqUPk89gecXh5TPF1QkbVNcUdJZFr3EQvY2eALhb5X8P4XHwkQE",
  "key24": "4gxQJV2iyipvQa5rsxNS9PhP1St8VYaVCMgv2faChN5YyQEvBz7opxmtPxHNUMdszLLRqTnex1uWZjXiPUDZyyFN",
  "key25": "23kQ2Sudn8fsGuCKuioEhaSgzrBioRRR9m2BGWk67StVmhpq5gCFRVaYpT39yJTDPKFRfZ6q7RSZsFgxdRCpHUnT",
  "key26": "2vVhEAmYQ4eQXUaFmM5dCH3Q5dXfEUdrh7VDGVesyhyJvqMJ27JkpMkSJrZvWpZ8PfvFZRRmewTnqp6ipGrnroiJ"
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

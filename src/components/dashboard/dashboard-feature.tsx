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
    "2gecYoWuyQiZXmnz7vbfXgPPYe3rWEfXxeBhqwjNwyuMJv5xDRs43xEGFg9Q5zpoUVwbJF3K2AYBQdU9sBD49uUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iUeU3WPfJAgkQQTNDuRToEWjJerX5avwgYSPfG2smSgLnFnws7bfzreNdV4wpGmCmC1iGiRwJg7BPhzDh3eoeYW",
  "key1": "3C2iYrBMArZNeF1DnqA58vrwd2v3Zxy6zH8ryBXzgCrYNsXqXxPgqALcczXa3dWj5QQLdF7L8HHgKfBemEFno48L",
  "key2": "Lb2B9SdEqSH8gmdr4Mm6hFPqP4HoAn5bytKGjbBBT7jtGPnsQyETHdgrKW2BooDTCBkkScbAAF8We8uKPSmeYdp",
  "key3": "43e8ZS6P9pNmJ2yyw2JLPu1w4c4CAyj7Skc6tEKSALYQDUgCuDK86YhuASkS7vsnw5fG4pdPbhQpcRpGjDrcoKHq",
  "key4": "3eyfVQXyErimpQDP5XYCHR3Cz1wnes13Cy3rcmhB8mjCAL2NLZSfnJoD8MVKY8MVssQmWsJPDpWKiCug4iM4uXWN",
  "key5": "21ZWkQwKso9duNd5YLgc2FPpMZoNT6evwM4x1mM2tysvGvqmKfsPNF55YN8NcEWKGC3aEtHKgdMDdMZ5GYRns2US",
  "key6": "2WsRAdXq1tvZu7CqLYD8tiVXJXYRa1QMUHZkbM6nX9DVybD8iQaJhn9AjpDWmBazejK7wtZCQ5xQmu9wQaUJ4y16",
  "key7": "59EFyegZ4YgnAtxePuQMVat2NVMDGnEJjfc2PG9KJyjQpVPyeKAU28tw8W6yUNuFEui9XdnaBNQ7dYw95fUSHLYo",
  "key8": "4F75tQ17KikJTg9sWhxTwzN7B2ciG3WWFdW8FwTyeoDjvHhJwpidvqcHKw4gCCt2wsYa1ZhCyVY3SPrx2PiyWyTK",
  "key9": "3cv3N5snVN326hVbsjBzDBsixqQZfuwwH6sqYxmt3eb4E1ApdQjqCM9KfaWZwi5vEVUjemvwHZGMwjhvMrYGadMR",
  "key10": "33RuA5YsFMBYZZbp1v5CenErUzAACvCzCPquHnB7XoCwArc6pQvLuCdbqz5QJxTCAKweQBaBVCGEMPCdfgCqMgr1",
  "key11": "WXh1kVG8MUdwha14SfRhyrpDV3ELqXykEmZJXE76dPsfTJzPKos82jcE73ASiCAgNrcMeDTWNCJbwHWxaD6iEiF",
  "key12": "3YCRtzvTyJVdu9stvZYC9DkbaVXfCCWqj4TqjdYaDrZiNeT1jjMCMWLjiTbVKxu4GZB4booykn4hDtd4kyVWbCZb",
  "key13": "jNBKAWD1RYKsD4uzn26CEAaMiDm3cR5fbPqJT8ovWWN24aXG1KhDfn3D5hXBZSFuR67L1B4H7NXAqUP7EA6vkiN",
  "key14": "2g6TcYWB4aeaCCKxkuncij3dHT19vNvruVmmzAvkF2hRY3BuXbex3oikNPB8gpjYjreGya8LUH3W5AKGfPbJNoTB",
  "key15": "4qbmLkYQCFTLdP3wJGJSh9NoTPKw2X1og18FGeJ1vb95VWBGS8Pw8YgouFArsShT3mo8khzUaXDnGzYVUrX8giu7",
  "key16": "28dCAjTRxbFdnHb47VGToQnU5WDv8iZiBAoJvFHzKxzjHfWV387ibjwRNL5T4bf4K3VgQyPdGEygGm6TH6nyxGJP",
  "key17": "4LJBmm612EM7m5kyPhU6UsvaaTvzT5teAFKewTCm8ohZLbuk8Ta5oZmKCM5MGjCceqtDLUXzRpqVCyGKrTBUzQZn",
  "key18": "5NwJhweNLPD48674SkRv2vP61xAabAShWJccesp9BUhnjrbMSqCkaUxyRQjJtDLHu5eg6rgCZ3U77BCJH4tnMzf7",
  "key19": "44RCtAoPxqoWrj5sMfpdkWSsvURhF5MSdgbGUmgWYAMCJ77qhHtemhgTP4PocB5hexUJqMHpPJ8dUYUbvU3gzaK2",
  "key20": "3Jd9FgTZGGv6FDdZAjNELogTHN8ecvUB9TCRpJgBribvjyAPNyH1qBHqTa2EYgR74HACxBDoo7hsn7FqecLr6w3a",
  "key21": "4ZWQZXgFsiTrGo1ZosYFYjo6QBh7V8fqq8zWXtwsbkWfbwBAS6tM5nmMcrr9rbRqMKhabj4RsGTW4DnSGTcuKSYs",
  "key22": "4hhTjjBYz1sHMJNJvWjQY8h1k9ufBC7y2fukwbgYLo2jYzNhD3LmaRP1yiHW4sAv2a3y2vnVkvMNGT6tUpR2SgSR",
  "key23": "57S7K8VdHVkA73TeuoWA4cf81aZUqJ7MaSx6J8iQAefoEJMGo14KHynHYxBgpLST4ZFBjkh4kMQut6GwuCnCGv1D",
  "key24": "4kfngyQQJopPGA4LV8yaaXBWxDsktAVYH17VdvykshcLDU1iDrAAnpe6qRu9ozt77ReJ1a2Df3fafPSNojyYgxzy",
  "key25": "3vnB4tsGkBVMbL2Jo2EwrvrgVx9FPUEWaYoKKHxQgPjNUh8ZwGyBsQ6JxpjxG2vab3GUvo3rcqJk4tZDyycGTSAX",
  "key26": "4GtUYh5r15s3rgdSG1pHmwN6hMwcPg1vVemy3BejuKnCh1L3wne8uwohzqtvHYWXPohFihtL5VYjSWkAyd1wsL1o",
  "key27": "2RjvLSQVRHDvZkfLPCjbZUxT1BwxHGFrimp5fhFhovL7PAgKwBkf3tn7DvQAXqQrWQXKVfmBRKoTPpPBJMgbjKZG",
  "key28": "3mWVvgQX6BSRfjj4nKPU8eZBhVMoBcWJ4d886B86MBGKnq9tnL1KZsXMzsJUQ65h9gUprmuGRuqC2Hi1dgkVQ4Nm",
  "key29": "34EC1FTeMXj59L9mrincAiXPVcWCEXkMu2WbRb1y4bmx935GMVPWXUStdeGcPf7kVECAsqd6ipxJTbqRWnCvA7ag",
  "key30": "2mxXPaAo8PcLBU6jfgzpyW9bzc71JHmrMRhARp4su2UCsk1ShhMFcwzwHZ6w5DmKbZdYnU64wG7jG1Y6mNJadNgd",
  "key31": "zFuK7uNVg6hj2XgzawD46DPQv2oZr2eRbo2Q3rgAh3bPfdyJ5NHUoTEgxCFoPUDcqdoutQmv7rzV8SxMwaby48U",
  "key32": "3a6HGASDeZJrD3cexNDdMEYUtbALXLjzUFxxm4RWeQPbov9Hn5kdBSRmbuQ2UCBy37iXpeQDqQjN82r3ULGrx1EF",
  "key33": "3F1c9kJAz9uLGhxx2nPuQfDCxPw9tKd8fXebZo4PuttNGQ7TnHMZGZvGbempwnPzEnBQsavtLVTRtEZQcqs1hG3G",
  "key34": "J21JHPWhBGGqTKnwbcErFKtQTe3o6AzFRUKDtVVmSP7dfXYMTC9eEg7rrYBLCkMXWz8cm2KgeYAYs38t2JKEq7h",
  "key35": "y4Cw53qumu9AtmETd3u1Mz6P71SJMT5TtVRqfq5JgxwhAEBd9MpcwWdqj4vQvYsjsoW1v84JeNXhYN7rr1icJM6",
  "key36": "3bSyu6W2jft2QygMC3s11cLEJ4XBpopW9Aoi3oUvRDvYqvJCwjqFowWYRxVjubSNwYHsz4x5QhstNiWS8QCjw9gw"
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

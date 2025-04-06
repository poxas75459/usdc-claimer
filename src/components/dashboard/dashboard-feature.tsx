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
    "nV2QKWdfBZ5XFKgdP69VnnTHVbYFbiA8FDGGWg8d9qxjtyDBmWu99ZyCRNss7BXtBWCqEms5PYwsxsgDeeYp2dW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1xdcXWVzp5o6AJu15YZHqiNA7N2gyJugGwLTuocPbdZymk1cX3HhJt5pxeQ7YdCBni1jTPRQvM8zhbFi3fTtwt",
  "key1": "44wymwnFzZLLnGkQhPYU5FnxShKXJn3nfDnNR4szrQQRFsrpmdM4i2gP2A43VWq5UCWNzGe39Be6GF41jQDG5GTn",
  "key2": "2ei31kKXT1shg95WBHRNMZWN5B8w5w3DYeRLUj8neCfwxmaJ3Ku3t2ZRuSucQzgBHGjZ1VRGxMAn5MY2ZP2KmZYW",
  "key3": "5YGHZcHMnk9Ukn5xoQDTtaT7fBtRHdSFYKakaYTWSsZPohbyyK7WQGsgChUa9UNEbM185eARGAk3DKpB6CrCaaha",
  "key4": "5bq4D2swTtw7uzBuGjZn2h2zrzxXjyjSwJjB7aCdZj4G3C5fEFRA6cG1JYZKNbb67TeoPQKvAQhBAAe4ycQsRKym",
  "key5": "5UbYf7ykrhSkMTAoxLPzLG12dPdCEXFbKHB4JS7sNo2VytjwBs8tGsgefTsaije6k4A7zsjEUjgJ6wmwvRD18mdD",
  "key6": "2zEfMJiZaeLdNxjS3uDzVpCM9CjwdfJNEEs6qrjYUEgkfRNjwLrTthHbRy4FqvcG81jC2aSnZzRYv3FwcR3T7gzC",
  "key7": "44TyE2WBM6qMZnhkTMHwTEoqt8hhEEZDuDSXeUAZp8Ko5RW7Jv7KKxTAcDYtXXXVuHoKcS9xCPRgurz72rRiziSt",
  "key8": "2wbvTV8pp61kpWVzgQfojEBngmhgWVzr9A2DtZA1ADrpvS382xA3npXUjEip4GJkT7daAKiLvjEJUXUGg1krCkET",
  "key9": "5KhcGARmQJ3HKkPhK2uyBGbFyrk4JMqdNzQwCyDPpwmpgC8pkyq8bMF5mDuvm3zbowPnHexofTo4LV67XXece1mu",
  "key10": "2aELt8bH4TphqYWAyRVsk4X6E6bCPp6TSqtn4ZLpaEjPLxgjX6kbSeKcaj4Gcrp9fvq5WiJQyzXYrkXqNoPKS4Qz",
  "key11": "53UPQ1jj7RUHB4ui1LDV7kL2srU7yQsbnzuLuEFmU8vWxDHjhB6efuZNbYqA6Rtcvs8B2qojHo3pS9wgHKEdM6zF",
  "key12": "5tKeKUSdzjyVLVN5vdicrWUP1syWKhdkU6tXUDFssvRx8QPaaLZqzqnDxLYuioYWWTmGvioxQFWo7Yco1RVtQVEH",
  "key13": "4PdCzAWZDgHdjemktfcSwWoezzQXFQ9hByuPEKZtuvrZwzFg78w2wPQDNo9YuBBavq8vuperKJy5JyFrHb2kRko1",
  "key14": "N3XB7obreCBELoXzURPTQY9HQ8BLQg2wT72whaHw3MaADTm8j6EaCrUz1Cof8qBLe5ksatBuoB8szUtWxFKRwSW",
  "key15": "4Wk9opPAZCuV266q1BrByNxLj1krojJWAiDhPN1gEbqHN7CRbyN9CjFGNekMNf6TKmfmVFjzrr259yNdyjn4ciNi",
  "key16": "3hNR6tCNsU8pvGLuLEWRao5HeDP3dA9p1cPWrHZJZ6FiiyTHvqkuzERgNbkqPcbasGstXivmJfHARBgPrRws4kfH",
  "key17": "449dWGqnvzYHyGvTP3DPT7b8aqYdG1f5rBjxP77ABGDwTJtPuoqjdTXVaAwHpQKXZzHB97kNYeHeSNnA66VjsBx1",
  "key18": "3fzGr2jtMA6hJVDCvCWvAjALRFV1NEH5bnc9DjBJSUuxsan1T4kDumjYApbH3f983xRAbJi9zv919DqqMAAJ4uqf",
  "key19": "5TFRmaPmV8DE2ubtJkWbsaSwensuCThSkUtqRsznSviZCP89PFFTbpXzvvnPLV3Y38UuHN7kZD44SfXskG1DJEnv",
  "key20": "47dHkqmRGTzHHjjeXCn6rYkqtLk7rMGq1EzFu45RtoSGEEyot2RZDq9BfSPXJKfedzz64YrLzKZGC2FMdKyvquGv",
  "key21": "JdME6edmZxCnVJDgLQYEWgiJsVj2naSLRZnemYCwj4DibCp18FSFE4A7a5GC3rXLUWHhR4J6UyDKk2pVrXMpRJT",
  "key22": "PQviqWsw5aQWKvMTMUsWo9VhYZ1bXdQ561w6cJPVsDvMu75sSoxLzWEYE1DWoRcPf8qzzLq2APDCLTq5mwTc1X8",
  "key23": "2aeXz2FS31WGJrznoMA3fPYk5zjL61p534PXqt4j9zjwoN4kNrH95rAu1xEP9ajV1ofPGPs54F2c3Tg52yUzZQfv",
  "key24": "3SjDiKwhX7vubrUBY26nFxheyw3SoN6mKrUw7sQEaXKgDyTiUMLhLLoSHnxRPAY1vfQLMbN7ut268XAjZaQtzweb",
  "key25": "5wdpmPTq9XSyZx7HJp3LypspRDvczAvWUXsfitsV3MXVixWz8fQbwSW3XxpNLBjx4a9xJSKdowYsMNbTsUqRTdqV",
  "key26": "5hozpLuXbWTtQJ35AwRB2zUPXTyDWVrgefM6YCmGDLRinVPf8g2pY4fPoz5kKEGnK2rUSAjiq4HpDynZ6xLEurZA",
  "key27": "4VBoMb7Es3t5Az6ANRiTp9Na5QyAhjbnabgXvhVgLWDEa9HtLshbjuXTP5eEToCXzdotGL9FjhZEPiPBNHJi96eE",
  "key28": "aMWq4JTLDTZkrHpBhSdLhhCK7iZ1oNCaVScsMLR7QCgenTES7VNHqANfEP8GRPygy2oZdmEntJ37XN1uuJzo5oo",
  "key29": "29e8P221uN5ehddrYvFYyMfw5K3QMN1Mi7zJHFZxrye4WkHzH8UmeLTesrFWDs7vrc9vqpRPAj6s3W1FaGMmakmh",
  "key30": "2V5o8DnEyV1X696Uz2mXormKJsduSbx6t7iPr6nfFwQMXYg8qVLepigKMFfC3QxFLDtgcS5aTXk12kPTEt8a8TGc",
  "key31": "4B2sBQZcaXz5YAfLeujoeswYerVTzPHKpHLaZkLgrpZVkM99riXCN2WVVsvmJDZrK84S3HJEniSdRskbf6KJfVG7",
  "key32": "5czpnmqmYF7D4wf6G3LRVWqXXWwU6QccEHZ86bkYqh4E8nJ9WFRpCebpwLUN9TVsuLrvfSG8wdgtY4oTU1SnDRKk",
  "key33": "66djmQJJawWwJdswxs6hmWLLpDjQ2ESuom6qrjo1Z92K9g4VLprnxom9GtKxynkqiMNUVPpKoX1V6ar3n8YkZakw",
  "key34": "tCxd9nmnyTyAh4Q7dtJXZm6jBdzNW2HKg9qCiY2qaqNW28RaKUz5SKxHqWAkmf12svoinFyUAsUNeH1XSuf5uwh",
  "key35": "2UPpPsuNYZNbHScPWYyTWWYKrLPoNLmoNjQqHAq66ep1K3BdCHytSxgXGeETGrxFM76uziZre88GnwWkt2ykTa6q"
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

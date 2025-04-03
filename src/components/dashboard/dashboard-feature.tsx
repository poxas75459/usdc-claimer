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
    "2mHW8wwTq1uGm2Z8A9MYZA2xENju5kuT17yuzCbe1uHadEghDwiEN74jAAvcjRuJ3S2cdckfFn38oSLTbfDheZS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWqHNvAWiYUwQ8114VCVUuftKMR97ppieHnZrSr1EEjYPftW4qfDKbAWxUiVazGz6x9znnyz8KpsU6x3Z4kkKzH",
  "key1": "oeAk2A2yPMWm8S5cz9HGYks2jmhtwkMtBkfv41g5s9RXDTUQHxUEtUhacgRFUdALE53sfBrLonqPJnoHj2GMJQn",
  "key2": "4YjjQmTwsiBL4bAmQRuMDF8Wqbanif7sn5QRJSr5anH7tj8pazaQHf3FdT5GSBUk4jShK3QJ1pw8NVU4ZQqsY2Y9",
  "key3": "4GVqf3eZUcVMCEJti3DbpPM8Eefkn3iXrjWz9tv61cNH51zKDbXWuNGxc3FL9aommY8him8LcXfqxGa11weFLRgv",
  "key4": "qy6WcHht6HvgoDELNr78EkefuQ5NS7rFh5zbgBWsNyJb7LxNYExPwyXDmoiguG1ysjuboxGU9fyCbT4fY1rqWVm",
  "key5": "5vS1rTiwJhs8xF69Lau4jVTqLikZ6MD8WCiRDufer6KrNN9Yaw3qdsJBbmykEGHmWPjJG7jctzrvrVeVpWM1vJ5f",
  "key6": "48aApmtY4LrAjYTeEQMdcgM6YZe8urt9vSQ38cyJt8DueaVwMA97SeX8BLVUxdh1mjaXiRVTteoYVGaaoCQThJxJ",
  "key7": "4GJknSc2QQsCwHJrPxXanreYz29Aj2ESbsXRY8qsbchXsv6DKRQD5Mquiq8RtEGm2c1rFeHxyc34rTDdgvFdJQep",
  "key8": "2S8KBeLHtbk6MUVckz4i9dyLUEcs9P3qzvFzTJG6bfxVvKakn8yonEyT1FvEGMtMsn4yrG1AnfrkHCwmiHoNbL8h",
  "key9": "2qTv1PsFqXF1Z2eLUEtabGwJGAeiWeHfiiT1EEhTizRtga4DbdVFhLPJFDWRyueD1QwNqh6EG1Ea22xpLem5Vq2J",
  "key10": "2ufL8mrxFteuJWt7ohQweJsrsNhZG1Dn78iL8QGsFrYkWF6UTVkAFVqvDckD4BEsJvBQGA2WiGeRehi1eFNLBVbg",
  "key11": "b8zJmPEwHKw8s8MYF4p9Cw2F54Ab7RGcE6mAVE2e9SG6N8EtS45r5ywoLm8zUC7LdNvqn7y55ne9cR4FTerx2Wq",
  "key12": "4UuMBnzANL2owtSTMnGaecNFXreHbREEotGFoNHaihWZ82dQBfwewpmTEijBPdRMvYFtbHZzVcA5rmic9PvSKgte",
  "key13": "3Mr4mfxwMhFFk4TJ5Az2A4c4qEAR2MkeCjgG2dfoPxFNAYYvoqXKDSd5xNxm8UT231KpXMjgaqk3WZfc28hcyMt",
  "key14": "63QjYmNFuvgp9rR4biLLxaEoZdo4R2WrcQvL8q2gkScAommAq8WqzTiwkfSskLQurLSyL19bYjHwzj25m8h19oxP",
  "key15": "4AFxi1vEZbok5aWNoHt7T1cM1d2uwuEr744Xr2iZ4BV9KV6w6XhKAhkG6dsM3HeBeHCt4c8nZWtXg1rb1hSYQsWt",
  "key16": "SQMbrh8S9tX4kBceoUjbZCroT6pSuKDxXEYGB2WKTspHtguBbnFGHtAgFRkBGM9h9bvGSy6wBvQyKGJN63bvDPB",
  "key17": "3x8CzTu5hPvHNt6wkoWsdJCn8UCwfx53Kbqu1WmVniAVxqKaxkCdPfFxMGcTx22tWFJGiV21JzG6aSHRVbL67JHh",
  "key18": "43ddJaLMiC32k3bfzCazrsrkczqJp2Gf35UArT6wKM9eVuugdtHCvgKpgEgxuJytM5PCBNTXASREuNyYU14er5wc",
  "key19": "iD69BdUpZau5CbNmKQAgL7XHgEcK54TP5rUCThZVEEsgobzuGEb5uG3Xn4tK4mM6Z7yU6fdGfmFmvTmSRGYt1Ta",
  "key20": "4GJ36HNtom15EfT1zCAqyPy5KmSpX3kG4gkz2dY2vsbcvVDzRvrtXFLW6DZk9viGv5YZdqf5J8jRtoGConwAf15k",
  "key21": "4x1dvGPoyKWS3rVuy9sNoXTV1WA6YJNGck1uuX6fGSiYXmobXAVjBQeqEmc6hZRdR8Yq39qCwtm72MhwJ3mnjWn",
  "key22": "3B2A4vSRiqRJpcqATnL4eSakHwpRL7qQYcFM53wgghHohEPfs1WwRdhGuJxqtuB5sfmtbbwWXekN7peCftKyvG9w",
  "key23": "51vMQG95a6x3igVWtDLFxjRbgtBHksSE8tJJxanR6GFaPHK7ijXFfmokzZGjAAa5ZAGHPWmfPYap6kXDe1dPMBUF",
  "key24": "4JvEKB4NLZ6icuTtDUzYAW7ume46KYPcW4ojuxJEhvdbTtwtXmM9jVxavSpcYnkpWx9P1UBCvdVEqXyKKGQy5TvY",
  "key25": "3G2vEdMFKwQZiBFNpLLLM3rv1aerTA2yV3dpx9XXBTuaV7vyBMfgdPstrBtMssNsqYt9codxpMvkX4QUL4RuKsB8",
  "key26": "3gpKBWDzr57dXNXGyj38B3MwHWwWnNAgj87pQeRcJmssJMNCEqLBpcr6RFtRoD8RVQW35UtFw89KtKQCEvFv4rys",
  "key27": "2BCnoTSuQehHBggBRTxpie7TtzBeauHdCRjeYPZnRmZG9GK6t6LcVyGnyaMfrvVK7a3BcFuQGMJFQSrgxjceV1Mu",
  "key28": "5hccCMWeUCAQRsgFYN2yZqSHbQqA6qm2SdVHJTmQeyfiUzXpGvjoXrieSVBxFTzMGct2NEKAf6p3y5iQecSvcTxd",
  "key29": "66qFgyYvw7Yg32dN4XqJ98UKBLu1Go7idkvqw5Jpn4LTdjTQLxohoefygRxzH12JKnVTKbvxqdTzraJm7GCZ4sMh",
  "key30": "5r8GxJidAT8gtRQcAYbz6GZpgva6qgHEwmoQmjgAHFW4QbTQKDLUWVz3BqK8mXRfRiJhqUdyP7Uft3d1XN12BWCx",
  "key31": "2fEPH4sNHVB1JHFHk7xLhPcZFa4uWJbWWfXLPqEPcMLcJnDExYZvYYHAf5BeBX6YPQeHECLWXZXs7mQNuC6k3VDY",
  "key32": "3g27f4EsMAtj3zSXmLfAnQCe67WGF5P57fotj9yDfoRkAGCPj3yXq1UteHFVgFTVkBs1x6tDURSXVsN4aMCAUd6c",
  "key33": "59iVYcJX3AGmXHx5r7JLP6cxq72uHP7xNnwCaMDRpXUuLDPQnbE7T2jsevA82BECvzb49EBgdi7RQHdnSeuWQ52",
  "key34": "2YUhrEshwcpbYxqFqrEsWYqayDZ5L5hTgwyLy3WQPS59MRhEpXBF5uk7REw3MgRERCdr2VxNJgubMgM3QRdD7vgc",
  "key35": "2duE62ATGeVc6Exj2mqaT8pSp5ACCkoUsvP9kV6KohutvmDDVdorjTWfCYMjgyKAjY7PgLGa2Xw6vuuieZmT6BbQ",
  "key36": "5dXE9ZVLF29FJyQXycSmAuavpvk1nMtXWz4KtExKGpN3x7QNgbKW79R8bczVpTJzinM65zEGAeqnhY7uJ15do5aM",
  "key37": "RrtZhpxJbSaqS8XbY3Ndesb2VShNPmNcT2xTkJZbzABFvBSeE6EgAgXzSJ7UHLDiVSoGfkJnhgFaD2wcYh3fWbJ",
  "key38": "CY6ufdzdL7pWupmYLAuu64MuVSYzyETAr7TtLumKrXD9BHaVeMKm3vAEMbnZFswnuVLhFSoytSmPXkeGXMzUokg"
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

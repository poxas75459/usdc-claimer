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
    "5UdXgiVyekGe4iQiPRxEyKbWF95vBZXdt5gFepah2Ea52BvS74qVSKcpS7QNwEs3n5a7a7SiGSBf9GUYULxmYZcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xx9jbRSPiuTantgYxpxjerPYiKvGjwcBAuXz63eySfcP2YnUDUv8XJWigAfB9EcMPK49o7zcQ6CY3EW9tVFRQev",
  "key1": "4LXJnk8e7XYkGqUDhXFdhG4ALvJBJ4i4MM28RYkyWLnhRAXWftHA2n8aWPsTyCmyX3qj4ZJxL2FS6PqdEZMLfyNC",
  "key2": "33Nh8JL4TqYW2ReQ2WFnsqTPtJMp9c3vgRvWkvhNrxXByaUyxngmvuzkLDYfVAUpXbtHcFa22HJCVvvkkMYNaasM",
  "key3": "2g4cVsxzENBDQqrSCbi3DRNE4zofBeDkQ9feAFuvRm2g5HDC47QeAMXNaDvKAqgw9t3y964s5cGmVhXyDdPvA8bw",
  "key4": "3ksib9EhStrjxFQeiSQmWsaCiqWWdqYGAHBtTpq9xR17NXQKY2EZLjCjiv239qXXgscWd7yY351bpEoiksq23iY9",
  "key5": "bWYWEsDLXg6MGq8KnFSAevXQgTxZqiQC9XtAhCMdv3Zii2JTTp7qjm6qHa8gaiGGag3EPZXqXrcaBdBec3DrT3H",
  "key6": "2RQ6trsMHmxLx1qKmzBCPbw2E48FeqbBriyfhyUeskYtwrDfWe8iEwbV2UHMijXYdfyDcAAxWKkWLMrYCBFBv4G4",
  "key7": "62R2DKQ461Voy5MoAgp6VMur5P5vQmQARHd2ZKHYeX1vCyhWfafR9jG4BTagfQN3BnUqxYg5992so4yDrz1GNAKw",
  "key8": "5yu7a2o8neHft2QYJeTT4gv8cv64Pq9oAeqkLQcUPwSyYWcbzDYcBZgZqp4AcVrW7msngtWGzJzjkwe7qc8awhVK",
  "key9": "VBnix4kHHHKCwwmgQFb7AEX6EmecatMAX5ENsatNb7ax9ZGhSLc2XVd8TdxC5goKJD457ZzHsLkBMGeEm29p64w",
  "key10": "4cjZaiNH6Z3jJw9iWzrgho9dSvdXA1tk3umoYmvnqZwzUYm2VHp9KXnRPu4QqYFAx373iR2zkuJJw43yZvQ2wdjW",
  "key11": "53oxfeEqSeQZ19pPjrUCGp6vrQqzSFpufhtzZDpP4ku3pHHyFHHpdbfb5sJtFbWtsLNptQKTynuw8QopGNd51BT3",
  "key12": "vCPivdnuVoHqfJHZRr7FVJbRnrTcSSDTsMu46eD616cNuruv38TV25MbmkRvvisgeLwgSj2C8rfogef9sb7m86Q",
  "key13": "2ha9SBNSbHtZopcCfCSoJVHKk3VSj48cq3RdqQVubSEFfnRsbS3ktLemoJcb5CR77iM3LDH6fTdMePfgMxv9yErT",
  "key14": "3zrEq9jSuTiVhmgwvRC95cLhXw4eimjXjEyvwVXd2GznKmxR5L3u6GXedCsEqmwatWzcGx64FN8xrRSjJqr4J9F3",
  "key15": "4actf6TzJzjCJS5TgvdbV6WknorMtabqwaJTkpYK1n3ecmDrHzfBmkmc5nkvd13P1wbrD1oAz2iJ5NKwxNVrd1ND",
  "key16": "UzHTdqXb7vYimHWQpqfKSwKDKijKR8DS1eqpXT4fwwbSsMUpubWaC5aMigGdMJu9aLTrLgBowW6iyDaRK64AVXm",
  "key17": "TqqQWZoavEcLuRG1hQruRhH6VB8TaM9tRpone8i3XBdxGXsAYKW5D8ZAW26DjNc7tHNFh39jTftEaukf3U9TRub",
  "key18": "2ZyTAcjY2J3RPV4xBkAY23NwAX2uUMUVP998G5q3G4TVyNi48NPm1k9HoecRKv566pc84ieRpp1Yw1HbpofvscAS",
  "key19": "44WH8dX4qXWNamk8DXJvX1enPKij3QSiGXWjCi7FZTmq8pC7sbwARmEeUbvBwigRBgihGbPFKcTNW2QGMQhv7iTd",
  "key20": "5X6HPeSSjdS68iSAd7WxsohMVWy4CPihTkdvDApoSBrYmb1fUrjeBVqokQgUEwJiV4HSuwKbfaXt7PcJqYk3GEDG",
  "key21": "4Mdnrja4UrNgZhgKj7A2zJCLfJZW6wCFCJmzXboueDRvcrfgatEvAhpq1P3Cmin3iTvwfxt17oiXg3knLMAufowe",
  "key22": "7eNWxnKFpV8wuVDFDx2z9q3GbimaHfJHyKznzSj75RgUuYwVDRCLE5mHMmWkuXfY93xbZwhcUQGhC4y1996iMfP",
  "key23": "3gwBrpDMxrFWdW6epvonm8W7tQCfYSkwehJd2VdaVyMGNcmuhGcqBTw4JivVk9w5cdFdmid4vU8NrqZhcy1a3sha",
  "key24": "BBfpnYiAbnxHEJcbCjqPtHosz6NXBqRS9dN6LQLauRPHZ7wkTyuJkv8BX7RxzVPgFLe6ajxLZ9rQyurWW9QrE6c",
  "key25": "2UDRrokb5Yw59cPHT4UtjcJ5C1edCh1DsP5C7pR7jzAhsdw8xNsacJiGxZjmDBjEJPcumucn4o9bbWz85uBFCYHQ",
  "key26": "26DsRU96a5pFSDkBZSy4rRarnupDytcds5LYDFWahLn7YbsZJtFjjejrQBjNVA57uwddAsvsYwzpTsiLpRuGxfSh",
  "key27": "zutHkdQEFHRiX9bo6hm2MaUQdydWfcubeZP6dohkHWW6JXrSgxU115WPcqCfn6uacTKKkFH7zoZRFoJzk1SRAnC",
  "key28": "4X3VkaCY5sD42tdUQJiGdbipj1h8cGbMZcabkFruf3DNvE1kn4ADYkfvFnmFU2C5yAZAuZxsostVgZxADCN7Sk8R",
  "key29": "R7oDkXSYPgKJxc8mJFwRCwGudhuw8P74TPUs2depp6qyR3k1iohGgkF2v1yniZiPbzMYLqHYxvu8zRqeY587rYK",
  "key30": "5ZV9em2TEUA6kxoTTDxiXTBodE7VvSBsPexUEdLHDb6iX3ezJxAGsKEBJpQFtFUdwvzxcmWMEMPn7HEiTmocQMVV",
  "key31": "vABzx5PrPWHHqLVtQaVqDKsVaDgmA4HeruG99BXax7zyViNMtezy3h4HakYDm4W6DiCpDweUM81ZCXhCT6VUXnj",
  "key32": "3ePNVGnWoKdqT3rNxnGdq1MBhfYR446hoZm5xqhb5RmAFwZejzRFKX6ZWqZRuuoA2Em8t57fZTYsbAx8Nn8q1smd",
  "key33": "3kmnT14SNQtAnRq2Scq48LFbjejMwcy9d2ZoMCaohH3nEXERb6VeejKuNEA3g62HQrsFsPT81dESg9ywxCkmuiuc",
  "key34": "2EJjAQUap9hKoDamEC6j82jeVrZPFu4XwZYRHcaSPNxeT9y6u2rePozXYR2zeYkTaZ7p2Zd9j67n1WYBTnhZD2Yw",
  "key35": "EcyjcNoBJSMbDwNNixzmUw9xffVSg9aYPQdkseR8dBLsdxGw9J71xeKnRdDgvz3NfUZ4vc7xXT9nA7bPro6RyuF",
  "key36": "3XawggtCmQuAYhHpVftw1wUaFyDqN2f7SaaiFrSARYcLFGKRY1EH9TZvkqVvUPRbYsrLG8o8uUAtLwi7DAreUsxS",
  "key37": "2VHEj96gqLdWK3vSFVfHzNheoBenTqr5ZosRpnZe2XcQ7v5d5aAoe8vfLDJ5cy25JNKEkQAvehnPLa3HvjhKL2sR",
  "key38": "5dwbA73CyBg8wnigQ17dfxcDwDxaR7GFLXoEV8hAWpoqa5EGf1NBdqQHWzDb4WtCyG9WbLhegMdL9wQamGht84be",
  "key39": "4YxwBwWpXSkUMRpfTeGvc3QoHRrFLe1sMcvoTReNmmqtC6hiMAKMLeAyC5ZFxms2uvzy4Zxf9oJRmojTs9cGTUum",
  "key40": "hsdmQhRSqJe6ZsLs5qMSJrp6sUCUzsDxmqMwXQjxdPn5QuPgg6sDyHggdAQbvmTEpwyPj8sFDCB7nPJ4b2TduFE",
  "key41": "3jHx4o3W3bUXauvbTnCm9En2DxobtQgXyiJr2austyy58AbuCMGrEpAGA2Ld4xeaaAJtvxJE7ePnTXjmtbw1rJEv",
  "key42": "2tACMzRUJPm67JBGcFSMDGNgXXb6vkeh7jEmGGqMknsMYH72jJMqc68XgpSASFoUM1fzNsmddGZedwuSynHChy4w",
  "key43": "3sm9gmXfup1ERDYeyWeSg7v72h4TGESVZKcbFLoujFwpyE7T54quNKhPzFw6vMZ5sGkbzB8z4FRnRsr6stfqtQb7",
  "key44": "5f5L6N1twinWBkM5f8uEqrfHUWivgFAeRjuFiUF9gqJ5HzZ124FyVmeQwLvRsfMk95Ridt6CfUBJ75NoQ6FkS6Nh"
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

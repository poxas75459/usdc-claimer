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
    "5bztdX6fYNmj3QWG77zd8CAUCkPuiupJgGdkCsyDXbJeYJAdECVU4P4Amr46mXaWkhyf29VTvJ2JaYGduszrpBks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fsMG2AHmTE5RzDnEwuvVxD1iDHnusDZPk2BbWF6gCBe9fLwBymHvfsgLzJnMFViAmjhZ1PoMcextDNBVLrwpA44",
  "key1": "2MRqs4VQENKgRnz6VjAtgLUQnj8tXAFupSFzMQ1aEEe5Bi1uiqe7cqQm4fFeJaZ5pNCMCgFmvwPDLjWRo2zjM775",
  "key2": "4pDpeR1TWy9Lqpk2omL4x6Ks8NVjqEFD9nVdJi38fgkYh1xLJvnfCKmFceMUdNQqJaqPW36wjKxZ987tCG5CwVcW",
  "key3": "nhL5KvbJ6cv5WWvuXj25X7ZnsRXL4CGz3w7fKkwQ9kF81xG3C2MqinLSyebDuTyzZ7ieWL9uKanLafDPonLqLDv",
  "key4": "555P3CHjo6eShiu6YPF53TWe8UvfkA4cq5vSiK6EUFDS2zAskzAw9R4j5k1C9SVU4UeDLLxHCjM7PtQ7dGDicGon",
  "key5": "3YFbb2nWmfqvZ1F9oDGhW4KiGcNWNbSUmZeGAeTefxPkQu8WDFTVTA6Zc2EhVxAC5NDf3YeoG3QVdrUvBaQB737",
  "key6": "2fBuRRP4aYMxZ8yEuF6JRfmJ4bF9dfhpW3fzGYs1pNTfNhjx2mgdnfMhUj1xR7EMQg1ZfiyF8Zx44EYciDkmKU2a",
  "key7": "21wPDxxba99vSdd2V1bTXge3GNf57sr1B2Q3Jijf4vpv2X9GnzWpS9e27B2iWFsBoUDGZtRnfSDHMTEa6hMuNtZR",
  "key8": "2jLdvKsFUYpPPyyMmru359kzjeE9o2Tsm2B2BxiQvT9UANQ11Vxet3K7ky39Mb18Vu1ZWAXYRd3bkQN5tniU9exL",
  "key9": "52GfruMif2YGyfkcQfpJPKq63MmgMxp6uLWMUAjfpWanEQCvYp5zkbr7Q5qjTanr7VecQEfkumLW7em46vTVqUnB",
  "key10": "4LDw1gvL1K7uHfmh5nYMVfeLaysvoRmYh6XVvxRK8b2G4g4KCUoJUaUsBWm1MJqKfvswnadj9e2Ch1RYGKrhz65J",
  "key11": "3QaShwUA9SAEK9v8bz7HcuRt6L7Bia6cfCYQ1KeCDoELrsp9WJJVL9v5YQsHq9VHZVAdNmH26LDqdRVNZHdwkYBV",
  "key12": "3UGPds8zdBa6CqBgR2uQZF2YCvPuWDuK7MfxWFN3q1QhCN5Mf3xK1aHe5wqjPhyF2cawRqfYckCfCfVX8xjx1s8J",
  "key13": "2yEGG6ZdgReMUX8LMCRF8AQWC6e713mG8GPFXThJeFXX7Ce3bJExUCo9feGwz6uVbeCCZHsgeL4bG8uTM4unSxba",
  "key14": "4DNstbNjNeVAbrWDrMu1a9NDHWRqyEo1So2fMNf5RrjbQZJj6zNfveFCM6rgxKEG6mBuYLxaBFKE98KoT1Bebsje",
  "key15": "4x9BYCnzykrv9h7qHW16Sw3UdJDLeuM9yKPN4vQYMjSZUTXq4ABPpACYAmkh1JYUdjDznZwk2EMuZAbig3cUJnpo",
  "key16": "m8Y8D3Fbqdi1Di2zkYzXTqfuzGTDrXQrkXrn4BXL6eayX1i2JD3g82GPLLBNk2zFRN7jNcyQwZG6KbqS5VnbGiP",
  "key17": "48LJtFWCfpeWzBAXQ2Jw6iwRWBTziwHmaooqXrL9sB8YKYWe4CVRyf3ZcB17Gg7846CSGKgV79Xa1JPMYyGub6CD",
  "key18": "47ezvyCozajb2FgfHxAx1GxW9HPsUXok2q12zM27RgEgxvDv59ncVS971qgtd26P5baFCG116REFdMXJ5TahrUwM",
  "key19": "4BtArma4iepK8KRmgnmhFvs6eLrQnx1LnwN1RbhvfQghBsC9bDdms5AzVwjWvcxjgLJKmV1pCW7rnktchcEjsk4t",
  "key20": "4bpsWSFkg353qcwjxRB8KBHWNgf3QS97M8r1bXa3jCVACC7oAcfjTaz32Zkr2un1s9is4Ba78tDUH7ovkiNdaYEL",
  "key21": "2TiBF3P8arz2ykmKcGzwnZVY2nMqT6PmVizP84birw4K9bNih69jPPQgVPbMsxHFQg2Mf3bH1SqmKU4zdY8CimMP",
  "key22": "6nxf6vBzdz29zY78XDLeFvfJbqsPA9T3svZkbrXoYhbyWre5LhnuxCXvz7VJZkHvybr53ebe6ugPUcdHqi544tV",
  "key23": "5WuPFRkuQdnUzsdCcWSj5GH2hjAYrBz3VrzNdpBnpnnGB1Z15fH3qdbyYA5iAqKTLcipFW5i6YRa5goztHozaWV3",
  "key24": "5RVd27zBb8WqTuScNuKXhAkkoRA7gMC5dTN6zaP8HFWmeH7DEQiYHN4ekhFjnF4dPkSVGNAYHAPDjhQX7hkBXLKS",
  "key25": "4WGbo2P6ZoCkA9Z53jZKNzZRBqNT1Qvw5v1BvSnpjjnbebuqjk61tcN5UDEv2mDNNoY1m6bikFn27ZtBKsz8WkJF",
  "key26": "53mkGxKBmFXRXUGG9kqK3v2tbjjU41Uh8QKfqYETMCki2JsvzaXUw1ZtoXbHmwSDk2vzPuRYersRrPNZdZAaAtRc",
  "key27": "MkNwYfUhFdozMVTiwETDqxXEB741WHfQNDfRNGrJvH6WkWdR4X4xrSxYNR5MoCQTuVSGRKDrNW7VHavv22QY743",
  "key28": "5ohJ9oauYuafyzsu1Vwpz6bLJg2dJgjjqDYKwLogKLaxcZrdNvCRr6iyfNdkmw3VbJzjbbKcjKCPTo43iDA8HUKy",
  "key29": "2NmNr5QRzjmBZhP6sBieH6cg6F58BXnj1G3fk8bu1sNnCjsFvKPujXCLirFYqkNjDz6N2BC9ykeFCdYF7CNHbkJ5",
  "key30": "2Yt5m3ZctHp3kSV3DvgTGstMcxYgDaRZ7YnBqx9N8GRuMx6g8R5mZJwJ11d7L9ZfZfaCrddbBYtqvNKnkCDaU2ah",
  "key31": "4NwkgrHUdVdXLaT8j2zamjUCxDfWgh2SYiBuNAUDqakXZri8qT7mgVwh6LJ4LnUmFeLeDzjEAPvWNgh9krkV57dy",
  "key32": "oCQAf2zhpUMYnAJ4xW9UmMbZudQDPn4L7E4KH5j7VEu1rS5oSJhSQCSA9NKZe1ZJQBbyrpuUuUJdDpFqHQMWh7X",
  "key33": "5itNa8kqYUuGCYjwswVa7VPMeY9ZST34RyUR7uZMQpYxgLbKEcvtNZeT4W2L4QhTi8TLqX58WejCE2Z3SdwSN7qx",
  "key34": "5ApskqbpRWBsesmsmooLNZShUKe2yQ32hkwEZRS6NgvHqLsX5Qj4iXzWaQUiM4a5fKADNCfT8cMcoWxvruxiAKam",
  "key35": "4ZJudk83USzLCnXvEV53uSyxwXobQvR46EpyWSGpSLqBXX1o7a8TkjBjYbqJsDpawXnXyjQpJSqrCS3m9Edngpov",
  "key36": "5LA7hPah2Wdbc57gg7w9vVpTYwML9wwvHaVfCjcZ2bjEdKH6Z98u7aJJzJxVPoyon7gX8qWqGK4hyYHFL5ndbeaS",
  "key37": "3VHhjfB5dWLCHa8EEQqhMDctvL8gyripSqxFGqxDv9gF7XLXDHzAa9RKRASEUW6dTbFpZ7R82ETZYGV5H3vrkKWo",
  "key38": "9LvLymoUALud6mvKNZ8JEo3SsZbYyGhPD1HhYtQVv2H6JKtzv8e5YgGrj9Qz4Zex3yo9uB5R1vMuM5GzxoMcUhq",
  "key39": "5wJm4s73tmJmouMVVWDc9TutiWRM6G32VYXcFv1uKBXWDNxzTFf7cPM8qyfHyhmwUPFKK3GoURfLiT6TZJKG2Y9b",
  "key40": "33ojzVUmZrhy19vLc8yNPjDcCjReXZGTk22NT5r1Md7TSZgujafFFsuYjvcYrazfoucDL6FYkxnmCT6Z4aH4tre4",
  "key41": "5ddL676X57RQ3goJMmVbTK1exh2Sr9fS4GN4b1MCgG9VJ3p7bVzd1yvJaQf9HHeCceq184NiFcgFaySnZafSoCiH",
  "key42": "UJTPFzBcyF5yR6sjNh1DDpyD9PH2F75weZ9CEUfbe4CRyWzF7V2nQYcdmtEzqDqSs1uW8qaE6K5zqmFSXgdSMGG",
  "key43": "5awUwMFZnkxAQuhB2GLf8hj5Laz3pvKggcQZEPZPz6GMvd3CPdB5dKHwX9FC76oHe6S4CC7eRLd8o7pD32Cz5VYQ",
  "key44": "38uM3ngExy3vvzTRk4ZSnvSiYFBoKnoQLxSt3vAjN2gvtVcLrSpw6TxC2znjF82F9TxP5mahptUcpiZcQJfSqco6",
  "key45": "3xzo32qyrNeCMUdYuCF2N3bCd7NRsjF5CvvTN19xYktbgT88eiTBckqskjbC8nSky2CHv6t4CYHMt4L1QKGS9bXf",
  "key46": "JnLB8zeQJ8cwrJkotQJu1LXTpmL5X8kcQCQLLuD9gseVtLWKa3r9Y7Bz77xhomoQ5izfviYaig1h3gqUCFUrqvK",
  "key47": "5oTvQDhh8TFNEKzzVU96MexJcUC8G9CupxzBcdMP8uXivZj54BV7CNBtva5qBn41gyPgyitJbp7QZ6xjYE1HuWEf",
  "key48": "VkRpGuoXTMhJhdJChs1kFgpVwQj5af5q3C4y3MZEJP8FUh3RYN1RMB96tFgNnyQSwswvmuG4zWd1Vz3Ajf2f17k",
  "key49": "4kwcMrdgeY2qvSJZ8iFNYZiEZWMBWNaoUKQtohXLLf51gajrDkEQ1zwAQCvRnPBb9UBsxeYbnfnoddHh8KdsXFUC"
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

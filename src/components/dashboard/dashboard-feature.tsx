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
    "3yjgeVvznVgrLRH7i4JiNsWDYpVJGhrdu3xhTYrVLmzfG5JPpeFDzGtD43KK1EwZuVV51Q6yyZxd6EncBEuhKPPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPQkEoXLfqqFfGA12zoAqSaeKX5PzYx23eG6AHxC55b2vDJtQD5afubyChUTXzNxsjsS3ZnJcLgxaQb4bH3kVJ4",
  "key1": "5JdXeP8EUDnA9U4uauzgZuRiWNNHXPzWN1qAKKDiPFWJifZyjXxmUpZaLstwazDakDarw2xRSELDEfutk7nsxxvg",
  "key2": "23K2ZPpb4T4rLAC8aTWnLHtckNtGdatfoh9v99RPqYm2TqDz8qwGnbJfEqomNrQoyB34pNzpnMMMSNDRXS1ysUH9",
  "key3": "rQsKrUMWS56fcdwM1jA9bHyxoafJ6q3zHhiwFWeseAWUV4QeQYZMbqLJMNMwKz9F6Kfin1ohFxTrnuq8GDLPFhn",
  "key4": "56V8NnSqaZBQ6HmhhaA8DoESPQ3PUeJEeU2FT9ZuQr4pwNvW82UnTtNfbEnejFpvCTVVouUbrZB4iCsx51GVdq2V",
  "key5": "5RDoHtcmUrcuwvjnTSoZmTJQku8MfcAjQNrfYMcWgyeFXZRTWCKUeymqbrW9mPpW12rFMJwvhZ3h3Yeh9qHSE5rT",
  "key6": "5tm5ApgEhRJVXW9hNvuNAS2UmJtzBpvU8XL8JNCertLF7AXS3aKDExeaAAZfdiGwJWk3qTNB9zij54qMNiqJTRnq",
  "key7": "4n1w5JB7RHsMvo8RBU2ZLNvgRLhK2WjtA3StJ7FF8843zuS2jT6QA3AfeWUL2Ef4qM2K6SCgk2tKkDEoRnAJ5hGV",
  "key8": "3ZvBy8mCUjTZm7YL4q9ZXFnxGHCinEG5XHPkpcub1ysWzRY9rpjjVK7k8rSYv3E2gXdPDouW2oYjjtAjePjRZgzj",
  "key9": "5arkaxcwwo3WoXxAm1Z8vHcv6Ls6EQUJZwB7NFjY8RJuZkW8Zmv6qSF2VHsU6ZXoCkby95FUNPyA6GZPS5iVwKxf",
  "key10": "5vTP5WTtF6nAzj6jkFddVZ45ru9pYmEcx12neRNv2KYGELBNNd9i21GybpJwHRvP4h4J9BUF6wMaFDp7VouAEY4A",
  "key11": "34VGrQAx9tEACeMdiPY9ceFQXwtsBgiSdCqfQLBuN84TTpBi4PGJszaDcJRDV8NJDs1v38brwX6Fk7stHitF6SMi",
  "key12": "MFQ9iSJNcn6WSBwDx9BYwCJPsJwRxoaiXd6SdBvfUtcjQJS6bLnPnHjWcQ1QRXM7YNSoFHkNKdy2iLfQdN7UfDe",
  "key13": "2ffDJkeimijURoGCwDbV8qJ1emPus5ARtu22QJnDDMPHNDE2hxLxHL7UyAco927peDCZPWf7g9rBDofK8RN1e1oq",
  "key14": "x1EDN9cTo3wbqntDfudVCpqaLsxjeuNwkMLfUAgHPcsNcCNsfAfNPA3MPoC9eea8PW8Vh8kT1L3gFzNkAELDEMU",
  "key15": "4sY6zUfMbSeT7zQ86Bzng4Hi7r4i3nZ8q6T2h4YKRkXCj6rGBxooFcPjZkuR4ksYqMvqdnVkNXyAE3ma2MGE2vcH",
  "key16": "4C5uYUA2qCZazxf32MGmtEaSRqPWj7rct6FJicdZzEJhW8QPSWMnytgbHwnNL8zqEhg9FhgVUgEatJhQrDAjDPax",
  "key17": "4x1ER4yLaHyqRk5vDKvz19jviwFrgXkEvMAeNAGx1xG1UUatW3EdaHf3cFHYKjxA8z3wmxdQ7r6pRm34mH2ufLBy",
  "key18": "3euv1MQuw9G52jv9HjMCAxkfTWGTAt8KBuK5uufgYGnMJW1sjUAvBtKFtmWQtVChjJkVLMuMyj75xEAisj43tWdM",
  "key19": "3tGcJdQdL37A3zMWDeLP1jRbpHVi9tkGyXzkeA4PEm8wSVVxRuKjEiARX2mtjgXBMbhajqrXF5WSypEUYgY16sFU",
  "key20": "5BnZ3oN1XtUHdVDiE8uJ6D5h7KZi4ioCCudvog6gEFzbz2XweXAPaScnuR6KVGnzqi5ME5uff41k8GnTstczm9aH",
  "key21": "21yyvvh5G83EB3Q4Kphbd1uWigmJkSuNXeUT8Kti4aGg84a1279gYtU7HtqosDS1RXZcNhfWqw5a2XZroF7Yc4yX",
  "key22": "3wuRYpML448wrxbyexdTnGJqoaPmRFYN2wzR89Kwm25uRp3HoT12Dz9didVXgyGAeXcTtvAmHN149GF8mR9xvtd2",
  "key23": "3YbooTqv84RF9aAY9chc2vrGE5vJn9seZTbVXG1vpLTqULmkbGH1ZqzFqFzC9czRL1W34KBSmoRv5qdNQx6qsCxA",
  "key24": "29fsLBnWr2nfDGwBhgfkEwa1greYYAovGGigvmMhcvVwSzT5PbrE8ZVqLsevPYgsLTkSFowm5YkD9cNo4CgZCSPB",
  "key25": "3grCwCX2SM18EFUbRWay6kW1Kybraxe8JZazWw8LZw2Vqfy11xDPcNRpJY4ekmfjxuAF8AKH5pjUKDPxU3Wbz4GT",
  "key26": "3aMpGbX77MpMu1t3TqSN4DbM9yZ7ipyHj8xx7XekRexWu8jkJSdMcNJy6R8qoYcRywo7UhggosgJT74rsPWLx8L1",
  "key27": "53hLQ2vmRsQyEGDAhihHTPuAZDbyUsfG2Xb5MHxtmypXQPzjUDyNRs5xqA59xX1URc4XS4WcFbiesaXdctqG5xSG",
  "key28": "34rb9ybtN7HTwsKjrjHJTPe1vkUMWvMB19UTM9FbeRtxKXXurz8PKGHHx3Bd6KgWoMsF3zk2o15DJoaoAoNk4K1h",
  "key29": "4Vi5L9WK88motrNcaqhJxhUmebXj81RBJesk2Pcf8hsQS2wRjzNek5VTG8wBrJZb3yRgdHRkT3cmmbBGLY9baDE5",
  "key30": "63SsXqh8cmMeYPxBLDkRhHTuSmmmUwmvaJyFJnhR9Vi9kr7AqgHskmG2D6N4PGhNkC7wbQ6u7eiEDr7oJ7DwYBbv",
  "key31": "256WmrowcjDa2pwBW89UYxUiD54wX7XfYvbrjj63nfdCYtM7QsE1GM3Dviua4RnhxoLJPUgLF7ran2JPMTJAChW6",
  "key32": "4T5qdgCSPJFdE5PdTSLrvy4AbXkKD1gxLBNMhiB7GydZZvdoQX9APqn2CKVPRsoNtk7JCofRjSMkgEgwVqq4dscp",
  "key33": "66y9nF6Ft8cHB6b5aHvjmWNuSU7sU9UcpDnaLgPjs2XUKLKQhEErRkXb8WPjPmaknQLA86HMdLfaSeA2RGt9aub2",
  "key34": "3jaubUrASYpbGdkwP2m786ta7g4rHRofAMLErDcybBvrP7jM3ztU63vcQaiZBXuRLTGtpfdVxtVHNWuEQgpUDPhQ",
  "key35": "4XP7z6QrjhT1yPW1CNYcWUQbRu8dZmaobcWXh3YRb4DwScj1ceGk2Y2QaEzen57tRGTTGvr4hmAqAVRUaviDLAtg",
  "key36": "3VSBj2fuCpLr8dEPqLvCu7xPbB974dvF94GPMVwnkoZU7uPbJ9RbirrUCSMyZxaQGmQjWXfRwQJ6bqMbZ2PcBGS3",
  "key37": "622dgbPQxBxPpQhCsjHY7aptK9oVk95CPPpeUsSTfiRNAxwKEzDK3ehZCpWkqssXATHFEsakLbbetQHk6BCGC1iS",
  "key38": "5MohsbabF1n9HHhbmkyc1isABn9KcB4MTmQKjrDHz9S35TmhxCeHfB7r7dLwHKabDBDwctzmddQ2zqETFoUtaTZH",
  "key39": "3iaeoFCcZkbisdoF6V856tztFwjQe2fFby1UJmNg4okCghoP2ULJEtBhRemGJ9cihRNM3XAY7eKHSkngvrSYLan2",
  "key40": "2vLdqpzRxGgXnpkyvZqK6RDoT593qzKgsmTmGkKvf4M3SLkYG144azjgLyrH9yStdLVk3XrgJNxR44PW2GgFWiex",
  "key41": "JAoXwwBMWFvwJvVmcNppF6BidBwL6W8zDcDua726iXpujV9DfQqTFKiJ3iT3HKMtNykwhFtk69tWuvjNzvvgWub"
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

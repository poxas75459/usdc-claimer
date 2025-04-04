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
    "4naoVyr29uUsx25bNA1MiJjEvez9dmQxToUZQKS2ZqPEsGjTL6rU3Fdfg7BthCoo4KDyrJkwb4KiiN5rPjYXsxqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tg2TmJhABzvWtaQjDhW4KX1fYQtgMTbgaququhjXqvHfbRxfWU9CJr4oY7hFyVHLwsJbx5ieMhEJrAxNP42JnUS",
  "key1": "31iiD5aDw6YL7ovWgq3aTjSw4JZ2xEAKHLt3R5UBPmu9p4qHYqzt9tDQsq24NeVUMVyPu2EmPhQWDcvC56z6NwxY",
  "key2": "mew1w34HMhmXyRp8naqFucYgKZ5jXgS7NVLVwWVnuNoFZBMa14theYGpz2gtbXXVnimcgAh8zCcjZdddXak4nDz",
  "key3": "2hTQACUVGVoeXd2TBDQCUsw26Q2gvLdmN7erRg4ThF5Afnv4YgxgWRYe5MJqikDogXFETPsFyXPgm8sfauCH8HB7",
  "key4": "5h3sKRTo29yRxN3DAqCCzbRJBp8Y3PWn9gYd72ESTdhYnKMYVbcxHkbFrnutFw8vQnM1kYaf7fQGzJT5riBUM2h8",
  "key5": "56SFuZByrvZdkcvsQTyYR4kWugqPUEAYs4J44Xefupt8iTnPTxDPer5y2Y9U8yR1zxqo3Xg3Qp9332YUEmh1E1W7",
  "key6": "2TqMw1NNNFoj9pVYfxfWq9Jfmc4moWfEGDEu1EzuG7reWAdhDp9LZ39WwigoDtjisk1DHgHjfmrNFAAdghbMKmg2",
  "key7": "9szBnhAzx6CmqxJd3G8MaoEhHAmnqEUKqQsnZhheDhjYtFLgzC6UPw3xfVZKKMFWgzGagm4QwTD54pWzpY81yh5",
  "key8": "37DR2JJeHJRpzHXWCBzVfkm9kM4oDApewMAjtH2jAdibaf3bQmYYJLojRaaGPB6VqNdDXDphXHMXFVN6PZyEfqrD",
  "key9": "3Dj2FibFGPxvobkFF7rpNx4tW2Zj4okMHe88akaZpptxScKkEtvF8cxjCVePTozbBo5FCiv9Foxj89YF4vCFK72C",
  "key10": "3sC7DpMjtsEna267wDt7yuBUti81PYUzLDNFjfiBnH215zpXKAg7dvonC1XJcErS1uxfUJNXTWxwnkmd15LBSU8H",
  "key11": "3ihvcxQxprxWPMoPsXQcAxumEtP5sT1sn8xLk4rC1fGMfx61zY3Tpsm1tkhvGsHdCWMv4Ut5UJm7HLiE1BBDHXHu",
  "key12": "2uKCyQZ5ehSS7BmNbEwgBSYpVSJbPhN4Z3PKCmD2tCEMGxXb7byCXG9as76JR7zsEvWtW6Bk8JiBbRwuuDJD4ZEC",
  "key13": "4xUCDogFgwD8FhmsHN8Z5A7ypR7o4Ptj5nPBhMhgMBfBubqDzZb27yfhTTJQ28VbZhPSuata6WcTVUp5wXohkox",
  "key14": "5uVinqhNrhwPrXDCS1EaEE7CVW1JStK4YQ6nc18EE185NKuT5rXc4rXKMJtdPYDuTmEeLC2JU5PLcE1PSRGyfTaw",
  "key15": "3pUmhX3RGXsjEtCYaTvv7go3a4XYq3YRfvbYwhnufFRGoMjKCUzdztg7Xhmxvdh5n2R9L95gppNZtVCSnpuLCR9D",
  "key16": "4Vsu33cbDzGyLXTyCW41MenrvCKG2goDEQzG1SMt9xYAX8pV9AoFi3w3GKrsHNg2HAzD68sircpAFSLeo3cqDjzz",
  "key17": "3iaNyes3rcdYu664yHwmuSk1LmdPAquXEE75mTvuUivP3ZPHECo6HuwdqtTeePVCPiLQUKKKysmpJgwENHKXAn2T",
  "key18": "4h67qgumoMVkA9t8VXTqGz3Ti18qYjibzvcFFys1uXv8LmGiyMEviKfeUnSvu4MLBTqWNcd4uJrvoxJP65wqek7s",
  "key19": "3tTkqKwoke4sb5GsvsBLddDekaiuDqXv8hZ6yPBC9T9mjBmTSkQdtYmykS2hhHJ4eQM2UvL3N3FW9zRzdYJ6B1fQ",
  "key20": "2fnvMtdu9kfpr5wrha5tZJmGSz3vxcu5NWxGuNW5ZvbUhmJaTxhzkigPGaLvAwbKxzXgZW6Q1m2Q8CKe7RtHVtQ7",
  "key21": "58rX8MrUe8brNKzrRvDtgi2t5n8azZ8rigEcKiZ8ekeTXsdSesNmyzR8ojRxgeabhKsdWSQei8Gt8dEq92L5UTjX",
  "key22": "2p3FNHxX9SMLxy2L6e6Pphgeeyoi231vU3J5KHRipj8ng5zip3ZGED39NR4ss8jFSvQTR12jW6N1f5kdpEavXvJN",
  "key23": "81FXSA8XTU4bx4mN253e9LcjGg4q7LGEHABVuJWmk7seN9CZmUHVz2XcV9aoeUXUupXz3UDnwSjV5mu3QY5BrZG",
  "key24": "2QuZLwwBvaHxkWye2zCQFzGp56n1L5pE8ciPEoVu8yGYKYZ1EfkrR3X5y7pTPUyWMFkkLA4SCqD2aoZCqeCY8Y9k",
  "key25": "2T3CiktZ7weQNY1mSiwAeBLo2GYKq2uncYKBnE5wr4pJmgjQoViZ33c2kUUXNzSvmkZrkd9uuNZUgFcYdzTBWQTm",
  "key26": "3kDk184oBx5iYtAcu96dn4UcrnxFwf5SrNBbb9FrLFREguDms8VinL336zhq2bvpCFpmV7aBBaq9DXH9SUuGFtZY",
  "key27": "4HLZ7VnC1trLHUw3hGfFq5DJ6mNC6ZHTMcLCM1FeFVGDuLYzi4kZRwDBw6J2eF3UoXYzLXRYMX1Vcryy9r48E9zq",
  "key28": "3zhMDzM76QpAhWp5pTD4kE8UrXdUKDe5n1GBnmdorWvehYjfBTsii2LJNjW2iJZea7JRfwTUpzUMcL1CT54Bau3d",
  "key29": "5bpRFYbKMbUzWEvSkuvbxh7idG9iXX61LvFnxMpN5Lm42kzYTEDPj3jvmCN4uXh3en1ThDJnr8gJy3DZNUkckMcW",
  "key30": "mjHu17aQwVtwW9hhE5rgZbqD6CAbVhcGE9ZW7AuW3AKSuDe8FByboZDo4Cyb7LEgvtnbDwaS2QhyQnXX49qAWKR",
  "key31": "3QnFpZcpSEGVWRSB5Po4pBqLhK1uB1w9nXTSkXPXW93P8ArzXEKXmWm6NqAPoFzXkHF1G1rvFqSFV7YHSdP5Ajr2",
  "key32": "WkqNJhLZSa7C3TzC2fyRv9m1eqhPYTTXWMAMWGs2E6FmKgsZyP9wAgimjQ67ZKKKDWr3w5fBAhShtCtnqKez2gz",
  "key33": "W25aUphLkeAe4EKZkRWvYpTTtnF9C3oCserqaKmwUXTJGSK5CxTCYZzdzaw5yHrbiz5RGsJpRNvQwbYDe2Vf2dm",
  "key34": "5mCjMoBdziNU9X6bDkWBC3zpRGeRdcqEsLxerWE8Fr8tnXeztTZ3Ff2RxD8BqqBYRXZp1hVJJuKrQ4yfFfBApimm",
  "key35": "5RcPTLnSAX55f8DnrsXSBh5zzHSab6a7Maq4qEuCeqi1Jq8KtAcH7xukF54yz7FXqxEwiistsufLZwFrrax8EBdA"
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

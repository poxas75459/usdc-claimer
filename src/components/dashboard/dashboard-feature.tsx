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
    "4BdDJD2qgeKjU55mdkDmaLMqCj6emnA7JMtb3QFcHsYezyyggaEDpwMC6nuoC7yu3tFTtqoNSWqVAzrSMdN9WsQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aeDyPjXgZNiUqTfsyeiNL5STousv1xzAfGhYcgvyUGxKavivMgJXWP56T9gfR2yZqDiobD4wT6gAPeV7ntjZg53",
  "key1": "3PVxeGbCF2E5332ZbXAtsTTNDhW7h2thP4SVCjbmCgkNgJZu52PizFdzjSTbNBP4PabkVthf1x6bWULb4z43tYE8",
  "key2": "526FLegsMp7T2qQMzRkvji47sJkQgrnGYKDUixLLD2DdjvviEPJf2Heh4i7qg9CK8zGk4FgJQwyhsp8PiReceK8",
  "key3": "2FMgyiXGGdYLQP8Dpy6vCiv6mSE9kp5EEtU92yRpnY8AZ5UrnzLdRXL8aftGbBUazmN6HGkxEgzpyFtbSyncrA1X",
  "key4": "X6HAuNr3Vafmuo7JDFoVzD8vp78PyiVgKTLQS2P3qF79ZMEn3RcuyM7YsFXW1JLEVDhnTt8w9UrCN3HQwaLqVPN",
  "key5": "5BXSf3EN9yRuMwtSPrFk8B9QJy5RXmU9ktrZEURaa5RoMWbzLoEWjvo8S86r52mAamuhei5qEc4Z8W97aqWUHqwj",
  "key6": "4oZCwgbjoofyq3jWRxz639cG8fQoLczcwRR6WngVkWyXJb1fRcVX3isUEPAcdHttaFtu1kPeg4dAj5JYUP9Hs1Jg",
  "key7": "4XAUXg1ScM3HE9xoV61VCvyJHa9dcBp9ncekQGxrAt6nEwKtVcAzvdxVvFDnLfYEidFQKLFqxAN9Rwuov1ifoxPC",
  "key8": "4dRKpmnASnMJTaaSebQiJ83ywGhpjh98N4fF4y7VpMCyimcbSDZvSaeGvbK1A4XLBaYYouWUqcDFzk9MRW9gyn8H",
  "key9": "26jLtpwaCspCoR7bWkeRsJumnK6XHiNi8p3BZSncGv5FXcket4a2hZFqxKRe2TeCu3KB6cxQKySkUJqTGCJXH8gr",
  "key10": "5TXQGoxifBTsFRz5GNSD6R18BjQALNujHWcVDQQDyQEv1ATqMKeD4pGsEeLpVnwJNX7Xhq7adgb2mfxvRHm2R7W8",
  "key11": "4RuuHdvTUwjCsuRzWrX4JxXhEUNbEZGo7Sy5MidVu38aFuJgSu3dvgthJNZjCfymSqyYH5KWSFocWfVR69box2E1",
  "key12": "3e1nPdoqrwVchtXXzyAqyKNCUC4NBTx1ZnJWSgZZDbumawC5MWt3orL2UmjVtc5mt5Hs3E29KrA7REmv3fRtaNkU",
  "key13": "3x2MhiwwnmLg3YzAkpgAzFaHSQZjDakYkqKSxhFea9AiBtXCa6c5SZoF7iJNTQ6TrgczX5U2Q535n2YgMis6RJmP",
  "key14": "F1NxVSS5AEp6f2VSzfHdYNQezWsY3hAYXyGuLhyFAmsFy9Ab36xwA4L7Ud3VVCGvi4jWivr8t7QtnhauPHhQfkB",
  "key15": "3eQK6bhwM9mt9ZEYcqbLFSDLmykDHb8ndbpaHjo9MheS3P4V8yAU8P8xYnMgX36zWcPuzzdPeT6vjbL6N7R5tYEo",
  "key16": "s2ESaDq6734kLHBZnJRPAD3qZtZnAkZw5JkX9JKxLdTV8d2kmE9Dn4fyJAifTqw2GhZ9t7ZtZ23NiJgRs1UjncY",
  "key17": "2JZiTSwG1uC1BjBRN6cVTBhLxSfhoxnHVTpxLFQ3XqEYKVw9SSd3f4NkfP3AUxhwb8hJyw1YzhZvFXtUA7HeTWjP",
  "key18": "BjizgmJcd2V4SakQdgrhx9BPR8wegFHFBrEWA8MsJgwgkntBu8mCy9WEfeUH4ksc3u27DgTrrsSxhsABRGH33iv",
  "key19": "5CdYgnHMLoUzThbtYFAhqCcQQykEm69pJwVz3eGocpQKNFk4DYDuc9MAn3GGfi4hVhmvHzYFAXDMhYEpr3mvLKhV",
  "key20": "fvPq3WBsnYXDSGVbnfYVCwRGXDPsUHBm9fNzgRqc78ZUGNdyKvh8yuXtZaY5tw7CXmGihEeUTZwKPyYe3vpY5St",
  "key21": "W3dEeWp7KF3ZfjHfSEpch56gw8gdK1yCpRoRpehJxRXJTqPv2qsJ9gxW2mXHAvvFTGub1VMGetjXv3DVkMjmKZA",
  "key22": "bD6kLmfRoXVieZX3hNmGr7V9B8ZPigx8M2Kbg77rMFAhBvvL6Ahru74iktzbkpsNwHnLwUZXAjuGQQWB3sDH9jy",
  "key23": "4KFZMD86MHRvVqU26WHHpfnHDeRxHAawGs57mQs9BKsjyKXHKGktGoFWsjWQ6DtGYvsnjL6doUGwYH1DvyuiZbVK",
  "key24": "5EZAyZvNfTc7J5ZfpXUXWL7L4rFQ49HUVmSYKeLvxsfhMu3YmaBpHeYauwr8SfEoYApKgohTRLgX2ta9ZyjTDfeR",
  "key25": "41JrPJomzbTHqyXQzst35TF9GNjRgfBJPg4oYyv3fK4EbYm2RuPieQDjpQSgS6x5KS61ARkP22zzpCcVWWvCTJpw",
  "key26": "3vqp5eF64DzQXJ1xhhNpSbA2h8EVZgWyGWhe7oKvyeANEVbPPmmdQgEJxXmt9Rzz5zraZZs2KA254n4rrtzhuy7P",
  "key27": "33aT7vYHQWkqe5Rq1qQZpTwKXhXwZF4uSiRxCqQnGCua2ehTXZ5aVZRupcot9cmab53HwGPZF7DBtj6P4YynKAYr",
  "key28": "5RGQC42K68PoFSiwJj1o6EwNkNtUkVJap4Nox8b6H7J5ZpUUh9NQdzN9yxxtKEQytdRh8mJNZXMJJcdspWcy3gin",
  "key29": "3QR9kfmppmmeTjqSxXryqdnNGNPNF1CibftQ4Htd3vQXJoqeio2e9aaYgCgffqpBTwA5nPsDgMv9GP7iRHkAPanu",
  "key30": "37ZWms41ytQnSgTywiBJNTm4a2PtupbHdKcJ6UgUTqLC9GjWKDzg5k3SRH7Wbzxn1wHtxaHja6jZd3i66W8Yx5Px",
  "key31": "pDeE7yqfGyy47wiyt6p6GR4Pi6mHLsGfUzSPzL4v7KRJ3dE55Nf1yUX1F2PqJKmPAAyFDeVgPW9vamDJLQdmvKk",
  "key32": "3yKGvCKWbVufZXw2r2RCcu1QFri8XuoCuMcexfhvkKwusdeiSr8omwxRNZUEGDyfWY8oM8tUY6LPcu2986aH5rVY",
  "key33": "3NXdykuP3DX7EGDQP2oSiWmQKoffmjcvQFaWiVk4PQnYw5HecZrjU2Evhpx5gc4B9KFUFxKACwEYdPctq4VsPa3L"
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

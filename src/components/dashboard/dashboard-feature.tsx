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
    "5NkLRdVxEAckWSWNQnekdVj1pSFmLufQXj52qM7v8gmaScPVRapGktCpCwQNbHZEfZYbEogBTfhC3PuGdxuzEkJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21zj1ri5Wga7Xoj7KHosJdEAXDKgWh6jTGrmzX8t3EMYbbNvSTgxCS9jZBKAz7KwKo2NBmrW3aFL4w1Jh8behE7a",
  "key1": "3UKAxZhANhv1sLNXEK6oCBn5ynRcLvNMw8phgWFNsd2mchE1eXM8TNaBTJSoFdL1JfAo32VEP2SQ4Y3tqpyAQRXz",
  "key2": "35HDoHSsLWeeoEQYrHjpBVTDavqczB5Jz72riatGDmVP9fQHPC9LvF7hRMHhvs7RcFFejtfk76Sr6ygvbaQKCgcz",
  "key3": "2Hf2n3ZryP6wV3vadpZPDLVRZTHo66FhtiTUzP93XqjYB6Jcv92orPqzdNk9jbwvPaxNmsGD1S9mikKtiCd6uVTa",
  "key4": "66hh8JrgeihYrKNGUgMPhKMTZqUuAJJHzqMMhT3UWcuxEp5ih2kFwDEffYRzNvHcENVdnXF6am6H9HFsgoPgveGh",
  "key5": "5naK6mNbibA6yyLHCVRUt4aHgUNWMb35VzzFH788yaz3v2xrbzo1ajon3R4ZhHPZsY6RaC8huqVm7dvebD3LoZZh",
  "key6": "3f3bCfgofQNemeLcQ1uBxQmQAeTgsrDeZ2dztAuvtKcVTBL8w4rV3FPCxSPKw9Fbth1vLDHg7o47KXDwhZoJBt7f",
  "key7": "4sMT8H4hs5ALZwpTKN14KxUQrVGtj2om5NF7o7x2wyW7QAyFpZgYzUHbv2XDYs1JpckyqxqkZ2gwKqzKahccV53",
  "key8": "2F2TGRy3BdoCeE9E5p879MedB3a8kfh1aJQwgM7kmmaMgzPhSKsPvvpTiFkHxbtjM24eH44iaiTZ8eBDtEiqRpEz",
  "key9": "2doMwkdGkvPG4E3xc5153XAbiM6GFhwvQ7rYCxVy8vu95cUzhQCF7LRuKBvtagjT4z8DG17X2N1bi3McqtHMfBz",
  "key10": "3zMc4twkdUX5QWmLmHnbC4yuy3749yySGfiXYKBGA7c7TgYWg39kXrtgGrG2dDWiNQnnCErPYiSijDJ4r7L34tV3",
  "key11": "5JsVofhw63sfSDzwrmNT9GUCikPbPAzXCdov5q9esGKZRKkpQ8Bj8kXYiUJ2EDnMHzMmF1SiRZPn2nAP7DQvcPhY",
  "key12": "3vhCq93CvFsQ75EGG6Y1tfdYU47TprDKUTDbKPCTaC7pfoqaVPnTUozQCeLvNphyntMQpTvJzrVti4dtn7jvPpJm",
  "key13": "51Ci9jm6HZ7cenn234bGdorUagbDRf9da5iwXQiWsVzf7VapyTdb1rVSJX4Zdg21bd4CznDp8fGrbZpAURKFbVf1",
  "key14": "5PRqHqpPQjroa9Lgq7okb99DBWFoVWDBtqceitpuTMDAqhWiQni2z8wjVZ4kV5kPeQQY5ZQXpBziJJ7N4b6Voc7q",
  "key15": "3WL4vfaFvRHLAmvCix3RzeJNZNH6zREznMKWQqPJVwZ2cSfKak4UyjTAKYrBpNBaEtToZRYMEzrbJNgtH85XEFPN",
  "key16": "2Z5GcZ94NJNzaWV8hfV64WhE2N9Gym1WptWRmQkC2gv5MoDyfpNTTby8XSJaz2Lj43hKhveyR4DMPFj8Bdo7ufDe",
  "key17": "2HGcPZedaAR89LGeRA6upSxTLR6jhqaRmNJqRzT45oGX96kaHfNkc8Q6uGxfa5oWNH12nRnyTzxs2JswkJgVe9F1",
  "key18": "5eQd8ym5tWjPEHaopbfZZTXz5knXsGt9hTQDdhvshHMPM2Y8koacEjWZg7Hpq3dvAiqjv9nC56vwNfNqrDXZUapR",
  "key19": "2kvRgbFynJ8evPg77MKGWEqfguSNrfHAMe8v5R3hQzjDjyyyAZC2m8FKRJuEXaxRp1my9LhdF5jHfKasbmxeznfP",
  "key20": "5SmsrbpcQgbe2PuVvudW9ee8dnaCoRBwares4HBNCAbfGZbrMdVmdH6jnDroEcG8UdhE6yPMABR2Fqdm1VCUdeTf",
  "key21": "46CaXf7AEJPzkxnjcucR1Tbamy9W48BDYmnSQwKpM6gZawypF6VbYaq6eyW1erGja19SEgCeWC53reKyKu7AX75J",
  "key22": "2vq1R9Fzvts7eDiG2TLhPvNtYTZHwyGhNtKwYqDtaZ2xdMxvc3vCx5F6Hp9Jg1N7ASyWvsq171uTdXwvjpRgPBTs",
  "key23": "58P8JAyUBJpX2VyDfnvGNUEQPd1dEsjFfc7JcYQzYKchFraHpdDTCieduuszWWnNnDpaTzZ5G9Ex2po5ucPjycLQ",
  "key24": "3HeCZZfTABZCJpFCs3sadqeo9yrW1swScNWjdK4LuEAUmqb2xEfehLBZx5pvhMV4HGiKStLJg8EneMaA5rwcrES1",
  "key25": "2K7f1DKLHbAtBHjYbe9GHwTDPJqVMncBnMHy8W76vSWuAXNYXKWuGTSe6gqwiX83wPC4fWW8HxSGAb1aXTTg7zU7",
  "key26": "59CBTeHvbgSnL5NRCBBefiJMYR9sBCtYK9RpSxhXTuZ4TZ4h4oe1AzNBJ1Z3pqdyEK5tJsuAR1RN3S5NB73kxmyU",
  "key27": "2GKGBEcaUnXAAwhDgTGR792jVyzkbS6GGd1zrqawbFxpVTc5svWMusMNwxZWQLMn84SQrGsg1cjGAMPTFXAwRoM2",
  "key28": "UoDdkoTtuGKY3vywcVYFCbW1xz5rLbFMi1iVBLVBjCYp6Srn8Wo2DBXYjUsMAYSmRTVr9qxHrUctCQJfczW2Eo7",
  "key29": "5Z9fJwjy9532rC7sPPeAvkRBkUbhZ5p3XusqPwixRffvfSjpVdNFVFuNrpjAG7HX46EuLjMPRRfcFB8uZtDsLWwk",
  "key30": "2ZhvT3sW9DvgJwMTVpcuSU1togxaV6C6sK2VZg3neNFFUWvNKTNkWLDLUrt5UmZheBrbppe6r5vbv6oh9j1cpp9K",
  "key31": "TkMUqXrtwjJFNfxAjs2ryBxmfP4zTDoBnuL1CwyH2e7PahayNaEQuPrtq42HRjRaEzjxTrwHS1BTx3u9sRSDnYv",
  "key32": "2RtFhZ44vNs5nAwnC4HdLPaM8u5A4V7REFHe63r1Jnkgxnh6t8mhx9tW3QHa4zbpuE6JCda3NPeJDmG22dDvbofB",
  "key33": "3omNJFdco9FNWn8VZoPicG9c2sqc4riDCKW2vT2sCirf4G2PRbCyfvgtrXdyZ3buDQxpPEnEgwmoJ8wheotx1vbL",
  "key34": "FLLXEWoSkyN6Xvwdxt41MXj3EGmvrnktmQmPMED1WEqcWcBXa7WpYb7PFHnxXQqz3PAtcBx3LSMJCnV6oK87ffz",
  "key35": "2DkM5bXpxnwhGQG5morGZKU44CKn3uDMfmHEHxEpnPja8radBbs25tbRZmQiE6fr2xyGc5VRmdkcQQKeVkQf4rFB",
  "key36": "VMgsUQiVuuhxDb6i6QpdjWSzk3pubK4mngrEPd9GPibC2b7gPb4sU8dBuZYxbcJTBJbNhww4BkdSu9YSRbVBfWr",
  "key37": "5e25FGbsBy7ENu3SxA9MbbM7XQhjKhuxLvKwSozb2xqA9XwLdQbrssMnWtG3gXwM4vCyFFhLd1ZUib6CCsjvJzkv",
  "key38": "GTJbQcU5doJAntQmEdGp9gHp9i8xXfrX6xvyguQUM7cVikBNHLvmxEzGiFRrAuynP7mbncifCbjS5ZkRsfZ1tYt",
  "key39": "o4Qh37MWCZe2xRqACV5YxatBfkBcZvUNzA3cF5hAKhZicmJQWQjX8mi2NiD8WFUoSweQMDGGqRFTYfipAxt9s4q",
  "key40": "ztXhgwceCjXwdQaHdXqJMJ6iLr9DogxtgzbgW8B53EsHysWry7CuwtetFPpijVj4FZw2C5DTdASFxdJHKajsRk5",
  "key41": "4KkMnN5kDuzqvzQPgsgbSU8T2gStmZFeA2b44G97rh9wWjRa8yHGLhfPT9uRdJZ1kenQhfXuuLwd8sVV4CyPzAnx",
  "key42": "KYRVqzZrxAKU3fEKPgBHBYzoBgFLkQEnWVbw6cfHfdhrraRrcS1KHjuMfXKRRFndBWsNa6tVBUuQB7JjhQJbm1F",
  "key43": "29jALM7emX1FHna9rGz4gUYXTk3cLapWn65EyE5r6TYs4fMt2jDwX9vBtBrZ8ZFdwFFx75GL2ZXUbC5qPX1VeSea",
  "key44": "24NDMSmgqdETptG7feKtRCbdyU6qyjsiTDiBecxe4sptirFFc6ttwKcQ5XQVwhuKF73dnvXkZYH6nfKXmEcapzUw",
  "key45": "3TQ1FXkkBrPqKrdJgAjdn4vJ6FcmitHdas2fpFHTBHyZ8yuCddQmQVSFbVNWvkVbhwbPURpcXLQZ3LWSxGVbNpyX",
  "key46": "5ns8LFMiXhUsfao9bVTCYq8Ui2omwkrXxik6fWgDjZbLSSKLT6QttU61ozvkefisDhLZSfxDTtAFc55WkxzJg4PT",
  "key47": "ZCuXUwf8yAJFXVpNncLjbHdHGkNkmpQSXiUWyqt1f5Hg1xRzQebjRXUWcRUk7KwfxfZ7hRbcJsZdbzg3VBGkpcr"
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

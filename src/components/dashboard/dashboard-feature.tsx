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
    "4WCsvPrK7qS5rhVb7Z9UhVLaqaaHRNFMgqzVdKkgZSBWLLGdMKGAj9rAStwE9aP69wStGQPUspEG41PeEhJQ3pzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdqMoamp7AveMjDHXX7tLwEGbF6VMjExtJpPtTxQSPvCTKcJapKpXQdVZPb24u3J5TqULpWYWRxrYk4BnneYhv1",
  "key1": "EWvR1x356XhC8inxunDkktHpVMSanYiqdoeUVV4BVXiYNCp5RCqQpvXaHbV16YdJVuKrg5LU1dVT9VQpt5VbNeh",
  "key2": "5uEqzmhT23Ev5oHn73sieqEcUYx3MwaM3amF9aBuWf97n6A6nsDzqpddy1yyTRVQjmTVgLLt9Z6Tm8Eopiv5Bpd",
  "key3": "gfU6YFgAdECPJWveKkAMj7289DHXiwAxF9MCFJromgV7x2FxqJUPdQgL3AnDKucGeJfe1r2VZ4oMg3x52DPjM7q",
  "key4": "4jVJn7nF6C7atpf7miHsFQjM87XeJ6zUWyVZmeSbHsVwrSUb67aiPXoVnWzKUNGaes874ftdGmTLq3qR5TmW4UJF",
  "key5": "3uSGgioYeb2gamj5udkiMmpmyyeobv2q1DKXCWkEKQ6vbwk2G95BdKqeWn7mKejk9vskxsiXdM8BKDSMsCnJVb3R",
  "key6": "yyd6bm4Zh9JLsPEFF48g5sxqpx4BB9fmQWEZYHeRE78kvhNUgdJ6kL7hLHRxbUG2vMnR1WbdfYja9izswJrDJXY",
  "key7": "2HkXZMUG6zroqaXrr5DsaGXm1aYMKti9EutpuzaaB8VCVaDm1X1hkfzFhnZna2dHwGP4JhZt4cqMDa19bwfmeU3U",
  "key8": "5nFmzXgG1rbFXQsaia3zvqgtKHUyCqK4JcGqSoaYyWQS968RAomSJPTWFAJBtvDM5tHPc9Z1kUjjAsebaAo2cVHA",
  "key9": "31LnuRVk26AT63WsLHLsuPcaSiWhkrkjtTrmzTSbJKYZAJidWJkQM23TQnQzzs4VWiBBLsbvDcoVQRBf7cWeU7JW",
  "key10": "42KAJwU6ZfnZsnrZia8QyG73fJwynDcJSVsccnrXY5GHbWqtq5oBAESsBi1Q2snzuSrZ8NMeXMMxoBMCyJ5fBLQJ",
  "key11": "3oGjsAWd3wYG8jyqPKqqXr7HWhPMJJWjsLReTq97MZU21awkeb54XoKbRTwtWqHCAHk3SynHNfD2ymVRqWz4vMKr",
  "key12": "3KoZz71YbjWEf1Znew2AcYCZUNqfcoV39ABd4RCZYZjbRfziLuade445ZE9uYgRusWzqVv8pE1oXr1SZUFwu5cJB",
  "key13": "2uJceVnGZrRVDoKXrM19coDPxmTcDsyV3Jsz7CykqVT8kNfoMPFCJVPxaUb68p7SoqSJfoxyysTbd2h34Eb1r9B",
  "key14": "2pFgb1xjpDXsqVTXv7E43gjKWEg6hRFDkGS1oXexhriPMEcJJ8JyyseS4diK8GYhbkPx4tmdPfYpS3boetNoENt2",
  "key15": "sB4oYLGxR6fi7TK4f9FXozHWXyiK2qDh84sdomjz3zQQ8gJ2USHpR2Y4C7xRgJx5xsCDxGavBDFBgiRZ9qDSpS2",
  "key16": "3gdE9JGYQPBrcXmLFNcBMqV5zFva5NLGw7u7ALpnJE3Dnn2qcYpaop3oGEPT8EV3veDK7WoSuL6rRbs5p2hxL9dD",
  "key17": "2apTB7NaYNserQSYEqjj9MSjiSVmyaCxVx4k9Z3TyBF1f5x9n4wjK84ESCGeapy3MheotFs6UKDenR4BQTUppTd3",
  "key18": "3No1g62ArNd5Q1Vq1WAErRwcSdubv1shHPLKsuLrnW6KxY1z9BnbzV9RSX9MWRR9aPio7ZSh7Eg9Aw1XUzuUyYsE",
  "key19": "426RrxtBcwDzPYkpMN6kRtwfKz1udTppNUymRjJqS6yrt6oRJyJbj7kf9uK6UYuRM3K4HBTDE1kHRV9sAabjooDn",
  "key20": "JKKFb1ADFjjpoiwUaReDFiHDR7viFw9LR5UmfGUXTt6BBtKrywNNM7vFXXkexQzaiZmUbA1Z1Ti3nkuGQmWawuT",
  "key21": "4ZP7meZBabnTPHGczS1vKVkmDT8asLkuMyCSAwLHvG2r66CDyJQN6agf9oH9C8QBgQ5odxS8Uu9beUeorGABt5ML",
  "key22": "4oBVWhabKVVZrEMTgcyrfv3wHTgCoUpuAkK7C8E3EBKnJHh1Vnce6WnKfk6AYfBXehKuqLSUmxvt5ouaCLyVMZRN",
  "key23": "3gki7xAAEa7ujKmvdBLQsPG1ReBNCfmAavekLEdf711vye9sQwQXtTPHWLY5oqknYiV3Woc9kReLEB52Xz8Hneia",
  "key24": "3CX2mL2fDzfetVKSa8oHE8S4tR5bWsc5jC1Nwt1ZDUxEn32ypA3j8s3J3rDU4PqhBwTriS6UvR3pugPCy2Kezt5v",
  "key25": "2zEz7B54E5QyTP7eNUPcij7emw1SwbVgMoRDKsrXBCbsK8vLdcNaiJvWWcgm73t3oKwXL5VgGLWzbnL45jKojXNA",
  "key26": "48eocz6wLoYp8anqLFS4EFmGVHpva9xqSzjqnwE8HPJvVA9GmkaE4aYtimQ6zoCGn2JZ4UVbGjJ1AyNbZdngTNoa",
  "key27": "51hFt5zYtCbMashzhqg6wfhuDfceoHrQjhV1smipEKXWEmFZY87BvPmczdAwMGAZsRkFyEGX9eVy5zvYVkeBTq7H",
  "key28": "4T4hJ9kXEA8kqP3Bmfk3q82aw3yxNS8VdEVHDWe6epv22bszvCNd7viVSBCENwWQAwKAQbRj1K7GNr3afptm7RwX",
  "key29": "63NZvBtFPnpUowhGZQwfGhd89qZvd1qkbd1RvpA7ZiSNvczZAL5Fo1aSzgmHU5AbdVmDNtUC4WHxoUiT4pZonqt",
  "key30": "5WZDq31E5wCaoVWRZepfWCxJzhaEo7hVuUJmPTcV8kty3AdN85vDwnQDv8NpAsBpYjw2c5mxToM9D5DfjhhQk4X7",
  "key31": "4SwiBrAMgyhhJrigAs5FEUfJfto7WYXu8ZZA4rQutcDwTujMVsaxa2iucK9CTdviXFw64KYZeQ8i9nJkkfGDJtx1",
  "key32": "2qzrK9ABn6Ks7VYVkLA3mGR5sneE7nmQFmATHP1FmykZB6TsY4kuPiyDLHuiiRBUQQYDS335ufJ6C9wUgoRrriUP",
  "key33": "AXoUfvv2PQeXwXTaNgL1nRxRMyEEbHwDEsrQNrLXpEyCvxiomwypHzNreFEZhAa161GipcAR1ubNotpYAupp7Ev",
  "key34": "ZJhtPNNczUcJwzB8GB65Fa1S5xsJm9PW78Tcm5q45gQ8RNBJgaM62AjcXjNM2zZ4DS8TeTotABezgBSNaLk3Yy5",
  "key35": "3FPW1h7HDrXurpHC3MkmxcfUrcDjw8EQka4FBjAjMEysF5spgNukaVyZAZLFzYoxJ3XcVVD4Tghmhs9YNTYF7j72",
  "key36": "4K8n8GWH6CHNWQ346yrRBXC12ak36RE65bmFpWVwiq6nkNTNqwaaNBZhnT8iVqMzBVGbMXd8zVNJATMsHmvtdniz"
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

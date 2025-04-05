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
    "2TfsAnuWrin5nk4LKQoT4QUQVef4ZoLgvbmFvZJrw8Jara4EWFrZPXwTAzcL2nmEiEirsugWXuh2tCpRtcwTBCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SA4YdQNq8xPSGCFRnS6E9xkNr2nqAVkCSuwHyN4sTwNwfmsKDWctHu2k2qacnh3EL6j3YD7JfihtPaCNWp9gk1Z",
  "key1": "5mzXNdMvmgoHrKwohACDmCVC1sz5r7XBHHYwudDU6JhrUcZXsJG9jRZj1uc14bbBac3uyVhpjrVcDSC7mi5onU9y",
  "key2": "2H1pCZVqS4encPV6UgKMioRzTghMNsvbb9GnyBJzPH4f4FfyNmLQbYFChNuYibk9iy4WasqYSf4rxpaCtL6vRwYS",
  "key3": "yWGAyXKFDbjBj3nMhHzyPZJpNxMfUozhzN8xMnAfYtVnNEGXxmrmEvi56q5Mk6ewA1NrpgbxFQFS5Jo4h5oa3bt",
  "key4": "49nKFbjFG9bhcppBbEhAhQBGkiEnnfddvXZMigVMXrrernzmz9P3yM1aFXCHAwqMS8MLkyKmv3y6JjmZdb6mnTs3",
  "key5": "5EhmgPhbtvCZe51hfAEoS1ZbLZwN2WEEVJNb4R8S2Jbz69SX5VenZ3Q7nm24ttU5bwPSRixD5xH54bGaowhi1j3z",
  "key6": "xQ7K42qVNN98LeZbRSc4Hr5MCRSdRLq7afc4VDH66au6Q1krkJiDknGuF9WPFUaJyK2JcC8p34Vjy1rHcxMAyVn",
  "key7": "5bU8ixR5LC2DHLVuD7wiUgxsqzoMY2qD5fGW6ajDEj4Qg5XvSNdHdjb3YeMCuh3ZWv4z75j46MfHMRZnq8SaZR1n",
  "key8": "2hhxc2KxJJMvN2P7gdZMx8Sd5B2opgFPKvpWxBdNRhpQXGuXhwuVcvqjjiXnmqSXZ6xf2VodSyYhiapmCzHgkDmN",
  "key9": "2RNfV1wUocGzDKTks9LoZF38xbxFErGQGMcjEFMJTvSxVehcpWH6N84B9Meenbf97Kx9FcuGrBqUv6HjktMdm3KK",
  "key10": "44GAwVbEV34HP4DbN5YXVUbU3ZbDVbyyUsKBLaoY2mDAQs1fYnAJjJ9iW4aTnr8epq5y1TQ8JNEcEHxDFijGkcKd",
  "key11": "32qvH8ReznV8qjeDyrnzBUuoHfsfbhj8DNyiJ8uJh36SVGXcF5ybBusDb24xVhZu6wqJz4CU35syMjhzDWLAvcok",
  "key12": "8aXbKpWXbwDKTqduV2q4Q7btYCQ8LFaBNEgFaFUe6A6yPD32m68KY92A6pxPxVFhJEvVpbjfUNnqxKiYto2wa7h",
  "key13": "2JN8GoeFPnKtMeGhwWu3Dcu6gyoU9kPrgCrCN5RVwYFLw1ZT3Uoa8PSesFKXJMuJ9mL9SE7ZJM4cXufqHhNmEd6U",
  "key14": "5tU3UAAxQ7wW2f7UpKVzAn6Sk9HDrB4azmqj6va3Z2DzCVMdeeXJRKm5MBpXKz2zD3us1nRPKUSWj1SBWnnk1ayE",
  "key15": "3ct7uvGAAPRaiW4vYKjbdupakEwyM6othsZZnF9pQ8xkt8gEqsfxBrXeiMaTtbqWJt4UVxbMzPQ3biDwPzbT8r3r",
  "key16": "3K6tLd24uwLNEgm4oz1tC1W4tvuB3BUZDJQZ7Zs8kupE2859rktAJ7751AMYfLxAeWV6zvpcmtnzwtyo1NLFAUA5",
  "key17": "5eDoAH3M2ubQo8GGnCmFF9nFN6Ysv97oRJVcr6UpmYY2JJp4FowfacRGggcVze8MmG8XQtun7YmdxNtvCDKtSqz6",
  "key18": "31oypx27g416o2NuqdrJsZrXYEtFySxG4BwQpCAHy46CnUzpbNXVmnhA3HsE4myXW7U9YQDM1E1owJaLSze6ee6",
  "key19": "4WHSz9exX64MMa3UriQ9kx39YruWLykpxdtcJdbM4uJVUbGo6KHTUcsDCYKgyeqBPPZRmxhJfEMBdsbJe4KfLaMz",
  "key20": "4UdYM9U7qA97dSCuaaXBTjqtGQi7E1oFw3ytYUUgcQTryVhVveZe6BQDyVSLtKXNaZgeqPSy3LmfGFKL3tfHRYmD",
  "key21": "UbBDcmVZjxF3VAor3JkdcdeDsQEL63pRyt9nLTgSjwMTk7wpujTMBG9TpostKb19V1ZNDWSgFjFMQMtNSCwRpgc",
  "key22": "2DTekcHjMfTDvAqAd83XsLUScnbU7yBhqwoExmTurCbeFLYRnE4mMBSifYu2EDyALhPGcNT8ZaPssd4NZqvWeG5f",
  "key23": "391EDhszuEVpLofwC2AeKTVcDkJBzhqY8nZwq5yum6Tmd2pxDWSmzeu4pwrNrrfBKaEP25KEjUEo5Goe7ZN3mjRy",
  "key24": "3pJ3VxUV2Dg6TRBPhuEaJL5QcqxuB97So78rF69QUTXnpWFUapmPdMhRHDb2fgSfrsuBmqs8jzfXYERddvtN3tDB",
  "key25": "61ceP87e8Bn7eKw2Mp2Xuxfhp1MFJf3H4dzV3xkRboXRigEQPYXivAYuoGDiRfgUrhWgpRYpGJHA4Tj1npz7qRDq",
  "key26": "5MtBogSMNgFQt6hvKHMFNoXpM93ZD4SneigKxwwzH9NierZncXxNhz9FuyMoTk3C1gdmseNGvz8oPC5kCQ1KVJGY",
  "key27": "5fjqz6yCjbFzJ4ThTxmcGpvtaX7N7xoKgaZTqgcqV68Gp4RqJW6qdCTSrt5eATCrsWmQHbs9PNTji6QVZjHddogo",
  "key28": "2tsksFcmX9pEGqm3KVnYETQNXaH1YUeKbC7WFvAn7CkRWVM4z74iATZt2fS31QJUHk1A2sDCFsYbG4XaMuqtQCNk",
  "key29": "5fixuNMzAYJMvNBQvFjRiPFH8D9jcN89Dyt84Gn1VU27kb37TJU3q9ftNhv5poJ5cjr2SuZrg6rmrdwae27n8LJn",
  "key30": "Vvs36xuRHMhSAFQxTypR37ZCV8AruNopt7ijqZ7ChLw8dpLJyMC5e1Ab7UR9jTiGdF7q8HercXPhw6fAoymztKD",
  "key31": "2ZeKaAnr5e7EUCUeP6N7RHhUMjHBgkeCnu6VmAMHTpm1iMxWxd8Vk9sqLFWupdPpXZgQHY3kTSzCNpuNvsepu8EZ",
  "key32": "M4RgTZY2wNTEiioNggy27ubUd5fkcKX82wTSW1xPnUnBB8bzG9LQDwqqPYJySFUQWkro2cnzoK7XJfXrSXWLtSn",
  "key33": "3Drnw8MAeUMW3xxQSMJxKS5LQDc4g2LDGocD1UifCwpWZvLybgsNTGfsnmcDxQTYj5Ut18ivuFqDLbukJ8hJ5Vid"
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

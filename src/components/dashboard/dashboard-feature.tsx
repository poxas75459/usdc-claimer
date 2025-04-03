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
    "TyJDbJ85D7KZvTafBrkbfwXZs4Hyp2Afr4W26DjW4eMqE1B5FYY9Ed8RXajiYXUZHWquaxKC1ZbzLrD2VGYpaEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mFV8aif2kM1vQFMKNTyP9Ya3ytDAo7s7BFt8kqduQsDQAND7mJ2asfWAUUsZ5hyNGkcZ4Ds1gvYDnvKdohFtRyB",
  "key1": "3LHf7WXw4mPkb22EwEXXuNpvQdakucXu5jgvEBjeMsbFpMfj5MFTs7iUPnEu3x8GkqZLq7pbuxBuuoPts2AzRSQZ",
  "key2": "38d1yQKpAFKv81iSvEJqsJEddbzuXcpPicRDtbmP1iqgibJps14X7Wff9G5xAuN662UzLjXRv7677oCUdMzVs455",
  "key3": "5Cu7g4mMYbYVsdp5rNmCVyzyvbsxK1tkUFLNg3wAhYZWbqTf3qxg2oSP32Z15tEp6XkqRVbuhm6uCeuq2VbmKVU6",
  "key4": "mqSywi4a8fBkuUHMzRHGz6DTAssoKCeG3e71K4WNBZyvV4r2eKjX4xjkeHU2toi1px6T2zdwcrvJAzrU35avrp9",
  "key5": "63WUYxt5XTXh3QxRKDMSRvTMLYwWF3dV9hwAaNC5hLNpJm9mSZd6CT8Bs7vNTs3WExTLHcYT133MagxdLMuGBRE4",
  "key6": "pcMxapT3RpbbDrrb9jchK42JzTofBnRjCdVs11sfQSKuQj7yp4Z46HLYNrySzPYaPjzmKJS2RqHGH6hLmUX4ja8",
  "key7": "3eaduSjw9ZgAF9F49Ak5tKWHw8bPBdfvu5mjEgvvYvHqxUNmwZv2bMiCo3zpfYKwPoKJAfq6yFk6himWv6zmynxC",
  "key8": "2HAGdxGhHe8sQ4zhJBUCvfXppYeqv1rWiumeWLmAhZ2tTEzsC5cNi12bUb9NiNcHECPUd7bNEFdCbBhGrqV2QF5S",
  "key9": "4Nx2qL5tscpVUQSzGWrdFiN3kbukbizUZPp17wxVY26rCTcbHtwFjjNMxE9s131fQBu5YfNteSMx8KU8RLxfPB67",
  "key10": "5ZgHrbS5wu17sNYuwR21ar9ctTENmjTAxfFcTyGVrxFEkCeiZT5ZUPrsBzC9mkEGQdksxUPZPPc12BsUrchJrYGY",
  "key11": "3o9Kq7iyGABnf5c5v1GPymxx2M2e4T9tyd4Wch4TN6yzQJT7vTdSav7yBtMxH9B654UyoQ69EKQ1q4fCqViJEwg7",
  "key12": "2Ne2uKe149os1pFU7wSKZ6xaVy1kLd8D35jbMJFogYahkBjaNJWVQqVFWKcW88C3eAZZLAk2jSZtUtjsUromqmni",
  "key13": "5aGUyBfxrbbcHJ7pAnvKByn6Jwz7sGsdfLrC7maUTfq1AAhyoww2QB9AqaSD4bLH8SBq32soCERmLs66kUjKKHpD",
  "key14": "3Xucmre6asVyFpxXY4CGxQHd8EQDY1FZxEbbsozoCBUh7Wkqy5CwB6s4VmaTU9aV2AokxrrB19LuPaDriTQka1fx",
  "key15": "WN6dzFV8vygJKNmLi9zu8ceFpA6WDFAotcLMonRhDNrb8fA24GRHrBskE17EDHRJLaKJznCabJUGNFTRU26ibZE",
  "key16": "CGaUjQEyut1wQ2nxb1iE8vfb8H6xTBqw17GF3UfytzNyqrP8SqomiH7qsvdYWDFRTnJH3vmogStohPg7B6c6C7s",
  "key17": "4bKUQZ5oX9HZPvUNJZ4Q5GXoYsjkquThSHUSJCYN61nCntcqoxxnCZYQEnQ4v24ZyYW9284mtAwc5CekcKr3YcZX",
  "key18": "4fWXqx9a5upbmuToECJWW6wpQQtadbYjDkmUdhHmcsn46RCvTntcncbXi4cgztv8mESVoJUjR1kUKqqN3QcnoPKK",
  "key19": "55cZQvkC2agz1c6vXtWKk5oPhrZSwuj7ytX8ahVWhNT5dW52NJjoUQX36R4NCayJxQHhHujipXh65qEFbd7G6reC",
  "key20": "2zXKBFAiGbV4i2AdsWz769FjGeWbxUJgQuUY1eUP6nn7ejbS62o2pJCzWbzCmY6ddggzFkbZXTTDKQ5d438vEJY4",
  "key21": "3cwB6xXAjHvdgnZtsaK29aANhnVc3MfaEoumoZh28xVyKjRLybV7JDc7xHcqUw9a6rvKMDtj3WDHqUjHGKNiwrAd",
  "key22": "2vcSWpWsnMigq2d4snL9WkfdiVyWaswxsgQHjbKDfBZSDXZwqfqe4aqUUbPZYx9a5bFU8xHSKuY1Xuxg9GFYg9g7",
  "key23": "397r2aJNwfgPojSkgQySLk7XfEcXKB4mRXuqsdX6jusKncRXrigyXgwhmnTnmh8fwtZ4SiXvozsnA9tir1XGWfdW",
  "key24": "3QWPHf753XnDYu735wG3JAv11irXS6RVLCCRjbUEbf2j1TtqFNAZe53ivmacE8YCwNupjWwmEDyNG24bDJG3doMo",
  "key25": "4ZcxgFRkxdwPdqK5hLkzKKbct2PrYUNqDrMizi76em57QP7hSj3fFASoZubkfHZjcDrc5U4X9mJdy8XubnUjxF5Q",
  "key26": "4XhLQKUc7sfSJ3bHRcrKBo7D5uD3fmaupk13KyNJZVi1n5Vd3EiJRKhy74QChEPMki3k9bATo3HD4QVZ5EUTvhJU",
  "key27": "ZxF4A2Y9xB5peFSyMRRQXPxACthuYU4exCjFeuztpWa62LWrjzzGaznw8GhnDFqGiEJ75pwRMAE7awCuXKDvSQL",
  "key28": "5yv4Wxp4x7TfLncZmgEy3eMXnU4CfwoHHaPf4wLFszQqjK3Aa1UqmF46UEynvLpRB2pRnwahJXMBHw6wdYcw4e3L",
  "key29": "3CEmwE9JSnA39xpYLENots8Pw5XKQXMT6cYiSbTXM5jLkgBBt3dbBHJaePMSvyXdDxHziiTRnbekoqMWmxgyxJ26",
  "key30": "66XYu1cR2ssvJw6JDYhiYHgzBXTBdKK1MbWkX2JbAxUKJyySywqBMgghZyTHmhYiSkunXp7raP4KBDqEFJgL1Vcp",
  "key31": "5RabJKxnqn1jKar7RzHR5hUNTgW5Jfh8aBENsuRqoxvrEquwP1GFJgm2kbo5QAbo9p9W59Vv2Nfzj475e6HuBYqa"
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

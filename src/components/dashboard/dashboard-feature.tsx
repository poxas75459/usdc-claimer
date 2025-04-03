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
    "4L9CqRAdmzixer52W2y6tKEJz3aC9SYtAyvFfnGqzNR8mDEvagZyLTt6oCVgwf8rpnrGxHS684Bo93QYeexM2Swc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMJzsir8zD7cJHpm8tGFrkax2DypXSL4NZd8DxnBSn1eQzp3okMkajhh9j7A7D6aSuQLk3D5Hbs56mvCM5J4tjr",
  "key1": "5N8wYU1wwqLQDTtDUzPez9wYLm12ae4CSDZbomP3QjkvGKVGE7EkbxJcc4bmkaWdXJhLTj9KS4yiRnaRvorhSFXr",
  "key2": "4k7UCRzYCmipheqiZrREZtKYHzTaYmqUGSw6zCgj1xjJ8W6sVpqUH2J5PhownEW4Wavs258HNqqzNt6uSdoKgDsx",
  "key3": "2uMXLHU5AnrUyrZm55LW8gE1Xbv46jEGqhCe2oCBBBhTrwfwRc28p1duXAsEafbSHu4EVqwiLciR8j66Fg2j6eFV",
  "key4": "D9jrU43ifZTqUUGcpn3VMrsA2AXb6bBAYHCn4DT6oBGsF8yVoXso1Dii9CyWqD9oAZqa7mmSZRbV2vbhTcY2YdQ",
  "key5": "4YzymYEfHp6dpyNA13Twc9XPVatx1unayn8Murcng1NdfjVgzTGAjH54p6eVrkrpANQMcJ5oyByowDAxupfWHRUe",
  "key6": "4ABR4MgjwouJQqfQK9W5a12bsVvC4ezY7BBa9fV3abPm1BykpEMxmWApWnNddhHMDTh1e15kr7qQDU2QN98ZgErq",
  "key7": "3WEWcEg5q4FAxmLtUWB9dDLLb9ZP9iuGsCnEAGRWNCBzjsMcMZM7mzf31uGAj7k3PZ13RBWtZvSV1CcsFi1Z9Q9J",
  "key8": "3zDX98Ha6YEerrcRqqgMhyUAYF4aTRVFKZMBWLxucHs9vpb1NoM1t84Wzgtf8Up7PietvVEM7ZbZJniD8mTdnfSH",
  "key9": "4VedP3rxrDWjzoQet6w9EYGuVt5xEGLePHEpqLE6DW2PtPGCRBQdNj6xdBzuGJB2yRUyRtqaqFVsdmDWbSPq3Wok",
  "key10": "3ETWfr7Effkncjz2XG8HwspyWGs4b2uwyResempU1dAtBHaoyS1kCNdep8oTEco8wKDj1tnFdtxCuxVFHiXdP5nY",
  "key11": "6747XiMMhS5SiGK1D6gwsbWB7q5vxLzGrbGitGUzZoSRsD3yo8dUv1pqPEBxADbujnzd6PJMzQycJidDZG3nHjHm",
  "key12": "aHJoRSBVy8LcCXUdu3e5Mpvg6gJNqAS8GECui9KrJq4wdaUnx58TkAvjDW55aLUcZAG3Ne7mjvLk899vDRcknhV",
  "key13": "4tAEjiweHDbGBDuLJoXDV1CmmQtERcgWwNM87S5KQkfphUuAUihRX5bMChSyQt2rE3H9qSmsYaa3sRc6d7GxKMXi",
  "key14": "4zEyTk7yfH6XqxEaDJ8SHQexUbiZSPv4aiuqNRXmszPoRNdWxEiJbGaNLAJmPz5pvrjQf9c6iXJ2ZHZAzFzKiDyL",
  "key15": "3oMFYYmDRoPXwre4oQyy4JfKbuoQNUGbrof54hBsKP6Qc5bTSXTKjo95g4qRnf66k4tdwuqkn1TrQ9fCowJFhjoq",
  "key16": "5bBVf2HLeRv3FcRDvvvr4uoGTmWDPcEWovrUdD1XKWn4JjhSYwGD7eN9vGBPUkNRntp5czCMGHiKHmtrTv26Unsn",
  "key17": "2EpAiRfbPH4mPQfrR3PtBUeLBA9SY5P1ccByJfUimykNiDAc1AqWWG2KCwo11HBNxGH5i1Vu7Zf3k9zXrheZBjEE",
  "key18": "21ovHrXW1wzfEzastwT6HjCKcZpRKNjXhSqbRUUzqK81AjpkZNBSfivT9cFwUtj7uRzWUu3QamC7Q1aGcartVFJb",
  "key19": "2ZuVEvWqLftMf171JJSgdGFcBYh2pzzmbXuhvTyE6ejrkf8m5Emvt1sHfpqXWq8UyfTBFEb1ipZLMdbUWDFCU8bW",
  "key20": "3rrS7dW6bTfpar5n2araJz9mywiVMYYvSLUkfgR9Sduihrv6FQQouCpbD1FVdLThbGE2Zhm55ZjDPjeNfVLEmTjR",
  "key21": "yS2SpqfmChLbe68T4JsQiGiFjdyy6piuoJsHfQXKRE8FCX9jT8AzHZaiyCtNs4XyUJbzbRyCkEuEzAkqCFfh5MP",
  "key22": "66oeBrZbAMxyu78qrin9GmSozjut2a5wX3hvzCyWWgZAMAhKWDCRKkVTJ2Nbz6AxxPJvMEb5tor3HCbAfgtYxSEv",
  "key23": "2aAkDDo1vJddkdpSitmZJ6gvKr2sckqBCtPyHfEAv9r4vawyvkVfZEbDTWNiFFSNUZViceYkwbJa84oAAa7WTiTx",
  "key24": "3SXx4eeEAHnbXesajhK85bDvV6XaBM9qtCuYjvR9PLj68LzH5nHVtXHxdW4ZLj59hNq9c44wKnMyep9ZnMKLMtrq",
  "key25": "3PHLYLqxvM5mNMz3ZhfAUxmscpUGqDpEYLr3NHQ2Z1FPgyWTgSU5iZ6BqkTtPkNog2G4YcPjCTLmFQwu4x67z39o",
  "key26": "5TgJv95p2LEYjcHJmYPmDQ2JtBBwWXZmTqyoXTtB594uboCmCv3aR8EgNDVEdy57nU2L98DgUHQzdDrZC62pkAtn",
  "key27": "3SwWmBdm81syzkDcjw7u52UYZLGai4zjwxEFUzDeEeEe3JhZiGPa6k3dzTHpiS2rGvrQaDDNMeDuUN6xTRNeVaDH",
  "key28": "4EVTs34hK9SkfLaUA8RQdoCeJLekR42MkW1QuVoQjg2W1mfoNq3q918PbUSWg5YDV6kuDC3KSqgQdHHCeXj45XAV",
  "key29": "4GCcMVhBwsabanf7qf7wgJtbGRSajeqPH9bgCDdSCokTb9Kqo4zgR5MkCconvutgxy87Uqcksdo2bd82gz5nkyLV",
  "key30": "66nL6tzHzqzgpxyUzFJYNsniQVhTqtNxaoLUe9nZkqfiiLnYwoZy73hpqJveZU9ip3b2MKpYiaWv1eJX382931pk",
  "key31": "2DqP2BvL8DaQWXYS2vinzpWcKQWdRKnpxqe7qYjR5hSxq81DPNEHD9um1V8JZu9HP1U4BvNPHECWXrzpHwfGBCSn",
  "key32": "3Jh4afifQbpcG8W9quvaXyEDWPy5rsa4yJ2jrpD2G5WVaECM1ZCrEtNxSmuejbnjbKbX1xrD1JFNQ4ZkbRCpZ7rv",
  "key33": "5JBU1oaYyPF56YkjfA2AuBVPKnBUtYrjxRNxgKp5VSiC2tDCibUnbxvsvxLqB9m6GiG3kqbBdLj8rFk7vWYyga9b",
  "key34": "TmuCuTf3pQ4Xouoch8C2WWHVgWnNuUDvqE6TRadCJSwmQZJjsFjWFZH4AM2iFxXoAorxekiZ2Fw5mj3VT8RGNoh",
  "key35": "2MZHb2JmqpRXM2tHKyrf8gGu4rmNPxnM3p72E9hNJRuEHAYL2XWW6v1ouEg9rVD453nLWSaFNtngkS3bLuZ8dGuS",
  "key36": "4xBeFH13xG3xiiyUfdKGmVxnMbkw4mogh4PnudV62hPdTMLJtV4yDFUanoau8mbtkZMBBNi5eEvYECg6XaGXWv5M",
  "key37": "2hJ1RrKWHATxCR5mAFRFmBim3asj7rWZuFVZx9RfH2czgZD2rdj2E2AwHJExouJ36rQoZpZsrxpyzmJtsFi9UseM",
  "key38": "4J6Cs9TiYiYiyXGmMdkDJaz4FwdH3rxkYG5gsmSLAS9wSvRBStJVxdPe9nDNi786enjJFxGrNzuTMWGWjAyzcij"
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

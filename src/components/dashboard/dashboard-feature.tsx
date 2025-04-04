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
    "5FZn1e73sR7M8Tj6atPihN8oTtMrputnDafYJVLVC9CtnByrhRbHfCKMEqgWEY3nUoYKCVGPKUbfFCNtLvAzJXVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M1b1zNknUoxAYEVj2ss1dN6WE2VDCGUzRwHxuMVwLRH32iF4uusjcTd55joPu4PbTpr54s5dKbkm8QbPXsDoQD1",
  "key1": "5fi54wb7B3r8aAHpvX3g1EzKU6c4rC83zqnwTBSXv76w27J5Bfbu5q3BcE2op4p7zvV5omtm8eaZXA2SonroNRNo",
  "key2": "2WaoGpjmoBheDLmfrYZPkqJJnydB1HYJR2UfYVrwQNb5KSG61o9n4rMK2yfXcz7qLEM8GRbhskprqE3E5BLMXeK2",
  "key3": "WcQioDVApNhTWxMTwMyVFvraLRWMfgWDnMiCzfavzKvat8JDbEfXjF9Na56bwv5XzJvBFpsqRjnwsR1EuNE2Yz7",
  "key4": "3ruqb7ZBSTnd4f6ExuXJTwACR6dkTF1M4x94ahCbe2WbvL6wfvHAx6h5Sy47WuvDmsnDfyd6GbRhSp8JxWwhqtk4",
  "key5": "5GQrmTMQsBj2nC5axAFLbk3sp1EwD5NMd5kJYWgsN2L5eWfBtmvcKEeXjpPQiLzsdK3evU869MppXAZYYiu8Gb9y",
  "key6": "55Ro9ByAL6P3gDCWrJsJMi4eR52ZXoBrtZExeb83oWX41bNsFtRJ5myzJz7KdczsFN3rRmdCu9UseHXKrXEhqBFT",
  "key7": "3eKPv6A3KkN5pPhxvzDhcA9TLJELqvFrqPVpzpHHYEscLRd7cbCpq5AnHbDiyY4m1BCXw6BMHf3bBtbjkBLoqQux",
  "key8": "4F27V1NNGTYjjt2ozeeRjcUPjYPKZP59XGghib9afjnPLQg9MvJY5vwRgcoCo7HKT4phK5NicQz42HzpxQbwVbgm",
  "key9": "2UFyKq76ECLfjk1iFuuwe5cNBTXZynqFVSeXdVQegYYhXx3GbP3ENjynVXTZ2Zb6YNNAmXUz5CCprf1Qd26VpCrq",
  "key10": "3SVeXGzi3AEtpFZdDKv9WwV2kWri4tjsNYQTPEDW3wzqGJypt3Y3UWQ6NtS9zqesjMCVjmg3YQeQDVbi2FjCjDdq",
  "key11": "2G97YN2bCDgt8SJChhjyvzamkLKDqhyxkhs5Rd34fxjp7DC3fNirTbsXaRLieyj1GQ4z3hHF1mTzoXjPDm7fJtAP",
  "key12": "3Pt7ag6MsnawoAHATrKmQ2MEnHnd8ysGG5W7vbyi63bLa91kWPyEiqcNExDXEakLi8c4LeaBfnqcShbNs2YwVjT1",
  "key13": "4dhBtVRGUn2EjJfkHt8CgyGyhEcS5vhHiuoRdhPby7rwXPuCRAnNUuwzDFWujaSX9R63bxd5sR6JdGvy1DSE41DY",
  "key14": "4dRUKuG9TNp2t4cZkUttd5YgwG86QFFxKfQcMhiv1uzpdHGdvvjmfJztm9pe6yBAMz1dbjMKLHcNGNywZW7xvD9y",
  "key15": "42xhFDSJZ3b2JHBH36gtRSbYeoZPuidHFTAHbovBGeJt6dPsavr2syt5cdexj4CsribkPeyca3cgznAdfgPuAh7Y",
  "key16": "GqaN6N61TRNcAtq43Pdfs9kkB4aTR6pFX3zoVpMW864n5MYS7SNVk4xfoq5aH1Qevdo8pKgzb27TbKDLu56Qnde",
  "key17": "2zJUdL8czenkFj8ssNg3DuvvrnnCiiY6ezsFECs8S7JN5W9ddL2hdDCCTsjaWLwgPPyMpayJu7C4H8f9RWaXEA5t",
  "key18": "5cRuVANDpGTvmPUSgTqFjhre5eqjmz4sukUcA81aQJzT9RNLmqexjWEFgpnyatqyQfqUH2TXhMRrhyJKzvvhecYh",
  "key19": "5VuJfLzGK5C4Y4mYbJhf7Ym1XLpZWZiBsEe56KVESNPhLiptG8rN9SQPtue2T138GWikFXEEBYViBJpXKT7Pg2Z4",
  "key20": "5ph4Y3R8bK66v6bfjRRRcH8pon2yK6r2CojWEpmzrNdhXFBCWTj4xtK7WbyPrc5af3JWD2VKWp6oLzaKQeXEPLgs",
  "key21": "3ACEexsZS1kdgsTJ1mPAxYPtBw4BnLp97JwgQUtQ877pw1zk4e9e8tVhp78npBrmyXVssp2pMJq26nHyehcUmRE1",
  "key22": "2jH3CPPFobZQT93YgfwVtpdppmsaz3eFWVNsbaQVmcZfqHGy8Kivnkj9tSf2G4A7sEa6v8po9dU44cgYJBnCe5up",
  "key23": "38XVCi778dCdT4BTSdWjSbxmwiRvREZcZnrDhVYS3f1MK8Rm8W3Jp4xNQbhXMrtc9ffNbF4BKRZuyFmywPvnuung",
  "key24": "2rdc8jLoB1whrdSEKd9yoKTwWxjthLqb12fdDgg6UFW5krXnqvRKW6sBqoUHfDQ6UWZ655k5ToHGHbGVYGsFJhRx",
  "key25": "4k8FT8MkTApAKaZd7AMvSNpNeZNjnPBe8qQbZropgRHFAJ4MQTjBQ9iNAhNgZoXzXrmwAvbouqps7wk8zFfBNgWD",
  "key26": "4ZLmy8ksAQ4bWfktCCjPj5wdiGEVcqVuEQHtDdYDQA7iDTyTrGQQioTgopAHmzDkDNcqpcTqdpQ2jn86WNC7HJB8",
  "key27": "3qZbZJJR77fVbuBD2aGriar7iAj1KnDjDVxX2X6iXVxNQXCGK1fsJZWNCUJzcZxKh9KzzAv6kFRMv4zQtvgFzym5",
  "key28": "4V5hP2zXNpQrNDMjkMdiHhN8PehAtKCUbVKtdn9UaCMopwzxhmUYsQhr7wUKF87w9QiKvyE6pw1FZ1dySUbGGShF",
  "key29": "4QCzgPiCJu7JW9MoEGHoxAJg7iCeDmeQZHquvdvcGThEjfgXrA8N4ddS4TBSgKgwJTQeKU9A9MU2mAuCLSuEYQ6J",
  "key30": "9Qofx8c5WXnXTgPUrhZPMDz439t5ZFWYudZdTLUNzXU8HGt3zNrxNGtdSQpWxmBtbAiaqh2hkXJC6tt4gEqDpJZ",
  "key31": "3WnUu9PHcQbzYyFWgoBhwxijXEEDZZBAme2mj6dhFcLadxHgpNyWtEGtosQY32LD6baewsBs1EwZGdZ3bv2UGFgn",
  "key32": "4kgKaLoBXWBvV1zATfoHRvkb6uQ7LfRW41mf6gz661ZzuN6w8Qu7ZGQXWK1RyAZfgTtAQhpf7xSKxRrfffDtEE8L",
  "key33": "4q4a86hF7esAaQe4nKagw3GwQ2Md8pE3igMdZ8dKfZ6j7oLfEaAn8aEofX6fBeLhgJhzEsUmeZf8TD6zruqnuH29",
  "key34": "5zzGUCfsWbXoRWyhkNHyY7K7n5jKSTFyKBiKAK4vqTKZyWKoZuyNqZXZUiRdHUwPQq83r7KnmR1svx7dtPCDZjuN",
  "key35": "3TWb8Bo2Ci9CbkiLUYdRXhXaDkWuiyAmLzTpx16ZKrRzyh8pG2PhgzHU4WsGhfYoPYBYWY7fAd6c1jP4ttWpTeMe",
  "key36": "5pagZi7eRvfGT48xW7cW4h9YK3Y98KgdwU2AMAjXJrAKeoPvsitRLH5PqtuQTpHM7PuKuTRYrA12iDA8KkXq6QYr",
  "key37": "4UjyqnW1uyMkqv8Q7FxHsXp5iq4yGnq3KHFELHoPNT2Hpitky8q5yoTG9Y9u67FUGyFJEvtEeHdpvWfJ464EKVos",
  "key38": "2x7fA1dcro1GhffKxyXELn5Q8TeHdj2tGJrEEDmgQ4C6GAJkf1NibCNngxLqRR7NrQBCG2fFNMEGnVd7rfWMvdep"
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

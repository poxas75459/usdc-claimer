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
    "5afb8qavA7onfYXJo9L7u7uca4y9nnTXrKcmbEvwF1Ps1jQMToW1YQbBPRKHzQgc7rWfCZe3YfxsirZnCmAc1zTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YsQsi7cmRbDz3yD73rHp8PpCE3BVDm2uuQQEuAB8WX2CYap9jmDgi8Ev9KaBXYmuYzoNziPzdNA7viLqBs64rrF",
  "key1": "2sVSavuicBvbPBAx5Ek1uBaZgUuzMUZHNqvLUi2SG817t6uSJo9QkeHx1KdWgiMi44tEMXmw2twTsJHuYVEw8RjX",
  "key2": "55VesybwxUcv5nttCnAPLkLThAYKrAx4CfZzNazc2s7WtBLbgxD4eBo3kRVNuEhDjDbtZ8MZMJEwXJxooD9RJb2t",
  "key3": "zLnU2JvzoiGyEWBwEJHyeLGbkqe2gCgD81TDxDw9mvNwfPhFsNSqJrzAYiCfwAfTtFwvbCDjmQUdGGu79qq1Bn1",
  "key4": "5ctHjNSZZ4A3b51iwFhWWC2NH94NemQ4UUefhwLrRsa4jHPPauG27C8VWsDDPgjbsMtokuGNCFuuGpo4EX811yUm",
  "key5": "2Pmv6YoyTWaKy7pjCg9GXLo9TL2fu8n6D3EYyKA2tJtDDBixYFnemK7MdttYCcd1Zt23G5bBsYymgc2KigduFdeM",
  "key6": "3LqZzEydruwofaiKFwCkbfNqb6TnRmMvxkrgeckok4GH2X68ZGoXZhQhgZWvp4KLUfJ3dSS6cMarMAdaV78A5MRh",
  "key7": "gaZQMP9Z1JZKV91i1ycqHZCiahy6Ts9ZiQV72LS4kJNSKAnnDnYw2GmiwU73576A9D9hxoLyHPEP3YYLvTGUEiA",
  "key8": "4Kf8emEhMjwNbqf2TyKKmte1yzTVt3Apz8SzAzwFqbc8Mo1AJyjAgTvHc1TLbafi7sZRpZ8tSzCMfcNcPTLQVnTA",
  "key9": "wgBmW7ymesqdmL4vr3ZVrGaqQd1SnE3yyTj9UF12cYddZKbMDighL5yitLKukW3qhV8Y4gQWaWqiUDtpCRAgN5E",
  "key10": "4KxGueFV3kp7AzXsbPNo2wkan58oxxbKUtDhcjQhzxn4gdRVwqmcCAw8Yfqn2auYKLzynnYiPz58VwoXVQrZdJBH",
  "key11": "5n8ypwy5xkT2WSfbRy1DkPrFheW5WQHe3hw8VgGnR6VfhLTqKsgVviD4B3g3aniiZNPVavCoUPCFdsgY6vXexgCC",
  "key12": "2rNRmb1ku9t1uSjsGkoE4rbpdLPRt3ZWwkJnfcZQck9ztq2c6coU1KVLHo8tgMsg5V5DqCndUBrHvtJJS3y5k4Mu",
  "key13": "L6odx5WGLUZ388VfZsU9Xfy1mHdQPGqvxxT4MEjzNysYpiFEJpRkagdQCrJrHoVaADw9Ngz59QN2Skz483cnQ4X",
  "key14": "3RG9xFfSB8MmnzyQ6eSU3f1id3A1zyE7oDDVjRELkbieFSyB9bx87aPDAiHjS6uwT3WjyGhKpqCBXy4qSTRtib7N",
  "key15": "25Cfe3vW5ndSbcNt2p1XfVUfLfDmqJehUgQubC1TBHAzsrvKp66YEx1TKjXVVJdKEkSTKKNhTBKXUqSKpy6SxF9Q",
  "key16": "2Hywo9EmzdonFr6sPqyaXCHDyo55pxiTgxLCfNs6msSysvKcGQZbx2d44Jz1PB6DzbAcJrLyH5UQcb7sPojM1wTV",
  "key17": "KZ8fRphJhK6dro2MHbdxGFWBTSyhYJMcAJkZ3BX4camkvJtoibZ6Cze7nrW2ydrJKMoYjQkQPCEkFUK7rzuYH2r",
  "key18": "4MJse1JpyBfaeij7pF14WPr5k5VTJMEqhwp6BacbFZrVxD5GGhZKrnZBKkC8BAftuC7fWAWGsm8xgfKkTeRiUSJP",
  "key19": "41ZBDVHeVBgpKVKu6TP8ELvCCu6fAsVenqpKGq4fPQVVhqLtjPwEX3N9CjogtwfUP8B2GVyGzoBKSuEKLNXsopbw",
  "key20": "4P9iWe8Nvqs8h9DQGphDfq34WkeP9xdYVHWdwShbpM2w9soCCuMTr2vWGjKgzyHyK9PgEaZ3o7QoMpnuohwP1Uvh",
  "key21": "4DJTTodjQVU9SJ3WpudwcD9aWNwTowudccenarmtNxJtdnCwdb1gTgmbQ8sC3HMknx2n4D49AnVuzUZ6TWxbqmtr",
  "key22": "27J2k9SF7nEfwWMeZMBVJpW3xa4DEy7ahx5M6GLYuP1FbA7u7gbV2tQugYKRSHLcn7HP7ioykJrNj8JbVSTTE2ZZ",
  "key23": "2aidhMU2pJ4AMffbEv3eBPs7MDXQo5tKzQRsZm4uhVFqkVJvTXCCsxZzaL2xnjyBJg3HDgTd5mpNhr3UDhoACiaU",
  "key24": "52fbc4WuFrK9XK1b3ehQeVGsTshSUwuCys5RVoB43m7dT8hcbVsnqzWychoiuB5e5tmvUABTHLPVgFiQquSv92Kv",
  "key25": "2hCNLj75V8ukPMGDRdBsFhjUQdqVQrZAdayoABFY2n61Eaq7pvyDpqkVUZegsLJrV5PuA1vKcHjBcSkuX4yP4dBo",
  "key26": "3aaPHKEFm1cuE465qXAv6TPmL2mtDiAN8ATVAvCftrR1opSuS9Gdyh9C1NBXdwAyTMXoWjnZK5eiEu8m3re75FCo",
  "key27": "k94WVR3TNEp9Qv5N8f7axeLRF6gMCdG4rMeqet9G3CBUvAH75hXY9xNHGmh5AbaAm1NbZ9oVPnfmasjXF3b7j5j",
  "key28": "3aACNCqHqjeiX1jTGMEabzaxzstbKjxPw8tRDbwM9MmUfbaJDBwQ2jVqCPPS4dby7VkdhBATLUw3aUNZx9pPGRGh"
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

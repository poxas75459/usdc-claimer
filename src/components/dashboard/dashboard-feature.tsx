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
    "FhiSYGwjjqD5PP7Vu47KnjGdaMTf2icEc3W7uV5S3ALr3zbU1u2QsoC4MR4peRRbFjafb2oJKWBD5b5EZkG2yYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVf18maBxpp4G5n98RKUPMpzSzhhoWHFG6RAN1VGhE4v6C6nV5AiarNaU2TgD9Mc5EUunhcy8B2xqM9LsR67r6E",
  "key1": "5LKX3DQszWgrkFHRm7Fu37nDbdF6ZMe1meq1BRmEktVWiA5kuurH1ftwEiYju2S9uuHRCL5zrxKVsUPiuxQiYXxk",
  "key2": "3Mk7DcVY5KuZRp2DSCNg7Jq4Za8ADZ2gmJJVPyXwZqoFtvbDsYyNFRMWxmLTVCRSFowwfAZDFA6m852WK6xBcaGg",
  "key3": "3JDyFAiUCcqcz4suYnJ5WGN13dsYmcQr6ErDPJ4f5e7RmxkdTD8biXWP5oMLtgRZ5uUGYYJ6SvTwFRvpZedeGkrm",
  "key4": "4L4fxuXDtdaLwDyDfHPjjv7kPmXUcyzTH4FHZ8PCzAiLGctLESdZzJQfzhFxRhKGhWKCTosXh41UtXBzi4xoJffH",
  "key5": "X1Dt4WopyWtp6fxQHsn9esLruoyJ8GRCHbNi8FUfKYwVfmvzP1BDEhxqDuHahs2HqNcmqxU2vk63CMz6DvhGeF2",
  "key6": "G4jS8XYkX3K8ua3puDwDAfb8CE1vzNYw59otbntGVPxMD5vRkcFK3Q9ww8tcu5madGAn8A4tPU4REW73kmGv9wb",
  "key7": "2sw6QmMjuri5BNBNbDwoncRto89LhiHakyWwuUT5gjtkmzqeAWob2KZ91Pzi7VZqhF8bVokx2TCK185Sk59G284u",
  "key8": "664dwpqvRTEMkGnppRyQTEF1XMYUGqoj9enRf1X7uMbeMaptMe9bG6ShdKk1wPnPzw1Pv6BqiGRLE2bQScmXsPjU",
  "key9": "4k7krdiw5uGjgTpWNc62hujbGYLRVFriwsSjxJxCLWDkQ3C4TEv22GheMbSwUnm8B4LisNKZyCPe2WL2mX2x8hh4",
  "key10": "3Xe5ZtRaPPsc2h2hLK56jVqw2WGt8yHn2gW4a6RtegMkE8FRZosuNUtUxeu8na9ws1o8Nh2XhhErY12PWFoeYKuG",
  "key11": "3WUytJ4KNaGahFvFUfNK1dgHPfjcgbh45BeZUMA7t8SPPJWgDdG8k7Fct4o3mnbj4SMzcjcWXaBpWrbMkxpGouNY",
  "key12": "5CUGsuAMLYeUhPBgYBK8QAhXikQYWpGwvXKPPoqZSsU8JhBkJsLbagtrucp9GwxJTxxnSmm4VWyoyCkUGDQW6GCa",
  "key13": "3bKoy9yAVB4f87wkc4wnwAW15rugUTfc7dUBEaysB6tPC4HmDQwjZHC7D9HHMdKbDohugZB6ZUdhwo7Aw3EYSyep",
  "key14": "3i2ZgoDV63T9C2FFuwgiMWqRV2z11ZZnu5pzWcZikUKUFzAucbCobcHaA8tZn8X6TYs693bvVF4oC4YxuvrYsegq",
  "key15": "2ACyt8nMPztTAUxVerNAh5317d2r7GjpQdGQu4tzNZdaABR7Y6H4GpYMpru12Y1eQtD8YNDW9jhiACtNbhBVDsy9",
  "key16": "4RcFbaKKR6bibDv68or8PDtg5xKoeGTHhp9gcANzX8JA3KoK8GC8Cmj5XSAeSL198VYPcRnboG9g6uWGgKtgAebh",
  "key17": "2Ns2NkZLV9oVZx3URX6ZbbELBhidRkFcodWfNdNJD6EmPcuuoYDqaB9MiyXd5Tirxwj75gwLMc5VkhG3F1PzRTg",
  "key18": "4qxc644cytNnxMDahfa9tAdzn2TuSgQa6qkQMKw2d2u4Z4uHoBFy4syJhRqVryZzCHKHrNQG27H1Adh5xkewrKmC",
  "key19": "3vEsrwpbwfCFhrh12hfmuZ5awwSFtuoh1vMYjsJczTeGTyRBPWHKXXnyMzLubS8yCpWUEqyXsRoFb4z1QBLkfMmj",
  "key20": "28qexi5EJeZsdHcG41cbXinJ9RavsccHBkf84yafrfqQECNyjj9KcZGV4tc7YeMEG8vcRy2rDXLazGYBVzLCKmXU",
  "key21": "ryKEgkxRyao7QutGtp4uqNwWq3ttNWu18Dj1LA9mivheoUuwxYKSHaCECmuK9DfSbmEw6DZx3isK1YVCTmjcC2o",
  "key22": "2VkYmzrF7GpMJhTd5CcBpqccqSWfSJ9c2Fbn5LnBEsfb56eTBz9AvrbbYTmNkEdatuFt7QmVHZCmkrQXKQkWRGvc",
  "key23": "61nv5D6f1e7BZuPRDagRsKqzQHMZ1EynjH75jZvRavXSzr7U2FM8NY2xJvPnFm2qiBTm2pcEm26a8H9JudtoBFZx",
  "key24": "2dEe1xMT1fSuXPdhNuey5CMkEUaxvyGisXwV7aqDidxGekYU73EiFjs3nuPNjq4kwkwA34FjcqT3buZwiKTfiAZ7",
  "key25": "jxUFZKNxdaVbMNwK1vST4WQZLhET5cwKu2XJUNUtto968aGDcTdHYiYs1tG9Au31R7Z7ppDfsUdCMdw7rBfLW4s",
  "key26": "4tcy5rtDd2zQhv7qtivVdUBtLhXPvoDvcgtFrw1qVbPrFPTtD8whd4gHokhmRUr54FiEi4vz4o2hWQti4HV3GYKt"
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

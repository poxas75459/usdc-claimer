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
    "2wa9XT67rndVYED7r65uCfCrVzt4mbVoRWXxuf5autKSe8jWNHE1bndg4f22HbQmCt6zun8LiodGzCXcVPqnjUbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qQx6F88CGNP1aXbmZi5AAsJhVUwPtpvzzDeGX7nPPvUqoYejiEGMt1BbMbFJqUPW7FQ452m5nqJwuxH2LqSbCew",
  "key1": "E2pEYBvotjVWWDp7eWzgW8dkD183k7U9QiVAzMNvBhy4EDCxHeh7mNKY6xj7jvT4gXF2p8CusnPK259mDeStAMo",
  "key2": "58t2GnK3r5LvaBf7qyJPB9xtD2LwG6bCyo4gKHMypBnC5Petry6o9w32PfG7F1MfDtLL3ZaRPXMacHcW6YhmSx8f",
  "key3": "3HMDhYXpD7712eYNZbzKpfPo6SY6KiKaYRAXPoQDuinKQUtgF3Gb4bMHvphPoD4b9xcqo95oidy9iGn98zMzCjVD",
  "key4": "5o3VEjqrwzYnBj8W5NrUKU2g4gP59ViGz9WDTjwJc7G7H3jxUot3RV4UsknhWHKcZmpHi7tw1gHzx9dKg54MKih5",
  "key5": "55UaGk6sBZYepasDCCT9KnkAht43oNkhyWt8N24DrVskwYWTTGV5tXBWv153qgqvZgJ6Tu8QwUsK1BhHbN4ViwiG",
  "key6": "55NYd1KSsLcRU6VZYZ43VzqubaRTfqAQSoVJjys13STUVncjc6SF9FXrQviJFV1nPnwUTBaVgGAuMCojst2XyybK",
  "key7": "2GUtEac9X2esGkvfZoNU3RtNUAcHcc4VW7bfUS994GwooimvREwM1qsSPzGEQPuYx4MUJX2Dati29FBJmY1LCzRU",
  "key8": "3ghzRRBv85cqoV1TB77zBhPiwrLrHE9JSRJkzMrErAtpjHpg1HKDgBdZJxr1G6siYsMBBVqHoZnuYXsG5hmntE86",
  "key9": "2nnsZbHnPfVngqR9zGtYPyCLFyKYACrkUy2eEcXzd8roG9J4diJ5dLqBkWjHKTDg1yuGSz8nyFmX2YmmE8zbNW98",
  "key10": "2dgTX5zE7jwkrF9PG7VGEDN8wENcqZXgHEQ98YpMpUNiM732DteztwoZA1M6rk3kpxjNhC5LoVAK1DsxbkRAYqbj",
  "key11": "MmPTd8efQk8PdKPsp64wHRCwY3iLMJmMD2WDbG3LVbigJd5oDuN25ZFv8ahNS5wFfrAvQFgfqn4GyGqGNtf33GF",
  "key12": "bVRGGjCDiL6upagvtySgy1cnbtdXdyZGZfdmwfv6JHq9c9eVszdrMLcDu9xnQt3d9Bb1zD8GX2h1F7PdvVLD2ox",
  "key13": "fPHd3jjyqEeYyNRyjXpwMA55dVW5EVmtHyEh9Goxv995oPqVwPXvjRquC2TzbNDXyVNaQbbMiLgR8YYzAuQjyei",
  "key14": "2VgWqhw62WXQb17GPjHgeL9seofVPcCDhTzrptdAZYMG51Qbqgz9X5iLcku2hkDWRbGT29ZEep6BdepEs6u8PqSm",
  "key15": "21N7TqzmXMJAYKE8yM7mAM9zvhWBW48CSCsiuyxSqukDdk6wadDDkKwU3xvwLGGkQGV6fUEEZdoSH87axLCAeCqL",
  "key16": "4uKKGsJQPqfGhdVjnGCAvu4oqiJXeUaWL1PBiZAqTimubnaqbPvMYdm2sjVdbzGjpvruczR6sTm2oXhcLSMvqJPf",
  "key17": "57mnX5dsw2CHHqbrQiXyCZapge1tV1sA58Q4xcYqy4jMEZGw8Tnu3ByZKhz3YBLZFkDkCFhAZbDig9ucwFUobra8",
  "key18": "2mFM1NQ1QFN5M7yMuEFJmgmcvNNzugUucrRM55ztktuM5jujTrJGjfyvwVoZ2kayHxJ7SStnTbq2qAUg5tmtUg5T",
  "key19": "2uqPyAkJk9yC8jqLMmdgyBmrY5Y4264TJbW4NyutCo9kCQpXgsrreAgUWUjG7iFPxhXhyAkvEce98F7k3pekMZsv",
  "key20": "4Hip1k6s4MwiRXhAoUQTmxmYMKrjGptzDxPyiqhtppZXrwgtbDCxSEkgW9atwVTVQYSifxNRmxQGWXnbEkhicBTg",
  "key21": "3esoKPrbwRTCQSza7J2NUfiHkp33reLVoYasQcPF78zkLiugmG59hQmXjTdVnPQwrWVyhc1cuRyNbj2NBh7DtsYU",
  "key22": "3zLNKzvQLTW9pYaNA1rgZ2qw8Qb27vHzqagoDSfocCqbqDsp7rhz58L9vjsPzWoxafq4bYF6Q1MrWRrrENzvLsP6",
  "key23": "5K3VF7cLpbfvaXN55xgqD7Y8kdqHiYR7cGSs4DxTreMbws53hK3EQisepRQXCaKDvr478y1wXzqE42WiP4nwmWFn",
  "key24": "42zxKrmiQ65bhL2NQxdJM4v79Ajw8MsZAEYd6zaBawEzu7sPXiL49dxYHfCyEPMCLUXKt1GMc5oN56noxhVJhiv2",
  "key25": "4J7hdqyWqgE18YUEbqWXkmsA9rGEuiQp2wCrY5FnA4EsenFAQxzDJRP6YWt4WJiD8SfD2RXkoU6u44bPEizPFai2",
  "key26": "2NV8TK18hTEPJYWF5ZUjw1joebXAoDd1kuW9xMgne5en5eGVKYgDHXtdUdBQ9ocw43NtD9geKEkWeUKkvCMqi1Qu"
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

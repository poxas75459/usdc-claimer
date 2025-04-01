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
    "2jRUrfrhZDwR8xjWrGGmn49mj5uR83ZNQtJbLfuyEfs2hfTnQJFFwhM4fGaH6hp1WAQCyFHxVkw3FVK4GoJQjSH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egeT5ixy527i6Gme9533wR4xWJbQzgV7xe4H3y87Mi9S8AGRevHKjYgPxNXRAdnQgFjHAmHUYsRV8ZkGCKCbEjn",
  "key1": "2UeASNsggztbLok6PEevQM3fx5UfZyFjXF4coKoCdQwvf9t8QZwrurTq8y5civBco7ou5FASGvzQDETsw7ruQ2R9",
  "key2": "4t96DaYKozMbpkCvESoVNjFpaQs1TwuQcxX8CVaxVRFzFsKGpT13pby4dk2dYnSfnMZCZdt6BF81gGiKGRAMDBAt",
  "key3": "TaeMTaMQGjaQpibzZEFPHMbqFmKCDJn3Dr2Ri9WcTh8Aa93KHJPUjZdTKM4VekFkdQcVFKvfS9Jk7y3zBiF71px",
  "key4": "4ZVrdSvhDxqb56FHhm9khZgt7XbqcjnnELeQAfN7GaENgbDHnnjEPYjrfjbgDW6xgrGsBRQ6ZWSaA9UCypNQsCqY",
  "key5": "dck6PfdEJQv5iGzdWZ95zRwQEN4gew1xaFtVCp2hPa8vuFk72j482VTS5zJxKxfS5YHHrPUuTdfp7o354Rk4LgS",
  "key6": "5f9488FqFkpWsaNrSciEKD8G6vKViJza9z56KD188UaYe4qDGSJLnSW2Hh1G5eoUCoG9EhFiTGHfvYMYh4V67FDX",
  "key7": "ekvX9UfrRHVkxbkMkrZQ4Pvb5Var3QwANuVQDYQN6Y85UrKMV4qK4WDT7iQnG3tHPRAepEyy1fCNQ5XGmmVvYEf",
  "key8": "V4QZ87dYkdaMLD7fN7tEF9hETdqBccpV6vnYdvmRyHU76rpHzJvygn5QLa4ypxwEiyNj9WkEAKe8VXGYkSfqZqT",
  "key9": "3QA7eLvNQsXUBBP8f2UaEUHVM3T156gd6KakFe5NJnwcxLvWF3A2zMTCACENnUDnT1RDyNNQzNvjFR2FYBBycyBC",
  "key10": "igH1YCBQww7svNsex2JLLvv53KUGindND9ngdCB5a3cpkdinNz41u6sziPMxC8DunVeMH45sri6bcBKQZrKr7ZU",
  "key11": "4si3ymLk2XDibGpcSTTZVdW4PxC7UX258E85ZExyuCe1yWx2t2C3aWeWvR49CBQmAaqho8XtdBtJAhA4ybn6FKma",
  "key12": "59WX5ZusZURr9MWgASNwt9z7QiA331ritNs7XeoFqUy35xFQkijumQ27Xq6i2L5nbEeCyCd1wEv9tBbZPSMW6A3k",
  "key13": "a1KjnFKrYKszb1SZcs1DSCFfSnX466S9mZzBiZakXVeiJ7x5KinJtGTnUw7BVxrYK2HVZ3Ru2RMMEZxtKpSEgsk",
  "key14": "56usE8zUgkMYKpw6UXQhW2C4cV6YriacHA4h87R1HoPQbXJhVb4xpGKX8rA4Fuj32bMGTFuZExm5t8knx5xvU5i8",
  "key15": "JZACUbSyhZuG3D9dUJENLHXxSbNvoRPScwcRwdH2dezaKryFQcV8qqUnHWiHvKuDoMyr32eUGZQNSPfDkb48vs9",
  "key16": "fjKq16WHoVnVems4QCRys87tvfih683KVKr2oQkC7osYxxByyHxvne7ax7RT9x82ChRpqtpwowVcoNqNAq2P1gf",
  "key17": "3avUKVbHJgdKz7S3NLoh1zZiJUapeM6E7A3Ds4VkLoCn8PTYWoqhvw5q7mFyFJF3u8MH5QWh5Pvtf3kUfNa3Wrtz",
  "key18": "NPjF4qSYM4yvmJQchUTRCQFqU2q2CqxDTaYpreFuh96Z8XTY1Dg6icvF2tmN4ixFsNng3R11hHvAAtaFV1nEZv6",
  "key19": "4YVAWngPXAhNWo2DsWeG9o7jK234NHFhJ1mW6nnnWqfBSvsL446EyBUPqGic7uRuztSVvG55zNuYNUxVfTkczRd4",
  "key20": "5vSuuyJquNrTtFgHv61Rnqn7kmqLyM8z5jtAfsRGgUZFwKABcWtiwA4Vf5LBGj3un4BUqWLT8REHVT7u9ikYJRgS",
  "key21": "34LixzetnCAWjrHtEo7znU8YvWCeefYMp6usfEQKXrQN89pkuKtPdyiMaFPuhxiLfkuH6mxivCdZUP5AC3uE2UKJ",
  "key22": "DsyZwW8RR3XzMXV3zADaLzR3gbtXFHvi9zjk5zKFatWSvRLjtL4wrKpNAv9MyPL5RaSX4WPk6nskLN4YmyMVqWa",
  "key23": "64VhT9v8eZdbi9caGzWiHvyvdK7n67WnQ8wo4yTqPH8VhmBhN4v7PQdfxi7QTj56ftzXaN5LXJkHo7rx6a6JFtpt",
  "key24": "4iKuKdvJiwp2oESqhfxSftnngBUMZL2YKPXcLbPcawHmW2GQpW6Kd9qPbafUJAnkwnprQLKAYzvdkaHMrUkXxHCQ",
  "key25": "ut4n9GbFEr2V3Eyimhw1rPjghFh99GkeuhF88hoDcGtHfA9vKutSgBHGZtYH39ZZcngVFnWncCqoHLWDmFk3sE8"
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

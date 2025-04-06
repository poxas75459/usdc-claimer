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
    "4phDQ6p5eUE766u17RorB3H5pjAs7jdV97eW7epDMV9PWs8asLoAcH1wtcerF1E1GC6MojQjJnG9op3R4t1gZxJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9V9xVH4xHeZTokwZJeeMZDWuqpVE2NpM8ANMd2ej93eK25Y3mwL1JZsz3K6pAdKHXGxkxsXwCtgvTyYiFnwXdV",
  "key1": "KyS32kPFtsuV7Yon6q78C2a1yM65LZbi27x11KEhHg1o6tf1Skn6vtNwkSNYAgX36wRvfivzgYveZSXCNV997tc",
  "key2": "4c6AsAr4BhynddggoARNAL9ywPuFjwa8hWC7zc5WDfAvM5iKQPQkX37BFMrz8wwTCCYwnAnnjuGks95ZF37zsmFw",
  "key3": "3aGTHo4Pe9B21SYGUiHGb4Y46CviJUeMKaAL9BHpFD33JhUNgmaYbBCRJPY41pvXKjuoEYaRVzEnxf3KKvuLEccE",
  "key4": "2JqPtkUkQECTNghrga2JN9DoopZBxm8sLPZXkPWr87cztck5g6VfzwGDAQSZA4ffDpPi2dxL4mhkacqcDRcMv1qn",
  "key5": "4wxX5QHyZR4A9sKvEcZyy4hHUWbsshRM5WPTTUNCsUr46yfqoun9ehJaWaMZjrEVEj4wTmCBGnfp7Ma1R4F2HW4G",
  "key6": "4B94m6EaprEbo4gp8ixDWNUhGkJSmSeRgCDzTEJ74s8xMPdLU9ZbDYMf3epcSaSxpqeT6bZzqQcBY9pFzq5HDGDq",
  "key7": "3wjH1f1BXVNEDWPJrz1zWKc2zMZyHgmj6s6WT6QgWhr4Pvtv1pg994tigyuNqznrSgBPdZR3wcmwjgLUryjd9J55",
  "key8": "4JbfKdZEqVV4Srjstor4KNpBgg9XqDajhtvquXRWeA4yqxJj4u9qBzFLnhZ5egbrRGWB8mAohjMjixScudooSQxn",
  "key9": "5vAmgAnFstSxYX12Q9Gb7RXcZsKJq3wMKn7p9GJ77MTKM9UL2neUzgNHsT8kwBvqbQo7cGTiN2L1kKUYnwGURLAp",
  "key10": "5HBPW2WQBMLzEywrWGtSQQZxvXptLRYgMkBSg711zGUamiS8x2HPPZrvdovy9rYrYZ1vg7gaYMzzTcrHYsukYcH9",
  "key11": "3MBSkCoFFyVLGu5aZJhR7MVaUBB3LLpYuPq5voFdG3nTXeszxB2Xi35Hzsf948G2HZMsDAUoRrvQonzJbBwJMs8J",
  "key12": "42RkmHXoMVY4Ao1C5VqodsEThFV6gbLwXJ7r9CCP68CTmz237eEF7uvbmJuKNv1NHxVYod5LnZAg7iH3fjKjTW1C",
  "key13": "1i6yRpg5QTtEWC76T44stahafLHu2WGTGGvTgBB8jJRXtvohBQK3zLeC1kgGDPhpQtePdcWmt5zJaZHqyRGL6D9",
  "key14": "3e71PRfsHdDcvPe2fg2Ym9nvhkdeVKNCvM2fzk61agRzpaAWCMa8B4HubHiyrxaBsGhj4d46EiU6o7vFpWsAvToc",
  "key15": "3yYaAS29k5LouCUJaAYBbSQorfo4XZRG7ztvqkf1L2ia1n6yiLdatfVxF6pmkkcJjBD633QUzc9dEgbmGhAEsLzd",
  "key16": "2bSGzjiDgi5wsSvF7cvdxwpivjCaqbgKCsUhdhycWcgXvQDHehF6zWAoKQEKgzW4KVkP5ZKF2HUDgdrhro3YweGP",
  "key17": "5RAmaDqJrPadVyAU1qw9NKC6MTsxpvsiHVQ29m345VR4mXxYVYfEuRE87Fnufd64QwiQ8P2etDeQr7zZqfFFfkpg",
  "key18": "2T5juPw7UomnDBfq4We3KfpkYXUqYmGKKjfG9LqRpeHy8eNiP4Gk4SQmWZKx7weSxCU5gXpUjNdWsqF54GPdpANV",
  "key19": "XrB9TuA15DLgtoZCJZamUmU5vd1A6JLUeocJEmT6BL8DpV3q9JQBMiXALRVEny7YjnYMUu4jceLxFPDVnpNmQoK",
  "key20": "4vhE5Ztq6fT22cYdWhGdKjg8rxzTFatyHCJigjLZ5TLH77Kbt8LBgGodH27sHJuZqWZairbMEqwaDRP2SdCRGugr",
  "key21": "4jKwxxu6RqdpTofjAuZNvYBrWFcXPFMUkjc2GhWTLrXW3ru9RH1qKMAk7AiWUAJGGic5dSBfEABj7ceGC4xfa4A7",
  "key22": "67F5AA3y4SHgM5v72iMLrhNCHGwrYFSLNZWUmr6Z9XNE5YLKFtE6q2gQPavfWBw193Y2qXK3W97TkbPgrMxF8mBh",
  "key23": "q5HES9kMMmdVEJM8Xv83C6dM6F7JDpF8vXPMt3XhKRAwetQptkYinAhHQiCfoezXD8zsaE9YTiFxVdgVfn4KU3e",
  "key24": "2EECnfzyHTbqKYfMYgLBRAFbu9oRxMz8tZn5iwkWbTLXfXekb1kJepL5c9BbsfMwriubk8DQWTV12Gp9oKGb6TJy",
  "key25": "4BF8M8B5w4294NXdMeSZqUhuZWwqvETRQqPu575NHqGkQkc7y4A8T8Xg4DDnYC9wS1V6MzGTMDye1nuxnnbnqHFT",
  "key26": "3i5nj5bpuWn3r3Zxwp8MQLFsLEGN3BJRVQfPmomGJ3V914yvpZGaX4qw3hLBHnpcdk4h7RffH3M96im6uS5f5qJQ",
  "key27": "3AFfSzG1JcEQaeXHsJT4NVnN3fvAJgdfcWUXCQNh9J9bAcsqsgCMyfeGq7unh1FEvap4WC3rJZyz74jpCm3RTvuA",
  "key28": "3qCg4JeAVs2es8PMzLvUsE3Vymo6GBDoBzjwh3g3qKnhk8jYKUuFiE3CMjjMxuKx33wVs2orQY9Pf74kjhbMgSjb"
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

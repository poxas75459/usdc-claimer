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
    "3HpfVSFsyoFeKfFqHwmYiQBfRHzjek2AD4J8fpS4JKzC8WLbpjtvVM5cSf55vdbypRThrE2f1LPwdeVELW2rp6Ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nM72KpzNiC3TeEpwWbU7GSLBNPctcXhRKkzqbJhChxGb827t7pR6GVsR5dikgkGNS5gvunRXPD9CUX6vcfrXCuY",
  "key1": "3AEYKXGo1jvyPUazUC3iRLBmV4EPeToon2bjcj23jjJZ2WdYGXTWenMgN4h4vShKp9UjSjpmmnUD4ntQbCW7iEcj",
  "key2": "38CZviMyp1LY9GrhZq6LJoNysMBsVBunE5uwEWtBhZbqxbYGocPFCabp9jZikyqiz3MBGyPsf13oQ2ByP3L4kYVQ",
  "key3": "8Bh5qZsYsKvayR5syNQVdzA9ohooWmy3694hL6i1pbYp4QuDU7ugFdsCNVJTNMoqzAQRiommkwToUixiVnZ9oX4",
  "key4": "2frapAiutQqWSP5pFKEztWTNcYfGXSaZHdGucLn5HUzQqYqgbmK7rnjREU6x3gSLJiFedEBWoLLr6LxjdLU38gok",
  "key5": "29e4SCmbrKeG6xG1EWWVCav7vBTdJriScngc5Xp8Q7CCWLJVBh66o6dkycK9QsAV5cg7GixGZ9JZjQC93BMwzZos",
  "key6": "7aAGV8EMAqyYLUTiWVTbpVmUmjLY9qFMcaE4RWskfEBtkZH7mM7aymgWre6kMpvkM28kUQbBRTzpA5MKKvyWwjq",
  "key7": "57fSQWZet88cmxCLHsp1DCNgbXwaPxiz1NDuy6vRZi1jrJyMg9WkDVY56xqaD4GjhCp1aV22aMzqAW3jyAmhpHQ9",
  "key8": "4R3P57f1eYH1rA6DZxWxHxq9P6zd4qEkJg4B1wQYqd8ZCXRwXrXKcpR7bk2LjkTVicxiXMa2kxkCYoYJTH1e6YHJ",
  "key9": "yjFaE4tFcF49vvM8GJxJvJvUXAzUQCbkwqFShMxqHz1oVnCmsqvcELi7LRYppXjUajFPCQs2f6XUP8b15M43suv",
  "key10": "49F5mgmaRTSRr7UjdnsqyMz1WCwND3xh1BLbm4HYDLyxQn1jKBoeBUobymgdju1GkpDYPDuYaHxS1jy5UzmSzcPw",
  "key11": "36iPvmRaDQGFkkimidGZJWceGgrcYKf5hR5KTnGokPKBzvoMtgsz3xWoyTPz7uyRtVJ7Cs6Qrztb6Aq9KY97ocpF",
  "key12": "5XEXGt188g3DUNNSrPFpjTcFFpB9YuoWremL7bY2APE9X2s9EXchdiDWn2Dkq5E3jp5hRHJTXmun3Y9w19rsBSwS",
  "key13": "2DNk9KQi5V6MB25eajxx1HJyiYviCJqTCeN5wwrqLALNbm9pu8bHtHK7hiUhLHdyE4AYbnS67VdeDR8pDvubeenx",
  "key14": "3yM9DrLtNDgbLj5jDNuqjvTEPMTmscTYmAet1fGbXgV4BwCg7a28uTdQVFGSiLNH2afJPYVySQXm2MC2AC5BfB74",
  "key15": "5ApZByFA5ZbFmngCrKisBtaFNYjcS5wxuSHi5FwqEybuEPKVohj1nFDY66afCPRiFfPEiEcmNN2DgDuAHSspzKvF",
  "key16": "xvQr9wMpXbXTnXuLRfwtCng9BxMMySmPuZg75GXhCgXGhuGisaDJJVpESqTpyGGF8phiAVgd88ZT2hvpKax2E7J",
  "key17": "64yS6bB3iJ42udDYFYx6Sa7g8c8pT5cTGfYjABs8nZuY5yRaH9gWS7DanN7KJAfYMG2y98Y2vZK98GB4FjdVXDBB",
  "key18": "W4yXMZwpZthadBBmLoRiYNeuM3NZnhcyWWbTNCkitMq9EcTLabTfPt2eytCpNuL1iAWkjQFWG3S2z3jna4C4EhH",
  "key19": "2uRxfUTehU51Gn6hh1RWBSof59foLzSBtus9sY11byt6uaPaDqWUcR8YiZvn7BJ2b37SmiHpSdfzJSQF6jApwR6N",
  "key20": "4Vca4BWwTCgFEvJiAYbnMNdDkPpQ6qdCDqjoe4RMpBY1LtV13NC919BX43TMrYK3i8vL12RKdSeBzk8LaaTajEYk",
  "key21": "4pvkAz3Rng5oGTHP2YbgKFNJLgGqz2t3qVwjyTMqDpFcj362nKiy6uBCYvnAztqdF2wsmWrPkdYpLjiqAkN6JiXU",
  "key22": "85cgoW8XEZrvmRRVkwKM3gAinWoYfEjdUwzZ3pYdv457w3AgQp1jz9t3vwx33fL5DWyEv9h59uKwmBqQkowEpr8",
  "key23": "jYTsPkUym8eVttCuLKMc197LzQMoBRbA3gEHoi9KFuoc7iLAXRG81SNNqssJej8qPegfGWXb4vSzYG1VMZ2s3pQ",
  "key24": "6nQFz3h6QmFbpFuEphvcPEse4TETz5xXDP9FJd9SJoYsaBXEp5L7Lv9DMUdGrrhwRHhKQgNcBatXzTwfRSnFAMo",
  "key25": "Up3oaXU1fwbnDZhJiEjyRGZm12U7qya5SQeeQb672xAhKYMhscc4MYaGUJRHwKXhyr6BhNgiCnLGw1poDXicZmX",
  "key26": "5SoiDQzJsJaztnHGNVrDnWbziauGTmCCgiJD5XGSpXW2W9yZQeyXxQv7axnrarN2jbWLbGpb1Co3eyoLdB3dEMX7",
  "key27": "5qgFE9CqTKd3zPFejxwsG8qYm8d33mG73cnWkCXTV6QBbLDEfmiySHHuaVXutkoN2D1ehMNuhvGrjUwveEa3YX17",
  "key28": "2JzLjBnSwCPnZgy9FHaEc2cJRPTWKn5BgXvojTtJVPb8csvLfmMjG7HzTW5sSmJCYkzCyG6zJXiUfkM5b98XiXAG",
  "key29": "5qaxmLX8G6a3FnbVmRfQMhHjvzR3vbXKc5goyYyAoKzP5VXjoGvTqEyAvG7eYjTd5bxxzacCbMcYZzfgbwXd293c"
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

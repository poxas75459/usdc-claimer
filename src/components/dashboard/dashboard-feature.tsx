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
    "g1RxWAVBwkZk9gQkvaDMRP2j5Ci2cQFpWGYaNrg3PjAWPRa6U8QFPGCqUXQmERB9P1H7msntJ8twK6jXNeqFffB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yReZrn4KXC8WkonZxqyJXCsMWC4PSvvazTEZn9kfUT5LCMZezzsk7YNgThfRHJQvSTHof2RiGD3vcdYnimRBA82",
  "key1": "2cEXtMibngJDYre5p7bJCY5KxSQGwoZnm8Yd1mrGprFpHb2NdiQMEhgVTL3p6sL4VvTrnr8fdbAeqgYU5teRiApd",
  "key2": "4Gm8mM7zTrdhenapFfpAXmQVA5n7ZVLnkvcL4DdKqgp8A6nQYWfZGvaK96ygNqssXy4KsdEcFgCTNerMebW4u7Ny",
  "key3": "2cwHwGkL7ZFwB6fxcsuAffiVTyfXa4M2bVaHDTrG4x86w1NUm28ChKUUaNttUbp9wMwpUK9Vpuna7BA6poZqx6bF",
  "key4": "2pHd7GyaGKPK8fUAAckjXoLRpUV3aB6kjXthgUEiSRJNuZpVoviiZdQUdw9KT5xAKYnAgvRWNV92TF6k6q7jvDjG",
  "key5": "3oDtHCrAGy7UeiiB3oRUuuEc4jhbx9qNcjvk9QtqWY14PQWk5N8suEwbK22KmdJtd4ikapDyzpUUyrbBztZg5kpg",
  "key6": "V9NYMAieQvyz7g9PABzGZKMBqG12jrjgZKry8vmpKwF68pmfRaMk1dkkR7dvYwjMbomWPbzHnjEavm2tBc7i8aP",
  "key7": "5nYFpvrRTg4g5UAA5AxTKUkmyqMHuLKpkLyj3UzB9Hgbqx1cFHDPVyPUd8pFR9RKvgY7satz6nUwSUvtWxRoLvoo",
  "key8": "5UdC4GzkjqsH74gE3TV9JtVoK6D6M8mszPLt2WFsfB9Wz9MXbogigV945uTyknZ4Ff5wt8mjUARmiwv2Zm51tNB",
  "key9": "4G3CczEoPDhLKHr97fbJVVdxF4xBiVgrZVxcDKEuNkFh1sAHLJzdTUTaSGnFYv7iFWK46nHwkmbir1NFeGTXoP2b",
  "key10": "3DFZQC1rWHY9PcCM2ULKANveQYA5P4RP5tDzHM4BpHkEy4qnah4yJnF62VoQiXhqJZiX8ibbTSZxDfiagoAeayy4",
  "key11": "4CU5PVLSpscocpF9Cyu65h4BU4CyMhcRiKNuexiWTqCb8oQWwnpuepSmQiyK2FihsBk5Sa1Qkdtct5DtGWSrrMoq",
  "key12": "hL7ezbTnuWYhqQSpvf4QucvmzHfZbaexUBYoaX9ww2vKKa9q92kmiJy56xUkcGhJWSyDSR5prgtANS9RS2dYu7B",
  "key13": "4xvhWms2NCv2ufybeSyVYt5VopqKp3ugp9htzrZs1HFqKLDFxqcYYnJYrZwnFKtwdMfg3djZ5y44Mfgw3tDpnMfx",
  "key14": "22agzYyhh7K7L2MQxEeeNUETRRDtCrSxnxHYx6R2Z5AuEzWJMkrzWZ6aPEev8Z5maPb4dhQopnUJEeMfVjroSQZJ",
  "key15": "31PgkSY4KvogEMLwQh584gXam3Zfpd2VCJpKgKxdZuYLWosN2VvLw1AoY3FGvSmnwNvimqHqeDAxj7u7P5NjcRAx",
  "key16": "2TAihRmmf4fvUMPJMbpSUWnLrbns7ZEuxwWnXLEBxG87YpaMCRL5wcD2zVH3jtYDr34D4AqYHh3Wy6uKbjA4Myij",
  "key17": "5mq2T9Kcq2EK6UQNBUEdxK4kXtBPStR228nDgakzVU9KDoL4MUxpeCzbhAZJ93jHGvXnPfzYaUvTxggnJLpBgrmW",
  "key18": "2dY1Z51zCNr7THWw44cifpZjm1dx5fqrhhW1GhQoNfYACV3CWNgnwPHr3KxJ68kjtYpEHdw2PFsajrJz9rF9Q4Y",
  "key19": "37Ds6N69oihEMVoqoJtW1y9b1Ee6oJCkAmDh6FiJWL4azcKmdoB8YvaCJfk8UBXqsKtQQ69F6Ak8jxAFi8xEUevL",
  "key20": "61oLgar82qvYzc7FMSfRnvUiqQu5bJYJi7cRJ5jcWBruFNGPd5ii3Z69ueh4a8iioobvRK6hM7KJXuZ9HapqMWcW",
  "key21": "2fXQEMY5jEyqVZL6VoMYakSwULZoAdiMQcXyMBvL7eKwov4niZxLRZiXHwiddWa5wxBe2AX2jVRByRksGw75eFNS",
  "key22": "3aANjks5YnHxKM5eWH3rdgykVMX1qjB7Gka88KWkihxb6Gyjk9qph5VMUPaWSjeArxtyre98Zc9do3AwLokJppei",
  "key23": "Zhr8LBcKnEfKiqs92RB89YkuQTCuaEzUUGE8AD9XPJMn49TgPuB9gV9q4AH3T85PC2WEL83g9hm2RaSyiWSGTZS",
  "key24": "RYyTHm6t55eQMhZUWgdzE1qGLvmcBjRG874jPTeFRaxaZYikiyEMbNFAwn1g4mGnHQbmaFmtYZ9vydpGwXe89kZ",
  "key25": "QQcYxVifsM923Dh5QvyPFfpWEpr8vnSutjgkoUvusEhLrPvx7mj8MyzX81aUk2VsEBzNJviGA9vUmGD9Gp3kv2k",
  "key26": "4h5m5UVNuNDrj4Boycdd1RQ3Qby43QB9Y9Cz2L66yXmG9LsLoFm6oXSP5CdnxUaTvMBwyq32bs8W1thpe3r3gSiK",
  "key27": "2pZ22QWvvCWL1cpibfG9E5KbDXbGzqSDwSJED7jgapaY1N5KKiDHhVYpsHDR8GDXMXBai92km3aiWDwMvHjTNZZP",
  "key28": "2ALmqowEd2t7JYhajFCTZKurFqddN28j5ccxAU7hqmLzDv5ahWqrduvfS4mnVJbbQUcCSuPXnEY8uUsNdeZ673Bg",
  "key29": "4YGhH2bnpMC9uerp6dsQhshiy6MnpAaCWeYZHo63ECL3SPYozrsWRcM95UdYgvPpSgWPtN7qAKzxuKUxrAM4ycuD",
  "key30": "4hcPtr9ikZAWzcLGCxKHrTu9nDfgBThpi8nhqKPrJzP7DaSUFah1ZumBGWAfoi7EyqFH44fGBb1G8RRbWdtPmJpy",
  "key31": "27H4dkPL9twNVCSFr5qjinhfkr8RUcuP2PFXJWdEnyMnsc3f8PbYUGXJRyZ1M3iGCe8VbJJqmLHAjs8ykCJ21oKP",
  "key32": "3PMpHHbACsjyXeQD2jkD7WtVN5tKQTPzgfmbmyVBL1ASRiok53RUnAhujyaVZTHmb3tBXfnVSvAVXexZJqo5cbTb",
  "key33": "2hE1cz2xS4m8fkR8CNWAYH2YP9xa9uRmnD5m6NvJH557rQVKwKCn5PpdwYzquc3ZB9QdL2u524XYFKB6CwCfbZsL",
  "key34": "9dc4hoRdRegsMNqCqB9bfAGdMsx7psPozBCLD29njCuczJ1V8t5izpxFG7B6VX9wv8xWmXZHWxVPDZT8ff9CAUW",
  "key35": "pp88cHVxrqvDTtfs6vFmQox2Z71asLNs43QGGCuFdwGbpjkgYyqSGztaQFtwXQgMbaT3uwAutqrAkXEcG5hn3mw",
  "key36": "2DxJz1GxMN6oCqPa2p9WcipeGTwXeLSqn2povnkJKGJef19eLwHrBoS75THsjjwk4EEnE5bGSRXn25Rt9gho4Kqg",
  "key37": "4vq5dh1P4nSRpbAMcP3abe3yPvoBGEcgXLz6yKbFTrtvNHXcR4sJyUied5AyNG11uiCXeRcSJKgK69hLWw4RA8ny",
  "key38": "3DW8XCnoLH1eHNw85Tb19nu6cfeNhzC1CLZ8rUkfssx6Q1ZYytvZUGrLmmtKK8GR1avRiGqz3z7dY9m3NYWWqCQs",
  "key39": "5JFz6tjjahYvRiLeWS9dG6c27FCb8X1vHe6QcznG8bQggq97eXmdpU7gcKhqfTJgtuyshvTbDfYguUUgiops6VhV",
  "key40": "5gqFBy4GQFq2fxiNgCypxfkLNgWenSb3C5owes35xgwQFUtyqMeLvWuqr9BujyMFJtCYD6F9iCyveDr1c5HCPgSM",
  "key41": "58Y5vSJTkHMQEL2xRjjS9wVeWGDwvKMdsWhhB7rQZEqosGaMXWAvBVQ5VcKkGmbEqvYQEtiDvyDiaHUZH2FXpF78",
  "key42": "4xto5KjmUoCn6JSLr87Nq5rWR2cZxaa1BWPeEyNMMw6A9z55DyCAu1iyYEmccdfciMkkJoK7BEYrdSDfMptZRLxr",
  "key43": "2tHDCSpy7hgYpg5Ni6JF6uwHRr4GEePuFEjYTfabwPSRqNWhbqx8gknUFanHiSHjMSK7sRc2GeZ3KGSdsra2pXB8",
  "key44": "2jkffmxxj1Uue3PJYV2WwJLSNypjasYPa1Re2whzMj4KQfY2ypydJ7wAoQntr24Tm1amGiA8PoH7v8tBmTdP3bsR"
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

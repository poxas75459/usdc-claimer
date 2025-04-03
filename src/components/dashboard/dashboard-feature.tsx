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
    "3PhqAz6q9X1csyWCx1o9XssPFjFcxEesB7r3c73an7s4gyV3SQevsJr9KmvzSZs7CMmN4J2TC9wLJf6EwW84uGrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wu4apAKsVQ7ajKexo1MGpTQhUVvCC4VXT7KTrGS8R8iiszcCEwwHYKvzQKTtjJHUYemZ1BKD3PR1aZFLTeuNktP",
  "key1": "3txEbLr4svPf6eRCa4b1796oRJRhqFHc3vkaBKVQuuGG18ePMrqQvpJ4YiPTda8KtU9mQBkbAWXerhmZ9WsGnUMm",
  "key2": "4L5dUqg7dS4f3dnrxq4PoamJpRFAdryCBuFtLd61sKzK9nqodtNXCCqbZ5MngDLnxQgQDtMbkFfJ5pmpF2aa6NRk",
  "key3": "4acc3Df4HdQUfFeHWD4KBh9dfrYv3iWsLZd3EJssNEeQzSbVHDKQ2jHvA9nJhJfFv4ZLqTM9JU7Go3drHNxDUzk3",
  "key4": "2gKHdnj366TrREkG75wZigxNYS9wWLM1VK5R2D6q7F5RucV4Gttwa2iL1tXHw5YH3RLKQcsv8ha8JHzcdegd4oZQ",
  "key5": "4sZ8ihAQDJgeZv163kEGtpgddTcuYfR8bq4DV87k8KzvvfBcJyxFoG6Rw2oLwzcwr4T1xnwGMnA7nGfTzocPv54K",
  "key6": "2wUFms3ZdeRNsY8EFGn25MCucJQDw2DZEVvkZKEnSzUEX5aWh7AthjzCNy8yc6jULTW1Fef2AfpUrA9RvkA7Kwrm",
  "key7": "34XezxF9ohmpoQfLhG3bC5UrgLGSJmJSSm9d3taJYQZ6zYX2swfQuKssZ47hfbg4X9vmkWqUtXGQhGuMhFfXr89g",
  "key8": "5JRmJUTjyazsz6iFXHaXNXHeUYQfiMUkjQaVzhw43MANLZKRyQwV7bDw1ye6o5CJZyd48Cry9bk185hXrAQ2tTZH",
  "key9": "2u8tUX2nh5NqTBWRN9RM5LQJncTs1KZHqcsyuLYCgvhMHbpodAugmAtURkxSgLcpDm3c1C72nqs8eZW9ETQDYNbr",
  "key10": "qnbf7T9MUTx9jEvLz7D153pbwsN8ztuz9eu7FJvkYL3KiWJnnuTtrRt5mpmArBs4fvQmDcq66YLATUXMiGKLMsq",
  "key11": "65qthhPytDyaX2kmFNfgbai81NgofUN7TW3SUqWKF3BCwiS48DEGatPr3SxGp6WTj3yLKdR988txFVzTUmjUaiiM",
  "key12": "PJjD557MMYGHyZi1a8mc68GaQ8wWy8gshuWnbAENsVyWDMtYpoxFrry8pPBjuynq39ELMXZbiJfDc2HKYewrczQ",
  "key13": "3og3YuKcyqLxgQfvyYvkTe7dtvXtw4VJGQsuwtkGSjyAjsngE2XFa66PSsUiJzG4CoWEbAfZZfEMyAW1MV68onju",
  "key14": "4Z7XMwgw3yEP6QnpJV5b33Zbt1kjXNcoXmHJRFZU5LFAcaJneMEPoDohLDqJwSgUQWhMCfnKWb724K5TYS319Vh2",
  "key15": "2DvUubfhWm1H3iU4W98NnyX9CP4GbL1DjjE6jR8ocKNw2avdSUizTTqLwsXpbX1PQ8QXwtcfZCPEQ7vDW8bguQMu",
  "key16": "5qoU821dDhRU2KmZ27cXJzLx8xfzQNHRMmok6hS7Kd9Hk68aX1s9UKQZCn6dwmx4yLijjhNeRdwHux8MG3sLx4nz",
  "key17": "YTfzzJV8ZfrWktDGfYxJsaqKirEYtbs2mMmhcgFSWQTB2ofgVoX1xgnvAPhGiHMQrw38acebEAch7HeqXoCof1p",
  "key18": "JHcaA7c14ceYa1LLZmEESpWByYVLnPHdgUL8uxAa7UQ8Jp4uUN5Lz2FYKgnN5xAaF4qvi7My5eFENpuerwUVtYW",
  "key19": "5G3CWEamzacT9hGJDa7aBid4jjB4F49eDZANLTrcbPJCWQtoLJdQ7pZuNJC7PFAoruCUtfFmKRa44VHdBMfwVkNX",
  "key20": "5TZrwHnGvks1RbU8DR12ZPN77QpYB9n3H3mLcDwv6vG25Ua1Jge7e2jnGkcm96VwFgrEfhu61fgwJz43wCPN9swM",
  "key21": "LCQsJ5NhS9ZoD6wYLzUYyevfQMBUvESwgaytDjAtgReGoRa3n7e94b2sKMDU9mRE64yNTz8DqSSMsrS3eKyo387",
  "key22": "2jBi1Suxcw1y21rJ1rNx5pJKoSAHNPcozkAB1cAMmrUDm41pHKJdhNcVMMRKT7duqTMt4C4EH65HsFguSG3dAK5r",
  "key23": "3mCfcn2LHjFfJHGXrzRnzxVQNKT3M5uvfh79aFRPRJb7kYk31QKKTsUrLEM5qQoxkKn4yBji8cDZX8W8NP8veAis",
  "key24": "5BXcaic3E9ahFKhddPdfnhnwQ1Harg7zCx2pfkCvYpngC9yFY6chrzsf7JmDrhkidpey3LZMjtUxqRD7JxFvajGb",
  "key25": "2WtufxZ52q9HmWQ6SgdacU29JSSebDjFmavKSN2Ab92RjF2czNiNPwksx3tJzke4je6gm8rumHHXWBGRqThqE8ST",
  "key26": "61mN8MqX6xXh6jmpoPcvrieNuwBXu7HUDLxV8cqg4sRRGSbH7vGuEqME7m2q4cKHqvocw5ZgqPYvqekkFoZhNtQd",
  "key27": "3ax92KzXsK6E8y699urd2jox58BttAbcn3y2bswRwU6xQqeNJjzBzR4SbmNXWPvUwoEy2YYJhdD36rugn8SfHwbu",
  "key28": "6672AUgjBi28xQXPq9sQQAQVFDFSVL482MNDLyPuJWK5SUtoG5M9pQ8Pv58QfvbfBD4UV3nEUbMw7ocSzxB2eyLj",
  "key29": "E6FBpZKeFjuTRtnRyZvKsMJ6LvBjzQ6xjiK7ycdCgtwMJ147wpzZ4HMmzJPHHpW8ya7bU4gke8a8WFdzsqfjwCx",
  "key30": "47DaKVk7mSw8nTznx1qekyAyhSRQCmQP1qhgbTTyYADZNaui6ycucXYPS3zALc1e2rzn2b7wh8BHm9bHCzy4J2XY",
  "key31": "59QehVEfab4kwTCuhRqCcrhyk1KShnqyEeRQBeuYMo2MEfpVf5BnXWdB2ihyET7Daf8ETrQm37xPQ6rv36zPmzSE"
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

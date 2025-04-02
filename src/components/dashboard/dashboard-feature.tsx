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
    "4KTeKJR8yCVubX2TMJ2zfiK57hMyyT6VRtXEh8Schf1nmPBhJTHcsNgJM7yxQ2BvhR6EbYRnTika8mdzJcy8SYJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dswB62hN9dYPqnuEarSa9yJLNYbsjrUMxF7nRkU3FZS8DhNy57htQXf3AG3uRmnPwpMwvC7AjPj3NAnVL4qHTX4",
  "key1": "5hy3QbwsVHutEf3mSJaHtgFjniWU4CiiFjf4BEzWZwsUkLrCLkyYa6VPNQjrb4rBByQCPXc6xLq919q1ZMo398Hk",
  "key2": "WBLgn6eB7wxmJsw6DCd94m9jsCZfV1i3hnmUtTM8cs4nNZycn5DVXHgS1v7Si8AH4UVPCHncbzqFyt44XrnqDZj",
  "key3": "3kB8CyeZDjNRsg2CV1Ha9b7AQUFoXXNMEiNx7NTftHsQoCwYdp7iX3BcyEXaoRmJVvc33GgwXhFhzXE8FqzRiUB9",
  "key4": "5hhtbPKLwag7txXxNAhMEVtFUCLMkhBHydUPqyT6ofJKZLXMeVNh592VpJuZ7r3Z1HJDR3DaiDpuW96XsgJwW1VV",
  "key5": "2mb7gzrftD2ZHdX3wLRbpNJUhcAuqm5gYeE3dR6v1EJqNeF73mompwGFmKUhbcgFUzCUvoQLNmWmTtfDN3akzagw",
  "key6": "2bjv8QFdeh54TgDYSLUfZVCRfdChjcwxCGQM2DWPMBgsbnA2THo7Sn1KoFM362Sd4G5zzUYFCQtHSmEhL6ERF614",
  "key7": "kUayKdnraKVfcdPSf8Pz2X1KAKVQhMFoAiNBMw9fexiDjVb6WoCQSjvp285jpBybJNZj4Z6du13yBHwmkorT5zu",
  "key8": "3t2E4HvbwFYtA2S9rA6e7zaNcT9guZLv1Wo9op4THUF6UajEFJeU8Wpdt1xry9BXKyMXkGEjU7Yqf9ZxEKso2KLe",
  "key9": "YbjA6zQ2pCFCnqAgnuNPAxFB844L7X4SR5f6WbmWPoN89kVfYtykYytviVW9vqYWmWBJSiACQzWQVeZ97bYn5mq",
  "key10": "2FrDQ3kRidpEPamRWbqbVdxejLqh5PG7vAEBCoVyt7rP1si2bAKMPjPuH64QLhMToBhUeS6nwQT7WpwcXvEpAtRT",
  "key11": "ACr3RiFrZBgmvuWdadK9eTUrXKNyqM3jy8LHKSwsroFtouXQad39EU3mxKSGuUmuskbf2d5x1nb5PBnPPdPjB1J",
  "key12": "2S1S4WY5WqMWH24KhZR97PB8CCh6NXCmgvR1ogBxR6tZPP1CJXQsruKM2HjdnZ8JhmKNQSMqH91fSXpPT6fKcaxh",
  "key13": "3xJnHXK92dC3szfXMJMPy21oVxvCassfUp5dpy1BjCZC3xZdtn1AcF1DHny3qLvt7guy1bbYxVL6H56mggbhnvjP",
  "key14": "3yC9VGQJgrgkyFkSmqs57N85u5xfWcNVimSqSw2U8CtMuJRTCFFh5jXXA1wbG17ym6VRgUfAjLULSFnXeJXk8DEL",
  "key15": "3WtjNP3wxxrFt5Sa7NoZdrgsPdAyWDLXQfoQ1jcUczT8YcMuZCNvaMtw9NT7GBkCcLXQ8GwAgzVpKUHxHiUJR5VR",
  "key16": "2VpUZKP2NYw8zp36EPzXkZthvQAQvdf7P8U4WXmPpotwUzBLdwfpqW5jKSXLZXLbF4KascJpD1jQqr3CBN3jhfki",
  "key17": "2VhDdiTpYwMwLwvdhj5r2giY9oVGLg5tTG5o81dgWQALaEwSWkxH82SaQadaYcQhRs3QhqtFftGSZaaF261JNZUj",
  "key18": "3CzbZpk7WsGuMj3yykTTZbeDRAEL1vzfCFM7LphfHwxEDvvFtzoSfz6W4RehPMa5p16MNS3aeW6S4mAdMeFStUzn",
  "key19": "5WEFmbQFU3Dd3dGcdtxzQQjU7d3o3hC8nbWeHnpR4bgWTzCa5M3pMgUukUTeMcWnZ9VMc2Pd7vYHwBX1qX2n6yE",
  "key20": "2mSoK7b3jdpW2pPCyyb8qT4CCHL5PY712Rk6KA46aGsD6URLii4xBmKDbhqsTfMicdXjrHMSQhQ2i5pF5fRPaCzg",
  "key21": "43pQE4fYcFoXxUkrFq9Q6FsAJbVUrCG9hG55DBLuXqXb8WPZkHtaSPQBjC3foXQvLXufaM5wZsNrMhawdk4KpmUd",
  "key22": "2BUnNCSs8QKVbVSeyRDRBdsZKBtqGEmmeBWapCxCvcsp41KbuzAWPDJ7XCcWjwgzXztcJEBCSUQn8DnPSefRR6Wq",
  "key23": "qScLxtyfxZo1BP4qRzGQQYWXSpUcvAaJdHZN4ZMKGL96wu436YmxtNsRUhce7uwqt3gYKnxCoMnfxtUGH12Lgtw",
  "key24": "3A9PWbdCgho2z4ZzUfU6Cu6BtGuFFFVtB86PSYPgBc4SYvAYBhqAYQuhwkXKLe5q2FJrNsu1owaEJLK55Yw3ioax",
  "key25": "29b3tmYvgMfBV8vnr1axPDrDPFVAfcEXehNvPoRtJVg3aWoggo2goMrK7LvcDz9VMwt5ymAdXfBgK4vJ4Xpx4yTj",
  "key26": "473N7KvYVdPGjAGuVkZJxZ7DDhXyMx4HVLTtvbHgCgJcTHM72cWy3VpdcvTHse2rG8XxbBTZeQg3jB3dDLNftg2j",
  "key27": "MGXgcKFkxtPrPvEZsg5si7AdAHqQdH1Fvf4zAy3SUTYqh6BuroeqZ48KKddzZE2DGkjjCg1tLtSBDEHKk7JuhEG"
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

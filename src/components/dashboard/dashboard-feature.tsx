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
    "ZED1QQGrEjC4YwWv1WrHC3vWEWvKhD4DZNe3pCwnf1R4YpG2ACbCqZT7biSyqcTK5FQJGLPAysqScqLxTG9kXKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uAzkNzwjFMqQ9ngqew2FPFZ66Kb6r6SaSEkuGudb5AFDzhbkHSNtwr7Kjb8SgSjt8XSZFxSmpUB1bHRNEprc23h",
  "key1": "2akgEGZFz2jqpwENbjKicYQKaN9SPyzSLZZfjeVoFdS8e3y5rdq2DyLwY3jgDKSHd4RVWwEuv29jWiWoCqimTLkb",
  "key2": "3snsgeALANW2tFLFJUwDH2we8E6hFs71c21nk3h8gV5kSPVqykSCa2CYaCWkaPvFWojDzLo1Sv7WxSMqdLaAi97B",
  "key3": "2JQ2MEnsRGcbYBk4A2jk4AEaGxk5XnyFZ3RV5qRxSYEUt3qR7rejJbW6e5E8yoCYYAFu6v9q4oZWtWkDWj7MYn1d",
  "key4": "2NGGzMJWduw3XAySpWzpDPvbEoEZ6qEmLuoXxN3wY9Y4ytnBpR3LDpWtsEgttanRbZizfrH1wSrreKsL9XxmEUdk",
  "key5": "2eK4ZqPgDVrjtaSCLd3NCEwgMkFFQbNLmyixJkBXffhhc9T1GQwZi7c7ns1XBYYQ3URuNvRTLSHvWYabtF2FPtpY",
  "key6": "5wTCeR2oyiTzWwn6SDW2YesM4dcsZcxDJwqXSAG8YhviJ1ndW5iXoPsxMy257Ybm2PoL1xD4KpNmfSwJY8YSMnkC",
  "key7": "5a3bCtxHr1oG2wdJd3zNPzV97WWfqqJHpKDXRo6zDZ1bNSuCgMG8Phc7mAby6GQwtcg6U8YbQzeMZg8EQDN9JmF3",
  "key8": "5UsYZ3uNHRtMQDQnTD8NM3xoVcUEFjLjqo7HAEmJqzeKrjj4n5mMtPAo1nNPH5g92JTT9CMbHjuRszytTa2nHPvE",
  "key9": "2Qpd2FXLSNXi9oN2EQWfUeJnG1ixET2nijr7PntBUt28ZNVFTkT4ALYZACzMcAyBzJiYciNJ7HzNUPDEkkcRvY6A",
  "key10": "4WBkaR7tJpTfczk7W5HXYLjS7bQecsFYH3tzj5dTbKDXKdHHgXXnWbc8s6bK2G1uhbSJLvrMPgGbd89rBj4aeku9",
  "key11": "56prcigVHUjxoKy72QJhYrhMzX5GoeCu8F3cQyjd7MkCaZmAWFJGCMBHSzPz9UTri22qrqiWSKXDXYWaDkHEJBWY",
  "key12": "QvCmUoZBVMUdyweQQZfoyuJqMMSf78g5aD84xNkjztgY8CXrqUtcynwBoghBKqQaApW6hxABz3PhhL7iGr5efrf",
  "key13": "3mwtBBvHwkPwmXfqFXjW83LLdJSbSc6jN4UamfrtZAEEabP5jVK2KF2YSkAJWuZv3ZQgGV1j9EBZkovgQY3rYDVB",
  "key14": "31ff29NSUAFxEakAabjn9sQXmbww53CA9NEympDc8epAbazvfbdUHxZHjq8bztCrbpDp83FJwdprmQbFazigZwTi",
  "key15": "3R7omSiPaVUE2jVZyyyiuAUYRdmFpaK3ur6Syw1D925gJynm26nDoEXqec8rEDgXdi4ENS7pTHBjY6vhSYpjncQy",
  "key16": "42YFdZYqCJdbdz9JFCAPLxuFuMHheRDR4Bxj7e3RZJGdkpX8X226pH7Kimf1SMNHJmgTrYuvwKtRXVSHdEBaHqvC",
  "key17": "2oTffechf2xw2dzUscv7Ku2ayfGNLJoyCAss58rgf69nNN4A9qKZGNaH6kxkgrD3HdNa3bV3gaGbPXKG6fCdncXH",
  "key18": "31C44yZxJyswS7LqiR7A4a6N91MrumuWhMrqHJV2qFr4y2gZKQX1y7roec2U9bYDB1Japw1zmdAmnpi3XFpTdagc",
  "key19": "4mibdKyHmg3jPvVdrGTvsPgzVkVmDkvZnqafg2N4tM4PAhNN1dABxL1JbWXzpLSccjhW65mHhUZZxMSKa4z84Jde",
  "key20": "4DhJiS9uVcjQKvJpKqS44e92EcubQPJE5p1PsHBhBir7rDnvkCoFvHgGFfH78sG9VTauUfPCDQkYmiLo5vdMRrPX",
  "key21": "5d22P66LbZZAnGWPDBFUamt1XoW6HxUvAh5Wve6uytRnobGVox4rn2KSGxMgPGB5qVzE1cWqjSsY74gB5qq1CdG5",
  "key22": "2StvGqnhVGqwkxgVWivnrqhouKQB9tkyKb1tTHcvDccFFHaHMKDZdAZ4zWF2WtBWjnpcquU3vm9emHC33BiXfyfK",
  "key23": "26sEoCBubV5TCqeyoneiAVqJQNhGMVBG2uJ5Jh5hfXGcDZ1SRv5cYT2qTty3AsJ3Mm8UXcg41sFgBi82RRvgZX4i",
  "key24": "5otAt15Dg7NULF2vMaPgkwH5Hht1EQWQWtF1M5rej63a1h7Wy69AcnvPuz8QqLtVkLSb9PjZbf2cXid3sLkLPGWK",
  "key25": "3pUoUJfRw1uNQXgnxdhGG8JkBHKF7WrEJtGcFJRWb4Txo669cDnVy5szwQAryHCny6EWLuZxvRksjPEUHziKT95D",
  "key26": "25TMZLwdD3Ad66uHvHqvqYAk21GSWAY2f93j1mSoGre6XUtaRwxiVxkWxvX9DPTqNZmVfLAzcWbwRE8eFzjxaoz9",
  "key27": "3Y3r9YnNwkrFVGHVovjA5CKYyW1xGMGvZ9QZGe8Gg3sZZ8zPB34xnTfxVMps9J8zgyYGUyjc2n5iowGBT6B22xGJ",
  "key28": "4ckta6y79U6vtTsMFs9AMZcjubggYFiMnXCr7TSdSGwe2bQF6K4fu4KSBh9dsyRhopn1hYnAqrM4cXkpA9PpJ51e",
  "key29": "5W2CEWZSfF1uDnyzbbBtkJMzAaPRaLUjJvvNEatxG6DvdFkSWC4oBYt4kUo3digk88qwBpRLoLef3gRuwUgpuQ6g"
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

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
    "47yVozWZsytaGTM5JAUJEwmyrfbPAPzCCHjoWVLdLTRPgDi8ctjb9BdJr9xaCmcMNBECgZcPpxfdyBWgbtdLTvcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u5jR5pjLvxVAhxbtw9cakq4sKhyaSxYxDLTA4SC8e2wpoygBxYwZ9oS2pEBK3e2gARET3oKSZEinQmSjSZaSp8D",
  "key1": "2JvaPttLYcCGPGiNGcH7fo7cpampsgfdZ4oWXABMXDJieGCjwRapg35SgnXYcwVXE7W96nS7UQKzwRH25p5C9i7Q",
  "key2": "3zpzGjoYgPfsifz8Dqtgq4JNgVtdXDTzYqmt8W6ET73hcWsUH9nTi2Fsc9fmVtVZXJwrwrKp9ixJmPb33L4TqwnW",
  "key3": "3WbgWdpiPZZvWuQdfJt976x5335Kb4xKcHnGaTayJXXkpjFtRRU9jQbKoPtVW3AFdsqKHrTxkRQdFhtnEJKWADNJ",
  "key4": "vhcGws439rQeFPQd8szxb7d7HgGdxGzTB7VB4KM1mmTnjLmrBzmXhgK6NLAnKYBgTx2yjMMtJdqWszda69BnkEb",
  "key5": "81jCwtLxNVUQz29E1uU8sk7gX4rAeELTsSsr9PwKckgRXN34RxGemmL6M1jvqMiqTuigGep13waztHUWwDuzVJk",
  "key6": "3v6JiFJX7srQqKvSXVXUCT7fpV7Z8GRTWPhtekXNqqzqtTKWvgnj5w2G4ZCo8bDgHzLFd2nzXR12JbRyREn3AZuT",
  "key7": "3ieium2At1sdpvpRg19R6qsBaAtGtJuzM2vqGt8YMQjS1n6XgYNYUEDyanpm7F7y4x4LmRMJpikLTWMVJiHDsb18",
  "key8": "4atErHC3LHdFrDNWgTJokDat2c81Vn7qbKRrUcr14kc7PhnGTU8VnHKPWNULQvCuEU4RWb9LgiDdntUkxcQbyTm4",
  "key9": "kqXbjPqcuKMv4ubAqihUmHxYYbvJtkzc6ZkUrXnQVybkJ96w4irzSmDPGLRGhMbQHaTtUnvdi1gfH1y2ZZtf24Q",
  "key10": "2k8vaY1Gyy8pDb2rFnYAyjZ4d5dcZwDiK92FBCT8Nic8X8JeBJ4tXhasV614NvpTsFi4BWviBJEUN5JybumPPJx2",
  "key11": "4QxmfD1yuJ5H13JK93EE39ejCwriBhtdsUH9VJkYHDgngSu3qTXQgXvzwfugZPuaeuzuUKYUa6T4voePkGXJ9rj8",
  "key12": "5LWrYqmLMpPpWpKXEw6tdUkq2c5qhbHzAEuxaxwbRqZPQVzAzjacTcf7kbcS8JDLZfXPqstwcdwoJpskE3G2bTLy",
  "key13": "65iLsojdDYKFif3Ygv5RK5yBaUi9We1m9g7gYGmwosJmywqyzcZcRWvPwE1akETvtLDUffhrGxwg1485rn3GcvcM",
  "key14": "3juKh3FQU7Qf32dpa8p5dhgXCvC3mD4gM6QvLdSYJKekKjDVBTwgUJZgZ27m64m92WGiVabduGaeV595BmCFmb6k",
  "key15": "6gFqmXDPmRquYkquwkCKXbUwfhA6Vmqio3r3XpfCkh256yWA89Toq6eXy95Q8N5jn66yxtVk3cuAeRC9ePGC7jX",
  "key16": "6NHjtCWAvj4C8pfREqTdjZ6b7Vhnsc9zMLi2ex85sGfvmqXGmAahzTjBmQ8w2HvYiqVNbsSb2NRhr3mmSuLMxgS",
  "key17": "4sUYfQMxNKuUmidrRTDJva9UWLUniQhEG7gSRADBjVfbPxZg3ozcZjjqDRY1uvrX3ccb27crop6zBhMjJKytW48c",
  "key18": "2e6yoT9VrKvobes5sf3ESunjU5tVU7WvnxdbyqhpEkJH4NaqmY1Y6wMYUDFZM7ootc6fgRXwvFjeF3y6NUfXY3Xn",
  "key19": "21fGcS9tztoMsJ362aL8iZ9F9ivwMprq147WA1fSDfzBmSnL73p6GYtH4ASMDoEM4B1C4unT5mszbarT6mu9tfLr",
  "key20": "62nbRndvuwcp4HXVyc1Kqk5RP7JR6AW4T1EQnxCNHY1c7sV4FZYWh8LYmkVdgvMVxk2epjUJJzSq8Sdvy56sc8qk",
  "key21": "55iVa1SDrdGkzxzbaJmnRsTabaRsQyW9rY7m32iMzpLRGtptE6RzPhP7vYAJaUfMuhgUmuuK2QRxJdrs5DhWKsu3",
  "key22": "3XciRrGyZRGtKzW2up3jJm8RpzbqTXoX4E3beL47LXKfHFt2JhigHq31wGV36jZNR2gqZiosrFBLHDbvmSsi41YJ",
  "key23": "4Jta21tk4qDwmsPxPBD1kGy9xdYCcdjsz2r7gzi3Kc9wiWqh24A2sxgAJ8LDSR2vDTz85VrmMTachCoFAgZovcdL",
  "key24": "4yoMT7p7ciZjXwZy1PijQgvNzfm5UKW45iBhyJCWW3sJQA2tUN65go47ukHDS4egjrwgYVyWMR8iBntz9XS2Zaa"
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

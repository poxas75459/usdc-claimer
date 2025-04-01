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
    "3HcNuisFWaN54yJnTbZwRqXF27W2Ree8dG6Ca7Bs6EJu8XWaCpVUu9f3wnM6yaF5nLULvWNUrU2EBkx9rfCkLxPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zvBeCoGVEsyvDDhqWzwPQyARtCL8aCNhrcgyBeXxXJGcnd9JAbs8L7Ut3P6qWFHCpws5opsyhfKt8EtFy6VHrBe",
  "key1": "4jm8mxMdQJnehbdN7eJPqTSicsnKjBPLEoaDjjnqPs6ttCMNSZq4iuTNTTL9kQ5TCBYqPHdwPcXB74ULJP4a966c",
  "key2": "5Pcn8sBHY1sjgbRvudALJUSz3xXr12HU19D2eeVgMatRWRmPm8Yd7sShfPdoxLrb2UK7wPM6NGPiuJvNSLGkkJZB",
  "key3": "4z9o9RdWjxYB2wQTycqq4oRRdwDi2Ab31GqxPtfP7jD6gvyprYHLuSkqHmabfnjLsevGn6mHhMQyCPVfp7qXRWzM",
  "key4": "2cPZBY7GB7tTxod5hr89XxFvfr7n8sAaYb1QQW7K9FqVpKwPYFN6of8fr9VbidR9fo4MJavJt3d7R9kn8RQ6Y8GR",
  "key5": "2NWxesYUqnWpUgc3KLr9Zbz4aYB68KP5L7S9zg937w6DMAp1jfNptm3pw4MnVU2eRm2vyuKUauSqUhiAFtnfE7jb",
  "key6": "2gZsm9gjtninNgqgn6vJX1Y9657fcnpNxbpRyfwNk21ZaNuDPohbT5HKpuMhyYKXkxJf9JrjJD8CjTV6EGNG3jC3",
  "key7": "zq7a9PypeUmX9nUGhVRuiEWbpWF4MyicNB2cbhtvmfFyHEoT4tGHkFKK3mFTMQesRVhXW9y5kJX2S1n8agx4gaV",
  "key8": "2wAkQ4B2H7Ua7ETy5DTndy4PrLCaE2U9qPqv7y4wLqGGUUFfdfUrHBfwCNV6mrqoL5vk4sAebCJw9kyVSzzCQPNH",
  "key9": "2PwvpAaP1x9aZcdkhq2stkkJ7zreY3GGgsUsN8DPxHW6Si25g7THd7KvtjpAMZTbDuXwMjLWNxhV7JLXu1QYm6vQ",
  "key10": "4SvairTYHjK9UY1ejmDdZGrDEwa64iQ3f7xZdCf3L6VQnUHhv4RN2PEPh19ZeVArbhyviNG61ZHXP7d4UoEvwFAh",
  "key11": "5CT8muJDCWJYGf5ynKGqEjQ937bs71REqxC3LE6dJqczFhyi1syNFsB8UpiVnj1LEXioSYZkt1KiuFbJJEGV6mBQ",
  "key12": "2LRQXtnk6C1qspAk9WF1fvQ1cHdTcCfmC1q7WiGKroPm6M1beaSpoJG9sw7FFhD4CCqXWCcWFqE8tuVdVbYk1erZ",
  "key13": "5W1tTVPxEXNXcZpQ6NiAeD2P2XXebgUBx45HjrPzwZAS4egKu4oEnDUGtcQW1MApyJhPwPD7FxJpAeKNaHju3z26",
  "key14": "55HwpAy1vTU5UJ4s8rEnGE51Sr9yqdbMug5Preinx6vYUBpJ76v9aiAtWu6ZFGgSsVXt9qthjdqbxEhJevfdPJBa",
  "key15": "8xGu2ta1BmUp1ydJ3RwTK9qedUqNWe7QuvQQjgCri5HM5Zwjdick3XhpfwUK2U8yBaMvzaAfP6w2XHJnmYScufs",
  "key16": "2qbLYr3i4p23LuYWKfs2NKopSRshPP4SnB3YDPKfV5QDzTkge2xbtdag3wrrxYzrEGWqwTn9YvJ7QncrzfJGCuav",
  "key17": "2U7QJq6zkaxsQsgGRpxaiMk8jKVAkV2PCSErvitrjZHQSMwWNGrHBNbJLohHCqrdJtBMhw3H3FXknnGiqqFZcge1",
  "key18": "2QhKMjwhpedoUHgHpm5ygPJWaPerHNSXKbE9HpcaaXCHcUSnTjFinV4V8FYgKtxgnj14SabNxuf8KuDM98s49uKS",
  "key19": "5wK1oLKVPVuFz1kjXvQsx2qQDQC36sxGxjYRZnk4wVvUPq2GjYKPefmkbvAbaHoUnQkYgeMeVAqzJy8QGdT4w8r3",
  "key20": "d742w44AG1GvFPQoGHfJGqDQPZNZweoTHXxLpK6brHx1HMoTZe8RnWxQsFKo6HnojohGsXyNYsauaG69GZvFMtw",
  "key21": "cKNhBK3kwMnLhT3Cd3EM694tLmAKymra4Yk2nKBvKRwcPR9jPKGKwDJMQ5BFiqoF3np2XUk5dCtATCF4GQg9fyh",
  "key22": "2vWjW9GLPzZdX5ZNSnqpd81FYp5YzLZYGZ4yzLbhTYChCDgBppMQ9tNAnnBLBjj3Zw5eX3MRFbCKdjxj5srjZBa",
  "key23": "gfXAHnUExnLAqube8DFAQfnXa5YkXqpRKcYdkELWxwEMD4FNeKkdRfBTuHFr8KWCzfe5A9xC3EdEgAVMGmMwJiC",
  "key24": "2K8A2QxeWKitEGmZ7HcvxUnA5D9947AXNpkFNRN3RaYrARzjRXYZyi81wLc7wfVVMSmQfcgjKVQBQzjN7SnMbXBr",
  "key25": "3jU4rwDmvhi6PLdnT9WTvWMEMWeCB3HDmGGb2Es1wNGypBXqA2D8fYmwJGzNWu6rR9NYJ9n1RdAbbvugEpqkgaik",
  "key26": "2yu5beFTdhX5xtjpw6tTWJH7HdjtLNKA4gZK8TH3e8sEXZwmLCyPJ3J1Sn9n1rLV6yCDNAPq9N3WzRMQKCU8aQtb",
  "key27": "owAkWYohxduSiFgm2QKi2K4qRS8hQUPsLbpRwcdaqZo3fq5xq2Cr9PifczwAfYB1BheCtQHnBFACkxDAAFYpPkt",
  "key28": "4KH2WHNpK9LELrUZK53Z4RZvZ82zHT4BFebYwe6rYqoBbi7yrCa9Jqi5rBM6T9p62Tusd5tjN9TDeeNfmTLKJdHt",
  "key29": "4HizikRGH7JHAAQC4sPZKB6x2NXUqNdf6AV6gKCZvdE8zAqDMnci5pcpyYocqBz2QA458vfEk7ZuRNCt7gbYVGvJ",
  "key30": "2g67C4BQJa3qmD5jf4bwZxgK59QPFt8zJyszVooR5SqYGNNqzxQqFnPwQQeQBEEQ9P634YfBbeizaKZrJ8Yextsd",
  "key31": "3j9ExgMnUJVRxvDRY53mPLupTeBdkHu9x4Qet5r5a7gZtRinRyM2N7W2fQab5nXZpPuHNowA9n9dstrYvqdYu31s",
  "key32": "5KZBXzVSjXGmAArX6HCuhaHS7adKvE2mgwm2U5owvHeKZv55kicbCgyEXGBjoLi5YKPMkAQU7ArZdrj2uJZFb9RA",
  "key33": "4wvV55tyLtHSYwBLoYZBCWJJ2gYFxFSHWkzKEDeirTwZcfRoUPH97bU2e9KyGHTgWEojDgZMqSinu6TwqNKDrKVn",
  "key34": "658HSGuAgQgmpfGuX59nuYNhvGXwk4Q82JXw8EUSQxPhc5HQmw3DXYTTRy1fym9ADuU6udNsv3Nk2iCd2EeWcBwq",
  "key35": "ZWQJMqLBf6ofng3hjNFW5KPqGLtH9wZdjGM6QkZCrsKW5saUnKFjEtvAA9pno8hP3mWnnHpDxzT4QeMUcYQ8Ff4",
  "key36": "5ckhCh633n25N5gdfkX7LzW6ZcxCr8noDZpvmCoRz7BpCDYToHQveKQBXnJ8UPTpabzBEG4EYEsaH5SLbfC5MZzV"
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

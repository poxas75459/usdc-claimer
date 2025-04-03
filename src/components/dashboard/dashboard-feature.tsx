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
    "qMFPtFSQKieKe8zhFDrzMnSKGvpwk6Es3HbWc5z8tWHTCu6ZAT8YyLmNbnrLiBkm8MakvE5d4u86mJFYKcGs77G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jVSVYdBP3fRbrCh6y1Qb8hsafp6FzwK4sYf4sWP3aJaqCLPSoxrGn5wEoJuNGfLVsvzS49J2VsKTZeLyY7YwaGq",
  "key1": "59AcrLqhvafbcCZu4fD3Fmf7n9Hq94JwTkfNbDYvZ2X9WeivFFvNqG1k81o6kFjgDDVy8desZWbGVw7uzv2yEoN",
  "key2": "3rxJnLSGHGguNNjwqSVSy6hendF6pYMy2kTYiJoGfryn27U7Ntqo2QA85WD29okzokBnfXxyWWRrwYEwAcpahQ3P",
  "key3": "3MMmUFqbJ1DZXcN2Me9Jwj686koLE7eRcNh1evsUo5eeo1Y7Qk3kXnkq15hMYCvS3FAA2hcLBi4ctfnoKJDtq5gG",
  "key4": "J7u5yevBdv3t61K7pcqm1xWgoMzMgpdJw6Tz7HkRYVgEUW99EJAP2Gtekq6nEwVJjm9NEpy5F9Y7hVPYVTrXKLV",
  "key5": "3hoLdKdUirwbraLMAhnYWFiY8iXRgT6JEki7XfcqguvWDp2eKtRAP33x5b6jy5wfUrqMMpfGnXq9Uy4Y88DEhmHZ",
  "key6": "2jun9fERSYB1fKzTjNfB8xoxGhXt2658m1JYpPFbrTNwcqfNTKLyYu28oT965zE4U4LLM7Ni3b471HSowKz41nDa",
  "key7": "58riFzsDLjzU7tSKYG8aDvgtZ3W5YvzrewdfUbGXjLhQQEZqgbC2poSkurrfPYmWNW8H1yPkQzuhhQApuJXfS23N",
  "key8": "5FskmmQc2EF9d9njKv79so67PUAxL4HMF4uN8v9VDKMmnasBKuLf1a8b27ekeeMkS3ebnXVGZwn47kTzdBqwMCnf",
  "key9": "3TavcjAHwWYYxs787PznTgVee1v5P5516gNi33Cx7D9N9WAsdDSWswuMabrBHTe2oAHWggC2yV47gfGi4hAT8EHe",
  "key10": "2xsioAfURknn56HPXe65DruWSbBZ8dSRQ5cBpToAYyJ4sknnJAJ8E5SGFSABYYPCaLKVoqCni43HjSmhkxkJ49s",
  "key11": "3vdecFiLdLEuxCcgctZiu52T27zD51P9BYwgufRTizior8XzcEJi5df3rNgu9ryiUUY2h17qKGE35q6i2UJwfsEh",
  "key12": "3mb75XjezpRCan1wV5AkmcKKJ4Rqv8oZDxEAH63YJ88avvcyGg1qzYjf5YvTbEyB6idNxRxnehBSpT7MCindLcet",
  "key13": "34c342g3vsXRbpGMQt7SQDkAuLscukx3Z2igt4kKhm1Ny4uLRR26odiDSZWeR1NeuVDZmCaLGGS8eNzr3q3X7KZV",
  "key14": "4Y38qyavQVRzdvffmsdKkESepjuUTjkMjbifDA2GzVWd8kpoNx4h7prNt6cqBbhFp5p4quYFonWQpeGWLFDdSMhq",
  "key15": "66QqQ4JHQNq7MvuadBTYmfhgXnXrRiLrXDhwL9LF8ExfQdJjXuBz4RQYecD2PoVbacZLBdoGVMdEPoNRa9cXtJwn",
  "key16": "4cJFJrjRtJs6Z7dhMqjgbxHuPmYoanpYTfXquBrngLAxnYR7pRe3g14YkffXRLMrECamPeV4yD52WQNSc5mBNHV2",
  "key17": "61mYvr87ir1tpRXg9xHbo1Xd21UXfM6rkgsJj3sdXpDXW5FTg3c8kFg8Y7dV4snWr5DmF262VV9GeJ5vdWzHtB36",
  "key18": "4okm1CiSciDu97aCsU86hmss5k1KfQMQuLkeHMvG6wUe4Q9EDr5MQ84hxDm4Fvm2xYZuFPZdfNzDJagc75jKMZWY",
  "key19": "4oVdFXRvAben1wy5en9ZwfH9G7NwagkZkV9KhzPpZzQcjwbz1QAYY1sJWHn95U5jUtjpNJuZxPVoAQwrj5YHUKpS",
  "key20": "Bzfsi4s76ArQWvy8whU5SPXx9fmQ6pAhxDffaoaaMqNX4poMSavgGDVGHzm4x1BgWNSYL6mwYmoqMvYs3pz4TPc",
  "key21": "2JfWqnoY8Jcb87ZtNxtDUpEFSRUzJipqSDgoJukaCrdsvGAGSzEi6yBuYbd37J2zjqdKT5seUzMdCodN1Q8FRdbv",
  "key22": "29QeYtMEr5L4izU5pySpVDUdL72RzA7wPCJ6vZjoAspQDyLwULfmJS9HtZ89vSEVHzdAUyMwujFaJGFEwFdJt41d",
  "key23": "yKVLNSfJ9sV8eu3Vsy2hi56hP9pv6wb4FKE3a2NTcNCwk33hpVghqzv5nMctzu4jvdGH82tuZW9pdUDk5XwRjRK",
  "key24": "bHrVuie53CemoXxYBtBLe9oB9YA12xGHmYGvfHVMfBusR1kyLdZn2nptyEjWdMCmgp7BHeASb1X6RySavZohuvF",
  "key25": "3jwKKEvDWtWbxdQGp9mafzaSfyvmXNVpuBNvG3VcqBAr55BzJMf6VVWrfnAtvezdVXuZ6K7CuoNYMUTBT4rV4HRi",
  "key26": "3nKRmn4vkNQU5W3wY8d2gbt7kjfijRTrxkJYo9ovJVL2Ama83y88eCKEexnwpmfpDj1XsbDPKta7jVeadZS6FXtH",
  "key27": "3q2dEHPXDbBWXgCBZxQUgpeeYnUAcioQ4xp1eF5h9ZLbQBBPvusish6J8tLJcwRKTWv28BScHrfiqjEmQc1mdwS5",
  "key28": "4S86vJ3QrsCpAXu7cGjDqwLt2fJfWK4F2Hz3CfwvkuafzUAN1SKqvF7p9cGKWFMquTNv6z2fNQoAjRKVzkzxL87v",
  "key29": "2woxcPg6oxRbknghE7CvC9oUFQNiGhYAJasg4FYnYPXcGoq96n2DcShMGXutNA2ExZKzi1GTexRLNC7errr6mXrd",
  "key30": "3s6MT86G7U6JeaVvNJpyYpx2psiuAxn6NVnJMU5UTriDCdyELYfUfLRMdoxnKwFAAKjFmNriASjg1REH2CqKUtqY",
  "key31": "48F3mujQJ6jajGfAPDti7jPMnzcFxYESc57GoWpVUP6uGsyz9coU3K1diBFD47vpFkBTiFhpcr1QcCWVCjS8G2F7"
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

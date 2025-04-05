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
    "XEbPARw5SnHaid1K7ZyGi1tEXsSXfU4uXP5Uq3RLCRebXSqvG4kLxDR7sfNfi9LNRhxHrroMT91Keep3BsuQKbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZG6RvWCTNobC4or4Edh9a5Bh6zYVua8KveVqeyCLhU7h49c2UUmY5PgCtQAbkoAjB3mb5MUo9Rk2qFHHjLJdQg",
  "key1": "t9EBgu74Fv96Hjf9JGVC2zdEJoJn3yTT9VHjFE1LEia7PKwkx5h8W5MJ1EwxTTgf3Wz7tXA8g7aq3g9mP9jeDys",
  "key2": "RF3sLgCs7mc2k1nx5RJ2jhkaE5jtY1nPwpuWqRgnhwZc5eYACFMbje9UPTwnW6dZKRT1aRisXB4UVSXh2gsiAYB",
  "key3": "5mBG31hwstV4BZe255K28es5Dd2XLBhiR7Wf6EEkubELw42vSc72mf4dkf7fWZr6R5jJ9sekKBGhTsRRqZvd7dKj",
  "key4": "35EfHA3ZYvLF6fkFZVydAnMkJwugJqM78eRvf9F4zgovZdFvjq388vUmDwQe4gzZxiwHWA9waLq51bZdVRMXMmQP",
  "key5": "4gyyevQAQ13a8GLmbihwefB7HVDZiGr1R2kqFQPfBP5wbwBXyHJc262REhinod2uPNGsqfEM55fRhuqsC9thjoLs",
  "key6": "jGEzxxQG388TWvv7XdraPnmAgRsnQ56yvo2adRF3NfguNvgfY2p6uBuVZwWhx7amYbDAoWkvgoR4tPoVimj3tH5",
  "key7": "4R7ToFNvQh3WE9fR5pYFDKiJVW7M9V5niKEhfGDjUXbpsZNwZFas2dTAZ8AojC12Pp574RFLoGxBRjGRWm1da2j3",
  "key8": "WX3g9GKoMcMsWRDX74xd7NxsSok7PgeK9iSBYkJ5s9XQhonBZGAysAj1je6nc1WU1jTM4N5PThT4HtTZEYaQiXv",
  "key9": "2T7ixXdmXyW7yEF6XpudPjYHdqgVc9D6wSLRR4GMc2hQWYu3nUFtLmTAk66JZ4GUw2CFtWak14QBv1KSphuerbFi",
  "key10": "2QYFQU43YxcLqtnJ1r8ovfg3M2xjN8sCX6TJmy7it92Vq8ep5cPBb4fafJoQUudpPAMKktHtxvd1WK9sb5Ne3Qzr",
  "key11": "3trtRSBraktn3HgR2VvbvjZhPk7RZ8CmSNqsw4LL1uMHauEQHScsNdzcGjJndc4beuETYWkUMhYq3XdQHjAvQdZ2",
  "key12": "5t8qZnP2FMPWLSqCETqZD1bnvajHVRx5udNtQFJXtQzZqyA5R2tsvV37kbCjXnH6KBeHUZZLU4ityWPy1FqLBBfL",
  "key13": "2W7BY9DU71Uu9GbhrGng5UCX5JhRJCit8EneAfVYb6ZdrwdgY9J2JMotzi33NvvymDa9Y6GAGgsgwU3gq5Dzgm9v",
  "key14": "2fwiziSi6xEeb11D3V91evPxzEDx2VyDNvCQtP4S3Fhrpr2C5LpqTxkxQ5V2UeyHqXXKvcaRSNCTxcGM2mbAZ94F",
  "key15": "2DZKtyU3k81bFmVsfqexSEpfyjo9UgYWFjH45nYUpSW924z5VYLj8bP3HHwMgUMHqWUTrH5cYacpSVG2f3PdFhDX",
  "key16": "2xZvEfsEcHvVsruxGDZQAB2WWXqCJZ3ZCz3NygJrB44B22w5ZXsaivoMpDZ6RVypmBqp2V5yFBasaCBxqkxgdixt",
  "key17": "2iUJy8tfmAQN9TUVAY1MKFBAP6N5owVQwK52SvfHx5JLU7Xie5zQwfayXyutsiDy45CNTyrxTLampwR8JLfTHESg",
  "key18": "6D4DrKLrb9VW5q1oEqSzY1C7u9ge765oZUYQ98t7QhgBJJvg4B6aJDb3LkTzACKhGw8SjTWF2SY7GvK84xNinXo",
  "key19": "3WcQeNphT67dQN9V3ciRYxLVmxdP1B8ySPdLqdsR2jzcbQ1m6sAeiD7i9FahHGA2V8Ns4BTGcCPc1dpD7up69joj",
  "key20": "3jZP8hZ3owRLsUvdEDqq5dxbXwCkAtFLw5fWLLBWbPEDSMoEFK24bQvMTkkh8ex8Hw7Ktn6KiKnqkbhEranS1q3k",
  "key21": "5rJHyF4qvCMube7i4253GqBLxU6BZbsU8LK6owp5sqWSd69oZ87oaX3ciqGYxHg8csz73NVzK9FqELKU9UycqfRc",
  "key22": "3qfg43hkTLr6ywBGCKbMrHym25tu7kdUSxTpmkugGFWAsAbsidcqJo81BK5aPrFGqgFEeWgAw4i4ifBUw3avqBVi",
  "key23": "4tuaE8QVus5wQNCf7bqUidcnu1s7mXETQbgF7AKkMfHFooUdqmDNBtRt42XTs7nDA8AycZZGPk7SrTEM5rjqgxe6",
  "key24": "4Z3o2RdS468aFAgNkzexDZQAPbV7b8bc4o394yScALFKf1gGSN4R2YDGvqGXYWRqJ3PZT59PwZ7ksgUZKofVzo4h",
  "key25": "23TK8dNxYp6dFzxbJiWGjiTrEhUcvzKJz4ZoAa7eeq18KHdm7aTT727Y59qa9mSmEeTNcG2VQqGAEonvAomBybYQ",
  "key26": "4iMoydcm64o1aoLbRmMHCL5unYPrcQYKpZrvCR4cqHxkTZUSZXvCeBEYc287zWG4kbkvbC5ofQ7PVudRfDw9kpah",
  "key27": "h4wtomGX4AWGZUCMMAHY6FhRSrJ2LAecuMwBWiUZSwzzTNgNMeRjvaLyKJbw1q4aTLHqjKYaHkapwDo8k68i4Et",
  "key28": "5ytYnnkTeAtPT34HvL2MjCj1oua3Uo7KYCgSf3xNs3XTFvdfQXMu2Vyo4cWFSs9cmu38wRZTCPoovpknG49xLmiG",
  "key29": "5auBHm3iok1Wc1NH3jpsrMjp6DPQLY8c3G497nGJZJaSyr7r21HerQv9Ry8WrC4k4MnKkUf9LsVmMTQFvS6Rd7s5",
  "key30": "TMH1p72GZAZp6ZcQJ211SjC4tAzAiifViJm61sJH9RVPLpsQC9AjbLrCGguBYrw6yL1FAkn6JeKNMcxvnLgi1k5",
  "key31": "4um69b55jLeEU1DS166o6RxRzKi3xnYtQ7iPcmYmxKAeZYjQtaa7fpJpFHuN2Y5DH5xyWQ3m9n4igDR2gAc4ccig",
  "key32": "35eD7iYuZr6fb329kPbuYjo6CmsQG5SsPg3LCyxNLWeoVDNrHppYve6BrXhH5Q4sBSjpYHzpaLxQ762VjRgWFuDB",
  "key33": "4CeGWoWzCbn4d4frGVgvWeQCYkpJtQjEQkHrJfEYF1qcNKL6HFfQGuKNSYXkYutPvzd1VWpADqgv3Zt5D2xzuSNg",
  "key34": "RtqJb763iAU3xQVnZ9UDVqY7qBHBYoK2vGkZTkqyoJBu5P3rALm9Z8UELmBSNU8GGhrE1QPNgWAxDZxfWhDn9x7",
  "key35": "2M9HLnoM6WfWcHdq3rhMPXacvQVkRskXeipgdskoSmW5jCf2yEJieBVHVein3zw36jfKvFxaYBeGmHpByHCRUqLp",
  "key36": "63AztYUMqudXf2H5Aoinv8rb6tgrmqZxA7P18VViJezUgt3Ex8f6xQ8mvvTsKRtMUpCjAntkabxmyZPsYY7YovcD",
  "key37": "5LyiMpHYApYCKU2cxZC4LPu6u85U1v5dfyCWFXb9mfMVM7URWuHyZjVvYaV8qpa13ybg5mhp2pKK6U4KHYFmJWMq",
  "key38": "4a5zzSajvZXx3NxhxSwWhcABUkwHppswCHvCbkBpZHHpSH6Gu1Mqin3XTbgeqPdEUkqcVjzhgQXAfLMZFzGvqnRe",
  "key39": "48tAPiy7FXeBQ3ruQtjgtkS6xyFRqfZLj7zP9dfuHTaYG7de1EkoxyutEzxxfrVwjaEg6ChWLNgy2jW7NRYuks1J",
  "key40": "2S4Za5mJQKQf6bs5YSKKMVc6DU9fkTKqN1PtqdkHN5TjhtVsEm4n1k4CJZk9cczcLTbvkjVTxbzdSNKj5wNfzRgk"
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

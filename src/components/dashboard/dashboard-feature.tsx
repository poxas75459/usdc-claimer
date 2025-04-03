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
    "2VvqEsPvkANC2cFQ7y2FTCCgucJqL7qztL9y9cFQuvmBgeSVKh4DJcxyhMvsqp8HrMV4zXznyFBG5ntq5pn2dyLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647mi4w3wxZidxmXJXWFfaT5xSVCz7Fz2KGaVStSvZ22yV7XE2moGgEj6TYZ2BSM4H3H3KVp9L314aNWjkSDDVfP",
  "key1": "3RDiKSqWphMmRZ4dWxT2b3BTsuBJePeDLtfjVLYdeUh9PomHVnqV7PXd3qjurFWeFQsGfKug7yV7zHSFYSGQjYS",
  "key2": "g9SYNGxoPNVbgwzYX1CFYrCkoKgNbGwym7YipjwHv6fzaAhJvF6FqWeWZojcwgBmscDfWrNGA6oEMLLLy7EVtjC",
  "key3": "2wxxxoK1LcAuD8hEf2pLuZNcmhAHhf9nC1Jr9N7J8oY5TB3w7L9xedpZyfKSUcdWFZYAZAtPuvzgH4j6MHQzpnmH",
  "key4": "3ARCmQkQc8VEfcQ3iPRfEhUJQD7SJMrtrtEJ5wgaUq3pWY1ac1YBcqNmcRVnYDMpUijAuUtRH94BAXUzfULZKpfx",
  "key5": "2ncxfWi7mzLm66Pus6J9fD88fmQmW26n5DeMvwuWPApFJUy3WQAT5cZdy82gRFEVwKjuT1cCiRyHMeyVKjm4zYrd",
  "key6": "wTW1vLeb6WXKMFwemLxtCAAaiRtTeHANfc19R37gEKRNZzDcH9fLhe2mg9mLAbi2YtgJhNz8xx2qcMmMo8nXKrf",
  "key7": "2FAmPBgNDoaBQZrkF9EbLLJf1wmwL4nk6f6Rf8JS7uUP73FGq6bwQv4BDFB6SPUc6UpRLxPZtH1Fk4rjMCumEMXu",
  "key8": "2Zd7buPK3vapS8vnQNUNWmaiWfefaDp1BJUQB4zkv9PQZqM98X2vtpdceVKnCTSWtrTz3DWHVqEqVPTPq3hme6Gv",
  "key9": "3gkr7nemBkNQzniK2iQ6J9uvABZnr2xpVwiMGxTpS1ENojA3jyspGYFdfc7aKxhwbYptdeWHKVbrUqUCewbpZVHs",
  "key10": "5Y1C7fVVSbme1sn8BWkG5QPynnMj6yT8zWsFE6cuxKXZnLFWeGGcnVsNiDMXEvv5BYPtjcu9WjWfqoVG4srsvk3T",
  "key11": "5Fih1EfXLD9qu17UoieKsVFi9DKGwZoDRRGLJ94buGRLhYDpmmhcNstrQZLqw8nfYg9dRyBmzNRepZoFD3S2BZ98",
  "key12": "zLfScz9DtiQXgm3KyFffptCoogPHrN2xsN1kH6iWNH5oNCf24w3D6oUcv8sfud3x8eWNNGD6HKzQbQGBrJtKNgD",
  "key13": "296QBxh8kKkv4NL1PpMDkTXJ1d9Xv1HaWe6tAEPYbBuBy5wqWYQAjHqkzttZ38pddhSgTDUtue8U1auGj7BHfehR",
  "key14": "53Cnh7wSd6Cd7QjGnXGGqqB398HwRvFyMvS2kGNwRhg3JMTFtyKxNAAVmNxpLosQRC8Bo2SubukeZALH2Ecnwwek",
  "key15": "3ZKLtt9im9uwVV5yKssjqHa9JLxnMh6ExPiDzM6rymgS3D7EnmnsKTBWdPd6kUdHkXy8SeMVd2fYUwxLZHBXCwgp",
  "key16": "2nnNMaj1UAkRYvmyuw9uqytWCQb5x4coVWa7BsLFbw4YquEuY1BrQJkdzsDh7bGyampun154zZiVGkQeasoYfdjF",
  "key17": "646pePTik31gc2tXtRBiZM3enS3HmVP3BoviuSQq2r7s12Mo9ENwvNeUFrQvjL4Cyi3y4B4GWmDB9Ev9GWCy8PA4",
  "key18": "3L3dAEtzMsPJZegGya1ZJ9Cz6JNw8Fv6PJC4Vbr8xwupMGkj4kFf6Ny3uqUtoFA9ztZUnydL78KtcWkGCg2JVcca",
  "key19": "2wdiGBioa43y1bjJoZHZpVVenM4LUjmvUjaYVQMnkwiVkJG2UCQhjoGDWnQXLi8QHyFWL6d7GfDgU7xixzjVCawz",
  "key20": "3FpqfSohc2iBNJsLbx9PgVBLfnXwWUNRPjnknsxB9w3kBpdAEsoP52duhp65V61WZZXNCEE44UC33AiafpgS1Ubr",
  "key21": "QU9mRGn3CGKG7YXQcLfv23UCxXmQEyavS1YHUvwokgqTMK2zsMQ2ND6LXL8L4TSXdge6wqhdFACLkhs1TR9YAU1",
  "key22": "623wLF2ZCLKsUqeHQF4wZekcrH7Vzo5ajsTror5VfAv7oA4D9JeV1vM4a91rkQb5Mv7uP89PuWBh6zo1MMSq6seP",
  "key23": "5Su6ePiWz1eZNT9S4kFUSQmQgxGsbDmyvKjgna3hF76nNkGikKVg6ASn2yEH4dzhMV6tRXwDacaETrxCtPXkmLe5",
  "key24": "5QEKfXJhaykbASPXLLqZgP1xcytmxNvsfPqh8jcJ3nzSb5RtsdY9M3VkUv8QrG5Ck13MXuzHMSJvQLJT7njVkLMN",
  "key25": "46cBVEA87yKhZL1uAnHBisjQwTirJ4NrWYJALSXoRHpKvxuVKBMdMwjPK7x5zm5KTyMM7XD5p3m6HgWfL8Wybu24",
  "key26": "4eQsyMWqMVAKpjRc4gRgAZZSUJheCuMiAKqMqe14qpBprSbtVCCemXVWJ4kvvMrK3SX1v4c6RxvmWUVBEMPLdCcf",
  "key27": "5vFhJVqKFofYrbo2UiUGLMnUuijgCH3tYuQMD66ysEaz3n8p743BoaTaohNoFbKwuHXPEWJZMnfYHG11ZSEciUeN",
  "key28": "4LfEzG35VK4dz3f87vSvDy4259r5koiFhKWTom9W77G6LmZfNVmh1tiVdwrpvP1cKNGTojhUxKSeBxkLNYYqTWmi",
  "key29": "5uXAe3Hx5tnK57aHVqawQC8Z86B3vBKSRWKgfi8C5CN3WbREA65txR9Bu5tsMsrtFU4Cd9RyhkuBin2Z8RyNC9xN",
  "key30": "67mq5pbT2hB3TRhBzGK6DQS6eYXAffQWvds1J3E9LavbK93QmiVv998jTQ7eutqjdpGTAbBG4DM9BHzhXb1gRax2",
  "key31": "4XHqkzLxhaPaVeFs1HYPqe1aXjAVaLWhKzJTsEhTrrgyfKZEXUNzTQvawcCe79E8icT6REw8sVqUrpAjpQDLg8pD",
  "key32": "5DBEYAyN56BzJfjYny4caoHkBKFqDkB1Ps5VwVgN9jXe8LoFG5f6hsE5wUhaEvYfxs3FwdGabUpXhTDHkJwbZdMe",
  "key33": "6wmRshng8bHTHWefoHjwSwsHS5q9dpgRQpi9MzVpHSRFteqArxiioqQmXgDbUj1Pga4bSbZ3J81Vmrygc5oRg3k",
  "key34": "2mLA9h3yqJZaMRapoC47YZRPeR9nd49DRemnk9HTudDqCakRkp5VfN8KvdUCUgJe6AbhGEVJCWEzX7wKgzqNKUpf",
  "key35": "3D3pjm659sBEKEZGF8girPYU8Fz1CoNFWZKbhiZwm4ftXpDNrZs5STQ4VNguB2XuUrkmyAsXyYDvZ9v5p94XRQd",
  "key36": "4zYeSta5vuQK2MfFj34ZCXF3uEZwkgiLsPR6K2QaP5aoH63EsqpbyEuT4tAP3uMYnGCLKmb7xmv3u5Rvffps1nvQ",
  "key37": "Ui64B6xmebx1GLEGZKR2FKjRYvwUQD73PtQB8RuXDWgaxHhu7Nc7vZEQkLbV5u6XtkbT5TZ5tVqQ9CBRYUM5Ro4"
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

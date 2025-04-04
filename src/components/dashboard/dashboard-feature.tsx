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
    "4h7QJ36TESChQcLU9VYo4BBXtyZcgVcdEQUbfXYbJufsQxLR4oj35NGRxnDVPF5VwcMsJhnPwTLbdvfTLF7Pe7Bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4geATpqnGWNk1r7zbX1U6NsqL3wbQBDE4CRyx6eqGifDmuxZH9EgYL7KNbTi7fJaVhGBan6DxwrxydvqCqtd3ZnU",
  "key1": "3Egnbb2jDmsF21mq3L4Yb6vDdWHbnAuaJ58whayM19K3kaexMEyH4F8dTNv6kGX1niyxCY8rwJ6TspjrbGbXBMnT",
  "key2": "33TBt3E9mdpFiTgFkCxwg69HyLaib3fBJ4yVcxEuWbF5qvmztsiZJeAuEe8Km9JW73qk96GEWXmxFU3opBFM9k4i",
  "key3": "5ziSdVv9DVXk9hj6axwyuENEC6NK2DQTRkr9qFgotmUdKhPYgK9f1EA61uswSxcT5ZVvhSSe2WAjAbTiEVAhm1ix",
  "key4": "5A3Bk2qDfYrLnUAw7QGecD3z3PpHP5Ff2X3Hep2NvWBSbzqTDJi5ERJTFiE3FXDwJDEtFGRCpx9okUdWQBMRRtLy",
  "key5": "4N7N24YMKqskc2FfH2HhWYYLvbMwX3VvmNxrL8sXCzVwaET2KeHQbZDjtqBhc1zGbbed8uQZhRLtdWSj1T385one",
  "key6": "3yV2cgrDdLreBPTdQ34ZHeJxCWqu5CFxutgypa8ri1RRHvCvkjXke7Tk4kvXojcrngZuaT6ckQ3xNyYVcjtjH9gg",
  "key7": "5fbfGuHkyKmMmC3LMoBHNsnBi9HSJx8xQ8GK8tTowv8Qqmjrt6tGHQwBWz9Csgp6Beyx1RyqjpMXMm1E2WdBkfkH",
  "key8": "4qC8qWRGVhCWKBDTXnrDuJUpxdE4WAW43fejdkP2gCNAZArxtMxCzTC1DMvFrWCYJXZqkUe3hww5ru4muUd6QLFU",
  "key9": "4td8Yq3F9QY9RRjPG4C3ufYwH59qDoJ4WBaDuBNYAKvwavpDfw3aSqGx3nbWqwT8akT8WSXvLfLCs4weiyenfXPb",
  "key10": "2NfQWxQNYQGEm58iTM3e8CdnDFqh8WdSvAk3MqzHKhvaapb8TG2mei7bt2o8HMJaZpuRusMuYTJHt3RB3tWxP8Bw",
  "key11": "LBsCYaKGr6krHLcij8kqMQs9TMKAaRcXJmHY94C6ugD9intaDJLwjEnnQ6QmN2wxCcMzbjzCqUeKUK7buR2wayT",
  "key12": "5Vg9K26WeF8LsVzukSZHSxN4FTpVnL88QtkMZMMzoyHcy67DWXt2RCbgAWq5bXnakgbJbekPdw3oPVKzctNnetUG",
  "key13": "22ZwS5pFMDyceT9GSMqHm1xXe3f8hdLWYJ7gedna9qA7b2V9kqj3n8sDAxrWZXCM79wSqq1cHWrrC4azHMyeetxU",
  "key14": "5zdMHs7uDMVnk7Lbgsn8RLvxJDYWYVFShZnJDu9RJbUvNgJKzUymBBVJT51dPxMVqq8gvdCwKr5wZskpg7P9Zfuo",
  "key15": "3Q4ntJN1sF8552Y8PyqgobfnJDZ6pGPk2VmBkNNy6mohP8umbk6xtZk6eyaH9sNdkBE3kjx13EiHaGKoTdeMJEB",
  "key16": "2zG5HvEWR1mKnSbzM6yMz4XnbktX2FhF5dcEbF1izyxRt4MchJy4fv4FTZ9sbGg8EAJkrJFJirqgrG6zcPLtvphz",
  "key17": "2CpqF1WhLM8kjtx14iqo4A35j79pGySBzDsNr8aTQXLytMVN6NcJqf8kvYFi44r2nLy1DjDGEAxyWvUEevxwxwLo",
  "key18": "3nqY7NSxDZMe1EFyQcLqd8wZQ2cVwy5YiZ6xkFgtnhXtLgcABS8NgcH3YeWtRg1e8UZEbgBKGKr2CGMXLUcfyyou",
  "key19": "647dgTUfTkZAhP5u3y9LhPTchVkJQqcoiNoZzeZJ9QuUYS2mnW9T9QNwnNf6TufoQZ6VePznBCxhZmpiQkP4wMmr",
  "key20": "3XHAEmt4fcStHiu3T5K5fpxMM31E1Zw7r1KN1YgqLWjTxLPYsFFCL8QjPgZGEUkuSqgoab6KmH4bNP5xqM56Q14P",
  "key21": "5K3cKyX17xuHCGdSwy3KWrQV7CwJbLZNoi7qMQyLVVU8ugtc9Uz2uR5rzMWjegU7ydweQ5dX81KUy7hMURG5GrjU",
  "key22": "ZmgjQwdRcR3iR1cvLVZYNKdMNqAAsfdf3pHHNNkxpfZSNKReST3jpnbLdUMuCeXmVX1L8W5xq4RC6juuxphZ23G",
  "key23": "2bGxJLZDKfHBs8zvNcD2zGhE9B62u4qjsbF1BLQc99b1AYYw3Qe2k7YPFKhhpEo4suYYvGTwJ9xYe2goM2CAF2oY",
  "key24": "4VqNfyDg2QYafkwJ8W4cJDGKs6PyvQ2nMCdKFpAoZ3tuLvgcT8G5exxDQmdeeaoUA3digfFDMuqwKCe4ncpZnjj",
  "key25": "3C3zZKC54Bvzzih5MVvasMSH5mzCtMyrEiCyqh8qgMMXiF6WwkPsVLBSkYutGHEVAotGWSyqZr9DViEuMrXNN8jg",
  "key26": "3VfFMpvyqRwNnUhw1BQywLF8vmkA1hJNEZQFbtwYNPss2vEg36DBCqBEqZVaixhAVgQWk11nUbTTApW9aE6WTF9N",
  "key27": "5LkWj16ZrRCEQbsAbyiHKCxr6kUgarDDiQpfPfw4ZpALK2tMcNt3eNQMdgUYKeCRM5bLxo9V53tsoZAoGAASmsKu",
  "key28": "5n7tcjqHKDPRoTHiBf2uJBxs73GdC7vA139RzwZb9VtWEJhM7V4qwmcrK5GZXmc6A285t9vjSSZzKyfFRrVgVdnH",
  "key29": "t2qwfoZ1cCHJw5CQdCXvPi5ayeHWMkK4TS5nvfz1ZAH9h47NpZJ1fJvD59fnSpisZU4CgVjhX9FA7qpcPv6hdVC",
  "key30": "4T9STdnRWChL3Swf5a9ZvCmVxktVDDByF3578Njm1iBnP4H52Zfb93JyBpeABbC6nhsV2WhjUMAdVRKRTdpTZGRH",
  "key31": "5WbhwRFttaN4853sTu9RzNZUijUkYa3Q91MJcQ6LxoxemDXbWsRJtgxSkxxaThPkWE4hNd8mu6JdcjCCy4K5H6Ns",
  "key32": "3p8Y3vnzEcappgrtf5qzEwjqUnunAcyYyTGHJfpGAzvqMCTfDrSW7Wt8EtQu6ehwWVk3eiwYuLUjaWDvKyR2gvdR",
  "key33": "5mg8MfYEcWzzqsVR1EKpxDpBNYV6xoQaXyeeTwH3UuNKMBdVpCkC8pWqStScAEV6jnGDisesup4WZKjEJdLGmnqo",
  "key34": "AVfEkE6H7vhudboaKpKb19Q8ytGmF255gmjwHyMxnPSQ4vq6vPPv5fPerJyorpmkLbz4QU9Nanx7ckPqhPMXr6g",
  "key35": "VCrvde9kyWT2TiTtyCJaUnzT6667VJxqTAxKnW2JCdbQyt1tYuFtMcWBNvnjphCXQ5MNo87pch8DvgQdDs2JHHv",
  "key36": "3xC4Ps1tLdSvEHp9pCdPGA7wfDZGxRd9FDYWA51gRMPs8eN6jWQghJThb4KbfyQFc6d2WQwuPriQ1MtvKk2xjqDG",
  "key37": "22CSpwGZgymvk2mzkoc7X5KeeZxC6moX3HRWmY9chPACodAiEPVseSmCBykkXT5TAf1AsiKTF6izV5FsnSt3PNMh",
  "key38": "5fVNi3VV2XMEx4d7fbUFYfMZdNrzVcunJZTcR78hhhkPzDPoFPTMU1wpAb27RYdR88QXCitUg9ew4zM6FL3ynVn",
  "key39": "67BcY7NWKYmyyuUxug1ZciyE88kriuKtJSWGGCAqPnh2eKs8jt5X85QAfHKjs4G3BM6ZjzbRxuuo7HSA7ZQqKy6T"
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

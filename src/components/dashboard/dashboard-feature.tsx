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
    "3jrJbTtLeq4U7XbY1nnoxMjAmSLAkqUWrQtyHaoLVuLndTRwL5wH24VDMYfQHhWTYhk7fJdzWXXxxuKUUHMBjzY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d3ZnAyrXc4zX2PmYdRWRqUtiPdw3zDoXW3uRwtGHQ9mfGSpYskL8L3fR7HSbd6rdLhGZH7fxq2FNXNUhjW8rwCy",
  "key1": "2TTgeGXG348pmSiwGQXbZrRcmSS9gXVa4PiXqnB2q1BbkUFJ63GMDi2Cf17mGfxZ1BPXd8ijygJenPkyhDbwKcyN",
  "key2": "D57HUnoRiNnxZvJDGdmjaowRfnH6ujfpJKZqCgG8wCF6xpYbvgLfbN1zT6eRHMWgSYu6GgSWsw1vccxFnBoKmP2",
  "key3": "4yzxLow51LEWiiLvBNjAibCnRJ7FRGGpRY2pq3FgBnWR2tQaXNVWWBNrHndszkqo2mDhaf2yH4wfXpDxT5SAQd33",
  "key4": "2y4ytjCT3QmvidyYeQcbKKp2jYraUfhrmZdsFRjKrrFVTeqb5YwKmvVvPhV45iNwNFyubjdgeRLAdYD5um2hZxXu",
  "key5": "3bcrDqboJ26rnPPV37FnNLJFc5QnpAniyLUoHBdB48W1YtWcsV9wm929XvY7Lq7rEkbH5QX5o7FJb2kaE8UEx828",
  "key6": "5huE6C5pcpFyM5tXaM4KF5Vh6oEKcE67hNYthkhMV4ScS6VCmfB4SQFrh7QEyR7bzdDWa2nPy74uSz5zH289U9rC",
  "key7": "3gmaAWLTBYQ4yziKRtHu2Fg3vgyfNKYwpQoM4FohxF3ZfoSAgmzKCxmL51RrpXwDF7dNDQKszGFrfDiDMijZub62",
  "key8": "24fhUvDTxcVXhsJvt63zZeufMBFiNzenwQBNeUR8M6Q2C8BdwSCiKw7PhpWYHyrP9uzCwFufmynP4e41S7wnnF73",
  "key9": "2QE4N83LYMpsVsmGgzoUnmU4NqzxCniHkdNKnLgyCvkrC2VWdQhveGouu4xiuWUQoSgreJpZ3uehfatXGKKrxbFL",
  "key10": "46mHPx75U8D1ocWHCPnBAQGFit1KmgECtYu5UAezsYaDEE997cEdTky8U4dptuxTStRawhwAsqzQga8B6vZbieRg",
  "key11": "5X6Q5RDKQhUnRNwMikpBpg5tALL826kLJ4nJmkM5njR7NDnFRJBN7KUM4S7fP1qoYjRa342we5BqmaEnRBdTxNp2",
  "key12": "2T1b3NTfGTAFU2BXbB3aZ2ehLyNNWsvGm4fvFtrYs1yMc7bAUzqnGCVy9qKky5MVWfdpbd8XkN4SBs5VUbTjGKLm",
  "key13": "4jRSe8FCN5NPEUSZtNWm1y5fBgGzKGUhv5FVWDHqM6HAZDy4bgzFg6PdyXSzR3akXKg4z6c9pbD1uGVCkovySwrQ",
  "key14": "3UHUj8iH9sX6c3jx6DUp2SKfPJxsY6Uyuv1qrsbto1wn3xysgdvGo1F81DqrueUSngVW8iXGzFcbrFydUuVbPPaq",
  "key15": "5bCSJqMWkZQqWnJtJkeHciK3qtDk2i3rdAyeZLJN4bPQvkntNrZUcwuoHgGZMouKRhs3YAs9fsV2sp5SLR4cQYBk",
  "key16": "LGHL5xQmxNHvpfAPGHZnJxpVTuUmC9LqmP8oSKW4wBqkXgiaBby4DtG5a7hTcVnreXX8L8XS9soxLqh3JH1Y8LZ",
  "key17": "5dD4ii7JqkoM1YUMjotGaQWgstacwXnFkFKj5jjZV45aUw436JoGgeFU4gADP4UdV7savhkVVjkiZpmtKJN8ALEa",
  "key18": "9nZzffw1978x42tJtuHjYJdXvQy8EnsSm2W9hEmGHVAw2PG9CnxsXYjoZBmMT7N2gVW8Ns7wafuS8v1g5ipazrB",
  "key19": "39xk7H3xaLaYTpeDTig1dHRPGyNdcyBvxRF9z1oyWUyKNEAV8Vfg9t7fs9zvu17PFHyXPu5HXY1rBYx96RsEGh4Z",
  "key20": "4t2KFAHQ8CQH3d7USvahJ54e1qAAn7GddWWYvjoWJyxTWRWdoeB7y6mUWjt3ReLG4jsaGoBCJv18JfamF3Q1KJDR",
  "key21": "2g8JnTQNfYMKp8tMQdaoHZJcpEfCbda4MCmqnVX5dv2nBaQx5JzTcGsSN2kKVbbMwC9zMASHE6T2UJDQswDuPy7S",
  "key22": "4GxfFXNXtD5dLsKNTvjn83WLkQUe9avXn1Rzk81mjAd9En15DDDGCod4J9TNX9r77DhpQEno7Z9X5hCSKQFqjxar",
  "key23": "2erxp163ntoRLozMtCRf6Wdj3j9b8PtXjtyjtJh4Bkwix6LC6JYG3xct3XMNeC53zmBUUbqgsfs3rGYUg1xvXqSZ",
  "key24": "2nB6YsinntUfKinzYRz3UkfRDB63Jrs6aCW4jQ4L1uFmYSNSUAfzWZz8wgfWAFQnwd5do2NUYyfiN8UzxNtadmBD",
  "key25": "9GsTy8uJpBKeaeSiJ99nAdG2bGW44b2Cnchf3Gq7Lxjg1VgMsEzqo8vhUfYVkko1oh12D5HoRiLqXwEB9vKj4DH",
  "key26": "3pi1JQ3zk2vE5GkFnuLVVNE6GcEgUEpZTLG2Z6DTqDDnhSFJvkCcCR3xeKEQFnJkKd5fH6Jz2zS9B8u5frmMk5Tr",
  "key27": "5Nax5bzi3CxSHK1GnMuqEUo7PU4AnEr919KgWj3huv1VVkVNEtJbC4DqkS9x7j4eFScGwku8Wg5E4hUSXWAqYrK",
  "key28": "4U2k4G7yQzgXdyNDtAyLPv7xUuSLCFLnQsMRhCVScq5Cnz9yAX1iPUEFbYHQqPEuMDZpotXGxVTdW7pYdc7H1VkG",
  "key29": "4tGeTvsWcJG5NhdhWMGjJDwXwL7rfSquLgic4nfQUzmuv4zwnyBj4HAuPRidQ8Xk9WsaNKdPMSXcJBfGpWheNQe3",
  "key30": "TVHnKDcWPdQrjLLNX88dd5EDMFxjE3fiscXox293ueLh5nmHVP5VmTrSax4vyHrNVA4Qo5hXa4brNZHrHgLE2Ls",
  "key31": "3gcV3YCRepT421NUL8fn3baqHaDGoyS77XtLvF9JS3SE4P9xoSrdcTi4MiyyJP2i4YChk1KwqtY57MtvFYQhFGZ6",
  "key32": "3q1SKF4LumuA5nYFHqFiXivQx7xa92n5cQGCEzweczzQC2nmhxf6gLZYeC6rC2tfQ2RrfNxhGX9GLWCGTfL76eya",
  "key33": "5jc4ZnuUdxgF8r2PipfUzpAAn1t5w5pwrvkv8A9cT5zF7aqAjM3LkDLYRn2L2DZ5AWGfwKMa4QymRCENFgqS4Reg",
  "key34": "wGfgt7X2q5N6gN6QdBFhyBkW63Y6VPgYFGuqoRnspQYpALULUSPSjhy8Y18sSCUJDsp9cY53EFifjpBeAPW3Xxn",
  "key35": "4uTNAudarN1sseLR8VXFUYsdFaS8Y6nqgQrt1TctESbyxq1Y9DS9E4qq4vaDLsyHSJA1EGjaq3sJr1BAcseVh6r5",
  "key36": "5hmMeTW715DozqvvsbgCesD6qxudACjkVx9TmJH8jHLboD2RAYrWeoPr16QsTdwfMBQ48VTGgx8tBp1bmvP88kL6",
  "key37": "3t4LoN7b92TFNKrTaFUVfoZ1sxbBx8QkFrQaATixnR6LpwWdv3wDFjHvxjkMGBKDJXtNaj7ZUFS7jFVUDCEgQpom",
  "key38": "2gR8SWHSSXVBH4KnEEQFQhttWmmyRgYZHj8fDrrr77AcohoQAZrQa5qXtKsa3u1tqGGyf9BhtpQN2BULtpkdapX1",
  "key39": "3KbcZj2qVykhwFprhAGGqCEnrbaD1DJQi49QmNtwT6NUfRqgwotKpt4Yf4xDbPk2VnT5TbD6mPvhq8N4cw8wzBg8"
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

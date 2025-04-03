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
    "2eWcV59kvvoJjiXPthtA5yh5HzUBo7MZipgBb6YwgBE2w9FPrGhjA83q2cdo4R1tNV6YKQuFTTnLPWv4cnzUnFKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDhxAMZWZsyYWnYjhMv7NALzgkS4JqoKuMueSipbM5WgTQr276ojDxfechSssuMEv4jkJN3yRPt8qnUKzRkNL5b",
  "key1": "5jtB5YoWeDLGhWgUNNk5mrUFmtuoCATAKuh3yoCidi4tRhERkWmuFeBtoxpB3RWVaLzH7ZL23ne7RnMhQj68pP5R",
  "key2": "2bEkuunuh58HEqF4cLiDQ6uDbWjQNejPfbYEcD3Y8XZUuk9t2bGz1CUYPtcsFZ9b536hYLrRuD2MeJd4o6KuDC1J",
  "key3": "5XqbBeKiEgmdeVRRiPU3t7Pa7rLcxRLtFXYp2KEi5QNhLbysWCzndu1vyHibt8G76ko7KqMX9gxXNSJkbUEXK1e8",
  "key4": "58FUDDpPQHiMrzkuY76Kzx3fiUNqRtqb76LKcRkJqHQqK4ZUxP7WuSNqPeLLGLw2oYCCVDWcP7FJBsmVhJsntMso",
  "key5": "25XGMHUTzJfqDai5yZHKaKrmJ9veiRwxkw2wUDfkL9JopBrxQ7wonQW13hy8vBkpryDZEt8nMvdNHsWAJb1finhu",
  "key6": "2z7biYcEEUuVxLQnNuzDrMU6bgKsmC9XjkCJybxJ8nAVXot1syN1ejkAv8kFtuyNXmu8WLuQzqkWAv7T9cwt7Cjo",
  "key7": "3xwghQEzdS9J2wvWSraJVpxJdpQrV7oo3woQT9BJDRu5KdjSjFs3RcG5ej5YoJ4m8UpfvNGQ7Ky8bvnqMxgTZMjf",
  "key8": "24Mpsb9eqGzaNjaRdKCowMcV9CdawXXxFR5QHTBtJpEvokvTHgCWyE9p6ZKZabKhMzxBE9FqbYvXTNXViR2c9Jyt",
  "key9": "2qzb7mk88kQGpjTr5iq8FmQYVDyhoGK1J2DQ7GgJetKr8jkYNH7kSS9cJLUyZFBXky2pnkbXguKZBgAP5zbTxTNq",
  "key10": "4QfAkqazZqh2ga6qvWJpMNzJ4XWVHeXv2VXi6sfqRHEo7GQgFBLrXY1DLwgHJ1FjxVXvgSbDwHaEY8DX12KJQ9LD",
  "key11": "AtsFW8LmWyg61BVtXRM2UZVqmPoDNRoYLTsgzJYhCYnBGKJF7szr6dAa7sYgHqqNVurHQnheVffvcZyhVEQx7iJ",
  "key12": "3g7pFRawukrcheAUC1B9HYhBh5Vi6trGJccvNviXu8Vuh6RQ21wkFj2MdDaG93JkFpDp8EV3wEMLhumC7dpMmghn",
  "key13": "3eCCzd5BeBDycpLGANribHb1rNBdLNnkBgPMipLNv6AnRREdiorubFLp6GX84LRriVU9JG6Nsggc42rzGpXq2XCg",
  "key14": "2Rww8VERJtc9hPj2fRp7tkRXjLo3J1Kc8UiVRnNUsfaKeCWg2VZvgrVYrUmxDggf12YpnmkiXWLHT1QD1tDH7iJX",
  "key15": "2i9o1uWzdRbem4iqzCpp1BhB2QywSh7J7rcBE5kwR86ZCQQvWd1cWazRvvr3iWm28ZBuBNkzyJytcVf33PMwRhwL",
  "key16": "f13TivYEmNcQuKk4QuuYSDGQ2DxkKwGxrVnvT7PdNkkYcGP42g6Mq5MwMPQcrRDZtBQ7GTwwMbkAB4H5D8X3BfN",
  "key17": "2j1yhnDizuZuBSdwQPVrkj7kPgnucWk6BFRRYt1WHwUXrvMNEJcxERNjdA8v3W5B1wpYjfJbxBSn7jVBbgcjcHy1",
  "key18": "4hJjoAzATrbnYryAaP5y4NDVBBMtsepdZTUerpipt1yhVAqgXo4XUQX7YGjaEbffKngPjPAPMEGceWsgWvpi1ZNw",
  "key19": "5T4vQuDDyeFuZqNcfPsWiVyTy3kJppsVuoSyE29Heen3B3Z6vvdoFXu2emHj8kxdufmXnk45yVFTCJ6VGChzpo1R",
  "key20": "JzpuX9gb6Ues9V5Ffvp2zMqDHau9jQbyaSkQKDGXAveExntzZkvAuhzf82aTPGCdjzETsFnzTqCG2Des2gv8hrJ",
  "key21": "5iTRUWAv1ikxDeepc6WyCWdocSKF5uQvrRzs4SLtUPaAd7j2iP9HXQAkFoQUDTZQZUQb3ud7x7mUeRq5XnMwWrsQ",
  "key22": "2cuuH1NoefHrhNPEa4J6SYZYjagfPfvQ6sFA9BW15kULhojhtSGMBZabTrGFXUoKCEzf7S2NPUmzFhmFKJFmrAYU",
  "key23": "2GhWjuXHXbFyRW4GEt25xcLhxJEjrNrkgJb1Syx9BvZma2MuHN3uYJXfgcNPySvYWGd3JRs82e2PTwLM4z2cWAsj",
  "key24": "5ed8oeP2CYoAY1yfE6kzdvMRtrUPahNe9Crj7GkUiHUbPdbphngEcXNMRfD7DBgy3WHnCHPBAuGPZPZ5VPRQqRTg",
  "key25": "2dZR3FG2dHnbXoukCUC5hbaxQeV2eigwBTzxRRjgQ9Dv3RoETpmpNVLYBp5vfhqzMgDZXNkFZgWYSebkm67sPkpZ",
  "key26": "3fqKJgjfVy976y2Uzn3UpGWokixTNFKHrsTMWJhZ5FGhsYnkX6AoKRhUPhh2fzCE7ovpqfbqvvKJZMnS88KWALNC",
  "key27": "a8cib9FUJp6Vw99ibHt8ajKwm7sT8RrH8ojMXj6AhaUmkYrGDj5DnkT54PvVze6n1tTaccqV9fCuGWHi5bAFpPS",
  "key28": "5Z8ysbLYBPYEmy8zBmWvwDtEtgqNQj7J8epCfw3EumtBzjQhyq6vski1cSN1Vye3P3vn6zRNRJPgkR4UKi9nfYrM",
  "key29": "5B7CR5ZKJUFqoh9CUevkBVEF7QLQQFNP3y66PMLLXwdv8CpiiXfpetcEbE9w7BQCUeiyoGGA3wvvctrfYGkJPMVu",
  "key30": "5kzPHyxZadHba3iTEzktSBsvegypwxXZ3ebNkLemQ8Be7A8gHFGH3L5nR5mRUSC1sjL1Aaw8xzv13oUchraRvxhX",
  "key31": "4vi61ERe75UkRPYdt1f5y3Q5B7wsj8kupEmiEtv8QkVzeSA4bFsJbzj4dbwFUDTkRi3SXQTjFiQFcYqhTsFjvvnB",
  "key32": "2PDgboKti1CctGkf1JNHDXHthtKK574CqkpAMw25LtQvzX3cEtShfC8fRDPLoFS2p4Jx8HAtc9k3d7FwxPziaaDL",
  "key33": "3MfrYNZso1jhLh4mr4v8HDDRHoXNFAKSaqQWRVCgZ3Q4pDosHqcuUqijWQX7HiZ5hYzrMZauQVDUax4LeeoJKbPm",
  "key34": "kcedoKvqBFS5Z3KHqYb9Kvx5nghYi5Y8CCqi62GDbiAfV4TuCf95PwENZ4TAsQtDTMJLDaemv2uEeCoX5YEWuXp"
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

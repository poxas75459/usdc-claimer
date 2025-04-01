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
    "sUEVezjeZRxLUN7JRS2WW7kMGofET4ECjy3xFFP8dq1SsZYgrJAta9xGVs3AnByvzJVUWstGzhiKofTgGUadN91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QK9SWm5eX3cihB1g4pRrTdvvYQs7yMRqnGbKF9eH33Xs9GRYeMoyHdnTPZ2S9H18KjPaA2npc8qVWJaHHjnD9kN",
  "key1": "4xgvRBo1rMAVBoEvw9NZGkkdfb2kkzxW8i77axvcwzZqYuwCVZtwM1yCUUe3MWJw4uNyDQNsHRNqesGRMArookyd",
  "key2": "2F2mtgQ6XDF8Zt3hieF3d97u4d4MMK64D8X7n2jrbdpRE8yhCa3TNzyKqABca9HqVKQxLK4utyMqV1zSXFYQTco2",
  "key3": "4KqrjZp9KPn6tzFGJRs4Fb2ejyufPsV9DdBa5AnG7iw1cjyni5rFigFLpYAWFc2nj8jTCtGA3PRMGteskbRvY9Er",
  "key4": "2vj9yZoUtKZiyXkVNaDTb74sPENHu2gapAwN9E33KqrbiGqRCUorKfwDaMj8LdrKfEXvDQ7aauKiuSi6qiTvLgLW",
  "key5": "3ELF8zKrJ37N4YHU8838wCaGWkn1chtbiGgxhaTmUNgLWwARSpmaqVp4DjBxj8x5211mQxzu9Pb9BSbQ8cq9YgzY",
  "key6": "xxq5pHtH4Z1GfU6Cjyh2HkT4bc75YdRSPds1Zhz5cesbaFjDX6dLA849yfdUGTx5fLgXdLJZ4GRKwS41eUDMhDf",
  "key7": "41qk44JtT3TeqrUEAyC1NTcvVDRAvPvLqtzUMxkimBhBW3qx6rJP8NvZaPKbMP2YTPBkRLbTzttvAYoq3Dnt8pJ5",
  "key8": "4a5hUnu59cYxnpJpSPovqn8yTR5YAd6zbnsBTvArAi8GTzRV1uv2diKCtCgxSna5S3qGcik3EFjbaTdGgagzZ4wr",
  "key9": "4vVW6a35dyTyeGQ8K5gFAb4DPrgn62VP6CpcKReoxduLNDjE6RiEBHsmp6jUXJyvbPxTVYKEthehJJbqh7Ugv4DV",
  "key10": "2r5jHXqF7LNTDYmjytR2DVuKbnQJtZ4azg4uJQY7hfazLSyFJy3XmxFKGaRLgMJ2Mhjxwykzy1XwjW3DJXE9WrRH",
  "key11": "5xKPBGw1964z4NqzDhcFn2Y3osRLwuhThPgC2XX8Jd2d2LQgkPNy5WJjjtFgqz8F31rJ8DQVGf52AJ9ZXJ44qtLh",
  "key12": "2ukybo9C3udXJYN5G8trF96Vcpa9Y9xVFbriwfNJZFhUgH5cTCPBk9GNuqSKninJ1eexWUzjZbWu86pn8aJF2XwZ",
  "key13": "pLSpB6LeQd9Niv6nLwCGGqEKynUP5qJ4vMKN8yQb3rXGS2f5k3P6hFwdXjtGZxox7B5PfRRMpjSL6sV8q6Bo7Rc",
  "key14": "419dUbBvmePFk5h2rDXjBPjfapH2E4GL5nQAE13LDHCLtBNoa791VR1A2pWzpp3nz6YETEDhr6TgEroktjUnsKTA",
  "key15": "61jKTJGKSS7R6QHtxUkMmeux2KzmmvEAwrmSk8kYBoPEesqUm6RtgwQA3thrsWKtwMJoHRSBKtVAnM3uqB2BvvNd",
  "key16": "5ZCANzYDwTXyuWciQVLr4oonB41BFoYRZjtr6odFeRQzU9jCgwE8MkRFT8UTtPzorKgzoSb7VxY5bhMY2Km3Cj1k",
  "key17": "56vctQwrhmSUsxRikZUYoskQLyJpEypXgW4N5jo6tmGTDBA4T1wS8HbGgsg7rpAKv6oWBGAfe3RDKkDEbM5a5vC5",
  "key18": "wCEf2dkAoBoKrgeS7UcoTHrqkceQwWewQma6zuKSiRFZcRzWmWGUsQU9tfyDZWD47u1X7ziKsiAhuvD4nX4R5yK",
  "key19": "2hXB8T1nUvRC28k6zFstx5PwyUpDHJg6E2JWhXuB7HqFoifjEtqiaUfZ1RxjLjZ5aeiudJ7sYk6tx3eqfYUaPo3b",
  "key20": "4619MaEhtQxp6BswvX1Pn8C7b5ciuAAAdHb2PVoca6tLBwUgrKqhpkQPqYmNZgyVgwjcEXRwF1XPyLWKaxpFhCpk",
  "key21": "5A2SZj3qGV7fq2YjNfu6ZUwt8AHESQJNVYwvkqJGytMu32HrfV21LpBCKzEbhAkjUV6E6cs77YZZfGRn1DqcdnQ6",
  "key22": "2rfv7bmsP4yDaxDkyrD9yRwABaayZqk39x4zKd8YvUTxDs2R3sHBULMSDjJh53xgnFRBo4mCzAiNqkeA1ZigeDeG",
  "key23": "2A93SCZa86oija3BSTz1MnUAvJgUF5uPMSUGSddfRGn2cr6BQsxH4NDymZPi55yGRXdGexZKfVjvYRdHEa7Dqe4C",
  "key24": "5DBo34nFCzogq96fcPx7JaVCmfuqYDQorFuhELNwLAfhDYEwwLMWbkCRGD1y7uTNj6vitThHxUmqKcnbEBt7pnQh",
  "key25": "3KXTxoWo4kgJYuJkqu4vsMxwKm7feWo8D1sppm4ZoZgaorJ3BniBP5XzEQLCeq6h2QTxfAjKAXE1WTt74GJiHRr8",
  "key26": "4myqKe72SxSmyL4QAhAjSyYoQfY7q9Ef4jitCTCnPAZoaNujC8jZjE5jHSGNUgRpshSctGTr9ZBZMfA5Sjk6DsXc",
  "key27": "56T2XdNW2avx3D4WWjGAcexpFX4G5osBwgFMVw9CWKwDPQQSm7oTpWKqzEHBUYhwXHm9KMJWg4cMw5rPZSLbxGnH",
  "key28": "5NsZDwRJ3ne4zzizuxQ8TzYeoiYtNCU7BwCJn3HLfjZ7v2HxL2tEtmfkuBR3oTuUDeY5pkcaEc32aKsrJ7ZLmNEX",
  "key29": "5i4a4uoFDL8WpY8ga82F3quo4KNEexTSkm1dM42Wg7PwnQYmiewKYrHoNRUNwgrU1SkM6Fior1cKxeJmUubxpCsp",
  "key30": "2bYsnEC5NE84qMtC4RUgQ3uqkMmcnBNZR9cC72d41tgm8ztPwgb4TEb7WEgLid5k3WBggj91zzHUbDEz1qpSDXpb",
  "key31": "4NfASPUxQcKB7MyLrEPCJnyvHTm9FoCYMsnyDX9GmWWbAmdTeYZ6D5fWSGoNPRN34dfM6ANYzw8fpwDe8ADjaiPW",
  "key32": "64pd5Q8SACpCtZYi5LJaXPJDcD7CxnzDTc3BUCche31cHLb6L9X7QVBayVSctUsncsfHAjXJWDRM6GMschw84Zrs",
  "key33": "49YtHhGhVhvQrDCQx3pGkJ5zxNoBuBWBzhvgnH1ewe7MioCjvfGrvcKNumxebPQKtC9yFGg7t4rriJYSqb4yp45i",
  "key34": "5ZjFn9g833zVNx1AumTvPUiJp9KzZbmEYqzJbwNXXMatwzZk2xeT7PAGLjChNoC8EL6dfSbEwMsHntdnou4PfJk8",
  "key35": "5JgTsfJ5NGwpTc6MiJojYntmh96CzvhfzFyTG7tZCG99yvPP91rjjVXxa4EoxBHt1fRxa5hPeTDkXoo2Sd15Moj5",
  "key36": "2wWjYfQzT5GRK5FjPncWpsoYFgbuCD6xbQjDcEzuGkJx4zmvyC98FG6A8ezQ9A8Djwnqj4eJUuQSinZdXshwGTuJ",
  "key37": "2zrn174em7tCQoxSB3wE4gzAR6P3J9QgcZjdxMfg6xYu7ybz7XJir5fvQFg8xM6jDaCpETxeS8pWtYTJ9WgepVTt"
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

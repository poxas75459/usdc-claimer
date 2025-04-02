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
    "9M5gfsa8o8XmUc3maBZtYDGvZFpCHQdpxvramgcGyp9DWdyNADiYKyTtEvPEcRB2KjgUycyPNi8pg5T32T4DEKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WR3AtWDs35QswkW3Vv67TDSgzkxmCr91iVnq7LoQJUv7ZNnfvDmgjBfdQBQ4G5p9y6zRZuoSAnGwhPrbbDWjD4W",
  "key1": "3URHHTJvtDugUnCtBQZBWUD1p3SVBLyqeSaypYkY1JRFGct7rjnyEnksbjYRRyCgyiGZBJttPC4xfyjYBKkpXXmK",
  "key2": "2nxNeGS31RqiZiA4sNrrm57muKnFSrdPCM9XMgLLNkiCnvSBCZSFTFSg5X3LPPYsaJ5swkvekRbVxBwkzXc9aaPt",
  "key3": "5z93tx3kmsSUHrL1Nemm398tp4NWY49kvj27DnCnpePjZhM9X7oeaTMCJ7FvWWxaUygToyBDc5dQUshsQsfsvXCp",
  "key4": "42FXi2BuzBMDwQTSpRJXB9SBnsAa51rdM3qcmEwDdUyWNzfxvxWapPEp5cAcsEaykZnEkvqUrDkABddjuidhDP9A",
  "key5": "2r1xuccfcN16GjuTMpBiVaSjb5wjZfpXuzcG4AUJ2nof6mgQ5NgLLXpMb8LfRpP4o4S7XxoUZfihMnK8cQhwnUEV",
  "key6": "38fUgYwG2iK6B9qZqVhfPLfXseFJtnTdctcGAcKiUi282BGVpeJKXKQQLfDyGZpK1E227zEy5Y7MFmz4Cu3Sg6xJ",
  "key7": "2hox38VwEWpmH9avZ1YBJSR3HoToqwZVh44daZQfzecRnXYVAiE54FPzmNwwP4uARq6oxD8wWQFkT2LKibxQruif",
  "key8": "2vfdBGTmKYPcyRDMurTh1ojPafw3XLqStngUFywUVsFyQRokQzA9uUyqr8m3R6CpxEN25fD8zrPcM49BLDSgkXS8",
  "key9": "5xj4HmEyiT2h4whARZYtXTFSuuqmqxt6mXYEK8nULb4rC1RPvCz85xjqyEKxDeEYKbSotXfSKrpmbu1zPi94KwVJ",
  "key10": "2eptRjW6KQ7Ci8m4fCQGA71ZEegZp3m6zKzB2ZugtukXMkVkoeruPrDFynU3PSKfD5acmCnSQbHmg6hUK4Kjf2yW",
  "key11": "5cFxj2zxRm7kQUgqwzreG3fGPdw9B3r8VYky3EN5k7YJCg7wqiD6usxwSWHVAReMdUHuhmpWmGPENqJtj5XuVmHt",
  "key12": "fkBNCh4Rbf6so46qAd1u5GdndsqYGTzyGdBzQPTR2meNGkHwnoNH7rS5Vga1vMLshTggwjvgPfQPweHw68s724n",
  "key13": "SVFDXiGt1CRbDKxSsSjTgHLG2ikLX2qFUVq4RvQT7vaZbysfZURrsAxrJHyrTpDPd4FfqcahbR52pnFy5h1UM3j",
  "key14": "bdQscLV39PAd9ZoEk3Caij6xxyWX7twbAoeugV7XpoxHBJU3767zvFkLH5FnrpL9QvN7KCAjbywjmnTDk6VzRtv",
  "key15": "3SFcXvaYmQg9m7ZFraGhX3HH3r7NuX1M6Ua1K1SgGZabNgEsWMZtQe8Aa627U1eWNxkHDXbF3GZ6s16ViSdCiYdQ",
  "key16": "GmCDZGY8apaRmMUqx12TNyXn6PBmyQqCRyuY2UpbVbrUFLzEEN9JLm8qgwryKjGF8DGKNPpgBEupWAbRQqQQAyK",
  "key17": "51p4SyfoE3NAtfwdTiDm7msFF9KXjmEXQWMvFPm4u59vQ5STbkRjEubEUExcsPee7DKFTZFxPiBQjUGTsFXWvLYt",
  "key18": "38LFa8uyxASqqZmSYYWzgsNTbfVTDohXktKd3YLnJoJH2yCu7L3wfpN3WWxEL6uV5pkkwj5czvKg11zYc3jxwXfL",
  "key19": "4yPJBXmnWQoWdgLNJmtRtcdMQ4pwjqewGcQd3tm5XuxmZp2Zs7Bnjzo3Xb61NxEQDhRuCAYaVcDBGnUb9sNFSkE6",
  "key20": "57gaYV7Ysh4JfwSEa8EVx2b9Z7dqbh645iNfVJ2EjLsdhgRyfeN1VTKmZ6RpGcTPQ1sfGorJ3ZwFCZqgGZG3KXYp",
  "key21": "5Vfm4ZNd1MY7kvtXdo4PNhos7JiUKhMkwNmsiA8xT3jyz6ehRwekUa37hLapYprDr4i8qCfxHuGrGebVjiE1RXRT",
  "key22": "63xEUcL7xJUTEyFBYQqMp58pDgk58wWumpWcaXPETsjTBAZRxCoLnvSngtKRWUpMZA3m8rYgcGTVM9jeH6RAHxHG",
  "key23": "5NAZRRcrdByAj3tXQqCB4iHDmK18gkHrYwiFrh3mbXhbauvGzAgnFDAQw7LbSDvBjQesUWwhgfvcBUYHAdmgiK6Y",
  "key24": "4PQi6NykbR8zMzBLKAU9pbJkLoMki7w9jZNwZBRxQLagRCGwU5qZ45gErz9N1uU9oBL6BFbbZLzioi7y6MhKgcnV",
  "key25": "1JQzC6PQ6uSpEMbXJut1QvzjeLsitjxP2xd8dymdax8kbpRyYGRjHsn2enX4ttof14XvwBHA97N2HjJmyXwFvP9",
  "key26": "pQjh1dy9ThAbkyP4K32XjBFzgTY6qpujMJtTto3e2tzZqSvEcxdME39EsR1PuUi1z7iFMSeo1VnVrTUj3XoPYrX",
  "key27": "5VwoBH3qPS67rcUWnVfZ8ScDqMQAdLG87nxF2jcWNLTnQRg62epmif2UZaUAc6uLbVj8GZ1TWpUEn7jXQUJeBLCG",
  "key28": "5A4frwEiRKzk9s6FoQe3yE1GCh8XqVsqPbMucFRBosLrU5r7968RBqp1fcYymqgMxRBioc8hg4YninG4xi3GuP87",
  "key29": "5qm465VamgaQcJfjaHnvnMGptj1GArhqExEkbWPtWP6HTZrnDFLeSQJvXFfgrGkpufTwxErAUCcVeav661pMSmFm",
  "key30": "UT6gwZPPFgXJzgY5PeWSBAh9sQ2JfGw7Teb4z26J9EnbfSZFjtzSMrm2YtkX2bZBA15wAe4PB5t5fMwtyY8Fx4d",
  "key31": "FTgn1AfdaPxsXZ4LfbZ8eGrCaPvQz2hin8WAadnaC1DL8zofK5qSp4B32dU4jok8VdPw7WVMtNLjGur5Ffuzi7m",
  "key32": "2bStffDNXTe5bQYgNLbSTiND4ppZ9SXgoeK4zGDFCNfLoZXHqcaeRR5mqdAvznfw4HQh95ZrqUzhN9W32DKCfHur",
  "key33": "4twqNtMnFZBGjvRYnshwMSa5B75nCKEPndqHLpLyiRisrLV7wjtbvouwL3YceRRsij5jttANm9zbaVSKneUQrvwQ",
  "key34": "67pKx1nWZcTwyDjkaoLrB3fhBuaD3ZoFUQRXo2YAnNYgoffvgZj3wqAp1jdDXWrrQSxwH9ErhvBNSvwh3AsiYv7M",
  "key35": "62sUN1Pet3wiYw9C3PZnq5oixFzPnn5rtjEZ3hu5UZ2ekuobWXF1rWSRTjADbYF29pDmvRyw9jKaLRLPNH7BJecC",
  "key36": "5UevBFad8nbJKdoAsEsQJhVuc4VUpqQpsinWF6UgsQRcNQEWTUsKTqLeWN8eoEaGGso5fzNBBnSZxn3qAQVa4GQV",
  "key37": "4cRbvE1oSP5pHD8RB8ptxtQYXox48khnRnjY1yEpr65VxP6to9dhpNWMULrKxcM3r13oqAn3rPDHY1TVbrc3ncth",
  "key38": "2E2eaeGFQoXfqP4KqzMz3wYbnwBJhekPzLCfi8AtQqgxSucJBG7DDbwrugEat1udSBGWfjJgkysKLTVj6r731Fx7",
  "key39": "5cLvLnKbAoeoqNpcWiJoXZu6eAnaS4hcAUdGTb24PgJSBQbZ1Y13KD61Z3dwE7LW9uJm8bPvP7zAXzCU9tsNXpij",
  "key40": "3dDVtAeGbS2hMK4Sdf74v7yAcUhvzoHKpBViFrLEmoGvxvFhW9hj3zgjXLQ8ZdGYzG6nvLbtSVxHejBc9JXyuUa8"
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

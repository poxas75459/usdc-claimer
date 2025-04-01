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
    "522rY5zL9TKA1m1MrCgkPn6E6tY17q3YDZkK5ZvXs6MSarFGnFJA6R91GxAmtzQsRejs5KNoScn6iQP3PGhKmyZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkTd98AGawkFgo1e1a9FzoJ9JzLyvt3SpJx2SaK3A5QsVtW7VtwKK1ykndVDy3HWw7KyHA8hjSGxBDnq5pq4ZMS",
  "key1": "2f9bMtY4BCxhhtK8pw1xPyKvdsaJhV7mmXw7yNZQGzaLGK42oU6ZroM12WcWdm9Fg1RJcjQaY2aXpWgfBEwwMXdn",
  "key2": "49zaKbmG8cDMkFtA3G1coFV4pJAv7GtxXhxxDhMM7EGHZqxbVv7e97BxGm3XGGpi7ama6abqG5ExsuWiJMC9f6EN",
  "key3": "39AhBFVcaor2PyhkfKDxn1ER3xPtr1xar4PkyDa8B4cFmNEaTiUtsZ6C6c88svqsXe8zAaM81hCVUR3ckS21mzbn",
  "key4": "42kdRFkCe8GqHxCXNjmt9zUfgxt4QN24wJLLdNFzUQ5ZuELsRT8iNxmYpYRoPN1bWLgvtmoBG3orm23FGQZ5usiV",
  "key5": "335JuPZQFjMp8xNLLJ3RqGrxUTjbx9y3ePTMPwHvqbYr6hYkiYYWEUPz3e3FEL49HdxCu1EZXyz5jjrbMxj7Sdqy",
  "key6": "3hTJuAMoJzaRtUQRQUidrJBkge9M3h63e5ApgSRFqb8pP5SAPpqfvDotCNz5Cbk8kY3wXEWaPmZWjYgCvFDAZz8U",
  "key7": "28DfAYBfZNsPs7LfvHECMf7mYimj1U1qTaNjyEQSNnAe3djbRap2beWkdr91JqPmCv11Tn5iXwktH8xLM3ueBf65",
  "key8": "5ERhCfDQ9rkTfwr9GcHBVCSsEsf3DUkXH2QCe35ZwDJRgNng72P4vtnu9DzrK2LNqYsSpbGJR9jKvPymJYj6KxZb",
  "key9": "2UfXDtJXyiEjqfhMoepNaoPjknS73c2piKnhaMP3DwU5HA1zjPmwSqJphVe5RjapQWGCdS4PYYt5k9mns6sHLLfy",
  "key10": "PQsGC53mnZWZ5sXdiXXfmhDguhVDoxs7QYJkDpyt87Q6ZSjkhAcBbFjh9ZWAdD1aZwj4N9p3Bz6BdXDYNHQNaR5",
  "key11": "5tyGKTTjay83yA3jwexZjgcYXMYVQM3xTZf7i2vBxGspKUDtBk4eJmys5hCkX7cUB46jy6zfXCo8D9qpQmkokL6N",
  "key12": "2KpWXexUAiiwohaDEdf98fgxr2G82AJ4q5JzDHXs6wcBJSt1wgawx8KRkucZfa35p6XF3XPUbZWPKzpgujVegAf6",
  "key13": "65fGk7vbcZGpb29ujW5F2jjbkwQmoDRh9uteKU8cQhdgZmneeqAU6cwnFFpff2jndngcSyiVGpFEv15gYoSwKKhW",
  "key14": "5yKV7oisrWe9qPa9HQDXXDPPmgjJdjMmsCBRewRpjWbRSZzMvEsLywkFALYNXdZEdpZuMkdiPRGDHT6QG5gPuryB",
  "key15": "5gVqB9sJy1PnPG4FWHu6djDctXdza56Wm65zuGawA8PDujgfuMTXVsdsgYMJCAHTTguRQE5QQcxQq95AtW7w2kbN",
  "key16": "3CPtFCmt7Xp1gVh74iVFUKWysFXPtMGcgNjfYzGKhVMFXepw6CjEZxBSYAZzDeEbuHjpU7Y5bvm5rCQBS2PS6nH3",
  "key17": "HuQsjLsgTDVhapkVGRWbEufyjXCdHbGM7w1QhEmQ4nTMetS6NZTy6BBvp6BZiampqVjcoKfgSvL2jFAgpqCLSrQ",
  "key18": "61YGnkv8kDpWw3C9jrypMoPaHRoY5qi7S4ogYk5VkQWV9TtbzZAxYtiMuWL8dS6468EfbdVfwKnYY9Wnp7BVdpCp",
  "key19": "VC45cuKdGBSQ6sdbAHEEaDTv5ptjt6oJJ1dJQRw4uyJ4gPBVPCYPrm5cSGjsKnZejEPmx3qRABLjengZaSE8zE5",
  "key20": "5sZBNbAnkQkH8UNinfwLjrxoTKevty1dVzNDjAkGCXx72khqCCPTkS64bGc4rYmkjBPn5YsELhPDrzWDr4nDYUsx",
  "key21": "21w5NTFs9wXphXiACnh76o1hdns6CjoiBkyyvkVqPGaWBoie6QSJSJhK7BN1jaswaeKFcPh3bqmSZ7op5oqrLDYe",
  "key22": "TzKND1oS421SjaUEmyZbMhLsA5QdPFnpL1pksCWXSjZjvGMWsqE4qKFBa7kiLjDREYc8NXMArsqKvtvX98uXiJ7",
  "key23": "5sV5VmS7enqNGuBcgnGBHcCJfjn8EE3aiaB3tcRmttRbYeWAcqwF6rivv9N7Eu6GcGTWowUiHypWRSEpmFF5UCQd",
  "key24": "3hnquq8VLU92DqnQsfyrW7SGoQuy7fGY9z18GfQGdDurNT5sq1HecsRQSfDScCicuRWztECzTJh8Kj5EGRSwbuxH",
  "key25": "5aNqWbk6YBM9S9FFtuuKKXVtVbP5yUePav3HtT2NSehiqjNruSDHgvWWqgv6Yxn1iQMCxPSqhSmDrwTNfGS3ZyxE",
  "key26": "21jiH9ZHP2TBbyKWZRKh8HUGd13CAyQ76RRGwoAoX9QDgJzPQQnXe331rm2k6KbvvBn7c2pszz5GaFnAenf55fH2",
  "key27": "2r6qj9VmWTiCC1r8hxRiCs4paHC8xWiSc8h8L8MgBdmRyQRoBJkSzWd6ahJgpV9ZnsJNBCEqhH6fvRRKAX1g93Pr",
  "key28": "oanXFx54KDF6ixzCL3q7i8KZVEK2mE7RCgQuGLSD3ztUWcBnQzAnPohpBAUhd9TBDoGaEY4UpTT9E7pZAKsoJ21",
  "key29": "5phpfM3xJKWF8x5Hs1BKH2HepubkGDC8DxFLAvSACuubqk2TJ69Lq85nEyumxZEawZ9SqzVY4cMf6YaRoDyswuyF",
  "key30": "QxP65KanKh2y36fCS7D1cquvrV1v6bd9TUQwtJH6Yi6HYzfGnEHjppQ49HKPepHdBS14x1D4QXSTMDfzrsrjKwJ",
  "key31": "4kiQ9yFv1CFt41rGz7t87vRWzX6EHjE7wb6BSQF9pSwDPPuWaPZUR9iGxbWg4HsjmRkPhyXmiM9J3JmjixPgrs6v",
  "key32": "4o8d99nbiALPBDc8hbUq1JutJBAUe9WxGoQH42F4J1xSUsHmRdbAeNJPeJnyNboDZJMz1qXceZFSq8fzW27Sqxkt",
  "key33": "2nAWrnszE15ZRKopQCG92onaKLtT6ork9pV3Q8GqYy2DgCdmaKp2KEcFksewobWcyFAnqf73dqW12JcPD6JXkQ2f",
  "key34": "4xpKAoTweFnngda1YpsGF1rrBH3PtWpqPywwx3kFqBgnmmqtfqD6b2aSRtD57M6DoYqiDWh1sGR7iTbd2UmFTs2R",
  "key35": "dwmwf4HwzoWbWmR6TZyBW8BaNPnoWhVjeq8c7GuPB8759GPhZ9nkMBxXnKT3uFzvNNoYG1eTFHaeDPVkVNQ7kfQ",
  "key36": "tGfeGSo2HZeXBZHXTBvmYu9UJsDC9UQmm8dEgJJj9wadQavwccum2U1GQrqxFYBxqe7FcdAjeBrp1wW3qrZAv3M",
  "key37": "28A6wtkXB4hPEkTiL5MZTzEfQhxNNnKhncSTVFrVLa4xragrpPszceaHGfuKRRhPAwWq4565Xtx9TbxnSiWHTK6b",
  "key38": "3dDBgBKWxQBrHWnC2VkGpPB62aNgCJLKDmmEexqvWWD9bAonrmBLLTxUVQBYiM2iMCGLLdT4476wgQingrSZLv9A",
  "key39": "4m7pAFTRCvumHmjHEujkn2FdZFzhjaG8Jvjgctw7WpzUMuf7xW12wHRv1BAfBS1pQaZKAN8xHpAKsGpZRRLgQyoz"
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

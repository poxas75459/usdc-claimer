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
    "UpR4U3fb1yo9mjx3Y4nmb2nes9C8zsozPWbXcp8T7JisEfpucy4K1BGTro3gnRSwjitY641k5EjZLtZo3LqpwNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qwk4pyYBZqnkbMoWsSXT11xwfXQt9zHyWsmiPio5dWPniq7HDfeuyVMt7Ft8vCGY8KwuRqk4xrjkpMf9KS4pw4F",
  "key1": "85stpYJ7AST1uZBnkBenJHNnzRaRPvUBPikndKHkDcJrsfyb1pmwmkc8k8AcNX2hoxNSCGPnHT38qNiJGBrMfNz",
  "key2": "4jQWeyW8rgH7GdHKGmPFH5PSTEETfwvBxJ1QibgFdUbYuERtYBJckqpNDjGAcjZCXG5wmU7xsUwafgdJfV5bs4ZG",
  "key3": "2ayV1GPcRVFuiXaeExvA3Urwvn2nqTSp1QqkwjVgeqQ6VoWWsF5oE4ZunnqdsProNjKUTB5YZqjYpGNm4gzLeJ9u",
  "key4": "3y2XCyE5pyiu5N1c3WvzPLQnuDiq6F8BWEfvMLEZiPVSbGH7hCYtMVwQU7CpidVkuaoxPQuyQUvLszqN2YydAwDX",
  "key5": "34oQNx3rHpiZYubYx8MCqneVtnzSWGVsbiD5xB6HbGMtKgW56Y3LuFqqkEMk9M88GBuku1yx9AfaoozuDFW5Fpzv",
  "key6": "3zbfCnvrj8bFFQDVNihaRfzJuFq85bHQ8p2dWsvvWpzf89vmmZ1DbtKEJXhfDKdoU78PYXYBbPxWpk9ETxwdXkuT",
  "key7": "gWRBkGgBmhCzTGtHLHfyN3byHtWJmnoYNZDdqdYYvCzbrvV6a1gddSR5yGu8oHHJR8DseNdjEzY4zjF2szKzquL",
  "key8": "5RPhBR7DyhtyZ9wZY1YtQLN81FZ8UyQDsT6BDwHpdgLygA39SrS2Mof1BE2vUFU1yeBHHPJajgwTbZjrvmoRKXHa",
  "key9": "4wezeWgqDWut17Vz2PQbkYJzYsRF2TZ8s5FGCrXyNE6z7APg1rnXWUVU3GKvHPpvZViNKrM5wV4S2MiKfmHGWTgW",
  "key10": "HkDZSxZCTBLLea4ECb5uKD7QPM33HFVhEGvoD72madjjLU2iYjzEHqLiQMeZ9eC4bc84xv2Rthz7K7aHcZukeyy",
  "key11": "4fuRFYRcfWzQrDJPWqVAbeBRcbyDXqnNUjkUq8rv4g6W6Bdgy1cEncKVSejUoHArjLr9j8puUDFrcJLCJa8jK3Vf",
  "key12": "2TmcYFu4drzfEB1JNreGcK2jvuJjkxgf31PoBKB89UPoGRQGfDhrYM7ReP5huHitHQBtkxnGSfTBsdNGSiixXqjQ",
  "key13": "4sshoVZJHaCRn5ZRdBnUE1tBH88e9WVhDJ3fNxiKZCCv5rVsAWtoubouXPxrhTwGN83fxdUL2jVZGZ9SswgSSQGo",
  "key14": "nTWRzzJ4G71UUWRJG4Kvrn1Zirv5Uhn4mmAfYz5KQ9XZnpzU32EWohjwou4eF1CVDi48xvRyKjegtUEiR5itXAP",
  "key15": "DyESNwchVaqkRA8aTaiTvX7V7HTZfyRUPPeHxvXyH23tCkDg1vJv54mXUQ6yc69Vs6W8gVihjybRrKWj7SgEN9c",
  "key16": "3Uzxvg3LMz92BQd5pS1nNuQtCqagKcqMsFSATF1v7NjNz8qaZXL6Bnsfsqx8LKWbdPZAE93YpLV6BASk29zwp1Dt",
  "key17": "V7MV1p4iGbMhgj9J8EdshrJX7rxnzNUF4xvdonykni3JgyfHFL2LKUtVdTxeqhi8LaGK2g9UNbVqHjP27afVrtB",
  "key18": "2VkWHXRqrMmcmVjaYRnqqD1ZuaxouTdPzzMHmWQmmcDS3rqJPpHfC3WE7kLWUmAPMnqin6MNyG4ZjE8LwuMFofHy",
  "key19": "4qicW3Jtj95teLFRaKNzRiE1b67ofnH5DpCgXqfmV3ZAchcjVkp1yJbW17PaRDKVtYkvnhDGzLs62U6ppQxTYk1z",
  "key20": "2Nix1PZwyrQUCLZvJePWvZEsugfYmPWjY1pBWT9ewuYzjmkFU2vw9FCzh5PCCs3NV2mhdbnZUfPasSEezBo3p9G8",
  "key21": "35tozAH1Nuw5s4cXJTyHzHa4vkSvR98r5T5Zug3KkC7dpZ91Y7mMU3wgV1faqAc8mkrr8SgnVSEoCJ5gV18mgu6x",
  "key22": "3jaUA88GGDrKfxVkxx8euzqc78nLyhjHcDpWv8weUbBQbzxCuTm9ZPsGH6EfWupNoJz2CqxvMQtQZtQVmVvJ6zjf",
  "key23": "5SRi3UfvfTGTfb5R6VznePYpxq92RHFHpLsF2EYXCoUbsxVNoSFws7BMXfbdS5sUrXq2rUiptSppjxH1AdRCdBnF",
  "key24": "2w8NgEks165XD5Thp3MNW3Lsp16MJGkVounTAEP2JkcmZ5xYfExbf6otcDSeMdmDJCpkKDstNGX8WgGm2hHGFcBH",
  "key25": "5zY3ErQj4692QcUfE2bu1iVrvYYzcGEn79ghwcXZba3Pf47JB4Mwaa1FqBBBi48KzFoqmT7yJ2K4s4JAhLacjnQv",
  "key26": "229BKL7SkiLjF8bC5ptp2aZjhJy8Mg4SKjJ5P55meNjHKVF51BC8Pd6M8YwB9y38mLQfadLiX2aFJ1P1mGTfQNA6",
  "key27": "WKT92z1LDSXQeDQ4h73VVNHZjY4kbfNG4EvuWSpKpFpXL58N8rjWLQs8uWBT3hM3FMHYQnVTBAbpcRqtBv9Y87p",
  "key28": "535FrZ2i2yU6hShp9ic1SuLzGLnxP4HkSbuQ878TygJSL1MRf3Yvta4YZCk73RSGBxyg1dNwnTwXH6siYCb2fmom",
  "key29": "3QFocTjAWPsLuXAjz86RbrzfTtbrqY2oVanSuBTDhoHgPfpF85hJ3zPhT9dQ6NaiyLx5B9cUwBuYR67SBs242R3U",
  "key30": "SD8UQeE7X2WgxJ5M6Emg3Jug1xfki8D6WTheKup2Paw8r3QuqtiK5MYWz2NVzG9vy3HojakYkBZp8sEUAWoX7pL",
  "key31": "2owT4pMVbVxBc9yAKwpEbReWjUVtxFAMR9kLXPim5bUy61QSn1oahuxcK9ReFE1HcKiLRiV7RNrfw1SfoHqmmp3d",
  "key32": "m1a52NZEMrdvojpCjfyowsFLgCCzM6mBttdAowusFPm69xeJxyhKAeggc5uwrst7Qz4FzCeduB3Jn85VJ7YgBkz",
  "key33": "5T4MNRKHiwfQogWAfbHQjViYgqCduTXwGEQ96VokKtdDPWaVEbjVJ9k1Dk5Z3aXFDoxSt2QZT297Ni393Bv5dxw3"
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

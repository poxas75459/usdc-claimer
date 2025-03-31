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
    "Upo6heiLBFN8CE4L38AmxSppyZHvWH1ZyembQ571D6ag3n5bbJsqngNgo6hQKTMLD7Jsk2CC6xYucrJtZevKZ3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4RwXPaSECa4aiZN7pWsA65Uc9wWynMkDgJXCXjNxMcEUA94RPhwS4FPV8fkw943imC7kngpaSu9necFYdZZc16",
  "key1": "4bXshGNLUJoYP6CJ9Thq3o2GZCP5RcQWqqyDtscZ1kSTnNFXRaVvqvEuodXEbBmtLJorMrgZbDsLYtgejaXcxFWt",
  "key2": "2BBsGFX5EoiUES93pGUsKqNpqXay8JP8e1jGEsFW7G2gY2Jf4qX6rzn2hpHu3inHXgGtuDVUQUzYXTmLYYx6CMXL",
  "key3": "2nNNRZmwHjEJXq2JuowoJvpzHin8rYjkfJohEhQQE7N5BRNDSb9seB8JULmZXrKWg7LHFVgVPYBbFKmMt1A2mkWi",
  "key4": "5iKjp17NVqe552iryTuBKW8CHtutJJgKHkrykXiBZHey9vMwcMoBtKfNgbiCoR4bbWjxP3kacmqptwjtHEU5ZnBa",
  "key5": "4LeHiPtrLosVgU6VDgtfUytoucrqbNbUPADnV63eKCJ2bsgKXzTi3Faw4WaAh6ftDmtHZ6gbU2VrbaxRXJJwXj7Q",
  "key6": "2ra54GfG9jNGoctKRSWg7tPd4udcwghB2CkXA5sEW3jbHQNgZjt1qxDmAnwKzs1ndTbeWeFqifcVs8YqFYcwWK1n",
  "key7": "2xBycyvrZFYCqJreJzUEXfPxD5CAfsKwQCN17qV7UmrzwiitemgqMtJ6NRyeUcM8UdYRFNJsYa1RZLo5ii2Sw982",
  "key8": "WmpN2EoQ9uHgtvJuHS7ieGFjg6jzh4x4LzWVsC6icaMs8X3dZWLDHHEdYkiqzYHSRNYj8ZnGmNJ2o7Bj72V9UbF",
  "key9": "5ph711kWSoPfMCuF13xxe3LtCYdMXf62qzMdWZT76H8ejqzaqHmb3qtm6aay6QJd2HZUTmABbDuvQ2gTBJ3qVyjM",
  "key10": "5Ue57UgcJqwA683W8VgZcrhwbhzPqPmHqNNCfMZpeFaSGgd2JvKfxJXXhoeBxzGwqG4mk9V1Rp5mGpepC3JLVQi4",
  "key11": "rP43N85s2eQ2TQHAq6hLJmJfcoTQuSpJbmtokzBg9frKAFWrjge5ifc6ercJKTjKNZcFijaGHKNMsmFufp5WMN4",
  "key12": "5bW6Hno1GEaYzvS3LYz9RjxdcuGNfSSf94Gtcn9Kh9qe3kjBTSMSHwf1jgMRmP5zbnt5qw5J4ZwWAtUD3S1DMcfe",
  "key13": "24bU71qmedU8YxMueVVcGZqcqz3aD7HeAJguTmaeyn3MBzGcuMqbNCiXkdtzTeGES8hBZftF632cL2tG62ZQeicF",
  "key14": "5J59pWmQzqp7udDHpWUGPjnS3zivr2Kg4fMEBRVm3QXHFBbKo2v2x7oHm6Bcw8uxiwMto7Zipm6endPK2y4DRLad",
  "key15": "4pxb5kbhoGjDtQguiL8P5E8tjENgaHp7pyaqgJAKMW2wvBJcnMkHETvVukn73sWCRqXaTxL3JXR8iT1hqvjdcQ2Q",
  "key16": "2VfcMQbnCDciQGvWHqKEWsCm8XDK1WxeK84chYJMQszf7kUwMreTNVWhYEKpV4xcbiSNZTEzukr8QjuBmUMj42vc",
  "key17": "3xypcmCcj7XJuJ8xUkKzCU5ACJJBMxWg2dWZ8SoYMeGvXsEVRh79cg9ipfTcgraXgRj4ayo15iKHASfENENo5pRV",
  "key18": "4mMn7UMWS8xNjNjCE5GsJdHfEgQFdec977ixWA2frT4TYwRmAvTAX4FNU5ezP7wKHBTUpnRHhqKd3h7u3yqjgt2L",
  "key19": "3BsurDsA9yQDsU8p7sSWLjUuW9Fp7R1ofZx7LdNYpvgAUBockBKYRocaAECt4xMpDWKnvEpcDAZZaenn51uu2UGc",
  "key20": "4YHjKJEmhjzWVNRuVZFgoEX51r3sGssPah8ccYRPW1CJ1iUekDQj8U6jicCUJAG1hjuWZQwZroL7HftD9g1FuLCu",
  "key21": "2UFFkMb14R3cDQBhvQRWqhdiaoRC5i79RFxRTzttg6pdZjLbtngRJ8WzdNfhjnzGP62hNPA6mBdgG6UQQeJYRHDW",
  "key22": "npttyrjFNyonCqF3dgBfzvSxozFfd6A8HizxvfKt35rWqr7pojvJRb3iursBvp4VmqoNLm73qts48RScDeoPGYc",
  "key23": "54Ctup7rAaW3eDZg6MhJEQ6xj3231uGVs7AADoAmPAXAopsehnfS5x5uecozBMxJACjf9JZLy9yJTxcddH5aTgCp",
  "key24": "2sMCi8FvksxMzJjZHXbL14NrJE4tqTvQjwTH4pM3efo4SXvrpvq5fmxpmawPJCiomLB5wsXJqJKGJkFyTbN66jPM",
  "key25": "21zMokGfHj8aHm3yhUBuyABD9w2DpRNPpzn8W6jL38552Kxc6xWgU1uALpE13R7rxMcjogF1WkQmYEgZBx4bdjCR",
  "key26": "2kyBraERSwJDNitkHQVukSiMFwuGNAQmUd34b9835LvUyipNj9HW4RXtmNXJQBFvkbJDSrdL6M5uCCjWGhWsmLKf",
  "key27": "5oyp7TpEpMeC6D2gg6RyqDASvbqMWd7EdxWSjPQrb63u8HMN4yyfdvmoA5gWDJ8nrVrVD1efExFdoixRr4WBcpwb",
  "key28": "2gU7nV1zoWdAXVj2yTeyUYnzpCaA2BbPt47Z7bcKXADHYm5VSWBV9yrq4Bi9PrFszRoq8mC6UPNBp4ivnVRC3kKB",
  "key29": "51x9XqWWiSSNQqzqNpsFZPGFKP3Z5B2YQnEqq5ZQWSabZmXyNaYkW3QaZds12egcw2pbYN6UcCqTFoN3MCfZcQDS",
  "key30": "4iTXg34YL5Lx3boA96aFvAUDvyg7N2ZWqAaRTdMdvDPFKivQWbwyEftXFwoAm7aKk6AikjoQ5Q923F2Gs8DudJvn",
  "key31": "4AgntNxn2ThGZMVwDTdiEsAPbYHitqpKUVdVqvf7xuwRyzdTKmftzq4pPNcbJGScfdBK78nUUeNmwnvwWYqUZ141",
  "key32": "5xrw6Vmfn2w1wZWneUwRw4Z2jB1KehoPzNA2VUwNKDZorGGxqJ1WkP7vFbj8nnCGYkRRPZdhb2oWJjCjZLM4FyRd",
  "key33": "2oDtMQnuibKFvwbu24KiRnAwNMfG2CWgKsEyxPqEcxfNRHjyg1KwB4V9dCr3Vn6mkhG7FxRnZpxM6YFJaSZ2xK7h",
  "key34": "2akkMZNUjgFW5rfB13mphPYbWLhj73cZcGpi1Bh32U8rb5WtfiUL4SXESTC1ATwxG4yR2UHuzbgehWFTQb4uZyow",
  "key35": "3r9kYvdhUyj14QaZz33RonzugTn8KkkKJDroRperGZShepP3Toiz8W9FtSPxiAQAjookc4BPQQybv8NqXzKc7kX5",
  "key36": "2zayCKTmUVEKLfjj3e1bqiXLxmoEdCEo1uiKNXbaaBF5ebvJR4iGmSEje1TjMm8EsKpt72an1VcnFtpgyhLKNFxr",
  "key37": "3yaDJkUC5vGnzfp4xnE76c2naaGxCeAPfpNSY6ancRKGdY4DcpLUFZGteocrNqMQdLBeEgHmvXx1oERsjxwz19pj"
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

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
    "3MiKafAzSDuALyQCsaQtG2SZRZjuyNTv4iH1x6tnSV5JGQnM4MwcrQnxxMj2yjgV1bWD48zwy31RRutrPdc6G8DM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LhKPfxnRGGLTySS6qTyH9W6a97ngkZov1Twix3DqoMdLBxJoT2K3jAc3rj7yMR3abixFx2S8CCW6TPUCdV8ybbw",
  "key1": "4Sr6BKaH8kfnJWzKU6S1uR7q65bYTdbERyLkcABhF2qHaagnLcCD3QrBPFmSBVSsiccyHXvW5dDt4R6Pm6eGEDkt",
  "key2": "bRSXiTfvjDXXJSz97Kz1einGMgsszGUXZHnUQDogWEvV2Qa4w9PNkomn8j7p5jWamb7XP69t8YXP4hBLwyQ8EnJ",
  "key3": "4kw8XuzWEXVFYyskbvEeG1Az3xteaaa9y5Nh8UPwRsQqN7ExfuPntc7Xz89TDERqcYeYx5XgFK7wbMdu7zB3ZVF3",
  "key4": "4Mp5gWw6rBJoRtdRecrRjQ3HWaK1gXtVxaniYmhdr1rG3xNHaLG2fG2iKrZyh17Q8zvDbcuaZoFBXnr2cQ3wF8dP",
  "key5": "4ebiCKzSHsqVp2MPBWWb8mzUnCBwhEFQKEvJfZuNdEzkdTcbiaPioMadAofw5rLYDgeJaV187WPhH3fDDMvnVAcT",
  "key6": "2jPPMsUgyLuMLPcpmghViiAiXMY8cT8UsmFyzMc9Fy6uwnM9hVMHgvcyqRXr7vkMUdRPNJAa6PFiBtPosBMkoDNq",
  "key7": "3b59Lc9jXEKXJzU9x11Yv1U4tfwzTXGymXCGmD7PnA9M9kMwbYcxRXXrKcjZFghFRPnkFEN9X9Afgjn9rPG6x9U4",
  "key8": "2d3rew9ot95yErusx9jGyFJpKsMHaM7cMMWgbfD8Lb4jka4vu8zXKMS8QBypqBgU1W2idZR2YnpBFZCzjJ4es5yV",
  "key9": "2ZAdWZUn1PvA4ngwDm1P221V55PSd4mtwXH19QqkQhwkiL5PAjzXo343viob855RQjZ479DDXNb5RyfTjNKqRzPJ",
  "key10": "4xChBd4ysMbpXATJymrwSmyeiA5tH1io6CGtBdhYUBtDnzMpdG6qEAPrBZdrVt4C57cVNAhSBpMeHiN3B6q7nkbQ",
  "key11": "3n3ihQdZPFHPf6XT3pRU1AbiAG9VTiYQ7e2MJCqy1Gyc2brY9DWHYU9sG2D8CSECSz8Lks9LXKk5usU847x4UGLo",
  "key12": "3mhnboGM6gDYqPwvCBpJEeVQwSTfnkR5w7rtg45gk7YAAMwZA4n1ZanrbEVuNgHDtiHMJDhtnVZvx2PtLWyZdHi6",
  "key13": "3SKmo7PgDZxcxCp3oDSM8XCZRGda5V4WqRyPtMuh9XjMfbHgMACZCfQvvZCSqgvZa1p1i6QFAnZ9sx7VJkgGUUE",
  "key14": "37wsgZMhyzdUh73YjYVgmekf6stfwy5YvcrEzEqbThwaq81Fe75ZYc67WymgbEXxgBa1QA4qW6asXeQM5P3KVRMu",
  "key15": "35UsJQY26NvzEYi91c3ewrcTDUTugAJXTD1WR1nN4sw84AcSUe1oB6bKH37cguYwstMky1STqvA1gn2aDMV7XYQt",
  "key16": "2yT3d4DGvtnyZDfxRjKKV6qYVev1Tx1GZhhtHzLFdSJiaYKoRpFUxVfQ2CTtdGHiX52o8CdtJNnmSgFSqTFR8kw9",
  "key17": "346wUGMKMcxEzaYSitrqUTfrYbsQmQKD3KyNvuPGudze6G1NNTdLMrbWNZ8HCJeT8PftQyQgpjpeMcbkxoqe2enj",
  "key18": "5qL5zYVMt68248Totm5MgbVUqRErTYtJX4NLL4hu3RiqsDJrn9e8jEZQuEukHTQfYz2AM7VByP64dufKfTc436Lt",
  "key19": "3ao3oTGtQKczSoAQR6RHa5cLdRSFqPDBcoDHYLjJ9UyZGAB5vXT1ovHVpHH5yrHnppVnKGJuuva5urJZgxc9i4Co",
  "key20": "2A6x7pMh3n3axYvx2xSR6UEQEn77EiEg1RbbxnjjmovCVVCEvebandKd1U75uo9An8pabdi7ctwvJBNHrc5ZNpyh",
  "key21": "4zbfczXoj7xe3AhNBE7C46bXgNbpsuLti3KRZAKJaNZKYLNDBBnivmNoyv1AP9NMe1c9GVroogR7oL9pJ7Mi7N8M",
  "key22": "5tvfAZYFwDcHLUJSom6YAKuznL1MTvq6FYNsqpb6Sf7YXuJFMBeFrpHt7QwGJTYokw3rtmTXemjbpgRgt7mUAvRc",
  "key23": "5gJSvDNkCj1ghS3c6nEpooLCBz8HRErEjgw2meSzxfa5DSiRzX2WCZjFpdPn3epcfjuV2tCGuZBf8cFk2kdonSjR",
  "key24": "rEsPiZ8YXG9QTm2nvvwF1FM6XydJe9JurFgigKQDhhGXvmTxRekqA5Vhwp8HEKJxDGkfFgmUbLZC8ZH6xQoJiwV",
  "key25": "5XRb1BUAqHe5YNt3sgCvrCwsB9uk4RARc452aPK27yvhEdDPUoFBic74G5vhFqJ7t5dERWpqDNmwDtH2YarCoCXF",
  "key26": "4Gw5MyfQ5gUT7nYMhp3DrSsKzUPV7ntsMo4tkLrDaEbraeGoCCJfCwqUcj3hDfBfRSjf98BMVJDKYeoxvdAsTtrr",
  "key27": "3dgaHbGmWzyb6mWbsbrL2Gv5b25dLUyZoBiydkvxK3i2ztE2iCg693VX5DgCkz7MQ3zFmcxNAPYumXBuFyuUNaHC",
  "key28": "2MvvvwK5euQg7VzVyW8W9jChCMgpjua8kfe7wT5EGfYgLLYoVsdNFFPDX13FbuXxARQREgUTQCXQLWQR95cPHL4L",
  "key29": "24MjhYa1Sa4R3oqyqnBuzabncPZn8ssvG8H4uQz8w8TKhdstfjAXt9diYyY535YugmcXMfRqSUCQoBtCD1gkZD5U",
  "key30": "2CnExz2BFCNZd1M8vtTtsJr7nXKJKnBrxurE4AaRUmETVoS778oGF2RGiqnoPneRKBKnxk6VGYrPoM9mH6ihgQnJ",
  "key31": "57yuSt38qA7po1CrtE8KLNsYF2aJuLGiwjVhFBkmEqP1u8QGGseVZXzrcTm65MGcDDfkuKdhXJhgrM5jBPHQvwwo",
  "key32": "4x58AeCyU1WZJXyaP7RunZUVyLtqrmhNiDoketAiP3q6FUmcbGfQ5RFi7KfQK1DvLuCmQXLHAJLiQojJkbSFGEgU",
  "key33": "5vchJW1yUfx6fNn1sqT2fvqmWscqifAkhmHbZa561EkxgpZVQUC3ZLsMFYD272tPMxuPnYSaDZc8GdnogKAmcNxV",
  "key34": "5kyjXWwS6WBGk3b69ENAvnNH9UH73Sb3MT5KCLwMDHwTiBBKDKc2jJb533ptTAohpNhXazPdFYhUbKNmfNz36qCS",
  "key35": "52skwsYFYbix9YHYXr9YFUHg3tqQsNJq9dDffb8cLDRN7WLDdDJY3sngkRvdsZhhMri58xoycuUoEG8dVKMuiTHG",
  "key36": "2n5vx9zGviKnxKxN7zAYEqa8Xqr2GTkbkY7TfcU2mFGqFVCXY3gynzjyrGgvLpUHM2w9LUYJYMw9h4S4qLtbxz4F"
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

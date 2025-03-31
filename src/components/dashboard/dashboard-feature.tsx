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
    "wCboaYZbFL9c8Jy8DqhNkWCZhfLae59zQx12uN8AiSfs18vqXHLAfGtGi21qMU4J9f3tQG8zbUgH9mHj445mjkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VAnk7eGCgBKFGAGQV4xLt2NAk8s3uQrrY1bRmyWV8rgcQP9wkweu7CyJbUWSxDXJ5LkWAPWV3v5MfUZ2ASQwecP",
  "key1": "BCzjeRCr1S7aQ8j6BaayNbNxagtJMpC4KGsL4LSaisao3zWbSXHqaxSpTFmnC2JpmddhVkRr6aMJPsFX2XAAhzd",
  "key2": "rnwpSqVMbpVAaFz2GQmHuUbznjcwR7NFjub99XqLeVshgDsrPZTk2JNKFtUdLpH6B2FijNz7YyJiA3iBXR3faVo",
  "key3": "55cEmtqvJYEuMySf12gH4JvfEKCS6DtaMxw6XjpUYdB7fhNdWLAxbm7oAhbdt1CXwQ3K3zwNEfX6Xj1EY7EqDxJe",
  "key4": "ZPcDvxu6E525bocHFJ5381CZXAVbot1Fni3rvDwnXLv81HFag6UYBX8a7oTXSbocnHLNT357yAiRgFq7YKM5ZNE",
  "key5": "3ganjYv5iBCbTV4hMLM3vRs3f4vnEiMuRRZoywZHW5FCmPneGumm4BkmQmPgep7SxFBnLqjFRE1vKR6fKTTeEUcR",
  "key6": "2y2weoreQ5z6qu9Z2txRZCYYc5YFGGCuUurGmTQCMJwJYMLmoQaVbuhhRyYccyAgoMJhdHF9q7GPHdPxCGGrvaqM",
  "key7": "1ub5cq2MzFkFdg4m3qXNwtVdq9ckzKhzgLgwYq1Kp7rG95gVNqWmQfipKHwBur4C49uz7BbZy5GBkwfwsjWWHGu",
  "key8": "4Ua6hfPLSH3ejXT5L9s8ooYR9JxkzKmRDa5j4NcU62nPBaJ9cznUoAggiEDTdkXC64L3m3e3iBcn8t4D4mri5GX4",
  "key9": "3ijp9ftg87pGstPHFAvPYs8Ury89Q6rW1K4xbAQq3ALPCKgNLNcFpRkD1BVKVQ3tGCvTGXUboXcKHp8E4XLdgV5E",
  "key10": "3TsgK5cfxVDuLYeUywBcGYCEruW9oFxdAM3MVtjAWfJjymYXXySpfGWJdsQp4G5eEYLAqBefjiAcfvcfSGRusjhG",
  "key11": "3cY4x2hd3aaDUiSLBHXEP9jYTvk1UzPpdw7usMTXf1ppuD31PYGZQExBNnZZNoTfTkoxjbuPdKTmzBUxkBDp5SVJ",
  "key12": "s139rcEkHRZgZU7hD7nbnamzia4DBzfHZADKsmBPhJJfNDCTiZvc8UXd5jpQxv8SPRysud392S3SfoGpC4pvz9h",
  "key13": "2yD81Hve1kA7rVS8KJPJstE7mxAEqURmwFFRtGpzSNSzhPBSKo6zMhPqRKdpSH4dACbUsEDFPM2MwwW9ATZG1E3T",
  "key14": "3V5NL733kv4GWi9vbNzQy13hU2gCkBwJnxKjiCdynn3D7YvrQWcUPjx36X2RL6omyg2r7UmTdoJ5EfX6SG8heVJ1",
  "key15": "2qfkPW7NQb4k5WGBUWz9g4JEMgu468k8cSZamaDYNptwLeJi9NC7NmdPwqT7D9kqPjmNDyVSwC62QSkoZwmtZCSC",
  "key16": "3ESQvciRsZxqshg25g2VxpWYnKaiE9WsngiHtm7XsabSDMfyVmCkVq8tmUvdXRiyVNyc3xRce94wcFa1AKs1Na1s",
  "key17": "5tt1WDVeC6VZKpVy2ySWdESvqtqnLo2g8FgrSaSZZiUpjRKVSH5FeDzMf6Vn2hqFCpgR6Cj7zdq9wRYpUdY1f1o9",
  "key18": "2QAmdH1afwVBw5FCT1BsBWDSUnG73SMJbWunnmvs5jdXcn1UFVMsTWpc495iqmBjMNPMckfP7jFhxg2KPmxjzEj9",
  "key19": "67TjuUwKTZKgHKHNpXL9p1QD7foLy4PgkZHc1fYtxfnN8FMxZ374kBy4r2kVCdh253fZ6A4tCsS59JH3iS6TysaB",
  "key20": "5oAyHrmCMNVmrs9pkPQk4N6Znu75E9zMS6XyJsxssXFdFnNjQWzticHfuugcFFNQiQrB7F4yphpqvS81JYwXFZMH",
  "key21": "5KP7ZYcK4o67JXMaEEkkD7dX5A1SusX3YqZm8DaTeRYJFoDwgRLwLHFigeSut8uqCcaDyfTYtNJZbZxpSfVK3efg",
  "key22": "3fWLhJ61RAz1Ho32cBXXYKUQSHh21Y6FbA2ATz7UaXBCE6n9aJsqTtyUxeqAYDipQ8wL2D7FQBVq4SPfhpkgmeHJ",
  "key23": "dWDG7osAa4cSonHQZ8rcrajFsYSknAGjCpFVWjDCAdkzJ4zbLKZcgcGCnmF6nzgb3YcuT8vgZATV1PiHzF8xjC5",
  "key24": "2Woap7K7ycajNYfHzWLYW3w9FVBgPSJznpPhLDa1RrZBU3X5ChrBN4b4iEPH8WX98RCewx6iyTtEJ1GdwHYrRf1w",
  "key25": "2hGfKjpHqXPVH3wqHsmMnWBa94DU6zg9LpsSYxLeKce3iztECNNmtxoMimDbZq5NjLRx5eSCoTkk6q26r9aF2b8j",
  "key26": "kXjp8jDgR7rKXfQ4AgoJkeGrmCXKhM4DHJo483doGwoGFMb5kifB9ABDBznSH361mWEKyEkkBQaiV1vXdNpDXD1",
  "key27": "4PkyJ1qvdjqszPk7M9fQZjCGmyQ2EvCwnBB4yG4QkE1Zd1VpTeeJxxTRJrBAc82C1oFVP1XiNiJ8xdKLTn4TFphq",
  "key28": "4aQTjspmmNYEeVJ6MbpqkuZ6f43ZTiemqtvG7Ezn5kSQ3tL84U6WHbSPRXbJYVgGkZRkTgaig8E2WEBLKJY4hXZn",
  "key29": "sZZbYDsGyGBxU4Xn6jJ8dJs9wAU5Dst8uFq5q9GZpcepdjFoGZJYDk8Zeq5ZfFekK5n26WFWGp9viJo7c58depn",
  "key30": "5AJrE4nhLwkpme1Kf9gr3LdL9VGb6vGmKuduaWh9AdQg23pCZZwShsreJ9wmsLjuM4WLeBGYfZeouxy7HoKLpnzm",
  "key31": "5dKXdNx3wcEZ7wP2VUCe37dDRcGoKBZhb98xtwewNhz7txktL8o9p25ngW468RKXNRkY4KHaQXXbmmEQEk4vQh4q",
  "key32": "2mFmULwBGS6FLLNmpYVHgqsTkxa4d16onC9wKGTSechgGyutvmTsdb1YPD83K9xQNvCBUsFLpp4wdnCxfcdenUhi",
  "key33": "m7i5TcBVvbnknE3GWVhSMoQMV2L4RFxbd7JSXF4CJu4Qb5oakBZ4Bc3ardf2K11A2E5ZRDEz5c71kXgezoUMJCm",
  "key34": "4sRKD1WvxgqxYrnsSHZUQ3hizoY9AWFgSEr9r8hxAC7mZc2zyK6oD4UvGBomABwzb5G18pzTjSArsp2TiAhkZkvj",
  "key35": "5TTGRUqrbPDt3rR6rdWPYjtEYuE8NC3pwpZ5qCVHZpUBRYqKcHutn3f4kmxXv4zkNrRwFSQeJ9wGDCCEjb1ocHP1",
  "key36": "2PUVsphcmLHm29StkeS1JyeZjXoWbLACwG2Ds4pc9otMpeaXADHxCZPKHyTPD2W96WW6TAMuBtssFHJST5GPFPHv",
  "key37": "W8KpQBsd7yByxFGJFv45gA138i2g9a5dE33Pqcq2RdjeZpwRtYsLGjKRVUfsCbj5JuVevjLEKApmCgWSba5PqZ9",
  "key38": "3u7ez7JVHowonUeJZFoVrZ2Y3CpwgEW71s7SHyyQxhnM73u8tzYphAfkTPo33mVKs1G3L2KgMfYvd3NQ2v96tyEk",
  "key39": "5Bo5txFWixHrimoxTb88fbHDZt4bYpU5bqiDvnUKi3P8iXZ3pxN4g7oWZkGx27zgoguzAuoAcA4Kt2kKn7V8y6Zd",
  "key40": "5A2QW5ppMzBQq7GhyghNuTrY2kr4989yqdy9z2YmW2X41RcnnYqN8jY7ZTCH7JwG8a3ww9PGXAozEMRzGw3wLuTL",
  "key41": "oEqj3Dibx97mgdk6Sp2ZiUecZ9VupeZupiCnXycaJ4S9pHkR9YxBvvbwgUSdfXHXxxk77LaJ6joi1wBhDMTi8g9",
  "key42": "5DsqtDikdGk5dAgQjAiGNQmScWKhWnSgJuqj2HzQ9i1eneeSp373mMTsd3yAaw54RUQQxhBpaeDL8LDM4Z3m9p3Y",
  "key43": "g4mCPWF5UGB63ymEbwgm7WwHoeXJ2ycHBJkcWznQutUpSkHtDDoAVRFM1uPszmhzEJs95CR2Bq5inNgTRpGJYxf",
  "key44": "UBWKhnBu9t7xwYZGPRLwNUsmhJrH8pMYX967AyNdks41adMSNiF7AWFtdAmtuQVu4YyPqkUvZfePf3K85T9Qeao"
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

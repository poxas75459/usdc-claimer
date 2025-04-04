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
    "3Npwn1b7hXvJM48igAVTvM4krFk69tBUBbZzmup8PtNEpJQEQng99zmkjbCzzGkmwDzGeLV1S67WbEUFX1GT1CsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7T7FHksY5sh6pid4oM8nDr2A7egeTiqhPtZ4CnGiUswgULnea3MLdyt2MRuJygbKkoqkDuT7aTpDvg3jrKztTg",
  "key1": "23jpQ4HRoZ9m7Fxba7oVrg4EkHMYu9NgWWHa7r3EJ129Bk9Y1uwk3fpTLe9WkNWtobrmmx5gbFPP3fio8C2f1QXb",
  "key2": "3uwrZBuU9JRv1C5J8oPfwuM9z6d2T65cgjYbSWJ7oENZDMusVidMMyxEMkwtW9fyjnGiLLsyi7EuBourZe5FBpUV",
  "key3": "3ocZSvaNitBRxZ7bhdLfRHmu8NdKqAjBLr1a9dZgiEFoDwf8B5jQ2DEW9G6DWfTLYC8YfjZiTHJ3Q5y6rtPYTDib",
  "key4": "5tBUcpujFxsaGHSabDwDZSnssjSH3LeWjmf6uSUJAimoLSqLEWAxePKjABCJqTnSf49V3h8uTBWVtB5CAaJDn87X",
  "key5": "2xNv1YdLyeyVVKEdew2S4kfPQd1nwW6ni2wXzYJeEB4qmXiQcXvkJ5erpUBrSEQr2LyupEZBKbM6VVf1vPY4RsVt",
  "key6": "5taLv5c1TxdHaczB4dk4JxzWcqZCMCv7dgXoewvBNfDP48wzp3ZhMXSYKkzLV3tNt7GXNqcBhaAd8H9763GXNpG7",
  "key7": "fWRKmBEaoNrHDmnpxsUQi1tHYeScTMWsoXovaLRYiY1FycJW6SJFduYF6XzwJZGAWpxpLaiHFP8QFqx7zgNa5YK",
  "key8": "3nBvtQodvNn5u4Gd4kXgbMfueD1BZRyGdpABPvVZda4FfhRtKYP9BZNjEkCwnTGQwFjMZtTnMzG6eTNAm41Cy3qf",
  "key9": "4UKdRgkTkpj86PZNQzzAtVxv3D4TedEhZZmQZE4VKvbkqQNqn1MBeHMGWiKhnYpvfftWufJCGuJjcAxcomZxJMgB",
  "key10": "2JKdwV5cSUkPyY1vq5bjNBoScusNmAFKRDDQ8ojes9uzqrPzwWoYVnZngyupEV5auCfyaUMRe1ADbZgE8rQpUHyu",
  "key11": "KFVvF9gYvR39ed14pnkasCyfoFseRSYYKvzyRXPMr4xGgX1r3fBexsfVxEAuvLv5kWX3K49SuGEtkjfh8vPU6M8",
  "key12": "2kF7ykKB9kELxwgjQi8H1Wq9Wvtw7twE2uY4XM9sRjDfawCfGWc5T5s3rtJJu7mVCFjYCmfgeQBWWK5ChLaRhdUB",
  "key13": "5xWF6gnVRuMEUFW2UwSnaMpQAby5eGZMB6Sar5ZpLHDAgyd5qX41uBuJKDsnCLgtpFhmNd1xqghnmzSY85XejeQE",
  "key14": "2GwiV8mcvjwqhPuxh5FuYs1VhuNz9tYfk1cdpnLCVZaHgE8e8b8yxv7cZHnxGYEPYdwWUqSRRHP73bitwoYt4XFM",
  "key15": "4UeCr211VDhBaMF685kBLLtw2o68iqGhQq9QTScNK6TotSYNyuSvhj83QFPvBNVq3S7pPSMtNsNLkzQGbXzBTLwc",
  "key16": "37yMo8gHqtk6ZxkFB3JqKAQXHQmJ7wCtGghV4PjjGhK5xQq9kFRrapBXSY2h65VisZvnSaZvzF3HQSTYZKJ6oJv1",
  "key17": "3AxCPGbYCVqikjPXaTHYJhLk1GfZUkMsPKo2FCnXQUHvApfxn4SuvquYErjGBYv7dVjmoXrkppKPDrwpd5Ehs1Jw",
  "key18": "b8BnpwmAMjf8b1KfC1x4V8YVinBRPcjQbnQAdzwka2HaPbjH7QqhK1kHbdWXm8TvBy4n8uJP8MSyepyZo9k8VM3",
  "key19": "4ogvnUbi1R1SeTeRM1sh5DjMLwGnatM7a8kdsoZ9a2VQzbCJa7ooDzz83BDgbsXPURQirvaAteJCsS1RnwpiBdSS",
  "key20": "5kbcmRGvR4tKFZEaiF96uyW4A4znvvDYH4qGS7xMFujy5xsdMtR7Qr2WaMYd1rToyYuZ2dBZtfmPLnniSmdj75cN",
  "key21": "TTZR6L7KUHctxpTfxHF5D5BGbZazqW2Cn8UeTTw7Hy3KNuTV2ytqemegafFadyrBbavMrFTxXUwEMEu49F9Qc3w",
  "key22": "3YhZPwVWommrusssXahjNuwyPcQ3dsaQBjEdFGBPyKHsuchJP64k5nTgHReBhHTwzQcXitZSMwrsPsczWewWs1Eg",
  "key23": "3DuhHXBmvgG3zLQFM5JQet25GUDN26zFVSdnvmyoKiK9Q5bb111Yz3zp5yw7nGFscGVJFpQ6gHY4DQuZKJ4ctq3X",
  "key24": "T2K4ddkdL1XgTJVLwBVVwsov3DqFTUYz2m9rzve1eo44E7kASDKgfoqY6adyMQv2rDGLuhVf7STxTQUV7fJcLXH",
  "key25": "5KofDrgEZgDkhg7dpKoY5b2nVBEFnT2iESneWJFCK8dAA9NJ4pxiqNQ1CYVXpuMJnH1M3NihgiSpb9o2BSRn53X1",
  "key26": "3nUgU7cUHTfuHxSVmdP9ivhfTqFy7Avhcohqybp6NQBeohH8FzepL5AaCsZPumWoqSPZmsLLpst86fZRogbrLK3T",
  "key27": "5L7cZG8wAjAzxJC3AmesP71Kpuf75VuuDnQAVEooszrMUCnnR5KGfpXgE2n1xTwQQvCNUhFKn6R22zv7BPQA9mu5",
  "key28": "2MXz5SWyJrNNALfYyRexYuJ7cgip29Zv8APuAvJeQx3wxM8GTUt5VNx3oheM99MBGr2qYBqAUuZNLj5T4xwnhnqA",
  "key29": "A68u1tANCnHJiTbR5szHhkk6xHBTgjBEMnCKdD88wj3at6w4i1N5z9KUZgM25kqau2NYz2rQK3Wt7WsXiMFbJau",
  "key30": "2Z5ZgaZHEe5Hfnv2j5uxgjcgHAqHEyPf5PyybeSVN2bLAMDMqK4EVL43ArP4isx7mdY1YhRr8gaUZMPCGHdDajTr",
  "key31": "3BRieVJjffXgc41xLvG26WN48CcyqMJTdoQXeHYr8f3bw977tvGU4SJxVoZQbLnpEW5Xeqntrk5KDFNdpHSdc32N",
  "key32": "5pm5iymEwBw6eM6tpqKK2EWN7r5JTFXk3Wp5dUTArrLhJtp79z45NEqFkFa2eebfNqam5gSwdtx1iT8cqVnpFuvA",
  "key33": "3qPbuT7k2ciFrEdV9wtMHz2SaKkmSQnsS2x7CCRvj1VzFkvr7hnp6mTHc3QHsAdDJowq1xtNAA6oQ5DW5pK2KVLx",
  "key34": "2k1pPPUYziadbVsb5kHCgsafskKrxmQYbrmx1FsvjZ3VWq3nrdAWKgSgv2AMkuz6MHsBmSjSJbWBG7Gy68Aos74B",
  "key35": "3c43yifES1xQ2eB8znV3KNHqESrARgpP1H9v4E86SasDP9p2XhA7f9NudDoYqmRnTmAwYPy4QXbQ6Bj7UiujLNuM",
  "key36": "3ty7xR43EwNVnyf8RMhPEL9iKaKW3dgrEyExwnUGt8NdKYbwaVxHjsBDhfmZWshfy94sGHYPXqQkf8dobDzvjC4o",
  "key37": "4L1bnsrUvu5qmayCUEkUDaVsNCzX3L5bhbtkQiagvxJqxQxXWMqFG2JRBf7BjEuHiMsMT7RZP4sMUfZ9ZGTtdWzi",
  "key38": "5qc6vN5p2i6BM6TNLT6xBCMnz5Ax5jgfJvXfjSt5gEZfWrU7dT5tqr3nUme2AGq6AJPmkSGDxr157LMtL4VVbygG",
  "key39": "4ZQA9Z6UXkPEuwMtGizHg939bgaTUqi6g1hNPPGUxfuLCX1JpmoJAhNnFLNjH4GDXBBjPTcev4d4uD7U989Pdf7h",
  "key40": "62oRt4tXtTS532uJ2FcUiCckWvxbTwhr5Prr8DVyHiaSc75bkZ4usY3CoUTUyMHLyg4dQsx2h2QVnHtZ55hU2AQ9",
  "key41": "49W7HUJ2Rt69WZSMeq5xKcfbdhVUHR99p9vdwKRVd5u8yjjBvXxrJDsnGEDJZwH1oP18rRXGxYPaFsJgfxG6NKk",
  "key42": "2uepHDSumRNsjgZSFfh4zzoiKTsisGZf7DYcZNpZgfS7Uy6EEN1YWSCQjc1vg7ZXNhmDQUZK8MNBKJXeeH2CtJ69",
  "key43": "3NzXUmH825RTuAgtJTYFCnSoxWh5RrXfvsvgveqtXGzTkpLbye3SEqwLNZ9oNd7gzSrpVAK328FJwSF9PQ6f1LW",
  "key44": "5qgLV35KjezerMhrLn4NRUNbrCdUSXLaAzBf6AmVUuzKbq184pYjiFwtwjV52QFnxESr2J33NcETxbkFHabjeZfA",
  "key45": "4MLJEk1JLAc3mFaqZ5hqdEXiZb4yk6cVoFZNssiDBu8zCYt9sxqH2jGb9rScD4aPdSBEf99vdmWtZCRPvCg4b27z",
  "key46": "3YXWdtuu1K2XZJJQTc76JbSrsaorARVST7ortAWYyeH9m62Vi3Me3u7fnNFo1TLVq8qNNPzxoCZiiiq1ooEdWTDz"
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

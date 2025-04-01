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
    "2WP6HR3tSq69s7v92xFg1an93d4Kt5VagEQwsxikL6CmbXGh6TJs9eiFkUC3F7XLoj5Yn8QrEtmPtvQcJa5KYD1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5svJqJ79jAd8bae3Y8aiLA9dbnzd4NZsePcLVXLgnQfKUVvsP27iB5adgzNsHaRrSN1UDuopYBdEyX4dGVdeArmf",
  "key1": "4BnuBB6hMXBbbLwke9MriMYgUh2FgUEuhjUKjcDXPj4fSZ5q1NPEvPHGPkdLV4CrmyDASMDMtYLw6VLXwTbNprjM",
  "key2": "2qpfN6CFeH45yLVMK4mqMY3EXWapfhDwVzA86y8VmFxig1fNRFnmuEh6QhvKKYLq9FD91KmK38BJ1qpPDEwfE6xp",
  "key3": "42dwyQgKN7mV6617S19hpC8nZ5RqPac5ip2zntNZjpUiUtYaSF676wqZwWsRSck43fXLnD4WHEiBfoS6cDhVqLce",
  "key4": "2zMiJco2ta7485VjYegQEY3KsKQYLbwjJWoVA91aVfAkaiPPSbdueg6ZTXdFsnmp4ePR6vvQcDMmnzgNi96RBgRm",
  "key5": "3GbwrAxjmmdWuXiaZiBxBUECNUrLz7oRc6EF6mFrhbutGLF9u5jckubZFEiGb7GcQ3nVWUAUc2BfEocJ8tRaMjiv",
  "key6": "2b6WJi5vFvtuPeQZKpHRy2EeAdEj2FHV5VqJ9bFEL9aKov38J24tczxFNmyrcsQMWn55R21xjoQty6He3N72wFTw",
  "key7": "4qfhcUFEMg4kh8M3iSm9381gmXrxxxLqcd9mycF1uQpKDUKEEL8XT7CXfWytBNRsHWXP3CXNCjcJc64JsDFUs7wK",
  "key8": "5cXhp5QqW8f5Q6Z3UdKMPW5SC4gBHwgqg75kM3N6Gg63wVNfrPmHue8WQWbnv1QA422v6gKWocQwYMRMvr6ktK1L",
  "key9": "4KmYswnxgu8acFBKmZAU6CdC4jUZLj1hWfTBNZK6GzTUqom5FosnXmRXrenfMfhYLytNC2fXVCZuSHsULEn4rkNe",
  "key10": "4ssqk3Twg28zKeC4XsTybS2G7qDE9bAsWc1ZiKbteSrTixsy75Ktt4hUcpHTnFw6b3QBWEsgGDhpKwmmQbyqaawA",
  "key11": "9DVFMUdaFFSTiDJ3kVq5EL9HjgoUPV9sQy9iB2sNXXyYPN8WF9F877fdUUwj6MhZ93CqFT3Ahtk4EN1D5aZc9YB",
  "key12": "2NxtsRtBQwkbPmuimcLZRpU8axtMW91Vjz5GTmFb6UxpE3vn15tzj6om2uxvnRR7JqVqc2a5GM9cskV9aEKtNgKJ",
  "key13": "4XttcCyronUfMJMbf1ACocoiPvjgJcVEZqPjuWDGXVWRdQ45Y7DF1LxLgQtmDk53PBsot5AgBVCMMQWGzKiqtmw6",
  "key14": "2iFwtLmaP7D66fpfc5aBbekLGsVQF1P2dicmfrWxcLc4UD5wc2qDVNigfL94j7XnoyH8sPs2KXVWyS2CtTKA29PY",
  "key15": "2yxaLMrxmAgo6Sf4Wbjge34hwNBMw5ig2281zfpKF6LULjBsSrR5MedCkGboGkC3J5rZLBQF54Kfz1yjwNR8SP4y",
  "key16": "jvBfqAr2dhhpH81KwNfmUYjiWn8rPAMu1LXSoqdg4tAN67vLM5Uj686JVwKDJFGGZX6BrKrKjt83iNsYo2rJREW",
  "key17": "4sEQrSjhLEK1NpAkbZMkhnUzv7wdNFyR3cgJrKegd4Js1M3hXaDr35Vad9kNw735c6G28Q8GewwuSd9rxdxhpucF",
  "key18": "4v2CELoX1f68vEcoeyegbJxUcXbtT49ShGqo6RgmMuAz89nmRosyx5NbvPyxWFNQ9RMEY46Jd8WpVoFWV144dbkk",
  "key19": "5GH2xkD2QJGv7bMYDf71tAhHz2YsxKAtpaLL5F1eY8ktqoKJk2W4FomqPrpuqwSt7GQn8dv9rXUqj5itARMakGtd",
  "key20": "4DVq6QXyS4BER6PwQ3X1gvqY1VYvYy1P7BBHBqmnEMABWqhix6J8Dp94CPsysguEf3XfD6nWSMsqC4MqTQX2mwXd",
  "key21": "5nCRHHPvo42Dt1S87fijM6zp711DG3RoBcgpAqVqbcQU7hsKQDxJdqbwmkCuJ5ScftFq23aS2DPpaFCmw8HX13zh",
  "key22": "583D5TTXekEfK2No8ycDA8LueHQH7mKmozXbeFYBgNqcvPLyevS66To1n1nS3UDTkVUHuQAWcW2GFboifjEwrhkD",
  "key23": "3YEocAcMbFP32RmhDWnRdvBq7NwLW9MEbEDmGtg8rCH26q846Wcg4VxpFTJRC4Hi58pWgWpiM3NVkJNw5srv65Th",
  "key24": "5wKawmnXLYvHzphhDLvo1aaanWnPwnWvXWJsrnph7QBidw9gjEaFYicqo3yomwzrMpkrUJUYe3b2hVddfvkgV1Qz",
  "key25": "iopugsWLUa7Epk7hLepKKnCxZp7uXGcyjtMhoj8ThHjkLhG5cZtpxA3x4C7UmRvW3EVTuSJ6VY3Dceken1iMRsG",
  "key26": "bkkb21TPr8eCBJRYEAmVVmQp7i1ue1kzV5e3uUbTG3Y5kqgivTNEPczXvgg2uzjZ8xnGTzDEoEXyqq9W5DDn584",
  "key27": "n32eebZe8rxKeEqXRuTGPGmRPBBfnCBpGu6ZM5TyUMnrAQboqPqRKTkPaSCCXyDoqcB2W8pbCmUN5gbwHzivsYK",
  "key28": "5XgYwBf5Dcs5u97vmfkfG3hbGexPA7skKfx2fVsfLWES1KL5UTM9m7jvcZWUxw11ZKpWz3usXvRmQLZKa8j3CFJv",
  "key29": "42Q6JUf1onwtUd66j1hVTFTR3CRdk8TR5o9C6vj2pnnK27hm6au3h7dHVeDUwUcReXdRcAfhwniyZnoN53jBrEhY",
  "key30": "5dHqvNEzjtwgob29rUcXiUAJ2cKbGZ7P7N9cpc9SxPccQk238dfcZ8vFeC13kuFvk2JGLMdqNoqwboBxVL46VmmQ",
  "key31": "5RK79rni3pP4ead8XDkX5bRDgSJGSfnmWEZr7daoKhXPALJfatCZWKDsA1iQtEoUV6nJdmuSMjLGT2v3RHnP9rEQ",
  "key32": "4VzUW1mvEGMYPQXRecNCpr9p4UnX4jJcGyZbgSqQPEidoTegXKb49AUynmjvGT3RejQjAUsCBuLn8aRUoECvk1fG",
  "key33": "KxhW4kZy6F6sfoun8mRXS6f4VtkCCU7xQUzgAAsKw3VEGQTQYm4DWv2fq9B84JytfpuebUp7SSY5ZfTa91Yrkkf",
  "key34": "3e4rsrkgvjGHC7AkZHyTpmLU967VJjyDTYXoQNyiM2QQJcjQrKRMDocuSXfavb19E3kUomyFR8AcfF4xi4REU7uP",
  "key35": "3mSZqPCNn2WjXkT3aDFHGX7GYp3kfeoaTcHQku9N6jzCy5BTa5YaUNXLCd1qqxc9a2T8cpNFPxhTLn3AqFZzKjTd",
  "key36": "3xx2HWQMmf1ixwoUFv3TTa2ZsmFBd7SeH8TimacJYsTUv9zSPqwwFhQnkiP8FQchD3s4QwQSnwX7dbshWfzqTBbw",
  "key37": "3sB6PNt73njPsyUoJ6Uae24HV1LvihhagML7VGnnsE5R5YtdDJuYaoTYqjH82H4dfqbarHEQn5tizfLgNpPoi83V",
  "key38": "51JgQC6vbfn4bCekUtzEeaNVnouycVJzbkZ7P53Af3VHrsrmDhB4oJZYWHkSY72r6GsPKdspVi524GpH2XCpSF1h"
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

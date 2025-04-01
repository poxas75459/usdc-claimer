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
    "3r5y1NJiHQTwNpqFq8XooNX6HzvYbG9MNeKjXymRZfaCYnzzWULtNEHkXorhPhLF5jmXvX4PC1Ep9Y6fn82t4NXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRKoWWD2D7JLMNKSzNaKGFYqDXnSyjQoRx4gwJ8QdVZPJeX3ekjwrpLrkrbrcb89EJRwPVaLttgTQbbTcNvD9B1",
  "key1": "BabexiHXfnMHP5Lwim2Av818vuYPvggK9Xb1hR7kiUyNGtZPqYRq4X5Ydew2UqMiD6FVdyiUmZFJLNLvWEk8Vh9",
  "key2": "64pPo7GfY83bAxdU2y9h8CyDX4XrtdRBf6RvWsRZ8gL8mRB448HTXifDjeqQah8ZZ1HDJ3duPPd617cPYB7YAvTc",
  "key3": "2mu2iNsPknNg6kFdoQi5jgCAH2HggAPTBPBbxbhhvtGYGwcoNNKVHuTRwD3yxmbQpAxdU4EZVjd4C9r49FSVat74",
  "key4": "3PtYe3qVBMr3Vi8zUdfLowMerhpq8g1DDjZ3Jo7FBN3myaUasCErzfauo5HazRaVWTbVP7RnPEs6vvgiX5qDRRPp",
  "key5": "4xfTQ2pWrsyd14R2USHtSMhE5p3qpYXtWamEYq9t6Y1w318Yvviyszuvb6qDE1cbRNNh57bSmDtskEmMRVh1QPcP",
  "key6": "5khJ9n95Am16pNvmvvk9uC9V8wjbLgefQSFTwP7Na5iyS6N3L1phzpvkCCCM3KZxcAGFDQRWRriVyq6qvhGjU3Dd",
  "key7": "3hYkLe8q74N33yBnRyHRgyA1xs8oKquWt2L1brHwTCCcra3U83yKdeU4VdDb6gAZAi9oCd56mbVGQiaNS3vGxru4",
  "key8": "3RVY1jBYhcsCqXW1CfprEpyFb9dZXaYF4k8KZJCktBVD3kkPTSeNHBM18Y6c95pyTo52NMUzcdeKxm6gzzkY7cyA",
  "key9": "4mVuVhmGs5cEZQJ2moqAFXiVdcgEoxDzApnWdDNPXpwV1D6bSExsCoZA1a4UkE819ixBgwJq4nMU69Ug27FRQLSi",
  "key10": "21hr1q2LfZnShGN53WGB5fdzPJ2uo1FGP6BJsJp7WsRzbwQyiqhnKKLxTG1u9XXBAcgERp7YdfNmwzFrSPLJfRUh",
  "key11": "2VYweTs5AZuApd5kKsHN6eui1YWD1v24XhVUAzPnMsq2mRkF5LuwEcn7t1kzMENSyHcrKchAmFQ8PBECZ3wmvijV",
  "key12": "5ZTuPTd6xc3i2hixfiFfWVNrWnnekwRhuXEVaGgsVJ9Zhv5NUx3tqLfczLiRp76bdq2FLTPgpoe3D1uekmzmvd38",
  "key13": "2Fhk8A2sTbfAigsXRyVTCRqxc397fY2wdJLaJFQyNP6sUWQr4k81cfzf5mwmh2zZVXTDCvKsjhbvbRPAiBAsGuFp",
  "key14": "KTWt4WKDZGJe5Xfxj4vC7a6UAkeCrCLHPHmnUzYFoTkSNGoogpeZPzBXho6LN3xHuhsB1LREXDF2gGrdchvWJHP",
  "key15": "49NGcg55SswJrbzViC1EeNdLUD4WJYFYTcwu4QZZAkYPTkERBJjWUFAT99CD7rzUPhLiXKWTe6eAnZt4SpyLCqfQ",
  "key16": "33CAEkMjsRziS5u3qiCw4FH9ovca6EczUVen1kuuhHo7mc8Ydrzgfrra6HW9wQNBNcRnPBaqgVTFQcDk3MmF1h5s",
  "key17": "6Kj846da9dZo8ftvTowQrNzkdLCbCL36sVdjkX3As2HbDSS63B4HNHQGeq3grK1jN92Yvs1dSYYeRdK8xfPxPub",
  "key18": "5o1Se7r48rWiiNMP5rQNDaPaDQYgwr4rGtJuZQLEYT9vXstxUxHoLoqSHAjJK6SkQb1E7ZrCMBxReYbGsrnzNapR",
  "key19": "4vRjxh6bT3eevrouNkYehBE1w8Ppo7iLTcC8JpDNJhdgf6UF7iivHvoLa91mjNWWWhMwFUBX2Xbyu1V1V9wvvfRx",
  "key20": "4iXvQGXfNQuG2Zb2HPyXDNXbZxCGYZxLh8KUJcFYGtNwX3U4zFiNokhZez5VrgjdETvcnfZsfumomPV9teEtVnZu",
  "key21": "2Wr38ETQVA1nGbEqB1TbUkW88FYpC66263nKhFpSmvq1L9TGgGyyL6vTYy8uJNYCuvMgNxjQWbhDtEduDbctHMDQ",
  "key22": "5wg8RSFUZNKZR7YYvXTDDZ5NTA7hyTfN5RwMmKcXZiz6yQRBqG1PypDfA18VgTX654nv288T2soZdXDCiC48AxjM",
  "key23": "5hipVKNYn1KCHm2efarduRKi8UiAWaDobPsojcmMrXq3MmVTLjnN9WUCvgVhLF68GXmYhcEpj4AdiW9pLvXVJEE4",
  "key24": "eE6HxBd4ZwZw6As1ruUMkJ62NYcYHNDd2wUJJ7oUHuGQ2fJGdbA6NuCPE6LmE1RAoA4JZ6bYeacmeursiV6B2QV",
  "key25": "122FP1cdjvEYHcdYVKyQV3MXLYTcCmiHCreStb2xGxW6iQkfSkkXUvd2cDGWqtqmaJDnoWDRkj3M7YPpkWpSTTMd",
  "key26": "5gVshYHtGZX2rXnHNJueumfCyX7CopZj7WFYpmb4Yu2JVJPM82vMDjd6mfiwQpRVpqK1KcTRDCQyVjXiB2N735dH",
  "key27": "3khLPAR9DJqHjKXy41N9BJ8icqGthd71EXK14nTN6ef15UFsU7r3cbrKhRg5rE2ixipoGm4fi41yN3htjUwm98hj",
  "key28": "4KdLJfP49wm8vpVoNq7ytmQFeccvUyFxabqBzRgLeJUbA56esmbECcTNXo1NvgWTCJZwfDgpKLzHfQAbtBNbrJqQ",
  "key29": "5eLZKqFNE4VkXgcAraVVKPABYFiBZ5icnW859ztFDPhQ4rZ8ZKsFQYKJL1sn4hQZuPiThWx85X8ZXuXVK88GCuAX",
  "key30": "318GrsyXbj7AWZoNubpyEs797wnSoKeYQBsdNZvSJMvY4VWAHQRwAypoP26x1VjhrYtnDKPrZGo3E1YLUpvbSp5p",
  "key31": "65H9q2xXU66dSfDPjvrHMqhyZEPgQrs2EgZEwJFT2UgDhfazwrAKdy1C1UVbXLb3sdTdFk1gVBCMq4ozYdcJWmRW",
  "key32": "j6spv2Y7DMcH9yWNXCG2a6V1P6UeUpikcuKxbrdaTdsRHWWmWSFx7qsHaPk845nhDtYPEdADtKgZcBBgRTewBtt",
  "key33": "495fuY6Ebt47eJujaDRCYAmLJWfJozjY6NjdzaW2nh8vukbha5c9ZQ69HEGYRShAVp3uCxRmoTuwfXXffcDpopiy",
  "key34": "4o8ekmD4AxZTkGcVAMFsmwdTQ7UPhaDeLKr5fvtzLbLk8Gvj82z5kQNRDnjx4JRd6uNdpVKcciEadbMi5StPzSf5",
  "key35": "2EpndfvRgLsUFs7TV4kLURjATMCRqFUafnUCEC2784cjSMeW52jAMqkPPiSmAiT883DTXVJB4KFzyQ3Y8RocudT1",
  "key36": "q6fDFKEbyhcu92YYcER29Q89xcLwnWcQQx4oecYW31Ea2wXBBFmcPvAzE3PdMQAKkXf4bqSm7PuwEQrDmafnFar",
  "key37": "5VkjEZwFUVGN6TuRqnsSH2x3XyeFD71u1PB6gRZN7xVwXohUDwnKjcAv3Si9ipnETUdrEitWdyGg7A6Pmo3XG44v",
  "key38": "2p1vdvLUntyqiujkbuucqukKAV2ZtvyPtuHQMF4qLnyNUFve9cUYZuhAQyRQSewP4FCh9ZaJneuaUhgPdwrgMCWg",
  "key39": "6TgZtWnSkANUicyX23ngAz2KWvMZMATaVaCCjVEcZ6MKy8hei6quRcvLVAL3Nvo1H9h7WArVpy4AWiK7sFX5pwi",
  "key40": "3LHic22ee6pdytsNYTJRQ778PtcywnGiacek1vqdH9WPTj6iotVto2RzWhabB7Vr3iacCBUCtKBD8qnfv9figeUU",
  "key41": "3MhuskgHbiKoSBzpzieCmhhuUMCgjtRuyWQiTyjyYXnPrHkCPB8qupoKqUCEJebvx5poXbuH9qu14v2xNYFM5rcG",
  "key42": "42xJm2LLfRtiMFbGBFw9sq3uoCSFDcrgJtvkjWUaaZKTy6KPyBVfPbj2xX7PpYh3yGMR8b5SBgcbHPhkhw2YZSEP",
  "key43": "55dT2MbLA5kpk4JQCPT16ZqFHkMKj4S49rF3jLbdomoC1RUEWnup6xLSnL9xUSUwdGruyNMzdrC3EPqq14mo7kLj"
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

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
    "5cecGRJg919ouJXiip5hRCqvTsAeUgZ63dNdSR6iFQvKL5qKDaCvK6t53dsqeDMA3rAeB9PLLXteDpyQhhbRHfVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jMxUiujoNjz65L8v6bKcSwqx6GEmz1aVXTY7bUupoHoDFx6YeMqh1i231yz586eehpEuk36nNufdjNfRQTGJCpo",
  "key1": "2za7G4A5MhqMMSngzEVBNUa7wZLztzpes3UmX9GcEysMSHRT7vtHvG5mmtZJffvzkM1LrCVdJCXQc71tfAg4xSpZ",
  "key2": "oVsEPLh4j1LU2TwLotqtdSXkYuEv5v77pecf4WVTRPPrnGAzHJ6gKW82gtk8hEj5uBVKsiN2bmzRfQdK2BhTbbs",
  "key3": "wig9b7qmZ1PccLjLC1f6c8QWWJvt3EujQg29mWfPuvSqtuNxssqWjiYFqhnLhY1aNWfZVgYGSkGtFupaGFimyav",
  "key4": "2QAW7RSiJbKwGuN7d3t8UAmz8Dzu1r8yduAeDMmYsVGeeSP1j36NVtNYGYyWcx3AEBDK2GNc36pfRup25YYprXfG",
  "key5": "4aUNsfgxXgfDagd6qW6btopiXW3C6eTMg8s6mSwkpHmF4CksLUBeqiveWzcRozJujnfwZe9Li5H78C7q6zNM8gSa",
  "key6": "5fhYaWTCzhAFuXMhnpajDh7PGBvbSr8u4Ya1GUGnPRgGDu3Tye1Mk5ytXPiDB7synFPjvh3nezVimZJ6HrPEsEhZ",
  "key7": "5VcD6wiVQHf1gJhwHyuGfd9NurhdGyfx9rZjedPkxpSAzLx7A8wtPfs4FWnmMdoJuTgNnPZCPtHbPkCsVCd8k9p7",
  "key8": "5sAjXpPxjGfyoXZ7rYYkYrKrE2CV2AcQVu6GxYCNQa21wKhBsc6fq9UzBnkMSuRM1n85xZmiHAgeKn1tNJcR7Zvh",
  "key9": "4Kya2gttAMKPLXTBQ2vz1yYV4AZEx5pd38v8QoRqueHJrkXqc7fh8W5E9TamFXkmkv39QMjNttWnYW2fEAu2bKMR",
  "key10": "4oPPdidt7MvgwKxRvC2BxX3xQWXntopY1tjKrb5TkyAHTJVR9pzo6cAPR9D7jkGXb2JkGcNoes8YbRKdVQyFLqsR",
  "key11": "4wwcpi2n6rRG6FmKqdCzKvdZ53NyF4bZmJ2qnepLxsEEjtVnRDjfDCcFsYcN5ez4i3SeZhEAHuRDE1JRFBj1oPe7",
  "key12": "5kzb76T75wsScGpojea9BjnHehUTfgsBNpf2FSC3GAzpx8azfmnkSj9vfg6KMGi44S4KpZJjMn1a5XXvj8TNF5sp",
  "key13": "4XQMXq75JT9DqpQyRX6VPNsBi8Mi61Fe9L7pEeAFsxS3Thh9ZYLPHEHMVwvvUFEvma2Aq8k4X9jEEpEVqs8rPZmA",
  "key14": "qJkN7pjfxdfkoXiBPGgZ5nTeMQEiV6f3gUdmxcS47pjbEh7bNvsaF1VowfsnexigoK8H39v3qskjUjynkjUcnPJ",
  "key15": "bT29yTYs637oZan3wyd7bJZw6UgZ7Mfm1PcR9ufMXNLHK1Xc7JMs6LjRqzn7wVGGheqgx9omVWjoQWc47svasLT",
  "key16": "2XmaxFZk5gqquyBuk27gETLPwVwSdCCjTSVWDhYzgaQ6Tvar7iTZQCJ4SdVwF92j8URy3NE98QmmsE4eBtiY53wp",
  "key17": "4xPvPYiRaN62ZwjfXg5gRDiXjM3N85bdeqv2sovqDTYHkGd5w5TDHcHEYu1Ns5kmhZCEUkeHTjcyBNXvhJe4NWX3",
  "key18": "3k2scxBGauycrG8NkJJBLDYL7hNL8WGa1aPtxENiNBMRufJcFRJ3JNyPUsQteq5p7z5NyGYeHA4ztXzJGnJZfuzz",
  "key19": "452PTMQKQ2EbMBjK1zfPBMpwAUgPBM8D6tUM1WrAe8sTvPmMncVabK7cqL5ga323ftyVf6Y4tRvsEVnnyzUsTTjA",
  "key20": "58iyuPdiwtpKcDsAHrr75GXoNAfqXCzEiNsBL4jvFLRouGsQN9DGoicNZmkoaAmjeE319P82RehgxhbTwFGWu9pr",
  "key21": "3Pzzft7bWDYowErkJkR9EUiKvBqzv1Nmm8Jd7hVr9FYqr1pqhit44uwndnJ3JQ9eFzeFtEfCs3ok61ruCcgGhTRL",
  "key22": "PEbH3LoYhYWTAcJAGqNyNqhXkegK6WNSgVC2UJYYn53qwwgrYnMvYfgKS1PgbjfY2SrLzX7v1zgh7Fg9Wbe9w1M",
  "key23": "4SvjW7DCeoTK6cbqrVNb2qAVpBDJE9djC2JDYYSryWmTFbL3dzmmFfmxgfRTmN4dSzGfWwo2F1wj1srdTWgkjhY8",
  "key24": "RE4jxABvKmqGjFnkY5dyexwWeZfmKqk7g65FkcaCtPWkE9F4LzfgTcsHhqTyiooH1wS31qrSTW7PVQ9AxTnezJt",
  "key25": "5tEmvphjXNDdpbDXbN7ufAmXsYmPjL7r8JNiFZEuhckiUngVb46G2iJsPewRW8xNt4QGAPCfZgs1VJz9CcuTaLJW",
  "key26": "25yA1fBxceQjapdfpXFNTFXhqZLc17sW4nYZox719JHrqVT4aWi7xpmHWbbuGuDph1Ptb9DkYL7FLz17gqprhHvs",
  "key27": "5FhcqgvLrrpbG3au5jctbZgm4xaqbQnkz2KznyoaGtVauMQeD9e1qUJ84LAQ3it3u7SVZfoPEMXf7YuGQ25svH4A",
  "key28": "4wuCxduebCPZ3eqbWwCP7pxc7BqnKpDUrPU3WmA5q1jPp6CicwUJkiXV4B61oTyGvsZxCTK6CsHqFFhzeeNVQ1wR",
  "key29": "NXrxRCCaXyqtBeP7cP4KQg29moJo3c4Gcncswh9Qct3nnTtzTRYnEUMU56JZMosTwZMqZgK591omJhQpUgphwsG",
  "key30": "5rWsVC4Ys88YsCBUn4QLi59XR8Pjn3jYe746sSCJcmFTYfogS6LtndjwsQsZ1AqoywjDYzDsAb3cmEdG8J6Mt8fz",
  "key31": "21Y6nJgv5LxiVjRvDY4BWyH2vourDe2fSCQBU7FmuGh32HM7PiTZpu1DbxvvPM7uNKnRFaTTLUW57DwzVD5Nweic",
  "key32": "4JsLMGa49h7YtU3ak28aoETnQhruSqb9tkqGCdrHPbNhhir5Fy9EhHX491UiuZjV3Wk95HYKyCfV7AXPYMDWQjgv",
  "key33": "31XH272tdXia7nLDJLHJrx41BwfybnyaUTZWab7AKxS8dtyBuPHDdHVogkZ2NmeQrVYEPZ8kNaBaCZC1VxDoCjQ",
  "key34": "2xGgpuoHUKLDsCBfdT8YQxW5a18NJKVpDBzthtERpYYvZvjpegnBdFwwzSwgCS8xEromAUzZyFyUzeAy45wZBrbf",
  "key35": "5z3KcEvZW4ynduivhKmPN2wbRZuXSXzDXxJVcTRhmduKKpQvx445equXvcrRi3tz7gNoJn63U5r2zURaQccyHdHu",
  "key36": "5Zy8iqhB3JJ8irQhc8av3T5n4vhYwUHfeUNMtJp9eAvXZENqzKsv8U781ATmTwLwjY2LUVoZFtSvbjYE514sAs1D",
  "key37": "67bNyw7zGsB7Na5X5gatX21ufx42e7qSMyYW3hoioYNJqGxVkGJPZ2kBPiUrf29oASXrmi6Yxq3Q9Mq24QCkST5a",
  "key38": "2CAkTgJmFbNKgxnQmaqNRjaQGqGdEAhyCZgZKp7yiFRCfXSHqc6YqdTyupygKz8NpevfZznYRrVmqHcxKzsUvPKc",
  "key39": "4HRVv198f6rCPdRTXf6G1r6EUiL6XZ1cKCCqhkVCN2mc5HEyndQcgnxv7YmZW1cSLa39ENWbCx8YdAq6HtZNZARx"
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

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
    "4R3YfQazTLZGAB8UpAguMQhZN8A4EMTTxHusAnhts8py3R4SBVKHwCvBG85n8zixzPaJnYqCHZRveK6PfXVCzFev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZmNtJdzeCeuRZ3htdxLdRF18EYcnVGK3PXfb2Emmq6CvXWxjDkDAbr2ZXBqmMzvzFPeEvXCegZ8DwbmWasU7oa",
  "key1": "4E9BAFLdKsd1u7YseHU4Szobd3juw8MXChk5xUEBwMUAXVRghLfqqrFFub2VLtQ1KqNwNLYkgQhTdga7oYQzs3pD",
  "key2": "5GrViN84McVbdBuUxrgmRsLvtmZaQUGF5eizHzYJ62xzPQZviVdxTj6Z2hCvDX662YafKYgTv7eeddQHt8uRqpep",
  "key3": "4RmzHkJPQDktGimHtCDa3yhEJA3GrvU3Rmea9LhrbmHMf6uFWLvWgUAvu3oiDzKpq7cim1rh9R4JUSC8EMMYuvMb",
  "key4": "4QK6xU4Ey8JwiRw4iKbQUthnFhucjdKagkystuNz8oYaGAfU4Vx46XeSzqrsKGNe7ako4Rbnu2ZqwrUfxrGePgvB",
  "key5": "2Pdo24fxPmdRnzsZVmXgxqZDpbDt7vePT7HCakwq1SK3xEvKHdBvxpew1Rxf2Zu3SYqfwZaXPpnqnCCJjKB2GFU7",
  "key6": "22Ff1hWhVnBCviz1hH8NedXznsSQvih3PzCVVREnTP2h8qYpX5Uz2xR8Ukqz7WyDpmkE2FwmzsJHL25rEmrayQt8",
  "key7": "5ANzTqSxBSkCMoxGKRsKbXcgc9VwCir8gHNuMo8mPgbXCBQkty7YvsiDJqtimA5wXvjAdgmZj68t6TdjnkrWrjUD",
  "key8": "58n2QoFqbcerBi5M2EhvBY9kqgSXUdTSH1LmbtnzgKdfwHtYgqspYj5BPgtjTq1QoV8iyKYeiJpphgomptesehus",
  "key9": "2JPyyhGacveTpUyfDWvb12yw5TyH5oV75zVdPJERkdujskroucPo4tKXfa7EdzHNFfjAAXUGdDtJRHkztqndgGcg",
  "key10": "CSxjks4ZDaxsPyiNMwAp5nDPiYo4Vy8bHMacsUaowv24Wx8fZ4rTtjUCLmPY3McVVApfmh8m8Kes8n9pdjaH7MA",
  "key11": "48EcDV9qGFfjr1KfnDTGqbXYkFUFc8roXNsVoZqcjvqW2bpLcEuK87vyCZERsVfWpspSWqPSb3733488pk12o9uk",
  "key12": "4e6G3txgKQ2SX4c32PEwdprUx81krC7QFxoYWLvhJhuzHYDqmU46fZSUxAKUBbjE8qySKiyqWWGt2HrkeWJTjQQx",
  "key13": "2nF4dbPZMcWDTzFV1kDwEyTzD7vDLMwoMe4od3DKU1etFfLv3XLfbExjcUJf1DrcpzW5WLCCxKALcK35YrXZMRgF",
  "key14": "5DXzkVcdXFYRvnBkMm17SkTRqvzLnkftmeDKAx4qDQ29zDCUgtWHM1Q2DspY8tN1BN1WCrAuydqtVLf3yFK4PPA4",
  "key15": "4LTNQPsQaE8jZevAqQEP62GuzQJdVdawuBCf43fV1B4fRusdr2ZU4KAJApCMGsu1SzoXnzSJCMWz28sdbvHhVGVL",
  "key16": "5oZ69T1tsmYi4hZwLBTxCJLk7m5awdQF57GDQ9Kb82c513HdakgWxEM6ZwB6JuQJXoKGwv58Y91236TurDnASas8",
  "key17": "2TuSZhfychznynUPuQ1n8QSGG4AxHg6MxkjQ4QJVpT3fnLRCXqWKZtTMZgmVLicoFbHmgHnvsAiCT8xcitFNNPNt",
  "key18": "2Kwgad7TZvJ2UieS5tUQgjNPBRvWisJFxE3dU3VrSvSj9qT9tKNwCWF8HaVcdFag8waBQnnNzUGkxTjrDPhaHNQu",
  "key19": "22CDmbX4iF1BJf3i5HR5NfhhYRwqzViPNQDtwPs1MeimPxAu19hgVfQ2FWW7eobzuQfxP22kScFHK1bTuA5rqbXg",
  "key20": "3carFGn1rCW3ZssRef3Cqm9U2M9sXXPfJ5edzZw5kSwmEzSKhQa958cStPHG9pC9XXSSwus9r3YtvUbsx2zPXMBy",
  "key21": "3jt48KHUxP6jZs6KNECu3dJfUtEqDitcgniyYGwNnemrMF3Xf28ZMyTRCRZCMdKd4xMiKxqFQ4c4qS3auzqh1Vxp",
  "key22": "5jwiTitKgfiUEyY4TYUS9DKvwRD6YMp7KsirqDZTc1SCad75ZiPv2Yb8cS3Ea4GCXrQ6fbN7fWVTJqTRjUpHgB92",
  "key23": "5GqdouwdGchnoJbrWcpGqZ6SQhtJf3USgW35b5PpV6P72tD35757Mz34qe3tBtKNfjmdhrgJZcvC8T2ZsEuteRpz",
  "key24": "5ncZHNNnxcPZjybUfS5xSqdcDE1EJbxQHdu6nA72XuV3SJKNHRzXggEtUbTvRKFfuk3DsS85wcwXBZPTMyUoqfwe",
  "key25": "5mpDnJZmvBo63h97CeuRFbMoAh63piFgRtJcgznnqKD4PMY2yKnapCGEfzN6DatiD9c383M5iRR19mruWKZECsdj",
  "key26": "5Yf8GAvwYQXPpfeo5GpX3vY45n9TUi7cQkBoqVxmVHZBpbL9s7pAA5up51z21n5ncxZeaPZhMQBDkYbrBMJvh8Hs",
  "key27": "tDHxF7gUUy5oNahwR8XwEv7jEauWNqEHd6if5VFi9DqtKPGtbSozWxLsga1incYPkAQFUUdxmdZkQ2Sbw8KKosf",
  "key28": "2TL612UBNW9Y6eYYcwAqPava8XbWGYbyVXh4TUwjqRtLpQ1YnSqiBL4nLXRANocjYFjMEwPWWsMZEipSNANbrhqv",
  "key29": "2frviCcWNEbNNkw4nDkprpf6kZUSnJsWHvc5gpA2qmGjH4xx5h4qP1LuxYsLSsesgVJ2ja7po1qWAJDAkwWtqtWL",
  "key30": "5ui5wPLw3HVCTFjcX3keL4RRw6TNa5ToSkUZLphd7vCQTeH4wQ4TfdLZjRjoVzm5cUGVkSTK1gbfpsocUQjGGc1T",
  "key31": "5HsGQk5d1wBUAAVEx6hFn2aY36oiF7t91oEJx5gm4qLCm8pMu9spbG6qvHfyiokjW4EG7Qg5RzgP8hYJrTPhGwKX",
  "key32": "4UnvTbGtroSJvNk8wdUHZz1V8YgxpuApRCRorSXyVtZp49ufHNJTGJpDjYHexLdREhLmY1mR8jT72bWpE9kq17Sr",
  "key33": "5hSb1EtuTEeBcVqgqYPSuCDaJKzf7v6RZmx3TwaEecqfizNtuDZHPY1bfYQ1WnqWd16aWpxV8RdJXTyKt3toqJ1i",
  "key34": "3pi9gSTLhSHZzDJwydvBFMWeiytZ8QAJNPtFjBSAWvb8AAjM4LeQw9jt6TuyMyF263ixqe1ryeWG5baGcrwNdbu7",
  "key35": "4noqHv9axqwpud1Wq4wRadp6WfjH96yTcE6SiWteEns1dDoLe96kqLRDFkyGnqaefoQTU7CiPXmRFWH1w354KaKU"
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

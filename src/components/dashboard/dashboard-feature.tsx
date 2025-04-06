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
    "2NCVCTmKWE6uXs8HdxCsBX7cwmZzyby5BfbbhKztY3Nr6frdooL692Tyh7EL8KhFDp1KGfFoz3swRTeMCLLov2zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z4Ghb9ZBggr5ZGTpMoVemuu8xKCCbjFV1yXkSZtV12Gtj1sJxCToUtgvu7bHmR5FVFD9LXvqawAQC9zgmJqj6Ri",
  "key1": "5gQXo9wghzxuEfWwXybeLypPB2vK24AFyqBKGn56qVom52VTwazmC9x9S1cUj1nmPuN9WS1JfG7zPaSTLVFe2M5p",
  "key2": "4aSV5YdiHWhwrSjKypcAXwDWAwBiQjt2inb8XuZ7jE2M3p3Tzn3Hq4p5HWmkjp2Dt6MCd5sjPRRyJ1u2BEjNCJEo",
  "key3": "2rETRguxXuXJJdMEG7YdUpaVWyDPFEL2ZUkc7oGHu8zyPgoRJ8KY1T7K8jUu4QsHi5d6zfcERsK9uQBmMrYgTeyu",
  "key4": "YJGC6aMauTbCyDkC2ugJFNxWySJcfWnk3fnMMnfskWc4TCSGMPtwDzHwFZTTNSiwjXeKpSBtbMLduMu92i4EnyS",
  "key5": "3eNdVoXdRhu5tTvMHNM6W8LCg4L1L6V6BQ3k4t7VmYqpFxqzk39HHHFMMYPGFgtrNA3QoCinTY3QZQUhEMf3trmr",
  "key6": "8xggQN94e3PhUpYxLFv5HYA3uHnyuwS2pHSzwK9Z8LQtYSuJVwAf8Yr2dYcUfdHgRea2WACs9414zKhefeK1JhN",
  "key7": "397PrQdfTFNuABHWaXf641CbNf7FRK4ywGTxJS2T7TQMcaHPTDSwb3P8z1XYDXGmTEGCDCnmpNAGXqczFLAw8enu",
  "key8": "4rmW1JUde6YpvxeXb7ShFF1ogw2WsoMTSeXvKhwBEAJxLHQBoct7E9mBZCSiXwBnb8cAMHKmCC8grivsfTKqywAT",
  "key9": "5QG8Na2PoXqqudYuPRzJC2rCGXry1rAtgB4J6Ap14Ep6RXgPbhtLXyTdfLJVDJpdp44Lx6ozhDoCNyrPSqLKhL1f",
  "key10": "3K1vwuuH1HCc4YQaWoVeEJjm6Ub9EwjCUGavHfdYwVhZjERhsuoGrVNu2yWPte6eTYHKNNYFEKvGTigXcuDfR8ET",
  "key11": "j3z387rWSY2YpSBLHX42gbNevz88nGR44orkeK1dYTTpcpg49rmbhSVTyT9WW9G6b5nDLdGGyqrqy8np28zjphY",
  "key12": "PYyuEgESiGf9H4RhhkopwYhtGeP9X8Scj7FLfGxDoTixQcADtfCiFNWuNBfU25h18EpFVxKZFNai9mdP59rAVaM",
  "key13": "EdsKG1vq7qdQHPCJpJFppSXWpGU54ihhXZpWLmr9XrcGQTVjSSv2H6NBZ12qjEfj779v9acC1371ncUZSjqUwgr",
  "key14": "4vDBC6dG7AqWNiW8RuZPcHCq6DeSV5R5iM6xoQUTjPcbEPoFYt3ZDf8mTHUtAraYS5jN41PSaPrrmtJTDZYPfPEx",
  "key15": "5bjcfyETnx4LJ8CX8J2URKzFVnkJZJjeEeMVHuVifpiFCXeTqeqTEVJY679d6HE72WSM3Uz1DoPtuFNccSxnz1d1",
  "key16": "3FP6bWPaHUkmJSQwvx4rrZAQn4fGdP9YdAraBDypHmjJT6P5xMWq8g1bWdkV7DqNwqnuwtT9qMohYbkZqyeykB8L",
  "key17": "4Sg6xyXnfZpP25B6Mv42YZsjcqvTELXHZgAZeYSqsSsJp6d9o3SpmeoqxZS2XTpQcidzPhPVE8oMCtTdHesBdtN4",
  "key18": "3VvuCQRiHxeHTM9J8sTe2D6Jwke1QKX1qJ5tmvCxLPMbTMdxw8ioPEbbh9EeqKRXVopxp8Zkfj6g7QCoYXAe3GYi",
  "key19": "QAWR1mPKjQzVQMMTZeEcfLJ5EyQDCE32KySZXyz1tK3B8PaqSVHxV2WTyg9gQVdVMiNrbQSQAgaJvmfuEqbaGG3",
  "key20": "5Ngz6oY3shqdy7fDDWhFFo2qiYdpApxwyAYc4ttMXKAqxFXiWKwoRSu5zYRAPJ2PTxs41oL3eT4XsYhhHSSkuSbz",
  "key21": "3U9kP1zGbb5aGgN38YKT6wP72bkq4xM2BPo37nJwZE2NdrfVGs9GnMFpZsSDfzZJ3wZkwU86RhgCDUMpeR1nTL8X",
  "key22": "5os22wUgSNZKu3zVj8Poq61GbWBcjCQVDTH9gksm9pXcRX1byRL54dSGrKfGrRbDheJDU13dqcbv9xDFaznhV6fJ",
  "key23": "1JeBncCX7GwzkubnZKPsjjyTMqnWTjbPs1yMLoD6FUsFUeBkKwmskAC2VXakgnVGyUhWQmLavWxYPugymv2ttGs",
  "key24": "2JDrvXWCY8dgL8fRj1y6b3rUnYDEUkHViVGjhHFytuMGdpFtBg1TJFFrwQHKpPTA2y4K1PEfkXDV2nRixcFFH8uD",
  "key25": "441xDE6YYVXZkrcct5V3h5Ye9RU1MF44nX5XdYnoGkJQHi2wxbCEvTT3GyM2i3bciMVKJVSpK8KP41MXfKkreeHA",
  "key26": "5xrNGXS4bkLqkcQM1r6TdTo3t7DRYvXF9TvCac9BTe9xAC6J6kaAFe3VFJnt2DUnNJAs9ytViyimDfoxKJ5Ded4P",
  "key27": "58JtyNwn7YYzVym3z4gWS3Yktz1o47fHNPiy9HbsdKMCDv5jw4Ck6qeDzuM4C1TKfc2kjUws2X6P2j3KqmyD4gaS",
  "key28": "3pBWUQ7PiF7cwWP8ZR8qjjjaW9o7FZuPfjyLduPFZhYR8pKKqT5MAE27wZbysmj8fEjPHvpt7J9unkBFzi9vGdjN",
  "key29": "37Vv3H5LCV34jumx6wiuD7cFBRTs2BKEq649A9NNPPGGpgAAPYH7vhtJGXuSBG81wnofwrP7kbYYHj4n3SJ7HgY2",
  "key30": "3PJzXuP7d6JdRDCD7YA5AwahrQ1aupvP335dSviLjxxDxevWb63vPn8DXE8PF67ChxUhqPxcvWuP1Nbw2ix9hnwU",
  "key31": "5zLp53RbTz7PAkkh8xsR5aeMAiyvNfwfNmAB8QedBNvKjCDbKyB5NBZTt2VGi1PDmAVApqtmnZLqohnf41gwZ2cL",
  "key32": "3XPm6k4LxAZktqVGH8bWV1fvA7o9o2tbTVsFTcfA4bpCUqourY9sHYB5C16BiGDE8Dkru8NPSU2ZXqoWyt65EH7a",
  "key33": "4ZwXTiQw3MAtphdR8GPRZDsdSYE9CjWQwzmxH3iYUA8V3QDEsw7VbGd5HL67Qc2vqR8mp3wr28tWUZe1EsYgDjxn",
  "key34": "3dtmpvYXJRYebDC3iuVStfByYijZVzRu5qnXna4ch12yTaWvGyZF5b6KdRsccFusV4vnR5ZXug5KXjVKVw6H9FzX",
  "key35": "67MnLCGFsiovmhQy5zL165G5zZ3SBpeSdbrmTcp6W4uKRtDL39n49UkLY1Kqf2jLiocNRMc2WrxqfVNPWUXRFHDf",
  "key36": "5Dsh9yPfjrPHAdVfzxaqG2y1f3JpJmtYPCz7SHjGvKX2f494hmHsp2DT7pQfCc3HTfezh3sHM3A7PXJYdwqMEpS3",
  "key37": "4UUK9w6DWDtjA6fbpKGTh6kcWfxCYMVApmAhCZbpvUfBB6X894fbuwSo1wuVKrrxB1n53jMqhWMb1oDJ5Pq3iKxG",
  "key38": "2xm4SugKJJ54rsHE3n4aJWqbcSe6vkf3sTpB5F4VXpNM2QQyVwTuhSFTztVzcg7LieJSx3ZL8gutQWBPALN4qRFP",
  "key39": "3Zc8hKHFY9ihPZm4vQxyj7AxmjYJor48dsj8v2tisSLzmKcEEadju3QP8Q4db5VXctyNRf5vrTihXiXgHSa1sZ2P",
  "key40": "2LcfdWRQPvVAnYn69SuZAnSnH4V5w3F2FvdvZLwSbUUq2m9TdT5U65HHYFoQXXiQjbTPrTWFmWGNLrhmSfFN8vR9",
  "key41": "2zk6cvBRmtG8s925njk9NmswMQtupE6rs4EhRHSjX7pku8GraxnsfdqWgc6TEcYG7UEh17xsiJi6Z2k26tzf7qmN",
  "key42": "2TgWnvARiKC9Gzyy53Jq2WQGavtN47dTebw3GYSDUtgTCBYvWkK3S5npUAV8bDkHUZmxeugdXpMALZ5tQEBx2cRJ",
  "key43": "Q3z1knYpe3689cXcoVRwFL9JGYF3eNWYKRxmGEnq2qif77mUJkuZVt51hLa39NArLJf6GtMigHu9aFX18qiHwYK",
  "key44": "32TS9bdy2mMQEbzJJ2pPixnfpHdsgubVKbsY9VpmeFoCvfohxyNM5ySrQy2aiC5acbR2JaWuFvfJCyovKL924mQv",
  "key45": "37tqeu1wWJEVV4L8XwsryiitoqG1vgbDS4227akZZYcGnESQbrbgGrzqvippA8uyUBiKCUTVv1XYwSe5xw3LjWb7",
  "key46": "5g9uLBLb7GXkZEhQoiqC21a3zTTqFkzZDrtfDaab2LdwT4pJKsyFLsRReAxDnfGL5C9zDDjXZsFvNpGqCXvgDsoa"
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

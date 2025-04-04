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
    "4KkfEKrbxtLu4h7BiQz3ib4pB5Cy4hBaedsAXCPAtsheUs8SQQZv3upyu7dUG2RriL15Rt5S2ymfNbF1X2HhQ5jP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDpbYMDUcVPMtnFMgTxNrKtsUkuhJkXmCjfEm7MCQPqiHzTukJxWj2FtGaa5gAmTnkL2SCB58M5U9iWgJwajVd6",
  "key1": "s7qtRmMm9gCabYCERzL1SXS273nLtxL6LSga5ozxUEuUW5UaD4U9nqDLSxkscNT3mK32dfcgkxYCh8EQhtNm6bm",
  "key2": "598TyntnzvKzQWpyjdiG3RARjBHHNBFMd8YHjWKPJ5uXBBaaYRjdp3BGtg6q8X8uK2yb9ovdv3WDuQj6rryGEax5",
  "key3": "4KFdYdvz9JJvngVv3a8jD1SPXzqjgWZkMp9XLmXrqqgPaNQuUnUNcYcXHEjkqFVZH1ue5aF6b5QzHdL7UNt7ATaP",
  "key4": "2DUCr5isxXL1yY167Fkn9Chhfb2nEHW7zoA7Xevr9NWUZXxb5vTX8w8YvfUGASvacT1Zywk1eMBUHKyBKVJqD6sy",
  "key5": "2uc2QdkFfmJhwUjRN9RGrCMcxWNiCJ7YqTGgfQTSnpsuL82YcPZpuyejin1jCaxLRZJwNJnaiXrKCtZCRbNwNdpJ",
  "key6": "BdLg41YxgSurcvGZPRPHPZm3hvkwHUHvBDSWQbsuoSRrJGYQcGBA2gcpVATgNvLvxMsYaURWwHyNi2r4mEoP3fT",
  "key7": "3pTDxggMQ3nCxYpHoCS8MVX8PA7SjLaNdLoQRRhe4ypFgpjVfBr74ma7QwieVn7SgwpK46vWtHGdfqhsodv16nzq",
  "key8": "2uu8U66kJkWzppoSGSi7WuKRKna38df8TH2S1Jfq7JQTwmsuXeZhkEkXadky8pm2uXJv9uEKApJWXtYczPftaMRi",
  "key9": "45TCeYNJGtCVYUKS2X4jdLbx2fzaFLL8Tq3YPvh4EWuB6uavH9qasVVN5X4AXntXL1AAQrv9hPgwaFoJ9ejTpS7q",
  "key10": "64GCetwqBmiviAY4GxMV29ScFrMQ4E9cwkmHeUx5NtfT5fpiAbGqpiWnhV6BsYjCuQoBWZLSyQyYyGwnNESfS45j",
  "key11": "bFDtsnZoKHJvNxLaymHErYQT6wcjp2WZ8BiyFAPo7Ey1R1gan98c3J72krEm2pePWyRYUBoRQ1WhmhzxaKCBUqb",
  "key12": "2f57jZYRDnECoaUuxyZbx6aY3hRxQuaqxshFatxL4Ku3JNze2kmE7md1oGVMdeJH5yHttVysc5dfW8Ntivhdip3r",
  "key13": "54BCukLZNzZfJ26WREeU9SCrnz4pdn7Bw56JmDUxhgprTWenF98sMKkBDQCWB2HvuJqCsKFs1UyC4cSjmVcASUaX",
  "key14": "21cpiPSD4mJPQt19LMDbAbJLXaVpKkBydaMNzaiyf7X2ZWCpbSmvYBHKsPv7wrUJHPoWuKj4qYAd4Z9JpE3jmqnD",
  "key15": "31RdG1nGweM7fnrA8MQb83kBhHEvg5bzapu2f1FJHtjS1yHmdPvwXRHxRz6vZprrygnPUW2dbtv5C7Pbp3RFwwSv",
  "key16": "3dbrP9tGLq8tmjByNTckq13mntZmW9EHH4BX78GYbKPXaRqDcHEA6UhN2Ap7SidMjSdQfeRJoCncjpAXxMHrPWpB",
  "key17": "4WiswnFUt1huozWC2afsfFYjmeoCQfgQFguP4k2nDcy96a8SeBQUDcARPqN43bUpiQjKiTZBcBwqYkMsMK6R2j8S",
  "key18": "2jKJ3BdrPfiTgSNLYLPUcCCcRDgXruEg26AWL7x1Zrx2eXDLbS1htMJoawrc229684HYx8SGEerYyQd3AgNUA1cR",
  "key19": "4qCy1GzjwXk5tvhgc7PUtjpufcQ8RiG9wZFkUWxYWj66aP7Dc6yqY4i3M1XssmRTVtq3qd5yfAReRG9Bpui8KJSS",
  "key20": "4KRTfkkLvWFkTozZ8wmWXaRPu3jVo2Yw88ifq9Q3mwY1JFf3mzehh5koxZVWm45bLyEtJDKvGXvsb1v7ZvebLCpB",
  "key21": "4f4SQYE3tyiKkPJUrMX3ChqTfXTB2aPf74CJcQqhRdj9VYcB4JRrdPqT4hxVoGyTD4iB7rY6WsmQB4o2iYVmx6B8",
  "key22": "5V9BjzovGdcs8qKqvTNAyAezG3EGqqPcpbXuCJeiAKmeyESQcGAaxq5yuP9ZxAL8wGWJHPzME2A4EU7YR9C685Ro",
  "key23": "2ykfQgEsEeyJh5HRhqEBDYBw3nZJC5kre5vXRyvoQmZMN4R5kZstnPosTuLN2y6SRr9NLBJ44BgdYxEWQ2ysbrF6",
  "key24": "2qkZoyaWsWp6qcinEcXQqtqEcGQp8eVtVW5RDQRF5GHBumqU5NCi7GNbE5a5q1652GNSEejYtyLptGKDEwoGWYBc",
  "key25": "YcgWmVwmJEtAG3375Vg7iDvPj6YyfQfzufMLeH48fKxcjghcYQMPmzhVZVpD8v2HzuXTApGy7Tp99izWDedVSaB",
  "key26": "43fi9M2ZHyhJeY3UZY2HBgZC1E3uRR6UdhBtZvYLjPuRA389V1R4yJtXBAdR2nCj2b4dZ8oUWF22DcgjSGFK9oSZ",
  "key27": "3d5F67XXzTejLW43fVwRqE6qNoreEgejTHxMDUTZNWQZRE6tCo1XEdbgp6Qgt6UBFVj8ezyP3ByKsgiiZztKmX8i",
  "key28": "5sceAXcrfjeKZXDedDj89eZGip3qyPSSJFyseGASiLoDbTk2DX5sSqUJ4Bwp4rAtFVkwPxmz9fT3W49yian9e4Qn",
  "key29": "driYNqzMrw744e4cgESZKvABo8ESSDuGZzasPKh2orcVLPGLjdNpLsGZHF7V8pQMSpqKbG4zBA5uWHj3kBk1KCj",
  "key30": "4jD6m6zNusQd4yJyjMBp5hEKfxqbUeyH2cYpWsH5SskmnHEjXz1vqbJ5dUuS3fDeCvtR9ZEtvQEQH8TjiunW2eGh",
  "key31": "4sZgkqcz5fvZxbJ8y1LNgHLZ9EYbKsw47tmrnsk2rSofz7ysrBBvu4suyY6s5o8rWARydNKWDFksMwRHTWg5H5fr",
  "key32": "2MLETsJLPgG9YPdhWbf8r2Rb19oe92RDUwaGxAXhHhjm97QF7VshKSZZnY2gHozyNheZDLkPvS9nksKwybZdcc7Z",
  "key33": "3zLjfNiMws5sR53Ay2Ntz5mw4QhMBMxRu6AseKbzbt2PfuedL8GiGoLGpGNzxuKmiP68Mj6KuKS912wDrGzbLc3S",
  "key34": "56RxvdGQvsgNJ9fnKApFPm3fxq6ns2B7HLLGLtupbhCrUiNjAXrZvDQgspVXqpVKSf9cG6hbjDoYeuWgXVptNxYG",
  "key35": "46LRgVGh1CP2pTpsVrzmY6jBPttNaRQh2S8xMkYiKcr1PkDBFfSaY2WH6cFw8TFRpD4zKJ6UqsGMGsGYX1XJY7eY",
  "key36": "5x4LW2U6hrfz9Moy25vtrx1qcrzrZkN31DsMzxux63eHVs6jnNWMCChXpTpbEM3LFTkBvpX9wTAUGu7GiSttkFn6",
  "key37": "23rLtn9LuCJzT7wtvBnjufkTNRkLuZvQ2es6uL8j4NYCYJAynF7VG676x2AebpkevRjxL71RvyymBMAxAgitwBHb",
  "key38": "4TTiujFYFitzr3ebZr75ttxv4L2iG5TBQJdWfkaZEYwWtGnN2UEVVDH1hk68D5nqPK6zB2r2bWkveG68Cv9hWkXv",
  "key39": "4Wbgii2bX3Kd5Hrm3bhZTxoUZixeNKcqJURv3ciFgguqqmZq6bqUjD8MJqEAj1J3YatXBcGRpuWQgRnJj76ZfKTA",
  "key40": "22SdECaaPiYDG1xho5X2eUpZ2gwPZwRar8viXrsTNxhdmLoG9n6wALFH1GzWpEMKCZBDMrcw1ngQHpjzTB3NMybX"
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

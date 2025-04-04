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
    "f8zsnUsuDB2ZDaiyrRL6FpQCw5PSjxz1zuZ4L8r8g9tQn1EQw633D378bD173ZGyZpQNSCCdG1gUh1RLbfu7BRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mEysBZNtkbAEYb4F3FbK5MrHd2coZisb245YTzczw7xX2GF3BKVrxvqtDDXf6gg6B7yLdGjGoVcbMrMjxpV7nF",
  "key1": "4QwK8FALCunjjjuxbrCQeeMDaGnWNwcYK2i8jcvXrqZpYPL8kubECUY8jTkvSiEnXDg7PzFVyTdtVmpjvwm71rm7",
  "key2": "2rgQkRceXqYTUmH59ghbRzNwo9AC37a1PXNDdMfTpWrXT3upCAxfi9yLFaYQRAUgmk7SjE1Pp7j1Xie34YyRoDxd",
  "key3": "37HnmLb8dEQ1JXNFXbYqzLdama2qBiTrvRCBmiLVf7UGpf8yzZsxqP8eYKt5giakxaYis14TzfrXDCthEzVgQYDF",
  "key4": "cVMGcQHAf3r2UcBJFDdcxkverpnKCHyToeuhzzjUguV363P23nwrgemS9GEJR15KyHPhfWvgsxyVwvdaoFZe1wK",
  "key5": "wmuAxM5qPXQKexoK6JYhf1yUfJfh2CyHqwkHH3TvZ4qXvxzo46CqaZmCmuozURzwfLpgGRgtmBumCC9i486qwnc",
  "key6": "jKdiBNizhtaj64J9BDDsfQssEdqWhDNmrpPmB74L9ZMSEmwrnNGdrjxyivUuVxexqyutvq7y3koEVyWZu7Da4fC",
  "key7": "evk25MFCZ1KbARk422kTmJBDqSzuWENbXu3qgP1JWQr6g35X9vKrugtjCJF5vMiSDNS9BVbvchZLubWYJUQhrJV",
  "key8": "5mparZmG9NCdoDFM6s6f2gjKNohTkGWwc5AwavyMkL2QAVYRgBsSf4Dsx3nkF98U9UNEUUyWi8ir4XxNZ4FrwNhm",
  "key9": "38FcXzMzggPwkBm9DwGaWMrwUuBuhRCAvYqi2eSzoLoXUt7f994reMasKgX5KbwWkC3BQufVVyRatsL5iZM1gW6n",
  "key10": "C7wGw56zqo5XwX1BVwVCpizZTjVLNwJqBXhwLvfSrWFYL7SBcF7qqxSLFEt3DXBD1YDZnxWKYdeaQZi2Md82y9W",
  "key11": "675b9BQ5FqAvwjgyZt5Jq2Mwk3rJSA9b2WBrpbQUC5NUggu8rTRHg3xCmeJqXzU2WqnfkBfq2HA3MDfGz8KBh5eD",
  "key12": "2VGCvKAexqfzVDSEY261GZN5CPAFs9R5rchqR3GAmL7RvaybasfjeCMUyJwDK4gpajuff8qszsb3f17gWDewXBTr",
  "key13": "4F9jhajyQZ6dvAue6TWXjsRMB9secP1WMpDSJcEDACZzFTgbSuzX6hGWsHFij6VEL2L8nhd6eua9XLDX6sLo6fr9",
  "key14": "3uhZxqVauZ4y59jpHj2DkmjCDxtL7rZvdrdXuPn1YfoB7cwcPc9JsfbvFt4mTrvb5JabSAxBqASdCf2WFgzJmqWp",
  "key15": "48ug3m4a9x1saK6jVZTMbg5mH8ye5YZcpQeunELMbcB6kj6CJ6bGGJvtGzg8SdNGfT3KHCiSffrNwvGzjZ1d62RC",
  "key16": "2B1YMdwXBpyM7y9nnCi97QrHhMRhYfTGRSMpfRdgEQPKLqhdmEPXtsrGZK5xNmyBNfEpvP2QnJJv46SkQfSf3NCD",
  "key17": "3SDdNBeM8pEyTTRqsYyLp1tATH48JzCpBm43UFJ7Koj9RVXha5LohxjTTTDFgBgw7VgNsWthuV1HxehuMaHm442X",
  "key18": "5fgdt5XyMCtWBnZMZJqXKtRMS9tMDd4H6obb29Sn8gdSn92pPa5EGTAGLD4RVErsHHveJp6CXbmbzdiNpyWJYsE4",
  "key19": "3sJA6hBtZfWQd4MQZFver2gALH5f9i7JKS5Rsf5ukL836UgwHWSVVeq7VDish1Uznxv3zoFLD7T4M31Q924QsBHM",
  "key20": "34sxqUDWM8Z4HorAD4DKNsBCuK51ZwgihHBQtx7NPqaWq597xjBriDR8mr3o4XaHhEwzd2qRsbeX3V2AdWq378gk",
  "key21": "5UZQXZyhXi4JsXvAjbFUSAbNVugofEQrByunguNUiPy5hCTv9Sew9oi2hY4A56nWN1gLNJxbM7oryTnHLSkvewQH",
  "key22": "3cLbw2fXnJTSHSo4jddoeuiDM1v3UhUXnykUKDv6HjbvPLvW5p21yhSsn6rzRuDynDSKpcsfFyKNVkVBQWv7fGsb",
  "key23": "5uH8f9w1akkSnW9DcFXHVfLUSjYFgvkbBWf5xMzFMCWpDdseQoV5cYaZrGrAzDGNb1BohPJF4DnhpEAv7a43z7MN",
  "key24": "26VNGEpsEG3i1dU94TFp6mZiVgfpAPimTcrGSrRLGXKZp6qk1p8EKp5MbVCAb7DMaiDwcveTK8JvaUqCfsU8zBnS",
  "key25": "3pSkYtZhP2ztgWZqwxaxA8jo6mrcBzLZ4G2hZMMYZhaFYmCFLv8pj19SXoj75QhCisLHn9q1SfuVm7Jf82fcsxPS",
  "key26": "2NBj4BKjPmrwRbp5MQyhpuitiLzAManaX7r3bnoFU67M2XBxvXkYuF739KddfZxopcgaigiCtLMBEJmziF5PAaUm",
  "key27": "EYeVrFoKTdy9zFsVptqtsxMX6ax2of4LmoPbp8RShf8VPS9mvgW53KqbPy92ZeCWfCLwQaNkmcVpBRmaAGciMgT",
  "key28": "5Uj1V8ZbJoLAv1svW6aTCw5asFbbtoPMmtxLFwqzj1gxA9di9JHaTmmBbYzirySMWLaWuwXxxanKntoaJHBcYcjm",
  "key29": "2TqKfvTFGWHqWzaHdMNthRUkAJuaGR9igEPS5KfpkkyxKatTNr6Z1Aax9AeH95UMRhLvqw49TUHrEEwfyDCVhH2U",
  "key30": "3BNaMF8HHtorTBDk2hCtoZgQBZXx347aNHrLdceTTtevbWxpryosbo5kG9t4NrUbzDDrEtJaJiorF9oE2Q2ecPVP",
  "key31": "h7i4F9XnTxJvncDNcp9VBHA4zQ1prwJvTnt3AUQsXFeMS5tA2MPob5qqHbzsUwcRz63UETNMbaa9LrV8rqbZTAt",
  "key32": "CVwqPrLEYm5W7KyGs8QZDXe9r9xvrEvwefJksCUExdaJHea9pBdznWhUF2JaBTgD8cFTMeFdojznvBCDsfKsBCC",
  "key33": "33u1rrg3GgKDcE6CsSmm54TPuhKiAgrFEw6n1nU9bb6GLSKR936Pu6SLAhz3N63Uth8RWbZ5aEveBBPhPHGc44nZ",
  "key34": "55aBKYycPCZBkLKKyj7LNZfT2TdjCG74r6eTYFZehtMQP69KMDKKHDRCB789eQpGJtjvU9BByxbNm7RJoasyAdNV",
  "key35": "4A5wKrgxqGj9ihoBmVMHt53x7UTGEHSCUUzY7j5XDUBjeQnXFN8DUQASCZiDwvZkZXrvd8aA41i5FRvXsuBwyPc6",
  "key36": "2g66zPnJjfUYFAytsLFqH5ZmVeFANWwW6pP8cktkqV2mV8LGioXywUUBFJfZfBUzLG4fJoqhCcv6gxt3NY6nXRAc",
  "key37": "8h9fC39nixE5B51arTwGVMB5AgNy8wSXjzoCyUCd76AxF1pLRpnPW1jk4NLqVLpKLjevhw8ShNNd58cP9wnyCpS",
  "key38": "48Xt5aFJjHx5ENzaUmt7jQorgtdTjhyDBJnY3NHdArfgjg636MSwM7FfAeP5fdX7bq7V9kW7Z6yg1JcgEDTwdDGb"
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

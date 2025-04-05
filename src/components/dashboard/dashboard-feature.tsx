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
    "4KPEDSAtZw2Q193qZiEBhHKAwFoXpaUKBEU7ELMCy8apUNdtqHM9Zp8S6RSKCWBCFx3WVm9CCjBBknptqtauJFUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rSevXooXGS9YWy5y5A7qAZ5GBL7Uz16wAAQpXTFeZQEfjj4Lg7kJ2NPfbbptDDKDU68PxNg3gxiXNXuv9p9q38e",
  "key1": "4CV14kuGwwkBsFMZEpxQTEpQ24TCBH2cfWGJYi8qzteMS7nZfHvt2UNnc74bZEJo8dwEG4ecrZAUPi2N9JhJQTqe",
  "key2": "4GrCtzhTTrXbCnxbKMHUFqqHNavVc7X2zRK5a5nYft24uzuZ4tdYSeuCr7B6cEjZ8tqb5cABg1nwGdqVJrYVWSGM",
  "key3": "61PH7wBQYXroKp9byxuaeL5ES12KxnrvnDBgdE87z5XE2JyF2K3mr5yyNVaswW8wBGJmNUfwNebyY6KrUs4ckxgC",
  "key4": "2hAARv1qkSGWL4zKUoVnH24upyjFaAzibjSUZxEws4Y9CQgVkqaveWGHejrDGpp5HnoVGaC6yVRNh5rUGmnQ9ZGP",
  "key5": "5hHFnJGkbmQEkpg8pBqRuRFh1NxysP6bT6XfivhcCKq1MYwCYLqa8PHNwKoByhXBgkBzd9EEG8oTPfPwfNcHzg5R",
  "key6": "2Uf57QzJ4SkT6dwKWjh8J6SuNooJmquwsciFoc2LniEbWQ854gzEM9FbakP6obontreNnKNTiprK8qtYut9bF3KK",
  "key7": "4jUWtNRzjBRKAfkCSaF17mTeXzsS4uiRz1Lhx54z4pvGRNV3arvG4Qwcd9g4NnE1Z7KuaY19wJJVhGuFGr7G51Dv",
  "key8": "2SKWuJsPRoH1AQCuhk1odbYvPgVNcxB5nWeccw9uqnfD98DCqVE5mP3DTHwJGQ1grdSPmCX4cQ8BRiZWUFHmFxGE",
  "key9": "4y2dukgrUCKpNWDRBPmZ9w8HFMkxv8QPJXG4h7a6wiMaCnRKLaqiHx5QXVZ6kr9rNHwctZPshTfLjSxzUousxq9D",
  "key10": "vwj1tFLQmU8MC7uQmbadEDPWqk7eoGeXLaGu7E2cMryrsZ4f48DzHs2grKaSQPU7jvrgAqJW1XiHAzwccSKsma2",
  "key11": "Q7vSe48oXNhHLRnZTzk1WEcJ1N6J33j4kYDsrNpXrh1dKQnCHsggZF1RvLcv6Teg4nTYZq56focCjRjXZE4Nqjb",
  "key12": "5ocVozooGmmyXCsrUZ4J8jrCfga7X6ZCmbxTVF9LTxm5LAxFDNGA2mkFMNjDeDcnDSSVBCmLjR8wcGy56a2tcqRe",
  "key13": "3wjeYnz9C5eYLr3tRMDX8jE9VZmSzVfr77hwAsC4b4AGQLcnQN5fYh71XfEMZtpfPgaep8g19wWbAaJnKmSQmcSb",
  "key14": "66yebWNGH49xbJ13H7EP5pDWLUBNPSwZ3DAz5ggFhZn9fvQg6pRkeBu3Dta6yMEuxbnBajyeTYuGbFLRf6hBEhbq",
  "key15": "2xHgxtd9Hj1iY3yyt3Cebxu67kuLBxCKznhsSiCaaQ4uF1yz6sYJ3efaRcX94z9jZeWQW1ChjZ7gcmgy4NKV5qK",
  "key16": "3zUJiLo6xDNTwb2GPs5hYt8z2wR9uxUR7j5qu1w5q6UEkUHvsbLftKJ51doTq2xdkWZgQwdWbpTwWhA4qDbdogta",
  "key17": "27PpEJXH8ity8JtCCwUeHUemXyaatdW9bTR6dEMGuzTPXH9KyvvebhU9uuc5NvDu8Bf4QxoqZm8EKYrKMW4g1ZCW",
  "key18": "4RymhzEQABjofn236pz9VqLWe7f9NFHVXd3FY3Yoge2GGFxWtLH1akaBK6teV7PEE3gWMdXd9Y3k1MCTvUFPBCgf",
  "key19": "3pkvkCjiLNZKT2HFagjmoCeqAYDJts7x6YQ7E56Z1edrVKdCdbWbi7YD2up4Af5m8AyKf82ScJGVNWsCQ2yeEDpU",
  "key20": "3i2oGA9wjEG47HDYvcA7Jkv87ysHA6mYS5SFy1Q87RMEXViXmrguNMS4ekpTK7HFAMTQVVw9SiMiMLczoZ71aboc",
  "key21": "4vYKFmULNGjcDJHwc6WhbABaV3P2BTjtUBb7gFSfsrzxEuUzQ8r141BPjFPSptYKXmY1sUGaQnLdm3AbCvG1tiwK",
  "key22": "5hYrmqoXDkL6bzPxf4CmVVn6LRF2c7LQEaEX4KJgx2WfCwTUtkrKoQPuSGQMDafMcHMVqTrxtL3jK9REFnM3RTF1",
  "key23": "9WyED2ESZhaeTKf9r5Y6bpuvaC7STjsMppi1vUfkytDGDRdP7hw1UzCA48WmButA1u2PTNMUpbuEJAUKvBUkCTd",
  "key24": "ZKuxjWi8bqBCyEnKakMMBncPKtYJ2YBMnQ87pgGy9juBRFXePHREMftXAcUubiHKv3fptVNY18r4y2D8jmWshxx",
  "key25": "oC8FeKb8sWnJzbVgKroCzbMu5yXBgE3YwaQc8YkRNbDmA3HxdGAxGWfuKWmmKXb6818k7m8eWCi7BdsVQ8GCVkt",
  "key26": "2ShDsaXRbNoZjYo1owHebKtwzwX9EH1qu3yHutnqpvYz5NEJiiDcE6HybUqy59sdMz4ZKyTzobLniPxeGaTS2za6",
  "key27": "2NggDJXgTK8kuzdmG9jsipbBLxyQDEq2eeujXttANMGcYcXmGeYNRNFEyi8ahX2GoFrLbVn78xYhxS2aDpWvPSkX",
  "key28": "4VdqzYmRWacx7enQH3Pcg1PDZyH8qCKzM9Q8bUBdZn3UjWPE1CPRSR19b8YZFtoejbWRqC7uWpMsiUPxtoez52Uk",
  "key29": "5Ei3R7gXF9JPGbZfa4fwhu2z9wbRKyJezA3tswz7wutVgQbvp32HpgBfpAVa2CMmXAnUMQgJFuidKKQmxJDRvQdQ",
  "key30": "4CWMNtfTsqhA672hTVQJLhQLnhLxuJDLSeHmpYYBad53pzvu4jHxLzDSEfE6sXjU7hg2Z2edEYVem5xfQ5ahM4Tm",
  "key31": "3NdVSBPMJ9aCu8yXYE2AdhMcyrvDixW3AmWQ1s6zB4A6XZjCDUtqTPHPqaomL1CzVE76WznVuyZ2vXwuHVinqm47",
  "key32": "2wHoxMTM91qQFvbsPeTNY2aPxmukDHPBPUAn8DDYgr7EGnPyg2zaUrSkVx5uWF7TgB5odTatp3Co7ry5VXaStd4Q",
  "key33": "2TasjAymkyLjSdsiieiUue3SbkzDz4NfNpsVYjTATx3MQipiJpFWnpSPZomQQJUGqUNoXsBTzNQJGkhufCkUgQCG",
  "key34": "51ypon8Eqmft6nKu6hxjQTwmFCHygb17VV7GHiKohe9drdppBYYt1Zo3SYdmY7xkPL16rdFjj9UE8fjV3U6RgwYG",
  "key35": "2Bw9bX5ywmUPVu6GHv37p252bz7XGc3YBFbS5Jm158Bbe977dXC77x5KFLCX1c56W2hKmTLCjqTFrPTEjMayshvs",
  "key36": "3nAcsc6J6UzaWnHKsx9rs6UE3y8asxUFsbCrfoTMYEuc7kgWpgr6WYAT9tAHUeAvVVsTGz5U2CDg6DfL8amu3khD",
  "key37": "4Fgx8Aog35YfTFetN1279weJzpkvcnD8RCp3fLXJSM9zrUbgL7sUHqWWSHSMS2zEbqjYDSwXL4HPPowehfrsHFSt",
  "key38": "2NGEfrKxeVLYQWkC74ehxCigReRsTUjRuXRaHEh7UPN9DtdPi79ys5srjQMaxrAKcsTvx8GfvLir2u4aG2NM8Qn8",
  "key39": "dq8vs9ssNrTZp8uDFWJvHqsLCZQD8J4z6vE6CqF1xRZdDwzVK39AE39ymPm9i3vuiUJZqozbuiVzL7Q7WZKftyD",
  "key40": "2KCxf8sAUMAxhRdcPdYnZag27PtoX8UeKFCpj7MY7zFuPbfnfGBNW4T6AN3G8FhyvLGZqqVGmHbcFhhyvaizTvFR",
  "key41": "3Z2j3VDnstNzfJEnkRYi1DhqXgonCRnPDSwubanM3AcdzJCkpgrdDpPcUbbkQ5b6MZ33dwoya6ZNKzqFpfdy5AJZ",
  "key42": "cTdFYQfB9jPkhf8vCC2bCNM3W7SwZZFL2Qqv8BSFkcWCATT4h2WBm6aahzR9CyQkvu9jNQf7vc8ZquizuurWuVw",
  "key43": "2ghWeCHKm37hamQBVDMNK7Zgue1H7yXDE2ZMA3gMfiUznq3Q5Seb8v1mTKeFxtAQioKxSbzkP6n1RWoNTXwvpBiD",
  "key44": "3x4dhDVmyBqx5MsM2wEa1Tn4qY4wfaL3cEcgyGUwQiuwzfYXSJCwc1MNLSmYPMoV1kNEEWuwQ2j31NCznEfkV3Vq",
  "key45": "3yWkqv7GtQqEcTTFdiSSdHkyuYAUAmwUDs5BSVpcb1UcwKiPL9Y3BAKuVVde7oBZAGkMKbf5i5rvXRocCM7uBaxU",
  "key46": "3gRZmMy1cmEHTqf6neAFGb56q5d6HRECEt9krTiFYnLTgdZuSNf9ytA9Jwh3VATKyM9thGsRF9PQJjS4Z6PWMiTj",
  "key47": "5SXDU4Ra8LzUM4T7N2ZnGg94YPGjG3qRQoeyZ5rWYUAZhoHWZkSu6HnPSTy1P8SguMq4Hc7zz6fjU3hBQpX1ja2A"
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

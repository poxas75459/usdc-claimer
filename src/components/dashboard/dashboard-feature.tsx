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
    "5ocgp9D9fzDKmzWm4wz937ZhWPeavKTmZbuSgtshSXHRqrfmQziMXFRxCz8xVbbWrdecHu7gPF1MeKbM31xwytVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PyXE5b6KhLDceJtbHvYeLWJE5EXmUB4nof9pAJ5D9wAieG3vRKwpKrRPS2EHvJu6gXmMwBkpr1wq8413o9iYgig",
  "key1": "4jUeeFR6hcWphc5w1zLCsrtxmZnkP5pvPnvn8vc2d93fTGK4n6n7GBgT4RP6AKsG7k99JAeX56GuNSvNZM4M1sUS",
  "key2": "nrAi6LnJf97riq2QNFJ67rnWWq1A8uuZHTBYDyW9N7AwWeQYzKPZkRPAEmS8gBHACrMSYUsdxgmXWm9owXSYkuh",
  "key3": "3V8mCZceVsNfzztQBHEhT515JUH8CNUdcDu7CAT7UgFnGRHFpwVQE1U3yxZVeiqA3TkCiHXFeUAvCWKQBUeSohzP",
  "key4": "3QkCB76PCaoxDnhJXnbcGpwvgD786WcMkiEGjq1gmDN8RFHqz3em2pKLuoMiKaDv7nCHWBuv4LWgSAXyqCCreuTr",
  "key5": "63petM1tKtiaL7USMAMzN1kyz5ZTrbAtm5BRXQfcqNB3sffWR2fbeKXugMUv8paWxvGVQdAhEKgJzmAkyQo8SvnF",
  "key6": "dzHXbp19MCKPX1NZPENSfLQ3hWSoGVYY2UDVW8tzwJdyAVAZrnQeLWWEMngpuzBLvwbd5e4RGDWPf6Zuc4QcEMk",
  "key7": "2LjTCwpJpcKPyuMJdELU32vDp6VJVgKb7uXALufTKgQBfMLjXybgCrAGTYebTLbLZEQVLdNHwFPpYBUwH2J23rjK",
  "key8": "5MrgaFx4Mc7wXWo37KGtHF44b6fjSrJGpMBEkbsJyMjGEjTc8Um16dE2q23rnqd9LxdGKZtnRNUF3gAhBXDJ8rPx",
  "key9": "53RnT8cECghpyzJsE41nXrLKUNzM19wP9pcCeoPgkZCKvSwn5shuyBNnK6ZHXxY8AJGP7nBNgyPZ7xyzAHfQAgnH",
  "key10": "4ve4aBgDwozTfiL7a2EyFtGQaF9y3g4YyQDjfsA5Sq4eVKkMbbdZxdX3R6vngSaxYd9KuicuCdRC1EggpY8WCSbK",
  "key11": "4CeKNG3fgutvwXgFZdA5f7doyzv78jKn82cUo3JhFhE5u5KeXBVKWwiFfMVeDnxWp6YsVzeQvMq5Rojmtph4H7F1",
  "key12": "67FoTLBKQjodbw6mwkKsnLmc24m1c3AK1AZ9cca2NRNv2fP2gjPGzLe19V2DefmEWXrvp6ykNSKFS7keuQdyE6g7",
  "key13": "2N9yESo96s4dGAVBYJtU67mz97MZec8fiWQVjPooNchpRGxhLtraN8P6n5nbo382QtXLDj1mgbFr7z7rU8MranbZ",
  "key14": "62oa636ZLHayUr87bwW1BpzXjnkArkGqk7QJK13wnppYFueqj5kH9mnNPLTQ6oSg8fLVdYNjK7R2vARfjMGVho9c",
  "key15": "FpCF1hev9LWEfX7QUTvpjyr9e623XbCx82GbaycjmZii4RaAVrUDV9NquauVeohrhqrSomekkWwBnJkhagCD99K",
  "key16": "7pTWvoJX9G8bm57Y3sX4bsBM5uCLmDr1jBaUtVTWB6aD3YMzoJczU2avJMmaxVGDW1xVkyF3mAnro6Vsvc4v6k9",
  "key17": "5F1So1Qzx64i3U3NpygHFVP3xBfkQUjXfQofVZTQou7WXf8WdBnGWcxZHq7w344hBP97GSNvBwdpterjZteXRNfB",
  "key18": "1P1D8G3VR1JCXST54nmFQ3d6omfo9GqF1XtxLYeEqDRCRcszs65rGZVpxd594FEW4YRmNHKRHiuNYrYujSBfstS",
  "key19": "WbEPmnpfkkXE5RTjQv6PhSbTcqTDVS3365SeLUgWuDBEoU1qnfxetqPLLz6SeeHKbijBu9GKJ2FHohYnbkzuZns",
  "key20": "3T332tHTkhyF2537NCGRd9sGyGJTmmVY4Da4TgN29oebUh751jasJivNeihGm1SpdUzHu6mihpMaxEa2m3Aw7JvF",
  "key21": "5QnF9dbN9BTCxuGc4cZAE8drU6SgpuX4RDn3JUUGgLxqqupFFG9EG8TxwKgqERbwAjr6ycMfhyTKj9MNzowAYfDp",
  "key22": "229xY2NutezAcszd5C97PgTzPQWgGz288u567rvYnY1yyJYYJc1qaAj4NDz9YzC7Sitn4hzUJ1oacuuCPma85mmN",
  "key23": "5EqQNeiUxMrLABCwAwsbXxdx5mdGw71cwF1pRxpPy7u9aNc5RQo2uhrbzTccsHfoNCTFDhEiggsWwvNc6nGXfkRx",
  "key24": "4fMGX7HnjFEwLSnQ5YGTYNB8cqoWhy3cXU2kJS4EZvhaD1UrTRhCUoF5Nomtbw9ZD1wejP4WfJECcfJfJfF1oVXo",
  "key25": "5gAMBRA9ZzrVi53u6JBfQs9xgsQU2LwcuYhT1zaG1yzS1GVTeCRd9eZpwU6Z6gP45QVqzJMy8Z2Bx4r11nSWQ8Mp",
  "key26": "4rejiQXoaHpZrHPSZ6TBHzKdk8vZu1A56VLpvGS9JhtLc8yaLqSsu3qvkYn4sc2jpR985QxfX11Ai4BDXaD9yMRj",
  "key27": "2SffVopNPkxWENLykJDzYZ2RE51PcEZg91NuiTUKLo3bqH61XJoYyCrQ9WHYMd8E5gi8S9aTBAe9HXJYjdT3QaMW",
  "key28": "aeGPq6FZ2VAFn4S349ujynVfTY6NdRgRAidSAp8tqidFhMbKwzaKiQ6LfqpSotwvDymDc5Xsbsab75bakdLoKPz",
  "key29": "4moSeAK9baFqukpBTUv1RUELzaEAm2HDXCAUtN9GB3GwLyrTRR2vnNUEspaAtpXt2Q1p4NXg3okU2WfQ4c2HUMQs",
  "key30": "2CN41Bzctn3qLLBX2w6gwYSNbCSS3bD1aGvuyptHTZdKA4DftuWiResc2MUfmKHsPb9Yg4EVWCng5yq33efC31EM",
  "key31": "2FrVY5bygryosbdeiCUZBztoqtk5B5VTU9m7i5oqTrPr6NnMYeWo9KbhUJABwWH1X6UYWMbizEx2yyf79tXTKqFg",
  "key32": "5hkezNFvjBSJdvRABy1uRSsLsMtsa9Ts5LDgs3wXazYXf5V5Y85u33ypUS4DRJLAhB2ruseorn1mT9bQvMhBcyDD",
  "key33": "5kfTjMjoJLtreo4YAP1QuYJK5sCMBUJAAZ19KEBdWiSjtbguENaT4fucyxKzGnF5wPMHJi71SwbFyrUktzzse1K1",
  "key34": "5s8Nh1ss9Fndc9ggrVD7WTV8ArPACJnFgykSnTx7pfm1suWvCC6xbHYVhRf1xhcuY6jvTfgbRpNVZL5Giu9UWFZg",
  "key35": "52KP39u7HcibjUi7143F1aDGVRXsKK5ToHtVopTiqSpZ7gCD8PC3bNRE3ZWB6irnXtD2YwhuyzjZcCYMDH8qHiEE",
  "key36": "4rrdjLa7H6Fh68Fz5HT5Aem9cWfSbT5soTskWssi9C7pwVcXytsvdttdZV3V3RDQwstFSrhKW1dnQqwqRqu7KSBX",
  "key37": "2Cuk7dW7cpc1Xgmyqj6E6ErrMDiHCbSuwaEEC6Skip2Z4mn5bhZR2cfCjkGgMQySsKwdAbT3Cjqfe4ZtNRSB49Rs",
  "key38": "39ATMsW6EkjAgbTwJnHGiYk368ZGzrmfX2RFSa32p6QqEj3SFDQJTmJJiMQiwnMVsf2Zcx3w4umkVmVx88RpQQ3G",
  "key39": "2wvFj7bnwHdk3MKghaxTGrp6BGCKXrzevDCwtvU3E7r5iarkecW4mLtC7m9b7AaxqZoYhaFHv3aLWT5zgbg2KLT8",
  "key40": "4sSdw3Wr8cx6ZycKsNMzdjKKSXTZFDubu4auwuJeQZ8Mw1F6Fv2qjCfkgPCSw7y4QrgFbPJ3ZM45Mj8oW7eQ5muQ",
  "key41": "5YEZBM1SnEWFbZAT8MBsc7p6HjBgEXU74oXBN1iuor9q6MbxwiQFbyRxrYqDn67FUZ7DV41opVBgTznpiUUkg4QB",
  "key42": "3TvjAVfgUF32eq6YZvJFxMP9bzidyxNwQqyWK8KzyrPJmSJpni6qKRTE79DcCwXbMoA9eNDJbSbNs26XHCbWGaBA",
  "key43": "Y7FVdHp2xRR2xNq8kqXhmTWBFA263CDcoKc1URTUnX4eorKcgmbJj5KXBSvGaKUrrQXhsyykhP1BsRvUPRAohQ2",
  "key44": "4jRtfZvx7Lw6X7JL3cafMA9tyuVQSzZQx9bKA7jtXyhuWZsZF1JkDt2cxS812Eorjh7n3THEDKL1uRAhcRiDspuW",
  "key45": "25tg9enzA1nQpLMBKgbBxASUSn6fLyM6EPBMxgHmQ1zFdxFPzTMGBoj7kJovrX7Ugkv5sW6mcqESgm3n8CFWsCNu",
  "key46": "3Tj2j4NjVVfLSuxVEEt2H5r9P6yJEBvfkpww2zj8wAyqjGrg9S8NyqKUZG8ocqb1j7FPkMGCqXn1DfYrSntVbdEr",
  "key47": "4bJS3n2fPh9ZGGhgj3dwtLaRns5supSsbmTrAq1VRGU9vKXGEcHs6QUGyCpQ8JWunGqX72wWhQ3ibbw9v53ELd8J"
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

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
    "51K4wxLmmFcn2mbaPJ39Lei6TXWCEzRw85bV55SKLmVn2smt2XjcVhgdf1TSpuboq2oeiYQ8nHThmbuuBZh2rjWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32NXwNxBgGVkNvTheVz8z6bzewSdGWayy4dd3dncyg7a6aEqiVJMTWj1ZctH87vzrU7UZos4iVg1qZ9CyoEtuEms",
  "key1": "CTNiD2Wn92ZAXuZa6GLATx6nkPHg97GcZmwBTnyEmhssMZP7G1YFhvEqt3kWDYJKuNrTeyutAYt6yyZzaKV5gbA",
  "key2": "4CMtUtpabJN74r9L2FAAPSjSgXo8QwsjqSoiJM8XJWHEviqZde5r7jzcy5JXHBkBH1ho4rrARoxRCEs16K2vdy2q",
  "key3": "5upfiQF1waJgE2PtKZnPWLah5gS87jTzvCSGY7qCmEXwUp55iErdRYqLgFfTdu1DorTeNj45oYAnAPkcSuNgeNnd",
  "key4": "39XxfBP6oBBzyWmx3o4dAUaEZ6TSwMwA6Qw9iH95oRVxHVgXtsScJGQ1piuNMuM8NV1Y6bbx1SdcvGaUEBRdMpsV",
  "key5": "5UD7wJHpagC3nYBvRJ3sjtAPumeR8Hb4o8hqSPUs47DtNEe8Km2NAxdDG1VaQS4hmkPV1BPBk9Zsr3oZss7FJ5Rw",
  "key6": "2YiD37Ur8GZXkeCKwtZqeyrtpQxL6mqoZngPaPGQtgY1jdXonWFCSafxCpGmTjnePuHkp1TXU5HzAR4Hy4xeEy63",
  "key7": "3YUjJeebvjTZ4gwKG8oBBtT81QuPDgDji4aJTBP6qFtrrw9znRAFRkarztSnLhE3Q9n2SS6MoBhEMum2ygxvGMW2",
  "key8": "BDrUV2XEkDV4zwa6ZQ2Z4JX9HRbZVDPERnap9AMwcY1pwQdumPzWnfnh1kuGKLBuccM6TvhKKLbuKYEAPiJuvkw",
  "key9": "49oHWFB5N4tjFkbGs7VDAbJqMbsMmnrjV33NeF18fTfg2u7ToWtGLJZak7LC33y9t61PHVGYtiUyEcJA7BB5whEb",
  "key10": "231P8wJ3KqARaWqXapKqNh676ccZT1EZ5at8nMF7hpSyC91TANfYbKL3yX5iZzH6caJf1Z3bgqg9tZ3QX8HDoTUA",
  "key11": "3nTZUvHNNiLTB1RvQu7TXE6vPA1BiVuh142FEBNsdUgv2cP7KQdVgTw65kL1BcidjFjbeU4H9GMG7k2PtzXVG8ie",
  "key12": "2HfjtXhxHQVTT3w9wFMWWw426SVAUj2p6L6xWgqU74F2fjHXj4PeNpPJAUbTghV13FVVPmKmtEaU28zyZT42NREt",
  "key13": "3woKXYzTRGbqAvFHGWM9hFGwPaV8E2kHV6bCo7P9jQzS5zrLwTtVns1Sqq25PMrfWbozEDzqfGdTLuoZrcvr2dYJ",
  "key14": "5EmapiNFtpXbsWRwX33SVmRjUEDBrMiPcGvbQphSumXUbTVPW8Vqo97vPULfr9BcRZ9bJzTV5DL9YmDEMehWqPXh",
  "key15": "4Km6qAMV2er5jc4K8CKfwKgz4E8hG6Xp87Fh797Ka3EhBwx2M2m4afcktmd2iVPCkCaMR85QfCwbHWEEw6oHye5P",
  "key16": "4awN1ru52tv8KLR5ajjn9EkctmxgdSVCnG3SMx3tBEBR5fKwHKTqsvL4G84RNYVxe8bnjD5mQ2YwsG76rYVSrYW5",
  "key17": "5Z4GWhYDwmyAHeG5hCmo5Ft2Zecy8cZ7XctDR4XezoabnW3ojnjGSE8d8tC1DJjPwsaAnMtXwakYPXPy1cyVUoGH",
  "key18": "yA6DUjPdmYjBHttR9NFDQoPXBJntnM1pPpVKAUZw67tFtUJtzg3LzxcFK9HokthqRhn6GKzi1xM4sZk5nGr1xAx",
  "key19": "5tws2aTQThLkkV79vm5Fu2j8z24mtS7vHxFxvhcD9ZiW53hPEsYGUddUnQwYzroADnRBHtVNyZD4d8xNVkuhjAbM",
  "key20": "z6BFNMkYca2tb1H1uKRCdLDtCiKohF1z3mvtJvNj9xhec98egHLqnEvJt5CnUjnBs2YGVSWVVqXPzASX9k9Gs2J",
  "key21": "4rwfhKx1DCd23YSBNWDXdyB7hKkmotaQF7vUnZnWwsyfCqYPGYs7n42xRZ6RkumvC722eyPMw8TqGTNa2vt81gPJ",
  "key22": "3LQwnKBvbsMKpmnvxofPhkpZmo9oo5LB49kTeNRbTfagCB4x33dNLiquw1LwRR6FWZTWbAgV9jfiau8GwsPhHUow",
  "key23": "3DQbzNRiXT7R3wCfkTTpJNKs56qCwpnfKzL9ExKUJ27PhKWVeZYsrYnTaytw5EFi3wAkDhXxYehbVaGrKbbwuXpz",
  "key24": "5WVrnuweRtzKiDV618pmcmRwq2CLLmVkhpQKdBgPx7zVeNopRu6SrxSBRT8e2G7Pm1mmHv3rj3uyhAB3HpJjDzZP",
  "key25": "29vYP8ddYCwxe9j9eCMdrdTM5We79co1ykBeJZm2aJhbrtNq8jYqPKtZnBdNx941v3Hbw82uLEU1S7jA5z1S34VT",
  "key26": "4uYZLUzJqD8xw6VfcYN4nSvahXSp2ddS46uzi3w9spLiTm8XD7B2hkwWf6C5EydFidkfKVfPEJYGcnU4JWry5ubc",
  "key27": "vTjXBpM8VTgAoRbTt7ZazfbyYZ4UuHFNcnRt8wueJ9QLFYrvYhrmBmqjP8mUqLU9U6UQ91EbjQ9HbMrrgtRcq2N",
  "key28": "3bNQsihT3YrycFFZtXf2u5JufZweL9Xx7B8vu9iu7c1QwydxKje3z58QdWLswhHzSQn3LttrGMhH2pZyN55R9BCF",
  "key29": "5MX2Sk1t7kYe7i4bL17m9gffY368iCozzpE7JDAComLCKcFURKEaZYyheMa3mUUqmez9uVSXkRDT3KJudiAgLfSn",
  "key30": "66g6JsZP7e95MRmrkVYDHFBR1HhpSLe4sDoZyWvssMtss1v43p17MuwPyEUiKMQ9RV7EvvykQWSHKSi1NfLQTTet",
  "key31": "huYXoLDsZVyEmUmM2guHwtUU8sb2aX3819LE2DCQvg5WQFfNGdSvWvdBhj2z6hqtgQDpp9Hk9bEtFxRWyW7o3Ya",
  "key32": "bFJeKHoMEZKEyf13X4JpKSjGso3EmrCcuLxWLMHeajWL6pjCCxDAyfUKNV9Roztkw4Ym9jCmAbKBmjaLTwVpf1j",
  "key33": "36P9dypuNyKLpnjR3ZkGgCvA7Rq7oN8hm6ZcCrTkfaAWjFDcNuhdTCFWw9GmJWw322JDwxgKjwk8cMSvadHceV3E",
  "key34": "5goJ2QPP8eQU6713s9veFWryA6x8CRB9VvvZcfdG37dxeDZQBxKafxi3QZFghwqSmeqrvFcFWF7pbC4gk6Us8i6u",
  "key35": "2gsFhehKz9nsKyCtC9kuM9VkTc9XBnQowDY37dJ1JsgrLtfzdhpEp3jKqhnzTEJXsqBMtuzbuESgYa9N87yPa52p",
  "key36": "6Nbevm8zPhjYR7Zh7CewLXWAZN5Z5uosXHVWGrhNhuwYDBDxWgUgx4sNqjbJMHqcB45jenmJnSwWeYvK8DY9hcu",
  "key37": "5WX2hV3e7FUeCjWDmRjo8VJdSypFiJ1xwpfNzB5Nq2LkBdJgxLdK9pzNzW3PJEcx2dEm4MG2WcxfLV9r5KgMs4P8",
  "key38": "5gqHA7qqkfAEubTKBk8fd181XyuXtx486N1WeVESx5HSjgMdJYjgJmDxNUqHJbzt4JE4wGJG7ofbPrTC4LUnqBr5",
  "key39": "428mryQ7JHqsVm1WhCShQ4fe6Dktj9jPKVjdZUfpgotC5ChoJ2jkCmqAwWH7cJw5BuJHRhsx9pE9aKEuu8qhGqMt"
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

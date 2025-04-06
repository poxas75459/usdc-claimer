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
    "4BcpTYXGpNs4eVRxopPZ5T1KRzY8Wj1XbmQ4VrKLisbNrMvnCfQJ8RzVkoDAVJqSED6jTeyN55DB89bM8todQoFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jjHDWnBwJBr5DG7Q6RUDFf1og9P9Eey3q4NLAwsXacVQ5kcBpb8ZVTKii9arC1oMLzTN8XNShWeHxFrDUoZEWnp",
  "key1": "57cXYFVxMtswitB13e32tGvpgB7VGZm7DpoMcQ2cv2p1injaM4mqSMw2HyCFuUsWekPW2QGHkX9W78pJiHj6XH2i",
  "key2": "2q8pQQXK8qte9Fp17u78uxcAVBsNRtQHeU1SPiBVyWiYNiwWuCymwK56tMebAzuhESwMg3CrKA7M2wsMmi9xMH6X",
  "key3": "229tgT3TDgWGXBp6WHkYiCLQRiPTZzQZybsfJEYADbUq1d3sstyKyiLk4Ek2o3BViQ9z4YP37K1fqBKsHhUoXvtS",
  "key4": "2fiNQaTsByGgxBrNzvTPwL3ssvm2ZzJrBDY4MBQDKMkxiJLERMufNWHrkxjsR8S45gH9tL1VmPhn65U3wnG2pZmW",
  "key5": "2PsQtLzvdCrXsffHhqsMkHz4yZaQMFX4KvjV1g2M198oFENQpm4FXwfPHSc4EXYCy5G7jMkohoihGpqzu7pwTPmw",
  "key6": "5Mx8qH9uRjBmfX5EMREHUxnZtqPkayHcMo6ae8ZMVmk3GPFMVikrfWLuNc9UR4HuZybL3zpVjtzSjheQnKtDhLLy",
  "key7": "4jktkoj1nrdtaGQP2fiuv2FvWG84jYzXwB65t1RbzbVw2E8A5hwmrVKVTWAijGAwX3LdF8cv4jRNM7BseyYKQASH",
  "key8": "3CjNVAFFNEkFEXHvEFGD7d4Cvn3eoGNweHGruSDn8pZ2TuZhpV3uofSYjQ8ybvg4pwFqN7VYHkFymRwRu9WXSLmX",
  "key9": "55yemD3Nc8B8xwbEVrXd2CnvD7cnfFrZenFAz4Sger599nqXv5UqpFaxBYcPSgoMAcawi41wANssaWkid7VU4ABg",
  "key10": "2XWynqEHtgjvn89uBimxJSS3JNsib6bazcTsfszJcvVGWwgE5VjkSjGfTWvdHWCYBqDegvB7rqyWx5v6ZTawiCow",
  "key11": "3TBV8S7aDP2hvqLjgTUXYsKS5N2qcC2i2T5dQZ364ThNChtznAYsxAz3dT76Vw6w5y9y2FX6tfCbjtZkHS6etdoK",
  "key12": "3pR9RFHwp5654Q1R3nUc5DtJEGNVcWMuFf2wJRm5McxAvjjEEgziw8VMn7UMRmdu4MzR2oJTaVWYwjXcugymmFcS",
  "key13": "5eQf2D2gBQUjv1eC5wiFiJdAPsATBUoJPRXDtFfVfuP9jbXRAAi9rghhhyuDKRmG9AJUAiZuiimWRqiwqFERxZuX",
  "key14": "4SgWbGA3gtKqUPQypCQSDByJJBt2speHcR24yUWbnwJk2EpgoC9desS5QChLNSCvfRoYvq4jG2mxbcevanR5RTFW",
  "key15": "WDAmxwa64H7u57EtQHoVAA795Cguxg2MkievVR2afV7NXRxjQqWdEei1HUt8MbACjHvHigpk8rYfntir2UbMxV8",
  "key16": "4cJcMPxwE4NX75cMNQ1r69rvX8Q15uCbHcEbL8QRF1nBv8Mo8mNs85bSvF7HrQRcAkWpywcqujnAYCX6BwwVx3F4",
  "key17": "5cHVTvi94DFwEuqPo2q88g8rGnMGmMM3nDf5vmuRHyTi1xdhQqNDBH5FK2Xr1AB1sX8LmUrwmeeCCP5JeHP3XPNs",
  "key18": "2xAwZ7sgE7mgTxK8FGZCHrJF8fqVdBjLGSkEpjXnF3mVkJnJcRv5QfpJQLn6cmxv59KstAP8ynWNdWxJzGesK43Z",
  "key19": "33bD7ZRWfQZAnCJD3iqanwAxMUb5CFLEa7sAZWaMnDnmJhk1QDeWq8R2V2VnSAzjFYbx1jb3EZ2sq1fUi3T2RQEE",
  "key20": "3jJSAoxMq7nZ5A2RpzVdaH4cdBeN6x6eS7Pr18B4n8ufETjdZLGetbaKQZQrJsSeYAW5pXx8M4kmLNPLqwoD7ZRC",
  "key21": "2vPNLES6cuQRR7jG8P4muZdhjAEoH3dotg5weMg8fQkDex3qQiDKv5XrQXvusujdq7hkk7srdSNY1wcuBNLWgDXp",
  "key22": "3SjwxdFYpX8m63T8Z4FyA8NShgWpkRFvcKsdv1fHP9FQjifq1B4RDeKhJeNhZNpPExMZjow2Vc2WPffGzSizEpFq",
  "key23": "44Kps3aXzjyYT27WQM7FQXyMJzXfBMKESsEkZycqpraiik7jswbSkqFJXzNUA8Qyax3AZWCkcBZpmGL6K4qYemRS",
  "key24": "2pyx5uDyr6Hb6LMC9NRdAuAW6imtegttc61RXKaBzB8bJyRop5DnC1wQBgZV7LnBWkXLhGevyhs2XGHqVtJvn9Kg",
  "key25": "23vnRu34c278sACAeUwJf2t8onC7rezv3crVd5wUpjMoApSv4rqLHTfNg1TmnLXEGNHkFvK6tWfj3FpDL8k26KP7",
  "key26": "32yTgoFWYsfbeU7gaMonKvANU3pDmoC7AkoWwhCtzn3xCfZS83CvzGvFqYgaunMhDzVbRJKok5V7zGezoKis2WPG"
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

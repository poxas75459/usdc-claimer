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
    "4pSF9uzfjZj4ViKV4Eg9vGnQVdHv5KV1ft5Qk7RxSrfDDKxwHdpBPzGFq2MMYSe2RZioaCvRFuqigmLqrCr9kcat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2isiXk8hiquivZSgyeRWLCKFXLwZ2GAHcPoJDeiRJiQJcwNdpSRWZWHf1xbn88NXKaRsKoPiH4fBpSqLhnJoh2mY",
  "key1": "5bbPnv2rCnNbCmLVmVpkgD174qW8HVQKGfmk22f9p5ktcnzFFe42btNxjEd5hw2hwaLBWizZGQ5B5BKpLSR1Y96K",
  "key2": "izsyUNdoRuRF8C67Y9AHiiv3uTsx5j76ibELkUotcDLLLiGeRrXEvVhpUu5JPmUBF3mWfvNmsaL8kB7JMLuZpSF",
  "key3": "9gTH3hFp9Xvb23ZHdnr2f77CZDAVhFiw6sR8yY27dY4w2JHRzwvQFKxcn9dXEGmZ3hPPtV3PGw778ueybSmWTDK",
  "key4": "37Sp6Jw9oFerVt49KUy3w71pa2KdqswUJaK5npUMhpwVAmiAVUpigJx92BV6KZGo4FXTQnvr7o8nLSjBxvpWNTCr",
  "key5": "5QDr57XX4Mi6QnSZtKnHADsgz98ECMbso6oKXooDziArpcDAGY1HtLe4hHArG9xD5ZjNgtxrYkAh23D9G6c9g5Ty",
  "key6": "4JabvzP56v3PMZpDrCaMVzDMkg6aCaDCfE8W4eX6Tt6nAeQ2wNABUK2QGDXAuMasvzRKoTWwWWUkkasTmsehYJD4",
  "key7": "2Rj1uw6tBXGAhbHnbYMy8GvDazqXVP85vJmiUPhY2544jhFgQqpb4ALkMBBqoUz49QaTtNYWVFh5C4Wv8JaUVKXr",
  "key8": "5Vu7BdTPYU2EawdMsAa8DUnUSUWkTuJtowqrJES4qoxmrhVNAMSgRmQanJp4xMfNrPEFgk9q1dFgdAeLwREAuxKR",
  "key9": "F6pHp5qztTwUktjb9mJAQfusffcFtNCZ6n5i6zbbYChrcDN39bwqoHpkDrihVaULoPo3XELNdTmdurLmFbBnhZz",
  "key10": "5V6nWh3KCvGFQXDLVQAumqNHgbKzQRFvVayQR6dAT2GJD2MVvhhupoRMg7YCk5PKEWGR6zZZ3UKsfqUfRx3zsnUC",
  "key11": "umCAb9M8ADH2EMMkZBthCehThi3dge8SmfB67nm1H41WcM8XHW6VjdWyVwWZJE2risuWJaf6ms5SVW9nH5m4byf",
  "key12": "3cEAweyno3r6zN6x19LSCr5jbib7UrxVaoQq2pkMCitXoQ2x1TsrEnLy2UeeSfvgbxWqZjKRCnuqaXn8qcprkg2G",
  "key13": "3WWvmmq9jt9bA3LEQhKkyyyJEnQdCK2UVDa5m5m9jqWW418RQ8ifSf4DoGgVi7Nc8T9cDcJtNzn7u57mgjZR3tPV",
  "key14": "4My5LgWd5PRNcXFbWV2sziebayMRAaFjmNHdvFphuhkCuxPwmqmsvk2Gu7kUH6xduouFZzemaypjvvwTDnhCvLw6",
  "key15": "42QVSetGt5akLcmbZiS7emmd9wK7RCCNUpKfsYDqg7P1TXgQNN2ZZdS91MFqPE5i7NBGSJTmV15Udqa6Ds1e4DAp",
  "key16": "3nvABWJquKohaBbYm9MxeA7PfYS6W2jaatESk4pewxnrwqd6qmATLAG9YF9NyvjXzdrW5w8tqWJrcoXGzvK598uA",
  "key17": "43igm7ZusYJZJDuK65CKqRdyVSfj9XYLbQJWKPrvDbrpgbDnUfZZMMysf8Y8L4deoasA8rJ3yVQBaU1maQdPvXH2",
  "key18": "2DaxnKyx7raqQc8d3PrWKFnahezzuSkRDsVrfcuYnCwY2Emy5yNAzM5qC7jL3BKbZ4CH11Fdea5PL2wNeuanghUe",
  "key19": "2CEvedgFnJLJydFJ7wVGXKkZqYKpTZyFZs1ZS1rTmXyGdGcmvm2V6rrqLtVwTspvwj8UajUQrGACQFmE6HMkdsdm",
  "key20": "2UwNaPdfpnewp6xJVD76VLR6TTFbpcajAX58xhhQLk6qdhnELJmLNkEdYb4vvv65F52jUy7LPvLkzTK15ryniuQ3",
  "key21": "4YxLWmCa5LhT1ttSxKtHxHqBfYAPd6ZKUbPh5J9qHgXhEnaAqN2tiG8cnkyehK2rDt6rkwN96ZTQnEAyebu4vqpu",
  "key22": "2P8jZHfUxDjeUHhTDon8TzK1xsYyVQ2smgdNe8oA3Cj77RdEWQyBnuvxEyZRYrP6gfUPdUQUbaJn6H5FAoYhF1mD",
  "key23": "5BAsy8yUhzrqTBobj5nLYZpVQr3vv54qFpn1UXqxixeaMsRQ1h41ZdnqAtUcXEoBQ6VfwBdtHJ67x7oeKxD6hQPM",
  "key24": "4GYLDStj6oXHkf5uStyrTr51NartDrUDDb4P1zSSyiwemR9ZJauJWZCFNTe3T5CJHri27YSECAknhnHpTSBvv5PK",
  "key25": "3ssgx3sWecAfkMpEwyPRwEYYZNWHg5uXGF1Cn9thP7yPH8bL6MDjLZhpbstfMdLY7jMUo4ETKY1WZZg4F89jpYga",
  "key26": "2vZ3UAhcmFHEYi592iBgoS8xjsfQysHzBeyeQ71mArNUjzq8LQyjz1wP6HqHuNZifEJTavmASD5FuG3NhUx9wSi1",
  "key27": "4DpsFb8mCcy4jEazZ3yuagWUS3nnRdWoCrKbteiQoKRtTwec2wohcu8qr4E3immaVtwQFuPoM5HxowQGgcVcaQGs",
  "key28": "AYfX95FUh2fQd6MnqHW2Ktg3kBrWEdwqnf9yCiQXExQ7jE5ememAKK6jA37zsPnWs63vMPUHWk8spdczeACCPW5",
  "key29": "2oRqfvCApZyymBY8zN1RsJY27VfbDXd3NUiQW8GyENAxv6PxiNMbqWRYt3JpzMjvewxq2KfWsV4zxF4dRnCLFkVQ",
  "key30": "rBjw9j7axBodTmDzsd88r8Y4ZsEyrMge8D8n78fp81RUX4hFAEs2LWY3s6MFkSNCYsEoGGX2DNhapfRLKptsd6q",
  "key31": "5AxPJkHmeVemB27ZQGFP9fMQri6ZfbhZTbAgJ5xKRdE1CFCZghjyonDfsbLsd1G54uDjp1wjwTg2wcM8jXHbiuzz",
  "key32": "5d8zGuWWLsWp68KfQvoRdgQ5Jg8FnweboGtpXUnG6P1Sxu81bywNZdhEsNwJCyFq5QPqSmU9G7MtATqJfBcSNLVV",
  "key33": "2VmcV3XsHCjkU5gDhyuvRM5N4E5C3bssbPZyLNNCA8kkUDuurPcQHr2F9iY7jeLu4pweycEXpevbY7QapNptsLQ7",
  "key34": "3jvYoTCtZ4XGypvLZooYDo8RBE3aUAPECs6ug7ZwvXPidXvvyWMUXobzVXnJeqZuYSrA11pgbSG9u1zQqdazQdSK",
  "key35": "4wpwniL6WqpJpCNZ78zGRGuFLbNpgoMpTTUnyidL8ePYYktPggs9s1aBHFzfRg6ErLUTVyWzB4Yi5xQZqt6cXiFb",
  "key36": "2mxu9SNbHw4piTLiTXcXxnt69HkEjceJudgoxWbDRKPg3j8nukfJZauk18tMUZEcdSJF7gqY1hV2sWMNWHLsE78E",
  "key37": "3K6mfq9xCEjuX8zoBX8Wzfb1SMt8CzSuvDpksSKhwmVjuGYrhmjMtiMxkHreQEJp8rHCvNsFRVfDccKrcBHBG21P",
  "key38": "2N8f32BfhfV2b7NLb1pFAjWWAZ8zGQBNE8XHUqhaZ6YVBZhAHayXK8KKvLi3TLdLWaFf9yNqj17dKikDZGPCnZuE",
  "key39": "3ucR5ZcFu75dWKPbbZxSRVLeuBL7wwMYRhPAW9oAjFHpuVHpidEkiuxyD8eb9eEYdYbNTGPt4Rc9BLEBFB5KJSQC",
  "key40": "5rsTdPP6rQu4GYazXgrXiXAhgbrjS9U12mjSNPmrVAx35CpPKCLoJKLbS3tR9CGXQ7wjHJ7mEJ256HmbuzhmQ7iB",
  "key41": "3r6B6MfDn45RADwkQAZ5Ejf7YSy6APxPQbGbY8i1fM5rdHWknazho44v1BpeW5yxjWF7jDnZpGy63X7HNQAkbprD",
  "key42": "3oiKgdHJGuWjFk3FQK76LCMhKVh5ryGc1Q5gPQ1pz7YyACixumQ7EFQWZfh5RjqgFQGTj22y3LZRTFVacWQE2NNe",
  "key43": "5za3K9ffbQVQhRbtWH1HyDaftwC4zjxjWrDye1xs8T1youADgBwbxwfq816JqxH4BVKUABcdCvsJrP6PAArz6wCA",
  "key44": "57hKDg5wbPJNCkX5MBLD1fo3cR4mmSAMCd9ikTXa41aLVGJdJUendzeFGFC6n6QKCiSWDfvXrABc6p67sKG4Hir6",
  "key45": "5TftD9uzkEvd6JbEtdAdsWtKhF1vvrpaApBxmoFff4bE2EVKFr1uU63pf1waKTd6Bvcxp1AQbiHkkv8q5JNBSCnM",
  "key46": "u4SD7VrF1HTNsspjA5V3mePoiecXMq5FSsjiEtj9ZzP3UFJGaBKhAL45wqsuKhoLXHy3KPDbvE9Df9YNVTGztzj"
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

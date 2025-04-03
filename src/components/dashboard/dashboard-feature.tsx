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
    "tM6TQ7gh6fYn7zm89XsRZm6SKME67KrSWQ8uvbLE16ajTBHgRRNCPs1v1D9y5XazbxBudzHPB69vcbxNGu7DJgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cNWGQTbmkNUvKrTfgkm4RxjFX7WNDy9p5hFCP8WPCKUSiaLrHkWbmNphhXXh7mE6d9nnURjNHoXfAE1qygV963o",
  "key1": "4vXrpn8JNzUcbTNKUURYfvpaSJQPoSJGC9WSCiFssLuEakFo8nNg8LSSmvoFJ4pWjsx1EiJKwsjFmBgnbkW3onTG",
  "key2": "3vGDT5Kke6EeWy9rnJV3bMTqJBhRmvAjCgoH298985ezRMy11gZd3SqL9Sq4qHhRv7BxfrAh7j65Qca48nwGnbpR",
  "key3": "5dSUFw7DRDY4Tj6AujhFZqWoeU3bqoxRyh2mhEJ1RK9LtmJ4545c2uWrQCpc4VzNSFBa2sLAMfbHmsWSRF1pdFfr",
  "key4": "586a6jxLDK1GtX6gSuVCFbr7K5VGgsEWgrAA1NDCZD8kFcGr3c6ASb59XPKyAui85LqGoKqdcRMpq96saG6kczmj",
  "key5": "2k4gDCnMTzTACfMrEEbgvzKMjvMm9mQdGSGvcS7o9fR74VitqXiKvii8A5GFuUJosLpmmSQ3Mut6V8MVndERtMhy",
  "key6": "2n8JfD1CaZtVNjtNNFvF71gF5fqCd2Qo99e3eUNtpDki34dWXRcQacbiCdHci1c5mSznsqBTK8GhcvrceV4nkfQx",
  "key7": "2TxG9TbB6gxVZF2ugfGYwnNmQrVWgSNtXErFC6f1o7zTcbdeFh6LWqwh6mLvGKrdt8BJowQZDcxpTznTVMtjasHA",
  "key8": "237JASXGmGgYoHCGi5kM9mv3b7Mkow3Y1SNYck2Sy5KFCMvasdezYGcoD3fJAFg7R1DfKJpuQLDZKurJugjG5Zpa",
  "key9": "2wrwXaVxZaDopKQ1eMaZYQYd3cSi4hgo2MnxY8NNexBtSm8i2SUdSGqrkzx87NGmUm5zFYtGc1V4oDAHNwybD4cd",
  "key10": "5hEvcEFnsitvrju8VfU4MjePTPc55rgsrQDunQsHytUyfZARZVyGgNcBZvKRwwy6q1dBdZGoCvSxiCE9PKd7uCHN",
  "key11": "2SVKc36D7EdDTf1dCVFFMUfxAGVqsW22f8STrYvJEQ7YygzUQqEbMnAUjBQqQm2Cx6NWm3wQWT9EortCPpyRcXrE",
  "key12": "3FwqwQ5BYEzYsQ8mhSYzfsV2GYnjBQLGviY9dbeiPWpmWB9QGWpqk3T7WDuisqPreoTWZ4dUJvRcQjtB2B28jr4T",
  "key13": "4f3fNgNoZQdAGsDMe4EXiUY1sZauYtjvACJNQ6MEUR6UoT8QCpDS1gRyB2dcUBAahvKeR7yqKKAZ2xTio5eSP3x9",
  "key14": "39rCaJaxcGu2L2qNF2RE88yJ62SnhJudGVA3HotyQFDAtdRNQj4uncLNLJau9yhTSVwQ1VfkaDauqYsKBmzAiuC3",
  "key15": "53vhmA21MMXG6K9eRCbaSUnZi4qoLMyLXkoDpsBQa5a7Ut35pfrSLiAaxycfZqq4ne4QubRJ73DiTorwDQzmaQcV",
  "key16": "5wK8bkLTCSuKXcR2VuUx23nQNPetJkihnCGaHVo7F3bWB4PnzLEUqULEq8MdrK2TJ673AveA6HfXZsiFjV3i4N9B",
  "key17": "2XCsNww8C9BZyjx8sKXXHBeDJMwzRGZFTtked8eH7e26bGSCj6J8L1YwfycUieFu5u9T3S1geLH9KX8A7us16Wxq",
  "key18": "3YRJUKuTTZ6MRwXGhLcdSpJHsZrWEmuL5ikV6yC7vBgLtnUAfceRS2SmH3h3QYaokjcGwTvFqQpMRM5tYnTuKq1G",
  "key19": "2N9G8Ayu6QKo7sR6uyGT9voAf1HweoWUUZK6wfZrCxKCg4Dr2bPdexSTyWGwUqNv2QD8qmb3a8FADwiPzZePhw9w",
  "key20": "odu72wDwybAmj4MNanWFAdATNbu9cMBBdP4fTFGX9K6UgEhv3pVUZq6sbU5fxgwsPvWaViqVpmxDR9EaJEdb8Rt",
  "key21": "3DUmTv9c98r9qpShiV6fvERdy1vgDwYDJT3iSmsqKExWvNNsLKbLMjRV2VFQEbetCr2ScyqB9o1P3p98nwNGo4eK",
  "key22": "4Xq7zi7Va829mpT8GzAhXVcKHKTtpaskeK7eZZ4Nk251bXJcHmBCiRoKwqsa8rpgFyYxia3s7bEE1ZngNXGeoFoJ",
  "key23": "2MWNqCJfHoMznjwh57e4aawgq8cQBXE1fsLWEJbn3ZUixdiB5rHS8msx3gmZcZiEc91WTa8NgRkdJ6SqdzuFX6y9",
  "key24": "4hJETGYhrJ1pwn1psyvfrCyXTXpPJ3LKrAHKdgKDbUp5ytGPaDRgzeZPk1z6bi7ry9NfnP5wqPjCwvWFr6h3xCZ9",
  "key25": "3RLg3tZQ1wY4obk86m7i3y9Mqf4mpjZghrGhB9U3m2VWWEKRA6edUUMZEdmUfm1R5U4Kf3uzp8eFCMX6NaypXJKx",
  "key26": "2nwmEkjSUTbFdbwGtFnu28Kc3cpbagvufFeZcW3CUPtg21n2fDJtwUSMeCPdyx2KnWQiwM9JuEBXRQJta9kRDzR9",
  "key27": "h4rS1xWWGMYrV89MsDrayAW8AAs4WVhCBdCmMVk7GJ8eYsDwupQjh5MotHyWSjapkvFFay8Eibp78YfgAmi8zqe",
  "key28": "aCKwixocCw6hTaJzKGncP2fJHmWj7YVZuWoYHdksZNGKxR3qp9M6qUZyAA89anD8UpFhzbWPFGy1wN1kub1pPUP",
  "key29": "3vT7kBwE7cUccWgm6cFUzumvxPYm1hQvYGgi7dXgLyEyMT6JH8iBSLg8KpRgiEPyRAWSFkWhdS4ojKQeE14QNKCJ",
  "key30": "6M7m7AWRwmBWb14nKKsrjrJnQNf19EMgmu2RfMyPrYgaGK8nPNrdw16iyFZu33yE1yjyHWZsBVz8CEkBn7ynfcC",
  "key31": "4Gqo2UuU1dRiPoC8RvxNDeXmwiim1MWmw4AKBFUgz48CvrtoDKjNSmJNyH7SWgPpQTTGYwfQeDUnqucrroQzjT6h",
  "key32": "2tb4ukNEhSKXKPWWgVwG4At4NhbhXK83UBeaMLUVrP7LgawnpA9QbihaXxhNZgXiE7YS3JxL6UbyQZxUZx2QDCkf",
  "key33": "2FCaUtTRwHXeizSoHpK5ydLARLm5CWkeveZUVi4TaBYanSnPLE91go7VL22g8jWfxcPfMJDi6Y13UhQNAUKx7sg7",
  "key34": "4m13GbD6GbjLBVbX7TVkY93bWVQw9jodtobRwy9hrvkittNWtoo1hUuhy2mwvfcgRSexwPgNzeEVaREQGLTq1GJ5",
  "key35": "24Jsuoc7yBiCxc83sUGWUXXVNuB3D9Pyo5U4Xc6VFWRo8sGJNgTotF2xwLNSSgYyXBXRtqkjL4KfRu9zJkjWGWch",
  "key36": "3yj6qh6KXG3Jz89yyNmZNTZ24JXXnUe14Xpf1SQg2gz9LBsJeX7jY7wB2cUaVmxd7vTjNLj4BGpNxu2NF84X7oWp",
  "key37": "5JphPT2Xs1zCdQ5XkW8zmiW5RcK8UHxkt294LSWVMVYcgtCKaozUuuLS5CHKBiKzDLh8snEbLYerMvubxBEGCUhM",
  "key38": "4jist3pK6mTg3KuayzUtNyVvJeRi7dDJ6pnfAX4KwkyfD2ry3xX7XG4Jdx12aU393miJtQPDTd6tkttADUwDiwN2",
  "key39": "5UFQCxZ2EB721T9hSq6gdcnMuJ8vTATM6WZDQHcpBHdVFckGves29UUZGdCRcNHSZkZ8xP6rJC9binqV4NwxGV4",
  "key40": "65MPLZer5jcbtLWwJiWh7DSEKB4Pw17JrfqqRQy8aQt6KEJ5eD5UYMcbc5YpJLTrQRU7pCDtJP2sTMtwfPkrnPLQ",
  "key41": "5oEQAyddSwCiCNzaJ146G8PLuztY5dd55T5sVsCFu7ot6SLcAL6VUGzA24e8wsjmWVFeshheV7d3WE1vHjkJV9tG",
  "key42": "eaicLorDAMhh5cqqPnLzo2ximk1rXzBc5tRHDFXHrJuQ19U5UEci1KNF4TAA2jXVDrezX9LTR6bUGj7fhPuwZsh",
  "key43": "5Pk1s2h2wjQRaajcjw7b6yH6q9PWwVtTtrkrWHQyY5gVUDFRNaa5HfkBSXj4axfQ91V49JKDPnxf2zo9kTf7uJjd",
  "key44": "36LYyomP37qcuYfEMK4hM4fLpETrx6d9tsYrR2nQ8BQreGWhLMJwSWJEcyg5kRyCvkZnevpiyrhGJFbAY1LGMz67",
  "key45": "5kf35krifKRq6EZpWdzJzK25HV3cPWrJSy249CSAtgukCLbt7NyjpxZx7k2eQVQgPpmtpUBDEjPZCDHgahp1ypgZ",
  "key46": "2GrUNTjgPPwcpyD2Pm3Cc2SWsRwuBtUnKu3mbL8wGtbQvpduaHghPLKassSrDCvxMixEfxCe6xgrWfr1mzXgHoAR"
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

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
    "3i2T2qtGrinSQcswMeyKrAGDAP3spzCDeNU3Nb67XxPqy6YM36vYYqNsjMNScuRnVEEXzD8gSgGvkTvD8r84Xumd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G1zj4YzkFx7x86aVQtJnfaSzMDzwnf3T5UaTPx4Eri5wLtdCPx3M7yqcHZyViimHt7Rt3Gk2cQjnqTZhz84ZGPu",
  "key1": "5QFNUBF2hCNSqZwvnj1bScgZFp4mz491V99JQsKYZaZbHkEF4LHiNRpmkVZTZKzzcbkRwLNrDLqS18bQxfRwpJYy",
  "key2": "5GLWRQRLk9iVoaxE5gc1ip63TDLe4QoAMDZVc8aieBYDqopXF8MinCrrrwtVFHqvK1dMmddyoVxhywix4dFL5Ls7",
  "key3": "2x2YLfZJmF4pnZNEP66C3jJyrCewShfuBXcvtTiTPqzXvXH9eY52KeBJYmBP5spvW6hys9nzzmiNN3RGvnXkpPxi",
  "key4": "5Ewf7qfUX1VqDHb7rwuEjfTP2HkAqqBPeauefQi155RruuegV29Ae2guzntmRk2dscAganzHFzWaGpetVstoXucF",
  "key5": "3atNduEwttSP6iDzGiosW1SgKvyswsCH56FMDkmjriqC5FbXQhhxuW5cXAUvPfCkM38ziYfdD2MFqFMFoKkK2au9",
  "key6": "2rcWGca7KWZPH2cnJu3RGQ9nopYysMjp2ErKBrV2TKR51jtzo91nFZnGUJD8pCkWRiRAGHo8PCP1HHmYH99rmmLk",
  "key7": "4NNPEjWDVd62Wtsbov3FvgxqbHr4Wo5587UQ6ubxrNNUjotLLiUJ6DNDhf9jAJahoaFn6o7M734qjt2cSSuQdLbh",
  "key8": "5xs6s6tURE55UhbyLFMzpYYQC2YxtRbWs633FZ4sTSr4uvSMUmxcNkD4UAALYyzJ8aLQn6ZrH5744LoXk2mwLtf4",
  "key9": "B9GfVVjUBLgrL2gA5U8nhSk8VTN8k8vVJQWk4c8jnWz5pD8ij8JsXXzeGncYc5sjtCZdAQRqs5CCkVhaxw9nwrG",
  "key10": "3jrx9e1YsVL4CdKkaAzCB4iSQSt2DJKGSo89ZQWGnGbVfWhFpDL3juQUn1AKD2pdP5dbTjF7dkLPk4q46i5evkNf",
  "key11": "2pe9rfBs9KfHyBo8WDvLsTKpeyrxqxs7dCFk2FD9ddyunTBmQ88ucvybbmA67GH7RYRBiiKCNwwUStNUX9EeEAua",
  "key12": "5jxsiE57eaZRMuoacZQuvjgTYYYr4W61tqrphAbLMeGY3gN7GFm4aHfKfwqBYQndUQRmgyGgJiP2CvMn2b52u6eR",
  "key13": "5jtUST5gCQfw6krsxjsRc4EsbzCYDv6n4tfTKiG55SbZ9n7zP66FdRXTq8kHdHDHqwTfRkmEZNsPWAtLnTMxgk8Q",
  "key14": "5vaUJfGf9tQj8x8QmXJMu3f19r9ut8kXDfbjawVb94GkvuSnHmHuQmXx4HQhi8RvwLzy4wKY5joXCaP2xeDVkeVC",
  "key15": "2A4WWLCR1n67L11YF82hbzX3taubupPsCcN3TDEezZdtfmATCo6tku3DRBkuRqMEPxzbHzd6qqpFGdewJnp9uXsC",
  "key16": "62gNpFB35wy3FkYDEgj67v5jjTWkipCXxGEd7yBq948zPxPVeJidesFUYPKpMLXPcDGTUgwsr3WyeT1njZ7J5yyV",
  "key17": "32DQnrRv1xXwD22vL1UXGXaGejBzMPRqkZ6dwhVts2AcAEWNabCzgvT1Bn894cHgj6ztvDYeu6ZyUe3yvDSk3Vq2",
  "key18": "KgDmyrXuyUVAUs3MnbesbehNhSrYmQb5XxcGbht8Jq4wJk5EKdygBRHJZtSCxakezQjEYvtbuqBKi91MQBcPEZd",
  "key19": "2YJ9MX62DnanovPLxteFi13LwjstYuvHkZo9XnXpYSc41xrd2YVrLLMvqQqWvNM2WxNVWpVhcfL48PkwMcEgUP55",
  "key20": "5hCrej2pmAoNPybCA2GfKnAnb8MC1qQSgYFnhgKV4iscJC1Z3sodBEaLsyGKcN9YJAmUfjDyB7YSxXRdN4jBwvhG",
  "key21": "3UJJesmsBezpqEJpqX1wj5TYDkEFZ8EBNMr77NAJt7GgWuSxgJFSnPtyW7xjSe3skp1YARtHjS7b39qSunpfXZDY",
  "key22": "2uMrGEKAW5cBibcSNo4RpLEfPgWMEp24pHY4bs9UNgBCceU8BcmFLyzM2yXYoW1SbQiWuYUt11inN1C2SptVFHWP",
  "key23": "2aKvuhVr8fKPwTRFXykopKgSWomwuXD3WmqzWRtASvCKSbDuRDKUQSbC5puCZPTtjez1X2YppC4xos6PmYHhKGdY",
  "key24": "AokGouTh8P1yLpZSmzAcqwNdpGBAZh8n3zfW2etEdkUcCYWjpjaRqhtvXmmQcx4qxwTxJz176wNjjZeCRxguB1N",
  "key25": "2LSRkFBte1uqvUdnE2ExLhcyjTsmFHDYCz65EF36Y3Nx2JMFkzLjqJcssjQeM8YdenPw2t1waJqAFgR5HanxsxPm",
  "key26": "2oTjwfLPSBMr2yATUYTskTCmCgFjSaNCgF4x7TRSgj3QkcV4p1wtMnSbrsBL5kv3ykvueWtSeYJym9ABVvbBeuLR",
  "key27": "4uD2UhhhFn4wJsK4gJek2BRuu5xjQhD578ARzs8au9y9aDgDJPpnf2cbAa1zBUvCrhq84k5suZUSeQCR4KMwLJVi",
  "key28": "5S1Y3uJUX2nkYrnFjUjeceyRMRfSKrv4Rj6pRsfeZSz7eHsGAotgFxwc49NYVjMMEUYofK6dUYwKF3uZQ6guujRQ",
  "key29": "5w56SbTzW7m1CTeEr1r1ebTjn2d6ZUEYJ74tme5nX36h2vCawyopa7oza3qMog8Z1G4T3zBikXjNxe3bhK44XZK"
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

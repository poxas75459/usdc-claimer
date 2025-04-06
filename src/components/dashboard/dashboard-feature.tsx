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
    "3gGw8nwP5orokLQ18ywPcKCTiK4WjQzGWicyS3qdNpgErP1dmqvo2nbNxwVmADCJ1tuhGFsXxWUAmbx9zyJSfqN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FutqusQSprYYk65ARqhui5duadkS3eVpPd8i1wEaV8rDbHRghmC4Z7G4qdUBLC6icZXg5awJKK4kxtMSwjVWBMs",
  "key1": "61mBmKLKBCwxi9Ucahv7Y2duGtVn9ariGGKDrVMbtTfxb6NZGqXeg6ntX4J2tha3jhCia8VZKQYcdfTapCsFnym7",
  "key2": "cQhKLgXuEedh9PydZ1p48r8vR6ss5P6V6tNZVeQsi1ETx3SAZkcvkQ1CQaUMSDq9WizR4PZT4Ctu33XGRCRHdTs",
  "key3": "5UCQCjEarVCp9smsqud1fpXPaddA7vtZrd1wQSrDcbBiuUybwTK41v2bnpskrZYWxYiBtKe681cTLwotcoSsk2xa",
  "key4": "3YeA4ynE6ELh9hVpSnw9Fw2DMQ5AgxHpCBYExj1eCDaPMpTk3Wc2UC8nBPhb5mVXv2jfoiKUgthy8gZ8gmdhL4Bi",
  "key5": "3h53CqtRqy69jqGd2NK42cBvM1kmfsDgCNffBusfXWG5megFiGNmcsSfUHQKxJF4nncjoVYo6WepqH6RFUttxwob",
  "key6": "R7ScSur7dC26m49FdR52ZsXWhRWjY2oiM7p99Mos9t62AyDFy7uPEFKt7XR2aZUvVsXcmsfNYkX8EReMJLNHBdz",
  "key7": "iUbUC18SpgQL61iemMeQVCtm5kngtAmCTM4xkvRzWvWyYdCyZ4YTALWeaj1xsdU2gPKiZqDtNMW7RvhzCCc219V",
  "key8": "3XxGXCKmP5YcGSbKbgudkMvkEMq4NW57wEwb2VC3TMEu7hv4jZ46U3Cv5BP8VaQYjCymgPRWwd8hYRpeqXFpsFxC",
  "key9": "3TsvWqxb84c5csBQdzPqK4hQ8oUNWCMPRYzvb2y7auPJXd65bKdfP8iFuYcWQuKz1pi8PQZiGXjnHPeeHVsAJEiQ",
  "key10": "5qooHcG1s1bhRgKp4roYeeoE9HLYZeZxweHg1kJhxyYVH1coA2TzbsaEzRmgQmbiMQjLSrDrotamLLsoEf5zGSWq",
  "key11": "nx18bLY6pbZuQNUm6ngSrpS4jejbYqG2CntQc8wzN5AedTXZYycgny245wafaxLzLDMqBjBkbfu5hDbB7qKXqQk",
  "key12": "51jVgMSFx9AcjTQkLifjuRP8VCYqZU1GQaRPDiujeAfRcQfRHF5dexPAL2Gve5FHLT7bvR2aa12TCs9fchqJFuTo",
  "key13": "4D4UQDfYeLbfeENfxfeMxaYGPq22EFCkR5s8tFyqrPFoPqWtAirE7XBAJq1gHKqxQaPdjTBCvpuFEQRT4mGv8VWc",
  "key14": "eFmHE3ycGLTaPHnEY3ptJWAa3iTndrcbDjhxx38cFv1ngy3WBEXTkyaJvj2hPECijqVXGQFBbSL9e6kRSRGzY2x",
  "key15": "3nSsL5RF9FsekcwKYkEHLfeMNpiXyLVZVRSywsmeBSJhyC2phnHxaLB95LtcUpQXBbsTsacfr9WCAeyTCUrZCc7i",
  "key16": "48zWtHYTigCf1Xuz3jNcSF5hssySvd9aNkkQv1QBXvSCx8pqdY3fFy7sYKL9MB5eH7vDEJ2WL6LYfUf6TQ8pS3Av",
  "key17": "UsC96j6AbeafQneipgbjBFtLJRjUDbNj6H8XPz8a1KCktg9aNsxHLeAtZ9fNkPqcxZKbrjwoEVpAzRWR2eASFHp",
  "key18": "4hwe3dcoyAmDg4nJfgcySWibeFSmRb6qzx82f9ANbPZvFFmh9LUKtJFiv2xqfbNhMBdWCgkkbsrA7gQqt8j5J6iz",
  "key19": "657oakDMesneAqWZi7URp4sSZm1BAeV6xxYvnHRpj6eiAtEeZaUpKW3CcoKdfx3c9tF6pAsEAvksHhywAygFSAhu",
  "key20": "2gR4R7MdACEVMSXfFRzAWAd9rJwZVRv6wiCESdPNtfowsWJag8YCGz12t3cfy3QiN3k55Vjxfe85aynxHGf3dyGz",
  "key21": "5crJSDdMf5dMX2oTHABqgL6Toe1Fo8JgsKmPFoLkk6Zfbtx8U7QfADjdS1AaJAjT4YXJvrkyuR9M97Lu5FyG9tcp",
  "key22": "AvUPUNtKqPRScb2Uuw2h1Q28koMowEtgUhENiFDEmYG9k2nTCM1agrWy45D9J7MWyMba5Y3486kEf6QiYqJz4C4",
  "key23": "5Y3dMw5wn6PnP3RgM2ed7Pmgp4m7gUiRoff6yprR77DcyR6qNnGcnpeN8WJYMqnrbZcVVtVBWDKL77evR8nofzKs",
  "key24": "5NWKrUcpPiRRJrcnzVjNDpqJnvwEKesADQ6qxJK7PuTNZZLZQuJtvWxa1UYZvJptWX7Y1SD9GjeR3gLtYw77fQZC",
  "key25": "NoH2gcBQC2rHyX9W4dGP2zpn1YiZeThhkn2qR68CQZKs34JAeB2ngbqPtTH3GLvFrbBds6WX9aQ6qw6kbR3ng8C",
  "key26": "MUaWvgrxAizyMeY4wXHPELxFF83DwKPeDENTS9UUa3NrZrSiA1R37KvMbFJ287BKHp6AAJC3TYuojoa3d5yiq4L",
  "key27": "5z6VYfQ64Gr3ecvyDRDCxYyZmc5Zog5u96BdzzKmC5MQKexTdXWiuni2Bmh3TwJPgRWpsw3w8ULYenawvtHqkqTj",
  "key28": "2agH2DMkC5G7tmNfxwiPbAcdPcMDAQzS6skNpucmteqAwkWqgZthAW68oMJ66vVoFnptM477ZxwBPoZJ5NdhZx29",
  "key29": "2pikqVerSbRfvMA1ys2gifdkxXj2bHQ3Yns81sKgHRQXf2xftPMCdG4fqdSZU3RQC1g6yGfP8wpB9K8RHQnoRosp",
  "key30": "3vtCSqQL38UFCn9CxxJaoT6eoP3eTXMZRveDEmDAc3iNKrR8W1XZFeVNsjQwadwP13UvarzLXcTDMq8xdkZpP37U",
  "key31": "5eDiHfSEmPLTRYsvmuWWGFz3nbum391vq21KYrWLBDysvYxJ5TSuuFo5U6KSB4etKFnoNzp5emYQ1G3QUxarbU7Y",
  "key32": "3qt1djsjp4Tx5ugPpBYqPAijKsJnArYvRZZLw9y7Ma1bbENKBPRthvTiEzLB4BD8A7YZNn2tKqtJ7RbcLV7P8uN5",
  "key33": "66HFaZmsiiAZ8uETKwPAtTdGbdP7ezMnQdXAFstxvNwbrkHUGcJkGnHYjjJrjQuqD9sZyF2CqgAQBJAeCUFnA18M",
  "key34": "4VrLKt62gZztmT3EL9d96gcPjDFM7jhbxhuYpBHrSgQPTgCfFKYNwrucXx2MTuTrHpKAG1axfLYzeFq8wtHsie7a",
  "key35": "295TjhpbpqN4KTXuboc1g1zJGH6F4k8PSUxXwfwhUVPBTdz9grBmoeV9GLEocZj17wXxvapdFaTaaqrAJsrsn5oE",
  "key36": "3QobdfoEFWcub2Sgwa41W3b95A4DD2CAPsYBL348ARxaK7WxHgLDkSSSTkyb6TrMw61hncktQbRzdqJaKV5wbfBg",
  "key37": "4ug7eMPoYFDioVJGzNwFPYMcSAo16Qibeo7vWx7nmBRyzTszHTan1HDnM69ZaPSe2ZQctGbjeJLJqXcvXoXHzvnd",
  "key38": "5Xr3HvTpzdtQ95tqmuTSWQUVJKbVD2yfLJRLWGXKKRhVZ8gw1pnLG6osgCavA647KC4GazaNuF2JsRpqrvPvCC8i",
  "key39": "4fuQsyQ4fifHGwp8KyqYAzTHuY4mVp5hqRNfT8ya3WofPwmJ24tkQUPF9bAeriFxNLpYJNg2htCgYK5FwQUFwpBP",
  "key40": "2SVsXqWcbqrHinBG31txtQRwPiA4wRJDsuhjq5SpsEqNXs5pu4Pf2KuEt3rDEsvQ2gT2WzeEEDDHJg6Tb1T4FStW",
  "key41": "3Fbe1Sx4aUmaP6vZa4aQcjtdwEGXMYREN2wVKEcmjozKmwCtXjJzTzc3JesZ92Z6bChYKsCMEEaXKSvLkfZYRkzw",
  "key42": "5vUa7qKXS2oNiwLxJL2VChUPQsXAMXGkGh2wWSZX9QD6HNQokFMGRhsFPqHDqYXQTEPKinF3U7ywzQYJNU8LLQus",
  "key43": "gFRk2HyJwXkcmMeSboNUX7RDDRRobKQVfzw4Qry7HxXxKPjcmT7UxmBw7AuX5MyhZM3umezBimkW4uPtoroajpL",
  "key44": "Tsx4MWzK85ZgBzp5kTraxvndjF8wsTpwncj8kQHZqubhD8SFqLiEQEbpKgeDPdhsTw85sqt3YP43tcjXSDbMdLt",
  "key45": "dJaKkJYV1r5jnQGXjHBdmovaM7rKyv3UFyXKF25GAjyzcQoYoWPk3Kp8LDfNPtDzwvUzhBkzRHZfgGaGDNB2PQe",
  "key46": "3MA2wHHcj1kyyx3YNAfmdbXmJCR5jmHzL9gAovBsykgGMfiXKt5u9MSmS74ggryMs9QSqQpkNm5qz8Ci1fjkGxQT",
  "key47": "4a4DZuX1Qwbw5SPmsPEnHxa8UB9CD4C9uEaQj2zgHP3T7EQEy5jGmqZREembX1skDZT3xuXzc4P1LQvDrDCxcGYn"
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

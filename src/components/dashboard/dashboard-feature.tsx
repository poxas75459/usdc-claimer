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
    "yUcz77SrPz8E5DhK7X4vnw66a51PNDyCfhnwM8kt6175qE9Ra98aPaN5oWZTSEsKLrGhsPTqF5SPpRjfGMD9sFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NcsZSkKVzXxrpMsSFZuPdCrejjZYc3mbjgcbQwutHquTCm8P7Sp75KYVHGB4qVACKi8wNZynnh4PFbBgg2keD62",
  "key1": "2F7RuvCSdT4jByvYwshaHS68pogkS81zNUkqH3nsavZYNBoB7vBx2746ofbSnXnoYv9yD5iZ2DcQT18iU4JmcG1c",
  "key2": "52Gqq7sZBoszCzmBTksASNoYGNDJDugVrQ5uU3xz3gUhGCsuZ7kkL5mrWPyK5zXgSsuDXAFqqk7sFWgEMB4cBwz5",
  "key3": "5V5HnhQvc4MDFYMzYwHbQCBjtP5uEAnqT4Z2Ridjp8Y5XXDamGriRGjXkEnQ52F8cBBikiBXdaWf5wixrSn46HsT",
  "key4": "4P87468NvieFmhFdPyY1NHyJ4j7rYoXeT89PYaDSt5FLiJVt5JUAyckqD1ftHqWxJ8Ukobuag5thkqxBoM6rfbTh",
  "key5": "3uRYV2QuiqJ34q1kaWPCPpPDBjPFDj6GMLqq4pgMkVo2nxVEXWLsF68aEoY5bJkRsZ8EgMYxPGqAbVLwsNkST8tU",
  "key6": "4MojEfZGH37AKZevDQQ85sQcnMRWw6L1CbXx2gtRJ7vaF4Npoh5inFDWQz2DdUtuLzYdumKcog6kvT1utotqL8xM",
  "key7": "FCmicFcBMTiae56g36sYqvp1YNuVE8dEJKencj7G9cWBn3WBMRS8RvqGhnvJs7Fm3tCfzj37T7EdHBqYNkmzjQX",
  "key8": "5sEnwV9uZMAs4U4p4YJtnGtFCL28WDSURdJdMxaHJxfRoUNasygEA4MvkpoMUrFPtQ1mNUaCNduomwo9dPJx6htR",
  "key9": "3HkZyuVLqhVXT4jV6VkuraPqJQbBkm5B6tkXVKfh7K99aLiXPR13r5edWgBSpcNwr6r8c1ZcECLnHpqyFzhFMbkE",
  "key10": "qzBcvcD9jaZJ2vMhHJzSETMasF4XakG2MfLF3wRVN2bTpr6PbhSfdkPoDGwT12D7ap9AtZLCht7r8f8YrWN2TVq",
  "key11": "5gHJLYeESeHhSSH13HySeurDrkdxWAz6qfDusNkQYcRqrHrAPfhVZAbBeQsuLsQNpYxx9rLQ2QSqPwtQwVhGThEB",
  "key12": "pNdu2teFPzsVtVjTuMYkUdFE9TN4W8rayZzdEZDiMq6VPivG33QGS6pVRvkivfVCd4CNsGw6PM7JW3XYQC2HyxW",
  "key13": "5sFbB1vHgA7Wwm6D5SjXk2Qq7871ENYQFSYoWpoWpukKmhPdETTfRYwdXMeFK2fw8FhpmZ8mB9ZHLJEXT5rjZXWU",
  "key14": "4F3VJXkmPk2FaVVXxawHPMCu8f1KxsakPPb1ntBHt5fPbHT5BeChW2tzGb6xrFswMXF8ZmrBiGAMSYyuWAvf2PWS",
  "key15": "5HmHJZrKndCzvF6aruCmr6QZG8WcGb7f7JJSGQXiTDTho66P7F998KtQyYnN2UnXqCseY9eYGkxjjvti3Ct1HPxL",
  "key16": "5dgdu7pJRoziGRDuDJWaoRFYDBCiDDf4wkAE7YD4YAVPRvpLv6mGG2PUxT8us1RY5Am6QSPGcTRmEVcKeUytzK7u",
  "key17": "4D2SWKvg7LRVTAMzD1TLooZAHvwt4V9QZqbepEGBbZh8vcWRKrBp1qqh4hbE1q3Hu5iGVjpkiWa1HE4Q2vVhLWDD",
  "key18": "36iMqfSoUkQSzMKn26tM91t9ro7FxRM5TaKDNnGbKgaoypF2v6EPumC9FRya5XTxj7CKZFcYSVYZDjZ94moZqA3q",
  "key19": "3GokU3Te1LoPDHkPTh1CENGk5y9pjVkJ1cj9sXKR9DcJKJecD86B7jzUUyubRvJBdU64J6eYPfNj5fvSLdcTn1yD",
  "key20": "ASWAkYPXenH4sq1RUuG7cHUgPRgVfArrqjtjwejM3ANjDk7tqDCiN5MNRYDZWrDqnMZx3ZMpNyrXgs1G6sBdN4V",
  "key21": "3kuGzG5jifmg3Q4YJ7YyarJQLJPYU1zcLzzL47FVdoUxbp4vnjWfP2a9jdmjGosoBFFoLzgkwh7EsEhnU5DJ47XR",
  "key22": "4Ktzh1xUj4wH6seicJifqDAPzUc9Y6Bzrxd2xWDNLY51DFjZWgHEKbN7odTUmJY7V3LBNsruJFHqJLWnb5kmzDtC",
  "key23": "NqNsNhBiLjfVfQeUFqHsbWenYnRrZ8tjdoNAKM2fgF7P6ZALx1TykrTrxiQJKGNg9MNSGWYPsTwh9sSPrzQ3SEq",
  "key24": "3aj8wJ6zrarpdQ9iBCr99Dp8Vg3c5DFTw1FexiNYpbRkaBUYT9r2kVJNVbANyvPvoQ53PwGnYV1YoYJzbrKUs6Wd",
  "key25": "2giKSb7bxc7sg49Butxicaa9xrgeYzv9PKnztQ5iv5EJxVExfVMR4FigveR7VWh6y2abYujtfH4WHwWyfAuvZH9D",
  "key26": "5tYKuiw4tCJ2vZyoBEMindE2bxPBadciKT6jSYWWtnkVMzatD5GNAyTGvwniSFShLCTxGtMS6i7cAw6ARW1BVW3z",
  "key27": "2hQLj8VLyKE2VUnRJ268YTV7yaagut1QRZAU7KMaaGq6TAnQJzTqZ9n8kjjsUk61iVCEXT5q7Au9kSoD46Uy53bS",
  "key28": "NtvSQjvzkZYyyqdGsbYfn9MtPwfnej1jAjXtZAhSkVcqA7sSMmcaHh5caS9q2imNuSBbHvnUCTZqi9FP8DH8zV4",
  "key29": "3KaBw96NEXQMdyCyGJo7GASVXJhQz1Fk5gUHSdL49Lnn8SNgr2G1VfaU44DVVm2esebCK5iUoFhGJr3CCSvvokBA",
  "key30": "5xPCWyiPQmvbF4uuEejB1eoziYSrTh8y9HVEeCaeHxQrcuihVWumYD6tioc7eGeUkqTvY5HDEVFxZTDdoqbET71g",
  "key31": "2jixgW4TLLyZWgywDwuoBRhL5R19TZpLv9z6yxpcfqgdAHCU91bfzUP9bkVZcX7sUDaGjQUTL6FLUHbFjonvQV2C",
  "key32": "213Z66ihUHK2a9Q2shqTqWBEe2oxBP339rRPjJdUYkAsp2aXxuWuHVMh1vbMC65wo2zC5f2oVVNsMbofoUcWppsW",
  "key33": "3eNYfDhFSZytXVdXmZ62tou9f4qXbaEwJMhFqPBv4DrWo3oZp8rZgeD53HRFeSGaYhmV6PVPgQyTV89kKiU1hc34",
  "key34": "26SgpcoRiF3wDZPrFT391W7yXDzebJJPEq2dUCZPbtXZBgdNSxUFj5drMTF1QiEkpZsaydbggc1uSiezXqhK92s6",
  "key35": "5V15W1J8qvJSt3V6oTwMoRD4PGC7BrdsJ5NB5577oahpg48yU8mdQhPZ8sQ4fJ8NaQs4mED7hR35imMBRMdfgtj",
  "key36": "5mJAn11PFXQpGHgXC2tCWRjZtVKWcAKGwFvpNRb76aiWFRg2Ks3oDfDzxaHkMELNeGRTwXMQb2BYMaEgAxCTtxqb",
  "key37": "2rPoFatXtNf13tdvK8UnPDAKZHjhvnsWiuDYy3W1LEzzXtEgpXPdVkBpqvzdzuzFfviJJUcrmCkko35QPvc6Ag3B",
  "key38": "5aQhLQDJ3CK4J15vJQQR2L7nUqywJWNrjSiwEmweeBoTkTZAVxRkocXAEDfHoNyTa9EFBnWTTJWvVLJRwhN8TauB",
  "key39": "GfXiG7pjGKVM9FSPiJatoNKJooNsDgFShSpTi2QAeifjv7F7coXshE68XeZVpAwogZN5zvuNBfVqq97VLincByg",
  "key40": "34fMKafTRVxzrJehjHJD4XiM11dEJyfvykVmqYMHBaNc7rVa4qrHhzmUCsycVojXC9sFvMksA4YyU6eq3E8MMgYG",
  "key41": "5CvJyCmQLogHHk4iTTj3XjFkRAL4vxsLJoJVRSJiUDGUzb32CSeRbTCFSrVBVWHWKDKSqGgMNuRAr9RDa3MtH3cF",
  "key42": "2MYztmQfjcamrekRbgkHzUfB1Pifp9NDk8WBReaVFnUWfYfUL77Q2TUEDYqczwauokqVy2Rni229fCKvy1x2Y9sh",
  "key43": "KcHZgUbPa1JNd1LvGZtBmsJKCRNvhNwADMAcMDuDcovtHG4e2bjDHNJXH4Jw3iocfxqA6ucyuXxonbwbDatGZ4W"
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

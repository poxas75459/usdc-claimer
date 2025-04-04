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
    "4cN7th9Fr33VESiKTKDcaMgBqTpuoSNqwAkgjYiCXQCgn5KwtGgH97J1bd8ztfcpc3v82RZdgGupojh3dm9jxbvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67XgmgpmUUv8iMYcy7C4QNzaBhtMEEvsidaLGkrYUb63fbs1amfCt1vPXShpoFJP7y2odkBph7muMe5rdTtch663",
  "key1": "Kk3C6UZv6s6UAHkXfotJw9Cs7D5jwNH1SQpH8XYErajSvXMivAzmtb6dERDLRmGQFxU63ysSV3k64jycQms1x5y",
  "key2": "4RxmhLuoTqALWNP6zjDabVmzpBijA8kLdGj7mRnQh61LzTat2w327Rbc7BzFCWoBKJgrqABdVGyau1DgceazZSM5",
  "key3": "3C5UVRZd2hMoouzKrWvWzwar3qRk8M4iQbWWLvHpJLvx7RpZyuCXy12iMPiaRaDs5PfL5TdUXzAgbpuBMVk3kdjD",
  "key4": "BfzipYF3JE1BYYiqhmU7kdTdxGthbwa9KDf7wDRrd9cquWzD8QZrTJHKRn3ghn7ErNkQLkHxJGM2rrihwrXAz6n",
  "key5": "2uornjsMMKn2dqKNYJjiJQLxXaY1CZVoZ1Dh4AF6fYTUroQd1Re2MgjxKKqCfdpAdD5bDeS5kUpLZ4isGh73PrES",
  "key6": "4N7Vr5ZoGWPC6zhZtwQ2Q1H1iUH2F8pFWfDhNL2bAcHqEfAp5aBYKrok5fJbv7QTRHBoVrkRcgcYA35k9YwxAphL",
  "key7": "4NRrAmwnweVpd3JrP9osjFnQR9JyeupQtadH7oU3J4cNLMqYPFDpzJdqTG4GTCpt3GgPzgMHGibCLURJAyU4e8CZ",
  "key8": "4tU8y661GLmCExBzkAbpGzt9zGkwfwHsVW9b62NZvtwK1JhFZWN9hZmY7uMqDNG1MJhdVHHhF8P3owvEPXfVz3u2",
  "key9": "TqCLoZx83vv3rYv8xy3d5FpQTzLGRc2NE93qj5ydTFK2eBx8NJ1grgEVaPENK89YofpjxqhDHm3rD8UgbxKvhSF",
  "key10": "4mYkdGqUUytSgHZgHxqcDeCLGUcAKjuXj82xcHwT7MraokMntXvFXu9r1JS5HKVijsDMmqePWrJJToax4TqLFm7B",
  "key11": "4dMc4p8pyyW2MjQoBYQ9WaZM7FUM9BdiXaJapShx1uHPN2pJ2RTB3LsrbqLt76ERBdhQcC1naGX9AxwmGCmHSd2m",
  "key12": "2EwrpTYBKWPGNJDCnye7cihBFJcj8NLtMB8m51jZuVZKYZBsjnZPRj3MLSYi3jNQJoCNNaudf82JQg4GFMNbzK9S",
  "key13": "4qc8sY6g6S4L2RuT86JDWmtkeVSfv49cko2uy5z93L1ZuDKiiTU1aRVmnN69PrkVDFbXVsuKWsDX6cUn1g5rbuLj",
  "key14": "2ggcrGnic4ouD1wgYnAGbJtueaUBqUH715s6JskMgw8ypYCMnhDfuMtWSm6dHmYGEFDYN6JNfrjqNgNzwciF8dhn",
  "key15": "3GJMaYPTkDfxwPzc5AgA9ATBRADmU1eQxxa4JyArYqMh2TUjN5DtdiPkhcNRdH5ZktqP3soNbptfPSnJTgxjFQoE",
  "key16": "37Kscmh8ucX1bH2wiDJgNzWvnfvuUNtHTVh2gn3kpfiGkBruuHxXyPeXKcszo8XdfRgbJkMzioEVCrsYrT558ucS",
  "key17": "4S1Co7iy3bqFooYCXaPskV6q8YGSR8P9azxYcx9x83MEf8z8zwAjMAuq33h7RHRQVYGfcQcxVaGM4Xs6Ji62eG2h",
  "key18": "4c9mTL6aMoWLjPrptLX63xH3UjcQDDQBkc6FKpJU6LR5879iwQYCHnFX37sYpPL4M3f717r25o51aiZuRvz4RGsT",
  "key19": "31SZtcMhpmEWSGqSeNGgjfAp2PFg5bB4rnpAoT1KeTXyYFjh5tnNYerpfRS3jHH9k2azonMoAVTCbtRhrgJpZUVR",
  "key20": "3TZnku1xCJb5xNJACndgbpQZseuM5SCAJyDqMakNuwe6ruju1yQHNgfWDLsD64bWUAFg3WL2PTZMUy5arDhNmgz2",
  "key21": "5u6TSg7rXxuw3fdkFvKyFgGo72hzsggvsqRPiNVBQpfyQAqrXQ4sEfebPgqizgRh8F4jKhmXgcfEfj8mZ9fe2M6v",
  "key22": "4AzR6wUo4bkG4m6ugHjEdm6ezpG4L1fkF8e3uCDNHfbairpGFGZe6Uk2vJrTMC2QAaVNA9RXhHFjfY6QrSSV2U7i",
  "key23": "3sgLggAFpfsKxagFXG6KGGuPQu9GJwYEbBga38bUut4FS5uc15AhkgMtHzyDGvPHr4FWetCxQFQmq1Nnv4T3xzAp",
  "key24": "24f9VKpwLg6ETPa8GaR4Nn5iMzRNCLP9FXFk7hZWuCqGtDc2zZqYkBzgGEYSWdEFVPSuJJ27UV33VPsycBgFpYPZ",
  "key25": "4RQnmiX3idrPP3fW39nSPnM8wKg2sK6uFXittRKkYLWWZLZNntwn4chWLt9rCDjw4Sdc9wDQRYKPTHHsRyJRR4m4",
  "key26": "5FnHgMzRpQMDaF7Jqo9M3q55zdkv5LK5NXSPpUAef12d5uEyP29ycdWh9aymmdKGA4TpmTxw4WfiLCZqxbKAZ4yi",
  "key27": "4CaatvbvRzcTBShdyUitaopgKJ98tAiS3QVkJLNhdvBogyttZQNTqqWZgUotG4uVu9ccgdru5kUDXJ113pTjF2XG",
  "key28": "36mgnt3TUrMwquccmF5MR5wnWqz8HpMofzG5hKah85pvXGgzgvkypjiWk9MGMQa9yzC1m9Y4htca5MZS8Y5UhHWY",
  "key29": "Ffnfzp2RBfNDjat78eYaVob95FfSS6Ch8CpaPyzw2ZaMXafwN4T7vMwtsnwaFk7qsV3LvhdPDQVSW6DCF6N9SQC",
  "key30": "46AeHQ4V2PaunJ9EFymD4r4894Sw3YKjHDqsDVJBS7PCGWN8uwEq8oKseQvLx1au9Q3JqGTtActJgLdTu6PMDQK3",
  "key31": "4wMNKj7q5QVXZbgqN6v9vVL5EXH4ULSRxDs7VdM57kSCUnh6x2Kf5E1Jfc87NA3edzJPofucwGJBrm6tqq3j2HBV",
  "key32": "26Z1v3ZHYNEoMHxe2FzdpgdutCqBJHDKrV4AbiJuvBJrmv4Aeak7bQjunHMGEBzwQEvWZKXEwVrKXHv3AEM1TqSA",
  "key33": "35GQEtMDqabM2zc2PXGrExHxy9g6AzEWxp4hTFGYC3nERx9hgtRqnugkeX9MeEFgnfF2ZxkxLdAVU1mJvBAADmg3",
  "key34": "qpWLHSKP3xNYZjfijQfDzAMoZuSFC4Ksjqiqwf8LqGwDENdWzhYsfJYiqmhhYgar8Q6DqkTrHEMSEKtNYQvrPCa",
  "key35": "2tSs34JnFYL8EWyBcqm8FhBRFLRqFMN1b1jgKpoU21jyFszFqxHKR9dL2hyGbiT9J2hQoBYbEtZj3H7onPZwuLoR",
  "key36": "4Js2GqZVeVy6qQy7wgTxoQTTibBNtrzSpXp4n3gLGvEJvR4Q5Q5eHSu8En5FAT6jwkG2V5Ui3FicWx9Z9A7sgA1m",
  "key37": "3VDhsEXCksUvSKq3oYuuRgVPqHKs4CSvG14tUpW9XBR379qNtieeLbFfa5J7Vg13tgeWhaMp2PdFrmHoiBsc72Ju",
  "key38": "36P2KpijLgRd8124hmVkmZAgPmqm38b1TZkNqLYp3YXT2E8Vo8iAAzFfnRjyedHr9QCHzPYtzoHNvej67ivZLTZY",
  "key39": "3Uoz8fjBkXNbkqajVqpJvXXAWnF89n1M8MRTQc1PrwF6iYdY6h6DiCBpuWKU13oZfLv7FVduMNVbQ3AmDboe5ZoT",
  "key40": "4WyWzvFrv5iGWDYwykpk9zznzsyHswUzUHoEhxBGuqzvCGmbgj341WGFjGXN9tnXDyjiojTL8HNVMyPScLPZi4Vz",
  "key41": "UbzQ4FnCu7ijDJGjfi3tHFQWnZUaiy7vy2n7EfmVPdeFH38HV3KhuJkPs9esgy2xmZBcADJiZHx9XGRDZaktzYE",
  "key42": "455roBvjnLsVea6EmdqKmG2ShmzFAoK5pWCZJoTDdoDDLvH4ZMhUXTmZRE6wpACUM1QVY8GKzsgH21vVAg8DRWaM",
  "key43": "2EPEK5wUSFhn7PQPRVLwzonFGgn4UrEwKZiG9usB5XhxoJz8C9zHdsjcppVw8AtsXcy3ZCqXBocpqyhn4TkU889C"
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

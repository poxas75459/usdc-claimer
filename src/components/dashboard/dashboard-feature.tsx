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
    "5oBUMPpKbWKPbL6cFC82Cz17ki3RDFqz6WgCskY7u6ojSEsrPo6Gfkjhit4eWe5WWzYV2kmB3UBdVPjQVqtDfssP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fbAJyz6TzvExTwDjNSFye3FiEt9QqqyvdRgaWdW5a8CALEpAA4tz4YPRURG7EEvtno5MwozZK2FiEVFJHxgZ2Zp",
  "key1": "64GMYkgWMTVujMfCBT1DUpFD5GyvFzzJZLDJ2nHGtnj9rAgXEEVcjZmM3twypAB2hGfkkwScDYNfnWau1gmi5BGQ",
  "key2": "4cL7AGVTjDXieLjMhc9fbg4urfMRPkBFgJguxkBnJxXkcNMg95JAihYzAGyAcfU6tzTLFs17dDdxvRTz4RZiJZzS",
  "key3": "4AWBA8nQp3C5rJY4UqpqoTCZCEhE1ZzinJwCZ6jCD8N51932qaQnCuGGbPP9Vu3tzKCa5XaEMtcnqshaB3XCnpLk",
  "key4": "5jyk6uqYvrD8vxNUPVXaQnduV85CbbRPr5AcX3zzMq6ZsbbN9dSVevhwVinTrCqHFQXvVX5CXAXpfZFAo3E8FPpF",
  "key5": "PTzdUjQPPzwEY57mm9nZDL2urPRuw5Uh1whmExMqNAeDZrNp5ceJXb4ohDyoCsyX5RSrrYPoeDrdTsrGRNb5Bod",
  "key6": "2coATj2Tpp695jVNbv6yiDZtMqp4uszUanzP7v44J4wc1Q6Q6ddeSa4vcgTwYhFXPhQRn5Qm4WXNY26r3BSHZRJg",
  "key7": "xVXTPeQHPFRz9iV76bZSfadcFoFmRj1492tfH6AqHfZrxujJM7bqvb5DeSm38PeMMA9NkjYP8pnMyKS1KD7yd1y",
  "key8": "vBPwixrhbDaQMvuDhBV98Rder8vn6zCTjSsK6pLB3SBRHEwY2MhN9idw7ckJq13oaNU5JQkyYKGyRzXf5mg7zmM",
  "key9": "276UKCcBDzhjEhKhxujBGGSsAQBBRwxRNJyE572G8PNzNTxo45hdkTSiYF2fRJQUujqbZfP9UPywJomSi3W2MGux",
  "key10": "3BGB1X4JYYYsCfGBkn6CgEUMmjxrsUrkap7gSM7emmirYscMaVbKmCMxck54LDaSGxcENAN5EexW7BG1s1uK5SFL",
  "key11": "3QP29Nr13Jhn1fQxwyByYVkLvsjRfo7nXe3jai4RteME8PXhviyX6EDfnDcXZDU78FCohEUuksSaw5xXWb4kBFKc",
  "key12": "3fqbVdbMLnZGCXXkTuxgGArCEkDUjgz9jk7TcsiLq6Pp8rdtMP3C9qv7HhHobkQ13snAxorcLFXWEhr6RJTJWwP2",
  "key13": "36e9KnjSf7hBY3oSrGro1BbbFa1EWnm7wueBiVTaGjCj99Zv7cQb6tPX9F4yAPmj4yK1vpZYde5kZ4QmTmKvXxYy",
  "key14": "4tEeX6ZX1458yA4bckPPUCgXNCzXzYitptzv7VuJefkJszqDRGaC33S4voqY6EnLxe5JQG8ZV7nwa1co1vjkQU9n",
  "key15": "3opRZb7Q1oWbUWAfx5ZawxvAWQfonoLya96ao1Wi2JNHqk2QQSC3jzRZwWufuN2Fam4YivkmejCUPuAsYXHF3puj",
  "key16": "45MvSemPgfPfJFRfYz9Krna4JsghfJXprqYkfhiiY1Sak4Q3uuRyqJkkSiJfhoDamAkCy2qcjKuhUzM21Qxay5iX",
  "key17": "4ZSJCW7X9evZeZPahShrNT6VqRGfeLkuzrWa2zii8G8BLqkrGK545HNAM6S4RWVncmT8rpz7268RaWTjgvatsCB9",
  "key18": "34b4m1KKDFXfsji42bUc4vYgb3Fg3xoyHAR3XyKMXB7so411XqoPrXn5Qdu69GU8af3TBQvauW7DPwmrMVcZn4rN",
  "key19": "32xxjCfFhFD5TsLtxGJTZd7HDW3BDKJ3NrrCURuXrdXcpaA8dJEEynP3VyEPeXW3vT8ocQ2x53J7pn55KAAoUmVv",
  "key20": "j9RqrBCPLean85CdviLayH6TmkuYpyjQW21GAnbA5z8ECatfWxG1zgzdNmYWivtfYRFvLKq6oi6bnrVCJUf827H",
  "key21": "2WFaqqecyh77UFaSUCu3wW4yL42YFjyacBkbhZQCM4DCVrwFtXT3AvWRg889F539B5XXqk5HDvV2GNeaptritKZj",
  "key22": "P4VZ3CvnMAw8hFYKgaVZRR8nrCutS3WHQVHczNxxKgWokiqKmvMVqvH3hNPruCeMVc5EEhU7KVHLazDsvMstWVh",
  "key23": "5uXo22X41hTbpaFQncwu7ctCTT1AUqfUG8VutSKmC12Y4GLwXJd6ZUnDAFKar6WBPcpzc8fXzkDA43KykDBkZYUG",
  "key24": "2BH592XEZE8HaY4GWXW598q39tg392P1yMVT4WgMo87wB5BAC2rgRnFHN82tZUvKHJC3pw4tFfBfhKDAZ7JrVoPp",
  "key25": "sgvQ49k1jk3HuCxQFCtxKrd3FZB18faaDH4oXf3HiFgnBr8KH8meywVQWUemjpvw9w9u4U9C7NHB2Mr682gh1GN",
  "key26": "nubmKTppk4AeqwxCShSgQVYuUoQRpkmQw6xVvwKrVAxzc5WK5KGneR47egwJNU2psTUMYRa6u16wLcr2MogESGU",
  "key27": "2BeBgdoE6SXamtWnGH9Jz4SbbeYqhCxxhhgn3aBmsnc1VxPhnEmvCuLKk4R5XXUBALLDUk5m39nTLESgFwwgH65U",
  "key28": "PyrMVxbBJE1ZNiAaoS58RhKCRemfB1Jq64FvmLbwP1EJ9eKjoUHYxx9bHrDVghb7t9TSeWY5suWQSNAVXtoketF",
  "key29": "5YPHPybAWc1nzFamMx9yX5uf6yijAQEGadqoERHWbgmnHoeNvDQegoYP9odm62JaR551RTV2EJRc5xXJwBdEP8Jh",
  "key30": "gZst1kgf31ax5Ut4REr1D6RoUNnjpxjKF2r3g6XBNZBoTgzFo18KjisCQb1KcrDU7xXcgMq2gHy5ymUaCSkpFx5",
  "key31": "3wf4t3k2Tq52tT5vjWQbqJ3DdwPcTAXWfDDxJKg5aAwYUXEZofKzTeBmhrkbKVWSDWuguYswyfBKQt1gQd5GuLgL",
  "key32": "3FgL7YzD5M25yQNHixsFnA37geR65HEekeLwTH38PeMipjMVjthALUSJauSouRxmmvqKkK6ryvGc6FCsQVmbEdfC",
  "key33": "4wfwRawpQFPudWBaYWGEmrJN3GBAvQia45MPRiU66qbAznxFsXWABDQxkccyRkvX7QCwDowe5kARDRrpSLiii7Ac",
  "key34": "56yJPoCGq8hnfCDJNRDA1WQpUmHsacQqDZBZBCTgTcoh9ptm7ufD1MzQCD8EVF7TA6QkL4KfD4Fa8EWSgJzBUYoA",
  "key35": "jPoLedzmLgZ9H3r5z29CQFWhTopAVjahgvvPXd8diVZ9YjDbAc8LHrfezHmnPLVcXhUeYMKoPZJaGCLmowF17US",
  "key36": "E4hEB5akt9VCBQUDwh7h5GRvqtKtUSZULUxcf3tyjUa6eD4hPMbyVUosWrFu55oUVPPE3LSfBQ3LNevCEmEvgWq",
  "key37": "4QHhARgPBMewPzmiPntK71wUNRAsYY4uWE5RCUBt8SRwwCftWpijKGR9UbcPJdGDY4h9gGnqdKNQW23ruTdZmx7r",
  "key38": "5PmMvJz7rKPvmbJ7HokaoewArX6UDWkKi8QLCcy1UZCcY3XkuU88dhwAYtReCVboibZKbs6uzrkMrSDkLimMYAFk",
  "key39": "627L9B69tEABD4fRxf6Ugf6TihgHKxaNXokreT9LCBSfUwGCMC7t7Gd5TBrjbBcdLGT7nBCheBVqpheYM7Fm7Qza",
  "key40": "3ZkMU3w4vR1QtEerNoBxrZLXFFVDRyUzvpJh9dNGeK1b7NB5apcYZqS5cc2wKSWM1RVwKdT8tLqxGiHkSBkUc6JK",
  "key41": "3MKvAbnAqwPWNuZZCVh8FA9U94vQek74qAAn4MsuWYyuFU1wQYuQJedzu5VXpXtNZHsZFJDDh6PwSHMVdinDtiD4",
  "key42": "3Sx7PB8Hzm3cip4ZyzxywzULYwNQXBacYnpY3essgkHWXNVBJ14V9wkhZjdeEvVhTEcuxByWDGbhxFKajLRRyjEc",
  "key43": "riVDaXbnguCwZ8ypWue1SYayAERTfZ2kUgehr3EHMLNX8RJjSTWy8Gmmj1LqvMkp5zWxE5iynWMQa2TtsEw24gT",
  "key44": "ronQNxSTqpyNynp916fg4vM9fTtDXDfD2pAY9XeCGVMCZXtjxFUHKex5KNuU8aK4KSuZbi1CswCzLqkMcpLTBFH",
  "key45": "2oinWvh6cPRWF2cz9UVHRgWLao6z7C9bjoR3CHzF4Zeh3TrURZPYyM6Aec1TaK8n68F2p72qz1PrwCz8W7NGPMfu",
  "key46": "3JQ1ix5c72ST5Wbg3PRXT7aio3rt1iERNP3v4o75czpbq74FkdyLNzCjAnLvGTgcncWBYAfpp3g5wBrUFs4Wk6MG",
  "key47": "KECrn3tBfq9go5z5Knu55hWuMF7vMEgtTuQrWZoPpwEZSKNxTuDUooYy2YaSmzNZLxRojx28abNTcXb3qKm8n7D",
  "key48": "LebfzE1pe4SdEtpVFrcBBMJPgJuSsnjSYRggkpNgVQKXWc7gmLr15ZYkwitVQg8PhSdHLqJCScvr1jgBwdCgUeU",
  "key49": "4n1RqvvZT5u6wYYK8wZkMtqEsGyu2MZPtyS16nRc434dcDnV8zuSJWUeNoyiWaxk9pkMnE6R6ZxATwVf141SVXwr"
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

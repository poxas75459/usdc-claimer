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
    "2gmPdvxxAndpUhfvkFVUG9kBjN3MBc8kCtCi6Y1i5rmytD1HUFvpVb9isTLBp5RRmswZvNzfHXyP6bGi17Avq6bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yy1GzBzrRDEjomjtPmT2wB3Do8ZRhGdi1suDdK6ZaeG6d3LaaK2LAkZ9hheKg12z6ZaFEpcHcZ6Eg32LkcNXnXb",
  "key1": "Rkf4zgtPKrZ5GUVTZtVBkHXxL4Mg1yWeJwzq9vdikgs2ii8Jr61eSTm6ADuAiosazpbiE7MkAtLQ5BsMJ4xMGH7",
  "key2": "5agmSupHLm9iQmKqCVBPWDvb2WYL9VJYLpUnD99Eo7qApEm1EJxSVSDSB32eJrRoqtKvtQ5NNpardWFrYjYPFJ2j",
  "key3": "36d9eJYjPaqeQUpE4ZBsjpWsUMgRQHMqgBj2C2o4jfjKZUwfn5TJ3defjfQ7UdT1DGqT5JaadAPBWqYj3ZhZ6GrP",
  "key4": "3KV8ZfhWWHQSKJY76L5QFgXdna6ia1EV9yYF35wjH52gS4yKQwwFqK8Ygs68aAFXWmX83mwwG4KWABFhtTWV7So3",
  "key5": "4zLazfbQbetxdhdSSTZEHoX7FaDNcfqByHxekQeY18TvFPWnWvQMHkeb3w6ENLWaFA5sZFXzJBv5f5sy4fziRqqq",
  "key6": "YXhxPtMJMhWnEgJxTgZCkS6JhMiXyWAY27WS1FArdsV5UQDb7RuxgKtGpNBuuPVcsGerPEkLqYKTQkeVg8wjKjf",
  "key7": "3VXjWwwXB7qd18bvQXx7cYETPGHacsfFVTqtDBqW6zJhaJyYfKdrrkAzGdRYsUuey1uJWwEAGWEbJ9EqSDQZZVrb",
  "key8": "5hVMNZfHYaB7bHTpv8euktvG4eR77bwhK4zJu1q8jtWMxzjYXnmYPV7amiEsn3EnuXXHWFLmPU3Bqs7JNp95FegR",
  "key9": "3uD7nhynediXLQ8v6yf1GxE3k36G5sQnZjzE2GNZ7EVTmk2Xk1Fc1NCcTwkyGrxUgsivQLkixkNqUJaikeLUvy7w",
  "key10": "3zrpzLsMhYnuDQNT4nAgyU9pWdFtAPUbM1Z5DJMZjG4UXJ8LsiVSw5xvCVpPVcCAPGRZApS296siYs5R3fLS3heT",
  "key11": "4RT7Qru6Ahu14FxDmCZdGMRv2sA3cRsAmmztQEaPmzQccKQdvQHECBSLDCcr6MrbmvGNj5zYbocLpKCpj92L1KnN",
  "key12": "3pLdCK4yCAUeFSpQmwkebwBU7Wk31kYzNgTorHhC5MWhRSDyUhUzuJLAkjVEB7HVD6STv3ScHoUqWo3NLQqbWrBH",
  "key13": "7SWUtW54f3SXRjRkiEvo9hrotrWBw5X4hroSfbMv2hYQr8BERdy2Zi76C7HugdyWZz6MbdDd2HGoZtnewHVq8Fq",
  "key14": "WZU4r3Q8X6xiLLv22div3zZqLRDnwzmdYuMqVyCXtBCm5dmGwCqmVWT54TncU3y8HimgFukyYnX5AZhKyV66LET",
  "key15": "57h9KopjcvGrk2yrvDjVNqfZwn17k6HT4ZNhk2W821SYRaoKGZnZ3wTf7qPXgQE8TGKcRqPsPt1AttpEezaPJVQx",
  "key16": "347jsF2tpBTXcBCMLDhpHWLjs78gDAUbgpM9GHKGfLZPqaFaXSznhCjREtkzSZnEU5Xqfi6uejC634b7tcHNH7M3",
  "key17": "5WeEBkMxyvdKQ4gkF1k2gJoSGdn1uzto76BtcbGZiEHot9xECcACtqEL3K3WcPmbmJYSjPPTnyywfB7qUYs53PML",
  "key18": "2prmTdzhLmKs6LBuKE4sPZwAXjQduRixuXSEkH6BRJERshjUeKXoqQxykHndNwGs4TGZxtmzBh4iRt4RNNrAmJoZ",
  "key19": "5zTsiSEdJygaYLrL8R9qzBsQ7aCCy3VSXZi5VrX3VuikU97NyUD6j6gcCYqKSauKtkKzsCfMig2iayFVSM9G3Rvu",
  "key20": "3sMwpoUm1DxHTbXcJtwMqp3288KyDqDgeR877BbviwmRs8fspWc1zAixXmAMrhUDBsny7tfLHY9PBACBWz9cJDh1",
  "key21": "emop5YmbiR6FC1uQEtjs38Zvj6T9wmWzofQNxSEpF8KUTuwAyskiUJMURDr3YB5HgNwJYMjcuhZc59cCzqCTZP3",
  "key22": "2BVU5rVaRoZbXY62v4jnedoLyvdBYLVtW1m3KqghMmEHL6NM4vQgRzkm12q6rk92R8HGnf96sCtDVooukfq7JJR6",
  "key23": "4sjWzu2wzAKdTLUpaWekL5NJWjZz6CJBMoggBurKy6D3C1RFwzWYS95LquGDaZ1ga1dsVHRd47nv1sAFYcfq3zXU",
  "key24": "57D5CqJDPiYLN6zN7LTC2bQpyh6pJKU6GgUeH7jdj5L9u5eWynWD3tp9Jov4utMVG2RYoyR3XkX5Bq25B8PhZpNn",
  "key25": "3Kzh4nxtTD4e9eGuAEkqngNR2PpZ7MqetxxBryjjyqHWXkMSFqoHDMUh5GyHhohC4yQQHMoJed1s2g1YkDpd35mY",
  "key26": "3RZDJoSVS7HgXXdDmo348SKEz14GsfS8W2YxU2Z6teJofTDkVX8DeBT5QzAQfe7SyrS9hhN4Mf9x2eiGtMyU6Pfw",
  "key27": "2vf9ghP9zHhmvQdpU3KQUu9uRwGEbkmXZUmCNoueR4PJG9u7Ebt4yRdDh2yuUusn11MMVi6iTCvWDug8NhiFLjZ8",
  "key28": "4vshuLYDjoQipAc6puVoZoM8sjruX8xcQ338EM7Z5hyqm66XXb7wEcDfBSYHz2BFWkzwRw2W4KN8LWUuV3wFJDcJ",
  "key29": "fePUraFnVr3MhAK4ZWEh21c9Nyb7pGTZGJUczvyK9k1cyxFEKDzaAAPtXm8YX6S6SSk7Sesg6szkw7sk8LMn43M",
  "key30": "4PYRZaLe3fvsHLLEiHznPNbSyFBWKWnwHsvCSLw6VmdV9A1ijtAF7dHweHUn57MMCb25PymAQSauDvjnud6VY8VR",
  "key31": "2c2BPnpEXCjgUXTxWA955XJ8Tpta8XJncRRJSAFkf1RG9xt7Nsp1QG3GCbppvKANBmAugTZjXEDouZV3gLM1yxK4",
  "key32": "2U6KCoWkgbGdZik61ZKKAQbNUS2gxs39WBwpJqDxPkkJ7UcnWzAmZZcmBknJ7LcRGWjfqociTZ8S9TnauNRhpxEP",
  "key33": "5QJpjfLS6gtmXcif7qpqqBFFYzdCiRsLeLFXomUCvpBYLhEEKsFZy5YTepSzF9L5yfQv7RJjD5dtVaCVVMmnMRtJ",
  "key34": "2iXpFpZsr4ih9gnyxaraUjhkJ7gMM1S97wmCEJHEq1nxfNXeEGjpz5gPHF61ostdkyLFndarqRgj3gsytcCfk4EG",
  "key35": "5493CxKkknEPPL3vr29vv4vBrT38VRaG16yUsuXe1wqo1otDffvyWRQKLF39wyj1Q657bXAhi91ZQQSUsYK9aQek",
  "key36": "3zNV9g81eCkh9Vhigyi4CLxMJf7dC6xDicJ9M6QBwKWrkHA1RLpFKXgjpZojUWJuAT74rZLGnUtbRD1WXhCbKgrJ",
  "key37": "2xrgWoagJbGhHkSxsWvuJ2wo6eF7q8o3ogbForRMbRTqc5m8yC8M3Yz64ZtzSqmVxH7byUPREEr47EgP2YTBaqSo",
  "key38": "MRbNy6bptw4NXufc7bjLixr9DmFW7ZwitWqpUpsdchrGrR145dx3fuhyPRMD5Pw8LjtEyM8s4BwRvJxZ2WYJQ77",
  "key39": "zEGn5JWe5U7Raj6ww2GVq76jz2xTXvK6QgnF3L4ZwbM62HYBmPKmRgSbS7MfSGPKHGXXoHvBQLMYdDAsmrGg6zb",
  "key40": "5brvAuaYF5hYrHhS3GFeKmYkToUWY1pLuBF2NfhBy9dkP7jYrBw1BqKaXKZyoHZNXvrYeti5jZk2KNxuaS4BjqU9"
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

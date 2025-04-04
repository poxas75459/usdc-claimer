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
    "4SbhW5bfWQA3haueaadNShKgZUSQ8T9RjaC4R5pnUv4hRwNJw1gNyX7BDVPzCnbvm168bemvHdLXFUzBWn4YesGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pe6gJpQbV8QUMp9EbeK55AoDmP3CVr7p8B3BfRRupPo3tt7oB7sDRGg92WdMkkWPAJNn1DoWgVdaYDFZZzmaGmE",
  "key1": "5Ed1qRUa1bg3LDAkweVnxDNoGW43jJr5UhNDnRX2eXNgFKm7ppvPDyfTvL3zWw6nebEQ9rKadV1tqRw91rzrzyUu",
  "key2": "5J4krKDXYuiAacUt9SPdDeUpUNrCo6sMxhZpQTWm9xXpUvF2zHc2uG82uRvE4jyKLbHsR6Vrsw3j3qx6Dzc9KMQv",
  "key3": "hAWLaT7Ju6v1ZpW3PDUVpGZ7tYUQT5xnbWNgZRNe9UTnGst5dxFoiPCKCHJZXcTTxLqhmf4TUcjc9kErdvUi2hH",
  "key4": "5v54t2RVuiqZHeq291FwXRUEebCJcVHRWNAZBcfgdSfB7Y92Wakys4DWk4h9FihH4v1PQvk67nFXma7MpJTK4pfb",
  "key5": "5H5oKvaqef9sWnezvQwUGgvkxoXu1fKk7hgZyes2TLoPBR8zKsrvKnHQ8jz2Ae9M4J2udktwTtmpwToYzPpwrmQo",
  "key6": "PgRQhN87FsRE3AuQNCrDq4TcUW93FMbueFvhbfHQNWsp4EH2EESbKKw1JwB5NyZXtFEw4GU8ZrYFQYtRZg44rXw",
  "key7": "29LskWPTMBLH7121fxFyhATZEbpCL9ADG4XGpNnAihyWhdF8Nf9QQVKw9jxFF7KNhqEbw9PXHdSaN1AdqpnsQDvy",
  "key8": "5uA2vgcXk32hB53Lbef8gfSiqvi6qyrao2c7vFahAFui3rN3aWZLwTvKX2G2yHEPNDbmSHC391qqmg5JEmAsd5VA",
  "key9": "2VZeRu6vYPoeb8huoWXmmWGkHkrzup9VwsGXzZq4uQwsUKCX45H2JBaVHYZngvKTkZh3QbEcTBQy5Vu6aeiKtcb5",
  "key10": "3n7eCNgkckkY9QHS12zYVeLa4hKddRt1MwNfFe7kXGAwqNPs26ym6pozNtgH4fRTggLH7KqNxMjYxhB4vDUPbKb8",
  "key11": "65Lzn1aDGbmkvtc2pQVcx7oSW9qApVRAfrKny4YuRVaJnwwkxA83HbkhJiAMz8BmmxGJpfNzbrRWJhMnFwgQMqsk",
  "key12": "5GAKpox6N47528X6mJnZcE4UXURNaFB7ZmPkYsz3grhCBPCasYz69MU2Cf1aFuB4N2ykdP6oJE2cCs3sijYXXftY",
  "key13": "5JyiKiByvjPhDVzJ9fajXppi5atZ64uLkmxLX6dMzY4EgJd5swpmdNoHpzNt4HfCH8a6S6hdWj56W48BiqFdfyLn",
  "key14": "233H6HyysLbfp6aW2KDi7BaFaMt4ogx89Q4NDsgMxTSbTTCj8vX9vmoRdx3LKoAuJ1MJ125w7XcbfziVnW9YUBCN",
  "key15": "4kxnTy9UBEga2tTSQv1rZtwcwPrk1sekhqqzripopSGVLAijU1FqGJBRNVETgBP5KyH1LiWfdBxEoMN2Fi4tzFX5",
  "key16": "36WA6CsUYR3jJuoHYEYouUjVDuz5tHQ84sA7nJjqqo74arGHoEE1RPGRWhW3ktbVoYYUEgup64tGBZ5Vgr9FErAQ",
  "key17": "57VbmYgUER9hDEHPYq8P7bw8Kzk2vJ3bJZzmThHQbT7ZozsBc1TpY4i5mWqFwQPaKdwfCpUjz8fVEnVNd1TFLEBc",
  "key18": "4rHsFkd762wjS9k2bfKDZAatgouJ3MmZEZNEfgAcYhUYvTqM8YnsgGEnrTXLjNZRJydZrz3qUfnRve86EorSZ23e",
  "key19": "2qH3tfn4hYYv2s2LYXBVaYHohar5nKn6XWUmB4Phm76FwfcwTZHCwP8ndD81QE5brWQZAZEKSxtLPG5speDPztPY",
  "key20": "2twpwocfCxtgDBGZinixraZJ2v6MUL5JyqeZUWwpHMjG2pQtRewunYMhWTeUeJDmk8gaZG2R4VrG8imsF48RxcLV",
  "key21": "2xixU513bo3yWc1jdoo1uE6RUJkfSwaZQGtwcfamZe5zTBFnMXweubSLVzEn89h126cnuSFBfbrJiKrjuBA9bM3P",
  "key22": "54XB7qpeCG9hSqfZehPSD3WTfGekuF9KFD16KZ38NRFydJz9656aUiB3rP9nuk6bcLSi4mHXjhY5Bg4PrcH6rK3U",
  "key23": "3ND6Bmpyy3ULuxFR1rARhweyCfu2orSZ6k8RywsZ2m4zznjkT3wg9cQr1VXqHE8MckibQYXeMtHMzjbFs1KDj8HA",
  "key24": "4zFec21ETbjzH1n9bSo13TekBttwUGQaQQ9eSSagh8BDfJUyJd3nHmeXjzxx2fzEnraPpph3uxkdwmN1fYyqEAiv",
  "key25": "3Cafx2Lhpyc44jecEkEBPBoWmW3vSsG8EZJKyJcQoodfSThe2bS9RXs6MrF2j5GkX8BNXrPWo5xuTWXQ6nUjEuVy",
  "key26": "5mP57KYgNW14aMrNx3Bts8KvjvoL3G3Z53kQrs9AcTtHgPHRFUK99oS5QCZoFnvb9AbMi2QViSe8rtAvg8ztjK9S",
  "key27": "2rfJvrwnCPK6pi2xaRSqPouB2eYoZZ2Hd16nXYt2W1J1kRWj2qEga18u9Rv3VKH4P8gpzMDrMX4AYSDRG5EZF3tT",
  "key28": "5fbXK3u86d9r7V7SBSPAuqVQDupV3Qkh9HSUVYWfQyFqFEhhyZg9pzmJCSvg3FequuwhuLzeSpXoDFLwCRzMcEuS",
  "key29": "5Neww6BEQhBpvcwE6Yy2TTERRnAwPCixPmfhFPFgddYhAojnRubAEHpAGbUiGuyntrLm8jPHFcqeS5faoUM3CHQn",
  "key30": "4rkzNw6Gboo4uoMB7fSsfKwSymtuEc9UrUga2DM8TFYaEgGX8rEMajfG1XPHFJAWH81LzwmHnNRmzpk4P5VEGj2q",
  "key31": "5YMRVFoBB59f8HVnxBNXFL5Rhye9LEeJkpgmvPtPq33agFwVDYGDbZhmVvRo2Ksemk2sHnwoXj8ghzGRNN8wJ9CG",
  "key32": "2CS4UFY6UNE3RH6FeuY84KbekDwiMEQYenkx547XMyJQTZLoU9gGm8ECvP4jf3A9Q27s3G2n5s9dxBWk4Tkmq5op",
  "key33": "5V7pD9yaWLsThdF9ob3j8PyW6BqQeMCQaasH4CRakp874ijxWt3e4Gjt6S6xuzSqrDoYM2UsA4zjtisT69USCgS2",
  "key34": "4F7HDyzn43eRyPTzfU6P36Jx6QekVFG56SKbTgWq1WGddXBjpFKUKZLkRpFnoCDVc9ocSadQkBaYxVWjBFZwe5Rf",
  "key35": "2mSHC8yRjDVnGJ3yUXqa4pbXyGtv9UZfxACTFC1jSnhjQMF3mtTDEG4edd6GbhjJRZ76hkQa8AgyNPwzqJgQoRoh",
  "key36": "2ftrxKAQx7o11zbAGWCwpDvK4XSbnxTdVEKXJt3hikNVeHMku9RgoSw9m6zSg756mNwYdTCwohnKk7rMdDQmekzu",
  "key37": "5YX3dgcEs2Ej8smEFemqgpYKvYpBsKWGQ6241WG1U3erbJvkia3d2U7NfUnqUokQaLW7vrDrH5XsGoPzkeyyhWE5",
  "key38": "4GQgbuxAjmKDDzzc3h6NaptdgdivC6iLVHNdq4382JMzXfizymQrLRydF1BGsuKmzaFNXBrquZzR5q3gaaZkP1Es",
  "key39": "61QjWpWok3Goork9xcRQpzLvj98vwneqaU8cymzZr9KEVSYstkNu4VH1ejcZtwhGpzFYwShst3fiMz7QakNJ3DUG",
  "key40": "3QJTwfEdEwzZWni8dMxsPMGg7p886iLq3YCaCZCnN1a9AH6GefmfnkkMUYxw32KmDAwQkvzThFRR2oysA2mC25MC"
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

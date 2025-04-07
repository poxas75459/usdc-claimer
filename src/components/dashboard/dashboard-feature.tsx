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
    "4m354g66AeKjGAokpdi7n7nVtYZenZYcAE7vqgdpneZBQLtpx6orYaKMCgvBY9xW9FoTcGTX2N66ngXRA3rpvLtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHGP1dmZPErgAeGbbMj6dUqYK4b1TozmvpvJSeNXLoNKLx2pd9ouRV2pGW3wsCFn9AzT7dhJ3FkPnr5WJkVcRh",
  "key1": "57e233VUDMw98D65MXyQeDgkpkEdiQnMMmTSt1CveS3GcWVh1EFEEU9oGBEVAA6hCXgCvPSCX5SE1yFLsmJLu27Z",
  "key2": "3tWiaoqMbuTnqKHGKvMUG7eih5SHtRKxoVx7TP6TNi1eBS3WKVZ8nu3mGt2mbmWY3DKQKxPwGedYqDHgvumECzHB",
  "key3": "4FH65euRNqAh9vheLpsbvvk4fRQ8gcfy93CcFCrCqYk9Wzcw1ay8aZtaCD9ttpVeA1i7tQDVD5qa12jpgRDUXE3r",
  "key4": "4Wmwy5mMjGqsA9TabAYGHXw3q5jTnzUofWV6f7uocfADfJaZ15CEgzJdY473ZsSxvR9eSX9Mxb8u6gsNqi24W7Ke",
  "key5": "MKfuy9UwXPGRgRtqReY1o4MFivDG1tUp7qHyAX8HcjyVtT2g3uDWkeD6wLNMMDWhyfxMD9G3r1LyGtcPA7cArGU",
  "key6": "46D2z3ddVjp9yuZpbWHmZRcZvN7StGmjdDfsBWe8sbapus2YLYKrZKT9cGeyPMviP16JKJcBZoY782utqQxUarby",
  "key7": "5TCmRh8ukWTamnScawBjzRAKsu1C35mZCbyjqTtcxJYMsCuGx9LER2n7V2JBJCrZHJs24aqZRrSxHukgTCGhKN3G",
  "key8": "3BqaHR1GZTf13JJauJH6Ra1FVoSLLvCkfm445kwq2eB7Xo58jszdDpeSKvhoH6P5Bw4PZfQFxnkeerF8LeoJdnfG",
  "key9": "Cb8cPo4DAwYNY5S6tYmGbsyw7Dn8xj31EpwWEPwsLPa3sC1NqLMVtJcWy92t5MBQyZSMjmd14hXncM2y9cMpca4",
  "key10": "2Av76G8nwv4dEi7tanEXc4KHzRfrL1wGdrBcbZsQ556YPi9QaBG8Ei7T1xAGwCd6S2qntvaw1bJ1M8fXLvJM2aZX",
  "key11": "4LCe6gtqKNtNSayuYAxRYNYVSUCdvxYgGsE26Ej2y384m6MJK8hpzxAnheVA8PkTmW7fEFwahUnvVMckr4j1Six6",
  "key12": "2F5uhHpYDoDz3AMzxq4NvXV8nrBSs8yyFYyubvBYUz1XtQspjURCb5H1xd45Mm7Hos9A2aLCUkSiDCanjthsz4kB",
  "key13": "3usKzRAr3hDfxWY3KfLBBuEw7MC4ChGrR8KLLq8jJQtC1acgFg1Z6QVRTQ4LVp9RWHe5AffkV9Wx4AbGS2jb56g8",
  "key14": "64Rmzzn8dhxM2gfoCyY1PbF1UvT2Czf7xMWwpSdCAWi5GNUTj12DM8EiT5KosARnUbo1KtrpM49RGwtAT28g6A4o",
  "key15": "2SgczUQdyu9DPmsep5j9DSobfj7xrEtTT9xpiYoQEu8qgrncrUMGXhTXANckaoF7zTHVnzwKa1CX2T5XTbdtGSPr",
  "key16": "QsTaguQck6cDdRMCjEpX8igYEFppAHGUcY2LA99n1qHYhnfEKq4CeAZfxjzL1stFZ91yCc7reU92DjdGGT9u8x9",
  "key17": "33JF6CDTG4cqKJ8CXht8d5LQqMYosDwakeoh9earBJgWRNQyW98vSq1fVvu3Y1fQ1BdfAwdx9UXAyAS6Cw5HP3ao",
  "key18": "3Lk2377X9VACEh74b6HDKagizP4GA1H7fCEuFqE5db2D2D7xYzUUfNqZDUGbUhjEUMm9X1yvZeQ77PMeHSTJovG4",
  "key19": "5twEydQhfpgfAU5xEyddpFxsaYrzhkLFEjp7j95W8x4PuAyD33BnJUvNXkkr6uiTzqJ8kUy1J73x2jkLSehKVWtk",
  "key20": "3DFeWGMbD1Z3dc2vvRp4dtPct7DwsNhjZ7jideAaNxWfiCn3ivtQh6LvyWs6bjvURYd3YWyVhKwWh4Gq7JaZfvKu",
  "key21": "5sihRNDjozGg42McKHTMNt8zSWnDTJ3jdTTcQNrEYiUrGf8TRq2E5odRA2bxgicjDNUPGnzCCV6vyT39rvnbhjnm",
  "key22": "26pQfoePwvgj5C9gtrtDUe1QpvquimADcZncyKYEqVNxht2P3nrTji6XZeQxcGXUtWwUKs6ma4qPV8iwKUJUjWwc",
  "key23": "4bWkkdFr6yb2MQrZkKrgW8od1BqQhHe5oHpTe3H1PMZbYh4BVASJePixWCw2zRribMAEcmM4rYyK243ztQ5ZtCT3",
  "key24": "3gvvg3yVBiL6k2pysei5rwFhxxbdpqDKUershWQWgqHfRHd9X18B1GBRk7xN6N7EURiDKHQ2uq81KHr74jw6wyyG",
  "key25": "3drvwwnc7xz2xVJWDPjmFLLD8qcJ8KQhiugTSqAVoS1FEBEpUhJukLTmQLuVyP78ThSwgN35xfcRwb2f3SReRw2K",
  "key26": "2Sw1Zf3F9SuDNTDe4wUscW3EpnjLJ1ij7gZhZ9PfaPn25jv1tAgeXuGjZd11gjqaSJmRMFC7jwqYEZsaQS3GMwdx",
  "key27": "3qCjVf2YUvwRHrNRhnCEBRt7bWAotMpLjGg4xKoG59ti2Ti9qiPGYnJ6aHb6RKPHUQQsFFdkQFGsCLAtRax7kHDt",
  "key28": "QEt6PwrNWyp8bxBhbqyqKDWy2DJonEFeSdCcC8gWUHG1NduaNQ28wBB6f1u2FUvRU6LrcHrTXPxpnu2ZHkXzt4o",
  "key29": "3EG837sMLLx8UWSnvxXPD2Qub2hzoh64YJJEQH453Vms1yfuHHXc5JCY8wA78tjPCEHpvsEQSbY2puBpiPcSNCfN",
  "key30": "33mDAcNxAjMQngMAJwiwryFuZRWXExUWmaNieUSVR8CXi1bCQaXgBAj8VUs9CwRqSzfTwQAFipGBVf2jx7DZV6da",
  "key31": "3dsFaotHKsLoVoNGpozuxE5aXepWSGCXaiZBu6vy3XYbHX4MZP1s1tiCXzcwGU2y66o5uCkBYHeAQXYyVJah7HnX",
  "key32": "3K3VwB2DAhk2KPhnn8Mizgdi9G5KYevwbzXnVooSqo1gYpfxhdMjhpH1TKe9uFmbNkWtpgQ5imY1d2LLHsYZtR8J",
  "key33": "2bYya1zPmWsGGGdWPUuQ5vj6pLTffE664vKv1mrCpjvSt2gFGHgyq6FzrM7otVDtfEvEfvWNX4SmwN3c38ZC8ECW",
  "key34": "48Vuyo7PbAnw2TPxxiKTBdFpMfe2p4L4Fx8CjTriGK5cZpUUz2yzPxPwnCZw33LGKy4BvC7oYZPREgAroiwGzhVc",
  "key35": "LwFo1urMq6c6GcvSyboDqEjTLYnHVJf6Jw5LEBQn4wG67gLtememv86DtYhUUZ6YZWzckvbdzUWZj12SjtYpwtt"
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

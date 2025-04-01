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
    "4d2AiKZ1gr1egRZjiBQAfPhfgqg15KJ18MxZNRgoJktufxTi757vMwaZ49FE92AKVffhpQBWEqmPpVhG4QpPhg5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fKwbpxuvGviPacFvU7PhKfTrMtFFhvSEWVuhnvv32bTPTc4w4ez2QJokNtsUnDkU8Rr8VbhdFVTw7A4U8LWLXZw",
  "key1": "tnB7HMSURM9Pkwg9dgT9hUFN5NsJsvzfFyAQnWmsRHdKsELGbPG4apDi5WzkdkxXtFWeJHUeTo8Vv5y94wpNp6o",
  "key2": "5XT2VWPjF3UwMYu4B2VRUTsFn7TQHqGWDMFAuSHU4JNaKoy7b6A1XcvwWs8yGS4Ck6uvHpsKKnt6aB9pkMJEkjHD",
  "key3": "5ru7PKnAhnLK2R65oS8g5r2r1MWRZrQ2ghzCPJMiyGjEKLeQEbTb9YhpmUmYMLxzUvXFsiiVWP2zwFmAgw44RhM8",
  "key4": "5aQSV8mQDP9rjf9nMAFUf7Aodc4gaUpLNLY5KGxzrcX3Yd3qfk6i8Nb8NCdijHDGyXaWMSVT9RuGBYDfebpeQcQT",
  "key5": "5wmFK1j1sRJnGZYsqK265MFvnDeDqikaHNpbYDjyY42sdz7V3unCW9xi4wMY53mi7AUdCJFveeK7pjnMD3k9hBdZ",
  "key6": "4DB6LrDJ4dxLD3pNVjHseY8n2SWqk4nXyksc5ertDYvueh3mLy11czJiHDb8Y6u5kxhaae7i4V4Rj2X1mh9Mx6eU",
  "key7": "43vvqPKitDfvGcEgfLgJiMcL88EcxnUXcQrxWAyHyuSBn6aeSuVRyyrJykx5qEzBpQDgtXZgZK8VihnMig6HwSHC",
  "key8": "122LWXxo9AoQF6ECThGnvg8Ckbf79GDYJZbFsgDyRq9nfBkqKK24QdgteRU99HBwDkdFok58bqRHrSkXvDbFeWAL",
  "key9": "5A9JhvQpoy9TJ696ohpuwQmYZjbgqv9GZtgcNaJr6gtFT1BaFYCXH9NmWoWNfzZcf4pqHcb5CFwF8GMZQPz8ofP5",
  "key10": "3bfH5YjaUKVg42ppqL2eRVWq1G1DoMg7XcYejgvaJki2JBNBDQ8D6ppeewhqCLKPnatRWGjh5EsF2qy5t1BTvYQo",
  "key11": "fokuXBPNymjuFXkrC1Nv8LrnBJofbrwYU4mFZ1zeVFNytwnUy37JYZ42KZcvktdDXLFHbogxLhF95S3hwrm7hLZ",
  "key12": "4xTfXtwY3gfEaWPRCvuVmP3Kgppovu6QU537RorbZaXd8aCWuDsP5yHK2EjDpjvuCcAQKLah8LsREfbB79XCMjav",
  "key13": "4ZV4TspJLsYw2joqmVErnLFRW8752hhrrXJrryLeVxKrNsWQLpaLNzSKWGs6jVU4Vr2eUrGSrcXSegnpsS1RKpV7",
  "key14": "5YDQEx2RGqbHdzPjK8D2XxJWvvN3bjBVqs7DxBuPthzmgNXnniiZRZSBmNrfLTDQN92D8x5MhP4fPpu3YU7mPsnV",
  "key15": "47JmCdHyDADtZiEHhZRvXyFBrmkYyuJDNCcerz9EHw4QDuXdYbPAogsVxV4qJeUjXJeJ3s8CtZBNpixmyvcc9m13",
  "key16": "3ZXBC2oUQGrrDeBrPx9KMFN1bqdkNAcZozTCu91Qjtk7RRA8wjz6vStAz916AtVXVSqPUmUewMX6FNHJt6jxQeSb",
  "key17": "2S9aAbp42ScEnQEaZhG4MBpm4738vWsnmwTE5gsRWgAU34UTJZoxjxbsddE6dQUwRTfsnrHwQFrPEoCfSU4Gnx8o",
  "key18": "5uM1WoJ1gzR68BYzetXnW8E8HXkJDvZxWWqgjqs5o1JkBXTC8nga1HNaWheXCeKYh6ony9GAi4zf5Dhs1HMScgSK",
  "key19": "5z4qE5GF2Chs5mzzuoB4w8WjKvTzETq3e6Gug6tjFdFVNUHi9XeFoF7N3audmUPbBWUW3jEjZpknzNAJPdVc8cqT",
  "key20": "2DZwext1DAwt7QWaMpMPKWyVZKhpXU8mY9dPp7L9Q4QssJ9wC1Axmv8KVvhfJDo7eQAsjrPXGhhXTAqk2fWHfB4V",
  "key21": "12zFgwUy1gTDJBBWGhXf8716evnY4LFHA8J5bhKpViYywJ1tqMW5sTuHdZ2cwQaMgoiKXKdyhhQmSZjw9dgyMVp",
  "key22": "2wcW6pjzg7AgVeLRwQdr7oMnCXUPCufSS5hcHi9bk7QLkZ2s7h2abW8Jfk2PAXeDMS4hddhiFkw5V9Kzv6DR7LKN",
  "key23": "55MEzYeZXMZ1itAAv7xzubEUACNKiU37avtHrP6xWNybtqS11L9yrJDbcBFVrATVsUyq81tJpXuEtoEnj9G2ymjH",
  "key24": "4hjuMckdqG1UfiQy3sseJKhsnEujh5Kh8QorwfbTEydYCm8SU3QJRYrYEicCrnP51MzU9qC9Ji8v4vSQD8KEekor",
  "key25": "32V7yF17sYytdQqjyKugNE9B6hKRNwEXzAHLgUbRXLNSyfGLJTohHRkCRD3vXQqhMGoKRN2HnNcgDhXoSkvAYTms",
  "key26": "4iqTwuB3Z57FkfMT6Vm614JsNdbeK83c1x9rKtWXkbW7yWENLwW6U2iE4KePVWyn5z79epTkZe6V4R1rrDVgnVXT",
  "key27": "4HWcjJYnxZqCjZW3Tunw8vgsErAgFxWF1T751UExVFooAbSzUDHJZcVoNak7TLX1SexQJaEPL8pRqBFFaJJo1a99",
  "key28": "q442CUXWsS79Tz8kH91sb3RU6Mg8haKUW16ehDpP9tkPKLuAvDRY16THTanXtVp9G3mtsumGwjUdu3afyuxyfpR",
  "key29": "2dWtHXjqhhpkxgfYRU5VsvHEgp52U4itCQm2t8XGRSyJRDerkFuQwMhNPErM25a9eAWayWTxFVrAJygGrhPEHUbr",
  "key30": "q386RugnvKSCNpUdLXAijug5qig2mSgprmGUuB8JxX2qxPNWY6RHxWRJt4FCCjVTB2rju9KBsKMAQjG9A9CtaHa",
  "key31": "29maPmo8N3rh5JCthHHbArcTw26BzttG5yraVXh46o9pA5qFcGAwdGw48k2RfjcWH2RDjHXS4Qyi7CHeTy4PvZMN",
  "key32": "2UyMVVHtsgRTEhGgbTUDYkXCvURVeUXcBzLNGaQmqs97abzCvyBNK6RmWvhwtx73F1ou8V5osnygcRwTwiNCKjMb",
  "key33": "3Xze3etaSfUg2efjREX9fJ8A6vwRqP75gbxZFbGr33pumvJDAsrNY17G7zNKyjkrBefoDbw275mf6eqjFcezRf4A",
  "key34": "2ju77SxeMyZaeRQwuES6HqHtQZpmR5EyNSso4o9zkVR4XeALN2XGHdCcx4Y8QPhVmbFJNxrm3LzCk8DQE43gqbFY",
  "key35": "2M7kzyzMMYtKye37Z5f4xt6oCCkikre8iXyWj5VV1jHV9tJ7PpjtFQxTsa881PhUJzX7EMP7DfLq7EqAzwTZngkD"
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

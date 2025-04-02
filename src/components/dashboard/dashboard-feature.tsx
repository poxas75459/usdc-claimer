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
    "3f25fvN9GyCyDncURhAVRh9qtfbmUz2VGEfBcXcdeo4aaGZxRv22sv3zz7yTXB68bP2NvZtjUgwy5TvRckr5d1dB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EsqihSuFfK7tXDcMW8wtMYmXDPvw5mpLcWYCp9KPgy1iWqkYwSD1CVuwk3pxPwEAnejtkz6wuJMJRXsRs6ecSdk",
  "key1": "adjhz5PoGuzoU6d4AWTWzPrbmrono8L6vMt1EkQCbDpdKLyyzaHkCNUbP56AZUUzU4DySD5XkXVnAfMZh5U8xYD",
  "key2": "3t8n18n6rh48HbAqwCW291se9mkGLgs5tcWri1D39NYh9mk2JPVWiPnwHVGHPYe5QLH4zzPxUqxsQYL3CkwhA2J5",
  "key3": "5YDKtwivYhGQJ15qesEjzKJBABkQpNxfgim7mmFUTeQvJiLzp6fq9R29BsfkBvRGJqEEqJcVoxMKkYSL3JqZE6uV",
  "key4": "2t112kuqYhARhbKjR38kfZhae2ficGKFU7mGusoRRJkrfXYJBrke3XUtTK8otykwHcxNJ6WNcwrutKpgDQVuhWKE",
  "key5": "3RKynwu9ezNBXQtuhP1Zzkx3yRdVijHwvgUJGxmNBckuaNj24As8YvWtCfmzbJwQLGBBsQbroLuQULiLRTyoHRjT",
  "key6": "2UvcLWU3TjBUTuaqvvZLfj52Z8wToF3oBo3hiGtvpKXzAaAj4dfFkLUf32APdYP8vWEKuuzcfgJPmjXLKCDukTkM",
  "key7": "5tvF7uyqSkwqtqfZRCQfaZKWx9YQbmwbuuSd4f7VFjAE1zpFRz1gbfb6GKNAbGFCWA7XNPFXz2zcRsYQbN6dZhzC",
  "key8": "4waPH2sWzvo82bwx2DKD8X4nri2adJ2WgzJnhm7Ux1WLdv4444aTHM8SbvuuPS4V2WJe9mVAzTMsa7LYrBEczDVH",
  "key9": "21p6xaU8xFpQbgM6Z8MhQmG2yVxh1d43mZWuo6ufXJuDrRMbmNq3x35gSTmu6HfZmB2gbCTh6zV6aoJc17nhmReA",
  "key10": "55mWMTGf4Xf7UmQ4AF4PcjLsqMkuZbAyB6dPn5NyXqbdc9F4NGmHk8cY24y9m2nfPQUn8rrZxgSiNXusc5En5AAQ",
  "key11": "5MbJGohNy2J2FaLFfzAGE5ysaZX3inV9BckG98SqDVE673hvDZmRHLBnGRSLZLGEsytcggqucao7nnYRz2mGGtj",
  "key12": "E2gwXjJGMyxCAifd6dMa6i4vVKWeX8ntCSbWh4DxL9Hz1jMyqkrbU9Y1JfcUmVnxFbJNqfFDNbqEn7pm91bJTYx",
  "key13": "46Mq8YGuhCxyXw4Xnsq2QWtThP7tgpKbjQgUmWwePVrXCX99ZD9ZLYbQJwAdnjWiDfSAYnARYknvcGuJRnv8mL8d",
  "key14": "4UiUyoxF5K36WTHE9fLZ6VJdS5hBC61xNX4uXrkCea9gPQtiV2vLF7Aa4uGwniqSZGyrP5rseUdSF4mppQoLZAP4",
  "key15": "42vXVJFur4cmZEkd38iPWJnfCFTg7CetUtVawcJAyhdguaB4W7xM1xpBjyEEtVXZn1gKcEtAtCqA3RRpC68jeoQX",
  "key16": "22s31LxSGMnfWyXY6jLBGtBMjmGYhmGundYmDTUtmAvf1xq61UrrJpJrmr9LZxGa5jQyaSq6TQ63k5bUh1raZi3i",
  "key17": "2eemrmzkKa2VPZ2oqNeZRkk3D8q1dNPmZ2g1AxUVcTTgXwriPC6ooisPaCrCSat2GAEN8VVSkEaKcFkzQ4zi7Rgh",
  "key18": "H3gmM157MrXptuoGFUxXhU8Eofa1Lki35YT9ixn5MKHvWJUnGMFPZyPXAYkzQfBMCJUSK77esCiENYrSiTDv8An",
  "key19": "5yNfkrxpxgN7qdDw5mXckZJWQZ85YTcJd96KxB6wjYgPSdoJdxW36mbRSY59h5SzCjtZEA6N1C8kx7PpSGp9zDU1",
  "key20": "4n6FPVT5AgQsj4vzUMu1KbfgbDft5odt5Ep4makazZYRc8vKbKjkHCN7AqZPP6TwmhvFRcr7KLExwwr4XEhG5UzW",
  "key21": "3d8C9ULaLGZQyurKCZYfGmSdYkthex8Q68ezPMT2EPBudccLKABEU4cBaGQv49wMTFEHrmKF3ocLhjHxaBPvbQhc",
  "key22": "sG4hALNQD7H5UW1trUkaMJazN1KHnc3jwtR8BtBur3MdihkYeaHns1RpEZiJj86HTytAZUuBaGL7Q3deirj1LH5",
  "key23": "45gDrvrhCuF3RuW7oy9HiD6vv4ZNUumL3yJ92hJsKcAs11joRW4uLAnz9tK662PX6KhL9nGK2ywP227PMWRUyy6",
  "key24": "3uE8ZdCdsMbv4hpQR6CmYJyYsvkks8VQrDT5Fyh9R6Mfq48bTJfjtL5k37kMtwrCmwBoAoJyvZ35h1DLidvi5sQM",
  "key25": "Ecn4tTiUb5iqtmdKZuQfzYPR4T39azx5ioqu55UG7f2v9nR5F57VqdPMcSWepEaMsj18Qq9ryTW1W9UDmhbVJkp",
  "key26": "rpDRLHN9aYJ7BxM1wWYUrBompSkCESpARtdW5FVi1dpcLtU5yPx2BNUsw27nTzmHHJ89KJKLefyTWR8rPqTXmgD",
  "key27": "jdko9N5hnBqwfUjEqs7shb19oqqV6L7dG7mQ5X6yFKLsLAWitjC8uuvfDy2Phcp1YYyo4DjY8pm2HTYRzgbZHVj",
  "key28": "4LZeXvM6mW4jV4RsxuTDecsofZ8tA1cBwYkqwpJBFyWZik4hzrUFBYbP763D9DNxLhmzQ5nNzUsCF3mD7j3fB2Rb",
  "key29": "4mzCeLNXdAFFYjjXwSz8w8hR7fdbnrTnun5Zr4j7GiqHmjBUP91fiBnQCgFbqXX8G1EikZBwbqGW43zTX3xitvPs",
  "key30": "62h6FFKtKofeDw7Bo6MPFWuiMm6pUhaE7FtdgDBEA5kkum5kEVmW1ZvcLEyVZ9RE3hGwDibfb3dzaVoRBjpatz1v",
  "key31": "4W8WQHQw8WgxvHEuhYJmWUmiSZqPbXa9QnvA39gM1kVeZ7nuZi7zHxYKRLRyJhrajxgCyWVDu5DCTaTnjtyafqEW",
  "key32": "5xUKebFmobpAhNxzGuGtn96FWPUx64svrLdTcmXB9FPEoSyqFHyeWAvMqkuho7sWsjypZXWynotbXVewGuUxDdBK",
  "key33": "DNNgoUub5GimEsrEz6TvYg7aj52dH96SyrBeQsgCdCqB64LWAzSBFf3nRxT85ssToZs6QrkmfYpKB7gkGoL3AMu",
  "key34": "2rr2pmB1XuVu9Po447L6d2GNYxW51pNQBEosQ6mGvypV4pANxrfsYnr3Jmr4in49vbuPKnhgnZFGXg5XZZHQZgRu",
  "key35": "4ZtbQTjPPycPY552L7Nu8wESBTXC6jSpJgRrP4BW7bPCquFdQjRJoEAnqhHac5Rs3uwFobJ2psrHG1pVGc3y8AUq",
  "key36": "5hS3LjksoZ8pC5U5fymRgd9wqjUQbCXbdYLhqPkZkkMbT81TNExqhkz4MwfAovRU4WnvB4qbU5L6VzLzFAJNdhz7",
  "key37": "2Z7Vj8p9NAejxfA57dGxYQnnZebhYgUmXLkcdTGtq3nYJVcEwc9UhxmcX9L59W18HgWA1YrFnKMi62UP6j72Ljmh",
  "key38": "43c1yJRk6CAzKxy9MH5XMWGFpxPT6aJPYMQMJaGTfE8Ccuj5Y4sG7EQwRjk3gXXdKRjhLVZAyr5RVoayMVji2gCi",
  "key39": "5m7wGCYfnoNw9wzFEDCG5jVpuT3Q5gKiNXzqUUn8ZbhVh6ZZu4Mr3VT9oj6kyuiLW1upMGg4rwdfVg7ZpcpPu7hf"
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

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
    "3RatWnZjZtxmorMbjpkWguZipNJgxNjpnRagUGqH5MHGwS8njjfVucZgM2wbqLiebjPKNhQdz5U2z4BsByrnWVtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ZvjCYjwF7Xgun5s1VZkZw5wdhs253vb3AY6Br6Qgf2UPxzA3ryuoTFL2YvFu8TKa4aWuSgoEqTouHZAewdYt6P",
  "key1": "58Tk6m1imATxS6wc8m3yK6LRi7vpzEdaED6mhuCHiUpQoHP4ngT1oCQk8tqTkMzSwQ7GYkWn2WB15XH1wi5egj1B",
  "key2": "377jnUZuSe7hibffKKvM1gPLWHCpUe9Fxxjkh3ymAD5XCtKk21YviGo99GmQQW5zwnYEGKr9sNUbAvfLfRmQKsC6",
  "key3": "4fSj5DL7VyRuW4FSY46uVgyzNgSFms57XNXXsmZMVopEC6s3duuWeA7sJR1FfbpbGSL7NtDD5DT3nyJWsYcM2SB6",
  "key4": "2DjKg1TUGLsTDPmbu9hSXV3V8CtWEEXXjoHnwxQtDZABavFCw21sZyHMf96rdsgrWknBg8d1uX5DJikxJTYzieah",
  "key5": "44uLr1kdEAciatrMAvMEf2DU4LDGYwbCr8gRKg962KsnUbmziV6cxB5Tof8VKm661g9BTi3Zw9vrjpy9YhxkwCVA",
  "key6": "38uVKpgRQuRBLx18ApJkHgCg2hUYfADXjZDfYnvyxhmxUwBWEE9nWLtDKDvZze7JamV1osUaMfw99Hb3hKW6b7wM",
  "key7": "5iLhSb3GcEJH1NFTdS42gkM4GzWtxNrmLjzkGP8djBFujKmMeDUK5FsxKYxRDbjvfKutHBFzmjRrdDDrJw7Lnv6p",
  "key8": "5urzes2JsM5PTjL7anfcgED3y56UCr6ZRgtWwZ1ESCzXUQW5HB3MA9T6nLBzov3paXBDvtcvchhyxZy8WUDZXBdQ",
  "key9": "624Ax3hZyy4jvqUrzkPPpFuz91e6LxiQ4ndKgZFdfKU2ae5fdn8k3GscZEKcJuXNpixQA7ejxST2Ab5767EVLxKJ",
  "key10": "BGgi5eT7iiYiQ67MyVFWPiYDby9yKhmqRG4k5FBgKwNAvEC4ZZhxSBYvZTDD1NPwkdsnYwtPRJcsxmv8jJZi8dC",
  "key11": "3CsqiBYCNE1a1mNjtd2qjDXcbfLXoUrKiGt5czhehvKp3QbZVaEdcCwHWSTWhgQkL1phkVwTbn83WddUnyacx3f7",
  "key12": "2nM74g7d1nj5WosTAZdisPThzwUtLSsSFLTawH2cpnmHCgFhCLC7xXf1W2pdoXgz2VN9P9iWc9Y7Us1QhJC3NrhZ",
  "key13": "49rgzRyWmS4vznmcXkwVi9V3xkuSrNH94T3k1JWiDhmM6VpFeiTFKf4B5gcBV1MAk6rTEex2jpzgxCZ6oDWhfJUy",
  "key14": "67DkSQfLyS3H8cT3X9S92CNVotg8U9P4sUfUAGQXoEkHw9cDgMHwoGwbMAoMEKUSfqXBq44Zvt8rBb7UGNkyiFJy",
  "key15": "4eTQaW7k9VxnWKRiiFBt4jV7dFAxqQ4zZ5mevpNxJVqReeEw2GyLkCGrnPLvqfGk6WG3tWEVzcLaraXsUEpwRVkD",
  "key16": "5KSdLXhovLBRtKqPCkPuscRRjGrvU6RN2hKBvBapVC1YCAzT9MEhXaqj4jfggxpKCNvey9oJfMGycGrTxMuQWeWc",
  "key17": "3t58cPBebjYYkddBMNJVyFwGbtexonVJvKzCqTCjTvYiBN8S4SMVhEkwU1M9eMxR9xXwayqx8QXB9w4piuKu6aTZ",
  "key18": "4toev1EyWEJyuApuN3epFbDK2RoiXwjXBRfUYBHRSWMuLufrU7fe3S9TjYJ1WW1L61HcK99kv6x3f1DPWDSwnPCb",
  "key19": "4J5HB5SGw6XftXmSdJNY34gQi2jYnWJHWeP77iC7tpRjjT3TMbWRvWeZazAfQakJbyWFHG4JxSfmWi4uX6pV2U5w",
  "key20": "2fCj5t4pY3MMiuCenS1KT63Hgd9JN9KQjA1d3t6R9vRWbATB8FKRZcvqQGjrhHBCCRRnCeHGLRXFjsQGHJxdvduK",
  "key21": "shz2CkWSL3Un5cdHMPgzDFWABuDQhXv6NA47pnv2CdmGJQAvThVcEyBNw6kM9kCj3NQEBRzPdBu65ppj83LCr6q",
  "key22": "4jZ7z8AP4g3hK3KZz6iartbVAAJ8EaShk5LKnAA7goieCD6brN6dBCZ8wbsByVDFrbTwgyc7Xxsy1GzTawWPVbpa",
  "key23": "2NT6cQAZBFMzVZhuXm4dB6sS6kVLgHvrtwKrKD75yafisxtKVSubTQEBzJJRCMsYQAn3PGASKpbjqBYqCR8dptBa",
  "key24": "5x1aUfRiSmcKDXDVLW58vxRUPZYGiXoKvLhU3vaWZiU8pFw9vJJy7GihXTiHtGCvmtdwcGqEd7zp9MQ9jDCXGYQn",
  "key25": "3BkCkeioLLzPQ7n5BQiXpp8xxEfJsRasBSEwZrZSmyjU4vjQ3MuWEr3b3cEG3eVRxPVRjp2BiPQPGXPx5p3KksQu",
  "key26": "5PgcwH8rJSKXg5PA34vkYrvwY5TwTsZWaRHeEw5pXWeb9NbKL7XedDB3LBpKiZneao1dJXfPzMBo5h2eNaNfFmf7",
  "key27": "5MsWBizWTF5mwDEHDxhRqTi6VD8MUksxecAJrnac2oqDio2tBJxtMhYmQ7GheAgm4ykGkbG4dA8SmtE8KrmbgwiR",
  "key28": "ncmGRfjB7diK3qGRkv4LupCqrEWrWjSN9Gx5z2mZf9f9w54XVjvVfBCy1rctTR9YPpHwN24o2q5rA4xN6cZsU9Y",
  "key29": "5Gm2ADidwxbAUazjix4MLKCBZVpWkpFqnZ3PnCbbKxjUsL2Hmzo8MJUgFYArWsX6Mwwx4gkE3TvgdbJi98do2fUo",
  "key30": "3Ko2GdT8SKvr6oLHs3f14EG6PAXKpu9iHnwhE7NqJ8Ay6pvMKPX9sToMhoYxiPUBqf8u9MuvVXQqgq5oDqj2cJRQ",
  "key31": "24FG8PDogtpwm9xTWZBXc6wtF3F2xCRRdGYvpNzhzE3548sdfXfkdgqEdeNshuX7Vp3twMYf7Bt5TQ4YZdSfVZ11",
  "key32": "2S5Da2B3fNq5hrK5cv17eZcVzvM5AJrL21oB1jtgX4X3xTZqQVzRE2gMoiSR8C9mxPCFcHk2h2ZHRdaeUj1ckFki",
  "key33": "TtFbUXzgMUBJ1Vzh5KVp3WiL6jjNeWuYVkw8e7w5xemj115yboyfKNczMd7vsSN3MhKdK45HAsYQQtzSPyeZkWC",
  "key34": "4Nos5Fyo7gQphXGoT5Q9QgxeFHhvpC7Hr9hcJ193JVbVCLpK4SUpxkRDYeMxakYn4YtGXUMFxL9jmCPAL2QjUXJz"
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

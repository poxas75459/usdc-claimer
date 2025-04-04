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
    "JxVVqLpjC8o7rY8TF2LwLz99k27XZvogNu7n4AVwRw8ZWczZ1MHQHoFMj6Aa5FmZaoX2Uga4xe1fF11SKMqRgeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33atkWLtWcVHxpigGiEWyGmCfmomoARFkXfo5C8uT4RZNtAuVj4gWVvRUHWxfYiBfjj4ARCLkcRALK5hJTXaydo1",
  "key1": "4U4451S9SJrE9jiKfSwamKmzJkA9wUWyhLQDnDP89mCNS3m48y18mCwffp1tSLTEU8wXkMVHPmZGjVebHNYeoysP",
  "key2": "4hz6oymq4Bk13eNzmSjLLhmd3UMxmkHU9xGCidpxpNdfey9QWrhUSA1Yn2R51rihPbAUpyEmEHWBEkAAde9epeVj",
  "key3": "3TuuqB5Uo8TS7BsEGuFjqaD9mSm5wnw4WV8LU6dVoEMDJv3nqX5wcJgu3Eyxf5f886sGifuRTNQAwc8Njni3RNyf",
  "key4": "49xZ1D9AQ4KQugGF63qLaNftoHWFkRhiyaFfgAhujNSJyVx6nFF3EhQTV83XJChHRwgbA3K32avd7Lyf1Wf6Mq3f",
  "key5": "4L8j9mA5Ggfjgc5nuyWivLWrez2zNV38Y3GEAbzEkAKuaS1Yc6teidneYXXjRLorLMcGLH87Paeer7wvwjtrc1dD",
  "key6": "43ZqoNMAngAhG6ertVm1xvBMZSdCeeJL5vbuBV3464LFQi49hps56xBZk1GpLBb4gDD2mVoSyFo3xbXkzw4XLc6C",
  "key7": "4cC5rn8jWaTtdWDyyhGUvrSUT1k2krZPmg8xHzWeQYhwyV12x1WKYs7xjjRMME6oLxwMYr7AiffR6s95kdnLJ2dW",
  "key8": "5o9Eho9phzeigDpAYXSooK5UjfFCfr4dVSmS35CqKcFJBYqiXntDLdXMExPfiTLaKWzHoZ27ggzhcv5ky2QrHN45",
  "key9": "3Qtu2UxaTNMNnHFiK8kVCjXoEqioSdAfLLNrzFKzznAxtZ33yqT7pRvHz8QgiNNLHu4DTWy3DSMGx1PgBaGuCsFn",
  "key10": "28CEEL736EtaTfKaWnUdGwBQAvzXRau2V1jYxLqVHKpYBDhjn6eaiMpDnjNGQ5FrQmMyf72kyUChcxKnwR9PVQY2",
  "key11": "54HkvZMMojLFTK7LUA66hN2YT5MSozwHK2TL751Vi2qkhdk4Yqioj72CywMEiL4VTfKTHxrpsM8UQitxpUfvYkBP",
  "key12": "5UsKsPrfgafyo6AgYmTFvjcWvEDTduYk2do5ZxJhabSsvDexXWXoRnC7PkBSGo5Wj9CkuMYx2Ka3QtsposKgKknY",
  "key13": "5bnELo5g7hV4tmyGhPz5pUFNqenyg7ztvqZq9df1QtTrBieYsKcnCZBQkseRrWvLxTdq24TekQd84uzFp3AmP43F",
  "key14": "5mDRMQnDrCg7Gdr6hbJ3JvpS3ZnjQ5QAYSR5vnSF3zkRVEwTKD2hCiwjxGWJmjfCzGVQCFSoXRULWFF8p3ja7Xyd",
  "key15": "2xyodFfHGNSHehNH1YwBthzNu6pUr4ahRqttbunZdb7WojBnLUpfHryJcFvNpCQuarBoLc7YPo7MmcZz4EXdyuQq",
  "key16": "379CiojkD96mqWWPBnBo9ruNixqQQU21JM9qCtd4tXgT7mPGioqxhSmFANGvNfYaqRNz74MqUusADRvnWDJHRS2n",
  "key17": "5tYehruBLtxMJzBXgpDeki7pYaabGjZKgS7JD3a5iVnjcxRBDfJSLwU4rKzTF6rvzwzJP2qBVkUtSB5ZKsvJShhj",
  "key18": "5mCLRuLa3AcBAEJpsKTh5MQpvcbZj1QoFe71nfCeokkDej2Wt4BAbqwtzYu3vnWUMap7VQeURzFuGeFEc5uP29Dt",
  "key19": "34a1g3CNo9yTyMN7TWDeNvsRcJ8Q3iBb2XcNCMzWNdG1xCxuvQySKeuUifRZAGHV3dGV1rJhDAjMf4PnJntRtiAh",
  "key20": "5PioWH8j38zyygL7JLwheMVXCYVuhEaUV5HQUaSib6NyQ1qc72zCypZLVA5XAX3sapKiGJ8v2xzrFU39LgJYhRx6",
  "key21": "4LuZSU2Hs9XoXPsyFQWeTrzuF8KvPgWfqDSvHeUVrHRrHusduVCw5uoUFVUR8rMPW4roE4deSmGqZhK3JU1RuXYy",
  "key22": "LoT9L3ZGxpq3Akij6wf3UuQtKUZzxGvZas4EFqBttQ3YF6VxARcKLUxd2yNq5s4LpdcT46bGkK9uCwGNAbGgcdi",
  "key23": "2Vmct3RuWwg84ruDcLS2bcL9Pj5QGHhScnHMyuibCAGQ3Q8CVjy8x281SEWorP7Nft9PaphbtEZqZ4LX3et43doT",
  "key24": "2spZogwJsVZDpdfqN7n718MsjikJo8MtR8VWCdrusjsR7q6BcjtEob7qWEXsmGd3KivV3fdDDLX5Tpq3QLGyQMgf",
  "key25": "5c5p7ZY6HUrMqU5tZ4exjKpdsvMnG65GrwhkyDG4H24qwUd41kPQ4GUorPCen91vJGMdom21tH1BKyyZpYhTi7b5",
  "key26": "4HMX3tC7MUYojLtnC9VVLF8jC2uEooewjmnGZVfwnmPTP5AbVZ5qri7azSYsdCLuS2fj71jDkYvPeLSuDpaqJQEJ",
  "key27": "62MjUKe6c9h7yFHA4YEyNcNijKbfHqLJ7QyjmHCADPi7poGEvsnVp6b9dfQbCGrHqNa1nAETcaQFdCHwjKfpVbab",
  "key28": "X1JvWtwJUpYmMMTo4GRNunQmeM5CRiHGBtYCBz4eh8eioFsSjTtW7wECoM7HvKnoMiTvq2Fe6akYzucX19FzYUN",
  "key29": "3v2JnJn9PeNCQwCozrewE3oS3R1QXzu8eNhC8zwxLtn5CJ2LMughkhcSjYKWGRMFuY2pGNfHuqxQBNHKvvkPUx3X",
  "key30": "c7MXCsGU9gQpTdTrQdJisKki49H7jPHxbP7Xw9ReEDXP4ihJbgh2HH8xKwxPDaDvqR7kdvRoFNWTvazCyJY28eF",
  "key31": "QxhJnHDrudm6F7KHqzTBVM2tQyYavFysrbbBBzno6SYbTZvFaJMFnPUtQcQA2hqVwvoqa7EyauzN4DQPE8pEUXK",
  "key32": "2DR2L6st2YBuyQwxjHppzZ4q1u9FnhDyFHzUjrEBicPzZ32JT8cHZbgVUXgTh7GHCLLckXrXzN8wJccmUDPXiCYu",
  "key33": "4ipsZR5PVYFAqcsSv3fnwbrTrWpRgfEJvRxTimLZEfPpvQFi9q43Yf5FKi9xEczDWNpTDKAL1nbMhPe6HBSDjr6j",
  "key34": "4XMgxdSWjdedYKUUXTj2WfrXSpWvcHVWbZptnepQ67cEtNqZJJGDuVmrZNm5TccJQ1Xn3gBk8iE7hJYGMPWN7SBr",
  "key35": "5vVXSkE4RKAJNnuAFrt5gDdSYZpkQic9E3mprZcV4UPvPmJYfgVM96V3tqBjYZkjfVQ8j8x4B8HF9eyaoZja8uPY",
  "key36": "m5yNL3PVrXfJgHiHDEJScdQKENmJ4cHd7nZG43ocjdaBW4FBvJWQFRg2DWTdsb2Tk4FhF4K6EEKgXWRSTs5KYpY",
  "key37": "3DbkWxtxtSfST8aPmzg4L2w1iaHrdS43fJ6UU7WbGn4odU7TU4ErN1SDig6WvDAAZas2RnPGzesf3YXpSTi9WXDa",
  "key38": "31ZkaeytyKDAW1Kay2rFP2kRR8qYmEY15iA1hBf94SFaPHa3KcAW9UZiWm5jz7FfrJ58fcyBxz3fT2ugwYQjP5Xa",
  "key39": "5MHwsF7uwXTrjAKN7aX71Umbf232uNGcq6DHTtD4CsTh6je7hXxku15g6HCdk5e3JiJsu9i1e7Yr5VBuU5TfuxoX",
  "key40": "66YJfFcJ2nezuCiXMprxhY2C4LVxJDMqD37hc7NbtTde9dWQyjb9Xr1Hmz8Cjb2jF4qw4foLH97QjA2cQG1kwBc9",
  "key41": "23ohyAvVFSsv1Xo3gzoNZx5bzEpFpxZtzgyi8hp8fG3B3iF25J63X3fGEMMDo1fn19GhACG9XWYVFMyX5Y3vQ6BA"
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

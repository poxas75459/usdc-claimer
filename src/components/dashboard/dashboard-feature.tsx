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
    "GxpFxZgzg3d7zxDD9iyVx2i8YaQKzFQ5pKf8D4oKTUnEQcqCyzRvrhdT9TUmn6Y63TbrG8En4tihmxLmrECcWvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S5ZxvCW1k3mSmBtdtqmoVa3uN7Ea4L3Hy99m1a5KBJ3RbHwoZY4yWbQA2eguCriiCkL5Y77RZUBnQZk9CJBFhEE",
  "key1": "3gLG3FjvXRCi5QMQDTFsvFYgQeQqnsUxzx6bBQiyjopRhdsHUX4aQG2jGV6FuLbHNnfGF6zrqv3gQrf72HvWHCmj",
  "key2": "5P8C6FcBFxE6hnR6iLtFngrJUev7RFLMqafk8AeZ1XujB414F7M4qoY3q8Ss9vYJCeEicwHECMpEJuzaFFsboy8x",
  "key3": "5yN3VswNLP9pk7YD8vk4aVBD4FTJoedTK1LruyhULTCCNYfaL8W5fQ967gZGqW87VKpCHQBcJk4TFsq5zyD1kuno",
  "key4": "2fEPSwVKcLAMbh46nFw1UtcrL5vLkdvQ8UFyNAbKhKoCvk81JB3vXakJQA548tUMhiJcWqus4qV8EZwssGtFYoN",
  "key5": "4HxsvK4JWgbRidnKCnovkaV8crx9ZgWPGuCA13Ja4ZYUnNsF8osm6RyPb4jJKrGbDGPH6zuKLh3dcHVg8yM6ZDBp",
  "key6": "4R5epmh7WkGeDLoi4gdhWNCHtTZP1xLTZLAjhbdPxTFnGkRE6FSb1ubUrdVkXczg7vEsGnBGoW6yfmhhJTF3hPio",
  "key7": "8Aug43C8DUJgfVyYJd7xB8wz1gayviCAa1ECqipgtD2A5mSrAHTqrowGdWFC65C26Y6oGGZ8aWUZcTKgceidKfz",
  "key8": "3NyYkQxbcJxikgwiFy8VHPmcjgdGG3vpwCktjPqQwPS18wXPpHVo3Ja9jpX7AdbzfQ1ZNqjncvXgxGiWFPJ7aLDm",
  "key9": "3h6wPsqkRPrgrUmhUGP6ySCYLwDWAJACEdR6LKwyWMnvpnUuDuVY5L3ScwCmroQMBMQ8AWcqMZhLRwWLhTLdDf6W",
  "key10": "4QgKN7E7jX7tac1XKeQbkbhnt6Xm2pZGsuGg2ob1dCCktD1xQR66EhsEn3JrGV1gTQUsdAB2mCydENGN2VUrGELC",
  "key11": "5Ygdv2motVq88NGPdTgdVJz3YkHsMwKZaF6KwHUH3wK4QgbAaB921gDqwWU2bkEVuxXsPifLDkgco9cUCPHfzYKa",
  "key12": "5JxQSkpCpEV4APMhREXaETBpaar8UJYDYsjif4oFsm9KaWTcEwgbDENcub3QasykHNSoyx6oBdAEQhcdW226SEwE",
  "key13": "4mexwsKc1u4H8686qtSq7dNvnZjydYQQcBgW8phj3kFfuRiv1JpT8Ca1EXZJyUPzNV4e8o9zrQ6T9iF7GaKB1TZ8",
  "key14": "3hXbmp4cRuGFAXXjcWiXqCSVPsyqxZ5XiEAFkdk8xsB6PNG6JGxjDdYvdRWqAMaM1tMQZBbAXZAtDAPE6o7yMqUK",
  "key15": "2AuGz7RkdEDD5pSAU7F6ERG2d4KtB2rzJCE8QJdp8q231DdU8DwBceU5TcGX1bNLCxCZ6RP8C2TQMUhvGx5dAWiQ",
  "key16": "3U2Ecs77nwpKZ9tmCwQXdLb8kVeeHHBbupYYQEkxjCpZxiwLt8X8XWYSgugp4xCVgcyBTT7tfGLQ6PMLzhS8BNGE",
  "key17": "2FdVf61sWbyFe3c9dTzXKkRpJg3rBVgb5guT5cgFqeifNc7jCXx2N7YqDJNK5mY17Px2nh4xVfGgZp6QFrjmRu6",
  "key18": "3nH6wgWYswto4kWeUT5wNJCnWFjVopZ4U1u3LJag2kAgGqsj47uoLXRoVzoMjrNzfUMxU46tbBmerywmRw2KsKzT",
  "key19": "26hh1gxY7iTFBq8Jtu8iUXvYCRUfNHuKqKyXuTXEiKL1Hky1TqgC9Y4PygdJM5YwkUqaNVqMfFy8WQ4grqeJFknT",
  "key20": "5h5cRXUMVrirQtuE2Zg2qaPEashq87zqQGiXX6zVBE52rn6BF3GLeWeA3rLJVYEadjLm1KqKZ5fuH9gUPhDGkLcp",
  "key21": "57NGjoRL4mHW9KqbCmJFRYSdpav9AFzi89ADgcrGQKXHP6fq1J1tT3C5z49tdSkYCrcxPeaabo9imxtMirJra3iY",
  "key22": "4fezjMNd5mD3vZZdHg6VvfzNL3gCY1zxLJv6eB7gadpRm9P5Rkr7rxBS4ehEjrVUdqthqmA7NhiRoejhXeZPbAsM",
  "key23": "52o5CCGG3Vvftq2mMy8jWkJUVzEyTChoiDmEtni7MhrkRisMXkxjfUqvYBSr9N79R5JJrRyxqDSWaRt4WCwqSyHu",
  "key24": "523X3NQEKaPYnSBnKue5hkWzsBYVXwkRY26kNpmcAF6PzB1erWvGaMrCPCECB8kdRUqqzCY26yTnudwom6Xcw7z5",
  "key25": "5THzYqjMpoMat9nYVhujmcNRjMq383gyuREY8qaww7auGXLZpZnJvFyShF6udYk2c3GDrdppB7GmrgQgPkWewgys",
  "key26": "4wVb719Tr2f9if8Q6E1At18FJJe4dqmhBWeq847dudwwprbWjiMcX59yhJhfxzQucrvNWUudtRxCjMxgjpgc5LZw",
  "key27": "ke9BXawo8hKN8f7og7Q3AqJ54z9w5ADdoLD75FzjPRipjvE5mDBHzW8UoiKAf5pgkTcUfopSDcFXafYFh7zHnEd",
  "key28": "57YsUaZyrJk1MMbm46vmNRSz4P6ascPWNZNqUVAN18XTPNyWY8EnTR754whWh5c9ZAhMrWPq19fh6QCdakPwAnoB",
  "key29": "5YdNPjgc2s5TLmp3tr9Jf7LCjDBFk3ZEUvwZ7Grjh1JRWUzq8ESuedxkvRdi8VTT2ukWxzffDJY2LstTaiMwqd9U",
  "key30": "QEXCmWNiEkobwzcikghr1dmxPJNvb3nA5VCo4bjxZtkqyB4mqebt2VmigkkTcbGd36YfSpA2rh3PxnabeXFtTow",
  "key31": "48Sw5nWXH6omeF24ffDrhnwC5jHMcwYGWkdjvBTLd9CUFCrkLSHfLL7nQ9RCmhHTwjTw8QQWkjC1C54vbn9CWeNh",
  "key32": "2hVB8xjnbeWr4L8aQks4AkKs51Givj17FKH331G6XLpBt2Bu24txzUVEUC1gmBqpKKLuXvF1QR5EY6AYV8byB1YS",
  "key33": "w1YA8FWGH3Men9sddKUTW4N2PxZgE6WrS9WVwNcop2axqBuNE1cFWKbEyR8Mc5rwm5yLAzPySPu4v3y5h7CRipo",
  "key34": "5nvmt8Jkc71urvwctGn8T9txWe9rBC9zPRXZV1UnZCAEgXsvwPMqXmRooyXC3kv8bPDMqormtF7TX1b5ycgp6mGm",
  "key35": "2kNQHbwhbuD69YrV5k6MRCg1ZJ6bmi2jPpxwXSvWBhtky5GBWZ4tYcCqLK1bXairRLAyonsBWV7eB9ZfWMzCugjv",
  "key36": "3pJBys7W6JezNkxZYv7r5H6yQ7TqSoWiJg6aS3DCoAJ7u4A6C1vULGbzCVy6yj1QAjXJiw2er8GHG4eZ6DXYhkvK",
  "key37": "5omXDnkYhQVq6hTn9vox6Gf5PfAvqCAmqbDfrjwBJDym1jpfyB2P4TRbDRsJFovvYp8KDGMC8UQD33BvU2dzoCvD",
  "key38": "2toQmDSqyf6gpRLdZkxaTRuYHfK2MKBaSKGV7bQLWna9cRaAXP8a4nXBKtZhffuGQM8iosB18jGkGKYgnZ6WCZzK",
  "key39": "3k2V3ioWGp7HxEbPEtghwGJp2d5woDjGe9zahrJJyZJJRzbGHHSg9Psnk1sgUbJpcgho8Czux35eC5XVXVUX9Cyi",
  "key40": "3BaYBJM21AAU8yMcYB7D8Sn5RadByKurabkJWjbnXRGRd8UVNK3mdn9GeXtpVSujYU9wZipNNrUv1rGNh7XmzEmw",
  "key41": "2E4JsoqNGqV5VP88QiWrWQM3LB8HsqZaCSxTYQRMsAcLSYGRNrh6mNxg8JYZjnieBG5j1QhEnL5NFYadSfwzLJSK",
  "key42": "3fqWnHpxzZBH3UTQnM7JPXE9x2BTrkrZmPgFuBSDjkyXsz8voxBN3PjBTZyDzGbvUyvHRHqqaNTAVNFzbrevVqpZ",
  "key43": "4sXbcUQiZSHE2dgj2FbDBGqW5jzzyZPrVfMukQtbFn9JpStZv6sU53emUz9ZhGXq25XDXZcJ1X5X5Nt7ye7Uun19",
  "key44": "45NpPTkVBujy3keiMnyv7yM6y19ZEjg1ZbhrB7khdsZUjmGXjPrqQbeTYERqYo6HyaX4uSrNXBFwJtZDuSrbXkN7",
  "key45": "JEVLfkNSUSV78RCsgqyWUsCnCs7zr5wXmDqUJMahGhuzVkV8RcTeVy399HbF82HE3nvisQZDqPq3Yp81pBRcBFQ",
  "key46": "2N9UnXRNunRaNuakSRNFYM8VDh5cDEshgLiiSWV9bJJfdaZc2TWeminziqBDpxmWmSCBajdb6hcaFf5EYeC8jKmf",
  "key47": "3aRmJyXYz3tauJPQFmfmKptBcfBiEnnfZrYh48YW6NwwEe7poGzspDNrWcNsPm8SqU8pXUSxsviYTH5jSmFchxfQ",
  "key48": "FdhefTVa2dJJzq2YwEwFDAY7ypEGghEy3tJ9nijUUJXj4SFci13q5emNSsH6UzvKtykdEEhJinShcSBnSQax2aN"
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

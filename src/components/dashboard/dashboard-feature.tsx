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
    "4aSbPkrjKKUx8GV3yaocwhosgcEeYPxcmShLqzMxj6GgW2PGNy4VeMt5FWernyhCcJfAVQoXThnbZfgziHrvw3EY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AnZY7WkdwqAxycWDJgB3x6bjjo4efE5xqf5gzq5jfVjVnJyJrpzxxPpLP8dTiNLSgjeTrYRcuZfr3kczCxUCTGj",
  "key1": "TnUWTBe6VygVinKJ3JXXBnKsHr5qCFfWrGdNmnoBMRStYH2LTZQHqioeHsXhfVtpJsKdQ7Duv4RKFv7czX8AbdK",
  "key2": "5JhHmVyjJLSexR86T3CgtbARRCTnyCteSPjnH1jU81mXfUC5Xu7YGo4DpLtsdXAGr62C8edTbkCox9uu6PZyCX5U",
  "key3": "2QitjXE9eebfL8URTpjYtAcGPhQnbmBB6bdbv7mWs8S21DpWwkWmfV28VFJGbzHSkdwuaKfrEfvDHTZUvUxjZecm",
  "key4": "2eau7GTAfxc7tp6mUqZAG4ksYHDSHwBWZkAgdPVxNbT3roH23ZTYhLvufkuAYHciR6B48SSjTo8uyDgRPnGtNRpQ",
  "key5": "3ABFUoQFWD1NS41BtxmwKxRWA6rTrDo5SbBrkLhVACbxbL6GXbTxAEKTXLxFcbpkvUtm6z99LbdrSY2iVHAHysVx",
  "key6": "4FAWbWk6JKWoXnN5mnxqWG8vBhgEjtkgJ7dmTiJCQJVB4BKkXrRDy7PNpJybvA3WeQMFPpscvgnyt8gu9dk3eRr9",
  "key7": "26NtU6P97QBhyYtDhAHJ9ijcLXdnn5tY2ZY4icG64C6hBhxM8KNQw9ax91aWcWYuwJTiVSUNkkNao1p7qn2Ux3G4",
  "key8": "52faqUz67XJaQEfG6C52aVgw5Wab2cVRzVNcuhfcZ4QFQi7og2dyryG4H2fpMtaTTiDc1StqTLuJshyZaSim1jnN",
  "key9": "pwJKMTCVeYYSEJH84mHPgkHevKYjtDZoJY62zfhWob4wYBXzYzML9yHaWtwkr9wHDEHGZY9wYZHnjZp3Q4ErJo6",
  "key10": "5qboZMGqhJxCRnSn3QTe9KnZiLbM8yXPevG4GYrWq1akzCWhu9hrxzLnQuADzA5pdEgVvVKi9RViKMXDGuMHbVp7",
  "key11": "4NGosPMsZb9gadafmkCu8BD2KgBEYLUCuBdd1byRiN9fo9k9tHG5NuVyLQCgUBycr6EEm8vZLdu3URRT8uBNUmtz",
  "key12": "5jmd6u1gD5xgCfgG3rrQjr5rsrTbFUPAdUtjvXiqXBUNMvDYo2RDWL2ys2LQrVnmM6K8zeJo8BtgzcxiRJbzZ1CA",
  "key13": "i8GBp1aBVtAYYbzBgVrvP8X8uzv4MqT2tjWsMMvQe2hasNtaCYiqng7WeXU4QkMf9jgdddoWZ1rWZZj5LArdfwp",
  "key14": "2BHYfeur1AYUSUx82uuejWD577ctqhWKzK5B6ase6sNbsSbAt6gNQGMFaqo8s1YvbWFbKSCE5GZWBi8i9QVh517h",
  "key15": "39xW8RmJBFLkEu39T8p5PoHahh9LMdaCwUbPYkN5dL73socuSzCuPXL6Kc6zt9dpExDkHXaHiQ2AYEUNgXkXrMCt",
  "key16": "ZK9HMndK2zZfGewwY2Xsz53t8nyvBQRAkMumjJr3cNCvqaKSgp284sBX5Js57e3PDS8Wc9BZCugUJ8VQxveLz5X",
  "key17": "3pj6ZCBLtwxDoMKsLeBZke5sRWa97Kaa4e1RZYR6sd9rK7odgETSqXLEK2Gb3nnZH7on4dY5mEzhFDQr5H7tP8Je",
  "key18": "2yKYXseaGfEXbwXvvRpjeTAWrPA6mFmYfB7xarMYJWJ9o1gndWxskkm8r2VWyanRZwyRMdu7ip4ZfZfgtERtoRzU",
  "key19": "3K9Gp8PK5Q25kJPvJXH9omMrDyw8J4M8YcqCNCfUV6WQeSFxXrQuhYmonJxxC89My65eC3SVkX3Whb8jK186FqnD",
  "key20": "3ZKZTAtFKF4ZxkvJXs8kNtidrzmFj8avDk4Tdc9XEmsaX4YvZtpdV3JhsNu3Ju4cVe3kegfANuWXmVs3KXBjaCy4",
  "key21": "442xaEhMhjzDV4qKSWjm8ZRhUQNinfgKnvmrnUfk1zBgdMQ5JakdvkQGDYss1DnRM3CyVDj9jkArUhP9zUKttCZq",
  "key22": "WHJpQqrYHRhayQcRiRH33vEtqUVkcJp5jfsUWtfWriEa1Me6yp1Srg8UJwYfDFk6xU13N72ytXFsqidXq7uvt53",
  "key23": "5mvzdbepBLvkAdwb28p5VPsCMVMyudpdf6x3BEcUfWuP1NSKWf2bvatfDjo3kSmY7rY3yx1KQhU4vmDLMRWjbG2K",
  "key24": "573mYYq9SrA2FzzHPg8ZAKuiztQeSniawiGa8FnggkCEkb2kQhZqy6sAPSLanUFedKz1KDtEjpb9qVpFfX8ZAhSQ",
  "key25": "XgRtATpMuz9BuBFrWzqnJpkFvafq4sanFT6MArUTdq1wyx3KvkDdFc45zu1g3cwBWaUb4MmV99gZa1N2JxFHvAU",
  "key26": "5yyndDoFtc6c9m3igXVU9TgPjXYnubFDiwuTjaC6sNTiJyMkGwLgBEPciq2VeyhmVBKCdo86F4q6GKJXBavvnyKi",
  "key27": "2G4VbKhf5BfM6vqtjoYPFrk1ecZkfwnhJUme6Uyc5WcyYa9Ln7dBsniSyLv9HEQoEuh5ajb6U7U9eSgwrGpsLFX6",
  "key28": "3hgSBuh9hZicUX3QD3jZscdheEmiv96oiwK4poWhSxixqJuXPd6br8DbhXUMVQ4rBfJYQd9aEKA7gE7Sq5JFA41Y",
  "key29": "5u61f9B4gJ4RvMMvA1XFg5tyvhLHhPbJEjiG53nLoKMUx25QxFnBFgrdfsajk4tX6VkXK1tWi2GdHbqa9sHjkPmf",
  "key30": "2BT7gkPErwoueXDFURUfW1YrpzB6uLiqrNmMQeLRxDMbtEwCJszYgXrwmDxTJ7a7tqLyeAM8BWQH5wfwzGkyCBEN",
  "key31": "3rzeSN4t6QFhzdq4onwfsjFD2XrHCbia7BBRTZmRkgdfmpKFvWjsM2LqJnyBt9SWszQ6W2esTX8dCg86mbe5Uema",
  "key32": "3t5VRk7WUKySYZP6HUuvMz2vbHztMbZDJche1zvwR5cFqEr33Yqfmzz9sjwy5qwnCDDk4vXzMFKVFbL8bauUwCeW",
  "key33": "566J1dgTevUVbUqzVuFgDj5P9jWfRkHLj7HVZ4z9PyuBcKQiLoPdvXiGNyRu5wLJEJeCti87mVpVSgvmCKx7uiux",
  "key34": "2RiNaN1g4ZENvPkFe7nauURm84tTsiqJJxrzNmVZcKQQMAZvWmZ8W8iZm8HW3weCL8os5fiXTYX74txhHbzbYg8w",
  "key35": "3AwBa9MFyE4ftDeL97baNLCXQM1mfd9svJrMFejjRhcCxQqWTW6Wa5z7PqZzxdnSb8rDKqsmziJWX6qDThkSyhNx",
  "key36": "4GAuv7LHRan9B7jjR8H2PdmT4PTHUtgnXLYpkPJTCreV6rJsAAXXh2sBH9Vapz5SSNwpW1xEHya1wzVL4zPa8WUp",
  "key37": "5xb2ah49W9DWuuUoCCxnA2BJDKfUNU6FsnjAQwkDQAqBHdPWqE2G2xxtVVjgDhUY2mqKMo3cExxJ2r2LAAWJjvoe",
  "key38": "TLyHw1596WGxg1b64okgYxsvkhqWF4qXGMA7g84c7n23ER7gGwdg9hT6dgWJRWDFJ1vkySCbBTMyZgCzCzW1z6k",
  "key39": "5yj6ifbmmtAvMRq9aJGHH5Q6j9kPHivYtJFQzUbdGMap1iwQHosnrfncqb42Yz9PbZr8cJHFaHjnBspPQTF3XBRP",
  "key40": "5HAEVo7AcYASdyBHdBtzo6EzYsJ9vpiVxx771iQj9hkgKuWzFZ79Rp6wK8s17qYgsx195avgCpqg5mfCGQ28GR2b",
  "key41": "uL2QSZbZfBwsLX75t4zTHzrnqFsrNJ7BavFZfxACmkDgfVXkQguqWX5Lg3bkjjWoEZZPh4Wv3QPSz97aSUwV5n9",
  "key42": "3Pc4EUbgTUwvzVUrThc2tY7CtisrtbUriCoaJ1aiF4WSAwJcSccbTJfW5ES11NUsgeS6vKAaEiKX3xnju4rhT7kP",
  "key43": "s2pa563PxaYYBJRecn6BoVxvYU6D9batNzha6hagV6DhWrkbjXFv5NWWq6nXN6SZXCgst1eNhzBWCA4ddqMhD2t",
  "key44": "dN24F7w5WSLchj35kh43jCPEHuaVRJNk96uJKZMA3oAsu9wPiDnABszqrjMTidjz1naMZoHwfoGJuGnR5moxnR1"
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

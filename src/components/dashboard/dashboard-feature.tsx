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
    "4WsMMaFG4zujxLQQiHpiaXaYvMrpjLUkqbvWqtahUBgdt9D4XG4NMkgti1Tm8du5tqpp3jo8um2HEDMSYGXNMCFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vie43ofQFreRpBiXUpP8juYMW9tMhuw1svSVieUSv2JbWGgtmtbqLtEfAMtWL3LSjbRsdTLe1nrYYUQgifQwAuH",
  "key1": "2TcbVnVZUkzHDwpLQUg5GRKPEAsh3NbFoUNi7zYMAKyFh1LD143pa24KpHSwgnHdctcSYUsUAMpUWbzMHjDYcWMk",
  "key2": "4MnPkCwb1YW2C9mh3LrnHS1Gdhc7rDju2vYGF6K37UEUzn1uLeDxZSALTDj4VJPSxVjKP6BmtckmxZyKGUxXjsHx",
  "key3": "EQYQcVcWjtfAySxv4EQNqGiqGbYvJegmek5DTAojHpYxYFzGBhU8zwegcpGpTVkMyEaqQK7jyhJXqzRXqEJbRYY",
  "key4": "jjLcVB2HG3MsSvRCvzRzhyFFxaE3dZNBLQnzLHTeYMNrcZEhQvsttmMuLRbVSh2hr8mtpuaSFagD2qX4SWWzwDa",
  "key5": "bKXomtrtQXKajCxT3MqQEZuyc16naB8QsJVNRZhNn8twWDediHxzVtQ7F9hcaVRzuP9r335WEMveTw4wEoC4xxa",
  "key6": "2sijZZ5G7qUP9Y9wsJb1WFmggFFxLZbuDcyEeENXNvoANgBynWMZaciCgEeoZaZhKsh3FSshVJDsjSvyVA5xaxzh",
  "key7": "64b6ABJ1p6UZTJguEJvbuzWy1SvjmdX1aPNY5tFwbCXwCRkDJxFZvuWJUgEjcsjp8fomb53N6qhZC52b6gbSjKvb",
  "key8": "64Hf4JkgmNkRD4cappAEs7FMzqV5FA9RHqDMerxsmnwwbFLhdDreZSsYBKTjD3Pgs79WqvkHAdXPzmghxJnuKrfW",
  "key9": "3WD2FaLa5EVmeFQvz93hMs1iaP233aMdcJ6biaBVvMz3gfAUf7W8WvtoaYAEsGCDFvDzheAdoK9ptdNRDVdmwhit",
  "key10": "3t3JWbsABHrKrtpwq2khFrvfDGEKMP66Wg3P9DXkkrBHceFCJ7mLey6GoEmNq3VCorYXzk2makanLhH48rZdoVAm",
  "key11": "5fFF23eTvPHZ5TGd7xBhPSyv6gz1SQsPXc7AYQJKxNRwT5N6d4fSmiAg5y7G9K5E5irYVZJtnWjuP1QyMX1cXkkK",
  "key12": "3JL2GdkhSB1MehYEPPi7fUBSkVd4JKPngpJGy3z8hDNghEeMtaPGA17AcXNCSgYXzRj7rzBgMTdtAWrJyNqUUEFK",
  "key13": "3G7Em47FQ2iUmd5ms9yWe7TY45LjN8HCQyyaWmxUiDNV46Nd7oGxrz76D58QKRNm6DdL28o8h1aY7zi8z4xm5agZ",
  "key14": "4EV6WJbAn3ntnLwxjpP9LqwwdPCtYAB2yyxL3mnRFd3Qcwm6RBryyTG7rprQ2jdtPnqzbsL8FaXK9Wy3spgJamB8",
  "key15": "5eiBJR7U7bncLcRcREXf2QfqFzBttjrRk9ymdTHfos8cBwkZgmjXwzCTyUBbw2rr4jwuNn2q5jXnR5KQFZWquJQX",
  "key16": "2hD4ahXF6KCPqVcYiNu3pac6P6BKCg9ScEvBT2JcZQwxTZ4SEWLztNWFmCkSaFfsNPEpJsd7EVp6TRYcWeT9nTXb",
  "key17": "5wSMaNKZDkyjS2tqKQ5cVPAfBeNcgh7uHxkmyp56DcvHfPXHGmd1YJhzg1iwU6EdZW2MH7qSo4QUiXuD2exgZ2GD",
  "key18": "5YGb5zmCNbacm2J6VZL3CNTMYQcsfgUjvD5TMfjo7AEBeisvMieMZYXZq7vryitUMGwJhC7YqeKQzsWABV7DzEMh",
  "key19": "4gMQmFZdG8gpFLMYmG1LsirBd5nP555TCMdFwNVJNqk59z3HhHJYQaZ2FZYK6eh7uvEnYKWTJYbxeSC6RvB5MJk3",
  "key20": "22YiczUrWXtctZ8McRkSQ4r9eYUmizYXYasxY7UuFfVgbPRZT4QiKGcn3W1LWLpWzHkBkXXYpEYeMbLpsV13ee8k",
  "key21": "e7ETTR7GUQWFGHFMfyZdwDpzUHK52r1RH6wySS9MKrgqR4TPU5ZaHz36sQFyfxqXHHvjjryCbV2qvBBj2QQSQxD",
  "key22": "52DJeQEAjhdJz22ESknsmEiP42hiLGhDHTtRken2R6R296fvyRUEdwHrR836roV3phJoFj2emKrVXmZsLUczZkA5",
  "key23": "2etfa64JNdTrRE1FiZCM1fWCL3kSfZt8G1r16KA7TduV3VcXjFMeYtsoQ8NcUFmaEWtEFztd8AgdT9Y22PC7Socm",
  "key24": "3fYPw8S7TVQ36jypc9zPApRYpmy2zw5D9aLNhgodfPWmCHfXroRdMLJKzXE54gjVcbEe4Eky5uhx62GL3m9b4hiz",
  "key25": "3hCKZNQgCrRuW66ZuBXx7X9CF9Ntx49nMr8z9rcM6JLvoRQpWvT11RKPXbP2LvS99TU9HS6mDytAV57BGcR3GAZ9",
  "key26": "2q5rwFuPwXEYq3ZD7f4s8j8fFEs13xJBoyBJTeMFmLsRp52VkhVGoKZcRmyoGmYSgLoKtTk3TW7UovFF2hzzt8Fs",
  "key27": "62Ztscuhu5jMhhRCk5nBRGRcgtQfiWXCmA3Bkgmc4eFmzJNrzdGVeQmMqg5UBEdSyNNBaFhRsZRpZr5AdU3nPDXd",
  "key28": "3T4Bz99Yu3vAM4EnkQWqSq2xwvepLSCse5s8hx5Y9tKMwLhH8Aw1YC6gxvg83p4kR8QJy83N8VGabs6LMVbcUbiL",
  "key29": "TNR1X3qDEzAim52wRZmuHjmK5pWcUFWsDKNHrkbPcMW9SmQ1tH8Fg1xc5Mnvg6x6ifiXQbwNvEHERdA3SNUQED7",
  "key30": "4hei3qKosj5kpmfyGiA4cnzXbBnE18DYRpQjSvrxrTEQjbMEiaXrQJxFhDoTeX5bGFUbCrTgmqSfEFbRd74dqti3",
  "key31": "3Z3qHNqEP2AWGu7BNiW1iVywuW2t7HuwN46QQwgyfAmZmS8eZnhhJoANwVZEcntbK57BeKcR6j1mxtU1h18LHfLY",
  "key32": "4t9pc2AVWqbsPNue9psD5PfUK3FzCM1Ep69Afabd3EfJAzgpKBRgwRMxLo1yf6P5WaiRtoTWxKfQB82fXiZUPzGG",
  "key33": "puRwDaUZv6QoJq1cB1YwoYvnmQaeZSiENH5ascgjwUQ1PsSrqsauNPNkUTrPipJwR3mFuHs33vdHC4qwXbF9o3E",
  "key34": "64pM1wqFFi952MeTbhj1hB7ZvFbTkxZJt2pr8daDj1XAxNTCSxcUJFTrm5VobazQHHXwScXZjQNNoNmcD5vEBmZy",
  "key35": "3dLQykSoWXpusArhucFf2udMyCyKrDS8V21iQ2UT239tojcgpkLke9g36fLDHRaVfd9ic73DcxsLniq2nLPKgwVq",
  "key36": "5PKQqnjRiRBjLM6oq8qXnDeC4fk7T6Jo7KmsMCVuRjz1dxqR9sDCkicLPK5wUqP7qqYEH4GKR8GjmBpgd9YEf8Fu",
  "key37": "4sbdKNQfZhSeZ3G2bX11UwHVHNRyeT9e1froPunmiBLhrmF6DRLdAsgCavBnFSuWzPoWXMRsuLKqwZX1UHXQewxK",
  "key38": "XNuttdNfUHZGEFxgBJdpjf5UoMmJq13BcULyPAdFqLEBm8hytRRtXUNg5e6Rkjq3ndXE5MCnVRhaxxaenBKoyJe",
  "key39": "Rqvpo7kJQJm13KERn25UHir93fm6Uim3s36X2NuajUxjxaEgwc6Z83d6cRwbWAsufj6BEZvt2w3hBc1vwTFdQWk",
  "key40": "5Z8eXmA89MxVh2UvxnDyqXcxSV8hfC6JkXgyCHuwyoGXQHYSxy8eDXGuD3i5YrrnhSSPCedEjTZsTwzdRkgab6JD",
  "key41": "5jr1uMWmu27xJU5kpMXofVDciCoqfsoA27MgRUAwGB16xwnMzmQLXXrTWaLM7NGHUyCNQ5QJConEZxvpTnGJ6S6C",
  "key42": "qB8CAPbSmWBiZ18sYkeqJ8kswM6x5HLfmtdAXwNyj4ZdFjpgvPwcXdrsftxnw7QbuZQED9D1zyZ37B4URrhc2ad",
  "key43": "4XaNXhyi7iEcTkEaNYvwwaWJVFe68KamJGdj7WSjtxHEZVHrxfW4EoBEnMKxzndTMHNhM8jSswu4HnwikAonUkcK"
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

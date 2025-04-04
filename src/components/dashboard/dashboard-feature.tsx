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
    "5bp1Yhq3F4mmXbw5Pvsk9xhxKjoTsrgWcvewk6rSTBbZzg5PgZy44YSKA6tJ2h4vwf9yRpAK4GLJgZTUNhVXKCuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9HNPK17VoQffxaJ4PLxgzQdaYwHsq9SW1YQEeZFFmtobqp1PQpaLAN9213m5Yhmf2BhGnJ2hTbYfTnN4SFwogwS",
  "key1": "3wM2xUVfqhpq1c2NzRmjwkLTbwckwewsucVipvoXuujNLTPDuKGeHU93oYDuQrisUdeZ3r59mbDvqewwmjJ4oUHR",
  "key2": "62E9Gf9nc8TBmy1sKP5kQJokHju2VbFGn3p3AtSTVfLWZ8Qwrdm5nMRQqMnNwySfAajV338SiedKmLBUmZZZe3Gn",
  "key3": "5D6TcKt553HdecrtG9BGq6YbfdbkqTD6rtG4sX2MPzMcd4GpqW6hxCZZqcdMo4R2hnodHWxnSXnDdWmqohfk8jqK",
  "key4": "2W9F8HrVexpZWk34mE4rNndhBBAW89Si128sfRed1uYo4zqW75e6sgbEeN7b32Kpx1xr4JdZQR7iXQyhaeFPn53X",
  "key5": "PnxY6B5wTbYAzATuR3DMpmg3kQ3PbKRPkBbfPTWUwdeWAbK4xJwGeq9MHJQFCmSAgytz35bb37p5QYP87YpSjb6",
  "key6": "5phkw1cRwmUihkQwBRhWncqAyGSV1e21ynn8bSECa5BkFPhJEAsyShMe7PL9UzKQDuZxRJUKeFsFnvbspRn68T4K",
  "key7": "5YFshbrarKZXL4QQLuMnGiipqA4w26XxJdGmV8sHrrDZNnmrZPZKkegJvqYBYtmpxDe9nw4ZN9uLjMz8MyyphLDF",
  "key8": "4vfgtEYGqx4pCXapDxmoGfz2L1f2EjtN8wj1h3xib1NVj37MDnfzTG3tDjDj6Ejp1JYm6z4YFFA4ykMNmCySZeCx",
  "key9": "5E71UcVuEtu25XRXQqr4bMpWWRfouo4nevirenErT9AgpADqXcAxveck8ULiRCrs5DkAv5q27m1c1iSqJrS1UVyZ",
  "key10": "3zMsxgRBcNyVrioBbhn8fCigMi1834SPAitKFytGur3Dg6XWCyBoYuoE3GS9q5jNgdgYikLFmoYLGx54Dfo9WDUp",
  "key11": "v9ZDbfzsBZ1EbJLDz4kT1jjUzyiKUc87yQJFrq6iGwjyAyfif1bszzo8vrU8SWfR5gDPzrftx3651ZvmBpLAfPB",
  "key12": "3xzir2mcSumnUm1zk5biR3AEBXEtLmpNFJcQWdFoi6HzojXqiwmguyTx7CgLNTvYqpQUchYmokXTBsS2JGrguSS3",
  "key13": "3S8uMpswK8M1nRrXZ4meLKydgjCAuAyRwm4vWVcmJXFTrKJBp9Jxm4Tc6RAN1mdA4DJYUuo6ivNbBZE3oppuVgjW",
  "key14": "4jHMXoc9zG4SVSZEZggXTahN5f5pcYnH6LCwPXzr3hdpZtowZCZ26Z119vk7AdVXjnvVysed3xrbw45SAq8wrUPV",
  "key15": "4Qj4Dbr2XyXReGCPkr55eicsUpLNeh5ESDULVYWifsgFU5k3VoCyLyGKRwR84mxxZqDFs1kZQ6zpEAeSzK7TLydN",
  "key16": "24v9g7gFmqvp9obutZGX4wQpongnFdFDLwDYGcNfryQH8kGHBgFwewdw3b5dsKjegpy4WQFm4ygo5yExwQiwjo2e",
  "key17": "2G2eqd3VabCQoFk1Tnqu5N9ZyTwv38gpVS7gr3dMaUDs7dYUFYsPtVKqmmp4EHnehjMoDEjTT6gnUkWAkV3HVY4E",
  "key18": "28cdH8GjJJTXXCidzKJCd4wGbCu3sDsTzAjg6snBe6sk74nrzcUvqe5H8pB1aneBuaiiJshTfetoD8Eb57Eq7CXo",
  "key19": "5se6dSwJxKnVyFWfngbypv6FZ9cLJ9xZcTRQnZ4EervtckLHcYLGmVZWGpf5RVnPt3eZhWFD3mS1hPbYbcugeF2j",
  "key20": "4jDVmTtXA7NasAxzPsUoXpa1vRrEje7DqJ1JY1ryigUnFBvU5fdHSbzGA7E2mL52dC1descHFDLTEGT7E9DBs9NS",
  "key21": "5kMycAfZGW5zZ4ELQfSbUMFhmgNRoQQwZP39apsewNNExT7DSzQBCSRBQXjEqzkoRzuVPWNwzFqnXq7kPkurX7zj",
  "key22": "5wuefE9KEJ6cbREHDUi9oyfZ81USgLuS4pK3jG8DMmuJ6FKqd7Xdjbc5b59EJxPUxgnvpuNnZ8Nuqkwvrt4fJS7T",
  "key23": "sAnN33SzpBSwHZLqFqvczuxDRTcAydCuGXm7uSDcc2EPVtedPw6equd664DC7nLnwve287bfN9obLD5gqNhMYCH",
  "key24": "zf2P6ammU3gqDHM3xAUtB7LRaakyiX3HERWwcxxzTq5Z5u51ApXRghdXCkDzc7YyKEwWBqQsrY1mSZdCidfT76N",
  "key25": "4pxr7dsTE8FfWpuQfePvZw9k88sgsviQtAPapRfKTNUtzaUaPMXQVohjaYpmhaUjpbzPLvFiydvDkJHPBCAuWUNA",
  "key26": "VsRTCbsAThjA88Amu5iQQ47PrPK8G5Kku8ewzTvxUs5WTN4Bo2Y83tHy1iX295YADw1TJVRnMoaLbAmxRQGGSF9",
  "key27": "3YwaJyxC1PEpMuzVnsrfGwx7rp1HXvUcUiFKJgjdGqePdPYeLnwzN38K6RxNGx9Nnwh7LavEoX9Hf7swnd6FvgYu",
  "key28": "2o5xvnVt4nJK6Swcut1ZRU4zkaJ1PWPsfLdJSwqiUcBvaMLPMyxamjnc3nQAsuGbxAEHEmoagbYh1zAFDzdkmBSD",
  "key29": "EK8qCKdu3DND51w1shQiWFmQmbZttkvKxYJWDdLZQ4Ammdwz5rPHiabcigveGsvHsfqvL3Kg7X2PoyDE1PKBSFH",
  "key30": "xDx7F9zkb5TKcTdJWxTSjsFr7BH5fLrVGqJKTuT3FZc4rqJWNsopg1Y8NyaQmABUJWWJLd2RBDhoMdahHMA9AB4",
  "key31": "5fv15XBSspJDkZYu7bM7Rm1Ut3yQHJUKFoWTwDZb3NNTF9hfCzz4831VBy8sjxTd2F4e11GoPKyxHrQpqMuyfzJy",
  "key32": "4f67XHNPsojxcJjhPxTCa8cmKNBMYejkoJGnpGZicyNWrCihwC1DJWU7i71CJWo4k4tgCLvtGfyi5bLddz9qqwAx",
  "key33": "4mzRWxK9DBhHJfwG4zJuxDqmxC9fQYuTDYwpVhoGQjnKojrYF5rrWSVYhmLGpaT2JGuMSZj3z8cU94DAnZghcACU",
  "key34": "5W6CubNipc4SbDWUsa1PLhGu2esraRDDGLssBrobHoBQMPAPWyyMMBZ18kJwctyHxDBxpcU1k5TVBqDPcaGyB89Z",
  "key35": "5sn4U9fUsjAqUWdZKp1NiixTeNWkuzZwJ8LV1KyR2hQ3tWL7beg7Svq8WUF4VT5MFpSbSEG5aTDs4fbTHTW41YvR",
  "key36": "2o55Rm1q8rXa2JHSVbcrS3DQNShWSn3v6xN9RJ8MGc6txqKYETf4zDFyQaw7ybbpRLCtEgsfQL2JjNWRvHH9FKZw",
  "key37": "2kjxKZciyyd9bxSsoPnTayeXtYzmvJGq26gyYWkfzPA28DhLGBn6pUSq1PzvygAJ4y8vfFsjmGndjPRYLbddky3t",
  "key38": "5autzk42qbXL63zsKriXnZhiCGUJgKiNmQ5oZCeoRhfJVVqWXMFwyJgCaxce5exY3jYJKFuCVg7S6j3j6FbB24pb",
  "key39": "2SB7VHDKwd93JQRWEuD14Mn2YvVaTa9JaBUJiLSk1uJ42J65tqA5KcoEjDuSY318j9yikU3D9vBetWk4owf8MfS7",
  "key40": "3N6V6FXJZWVM8AYeBqfuLyiDPtv88AYmDTF5sHApH5TWPN9jjYpFLZPEPxpioMbhr1CwqMFzKB4xg9Kuo7DUhXho"
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

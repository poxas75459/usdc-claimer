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
    "3vb4mqLBQLcDnR5fXGKSmKnWQAgdgFHThV3QrfB6Gsz3yfGoREnyVnEg66QWBH9e16EnKw3uuMPpS8yiFEXqcM2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBjgisuTYFaMW6XgNSU2v26YKzaj33HTaNCv2u4Qwha4Q5WUzcrDWTU5afL9biD5fwnx9ZPVu6DYLmXYqH6cNX5",
  "key1": "47vSLcgFMxuG5RKck7XE6td1G7vRBUFF2Ld62j5ZPNBxiGdrFgaNp6MxHv8CG1ha17TTYLEqwH492Y7ck2YsRDZG",
  "key2": "3NL8mCtAGJHDHLQUHnL72y6DMvtXxn5WgLK1nYAXem3WMuMJJpM71gqDZw6uT5xgfepZDCbhVW4Q2WWxoJRAxCvp",
  "key3": "3sJfjQEtgjpxaEnic9CrXQtr1dt6C65G7kWu6A5GMAxSHzN6HcrqoMkubCypbgtqamDrDqodhNp4qBEMmLmHiGxb",
  "key4": "5yQ7namf8RGhwqhGK1gErvzjjbiSeSXiNp35Vx3afndiNii38h4nv1L7m2qQ81JeyjVFiUXVFuhcQUHj51ZWY3LR",
  "key5": "3cvmMgowe3AH5A7uYjVuyKzoawzfFeWF34uWDBSGASmA4DvfZCwmvvugP7LQxkopu2hKqVJYDvjqxLSTH254SeQ4",
  "key6": "zb17RX2kKTgVVvgfyZf9tZryTuHHg9vD7dzeywMLntVVNtnTKgiPpd4fFrBzU56ZAR2PQa2oHZVVkSEJdCesM5m",
  "key7": "3qnPjL1vtaGbrD2s18Fj12y1P7b433GvkCfa5oNrz3Peik68qS3YMkYN7P64vubs8D38UdBaQEBios3x2jCUgC4A",
  "key8": "36fQxfFHnktXLNVys2Mj3UuTE8whZ1C35rTzy1ZV59cJhjSZuPg95JRkaZ8Di4Uv2WG17cxvWw6bN8wBsd2r6JCF",
  "key9": "2GCEE6zaSv4nU5fnbZUkZBcxGgt6zjp9bsfoXEeTbssY7wfS3XQNvZqmapvUzayyJPS4qGPzSY7dstEtRq3tPbV8",
  "key10": "633WAu1NLkZntkAtk31QtN1GUPwZfVye8sM3P28qVcJJVfKqHXpXfcm9SEyoz553TGiKvjfNeD5wfgHSDqp4aEdu",
  "key11": "4gAz6woBHuo7XXaasvDDf3zi1FDotKe6UwshnjCvJT3A5FevLQkbZuPmjtn3AURoVA8rQRF1znFBYj82XjAkXTmP",
  "key12": "5hJ3seRgvKGv9uUnRWj1W5WckpSFJXHvYxmQeH5viRz8TdTAee41YA6tFmQwxuPRzupf4GbAaReqYJ6Aj4TaC4Hx",
  "key13": "UF5ZPMf3rd8mHpf7Y5MncmUcH3cCibDbpqoZBNaPH2RojXFAkafMpxXx27iSn5zFUeX6DJhTj4ariE1uKcF7MRF",
  "key14": "2suJrLX6vWhaDaZeckEjiBwypHfa8immfFupFbSGTDMUy5NjD5WGHuEUvirk4XgUP9L6pX827DvgiYd6nR9ado4W",
  "key15": "2DqytoLgmW5XpMjS4TAJzcxw9cEqz4niNqxXruiw58rcq5WaydwpcCotzQwKjYYCfe4JnhjEMKjjX6cTSPtk8pRM",
  "key16": "27W12QwCHX6zARyfQPKbZv9Gm2jLvhqFr8C5o5DE3GJmGhEXkUTH6Mo2fGuB5cpXmYd43bRdYhrVt3x8Y2WdizL2",
  "key17": "5nBYvMysvAhdSbv7ZcPYWEmVvhe4XBRi3NUVGpJTeAUc6FzdJivXL7vciTdq2qAUn8DXDB8RKqwpvayi64ZP7TCn",
  "key18": "KmNv6PCwqBqMXnz4ZoouE3VFyvhWvqmZuAh7yb9S9Ewm2MWz4pbxQT7KDgN6ajs8HaBJagvihYJ2Tv6tLPDMFrH",
  "key19": "36SdKXuojJNDu4Q2hfrLgnRjAVn2sQ4KaRgLpuYUEt8G2rtPH94QGymGxGi8DDX35AgBrCTNB3GUE1pU88rZtieq",
  "key20": "WoCbBaU1VbnZs67UvAUUsSKJctqVfruEoCtQwVGuyZTc7p7Zzoe6WqdUPVpcmaVWbPTrUsaN2TW8R9mj1wRwVcJ",
  "key21": "2ZQ2Pmah2yBw3REYjWF8cygeq3CnDZGJ6qUjv3uu8gnwf5e4oD2nvcwCD6LXhcttnJ4qPTN5CJLj7ZmzzNeQnyB7",
  "key22": "2vcfFULrkMF2QH9cMeKTz8SgHXNhh2iGREenbr7YQbtQ1rMqYqijvJofYcMkBFZMJoYCdNzKWqAa5HYfBZhnpGPm",
  "key23": "4zwvJVUVfy4zxDzQJYiLhkoaTuwwUFY1QoJj6jhEEcLg1PmuGJFgekCgogGFf5GbXJm9WJmZBj52heY7d9Tt19rQ",
  "key24": "w1kwtp2mmowMgejyBpYLjtyECepMMTioj4xBLYbGzEPAEA1fC1mqiEdpLt6g4tUcKrVJd1aVZhiCqvTdGExJa7f",
  "key25": "pZA8u574RuTdgG4gKqRRTNcdDvThosmXUMgfpyog5HevPZzSpxPXmoSi3L2fpuY8NtDjWgH4vBbbMoooZLNQBFc",
  "key26": "h6bv8H4hzGLk8ARjPvTSF2SRZEa2qzxW9GYBMg3w1oJaegbpgkJuh1L5zYCJydSn7jukY3bQqiThyUDKHgUPq3q",
  "key27": "4iHWQUtYzsxRbb115BVa4Fa5GKvssPjSqDrcxZrv4SsZpHLdZMJYV96kwyBbWuDUW4N965uMnSezX1XCsgYnPJc2",
  "key28": "37ST5nU9W11Qb72K5V9u6cGPAfMnN8Ucyq5TjVXngbaWBoYwNzCiywfvgvsTArAq23SMug2nsrpwyUcgvQU9kzTH",
  "key29": "4R7hoEMTnnYkhU6oS2icvaRZpxaPE12AyQH4bFoAhzWqHqsEnPvNEuC6gzJM8hBh6ugrMLpayu3EqHubp8jD58er",
  "key30": "246Yq8y7KMNkLCgpFPQoeRTi1fVDGsNGD6erG4m6c3ZdZ151onp6gKcZebSfpszfiFoFskX3TRzAs6bwJfwHrKAs",
  "key31": "5jjZGBj8Vj7p4awcFydZ95t1Mzh8DAkSDS9Ak4ygYBeLuSoU4MNJaHvN3F2BYEC4F8mP2Axuwtu6HnTiG7Wty1bu",
  "key32": "2KTdSCqhV9ncQ7Nx6V89fArGw7rJNk896E4qDza51umFrkJT1VexfEDo2Nk7VmTZY8DThmPQhh4nM4rQe42YKNEg",
  "key33": "53UYWHb2MAmzMB8oQUS69VnV6bxtTrENZaP7RRZLgpMsYJU64sKaxQZzkxjYyVQVn6p63mL6fiBm2Fg7wDAHKaSx",
  "key34": "59fkVXjCkvQBYdsTKh4Bk4iznT3zWVGUw1os9tEUxbDvwRVEmJWfq62K6YBjxNcwJViPkRnuAV3z1QaB4vhtKwQi",
  "key35": "4bNWBRzTAh1sWuM4BRWwRYJx8XSvuyxpmsLDQcnt3BYRYGw6U1tEwpuBtRHrHfYaRCvjyTGKrq3e92h9j3b1CvaH",
  "key36": "2E9tuKmYtTxad6D46eGXRzMiLCupLND2GPXVsqEqrCQDf3s7Rbtde2V156bG43C9YzR84ZTvRa7efxeydMPHVpBG",
  "key37": "5kp2MnWfCzd6yBpBBTBUKJW2EsPjpkVP3qbB7G1rJsy3waXiLJ52UHVkK7dwMiB3qKgTmYhDsn5j8rN3N21bqg42",
  "key38": "2r1REksZhsguJvK719wakyDzWnDaUkdj7pKmhZzrFgp7u5ASn4xvCT8rBWFzqQcX7qy1LVp8soJv7T6bW27qNKEG",
  "key39": "57M3PQqViRgv1bEX7SX2AetWRiB5YJa8cz1yoqpQ9MGPSQgwni71QNpb6fukHasytbcWoANjWbE4k8SiZrrhytNH",
  "key40": "369AajUEj38G9bv2kmvK6NCDsCHtAUXeHVNKwkTa9saLdAzYiUd7gUZx3StyRAuUhJnwBUZkegy6Kdj3utcxmDHm",
  "key41": "3jpzRRxGrfMR2axyjg86ukGWs5tL4LwVftq98Lx6ywyAeUkv1crMEYijtfbJ8Nric3wEyqG9iC2p758ab9amH7JM",
  "key42": "127gxkRekoiC2ARhPv8JickgSUUcWQo4obFHfakdBwWtCncMygPUgt38oNkS6R7HmD1GJDwtbWv4Hh3eThak2cpH",
  "key43": "3iFEAcJKSLWz4eYQWqkVDs5xXKKmBoQMCSmUTBhWJaqc1wB2hFHV5jUQ9d82JTXpSBdao2Rv1GiJWH5v3pp6bBec"
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

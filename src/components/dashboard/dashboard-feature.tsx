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
    "4VYUNrvNGARVvwuWuyfBSo9A4Yc7zKfsdJd855WRNSK8GQnwyHv3cyEYBtvXJdY3nonnKQRnZyVH7LG376dHpVxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22rVN5GskFYfFsBYgNaChaL8rDX8DbEExNZCBdp9scdoNViGBCzUWZeNodBRBpPGFUU1L6zuQd9qLgc5DYgi5nhu",
  "key1": "3eiU78Bceynyn2b8uXUe9ybEKt5U44pCWaoQmxCz6HDXvMGgfR8d9o6eFkcajihD2Mp9YfWqyU8vpFQ1uF9ZZzNZ",
  "key2": "5ZUjvSyxtxjfTqCMFzyM3Z5cfDGfVHbLvDMZb3CmcXct3BYbuwo9zEogUcPQBWQUoZ6jnHVNA3DKFy7TKDRVWtu2",
  "key3": "2bmJbjay1Q4yFiRJt3LKw3pXc37mE1YnFHPDTHTmJYXC3Jukk3N1jHaPxd4sgyEQRDJzZofLvFYBMwtR4Q58uTEG",
  "key4": "3DMh2CQM6yoBYLqEq94kbFJwm5eHyU16SDB5REZLtgfkMtDvUszj4UmaWwM75PkEioNqL2qvrnKSoDpGBxAF9Fsj",
  "key5": "3d9SCpYLVLcrvV2tc2TCi2hAyAWWXLGy99BPE9NLJ1gVGhgcEMPB7VJReVsqE4LFNMoacPnhdPQcC1JaNJAFBEwt",
  "key6": "2AvaUfMuwwq3or5UsKiRK8Unb6NVyjoAnwFn9n2ah7LKxSCRF32jvLm1iEo8q57LH34b86Nab5cSNzqggKWNiRWP",
  "key7": "5Y8hCXaNC5jAUVjL1sc4EBXeP9jnEpRJ25yFvgcZv6xCRw24527KXUEu6yPE7zKzkVF4XHxFNmzQSNhEMBF7Ucz4",
  "key8": "62fwhHoKKHZ5YiZ9th3uVpvALbBArPkp7MUcH3Qx7sCSe5aDpSGY5xvbbNTaiciNyXVzKQ8bdVfZkgYT2x1dzKCQ",
  "key9": "84C22T4RDibzfZgQTgHzsV6CVPGnB4v55vNkqy3Bt5Zv3UdssX5dmpY1AQFopnvwD2ugurVJrBhkpQAe8MgJH4a",
  "key10": "43yBZToL3GEhWr9Nk54ACz5zKivNB8cmmeBHSsshDzVJvScH1E66oH5x6GeE7A1PuyPa8UBrNSVNnfAi4woXFqZ6",
  "key11": "5v6CDW9gjBqv2UA6SmYUy9Rud3s2zUEQuYZvEdW3Hqcy6c745aUC7tmpiYXNQActLS89tbUE3b7DFUVfYe91ofcp",
  "key12": "4nEy7MC6nZ6d4Qip34b9JDUpbHPxw6kHnKsb6h9YKyA4PDm64EU9uFgtFiLE2Qk9Ve2wt9727w6rXohYtLf9X9HX",
  "key13": "wa7pWj7m4Vo2X6cbCm498VRHkuBYJRJqHfCxFMEtBe41RR3rwu56ZwQyaeCHtAMy1bZrPi2ar6zbhkrHzLJzucY",
  "key14": "Pk76hgtEbwEea1K9FDz517HdF7SZE4cF47ubCHw1j2tYxJrKJT8dAcWhi6amzUkdjtic9ug9cDiJPVxhS1hxEBv",
  "key15": "2XTMiBxPontF3NPkvyZSvnsBm6xDFh4RNNVMFhaJYX316JxAaWWx1DAiRNX4JV4MXo4urKSVLBHsErpR98i5qYLn",
  "key16": "qkeApTjCAsDkzBa7VukYYm4JkVffcdpzK9EWbLwAFsXSczeqgANz8CHEa6kzp1q3C7xYWaVGpC4BwJmMgp4bvJr",
  "key17": "2QkSUFT1obD2RZucFdJnJEj8goQmZhirCVoqKBb1xrPS8JvHiv2WqaHZuZQpFpS2p7MvYTzaRzhKSufPLSGZtdJy",
  "key18": "5Yj81idJbKeodmy5czUtsFMYDQGRRtykYPRS1tpK3A5BTU1mEiBgJSuyQWtLjMe5UVoNWM7xiKdN7AHm6ZJBWZ7p",
  "key19": "w4qTT2gdJLxWp3ATV9nfvGbhvEeK2LQyodyfp2FXGDe6GiVe3bYeBgvMJrtLM7piiLuhdV6xf1LTPVU2mUp24Nv",
  "key20": "aHhGQyJzHDbUGhUv4dRZKUu9JV8ULM356P2K5hmNwasRPkuS5xngCaxvjV2Uh2w7P9BAdLD18jJ5cGARRSeBovx",
  "key21": "2sZmkK2ZF4K38CSCZcjt8AXvY528V6Co6NuvzvXJt19DBC2P8nLJZoWexA5FhXUv1qX4XDLuauxREHu2kuRF8Aj4",
  "key22": "2FJ6Ge5SyC6hmkkhDLdhJxSXhsKJFk5zi4QaVus98dc1JmcC9JVM17Dngbdb5YFwPktptiEvYNCSZrDJBfhyj65a",
  "key23": "5YN3EarNKvqWMsWAky77cah1Zd2T5x19Xdp81SpNRjwxiCgpReALvStnmHyjzfjj3CV2gPhoRXDcgc4WAwWy4AMV",
  "key24": "5n5ZfuruZRsNaeJpDJ26XSn7xh8VHDSf3zAN5nkqDeX4DjJJKVNt9HpVMcptNsX2pZ84b7XFvVha9ujRvt5GzXK4",
  "key25": "2KovnErnCLnHW5F8qxkE42UuuqsCSJjkMiziZJaMvkyjM6AAKUwyW6A8qsTkdsDWwyii63Cs6mVLRsaHvWA1C9Vk",
  "key26": "4q2WpYfonRZFQ4kaehhHNDeDcUy9YGt2WYty3f7iEVWykdtTLA4QuJaMAFCykyHqsw9vuRfXBkK1aLcjWcgSHLoi",
  "key27": "2mu1N8bvSe2aaVJQBCVC4sYZUvqkjARz6zb6do6UiDBKWyd2eYRrqxiYEah4hh271getUmzErZEnf1ocroj55yEm",
  "key28": "5mUeBz3WSh3sd6kNBEhKNRMqHm4TpTTDpWtSL4xANAk59iASesi1FmrEdUGSzXwv1Rv7xgEBrkDLrH5gDJxQV7tZ",
  "key29": "3RFpddi75nEreFqMf8y5oK48NVdr4uMa3ppV7T2zZDJTqrdGZ2GMP3Dfc4Z7bZNbQ6yuX8EduX2w1zekBiojp418",
  "key30": "4uuJoXvDrnZrAepvAwSLuNitwRmSe4KEvadDZU6XqrnDy841brtvEudsNFVb31x94jrHSKKzcgocVYAVoEkUdkjR",
  "key31": "3D1i1wSVEMrenpAv6A567kaLXkmrwMdtHncK53rjfg7DtQVfRtd3KwFhcC68Gvuif3CmfBCBk8qpMTbU82DFrD2Q",
  "key32": "4ykS4p1oSpNT77bbwA5JPPs2gZ4Pw8rpES1ZnexCbEXnKQqRvJKmrrubhg8zjqYnGEpexBtHoLjHhpvYP5qTx3Kx",
  "key33": "5JGSH5KZTW8sLjvd3f5BERKJykghACZmF22DcYKzmrtYbWtuyc3AGUhoSrCvGAPQRfu2fwqtGkwGRHsuHeVHryTy",
  "key34": "5qCbmUx7q8wkV2tX4KGCdSr177jfy2grcmdDZZpugfz3GiwPHLjnE9nYdAxjGdxAJBdkqroJc1yJMwDkufQTNeyW",
  "key35": "3c5VpRSq3M699R2DzfHF3RKPQrLnXg3qeM5UpvgQL9eJnp2XT6MMuNb3tFFdC87gcREmnTuJZ96mRuaNZB1G6XZC",
  "key36": "3Wdt7Abv4amceqzs5AhjsKtYut4ZjYMWbsLDrBnSjPaVRW2QAh4Z6jUDoy7dPsBrkFEH7pybJ1ciNF22AVP8jZjz",
  "key37": "3DDLgzaWVagT161bTtEzz3UDngArmcUsSyrFWnfttxX5mNJuFqvRKqtgX9sQvBG3WVuWF5i2SMBg71g5qVuUBpqF",
  "key38": "2jRfCHe6TWKmRY4XgbwwjjPqQMXaU5PN381YQffnf5kenREeoRxNd6z8jdh7WJjYVpJkRoSXw77hL4GaxyocMksC",
  "key39": "aGHpy2oYi8VYn1rsyfQSKPdND1mNnjpFMDjz74LufnnaiHY1yqDKCxk1wy1aNunwmhbjqi9qmDptxea8L649bUK",
  "key40": "zb6zYVcujneyuLxLAHSAs353vBpCxRL1paKA4RSLC4QmBG5Qz5PCURR97CWY5cdvrmakEowTTVuLejVD965kph2",
  "key41": "5akr2y8BySvy8V6K3LdLQxFckp2cebbS8ZrALaGjGPtL4XH4ATjBx9o6SvqmVNFKPaN3A2jz59QrgPhTRsA53rss",
  "key42": "kpbdfQy46oteNoCzM3NxCRJZQkR4Z6rL3Jfq457mTBqvyrE2QjgBxCt5poGD871mvJ2oyzDfPkHvCdiaUQtvEqT",
  "key43": "44nkup7rZNzaRnWr8d7ZbrDLVyCWVtd7QrcVRhuf57t7t7siHibR5TkAjdD54ZYUBo9pXM13MCWcqPbvqP8XhzUj",
  "key44": "4DJPKoc4mzmo78scayKem3BVD8j6JAcfFjWEFzbFDEucSV5DDrme1xp5ZpnEPcBLdDU5qXFqJph7uoe4Mv3mHF8k"
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

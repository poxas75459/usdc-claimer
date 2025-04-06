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
    "5yaTDbCt1qjBa2j3wMamRx7Hgza5Nt5weR5LGUnZTJt9eDevXd3YPRngCLsbCTurCSU4CCN5HodyrbrhWughdfQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3EiapRaPwMyZdVz4cVG4mVrVXboYeWbVMEjauFYuHe1GhVx85M3Yd9CcDQ1M45gLEhnsw5Sj3Vx377U5GdxM1P",
  "key1": "52zQ6YD1vfrgfKSArTHKmeUqtuqom4WgFbgW8LmPfYUdEKGMZ5RfMSAcLFYEAG6X8S96GjV3iMNCvuwf1mE91Szv",
  "key2": "3YLWZazJ9XbNggt1TkEjza5xREbtKakyfJw9xFtXFJfK9Fygr8uEEo8KfgkQkS2FrH8gbtMvBpPCuLNAnNQ3NR58",
  "key3": "RxEkWLVCQSEBjeTQ4vyvfBmr1CEKsEzSM9iqf2JSDaH1PXz8j6exoMApKm4uUQMgLhhQ6hvPQPTWsYLNxTnwfrG",
  "key4": "3UkrWEURNXbuH6uXeq7voZK64uewqVETn1fpiWyiV698mCz2CK3javGgx93SnX2mL2vNF6t4mAuUgjqYPWGqYoUq",
  "key5": "5rKNySfU9jetuG4dyWP4v1v1EP9zHTxEYdm8vWEQe1ZPbuZa5dy31R8i6iKFXQQo6Uuv9uKv8WLsobxmK646xH3G",
  "key6": "f6uZBMCsk2TCgGrBtn5txN1phpB6jYzYw6KLjbEyP4Pqhph2TPJMyCJ8RcFaQxsP1PoWNrbj287hgNzF8ecPyef",
  "key7": "5qUpWr3om1nrGW9fcLGpRjk7BhRNXvUYc55nvyYKsjtyhordboVx5EGiihMocAwcAZvst3XrNrz4RLnHjgXUqE4L",
  "key8": "j5QZQn4acPyok4a6pwupjmQ4M3DhsVFeta9zAWtz2BH6q975zg2XfB846GV5MTucQ9H9WCXMrs2JtLe4EYisoRc",
  "key9": "5rDtW6cjDLatTfmWX5V9tzrrkoSErApYdMhTWtHvjbGW1Dq8c7xsmJoTDCYywCz3nFH9YGpoHTHrCHGVCHMsDunp",
  "key10": "29gJH2N3xn7fy3ncaKS1NpRZ2fzipJN5dTaKLMEwTnvjRreTw5gPxYrvyzER1zV9m68H3hWAn1igD7jPkwALMCso",
  "key11": "M3rNKXP6qrL83VQnPAetHKrSERZwxVCjWKixtSE7ZhzFyaFPncNqVcWDc3ypsKEXD5RZhu388Y3kEiWcjc6xgQj",
  "key12": "2t1TRZYrFFLzYv6f5La3sU8EpzVNzMMxu9uLkihvgYg2ppLLgBFJnnwhrC2AfW7gsuXuTwEHXT4H8EkpS1Hmpn1i",
  "key13": "29Z3aaixzDF1zcu1gj4udzfsRWK1rHxc8RWAafurmKfwDu7oRNKE1hu4Dwuwbzkzg7ov3kg4wvL6g3LnTEYmQKsT",
  "key14": "2PR4qn29z6rerwBpZaSh2sDEN7UcPqGeRz7efxj7seguBMtn6WcUnRKRL2zLVrFr69S4by9cezwWZh641h9jY769",
  "key15": "3cnX46f5u6mtxfzVw6t1WJU4mXzoE9Pj5t7d5UgTEjfB1M3TuiyXEc5N5TXim4ePk7fpVtrf1QNqpG8JoAV3xyth",
  "key16": "4DqKqaVKFALqgZkAzEc4JZDWNCo2JWXhtVHUXTx58QK9zPimgDG8gvBJUqd3qc4yeE6EcbwiRsymQcB7eWYLu5s9",
  "key17": "3marezJMUPaWAqUCc93LXJGux3aTzJpVAgERJ7jm7rwRBzzqJ2rURxCArXujvVeRAWesDE623jvxtNQcu6yGH8MN",
  "key18": "3AiLri9ZXbnxVg5KNtZoSRmcGvGxKYYicn8kMfCR9Z1xwHsWPmStUcgCbGMmUV9RT5t4peL8mkj7fnp3fjPJkfkB",
  "key19": "63Rgwpaf8QMEoaCSTpdYiMKT22sAspaqkEWXEVWJuuSeUJq91zYyH6Ej2nxBjhdxEqUfuEQNzLZt9AbV3JYg129s",
  "key20": "3wYZe8xGMs1GvHG32ACNwhJooPtrEq4j8AGUh3JRbZV1xdf58244Xj13k8TcHoku4mHSnDaUWDfwmLmrPZjctMNZ",
  "key21": "a9jLmMp991qCunDo5hSpdndby1R875bm6vA2bj2GJAbhTYuKGNpVNLX8dGh7uhSe2gAZVR8f4XsjhrfPpNRZyJn",
  "key22": "2t3aFNMCFgA7Wu6nFfQore59VnB3cnqwSusxuCzGq7cZehBLiC95pjNyy5WFgu1QGCrSAd3LpfsLu8KDkRF7Z6ph",
  "key23": "4Y5GrmkKiPPV3YHgFYbNsYW4QHeUV7hMnGonmUSDXpb2mrfSU9Keg9MLyi3zpAvzp1UCJBSW5r1tw5o1gVNH2zAy",
  "key24": "3moGWtZUMwDBmLKiDuDGFJw8A6rJLb1E9SzamKqngxYzk1G9Du6s1RJcT6tFs5YPKHYgDhTV8CfAt6pZismJAoor",
  "key25": "4jLMZFJ9Mmszu7uun1jqTuvYw636tVPhWYd1nN5rbC1J6Yjk18h2YJoPh62X9Z4rLoo7y39cPryxQZQv8ucJv9Ek",
  "key26": "2wSMC3Rz3Jep8NXtSjNDnRgz9RJWve1XUZbjzR1AQKRXNLMkTE8F6Vp3KmhX4EKo4VC7oykWGQU7ji5BW9Cd7DYW",
  "key27": "2F4PiwKMmqUH9HiDJGaj1Q9cDQDwPM9zgi2p841PzyKXMkf42EqRA1c5gsQ9kk7UL4U4L9VfpKCkv3xgQZJGdYCp",
  "key28": "2kSGBceXVPgmQ1tfUL3KrySfj4dgAXgwqVcc8d5PhfXCYYu6VJNNPmw8wuaEPBzajjkNwvyHoPD2wdcvBm74ios",
  "key29": "5MjBZLYE9748JHPZhF2sjY1KANdPdfkm7o5xZJSYZ2iq6w6Zy25rr5DqRpkUqAQABmhVkAMWdNvxd9eeSV6u7T2C",
  "key30": "2QACgPwsTrX5t93MFDQS5o6cEJjcNtvhKGUSMjddeXYjQTV8n3UzZ1KVoydpe9Lm8vousPLThxcKFCmepwGSdKDv",
  "key31": "iUxW62q3xY1bxfKZ9vpUjnwg9u9r1giUCS6qzHTqLJT8kJhsU6dkSRHYSc1eUxeAH47r2QffbKADJzuV2jfDxGc",
  "key32": "5nbaCT2J3FL7RAfzGxQeydns8Uv6etfej9L9qBPnDzDX1ZSbmxA47BkUbLHSyhLUpKWQSA7urPq46ycJr5WdcqFL",
  "key33": "2Ckw7N9puLDC6byenA7rsveSCCM5or4mygQNqHSQKuM1EU9ZmnyqqKdUL6ruFvmAtPMLK5iY4hBs3Ww5ymokYp8z",
  "key34": "hwLJZtZVkkJHKpCAbLDuziJinW249HXwu4wsviS3175CfCYkh2Bfd4B862QftfGnvFCd1oizMaS5wu922GLKTuQ",
  "key35": "5bYKXqjNwu8vMKpEy1zmHgKw27ypPgiiVtoFuyyaxMbMpVk4Dd2Qhxyo24uD9MZ7oqfPpB2iv26sRkd5qayRvu3N",
  "key36": "5G9iuj4fugGweb1tSqti3g4Jp9EqyReZosmnGPV3srC1EseB6z5JyZ4ioiFa6RcU9FqvQQMvTJEaU7ZECTRQmyct",
  "key37": "2NLSiCbGV4RSWEtTyXNBSHMAru3TjGfwZ3yCQDnJwGtTQFEDRmztQcRUVBPFTvLHqLm1k9UyNcsrKs5pwAURrYce",
  "key38": "bj7aKPsQ5UpZr2MhsHvnQdWHYZ6xa4VzfjKMeasTytDnwVfuU6xy1NaER158cHgBMZymRExm5h6w1qfhrMY4RK7",
  "key39": "3oC7vyERxAawXiHd4uXfwqw1Srs8Sggdwr5NGk2cfft6mSbKXfF9iQz29wtfBDcjuwBKKZ7NU8AbXWHEnkyJ8gc",
  "key40": "3V5CzwsM2kdK1qPbEQYVHYv1k7qEXz51rmpY1imxZjtmBjRrnXcT2zkZmwf9ZPab3xfPb517BV749eowZ62V64PT",
  "key41": "2aXgktP8ENKpbJp1pdKRfitpWAnL33Nyf4c511wfyEaJvUrsNPoCKmT9zkS8jYJx7VhKwCuW7j4tBV61p1ezMMWV",
  "key42": "28he33un6htM4pM3MTgSAF8GTaPPQPVzWVspxbcGHb1dnu9DXjxCmz3FWjdWpMGxSRfA7723ynGqk8RcnBwZs4Fg"
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

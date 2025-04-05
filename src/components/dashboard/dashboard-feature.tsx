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
    "4Q6qGzFtWXRvkkaCG45wQ3RurfDtUoPB16J14S6qXTPV9cHgRNqwkpjrJqCFkge5crfCVR364FzQjWZ22h4XLaB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUH24hwJvAYG5Jppcaoh6UT72oT8VoBRhEu4bwM2FPqVv23wdz4kBwBdGsFtiWiKwzfjLrp2QfWq8Ed7bPpuUmh",
  "key1": "5uipR9zEfr5kkprtE2aeWWbzkr3wU5qy1X9w9WV7EwguixQwxbjYMkiJRSUXzjkMaMKSxhLthPNoytr28QXhkjXQ",
  "key2": "63corNnvBCBvUkSc8ubiwacRiPcJYfb21ybYq4cSzgjZhBgrWEPa1Aqgts35EnSpHbynNDwZRRtV9TMw3oWh4p9d",
  "key3": "5wgCTL939S2XvYu2nDG6oKHawLkd4H8bMSpgBo6q7duhhEyeZjw1CP7xcFKbqhGbQcZPbHxJqDr5D7qBA2wZc17v",
  "key4": "2zERganemuUT9fPcWLL2ZEGTP5RBhs2HWafZmAhsAx4WznqEmCm4AWbe2mYBorLbk7R2qHg3PJjPzom1xuMBX2fN",
  "key5": "5eHGxfEvLeE47ydbAac34ZGwkzTzN8A16jmPL6bZEbQ9noADEEonLiTpmcFBgvnpWtiCbgbSupka94JVYyrrt6xy",
  "key6": "2ZQ66xXU5zJ76BELtaRCRUxjiUSeMuGfguyu3B2x1dshn71aqCZup1uVG7gvg2KYyeAzpNpTJ4yUQhd38oeZMSmq",
  "key7": "5MzexjLj5Y4B5t2Zu8prEnomwFV3r92X4CCKp5LJFverpf24pimLQT8iKYMhWJxrEEyks1Hwxy5t7Vo8gWwbostt",
  "key8": "41AQM53vGTtR3TkejdvLP6GDyXwBAEYSwXKpR8ww9ojueTJWRXV7b7SHi3ukiQU1MZytFFb5RTCLPEzAokCRkTUQ",
  "key9": "1g5cVygGGtBTBTAEAXPXKLdb3oyxrkrCnqbctn8iiPgL4m6erDBFfDe8uztCtjy4PNuUnn8w1AxCFocAuNVVUGm",
  "key10": "62wB7Hnc6bv6iQwdaLpYJ71UDfkqYY9ksZE7b2HwSzzbQGohGHUMsyZUnEMMbhyEWY9P2jSZ1CGD4o5gnxDKN3uE",
  "key11": "5SWQ4fErWjF1RfvapfKU9dDdQHGonHrCa5jhWyszwnPQqHkkokth6Ya8sjsiMxEcDZYy99ZfEbmsXGz59g86FRJo",
  "key12": "33pwJUQiNkySScXohPynno4HHsPwFBASxSG1XzY6Yw742iAjrainSqESNJvZsE4akEJTH1BtFFUxiAjoqm5pyfdW",
  "key13": "3BjXnpcRahSDWirixzENBsn53q1PLPBF1nFJKiaB6J8LpeYsQuGesR3dLJvQSyJqQWJLwjUpcCEMGLiBsYn3yphx",
  "key14": "tv2dskLysy1JPeiJSyQZ5E47dc2W8vPNQLbPcjhPDajvWPfM2YTJnWc5oxZcmnoJTA75jyvT7Kxqzy7pJtteN5s",
  "key15": "3SebdVQPRq2sx16yMMHWYoDwpypRkq2b2CnaYbiskfJnDAvCy89SZEe7yh9BxmPH4AZu914tVuzGtbZJ4QCrMVyU",
  "key16": "47mq5xUfkcqzmpDuuoAbwZmW4pSAby7uKNvN4qMNdqzZpgVdP699Mf8To8G12NKgfDDNJxkP7ZwPYWRrb31rM9z6",
  "key17": "3NtNjT5ozcmJ6L1S3F4nHEL8s3R8VSVu2EoZiJgoCEUgmqNsHogpf1afzn6icaSX9BqPnBPsWtAWdEkMmUjVV8hY",
  "key18": "4MZrvxEh3dhx6LhRv1bCGEejyqSeK8c95AV8mSvkQVjgC5J2u6xwgw7ngTydJf5PTtkujfPvWZbT52KftgcuCLGP",
  "key19": "3vsJdeSrtk2RzXnwyRcaQwWNwddDaoNnvNxZJikwcxtqahgsJvuWVgYUaHzFCEGLZYoZvPEBVchdjfrVeZCkmB3a",
  "key20": "tqBt2b89Ge5tu17QGE5bYMAgGttiwuq3ftrYFBV8Pt5JMwPPJpytvmZMd28RRLiu1sPh28T6t9UrKfGtAiLGBoo",
  "key21": "h8ryeDkwYpBSW8SvDQBM7RitGnuCnR9rAHByfxfuVZMKwc1ZpQ3jBst6ThVBEmezogEfRuydQ58rGKYTyjLwyRF",
  "key22": "38ePDWtVQiCUnMx9742cXBcp1ES2VuunDmuJY3Fqrc2zPBMPaoW5iNw4gjTXrxdd239QXf5Bx7LWv9x7uJzGSsFe",
  "key23": "3PvQrdsETkiTgxZUaJeNvdxnnNnruvMgBugv7oaLa2iY4KRK6GJ8eYLGpMQzrM79CpqgBhcgMHWmnn46nKuoKHLu",
  "key24": "4kHxmJYK3J1NBUVYUcMTW9UhZSPm4hitm2M6UDb6tahmn3jGVzzhpGZhM3UU5PgJocpCPc8QZYPcN8hY4RiPxSU6",
  "key25": "61iGDJu8J5pJzjcG6iKZJKVRbr4p56WyaYM6XefFmtpexTqiE2N1HrZ1utngWpzR53LoARRUeYzz4QfeE4rhsn4K",
  "key26": "jbkjLuag3kBJSfwJuMxZirtRScis4erLF6nHi5tngYPvEyqgvf6sGDuD94bpMZ9sLRvkPVtSSho5GQKSS673jTA",
  "key27": "45Sc63mFBSE6P4Q2GYVmpPZjoQdkTvJJuWmQedDsPqHCj3v9N62abAndFq3FAHLgpfrDWwYMqt2qRgQnvhmoYGd3",
  "key28": "5XPSC2vbwwddNk7mmKtzihcveM91ZzFzhfRGDprydGgMowDJn6qkP5ikjrPXCmTSacyh711hVYVfXRpM32vGmhk3",
  "key29": "3y93gxpX9dtRadQuTh9Bsm3Zv7ipmRhMxZ7or8bYDePoPVCeE2A9hAFkuAMvTpzz9w1RJRqJknNmNvXKXRwcswis",
  "key30": "2H6BkWQFxuRuJ65AzBQAESTpwqCeZNHHK98Btkne6HKFCsBGEQSPsHZg9o77vzQ6dVswzTtoZ8Ev1aeuiRoVNgEj",
  "key31": "5Ng6BEU9kmLahUEAv4dj8Wex94rAFmuMLTKthbDiUxtEwRc4hw4ytXAKhswUAjaLPyVunB7gLrfd15sHUY37RxZv",
  "key32": "4So1aR4GxK5MBiC3CwXVND3MKgy5cr7DZeajAFxKFTrZSZ4tnV5AKXjpZXoz6m7YMSMVpW5GgQAypxfQGNdiazz3",
  "key33": "52VHUrDiY4EmbZBAmW9mXQap5LhxvPs1jyRmH2SgDAebQZM6sscrvnPyNRo4QzCqEN9LyZrm9RBAu1fairbhKKY3",
  "key34": "29SkftG5ADczWSjiM6Jg7yJrGnjcjtuQxz7YxnyiZtPxy7XJfW6JD21qc8w53tZT16A3MP2K3pjHNrLVyj3N5dQj",
  "key35": "64bUPeDyPFSXN7Z8MCzAwMNhA2q4p2rfvz5vp18naPV8sUm7sgjYwddExwWFXjpvp7tGjPDSP8CbEEVnXXf7heEJ",
  "key36": "5UaXReh9DpKX6rx59BMNWFKMvHEpX7BC6DhFjsHS7ACizwb5hRVsLm4e4iGaVm4maR9yRKgBvRvfhpFa9F44DSTu",
  "key37": "34fUQwpTGzsvzWEuuM5HWBYXETVtQZJwtBqU4GnkdH4Mv1pgijDrKin9Ldp3DVSMidtDfMmCPcGvgxBrxhQSYRJs",
  "key38": "3yP3Lt3QD38C4cs1NEQpXq3vvrqGQX7hpXaRBXAkRBnSh7AFPmvRpr4CDVC9iZ9skomC18Z7YoCkc4hNyVcVdMN7"
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

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
    "53xaeCdDhkH3WprviuBXNDeWpU22roDnyyKNv4fYzr2GKWBSWFVwFVy5bYoVBf1dZrXorQNYwsL4TfJJwQDYDaRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QwZTf1EUX7rnQ97NVJqqsQ8J3RhviQdCKxd4TfiLBhnXS44zwna1Jftu5S5aHYfkp3AXMvMzp9uodqjFL2zN5jW",
  "key1": "4XJ8k4ooc7LegchhvZUH76JpBrtVod8rLbSnddAgFWqvYq1UmiRhaFmwdqzn9CGUizC7GeJFLZeSyMNXkCuy2w8g",
  "key2": "1RgwSVMH3AxCncgDmhwKG68fSeLsnfMNde2zvrWjX8bTCAGreUxMmNkU1nfPtPLEDJ2ZjraeMwUvqTEZrZDB4Ni",
  "key3": "2REznVJ7XzJNXBGojAtF9nQ5ajFhT6YsAyfWYSmZxMA6UrBqfHEwWiC7etbh1mjgWtvHB86Y8epL22xJzUCE2sgg",
  "key4": "46Agr3A5hMFcfMTxWXvVgksmqwTYHUAc2R25oY6NA8EyVDa6HgeCJjWQYXRdXzEwufUvgTyFWxCwCdMjrJwWpgbt",
  "key5": "5P7VdHehuTGhXfJ5TtauLAXyuk5xmZeXXuJN7c9xFZygKgHDY8f8gnKsvczhwuKHP6JDKAXQqb2cZecr9xXxhS1e",
  "key6": "2VE7rJSU9iBTEtEEDsREassJxgssYH4f2z5GwEUSV3ksNexJWtsv7mnmpZLGLZ4VYigu4ceqU5XK8GmpbaMz4F4A",
  "key7": "2YQ8ZbuaEezsZuBS6MgsB3oymSD8hNrVZfrM96pvJrTkUFYfEZTfBFgZyUGxwZtLQ9bQkuTq2CKAQBbMc47z7oLF",
  "key8": "4Z7xvURbtU7HzTVL4LjJNjiLiJbyinhyS1hn4Tmm2xjS3kLZ2CxytXUwNoxLaYxTqLN1Es35hdeY2CzGvzAkchdg",
  "key9": "3JSpwnLZaeh68KBbHDJPdSgegVfH8PAe1UqmSypNy438uzwTvMchW6gT8MSdr2WZwnA9z89j7JVW88pTCutt82ku",
  "key10": "5QQJ1fHv7q7BKWHnzTyu4DXJBSQyP6bbBw1DxeqB7XTjhLd9mdH8iRCgRJXhuu2hw5xC1DmRiB9LfYWc57Xt5XWy",
  "key11": "4DvmVUX8tBwfoZsLCfVkWXXexVzQ6M1pS1mia6Pr8M8hZDSYhktGyZFBUTMyjM7YfhUiaXMShSqs7gqggiRRMAkj",
  "key12": "4sArCEewSVKEZZgN3bSGr6qD78hMFUPm46D27u618xLwshkahanVD8CxRLwyEKbFm67Fiz7JUz2XMo21PNX7oxHp",
  "key13": "3SgMKdwYZh5Ys6RLjXgqMrLbegzoFmSxnGm7ntHGWvBZJC3jT4fm1ZE5aoxd8L6Ag9qzKCJ9CZBA142bm62124Fy",
  "key14": "563nYHDgyepLs7kVQQvSXx2MzjejwRyUBoGCsMnXPhKQWHQ9tuNspSxgcra4TVgCMjyDKh5uoHB4VLUuDsYJRSEB",
  "key15": "3u3gy7XJVEE4mmnUYQb5F4qRGAyy2TRVdYvC4fLDbyHd3qhFZ7kvaqEhCKLP92SdQ49N4iq2ytbCGQZaiBxfVXgQ",
  "key16": "5yEy3FPXjNcbxvW3FL3rsNecij4JmX1JMhkWEQBiaoxChtevrkRRzPLxMvg5BrgbrsGH9HBHqHFfCJc8fTYH5qvL",
  "key17": "62dQyfwBSBVq9g9LqcGHPbxEjhChpayFHQWgD7wDsarBWPjyg1zpeM34gmPUvujwHhoqToXx5odLSoUwUzYFnSyF",
  "key18": "2swKo5H8DaMtY759xKmeeZYSCc4JGvroiiPjYaiNWrVAfkRWq4gRrtNiPDwYHKq3gXe2LyYFf23TiQawuvadPm2c",
  "key19": "5BjwfteyK5W2hm7p9mWi5H7siz9MkW1KU1a3yyba4fa5oKGSCjGUv7y1g2nTWonEPCCwGiKLWi2cW7aVSUqDPRLF",
  "key20": "4C6eSCb31vFd6oeynGcrKkS4ktX9FhPUhYebfQQG8a1oDhkFbSYBLoBDgMVLyVq7Pn7LZStJXh3KqtJLiTUGDd7g",
  "key21": "5WnwpuoQTsAhhQXk9easJjGxWonxbgv7rQR8DgSgVWBuBMy894ho2XN4LDi3Z9r9TGgL6dk5JdrxLQqSy2dvpegf",
  "key22": "4mLJda7tJqzFd8dHkAm41BaVeVSrtW548v6m42abcmc2wMurJXwuUDVjEN8AHrseCafCauFJXDdzds589YzT7PbX",
  "key23": "2ixMhiCEin3n5UaqWAxyMbcs15rvbXiK7xEjP2had7qjKwdYZkoHYfpYEGk3Vsc7KTvVPPLbfaKmA6yNvy1zpvBB",
  "key24": "42X5asZeDEZ7yJkKbn3nWc3Z7vAM6dDDuLSFoppTH4pT5DuynUfR4Sfe2GUfN1SyFM7v2rcf3AsEmmuQ3NiqgwaM",
  "key25": "Tp2XQQRQ1pjwMgZVMhg4uU5xc7GKrx3XTP73w8W7jnTL1tfLH8SCVHfEqJKuzdWNKdWtqQZPMoG9T8PiVcRqLUK",
  "key26": "t9PfjC4zV36v9yR9ySteLUbgVzhGCArbjnzW42sRKBKbu9FuZtgEwc3zQNK5FbT9Q3BAL8NqVckEEdFzjY4qSd5",
  "key27": "4o8X8Xs4Amz56KkTBnHuLYx46WjrXn5PervUDZG6BAE6TvemSW4MTdCTyoAGc9FdFsUUQS96ZQu1RfG8pYAnGgyM",
  "key28": "8nkwexyFxYFrKEQHCutHa5qMQa95NQmk4vV3DYFwpqPvCdBLnFLW2YHdECCuXRtKJj6TZVhdJYqfbg6mvPqPJPT",
  "key29": "2c6ETSs4MW6CEK8j6vnWksAeVLRvWMVbVs3RxQaHCo2qSybAmHJyq3MvimPi5Swkph3vzMysLQpv2T3qJz4VfBsV",
  "key30": "3D5bsy4pZYVUb1UyRa16WkQjzpMhNvponkZf3tfzckdZfZ2k5haTdjtQ3XtuV5xBQtaUpqezs3ykFg39sBXzFAFm",
  "key31": "3k2uskTvxCQGpLy3SvVii5VvLPeLG5PkXJMRKnwnwsomsjKDsEJbZTqGpu5qasY5X2ddDHcQhH3HqquwdSKENZbk",
  "key32": "3knAz5Ke5GszsdhhEsZVkHhms9wk1Hux1CAhDAFuSgbnkPtYLQk2BTFmCotAdfg9YLhyjuLH8APegE5KspHP2euW",
  "key33": "2wUceiEjX2s6o68SQCumFcUyfyy6sVkHqXgdpmTiUsdS6JGhGJ4NYLFdjersSniKk8vyX5Bnb1oEeNXkFrUVBqrC",
  "key34": "5Dk2z2PtX8aQWsYt8uvcdrjsbFmgCBtKJZhaQBZfPJoj6kfoKFVajnNpKRjrURvCustZGPrwzFTbCbG7cNzigs8N",
  "key35": "UBJM5pSE44uSkzVedfijjGgAeyo3wRPxBBd4t7GzjxcUS2U9cBwYDK1e2rtYCktrD9WQ8Xiaz2gYvFBq738GDYu",
  "key36": "4kMouLUPKMs7NsMr4a6PfFPYGQpDCNSKKm8ezkL8g7Ye8cGEAc2EbD15J3wyPErKGPKc7VyEfnG9S6mboGw282qe",
  "key37": "3X4x1bJ3wUi4P12Mob5tVDPmxKWgLZ4UXN46dXGyKkYPUdZnknnczmLbbAVCq7cEFbvX7QcGprkNoDojeCFMfK92",
  "key38": "4ogL4F1LqgM8q7JYTjEqVRw4bs6QBePjiLn6EPxRokPMAxP22TdZJkXJx1mKbooq6KDtuP9ba4rZDzDytuyieB6B",
  "key39": "5b28V4myUjqMNrCq6k8hWxdYbsCCwfozWx77X1kFz4a9YLNwspnehRpxyrsGoWFPp2H8zRwDFwjgqjq2pkvtC63X",
  "key40": "5N7ypZRV5UwiqDqiWm9uM62eB4r6WA2QNB7essrfB2s3rDuprJ8Ygk8njEv2ZUzWGJKCBuDp9KnV4W2somoNzrgm",
  "key41": "5HUm2oo7GttADqqr3oUetaQnqsU3SS3ywFCzHqzvZ3Zm3TNZPGqy3KqkiAaFBmeYgE7enRdxyj4avDYruf4ZWYos",
  "key42": "64sN187sUunt8k3aS4gMwLJ3H7YuS1qJjnkS5hpoRSRT5KHDu9JQAaq35xfG3RGpdwY5tHrNnxH2pkU5n29jSz6j",
  "key43": "3GqY82QGZv8gzeb8sgKgchbEeX3XFKSNk29GTs6DjFrH673r9UQtpA5XqWseXJ1SEsZtFFEzKf55jdyVB9u6fjvD",
  "key44": "3QL33KcfftBDxu4HRC1S6Q2ciMCTKTJhrZhXpmZFxmDQkxK6FFciTMH3SnGuBS1dbZc38NA2Bwu8YBgHBD3Sk31R",
  "key45": "4zQ1Pot9NFRS2XGSTCTgQX8AqMniQh4JML1nH38XbUCXzZKaTAMj4uRj1TZAXbSrv6LvAJYYGwvnhRPrAK7ySrES",
  "key46": "Gx2TWznWREXfVBkGctKyvSGfQ9rQ4pMeDESWqLQWQYYrBHJsdQkH4JtP9BgD5bq6C8Gh7VNtbZdpucxpRFnkJke"
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

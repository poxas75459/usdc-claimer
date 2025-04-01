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
    "5LpCZZr2Un1PZ2EyKLpyEYTct68wSV1ynDyx8pUWhipaP9PcV4dBiLN4tq9MVmEvKrBtdnsTorAWKvdfkmevX4Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbfTbjRkJKeS1opg46ZUCbuA31zNB8vuhkzRivAf7dQ4RZp2q6YT8qScuyPq9uh2kcQAQ8buAyostLGf54sL8hK",
  "key1": "3sWQWxuYGk19icLmbSNrXkt1akWpjGnnbTP2MmTYGjNWQBrUz2vHqKmoTYre4bu52nnjhgYVrq4xNqvFcQbHw7TK",
  "key2": "3KKhscaw3RjuBWpcVn3DWgYpL6CPAss9v889rebR2hvRg6MyzZcxRZQduhzRsxJeQfECUaabzFK1Wue5vxKyvBst",
  "key3": "3GyiSwt4if4TAaPksEgEvAR1JtT755axY5BLvKPmJUfnaxQPR21PpdMFGmw5UvpkQLvnZrS4fLdoHjwnLbyG2gFe",
  "key4": "4zyeqxHQ7WyW7zysNXdykbf64u9mQcnZVDjEn4PLL7Rri6Gq3mFiHgcYcVmfspRyXdtEStNNFiv2QMowsekagj5V",
  "key5": "62kxoZqLHPSvEHKYJu16gqoT4j8uMuGBSo5CaTtL61tzrn3LTVeMEkiUNvm36YwrrLCFc6tNHy2hB2sHoEmg49bm",
  "key6": "xKwGn1pZcb6MZqjnF5fhy4XTy6zZRsnWi2FpiMvCAKTYj3BUnvR2TRRSKaB5qCiX4LBHH5ytvA4kAkoD76C3xhe",
  "key7": "3hcHAB9Qc6s6xQ3FdXUqAePgjiDgoaPoqvCrfq4WxHmg4QTnx7EH36DhDW634avC7CpujGfkWkyfZWzqhByHntPM",
  "key8": "owUC4nTV9VqcmWc5XZgy7xvAiY8kxkTqmLJ9PULPy1UKBBb6QjccZQcXG5ZXqxnFdJ7tkd6m4LrAgWNKWTzzp3E",
  "key9": "2ncFRozt2uPpM2bUxbia652u45nBTtiDFTptGc936U2Hk5yrwLi7tkEQAxe3ipakzJV2KrnedhkdYHtdJZajsFh9",
  "key10": "47DZJ3e4TZZ6FKbUUQZUaBn1Qm9QLrjpN9cRn5Y5xggTmg8usryKnTHWZdiAvCWR29mJouUbji6w715MGxCG4ouD",
  "key11": "2wYeUiWNXdrqqCJnS5NjMKt2VPQ8J9F4YLkrkh8NudaUBG5Q44tFHT9Z4WKJAPyTuM6DGTcz9Kp773f2naQdUidh",
  "key12": "5xm1aUp3fac6esR6Tc91WzfMRbNvZpRxf33MKXfdT4PXne83yVQr2NWdp7H63CtdNTkVDMQ7pphdXvvBRkNd2NKg",
  "key13": "59YYoLTUyd8vneHH17uxt9JQ8PsQ6rJyLA3KZGJPfSLqXSDXPwadiVUjNLMvN93zwzngcSXGWQqjukK9GnKbFH7H",
  "key14": "YrYhfqS3Q525o8S1QivKJkddPkrsziGKwsccv9goVLfjAoqEUue5GKaM343JgMwGj9Dg5Z2r2A8JFC9YCt449zG",
  "key15": "3RNhLaXReXGV6fzzSpBtnAyGf94hnTU1DBkRTXdWNvWUjC7K4KkHUqEFBho1uEHYXEye7guZNADZVTJYTXckzeWy",
  "key16": "57zSngEaErNw4bQL46ay5WNmRHxtDoGJ6zTp1psGZryXxb1wWzFQdG2hqK8c1KpTaVRBHRgVc287AHyNVPS8UyYv",
  "key17": "3QNoGKrtUGcrCWKM3rCGsKCxgMynQfaoxw9dkKNbSjCBCwqmiSvNdYP6jJPnPYVHZz8Wr8gPwaG5MSJ45QGUMNiP",
  "key18": "3sMSDcC4NpXewadxjTL3oXdKkStpyHqj6SH6XYKuqnZvc6X8SoLYZAhiFwuSUw3C3jybH6zy5xw5p81XpWBkcEDw",
  "key19": "25EuQ7aT5sLgX8ZiJqGdb9sJBbau6aJw3CV4K6DcrcXDiUXEGeehxQ1BSAY8STgYLJFgWBkpPeZvmtZbLXVTQ5Cc",
  "key20": "3puwnSDHFbJkAKiUQad3vzuBcG5MKgt78SVvoQxmVN76QTVJLHiiNFR1bSyTwg5eaqE4YCo3R34zwoWWpr46rVbS",
  "key21": "5Kn4VJFPtvZ9L7s69fegtWmxRKHrmm2iWASgaJpHCPBVGBBSo6q3RcCR2rsvCR184kwV4kdJQef29R9nq3eSiHdz",
  "key22": "5RcevwP7upuvoMYmqi2r8QWRMqPoMuQdkEWtmcWLdosGmwfuz11TZvvLx8KwxAoqaamCSQfRmoqdLSDKxv6pbPxb",
  "key23": "YYi78GqfULLT2PqiBNoUrsGauhm6WuMUHCJZBB9eNLnFaRNShoyR88r5C4yzRKgKU8N8L2E1TpALVi2kZKrmbPd",
  "key24": "4w4FpAKPfDESdBnHtpBqYHchsL7dPxo5ydpreUjRbigNRPM5v1s24ApHvQ7gCGTdQU92wiw95bZow6Cz39YPx54s",
  "key25": "fb4DtgzZtzmrLuoKk6isus4YsJn2VAzrsxUZ6ZqMoxHUx5Ti3ZEU37EY2z1PbwxtHwNfcfdhGVVeeYMqxQZCwKn",
  "key26": "5ufPCwC4Xh4oNWxiqmXXQLC3T4JifnBqauNMiZC6QZtK6BZSSXh24K4yTgkRwJeL61SaDcP53uMDbmQzj4EiKM5J",
  "key27": "2Jih3wEXKtcnXS6FNVrQdHHvcGaFm25U1gPTdsgsBCo65pBqiuzNaKwinanhDrKiQ9okibgZsyz1EqyqXnqyv2Vr",
  "key28": "5zfyxErunsMmNFwDaUgisL8aBA9gkHXakQmwLZ2yuyiok7PuFStvPXJ1hD7nvb93vQyJ4esQBND2J6rmMdyrSbgk",
  "key29": "FuN9km7k5fcQ5bvXPHFGuvx5sSo6qbkoiJWLqqLyP7C8mJHnHe3r1gY1BNy7UQWfTa2VeYrQ7sTf1GDjVZxiS78",
  "key30": "4nxqf2dYvsGy8ZnqnZyDkBuqk9fpfnY9M8pmN57VpHM99CD8X8HSCZsXKaop9mBuqBnS61jekiVcCgGfVsjhWzB6",
  "key31": "2cvBSdv9qcGBgj4vvAotBYsh4VqqPUqnG5ju59StboNNQ6pWLihtriFN5MP4yWqLcgdBuHzpKvfYFCwsL1Rv5VLw",
  "key32": "ywsdo7fmfcyir29KhTeHG6PHCJEpYjQGkt9kATHDRAdGSQ6wpQefdW3ekf12knPkyjx84nALMKYAivu3n86Zk4V",
  "key33": "2UQZnzCKhPuKqmd74tP8HB7JGaq6WcoFpnV3boxmSPUhJk4MVoRtvEVCAmJBipsCRsj5E5SgEVX6i8BfXTW84EnZ",
  "key34": "YjNuYTkHTkBaUiAzhAntoKgVFBEns8U5wk6UKNHkmRjkkqhTK2oCfD58xU3fKh7EXBozGgEWVzQ3gKwwqdkYmNa",
  "key35": "4GbWiodoQ85uiDN8kKQmSHw1Ggbqahyr7jfHg628W1AX3VUBfuh7zb5MsmjgNTdVriTyPAcdAa5b8c9bx5raAopX",
  "key36": "5pxo2evyE47j5BB8KWk764zgxYHVyWhHAxfyv3jfcfYNbUrR6rdnRyrLnKB1RBNYoTBx7ofQJXTYfmEFvw2sQwbF",
  "key37": "22j38U9QoE6C22ttBCv8FbFbybZG3Zosxqj5yFSoHERxtTuHPSYeiXNdN5djHGStHeWqLzg2mJdP5kBdnbnB9uQe",
  "key38": "26jkba5kYLL3332b9fS4gTaXsNkRtFCr593ieh5MHoyD6J8QenzA2fc8C3deYHBd4itfd1V9UAug69rXfYXeD793",
  "key39": "7da134J19F3M65YwUrKzvr9dAEzUirqNcnAKomvz1p5phzHkNnf5wFoS43MWHBxeLrH9NMQXPDc91JxN2KXVFsJ",
  "key40": "2dKj3yPq4GPbSeXhiFnLNLfzWtRVSf8e6mZzj17ZXU4ug4kRRWnVXX4F8LmyaewWBPjagEpLwZAsEZPjitZAhwNM",
  "key41": "4myM7s6SektMmsMne6gHk4ifn8Eyf5YC8pSyiB8yXQYbobcQ4g7UoNLxfv3rhw4RxZE4BUvExHQ9Ex38SDX1Ltk5",
  "key42": "tojwggxR5AvbRK5dxxTjMfkeQZYHKiKkR1js8yGsm6hREjC7NGYXeH2jiwBemJjNVcwPi5MHwET3aUFyAbEfns7",
  "key43": "bUQLHhTgVKAyragBRqEpMGzDh9UdexopMBURXhS3w4zBf4VXYo5QpDs1B52DBLzegxx3HKijvQC9iwuv9cdeXzz",
  "key44": "5ZT7jQYwJHFXSe8UNvthwoKHEUWMKEVTPHM4cDAT4FS6mQTw4uYPQwDxJSGeg3WGqrUsNaxxm9z9zrZmUSpmu2a"
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

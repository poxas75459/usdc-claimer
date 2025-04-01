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
    "2LGSoNPwF8Y3qwE1M5agG2zeXwfFXxUN9hPfiuv9JL5JcrvdE7RikDMciMLkWdZ4hPQxkogctRZnoydhUppk3Dou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSRy9wMRrGNwvNJoZ6aa2E5gfeivXSSyKPCh2GfLDLMX5TCfY18n5XcPhFCaNENxqDdHzWcGytNmWq4nJ5Bfq3b",
  "key1": "XFDsuz6VZvTVdKaeShvNvsSpZRjtiTST2WUqAPF7xWmCfPdQo4y7hzPfcRrNEWBk661yS6y7d3WYd3ycMoCGrgu",
  "key2": "2q7wtWjknu3qhn5MLRnuVgrRVKfBno6fDcmunS3tZqeQ7HhQjhGsTkNDz68Sdut9YWYgE912mKZJiJ9eS7tMEPG2",
  "key3": "3krMMMJUnKV7eKLQg6kyGp4e5CMvoFTX7dZCw7CgavGmv3uYtCfdCK9V12zNxfSx83FYMMH2soDJGruzNSkjgSSB",
  "key4": "2hpRJyjoT5S1u3hsdHe7GYHMDCV44QGrsfyvKseuHKxcCMtRCybpUA56ssSv1So8xRHrwwMg6fthjznCKKfp8ybn",
  "key5": "KF2MyXgi3ropB7Uigw8nx2YD2MoazYLGndAGid5tHYFeGiSZf16s4eJsaDfwQ2riqoopXxczPdGoRT4qLeTAo5q",
  "key6": "4KiQQitbcD324jr9XxLLiG1yjvYNsJ4cBgJhdLmNXAYqS5iY41LSjCiQehTGWFkbnTKBZJpUrFXHVnFJgD1XwzGJ",
  "key7": "5cUQN4Z3687bUqYovWCNx8PtSZDRzABvBw5VSfDQdpn5WnLyE3dD9yhsmxEaQ64ZKDGtLX4pxvRv3ja59pNMDuAJ",
  "key8": "3UpN4UF17ge3waCzQp24xaY7hRH39G32MhxAkbMCDt66RkXsKenbpmdKRNR8YYbjaSSHGg6LnSydk1SLMHsfdG1p",
  "key9": "2ZrRdYJnEhLaoRmETg2QjHcQQRTRwTNxLKaiUy3BkGQVunMyrU3ZQiXuMJ56Ue67eGrFsMuFx3pJpDg3dKeh7akX",
  "key10": "3gJTSN3CyRwxe7TtxqGpTxEK2B6ReQA6WbYxKA6uVsapsFqdhNVsHSDfw4dZAu3ZzxXQjYrG895qzmoJAZCD8MBs",
  "key11": "3duVwpyNEQMM7HsvuFmmjzocnG7u8bA5fSko9KuqtUUMbdepCkVBHsmqazDaWCCaVsGEwMW796n9GnSDfDjT1Mao",
  "key12": "Y4xcSvbkwg5KaDALHj1M8iE7vYpQmgUkfq6dcJAFQ9LyMwNwGeNJcAHWnsaQcS95W1RHXK7n1YfAu1MfXWfrw5j",
  "key13": "3iRsgtzLQKQMWvp7VmXbPjQVqUhEJ43MtFaJa89n2aoQg6bmSQohvufDx3KFC8nq6D8qEqxprmrLuG3uwPxyhQvt",
  "key14": "4TNMp1Cm6EcBSKxxifVXKsHJK4Ff3vgqWF9i3JgoZfGCYuxfRbD1x95vQnhS82Z8pgRNQJju7RVvrPps4NDzTKLA",
  "key15": "24bnoF6j5zhCPQaNsoks28HA3boGVBvW5mPc2ihD8e4E9tt5cVxkL7NNoSjqw9RhwVoEsqoQ6aQhr3rREFw9ry12",
  "key16": "5d4sEiSPrJU2Uc54cStW4tNa598XSZ2wEXzd6iEL553bBmvoeWc3Vf4cPCArRoHATgQfcPdQWKHn8sVMKsU5N2dR",
  "key17": "3TeUD1QoGtGYMAun9rHRJokCU7aSSeyspUMBTX9Z47Ty7uzrNXw1WjxQePXf5vbqJXHaBAUpNpPJboNY2wUHrv5e",
  "key18": "5Qhsa7neSvxuvgAzhNBg2rcRaMvJzN6TtpUCUPiUpjXuJZjgx8rucEnmevZxjMkCNu4KghgdYz7zjghKmQfvVk9v",
  "key19": "3eA6HR5pbr4RokNd16kUVA434kUJPDZCoqM7tfHF6uyX89ECR8JkyXcnega3VrSLLF6gUVsMRLbEbRrGpY2cpVFp",
  "key20": "289oT2vQ3U9QyHf9w9KXpKXqHboyCRrdpf6rStMYZxB2pN4cQeq5VWPnUurqq4Z7mZogZyk1L5CexB7p9Ard6hqM",
  "key21": "48cHNkQrM5DTqEwYWwwFoBEXfgvJ6FEZPcH8TAa2fF4BkPfrSsCxFt58NUhgNA8sbG29xJPKgDVjsbuPmfohp2HU",
  "key22": "QCqtCtcHVzxa7posZsjiFb2ZTPK5bBX5WtM9ixDp1CQjotEHieakg7eXaa3Wjun7JPGgxHZCDUmfgQxVjGX6yFZ",
  "key23": "4iWDRKURjQsbbKdUQHXWPKg4sjdmsgWgfV7giWWumaiHEoKFHnZULJZYKqXDe1U9gGPG4xmBNJgcLtJckBDzzq46",
  "key24": "HHfdVxcECuWdh6yU8bnPp6AqNQw1prWDXYqC7nTD2koksCrx97Qtido9URLc7ih3MWjCgMFdssZtAGTJ1Zhpabx",
  "key25": "51ipQkRWe9uQFhmBAxNSrvYMRWrYRQJV2JizVMXsxXEER2FfX8GShMXfDZGDbaBgfM286wwYec8Tw9BKGa5mPBvv",
  "key26": "5p1WoyyusvvvKo5Wovgy9Y3yQkRF7cf4zQHouaA5S2RV1YTxVF6NsMhjZKNxmUKs2MyVX6bgVffYK7DkhULfDoBy",
  "key27": "3UT6SPHpK73cECQWYyC1yKJEPDTnmAg4S7o7ixstNwSRY6LJ9T4HtipmxEtBvXQ2XxG8BhZzxkz9zY95FZx4YM8P",
  "key28": "5V9JBSaiJUykRwUGvqKiFxB3rJUWvsQMsmRdDK4PwmnpmhAex6qWNjwx8UB2CvPzC17uWYFkLm2D49VDH2Cty8WT",
  "key29": "2ydX7rTHNPfssmgYCJXBz8z3krMmkBXSnLNK1JMbBaj63D5UmNCp9v9muC2JLEPa1L69QUqdzfLkZQFHozRA3e2p",
  "key30": "5x7AiBi1Lb6mt2idUGX8NKM9jkKDmDMorV5Lr4YfUh4c4peZPG8wPeP8oBPn75LxCKcRkqh4YyjsJEa21prHukrj",
  "key31": "5VHd5jdeDFooEF6Ho7DBsZRLUqQhYB4yZEaE6TxCcqxgRv4GCWfkGCGepR8zreyZwHsUNHtjEDqibrQa7GjqiZ2m",
  "key32": "3kuib2vQGQBf3Vr1dbi3ACbNk5CRQXtwkChQjKb9GRaLjgqEKQHqCUd2yyrNsXD6hYiq2WnVRADY2c2Pwtr6jcTv",
  "key33": "4BYDCbiMJEs1UnYMruE12uvt1BG3LvsPvybHN23o6Zoy5zqMi8y5GWdDrwTZAjAmFiDxJJBqsZZt7q1GYXn4f15a",
  "key34": "2qeijh7AfL8TjamxxwtLcnAnFEJ1SKLG1YBfW2n95XZFMJq4Fo7Rd3Nu65piibookMu1dGGRVsvhda5p6EA6NqTG",
  "key35": "43vXNnLCmKonqifjSuCGSkwdUsVf83h1abRk2P8JvPUy6cSi5vHmda1zm1mLN9oXjZADo47j7z21XaRo5xce7M7r",
  "key36": "47nYsvteoWkYjjsfNnXf8DcEEcGSyT3NAuHhL5AuTNsbdMEBHDZS8xtpkWMw5raXfx9vaFqhv9bbwQqnfKPRLz18",
  "key37": "3JbJps2Kad2YRUNezSD5AsEaWLLaLGYbQAkYaAn4L7Qht1xtXAnzFh2sRdwihnGWgH8uZbQ1ejProVVrgYEfG3up",
  "key38": "2ezeDRnEBvnJgquFKR1BucraDZcYjwyY4ZWU6UT9x285TaSxccSwntVohe3VDrF4P1xqsfjWgkFh2tucxcUtQb6C",
  "key39": "S3HzwU4S52KKDizu8YUMvZ9irW1HYhzVbdSEyZpPaFuL8f2Robnsx7dJbmtegHzEy5pPDzCGYXSqmoi3VFXmMG8",
  "key40": "3Q9XcE1gGAaVGhUWT5jFJJrhAjLTpHLRxT9R6ruGxB42AYBvV3fbZsWMmd7C1yyk7zh9Q3CAgemPkAiqBRy2asN1",
  "key41": "57jbKLpeLcDgoo5j7zAQCwwMf3FVCY2yUbJvdksyXPzCKJb9iJKhPZjz7FnQ8Mtm9DKGiqrfWTWvofMwLFn3kvqQ",
  "key42": "5RX8ww7ktN6edNshwj46BvRLvW1qrQNZfgCGyaA3pseVQA1GiBomHVQk2syArz3BViZAFnf8re8uw4R3Xr3XsoH6",
  "key43": "5DeiF2u1r3f1DxPAXEXmcjfinvjCVat2QJgNfL27J7ZryPrgDKzEu3fPxq3AcM9MZPKyug3LrXJt5bkg9fcgkgT",
  "key44": "2UFdYP7ru9Va68exR2RpeAbiD1oUVMr9YWQw4xdu4eLBn7BRpLW8guXCZ67bNkNVXYkhtGKiibgqshgQDjSChaxw"
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

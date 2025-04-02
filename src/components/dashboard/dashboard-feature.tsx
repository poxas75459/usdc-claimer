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
    "4ZptTw9L8rHAqC8BD5FPiYi3Byqj2a7PzZTJYextVZKtggawTc5xvbtsM2BGdS4F1pfvi2UXWpDtdSvJ5jrQ5BQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c8avFHQAotd6ZgAEtjN6JJK3UNXrhgrZW7hYwjPNSCboUYqLaM7SyNzhLYj13jVY7vZoR2GtounTRtHGMGiSDc",
  "key1": "4H8hrecUDQMQ1kz2VsyAUvrUWAfkkfECBtaQti3eJfmbQFneSb1PjofRoA1GNmepmEmAY6c7WMJgnbkgDduaYC65",
  "key2": "3KYpJ4AzZMVipakpu7rjMo2RHKz1LV3E4s8NiKmWUqqWNc4TDNpeNptmXRc3nHCFvtyXFsJrtusMSSFTSXdt6jc1",
  "key3": "5ankYdTmd8xKuW314Fuwn3YSyjUuuHqHpuXecrRZtv17G35DaWbjBbCh6VxiLxtyn38oRrVWatKgd3tByACWCXZY",
  "key4": "2Q5EWgsbSXb3MW4kbWmxweTgknVvVHfiGB6UwVwirK4Visxd8knscdaWmbohSdKQc58Gu2KwLXy1KHs6fdzFXPuT",
  "key5": "3YNACgnrsfmjcec24kSoJmhLUd2JUXaYyBDk2MKiUJM42UZGyHdtwj67NHp6E2WgDzENQu8GToFxZQvFjJ7fz5Zb",
  "key6": "2RsPq26MZh99goqu2MY7wabZiRXvWMHBdoykzueGWCRdi1iARZ4HX7FKe5jxH48Hpd8aUthrTf7TNjvCRYVCHzts",
  "key7": "z5VB4XbKtzXcYxk4mNZgNYpjPNJgV2Dr4zNKink2ScTR8Ej6rh1sjPJbFmi7XpJpwjGfVX1mRgb2D7D1UQQxPma",
  "key8": "5CjgUAKt2CVhGcvgxm9xhxPyYcWQZ9HrAyd3BeExABaoxw4c7ZaQmZyJUVXSu7R3dAbHCyfXV8ssRhF63qDV8XeE",
  "key9": "5ZCN7oxf4zjPWgo6Tjf5AeRrN18EPtcjgktpDMK5ffs3ZHaUudHto3ixSq87XLu3iFcMn6H3si3tyDqBfg6kcpqJ",
  "key10": "3zNvLFBV4RFz7osXoASz63QEacTDVe7pvcv76S3692rhpF4LXYG9124mug7bqJK4YAaRjmarSZpyDjdtf4TQ2D8t",
  "key11": "3kHUPa3RPLu6bsdn8HLmZ7yQbo3KhAxVxaW89AbnkFj8ieFSYAGhGiLGXf5EXNoJctitK84DTve4Vs43jq1CJWpf",
  "key12": "24EhAx45443SzHP3uPDkGr7tsmRdUuY7BF1DfLtF1JF9ByiNm5PVsP7GNyJkANsH2UXd7i97SMXUa6FxcHSYwKGg",
  "key13": "2HyzuNLWJ9r81L9gFSu1F3u91deQWMFmJESvaZd7FdAcQPsQJHVfPsiMsLPEjnn2zKU4wYtt7ybm85VNnwUZML6G",
  "key14": "sK5JMKaoS52emHP2KfXe8nEonVemdMYgKSPs7dFWcrrgxeiDjJNyU4dMMVVwv6wXtYZqU9QsBbcyrHFJ7rBWdPp",
  "key15": "3Y3f8qUnrm2Byee2hfPP5i2cEhsxLcoEdT2GcXEWMmzMmjTsVsDWsAZbEjUmWeTnQ1sjHbTWmmmQi5xM4xCd3eT2",
  "key16": "5K5L4Qgcn4bspi1Eav1sddxVqRbH4DsuJzCea2HdGZ4vktgZP5pkQa2sL4dimkbUeDSgPrkEwePHrXMT6qFAC3cu",
  "key17": "48jKJdgomChLzK7d7NjyjDu8Dm1quSQKS1Lc3i4cz18Zg8qrME92CYXR8YKtX6FhyEh3wUduAR7W3EsdnUNVo51C",
  "key18": "2Ba9oGQNYZd866gFKXNZSV1PyuBa5j4hfeFdwkfujt9ZTeH9Dh3TpdMco7X7h4qHmtmZDpLKuUwYbXedxXjkJP8L",
  "key19": "Q3TnAZFmRh7RgrXtUxntBCfbmJj37gnP5fnXjFBFiVkFzonSN1cKX3LaF1QNqBwfhVbemf8Lu9fEDtaHjfeaCwQ",
  "key20": "3MjVgSpdySaFpVLjpUA3effPLH838rPzdRZCLJi6MT9SM3UmfFpEvDNFc1uJwBf3KtMUPHUWtccShnggHArQhCi4",
  "key21": "4cqX5A3S3MuNvJ21Hj8xrFhNUA8jr7H9gp8yn8sKxfKMBxwyWm427yZH6U7FND3AtEq89kR91CZ7AUWJhAt8jF2C",
  "key22": "4C1gv1uBKwQmSMqqcJprPMNcEvmn5nJ2UsCSbNFRfnK7d5TnGSv48g9nxhon6L8eDzAsbYqjSeEWAcxi4WxfCoSu",
  "key23": "3d9Svuibzi1FcNFP1fLW4mpxoM3iK5WF77oBRFoLaSvGykDper7Nny4ygN76FnD9xzj6iQLSESS4HZMPouAcHeZ7",
  "key24": "479xRzqUkmes98YVCWfdcGXbYrv3b9mhKq1XkuboaqUA8EJifmTp1RVYTjHwgG13b2tzJm1P5uGe3iEdXmz3nWhD",
  "key25": "3u2a4is5vFoKkKMMuxGUV5dBMVxP3hrxRDcpUE5uEaYpewkowUmdRgTLH4mxvTjUXyteqMbtkYijq9eczVeetp7h",
  "key26": "4CzpR2et9VhwMqBcJgu4VWjNbntz82tjUgjnQ8nsvTM9afUTtMh1Y2HGCRDsBMEqhnXsM1KFV3Cc1nxKwjv5hC3X",
  "key27": "3p61R1AWWfjKT8QXmYoaTaWpYJhDMANdScdLVoMWsYq6fm1SnagTXjfYCqrSKb8APPpYipy5nDkTRnyvvn14a5wV",
  "key28": "3pdFmheTX7uH3dryDrig6LSDbJcAJdZtk8q4y3f6PpscPjTcPorPZYXPJM2VN3W6t65mV1Qhxb5NxfNiwSbq18aE",
  "key29": "32LUHFJ9mZbBVYd1avbmqdHx1qCHu2Qwf5EsFrrqZKpneo54sWoUZYDvRVPuVaQHwvb3YDMcUtfNxpvcbhpbrnbt",
  "key30": "K9jmxq4qrr8NMVBmHcucp4Jg6MXNCzHg1yCYa97QbepXaZzUxUHZqJmzdr2C8TzmTqX9oXKQrb7T5xKQtbGp3th",
  "key31": "27QB1XXYGk9UyF7kPXveBpnogmMZAWr1a5yYjPy2acSSMAqZnLSLbYv2RjyDjRbQbJFbpozEnafpyJ87gxvLjVAu",
  "key32": "2LW41wFpVaoX7pvZ5V2NzWQmvUs8noZzGMmouCjGLnwNFpZj5G5AQAp8wZ5WP36cLqqda7ocMZbqY8KcUAouQMW1",
  "key33": "5DYPQcB2v7WT3ZQ8BPJY1zjuazYB86hB8UZTcVCekUQxgp9XAVTW66r6E1EHzKM1ZNSqcaLCBojhkHbobd6wbL5z"
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

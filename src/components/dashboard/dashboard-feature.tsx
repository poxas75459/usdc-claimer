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
    "2f53dGn7MFZZi4YsJgC8uvjDeVQ91eNXt1HJixm1jRuJNj7eyi8rk7PNSTauooHcNrib2NHCmW4a1zZiKse28qs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U8pebNsNDA2az55WetzpTpit1RQYaLf1vSps4ZMDWZnXWH1wYC3ViWJrumUwtV6BxaeaTwVefwuDzHj2ZFiJm1o",
  "key1": "4MkEy1eugvajREwSiumLz33xBpCqwPbxwCxhx1hwhsWN1bYf3v4pf5ECJt3iwDGoAh5FNnPgqv5Ey5ZNawXBXsg3",
  "key2": "2Ny4fw2HXtoy4CgHUv5jnxVDnnATyGeypjUz1TuaWLwGbXMNJPenz7hXHu3fo6xkrac5SDpxrMSpxc9xbeshhBRt",
  "key3": "2fNtiJz8ckRSYcPfeMhXjRuPQRv4WGVC6y9T8KMUvKsoykCUKHmJoD37ymywGc7Fg5rmFcXTGy1zKMEcM9rhdsEc",
  "key4": "5RwaMnamjVdcMWSwKmCHMCMrrAndMpRtA9BYnJYQ92LZne4CGufdR6WL9zLdgAuJtRiBEWEEZd2AXv2VaGpxsRqV",
  "key5": "p4Yy5Yj18vZ3YzYQnEvLuC52kquoPNdgkwpUa3YSAcomP1w5X7dRd721wk9yrRFXkzsskVcuKYHoQv6CYDsqfhG",
  "key6": "2ukf1wwH89LBDiR3yZzyNydncubBgTZpg8sWPBozqGn2nxRsMWt7zdszdtFMPgqGxvBPzZ4USys7wiqBJLReEx68",
  "key7": "3rnDZ4E7mjpd6g6nPHA6B7t43NrJr41GkyUKBJZpF1jvU4qEmyPr4tuiAKfVQqWqdVGnakmGuHESqN98nLu2ZxCi",
  "key8": "3KQKBGWPP3tNxf6NKtj5obqSaVqYThhFzjQ8EbAJDx2GLREo1rBd2xmSvpHjGZrg2SyGDvXXxDvvJHxwiUcBh1mw",
  "key9": "3ZZyq9PXZf5Gk1EPdZ66KRYhsv8czLd9JqryQKivscTvGJvCTRnXh3YhBCTEEAHRj3ePDtm4iHrL4reoXsiE5umu",
  "key10": "4WS5czKBAgqCXHeREHk6hUwTcpwCgrFujJ4vtpuHtwZMf8XZKVDdZYaxkihxBjV4R6Wx8tdzEqE1upphAVWGMih3",
  "key11": "35z2SaWJ9DLUscrDzs1nFkVZ7GfyQvigEXikEDy1t1yW6VoWykXCdJRBkQspqSjH8VSwDdBzmmgYyzAQZiNWKxFh",
  "key12": "5vQWqySpc6CV4Ajb3yVTWUxjYNpgQewhny6vzUp4XhAQ3zqgsUpWrUEMbG3BGqp1cCCSedxi29KiMoLaGTB9gSp4",
  "key13": "Z9UzBH9dRHGorbh7aacniTuLsLUcNfgJTjVU5MqoRrjaentEGxvx5QyQFPf8uZ56P4kYBgisrHWBbirrw3p7eWc",
  "key14": "43hRHKWXEo5XAM8ez7ezcAGPtucA55KGCfG2mFyQKfTF9UvcL5JAKNiNerz625KyKTayJs1zeV5imGSBe1hV7cbD",
  "key15": "4PKvCyLQLXZeWAuSEzXt1bAtbnuACeiuKFtQBtef7SDBcddW1Y41K4JM4HiXUvCeCKXXaey2eZjwn857rfm4dEQz",
  "key16": "cKeNxyxiG4U9zvdA1b4X1cek7CH3rpHHyN3JsPP8aczB7BSrFMwMEGQmcq3mdffSuBTrz2papBUpAfRTHXaDivd",
  "key17": "5zSRQJ2LAR8j5a9HHpAUDMrmNf6z5M3L5gQr3tUGPhMRNAemrHgxsVrnh6vSWhWr6NnVLyoNmcQGxfafcHZJAuAp",
  "key18": "2zhd3nVYzBUueLVru9DGPAadwXVtYMvuSQA5f26CpPp1GDzjJZYXZHNLQ5BNGQjrWZvgvcFS9MxvFz9E5WdP2Rej",
  "key19": "3RYHPEg6VbZDk3gxSfuXV45nY6JW4zp4Zf4DbGmWutp4P5RMmW6mQVAfoTcGdwwCZEo3DNcz1arYFfnHhEJVdMr",
  "key20": "xCTyHtrJohR4aJM1okzBvxKmtvxPKUTst6p7N6z5hhCNFU3mc5EAQRvPdBeyKfeB4rEzUDa4DRr93aDLGZnyvko",
  "key21": "4rhh8eawvXwkwkgoDd4ijECX5ZPFnuJokFbsQBrY6fwDmKEfa1dL48MCr8wfbNNgVyf4UZAxdc6Dx6GP5bSHBbxa",
  "key22": "Wh6d8x4PqHjpstvsNudamqmCZkYd2PUkTyeB6LRFhmSGQpm6EtyW1GUKv8G3NpaVrh9dh7Kc9vSpUqnBEGz1bnr",
  "key23": "5oy8Z2vadAWYyDmwaQ5XbUGALWKXecXRhqi2M5E6K3wdVFtdjhCQBMiqJcRqVTiFeC2GeeaFvT4zn72nWNvU8oVP",
  "key24": "58PMuVWSPigiQUy2dmZdrzEA4TJKKDsDYk58uMbmSbMnbWd9p9gZcr5XWuWVwDFzQm9BnheNu4Q7unG34yHZa6A",
  "key25": "3ebqzabzozUmdWrS5KpwmQpsm7SdnkKAdRacd7KtFkS2f25yWcnpumYcmYq63RdDyW3XTFvXsk5ajsf2UsK7pKXy",
  "key26": "4FTsduXjfSrJRG6gKfa8caPpYZUTqWF3d8hvghWQW1CveKkQjxEwbmkTCUd6Z3fsCEAmDLPeZD28hemsMu2hoaAU",
  "key27": "2SDauVqsTGMKvsg567mGyzaQxwxjkpxL9zCGgKSy7wUnf1XQ8jxvcexGpbUqtdkCgxfLrhbH1qGg8FaRzm1VxDRb",
  "key28": "6thvpRLXbMEP19S1eWp7bGsaM2wdk1fL55Yf1jtC9wYXoardkHM8G3KHCNfd5GMeiJy8wpyJ7DWBq1bqvGAaUUo",
  "key29": "4ik35CvW2EWQjq1uoNKq1APeWTAnURnSvShu5kRh7LMGq7xRXN37QeKFtMNsGaqaUsjf2oZWrhfQRJnzQHRWxL1U",
  "key30": "5dD4oU7gNM2sQsuyD8z9jLxQLceUodjdCowds1xA25XoA4RS8msrtypa3JUjEDSceVKygpjyRnhTGoEeBh5d4GLj",
  "key31": "3y1uSVuGwFMeCq6QDYFXfp84hBVzjjjGnaA7PiDvm4u1DMyuHWhY1XYV3R2W7PwCe85MtV6imCbUARCWi18RYbC5",
  "key32": "51GyQ49vGk8995USChCQ69Sw1Dwet2Ew6bDQZKUj5pLbpv3uWtbBoqRw4QTMhhNjvbciMnnb58JRzcNV7WSHxT5z",
  "key33": "2K41gYTyfy6TAScWMRVRdbxNArLk7Mrmp72UTCwvcmNgQ6Lq1MeMWVhv5JMtRWd3m6tUP1vqCnp5Lh1J62S5EaKQ",
  "key34": "45F7sS6EpzWtxeaNjiTyNrjbbWyuTrGw9d6F1UnQEzYkiC6pXSdEcznSrXy48uG5Pty2fa1uZM12rfzeqGGWx7iY",
  "key35": "qCmWTYKBnSMdHvqNJQZHRygzgb3XHcwcub2ccmXsHy346qrTa9YxDsuJa4jYCsUWE7YLVaLjLuV8o1kZp1foUQC"
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

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
    "2P6hpxwXCnh98Cr9c8isfMc6gyyTzdvV3KGt1P4539wFZE9XfH8c9cRcAnHrFu6XUPtSPa2kED8ivKqmU5ucg9eZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3THH52ehf36mXHfVYokNCMQRVzDLCdfZicdX3zMWg3FRfLWfLfSWDgS6873czbgJjR3v16zRy89x1PTy2VFLDRqJ",
  "key1": "2qhXTTy4SRzPmco7kccpL3ra5WG6D1pPp3dAGR8HqeS9jrJpQfvVuhB5DFkDNASqQnTf98TfBakZBFZa8G8zRkBm",
  "key2": "3xcdUsSaqZUyVQgKs9Bejgr1LFVDtmoKcfD1rYo8YA6wwtPdK8KmJvZvbe4gXMverkZXP1KQwpWWQFCwsxH4tuq",
  "key3": "5TSwFPghWDT5GtCCnfr1Df2MP2ABFd7tqNGJDEcRPiL9q1N6Ee338Rx5M9r5HqHXuBGBWf4FhymmFZAPBTrjNcu8",
  "key4": "31jPCBMkv7NfR25CV2BELFnYMbsZ6LGr45TaRdkMvqz3s9dfuxsLCbNsBHacV2M5yZqvcV1w5DhvXmXvJgBnVy8a",
  "key5": "z25fQD9BqxoVwDMg7fmccbcXZZDt8ZWYJyCgEadwPtf7xhqQFGVNbbx8YZhZ2PFQM3Y9yViUAnCtQe671Qu4uce",
  "key6": "5beeYCcKS4T6TpvmyXCwdAaVWdTfhQWSRRiRgtUUVdXsp3K13UBDb7euUz7smoMTXSNjztAyBK1fA9QcuXX2hwkB",
  "key7": "4GSnANNuVhF4DXHCzLdHbLKj4MKUNneDWZD8eHJEZm5LcGirr9bbhf9CSBaL4XgwfabM7tz2u4G9Fp75x4yssWCp",
  "key8": "47fo4rzK5xAJK3zh7s3MKbdQYcCseSuxh7sHdEm3eKHmLBtHJJyvfWNmoC7SM5v6CTx5TLpRHgaarEiMtwGSDa3o",
  "key9": "48UAhSVbjmmR4C7nU3VEEMLsgtEgrveKfMHXakfNWfRpzBWMzuP58Vt3ZpXBzqYPfMgjUitTeA5EQcKD7hjUq9v2",
  "key10": "2oPJ4jhGzPUHaZqzpoiPjV91K7ewCp4FtC7X4ZMkX8RZtCrQsgWRiGYJPT5UgXhAFdXrzhynY4E5D4EBVeqimK6Y",
  "key11": "2k1CED8QQcgNvfcP1ed8ApuJGskwWo3RQww12CKMn8VBhskhL7RYytBY4LCUhCz4JdLG33D6b21DSzp4pTPDLgBR",
  "key12": "3Z9V1UgAtdGqFjPfzm8hcZMprxPh3o6d9bMLj9Yo6zjNxJRyq1hhgPBKPUDVHzctXmCqZtH7E7ohtkLVRcZVZmAZ",
  "key13": "2FhHgGm8c5yDAbr3ZFNMq5AJXqaxStbAsYgvr9YG8frdAMaoPp2otGqnT9FFgQerRsSKKuGLxpniGWRT3yhHNJrW",
  "key14": "4HUJLXRGsrE4XbHmZNebWnddr6yFCWUmH35HcFb964Eet2CHgyCMvJa8dkmJMov8jzAzhk9VoRL68B6ZzG7wKEHZ",
  "key15": "4JqRxW2oEYZrKgiuoq6HXe626vNaRuBWtq8ySrKmCEB2tagbQLd2wapuyytfUVhNu6R9R9XA2Yx44oC1YA2e8uK7",
  "key16": "2j4w3RkRp1dHXpQpVJX9htuN5ej28gsdrM5QNfUs1uccpbJney1sGkBSXMnLWMTDWa7pDBdCksuKM7xnmrbeDGWy",
  "key17": "3BySy4nVaM9hnaoWLhB9nowV4sktkMFH9GiuufgenE4Puk5sYjgwGr78UcseZgK6B8ksd7Hpg9eM6mvzYjg3MNKe",
  "key18": "4iAJuQYispCFwrDEZtJ7kVwK4hTXvGZDLvFy2j79yP1S5EtgN6W2NhF4p8Ni2S3WDPEFGGdWDR3qHmCAKWzeKd4G",
  "key19": "4bgqSTdLmkBMMYSjxLzRL3DnbRaKxsqzrEgBaiVM1g5ERavhWx1Kh2w39qeVxbuBgpFZbe3zLPWf25RzCoZf7VXb",
  "key20": "4sNLVUuyJwrLLmEKia8NRkpNAkfKo5adPJMKiP81eDAXc12iAEvP2o6MPvApKoUcuQsC8fgKLH93mZze8kLKxpha",
  "key21": "2uLNTFUBXpujZGe5RtVxDKUYVird3mUUVHC5NMhQBATpjQRbX8bRHanZFKvtYqxTUKCKwoTMSL8zSzrNKReSgbge",
  "key22": "35pkU5qZwFLm4fgxWUNFBDfZ92PFDnqJTqY2aWCpQbHzSaaNCGiwyiPmRrUUivJ7xQYf39S8gFxDhzdf7J7VgPUq",
  "key23": "2Ks8THoE67d8a5ND9EsyevVkHg2pTvW3UUJxnNgcZSqBZpUjvJN69KoYJKea4Ks6FyPkQn3QP81SoPsAQi5o9659",
  "key24": "BENUV3fCE8gq4FWpzRksueyKAnoqU2MtDfBXJxv9FU6pBLrnKdxYdiV3wcTmGzVa9WRho9vQiapaTxEaNdqwuHC",
  "key25": "WC7NingTT1Uk2cmeRJ2znt6ZFHBUQnVsEqFKLYpDX5TaEY5o9s6smgiEWw7v2iwRCWnkqWqeT8pWefwLeF3MLSd",
  "key26": "36oybtb9Fws2Ca57dri7iDpeJTfAWmt7kpcqzPKfEzRN3SrPuUKHp3XVZgWNhQeGFgpL3eFHJygKShLDXsEVqGa3",
  "key27": "5Z6tsWXPovw6Txa4vL6PBBg6uyHhXpSAqKJC2U6Gvyt6N8Xb789RD4jsnKL43vCAZ6A7X3zm9pLv8v6WJ46dvAqc",
  "key28": "2zWx4Ey5AV7VXh5qRAPQQwonhpNhBKoQ8aa9ifp5feCSCJVSnca3xwdz9VqCLWGvzm2S3MTDFz1AWonrYjxKvU6P",
  "key29": "57ezPh5PmF5ESNP9tKKWu6eT2ibuFB8SB4i5t3DycwHPTnwoVFiBNuKta7yH8rm5H5vosVAwzRnJ2b9E3nR13Q4d",
  "key30": "2j5fkXeRXyzwq3q5ybGrqDEecDADYDJrzTQnRAk9XUj8o8eQ16MFeTNrtQEXXMKuXukb5ZmMSDkxtzWHtEr6vcYn",
  "key31": "2Uo14WMzVvHYNKuMgxY457t7rb6h23nuB1n5NHvDwHzWJuZinRxeEbeYTNPpdTjtZuknT41zmDoTdF8Xjm8cZ2cS",
  "key32": "5tVmSvTG7fdgtFoMTsHQJaNUn3mD2PRKNmF9mJLLgHDgJrTVAfffVWokzwZdePow7kB771M7FNWLsruyqgeWX596",
  "key33": "5mSqqv2YNfKcHGD1ygi6WYoXosBhNmDiA11GwhfTNymWUhSU1iNDK2M5riAwnXFc4qRx6qzBxGmepRtq4BGGKBQX",
  "key34": "2DLVh9FhSV4bCMid3guuA2x17PK91bBh3AGMv4YazhMysDZiCQ57Gwcnwzpa6jH4E18xiQrzrKugL9pHuc4YM9a9",
  "key35": "ZBMkPrkvXzTogXaSAUpcqVvHomk6wMQPaP6F56Rv2UdGKU3oorok6BDzvaPvDjsdPdJZSy975cSbrrojMDk8cTr",
  "key36": "3VRGkNELzVcJRnLgPXjiVeH66c3f8BTcPvEdbt2o3Nq81BNrDLyBc7W285CT1xL7vG9Z2USSiVqBeMp19n9cw3kK",
  "key37": "4vYgKNiAEt8eGEBTX3GzzW1AmPnk9BEM6su2qmtuie9PxJf2mf2gQGnMGPqZbiwanSr5CjtNzupmrpy2ptF4sh9h"
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

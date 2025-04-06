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
    "5TWUrvTCDuM3Yed1feyJv78yQVrpjPgP2oqcDxnxf1CKZfMVxrpWKmENng649CU5j6unRZiv8W5DZtXNd6jX3fZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vTUbumb5x4HBdcvsU8uX1PXMmdxfHw6ik4KhzBas7tLgD3ezSyC6JGkaJVTtmHNd4z2nXsfn2m6tSsQzam41wm1",
  "key1": "zzaZadEC5aanBY5jxW4ces4mXdPg9NBWNGvyXfjDYoEkpCKa4FSdAF3jw6e9Wsp4aUCRWXRq6VXoik1DCbVrxV8",
  "key2": "Y3VfEj5nQtpfaEyAKVS2PGdCWtY2MWJmAiLfqFoMrEjtakk9kYpQvtVisJzq7mpJJu5JNJns5PyRy9aAZR77gH5",
  "key3": "3853tU1JYTR9AdUASrQWRHggLAjJ1r38D7ojaVpU8XSedKxiBYwon7Z5EuSuVckiCXBaiWk8ZBzQEbLkGNhKQF2t",
  "key4": "4AjV1Ce9bRxNgSVfcYcgM6hpDiCprfz8kWDMP3rNshZx2ayUGk9Kv9PKWScZPG6ECHE5WgyXM3HfR2veegxYBK8u",
  "key5": "4f2ofSHbmMxFJETR94wNKRTg3fzF4SJK5kef4M7LAnnfaoRu3YdPYJGLzgtMANyB3WK6bM2thjhf1e28pz8Yw48M",
  "key6": "34nvoE2PAwH1Z2xzvaxhd1E7hs23Yf1K9BMyTPhqVaBtnKMeDJCQUyRvbt52SWD2Yub8gD1dEe2wk9QZD46CuPUv",
  "key7": "pcrFjS94bENMYFDgmgr3s77zYzWqj8ioUksaQrjuLDjUWSr6SW2SwptMhoV5gY11nD6yWK4Q6kEHz5ZCpS3L9xg",
  "key8": "5ZbggxdAsNiAKZVbCrq2jPR6z8RpkbHDpY9KhLJc2tt3SojYJPHbGCKzHyqk3LRVLjEf8FCtMpgSNciQj1Zu5BhZ",
  "key9": "34J7cjJRHgnZ3rTTCnMWR3FsRgXMd8AVLAa2vD7Ysk5Pv5aRpvrrdj7dVs3xoCtWicgaVDj8EQqEVpjz73nfEZvt",
  "key10": "YrAgWyWvnZENdYeEjhDj684U1eXRosYUwoJnSqdoYiYvxgW7fRfUzrmGvAzv7QjY7yAfMnjx2M4oLoWAKVB1gBr",
  "key11": "5cQuoJZ6hj6bxNU95KazWDXy1vqd8WmnQN2LSEjd7UoHXzHTwaux96S14MFEqcrTgnFMmKt6hdHoVX56LW5QSjK4",
  "key12": "3gfQvLPPVwMFy5bjJEdtoefz1JpdQbX5XCJbpvkSuqRZ88de7HWCZxXYAwckVLT6gZLXTWUggE9GQzRbyaYMM7Pf",
  "key13": "4JphzgCbEzep2ixTPzHn8g37S9b5Cp3Nf3n8igu3d88NspnTKk1tRfo6kWaug2xx8qfQatvnjCfLioUuvqo8ZC9g",
  "key14": "4hUVDec1Abw1ksKeABTNQYd2TgqFetCjekePPbcbmCrcEz1AeJDW697DzEDgQFYQiYitu5qah6893zFhawu8AGX2",
  "key15": "3r7hY36AfSeeJmL4gY9PQivH5QLp7fYUjLoKbqgUx1rQaJ1Ft91PNHF7mMHogSGcmyxSpQNo4J7divBYSfShSz7B",
  "key16": "3DpQUngsywdfYYZoPKKMZzWznRT6Gu5LEF571p3ZA8CZvszWXxdAqgoaDNXPWxkhCjVeET7xyR91z3ee1Gbp8Kbq",
  "key17": "3TRCxMDbE52HyDawEd37LVYzJ8AVfjn2a73zN5zPydFouLeYum9jiiFQbocDqJ9f9tFVaKDSbzTu7kS6jWiG99Ps",
  "key18": "XWyHHoU6ET1z7LVUbkdkc7hgKwmn6cUsCtgFpcKE7cnCTyTnmWVYDk5nHsp6naUXYRx3Lem7w52yn4pB2rpFHmh",
  "key19": "492QTBu84fDSbRujRZU4m3Lvr5WpQwki8SvpkhyG1NafHEJcN1T5k5HMovL6LoWcXdnaMdu7JJZGptBR8m4YuwL1",
  "key20": "9RQKL7vCbnxqQjN8mkYfYghUeLFEc1AxoraiEyLerfgGq5Vzw7LBmxJjFhFTKqGNS5VCPo5xUiuNVfw1ADCCcSq",
  "key21": "iLXsAHXh2AT7rBSqAUEZps383Nx4KZh3pQmuh6omTMZmoFHDH8hWUCxXC2b84tD7nadvLYg2ZooKTw3tY5n2Mkw",
  "key22": "2qCajbb39q6V6gC2vgn8m8Rbjac7CkwbdytPdv1dMCbMtigppiS32bhdf4dytYRdtSB72d7sRuopWW3o8qWcxDLj",
  "key23": "5454ushR3uahg6GxDutWdws5JcKpNRQWk4k625Cxj9UGRmSSVJrz6SEq8sjYHRfQiC37Yrzscay9V4HroDZk51dC",
  "key24": "4wHH4PCX4uzYSxHhgdNZXmibXqW4j9hPL7Wm7ufGFg7Gpva5AmmmoJDYYNvdExQ4GHwSXkLYZpbMXkZkrW61rHbE",
  "key25": "3z39Mc3CJDZGeHeqpFeUAp2BDuvBTAEG8tTGxhmTdRgpgU3uaVwwhW3z3UYfq9K8JkBnpYo7pgwnk8uLLbPbejzu",
  "key26": "wrZ2xwzV8LVni1QWqzupAb1eiR9sdmq3CSY4eFVBCrQik8ouHsovDHXmuFNAFgJcCavdUoTVDMV8mmkwdWty4h9",
  "key27": "4hw7nzR8JName1eTzTSo2LRo7xpsjcmqFvjhZ1YyLmsUoSQ5KEapE1De1RBFbwiQzE2mhycHb1pmF8pRbgrcRae6",
  "key28": "4WmeoyRJxPmawyzrMgEGYyrejQtxfBnJSKyupJQpZMYCYipPbCoFPAQ7QCeUnb9vAXx2aLTtkH3iWFUCH7iq5qRt",
  "key29": "vx2a37ntVF9pUu93QhnUKFWwwnjrkJWchwkE64C5wwBeNDvnLK9jSSTy457vkYnxXy7J6U9Yn5JFRHY2dvYzRKC",
  "key30": "RrXir1iEYQSSr1eNu6JBBt5Jz3A1cRXCiPKWToFVMsXyjHcR66VYPyQaAhftRK5aPuyPfXFT3q16bKcde7XasP4",
  "key31": "5rBoYMQi81EdFf4uBLbGcbsXseJXH3AX7Pw8ZiHq1Gf1yaeBNuedQfQ3VkSiKZyFS6XWkfQ6ySEgfMARksKXzJQB",
  "key32": "5JR6N6iGbEbAwrTjfAgLm8RhjLsCa1L9QiAk6S22Jrii6XCLfZbJXu2QssWy8kGzszsoggHcsuyR3QSszBY3qMGV"
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

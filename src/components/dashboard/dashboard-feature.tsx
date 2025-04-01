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
    "mveEXodtSK99RoKnQLa2VV5tEdv4xmU4TRUQoAfWxJ6gAkZy9Mxvft6CSHtijfHZrveArdcdWYD1ofUMSxDyrQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y1zvC7ePrcR7qEbHU3dWxMqnXi8Xt3iNxPHaCJnd9zdyAuA95hZJQS3Y9yDm7a3jr7eFZZFMKUuJjFqSJw1tWkn",
  "key1": "126WVU1UDKUWEqXWUtA9gRSVgUN6euuCUUZstiZbSiyq7DtHWTGi8eTKDQdksMR54gzeWiYEV2vaNfjsDL3NRZ83",
  "key2": "4vW4Rscc1Gn2uBE7HHWDh1HaD5mRBxdG3iJxM6rX4rtS2JxPuDGZM7utr5zMfgpmyw4dgAgnnb99JhZ8jksqJ6pv",
  "key3": "4mFKEnwvX71FQMdk5zridEjMohZeKjQ1GekYzxjL3np9izZJdg4AQ61ysqRArf8fPss1mGNm59djaJrLixpTLRV6",
  "key4": "5dcTJRegFxBKTzDacoMXznR5JEw1Vgsj13JsFbcSk3ZUA9A45Rw9FEuet9Yxi83o7ocBAXgNdvXDveBbsAKYwK6t",
  "key5": "3gHbCwQ6CtTfmx6TwPCjD8YigiNbiPsCJo67FPt3L8vPwXNX8zy3mnhQU92VGwXboyeNkqTyzEGjDHEJzDiNhZs",
  "key6": "FfG8eZcAVYT5tFQMeToiTFB9FLrqjXSkuzEaSkwz8pVsU2sD65dhxFWZUoGx1o9BqU9qnvWcvcCTZECwWhvdh4h",
  "key7": "4QURyopAy3nm4QqCq3TEpuy2UZih733ahLmZ9hBTFieoYQMh3XNe4PRoPqZwuj2wktxkaBa7tAE5cLpqWkZqTKP",
  "key8": "5a7FENidPL8Vt7XR4rowi5y77zQxR2RcFHXynV5a4jPBQTyD2GjPEzqQURnszK2ZqLt4bB3HSjrDZh9ntPtRaGLd",
  "key9": "FjcwCqU1WzXPmVCEveaiTHUWjgoWLqUF55NSPNQipxGLX2vS1Jb4Qw6f8eB4bEa6JWVy6QRtnhVqNB2G1uPXqsE",
  "key10": "gkfBcoY5BXoX7LxumsR1xWgXGtPEGKnmHv2ySXj65LUjjqkqsKeXEJ7Xwvk7Dt8CronhWn6eSRkweiX3QZLF9dE",
  "key11": "2sshnFHuoZsQNwS9S8qjRLdXYsXryjZTMnhCbi24JzAjEAz84FVuFrCkAHWqDcu5frmkXdzkaNF7MLqihHj2hn5Z",
  "key12": "53VpRv1JD3nDEKzQYaVdtZUJ9pon6CTRbuNiqpfX8sejfpztmL2uFM1hc8xL6R9LPRavMmy8rqM3DGfm3rJnkQWj",
  "key13": "28hBoebbEc6i8SvAYEmF3kXBD1Qbfj6RyN52of8kS5P3gji3JiQW16grRmP1bh8tpb7da7nJCRNcMPeoSSsekQ96",
  "key14": "3eWSbyFj2mSdzswrUpfSmAmSCfQNWcKaWawRxxAcffKrq5jcFTnYNL9zyMq9befzPDB17aJsxz5zrsffqNmDptv5",
  "key15": "3QpryvDhchZj2uPjL9tcrkFm3R24UovGpdV2j95NnLwUxu9hKkhpGQZaqxuee5QeQ6xEEZkvbwgPNqvfGfixz12z",
  "key16": "ToDazmgySQycH1ud6EYupSo3hUok72hcj9Xn3NtDrMprqeoSB53hU9sw5aQA6uxAuFJbsRp2F3WEHWi3LCzKfAW",
  "key17": "2MjJUSvqDiWKEbUY7nptesPz98pQPGbhtR23rpBQbw6FTzNTHQaHGz5C2Pv2iVunG2U33b71WEppoWkmZ6JtxVz",
  "key18": "62gh5LxBP3izHGXemTApQVw1z9f4qnRuSQwhPjGEFM9VXDsMwJattiRtDqEVhqsyfAy2xPCTZwu6TQibD6ms3WKg",
  "key19": "61nx2H8oQnjAtL2iXxjpVCX15U6zUATbe9Yk1vSYvEc51W5CEEZFaa6yEudW8hVeS4SLN8kyqdQQksz4n1MuChpj",
  "key20": "22Ffs6rjHRC7WAkekrXWnQzcxYLjSEsAcbdaXDCDWSHyMGGPKKpkVUiVWYqTpZqK9sDzk3pUxRqqkoUYuinqZDna",
  "key21": "4eCxjfDCvrtgEzg3AuAA69PyPYDuwBPvn2gESY9X9vdSM7NYE1gs3SKrUcU5dnS9XUADQg16y4tkBBgYgHPjD4A5",
  "key22": "67eN5p8SSgzLqhWr1xTnMBhCrwUheyt9THoAXzBrJJGxF2o4dQT2xATHXoUvFx5iVPK58g2pP1x3WmJ6bq2hS7Lh",
  "key23": "5MjEDFNwaoACjFfzsTJXbCAE9G1SwsjW6xGB2PHjBfKkZCg3zpyLxVQwCivxJQKNtuHLE8tohGVWPV7TxnbttWnE",
  "key24": "2AvRzGMFGg9fqFxdHjzHv3MvB51N9iHbCpWQFC5nPunjLbA9RKo2ri2oRUL659sBSqeDSgyvn83aFnQpyzEmPNJG",
  "key25": "49pR3hqnbdYSC5N6SREQ6Bww1wtioKNcMUjvr6qkJDZzquNutPi6i8zxuCQCPi9saihLMf86Ruisvg5JikV7jbkq",
  "key26": "2JW1sgSd1TiN3uFjg7e8zaio2jXWbDQqHWmNLijXucp15na5pPo4CRA3T7inkNKN57kDmW1qBvYDvw3br2MrdShw",
  "key27": "2HLBYzmRQQzDVrQz6cgj3TUbt2y2WfGKCk7Ez9bm4FUiuSuYtrwsn8ht1vYz5DkoVVqQRUt7tNaDtoPGCV3hhauP",
  "key28": "35eYy3sFqkoApX5Be5bAHj2FKs3usTz96rpsUftnicRQPWxoCcMqYc3p2tVKS2x73pD5hG9Yr1qgb4725XxRztLw",
  "key29": "qvncJjFtpqLAV31ny2PEweDK5SQAt1QKTaUdKZ8W2nQBwfE982h8iFXhF2SMuZbghfAw9cEwGPg9rLF3LpzcGWg",
  "key30": "3EiPNnQEDqMMZYxZjWXJDkYn4uRHMERNjtkid3WFhsSiDXPqxrHsy2pL8SKguemyQ9SEmGLmiZxSRY1inpSVWjWh",
  "key31": "5geZcHWFXD9EHFQFGviSTxtfwMmRzu9XDEWsd5WXwzGVpuRYyDGkDRvXZMjxffi7zjz8UXhgMB2PvVVC6gZDpTwn",
  "key32": "o49WShLNZ3XT5DLmNjuBav24NZKGM8Pw6mzUTmiPEeTjqEVBsdgQnXZNqNxYAdKFSn6tvsY5G8QTJtxzoLBR1cA",
  "key33": "2b4JZS74KyuJXCg8VVwhZs9nunHiLg5gmrDuT9eiNezEGhfH4RYFvfK9En3U5z5VgfS14YHKix2akTx4WPERaKfK",
  "key34": "t45vjaiJRtivr2BaopaDtmdXAHw38A2YhEUXQYoypNLKNJsddW6QDZXtT86bNrG37xdtEUYvzH5U5EHjDKDHZup",
  "key35": "kR1JcvSRQ4rYhw6ixqjkEVVdzisL31GKC45WyaV9cXs4xJ4biwVYiGw61YcgAgCUF8FTUfZMR8pJWPex5iSahdz",
  "key36": "2CNsoJeY3cv1RbooE1LwT5puk86N76k9wja7ZMgngHZxDDbMUyP5EKKrpbQg5ULta1FMFXAwbAEJUgbYByHbbjVn",
  "key37": "fp3Y5sCkLHuV1h4J3dECWcAZR4dzBYcxREQPuCtCkzWgXrYTKCtsAGjgDTRwoLtDm6Pxzf2x7FgwH4ifDstGcyz",
  "key38": "4UTQp6fCGFXP2rg1KhRto4wo8ni3GZq1FwxUDKrMa4Emqkv7H62tshn7NVBCTAhKB2PfDwrZU4zxM95PRWJijsQg",
  "key39": "aCKPmf6zMgnbRQF66C149r5jVER9HXT2F7NPXkgF1fM2oKSGWZXEN6x9DtzBnKrSkkEAm4KD1KS2JN4SLDdixAd",
  "key40": "5kgabK6tcEH3t3AxAb4LmsG9hv8jhphrbgt8ppzQpVa8raSbLD94frHihfKFeDuEPd2b4u8528shAF8Q5yxhywEE",
  "key41": "2t2GPq1tChBwkw8xY5Qu6fN1AVCsfNrt3gTNKPBYuSeTpz6jus246jZDnW7ghbYKE1TRuzWAH4hKGbXjESSSjiEf",
  "key42": "5sjj7vsMXSQ7967LcWpvQQkX9pQaGA4CWzxZ4BMuUy5xoixXeqFCtP5ZrqUnTVfSg6eLes2gXtFKmNfaURrYQ4YP",
  "key43": "3QN7H4bmrWP4qKANPGF3ApKMAh7cJ66oUsjBJKtJdccBZxKWq3m6gSPCMii8F1G1RVB4CwKhVqo1hQn2vwAMdtys",
  "key44": "55JWqRUSWFusYx6bu8f92MNDR1fj5Ymp8nMwskmiXseBsJRTLvoTWAZwBUTbqRccHcjro5WJVn28VskkXMSnSYKF"
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

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
    "EKejbMm6bEypKcQ4uFkoU75HFkeimqSVrAKt6ciiBuzMso9DaBALdDbgiKNUVsiskZKWS6LoU2cvyoT8dd1pnqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fUs2ytfHhLFBd4C8TYz8Y7PWMgUbgdQH8Aqz9RBs5aVxnM48WZV9VpsR2A5nWLLBcZRjYow252E5ZfC1JWbs3TH",
  "key1": "2NdLT9z5vFhatUU3wcq7LyPMWnesrsjD9Lc3xsTJAXMX7p7sEp6iq2RS6UCuq1xvCBhgu5d2ijuMsikg7Y4G2BtA",
  "key2": "3CeBiE6qxfVGFc84N6i7kUTD3B8TfwsrJccQDdFg5nekAuhprLbNCZJTNupaQkbceohVyrYoeALq2bVB9PNVyrtz",
  "key3": "59DT8qjJU5U4KW9LfskBdtvjnMhYc1nbk2va9S9gR96rjM2rfH2fHUg6xEj436DJ7aRUSY9t5DrEg6Hw4HEtwuCy",
  "key4": "52qqrrEwMx5qpJ5pivJGcjWVNrpUeakw4ckAu9jRnSDD2RsMvUrQWo8W32EAnHDfB76z5ErshdMpW2AH4xDPjqFy",
  "key5": "2ZsK1wK2Gu5Jhkk6iJn6f9yBb96sSxLnPp7Zgm3xkHCcnn4gCTEf2a2GZdRMqJf2xmdAtDte9u2To6uY8bBRgJYY",
  "key6": "keqphaA1FnqPsfGc16PvBEz72MNNpaFY33BE7uvXHrH4V26QpAxoRtjmjX3bsSurAiwj8omAez62GTA6CSn5oE5",
  "key7": "EZSToGUN6GGWf1WRER2Puzz3q6eup7htg4tUEhXzFFVWFPHQnoQChL23SFEnwsExboH7oqZJ3pVZKBnsEJ6KH84",
  "key8": "2M7QcvX6xkrF2VgKhhdQbM2rLgXqdd5KFPDcUC5hrFRHvYDzQg9p2EJ5YmQt8184zkk22JdEy3u7xFvYa7a8rN3J",
  "key9": "9xmfBcGx33fvfCTScgPEyyU4CLkk3TkZ5pDZiNMHqavrKADaXgJL34NZc2sHEon6gy4HPhhaVKsHXB4duj57pXV",
  "key10": "51oiuTTskz2SnuFN96r6DD9GGu7L5HD3TjahHfjjkVdYqDHoBhrUGqSuiLKaz5b8RXc7t2CJCCDEY2xkBDPx9g6L",
  "key11": "28RAAiZL6um5HVs1Bd8xNhq5QosyzGyRoj5bf1DSuiG9CRTAFTQAx3rZnWgqtz8Z8v9QrTgehV3ZuJGChjEmeTfG",
  "key12": "4exm3W5mVvgffPHVfLfoCkXab119uGzfnpWEPmzjfY6oJVtxWinfTTj78nAC2CRS5fucexaUJZpaViWxejpe4NYE",
  "key13": "5kShQ8dKPRoq39sznQ9heNp3GG8PeSk63b5u6NSg633Jp4Lxj3Gm6GS9XcWp7ErAbEp3RwnCfzGji316tijdM4wd",
  "key14": "3WaFSYEC9EtNL5jkYcoAg6T2YUbeqvuwwF5fgKQGTcKgJYwc15Uc9dpgeXm8zGN86KBK5GefN5gFZX4qwvsGVUy4",
  "key15": "yG9PL2icGm294Sqqmm7Q2XUiTewLiWWWtCVv5RF7xgyFeNs5JXbcJjSUX2tDaCB5xzTwjASbjK5uy4zwPguD2Wn",
  "key16": "2jnJZ3YqqV7edZDCt2Z71RVYJz43cPbLHShEFYqSbuJRiLgcXeVHgZXfvBSHZ2wiMnXFs7Z58EYhGtd9VyDZAaD9",
  "key17": "5cmPfYi27eVgYGUp4ysSW9nqApvuXkHSuDrUM6UWA4aLrf3Ur4JqgdX5Yr8HJecSgmjhqHEbF1rxdiCApDx2VswT",
  "key18": "4AipLcveDvXh28worrzCX16g3kxZobqQz6UHVekJgd87JQS4xwscKTKBnBotjB3tGsSezRhCnc4FJGY4GMX8ALZ6",
  "key19": "4N4hve7Zy59mLCTrXN4s7v7rYKaZppZNPxD85Xrh8nfGwjTMfgPN7rXdujPnFW2DiiRMob8bf7JzwVdLjYiUHkGA",
  "key20": "4toGah13Zbiy6QShAZyrLHnP1n2akmP5qZNuX2oDyeCZ3eLznRSs6hTbce39csLtHSRawQggSoCB9C6kjCuqiPRo",
  "key21": "3vJpnNd82GycJ9brkbhwJWSA9yaV3a6k1VMDJNKfVdU7fQ3Myo3jr5ifXFP8dDkPgfG9GPx65fgX4fqZfj1WiAiz",
  "key22": "2wNpSd9cTGAvWB1a46E5hJBNVKDqnnbBitwCmeFtZHvvt1jdGSn9i1eKfF6ZGykkXJF1B7142tvphmbdeu7xubq3",
  "key23": "2TXyEwmZEcnppvJZvpG6DBNkwLfxb5WdQzd6M1d8FvEMCdQv7eBFEpxHrCrLqRSxKkfyW4jwLWgciiJGxVbecgvn",
  "key24": "3J2qcnYzku88LR4DM2t2dHn4hboTKtz812vVC487bBgQjHRH62m5jufZzCgyn4VPqadAyxQj78LMFmgHtdvgcBoM",
  "key25": "3SHyNJ1WaXnVVomX8jaFCYLWphrxksTPgfKPczRqMrdcK7EtCYMQXdNZwZZFsWDU2zWywqN9BjbdAQNnTRJwsEWK",
  "key26": "2qDRHz3fD3ppx1qjghkPsUR3z5ztHrTQMBGdXC2jgEmkokvJpqPmc46kpbDFM3W6JzP1AyfdQ1yohsRaWBTnmpfD"
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

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
    "3pFuRArQXBRWMmy7VULtoiVWe8STCfdiXhUxcfS1qJQxQfPcyWTB4WymeEGrvRwN8k974AkXktc7zAB3vc5YSYck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6YvGHf66sRF7EyHJroqn1ye4LmG6aEjE2tts1Pw6aLmEz7vmcSRLD6UFLNhJMWVeN3ZZkgSyRiJksukmqgCQiVi",
  "key1": "3DmZZkZBdMwksKLkuXSvx6D2mXKSxz1cjHay3WeUQuCBofUKX9rjwCo8xRCkfZoUbyky2hrv6nQTarBh47Mb1Mw1",
  "key2": "5x2UYpL4dmG1YWGkaZGvh3jmBpEDHEpbEzKmr6XqPB4mvRXkGRM4tUiwS6TuspkVChW85RjK3QN7E9VLhDctHszD",
  "key3": "5T5Zb6q7t5AUuxWVde8E35Bz6GGhmDFLzBzBRjdZdLNSUkJQ3q7UUFeHKcmPhdZZRBBwdhVv4bRF26hmZggKE6ZL",
  "key4": "2ZKf4gD63HLYcq1gcUBnW3xnkyVRNnnQaQoUouXsWKj3Q1RWcDSCWa4AXNmL4YKnScJ5nQvUCmNzms8J92FYadsf",
  "key5": "4aeeA7uMVivF9geuEdDdSF2LjDD94hw8VD3vTbqBMbcT61T4RHEcs5VuSFEgG9HPnSbxjDUM2VeaLUEXMybm8BQP",
  "key6": "gREvDGiNdcgw8ckdjh5d1ernyPPQj7hFGvbufGL73LLABWA4AigAcGtUvjyP1qvk9Y8u2Vxqk8dAGwpSpvAxrhr",
  "key7": "8fHrU8JAcvYAfVnoEQSApZyR8deTasMACd8DcuUhHe6GLrtP9GDJdNU4mts7Ld8pY826GLf4FMyCDah8W4cu4H6",
  "key8": "GfcQ5t1U7ousCgAJiJ8rsj1LjX5C1NkYLPYDH3RBSngY9q4QyGFSDKAdW5MoKTZ5fqb8HGTWiDzQHig8TUY2gY2",
  "key9": "2uaUyV5gmh9kqyWhe5NCbHR5KwT8hcENaSRPKfnbBMvhWaLA9Gj66FrfzgzofR9rB3R7XkMqqtbwvGJy3vjHSgUW",
  "key10": "4XrgXnW66V8ypAdRZfDaNsbavRUyMiqV8RjwmCWX3CqbcGUheMXPWFLdcS6SP7bHyEaeot9sCsqkn1c7xcJXWcFU",
  "key11": "4ZM8F1AcnKw8qSBWUL3t2EujazrcKzskxp8YaYskTE8EkfwbSd5FCeAGEbPoK2PFpM9GShJQm2Mp2huAQ2uPDTDn",
  "key12": "5XZ5BysLn1Mo3CR5mrxM8PK8Lwg2FZuqjch6imDiueqZ2xHRsJqCMDmdkTNZiubwnWr1PuT9aNQJe1kVXeqmQmf2",
  "key13": "2VmpU2nxViiWiR21JCAKec6U8Hrt2hXozJ5N456Ypp5Qe1WMJQQBYVgQjKYA6DkuxJCGFyNVFGuNt4BtiQzr9hye",
  "key14": "315AqAYxgVFUEg24v7XCw5QYoirViPSwyb49kuxoxKHsjZitzK6Udp34JZXbzk85yuZfMFweAPBuWhP6TtGT4VMz",
  "key15": "3xRh1E2JauhA2WSuNo2iQjmdUSNHfyS7qEyQ9mTg7TghRgmnF1wXkQ2Zk1xFEZMdqA6uy2avhotn4ubP4oC33t3Y",
  "key16": "3TZJobzjmfUXcHmpnCPvcmxh36xPrTUCMoq9w5jcEzh6hAYnuGqUzetQjbbhWz1N8pCk16doNo4Ai7LxcY8wR6bU",
  "key17": "25fW8uXxBo76pV25Y9jA7ihMr7ewnLKBC38pZFTY81cd4QNRstrtMStGbh8k3drswWtqDQTmc9SSMECScPVjRyUJ",
  "key18": "M5DNCncweFNQrSqYAdxZvLr1PesTZtZKdNVtFkTtpY2yuFsfRN8pxFpuQ9az2vZmGsNSYtAmKyLzrQsaSL4NfcC",
  "key19": "2JBuAC4hBVadnS1eUzbKyYvX2GBboasNpZajb3Ai41tvgFdvE5fbBQiZeVhXMfvBCPJkHkhzb1YJs51ydAcLA279",
  "key20": "2PW8yYYVeE8qukA74UTiuJPwkkAuzdJsbj8dyuejYWAbQt5hfMXw3zcQBULzeF2jt7pveAcYUs81i2YwzSQR6Hoj",
  "key21": "3HRK4mi2urgkoWXdQ7Xp9Af8c2ouYALNztXhpgjxoXFJoLdH7AxHHzd3c6rfjC2cno59MuTQbTBFzHApzigePMVA",
  "key22": "2rrvBtc2EDMgZ4BqtDe9vKnvd8Ew9MdaRAUak5nZqtTSbF7B8F7Bn5SLYAFute84fqb5AapLirGuPYVchuBf9Non",
  "key23": "GA1KFoA21EkimsLHrQgUJhQaMA9sDvJBKan8fJczBY6Rs1VuuYaHzLLHddiuv5KN9DWZQw5tkP1NpWfCthXH4yf",
  "key24": "4RxEgbyGaRr1hFYfZziZ2kgQ27d8mt6weV9Et8wb1tPdGd5dgDC1bH8thAppgyDKyGgYZ9Fm9zDAoJSmhzRyHBeP",
  "key25": "2kLEYHXCNNUJ6KVBUtjUFBrcgxgWvvW1KHEufAdbNfLN9P4AMzF6sfTnsFby9U2HdFBGMNqUYSfCHpKfND16VVfv",
  "key26": "5oy3vsrPEMTMkgwBHF6Je1bVWpdvspMWqXMC84vt4ZeGTLxugk6QoknxhWpdViAMjVBfW11eN5Nt2ZtHrjFM38cC",
  "key27": "3Z4kkQ6F4QSecLHm4GS9gtFBLqqi96ZFDjU1Jgos4NCLJ7t9r8UTKuDkBh2VASXyngdhy7T941hAXSsz9XyjDpjL",
  "key28": "5w9J91BnXqLdVq24qyVuN45rvdtYvXpR6PnYt2Zj3xfEaDx4fnWhBCT5ycY5WXMWgzjCPqrcEr89XefHzemvoVZX",
  "key29": "2DJNBcz1WA2Tsx7A7yHZMdEDwuTt92zP3YdxAp1A2TvPR1Q3EG5FX6CpHgBnBqJhdSGdMmRW7CDRczzx3FLnFi9C",
  "key30": "3xdzo4CUe2DZU33yZ7N19habeKHJrm9yMVASaGEs9ZHsCmi1ZLxj6TrG2EStUXK76zeaMHqjmfikiTHajyQiCGrc",
  "key31": "3wSCbyJVbrQo6usN3jQJBUMDNUA6K6DhS3FfWCzhrAmYmmGvTNUHqasrEUNpeFVsRkpTfqm3E9wJJ9UZiFn6phG6"
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

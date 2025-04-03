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
    "5AocET3g67Dh9AbRfyYJ9G8r148UcrK2F2PRBbfU6DdAB1w3tx5yH4iJVhnXHe8sH2KtXVy7FQxQ13LaZxkWJS5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jnp139wXdUZs251kVbQXGMMX5jwn78jxjeMwibdoQCb9yztw3t9WocT1ZdoWy1tFuUw36Bu7mE4X4Ehfahk3d1J",
  "key1": "y9EVbVkkRJzEnwgYDHAB2x2oj17uXF7vE2J8ryyNfQCwNESsNz4LEiKuZ4LssRsY1M2tbKbLGjgQm7Db4f31Pqj",
  "key2": "Wk3qRicbPQWAkjJ5wgUVNfmkzokyuvhaAGbKdqaFFRi79x3wH7WUFEPQhkJAev1XxR44VW2jEWZr7pmDaNBaXyW",
  "key3": "zQe2pHjKhbvatmin379gv9AkxUFM4KgSG8YndtSJbEkV8JUBnNpYirzMbX17Bo8LEm76vL9UYN3GBRyW8Lg8x9E",
  "key4": "5qUF7PpjEXeLNwrWmDGGVk8ngSqd9TS4tR1wrC8rWdGsNmxH23HUQMfkXYzi2hWhydZDN1xoyFM6cvcfBmSt8mWz",
  "key5": "64RmrnhHZXF22VSkUCHnHkutC3HdH5VuN5sCF2pyZFhz12yGD5QNnujSBZvnYjhDD6P7Wa8jHkgaCtT6H1XwEHat",
  "key6": "WdMGTmQLsqChD7UzTFaorRzoUbrQ4vLSn8A14151h4V7Mu1Hu6mnfehV6DbbAqrUmQSGe26QvhTxs2ReCXeGZVW",
  "key7": "4NjM9tEkwJWs812kaMX35xQ2Vy1Y4tLB86gLKibZ3ae2LVaEkfLDFbZptC6WEUuobgfiCxSq7Ez5WqeyQqc2ZmQS",
  "key8": "2RV23TN5ejjgyhv9VuWMzPJSaDCfF3hSgQDbQ6jMj271Snfkf2Y2nc69DUF2GxmctUhav751LFGd1GXRyokCnPRQ",
  "key9": "4EkqSgopNZmFM5yjCeBeeNZc3ijVXZpEXA6rwQS82dWbN4CF5Tvsjj3Z7RrQjxWBqxVFA3rcMGrK54FG5hWvnDPR",
  "key10": "KWzErNmi9tJzFF3zpBQs3bRT2aii8f5Vc1xdGqMfvXCvzSr2JwhSrTf1snRhfzfNJ1b6dBGA6z6gB91hCnTCumg",
  "key11": "3oMpJbQx7TUbPKEsjknSGbe9H9VaXmU15nJfMaenCQkQqo3ioiNNxj53sYQDQzjpcb4f3PL2UvuWR1qAvQGbwgEs",
  "key12": "3YuNGK1iXch8ofdvUCYrWfmfQsv7RCPpy52iMvpVkcSuuth6dWy6fo8fAx8scGDDg2pnUsyPBMKQpUk8ksE6awNV",
  "key13": "63KAipbeD2bVA2CYfHz8Zck2fxjLnSHYzDfAMXfQxuyoQ66UkgCRM1Jd9y1fC2iYhQitFYNsBxjnoUuf3hb6BiRJ",
  "key14": "2MpMeBE4P3worM8NgFxho5ABZ5oravuT17oZy3NYGK5wmYBSwqnWCpBYVXNzrmzK1Ex6Vw1CW6A9CbSgBNsQWk3p",
  "key15": "zmj5McEUxiRW8BZbuLdkDRqrAaTc2qWyogDMWTq5QmBXFRT8Yj4YcD3Pjad7qRhKEf8GaCmhzGmMz2Vv9rtZmSA",
  "key16": "2F8WrUUzNdscK2UKCCPywM1pQHeFCv6WgkBMxZS7eGQPARhXVYaeByLPftjhXy3PLnfdoor2NxcS5mUfCjcExrJd",
  "key17": "2WXxVQdGx4Lr84TGLc8pqFkHwm7gHFebQqAL9HDuvQhAtkwsV4M4EFPqtTuxsh16qfwB8gZgbhSAS5aC8rjHrZTp",
  "key18": "5fSYh6dz9DR34QYEZebtUQYLQ7UyxDrreaEwBkf1s3PBNVzNSASNvwPonY7jXYnvjH5eowBSr8pATvKMcB7HA1Sa",
  "key19": "5QQE39trQrgeoibJcGxW85xjn4UueqFzePAE4BcFGBkX5baVvaGE9p6HRGSLA8JGrWXCUqBmn6Z4n97RsNMsJ5dq",
  "key20": "2sNYBhhKmKSj7uUdUkUeSHojAV11nnJzj1ZPGGepHYUdAhTYzgKXHHUaXDV8uDmNa34h7vuSLvP7CgD9bbuo2V2u",
  "key21": "RwEhWx3AvCjKvS1Tea6yrkS3jg5tDkrGzsaEwenXRkpyBFnTXizSA1TnmPSb1CTKEQ7KgrrLpDSsN9FNc3NM5Xd",
  "key22": "5MeASpuVB3E8qnJBUNwKCxuEXwxfuQ2HJ2puFZjevzaQZd9gRn3nnHj4xaP8nMVAviFmxPKBTtda9HhnCyq3akWP",
  "key23": "2ePYfsgEGnvooP2o4PRZw8z9BzUNVoj7jV5R2743aPfisoHttuPTGjqT48am55yB8DB4UUSajbK23EjxPJkbZRG9",
  "key24": "4AhGmWZtc3Yv56VeHWsnK7wMy46DX8SN3WPqAFFYVLLYE2E52XEeDWH5kynn3gcCy1b5B3i1G9hsFudjJhidgxxN",
  "key25": "2YV3KsXmnVbMkdYykVbhy8BJULvtBooQWdHZPDjrypuFrezJp9yUuRQjuSXNNV8WnQgsuSBJ9FqazUwYoYQzMAp2",
  "key26": "2smkWoLb33jKqNfPxUmVWQPcsa1UfqAbEkcwn7yAHhhikjJ12vHnoeCQ5uq2MJL32o6xCd5AdhgK65BtTEzpWX5x",
  "key27": "3n9QMfmUWcQMxAowDTLmaGmne6cH6ebRqvBHmMkkC6Tp9iJsxXmu67MFbfbxBJ114sS73xeEq1mzhEYMPZk9RZsj",
  "key28": "5dQK8dTUeeooSrLHjGujbwaq12fKN9cCaC4e3WLWmtaW9c59VxH4QacmMQEa8MGMJwHMmmq5UVCYePh3t1JwLWEY",
  "key29": "2dbwZYUSAk3eDof32CFEEYZbUW5wAMeBM91p5PBy2EU3K3Ue7XUtH6DUbjKJZu1YRB8mfr17C5ZPDGn4PuptV6wW",
  "key30": "5hPGjf1kAcRJkf6sQB5CEmRvJK6EcGBeA7KJmoCoKQpGLhGBSkpcTgiAzwCLo7xgQ5UdiFxBHB3a8uZMbzH9xU1q",
  "key31": "35d5G6gbjEyg23QpmpENkYrextVdCuxE6VZ1FJVpW3P9rjeHcfkAqHWgGZn232iwX3XUefKL2xaaXBjGxBVGbHJ1",
  "key32": "31Yy8DMm4wQ7sXFGxhjaWswfXXSWbgrZK2bgJrR44vFBu4KsHcmfxVE9WieuB4VNPwxWJsCioLFGxDUxbsz6Dd64",
  "key33": "3MAymo6YnoNdFF9fJC7sPdLbBLSoZ7bCttZTfJcm45BHE9iJ3PMs1scBx19nVpGUJCZj3BTWzGnRRg3otmrSEG5j",
  "key34": "3SB52iCxZrh3ysRGWSeVxHXwiNGs1vwZT4cJhZTAqu2v8qArqJ99irqNmEEd98P4Qa5smpxPSHBDSD3EnTgdbL8Y"
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

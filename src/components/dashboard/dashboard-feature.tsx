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
    "3B1cYd6w8rSyXfMsXKnQn7DHX8wmH2xbzc8DGFRHRTpYVy1t4PTZXhW7UmaTeu6FCsj7gHkU2SpdwhXtuRTeAGrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3maoSoqaVVijHogfYdR3i9tNKMhV6tYr8DgGoLan5m7HEVTLMiqeAji78eTjmtHQRYRPfn3QyofXdzswdzstWjKj",
  "key1": "2QBXUxG2KUr5Kvft6ENwUFh6Da2h3VePrZZV83BuEJR7su8pFeKWb2mxAQ766dQnXUaRh3StcY2ZpRvHReN4c2RL",
  "key2": "25AkKq1MbPmQupJL4nMjEYP1iE3eBGwba4sYtRVbY5EgeZ1YDkEURDJF32E895AceNwNi5GHkeugC2WcMVagTUXa",
  "key3": "SQQ8DondBcDGAYCXhakMnPxT2vDYeyxchqMVX4dkTX1nBFysaAyXkRjei213gHZAgfSw4ZHX21kEgoS1AtZ7X9w",
  "key4": "2ybdGemUoHHR7TADbhkq5wHj8UJ7K67zjY9VUChzKAKhQ7QxKyE3KfLKVuRqegV79Rbrqsf7bePnCj4EYgppUvD",
  "key5": "2T7jgi5ifso7912VceZ7qFLRy1KKPk2sqwM9gv13tr6WRRnWxWCwkjqLbUhvX1ZLD4XRm6fdCU5WPeUebwFUF1Mj",
  "key6": "4B2qrFzJdA795rJoAWpdUDLrcnvvjftPJKaeg82mvbnqAjc7wGjVZd45iLWduicSCbRZwLtZEwiYwbXA88M27ro8",
  "key7": "5s3b7vSk6asvbQ56t2ANxHS9PLRSbTQJbGgbgtBq5ogFE58no991WETS4iDRVnNAw7n17ZmwkiyXwMtbH5ZH6QRq",
  "key8": "67PYpRdmNWYHQajP8yLPTUxsbUmsY2tLAJ5xErJHa9k7rZH8qikK1cvPQrAwJprNzxQsU8F8uhkYv6CDvFy86cNp",
  "key9": "2CjoZrTdbNHHF9NtE6KDq3dECQHQ3q8B31t13WDAcjHDVJXcshANVocZoRkS6JEGw3X2HKZd4oLRVbz6ATAWtbmN",
  "key10": "4CeMYrCBJyEYE1YfEyRgd8Nuz19vG6ADVSEsrh7wYVoL9XyC7obsghpsqoyGX3FXUVazLdxny1gUsvpMvM2uNSCf",
  "key11": "52jRZ8hqCrDbUY5vnWocrfKU9fauvkLnwNhKGqSurrDueYQ6d6LTExJrBVBjDpXREhuqJJA9TpXgze9moa84F499",
  "key12": "4YoDD3Jn1Tjop8wWQmWy3NX73UhpK1o76jaWPzchUCyoZywzNB6kPxum3sqZPbTvbVQLB9G2ukfrQrVa98zWN2oo",
  "key13": "4XD9LmNqzreGVKWfgUBk6714Wm9jg9CLq3qXN8RxQwKhUcUb7vLRRhBZw8d9wSjfRp2bPTvg3Pn4152Xb2nzgXqk",
  "key14": "5mN579im7PzUHFbBJ9t92vt8y5wxU4i6oPYnV4NYmFupnXFyM4hU9JWivj1vtd4sbPuVyCxWRSgNqo8uwnudDx6u",
  "key15": "4GomXkRuoNssE5VqA2zeaSSYMF46SWy3WpohUiLUNzjpgLiNHFTeFRLdV6CKM17LZgciMUtK9bd1L6hxcP2FuGrh",
  "key16": "Bqdk1SA4ugqwytC4JnyvJ1iLLrMk76zGHhPDyr8F3DiRWqCWGpjEY3iEr5xuL7oWs4BBdcMT5qCDVMDZwX7eCDX",
  "key17": "2zURk1T9zVZvLA46UgHfDDKYwphEJExhNvUcjrAQqWCQmHBvBoofCYXEXYUcLUUt3ohdp55FBhhMHpq9bthfwZW1",
  "key18": "65ZfvzkP4henLbr1w54WydDfcyEdWCRnYDuKUZJT5jaaUS1TPDvqyKQS7L5A5wR74ViYdNZpA6Fsr7eyftmcKFJ9",
  "key19": "2vq6v1iv1EnLwZb78LEuaAEtksCA853atVN1xDZVjge4VBnw9CQZyHfucdiWoZD3513A9RQhPoLjnDBppf7iKfCP",
  "key20": "2zRFVTzUJqnqAWY7kKpNMhN9TXbwcS5uSbrAZ8otibigjMQrU5PeHUCbxLftq4bBkxTCi9SiHRo513fCc66HQiEF",
  "key21": "n7tKXSYATTRb3USsfZKkmBzJZq4o81Tw7mRLhEJe9mvL6oS33UyXH7iVhuUShef1gVCiEEVgo7d5FdKtTzpEM4i",
  "key22": "65N9bLhyJ4qYC1Ug3QTpxUkF3kGBMQWajZN4BTEfBbN4aSdSy9SwMawdVDA9z5n8LE6T2Btug3DMpYbTCJo6mpUB",
  "key23": "3U2Wv6JAXsXiqNno8pzhVKMgPWCm8hSqzcyorgU8Wh9gVQiBgNzZfyZCrUmoSUE1p3nY5oWbzpwCznAzUCXqaadx",
  "key24": "48r7KynWsvW2S5fBmNEj2jFpqL5zyx67qwLNgYJW9hU2FgPSVSeAeJGsZbpDY4tbmyVWjZN6yr95s3M12e8RmPw3",
  "key25": "A5yhMJsAz1Ckf6DHcVGzne9hYWhtCaYiQuoSzngFsj6vX6SC9NFzHbwcdv5FAdjb6ihAtnZiv1iYU5hyJ1mEU9K",
  "key26": "4vBy4RGh14UEZfFcEJJx1ADP57xUYBn6VSFwfJ6mQb4XQLXzaAPFBsW2U5HrBrntodWvuur8hnE1w1xjoz4NAFAY",
  "key27": "23G3Sie9JmrFQSKfx1vzRsQzoEEmUG6f6swD9CCZoMJoRyvzy87smnAW6EmgnPDdAg9Ty3NnNHy8PicAxgTBasX3",
  "key28": "n8LcoCbV4kKdG5EkBTRorG6PXSMTcJ2ggM9dwNhsMcx5AdXot1Gwc7aioKW51BzskBvfgbWv91ac5uNe74U5c1i",
  "key29": "3PiYWAfWiXCrKAg186a4SArfZB2sd9f8YgxF38jd12puHFhfWvWp51p3x1rQfZLeZ5dNmUZUpEvfRzoxEQaWxuQG",
  "key30": "3RGvC1yX3uZzCMrQNaPF8xmrj8KjCuDYqBjHN8M3Pu3nUM4bpE73ekFaLHdNFFT7ohfJzM7hSy2vYRbi6W9yYPXs",
  "key31": "2TSP7q15Rk4jWPm7XHEoz3geBVHXDJsbarAkLkGW3j6oVNpZ5evUhorJDa6fgEC7LttfLExe6UUn8ssmBfGTgi11",
  "key32": "3UyotDGYCAWxMCLhwzPfkP6Xc84tS2c9gWoc6GiemjyMNwbdr8h1EvhSsfhXvtyBjaiocLC7BVmsvs1ZkTcqEPf1",
  "key33": "5RoXpyuFZEVh2no7Q7Tpnv5KpTFSFRFL7qHo73DVsgwMHadbuupKCEyRwKs5EVnD3nVieTNmpkk7dK4D6YdXu1fq"
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

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
    "GUYenK5JXnkcpoksnVQzMTEcqpUGQ7YUQue8UbNCUEx9DezvqaE6bXn3RBcPdTrfEGc2LjsqrsGZGG1XLY26zUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geDarCuhMkmA9Dqv9rZwaP3VNCNBh4n7Xi5LgQiuzU3RndkVjyN1FESbfAypZ9CGApginJBYMA3jH9esUjQTgeG",
  "key1": "5A21X4gcGRm8h79NEJWdGdejob1kgs51KP6m7h6y75o2dHPuuW37oZB6KgdAL7FymzeTnLkWyAv1M4ydBxzkkYuN",
  "key2": "26ngYHVpcUUG4cvXWdt7s7tQXLqtxvA52EazqPSm1EaGYV2Lk5yLkTDLiyKxJ1NGVHuaUrQcTpJZyavmLUMVk2SL",
  "key3": "492F8GRTXmSpPnAMMNTbQhBf3oB2MsqfszesFDQrVFreodCiG7m5aJDMFgbHfovqNZfWWcJjJgBXeaXGnMH2TmWP",
  "key4": "42uYQrdWdAjZN6npLuQGDNZyRsWe7B9mG7ruG7uQkMUFz9ZUmzBfyLCwf47TGV3KMQrTKDdLCaq2g5dr6r9VDEj8",
  "key5": "A8EB5oQZT5bjzDYyEFWTuTrQaNdDwfEmwJPB31kbEDw7zfzVYCqCCy4PD92UQwiyWDCWkTKzNB8U3sPkeKQDbU4",
  "key6": "5gfWC5vxXHzArMwgHmExrKNQ1upbbuXxGpQuuPQV6Cm1MqgNgGQaQm7M9b8koeK1RWiebEPrDuRWn6y2SQ4igA3m",
  "key7": "vqkCp1BfZmtrWMZbkYSPCRyHw5x42Ed3nGcJhcPp6c8xjFQvmobFRH4kwauyAAVfgsR5QRhhBc3HuBTu6TLc63n",
  "key8": "pv7iGYwT7o8ctsmZBsNas6K8g88Nip5j5XcrFjYzTA41HGJ9iymJYmtrK5X7i9JdoSsuAUs4ytDvdrqzBYvdYSc",
  "key9": "4TmHLtKijeYgxEc61iTLD1TFpAqCMhrbWDkQEvTdCGH8hhkMdci4mGZHyCFBaNRfmNjYoTU2DMZwgSs9hekaAufH",
  "key10": "3ZxzcbzyUR99Jgs6nmfm92cciy6psJzYPQNMUZ6hzgiz7JGXe1RzBjFmZ5nJYBz9TTRrxwTzf5VtkKgevQcMXB1W",
  "key11": "3z4jGLzDANUZydUXbYYjwksmwi5tRY2DNjQy9v5QxhvgKr7HFVW2RkMe6fTAbYxsz5CrVDbhrPp8JAfK5U5dPnVh",
  "key12": "3gneK7igNCc9pr7mbpwLXHGCeUU7iGgXMeFem3jwSkHVWqVcoZV2Eo3uJvo62oyJf7ic932sfphSw88ZcVy2wa69",
  "key13": "5ZX2X1io7pUvYKTEm6JDYK4ovjYxr4joDqJ6Rwu22FYtuJo68EcDB3yfTMDf9KTNF7eemmQhbPtmHQgzEVns3hwP",
  "key14": "5W2KaUHSem23bTy9w2iiZkwswwQUdG27SDEG84UMCQnX4XTdxLfqwEoDprefCDknL2Pxm9KoJyawAsxw9dZw4ocs",
  "key15": "5a47RaJJyEHJgpNdiC8gdVJWkEEwEpQ7FnouCcSqLMYss7MtzTQ9mrzDXUoXUHJLbC7Hsf5FzrcDm8nDtUPxJ7YL",
  "key16": "4WWToQRVVyYWjtH4Ud2enKKkJLch6u1f2ST3FWyZKAWzPDT8Vd7TFyQYmVfVegSPoBGo5D7QU7fntyLK55Rq9ADx",
  "key17": "2Bjq5yRCcByHaBHAcsEDu11Y4fyJsvj3WhsRyRmMbb8kiVigCc8WvDzMMuPWgo1oeFePuc55JVS68tGxbUpn2fcH",
  "key18": "53iFgqcXLcMv3L87AHX7CNh4hZeMN5yEqFEdC3hRaD4PCd8htfRpVJr663zYh5xcRG3jSt4vdag9gvvjVB48XdAV",
  "key19": "4y5kvcQmABMvmiiQkskVnF867tXWDTcCRY8No4onQhLqedutELav74w4SAEP4TwJ6VjT2wGjTkUxfAD8TyWe5DDC",
  "key20": "3jun7xwq5xyvQ6yxqiaWNeHiV3DXWJyw6qj8zic4AcAKmniSAFjPeh3qaBHxUzWA1fGa2pkJHgi6Atj4zXshYep",
  "key21": "4txXtkPXhss9pkCmvat61Umvqp52ihq618XqNnX31icvrNh5sd1Ret6Soi5BLe1UGj8AeCjaiW8bMpkGfNf6Zc6H",
  "key22": "5ZjS7sYCdXVST6C9jhpiL4VwGZ8xjn5ESS5Ce5rtiQBpQ9jRL1hVFqPhDXSWgqYBUiujkEiN5qFYJcNj1eCGgMv6",
  "key23": "5mReJG6XCChCdriY9Y7KQz7SXiw2FhPHvFZF2ts4uMdrdVK4wtyWHjybCTnzTrCPw6uxZo7SzQD53EFTT9gKHa1S",
  "key24": "YUwWHTfjg5bQfJ1zytekYdHHyz1aDRY9o3YeU2EsvPz4hytqNX1ZcRRJyX22gd3Q9b9Jog1BQ9W58mC2ZbtAwU2",
  "key25": "2eWv9YLe3UPxS7xVDX5ZsRzAmvViZvGbGgapXKmG6B4EDgGyy2L9UFLbtUySEZg9yJ2WSc15SSYkWwA44UZ4tzzC",
  "key26": "4TVAjeiCxCKDXBkhhBFaSaXTad3L4mVp8ymrAQaTfJxg9xcaCELEiDufTniAL8oNvHcA5L2xw5K5jgk22nd3ucKx",
  "key27": "2nGbyekeE5VktCsjBsZErLRMkfXn7GnKdPh37VXatgfjR1VWABpzcYEZk1yfyFdXHAxUj2nWbYdDP8WZKznjnX3h",
  "key28": "V4vXE2MsZ6Se47KmhwuPBg15dpJCSL375kW5kXoYHMNiS4wxAzPGNDJsNRY6JVWYsrDo5zrodGAvQfic4Fjf8U5",
  "key29": "3UDbrbsk2epCJNw2SA7x4DHjTynRPFvBK8ckcHMsHCiavLRn4Ffp6YfzjmAxVPii4BtpbAeL35NxvrAFpDMCB5e",
  "key30": "a5723jW81KQwnbSvPiFD7jDU9myNDkZppcWjVUyL1JknYHEfekvdCECCNAo5hxtC22EUnisXuqnbB4VKqoJVBH5",
  "key31": "GQxY4LsshxoPypkiruciabwxNFXswAQxezHfqv1RLa7H2NkZTEGoXXrLYRSuQtR2aNoE3EsWKkQTxd8v7RppXSG",
  "key32": "42aqDCQoRpYparWG97V5EmTGc2k9vBPoZNyu6s2spCV1d5sRD6ERJEmWT9chsKQRKxm8P4GEByKYnGfzsjTpmMv8",
  "key33": "34LMT7XipWAtqfgkGNxFxWREPRQWTYFycYa8kncPBnAX5XQubqbJ5b3AhBXzFNennPxpRkDBBRddgdAZGXLWFXbD",
  "key34": "N6S2P3xrCRexrLqww4mALsA1WRLuTvZzS5WFtgrPNT4XCmQdGRUS5BsmbrwtHmdshh9NNAp7ZNPiY6V5jR5BW8k",
  "key35": "52CQJtsgBR43wHqcJSQQUW3q2KJstvboge8t9N2BLHR18cqDtBRior85tdN3ppYzfjmAsnK29223bHkntzz8X5Rw",
  "key36": "3aEToPAE4YYPym9R1FoM9WzDf8JmGx2Yv9TCym9WFMdvwB8MdiCDpMugN8H3y2jjCFbcos3RYmhQEhXHyjZ3ZgXf",
  "key37": "62wiiJ9rRLGtrT5umNSacD2ZeZ2jL73C769P2Up8mWkVwgLv2RmndsfPnWwxrD4MmWVaumdT6iTDD9e7u35hXnUJ"
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

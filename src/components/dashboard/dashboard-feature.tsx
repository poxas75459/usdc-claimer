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
    "24YdJSqn96h83XqxyiULAEqtMb6tXrJheksukBZYNTcjhn2RQNUyioACDhjER1fPZUUehH71RMs9svyqiFySSaAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FSjRwfFtteuNpkPvD4HeyJy1wb15r3X1BZYVzezmCW66cgtDvcvjJCZqVwXfZ8Akabhp6MfBHCbNhphFQbYNW1w",
  "key1": "5tinTDYd91cinBFBfhFtX7rSuQrZzVh8wQUi6rpHtC46ckqarNdZ5Zay4ocGqnMb1RTeuwW9gqMpAwz9RHuLhZ2d",
  "key2": "TzPVBcD3PieEPQ7R4ux8n5LruXobfpUfkekEFoHxVLgqLbkSBAf2jBk4grwHbdrsrw98DKYfatMjDY6w4RVZDTa",
  "key3": "4UkuY3xQJHUMcjfZw6PNojfr94oRpEuMX36REvY8Kg79ym8UJPy971HGvLj1EndAcmMNoTFUbDQYkH5YefE3Bh2o",
  "key4": "kxFNsg8w1xk46km4ZFbZ4e8y6VAZQHrK6QdQncCumzJzFkGvXH2ykSjcg1sKt4W1BXnuSEeVoKZTzPevwmAkYQJ",
  "key5": "3N8XSFcN2PkHah9JWmjC8DdKFgPRYtR2wLHNp52HYu5r3Y1wQWEFP4RFap24kcgQyhjjjpUorTVJpdCoFDbTmmqK",
  "key6": "2zNi7P4XfjvMBjpKHfFUyDSQfPw6uoabX26F7yGQzjU5KcYwdDMNmUxqXSo3HKHy6uCFPN62i2noniyDCuvhN7s8",
  "key7": "3voZ3ppgQGheownhrmF8Ae2r5BUh2CiwrRBS9dZANG1eQ3WEtBkqt8vnxqNu5ttrnx4cubvZcuo2XzaLDiHzWCzQ",
  "key8": "5X5f6mNjaKx81xmjL88uDnLaASXrjAbHkQuJjA6KYhE9fmHuHxv3k5HGK13pUaK2qoVqr7EN9amSBqKjd1QrsUk7",
  "key9": "5A4TprN1qDMraxryc8eTVErSqMkmBUu4R7Djc2G8A3C3YVG4bqFSt9Tt72WUNfxLstTuxX54ERtN9JogmHpDRj8",
  "key10": "3YJED5vdLSDdpX3mWBcQtUAAcpHdG2qLgUQD8v2dQznDPdqXpxW65NVNB2Qgd7QRHwRcBhE8enEypek6QfrJ4TT7",
  "key11": "5R9F8SbDMpGPJ7PaBiVmne2nMGkoJFepYgBT2WYKwf1rvMvujv5QejNprSxkYrWFp6Ag91ARgJ3S2SAQuL9fB2q6",
  "key12": "5sEKYaH5Mki5YWQ7Wcqxh3g65yVgNsgsc7MqY4xQ9m2ezexbLvCV4RqiTeXz1u629mXvKoSXJTWEy9y9EScJL9SE",
  "key13": "41uqsoU5Y11KzoB7fcRrQfoJ84ynjpuMFmyHWAAHBvPZSWPmLqzYcKXtvwGhiETjzjFQkkTJaM3dM8CtXbd8B4vX",
  "key14": "5qpdTbQHa18zii6La9Uko2zefjBRrUCxiMK9snjKyrGMDbtr96cKzDH4Dm5ycSpKGZMjt8TstT5FSLBqspdkx4DT",
  "key15": "5j6ST88c57R4r76hzdFJwaWJ4CWTzezAB32zBr4DRBGf5P16gpy7XT6hApFdKPT8ZK65MatMoHx49aqX9ZQ9Ah1e",
  "key16": "2sVBVAX9easmHGj9XcRfNfQf3KopdYc3s3BWvkyYvmNeQk76NxHLKmkC3fijZBW4nvBbqV7QUpFpTXPaz5uPXmcy",
  "key17": "3PcWVMnyhq8VHXWomjdvBrzwYkvBAAKXjryWqYVz8LZVB2BBWHjYJESuds1i7spY4fhcAWUFX3UFziSewURm4VaC",
  "key18": "2SqWHChNSDWvDbMXnDo9VxmpAPpREksLTUKnpT824qpaWiRoiBpiGfurU2ihgENiRyD4W2iMFtzah5d1s85h7qno",
  "key19": "67WGKteCcW4koVXMzAdfhTGHZfqceydNu7oUqixNMyngKWHvVSQfuQ1z5WXzccb7WmSNa5WaagDAn3xGWPVzKdhD",
  "key20": "3oTRvSwuUrNnL46FL8nPFj546PgxvWCK8JYHFMjNie9d2VnkAuoxCGo55gVrqa4S1RgWX1FtxCQrT777Jaksq4dg",
  "key21": "26xkzR3gFX6vxKw87xruBu6YRWp62jQfG6PbiC8qkHA3Sah5Q2awmwksBi2gtaZdjRvRpfHTLCEyg1dcrhRGa7v9",
  "key22": "3rZvMFjaF6xsquv7eh6jLLNGe72XhxNEMqr1637VVphdxywZQavBjJx7Fhcueyyov8FT4KjrmiXKRf74BYPyZ7TC",
  "key23": "2CwfsooDMUXbhN2TfTDFWVAM8o9gVUXWZDaMUiew9NTSGRkUa2FH2okC9hbNTuKwfR2pML8ZXxtg2T9GZYQBJbmN",
  "key24": "5SixwYD7if2jqRg2brqBskRD5xLfj38P2jjzrFc6rTrCVYa1QRxLmnLX6x18xEEAbSR1MgpjisVh2LFASKQ6SeCe",
  "key25": "5gBrzDPtRNsyaCgMSoMo5zcELTZH3aTHN1o42E64tXsmA1W6U2BS6XXT2AnbnFVH2Crw4syZbpg1XCK3Y5hCiyS3",
  "key26": "5kb4J3vGJzfkSXgNAonWzYyzQnQ64T3XbE9JiuGyKc1Ry3jmjdJK51iEAMAkVwLD5fdNMVRFcAdJ14uNXGFK4TvF",
  "key27": "2kDu4WZKeMtD9iLM1wCZ9ZxWZNpNWPuRP4rmqtJtA6tofYVWfP9wP1oRvhKEtzC8rMvs4sX5mCSTyExvVWaqLLWV",
  "key28": "58bE1fnKUcZH3gfNnKRHJgBXuwm5qAGdGKR5U1bMxMMc1Yv12FhQxf3p9Wz29Hhm6fWsxcPVkKBETHeW9QDFt6vQ",
  "key29": "5QxtKJaawQVqvRSFnBvDtiBGvPFCJsci1TPdhKYvUnqimRJ7e2VMKer5wvmJprUGjw45H4vqYS6AXCvVnTwL6ezj",
  "key30": "2aaqsLEW4AyTVf7pPwximQ5ZSVfu7gSghWgCV8eDzmycUZtUKEwtpfCACgJsexcn6sM3jiNHAtC4x9YnJ5sgAWqZ",
  "key31": "4avh8yxZhXm7K4Vhdpm263SCj8S2Eyf5Vpdz6eYX5wafY9reKTrN8qGzik8nFXqjRoa6mQaC5QcsuHikvqcKx67t",
  "key32": "2amQS1Z8UD17LiZdarvXUVsZS9RWZ7HMBmb6tgRSYUiXPpcT1H8XQstVxd7LV9nbvyToT8j5dfFstpvnR4uSLGNQ",
  "key33": "4VLQdNDrki6y7FtLWTjFo6uudfujKesvhpQ2SPdoPnXw5EG2RZH3w3y1FoFPb1KazzGjETA37MKFXoLUNbBiDfU",
  "key34": "4d9eaB91b9Pjx4nrtBaPpvXS3n1zm89sGE73w6S9deDh9ekQ2ymhFU8TVrpi2wJLy1oLAXibcYdiVNezZHd4WtoS",
  "key35": "5stQbZzm3FjhmZiBDKpjx4eH2akCKFhxC6qngGDawiew7junayKWCF22bGySFj4QGekzQtzh3NgZ3933hSxfA6YF",
  "key36": "5dA1d14ceRwsgnjWrbpcG6hgZCFEHK5MiV1bfe1RsgeJB8MKLysCtvDrL5yYamnSvnn4wZqjhesYj5A7uqYi7d23",
  "key37": "3m5gt1BovGkLBz2tNamEGTuVRzDs5jeejSYodRsHhn7GbYD58vQLWVKKTgCJMQq9Lf99WGYSaC8hqoEJHBswN1JF",
  "key38": "2BzMXm81SHNYHvG5ZQhRfxSj47YejpyDByWpuDGrVbrXyLdfQYfabE1aETwpEnKG2yFWi97L8ze6xkui8sjSt7oo",
  "key39": "auvAJkWnXyHtPvANfZYhsju5cKcgxsWg8zQPYvWD6ezJfRnsCMiu4v7hmMEvcZHH7GGS5CiewPtFca31Xm1Xn2J",
  "key40": "4Zhht1Rbkba4zPjRxUGWzynBA37mHAJMi2mKgFmHxD6D8BR1mpHgJRTn6cd64Ywm6kYkzdPiziB7egv1h8Xhcaiu",
  "key41": "2SBSJSYbgV51t46HgdpJsgKZNhmg7hupPRJGDUuQKDrccrMddazNyarFe1LYyzSaSfiCiA2Tms61NsMDjCD6BZFF",
  "key42": "2zNp54LVT9hcczTNagT5c7VbpdMRLGpi2MTzFoXpurcTUevBZA965gGreuYira7Wh789HQ56Y7RFgLRDUTYFnAq2",
  "key43": "VQbWN3gGFufCDaBrBq3CLXC1xAq8f632VRK3LQSzae1k2Hdi3JWr6xn8ggz4Q7pXsUVU1ZfPHURgtPToVU6o6XU",
  "key44": "4AAzT4hRnVCJpNwvdXvqJHLSQ5Hr6rm6e8K55yAhPeuoVYCbAdp44y3kpVZF8koEcCrARa6VbvMN1HifaJkYWmVr",
  "key45": "5yrjZSj83XmzKvRU93c35wcxLkTS2v3tMSg9cBGBW5X3yiCEFxK97A68Em5kkqgHqpCcJmVRWMSpdpvPDZKPDzB3",
  "key46": "24CeY4cbjqXGxX5vNJRDi5bLsgWKqKRZBtmKsES7mfqbE2megKmifvqqtVkXHoYatvrxTDQ9tE8ukzj3jgtJvxBE",
  "key47": "5vGQhzELTVycxo7ugfpEDoyVyhd3y45ARfg53itd133Xm1pF8hSG6q4JvKtTkZ1Ta2qecZg87bGQJ9tdsEVSCMLJ",
  "key48": "TKqXGpGha6Wuqr5p7915xu2dmJJACyz7NqkLMJ4bqUwMXBj27ZQvQyh1eY2Um5QUBCBMMvkZ2aStGEwaFkQBVU9",
  "key49": "5nkZijjbp4tbAAJPWXo7RM93fy2yuYDmkN3hbgHy8AHA76a5RKqaH2s6pqnREKTUAugzpM4a8A77Zz7qj8GAbWvU"
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

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
    "5tESFfbPUXGKQ29YEYYrQ9GwWy8Bixf6dkxzseiH7Y3daQ2RaXD7cJKXaQgCf327KaeVewr6WVsZhLydEjkHZAGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wpxywBk77bCp3Fy6ZUPLbKedDdJ3k7viT7uURvSCBeMrrz1yWBX1q284C7SmzmKs7BmQTrUr2gqiBUzx47K2R5C",
  "key1": "4TkL6GQ2fVwTG4JuDzJupR1HkycP3vgt1vJwJBUrGLZAMGBNkoLXnt3RMHwVuuFMMqLWGC5biBdkRSHKMag6oJU7",
  "key2": "5cAGoBBiLEiTT67rSHWgY2A38ix2yUWojcsEeaopwsbPdw5iXD5iKyyy69QU37BbNcJnY4PvmWztx1eP4kBLdPCg",
  "key3": "txAFC1RNFmd1dGaLWh6tZYTiuz8wCUMXqsP7xQgTuP3GF3W4CrmWdpxcsjEDADQ9KdFZEXBWbE2N3wrBANudUuA",
  "key4": "2xwvBhVPnFVRu8ajDBRygeqWUoXyPne1kb6graCVQghZvqwLbei5VK7qGsFgRnCNz4dynY65mcLipjAZfXrSM7XT",
  "key5": "2pNC6ENCTwzWMmizpu16JjUbfsyqddkhV5RMPgEhVxkcLx3FtkoBtFMJpxWphS4pvcwwsRTq4mNjmsSdyMyi3NoU",
  "key6": "2GDzADM8pxyw1Je7mdi6qTZDWyGf149srVr847qfof84Ccyo8itx8h1sAq2JSkYV3rMqYohkfFNWXAg6T8nPA421",
  "key7": "3eXX2ZFUxZJHhyQ5fz1Ngep5Ux8N46wLYTYXE4bMkrzWXHBEAqChGFqMjbNATLDfx65bXyRghGaFF5dhRZPHfBcX",
  "key8": "bHQSPHgYFQoiLb4sgxrG2f8fhkqhN8i1hAQyFPURBNp4t426PAd2hABDcfDAq3K1btQccmhPxAkNP4iKwqyBArx",
  "key9": "4rYQiBkxxRHSyhRqjAUsrr5cCAgHZ4ubQX7EJP1roRSqt6FagqoQ8ptPTyRAaiGa93dmYHXJjMqBZR78anGM64Fo",
  "key10": "4wz6AUczfMj9zXJfSqC5iGBqSjzoqHJiBHEiHMU9ArQjgfrkQc6mntEo1f11fXq3ZSoy5g6tJv7oF6VicSHLG6Tp",
  "key11": "4oW3VoDarva4QvsCVwax161uuRPzZyKaJ2KALxJmW7L3vRLnqcG5PGQCjKMh935q7RrQa8osBqU47u2XPUgDYPDT",
  "key12": "pCR2tyftRc6rRcsio6a9VaBekAqMNMZasQopeqopFfjNhjbmLEQ3ekrYykKDXQR3SsguDqJFzuGydbuUEgbkxBP",
  "key13": "DeSqLDAek8nhS27q22gnMto6vgtWDzvstxi8i8mgCgtKKZiRUtrNU4nxi2UuqdRkWh6b8PMQrcBjJH2d4HtYiJB",
  "key14": "4zZhSjhnrJPGVj8udJq3WWYFBC8KkCCXjjWfrNEs6ysyDqsv7Hz74zuhkgRqpJrtFzGoMbEEZBWGNLc4VKq1ctLU",
  "key15": "33SCuaiddxUjJNGQDFkCFbvb5mzJe4XRLknGKAD2boes39z1eWUch3VXX9B2PzGKyebFrqKW78yErDtQHHwxELbR",
  "key16": "4Q7mHBY4wnRFJMCgFiz7kjmChiTcyCWxuXhoaMk1w7rrjqk3fvurGgqD77Vkatu5cFLFxwUEvzEuFawsDBTAZ6gB",
  "key17": "3Sk2sHm69NKRreQFJ24DrPoNWyXoQ1oMqCiLE4NMQrMM7RTMLKuoZw67hExuU35P8dHuKnEwTzjGt9sGuuHkh7c6",
  "key18": "Y9hLefkY2LLEUCSD3JGZkVNEz8HSd5oDjuaSKDe84mLkuuQMMmQHk5rmGWwMN7JbS4dLY7Xz1BGvsqMb91qDk6x",
  "key19": "29JPA6VKKDDisVDquxfDWdr97HTDZx2k6nMb8tgn4GeSadWG3HXHpWxXH4S3Cc7mqWo2um4aBn33QQzcbvC4xnNG",
  "key20": "3vXuxVVNuZrqMpHmPGWaeHJbbgvUSHcjsoRfiAbYUEYU9i1wiq8VuFj7VmL72f5E2cGDkwrdT2WiJ6HgpQmWijMZ",
  "key21": "3QdPuwbMitypUAGcxYp6bEwX9PoC5GBxtAnDSx1w6X5oU2ycw26xxZub5hH59rLPWMx2eVxD7qRMuVaLtcNtBxkA",
  "key22": "5BSc9QSYxyzJyyQE7x7vhqJRFoG3ty2kUXd9R5SQAJpWSguvz2s99t51ZsveuRadF4TZhpUp1zVoGeR2rH7WCnbF",
  "key23": "3vhTSZQVqst85MFdvH6XyRD7mCuVFyEC79JfvGbYjx9h7vH4FHRrxsVtz9wGxNpFJfpHBe6Yon1nXSB82wjmx8ag",
  "key24": "5JRtcrj8i8hJkMAYydds5HbQteZawtB7yRJ1wxA4LA3DmRxtU1NYhKe9Yzz7yHSJpcbLUv3xsdBkvgYuHU6p6FEy",
  "key25": "5yDPbwD1CofEbPg586diXTD7rvgLXMLDvCRGM7va9dT5Fjw4kYCQU7SzWv9MVteYxHwVutMvwWnvprc6ywDCuUKL",
  "key26": "43EhtVxucDb3ATedxw8X2qM9h65Hdx3rhgCx5yy8scgNGsrn2Cmww99tTJpCCR5uCL5GGjcUoF1qLH5NdkPf8Sv3",
  "key27": "26jdEv5vGXjmYCPX7N34BKNqQ29D17VobBxCsam2vojXx1aJ9NjuPpgv6bnThSwDGVb4BVRoU22ub1crCz7axnvK",
  "key28": "3WbGVhtp6WGJzEFKTen9h7s53JNdYjSVncrA2eyEdbpKBQH1TPp8eckrDRFT1LeDqFc7thc7L2RYJivqNvE8KuKs",
  "key29": "S4HDUQLDrS8zm1DMk1rMgj3WbELranfX1QKynX685JtY54yvu4YMeF32tjA44NbpWqLtE6YtVWbJWHL6QH9UmyN",
  "key30": "4HyzYYhVk1mdre1iJNxFzvZhRFdkPMKt8UP4uV57v4FePtdFcPtupLeRWRADimjstCsDkLG4hmi6WKgVZprKGSjP",
  "key31": "U3Qu1uAyAZ1rt7TPvqSeD4Nr65Bu49SX3osp7YE9P97VoHWYNGDmYs4UhXSnXQYbzUCpVAQKvmD5B1P47UBmE6J",
  "key32": "2TTFkYtm5d8ZoGgsNp8HLNJJGhaJWFTzfYQF1djKYUD2qUU5419SH2Re1aBc3eFoYkAZT37aY1xzAdRovoMxCGDo",
  "key33": "7QtD86Sxdy9JxFu66QTj18oUF6maNBng2wLUYrEGsnLqDyarFAg6gW4nhHfUFpqrhTvuWZLA9v39GS7R4xcWJA1"
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

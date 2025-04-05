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
    "3ScMTABp46EwhD8YZUUJCcxAdrgV4yWd2ra4dWNe7SqeYKB7hnQeMtenGkLLMoJs89St4TxHFYc5YMtWH4zEXahS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZcCRsDk3GjwgFufRMC81AwCt5iEKXhywRD3j6oJ7WyTSVTQMQZQ9MXNqtabbRCQbbH6KnYAyPNdCA7mCYP76rS",
  "key1": "66B7NU5yqMUyFCe9uKFkmW9WpLDh7iop3bKXUfVh4DxVhMZKJskHe1sS7GFCdQL9Y4YoagnV4ZikFk4P2G5g1UVr",
  "key2": "43cyiKKU6zp5P43JiHZ9Ez4x7VwBMDhqaiC6KZQRGtvca6Scjq6juH9Lbcz4iQX1xGHSYLTjJQ859rorVsaqpywR",
  "key3": "3ym9sKaRw3wGKnaPLNKFEJXi4T6fyvKHTLdr41WQLAVQNuinEPKW8nmSk5Bmhz9gMrZgP1Z7Tr65ZaJDoheL1qe1",
  "key4": "45nCjQaW8jN7JhptdrjVELRKXYFhH9QD6JQApgz3ue5Do1xoFoAFuHHir1uNQz3qDoa3Tj4nw4JizCe8AVxcYCus",
  "key5": "YP2yhLdH53Xu4nrndB6SqiYxXeK4nUA4cRsJS4RepapqM5dLKktKAyKo7FoB5XXkCS94RZEsCgXYMimBdESLibe",
  "key6": "2ZTuPLUQKpo4kQbtkPE1Tmj88FWQKsxhTJqKBB39nyuHYVQjzLzuV8Ldx9FDqThsb1gQ68TXYzjMsj4vWPRZCnmC",
  "key7": "3Ycw4jZqJTz4sNH7fJbhytGa2fZNqanktQ56esinEPTWeEMNtJMDfWiHDcKZPQc5FnSvgxBmKagDPwHEc4shNnL9",
  "key8": "WFGwd5obj9fyB5LvhBWxmaL2A61fxxBtYSz4w7WGV2w4Q7gR57a6KgAfV2zqsn54emE1GjM8h1mXMFztVzfThm3",
  "key9": "3uQ9ocmPvvXAYNcN3ffgYRtJf68N1pJMXtfYr8tCEednMmKwEXJYdq6H96y3EWF4SVn7aMKeTHqUo9uA1cvq1w3F",
  "key10": "66WrkFkdPUDK8NTF76cEh7cFsKjyhDE7yG4xbt3jCTcc4RPYzMEv7PMi4VSXMUZJrjcdLVKPBnnmWjjMy4bmgmUW",
  "key11": "Auaq82TAarz5HvQVVsiBMp8cqpcmQZKeGsqb44sxJp9NWKwfaKZspW3G4DUQ63gvjMGtnJeAYUjemQfKaqcdTd5",
  "key12": "4r9z8stxQJiA6Y9t3QSWYTgWYQVVMgFYwfNhbyJrr5iGC98W15BuzrDARGP2PxYi3iG58M1c9fbw8NKAvS564iUc",
  "key13": "ETcoQB4Y57R6oFpAzT4SnpKc85jGnKwf5AatzpKcF22Hbu3v8PRMQCK1eKAxj92R1voGCd3CsLWthCKxoLxxR4z",
  "key14": "5tbrLKMGqANEUkUT3Zt8MRj3koi3yJWEvxjTgZXCKetZuxy68KYdscr46casKT3cT9nthBA1rNBHrk3tzveMqm7q",
  "key15": "486UykKuCdZPBQMkFRkAqE9ifKywhuZLsgGBXEEUAX3adMnqRFbo3kG3LF7MGaEJFyZxzZMDBPbjzqiJPEUHhX9A",
  "key16": "2MfEo1DEwJTSqCJBKTRkmPL15jDsZuVTucdxzJ86h9ikx8RwaZbVAD24oe8DaMuNjgcsHWam7Xcoz6yQn4Ga4TQn",
  "key17": "35GFHum8i344wiFh56Y2d8peCTfGhPCaNxnKJdjxEr7jkDT4EfjzNGCk5Dznw5UDBmgq13uaygbCKmxmjuZ8gkFd",
  "key18": "266GiMK1P8R4dniyF3Sisz4mWk5nNsFwgYLdQG4CB8FvLZezKxmCkpti5WmWMqGyqnz6eHYps718TczwrypvsF93",
  "key19": "kZE57o2uvJd8tPkfKJwqJ8ocj3ueS1rCacp7ZZZMvcNFR5pLAddRzJvkWxJF8WXKDsjUHc9qkJPovv73ZAxGwC4",
  "key20": "3xVDqDp4DZPugKDkWUQZyAFrLvumDGMCbnQQR8Qvz1MiuXvvqioosyYAF9CduUc6M2k6Jjnw1Pk2CaBeGnXtSYUW",
  "key21": "67REtVA38W35ScA3tgDKk3X5GE6eE15kWhUJNKDKoSytEifiDBV6ZaiKThbDLSe8jGwhn1sizcA5tgjhgW6Z8S7w",
  "key22": "2anSb1r2JZQKHsWx2mC8Yv586AzoW2AysBDRX9HE2MTSsND4Wctjuxbi8q85yEmnQbWD47bF6U8BmHAZu9v91uup",
  "key23": "3pV55oSLVX9ESqT4CqFSEbRqWzCVqktevKJSxUbNPYqpiqfCzJcALfV8DnemcsZ7uooFDqjnHordDiehhgXNtXnn",
  "key24": "3qBxmfeGLG8ZZs7xwJpXnNjKpXxVmEW1bsGoGCbzM8J5BtVtTsVyZ8icu47zvUu2Xahy2D3QUrmYBXaAKqAZq3BX",
  "key25": "g7QiHu87PVHLEhcBQP2uzLB2HJqKmujey9gU2yup2Ckx7rKqj34t2Co9REuEpVRT8LyHg8Y5idxLxSL6JzVJU3h",
  "key26": "3Ei3tgsMaQEodPJAxuKpKRddynkHRq8ra1oSYhGHrQqCbEPY9fefHvFw4Vf9NMNtP95WbF5v6g6zftBEPBgY7xiD",
  "key27": "577ra2hS2qtYbwFA5oYrV84z4JFRcntcyttpyT9KdHBm8aGvt9mCLCQaB1jexd3BxMoAyPKoWxKq1kd3bhPTHc6Y",
  "key28": "5XmY1uCNmkc4GCmkaWzDDbm83Fd9ccNmWipix4ymzX2PfJ6sDjaCEvwXFBMmAgceERhAUEKUGMSGQUUatLqX55Av",
  "key29": "5fvVcwunht9rm6Bb8jfjcRi48x49uaoC7WGwmoydYT5RwKhAw4umZtPT1bVxnmRhjG5BzguZL4X7GTKBbxrzxciA",
  "key30": "5DDbfGs17ZEoMyi7LQrAwQ5HVpKvNMCC2k4EQBKLuLWUoCMG9WN4TyXTFxRxAoTFnDgm6BRbqpUQLHoncLr2sjRB",
  "key31": "5xEeMfLeYzPB1wf9zPsLJ7BDhe8bGAjED9CTtV1A8tZVYghMmUE6TMVxKHJ99jt1WGhHG96ZXYgx6AA1cQy548yq",
  "key32": "2f7v6j8JeJxvrjwRsWC6br2R55eYj4McVcc7k2V3F4rpaE8ZtwEXiKu5ir83RNfRwTmRLwEjo6LRcoQU7z32SRTx",
  "key33": "2pq4EY2r3TXzkcxhEPvyFkviGveyXiGCvVLuZxrJ5sHVGpjsZS1Wd3ffAwyZdKYduJvpKaHi25ZRfxPv1HVbqeWG",
  "key34": "fjnWFHP2fi6duStFEkUf3cDxXU7S84jpJG41ZGGUWGUh6C3P2f1LVMwpgGfVbTb7LJQLTSw1JnMLMfcTFfydz86",
  "key35": "3wTLywqyZuPkqBXzkWdB72MGnKDi5GHb1v8KWh9beihC6B1VxxZDRr6tWTTV8X2dMURzPhQQqDU6wPbPerS6iYNc",
  "key36": "4RKdkta5zELe8QF2VpskLWi79ryVDnUnnTSFQLjxETFiZFAjABoabVYpBrQFzm36LfxfCbPRTVU8RCSkBy1QDvkk",
  "key37": "dUiXRGStHfaHWwMNDhYZpgrnfrX3ELhSWwdi766PYie865vjq2rNU486UqNKkxPDG9EzaBSN9FKtq8cFHbrYBKA",
  "key38": "4QMYfunMN6r9nSqVdJqYFxL9hwhDnnaMbDjcJGtrttQtyhwH7QzzBVentGXMntAXFuhSL4YGPsiTUB6CHgc3c6kG",
  "key39": "4YCNzeDxALNwRn5eP9vCMF38WFkoCv7hZe2HtRdFRx452PexdLabKiM8zhS1UdBFkwEdbtZ7qgBcnhoUdkUiEnM2",
  "key40": "sZpchavxPSJLVZM6qkKZCKXacjdeg4hNiicCBX682AdFAzGR5gYKuYxkctvdSr7AunFqUhn7khQq84oMZfDBpWp"
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

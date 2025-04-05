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
    "pFf18Z3AxKFvCWWyThrQDKemywRWkzgQZaH4K1NUbC5DqKsbPfuvuzGpwv4oSmrLZ9cWEiJQrRx8Ad6t2w14tAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454pJAJ7SWqATsarvagp7KhNNqe6eHVL5EZmkJCxULSE3MUPQLAYf8Yw1opFrsxfjcQbQZgS9TYfk3sccmHR4qN8",
  "key1": "4StVSaKjEexUM2HstgYnCpuoMUpuWUnBbNDarwmsfuuEYdrY1qoEBz7ivSuNwe8T8AktnzwDHjtQ9RQRLj33PJng",
  "key2": "3wouFKYYX2pp3vDKdUwMvTBb322t25tryYKaTqiD4L2qVaQbYLmdVgNSe6e6DJPbhN1sR9grHg3myG8acGshjeeN",
  "key3": "2amMEiK6tWBdrDEqmaCFuSFs1rXsxpJu7gTK2ZMadjQfUmqyVn8NToc9keABf9KSzRgUWsLRmaid9F93HKtAeC5M",
  "key4": "4b31zpSwbzuEB2GMhsWXvvWLcsiCP2A5AusV3NNp1iuZL9vYHDbEam8MtT3ejwnS6hr2HXrx6wC3uKPxp1VkgRqV",
  "key5": "3rDoDsxShYWy9cgrWYrK3mALhuPrZSsmXXzY8oDHaEoMH3yPLiec2fqznZLAX1guMcjZ4igkAHr5X7tx6qYdwXYp",
  "key6": "42zxuVEz4ZpWTqW2G8LU48emm94K7jvseGqTUD8WR92PdiyyF3urvWgsvaJ8yn3KjDDBHbyHfgbQJwu97gsUD59Y",
  "key7": "2rVkZKfphYSh1WaGpRaTXJVbu7MgcbLUfty74uSzaNUxWoVBwiPqYVzQtLgLigkJbxpo7kB5m6Hm2cfzfN95zHYd",
  "key8": "3BqGsvC4UJdKwdxB6DVba7VpiZx9QSe4VBYXRkFj9qX7vDd1P1fgfxzm7qAiFh98spiMRmaEYBbsmv5A49h3vatU",
  "key9": "3GCnefc5mpQSexuTVsvRbUpxv2NXZzbBkfXwniUqi2WUC9fnZvUqkEUEj1RUJbtZxF4jSsSmhSs6AgHSNJZEoFrf",
  "key10": "3f4u5StATHMAJn44qnbcyAzDWfTirquXjEADydgrcEBWMpKPUyZdkDB95fiWAgJjzBjqn87d3ZuABcKBx3omB4xD",
  "key11": "2puAcJ64SuRTVvdPh1uTugXs7vbquRCGnQ8xaTad1issnD1iowNWV8GNnXf5jhC2Hb74XSq5J6njwW4qWB78BQM2",
  "key12": "2ZyJ16TP6TYPsoxT2DduYVrCv9oGuvJeDLLUBy2mjYm63eLxekb9ZFRHLXA51HqrMqYcx8yqwTSbb4M4AqbeByXg",
  "key13": "3W8uEDsCZyLSZjjMRaLUjBXUnudUGbVg5iERxWv9g54Q6sqEWDRoyKs8uacyaYrU3jf49eGXHEFTyMaJCPyohjoq",
  "key14": "4tHpHmF9nUD5s3eU1ARhRYDUgyaPwvejZV3BLvwWJyMfMebJB5RY2V5Tn8WQaFKEJsrejrAbMPS3hTdDQbGHy6ka",
  "key15": "4fPLNyJW23RHAxAhVa3gWkfZbcGVp51hR38wmoDAYD819WpHwwD2V3WySY66xd6FJspkaS4sP9iHQzLMAAEXw29f",
  "key16": "6714iG8ctpXKvsfev2RefH9coYQjKh9Xm32CZoxrREjknNToyXHrTHGCE7UnYi5inJbYKSfgzhM4ELLrW2yMnLKB",
  "key17": "YSJTUCWSdtNSUFNf6hJo4AowKesxj8eXcjx8DawymBJ1D5Jme2SPVK1MjtxS5sRMottkotrsM7GsY7XkuaVNUuN",
  "key18": "8MNGrqY4Cir816tnqt54nmL6fgL6o2ACFq9vAmib6dFasGqcqhGJBzirm2XoaFd7uk1pjc4w4Mq2QQKpzAWWVxu",
  "key19": "zGPPczmGKN5jheBFMYfD2Mu53ZwM7oexthbE2mboHJ7Lffpyf9x4m8odifv6eKRgzZNV6iY22eQdPGNNKfmmVii",
  "key20": "Ymo2oARKxdZuugUJcRNYrh7V775Vtd684p8fDFZHFZkyVERuYQiCfFhocL5JgcD5def8hHGGCc9GPaKJeUWDz3R",
  "key21": "4kvDSBNqVXC5Du5yB7V9cvEwjPWzLGrFTZWLrb4cihSUbPTY6nf6Hx1U3hJPbVFtNuAeVpWZtNry76jKYfy4Z22n",
  "key22": "4HwUk6PvBPgE81muWpiJdNqbXPZ8SeProQwvwTQv49EaFs6P9tCXW4qEPLY8aSdFbrfydxFFhyN71QpKNhpH25cG",
  "key23": "2oD7QyBKFZeQ5RKFEfEKW9fwgVsnVpVQPQosB8dEyiqfhWfnCRUh9aXv31yZPB7FLcqXoWaR92SKT8tDy8aYjqPg",
  "key24": "5WUuV7t3RfmZ6SgcFwpk2XdCSDhEtfvM5BLnccPYoV8RDxBjjKKtyFVNHcc1mTi7LiA114NZeQgTQHWY8pbwkakW",
  "key25": "5ALBg7X7GFWrNCf9nV6oirFDCYYDu7sYaEfWk38UzJ3mVc6r5fRwFEMkuTakgEfLdT8WyGKfmahcnjvoXVK8P8Y1",
  "key26": "2L2FinJpnMxas69Wt7C4ZgPwQ41Fj27uXX9K71mxzCGr3yddcVNFjrvkUaXVTH2nwtg8kZJSMSRytjwuxTU9efZB",
  "key27": "3GCEGrfs7BLvnoNgSguWcFRFuKB2WUnxibczb8Hz2N5v8h1xUqKzdWkAEMbCzDKureJQawztk64C7J55PjS4WUBe",
  "key28": "313nF2cVoWg1YDxJDwVYqVjNRhcsE4r6QvrZ1miRRk6f8UxfjA3rDtKM8fsLxAedWCeANfBG4oQ8A9pcrnX6tBbc",
  "key29": "267rGoQNDmFTYM8XPVREvdVhveZDW6dGpRMMcPGN7Vetx4nP8v7MpCNdznNbxXTxLg7Xdt4MPT52Bp7sYGYVcwm5",
  "key30": "4Es5xZ7NJLBRahikEtobhg3ZXSiGCFD3p7FhUK97KpJCsHti17yLonpJq2uxRdkaSfpcnG5PBFgCVQkmTEYhEAXc",
  "key31": "5NYd7ZmKDncWfe2iy5zdHQaskhGYvaQy61tc1U87BUWZehFUtCaX9t6uE4QBq7Lbi41TJJyitLsbCHxJq4Z8Y6f3",
  "key32": "65UJ71wuJczVnLCA9pWihmhAYKahCTJVtyuHgXAW8roDgiwxUz9WfUPVEeRn8yhuGXdjUTn1VZsDRUpi2e7fMYeH",
  "key33": "27z3hDrbFMsFKGaVKA86bUAbmFRC1NykajNXth445JTbh3XHdWW8eULFc8ASgThtskdmJCR3YZyrFzcLzFBf1oFq"
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

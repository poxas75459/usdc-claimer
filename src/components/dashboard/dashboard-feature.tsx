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
    "s3CJziZpr9AewuZmojfRPJnkWkHDf7A8E2esKXDRakxFka9XuPEx5UH5JKUg9z4PYbtd1oNhNmyzFTX8bHMd7Dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gy4GtqRmfMWotAm4SS1AyY9NaheWqoiWD4P7BVaLxVRnMek6n1HRzgzgvNu7s1p9pvxJBAtyVW6ayhB1XtFxP52",
  "key1": "4De9oAZWCXnAz2dhGwFH6nPfp3FXypBbpFWYqEKPd7ypK6rzcZFoRkSQa9LV37bWurzYAh8P9WgPD4D7bjDDirq7",
  "key2": "4HATxDfdjhWH7inY957GRZ279V4v1ETaY2SLEUWQpwtde9ecvssyvUyWMz9m63y6gigXFHjpwk43ghG584XVSEEr",
  "key3": "5tGAMedZL6HHjnav4c25pEebqFkYzTRnDHfzr16AQCgKq3b9nq8eVDPf1Wojfu6xESXUtYBYk2VyDWYzPuevSB1j",
  "key4": "4Lmmk4Au3Pwb2uKNYpxUfFCS2bS48h5rTFRsQygroVj7ScncnEiVgkrz1TcrU6NqVTeQtHZr6ciFguBdSpRKLr9N",
  "key5": "2WCxFCxjDDhC9zuUdjXp1iVNj4dvctxrRxWbEjv4EqLvbKjw2bieK9zuXyenvcAd6rEz3nvZ5hRvA7rteFK5bakU",
  "key6": "3nfG43ogQy3BuVfTiN5DPWBzGEHZktaGjLXhVMMRzQyA2skpEWs17vdhjYFWF1WHKH7CFqjAig6VYDc1G6wJ9ZzP",
  "key7": "65xyhPxfS2YRG4h3HxhJwCntqoqLotPPmgNcw3E6imMqWrGZV7rVdUvKJayL7Xxw7H4fT3r7TX6BVQLRHzTH4CAt",
  "key8": "62QcvyJRUVLY2ARiUqJNmgLbTkYBL7j97zxS3Yq72eYTRfKHWN81bpeLRFXDM2wC7d7n7BDi6y1qarStVjBsj6oT",
  "key9": "yUFWroLUZH9vJf2SL5nszreT7ot1CH9rrpNTd8N2QLQupwXeeNBRw8rqkN6uR5JzZSYedf33myDqdhPkAj6Ltuc",
  "key10": "5bWkiiBsTbwkMVF8QX3PVUnHsPWDCSTzwk6ya48oSYui6XKSNQg1T468TfQ6kowk1DEqpGcoN9aeDM7pQeCUQUpb",
  "key11": "2DXzyCyfYB71w63jyH477UTeYSA1X8aaiv7S3pTv9qhCS2NXP5fMeA7VBMTkjSj9hnT5FDGxYwkA2GayX1WWkCDh",
  "key12": "5Y9FYtXYfdhXhQHK1zsLuUqh6H6Zaj43xX9YRwbL9XB87uC8UVMNPUMZCgyPQGkLmU1innPxWama11DePybCYZjN",
  "key13": "292EKX2oMziWfszuR39fzz1fvDC4PxesqTpj6pDpxS68J85AqpbTCfHAC7bBinyJBHzjFgM5nKrCshSdPszVNZUo",
  "key14": "63yc6DZdYGpzGcsKysbFycyRFJVKBFB5kbFiMEZ5yuNMuGCQPwFBZRMzAJAdvbyFPA5RWmoazMi9GqyR9peyCcko",
  "key15": "28jUyEzjLUog29wwiaPjaw2EhGF8c6J6aTqgEgSjDQpq93VCEAK4ZLgDeiXi2xyZxNmwdrU8syGkZdng6Lt7ofce",
  "key16": "4PAmgjKY2NTP7VGZydJ7JiS4jqk5WfmfcW45zomVP8jppCUyhoes4tmz9r8Dm5EiERxiW8ACXRoWxM6W8KkiP5rF",
  "key17": "EDw96k7s16ycdr27nrWPKYpDpq8ygVde4SXdtEpRVowKfR9kJJjcpg3d9jRFKFLmpV2vSNu7psPimbnVQuq6hfL",
  "key18": "3rh6bxeCczExpkDt3gPBgHqNDcFRaErsAgwjXCDeh7g5gChFFrqdcbDZgSvfQepMBPQ61nnEhcHgHZ7uaQ8yu2Fp",
  "key19": "3wseJvPwqH6B3QuibSPHH8QRSu3k1gxaTJSoxHDjVkc9DTSuRH75JDW6V2D4jrBZtUCMVwqJgxBtmGuRR51zKNav",
  "key20": "5oiFDLajGhXNcVH7cg8PNnZRo7bydTED9VbbF3mY54RbRYMo7h33rmGSY2Peo375KAJ7gKz3a4xjXjhGsUUbX3yF",
  "key21": "5gNSPEKPa4ZZyU4cjB76ThTWFyv868dKigzty7QzKeEMe39D3GZEFruqDufsPY1xVA3Y5XkxRRyyt1pHSJZkTZKo",
  "key22": "ugidZTeBfraoDBPQAdZo4z1hzjzB71K7gnuGV82yfHNCaFd9V9mvTg9UP7stuzyXm5TmzVHt5HJnf9WbyAL8z9L",
  "key23": "2oRRz3QWE2in2tUvKBp8brQpP9hSVpiZbELE8d86S1uP5PXDqt2cVPmJ38dKRnFASN4th5gGwvZVRoZ29Bq4cW9A",
  "key24": "5fFt9ZDRXWtbiCznYqyN5MnySdeFeYXazeLuCYxFw51yc4Lsip9Q9RdrADcm57bZ7MMWuPHjrs9GEET9xFMsaLEm",
  "key25": "GrKzRzU3BLJ3CE56GhLJkGhZtSwY8fJ7KcyoVL9k4LBNUCRbS3uYuCN2Uxh6xRAy4nJTLDTm1VXAmwVdS7vcrY1",
  "key26": "4683Xf1vC8iADF8Wn2kE1S8ppDowsfveE8137SPeGVSqgiCUftkikiy5rTt7Am1ULpkLSywNNA9tSFpE1d1iJFVQ",
  "key27": "3SbBsshDtEVU2komiS9kSBCfLDY6JfM4v5C6LBsZSCtdjZuSHrJGfYrYt78caHi6kjToqLjBn4TXRvouYJo3o4vn",
  "key28": "4RzbvAWJKbxYSq4gzWpKefLbJqKCC9sMZafvvEvdXoif5mZk1bGT6NhJenUnyrXsf9kEw4PEvixhdDaJgUtXGEbd",
  "key29": "NQB5DB3cKadY9ePFbSrmp8jAC4V7hKHvNhDm264Rs2yrZoXNMoegePdZGRRokrf6b4WsK8akxWgqYfiWZovvW9C",
  "key30": "4H8XnP4G3BxfAqTtN7VZFvNV3tkkwrLLFN9cKo4dcTSjusDwirQJYBeThSiBYsVeCbxef4jAWs8kBDiwGJ1GTWHy",
  "key31": "5ktgQeSDyiWrjKHHqW4bJaoWjbiLoWgdVyY1ov4hWzPwQr1Scnmnu8e84BQargSDoiQwEU84gt1uXTPvXiFXxjZr",
  "key32": "28QxxZxSqyKxMJk7THUwu2kdQ5HoKGZFwbRTqxbxwatxF33iUzjmv1X1xXJqKrtyZetkY88Uc4xrfME7Ru2LELak",
  "key33": "4n1GekMBxWS4VhyNDM9QqDLiDZha8jBLg96PR4zi3cZ5qEtsxDU68MZcXsqHDKDDubqviF6V8RcterSWSi5YvqB",
  "key34": "CEtqs32BsMpK9dUDnKQ1DjTXRu8tsiRQ7QGBHnMY7uLcRRt2LoqgUHogiLpi4gxcDrkmxPBDjumvsJpNBUKrBC6",
  "key35": "eUFvCfHDHDPu3pK3jWYqXhHeudiRzrCzADsZ6sUfgTunJajD4xCsQxjUdPn3ecJpGVNUaSaUTyRKY6XFVF4KC9x"
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

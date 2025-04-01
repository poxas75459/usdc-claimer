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
    "3D16Lh7XoAWBbiwDzewiVSaJyFmRxTjkxnCGuTJytS7fWPs6nC1kLZnyZkEsxc92RDQLnJRBychHJJgFPHKSbKSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uZqpiJp8pC1MEfUVNxAU6Stj6jmDTK1NayxSqRxUCpZS8WG2UDC6mh2xDZj8vjhsfQdAW2T7aGqWnBTPMssQfe8",
  "key1": "31mJrJWeZw8USkrUK7jsDa3sbjrywPshdqWaChNkQJQJ7x45x9VtK8WAoEiueYeZ13FFWWkp7KvcmzqLgUjHGUW6",
  "key2": "4uLD4GqN8LRrA4QUDgSy2MS6YW5nffQswDboJKsxF1vQ9ypoJHgRWjZBewhbuJgTVB1hwibtYLYCLnN6S8D5CM1M",
  "key3": "4JuK1cvf5nAvwB1a2ZWcV4HkfAup7RkSTxVKT6M9xheyKt81VMCUNsmDb4rUCWmJ81uBBdZNeo2ajtEcZwgxSxch",
  "key4": "4ZJzyQA5zMeMD3Srhn4GREn7MC4GR4Eknrj3WP11RddoKKjbncscwemK4R5VuqVDn37HQ8m7UnAKgpqS14hd8ZqF",
  "key5": "tZtpV7fPUtJYWDueeSjormTUKcqnXzYL5Mg3ZsexSfB875TVeLcWaUA8LSpzWjqkZ8ojdthu2rFx2DA7v3tBhCW",
  "key6": "2tx8ph8bXgMX5Ds78A5QPmGTt55C6u2imfExJcQBuJSd5JjXtq8RKR2fRAzuVogPRr7f2SNTk62MhzSJrFb3zpBw",
  "key7": "3zj7rkeKzhWdgtdrNNwL4TS6juXmpUjpLK27sYbFgquAuqD4FohJYV5aoUo1fGVhcCXHmxXFrrKsX7esPpf1oBUh",
  "key8": "2AVBuSRdQkQW4t93BLnrb6dbQZpbnc3S4WFca443yCRnmjFbHYcPp4WRsjMGGVs7KeMiZ2nTMrAc76e1Fu3W32wR",
  "key9": "SGi6EjQpvDWw6z5KkxopgySvnbgckhKUhRJANikuvpQ1Vy93rdYH2fCmwJjYd1K3atLuAUdocoHW5NUZYpJ2P6b",
  "key10": "3pmZzV1JFFwE3UfU2cDFhKRCpawzEgQN5RWKRoxnnsZ3rzyeUMpPcSph5Cn1qzCUMF5xHoYLwfk7voFRNf6tbEKg",
  "key11": "3JWnUWA34aqYJZvcxyzm8WRqUQ481v6fTGxTMNUBMiPYRzygHaUmSxfDzTpstFJX4aphmgEU3XHV2mBkVGgXoesP",
  "key12": "3T9LY69ZmDJA5zVLJdGYwMQ5oSTaiW1Uch3aL6vzHzadcddLZrnycf88vwpEPhSDBvRUemX652gt6eeoRaaeVfuL",
  "key13": "3Je7Uk35cGa81TXSEA8GKS68Hkqy9N61MvVmRKsTZ7hA7uetFMJyMF99KGKcgcYcfA25edqqXHK953jZ86roGm2Y",
  "key14": "3g8DzhhJQnmWXsuvb8BiiHdNPcUAcaHZryDxkbHfCkeUTY6WT66e9kRjb2VJTQYyXt5CKb93fx3sbnsTVYDLH6o1",
  "key15": "49rRHjzaFciPE1gCXZYiTjTANBrp7XMEBGANqDSLaGHYJHi2SdMA8GbGXscWxYAwM4Rh5RwjrCAZXmAcawCvWDgy",
  "key16": "5NXjqnnGZa4BZHFJdHAHRKo7C8yv5gN9bDguyesob5NGpdd27PyEcXhdBHyTPTRtLhKLZoA2z3XsA4V3JXkCBt4c",
  "key17": "3BC5fwKma3j34wLoPSFR4yuJ4XhqBncnKCFQhudpNvyLKXGmP93RYSmQRdrcFdeMU2FGZNp1qAcRHJJuPNtfVDP3",
  "key18": "3uEvJRwtXQjeC6wtuYRoQFKpZwCtRUDwfo741aQ2hyrA6Wc2rJKYiwA65ktKFSNarc8x2Edtf1SbFMEF5ik5uvdL",
  "key19": "GMRcitAY2YvKnkyZ3QAKambTbDvZ6ytj6ddnq3LPezQoyDTagdwYXak8WusVx1hvLrTYsVoS2ANoMe25jpVrhiA",
  "key20": "Phf66NkvhHuG9CkYDSfPyZCXLF915M4btFnb7uAPVSgfDSDpNJMQKre28C3CUr5mEJvDwiv6maD7UZubrzQXsq9",
  "key21": "5sJUtKycV4dH7iaC8pNuxrBMon3Yy1vwBDiuj9faGnSF8vaTVWdEXNtB22aT6ALb7AzQm1EUcdSZrJs4nNi8xfhg",
  "key22": "5BLoiZU5wUTZTuB4vrdQouzcVxSRXoEZXpCet515SHv3UKLbwNSfyy1Lb7Rxg1JWtUSpy6Sj9WFEYJuDDGTPdsUH",
  "key23": "X3gq4D2CJ4VA1BsuQ3no8q9fn2eKB4Jpt7ankoZJrHvFEWoLCVVDz6WKBE5RcYrwCVXw5M5mVVk8U1UYcrYfGFb",
  "key24": "5pxDFgSUUZbHK8kcqhTJrsKdybEY3WW2TJUrkGkDuWWuYCoTCzT9j4GgMYJ2tBaaM9fZixRL9sFpDrjvsNENUnWz",
  "key25": "44ewndWCjtXnoXmsntfdwJ61WRHfr7735PFpJQCGq1ox8Hcy9GE2Lw6NC6pWWtEp3u7AW5MEhYXBixHu4S1EoJkT",
  "key26": "4hF8kaAJLhtNwvBUxPEjBgZkXx3LFZ416su5vQ11YXqiyqwFVKgFgek8DbeXcTJpujdBhqUMKVZaK6hgUVDRkhEU",
  "key27": "PHqSJm9YJbZc1sbkeiyTsqMmoAFcdBVDLoExPgY3FBDkWk4wv5CXgPvjrvKPHU25msZjac8iJB2qXrEYCAnW2i6",
  "key28": "577UbQU1nKynokC94BEbsXaXqLxwkLiXAfTJvPTMj1xV1EiiRg7jrSjKhg4ViHi9qdi5A4PYGyFhCkJwF8WCX49L",
  "key29": "53JcmFzhVe4j4L255dqF5EUgZudnYxRokktDTHL8sQPokcViqAiivhDKYTQunmaefpjqgpjWL3ttUnSbhzJHDjxB",
  "key30": "31QV4oKBTw3ovdQyEY5twQRbd7kW9HkfsoJB7gPERaB3W4gNZPxKnjtVv7P6W4fh2TLoKPk2mFGn27T3sAijz6H3",
  "key31": "3BfhUs56YpQXt4pTzFX1gwMWDvgC7MKPQm2YuRwtif8qEotSukW4MMiBf3wmqLJb9xVmhzd67T1bVLThdimQCRbN",
  "key32": "26wmhVLpdnvSB8NzshL5vGpucpihCHvGJxZwBUZBXXnW6h1K7RjDSjkkyEBC8RRL7qdMmbD63BXueUKdxSYP96h9",
  "key33": "3ziwm5ot3hs5XizDSQu6r1LcqPFMqGtJZ6uYHEFbT2hEocBfsUCUNdrUyf65BPefUbaixRkcQyscF8ex1apsaJVo",
  "key34": "3Ze6sWNVfboVhc1fAfkNWgJuDSYCknFQ2JHsteFmok8Kh7HLwnbEpmqp1AbispJay4zq8teWfuKvvPURdRgro7xw",
  "key35": "47BTnvSSbtCYGCDkjr7Kr1wWNuZhdq5aW7FfNWKWJoAZizWuG6LxWgLyyKCMG3fwedwvpTAef2C7fn5vd14WGp3V",
  "key36": "2FD4szikMhmqoHRTRbosAR4zH6QBXzA3r8r1DKs4ZdjyGVTBPz7U2v9aJykiYxH3o54S7fkTLKuwxmadpjyiCywb",
  "key37": "533fdHKvxc4HaHJiVJfJuWLePDyVZtECby8qxdSiAhGPSbpMxPhi3ZnFM6kKkc7J386A4H33ndzNqJSajvGdzHRk",
  "key38": "34Lyabx3SHK9WWGgcBoAUTJapLurAw9XkDKrzK9VLN9y5cEBxhymztUvDHiJiPoPzyk5HUrDMpbig3NSku8yNFi3",
  "key39": "5Y2tWGo5ufuAaVYsjQpQr6om95ZgRFfuw7MGw9WBKeHKrHPxTHDmDL3twK4rLnehkjmfSZv1Kj95vWY95TTn2nFS",
  "key40": "2XfpgYQPtjFnhJxVdHzziV2Mpyr2M7KYYifUbMq7rjDdm8gDkaAD4wneTxWaMxjhNe9SHzSvTS1LnrZoRY9mLocW",
  "key41": "5dEijEF8Kt5WPrgZn2Yy4H2fETegtoHGwnyDZohX96e76gzVSXcmScHv5rixn4DTU9o7JTKLtXTAbtdKMYstQK9g",
  "key42": "54cqtgsA1tofHkMDFYJhdUmv3bCngz76YCP4QNpLJqUFv6GmzW6XUojes5ePyT3LJfYcXoVQTY4JTCAKiKhfk38u",
  "key43": "4r5jUxpzHcccY7U1fSyFDj3ZSLNoa6CpH7QQqb7ku6GBmH2neNZxS4LP4ac6WiXWhBudMXgrtQozuXqa4yYfV4QX",
  "key44": "4zNQtw2fvu93dQxdn2PRW9BgrMtnyzpzN9zH7P3yftu85MtRiT9iHCbvPzbhm3nNCWnTfxVHGbNvZVwWoCDu63Fx"
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

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
    "58mWHUoJMxJ14a9Yq8RrPahiHqcoqjGk5sZFXqqeqqdnSW88yGn9p8nKs8FZZ1adJK7xeVB2W79C9yaq3Uq8G59x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjGfMPMhXSU3SUSrd8SNVpzeDiJWpZVxH7gJtEK3kwgibxkFYuFQW9Bs9CggfbCN4EK9Lg5fHDZ8NFiBUDVJprj",
  "key1": "F67oaEPcEK5MkeYbYQbd9RqBFWxv5MReEvyasBGjkZ1v4PHQuqoyb5wY4UgZfh6wbG9d2DDxnmoWraZPrg1PVN4",
  "key2": "3nxzYZLYDHRdvR4QmqXyJSRyMTRpWrmxQ4jjiGWiwZBiwn2XgctRykoioHeVYoZH9xZoTxMjgDtW6bfhrG1qaLLZ",
  "key3": "4zrV5sQyH4r9Cv2n21A6sdc9zkoBNvozKReTjLBEhPP1aY3G67TXU45jmh6Jut6sFhWPpo67XmrrApY3YdCpbtLf",
  "key4": "2NfNQ1yMB7wQYpN2yACpbu81wiZv1AEkWwVnFuqzLiEndumee31YaQqUfqVYzmPgYMvm58EzzT1nmduAJVBeh4EK",
  "key5": "5qqCCZ6NXjW1fiWrypDc1V58XsQ2iH1Pv1oPaMBS8n1P2pcnxwvZEus1xxUuGjjyYiWGJ1jwe1MSWXmL6iMbzw5i",
  "key6": "28cunMwaT1XJYver2MdqBTo42kdsxQK52Zz8y3msRfgWkawt9i5LHrRp7hd7MuqSBqyBkbrkoj4KDWibDN1QeZsg",
  "key7": "5CaVYf8Cno9RJpWKEf6tXXgHADeEmnRkAmFdQxY5zkxZRNwPxSD14PBjnRPeny8trxeJG7LW6EHtpshPSW9hxJSF",
  "key8": "2vyqDnFtiW8cEKSkhf7Wj7jzJHhzAFLC2SYmneEqVJGLQZFL1EdqujFjF9csL5JaCeL5411u38NryHWxKeJWjcdP",
  "key9": "34rvdc7reyhEEAxT17A3CUzBMYFugtU9UfgWSRTkDzBXGeJZMWgcH4HiiE96BJDF6dXfBfcGuTQgWAK2DGu7qetX",
  "key10": "GuqJebbWPhTPkKQNd7FH1X2hL6Q22ksGwz7zxMMPYZ9g8in2gtLDB5G68Xfaxhh5sWpj6FuokGvzFCu8SmHsG4s",
  "key11": "XAwQCCbEf1NvedYCUF3JyTRhqbrheZMHVFvd7G3ZoysMGpBTkqdmc9ev6HsgfbJrhK2g8QJTRUfjFQ1rnwKUt9x",
  "key12": "5GZqwH6fnRi7SQiyCEGZDfmCUkv4e169oBeMCNnWF8Fo5gPkHRy7pLq382RySTkNpjq8s7PH7B6Ci6isQx6r9bWU",
  "key13": "2c2VCEwK6E9VXonzcVN3YL47EATTtujwSuzKD7qh8ocGJth82p41GSsUKwtL3KQAkK4J7HzDesv8xzsYJjV5RQcG",
  "key14": "4fpTtcfBTa34UjYTFvP171HZmKNrr1oHaJXJNRUL5U2DrvbpxAdBmnrS5bacAkwebFpfNDbXsjFcxC6jzTq2YScq",
  "key15": "56mnFmB1bFgAgqhWiZuM4nv6tvajmhdtYVS2SKESVGfhixHasLqtV9sWfUk3jsmwSGPVR4gZvx4oyCnRswvwbesk",
  "key16": "3JJwLGWfG323yEUNRsfRwiakfjmfgizoHuyyxTfAVHwDCj8u4jpJn7D42X98awYBVt63Hbx91wsipXDLUnn44Evj",
  "key17": "Yet58CUmDzDAcDK1AMXcXr7yXhXoyNN872tm71dnMy9iCdmrT8diuCXS8oAcPRXn9Fc17QgzvASQifHVsbkPns4",
  "key18": "5kSUoe5NVUNX7QiApjofsA6ixFQPfUKJ9CL1KxFbDtujdkZqkXYcVxDKMF2TiDPvxxQszeaPhi8MW86mwExdyoa5",
  "key19": "3waNzT8cvJgvbnb4yUeRPbCpPi5vTAb7Sc9Bo8CxgrxYuKeNSXUFmfFc4PD1mqsVrz25mnvMnKHCRR7Hdh2qE1E2",
  "key20": "2DtRzJHAKt9n2egqc6hRmc8s5jCMSKJDsm67bJPAthf9yK2dCvZUbUZnRBYafgr4UFCj8xBj6Vpa3oRZpx3HAPTk",
  "key21": "2ZNnMKhwWxSvPqQ8zs7LXoDSGz4LHjJpkpSnFMTw5EUArg7v6YAXdAyNduzTLRdG2yAEmYmKriArg3ANnTkSrs3z",
  "key22": "59KbMeshh7txhoDqpPed7ShXxDGDAyy9EAfctGAxVnHkMeTeWFcr8RkC4Pg7sk4QBFgz5uGyVk8wNVzCuHhiAG5C",
  "key23": "3rmqptwSYkVyLoWrSrVYWkpZTYsTxBVPTeZXA7ohUKiNikSootuPo1i68baHVRMGVMmU3Hwzj2p2u7hZxME2SKmv",
  "key24": "48D9P8L7ap4ftk57HhUN9q5zw5T8h96vJf7njAVFDLtcrjcPy7QjG3s19dxzgDAZo7eL8Uzmrt3QwJPTbbp8AGNF",
  "key25": "3bJH2pzyVmQEKoNRyYYz1suUZKEy4RavLTzLrWXAdaaikQNAPUNkpGA8o3fDrzuXGB86oQhapgJj7cWJJjXHN2Jg",
  "key26": "3ZT8a8TmpfmF8G5p3E57YjX8eYU1ZHYeUqeVqT4D5hKkJFigAEu5hm7qqPRadKS1tcoYUoJeVxXMYmAJ5Gp7m1U2",
  "key27": "38AFEMmBPTKVhr9S8RdNeAWZZNMUncaTe5wfoF1psD7tmNg4S1fsaMzP5oYDECvb7c7GgSS1hQskdiFZtsnV9kjJ",
  "key28": "2vWHRupTqubH96wXZgb54GGJHC5cjkj9MZs51oXV8YAkzU9GQZkSR7FPAkfRGduHG4xqLsmkND2hEvt6pJkvgiQX",
  "key29": "qX9WjPELoWxT5ZJRBJ5VWddDjBQE8X1uAQJ7ihbfgu3pFTEThcQo8L1U8NrKFyfqhaB4M97dQeN1BWGgqVGHbEG",
  "key30": "51GaAe8jQTGrj58fe6tyttMxeWBp4xb3fyr9bZzA4G15yhjV7C1wJdCgDPp6BWpEBrAV4WgfigeLi2eThTyW7tfx",
  "key31": "52acNtHcMUfTqFxgq5XwDCeC3JAqUKg361P9hevrXTDY9J76Wr9aVtNoBFrauqMerJcakFZWJKMiseHnmiA8K1sc",
  "key32": "B5YkJKxHaWLktFaHAsY7B3GPpUdjBGTd9AptwmbjhYHZhrWxXWP2cMXTkAy2g25A6NuohRSeWgKhuaqjnxE3aZH",
  "key33": "25th3B4Aez2bwiWPnJc7fWX96wAAXop5H2YTidoEJbzBCpUxZyZmaXicPKFBJXT1m6ZYQYw8AA4b7DmW8jaBmryp",
  "key34": "121TWFkJwquq1daWVKE8YttH99kSP8eesLRbAd9YCTbyjvjJu7FmhgABaBwWsKLn7fwVFKrDxu5RH39ojVtszdCB",
  "key35": "2T3XRtwj1ufLLoHPPzEzhQ4wdN9Z9Hk5s7jQwoh8pFXEvhSn5LgKTpYehpaLEq1mpFpmB2KjvZEGJFtuKKtQBve2",
  "key36": "4YVPbhwaPxfG2evKoKbDHt3t92JnT845FUwksK6oHBTHcVvFRbYs3q1H9TJwTuMvkT6qzXsdeqVrKUN4mSNAs9b2",
  "key37": "4H7aMGoatRbqERsz5YK9mbpA7G1oRL1wRMaj1hXAFDgxtWT9NUp3p6vQTKDPhHUJYHnqMpfdX7qqLBBNs2LYDEyF",
  "key38": "3CaBPvXofm9qEg8m4pjLZ17Jr7aV9xf5Q28PjmE5yCyDJ497hoV1Zr137Sm9nvJAs6wyyaxvGi4MfmnjZTK7j3bx",
  "key39": "3zorgrttXVBinzmKsxhJ4GrQhmVydn6F11gu99j7sxgH8g3zdGHrfu7Go8GhRY5EKxrPZJDwevkGijPsutcxgHn1"
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

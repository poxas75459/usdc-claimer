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
    "3jpN24gNVWdL6HohnUPyEbxvCHNaCgLmMbiPhJkz8s7e7Bs6hLVo2tgbXTzR7jYnSxtAc5foZHtwgRTxUT1viL9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xH14emp5Mq8tZUhfpM5fdoQLDNqrnW9n9kDjLRfwHfuo3VKis7o7GaP9xJFcZNNv8q1i7MZxCZSUeU2fUtUvkX",
  "key1": "5QWoGREWeuAK9vhsrBv2BnMmiTLHfG38swfnFkvYFiVSnktNwBDmdxNgWhueCp2piqroGcXnBDuuFbjmNsrmD6xX",
  "key2": "51HMHWMAjFehUX8CaAR5XwYVGoSyRjrDciQnAXXahE9VQnfgob1Gtdm7mdmowNYNJ736sUet7b6H9S95WNAUBRMh",
  "key3": "2dyz4GHuuvij1nHLr72tKnQR9VfiMJK1pkdEtE7Q4SAzQ94q6UeQwC6zpFHZeorxnjcadv6C4B5Zf4Mj3pwy6Qhj",
  "key4": "38ZCVpUGVLBfstcFvs73M84CvcvhKXmFRxgNNLyApi3CcgA4moV5mVLoboyBtQRKW7svipdpDJiCNpADnM4mGJ4H",
  "key5": "56XK48fcuczcRsKXawYY6HtREioVFibQ38ckvVuydVuazokLhKszrHdxNnAW3fJ9Cftn3ZgqA5KBC21ifmFv7T6",
  "key6": "3S2t4472RfodiU9PdEPGAjkfQKhwHMZL579JP7KpiVWsK9VJbyWZYKnGTAXSUtnbC1kHU88WXYW4gfdeV2Wiw4mJ",
  "key7": "65vhcNVWKy17Xsz4mWQMECfmj9ZRKBLLc3M7zHh34BQfLDtHzP8i2Hfu4NynGHiMD6bQeokMGaxm4iJPUqUwEsKg",
  "key8": "5awXP7t47A7GAj8FQZNKLQKwSLWFsErpR4Z4rka6HD9ww4py53KShqYknuY2uKaZNNwsxiSkWzg8xhC517UaSKoU",
  "key9": "321HYr2iR7C2FeE2ZBWbSBpvqaqA256hmyFXoC9fyamUxXDXLbVt7LMENabGqipEuNkkvw7adDyYuSoogdXQPYUx",
  "key10": "2aHCobV3EUFS9LpaRXcvaSzmcMbLaqhgMkscu8CNdFgNqaZvSKHgG9dAHSFFr8i2fDLTGwxtadXxgHP2RFjDorVT",
  "key11": "4g5vVKQtqxSaSCUypuVYf1HnZ3RnKejxtaz4MeJNhmh1wJKRL6H6j2g4Qq18THbZp29KKxH47rWKD3tq22sk8YbP",
  "key12": "4MxtA3QSAiGa96Zi91EQ3fCosqRCSTdh3T2yC9JSnZrDMnmfDsXpL19PqMYhPFmjKjua1eNwx3kN79v56fQJG1qy",
  "key13": "2PUe7f4gtQUiFMF9Gkwwv2U73Q8mjwVyzcVCaxciADbS9hh5kGp3LgMvTU7Wb7V4M51FypKfH5aFNXKiR1SYq81y",
  "key14": "5yrWruWqXsKpSrhRGgYUofSg32ozHk65WTHsyg3FefiFJhZB2B2Bt9sHcqi2G3taGoGf8bAHZZwF2QAFUx8Lxqia",
  "key15": "2FjXvkTi7TSDnpJ3rhJoXprEa18HWuiNVZpdY2RLmYZUBdGHMyJmzQeL52fgcvKpYXqcnEDggQTWct454GB5A3pF",
  "key16": "5QDxNqGHyMXSG7M3Qp6K1ZcFvHbC6aCpJLXUQpFHv6udDkSKpxbiyxec5muqooaVnBdgrseprNv1L8kHN2Pi6ikB",
  "key17": "3KFRDqCyei1puK92k1PUEgRnbiMs7Ksw7aqkkd2m6Hy2tt9PPc7d4g9U7c9kCyPrMBTP12TZ2sFqYqKjh47NcKSg",
  "key18": "3om8mbb7oxqwP4hrAJaPTmr7ZBqPtXJXJQVQGKPPhW7A1wNQFsSwf4PiWHUw1GhsNTYQo4TwbQzufwVjuBHh6xjS",
  "key19": "5E85cJHYSE1YKR7DGyE8dHGz9Zb4sdwEFmH7i16EoyzzWHL5trW3Mgh2oXswFK58uJ5CHJ8CSHcpXBbHQ1MzvQfY",
  "key20": "5a2x29fAKcPnYu7m1epKqNphz2jPr1boqYvnSa27opqkV2f51gswnHKX11bLa1ughjyZUK9tzcbEBuf5aGbt95LE",
  "key21": "5LU6Jac1bBDSGmxCMYFhaNvBd71sZ8m5QNobQhvvWxmdkmX8Zo55nRxf36zSKw3UPboTGkxwRT9sNK51VwRZjdGs",
  "key22": "2ttjpdhhYzSjPFJyyC7Az1oG3hUcavMoqF7AUySShbCXSEKsYJxnhVrjAwYkCFCWBQVRoVV2dHgtJxb4GpAxr3Hn",
  "key23": "3qcJ1gv98fVDdTW9yXKHLgAa4aBGkWwhV2dFyvHN4fuSxXtGBYvDY3Hv14oLKBEU6hZrGQ834a1D8CpN9HvSuSgk",
  "key24": "4kf6p988tVUzNC12HK6Fjgre7AWTHk4D7fh2LqeoVXCgYXYwuCZD3KVZCQv3JP2CooJDKJgAB3tAym3CZRhtRmZT",
  "key25": "4EGhHTx8SJrNjTLYZJikL2PcSZQzVhumiqTZZcwSpDUPVkZqDzwnYiqeSvnE8bt7HLGnLUxFMajdf9sAbmfGhc8w",
  "key26": "r96gG5J3sCrCZPSdok2tAyjV3jWBFxZigwUaw8JZ42bXDUzxdo7Xx7hM4UzKXbnr2UzfYRn9K2RUKDVTK9G7nyH",
  "key27": "5kGZ5nCvNdDV2UkWe2fbvPURnGZkG7ewS2ux9csfU2GASVdnwbNKqn7pCQayWAHk73aJBzU3tYv3eaUVtY7rBieV",
  "key28": "ih3U2WzTo3eoJQbzQHCyrAMVzdFGzpZ9EDAxTuRcYgsrfQQ5wK1SrHBhaGWLSsKEfHpw3JcFfEkmoTiCBt4XnXg",
  "key29": "3jBjN3yzTvyFAWkfRrHULtp71b5JvjWphpQAxtb6tLuvh3BSUokDKmvwHm3XKYZwWdJwtaFLygCJRub65Y8VUkr5",
  "key30": "2fN9dJPe4RrHJ1bHWBgnxosLSff5v5q9sdN4iNyr8sQgh4WGTvSLXucfmKY8AKDxxohrTv6wBNeF3n9utNK6zbct",
  "key31": "2RQ2k2yuLCJESTLdc1pbEwiY2KA4ea3HVXnbztTsEP7KKoBeSEeb3sHHcNjKtreGJUwCgZqKm6JdFK6VnJRpVkqn",
  "key32": "651zm3Cbw1QLDP4s3T7upaGs8NrbUaae48DiFt95dmKaCXBwnCCrHGzU4pk1B294JQZfzcHPJsK2Nfe9B85b5qy5",
  "key33": "3cdvY1VqRfpnvwBAV3YsykP4v7MpMBNDtsLjiA7ymPgzfVLHm4Qiifhhpje7NuakDTEUGAQguJcBjcZLkvmufkWX",
  "key34": "2yVeESzgU9rH9aA8LCtE5HCedMY2LLk1YGERe24dFRfviMLehatm7o8ncSizbUEV1fDroDYcB9dB7KNCLuzTSZsQ",
  "key35": "3TwRCCCudjhH9Vd1ebE32eeqprJtTx3p1gRNvbEdMV1KRCbKuynqxFLiBdssHK6GBKAnwayxJpzS6XKdLdw4R5XS",
  "key36": "fY6nkT4JJBGmWtt3JBcSJ4DyJGpiWA9oVCEoV56R48aB9Mqw9z5peKSeBUbx8WNNrkgvaPYscU4kBYZbT3pjtxW",
  "key37": "5bRi8NjA4aETiVoiDp5z9khZjxNcPd3zLCCQajohSvsWtRBuCW4r8PLfjmngAwstHBUmxp7js76WLTtWnQTbcHUp",
  "key38": "3J89QHTQJyf6NkXDqrAWEHtR6sRFyDAiPobgubtvAEfvKrgUD8FFSAc8MkychGq5mNPWu5bbqSAYdTqBbvFEa35C",
  "key39": "2vcSy6xrnuLtPVZxBtKVVNCBvX5EmbZ86iUmQ6zuKAjmJ1QGQKKKZxQAhS2cmvCmS9C79QM8NJZJjspTBv5W4YXM",
  "key40": "31CaAX5XsaibycLEafGdvQtTwbtf76HqyazTUH2S2JaFk6M2HiKhTsF3ARrNmUuHe8A35EZDSseTH8pXKz1phWzu",
  "key41": "4Yhbdknk8grBF14h9xiT9jDeaeXCTu95zfwBe5pfVbw52VwG43vZWPuGkohY6Vf25uQd9dYhQe7XN9XFoXXSa2qB",
  "key42": "4uuK1k758ms7MoFVmQfzRi1UZUCDGSRVBAw1SoB5J4iG9dnYgaFq5C3Z2fjzAh1Qw8FCh6XWPHinz9aMpTs7HRch",
  "key43": "2RZk4FS3GXNeWvYpLLyS38Xa9CTLNJDpri1SYLr2dqmNF4F9xnU9bpSvDQF97svhv2wUZN6Zyh5EUHJXhKWvKkz2",
  "key44": "2qojLG4kqDTs984FkP33Sd1LUczVDU4UTumBXYwmqBGrvXs1JRyB1oYxXeveB52YfStgaWMY7eBXsuCcrtAEXxzN",
  "key45": "3kJ1V1i99iJ5mvZfy5fW3BG1oj4azpXBaD9u2r44vNhfAJUx62zNduWaAwqWcsvMSYcxcbRefTh14NVz5qTdgbBg",
  "key46": "2u7BKQyfqgMnjMyph5zag5FhsjqpeUMCpXM6pWMm1thpdgHDZ81nTMraLmTdCtrcL3JQa7MLtqiA5HghYY3rz4fL",
  "key47": "2nupCcsLXHUSpWh6U2dgzta2WAFsfB2gi9C4zLeBTz7L3UJ9hXj34yUg5rvAVG4Pcnd6xmwNdQUqCHMrmx23T9VS"
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

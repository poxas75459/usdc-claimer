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
    "4Epd9yFLcC1LR8Wpwf2DDrFTQEgBp1TV4W8sVjvRJ6v1Hf5AEDPqAbu7qW3gruYFqhdLCR16yEGg2qfBmqBg9xHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iRr2cwMDFoTk1xMB8LTPkX3dWyEUKkvVFiDwYtwnXU2tiweJwAQtyzkFpvMPV5vzj9mneNPPNxRkLpGR7Bqz3cs",
  "key1": "2TW3vgwBEZ1DkaGuqNXZ7z5Qt8FFKczhNju2ydV68guxupYLkLuZcmrXVHwvvzxb2vpkYSxQwzLBBfuMiT8esdTu",
  "key2": "4ZpoB3KAMuX9T1bbx4vCBvXDqvkvEcZLAPgqpiJEbDRkvzLkpa9ixM6KUpgxDHMES5Rm75Lom3vtzoK8TaMdo9TV",
  "key3": "5fTKR4UoVfmfqrZCcchCumSe7ruFdoFdccqoUJrCd8rGGwCTus7S1WYuK2EebgpqtYi6CNauch48ykuiQoxysTeT",
  "key4": "3xvjTz1L1P67MtvJMS26TrhmCdYi72wpYTjMgyXQHcnq7BQdym59MbsHjJ2YoKjmQLvGHv7pHDpKLKE5jVajkw6R",
  "key5": "kda5X4UcnWSvFF3HD8cWJeYytSe3ANyTREfNEGGzpSuhCyHrZuyfKCZFXNkbk89NKA7GXbEuSY8Fq2BGioqFcbn",
  "key6": "61GV9i2dHkZr1yENCoDEcNBbPgSEhF98NGu1zteuvuedEV8BCa64waFkCtpq2SBBFgLyS9TkEB8YE1iwCZeQdpvA",
  "key7": "3Mk2EuCM4LvNGU1tkQfpzYui9dzGFsFgMQpMsaGQz3zNyiKzRTDihEeJdNxvuVhhSCeVxnmtymqojxZ8qDd2FW4D",
  "key8": "SqdUYqJFnLTjGp5eyRXVKcrVtMU5nPCQAs9Kmv6gP8TWbNQALUQCXE7tHQkiLfQKTWmg7CoRTuVZgDQVrJHF32L",
  "key9": "4BdfCFLQgCo1k2asq9i2HsScYP1LvqEQVMZgY2tvnfdFKv1DSLyxTqzFYFDJydwgFUWbRCf1RnwntKrwpvR5Q8jd",
  "key10": "t18zcknQ4i8xzEtTgzJYuYArU2Sk6vCRRupvDtkjGJT713r5Y73dZ1K49LDTaesZb82RQGVktn5xBn63Mz6duhY",
  "key11": "2GzFTD73d9jcCTzVcoQrVjjwnovqeVyBLCVKaWjtL3F4TmS6ZFqmBNFRcX3q99SYVfBMJhXZyaqebernN8r5byU",
  "key12": "2NfjXfuMWCShSwZMGGKcqDxUvNSdki5oj1ffYGtme5fLMABtzgEjnVKZv1ZRMe1DyoP6qpN4qz5sCg2tFJ6ALJ2D",
  "key13": "3QLyZkThWjREAsujFaf9FBnjZkzztx7JrYGq3H1DhK8vXkXVMgcRY57QSFmmSvCipmtokBgU6cSmdxk5DHrTr6MB",
  "key14": "XDVeeRuwm6hj4QgzRfnZ6sYDoXi1DioEcDTNfvu27gK9cnUUZWsUqe1QcRg2Ey36LKJHRL2cwpaUT3vZq4u3kui",
  "key15": "ZEJWjdXUxgv5L4pzykWivZQUTdQktvBmF55QbC7RRUiMCpyey5Zg4ck9pRP8Ya4j1TfJ828oufGgvxbsSWFfknE",
  "key16": "26A9d9ESjkWVwQgSd8DKdAip2w4SfgXQV8sx5NjWBiKoZQDnATz355jQxddw5gdLVQpM18p4bdJiwf3SwwSqcZGZ",
  "key17": "3vwbaRC3mR95Su2P8i7UMEyvf6Np12hFuxRUu4C2xB5UA9BBLPKEonSoisGj95SvY9cjhHrUtZRv3ZW5WzzJCXEn",
  "key18": "JsURyj8pexiRurVUSN9L6MYTQirKuyExviJUYMsuLd4C1Lmaun2ik7dVgX44EZmZfHcMvTSXZ7FvMb7YpjfZzYc",
  "key19": "5nYkMzkddMKChzezrYQZdTzkJKLWNzszKEogwCr4D2rnMe6Yc9CDUmxkoWoz183s6jVD1ei858zy8F63xGbz88u2",
  "key20": "3R6p8sNB6gDEaF7rmpfvHpbLtK3s3B5GXb4idCCRDgSvmDnqao2B7pTi257sm6jkzBY9CjtArwAmBFNyLPaqeKXQ",
  "key21": "2MMTiyY3twpcxCVMyGSpJw4TWKhMMQAnYg5ZSE4pKVxCKu1RJkrTNwRSbgr4z7bVwkr4JnN6WYD1AY4EfJ6CfFcT",
  "key22": "2DbNRAuss8gZac2VzKr1U38PVDNqGq17pk3pJw8Rykn5UkS1arVnr7sJqTcmnZLriW2vi4uyDN53xSD66W1yqQET",
  "key23": "27ab1jhqRp7mWT2erPkXNtSF6ChU6bHS4tB3xHkJzWEJBfPoreqRbpGxZfVdAAQ3jkRvcZNK4QjpxxPAqhR7WGXq",
  "key24": "xXApY4KKAcpJk7cZY1TdfDqPmBh5nR9r1LbqgitrkQXTASpbcYiJjM9kJDUHUbo8r34E33jBBPeLTFxFpisQzoB",
  "key25": "61ttJ6uPLHQ5fjY57hF7FbQ7RWcw9ZF1dhqg5mvBLkB2p2r8eUSzX6qrK7g9EYpoZQq1daN2gMrVpnXrGYcnNnWx",
  "key26": "23QCMs4PrJpD2FbgUKo7L585JBDTdtJRoXfdu1erTDGRLCDvTVM4msqXrbfSjRxZ19P1Ts1N5uzP3BLsSFwcBj1E",
  "key27": "5yvWsT3catBKAxFD1UiHWnAe4at74ivz56pmtymzVaR7EkyD1i2dXKVurvu41GfXvGJ3gFKzFkeumaVRjAfRTFT1",
  "key28": "4SNCiDVsnAg7u8kgKsEHysvuFYK4bMb7Q39umqA7GYPiyTJufEtVKq4ZXbswuNp4HprRznLwTF2bJm9L54wqA2Fz",
  "key29": "5iFDsq58dSXUMGPr6yzCgHkUfPCEF3Wpko2JTC1n6QKm5bhH1AsxkaB5jx7CXNiiitS9qdkauZUkpjmnnvf7W1A8",
  "key30": "4KFHYpruQWdpZAQ7mUsoguxqTr6VZnEnQimQQKsSPP3vCXeyKEEDk95A1SknhALcVsC3veKf2d2R4afhJYp7FgiW",
  "key31": "3P8Hgm8YmyRWTWgfbLugN2YUpSagWcC3ejGhWzJrCzYLFn6ms2yC6HA6WuJT2e4XUXT2QzCjfYhjcWVJaf5DSPBj",
  "key32": "3rhHLGS4t5keMTRF7c3CTZgo46TAJtpEYJNhy7ffRJq9Ub8E2u124VU7yWvK1iWDkPBkMJUwWAiANLyCbvq3vdVg",
  "key33": "9FHCdEHXprS11RBuZMV1RWJHqqKyfAq32zQfSrNMaLZRtRA7XRmHLFg2ykQw9BLsWEkT89DsRuV3cyNZk9jzApA",
  "key34": "48DEhUoYsMpa4BL8ruvKuVdSQu2q2Cixvfrs5MHqDwQufADTRzRbEctPNCyC1EtwHAXFXYgFCACr2pqsUCuJuGB7",
  "key35": "3RzXkTbjqLppTcwcb6AF1ZBcbMFHVxWuKTVE3jaP2CarM4MJ61eBzSY1XtiHh6tAqXJgKeZ6azQ8RYZB7Qp7SCXN",
  "key36": "48bMpu3hUzBxjTZ79LSmrLhjaC8zFA3vaZdibaZNQ8GPyKHq3fApq73V5DLg88h6wUYe9ZCKDonHH7YyKWiV8M3E",
  "key37": "5oi73nVAB8THwJgekC6Y9metYx65TPCiU6yUaMGZEjfC4PzzmtcJj2ydzM7vaWpxChvDeXYi388WDY8VcLdNLpeH",
  "key38": "4GQtFdGAeinRDWyejxKPZuVBdBxmTp9BRXRjBaNJrmPcVzs4QUMfJr4tGirRd6M8jxHTxcLGVdVpeG62NFGgWsWZ",
  "key39": "2rx7dffVVYfLUbPEnVRE62dFPCuFCzAvJ1VKEpJtAz5yVBuSeDfVN23vrg5exMdwrFEQYCaionT7DNbf8GiDJxDL",
  "key40": "2JejzkrGdSEVfPKuZASwT9Y3568F7mPfRV36Q97X2b1FQL1LCFNaPW2GgEyXD8rcVTi34wtCrZgC9QJLETyUE7aC",
  "key41": "ziJJyx2oYc2m4TFNSmtxfy2nc1Lt6hXNqKC4zNkQ329exuxEofezj2NfnHZoYys7hL5vJX5BgEQmZmivGVieRAP",
  "key42": "kktabtyUeTtQ9TMuQjaFnAqzwdo49JmrF5LVHSnKsNgkrKX645UyUfxhkDBNnokaxAqRWQtEggs5kchB7CijEkc",
  "key43": "3QXfvTxLGAkAmmvwsz5sU6t1etckvFWUHP21xnaMzRB4UMDoZSBgfUHbrHDH9nBu2BFGtCUh5qhauvpTj6pq13A3"
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

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
    "2Uoy8k5ZHT41f16qRTxnuBKMfrqrjrnQezfFiF8L8ZuczSzCkAd4FsjnNDkba2ZvhhAWxDgbURQPqEwPDfmMhcBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J6nskqRSgv6LxCiuQRFoKzB26X9UNp7dPHBq4XeJiZswfDcsjygZiszkg27fN2WSVmTDmFi2TLELKHANABNfK2w",
  "key1": "2pVC4Kokfvp45jCVto3iwbKWjNpgs7MDczzn4NZDVTGsR5C5mnT2SDVRqbdAVrX4iviAR5fGVa69pQ7tViCMJpUw",
  "key2": "3AQrSxGcKqfkumBKmtyPrZKmtH37QnLES3bQgJNMLDfC8Nd7Cvj9VGMLtKYV2ffwBN1KxYurAw7fK1xSuEopRYYe",
  "key3": "15JVZFkJdms8PFrmjpVFT2rKpnCVeow3kcPSbTk2co1ZjCDabQDEtuviJdNaMNm9zKx6tvsNtZc83uF3gGpkoUE",
  "key4": "4aWPuGt4S1uvyNBcMbuAcMVWWgTzKLx74r3tVgSwihZrDpBWiskppabQzfUM75ZRB5wCBHLZUQiBqz1vzUR88V3",
  "key5": "3KUSgBBnBX5LCF9opVifDJDpExDgKv86QKTDeeF6PwG7VyfrFXGovsnAD37Dfh4YMz8SAcFNx7ivNfesF1geiUPz",
  "key6": "2cSDXwjqSnyxCsghKpeFpp78gaaQTsMSCqdQxFsqxhEoDndPLT7icoKgjxD1DfRNundwj57199EDtasLdjusvfjR",
  "key7": "5VSLq38YwiwMTrLo2N728oEdS4Pz4eXrd7h9D2GTUtdRSrv6pViDi7nsgALBPdmhpBE4WmA5eRRdMZ59iFrBbzVi",
  "key8": "3bjv35C79faaB7Fhb8x93cAyQDwwtVXq4CzPNrbrRHw8HMXCpZZcvpEWuUjniQvtUA7v8XaLWa8fFeLGzEdy6KLc",
  "key9": "3ssQ1kimt4bytsgZmj2M41cxvTfHqAXGCNz4gWcvHpX2HdfChb255NDfU3uuA9iTBYjaWYHMkyLzBfupjQFwZu7G",
  "key10": "25W5JRZP2MDsmg1LFGPmDcUuUABTmkSFGDTSP9uBHcrJRqtiS87upvfSEqgiwmsJ68xVANAtqLDpi9hv2ppwAWXD",
  "key11": "2aX4xXpbMxTUtXq66FzPGYPyXosPfxR5yb5wp3gEJJLMMAH4vKji5J6Q2ca7h2KVVXP1A4jzdYcHAnkS2SmUvggV",
  "key12": "3bmjcNBqfXggN6J1Ne3dp1eQFneSJcQH1qrW136Gb5y6VVNSXazkBUon5es2zdBy7M5S58gkHSgNe3zYxKpBk9P4",
  "key13": "35F3R5TaNa4LDF9bbtPREbTrPDF85R7QBwDG4LWq4m2DCmagzNvv51Hci5Z6wvACD6P6NTi7bpg26FfJbFatFdbF",
  "key14": "3wCv9VP6tC1PJKUAfdswnaSYbS9RzejgW6ihttPFNSfhD83cssnoa13JDsWPr2GSgcdzaKFqjvfAzdNUw2JpVkMC",
  "key15": "2hT16TEPd82s47Fk1hF89JCYZMjJtddvPcsP784T5EaZrnZB9VDcGXaWbdiYDafHSc5k4enHBTRDo6ddGAztLFP6",
  "key16": "5aavgn8npPKXLGEt2z7wcfFNrjt41tgShweSu9nw4QDmeqzYCS42jNAhS42VwLUtGnfgHefoemyWKV9houpfvfab",
  "key17": "2uisHjQW3GH3WAd791pwZTrCtZi8SstZTSVAufc7LmvJsKFgaNuFoZPtfn82zoqaULYRHT3MaZyd7sdwPyUNo3mn",
  "key18": "2xjCK9PqPtXN8sFJNdHZxx8kK7zE6Siw8Z7D4K3SkWAGzydNATWeFKL7abc5Pmgvqr3TPLRRFnp4egzNMWQKebGJ",
  "key19": "5bk8GEmHzNcCvL8ds1dLiWx9EhtEMoxuXtBNa4YFEyoDR4djaPfdoghrgd2Y5u3KxTSskLLiGXp2EvqTZKamgqZb",
  "key20": "BqhD2h9gXkG6T5BYpH9RisxfMvNBaomEkUjtiNHj86oPUnghxEjEkcKYKGweQzpxjMjvgDCh1sgj4aaDEMa34My",
  "key21": "2sYpp2UEkKz6pJJHy9ppGQd9mXkbDSDibKoeW4o76hgtDnbrnqLqrHf2cH8eMUhTEzgn2yDdcFdF3MzAnwSm3Vcm",
  "key22": "Goz2kY9uLqhjiSeNYEeisVBD4cKThqRkXoLFsXgtUTymvrgVd5WsGbJpfL9SaJDPmczBkRBPVKPWxDaUv9HAPiY",
  "key23": "2wshPJ8wei2zUXVTA8XfakYtkr9dpMGtWPruPQzZ6fan29V5yZ3K15gjqYLDXP5NDpLz41wcQKkjBcdXwzD1TV3u",
  "key24": "2mF3j9CwNqZKwjt3ALjXUHaa9HKbuu8K1WrTnfhsZ7tfsX7HgZbmU4n6vJVCG2UsAqpScfmAXZBi6ss7CEdji6ob",
  "key25": "3b1uxCEkxCXw9e2gkZav2hQm5PonpeJspwtJdfZEz97c4grfbvDgWD1jGBWnbyV2UTXA9xZRTcNNRMY4HGNkMfs",
  "key26": "5jj6XQVTo8i2cpD6184pfamywiDSGXB7fr1XoFCnyzmgE1r4YGfQFTZcbfAxmR3W4iBPoXxE7vhEe869ruhzfLBp",
  "key27": "KyCvFb7qNcYr1WMNmKKh8pFBK5tohqoSEXrbzkiZHtRBF6ZNgHJLFsZzueMu1ukeVhDw8CdofhsXK76TfKDsGjm",
  "key28": "5oyiyaW2kG8GS1wpGQ9XtYqhiDpjvK8JUfEibmpzMVt31NayM1tH4wPJeHhXSRLCukWTZ6fX8PEQFH3QEwL9fkao",
  "key29": "QGXiSJnPp3Q1uaNC2Ch4RuGNugFRXUtqo2BSyyyAd1a5ycTJBPn6isPkFdmx9W6ZvXM1u5DSwTjMQAcz7BJXzLp",
  "key30": "231R4KDSycXDXuvhdKjKSBJcDunRqBYECkh4W32B6tdr3cWEZWcrQzcXqK8zbVvCm6r7Z6cThcTaoJKWZD84qNWa",
  "key31": "3xzKh1LxbqVYkfqnGCJvYri5fhuobiYHbntTzMGcQcGX7j9t58WWcnDoaex6YAezud7JByC7RtSa5npKhWGAq4tQ",
  "key32": "5XVcNMoCwKLgaHKMk7bmZt37Z6oxaUD6adUPgiiPXi39KAQG5yucnLeEbomypyvcVjQRNYyibNTfGX3YXss9gpZz",
  "key33": "5uKNLCT5bvYwcpBs1CicxX1PXiF97FCmRm7JqxL1tcf3UKG8UrSE9ZTG63LK16XZXmAmUCTixbfqXmjYJE6yruNk"
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

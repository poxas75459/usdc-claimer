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
    "5CGLM4viqqEkLokyVHTY1UuirbEfUn1dA1kriuufpApk4LhK84bNFGzgjSTz9YYmteKfNHAgkTVfFRZyG29rSuJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kn1ekNLkBzJgqM1FEh6bSRcvmLJzqXBdRaZkZ6v1iwfHsrKLJdbacmpyX4rNTFfeSnxVdsc8KMKGpX7tKWkwwsd",
  "key1": "4KFptz8Wa4FXHLkWF4DA8r9eqyYSPSRiuGJ8BYFQ29NkWWohKqmpDyC59PJsKf1PuYTVPF55cZsGfWo8jws3r7CU",
  "key2": "41fGkQx4PMR1AU1r1XoNZQNYUU1h23ijoar4J1vnmYU2JFyjC6hpgBfghgsQBvxLMFsbcXfewxQtDFUFnkcLeD7T",
  "key3": "49MGmoJaJmMzFfXM2YdLxWGrt8SKHgujuopM4UYdmiUGLTgd6uZZNapjtLXjRKdxttKqfrqb7er322VUhPggykSX",
  "key4": "3GvqtxZ7vDzKoZKewHXeepF4CJBHM423MPAPAPrwonqgXJVR4oqLucsZ7wyUjTsngJu8W9JUK2yj78Ga6M697S1c",
  "key5": "3XfA2jkuTSTfvbFErZ46LmfAicUa3hRCz6mJwYVtgXCs1qrRqoAmz6BMTxfU6GBWcG4zmq7xbHc2PsKZYa65Bed1",
  "key6": "5ZchG9QSPDhW53XQfyJV5kABTAGF4WCdKMiNcaqMYuBcRuATQac7U3UvvtFdEXDsNPAtuA1zTbe64nZBwsRScu3Z",
  "key7": "4xGGs9Eq5p2qn6N9kBst9BhWq17w3KRdsKNihp1VfYDjMY8dbUs4vgLvuGwCWR3RFPuMTpXVauZYGhasvneKv1C6",
  "key8": "4BSy8iH3pwVyxjcrtpLfcmSUdDoVUwfdN19QcqfaYPVzU9tiPxyDFMREcNu5LrcgsdPnrYESBuxwFYec9hwAgkQZ",
  "key9": "PQq1n9hWSnjXAisUJHG8vaZ5GWayeTFK88JRM4abRq1zdqwSUv1acasfFdrFNxJ69io94KyM4fe6DhjenPqhgUt",
  "key10": "2iPUgcNKBkCkvzyMaHtTnBPUYMWQW4UMauzfJHC7uGmJjrGGR1TWcSUY58Zn1SV1xcoS4wXgDuxby6u143qUjHdt",
  "key11": "5WKVS7kurdiSsFPPRuzNkacu13j7kE7ZcvCp4ny5mW4KyNomvZdoVyQxPmfVihY1YF2vDoktXtqqdTiSueWjYaZu",
  "key12": "cxpabXZQFCQV27YVoEirzrg7J7tsStkzzaYcHGjHDMVrej3rqzY5tzp8Uyc3k461N4uScn41V7CohFECYQ8irK2",
  "key13": "4iM6Lsv28zJad6FUHdoKrzF4B3QCU4QgVJFVDi9n48zQ42g1ZXLoJfLQHTTKMwCmX7sqhHK6ZGnCFtT5WE4nQ9GR",
  "key14": "3e6eczL3K4yjEvqUrqFuFeVDnB5atP4dg6w5JhJjFnPWmB1533c3ugmfsfUC5T27eggdfHDmhqwvFuEt2y91iURv",
  "key15": "PxmmMMuPyurCNZJPYHSYWKyPQ8fxoTwwrAKRtJkvDNxh9vG4RzeQauxMd5xV1SJ3suBdqzSRH5hgadP4N2yQVZD",
  "key16": "KtKYbbQG9yq7A5JHdGdzi8ReZpbx71qEQCoKH1tvj1xah9YUuwJFtp5KFty8wCUbLsSjvnN1coVQiVG9LEAebJJ",
  "key17": "cE2m2HibvtKHRwKgf69z8g49rL5yLemEApddwTjB2gH2mDa4W1GaLvnkzT43ehSBSwFJqVMnt9swiR2MhBr6jwF",
  "key18": "47E1LXZxCKMv75JnACKRSroTuGfhwkyScbkTz23HTabcG8b1mXF5fCX5g16tCt5TH6csUtSEe2vgWWmtyVKdG6vg",
  "key19": "2ASvSHGsvTRwZWVHAZx1VLv35jmc9MnkvPug5e6UH93E16psCsUFC1adJ9f2B2gEX9dVvKbHUE2ECZkmsn3t4KQW",
  "key20": "4kQY2pyyv8xn2NyXeQ4TBZdoPBPfvusuGXChv7NkNGb7CNrMYFZq3SS1WdFqzS1g2qsg7nbSKSqFrCd7MeNky8AS",
  "key21": "2NN9HG4u6t8H8FG7Dto2YNMmPY2WYkTBjSc1afMja2xbzfvfL4jvgq4hmp7e9engL9wkmCoCtPwkdutxtRqPaHAh",
  "key22": "4WBrL5jdqwdCA52afD2urZbVH1myaQxzSAKCCD3y8HTeJJYEtcjshGRbNZWd7tfbRjunxFkqDZP5D2nwstKsYhs",
  "key23": "5R6Up8bnHwbTGgqwcSXNQxRqDmgkbdtz9hoXA5frC22g7taJ4totjYCwQYXPLERvKWwXX6abJoMqxmDKK3N695eh",
  "key24": "4bVKfd7XH9GuHpJ9sUwjfGuJB4kPVEPeC8TbeC5zW7gosxkXv5H8B7HKCyN9yjkk3m5NNWC47c9ASPxHY8g5sJgo",
  "key25": "3fpWRtJY6dRBEpJEpLWD4wvrMtmY4e4937TQmnyLAUdHo7afnvcH2KssHXg5bfTraBtiyyBL4BbWvXfdNsqjtPbn",
  "key26": "62bj7tDAHV4keqwBcqPvhG5YmXLVFjk1nczR4DnfMpr41MzM9bEwm2TBr9gG9piKT43ARuAZEzPdfYzsfNSSTbCK",
  "key27": "5FoXTZHpQbEK36RAoJDps4bHQaHJ4cy7WUUb3vmNyoaorFWwXWTfFNsF2kcj8KFdyTYw8AKYVcUrnUHQBMSY2BBh",
  "key28": "3xM4wT91mhPCJ3T1ASzJvXWYjR4j4qJt7APqrfYHgaB8qgxU3vaMHyy1NcCwb6FwHub4EKcBH4SzEK6UsPfRixqT",
  "key29": "2HrUHGrrcf1hof7oedWiNJMhgZGJqr2BM1V8VcA8iiWfABJKDtAJpTTbSVkLPmtuUkia2sGpt9jv37TCNRQtQCT9",
  "key30": "4RqFJGvmWJVXCLe622tRyyWsNsgQ7dJy1V7qmLgy7hwvMh1RhWs85G9gxmZ7rSRqTUKsbzRVwoTBBsgryQr7V8yA",
  "key31": "wRUxxTnVsq6Y39NF3kGaESsRLvJPEEaxg36HBgmuS8LgNyx8UhmPpLQuPaB4MoVTQbQJRDJUQ97einXihMRR7uK",
  "key32": "4HyDfo66WUpK5jm6zrnzcP8cxqSpn6iovwc1EFvyxYfpW5RtY36BTJ4hkpoPhXXrCUrTHUUHHxksV6mKoqJ1ZkqS",
  "key33": "3B4p1g27xZ6XG7KTJXj7WpR6uBn1ip8ChK4gVBuut92pysLkmw2gKZLdo1x5nejK3rVmnt2vCUbn5ECcQsMVobgN",
  "key34": "5ewveMc4K3Af89zey7oNxF4VTVQyXNbDJucWvCk1SndCeEvGZTnBuqpqRZsTAFykEQK4jNLGxy8nGhcrRprLVSGx",
  "key35": "4J1EXa4WodfmhHxf9Ct7LCe38SBuUvxVSU8v8ugfaUMpH5dnz1yoacCdhfRcqfRmv6GVu23QJ7XFdGxHbDdAT92Q",
  "key36": "3hQgXfVxL38o3uQRmdD9va48LiBPabdWyfJcTm6F44fngqU7izdwtwq5zxAavaZrUPNKANKJgrgmuwG9U3BjYrnR",
  "key37": "3zR7KicHHLsqCjDWWht1UabxJ1ifzYC39VLx512jcV62GbvgM9ZJQumiKGxXmTon4rXp6yrtbQNrihAAimv9jHaQ",
  "key38": "3XtABjWhzYje2LSgDAN4oVuML4XAtzAgmBzbG1qvQNrE1tGNuVR9efRGGSWtHbt67c28AH3nLaawy5XMsFrQTRiA",
  "key39": "hPXbcvDUtuHe4wfbXCmPadDb7z7hwW32x4RdRGD5zBRATEKrmtZAWMCdVX1fExMm7MneVNq3dFULf9LujZHQThk",
  "key40": "4s6NtNJ5a17VvVVrjMunb76QU8ndU2Xs8a4zTiAW97Uv9FEksEJ9P5Y2rYM1JyxCK1bSCyGWw41HnEEvX7z2BcSM",
  "key41": "5jFek7qXb8giJ6NpbnSkYKPzyFUN33qTFSFw4wrNLhcBxPopTjMfa7H51fjjHBGiuVcJcYqAxDtXztn924fo55q1",
  "key42": "5sEYnYkqLQqfWxDFJXYWaRBCL5gUka4ZywzamWWkFE8fYh7h4ed5rGXMpdh8pfBYsAh1vyGpiXmJhgxhY9wahPPj",
  "key43": "35etz9TaNw8Pt7Ua3Yc745jpvLvinCCkok9BHrwuG995D2gdhNskZPgppxgovJ3Zto3ZY9SHTfiKJZFjpV9wJsRP",
  "key44": "3neM5Sy3DYhyCezjpgPJHDK4uXCC15d8EjERKpcJAgdzdR5doDxRF8S48De5jbhj5hQmVUuKWdxhNYitCkMWc3RH",
  "key45": "F6a1mUeYHHCkkfM68Es3jj6FLob4ZB12FA7F9hzK37CA2g6GJpGPA8z69VBaQ1dGST2xyZyqnGThkRQJ54Tjfiu",
  "key46": "3Z99KtkRYSBMsn5BwHGoAeTt9KUs58uBEGU5Si2TwrTZCYGFZDJfAFuRav6poSzMdt3vTeyxyhk9osVTBPLzZGbS",
  "key47": "3xgGD1DqBF783x7G2enrcdLbKtZ6cBSLhV8BAHmpsNumuKSL9WrSjLK6AfmQiSqoaAHZbpLWAHmdPQr52ZmJFMp2",
  "key48": "QPT8ZzgTPMa3tqHSn6apfuvec1CMkuYjuAcoQGbm8rRZSHBpcppn5wjwsnkAZEztmhzhQ7GHVkXMoT2rHD2Rjym"
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

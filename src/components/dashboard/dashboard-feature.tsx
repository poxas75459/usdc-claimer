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
    "3nxBCwBAn3ycw1rDJ6ehUAqJKh7fJsYVpUVfARkP9XEzRqonCS55ngpsqEbGbxN6QjMbEHikqzKayZjAiKngCVCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FVv3BphWybH9zkNJLyP18XwuvuC3oVhH7uBJnPYGERChEY6Avfnh4SN8L5bYUMi9KUVEwcxRYMbRwtCU3F7ijxz",
  "key1": "617hBr5aWbQLRGwTC2RQQbEmfeLovkoj126M57eSPWLZBurCyyo7X1yCcPQ7BNCFKrz5tje9jXWP4TpkdPiCvybv",
  "key2": "2aJmkfCy29EvMvWisWcucubK2WgF8gAGPW1PJcekrSXCdvriGDkoyaKQ5qKYCSGLLjeASXRLipdsY4BVjySkWT49",
  "key3": "66MRtFmDTRR297VP8c73WWTA2qKh5n2cpTuZgAFpSbUGHHKjzdHomvdHof7xVWdfs3FE8skiLeSBepyzCvNufErb",
  "key4": "28uPwRC8gdVCfXahbDGBn5Jxn7j464w12yohEZie6HgT7epmdPN6Uvfy2H3XW4wDGYKqmbiANLfz2NuiW29iR9Nz",
  "key5": "8QonmVZUbcAjUAuC5t6BBRNvEMBsWnjct7CbFHfVWRgVzhKCG3C46bZMrZZWPpQaZf9e1TcJYwDjeig2YqJpZPV",
  "key6": "43QDryKbSSvhp762VHLP1MTzwXBTQgfpB5aeLrJ2NbS1rBBjjyKYNTw8ooJ6QQwBi5TRmi2rCeuT44uRTnLVpdGN",
  "key7": "3s3K1o6z4LA727exQjTCciZfP45UPjX6fNPPJZN2Z2oxMPCufavquQ73qkC9srcZTgWUEWrnU8N7SmEvjF3tSXii",
  "key8": "5DFvYFddRgnhJFv6ZbF2umktnaL3Nqg6P43Bi6WR5Cut99LHabeuhZcfZLgwQZTPYguUZ23XqbtdRGiADvKjJrbD",
  "key9": "CznSDDW4acA3Yz1tAiotL5pzhWMvBxBBX1JwwzHcVYadKcgmnCfuBUxnEznte8zhGEybefu7pb6YqDJaannZEk7",
  "key10": "3JLAGUGCvj6pX9k1a3GPGSQibJ8AsoQ6threPeqh95rVk4ETrJKN1H6xMYWN69uAudKGDj9JYoYAgrJuvQhDSZpJ",
  "key11": "4aetUgvoMhqjf8xqeHyuX3KYdaArhtafGmZrLtbVrNbs9FdFrTxdkgx7q2DHp9HNYbvFwJQuJpA8RBT7DA47TsVR",
  "key12": "NYJttUjWmoWmB7ot3xuesy2ZHYMFgJu3gsz5yEuEL46fdvq4xMJo2dgLEVDE4MxSBuUnVf618tKrvKW6oiyi55z",
  "key13": "5TApxjhaPC18RribyYDfMCE1JYVqkeXergwzqCRjqCS3HkiAcMKLZUfsLJwVxzarNzyfvYviFt613EfodvUhQ1sX",
  "key14": "63qYPJEupNLoLaGu9Y2NUoSCEBAaDGmdLP55zCPSkHhYxCSYBigwyWk3apLVReDyKSBKdhk94iqzXQW6xisPpcj7",
  "key15": "2xg7Dp8tgZkbYN4mj5uGgDjSdMw4JKbGxEF1cM9iZhpSo2QUKkedCZUKMLg1A7YUXcTobgY7uCRqJ1ZDDEaerWJF",
  "key16": "52461YVTxRnezGf4FaKJpUGTuCv4mRjhbi7FEh7EpwGnmRqzimw8tddYYNpjjXNHbhVJiqdMyRG3NF7NVVGB6Adn",
  "key17": "3EAzwDvwZUNEino9LKnhLWje3CafTrKgx2hdem1DtzbUuQGMB1yWYkvZFZkKyyCHUHKMXEmNfoUBVyGXdx14Qnhd",
  "key18": "5GBkL3VRUX3Xfd74824f6bQdpa2UPAcLGf7V6C9mSxF9ys4zSxuMBVSo66Cxw82gfBNmtoixesNEcJwJ8oq7dvF6",
  "key19": "2Z8RFHvYrNs4pWdH1ZJeTGUK1z5fWVb3dkVbimKfF3uQhpB4rhCZCBLmUsmQcfuC5cPZ1fSmr6ziUbfHVyvREEn5",
  "key20": "35fs6opiHdH8US5ZxSw7dMJ8ozaASMsTZpD4mTbdLoX8BzvL57LwD81QnFqrbFznwEgRAAfeghn8TZnJuMvthvT3",
  "key21": "4PXY6DShS4kTgEzrApxpY37hpAcrabsb7mctSN5CsbYDijEh9ipUzS8GSL2Dxv41vNS86t4B8zxnic3k1eA1CuAe",
  "key22": "5cEqnCQ8WSWMiQQuHFrzAQ22FsTZ6Vv4g9YTVTH9CYggJfsdoKEqHCuHCDoZU4YJjPbxN4pdHVrZhQRzxWEHVd9W",
  "key23": "4qP84t3Ytuxgn5NzptEUyF3b1mnVPEGmdSQsQ2f4wwsrtLLmrydYFo4sJytEUFvnPs4da7ykHq5Z5RUMkg1j3FqH",
  "key24": "2qG5vzmVnrqUrZ7mLyYBsMfgDKX5KaBHBB1D7CwEV6xTn7Bofm6fEjWytGfqkUbi9UFGjzEcYWjCuBKuAMz7C47R",
  "key25": "4oVapy8ouR6hvskqjmC2QBioNQD2KXHVfvxHTQGyVm2BuDaLhvkVQs4KKPHLdDF6kVjWTLzmPdHNsgNL2cSRLQ9x",
  "key26": "5VVb6CU42o5fjGS5nVxc72gLUbsu5JM1tnGW2h6cXtjgeWs8nsnbZXv8fLNNEUvLzANJFNFg1WYN6HCkyvxAiL9M",
  "key27": "3P72xFKQ8eKEx41HAbZxbeMwMx5JeLjV3MVSs9zzQhgD6UR6ntNjoX8d8rcxworKgeVv6R1ecTsQURjtjE6kF5TA",
  "key28": "3v1bBa2VGzzUtdv48exr8cnLC8PxTcG5c6Ec9nyZXnBFJCZ1qrABzD3MFTfJUzKymMrESC8QQYc1Co7W9oEHxNhF",
  "key29": "yYEDU8cJRkUZnLvFWsj5EgUCvf1ahs3qfzBG4wne3HNTVt83VFpXZX2NTeFb2MkjCdB1LxMFMMTyEyCMurKWjFf",
  "key30": "5TwKTrrSTrkb3w29N2ZgB5oCfGnVuiauQhCrjY34Kyrqnsj6k3Kw8Z6zogTAzTMcXbGNMuh8YjeHprCXZKDtGGtu",
  "key31": "4YfCCm47hJAKtSHRP41pzvXYx9y2uSv3nzdD6yDxfpKXDtsz9xhxyhv7W43Nt1U7bGFk7YnYA3psM7PXwsSd9q4e",
  "key32": "63LyCvmKz5tWdbB5Eqv9BhMDazYaxFLJWoW3aKN8xYQfouofjn2KJykgskyQHXEqhbYymYCbmhdRxA9UKSBZpiSm",
  "key33": "2wrhZgKmow3TwkTpgRHMKvzVpTNKdcQkoEWbiqxjwob4XBhzvCSk2JApaTQKv71ZoZoj3stptHvZu5mJMfsKjdmZ",
  "key34": "qAuRkU5ZPrJrvt7zdcXFXv1wwMQU8So5mDnDpxEVR4Dm4BPAfhmnEDtvnRUJWsZtdgZRPtYNDXEMw4zL63KmKdP",
  "key35": "3zszzaXgqCg2D922pVRBupTKZk84vnDATGy1wpy67MroSH79vjb64uoP5mZU6Bs6aioQeD7LokrMo6AXA4d33aNn",
  "key36": "4M2WXkeomU3upgZ1GMTp8u6Jhw3UWRuRCy5nLdf2oEfSEm6ZygK88mXSyuFKwS7EVtxNdC7tHUckg4BAdguxK421",
  "key37": "3PD597xFvT2soM1Zfn1Sbo7FY8Vo72MuL3cvWhQzVd3s8aDzsivhA554BsmX9ekfpjc4pFT6zAMBnVVfH3rYstwZ",
  "key38": "2VrsjxaioRGq3deRxL1Ch38KwWLoQp7HHkMt3ospRDyi1RxwiFZLe17rVu2bLTwsfbQMFLrzKPizSrkG3n3TxCHx",
  "key39": "JBznEZvT3BucMm9m98DRnoRd74HV4gfdticqJtBqof4tAU9tPwCWUMfp1GDmxRYq3xu9aMVvhr5sTChkwASKM3i",
  "key40": "3QyKoUguYjZSCDeManwe1ocvdrEktPvxHbGEmqB8shQrGUVTs1epyCudyxhYLAnXAfBQVa2nNo3K29b4cxYDLk4w",
  "key41": "5s5ZXUcdbWqhT8U45sToy2ijAQBGF6DfYW8cPCrKpje3uBVg9HnQAY5XD8NanDj3EXzms2Y8poMtGbF8Jk63jJrK",
  "key42": "55p9apNnN75X7XsfdHDPsxynnz8qif5Azt7h4oPAbUzNwsTsg3C644kBhr1auS875fVHoJisuUzjpc9GmpeFS2D9",
  "key43": "662TYSLbJuyk7nWok18BbMyvnFnrJMUqb5MFscephCszLQYv1sVH8jJBM1npndbtRh2KAtWqQyasDACMRW6qx9wX",
  "key44": "4j5dcYua38CfNdU23FbE33TRjds2tNDgVE9tuZd97xTgFuddkn6nPPx5pxbjdpRezWjePq9izeWBUkaJMrY3gLVA",
  "key45": "4VyhQsamKzbDpNqhcqUqrMKeBsGCAyfoenaSm6oD1hoR6qnn3jdFo4x6butzFBXdCxjYHSDk8XeuG2pxFpLnCdh8",
  "key46": "USwaaTLfuPy7qo2P3NPnReLvrYjMApgoUA8YRZxEFR6zCoaqqN9dkynobwCVUKvr3LJZ8nZsjVLzaudLxMzvCgp",
  "key47": "4Rmz6TandBTeskm9GYHgue2UBzVkcPa3mwR2kdxrqfAV6ttgEvNE8sGYN6c1MEQzbes29yMmcZSLWEezYAp4W31o",
  "key48": "126jaqz6Dan4ucKhTPoq5qs7YBqKmDyiBW7JUrGMC478wcqEeyYraBBcPdp24tAZ5mvcsp4qcpwVWh5Md2xgPJF8",
  "key49": "5Dw8rQB12KxrRWyewTWHsWwos8oVVmPVjoVFoFvw23rksyqXshSGV5ssk29CpbF3EAiXdQ9w2TBtxKvPLxdJch6C"
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

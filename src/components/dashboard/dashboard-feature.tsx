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
    "2igVSGPyf3xGYzA2PJQgaBabTBbAeEDn2skEbmhBSr8js5HczAqxZG7u2ZVu2fKmuYF8H5TSHi9DsdCQvUmCeUXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nViLmoHLnu9RzPiXhtMpn8KnP7qdeRNsQ67Xnzyq7p3awadNbtgSjCgy5FtgjU3y3UVYyD6AXfWJ2zvQy14FvRq",
  "key1": "yEo9Qt81HZb7vNQWnRiiVqy5515246kEiYVHicQWSB6S51UDFPfWD8HQo6kGFvrggGeFbBnHK4ud9oBG9FqkYdp",
  "key2": "22mRjK6KeEEAVNizpyqE2L4atAb3iwukwf3qNrwB7vT9sXuiijCj7Jm8CEZd5WCCcEGDPTErc7K2SEZJmSfxHQiz",
  "key3": "4f4kfBvFPAu6KW7NCREEigwYZAwkaDJQEd1kJr3t9umDxMRcEHLBtrHbAm8ikqfg593jx4XLez1nmX8uFC3obvna",
  "key4": "4YMmSh4mnQRQEy1Q7XWmniRYeRFvW8M3tSkwKbbkECPheFUX6i6CHqQjoMg9kwRDppSoxMZbTkBNhQiRfviHkZeH",
  "key5": "4zGKzQYtmZoFufwCvTfTbDVjayAYLQaYGBR4VqPBu1cYCvqA7MY8KFW5kGgeuBJxVi6Qaxdi12pZo1eSngWhvRNd",
  "key6": "3MjLNCx2t1UnhYA2v9QuNEoRtjzTJoukiuY1W96pt8YDLFVW1diuLaVjktFN2kNvKG3ditac8ARTbbEqT6PUu9sg",
  "key7": "53utmLB8hQG6unnzBa4HwvD2Fy3ExV7BzR5aHJ4SZy7RfV2Z2cm5qYiZe7iWzPBLwYbhbX76TeSsgnjXMX9U9Txd",
  "key8": "4GWEDcAcWmqvz5Q1YcREhMQVAZFNKZBXQz3J6FC5aad3RuWhC2GbC81N2WMbWTfAF9g3szwK8JALcaY3bJa9Uhp5",
  "key9": "27jre2i9nt5mX1mK9cvD1h6NXCydsHPKiekwcw6wpNj79DvsyXLK8QxyEYbZZBVGXSLiAMnMkcEzyGMsj7CaN99g",
  "key10": "23Kq8GA78JxMKKpUQ5aVVpSjzt76q7HwQuiFFp5XZdnRaM1DGGSmqPstvKQVM3B3Qm59aAfcvzjQHuZx1j8qwAv4",
  "key11": "3gBcTy9pZ6VaWo3SrMz6pHHQZKx6F42xt9cRyevr78EJnrjkkZsLECmgYRun5nn3X95hUdNQD6uQ2ewfJcv5Did8",
  "key12": "62qNYKWRvNexFghRbTJ9TjPoYvxQ4sjozeYGuELNn2DGVvjtdknGdSEJVwbU3pyNSf3QwaihFv6mTaSiqtmYhTaF",
  "key13": "2C34vrcb25xheDGon2MRBhtXzBNTVB9mMzFU12t5U3E1D4R7pJ2EfoH3uzCLx9nmTvcf2TiG26pmEBzkGbyn5Wir",
  "key14": "5PfqPBkno1CUBiNSpJyKVLdvzJqCKfsrFsfh6DmZ2aSnuN4EaCGLNZT9ibxuCNjc3asiS9njGCvWaTpkx3srhVD6",
  "key15": "35tqKB9gT9oepsQDeF3PCBo5XstCMZE5fZ5jg1rv1WXT6wRRV6ebbjhgymGMYxhey1mCpxqAHa4s3Umwe3o81qnU",
  "key16": "1234qcUFUGEWxtW5ufhVobwGJp2dervELYKsyNW1Pkg1nRGZD8No1rgi2ssP3z8JnbCwqfomP4WUCWk1q6juP6iH",
  "key17": "3FN8TaMBWxPEwcTFoWYT9GQz4r8KXsbGUBQWenDZEDJR3XkkZ264HZ3Y3fDgHzFMwc4mRiRBE6bdKUksGRqx7t4w",
  "key18": "5hy5KWG8YVmVp5sY7YHURFxhYPjUMzDbTyPDfVN1XY5RwerFPFsnHWduAL7utg7RVmWyYmhFixmFvN333Po7GhSt",
  "key19": "4rNWSJzgprT4HvsaptfcUF6Jrm5XT2r7LLsSPveuuKpwskYeEvLdYcDKYWGWBoJUU7gzR8Upn94vZMfB4yG11Pxu",
  "key20": "377FLNvBTFHqLPHZFZ5AA8pMReqsYnq1TPAyV7W7g2sLbtUT4pADqQuVqJCGzoCbr6dipoM6NsrZjCutPA2M3BGC",
  "key21": "4pBFyPfKTva7D4Rd8RDHNkPSsBp4Z4S3BYFj4RVhno9a2r2LCWp9HQqZsw1XXCp2n2h9cpsY2gbRPPgPA8Ar7kv6",
  "key22": "2S9jBbnSyP2ibu33xjgf46N5itFqpYWzP3vh3yGpQtZhkzVJsdwVAxKomMZAfJkP1MwTngVTR9EnbpCVUNr9pkJU",
  "key23": "2fkXSV2PPVhu5itc3Dx8qe89ViCdLdN3hVG2VnDbJnDgBfRAnDk5XGPfYCWMswAtBxJP8EyJRKtnwYbBSVcNRNzU",
  "key24": "4oCNgt16HkyMYLudTE91pWQ4KNv4yGsAkBrvsbUDVmfLudhfcNTUj6yi73jMoty9tfjsSr55NT7LaGRScHD1WNoT",
  "key25": "5kswxeUmJP3iYUABtTgrDtNApGuVTJw15KNZdgdKawV7RL7BoNCq3HNZRmd2yJFkmAd9ZMH38XhawoTQykPLvUBj",
  "key26": "Fp2MPDq9xSHRaT8n7iAW4PUJSidXaoq96fNeHQNRaszwts4Vc2uEAtsQbKDMTrEcaD7hXVC6NKrxkc4iKf5Q3uF",
  "key27": "P7uH6w3Ad66431TwN8RhmSZhTTgUHEgufAidkMRKjsFtNy4t1J2tpJhYt3Ur1oWtwrByZHi2Le44dRweCsFcVCW",
  "key28": "345KLSyYKKgvFmDMdQ6xC56h4teJhUDHpFQPnfdAGSAAyvC9Zxe8z3pcKwhTr81zoPdesAVuzaaahkWPpMw91i3K",
  "key29": "32tnJLmpG2F6hMK4DxQQTwVHmuv2RC3zYDkMP148pra4sTWBhNA5hgPKhC2Zt7N6xZzoASLTEnWTdCuKa2J8c1cG",
  "key30": "Hf9Zcd9R3ojzt6THaknGA1q1te24Nd1ZEZb3j4asSfzxCe1wVLoTKYSvuWExh5WN634rngWCJmGcr2UjqKvVw81",
  "key31": "2vFdkSHXfpUppXLZTVbdVsy3GiWudV2yRFKLtVZJdci3ewAHidbTCFunivmVhfaQ34WhGq7cSJZdnuLrmtcERbNd",
  "key32": "5QDKM6YtxyDkNx8UjxukjUbV52sDfiTU5xNUjkLTXZaGvy9qruXkwcjcfXXiWuzMngsYjRWfjBvS1tPRhTRmomB",
  "key33": "3Q1XuBX1Fe7SuNTYposX4Rbnax64SpMajq7GTQtwrEt7Y6YoYxkubWNSshC3GsvUBhbjFSV3GG9FP7zm8cnFqXDm",
  "key34": "2mW22V1JrMZYc574yuwM2uwfMUSi8BmJbzsPAS36Pj8vMPmkJjbE6vqCUrhLPyDY2BzozvxwbruJpn2DKGCuwJWg",
  "key35": "4o4dUdcC2it4WDSdxxUVZLkqV5i4S4pCdr8bpNmLLuK8zXLH1KcCBc5FKg9imGgd8yLKWxfc8awSBSr2GGNw2CDT",
  "key36": "4SAyUiDFRrQ9fLfo9PMwX9fJsr14d2kjqSXQU1LN7QCUY4446DBh5LBfRtUThogdgBPXEhvka79kYK5168otT9Lc",
  "key37": "3Mfp5sMtRcQkGfK1LNkoEXSkDnc1P49zoeizgs3YCBpDqXCH6ssVR5KYU1KVZgvk1nVhAMZQcLYu2MZdCNavtVxN",
  "key38": "2tKhHVCPJyiVxqf5xbp87gHFS6Q2kRqcPnvx8vF6jN4fwMK97KH9STXM86FAS24EToMQTfmt1MAyMaXUnSfbNsLM",
  "key39": "3kEyJMgkigLDbnTahpP7pA5m2bGUZy7VxJvVHTqZPhpBjXzcACfq3DL8Jky6GtPSGZb9Vj65pAXhy8pmefgCwupx",
  "key40": "3rAJ4RSCNY5ZNEjNkG5EUxuTX9roJQpXFGLnyztkUCrdBetRq8tVme2FoypDqF47Kj2r4772JTBU1s7iF6wAjzxp",
  "key41": "47eFEDonNkbM8QCSwEZNewMD1UCUaPx28BSYdrAzMSUF6X5DVfjhwGtX2hyvQ4Nunjgi2xwGuJyU9MKNsh1U5Xcq",
  "key42": "gAHdXcYVx2g5Xk5medHtKhCU7kUmXrob7RQn2RDD17kKvUT6eJi5BBvVguNneDFrqvntrghg2xN8HiShsMLzbku",
  "key43": "9ciwLexH6BNk8b2PYgZxSw1p7PnMb1VWYsMyLsqhMAkhSjgFBLYrAGPrRzLuebzKVQAitcenUbUkknTkvZF9Pvn",
  "key44": "3yGSMKp7VQoFVrbiPtebqVTgvFFJw4jvwh2H196jqw6uBgebKXeJoBfjTocsmdznTKqjXqcSWK6VtdDvjRZVfvBM",
  "key45": "39f1Dd1exrHEUkfxpj4xXyCMbJynjgothq4n6zXBDqjnU5G19t91CQGbhWxMAPEEKn6NzD8rFyKeX3ChxT2VgTSY",
  "key46": "3E9VNyncYxwYeyKCNxFbi45BZn9c6zL7gw8r5MR2FfuEcTR1EyeDot64HWUvxB5R3J4hh6ARq4V95QHA3z7hQ4QC",
  "key47": "24jpikFJKWGeBhx1xVDo57Z6pZxvub5ebxcrqTApbym5DNheCBDD3LjUiiFQaoMghRpueQCCQXQnVtaenfAtrbKe",
  "key48": "557N3EcvW1qQ7m9kK7axEMZA8LH6cCMHYtBze2JvoXfNpm5X9LAxQxW36nuZtY5NM282SRdJQ1fb3a6G3sq3wXKn"
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

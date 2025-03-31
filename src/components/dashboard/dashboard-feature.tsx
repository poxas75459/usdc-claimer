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
    "snG1K9dbPnH7roGdjN2vjeeByfNssvUEcsHESZsqbj9nfG1hFy1wkrjGTFvF7AogDrrTduRDnbFcoLBQV9GaV3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3yiPUsTphJP5XRLemxdJitH3LPaU2WCzdAjY4tdCUq3fq57pRZ5Fy7jJmd89JUad2ya4KrQq1bw62XbCbEerRp",
  "key1": "4yoQdSKDE4QHfemz7HLVfM9g9uBB4dXXCfDCmXbyKpHCtzogUDCeSctjqVbNeyjLwmgTzupxbt75mVHUyuENJTS3",
  "key2": "fm9LZUw3zzAyuMNgWugn6dFhvA7GXwC6DsZVdsgeeKkCFFb761rc23xqNbpQ198GWvpKFYRh7wRPbHVhp2y6wG1",
  "key3": "5syqtFbsNXek7cvCv2B61PEnX1xwKpAqH7eieUH9qNbER5f6PcCYiGNAcsLB5PioX55SBFbqWhT3VXgad3SUqukz",
  "key4": "5xjntaMEK7zdSkKnUja5SW8grUdWGXksRY2mKrAuxqdR9zWfZUnSRTLHqig1EYVQvinP6rZxY5dYseQEDbPoaYSX",
  "key5": "4WUdxLePTJNca8mtVpmt7E3cREf19umtywnTDSMGHkRpMaTtF2E9tmxG9Q1TdiwzCTrinsRDmpEfq5mALPpP1o2E",
  "key6": "2vzQzueBvJtXX6GVWEdowFTxNCo9deUpqh13oM1qJcxu1mcDGRBYuJnAMHA3soCL2cPj63ekJNYLiuXas2jZEm6W",
  "key7": "5xVMf6B36ZJ777VTvtbBtPhv2VDZ86uUvCzKC6xoz3dLKqV7zE5QUkumVLbUULWeN2Es2J5EmXtj9BkL3DBRarLL",
  "key8": "2GweFfunWjzU9HuqE1aVGSJnWoSY8xhqZJeBDpQXBzJtchfGPMhRgsp53E3bTDC3Cf1qMsXs1uHyEKSVnacHoqFW",
  "key9": "3ku1KwDv7nAisBZsTMofDRq1GSqPPVFXs9zRXSsUjqvGsDaqLb7r8D9xGxqd2hiGHjSkrgP3FzypErKSfBpB6or2",
  "key10": "4wkBrk2F8oACDYNFhncZ8MQiCnEGesaNZWHEBAn69CELMxwppHFoTbwiABphguZ2yBER4Zu2gb97KJeMZRdBbkey",
  "key11": "24Nt15r5XmUWqsbFVo8m1tiTPsdz6YGNJsjNobwaYB833DdYwdgVRmQBpq47XLx5tbyqTKMAevsvT2aFDLxD5d13",
  "key12": "5Hi5AfHjhYzUx99sK6njHeCELNsPL24mTsdzvFT5Lzav4ay3kATvJ9GNyRwaycgLTj6ZmEgcNJFGzcHHeTj8s3Zz",
  "key13": "4Tt3HoYTFeET2zqkSUA9qxxSTBVcgQC2Fh1D5C1DMFejhPTyD4uiTbT5gtndBFy241e8mqApYm3FVL4zL6LEE8B8",
  "key14": "5LQJBmV4B2xwoU2yYtt47mxL3yTzJPj4ibxzmF3WzpigpFGScj8yCJ7ZGCZ5bvT2r9tapVeYtjsMhYXy7mcHEqFw",
  "key15": "41KAK1CfN1LEqpuYANLyEKpawZsR1BZ9UrXEMdv7FwZjhFhodPQq6H9s6HXzygqMQjgeLuvnSpNnCop9FZf5YHDv",
  "key16": "5JBStHKTx1gp9JhL114WWZmoPtmJrY8avLrXhGM7RqsCtdEFaFLLRT4dBk5GcpjX3PwCEwNiX739PHc13mj9wwnh",
  "key17": "5pxgcEb9iwuXKaQjgGQjKsjmGpzjiJqvtJ73XpddSLwR3J8vjRrx94yJ8oNF5E3jxpeKqg9y2uPw3t5TvdrdyeQ8",
  "key18": "azpU8dUuBLCZzjh2FS5VWZf4wSjATSH5G8i824G72BUjNAiR3BSrEs6XnrqcPWAcva4KnGmMQuYJTVHJifd3Uxf",
  "key19": "4MLGYRKGCoAm58T2Lq9jNGMsy8zTRbKSzTGKSPR7chGHhGLtXSrD5Jv6E8kR6aq57B98wttWjtSNvSvQyy3U85JK",
  "key20": "ELp7cNg4R3nJNwvGE2P4Gc2W5HYfwbd2utxSS7txR9cy49CPLEJpLT7ZFcs9VzrvN3NXsP1sin2GcQDWnMa459p",
  "key21": "4T2dv3WA2r6129HDs8kpAjuJYip9HwyVEbJaFKAGzQcDKH84Z2oxmqric5a7hXn9rBuPce5FxsUFd6jHJvgSq2qu",
  "key22": "4w65en3JndQaP2iG33DPoUrKzTN8ApJX8z7gVtjzfgETtRpiCh7Ph3cjp7kKGsFmQtkhEKH27iUNS42xb8GV1zJP",
  "key23": "3dk5Ym1gNHVwBfZKKYn7kcNXBDSef1wU778WwFR88ZCCxNSNV4grgXKi1jxUfbQfeWndJ44PKWUbB6g882QFUTbv",
  "key24": "3nxfET8Uy7rnHJ3ooLJwuxtWSJS2H84YgaqXhzBmeAt7fKqjBNsvuz1cfJbseTvzjypfLPdV4q2CRjTjjGQAv89e",
  "key25": "hn2cHLGnPfDRMcMPZeZk7nMnY54PwjcfKd2qjNMWf2k4C56Jw5CtTg6WSetJS8Med8xWp3Kajw6pvtSigZNeGff",
  "key26": "5qTrSaWb6GopVv1zikjQdrTVMKaGKLgwPG9RDxTTW7GFd3rHK48R6Sju1g4ahGrCdtZ3p95xjHxLP7YpJD1XSHjJ",
  "key27": "57F3FeUKAg5HCE8bX64PwE9uk2Q6Qanu5zNBwnjUxQ99ES6ap81Y5NJUpGBvbYUbq4X8JR24JXYW3imDKWs973aA",
  "key28": "5ioTVa5TzUMqMBW3xCwe8RxqEDcFPataepdaREdMShw8SEvTNjaejJ3A5fqLecgY9uTPaR6S2Jd3T65a4MSp7s1j",
  "key29": "4Wy4SuYeMdAJoKH31Azd8Fayp7wik8MoVE4rYhE4fjkZr9Wt5rPRQmWrkys8pRxT6BjykSaPXPo9pp3c5Htradqq",
  "key30": "FzRGLbyZ9HBjLQbAF7mKJbVjZNSyFzrgCDVPSFMm6xECw2r5VyAvZLrtrwzna3Wdg2BNhgFKzfrHK3cJbZbwLKe",
  "key31": "4dF6JvuS5jcFmvuTfLhQqiTcvYVD8KQHkATzZqDDvmNbCnBohk7e3JgJPeWKtWbfjeN8jRsBNXKuhxreZr8EMBZD",
  "key32": "2xy8xrM3UuvE3U76kWs7xUEPtdqundU6swZqmYgRupdoxXZfGw1TVqXJ7oVWTDvwLQxJPcyypyscpXnhZRxT6rjc",
  "key33": "3fG6MLEsC2uc1r4L2UZpG7CXv8vZe3iJHTnFfrQUNqvCPwtcrbRCELCJBXdSSvD4vTsbpx42oRYekjADXQAQmDdN",
  "key34": "3YpqAsfm76Pz1pP9FroeJy6NJ2aNimeaPrZvVFbGsXsmoJbceixdq9SUfVT6eTTWxvJQRZPwTFsiRAwi64PLouSN",
  "key35": "3mgCtdSrHQ3jFbJrXN8TUCeNcUS6yRRUxJqvDiGGTV5fZijLiJeyzqE2dcsw6twzdqoAgVD57aUZ6mpVGTCD5cs7",
  "key36": "2K9ZanC1fb6vVGihsMvh9b1TuqS3uM5S2wiabx5TsL8oJqpfGE7ZQLLMvkWFesG77eL3XwA1RYHXLbkZBiZgxQz6",
  "key37": "2d8qqhQoZMdQ8G5827m2DRhNSTBBdrJYqjvvb1sWhxr8ZafLKo2vGvbz7VdKgo28yEPDxVpt8zZBnhWcTnUFfuPf"
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

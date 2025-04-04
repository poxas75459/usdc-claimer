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
    "5LVSi4gTZMtCShoHS6M2Sh1zVVxCMRGsq5PEBnUBc7XXzis4tP9wSqEH5nHy6bsGnSExYpALgu5Ad2auSecx6NZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AubocuNvxRVjU5VXfZkGssUEbQw55Vw8juFJAQqGft6DxJjwjiVGwmtsxwV6RNw6ukKdMfENpwhkxntrqN9jqYg",
  "key1": "5AKpNVuqgtGaeFtMpNJL8YYoML4YWJtHRhYThCubJoUnE2Cg4uP4FTtdwGji4GQmPJUHrtaSyJN19Utis7QhHYYC",
  "key2": "57TXSTkBMpTkGCV7Uc5EDvzj1rvKLksjuTnbMVJwDn1AFvojLcf6n89PYuirXA5Di8ooT2AQ8LSCGXLVghGwo9yq",
  "key3": "4uV1xk4MUFxwAtWYk2RaWCEFjvLz4DjHQbzNjWQ6aXwMKqLnKQvmptW6P4XcQUYg3zGpBJjLPgPAVtp7QQUg1cBa",
  "key4": "2HajhZ3tGnbYWZM8ypkQFiMAtiYNwXZSfzRJ88NeefepkUDFecNgZiihShZKAarF13QHnZSZhRLXrahPPtwK8V5f",
  "key5": "4oDnUcnTX4scZL1seaJpuHbyNkHtfp4sHqQqCWZNAhpEAJgiuABNSbFVmqpCUuxix9KY538cTcYQC1FrkPSJrRzV",
  "key6": "hpLGBAkpiQSfJLC8W6ZhbXCJSDzSwCLQn1S9W3ma4f9N2y5eYUv4mQngq2Mrf5byHozLo4SWDE2UrUDJ6adAkDx",
  "key7": "VnU39yycvMR6YQSxbgfBiBubF3R2m7TzqKJinLDvBeTyiUQ4AnDhNsASH7qM5Uc6Xn6BBnSwneJNzwPo6UZ6rit",
  "key8": "53aCE2sJR65PaiqSVjt8cFDyTjdpTtBXMP8WatZc2nsU16yzz7CYKVxX7ZwKZhqxrTQXktVmAJpJ1gvPU5a34Yr9",
  "key9": "3XTZPLmRt9qkNtcXeuJHeasa8c66sMAbQgKFZ6F96U8kQWYdHQfmuT4mhWEMdqFZagtgE3cCcG2ecDZaaEn6pUVx",
  "key10": "459eqYpAD5Twfc5aph8bi2mhJQzq8HbU9QXtx6Q87q15AMVJnTi3BKcKD5zU91VvbGw5BDviHcy4XPSuiN5iqNFf",
  "key11": "2sDiwoPWApowPnNexRidFGkrEwjJaH3JBwBpyXZBFTA5JdNsNdLtZhQ4WYAG2Coe5z2JgpkeWnM3qmK9kqXk5nvZ",
  "key12": "5rvLyW63vH9yesu7PKk7B673dvT2uad8rJH9Qe1iAvCEvXWJ3UzQQibY1CLZfaHuuzxQydPJjkhksUuo2erDDVz1",
  "key13": "aHdHUyDMDXsXYgTmHgBkUo52cnVAXPGMTg966oiA6bheXvbpRH4E6veVDuAAasUDAEHoT4dP9Svwg9aT45jMrZH",
  "key14": "EB9CRQBxHrdXYmkoyRKQ8wsvtSJPve8MtqQeWpuU8y2zhxufCs1MEAuswriSLReaNeWkj96Yu7pMXntSYjZPWff",
  "key15": "4nXtVFEysm6iqseGxT5FTzvGkPhncguobuT3s52WnQPoJQcPgKU7i2AYjmE9sR4kboTKTXb8x4CTKKBAXCoMqeHY",
  "key16": "V5Auny9EzgmjdDCqJKvE5BLMxcfYh47WY2tUK7UG1r1pHW7fRb1HKfARTy16uNVXBZ2rQPiStP32mSTu8Woo8ws",
  "key17": "5ssLakV3YZBqnHRtx8bTCEhTzDzjU4GPUdutqwK4Xrr4ZHWYWMJMN3wUozV5jEReDVf4ozgtg4bRc2RXkhhhyrKq",
  "key18": "29RQNU5ac833XNYXXPjeS7vxHeq7CVrDaZ9jm7tDf6poGWW7k6L4tdc8auARzn78u1MyV1BZ6D3H3bxX9Nuecvev",
  "key19": "5rvPMuDhNAV3wkWkyWc8GZJgFVFfuwKtMTwKDu4v6QiHTNKVkGq916qgwxc9rCraPQWhjjNHkzsTtoihGe8yWppC",
  "key20": "5BUBfWF9kfDL6ADijHuoumCNZPjNsdY8EQscB9fmeMMrYxxNWucgnabsHxNFbNPp3G1MMUKX8Q6pxuGsTZFhqVJG",
  "key21": "2ckbauUoBgtdtRERRgUDxR4Lk3cMXDA5KKxXyocW6ski7ueXygNf8UsNzT7S627N3irgpGEvd6QxAHooDf1ckBo1",
  "key22": "36AjuYf9t651aMeGiqKPRRJCQHsoPwwmHupJo4ynULJu1J72KFvwnnMqLrPSJeijPeNH5BnDYgtj6pqMUUe6umCE",
  "key23": "4wT2kYi4tRBUL5ziHzZ5uioYMidv9A5oJWbVpni3BdYbMqjsdBQdMwdmnqvhLK9KxbSWKVNgfP3KDoAfoiaDRjft",
  "key24": "WZzfMRmgCNiW8JK6rQ239b3vCahyqbj7L81465uxgMwW7iBebNGYYM7a6ZuvCAbheZiAY3gkH7G9LMxwoHNAyRd",
  "key25": "3DaKpEZL8FJ3jByk6iUQjNgDNZYuZkb5XMeVS3B4zLP8VoDKXDKKYTUFExCAaG9UNvyL8XcBdAV4LDVZHXBXNE93",
  "key26": "4Zkgu1Kjp9J3Bd8DhnpuitZWX9oDJPgWQBNcx6tWct3Y5vkibbEVdbmi9M1efmvtAW8ANc3SrHfxCzv2duhLbPxz",
  "key27": "PXXkwPeD8eW5AQ4XNTKwZJHVKqHLmEVdAegpGCUeJrwiev4Ur2LqR17cDenMZoXymjXbf7VXEe38sy8QpNX8v2U",
  "key28": "2CrJ54y1hL3M1f9Srjp33LzFwKEivcT5E7gUB8SFkgrhP8swUG8ZsbAYZhhmYkL1hTSBHVJMpagVhd9vZNDfdY4G",
  "key29": "5UQTEZfguHbW4iCc5ypiFLzDtdAh2MvoEtpycqBtM3R23RRTJSCxbWowZZRf9f1mcsBDx4PyagEuVjQF6RHpEArm",
  "key30": "633EiAqX33f4cqfzDCBfVfxUfh1RKDxu6yUsFupE3dFmWGDvnm5MRZWxGFwS1WgEbeCD9vQGyFRbJ6PsK6guNxpP",
  "key31": "GK53qHvVeq9LRptgpuZHGFbHSs7GRUpiiNYjtXpvyZMDPF8nfJdx3z17SfgGaTnyKwPmqixCxxpgSBKEWEh22LP",
  "key32": "4FQY1MiuazssZU6GCksCQjcyP9Bg33QnhJ4qAKCYSw3NGk8c6BkpxCmVDbYF64pHunUAGXVLnVr5LJqQXp63hrp6",
  "key33": "U6CHHkXwd52PNkrhk8FgptTWmakgdENWnu4ZsEAAZvoj2XUWrJCGrswTWR9FoLdumjib3zHum8LSHKZDvokFV1e",
  "key34": "3jTNWSorPhZqN1CtoqnRNr2X1sJfT9jSc6PHdxFSLAVpwuGcmnDCvwpFVXPygyFGgiFCvDB6vsuUjJrSHnNfYYdV",
  "key35": "66S3dBW4bbxKoqtHwt1buWMp3hkM4aAZaqTWiNMA4HyAvQBoRkmWe2ZYCMNHv18nE68Erw3Ap44ZUiq8rqjfePH4",
  "key36": "VmygkxqmEryvAq2by75SAvAoUy6VacykQDjRjZmzy6mNcq7teXFEPteKGp3AkwMVq1nbAxuqo7YY7FcJtKYqTrm",
  "key37": "Dx9ELus8BSuCGwMqiyVg9p5A9XJefLyadxp3Kx5iXqjaYCAxx6rsFQ62ZLxzkkMmWKhhQftEZsRyMMhCQK1fhLJ",
  "key38": "T9b1SLU3tvkRoyTQjncmuMkNWZnG25X4WsDjg1kFjwbC9JHbBVavC9iPcQZ7QxaUTuVaJnH4xzmYmgGCtP4rc2T",
  "key39": "632wVSAXLGpjLyYuCt7mWQ2Cq8AAZ3y6dzWmcfnTZ2ChwHf6iQZJ1X144fawJkr9enMnacYNdjS8zwf9h13Xxs3q",
  "key40": "5XZnCJKj26EnRRUmasF1yAPx7k8yZMJ7au2mmAC5jxnjKKMtKJ8NJQaAFwuroSeRPgauEqijMGcwwa7voPgngw95",
  "key41": "2RGc7Bo1vftupSx31dPdJrfC5XKJqcdXurPdwbPSE2NoGWZgAPhkGmUda55VW15hfWPD5qU9BR9ZVs28XQb2Yq8z",
  "key42": "odVL2P3PVXvjnRtmfWfojb2TxvS2J6Q5EHNwEWKpT6iDrnSAXUnw7z59bjLrju2bWu9EA7HJ2F6w9f1T4TWCUZA",
  "key43": "3iGuZs8dQBCKCvYne1faAZTSigkTYHrxhZcNjeYwS76pTqSFf3hffSG3TVrgQbwibW5X3zuPPJn7SaWus4XzQUB5",
  "key44": "3GPUuaYrQP96i7ZdjhzEUd3CDXwFRYrUTE9qxgUhvZzzKeqihVFteBNxRPk374hjT47WmCR9kUduSSZzFeG8uYWG"
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

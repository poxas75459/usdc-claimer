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
    "59q5bQN4D84UQiuWwHcPtYccoEm1nEo69XW1QLwuWoQj1VNLazDWHSYoWLkU2ACzWf7Qw1UD4Kp16fEyNcTW2Syj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48vWFiZN4p9KEwH67gJNmG1rFNNhPVqTY9bdfp1r1Jo48QnyM2kLjSvpe5L2CTzpXG11BKRLKPsuz92jtKx1Uy3v",
  "key1": "TNwSXgUFYJMRBqD6jidESmikCE2xZ7G2rKLr2kSJd8QEpk9bznAaDYmUtTifa739JVbyhMmUMLHXNBNECMQ8DAo",
  "key2": "3oTpNCw81cERYS63qJivnx6FGbsACKyrFp4VAS2wmoYXiFMW12F1tkG3NJshvGrrhQZXtmty12w5nfu9otCMcSRf",
  "key3": "65626R2wy7BpqKZtvsqLSiKj5WWsaTpvUXYStxEbJGoVgT5JPyE9WY9YyVHApaSFMgUAd2b2mk3afEPFg6V45cTX",
  "key4": "24qevEyQ25RYCiZs8wC4VzCMHrKQS81kwBEqRiSaLDvnPvvFMHiX8XbPfqztN31fV3EDwjqQYuF7NcheFrPTAPE4",
  "key5": "3mYDbYK3L4X5YcQ9xqhqWTy3NdDAV5rWXDyBnhBHWxretbEPGEJhDewR4n4EbRhoEf7tUjAWyoxGej82j9Jr6Jrn",
  "key6": "2vaEwoieCtCKURNMPG6CvzyaSVACx5dzH3sJSguoNWcuiS12YPkXscYmGiKPbCaghCbrdCmwu2BCZFtAG1jzUJki",
  "key7": "5u7XLXpigB5CFThUFJSyxPoQeonzZjKPyfZtd3cTdbNpCJGjHRkeUCqtrAN4j5wdwKq6kCsX7NCVx4CAEEL5Fm3X",
  "key8": "3hUqRnKPSLAe7XCKuDn1Y2kp2N3ZjfY3wXDW7WjQ2Hkdyh4FGX1rBLBkmM8i5Prv5SoqvA9w2cpQMDthPbdFWAo2",
  "key9": "66MLCiUUGCdegz8QSVgYCbEuwB1vDgXCQDit9cafekwk7Toc7e8CREAexaRSkHoedeJ1MJSp6hCkuC53fmnBnkp1",
  "key10": "2ywnn9eRCDtF56mvfrGWft6A5vL1U6cvPHW539hgFSRiChyMCTwW6LTGfQxtUQCf1BYkRTr7n7r2eH8a7CqC8t8G",
  "key11": "4LPEyno5vnGhnksXLHn9fMNtbYiTrYZ5oiyfMKioUAZz9mVykve4JJNTgCP5ghpiCJm3jZK312aDCK6S3zfBweSB",
  "key12": "5rYbjty9nEQAD4yA9XC2uWc5F3GoxcsYSkRg1ZNhyQov6DNni4zCAjptzrmQjtUix6sSD4bYoX77e16Kyp9uAn9i",
  "key13": "rNrTfJs3BG2oJ72Jtv82hPaSBSMujn32Y6DGC3VjMyaPBufMuKzvJ5Yqd2RDu7A8icCVEb8qx1CkH69TwZTicN3",
  "key14": "2s8TrggzguHDezVj3LKWkUMnBLkpUetDgp81GjL3X2qLYM4PoJrXzGhbgTN3QDmWRV8iiSMwmBZoWDbGsEk5tN5D",
  "key15": "33FuvDSpcbLmxLbNAppsScWKQx1vWvt6TihoNLEiKcTpQENcCbXUdTNRHoMAGnPwAo7DThyNSiQ62Ne7WNf5Eed5",
  "key16": "5rF8bdiWAwaw1rLQippc1LuoX86x4JrtM3SnvB3C5zSUhZdTdPqZz3mgEAVmzpCvDcB6WSJuFvmZcTt2AR99cnFv",
  "key17": "5UDL4SFoPMYVYJfyFPpNk8kj8Nqvuq3k5V9PdFCm5XJgAQq2MGdtYYHXuarJzvVK77Q6gNbZ1y4NAC1R36P3C6bD",
  "key18": "5JxeKFf9XgQrLVKxwHFAfZ6CpcUkCxj6D5RtUR2ezNXM18BVxNhyh8Qj2FV2Y97HqPpjTVQ43Zbk16iSGvLUMeRJ",
  "key19": "48cqu9iTbWGZFFCfq7FZqw9veWxbaXNb7qvW9NvEptS2J9vjwK35AFgDWdSdtDc2VBhtZM2MUbyh3i6yZSKih5Np",
  "key20": "qpNcaCYPSuTwsMcoPm7wrGAj7r3VLhKLLpS62VD6vch1EE7qZqJPUE1kpvoKUWNVBfRbdA2uroL2dgCSQQR2NuV",
  "key21": "38P9m8nRfGUY2R7X1CeywHykqHtdRprUKsJHj9mxNETmaemAkYYEQuftxGaHKDuqiEwF9qQJGZYvXHbVx66iZAsB",
  "key22": "4Ec2sci5y8PLBEQn9Fww6BptaCTTeafUBM2CrzhRtHfyFuuJdLG6PencJcma9UZBa84eWhYDDcy5AeKjf7f9eYPE",
  "key23": "2PKsVJR3SysqMxiaB9RFbzTaPDh1JgNYMfgJUTxS4c1Q9hY3UPhb8w1Mof2UiTN3VtaNzK69KNeexM2LLD6tGcnT",
  "key24": "5WmW2aXaqvmziopU4ztMBBKX4kgBFQn4iG7dSQvBNzd9EuWpK9AYbzEbmk8Dz3JNYi3sfW4kdk2YfCWd5xHraEXe",
  "key25": "5kfSmNYWafWRBVhkA2L7UVuuV7wxz2n4SrP8bJn4dCfeKzEQyZ3Qb6WPtWW6uP92mNcGt4fnEc6zqYb8LNMndZUh",
  "key26": "2yanSpA568MqeFxNrKjSqRJyYDpwVTARonGNHRZs51VBDStQjEssKqYP3QGePJEWbygSTnQ9quMEDcpbDL3yWfGD",
  "key27": "53yudVPAJdEsTFq6KBjPh7wtPQnX8hNEXSCPozQWYTDZV68tMrck6qiYjVpY6HqUJnCgtenrF8F2rVuPDvs11YLK",
  "key28": "FAtSk3Y4d9LYcWp21FgDLh5syW3b5fsuWTpSfJk6HrGTzAGCutqagnN1JZi85uvnJntrPMHfWBeJBRoMYewY6nM",
  "key29": "4emvFhapjtnzCRWonTQqVxQe7aDPSHzwtbMg83LSGQqwtveQpQdZDoRQZuib59zL6QZTeV5dMQrTeRgdNZYfYupo",
  "key30": "4mdRG7zHvz7XExDURtuW967jzenCwR7AannMs5dCHTqM3NVXseRGz9LZPTaFXzwY5FB5uCoS8ho38xVLH7ES4QxN",
  "key31": "4ABVJsFMJFU4swTaVdmttF3phV8AYAzAa11GA6LGEdr1UEXf7G7xs7ARkabQ5oVeMPSnZuUnwpb7z5zGowqVqKnR",
  "key32": "2FJp3ezmzXec17GRxaYvimbcFiT2gZZ6byDsMK3YRWMs2hNzgWryeEExrBrCqYZzg5NeJt6VT5KLWKKTWoSBzJzg",
  "key33": "2SENz2mAjfRi6apqcrB27NFPJpayBURqvPFQbervvu8qxmF9wuXvA4KcyQaq17MzWt9CaYUg4xJfKfcnLwAW8WcY",
  "key34": "3bJVzF341LTJ7weSXEwpuCZ1kiXeb1NiuKHMPAMSz527LmxYutwZU7oHfkaTp9QKrvwd1ep1LXprugicsYxmJMQB",
  "key35": "2x2dXzFmjF9q2RyVqTFXcYBWakuhmBswsVwYAPsC41Uw66BUZ6dBGQHHXg1f4jEL294f4HQK5V3dLCxS3dRM3LWj",
  "key36": "WEKtJuy81ZDrGwEpYDaPbPZGUJ1kN7jLubLRnZQeVDFTj7Ujaq1zMD9ojiwqgYwJMWNNB2JJ9ruuDEvnc87SAN6",
  "key37": "4AE5dfrqqjN5oUvCHFuJ1CQfbRgoHLiPZ2YL7uNVBzYyqD5V3CUWCD7BB7xcUGeu3DGtMGaQuvhJR2LUy8pGXFJ",
  "key38": "4fsMuvZKktdyR5aJbJvSktq8Qp4hoCJiwFEV6S5i7SforzP9wzKzgHsQRUuysPXfe55tnMzhuxGGQffU7LSb46fn",
  "key39": "3JmVp2qVFFPHqvpn7yTnfQ4WXEtjw7hBBG5TyvXqaHE4VYgRZWxk1vr2u2MNCeV1tNBiP8YEaSjsFbw1Cfh2SRCP",
  "key40": "2q8tAGe4WoNHtAdjDPw5EYuoCHRfxuQB5gbnK2m8nfHZV1aGuegmRpgqu2tLvFWG7tfW4gjFkq6CqNWUxGkAwVoB",
  "key41": "5vKuYfjNq9jVz4bCKtqJ9XMcNbWiNKgWp2rGNXRMvwYdwcUjyVHcKGdn7yp6AHaf8zMcTcCTUqTy3AfCygFz5HEP",
  "key42": "4FRBdQ3xinpUCe4HfVUj4b86AyRDPhQSHeaxQ2AgFwbMV1vBLXEjVB8bncqu4hHQfk5KfTo2vLqoxsToFepiN2b5",
  "key43": "3z5dNfugX8B9SeCBY6eXhRLdVmdScafATeKNsuPLo4xYmktg1ZxmqEEPjbivHbcmUAFuFkKtydZYkMPAy5LnWjpV"
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

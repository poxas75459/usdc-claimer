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
    "3YWc5FYov5zo7dE25coqwwvbqwk2iuRgqLH7pFgQesWfeizZtA46vwxEataEiz3z7NfK4eXVaXvQmvRt5aNgTQ3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQgbyUg49rj4SCPkMRcFpP5zpjZmj1jtJyaz8QqncyaTnrQRYqFAcH2qBkfDwagpFevcwBxdwUqBtJsscWhvCha",
  "key1": "5sRWyQBmgWxQXHwWd9DdjFkceCsXZqcsmAqo1cq4etC2QA3xX1i9uKNzieNdh9pnuN6fXex2qzURFtLaw7TcqTDR",
  "key2": "22vM9jntqzENqgikAjfVjKW3W5QoSZ4C7KFyZQqA5TUrymnZqLR4KaYJjCcD3yYbM3d5x3fHSuLFkgTHBedhb3p8",
  "key3": "4vsqapqeYpYRQQAidUGnLorPApsHEJ9utkQk3V92E253CsEyAL2Ry1AiZDZ7X3oFRS5CKQ6buH9jngGjYsSwpU5r",
  "key4": "4XquJoBhTj6Rw2U5iYRnVDW14aBQ6Dgu5qh1zEG3GyXPAkdQTpgAjXB4HUc8Xt9tmvCmCcpgEmoVSiDAuMjjkLcV",
  "key5": "4V5PWGAeqMQ5tNpT4B642cSCqcBid1URQk9dwSkkQ3XiSuMm81zBXxPY72U6UWVz9iNEgwFHy9Mzxuj5ihrcWcUm",
  "key6": "3P7DgciLoK5AfAzYauf8Nh7oAbv6yZQ1Qq4Fxro697jVdJThQGb9brN9Tv7uoKPFwQH8TVfVwWXzb8ADkx6bjYuR",
  "key7": "3SNHnNQaWfDEJugzGdugP4DpTCip1vwkYRtzWGKY86Vbq8VexznooboLerCdFebH32s3QZF5LV3SWJsxCVZ4UqrY",
  "key8": "46WcbHYfDiJdGGcqcFkaFBojVcnopy6R7SaTPBCn99WBwvS8qpa6N7U5hfDpQnSCJTtjZXSqW1gXFeNF7SgBYPhZ",
  "key9": "5HeZK9UyKRXmAv1jbhw7gEX51BTWyhaVSeggZ19T2P15tLNS4G8738hbVMYnBizESVX3ZxXzYpaD52PHjoxEa8hn",
  "key10": "4vTcEbLFhbZu9DdZcECU5jKYMwdLJYJNsKm1iDkQPn1JfaQYpruaLyETWGidfYRWcQQBoYmLLaHVsmDVtKf1nLqv",
  "key11": "5vTmoNW3sG8dTYrqstAoE1zD7t8V9NZQBTtupDKZCzoY7yNvCNwQK5hNhauDn9oggNLeEiJvFRm1hiFFTvriyNBN",
  "key12": "3cp26oyLBdkeDnRrdx33eZL3dAaP3ZTkhTFSPE2FvZ2NU1Feqa8gTQ3e2RKtEBLfxZeYnXANADMncdbgzLUC6bgv",
  "key13": "xa5kZvA4ga4WX1bCfxbZtGjkMSXegupgUQWYDyDzrDWET4BFevFrcCWbgoFNWToiyaieouBsH8WMu4tHmPWmY3j",
  "key14": "2XJPbweVNwcs8GZP63FFqvVsZyCrvRwAoJ1g2rBbdYuGST5fNEb6tJUAaFR34rXbbJpHReX518V7apxxoEHcmyGv",
  "key15": "5in742h2jANjcxDkAuue3pXaMio2qzhYQABUFwE3GURRnMWM7YvrmJRHsfEToBmJ3aFF5r6nz5K5jyqjH3tmyxvN",
  "key16": "5GF2ZC5uEsnEt9gyzfZpVbYdoHZ7yqiTk9xyQfAufLJcvwFHAKCUAwx9D7h4YWuNQKSD9iTgipN9kv5TrWroqmi1",
  "key17": "4xqmpU1TvEacFLJBBSqkEoZNXXv6CJt8ABuZrobkAzmprc2JAvCNaEVC5ijCGp717WogfHwWRCqe7FfmwKsJ3Z55",
  "key18": "3TCgrzdNRYUkqDyZyT8QiUxN1gdhqvLBJmnLhykLjdRnYVvQJfGdLoeNtmqdub12y4taWagXhPyqWxrbnHh3FuDM",
  "key19": "2ibhMWHHYftxb3XJSsNdQLvwgzTEwo1tyxpPFT4krsaoYJJaNUK9dBBKEAZhNhGzCtqLMBeLoBn91MezBg6JMCmm",
  "key20": "36THWMbGFCHvwfdYtdwXaT3Pnia224ZqnkccJvvSyzCB7pJbowoixkPsTMkcwWGCCmkPgL2vrhAA7CPwqYmVVrgu",
  "key21": "4WciotXbR5fZWq6UtHAJZtddekqsiENz7RjDSphkyuwHZ52tFKesHDcu7c5W4H2BWaNCMtB9knp8pDsQg9nHmUJD",
  "key22": "2X4zRfQqFFvgTnwt4fd1XcdTBP1j37si4HttfRzw5rtqe6RyWwva93XbFoiGfABvM4wQFffXUkr8HyXtry4h95Tw",
  "key23": "3soP25g2qF2Fk7p56Km5y4RJN15mU1qLs62xH4bCNKcNUKvoeXixS4endJBy8uMR3ygnwdADXq7NRaPkFDtjCSbu",
  "key24": "3t39oUA4KUtdctNLcsD7myDCVtW2obv6R4qG3FyFTQG6sdgFuUHJTttpwGf5M86T4T7J486ZwtLWz8boT5B8Tt9z",
  "key25": "39dBHMj6xZdjk44KLf1rqabJegjiCQNC3ZyiJLZTfpbrR1byRkbX7cB2CM4JQBTMSKePRpbGjskdvxpsre4ukLg6",
  "key26": "5mL2NQM3EDMFXQgNVrU5wJvPn4YktHaCCMyRsVhfZFicD8G1kMsa1pj1CPY2GDP39Tq297FsxuYjf8EAMZdDiZYA",
  "key27": "3irWgQcdKQ7JS1C9T8U3R1v7yKiDRNrucTguhEtf9CnSnDGFo6Up4EBEkVhuuB3Bhuvzr7LcwtRD1vYRGGBEorua",
  "key28": "4FcGSzz432NUQbUvqunoAfCc2df7GTcLhXmHEYDmAZFiQzr2LqkjX1HgHBH4igtPEUd3p4f3PqYfutibGG4QyRaa",
  "key29": "kUnZih7JGSXHwd8jAxYuL5kPE9GsWxgk3RhfQPcBZnVrmDiuL19nq4vArGhmsSLTpVjznz7CahogCTEpeb7x6nn",
  "key30": "2BaAkGP5jKfwW1P2TDrgac1Q8gfjNXkFE5wzzuryLCJrUXNzbPFyiUueGzYYcJtzzYEUDTBMeApDRxqj3BRZiAvL",
  "key31": "38eAX3m2wFH8WHqaeXq4SRm6cHpxwdjTCjxCLC9G8mbZpaHq9M58RngGBRLdvhY9rqTAh6AyV95n7ktve66huf86",
  "key32": "3E8bRRWfoBqNHDmjKVBTFUgAUysFmuyxhncHS6bfkpAVxnB6EAtLqwe1zXLh298qn2jAJWq236c8aGn5ehGztMUC",
  "key33": "4UfVmXWS4WJAHcyrjMmwqRoisFj9LBF9G5wPJ2hou1yERsDRE6FMZyRfpS6BsTwWaBEXQziP6ytqEUy6SYBbWa8d",
  "key34": "3fc5nNs5bP5WqP34KBmrd2QjxDVnjsKiFC2EW458z8hoLt2oPGrYMMoMGTHvRbLkfKdKCZAwSDJckA1K4XbnFaSB",
  "key35": "2xPGdEin5nTvPD3of5QmjJEWBU8Fs5gk7g7fqSbagFBs8MujHL3WiJwSDBf16fYZspK3DzdKaUZhZhHmCJipayEa",
  "key36": "2wMPcAET8mNfqug6ircUguZFeHu2DtJ5sGVSkFebq45AUoDnQux5cikuvCzUzK22FzSPyGHGYNHs336Br7qnKxcQ",
  "key37": "4nA2NqKv6ruU4HY22pqHmV4rTnChWAKJJZVBrEpz8CqS7cewn8uhcgNwYVpMnSmmcALT1BgB3MFGnZPSVa3aF1u3",
  "key38": "4fzPUb633RpQv3brjB8s1ueJCXBd3yPFSvg3KT4NKdNRiKNdGTKJzKuNRBi1zrVfShmUQxrsMjNHsGPfJ3o5vfr9",
  "key39": "64JWJ8JyM6ruERvDVbBon7vHDDCF41bqzFAPzp1Zvk4LFaHvTVgDrRiJdjmK6AATEo68ztRLavD5Tk6gqCv36siV",
  "key40": "3JhL9CH5MCuwB4hBWduYvLy7CjA5acUNunMdo6GLi15WDXtUm8YBK9UDvSUmVi9pHxsTHpW3YWMjZSayBn4TV5ge",
  "key41": "9p2NCUBzF2LE4NJQAXZqtJkXhosk4wrRJAGfxXAgGUK25MoogP1cKnNPN35swAp5KViioR1eiShkTFhkYKraCLt",
  "key42": "3EoFgXsaGSy2P3cVqkeqEUHwZ5wp5xu5akLdSjLAZmxnYN5ksCn52oi22puVXiNx1npc6hoaW6Lo83orWMYYvnV6",
  "key43": "3xNMyaMJaGSELtKo6dgowb7AKSmkxWMwAyPEFzcWYaefMA5MejpYUMwJ92xnvwg7Zxo4i4peAR1PnZyjyA9ZDTBu",
  "key44": "RZjRqrCaxa9VaAfFD5jxuvz9FnR7ZMJEgLtv54BtFeXTdJGvbP1nxSgNPo8oij9a24xoxjnSHmjeQNNwS3F3z7t"
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

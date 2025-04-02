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
    "p8YyHFKxkanf9aujkhAo2t6CxfaQVDNAPJSBGdVikujWAMdeD391PRPjnb6Qvev7vcepnc5GN56t8gkt76JG4XR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofB3f4o54e63N2mYZtCzkperoR3iGnR7FsFGrTeAdHCWoFkXsCnPzK7Zi2b67TiT95gv1GqsdWdwR21dV96piTy",
  "key1": "3PsjNcSN8ciYWNvn7ohtXgJKbnXpx4q8P3fVu9NGFFw6LWPGDtpJXNHznHWLWu5m3y6PWAmnhxqybm1cZCEYjBpb",
  "key2": "4yWMxf3eFoW2XjmgYECmmGnYRsvGSH8FWr2w6XQHErF2Jjw8MZaQu24MpSupDeDWPgYhsHjtFdPf9JtwnsaJai81",
  "key3": "TRgGumuddVmg7qatBpTB5Q291H9hv8QUEt7YfkCZXX8G3Uzon13mPzdqcZ4j8zMz587XtzUh1JXZqPLuGBYiitW",
  "key4": "2hbiMAQtjAKNsffZp87BQB7XjgTYeKKVDkneYv7zPiomxCXzJQ9bS3SRwyQ1sYfNhX9m69wSV3N6yVGsQQrdV5Bc",
  "key5": "32oAxtjYPf6jMcE3cQezYu7oGsJTpAYxrGvXBQSMPZEQdjaco4qypR9RJrjZF1bZGcauNr9J58LTXWcoF4DCA4te",
  "key6": "4D18axHxKPqiPFpcN1FEnziGRDYtTD2V2oiFDtBgwPRR2fKp5VxWyVyqcrjwGTjoqYXYtpyxu6oqe5cVD2iPQbp9",
  "key7": "49YxwwgRy15HLCvnuYyANFB2gmiHSwHTzCqcNmV23TycD6kpNtPwHYP6vd9GsauPmUetb21aVKYJ9rdh2s94t5gT",
  "key8": "47aVrDPsT6oHnWZDCEsMuCvC2EQC5B6DhgCLbrcjo8vPRbg5kj2Bm5B3FnWTkEuxtKqDYFYZyTC5fxwbK8EJ7BbU",
  "key9": "2VB1hEvRHdmkNycJBuBwmYuT3boLdMVZtjWeYg4Fa7gpJs8sMW9t3iJSnAd5WpATPLZBkNQYpHpX3jjyVxuey8zg",
  "key10": "4v6ikaWo7PPsyosBEkDktzYvickFD9KiJW2gLUfHfXVKfBcXK4KRzUwbhaPy5gVsYW6BcvpjX5hkA4U3CSB6SMqU",
  "key11": "5zKJ4B1sY4EQzHBPLAJBhPMYy3DuT9J2UFaT4VZkZhqeRMQ41r1xjiEjfbxE2zgjfoB4czhm35tXV2Jaxi3k11EQ",
  "key12": "4JFoCAGthiBf6mWhCfuoDuTdHmRz7mUCiB34Cwck9nuvoNZWJTPMfL67gTT5jpWHyKR6qoQ9qqPgCyQCYooTWJpb",
  "key13": "3VsejB1u6hTnE7V3L94KtVDe3h6MXdhhhYSFt4VY8worEUU9Hm4ob6ZnZEcYibqCBFVEyhTe1AE6jX3xR8Vebp9E",
  "key14": "33UYCQcWyrBKZ1CWCdxxmZUX8gS9thBWpVzSp4RpGFTLmSFES96ZyYa2ys8wcQtyBy6z4zVQ7H8PPEkhXjLYaNqx",
  "key15": "4z1jLPUuwATPjZxvgaepsnn2J6HY65n2jyh3Cemvrsawjkt8y6BLKYtfmqNT1JrUgH9hpgztjJrzw5oirkTYqBjB",
  "key16": "FWre44vhPBmbiw4LYMPrXfiBGWfBFcAsQGrKS5yLSUnePXxSPxdQ76zZZ4U7ELTSm6GhPdq9sBqj4cCUTyTsQtB",
  "key17": "3RXB89yjVCz24HkJZY5rEFYm8adPMHciLyKiA4NyCSbUFoWfZhHnDCYRgkpNCHfq1ej3V85NWuwhSbx4pWFKCspT",
  "key18": "5UTy5EcHnkaf55tA1vfJzqgJKMscp3ypExyiomoEFfwTNYpTZi25686Rc5FpDEpMZvHeLcLz6P8zZiSuEn1r88ki",
  "key19": "46gwZ64dDfLSRwz6Q8aq2THsFGLYhoL2GafdGy9VG23eVCKjTcYE3yxXjMSjWxgm1fkMesQsiXvS4dW8H726BK9h",
  "key20": "bNVnerSHDLB3hSdAZmzwP524bZanAyYRkiK6cGCjEH9qxzCpmpHZMNfJGLVshuS2n6zsTCjYKSQbSYTSb1GwDEy",
  "key21": "34eLeYgJqUh4USGC9QTrea9RouvvQoxuuMYwydDffH1Ce9dyRaHWufXYn3pNNX9ddLJsPa4CHMFvZp5rWWM7wtpA",
  "key22": "3u6W1mZHMZwastVz56xqm7xHQ9KTJN8GbTssia8e9gENveCn1WTmzwcNo7yq99qMctT7Vh9c4cmQfqWh5BjymZy",
  "key23": "4tuk7BmeTxVQ34vkUEDLKFsesWFYtpaCYXn62qXS2Vixq9F6MoGHv8HsNMHb7Mz3i7jm1Z2ysYYj1Aa4cxdrDtc8",
  "key24": "2sjEdkTejkpMYLVY5kaacYizRsSP7UdD645xNqviGH9A8mWRALRvvMp9gF7GD9c5SWkkFUsxctz4mCsJoc1Bqceh",
  "key25": "8YohmYSmSFvBbhSe2B2BFxNvjyxSt2ET6CVwJBCvB1rxuHG8YEeurRoicS2A8QbGzBcCWsEXgsG3h9AKt9MJXUF",
  "key26": "5cvYgbMNZzGh93KfZQrZbTLKjK1arH4jJkQRfw6siJyvmwShgkqmuvqL2XyAgWGxZChMbxB2cb4xoN1hLUswfD7B",
  "key27": "K4FAmsryUb49H6SKF8kM8WKb1hLXDMPWNJQCW19L9xGUCuGhufUgomAAutoAaCsmGRFyeF7p8QWeEKm9JAMGtHM",
  "key28": "3KYEMzCSFV6ns7roejNzmw6ushJLvfeRTR84Ce6cyQ8s9vLe1JmGqdLZwPoNviQw9T6G9BpmGiZwcrmzcaLNhsAn",
  "key29": "4mpSDUSATatEGtzc3jroJinHhYwkgEHDbiWXjaACU9iFpDADYjkCZsCiGrUQ7RghNd2bxZp7jce4XhY7sntFSomu",
  "key30": "5j2ZxWVzdgYQdFzg8DVtPRU51JwevWYFdJppUXHQTw36GPDt8jSATVjxTw7HzWrfRqD1HLqabbdf1HSFXCUT4Mix",
  "key31": "34zLsc7msXkVGLNRnmbh3pwVYyLPFiJVd4mnnZXB7B4Sn8kMzgDBvvfK6WqCqM8aeS932KVJFwCnsczdWJtPvRaE",
  "key32": "4GHRwfnC2vNwT74aUQNshuKfqxeYZ6EGuFkQZddDtxBA875eWeTRMTSUp8zwFru4E91EmTXMKx36VrSWNtTHUr4s",
  "key33": "59g3938Fu1HtnWb6SmvRtmNULrsP3TDH7CiDT7wkEt2aKYwUNBFtrMaunr9i2gXafFRNahZZJ9yWaojpcqn6w1Jh",
  "key34": "512SMY3QNZHuUyBGtCMkJ1U1tvbhBZysf5bPiSb3tg3zVBuse2ezbFt2AcpCacGkyWeGFvig92DZ45roKp7cm2B3",
  "key35": "QKof7sefYLqttWYnKGvpepx3n3dTtXXzYAAUfVDTuSuRQcYzZ7VfM7Vosj8N23cJGwhHab4aSFsqLouVBaMD97T",
  "key36": "5HPMeA7JsxbuepfuaeapZhcKiqMz8m1RYrm4VTAcz4rrbJdXcy4adSpaAsps4M5KTN4qqnvCKAjEWfqyQTHBbmTk",
  "key37": "5DzpDC6DcVmEVBoFtHoFHJTiy75LhoSGCWxP9hu7pigzvFdYNjncdF4PpJ5jmTJDWLcgdUe8VVkE6vF6FWiowqQ8",
  "key38": "22YUjLP5w9b1MoBE67ZRYSieyzKpwEuPf1Uv7kqvLT7TEvf1vPBmFSuKvtN8VzjG2VSDM2t5nQrU7rAzq6izGQM7",
  "key39": "3m8jEcAWdBJneKzpzNUeHMLDzBsrsqFhPbo7wnU4i2AMoEYkW4LXXAt5Qh46xtJH4yhUYpSfgmxWVqAvPVWc2w1R",
  "key40": "2MHpFKDfscc9MQHNdPUMqCo8gzSALJszqNuzRzsDeMv8LpEAaWcompFkdF2UAZw3utV4VrrjJSxN3gdmQzAmLZJg",
  "key41": "bLw2FD3NWs6nYz93yaWgToptsqsVc6c7wudN7x9hzeDVB5QaVB2eTemBqR2M8xndSjXDirqLFq5zUffCfQTHNzt",
  "key42": "5XmzzvqzF8t94xWLjPpPPAU8kGqjkZeXRCB84GHrR4JCrPRzknqQmmifrx2YKPvqtp3NdhTSWvr5Jr6KprzAyTHj",
  "key43": "52FW7WDj2HD7pv9E8UawR3QwVrU3NvZCvm1tAML8MHBfiJhfjHRBLgVguf3SYPd3jj3QhaZnScsV1M44RfkCWbw",
  "key44": "4ZGfBNHddxdkdftLVyzLrDAH7HgkzQjb5vC8KG1cDYDg6r3h7rBJ1Hd8U7EswrnjzNMwsBpS71uTuoKuwLhQAEvD",
  "key45": "4Y2tUEmG8grYDT3wUbSYkAM2yZcMCKyY8pwohTdLSzaVspVziFoSXDxcMkxoiY47RCcvw8QYnAAmJ75AeFrAHaMV",
  "key46": "58g3UdMN2AoXGaisvftBJFkQ5SE8Nf1SUXZgM6zgatupZDErR2Ey4cDcppi1imztqtya4ap4cKW3KHFjysVf6FNG"
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

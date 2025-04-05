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
    "37Xp1WHSYoNx4QsYauuBpgpfCRRLAAiYoUdMwFdVXprQcMwbagjULLF2iCaSYJq35Yr7c4DL3N1hsY5Dn24E2qrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBueTHYhccS3rs1bTwSz7ZCfNWqf9cketM7ewt4VBe2X84hA2n5BmgwaFfsWDZR2FvLnvmL2dY2xvKhFExGRVAu",
  "key1": "4gcxxEgHmvMZ8CkGnyMNeoWXCGCa4jjYpc7NTck6PHoJEz24uQr1aVPxHmewp5JHun7xrL1FzUUnFNDBdPrrD9ip",
  "key2": "3SDtR2bfBrCrA6gGtqeDhizNdQVe8tqBDZh4dmqVXQiv6FzvFa3eQ1nKmY8jWiVXiPtaYXTcvKSePVadjrS1GxDJ",
  "key3": "5muSeQbwoMbYUzRbN4Y9utCSGWNkFCCaXWtuh6wms7ubrgiZwVLxnXmJPpbZ85MSmzoiLZJmWvEjguGJ3rrE8CqR",
  "key4": "4s8oM15vrQ5DUnMdd5LUAwHCGHnrZkEWj2kroELGjTBjh1zw6pTaf11qRPmqSwno4iK24C2PmJTnP8Fr3GH1Mt1A",
  "key5": "2QtPhvx8jmpc3tMEeue24eCYRizp8XE11dexVFHMDDm1uJxYEn6d7TYEFYFv1p52jDdzzgMgqE2fnuEZ9qDmrBYN",
  "key6": "2WSeNERnfihGji7RKBkfMpmxsi3MaXRzy1qymS3xJqjd9rtWf5KzuiBekPpABqDLaDnVzdhAiURUc7NJCQvzNrjW",
  "key7": "4vaogk8u8qqsapD3fRoRCc9S7vZuV2PsbDJvZDZsgDDykgqb7FAvaXWX5Eikbj5kRYMwLwhzSpG24WXbYRh4kUdB",
  "key8": "3XwvP3aFk8dhi7D6sq7xsqvADuLbxjdUjwMNaXoAyhj3tctw4aNBL8yTwMQJ2oBs42nqe6WJrLi7xS9nptw2X7yR",
  "key9": "4WPoLYVpd55RCfyvAFBGVTHsvhHQQ9HzC64WmBDcgqLiPha5q58ud1VLdMnusFCAbTHT4TAqtGcbKYYXy8EVFjHW",
  "key10": "4CSXU2u4ZkiCGbGLDgNoztu6d522GqmGmPQmqoiK3ksEApmttrti89xRr1jMW548254rkioCM6CRtQsc15YpqZeW",
  "key11": "2hzJEhMi6PaW1kbarBKUBvcx34iKpHkoaJ9pNdU5SKuhXvJ5UsiSKtvF4wgEwWHsJSaXHZmu4VNsqW4DoMFf6HMg",
  "key12": "2sRrhdghw5LYsNXAuQWkqVtcvB3KLkzWAjDxnmjbq8zqcaiVugRoZZXvSrtQQFgJ9F1ayiqWHqR26ah5rcUe7uUH",
  "key13": "2yjLWdKRDP5tbKnyrnC3f3Fr8ke6y8G1qKr2puivrFucef2U4gQWneroTodHk4hgo3d5pjR4t2EmwULkrcAzr6vs",
  "key14": "2oC6p7FbFVuKft94e3GHryYmAyJtBJzY14GcDUu7MjHgqncsfH4UkWXeM63TjhNGkSDQvguitpuSp4jYdF5TZAwP",
  "key15": "4pWp7PdFut5LkDRbNtbjTBKGaob46Zufad84ivdcc9NR6gzgJojtNxt7rwB3ZkcZ8XaxuzhiYSYaHSCMvkiug5d4",
  "key16": "3CyM5yCagUfmiTHtCNTfsEmTQm1RDyxsUkWSB715oYviqyWRqpiviyXuXqGRDkgZGjpXZeJiZkhcQU6Qjc4wfgrq",
  "key17": "3zS2hSHPp5kWXPUUCyZFgc4qE774WFbHf7N9jCtU7w35AZitSHFtUP1FpNYQs5zDNB1iFwLEAim8Vw2g1dacBqE",
  "key18": "5ibpWWkFrqfNG9oiCxgyQDVCc79soRikePafq9kfu5ThiWw1bBVEXbo26MF12i5Rx1o3AqqDGoZ3ybn7VvagA1kR",
  "key19": "LwzhqUwQ9tCz1uWVyjqpYjV61tdonKgyPFcZydh44n2zsSnLSfJLGBKp3pFBbDS5gRnLXTHxfpe5KqmBsxSoHyX",
  "key20": "3Y7mLP5mrqqMHbuPGE9CBE7w1z5kdkh8W9uUjp9aFRbXMzDddkBTAKgzHY7B5EHkkBfigWQwRYs9gkvhfnXchJjY",
  "key21": "3M2VDYRjd3AsEjpHnr4KMos15hJBrUb4nwqjZBwVHNzJHK6BbTHPtTPtGxuASxoDv4pvS4YuoHCvGxFSWbiEkXcd",
  "key22": "XYXuEu8KzupKN3B2PHN4BtPGF8majKSTZeqsXRzBYYaYc1923QL5TBaJwoooGvfG3eRVw4tEsELnZiKqdKFw8Pp",
  "key23": "48Kfp8pKNceXtJY3crxpMcUyZaPt2UZVKR5xo9LGRvMvo2mVFjr5V1QSNNzBayzMwztWurFxDBjsqxAzeWZZtxjA",
  "key24": "2mjwZc97J6aymBvc3v4uDnvXRVRdLCXSTuXm7cp8FEn1427cQ54YNM3n7VBt6XaAVwJCxXNsRGA3h5coRGSGp38d",
  "key25": "2vM91bw2RcLwqthxRcpCzgZWUQu6DxcM9YT8HqJ1TAqAcMA6hbr9Aw6BRV9QWd7Nazs1hrD3EbNxLnd3KJGiTYU",
  "key26": "58bRnbktbcRsGg9iDha4aBggh3dJQLer11cZ8DBuowCGoCreqKGT19arZhXgkKySD9GaY8mjHWd2XvW6sg13Qb6X",
  "key27": "44L3AgQye8mPfBkC4tbhmdmoktjrpdnoPorqDRFoN3dbGxBC2PFYawYBsUwUh44e54RADd15afDLfE9EbtaxayHM",
  "key28": "3wf76BYut81S56mvZbo9UJf4jKmVZs17w7hioNHzG3UXa2jjAXh5KhikudpSg5gUnLbjqFbxyTok75kA7BkQkaPP",
  "key29": "3vVDi8RwbTwpGzRPJTC8RPmRWVEtXt4S9cNrXrse39UoADbgGpYEvTJAXuWUxhjf2H7JXrytw3VACMYqEKjUk46",
  "key30": "CWiPvXcrNPqjmYCtf4g8jkqXRDeZhYngHJDKXvc97ppvKYCtwT1kXdoyNVe4obvDZZXPBHWr29ZS5goZfweR6GC",
  "key31": "3DGh9ZVf9pHBRW2WCLpK2S5BkbC8XLYXwcJcGXHvFBqJGnEdK5j6sPb5TsmV3tNmzgkhBrrFbKtk9DAs9cafVGye",
  "key32": "4yg4hxxednNh9bBsU1zYaz5bJSByXxHwybEAxC5iWQ3cYtJ7RxGxFFG5VXyHLt25hGixQV5kW4Yju58jTsonRyWV",
  "key33": "55W8uxFzhCZNUuTTmsTEab7tXrxPARwTEVaVC2HjLwQLWE7ALgRnVfE8N5kqRVUGLjHmHwsWegfZoWekAskhaSgM",
  "key34": "5PNgR2x6LtqAsv55xY2hL6UiFycYD4LM5nZTAtbGMgnJrhVRXsx1G7koaanHvb6a7kzYWBtfpeG4e9Z58JsPMGn4",
  "key35": "339GR57pKYJw8DQM9yoRra9STUmbauodybFtwjxchqoc4UXrqFcQEYcmCDSvpmZ2KYDVmtYcBRCezdfSfNwE3Ar7",
  "key36": "38jLpGC91Zodjbh3d3acQ4gJkaDxcPQTY94ysQ6QQ9aufzdy9paLR5kCetkZgtrGLB91XnY9u4V7TxMdd6WLtswU",
  "key37": "5uYWL2yhDRy5qRSBh2tSJXRJSNMru5x9mZvCeUtYqYpJx8utSRLsWjus93ifzoyvsTFpn7McqGzYZegdEwxVELB5",
  "key38": "5RZAxgHvvFaGq1WPNosn1qUixmY2Dsgwp9nKMsHg3Wg9KqsTLkxw3pmGoToC1kP6ZwpP3D9YErZWXdFpmEA4DAQD",
  "key39": "4UvPzktw1qBg1P7YkB5oczC61Himk5UMeWTo4fF38tkDWAFTUYJs1P6Cv9JMgwegH8n27CxFyUzsyBkhZPG67mcV",
  "key40": "sHsGbcv5x4B3PoQQLG4LscTnCQC8phqHe65RCLNGB5bHFJd6nL7WsZp3bJruQrrYb1Q2GXatfp8BsKJMz8RuFme",
  "key41": "2sHTESfssA2jAv7wamd6mJBghg1Jj4xYBH1vFpfnHBe4AFAy3fHkRpn3K6zxgU6dwZEg6AKfYJFsjJ1ywNwxddqV",
  "key42": "2FmcPvKeZnbH6W6uiQHS5Xnj8DRMCwZAKd1LNhLiH14auhxBj2gbJuK998754RKzd446nKZTvYDD8MPcXBHeJKQL",
  "key43": "24jxDuyTM2a4MEtZPQB6zbBcpDomb5oUG6AaRafPgVF4qEveub25VNLjMWFkuypauZaKxiToi9d7M3jA6sMihxcH",
  "key44": "ERsqoyNJt7p923uFLq4Jgn7SCnH28Cf3bVEFBdTyoS8sMPiD7AAVx7BVwkgSwppHto9eH4yb5AnkosTaFk3qGb2",
  "key45": "2Ueg2TsyMMfHVtTK4dN55aefouwtDTkDS6vocArgSk2VadNw11PZwJDwe8QBt4WwChxeACnKLrauSS3SuAoJh1Yb"
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

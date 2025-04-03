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
    "5oVZtiPiAo5yBsAKHme4kTAN5ToGbr6GmZg3VSb22GgrmJstzM6Jb5bNvFC7EaUiHUoozN6h6CiMpyWrw4zycApR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iVukxmaRuLperXjF8vFR37KJ9TEnuRJyB7RwJd9RFgjbqgj7Dr4rNnAvqcBc7xMJiMDwFnPGYvDTs3X6F9oKCXg",
  "key1": "3CxZrquK3g6pKgYZtjFSXsvYhfY7wVp3REzEetv9eh1RhzG1PccoepVPruHeMa69yTuyWuCr7ERjNdCPMCvriis9",
  "key2": "57QXXtHQo4tNukSjz4F2kFrxbRbEoa1gsEdJdJ3a4EF6jRRbcvpU1F1LYgm3iDVCkqUMePqFsxnsTEktC4jRV4LW",
  "key3": "5GK52Qamf17kBRCfXdsKreDAuo9abbowfdvydaRie49XG6Wb9L6aifZyfavNi2YqBwbnaHFCDGAwT7LGThTyfNaD",
  "key4": "2hiNstsUSjSHh6yoaX8cuRwwLR6RcESWEd424KavtgbT2hKwfTk5xKSbJy9XMB7DSQkeHVNtjcrd4Uaeyfc4MW9B",
  "key5": "5LvAQWmUxHnXeSM9KLsv7ZWnJp6T6wryicWWzu5VSkBL26Rvi1edRhpvsQkPSqfPviHNV6ehXrbKUZEsrLZHi4LR",
  "key6": "wFA1EaxKyVrLnvHJJBoGYLMysmDfGCbVtFjKoipVpCXM1dRfLWhCM494VPb8CS4T9bTxaxrpiJ5WL9wJ2YuXHqB",
  "key7": "4yKubhSueUYU9fLRNiVQbXfdWQey2f5avneCVTWcXjM61r8EVh3uGjadHTspVnUtqBzo7WZ1zD49m63W195WDeHF",
  "key8": "4HfL7EtSAWWk2qkFUV2gkW4k1B5EUNbbuNMKMC1erhmGBXi7zv3vkdnMVZHwCQFjkmX69NyfgP6QtPjjZTiKpoZQ",
  "key9": "2L1sbYfD53zrNqoYYkqPdDAvfy3R4gt8AVC3tnUYE8KmsFjZ9xTgzxQ8e3oWqW47T9egCif34PFM8u4oR4LErXBg",
  "key10": "527q9xBbiX2VPWkzuxVnCQJDhjkF8DoGbXXkrCrwx5Kp1RLSkm5YjWKetgGvmdwwxAcezMwqJWSYzTmkSVLMeFza",
  "key11": "5j37VNuVBG4keFrndaXwrwGvvCdD6ocrmuWG6zxhTeZDf2sAeRztE6SqDcrCrwn8qcuWqgg3BkX4f9r8EtwNYA8o",
  "key12": "2f97oRuDnCuVN73ojSgXbrpybLKEfbTKscHT6qdd4DfnQe7cDdeZEX4SeVBCDzvSM68P1iyvhjrhm4NjT1ZVYnfW",
  "key13": "4xv2nFoAmoDdDAT1JYt45f1yUoPqsz5U561LCpBYzrGqtyfSoRMFhwADQfZiTjyuDfwGeRoavPU6mocgphR8yiKN",
  "key14": "5wYpEUWKX41U2dxLEvtB98bxhH6RekYkvRmVCq8aGtM3ZWuymGYnc81EpnHPR6S1kng58Dhf9PQnSftfBNpFEyDH",
  "key15": "3NVfbRKFgSwWYZaxTvFnmsdMf7ges6LYuEqUs1p9pkY7g8RWCW264aU4Hdwi29NcvMYDvn7wgyMbFLJdxjiA2TNt",
  "key16": "2kNXVauApo72xAA84KbfSvwudvaiUQijvL7h4AKD4LsQPELE5heH2YJcaN4cYTVznafHTnANyYr6r8fcxRKTT1DR",
  "key17": "2zU6PmfhrDXESjZvVYknehD42d91YnW76mAd21RtC24CWhcJRxqWmAj6qkz5jM63uhaw6MBKG6LAqay5spHcSzMm",
  "key18": "4f8wLGTGYuK9GaCbMiTR6Ucb7ZqrX7k8JUozQHLkMUnKcpv5cp4f7S3y8pHq4uJDqsaq8xspKwQ4ZEftdK2inVKG",
  "key19": "62MnopYDCr3jDEqEYd8pbh8KiE51rtALVQzgYYJfNjPBecsM3cArDVFxBkhgwr42EX3iipc8DJbdHdKYsFxbfwiZ",
  "key20": "3pYBbDrWkd217oXkYbHugcHj7oXazjYSCLH2Z6ve4ruoS5RYd9w7XrTmLJ1tN6Nfs3UZEXioDnqYxiDu7xXwwRi8",
  "key21": "3JQxhyRC7xXAoBxHB9BvmyzFW7QmYvifFV7ZFCpP6UYhgp3DNkWYTwho3h15TRFBzP4G24W819cwZ6SpX38YZsy7",
  "key22": "3tct1EWffNxbLKyShg22wkpuw76wzxmH5oHW7RoWXe8g2NjTyJeQHy83aorCzTNxgxvgkJw9CR8Q72W4cZ9vgVhe",
  "key23": "55Piz22y2ouYVgxobSKSXqwMnZ9QooDUj6KQijQALd4TAx83funhQT3uG3px8MKR4VTqnWxLvd6ihD5yJpQQy8eK",
  "key24": "2fZzVKq8Dj4zrfJMu2dVXNq4t6HERLGV8D4ujZ4ZGYvTuJhikGpJN5WeRdTdbjMTz2nNVqth6KwZ7HjZraoE3HtQ",
  "key25": "2WpMRKVk2BUoRoJnaZ2PJnkb4mJQbTPsKA3rWNv5Xv6HaFCa94F4hZDapDLxBthRcM1hgnN1Lg38ccqpEZUvNtzm",
  "key26": "2Bg4TuDNNsrHeLgtCvm4LTTwtnyc3rf62dWQbz9xX6Wvm7XZZQ43vYAAdwebBBHm6EvK2eCBpptoUXYs9jCcFBeo",
  "key27": "2tPNm39RiB9sFdWQm9gKxvDqufL4X9ZgTx6qNwjWN2awXHTXjPXmtmH2W1cKJgWRjqcsfuqJpUFY7Te623b92rEX",
  "key28": "58V1jUamKDtXNZbDvxuSBkNsX2DU6QSXLsr9297Kr9SaatvMcZYmG27Mb4msFyh9ec9Xz1KNYexmXcbUYrdgdTLM",
  "key29": "5hzjYvKiLaMrocsBpPp8vABwqj8iotyhnNA2cMoPfpigWJNnE58QNLJF8DaiNncBivMG6TCNvZJftCB8YwU8P36M",
  "key30": "3NyVHKdBbKiSzNFbJnsXRXKLxCKEU8ZVZVzQwfkeyYrzbXbYBFz739Gx7qTVd12Hiv2KjBgfVbrUnxLSf258uR7c",
  "key31": "65jQ6r42x9Uu3oiDz5uD32j3WK2j1BaXgr73DANCJzy8FRQb9brR1V69Ekgk7rvuRhuvxeqyUnXDkC1wwNP4wTcQ",
  "key32": "spC1FDaAiCxiuuZoZctLARTd64nvyLGo8rk4SUjsWLUynmN8r5B7Yhr1kd1ebKBwUnWMT8LFrSG5Kqa2o1neDDR",
  "key33": "4Q8iwTvxKR87nW41UCBz651sAevJinXG9Y9DGdqVSzGcyFf2E94e2yRMi9F2LN5s28ZR5uVnr2xJnmUbS4zdmKpn",
  "key34": "3rwcRfb8M2zRd3Re3MntEySBmKUzHCSSB4T49nc8bAfs6kAExhw6xqn68dgGU5AgrzUPQd5cKLbPkCDPTqJaxXsb",
  "key35": "4cRXagk3ZBy9Gdb8JcyyxEdKoSms65JakAPndPNmWWqwkKgUza1xtJa9ocUntQ1fkTYM85xHmtf8KkwbzmGu46nC",
  "key36": "3w1Q82sKxLUMSxEg8WyQ3eQCxqHUL1j5gbfCM8JCK1WQ7Bs5VfYF1DdSjkRjcfQ2VyJ4qk1dZVMKGUeUCkrHBjPT",
  "key37": "5nPhvaxbktJ1akzcoKjxumuaLmCcP6ts6anChE6QLxH8EqhwprzYTg1xA1d2nUqejE9mgnQmLNds8okyttpbv8MS",
  "key38": "ycyJuF2KQmgABHpn14RMP2ukv4CRrLZbz85hjBBJCm2VKjTrtf1AVujDUHxhy3ZP6jzb7dMDuDV3cAJKMvgiVGk",
  "key39": "5nRu9vcPD7RQSjxDcG8854rv7mbXSgYa1kL7MfTHZQkQxwH3zHtTMiV2w4XsiDEATVFss2LbcKpWZeQMbUdCYZnr",
  "key40": "8EBCRtsXFRKQx5BGUHtM1uE7HwvrKtCQb5tdPjJCAESzzPQdpKKxiHSeeZU8B7PLLQc6NwzqfEqS3sCRCiMCe9z",
  "key41": "QRNHXwVvUXtJF2RAEQ3XFLvq5hAkvebVy2Z6p3gBYDMXvtRdpLLU74qno3VemQHc2ZAPusUWRygzNmgeKdfcH4s",
  "key42": "5WXYe4YcjrHt4u6wvPxQQAH1sLCsvBrFYKBANCUkKaMudg5ALuHmfqiSzFVbjKXtJ23jow8oARz9APyTK1NY3mZh",
  "key43": "JRMf6J2GYnF5UBQvWTbFevyV8dRytzMH5crb6HF19tomkUBUoyAjEVc2aHmPSVjbKibKjJsbprXckLonSb5SE4q",
  "key44": "5CEkZVcRZVPNUQ82XWJxmPpCBsA76dEMYz2zwXbPm9ZKEMvgW2Mip6EPFLreB8hQBsVsW67FVBmjtte9w3WZYeKv"
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

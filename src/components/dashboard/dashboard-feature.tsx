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
    "318FBaZD2ZUaPzRyxt9uBknNSkW85Bk22uo9yQhHdy4EFMKdTiXwrDQk3Lb9D8tY9zxvQR519Xp46eN4E3fmU7LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dqy8mZLzu8D8VrCETjFzTQwFGThcj41J9EpDpTgeEt9PxcUjTrjLbHXLHmKgrj3ebq6ci8eEwpZ7cSBWjxZ1NY4",
  "key1": "BexkTSPg7HcaiukMfwnRSt7Qt5XMSSGUvGAfbVwjZiAyAn3qmsdEyYzcHukLnaubBoaZTPg65HiCLRvpBReQzQJ",
  "key2": "qv2LsCvfpM3pHXH5QnXnJME3DZBW2VS5ELF4pWBbVQPCUZ1up3Xwy8FAM5AEtetachmPJsChYRj7yFPXCBaY7iH",
  "key3": "4K4Nj8bpFncriCneoY1toYeAeFRBN6M7y4pBJvvydr1CK6xdauGYp1rz17CuCEpq8HT5ytR6z4WZwiFSzyqBTCA4",
  "key4": "5iYuhfLDMSzVAJHTKfnLXFUFVSFcroBZsjJfLBpbe4mopjLMoE6RtbMKQ4GnTsqCdwUSsfA1cJkcC4MPGn98zzy9",
  "key5": "5tAQsyssvRgrhzSw1qmbGfGR3mMz93DXsSjpuUQX4pnAujx5uEQ89cQRAkDv9xiZEZDtMhW9rZw24WqcVRKcLq2E",
  "key6": "2bCRD2b6at1yaw34G9SEfzzwhqYKgHdR75vQq6LMijWEDaB1ANLXiKUni38xMBCqV3XAh5CyYqMreWU1bRSa3DUy",
  "key7": "3bKo3HgvnupREVrPLb6F5S5NrYF8sJctG9ErMjULXJivnq3xqDVxaG1DkiLYxxmMUb1UHwU3fQy2VKbUeJNvjmjq",
  "key8": "5Sfjg3NyNkkrz5r233eoxXzU7GCdp1mXiVtydXEmS74ugxhnxv8ymva35WygdfPtAnLnZatqDjrBQJENQ96mX1sw",
  "key9": "sXMUcjyZSYQetPy6RB7tiJMpLNcquE2gbW3VoApzaMb2v6dZ34hqc1bPfQNgKfYFEPLEaz668PBN8Szi4XPf2Yc",
  "key10": "5QK7g78a4rx382bQYnyqDwRuRyLoe3YHaC4zBxpYW1R2m6aXqNZq5761YyjY6twu3KXefCxF8igRdonuC2ugP55m",
  "key11": "2EgQhhQjr6gFtcUBSVYb3HiAJaXLTaDdXKXwtkKFHaHfShcZorzYjDs84MVQChZUykMS6K4yFEk8tHg727QQ595f",
  "key12": "6PoNzCHrASkkLXtUho5MJKTQfj1iCturfSSK9PE9tX9psdAyvuYhg5knbEzhfci2GMhoTipEMvypUcrMNNhVoNK",
  "key13": "hz6wRcqKTTdkGq3Q8NcdJdmR4re5HdUMX95gaT3YTk8rLWQCXwqXHcCSRjV7V1QbbVMcLDCpW1tArJ2fJVA5nwe",
  "key14": "nkwbgzX6xwPYSSgcQv1Lb5b995pdJa4g63gHRgCA5z435RoKADLUzELZu3MHMfDuCiqzcWy452TYNMeZ8MMGxSs",
  "key15": "39KRhoJx6HhLBDUDRmSzPkGFaEBCPUDvA6mA1WuHNXy2Q2zqeXiqELVbWdWy2LHCXY2SSueXycLc7JKHfA1LpHpm",
  "key16": "2L9m7RUxCQDs2KUkcoe4RhFVmbQA7p6u88ZoF3f4CRGRir68uzup7fpx83MoS48B3z7xhMjC5tEoxspLpUVEnfAo",
  "key17": "2fkRgEZUbUTMmT4o2PSjFQjWsuu48iKQpmF1mH1Pd57Ed3rnxgF6TE5wYvFyTQxfVVD4e23VyG9gMn4qiDT1PPkL",
  "key18": "557vgYZu8eqBjhqT6Xj2KbXNm4D2GXEBMszG2FMZnR9f6bVrh2ESwNE4pFC85k6wSrqrnTtdRnQEe9DK2XNqM2nB",
  "key19": "4zQ72u3Z8rtwHm7Vt96uwhKK6V1rG63s2YChHonQhbYQFTGdpraPGnkfmbQen3z5tgkJUyYP9bA2SBGRKnc5Bkct",
  "key20": "5htnKnP2BDFgcBTaZyqCBdT7ao7fH9yLzWU85cNcdy3W7kw6PuiQSf8AEZ3mgdXcY7e68Ea4eZzih2UxmCG6AL2U",
  "key21": "3DR8aA8qmhuC8kqsLQfaJPLFFVA8RyHBkAtixeb2oNd7sn8RrD8BQzXsTKcuPoLEyupHsQSg9QQeeUCDBo8YvvrQ",
  "key22": "x25TLqvjcuK81YLP5APyhLxJvz8MHCDcN1AnCRPUtFMpdTefWCibB5wrWUwWmc6WQYRzCXjkvN2RKSizLqE55js",
  "key23": "58KuEUSM6pGVEsZFdTqd21ZDfXbNnwL7HN3ob12mSXMyQqHT3n8bjn61f94VmbB3K7F8hfa9qJSfXhJ9deeyjAuA",
  "key24": "5G23czKedqnLo94rBiHaC8NwSaJdRpykbJn2pa1eHJsJfrcXf3pYeXyiZv5qg1pNGVUkqCxVB1yWXPSQp797qBkF",
  "key25": "4TAZcifD3izCgXA9YBcriPrMF2F5LLrvLkPDk8pajKrBe636je5Gj3X8CukgsU3SehjcM1p7xyMsWbrsmdqxkwEq",
  "key26": "5yheGa6aFPeNu3FS9yjPcSJxpsB4YQTqfRumiz9TVUyc51krvzXBnxSkcfNMoVx51LDvFCJTdk8MJ6SpT9EHuf1n",
  "key27": "5rNB4gMsPC1KsevHiF7MpsjPfb92E3a569QUQZ6Q9V2enfmtv7F5oJvaBeEEzegHCV5HmPek6WLqASxA9SpxUfJF",
  "key28": "Tr9gfQxTXrW7MfuwmLuiGD58ECaTBEDw3YzKMyFG624EbeGM6BJ8mwhwW99D5Dd3nURFoVNQbnKJbHJjhToNdmP",
  "key29": "2KPqqBsgmiZR36quJ7ubVVsymQPY44f6yiwJSYC6R5NrEmedQmbN6dR6i22N899Qcts8fUvZPRWziyGuh4NNsGKT",
  "key30": "3HjJ5ZTbKwBKrJBPjLojQXmP4aMb8kyyWDPm5q6Yi4xQ4NshCmeFd4pMsqPcPMg4eVMQ6gzjwhjpvafFtY6vADXh",
  "key31": "5uyytzQ3iX8a8XPPkRCAeUzBvdYZoAdS2RMusMrzbqpf7GYvbTeyBbyWYJGpnAYAa2jpjE5rYjtB44qTqACJHpo5",
  "key32": "48HQ4VFVstgRckBa8oZx57zbqfa36s4rAVeucFeEtD5DGL6Yp1zdbwoA3nXF7Y9g9awK7m7jHuQQ96oCXVWCrKyd",
  "key33": "4SzPZKgCUGNCrmV9V5BUjdVd52s2RHJUu9Yki6KWNH1iKmSxNAiJmUyici4KCgU5cQEjqw3KrxvzBe3hCNRj4hfw",
  "key34": "3XgAG4M1rHQYuZkcwpXYxjVWeWjcnuWFsH8oyKibYif9MiqSA5dy1ndMgrmvHQqe9woF1tQhmWydZF5RNJd1UZ8y",
  "key35": "5rsyomrfhdNbeCQwHPPxADWMCsaEPJ4ugi5Sbjj76z41pfK45YS2ECDP24uFLmzXH846TD79No9PN7JnGfPcyhov",
  "key36": "5cQN8wmciCVUj2K3iCtRyW92mJ4Xhe39pcnBZz2dQvRQsd32rmL1HZZKR9mzcc6r2GfSCCJEdFucQGfi55pg7LtU",
  "key37": "3vZWbXHkePKPYpBz6QKBW9HVbHLBnLFR82KiV9vB2KA5gt9SuXspkHmxTvYC6FPr23rbxQyWvzbJzMyji7MZ3Lrv",
  "key38": "gQCV9DanBSbaqJPQpbtdEEPfJwpDPaJfjZM2x7XgRJMX7tjRsgN5k4T3nkurib4eLx7o2gs2UGSh69VbkfTw3hy",
  "key39": "4CubtbJYr1nHP7BUNAoDLA4nn44QW52oxJXCgbgAuuFaKiQDoFoAEGe1SbsPbzLW2gXjhmDghqwdRLEAn6gMLfVr",
  "key40": "2sHNMybtaxqZnSBSP7vhA6ecKPohHyXMzmrh9yCBaPGtna5wbpPkhrgMnHH41JrVygreLFPPJvCdJZZABbZkCyzY",
  "key41": "5bJsoFSdA52BNUU1yVAXxgHeVW6medDxYHSXgCa3mxAotnvpYdkUgWSp5vEMqSxmjYKkBEt5JjDaZ8LKNChMtEDT",
  "key42": "3FgU97dMeNpVnxM3hNq6T9yfRXZnPSFMW2GLH1zVMxNAbPM941d1Zw8zrMTqT9PKoq1oCzTF9S7af9rwDYkv6y5f",
  "key43": "48GeVuTZWTgjy7yrit9BQoxspd6byZuLHADYJ5K4SXZ7aeA7bj9NhunHSjEBo2k8KE8Fg5QJUyGgSmCWbH57uzqM",
  "key44": "3rrqH18FFDfZecLTpe4KpGb8K2NtzLKoahcqnAwryxKpAYhBtDqGJzFVXa1JmqML3vpKnQuXNQtZaJeHeGSt3AUp",
  "key45": "5YZkumVhBgCCZ8gqf4qUvsDfng1pdz3ZTgjAg6iKfJsZigkvaKKRtQbo8ZYTDMDdG5eikiCfMK3yZXz1Am3kVaU6",
  "key46": "5iBv8Wwhvrox8YDw3VVsj8s3Xme6nkYEGxXWAjFRqjsRNy2eLXB4pQQqt1SU9Dy2jUHBveJ6DUXx7qPNzVjxuZbF"
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

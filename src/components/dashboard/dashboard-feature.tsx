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
    "5mtvMeexGBavDKeq6xCDT4JE6LG3hNWVghCMRjJETL8KKt9U79mi1c5piTwptUDUW9W5WmYLWrsDXqYGDhq4MuAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJqZTq649n5ZeHzFQ9sQfffP58STzoHETiUfuCY35585LaVuE9LKsxuhTLvFPnpNGwp2U4Ccvx9fgfPgWr2GMrf",
  "key1": "2VujEAzE2A4JpqQvCLZx2h3K6mLpGoq4sfDchPFNZfjzxsafS5MMaRDiya1GGmBpuQkcsQT6cn5rqEteNSiYzsPR",
  "key2": "e5QJfgKFHfwwsv2aWHrADvXCSvSJtZa5HqdBjXSFZNceNnhB3ne911zEsegvabaGC6NqUkG7g6TtLx3Nto8nKEj",
  "key3": "2mba3NN2Nnosnnwv8z2V9TRWMBypvPEgHhoRoev2sMATxEKpmiidXYXZSJSEinqfKnxyJ1NsezqWByDhzpMsDGoA",
  "key4": "3wHJba6YJBKyBk4m1AsrXE8ACiXaZz61ec6wdjTCKMhWBFuPQyGduUu1j6gsz4CEn85Kfsjv4okoVN79SevSRNKb",
  "key5": "2iULUQQU9iQ3nZEf3pKr82s4ZJBHDg5gHFxEDhzpDamVoy8yfuXJgu88emqJayxBBkRpMzGG8wZtwpADUSVKArV9",
  "key6": "2gMUe94ZdsN4zb8n7no8w7M5XVKyoEbUPtdHoBQW3NLB9DvpzsrCmewLgGfZWtiMQ6N4tmGpvs2KCGQUmfjHgcSo",
  "key7": "38F1Bku4v1J3E29mf74xgn86p8xDnCJoZc8pqSB4Fnfb9C5KQwT8psUV5R2wK1hYJ55Pt9or94oN6wZZRajSWj3d",
  "key8": "5tzNbdL6Xxt1UX8PQFYu6UW7EeyDvzGVy9S2h2G8n1qttokxpbGpyTWGxESTgTCw3xVn1jn9wdMG2DwwM7piJaJE",
  "key9": "5V7wjRy3WWM3Bt1txncLoQehWqwYGMwUkWxFBdiyEATcwzbY6cys4FrCgNQgKX64rMnPgv23oE8LTdYJhP4HxGzH",
  "key10": "51bZU98ZvFAU66JqB2YYPUCWJJpJfBWvXKSYN5BPe3Y4hYSKbrY9HhWJwWBvngm499UHch6Y4HBTbVRdEGZfce4K",
  "key11": "4web6gtpn1DZkqjLsUUMyYKFJ4VZ4WWyDoCX6YLAkp6GcTzSscGQeVm2wd8U7vKLwn6mEXPofkDj8g8vXvKGy7zG",
  "key12": "65NDqs23nEoiS79gQmTiR4eA6gF7P2brerAUKFffieoR93Ln1mFV7YpNgYo5zUYj5K2PuxPHiS4UHQKqn5a7S1jM",
  "key13": "54DD2TU9jtpm9y9LfJ75hPaPHg4YSgLCWMB5jKE8rmswxFNHTkSndteXRVxxw8vNQZ6E15auCrX4oX3A9sfW2kPq",
  "key14": "4zfTJHZVpa3WSHmtxvZUU8TbrwzuyhYjrhXYaBcA3uqkH4EfnuUEZbkfzKFP21UVDob9T7xMNbNe1maqLSbL6BiX",
  "key15": "3CCEoqEpz2zhVSKwcMz26p4iqZvd5SY7fZDSYz64foXapVMP8D8ZmrxtJ9TSUi1tps8EMRa3W7pTNBBjoA4mpMWu",
  "key16": "Fnqtj9NgoNpZdQQ3osE2Bnjr83Ak7CgN3SQBpAwc35Cr32n1cijTZedvnhWcQm2XCSiPSmy5PyhWcMT5rYFvM6T",
  "key17": "4rzuVLseqLcWcVgFbB2ZzRozqunj65Zd4dZj9xNyXAp7uy1Ddzu9bZts3yeieTwrzcF8LeoQ4SYDaCiw7TczTKP5",
  "key18": "5upco22AksSeF9LvcVpJDXhzdxyfJdZvm6WYgkTihm4jzDjLUYU7DNsLQB62pJjjWxqGEoiEMZD92hgBLp28Z26o",
  "key19": "51dm46PwRjDucxaeaYptKaPJBYgCmVpdYBaGA3dqHweaeAStHg4Jqu8vaWjTEPU5TyyoGb1QUvUThFhh735hukdJ",
  "key20": "LczyzTnXF6MC7iScg5N8tGmHLnXAnBKypt2QF2cBFy1x7WXeEU7PADFKZp4C69SSYf3rVbVVEQuuJ2Gw8NaESa7",
  "key21": "2eoxu5KLzXLGwiMAFKGZYtXmpctAXMCkRNrM137uUiGrWuZXN3VufE9bCGWdCwAeErg61fbsFgXntT86xT7sTSMS",
  "key22": "2VuFanS7rETiL89bQJ9UmCjttvbq5s5mqHJid6jv9vcSr3AuZsRP7XyRCMJPdgFhccGZhRVaCQozyF8DRf5B1Eq8",
  "key23": "2GurACEUJ6YNbnVA1NBHh5Z7h5D7jHqKL5oo6uaYNBbxiffCdRBC7yEKeFVK75xtB9MpsUhv825wGc1R9xUCdPCf",
  "key24": "4EZeVr6YEEVgxYbVacocgC8JjHE39AKHr3JPmXRvMW8vquUGQV2XXEtrbQNGcU3LXZ1i3TcVYcBPJTbW2WnEnhXE",
  "key25": "2nR7sqrWXS4XzXWYAnVe8v9NLegtwaptvPpV2akyoYKGBaBHLKorWHwSn1mtsbuZhBPcmtiqiRts2Q2km36hEjBM",
  "key26": "2iWCYVVse2uDz2TCEXAS92DC7LRZKDoiyAg6ZfVMF1zGK5Sr7be8KoVX9w19SFHfW73vAzjtj8oxPhYgPtNMZMFu",
  "key27": "5NPe27wUsPdy82j2BnTT9mUWjNq8oaAmKjwuudh7zsJKo1QBygWycYAvmqeG65X1Zd785jG3Yt5scGbNAME6TLq6",
  "key28": "5VAP1VKute5xQkKvfXRNMaq9iw8pnkjFWPPzhmJQn9Bd1MgzU9aJtVY4XR8xJoMb8UidvNvHXhdHNNwrcMJYP12Y",
  "key29": "21fGwRxXxnwZDnggESgPYT1CaygJZYoiVTDSoc93fXhqeKxyg4di8n1XqMekFPKXCirdQNRq4WBLjNeZGeX8B8uh",
  "key30": "xa4hVTCVk8NZ26T4cFNggRDTbppqgPnW6hbs9wXrvKnsbqArzSiXhktq6xsebRSxB5JZR5FrEfAVD5cN47WbLqT",
  "key31": "63bJWhWyF7paBJ4vruXvVhTQbsFeWaXJSby6nDxaY4PoTXMUseDauHfsjHqm6KPJeh6pd4MiHCUFXWmwHbZidkFe",
  "key32": "2YG4ciDLDiVp3cUDckUuqivePvoJLPKTCpnsvRUgDNhodbEkRZwo6auG54e54ZQ4DEL5TwfGAB19bX8FKtB1Jk8Y",
  "key33": "2QpaGhq443DiwBvrNoMgASRUDS9cit6gUAStV68Jsuvx1hLSWo78Hwr47rfVTAyUbEqnquPX9s4krDALabfMjCvH",
  "key34": "3b1dPcLgKtztJwEBhaJu7BAyjZkM9RSbGmSse9jDfCzKaxMJaKtCwLy5vFEBirkqorHtfh1zBEnxvcnJpwAmdKMv",
  "key35": "5YxnjBP1wKDJrsJ2CEDWjUEU4yrXRwProwCuK4HB5kGB57HaotMjU978q5u5ii5X3VNwF22zYETJW2WPVQQQVfPS",
  "key36": "gTQDt1qhSMtdCoy4d9LgdKXjUjbNm42vmS2guMD9kxtS8u9CY1veVb9v8eUhDkdVG2RBfFxrWqme5BCbf6nfkaF",
  "key37": "5TMXVxApdHozib4tzveuHB29XyWqzs4WtCTdwaQVXggdNAnADQaoY9Uy4rongvXnDDh2Bf7tsP8bdLVxX9UamDBZ",
  "key38": "5mCPCg3f4iF1W2CVsbmWoRTSqiYxZ9vRaiKPn9GPioGrhCxsYp3NyprGpweqcnsPAMoyQ6gD6pzCu9v5oyyX7f8z",
  "key39": "5j5GorPKdcpyhDDwRew7646ZpsBuNPSVqt4NFfws152dd7ki4KFeM4pytvf6KfsvCAKeApEQzdSMEwJbf4phSi52",
  "key40": "5WpbJb18ZguQJgSPwHEkma4LhNJwpzrxC5afEMRRHnbKYq84cpAwwafVFcD5W4bWZGbhkz26vg9Pg7JTEK9LVXPT",
  "key41": "4Dwr1QxWzEo84gtHGhk8DBd2s2S4x4BemVjhN2ADdtJ9Ms5gS8DGSjb1EBWdnd9pGxFFQRv7JAdmn1SRutvrmaPb",
  "key42": "25YBHa91WpQURRZ14KEJJGpesCNYChzjtcVM3LKf9dyAap4BugW7D2vQezTDCBhG56K3QUNg1sxHrakJFJtV9xvX",
  "key43": "47r1UBDAEWbtcqCF1fH4tSfzkVqfnetK714d17EUtVQ7KiKEw9Gw2ap9jvzSdBcdQBLgDc2Hi5Sjqd1nqd9Tv7Ks",
  "key44": "4UiKuqYCH7Xs1LNNzsDqMBPp5Rz8pzyStk7jniyYD5mFPb7GWt6bKxg2udBN9TXf19V8WZtx3Wyjg8sgejLFqpX6",
  "key45": "4rk8khRLmcEZzU24DJrbCKcC4iAkjr1JbnY17hBU4Twr5a1ihKdyqPv11Gayh5Z8WGezjPUcNnWfpwCRrnAT7jh3",
  "key46": "5XM7vm2TmLz9B8YXPA57mXsmVkwnsp2PzM3NhcpgZ23Av1o3sWR4UHWkJx1sQTsEfthuq7CzmSrDLAjqi6UJe8Q1"
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

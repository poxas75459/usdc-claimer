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
    "5RQCnv85EKinspbt1wSq6YfKCp3VmtnEpG2do2yoAikCEEVwYh3BMj9qrVfjT12ZKTXbmdo5ug1eH81UZUSCuKYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsKi6Mbe9uHU9uSgRuTxtr9ZhfnCBXyf2z1FP3AgancxKHMtNiXy3ot7XQmH2M7ECVUdnhHuzZgAjjgfpd31y4D",
  "key1": "45TBEv4TvgzXFNdJh6oSxJAE134CwBZpbcANwsboDptkBWVDABk6MudsXi9bPPq8kkiQDRQChcVKmaZosrhpqJV",
  "key2": "4KEPqTZbqoRkaJPgXXpxnCvMWKxoCvBcn9HYpE5F8e5hhNXshvdUaoYRp5c3Ri6z7wM7RmViwT75wnnMrynkeuNq",
  "key3": "gTMhzDnXyNs16CjfUXm35PGyT3yCnsQ4SvRpQ21vBX5aroM1ABXiSAeCHKfU6S6UXkQmNmgDL6fmBbm2dmKFeH9",
  "key4": "4qgRT3edSezpKKfJa9XGp83mUnLNJ9keHx3qcTYviuevTjeferKVUBNJ6ZiQC65VNzXzfBbUrELZy2z9G9vkwysV",
  "key5": "3ys2SUdNQ1LRAtBuHdWQk5FEon55EiZsSCnTncS85Gmjgif3iW1SbT8aVLA2ACY3N2PFHMoNwjowaFUz799WbmeW",
  "key6": "2S1jpsc2E2PzbxLL2Ykbyzjjw5c2NRccBmGmQkuVpyyJEM7B7zAdW3sAdtMESoNZcRnFf9UDnsuGQQnteJ8Ubpec",
  "key7": "3rQdJ6ZEusZpSwVKkeDUaipF7LyYnHBh4Lnajnwd7MkDmJQqr3kFWGJbvgKCwvNAxo7K2tmkiKjXpCk7qQfgK7pP",
  "key8": "4XTJuhTd8o1oxtjNuL6thzPe9cm7KqwrNcFVkwJvXgKQQguzbJhVewoecusXcNKjAkcDcrWVVx2PicA6pTMT2KFn",
  "key9": "65kqZZtS2N55DxkcfdnX3UjHXmGXVPsTXo4zucEhEpEHkpiyrUruZ7RD6XbwXJ6kW2Jieubg4tp6GkaSDyLXGske",
  "key10": "BTXFdQA8K3EzSFKCT7JpMjPRRCc2fkRUcaHc1RUqhRfQfX599oYggf4HKqKjTyRJXUY6kq252SdbPTwgs8ssnus",
  "key11": "3oqaP6nBBD35P9vcJnRopQWSgTvYjPW2CwqA6DXy2QuCj72EiFf7RdhALM1vX6gxXWKD7ZfmsqLZEdxPBRWmcqYP",
  "key12": "4NVhXgu6NKRBTLTqhzZVjodEmNuXx7c1cK3zBLs2HCafgVSutSUAJUqrhhcSbNUziytrxV8iL8mFnsb2ebxzzbx",
  "key13": "4JQ5rqYCsKtpprQ4JdRisQVnJ69U7NKkSSnaSahHFt5TF1LYWA4XNhNWP6o8xfM9uuFUc5ZmfdcYMHCPwbYN93PX",
  "key14": "aVLxBuv1zv8PwtPBSNc1KJybCB2pc585XzFs73k7XhpW92tA3e9K7S8RicbnvoiG21v4w8N5qua1Pm9pPJ54JmH",
  "key15": "2tVMUjL8zz5k3tfPLmk1kU3oryPF5e545QRmxjPhwkUqiZuQQSi11HEjPTixRcdTXqogo7kg7QQEN4TxhxhuCyqo",
  "key16": "3yR9Vom3YZ3ERhpMkzz5Lm52NiYgATpFwYzpBHbUpu7SfunKFiaYamjQcYZiXgBnqDnPWJDqNDvbvjSPKAJUqoYL",
  "key17": "2oGrdzakKdxi5uzs2vran3AMR6z8wDUaoqX1tC7chv2obDxZT8YDrtbsVrzm1zDKfzw79ZZjtUA48vmcrfN7gG5S",
  "key18": "2aF2TENhRCdaH51if1D2KL168jaWZWjXcofRLCuyovW2qkNRVDiCbhXdS29PY1ZFcHWuhTQ9oiZLn2x9mDscPQAL",
  "key19": "3U63BDssWAUU4ZXJw7JcbzDApXsvDPGqMJWSHUCD4JwkwDgpMHXETjh9vTSWmuXTrcjDHiELXoUHFXFxLM5BgQQf",
  "key20": "5GQbmpWppuoqCTH1xZsUKi5qJSqLjv36gutgdwayDPZKSiVkHXbgMyg9U3MwjLjToGrwTgK7vpGbejADBroXwuZ2",
  "key21": "4Kn9j9UE2bshfDVtr1RuHPV6S8xmRRXVSELsgRts2sTCuNEDNx1afUAxC1sV5xtcjAVdeKfEgEyNTSXV7ZzDEJWo",
  "key22": "uvKmNFvVKdfp2L2Fq9fDPXMXAQDdmsaB6rFK6Qx4Pz2Kp3sXKtLmnvHQmoK6e4mi1NPEBiNiHq6NAhsxoY81417",
  "key23": "539mABX5g5BjdSKeBjrHyCbTdA5Z5vfWcnboR54yWcEWFv9EiERZbqadiAqeEhEzRKHrBDMj9wYe65V1RoWtEA3p",
  "key24": "2jo5CApgPis27vJ1vxGQ8ZCckzWQtib8NncsrLxWgqw1i5tXtsNsX69BgFVU1aLYiWnSBYCQYdH9nSdHW1oM5Vnx",
  "key25": "3SPHSad6yrX8ZvKiCjon5gwezS7qBcwhabLHPecooKSLZRyRJ6GAifcZMy7YkuPdW3Phv46X59hpWgtNyVHXxLhM",
  "key26": "3dwasq2RjXs6UsaKouhkDy3LUyLn62aWPxECA5SgrJyKhmAFEvvdRWB44ijFfKdQP6B1Nr5rTZf2ur9wmFAWcDR2",
  "key27": "2RWVMhgopYaE8rbEsSjddzNg4XJBowbJVBXDTVLxTNsdP6ki6Mejt9Yk25cwZcr3rPUhJeCKkZPtjBgZTRP3vCdU",
  "key28": "5Uy2eDf59PFYfyyRWdFtchhdhJ8D4fhqNy49413wEz1C8vm8jgcZ1hx4MA3qGGkbwYxjZnLSGkKWzp4DxftDCkPh",
  "key29": "9rr564FLxjK7iejYx9WkZQTh6oUWMtVuXvdxZx1bTJxK5f3neUyYjSb1tRZGVBFAsEHuRmnYV4By3nFSD5Vqvbi",
  "key30": "3b3yQ3kAg1ZtdDhJa5ieT8vsCNs9rrjVUwZWzhgKVXQ9pXqPNkEMeX5DApFuuLTCVJW98WYwyMXzhCfLxciVkjC4",
  "key31": "GBZ3RuP9xQ6yD2RxLsQyj5JdBxMcULZRLdVQU8YqQZuFRNt5498UFrWJCzRewfsbRckvpkaxyd4aMcJZQYDq8gL",
  "key32": "4mEeN6T87da4AxXZB9kwfRxkAoxJjEJG97oKQrD4XZucF6Sd2eQKc74d2hkPHiXAwX2tFzVuJ1wzN8i51jxBCWKs",
  "key33": "2NN9dDTH3cekFdMYvbCYSdRgTCj72ugvE5c31ChiYpWSLwDw3ssUMU2RT7r8R2MFJHYz4uDzFu8HSo4jUtRCUJnt",
  "key34": "3qQsRtCQbofaEd1tQrmvp446y7NpAjYkwwZZDevhHcTSVaYVpfttEWFv3hyFQGh57adY9FQTgknX7G2sJtAxee5s",
  "key35": "Z7hwKHGoBWgBixr6Vvhept7Vt2sbJFYuCgSTQVvko4k9mLDqkZma5nFt2MxB8q3dsFWfHVxZF4S8LraFqAmxid6",
  "key36": "26S81iyPkQhUYsfs9kmZaEAwhemPDJ6y41vdwAoFndBZ2VodkGndMbUPucnPYUTetty2kAFax1LvJT1J2o5RoYgY",
  "key37": "22t6csT69FDrSe8J72ZP3c3oDffz9e18WLwX2huEdBF4kKq8ktSHBcdPHZC5UsYVwbxduT546NwXtvLbww8aTSAb",
  "key38": "4S2Rzu43cSG6JE1ptETEovkJuLZ7NhzAnRxPikrJLSvAyprjMke7o2FGwz2Ss71nfUCe9iZF1qUzfLRQfJNzXQmU",
  "key39": "vz7VHj4hghpcgB8Cv5KXnexqm7VU1ExJs5AJ7DrcNLi5iaduuqwddUDiwv5VBYC7H9JeW1c4217P7jTTCg5raz4",
  "key40": "3xAAwgLbvkQ9opZ7NqHXWihUr6Mqrvon2tEb8wujFNfwAbvpqEaePiAXUiV6Wsyza5UjE46mvsaxFPGTrgbNmdhU",
  "key41": "47aNoKiCqrSV5m2LMwibUStV4kQjVEBQk8kWjLM4PXTuYUuTzPPb3za6hfY7GtPu1fmuooVPPrd2RxjVK6X2xu6h",
  "key42": "uodw8spxmWiiUbzRxR2PDY5G1PHQjFnA58wTHWkzYEH29ZMY456UBJAo7rUo4gwdA8zYGqWfX7qr2pwD4517o47",
  "key43": "3CDB4NxHbQPtnawTUNX35WpPf88LJtFsDW6tzWV4oE2o1Zp34KTkoQQuHwxvvuunyQHxNYh7bqMUCrPLEYfADqhv",
  "key44": "4NJ5UGeyna2jdAYLButgzpGYTMtq32AXrPAf8vkpPZk3P5iUv4Ey522C6CCSmAEWJ4DjRixdQUnoLTkM15RGJV9p",
  "key45": "46QMC6wr1jUGcdcgrCVRqzgfHX9ERFb8DiPiFLy54nakXgsr1sJJxboPRsZ3NKNPtXBVU2GgTDMemzp8LfttjSoJ"
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

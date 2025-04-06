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
    "5xqFYbfJZKqtGMQkNqedkY6gqnAjKmLAynQLiSb2kTALtjmnX5kwTBwjVJR4LvJUmrdae3x94rfJwKMDmLREX6VR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5my3JtRWvmDvhRwzginHAH72mMvPyKwTHeGkyFo373mqBFbZFWQVL8b3PFhTz7xo9izVmCvhS4zQcoDffGBU2PSF",
  "key1": "4JrrsnPFaQyyiWYW55oui83wy5C2Wv8T1TcmjidrpQW4tSvwxUXfQ9fryc8Vf6Vm3DnBe6xmiKebj4oKc2syviB9",
  "key2": "4VVNcgecE35UyR51Qzjt9nj2kEQFdbW1ccKHPsn5kSnbpMRzLrFxieDEKvZCLmk7Q9LRAwZbGnsrVEGGw2SKXdL6",
  "key3": "5wSm3a13kWM6gqWX8KGeqAQFDiuQv3KCvkoHMxNBjnFYjzmYsvrvDhCXZEu4TJQ9jQMqtGqwVXAsL1vsbXbBVvCG",
  "key4": "4wmtKXgx1kCH5tBAwXZMFvKsmFui43qrUr4B5EHvA3gJ4mAzx6pcjmScYoM8FHcrfx4hpfXGv2zwkb93jXpwwFoK",
  "key5": "5n44xWkxGpM5VM5zZUdH59Cn9xzm47CpGNrJbHaqVmRDLs2dgrNLnvsDuXoAQYVpDVxQUXMpJYvhWnUCQHCgauA4",
  "key6": "41CzZKJs7LPPEAAGmEn6LS27Gy2UEWwTo2RoQoCokYBP4M3rQZVjm2hmqw9dWkWxuzMdMiUsD3tRCgpp1i3vphpq",
  "key7": "2qXZYLN4yTCSRBAPCSEeVuyrRG3d13ZqhtnmNEDeok11iVsHdqDFxtuuHQtsSpdsUcHehRDLgocfmtM693xdXJ9t",
  "key8": "3N96tnaf5jko8Y6KYhcYchC9xpdhMqURZb3yB8FzXhNgoM2kwoxKacxJzrBWTU71MJsujWdFxEWgAavFXU7bHRRe",
  "key9": "5G6iD8nmMok1XKj7843d3W9aT13yrHtxioACB6tyzipkk5LozemSXGzofSUCWNCTjEP7ALCFh325DjJYDnow7fRa",
  "key10": "3sXn3S4aqmJoNdvdn8BuEAHveYPrQPfQUxVC6efi677EaUAxXBzGoYTiLGhXvfqzz5ELDLjv6aZD4GnDvxqLwfD6",
  "key11": "5doGYKYTigYGNJDDWYY8nQBrwn9nMSgWbwfHDYKRDtjuN6WXNL6T3UwFGSfbrT8Q8DM1jzrU9TPKs51dBmCY9WDa",
  "key12": "jXufmEpbGftspb4uUjygaF6RdJMtpkkewWwbXbYPrfsd4RWXdphHz2VcCJtiiVXhhuj1pEnx5KdHteVCMr7eFW8",
  "key13": "3i8JAwLPwYhxKEAte5vBFri66aEXsvbs5knrZBhGmhiEcHc1vbTFyzdmrRaQdZ4Zwute3WBk9KEGTNe5yYStTPvh",
  "key14": "67Y4SJBtJio8aQnTcxzedipNvQXbpazKXHjM72mUoBexN5pASH7F3Wrnss4sMiSv2j1BQqzBncsffmJRE5sZTncz",
  "key15": "qxRKaz4GFpBHMgbHVUjBNZeeyZqzp7W2rfLbjGVR8GypTN9X9ZuPPzDri1yqyhQg2WSURq4YnDZANz3j7Er6YUU",
  "key16": "3hwDwjgpdXPniJyawfyavNTkq1cpMrinXSFXKyuNPkzh1tE1B2s4EqYSSyQu7yxiq1f7mVxsRjAH4Hsas66A9sQz",
  "key17": "nCxTTa82jYQJH67Wh3eTNC6tEjEbxDL6FNjsrk3uRi9pokqwDmdeYbPtKAdfkKxNLuv4vFxcgLpGP7x2ojFsRGM",
  "key18": "3YHskatGtG2ig6gRsMY18ypZVzTrZCS1g9g6veRMp7xi9YGbdmpMywdrLkp7Ext3UKH4ZZnpEsEzdHWcLGVLWW8k",
  "key19": "aPAYWBFgpXF4qseJMaovNHgPXMJJA5NsxYfykVqrT5djgzRC3Q9DeENayAMJWKAdNN3JWesVk7tMihUp6EzYCZN",
  "key20": "2n4JzPhv3hUnK136XeUBcX84La6MQMKnuZWwmaibhACpKeBzgBmQSKKqafJNG6jTmXRArLvYxBec1ddVjtzRe8cX",
  "key21": "54BUbC6Pa2wMzkqddtUui3QAhUrBNFb42PGZdPuUS1GWrrpnopfFwF4iKAYYUGEBQCB3ShHAmu6YqaN4UhNLxHCg",
  "key22": "3EXNUmfogC9aNZgAoEwaWuyZo3XEqkyyVEnqP3GXbu4f3YMUtw5E9zdrw83xSxNbEmELDy89Dv9b4w3FNZgtapMh",
  "key23": "3jcsa9ndSLPoq8PqBjmHh4mjMP2XuoYc2zNzfDR9NV3B4UbLWn2qEupHMZgLHmuuSNWxNaBNBrp6tNLWRTCwxdQz",
  "key24": "2ZUCYvtZXgAYf5c7JAMMFpcAA9QxtP1AdyjayoCaqxvFLkGjRa8SqJr6u32qKSEkm7a4LiJwk78YwgkXtZMynoSH",
  "key25": "4oDvChYYifPGLvFL986n6c34Xgy28sVyQ4rqbeXAywuzXBm3DkggLv6mx6ZFPvfx6ibvB43vgREc35Cog8gy9pZY",
  "key26": "2L4sQT1chPrP1f2dZAwnJAsTkt8oY9QjRYnkSp6HJwLoMzquj487rogkGmAqnBpzrWxjNSpveVJ24Fb1ZCgZ82BG",
  "key27": "22Efce1kJMUpNvBDmwqiDJwxxyXYvuheqEpTczGx8YTpxw6i25FmZJBtLgCrhESUyTViDLEvyYENoE1dBAXZPkhz",
  "key28": "4TKgPmHXTex5jyiC8LqL6xfnsHBgWaPSpWpPc6ivhosBqjk77uv9gNAGQCKG64rgnjEWJPjGg1QSHosEmLruEuoC",
  "key29": "4954Woag1vT2qGDqvkJduALfZYqrpSgvgmgm6LK4jtodv6JWQL9PwKDaECAyXnvN8tJ8SuE6r5AbNxVU7wnP8uS9",
  "key30": "4y3if8ZYnEHSq9W4bzNrn3qtydMBe5BmWKJ12uqJaWD82vorUp1g8hGdVo2vAmBnLGyaphCNQnbvbkPmoCR6C5dS",
  "key31": "4ztFQaUc6dND4w8fQdkHWbndQ8ZU1yECu52PpaRhfLBZ6qU5SCZDZ3R5Jpvnc3FqcZXD4KSVdmGnH6C5GSHdMSyy",
  "key32": "26bq6zw8q9SanRNYnnPrGhT8WEeJDxNf3YwewXSFCNySHpf3Z8Kang92xqzLNH4FJtaodur9c1D8Qw8MJrobo17d",
  "key33": "5r6GNWE5tvib11mVFPqmpHwP6o8RLEvryXsQqpZBE1iTa1wWXSqMNa1SqYh6LAUXpGzZXAfidhr89yRA5p3vMStV",
  "key34": "hNj1TCyd6kAWvb7GuDWd6ej33vvR6hXfv8S4PdxbjrpE6GiVBzgeNnx7jmY5FoJWen8jXz2NfQKQHfigC4qCemm",
  "key35": "3baKFL8vc5Lq2RufuTv4ZR5itrTSp3sUUySqsKHXJe2vojVxN2w4E63YBCAHGwvZ8rYohyF9Y9m2QxdzP4jcxwN3",
  "key36": "4XQ7eEXXJfHiJhMUmmtBJihQGCrz19WmvMgtRFGuACGDhfTncbCj9sR16ErYU8ASzuk9NDEsGDTH6EV9SPJDaGhy"
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

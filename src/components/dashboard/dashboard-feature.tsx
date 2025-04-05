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
    "XBo5hXhoBZfEFrJkepMNcsihq854xcfqASPf18uD7zbNVGFWFaZcwNGnto7xcznVDt2j7nwe4GcU8nhEtRkLN15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjCWJBh4vKhENuT7Dip4hMKgsPSbpPJTd9ZafAdc4bLEQmaCU1TJ1GA8SHjjYh4K3rJ5B8aqF5GEqDVygs1vKZX",
  "key1": "4K86MfAdcpcRMcD43UPjLnvM7dFgfD6QShZxr94CfsYJMatEauZiQdBhnra68Jw5EBqTKtRgfRKFuiJQp5iDyZxd",
  "key2": "612mQT6Kw11avmEm2XboUkz9mmdKtAAiFo1EbCZrxZ8k7JHH877ZzaUCVeG1icTMaY99By9qPwnJPU2HC81i46x5",
  "key3": "2EgXjQmSy6FRDbYvkA7n7ZVaLegEUV6VuEUsjZC8fvh8XjnfQeqAMvCABPZJTnJ4hiSfmzhEP16fzDckoAR5tcry",
  "key4": "5moqgDaK9JJ4MvLb9nmt8Fr8R969W4sHoQKf3QKPaaAAAHu4MWYeZ3K5s5vRZv43hLwu46etvWsgdLfyFj3JhVaN",
  "key5": "2WGHGwqSUmFfX1CgjJy2CGktgjhrXLVs9Ys5iR7Yd9EF3DYmEH7p1zxnuhKb5mCVvNuYqheWNZzRnRRSpfjjuK7y",
  "key6": "35jgRKE53umE3pSkWFaMYW2rK2M314k7JNQrb928xzMQrS1pchGRuPmQ1AWm3xshnWb37AhrAT8c3VLtxzbihFTR",
  "key7": "5EX543jF2a7djvJpHct2TFuHkmS6Pa2i1L7QbnBt9MLPoGRKMDEywJoq1SPv1j3ptWNTc3ZT2MtDJ2szoQMhQooU",
  "key8": "3fDQpgbKTEu7jy35Y6ekLqUM4aEgtXjFZYQakfamU5DQuCirCBz1EGPc5JMiLrxAUHS1mS5iZhLfq68ppgrKmK4x",
  "key9": "m4F2rMRR6NvNm9WYxmLKgPax5PfwGjE1XXWzAyGhNcfb7JybNr8jpjZHUSJdiSStE5rLahxxdTay9ktnLiDZVop",
  "key10": "5B2VYVyaJzDrL6dEyYHvhqUR59HPrscWkdagQynHLJYXXx3foUXzVyHrJDnv78VovZRrqdGZ6sodkk83ZFn6PTYa",
  "key11": "GxhDJETkKzZSERFZQSbnNSSw5AR2vK29K2F9QgJLVK77RNrmmNQ6WpnCS2n6Y882nJxt31kDe2L4CkWqxdiRbfv",
  "key12": "5d12M3hb4L3Zv2wyUK1hXHMdpthU8hR19hr9r4ehBqYxaCFqmgwrCmieYYb1FYq4bsAF1nrj2qZTgujbMQ7NH5g3",
  "key13": "2NeiUguesX7oMc2CEtZnQsAtTtn4gYk3JmZMUdtqF3nw3UZZLGz1g4LFsVy4PqRPCT7S3M16Qu9uHrgpbmpCX1zC",
  "key14": "2gNJiSV315SauszFp2oDKss5ZKtwZDhuzhvdYPBMXrXYQcuTiWhf3QifoeQ3q1oNnqMNrWHKGjJSbWmV3wkZfRqb",
  "key15": "2RKsZrLv7MHVrtDEum2yafqMQnjf61hck4PE6brEZsyAxGU1zHp9hYCcBPTcf1FVXffXb6Ec48dSbN62AQSfBfcR",
  "key16": "52Tr4JoA3cTYvwzheCfB4ck7QqwS3on5mSHgmhjXEmrYbmRDEjJMoZ4JnzcDS9VECMT1xEvQVqXRzyECjhcsTR1o",
  "key17": "2RTLfFygSjkpFweitLYNb9UbQUp1s1ynAXYMwECeLmC5CcEn3SM7RxvPnfcw5FaSYyT1UGy9QoyprzspLeveL2mz",
  "key18": "4rWiE9uFKTNpbYnmNVmxKLr2sDiFEAJHFknGUTZyYiak4WVpPiZDnQxMPKhGp7izPtqduCPSfrrhBVNRKextjHoy",
  "key19": "5KApSBnEkTFM9NBmp8i7KqJZVJ1pBx3jnYj8KRwfAYWJM5JiUAturFERjv25bEMr6zqHaMg1Ra3o9B8QydgW7dvf",
  "key20": "3LKp2hEMwQHyRBtUajMTqYQhMabaRQkFd6QfJWU9aJmEA2jpQ8PmoFmgTyNfAsSBsxoTn1j83ujTacnkku6YNQjY",
  "key21": "Sby3cZn3CSTiyB2qcSDHisbaDWSvSHtWUL6dYG8dQtK57Z9anAvuWj28mvryn9q1r4y7RBmb1pqgVSVVea6g2cU",
  "key22": "5XeP9F2Qinw8mBphKbxYuGjsXMMhujVYMRwHqRhuqZVYrdrQ8c6jcXvZ56WHBnnsqUeQNLY6qFK14xj7Q1DpZ7yX",
  "key23": "58Yj2sdjWYyrnC3e6AdVfyGafYjQWLK9qi4Y96edPYn7DJyKvAmq9be2mf1oBhvrgSuesyHaHa92e1Eb8Bu33JXh",
  "key24": "2Hpgg8rfRV16RxYrPMovo54K7A7LDf4Yy36owCfepoubjhubkAbgZc8WgB6rKn5Z4fNepj5NktC4aeHxSQFvWKre",
  "key25": "5m1j4CgR6ehiPQTSsVyxvmj92Evh9uYZ9E6yBH6DqvYjhz4ez2cnGDXBN1R5C6vbegfwXinnE72bS5Zap5J36f3P",
  "key26": "5S5mTFpRGg7JRbq8EC828M4M9Q8xfWHnRrAzvJkBc4KJjn6CB6QDeFu9TRCLkXsyaTbbF9rUg9APhiaAyKXhYjwX",
  "key27": "3mx4Ntb1uE7BCSBHEvCAECFrkBVYRRNxG41ofnTiZ28k8q64i5wUPFSwvtRLQtZQeHij7gTwtsDVTxBsxSh6S6bb",
  "key28": "24MbJoT3Fq1EpbkfG9qr2d1CbpfArvcxTxnznCkFyUsuwMnpEmdmVUVq5yEyJHLFYDmwLYw7tDssBSuk1huBY33V",
  "key29": "39qp6BK7KNwUm62Dq7oTfJr9geijjv5dfr8a1efdiYiy3QDKKs1WGCtCQYRBnhuXGizaYB87FQGeY9sUFCiM55H5",
  "key30": "gUGSCArr2EM6dkPN6aQLCJNBcsZhXgGmNagFHq2wGz5aTwkEkibeTZCYYvdPMKb3pNaVsRrbXKjAMiLGWJpE7Fn",
  "key31": "4Lf97XRYDwSNc42vqhUiVEcDDiaP9NvbNaqfJgLfbyyw2cu7GdkmvHiwBoXqaZjWsjYwnRF4jTP5C4h3VKRyHJrE",
  "key32": "3xU3ymg4Ey7VjmC2c7vJCwR4FXkwDUkUAyVmksVqjeW4BktbvBugXCfZ5P9BdWKRnN6QbiuM3HbE6ACBd95A14Ry",
  "key33": "2cv5xsmhHmW3V4M3ZSwdm4aYcF5BRhJZZ23vJB9BEpgB3FkEFmsfgEdCtKhMn6XkxDGdPxLouspx7uq3Wq1tsF4u",
  "key34": "5iJm4UNgXpYhhoymrcTG9HCJaNWsB2txne7JQ3wqTTj9qh4Q4WszogbrHYnKywD5ZCprF56mi5tJDDjDxPBueSyF",
  "key35": "gzAQHv4qsp8phokooCYEUqupzL9ye1XqBqLfw6aEgnMFcZhr6dfv2SmKpXnN1Kt74jFfW7WEfkypcMWFfqe3CHc",
  "key36": "4bARYfuLnLgpsYpVgaG2gw1T6eYwJDcQyKd64UsXt9q6AcFnh8iDx4xaihMqYsS2mr7V5CjoYhuEVdmh8nf4r99S",
  "key37": "3EsKVpcLavCRhW4zqk3eGHc4G3s1VmiX1q26qCyJyH7ywkkEqFd9MQMKVhSApTtkvuUKWEEREdd13LF4TvFJbCba",
  "key38": "2maJvkEyS6nmayxcPv6SNGKKkvwcx91u5pfR9zFknahRVZ7ju6RgW5CpSqBiaSp72KjS1CZ1M68KeagyVSGtSpa7",
  "key39": "3ajmUVRtGDXyHAiwsVkBwq8aN1zDGh25TcoefxNqL3KoYcLeMyxQHorUbdhTFgi3KUr8jVrhKQtXai5KFgWbQiZJ",
  "key40": "5vyvRQeCHdiwEiNgRE42xE7sBEw66pJdKk8fAri9YjEQZoxiE5Ja3QKXkkpwjjeESbBZouoLMwGrEZNXXWW2B6gs",
  "key41": "5gijZEZEM7pyUXQVRsihAQLwagYFMumEW9u8wN51A5UTcRMkBADYvnjJ4hsr9V3wZHpgdDa45Sxe1xyoAmKwkqy2",
  "key42": "5VemUhzgTXDoPc41WUZsRKYvxrnAE4m5dsz27EQg2aAsZyMARk1LX4LvkihCXSSGBJkYTW941apbRnmhLndhCjFB",
  "key43": "3nWuWiJNpYDzqgCbFFoYXXqn58v7T1ESFGiR3XQ4ee8XBjottwLYS8Ni8Bnkme1M9mWVW2fusnNUCpbK5r1YH3Py"
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

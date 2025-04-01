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
    "rhqwqGi5PxcqW276mPH37aEMZdqmCmPD89JvtdhxngyDinJXcnPu4FkpVRZE44Vd5BQ1JUdN1JDMrbJpdLHQwPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aMaRp5BKhPCsUV7qHV4vQ2ZGDmakPpDjMfL1d2VfkHVSe28NG1Zt26Sq6HLx6JynC5UAyqkV7JKwwqKUvdrAUku",
  "key1": "4uQBmZsCqueKQGWHd8Y7XDBC1QayNidv15vY2Kaw5w7sRvcicoDwn53Sa6wD8acLoPwV4yk9JMixpUL96CZLhJxT",
  "key2": "4D7Ty2Z4d1niYpscJF2QCYz1TdvLrLbesL2QrJofJsLsAKJ1BQ7dft6cTo3gd81rF3dTUegPnvqzsojjUUDQXZjc",
  "key3": "5CTZTpm3ERfvzKFwdb4BFaruUoFZszb5xK2Wsq3TyegXxfMxutX8vpgnogHWVwMFA3odiiyb7R9UVR9KaRPHrJQ8",
  "key4": "5qzpaEpna8s5D7kvNPUVbnMyiDozpYwfwDfFZh44Nt7iZ5J6FXaFiPsAZ6SDpR7qZnH7Zv3v5cDyAzJiaHiBDrnY",
  "key5": "3AFWrgfh61c3Lt8P45XLEqwyietUwVswHwwaaMPFNvVzr4iG6tzShth2GYBYmVkknzdBAPrzSquogwDmikhoNc2n",
  "key6": "99HwS6okMtZGtvUYGy12hp6KECdCm9wT6754R2MMqZ48vtFSHk8BhzxYmpuUiymh7oG6SBKDbbxAMedTDgoa3Pg",
  "key7": "31E3JWZdtDzSFnVdbsYKb5cmDmFsxHz2xgLxJuorunmbkUhwkwcczBviaEJRv7JBYqZfKcNzbjJhQ6CizBVaqeZk",
  "key8": "2nUFEC8wGYYJi8yx4XbFmFUJn1uzRqWo3xTtgMSJFcE3xHfFjmnPjbd1mEchm7mzFCdUT1ZExsxfHWAsLhba6hbx",
  "key9": "54b2nszPLhgzUHeqdgDmvtP3urYgVrgUCMnwkuCZHaeBurRfxvcowbsSPLDCMZ8ejdD2t1tXLAKkf4RQzPT6gej2",
  "key10": "2Y7Xk1PyD9cTShf1kHksjA94uvaf1JKG2EysHEJRy8SfZkvahZ8qhxdiACYi6pa13pz1YzLNc8CYatHvjqAkxVu9",
  "key11": "MdbrYx1AKfisQb6cfjqKMoxhW8pXtj7iwCgtouB95Z3LSGJc2Zv5hRV1FPoUSnhC1rUtJfBk4i7B9E1anGbgrBC",
  "key12": "3EjmkU9BZ1cekNBdLpWjquPSoA9yXphKyWCqHv5wd8i2aBKYXBTk4NUMVrboXvtvagu9SwS9iGxnTm8ALw3RiBok",
  "key13": "4MQ3SEMLvVhnHwvj4DBRuU16k5ayY2ZaxzYLfnwaRFW6cfCitVGDkUj4hc3qh3YVgGeVJgiRKvcrBHCsw3KfELSj",
  "key14": "5NXfmX8N1ZENt1bvVrHUL5QQFJmNYDiQDdgBW8nEEkSkFRYa3VgdZCSUXdpZ5pA6zKgQ2TuB2mAu1p5AfkAwxDwk",
  "key15": "2t9dwjMwLxutPevYxM5CT5Qyq9NgzAQmzYVSMTZWVoGSGm9VKUmm1HB1v4xxdBcYvA79KaAkm5bX4ZkWJ4Q9KHCQ",
  "key16": "4ADr6nocQPAjUmEqMf4wJv4Br2gcEpSAJBoLESqPJcbtuo7JVLjacJ78vZucB28shGHELgMzD3mS5sSoV5hA7iAx",
  "key17": "42ZGz1WtvT2fNAJUCWNtfLAyT9dqa81bBK2ArYbLpFHWBD3rjyaQxNMCByzEjgJA6kGWKaNGFE2TQbcVFdFpThUA",
  "key18": "2WsFxjv5Xz5qynYh3oDYJAk5SHECN8zfzdJzgMW8Aqh4KAC4n8kCpvPryayFwvKMZwfCLGrkDwXeN3xJe2eFN9JS",
  "key19": "2ToEzQZ6y7DJAsyWmTUdVBxnSQKNpxxRfn1Nt6cDUtCJFptA2NNnGBZUKfFQZMFV3dYWbPCMqHWttwQEWiATrKg5",
  "key20": "2Q4j8tcrtDWup45F4YQGrz3C1VxNaKhVzAGmr3PGTzwSqwRD1B5AT4dFHFAVHxvsmYjA8A1sKH6jNPhw4FMRycra",
  "key21": "51gUaBRbmGqzNfmtS9YDWwXyoNNSftFjXr74yvq5pbwqCxzMwix8GSkHBiiK712YZ9E9su5rYkGdgMBndZhv2EzJ",
  "key22": "2D1t779RoCtqE6HsCEF96eCSdv1jCf7H98BR5q3gZnUcBxrEzEKA1d5oYwRf1hP14hg3aP6NKFPHQWJSm9h6ttFJ",
  "key23": "5TREonw1vzCYVvA2YEotfxjhGmL5Wu2NDjwTT7hityUpde9w419bsvaCoV1nHJfWvq9CYuWoDNZ5o61sT8AnXSj3",
  "key24": "4XxgvSfFMwegA8h36w4ts1hugxKs3nTh6rRLAWwBxA5sGQNrYMzWqAHFauyPB6AB94ZzxofZsh3F8oQoAPQs3J3v",
  "key25": "3cToSaaT2TqRfTRxuYMWZ8cwSBn5jp6kjTnDMAPKPpNYnXNiy8dyUKc1WV71vUdFDnke9UQHR8DwhHmuvWN27kK6",
  "key26": "54pwA4wVswNQghX52vtsBSYWAbGw6aQoRXzrBWFetsN2CniXwqBvsva8yZd6fY7Hi2VfAXMhhPh37Wcz2W7NjrCT",
  "key27": "5GmNuPcRfbGw8dxJ2Cyk6fo7YvD57VxEn3ExAoyY8zkMJZQV8dGC5tNBY971tCfYJyb2WiCTHdGziAbwqE5AtTbd",
  "key28": "2N6S8AGGM8yrWJEDC5Xqdrxxu5H8DD6gD74hdoTyP32h1YcCxVGkjWAGtSpD9QmYZbpTtv2GptjAYdHNdmx4HKYu",
  "key29": "4MY8McDPW6o8XKpF8g7Dk4Qoio31LG4MW4hogS8XC3eJqqWeTGcZrVf8anpYEdGHznDZahWR2jhoMXzZFmi373dF",
  "key30": "2qQyDPZjntWhxr8e1WkjeAEq5riSGJGprVTrDN9u33B8swYfwUTQ3fuPEG98EigxSupy4DunVmarbuqPCGCaxgC3",
  "key31": "39oPRGupLfCbfxYFTdvyVji93hRHTZwv2J1ngVMC9N8HUE7rMLgDyJVuBKXkjKU9j82mEbikLdjeYxmWism6VSfm",
  "key32": "58xBrCytNyDsHmhXMbTHWGe4g8SCmx1URWntVNA3v1mQG8EtwtuwCXbd9SBbZHNQQVgYyvAyXY12aB8o5YAvjr2u",
  "key33": "ia6PFBBrdqrZB9Zw8pJ6weUR9JcUvH4DmtWtsEDSKQX3wa6GRxLgMAWL8hsHxz6oZrDB772Dz4waEi28FEJ47WT",
  "key34": "25sXiTVfvZwWZdzbZFf5sdv8mfPiYBntk2kZyrHmUDZfFkSTPPJbzrQyLZ1DwJgvYb2WpKqPVbK1gzYx2QXbMxdG",
  "key35": "iHPbnMn9mo5UMRQUHnc9Q2VX2gEagQjscCdUT91fT8MBFygFoQR9Abi5JncN2Xa7y9mUbbh6o8n7eZL7dTLwNJj",
  "key36": "3eff4Zp2HAzxg1Tz6WkRqncmMWjDKi6Az5gU3nfRoKVsFFJtxLSFaRuji1xVBhMhVEEGDodd3wUiFzsySFcKuEYR",
  "key37": "37chjVWpovKVMvWU3Epdou3n7P6hWwwvKEeDvVthKLDejsn7SMG7SjHrs4Xarzry49HjMFS9p7rNQs7EZo45pkHU",
  "key38": "5dQRj4mFsPwwkavqtuAQALG1fiTu7aCTLzfgUWEfcAwFZAJdGVcnAqFeRnTu8cnLkGuBUDXJQDYxL7WTkeUuVh7V",
  "key39": "5zd9dHTEiC985ASVgX5kS58QmTCfH4xaTUXLuQzcjnYgyU6hgKwoNyYsvrtsf3LSymL88SkJ5ZDz1v9Z8NPXyVGK",
  "key40": "2mrNRUhbQ7urjpZoe2i16MxJTgqUmzWDd1iB7x1mGiswqKXZJomXPBfeSXPVJ8K9gG6wKnhb3eTnvt1Vy4B4cAR5",
  "key41": "HoGpVQcmTCjuVdp4KaPhyaxB4s4WNSH8w9Hzv48Yc1KymXREyqFc3E4jvn7BZfH85uLQVGCyThu6pC7kUcys67Q",
  "key42": "LsnHdkC9AXaJstpD6cG8g9HDCmyv9MJ7ZeoZvBGQQND32WYACvKk13h2p91LtugF3dy5sxkAMiqeAFC3Rygv3vb",
  "key43": "66XaLohhyTYiPVf5jTixhiEi7LdRd9t8rkynZeYHbFUYr1tmrLqrch9Nac2DBUrKPEh3A6i4kTUrsJy9RW2XW4U6"
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

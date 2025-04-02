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
    "3eZdEVwbdGUL59mM9u8yphArKao4tViisZGcRgpS4dkaF8gouYyjYeGHvUTuAwRZf7b9WgihnEUSqR5kYVB28may"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66sXvtAMhwTtGBZAY1XMt78Yckj6sE34wCgKfjMcLDaTVuUZpK78KNmoSobJ8mYpoBk2h6LJi5rcyUhAmXCfm8PR",
  "key1": "129x3pEx47qBQ72B9Cp8K4k2Jix3d89oxCTRk48QhmRgG2zeYvhuKYsnTVt1inEr26mu1Wy6buumjUxMZmRgoSWH",
  "key2": "5L2QCFcNncViGeAVP47JdSF5ZfjhG6mW8mmNqVndMVUbjBWVtciuMUd4aWvA3PnGyt26YGug9YBUdP7Hwh8Mkrk5",
  "key3": "63unFnQoj5PieQt4sYBnQDyKWNgFkKx3ZP7d5EzRwmNDPS99JawXBtbdDbKhpSSw7HBSZo1YyaY3kWGe5k76dUfL",
  "key4": "5vWL3skRLveNrcWMyiKy2w8ayRY6M8Vhg2WSLsWPspFbf58Abs6XJdkHZgLAuubPT5dYQc5q4m8mHnMBAVBgwCnz",
  "key5": "3xpu3DKW1PvivqnWXpvNDEvGbiyZN2THDqRvLVKP62Z2R11bbAZKoDC4iL5gGnh9JWfZsmqtFDGq7ayPTvRkQusQ",
  "key6": "2cghepfg7GSDWdQwZ1SnyxX68GtgnKqx144yWC9AVoUP7ZzScfEZSKDQ9YTGfYkkw9E7p4HoDAttuFFqThdwuPSY",
  "key7": "4uCDciti59LcoB371rpLzE1WcAyphcr3bjxXSW4UgNeAF6RPqgT1R1w1y3NbEqzjusbbmvfWfdr5Nf12oPcZGxRf",
  "key8": "U1nudTS1H57Z7ksncgd4uWe6noFzkz8czx9gVCdjGgers6o4tE1qbjuMdhTZEwovokKcQ9Fnx8GH8KpDgCwA2fq",
  "key9": "232jRiB2SvQvoXiU2uSigMa9mrxtkYbmwuUaVqjqKm4wcANLw4TxhaM8wWwh8rYazisGyW8455hx3At8uVXFohu6",
  "key10": "3Z1VXRYnwd1ZykARFXuTCVRo3wsNFPJLhJVs8L8vAwyXKtoAM2CGLZHUqUBTJ4dM21rLmkjvVzQShMDRdLDsn5wg",
  "key11": "jcxT23nGYTzgF1MMGeaegcVmZjWeTo7HMmZeBgaq9vb2JSSZh3igvtjBeSMJvavduLi7FHb57KWkwmR3NVwsDvb",
  "key12": "6S1FC2qk1EnavkrFWwzwQvXDKWJgpq4VbBDHBDZapiLBVS7RSBeMqJa6gyPYqZLSWgyVna4UYNRQUG4FkAwHXKV",
  "key13": "2qTcfxsGs8Psm5L4JNNpSZPyBvYUtDX6q3EhWb5Pa6azvMrnG1x67uBWH4kjhhNbZQHRrsagpKo6UwtGPT4w8c5C",
  "key14": "5EsTzEMgS5QcwDckMfRbuN39x2ec2hf4b6LHhnpLQdDuf2URhyyb981h217gS1dczLFmcv9AEziUNzFR5cZ9S4GD",
  "key15": "5KNdkQho76WWALGAfXfxpqx56cd3BnTNz9BtGB4GTVpmevRcU5P5czZJbG3vNNqNwfCDKrgvUuEFhY1uvneNcURv",
  "key16": "2bbcTsJfbbhGSiQAcqMpvtGLrXXMnK7isZdFvCmoKubuPdWYE5PZWdPPJfWqcKgGHnfWtTdyBYdb6zxVPhfBT2dB",
  "key17": "4mKBbYWq6BHsMD143NYXzRncGdX8GSu3d1ezUDUrNc6Zg7LCT4VgvR3k2HRJpRPA7NuLoXhJpsJHY9CvXTMTSo8r",
  "key18": "HEbPe2eGxUz4K59jtVWZ51zrqdi2n8W1eoCMigUoQjioUcefzAYTMbqMRDE9Ax3NCWZjV7sKeLbvasadPQiXPFR",
  "key19": "DV8o37CUJj59P5YoXQksS286RtYZGuCmrzPhCGoU74Rbbmh98Kmd4WkpYTnXGt2ovWk1HTXg7vkcqwUMAFfumZi",
  "key20": "2tgi3BXDckv3FpQQaz76oppjtZtgftHTPGqibUzQNm8Un8MURXKxvc7CTFDKSz2jr2jzM2T24YSBwS3yPkz1pFXP",
  "key21": "278Gw7p91LQV1MbqxiwU3MEfvkCapNbW5gB45q8njSqLKhc4aBJz6rFpdMUdFZ5a8aKKfKnwYHv8AHx8JKdFHrHp",
  "key22": "3ii7r3KU18aJGMtGSDu9or7nhdtFK4WD6HcWXqsPZhoBuPbrxqSDthFE7yjt17gbHWE4ZWuAFoTfpQ9Xd22v3Pzz",
  "key23": "3L59R8kfC8LGhkJJyB2XEV9VZPqSwM1tmSgAcEpcNDKsvn9fbUdeg1jvxPvRZ21CrSWhiuyWHfcgKVDp3WopF9rq",
  "key24": "2G74C1zRjxNGwPypu513dAvP7mR17wreNgRpshF9LR74CVgcjDmBZqjnMvuepxebaNyKTD6YzHH5MTPqwbPUmKXG",
  "key25": "FDZDVLYrPRYeFDc8d5LtN9vpUTCELvK8xyV5tTE85MTVPakqo5GwHX6pkdCKdHqb9QjgXXCPPxiJpp15sFi6CxW",
  "key26": "5DzV96kqydpB4rE1DEgZQrWmrj2yisfvXW84fusxCncC1vDdrgVM6XjpuVDU6C59ooqf6eT3AYeJ9rUJ3Md54Hzb",
  "key27": "tboqgagcnrUZMTKTk3xFASRUv8eJYoLfLwrQ3aa4vpFFxixuciW3neDcvNdvhor6N1PwvkTU1RH1qjFxwsbstCZ",
  "key28": "NHdByKXxnPeXtZ7T456XaTEjfwpTzd1tMsmY9h4SaoCkA7X1hdWryNu4MMMN9GbGGGrDUnznq1meNSrSztDQx8i",
  "key29": "2dC4bkxJ2MS41h4URifQRiwVQcA2G5seWT3fLvD4hXs4QXbZG6JzpLzE7bZCNCdFbKnKUUJWHF4UqGg7j4ms1ma4",
  "key30": "4sS9sARLqPW8pVDVVZwo7Ah8Po4Zv1QLQ9zdcSKtAAB5PDYK3RRAitbz2nt6Sk9wmC2NJ4anWcmPv34D3mRC8Vpz",
  "key31": "5NiR4wq1rAherf7Dq2fYTPxuWTjXKwwxFVD9tXFZwsEz2UpHa4C6iDyycZ3WKBYBpRw5y8hfXjT6Lwbjpj7iWxGS",
  "key32": "eppJKuJFBhTF2RNkUYVyLpfiAPH7j5D4GuvJRe55hAN36QKfth6uAMBYzH5Cy3JXKUC7PoohQkxNsVcnZmLDdjK",
  "key33": "2eLXwu8NqHbg7p19LW9qzCrS8qj6hSQC32KdLz5NTmtrjzxVmLJyZT3ZPzuBXaXZnawJst3WiFWVaJ5LxqcapTT8",
  "key34": "2M3sn5kfH4hK1JBwvMw88gmHU5oRwthznW6QmNCYm1iJjqtSQU13zAUM8o6EVEnXnccQYKKkDrJA7xYYfgD5dWva",
  "key35": "2pcydccxvnA3GJKrCR6qdjontfWYQSokkkQxL6d7tXjcG2yumtRRDrFeefpdKUJjoBNsfTkUyrGNj6zHXtKagcXd"
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

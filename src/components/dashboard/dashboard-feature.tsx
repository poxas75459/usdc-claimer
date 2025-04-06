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
    "5xYNdBZbXSddwkAmtmdzdvzdSyq7ZGhUEMT51BepbvWUPhFMDn4JyToFPEwvXPv7JsxvmLkXba9cGKk7SSSkfmth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43WmG3fTULSWDd5Y4DUgg12bHeWnhB5XvmGVTJhSMm8hwKdhM8D5uP5s7wZEWr8SG8v3KRYtU165ggNZY16hdYFk",
  "key1": "5KLg5ejQKFQSfv9YzUpMeio1foyr5XZPwqYezgTJH9oSa77zVSX4cKYV1t1Kawr6TKFCTE1yxcJbnjqx9DGWPPnh",
  "key2": "5Xi5vDY5LmfJX1YNicBMRp9tcKx6zCVujAMJX3h5wCVPoT1xLe2Eq4oZsFgKw6khQxYnKTZuGFf5iBNJNdpdCaku",
  "key3": "4pJy3TkTDuGfTUW7rtsmYavGYvvwRvZstQCGuZupxuYaYU6dkkDMQkoGffSbr5twTAG3B5moQsPYbAVwrSWGR4kJ",
  "key4": "65gsc8NCkA92dRnwKqcvGsNJE98jPuhJASjQjSJgy5h77rkxCxWELAhyKBUFjLF71xPkXbkUuNmoeMUi4iajKXzP",
  "key5": "MCfs8xc5AE9WT9Q4T9wbHkxo3w6S9X9HB5mfz5HwYpefT9zdTZt3jzGdWUGDjGhMgnVidtfKYop8wsRZJpfAT61",
  "key6": "5GK1gQoACd1Jgy4S5LzwMo36r2DYC5vcjB6gUctdQCpR2aonAyWn3goNAfb2fadtDeogQ7FLXBEDMZKuNsUQwvcM",
  "key7": "5S2wYyodqpEhtv4oSAtc5PbTfLct9Ln6VFkY4LiDkRaKxrTa36bGUH4YhNEuJ3HDmCtkxD5LTKX457DV75xaXYpA",
  "key8": "58ASC9AoDLW42ZneYkScWR7FLarAviPdtKobunKEMyH5361aG5DC5BeWKA3vdM5MJgiak6qJgXZds5RQ2qbMdmmy",
  "key9": "5h3fokqZrj75e2jDPdupC9UCskosMxo33xr6yCVLo7zoRXxZJC4XY4cMmJC6uHgRNmMQsszpdyvkNe5E6jvEMzTC",
  "key10": "2JXbtFLkMkT1Lp6FVKvVwBeCjGz3GgaNj5mh77yxTFohHYyE9AZLVmbzt3GZRnHRv9i2MgxVhfU6SWHyZtV9tn1s",
  "key11": "32fEyVjjkxrqe79hDYFAqftwo95X2BYCkhkFeudWMNhJh96MUa6rrFHbZrhv9tBjQwJ9CdEP5bQDr1wUcp8543wv",
  "key12": "tCfMWHGvge832ikxAqfZ1PZERRaSwUroc7fWFQ8nHmyGA7YUvGJAvTtitLywDdF52Ae3o73t5d9ZLJCLsJqT5Ld",
  "key13": "4BzPTyGUFeXYwaH2qWU9obePfriHQ1JunuViPxKSMxaJwKJCE6DzBLymS3cJ2yq59T3GeRHdJLyYwo3C6UDEzLjy",
  "key14": "2DpqCp4KsXXCGJPvTcZDnLADeARhCrxZ1pdPWzqo6VgEpJ3En4pVT5mfFSTzKRF7ubHyymebjsnBjkA5xu66CH5o",
  "key15": "3rxH8VV5kAbgcV4fVc2FQvBKLXrAcKmWzWymvREEavanvT4qLRBPpP18Rdpi5Ehvq3qbnSZACGo3BFUhPk3iSWeG",
  "key16": "3q4hVaR3BFFek2ceddqy5VWE6aPawj78KKRv5MaFw1HZ5oBAc2bz9xEzT9YNLtLJUtBH1u94g4pXBCf565bZFGYe",
  "key17": "38ve7Hepm8CWY5gEmL87FHxWnKzgfC5Gge3CS5ntHxHhP1CkapGcjQccMVxPZ7gyo9Lu1V9z9dpPugX8JCWVuoTX",
  "key18": "EQRrTATYydFLSmAidLhksXByLmDhm5cN3RwjX4YfEygD1hYvXA8Ck8kzxaZtLAkUEkuHq5NQaaFqHftgdnVWr4K",
  "key19": "3ZdJfLELjbWWRMYxjfN4vungtut9KEg7HxZdNi85g2PiKe79PMYwsnMgcjvcwmiCMwQGKiVnBKywE9jSRN6cFL4d",
  "key20": "5CQgpHEkmuVdC4rJvYj7PnXm3p1UCMb85KB29LjzpiJ1GPYmGWTESbnKV1csoc5kPjZnffUNEZjHtHD8ysaammvA",
  "key21": "285FpJgmwvTXVPhT32SzgWWwrhnE4DgYC25qC6eriorffiEYG4zSvMyfVJiF1Nku6GdZaKQPc9WjG1Sy5wsFRCGx",
  "key22": "5b1dZ72kt5V9Mynozkcd5P26fGjVYBoTWx5snYuTwnVWBHuqJRjX9LiNiTYTbg3fUJW1VZ3rH4rba8LMrYhdekm2",
  "key23": "2ZGa1P2CkUANtbSGp8D1mdCTjeuJ8sYLvLYLTEKuqF5kUbRf7u8Fg31JrvS6vgeJgBqbYAAAvSibu4uR5qcMHgxJ",
  "key24": "3aCjpnqBCTUj1CzrhLQd1vGNGnkdtFSjxuKMkGrNChdRQmJkGDMp46WhE1duXUCU2JZoaacVcfQCeVQKbd6rzwha",
  "key25": "3s5pDodnY6RK9f5cUaRRRo5aSDj39MYnsy36bNYUCNxVE3vphysWiBHLQ8zdheHabaToH7rSBHDUdfbetygw8vgo",
  "key26": "4kCY32v2BsSVsVyqcAB7oryHRarX6CWB7QZqUVGUyx9BNxgWQJYswq9NWH17PBaS5wfcniPnUgFEnHMkRZi2wVww",
  "key27": "2unzKPYySFE6fdXxadmuapG58Jy7aHd1kyvBVzUDkPSXqqkomHwnrvBn7zG37vdaVRAaKX4LDjSNLt4xsZVXtqSV",
  "key28": "V3BGuubCH9uWkXNohaozts2j9QmpybfyK1BjgkhaVBdfXzRe39vG87vSYcnsWwa5euwEiC6WfofPnco1eFZx7s8",
  "key29": "2RMwKJud9hB86Ebxk88VK9yHvFZGAfHjGwGSsaVsPN9b9AmbEYW6whB8rLjCwa6quJ9xhPLzCEQD644fk6fAwyt7",
  "key30": "z175wLLc8A5oqn7J3g4yd1a5TYg84LTmM918daRkU6BVVcuixW4WK2tAZWXkanV4deJcxc4N8uFm5vMbKzCHW99",
  "key31": "3hdNstkpa2q7BFy4c37AkDpYNadR92qgBRfsn9fmtRw8LvV5gsLWuef5F6HunmD41nN4k7k44yJCjPthZUqW2uvt",
  "key32": "4JLAfPkZRtgyf3fhjwVsFA8qcWD2Figjons6JUf925mf66GA2vgApT8irz4WS3k59yxupHuxfNndaNAJQ9Wde2sY",
  "key33": "4yDfuz9z5721XXU36jL5jeaXL6ppXhpgHXEwV9YiocwPshEjUA49UuZsNbuNakWSoqU9qLfWCRuMC5GoS2YPdjsB",
  "key34": "3SfGS7uNTmp1HjELgvHh3ZcttkzamAmX14sLnwaBTAgZGFfPErdviBSHuYX638jAjCVc6mHn8wHTszJ1DpcPHL1V",
  "key35": "SVUdXpMXjeM67SyZ3zx4vZb4wegYupbWE5yhqxN3src2J8MVB959sNAZjYcq52pZXyaNL43MWN4AaYwCLWMUYkv",
  "key36": "DSWD4WQd5kcDj9oqbzZQw1yenxRX6MGH7MMtY2hFsp4WjbeFeb8XzLkq8sqyRqrDrruVEQRtGw56npLeLrVHUBX",
  "key37": "2n8H9SxUFAZb6syThQ85GfktKMzsdD3ZvTMACEWuVjDucNYmKk8q1SxZSh1jsUSrWu3TNmpbY3UqHskc1qj9Mcg9"
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

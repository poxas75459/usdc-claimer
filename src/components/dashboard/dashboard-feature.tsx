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
    "4raGwSnLKTEJP3nzcHMkzohSqHHo1FrbNeVUSxAeVMGbJVUodLit3rwiNYx4JwJFmbDDdxZzF7HYkHYRQAxJ5pQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rJLDgEHpockZ3sxFFBjKbeKndCsCJUostwPo17GNYUGYDVsHVB9ncstWDCcA4GUbqVceo6viyJaXGoGb2Gy5HaE",
  "key1": "3jyyqDunieXqoduKvNjwTuvtF35NG1M5N1FkXHuw2fv3J9Sj7942DrBiiNZ8zRa85r7ZcUuUvmmaGGTEuo5my8hW",
  "key2": "25HRUVa1KqD6XiAJaSWsUoHtnREMuNmPZXF7ajyMxiRp17cf7UGmf4bRQcJzbeR1b3Ej6mxLDUdpPi6qawfnYkq9",
  "key3": "3tXhvsmrYF9PaQfBcrM1QHrz4arzZSvBY7FBDumYDQRFg8JiyjdcGir2SCnRmcYksQpiEsvk67jCHrvRGvYNdtp5",
  "key4": "3epQNBmFuzwbeR92jTmLTJoj9RVCnXJZm7H3XzKvSRksKtXm9Vn4bK9ehLaZHrvhGqpTFGs199ybkbEPQkY4sAqt",
  "key5": "2uNmDfsMz912nZHoK44X8BtjpQSbVnVFhQ6uLa389HM9nrDHG3q9ahbfKTtmtuZqaFpKzvgsUeQfy2ifPg8at973",
  "key6": "3dce1tfg2GuPV7dZrVyM5hHaVRKieAvyuWuHRwwuCwM2RMHpshgNEvdxpaU2TPZUPhYZCGGQpRL8q1hvvWneovXe",
  "key7": "242WMU2VdUaABihdV1mPD6v2z6d7DbTJg5RijTL9TsUDfCoYoquV6hmWxZagsxh5Si2TRGegYEXSeiGwEM1fuY9x",
  "key8": "3WpT7hGYsK9mez65WD9Jt1TCZDuhDN42YVxKiktgohhN84ejJa9soFUiNqsUwZHDiVbsZWJGJ8XB1DLa84jrtfsg",
  "key9": "3Xb6V7npazz36ufco6xCgm56trZMBtZj2Jp6qZXiT7gZSb5R8uzGrMTwwuqbUpZLyJNTgNMCSiAHSiA4xgKMjDkh",
  "key10": "2tdqFAJacZPgngXpKtZ4oeNYzgnCoqKEocMx1h7SxqcZixJyKBgCp2mfjDfJaBxvBTozenTAxxMePyzmvcjWuvC",
  "key11": "4Qi9bH32YvaAonFMuR7TMK3agrsnG9NnbJHvDHmrXH4PYC5f6JdrL4X6MPSDGhnD47fwY1PupUF3h8MQsZZ1jh8c",
  "key12": "4RzXLf9XVzayZeAcV6LKCT3SkH9yXKVU7zN2QhUN5JNF7LrdPHE78GJE6aYuLhxqq8kgykKeTQqzkf14U9DZLV5D",
  "key13": "5eKShwfG7q1TVhsMoXTfuvqUcvwdG7hoZne8oYtWp1UYaHPyBfKLsGR8SwLNPZgopT9WT6ZGEwhaE3erPC5Di2Qc",
  "key14": "3vkqWERXLQWTuA9VqDG6mNBsrU1a4o4HVVCzFksjjtB4h8waHo7AXeZbrFSnvfYsrfb1C3frMMvvPVxPbn5zxHT6",
  "key15": "5FooaQTedr3DL8cUJ2aGxsF7saUMEnDnUbrCG9bCJUZs4zKLp4jsEEaraGkEmbJ9sW4nPx1ZrZNqgLLoVERmPqks",
  "key16": "39UzcoybSULeiiQWBf31oPk7H4Zs7uu3hCaWidvLjg6RsYP5kgqHGTxNYLqm3n7JzzTvJdTRcfgzeWFd4i1rSVuJ",
  "key17": "AfdyvjnJGc45H8gakByJPwjMiPZayncfiSXBBSwj7sma7FeS8RtMRjKjRRsXTCVnGLJKoSkeuzXeasF6Nd2JNri",
  "key18": "5coUWQfXKLG3KLf2noTzpnXdpVF4Pd1mfBBnL3wgQp4vPw71xPaa47uVebmpGstdjwKBXAiRdSGzxpuugz63iBtD",
  "key19": "4Xiqi3i2uD4mQqTWVJjYf9fputiMBTNffWMMaA5faqL25HA1MgUbCXK6DCBH6oDMYnGpXE8ZXsCdsvRRSsoWusD7",
  "key20": "2aTWCsSRHHHuQJJYiS62T3pDsP7sn4ukHBnb7KDnQJ57sQPQcRbBdepD61UgjhBJw2eP6vquRB5PPrtHUoCZkccm",
  "key21": "4kMd1mdaNHdX939N1vfvr5zLTeNCWwpQSMLuxGAho1ZaQQduzqTW9yRHEX5f4twVgFJGzsqWGCrcGhWzqm4msbg4",
  "key22": "5KtuPbpt9QHk7a91EFJxduLn9nVsAP1VQZvBuUrvddfPgvQHiWVbByVrg5S7UbjFk44jAseqbcU8XGrZsmYoiELA",
  "key23": "4zoW8bPjmVpintb3Y28Z7bRP8iHam9u6MyDa4fqjEyDLzkYjC3kcqr3FEg9HWmWxt1VJUkkjDqN2gxajLEukde2t",
  "key24": "2rNoGQu5rTkD4Wjg6HTL2tzdbv8AbfXkrVEo1kRoFHKceUF8jgPG29QRh1xgfyNL7uQSge5UpoprhbXVRgZ52bVr",
  "key25": "4wFvobg9pKorvHCKtD5EVkgZvY1sCSaR74jDzWyd23Y3Mbb8U2Ddy2gJYBrQNcwwcfL6StzT71158qTq6Hd8quUA",
  "key26": "T7sN2fwzoCM6wwujeu3MbkVZ5fK68DMXowo4ffpHZtZbHPtqWYrybXjzaVQ74XEB4rkE8rrPt4xCFGFHrPWxQK2",
  "key27": "SzjuLqDuU7MqZqevr1paokyo7MgzjGjwke7ozgJcEwDesDpF8ysjdjZpMuoB2hnYdhSkCGs94vS9ECfWigvUvWs",
  "key28": "WJxW52vvzhrZWk47mefG3FTLcfPLYCuz1SArcxqkFwUYjJ1GSNDtZn4dDcvrAtn11vx6W3g22W7c1D912ypFbxs",
  "key29": "3d9y73weTHQNwdYNz3EKhyS7R1248wJGR1B5nciKR2FpRGsoA9QQoP1asxcwxbfEvz9EK9d6Tzasfav6Hw68NsTj",
  "key30": "4XRPhMSCRkEXLz1Xzvu3CmqLr2T37LvFYbpyUiDWkZEVEh36iBi8XJjxFautGtmaAq6de836QqpUF1WZLkMcUZQk",
  "key31": "2SoGLNBh7bhqqxbzHKwEgpNWwKbz2CcNfqo6pg6en3W5fSWpkPwcWeiQimdSGYmcFdpgmBjuX6RBpnKtRgbgXJVq",
  "key32": "5YeYGDz7Lo1MquL1RRFmRDWn7NV3EUuFoa6GaBJ3FX1MzR19uiHDahx26GyYDKfwhk6N5E5PbrUvvo7wy21ew5hy",
  "key33": "5hPAYzqXuwYY8wxZon2Ka9V2b3R8pyh5Xgv7Bb9W966swqdWGtfZZVod9RDhjLRp1qXutQymGQbwhs5f8NbR8yRX",
  "key34": "56qBsaGMgnFCpcYo8dSUssiUWTU1tpZWh9jScdzcfCZ793dXeQ2g82u4GEDRAFZPVtqSL8RHu1Ub5wUQ4MgByAip",
  "key35": "ZmiVwPBAxSwNYtR4pnWhqjJSfzKb2Q6s5ZJ6LYJZSjCykXSpNDSPac84DYSs3drcs3HpqHbUzYMJmU2vz6Do8aR"
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

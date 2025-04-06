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
    "2Uwun5ZYekhr45W7TMbiT5Qe5M6w54iABP3UCKc6EkvSUdbQQoSefLxd6zh11Z9a1885wY2vbLvaL9cvkvkefJ79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ndEncDCzKSuRYXWs29ShDtLeRD5NxBBhPcFo1LdCR7J9Z5XcvXWivP3YJbk2oo3bh5cKrFyc1T7UGhnwQ7YJeX",
  "key1": "uHz2XdWuFhyAQ5hYJB8HpY7qtrYvmBiPzFgafKVCd7rm9k54vHoMXJdNxomnRuSYjn4276YZ3VuLDQUKvEwvkQx",
  "key2": "37LfbT4ykCutDvKSbtxuoydfCkmNpGvvgpSEC11RgqmmVQDpZPY1UsG4DwL69Mj53VyqtCVBKbu9d7aXqZJ5HUe5",
  "key3": "5x8ou5Rh6XbBRZj1BjFHzqW6g1p3ai4L4TvnP6sPkwkm1BqKRoMtyxPXRpjKvn3tWbEyN1rocZcYjEPA5DmpWWAn",
  "key4": "2yXogY684iZDR62T8Qpe1QmjYxqL8XuL7ZmXSFrBpeQYejJXafThiBeSTrg79TTtqWHMfwQvVbT2vHnfPyEuJM9U",
  "key5": "4ES9oRPeMenJnxgJKLnhpnzehFwAx2yLQCw7QUj3xex3J5W3ttVtjCrMR8gTLGoWJwiJVT9yp6mVvPHcxx3fmLkf",
  "key6": "2NHCQqZWZ6FxykqCYDUnSj4NnC5yr4Sxfrnc4NVZvF5sjawdEv2BSUJYYgFBQRqSW88XbGER4mTRUETwUTLqatb1",
  "key7": "zoaFXafV5tD2eUn8P4XNYM4MSnQueCbdSSmpuheXjgutqpwTgmtr5WeZkMMFGt3jMK5fVc5TwmKBopSkpqgnPVw",
  "key8": "P5oeoapmqsMSuh8vJjH5bJWZPnfvpweQVVcibupWQ8KT1efx4wJqi9iNJ5LUcZYoBoWeRirxuPKQgh7sQZF1TJJ",
  "key9": "3LiFpSvw4nboJ6ftmjj15G14nNTnu1AGTm8tFrUy2nsXSM5eBK1sArU6CcQTqntGMKHY8AFDaqvLQYnanfxCKSHm",
  "key10": "4hCj8A5DtF54U3UGLxbxdmifmPmhqYi3zi4Gk7puFmkTo5RJgjPPdBvZeWDpEm7fxcHJXNxFqfRNhTm3oHnjqFkJ",
  "key11": "BgJ3Qrizzb3q2dBmmW5fGkJ8XyRe1Nys8DG3eT6aYd63vFHx8oAzFJSvwVCvFznADK2epGXN3kR5KoBnh3FkiBg",
  "key12": "28QsgojnQMJdEFr611ohX534n27MkF58N8zfVxN5YUWbHAAUGyMhQe2Hk5Wrbxk3hmZWT94UMB9mfxbWV5FcJv7p",
  "key13": "43a76zL3fhqGspjnT3ELTnUkJaGFqH1yTizCAb4rok2KFVTuwF2HQyjaKca7LDxnmB99hd1m5XtbrhcWLq3V6FNf",
  "key14": "5VHucX6Dz8JciJ5ZFczEaLaUof9oKWVrpnwUCQ8yRJsdBgAsfoe89JhjHDJQxQjQd22iJbRE3Fym6gqBHZwbEh9u",
  "key15": "5ChQVku4QbQ4TSDhXkLABKstMXxDxUQZixV2VSD5Vb4rwA9N7HXDZ1W6PeBN4AjYGqMzhkfSSE5R3XztWLdsHfBy",
  "key16": "4KnpH2rVkJg1RRit62fvi4ecj8dPmxJRyeAHcfZS6ZS8uAKfBFzvVJTuTCNLMSJRkPZK4C3Ecxzxvarje2a4pTXn",
  "key17": "2wA3wY37sUsTWJRFSFEJKn8tLPpK2k4i337dKVLBux8x7MRQjTocMLrJDuvYJHdo3mgkmczzxZzRHyNRMXz7hVYY",
  "key18": "2zmr7RBKUhpgxC19JRRmufKq9V2j5Q5oXYQYWseoFJnWbar7QA68cumryxUMR57u8CqsDtpzHduB5JkmVxVRwTZE",
  "key19": "414n8mYQ54y4MhMjxKdrQ84LAVZvPari2DGzmd5Yb7topL7MrrKC92e1ZQ9pKEY2bqgzc1WV3osuYa8ES2unD58L",
  "key20": "5ifAY7WB9LyPvB3RP9hhFkWEogQ45hSC4ac5qJCBDWDNrk9UW2wCgieNLAb7vpstrqhayG2B3JZKxtBqbhtg1x8U",
  "key21": "2WXgMyLacsGi3gJtEK2XyD5VR8dmsv3wjQpuNgYvU6ZXg7VQfJmATT7WUusPYbvDiP7WE47uoat4qZ3SqPYS32Wz",
  "key22": "55c3MiioqBJptNCLYhtHcGJgroLUaHcfiajpcZ8AoaVETRTXuX2jBGYrkyLC3ywAMRAEPKvzGfL8V5cdqVbJ7xi9",
  "key23": "4BwaNjeZEeH1jAV8nXfVi61Zr3EUyEMmwhh1JRZrAHMbiwGUP899qs9975U89YfDMczo6rp2CmQfHUw8r4gjibNa",
  "key24": "4Rb1bbrJ6E4CHWKcj1P1vxGbcr9H6TmfYhSEUp2L9J8hpR2xE3z9aYvARtjSEx1E9SZFsXYLquwxCwzZie6RmdtK",
  "key25": "fk7FQjXW6asyg2pwxRx9HT8bxo8vnB7cgGXoTyDjr9tNPfmmE51qhGMXJ2toXaQiYx2e3fVirQMMXo68qoHZG8G",
  "key26": "2z5hDB7XLyuRo89JWyrbQxwTbhMKodva5KvC3TdWshcNNx5WmJYLhr63A5Kty7BB5sL3fhkB8CYgRnBCWDRxVkQH",
  "key27": "58xS8PKYG6bKVtCiz84Z6XDdBNdx1S8b4ArrLBikWPFumEhF9BLxYs7vee9oCA4MV6NQviwKrDNvrAVBAk1z36Lm",
  "key28": "66UzY5xeBJK3tDjEdYJu4niRgJue34FTGRXd4sqLYHpywBqm7QuAU2fTmSwTdyCDrjbU6m67XP1EeW5SvK4yGpiC",
  "key29": "265b74txfMRaicHwMvujvUA1MDNRV3a7Zj74mKonBENCYLHfpnjrHd7623uANR4AZWBidFErLpEUv95w8YfT2rpu",
  "key30": "5xMB6Dk4GzwQzpd815NYhigCpb6QR5B2SDXFhWckzzfiMq7afrHy41JfpuEsQzbT4Z7TvghyHuspGMdZaJkPWbBH",
  "key31": "3PhvY33E46N1g4Z1oagXopXeQktbscp61MHjRWzMYeNBMSNRYuAqLn3vSfZi4HakD4BUBebGLvwWJwJ4DHLUtXaM",
  "key32": "2pJrd5wSZ5ZR4Uyzi6MvbmRvYqDDZKJgbxHZ595grR6GjnspwJoarUkTLYksNN9YQXrYLkCjxo7RTDUDLwV41HaD",
  "key33": "3pdsBWs3j4w9JquCHN84JZhxZ8br6yyAdNd2fuZDe5QmbAmB4e6b7fzvkK4pdiKYPDJKbncWcedpzRh4XC17MJzL",
  "key34": "pukd3Dguuwdw2aakdvr7xJhcKQZwAPin1YWJK9MRZ6p2knWw8PdMsENHBgetHyVeqXkaLQfcVyqSw12YkWkP1sq",
  "key35": "2hQDpJUFF5qib8qaD4j3UguqsiM5mEauf4yEqygNBiLVusduWuWMGEsARJwTg2nKAXygTLwHaEDYUR7ydQJMfnQw",
  "key36": "2FjUyNhjqSJTZCvNAnbjeFJTd1EDEwE6kWkQo9zw5TkpkGs83DQqNP43iPqC4zGAcH361u79N5i1nzWeGqZsFNvR",
  "key37": "5aSSzGF55zybVkGWuhAuVBr1TssoPdNpiE954u81zw4MXvvJ2aPQGtML1uwmw4qac9obLSHHgd8XJN9je2utSNn3",
  "key38": "2vDnqSwndbmHXisqPA5dCM9xEPK8ZCBN9kufyRHpzCiBhGPigYi3YU6UUdoa3omvtXSvSR71UvNHCi95pqpBa6QJ",
  "key39": "5cZw2Gofb1T7g38BNfDRTsNSbP5wVBnckQ4DTth5of4pzDrUDojf182ugLA5HMK9ARpYPSQZYGeVWtp7vBdZjEAL",
  "key40": "32dSvaajn8xy1RHewmpecEHTT9d9DAGE9GZPCzBcZFWShmpkf9St6eEaBY6e5xmdv8yxSb4jkV4sQFLZ9Sc8kguY",
  "key41": "2uTbG7Mpysg7iMJAVdxzrA9ojRDUrpZ512BBFy73if55bvzz182ZLDSHrJf6pMj9xzaNW67opwaARAmP3akNGZBK",
  "key42": "LseyivSLLPNRKBZnASbA8a34PZ7ufkW1D1sa3XwdyxKduKj1efaWoJyeMEs9eCiLua18WdKceN1g7py7Qrw1cXQ",
  "key43": "3Ep2SaB8f7pmuGi2iAnYg8tsv6i1z77TutYZJ4FuZ9yCbYjm9SfngokcdAooYgU2X3GofvhQTExZzjjZYrhYvME",
  "key44": "mQYbod4mJSbs1C1LDwK8Ju4DRPEfZMDNxMatqh2q82XoCArHAcZuXmWyQj9ymycDZADrCwhiheka5tHTMBTSkZZ"
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

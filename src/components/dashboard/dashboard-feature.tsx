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
    "3UqasbSb2D188jQeTw9nuCXuJZ7fBMh3Loq3YV2F6Hd1R3He5kewtaRRTtXsAzScS4hBvPr7obcVfueNvWhiHePg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QrKHYd9kkpBGAcpXhhkHPDc8K49ArGrM66bSffvq33KxaR4hGD8zfrHiD5rRWnLVFDJmZsupvh3TrngiZkzyUXz",
  "key1": "39EcfJ7yL3WA2R6GAFSmUJ3T5AnHTnK9rDwLTTYcVACsWGiVFVfpYqRtdAFEh5pocK5GFAUoVVHqFAnDNMMhgeGq",
  "key2": "5Jb6yraNgWuP2mRbQeCkUMJStHuRaGt68NtAUJk2hVNTV29PdRaVwAEVFCtHomufGhD4Rnqo9FEZKhvkLvYH9Hy3",
  "key3": "5eDsaZ9MG2x9rSLg4KPV7zRS67udhpKSETPxHmre5becqNGMbMWrtoyTmE44vYbhPqJtWD4fTh3iLDgMJnG4fDCf",
  "key4": "DGAbcciZHCs1vJQWi6xySdPM4oLiWUH7wpPQVGRwXSgp3vfBaBmER8GBsLNvsDPNJRYFemcMNh8u8wsWtTgwVTP",
  "key5": "22uDDfEKnczQJNB4CsM9RjB2Gsf3b872uwSNqbJmfSrQHhUndbrdedsZrBeEeGjG5NYrfadzJPEeLsowvSZX9PFc",
  "key6": "NnAhrhgbUwpiyUBimVZRsRew4Rm63WJYttg4dK7mUvZeLMqRcAyPsopjFSKujfZb9kzXUxqQWszxV8t7Z2sbcRC",
  "key7": "3e4rxPJ1bTfs8eB3usrvrq9BGCXkJUjfe7beCH4E7HFcD61SE6gwGBVW81efbErdsp4PrQeXrB8uY68AMFCFbcss",
  "key8": "5HqcE39Wv3JvJc5uD2Q8xK5FEH8ZUZuuntXuVnNyAT78CyHm7yAgvjtM7AqhoLhLnqm8q4dNPnGVqwpbjLVv5kjT",
  "key9": "4mK4NS9YvHGAoL1B7yByjaFQggZ1x1s8raTys7AocXtekHg7ZF5Yv3N3F5icr3HdjP8fsHA9eC3qSgeq5PJPkQYa",
  "key10": "5NsNqLNcM8Wggx5nzuTE6RLYmnG5eSuNTp7JeJm35WDbGW7bKyPYedZnstDGhHVUK5nQoQQzu4C14uJ91GpgryQt",
  "key11": "4GJgwXZ7ZEoJQDuxLc2SRwVSVS6teCErDMsycHA3UDsjoyrnXhA4i7BqorZ6Uw3NXuySVKwdByXsDnHz6yL7zDVZ",
  "key12": "2RL19oB3Tw1xc3FSvbGRcxKLquiTntf4PopCPtaNyGJuYfnm5LaHnunJKWgJ2kpUJBeBtpnPY3nvetrVJzQC5W4P",
  "key13": "2VfpTNjtJc96fpKXeKCnZbaBVThNLAKh43CyZTubeBHxYLFZ5vAGoAZd5dDFBVESX9SwyuRJYsiTqtonAEQ6pcg2",
  "key14": "62JZysqAQFoc4DJnXpTbimoMsyFwU1ybadGVs73buJzCxru1Cdm1eXEwUijJNEcd9UwYfTU7cmU7yqox6y4QktT8",
  "key15": "3o8a5DGWwvh3L36XgsaMogHqK7hjkhx4JeZPqLPUqJUwyJNCAA2admtr8EFzjcTVa9zKFsdZFXnsNgqfhW6atyBG",
  "key16": "3B44GH5XrYKf9w1iyEBm3gqgGsTSnvJ8rik6pWXkiTDUMSkn293GgtHegyxT5ndiUugdFzSt6iUDGehkYVNygf7s",
  "key17": "3NbXZW29VsuYB1iKnPxq2C11ScWAQ2X3sF1LxV4qnnTm791aefMex6BoRi36yYRpfx9C5z2CtvTfgg5raGv7vYQ5",
  "key18": "3igjz6oRyMWHMCxhiUJfFcLU446qpD2GazphqXxcbXkBnia8KJURcmbKa4LLYaLNZr3XjEr45VZzGu6S1N3Ys13j",
  "key19": "4VMc7j5HBPjw96wzZ63icVjjqUHs5y3GtXGz4kg7UNTMNbnDd6M9qMbhspXXSWxWG5ucPJL8YdELCojN4GxjZZB6",
  "key20": "jtLkdFRQ2XmWbcSFSyEE5DJMQC81GWPPc6dqMhDAqoi4d9pvAPEn23NCa8M7hYStGpNUsi4VWfREFkErLD2wbbr",
  "key21": "t2KHKS4pZWRqWmcsyjcoMXXNZWpJ7tnQ2FUdY6jCpUCvpFaMAxNgYniHX8zPfxJFXaTWyaWdc3N5PzzGiqGAXAU",
  "key22": "4MgUw697F1mqpiuyPiTFiGfW9pvEFQtoDP6aiYgfqbMjHCDMhD83WLLzymcnhtbfArcRxhetMJvygnzgh5JCXGrb",
  "key23": "65APsp2NCeGW8etVZtptFSmEkFpD64ehoDReZwdpv9qUgpbPrs9zVbcvsfbaNxtuquSHKPfWHP3uFzNcYVreuBi3",
  "key24": "5od3F4XFdDScHjex19oFAnAue7ojvdVdEAKSSF2rXzN6PWLJQpaPYUQ7yyryebHpCMb1TD2FszUtpFQptwNNVoEq",
  "key25": "2JXAK5KfMUz9JDfXGZihkgpcRFN2RyZ1jCSAbrJ2mHDC83usT9Cm7hwp3CRDrkJVbd2MT3sRqc4BQyvUfQkdEqjF",
  "key26": "2JUTKu1bUuoZzCFjnpBPd31UacSEC2FvxojfTdyt5HkJFNsu8HT2tLtrkVMoJ5fYr33hxPKHcxGfUXSVn3zqg2fW",
  "key27": "55eJ8Yr2ki7dMAeLosh2Sw8d2wXnxUNHvKWzKF4TDYmedi84dVQGH8xZRVNo62yvzoH9AHDKmuCWozsbGpnEQ6k1",
  "key28": "3MBRzeaXrdJMVaR9A2Ns6YKdcZfTKZqDgbLJGjMwiEEGijZPGXkKEx6fgmNjLu4JxNaEvzcNEMKSRn7zQ79qwzQK",
  "key29": "3LhmtPRnjxaKQsowGbzGc9kWKGfgMya4PNqWzKEpbn4X5cywUnxctmHpMQYe4i3dqc6BhtrzVENzMeZkooVkCeEh",
  "key30": "FtQYXBbkCkRF7wUUZCH4VsnnhgZoMgmhbN96K3Qt5JvK1vo4AXG8AZViYCeUYNfujkqcVUGuBMPvQ9fhNqfUFxE",
  "key31": "4ATAm6frhXtVA3m5ui9EPPaGHK4DfpGAMQZ7yf75kPn9hRZ8qxt4TMqBNDvT4ZH4W9Xyy6YpnvPDNU9mCiXiQwXA"
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

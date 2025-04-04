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
    "5g5Hc25UuUCgE7t5BKRzzpjn1Dv2NPNt6SQdWTEHYUTo93AKURmGzbChzicjDMU7b4CHzqF1SowwciBJbC6PwNTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pV8eHoubQgJGSrBFtQ3BmKCZfZqHi9fgjVdFYq1bAHckNBiTc2VFFCc4coESGZn8bqmafHUBfh4LP2kLEvdhRRq",
  "key1": "57sMVpzYatiYGLrShXr6tds3cy3i5RAnmwzg31zuyo6DRc5PEoh4EMn5rAKDYnWYvYpAqA9GQyTHMwUV9iGNT1gV",
  "key2": "2bUeJWkiKJRhg8UWYwN5WHgNVh3K26RGLEsizFXjwAHLXAZtmzx9k24BJrSGktedFQmhU5G64vh59xyBDY8kvR5o",
  "key3": "B2ZTBe7hga6rpWLWPxuUPE2AFgPYYwhyKUXFV2y7fJpfjr8vhhisU4gB3jaB9d8tViYpNEiNTRL85gC4Feg82S5",
  "key4": "4SokucDr7L79DqNMx4TKVsBHbG1fBCeppdhUwbiqfu4f9LKaDUgm3a4Uenv14hs4Jg99PRektYM1QXBUzz2RXVZh",
  "key5": "4rHTEqkjh8dgamdaq6KRoyYut8kdWjqM6LA6MyfbKqJqLkgetE6SQ589jWH5z1MKvrc99mttJWiJH7cV3y7BtxWV",
  "key6": "2yg1QgsdkV6NfXQMMpJsjpsBfg9swLN2qD6SeW4vHmV24A1jNwGkFWLC93YMQ7J525De4eLekHcZqi3iBp57AvmM",
  "key7": "59pXUaTZeZgi6P1eGhDucZKtVxLxfUZtrGtoy99LoXnkToDKTAXsv49eGPHAe5SN3bg763pMi1MkYbHKu256k5vN",
  "key8": "3wyfhComNikuzDdotzRaekJVhJJHYeewqVTbNCDV58i7k4tfK9YLHtJ3FrkgNJwfU5kfquGWcPeJGwLmXcyWmwDZ",
  "key9": "5AqPrEHHp8M4ncZnHotLUnYhxrZ7MBF7UbP5jv5iR4cuyAXtyRDNwA7DNzFc74VGpQSGFTA7KuSJfToRJtoEXh3c",
  "key10": "3JC7Lwz6k86UK67qZm5HbVNLx8pcFwCajxjbNpcRTuBRTAAxZ9MZ8T4gkx3RSKvLYKXQ5gozxXhDvTXqddJtgDHR",
  "key11": "2Siayg5nkcNNhWJmWHiSv38bDK5PRhC29NaMsRRysUysnskZcMWoiYC1uascr7tWQg7SxFR2wbKLhZN1TELELKNg",
  "key12": "R7a4sNQ5SLcUD6oZcTUCk7SAZGCV9PQ4C6CDA9PeCMscPGvdVHnhvAGLGDZSBkQxyBUt1UKuyXp7UXeox7hpoJr",
  "key13": "57sWs9kHDijcuntWcse91UYqLZPBCfya6m7XGBf82CYt8aHL8MGZHYEGB9uMq4n3AjaYnvdfF2Bwa7Y9vpzhsLou",
  "key14": "4MMrF42SC7LtsiBPA5zJqpRMjLJFw1bLugPwn8k3jebTrPnMmZj5PeLdFjKQKLHcj4eYqGTh7rh4BAmF8UiTMUe5",
  "key15": "5hQpsEV3E645w2YxJMtjBpNzNCX36ZB26QJFyhdvcbyN4d9HCjj1VHTuzVuYxkfwahfJN7unF9ZneViUqj7gPFH7",
  "key16": "3KTapntt433FrwCtfHVf81vubEjqTaY4pGCoDtj6dQ1wNRAAzpPjqUq5w43i9Gzie54gzDPAHfehF1W9zdQyGJt2",
  "key17": "3uyJnv8h1GUGitweFBjjvYHdsVnoE5UTaxSCbih6JWfQJKuCQHCTpgNXWgeqpQfwSBqbTLwjrvNwYA4vbW2rd31G",
  "key18": "3PnyWExHahicLUvUnN5NaYJVyVib6ABfnvcDEvNHCYJNLWfna5SBNs6NTDKcshuYgxvwotyBrXDRJjVeNuZhYWYd",
  "key19": "4D1qMEdicDYgfWE2SYYCypqRygpLiurJEKx6HWrPPJQsTxfXDQR2CeNh8FCLRuofBTBSKGxKwE3cqNZzAspTAqCP",
  "key20": "5jaTa2wTF4t8WSXfwfcQHGadtVqeZQ4FWyvWTCXjHfC6WcGboXPfi9QcDiNttuU7mLFQ4rdevaYS9x56mKPSdyCW",
  "key21": "kM4qhdBumhHaamZ8J4kGV5oFBazRQbVUi7Ah1Gn8Q2twcGYGYxKDUR87iSTSBKSaYLXx8gXpDJoKqCoZDaGKTwm",
  "key22": "516iLt35vtrHjdyAAGRyc63bTEaCYtd31b9hXjnkxevi1FciNpqHqT5o7js5iAPHuPYWZotiBGTLVWVxsmcThwW4",
  "key23": "B3uDwSHSA7QVV3wR6ekiVGxKrAEdURjWZBZeTpeh7K65MkD5Ly2VdRX3TJVPYU1SR8AFB9YBqTJcTHs5F8wnet5",
  "key24": "45npWQBYfiwpHgKSU867T3iaUgsvqwYzQ8Yu6ASSby3gMEieP6qeaqbB8kvjgMrsy3CvmoUkzus3UK5fANLafN5",
  "key25": "2sjMiMVeev2zk4pLyRS7uhqESDhx2p4ARHgXJ8WyHL8V9SfHTPQduphLGozFRb4jmSKK2xYmvrfGWi8PDg1YZ5Tw",
  "key26": "5Po3gs11oFoEsyHMNWCQeRzj699hmCNqyCGLnAJLXHtDNrbL1oioFc7WYg4Nxecim7KEVAFfDAsSatxYoFCCbkjm",
  "key27": "2bL1CYsKtFpG7EQmj5Ee1D9HX75oB7PSA6uRQdYGfoAM2srbicWkcacv9nuQRE68dGmwLpcLf6qXcP13CnrDLGrk",
  "key28": "3Up1XLEzvdWSTbN9tV3Gvu6ECUvWz9s2CUpkLg4HgddcyvYfadBcofdjvpmtYeuQn76ijGckF9gay2vk2eAhRboa",
  "key29": "4TpbmJRK3adSMHwYdPHuL85YT6YHGXTbb8RurQZyf3mHKPTJYF95bnXYK59yCiQbuXFYaP1hstEg1YjPw2koaaT7",
  "key30": "5SzxRSrt7YJoGbkpiaGtfhy3nP3Uu92kNjWz68U3bT4spueHL9bzjzHxELvXe6fJABXi1MPnsfq4kgGSrqizMEq3",
  "key31": "59UMvBk7EbpoBAP6Bq2iECv1bvt9MRTj4yQwEBJDCo743yFwcLU4yRVCqpNsEw61mKvxnVkYM6sDVAetmwDgK4nF",
  "key32": "61QuDmNb778dMiZ7t4vcCdKc9wwTx9zzgE6yhJic361BYCpSoemuwjz1gugWjq6VANfAi57JmwCVUZGJK5mqdWys",
  "key33": "V2rW66QsrdHmRiQDbB6yqyjNMQcWzdaByJ5UsonZQqrb7kNm4rH7jCcBFN5DZ7Pu2ZcSsW17NEEo8tCCVDkHUk8",
  "key34": "2XjLxeaN4Mc357BE5ywBJifaNamtFQJoNj2kU8nF2NQAagjyNizM3BoeLVDMqPEC3bQGRpFh6pe1QZh9rn3gQDgs",
  "key35": "3wm2iuRhPxgnE7QD3QQm9VQhjBLgpy4BP5ADvxQYiSVSU9Yn4njtKw66qVabbQBAdrkoVm7GZW14TQbvqFCddn4V",
  "key36": "VwyokzrAnMySPtVNLcR8ybAyja2vYCFFqYZvMmC46HYzMsnHkK5kHkcG3MisQGg1jy9i3xbKwKXhF5p5d6eMoWi",
  "key37": "PHc8HzdXNcgSRibuaTJqnyXNTY69EdZ66vYYDdtkKATTPJjbXzq5VibcmahvkSsoXc1eCCvSo3HrB7hkLFxsSAE",
  "key38": "64epVeAyFZPnF9HCwEVmyYPoLCHK7TY9VPdPmnz5NLs9nRNLPrzPYiyEw87ftqk47hkr6KfKyWKrqGpLmw7SX3b8",
  "key39": "5sg8UVpB3a7bSCesQuUUtuN2qq8RgEBdyR6iXoRaPBjZJyraD6Vm7HpUteSDHwFLdKzbqE86EtGadsQxV5ggQBXF",
  "key40": "55Mkh2nzNCtP9KdC35YbKxws2fXctWVjCs5CMu6Uqjcc7ck247HUX6aJsF73KJdAjw58yva4ePNxfx1E6edrm4f3",
  "key41": "DEn3NYGad3z8qh6J8pkZ9GnGepNAFdz44Q9CNZF7dj7pXo4w42iyYdTW9q78DAUB5S8ex9eB4fHYx2HtVP24ezA",
  "key42": "9RGyXfm5RGywKno6hmS558xHkT6mZxf4F9RHaLnBNtzLHCg9WSVjHNkf3Am6qZTquqrZQqSHrujBWZemxuGMCAL",
  "key43": "2EN1cQW8GxyRn6mr2j5T4KxptNndSoQRq6vZfTWysTsgnZZRR6q8fqaUkKXXKmA4Xywy8zGZJeh87iPWgeFixkMc",
  "key44": "2bXKjTERQnQhunKx2EAoXCGe6jiZmTjZNPWjmG87fs5D1Y47eTXDeTBg4UzPdUEwpCNrUG2CnKBefdbqqnm3Q4ky",
  "key45": "3R4n4WmMxRDH2yeAYC88W49tZrwBoG29KUwG5vXFvhijZBtU2wR2mFUzm693vmGmN3cJKsqkg4PmxrdkV45V4tBF",
  "key46": "4fRhu4EHTV77AtKnDSYYJYoiai9Fn8JGZqMJkG4yStwjkDar25uBmNJNaLLfWXPigp76kkvnZKfHpifnXYFQfuAJ"
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

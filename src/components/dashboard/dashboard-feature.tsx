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
    "3PYF7qsHYdRy8ZM6t6zdUcU9XSzmqV6kqXbFpRVooW2DCmFNcbgu3jKPuvF8RZKS8hfiDaeiE89Asnygh1kAsneH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y18svUSUFGMCiEe3Uh4xYcCVRR3bXQDm6eYAkRtqapQY8LZNbq6f6H5niivTosVvknWpGgboL9Tt271Z6faCdMp",
  "key1": "3otPjga7FtSYivH4hj8Zfk3HufwebLcSf8fixbvUcn4Ho1R2JKiXvVgzAyoazuxniuPPsv379734izQ5MYqHJjZd",
  "key2": "3Sbb4ypLQmq3FZQCQKWxpvshkJjTJTsThXCuMRLFgSnh1ESD6PowSM81zjFRSo7GiTgmUv4u8T6jAsadYkoX7ZKX",
  "key3": "3ftjCbdhETUW8F5tQbh4rW5pM7iTweUdN9Y51EHnoYApKD4d9H5H1Q5rwwrQJtF95yn2fMWgFJhD1X59cbNQqxJf",
  "key4": "xXubrvpoYfb64hAAuUuAf796vAmNj8c4Q7s6JpYEpSX2cpVimSYo13GeBfvR5aQsXr2jZFHabbuLG7PwmSM3JHu",
  "key5": "3nXUicNQH5UYYUfnNxqjPLCKqcUN1HmM3K1gzhRGEu4k7uXsjAnRAVFW3p42dQ1AM7PgdmkkyMRoDRVMKkzrYbQF",
  "key6": "5vypYdGVAJKrsfZTa8o5X6u9wZLp93xv73NM2cALhdqztHCVeey4MKuA3nGFkh1PkF8KqMEbAfBE5pDG7Yi748bk",
  "key7": "21yu1wwH77dQwDCiKnUsELL1RrrNYnvRdC8LPupTCP9fH2mqHsTNd1LBXraxqMcUxzMQTcTShZdU873Xys6Zf5Gn",
  "key8": "2fX1yuDNmRULaavFPhQy7XcgZ5cfgAJXeYM8eCgEvWQxN9LfyfKAjb1HY9qxf9BFCu1LBmXufroVjLQHcKdm2Me7",
  "key9": "4GBivHjsssU8fGbjCke5GYHaxCtNE2Viz43oyyUTTF5E459FkBvnhbkwTcsKKfTWZzsQygo74PW4ebGGfjDeP2jA",
  "key10": "3wFGbadRNWmqm93oCCqKshM1PJ6bJfQ9bs8YHXHXF8wv97NHoEpqvy8Qjt3yLVSqFkvFwmQJHYaq1itMdb18iNao",
  "key11": "3DqKFAuXoCYAgGwPDSzFJCYCqcgM2YyfZse8DJNUorEzzfKajjJ4cacry8hJjAqhqosUJWjPMtVzfTXXrDX9dp7g",
  "key12": "4h3Y6P5vg2w6Tatz92do3rM6CCDjYsXcsgjiscSNcaozt8jo3jPQKRyDjyTomeGpYC9EzEvU2BffRTrc9Vvpeqzp",
  "key13": "3gSCmdmi3j314scHTkjjEkp37dMZ1Yvvk56ndgnQYAzxNETG3v6B7wruATRQ8hFkzEiuc9Rxqkva9yYPZT8TdBqo",
  "key14": "3sTKo3iFEWpSKevyG6drGBniSXMkhRDKrcJwCA7sjMro1YCmd9xXJLekMjNNHT14rm9ntLizT5ReGgj54n28KxXK",
  "key15": "24DXuJyZpt3vKGw7LenfaNhEF6pRbRgPPsJnqdukKRi2wGgLGCoYF1on7wAtanVvaCZYKezm3wtBWTCjNJiZMpoA",
  "key16": "qrNVapLU36cKHYUd4482SHf8vRFyngwEb399nhQVp4bhMwWToHJLMcXFie1Q13uCXV7GEXVtPrA9Hizhy3969UT",
  "key17": "2MCr84LQziMQe5Vqr8vKQGNurfKts37L6W5pj5LfMUxqVfHGouJ9hvgJ8yMH95mHrZBSA8wSbXcemkFGB6U5VbaL",
  "key18": "5HFmRWWxLqTadeFoSJziTG74yK74Yy7DYMY72ksmXJbyAYejiaqCYjk73fDV83A87uGX2PS97Q9DkJGpVgiw81rh",
  "key19": "3zy3HqEzW7fQVyY1KnFNC8z1FbxAd522avbdTpXVghGq1dekgiM29u7xikJPgVef1enhxXqEoFbgzY74p5GL3Rne",
  "key20": "3LA8ERK74QLHAL1rLyFMeoHukKFHiK8CXKmXUZXsFKQLnLcaK3PnGm4U3XkyEY3tG2EcjP9QSvy1heN8K1MvR2SP",
  "key21": "2Uoni2yo91htADwBty773qmuLXGRRZwLJYBAWRyypyvpTzvuZZPLRAcUrm4bpAiLBSEtEK2a8dgneAZU3pNYHc3M",
  "key22": "2qRyJCK3p4UcJ9EZqqJ8hLk5gR9e4cQjHj3ZU9nEdKaGpE2TFMHrvxpmYQYVULpNa6mDi9w5eZSRmDuDipKqTzRN",
  "key23": "KnZJW4zScwjgvBpSU7nvb9wSESRrY61o3xWrWBruij18dBEkPCwJA3DEAxphAcRfSUkzzgDavRnNvzUVpK59XXq",
  "key24": "3nTpYsTbgFpZfP82cLSTfmvb8pYQcRWsNtwYvZF9ctu3Y8qpXyfEQwPzhxj9SanJjdW8DJRKvB82bE7jvBiuchQ7",
  "key25": "32jLYU8Wc6sPRJGftAmc2AYDNWbGzUfD9aa3dWrXpJwZxtP6GkakKMY8RkWtUUfmtusowHiaiKD3yyTLAvXNVKz6",
  "key26": "57fZj1qdgE3fL8zCJGE1z5JMJkcmF55XprjHpVbi29hFubPcmGehMLX9XCPMTEERXdxn5W89NqY7xMTbz9dFHHwu",
  "key27": "4mUKzwc7cZd1RYKoeMntkhbQaZGsrX4bihvHR28RC1y3A6YR7MqnLZtyeZci94hwQm2d5mCAyJdm14kBkFG88BXt",
  "key28": "562p8K7tt3wtmuXfmFqtC73HbyNvnMNrGJLwxL44fPdj4KLuDVQ52Hx8QQkRtzuTFbMvqG1xrzWXBdDWZvcJLEh4",
  "key29": "4R5SgtahcmFU2UtLBqtgV34rRY8PW2emr1FZQtfkS6hc4gNUrzhCZmcez2D9LCbiYenwkgXcaXXPxU9sPjorXWgo",
  "key30": "2Ez3FxAN55Cyvu3p3BKmuoRQKQ4uoFKY9c7qMV7rW6gBWHsvxLKQ7TxzzLyppwBs7YkDnK7kaALrh22boY3p6vsZ",
  "key31": "3TrusnuxnDd1nUG5qeCBDpzQPte5F9gxh8LVj7jJa2HWryURAjJk49pLWXYFRsM6Ft7DFyiMMxuGv6rGWa3QDVC5",
  "key32": "64nBvcg7HbhNDYcHmszDYdSzCTPkMyTDWUkbtNytkCdk84YsAnonu6LkncmJCcv2ka5T8xNdXg9r2TZBnSidVtgk",
  "key33": "4a8GeuxkwxovhepT8X5y17wjFBzLgAYCpfvM2ESTNu4jh5VPiPXQhCF852U17mqjx3tWk499Ndrv62EsUr4sft8d",
  "key34": "531gfLHsrhgeRFWckXndVYypgkNjWUmraQyiqFBXeJB6uPtarnHnh1u7rmgsZdqkf1zVr16vVaZnD4THon6QmCAx",
  "key35": "2pCz4G3vQBDEiMxHoShqSRjdPVfSaB5Af1nZgEBpP5wEfBoEPDyGDsooVAC85oJuDpzwG2KBfacrWd6tZftkZWGT",
  "key36": "dJxRjTJmnNrcRYFSyg8Tu6Z2VQTpsmNeQSDp6tvwWBzNQJ3NQsZ6ScCNsNmdP14s35wrg5LMNUgRoKMBG7uwsLt",
  "key37": "nCbRR7V6y7g54udZWk8t5Jdvna3sFFoQnYpg35WGeFDSGTzoBvY3xzLv49PV9DTUyodaWpwJif3cFyzpqash4Yd",
  "key38": "5fiiZd6mko9iJVc88mCrY8cLMhW6aAP6L11CFhnCuSwPD4SiZHT2kHBvPR4ye9955itHrvE1RHF7kufitGRNgynK",
  "key39": "5TsdREB3iRqBaAtao2r35nqRrnjpg3foJuE1bgsAbLdZmNDhovYAAdkEQLZ3aYKb1H3MhS52H8QjsBsbPviMeHUt",
  "key40": "2o1KQJkHWCLowNHD6HzvJn8i5S1P5PV2rq4be8utR4JjtXotxpYEFQ1cWgcNSiDBkmgpt8zq5uTf16cVgqXHHkzV",
  "key41": "4SUMgmQqwGy7ks8w6doek1DwkxkfQoSwkoBbrJ4BGhZhk3SKk5s3QyM7S3YL2acYWEuPQMo5fMyeKrfa3ojjd4cu",
  "key42": "3hfQu94XgHp73MsPyjXzvam2AwNA4dhXphpb7e3SdtkBriru5dD2jejbeSSe71fQJodUcAVM4ZW246PiaGQdDF3h",
  "key43": "2vqFLqTBHqFdFiyYePGkJHHJBvbu5dc4q1Jv6c9GLbF6yiDWQAcYxmJ8Ese4VrwzJmLKE51PSwbqkRW5kaEreSLU"
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

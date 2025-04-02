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
    "2EdXABfe9cX56VAe457E6cuYDkLqnvRAomNUFKv1jJEvoiRPxvqVRbfjMzX4CcgZSV7UmUkPkvEgxpgWzEYRrxQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxeHodN9BiKxPUGtzgb5KJdrChNHA7t1no1ndE7iqWSYJoPKGhnmSMZdJ7mRE3C1PgSQLCDzbiJViQv9EqGpeN3",
  "key1": "13nswZAQm6VcDCNw1cDYcAY9DvuLqoNRpAQ3Davro6K6WnCx9zNSFccrUXDhDR3zvY8exZwhadkefngZswTR2Xc",
  "key2": "3iS788rDVqdnpwow5D1vyuuwRzRT2U6Ebnfh6fvBTooMvSo9hg92W2n7ik5BGkRdRQJJsTv6GQCrWENt45JNWgrP",
  "key3": "533PPFYf797ybsxjesfNUAth5iziTaxsgQ3CgqJEXoxVG9a6HipLvqZBjtVi91h4jd4aUJ9xwCsS72S8HbNAJCMC",
  "key4": "2RGEgpsWvbet96GhzNiSAZju11jzYDzpJh6CRVD5dzzHLExNDGEezHCGjSzB4s7yYVA6yFRLhhCSMUQjKZPjL2tH",
  "key5": "srS1xKmDoyTRsJkqsJuP4txWhNxSyiUeZQPAEtitu3B3eJMeyX44ninZik5VXRSQVV6SdVr1Uk5MLz4YF6vRG3f",
  "key6": "5v1gdjjqRBAYo7whKBU52fFAkQgz6XJtsbPm8q4UMP4T7dFiQNZ3kkn4mAfFaBg4ExF2fwbmc3otmo8wvzsBoDct",
  "key7": "35NnfLQgxqq6B6417VUmVnP8snDAJZ59UqDLsmb5Ep87mAJQNa3D2FYR9XZYvX62XrX2WPdEmMW5wgwqJiQnnqxL",
  "key8": "3dQBTXJvAWbFV7rGxDSwrfnDoMcAbqfYUmVdf6XtFiCw8NmXPFDyftDZEyGJ7N4H8tNNuEhfc2mn82LKgWVGWDi2",
  "key9": "3jk7FTjZB7CNWAwVzk8SV55V6zs5bvV8QNuqcCvjnHm8gPVCCyVdaQ6hjBumjegBtYziNuHkayUv4zKNHXajM6ia",
  "key10": "BPZiybAuJiktCUYZNciAg5YuDtfCbW98aSH4G8o3ZACogsxw3vQmLJruWBXqabzSSX63kGZPvWmfamUBPqtoMAu",
  "key11": "rSfdqLU6Jp6UU5syfzELFs7sJxywPdXjMjAqwfesfXqrCqWjdBi94kwMuBZNKQvprNfuzqfwScL9GycgZYjngat",
  "key12": "2pujpU3rjnpVD8rnrF8HzbQuSTkbvuyUdNKW2fEqfyXYUWfV6f8pXaZgZ2QMFw8LJxKMBEPSssVJLV8tfaAGKXHi",
  "key13": "2eeUomjRc2oZuoAqR4jyriTuPFAVD58j5oU7nMjMjy5bGDQcZvcFrmtGavFNytZ9PAaXEjST5PFi1NKnW1JunhZi",
  "key14": "2jmvjk8yWL5nw14ZtfHxgS5L7ZgL1LasCgJENpB4K5a6LvdBgQRgoG39kRZiR8sFuUo6LqTjw56CwWdxAdMF4WAr",
  "key15": "99q9hXsXJpbjp347BAZFVa47LYvVAbMr9SN5rwhD5p37aPxAHtzGQSdSr5es4GLbHe611HDAQecBpkzVypCuqab",
  "key16": "22T1nHAkYhkcnFdNHR3HURRXhkWEQ5ERvbSGkcMGGPFXeqziugkxksZkp9Z9soc1BLThko83rWE8qMCGW3XftEsP",
  "key17": "5WRk22a3Au951Et56gqqTeQpvh1P1WimAm5URhtPqUog296ARbmgYsVgoKXBLjWqodXwfQmghfYXQSTwUMJ7oF8K",
  "key18": "2jQwjoZqtT95D598sHfVqChdYq12iwtF3xdkWx8HHMzJsuYZgoxaFVitG4bhBbCXmNt7c1pgSMJE1JaEw3kPRkun",
  "key19": "2xdgawHaTrG5sC4mgVmBTHM55i5bJy5VcDQiTSLsYYrTUqZARvnnfKnGcJDw4VtBdQJm1kk9nbb8v7NQEx4NvA4F",
  "key20": "3r74WaW9PDnWTxWb7pDpP6QyWRrBuSZHZiYCpXULGVdCErmxM551MfPKUFeg9663aiTwPX9qYSGKmVNupt49H7DL",
  "key21": "3Sc1D6cL2SzzbFSm3wRvSfhkNf5Kbe56An5DAG5hpEo1jSU96pYSqCKcs8Utg3gEwGcgNvWzPvKyCutzoUBT9mQY",
  "key22": "3wqpimD11an36aAC2b9CrX3NBQzzHQUhZi1jvKrcMEQoNDRxS1WaXSSN1uEn8duNbKAgYoynUwgE4CpAjCbqsPZb",
  "key23": "5znjgbgZeZyJcgtK4WcD6yiprd4PdkhBzZLEUC7CUu1LgKeWBBfy3xKJZcrV5r9iXKQVXurgM6BK1FJqEnAPoiby",
  "key24": "4K6wCbLoSdjUbYinoy1QvzbUAtZRTLnvyQieqdTBvbHAYG45tm21QCtd8PF5KEsXS46VRLmqSgq6evRZofKzo4bK",
  "key25": "2n5K1S354U1YGVcZxpKcDjGovjhouSgxc8FjKjktrPB4yaS5MeJ4N4u6xigQPr1S6VmEZm8NjzbdMS6o6Hj9adks",
  "key26": "5J8FFqLGrfCU95JWUi9LGE2Fk17qD1v3ZsBkpfVCVQH7NJvomQZrSD8juZCLCbfhZkBmpmKkYY8e3x3enYuwWcBf",
  "key27": "4RPUFigFJUyJSBgGMNkpT4iVkkGYxwT7jS2aZR34usbyy8Ervm8QQ7rmJjL4mQtkC3zCKmQfYvTdyGFv1xGPbehC",
  "key28": "gkFxvJyQAFpynFpv6FsNM3S3f3LisgMv6WG1QRcCynxebZVaYMnHCSfHMgRVn3L6yJXJn6kfCZvt9MBWT2t5h4F",
  "key29": "2H55dsbZLg8akZsAhGh8QfLvSmb3JwGj8YucdcBc2bhV2LHwfqEgzei1bE4XjPbgJt1D5p8oXpeJBZPooVaS32CS",
  "key30": "42cgwUsZT94cYqKgk7BQPcpQagvEgtpJmXH8znLRvSBicNAXDB9geXUDjCxmDbMthLMcwaBmwMWMiS552cprnA8n",
  "key31": "iPXNwWx1tN6z7kEvBmP9SxSYosmF1viaHonrRuq1r2vEwpbrJGn9HWzWCeRmSuc51TuwBnehLFTyKnvMUzKhWbp",
  "key32": "3tvUtj24zxxThKp36q8C9xvLj8Y1M4HwmZM3XFb8YTQsag1ZFxhe32ZqNSjG3BL4du465yDGdv2qVfDYY4bE1Jum",
  "key33": "61xQYZQXqojn7WaNhCAvHp8WJFcpzavamd3xV7e6pRmBDpY7MB7dQcdrdVA6Y4A5qBNzearMS7Hzqm6b8DF7Mbv4",
  "key34": "3ePpNGZy2fYSZUoBi3gx1XiWPxq2caV2a45NepS1pzX8z9v5msMuKgcoXf7NjoaCdsLDjs2B1x7h62FyTM22Sb3u",
  "key35": "HaYNgsr25WU1LsBeisrGteLF5FVBCcmM7vHUishMBPyc8W2BpD1R7Wa4mda35NG6ViPHukocrjptUtjCKPkHtzo",
  "key36": "3FtWyarRXnWfpWBGev6bZP9hMfgpSSXMdErvg4ARpaSevpeFB1sQySv3FsG1QhUFkHiyttvvVihxvvrUoWjMBQVx",
  "key37": "5CrenEGNSiAv9WB46PGciAekewmT1tmoE6wsqcAkLw5gnkVaRMV6DNZy4sBWM4RnYYxVsXdGCmyNwLSW8TXyBv7J",
  "key38": "3ZWNbkKLHiPNbtEEgRbYyBaUUPYvzvCgFeKX11kcDpfzTbJAF8JzJm3cB4iYUdgWsQnLFGMJUK4XvSurUyAeMHKd",
  "key39": "5wMe7GRkGAV7pitCVqQwRNEXApXNZjqZ1qNhkB6jyMmMW8vwfPbXirv3REp6eXWbaMtV8xrrYNVXSsACdKfisrzy",
  "key40": "2CdWVxK95N57tQmrtCkdA3G6RvQtkRT7AwqeT9vysfvB2TekajfoNyHZKVFupqbv6BHPrCYMY7J7eZDaEeeKpDSa",
  "key41": "cwJ1qMYGZMu7Syy1sUp6NnZzGCor97d9wskiLHZDuzn3UcEHKtYYNyWnJXFPk7JHjMaY7dRjqyLFBy6aazDrMt1",
  "key42": "4g9H3DmP3XezmZaQ1avhDoXNsj3wj12FTVQ8g6D818woWf819a4D5kbKzvZ4ecmDngeLZ8ma2ZtU2EAYsbr5dsSU",
  "key43": "61ngcDDwHvHmmw4Aqca4Q37DR7w3gW8ZVE9aVj5GCw9KwYyCLUBvi88oWmMy2eahPVkEycgbRzBrPDwD6FjfpYMQ",
  "key44": "5ozW3gep9GemfjTknDvzh8kf637tKkhiM3ku4riuveSS3k78xLpcyGhnLS1oEtiqnrvBgKi64sNxGk6UkbxgjxJn",
  "key45": "2wYDXt5ZXWzHQp3jCHbX7gBw8QgY6tJEcPPTB6zVmc1X5hDzw7xfnsPVfeakZD131ieuULVQCaudxY62Rh1ebnJ9",
  "key46": "3zvML1X92Au3QM1uCukrVAgEM2iJ4LvAFiQ9nSZ2Ypz3ZRhN29rC56uV1VmwMx6bMvDxW4PgSreQKXVqxqYWSBKy",
  "key47": "4dzPBAzxE5r7Frc8xFLV94uBqDg4yi29iazhyY5ECdhszY8iR6Afqj4D8aQ2w5cpM3njK7pjdP1Yo4L5oZLnAwy2",
  "key48": "SMfhuLZTLFxwBF1PdqU61tSWfftiax1PmUKrgDwiS86xDYtKgvjpqtX6M75NV1KeGvgqnrmGXPe5n2T4iHqsxYd"
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

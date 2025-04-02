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
    "26cyKZAUR3iBGiaoxkV23sDAMVt8GsSqdyvv7mTPbf1WpBDubjRj167mLFhzZ9DQiQBjARw2NEEPoYXvTiGkxkuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QvXwzKmKbsDphcrYk8M1VYVEwqUoRPn2rf12H8yhQtkk4EQF1yei27oGjdqZfMxc7MEYoDKw7d6jLVkq3MCD31f",
  "key1": "25Qy96MnTbaKJrTJ1dz4uUFaMTVSd54AyX46DaTF87kBVGyBD6nccnVnWALQx2g3gU8GXt6RRHm8zUkgRPnqZThb",
  "key2": "5u2GJduwLWueQLNZBYpLE98XPVFJvD7rJcNzcGZcLFG7sc4FvCzLwgzMLLPywdiS4F9HhWJYERbEmwmzt6YxGYwR",
  "key3": "3gg3P8v7aosvDfKdNGGDE41DPNZ25TmZ1XvVv3a7aprRm3Sc8HDys8iQoAmm4eN4Fjk3NLnMs2rNGGXYCYnEZ8ka",
  "key4": "4oH6nNFf6X82JQu76w1woobZukJwzSGa5uFGbcnKJQBZRLe2QA7974Q2egnbj9YJN6EU9z3BQdVM8kWndzuFZXpH",
  "key5": "496y6NzLieBuTYTuz4inV8xLuNQ3cFnecmpgvzGZw6cdu2YvVuP1rcecX5iRWQHGw8k5r4Vmx51yfjM6PDSC1qvh",
  "key6": "3KtsUWp4r9XJrWUcFHrHvfFH2qinLDc1Pba32EbFkhcDNwtmfjsPkP6XFPvRHAAB4naJpo8pcyQjQyG9uhUKWKT3",
  "key7": "52kLRchcMypPfGa1J4dSpJLvhVu6Bu469aybnuF39WSZFJ5tM7pJyZikV25mS5Bbpaqts9oybN1EPrHx9uubLT2F",
  "key8": "yZC6Ur4KHdfvjoZkAfSNUQpaWptJqGZpeWfdZ9oTwLpWyhSAdjHHmtZF3uejTDhthqgrHQ5QvN3EzwGLXeFopCp",
  "key9": "3HDaPJtyfRWh4fU8m21ozXpjM8LXF8ornEAQYZK1RMYM7U8PNCxEt8VspoN3yMkR8gKZXbzwGe6tus2YCEM7JaAH",
  "key10": "53MVKAeUJpARXqKHDT2hwXf1rkq8QSq77aJpNMQbQpXPWMSQc7gB1UHcVK6qT7mh8gzjJ4dJQWEsQhGUUk9iwjZV",
  "key11": "oxpZwEE1aqqXeru6ERRSWnBPtSAJb3nrKGHsVvqcMVvyJ1gV1UZrokQT7tAH2BT5SNTFQdStwoBR8LjBh2tEzQ6",
  "key12": "3GpEVnDATvAL8n8Qc2q3mX8cjubM9iufrV7UeHPiTwxSkfxTzWMr7GcATshFHKFVGEJKGzj6G1ffPTXzDjP9djBw",
  "key13": "2xtmEgnw2TRDSbGQtBGsZFVZ4763JDyXHvegdLrcbcnHLZ9PFfooFdq4ToyMAipcBLejPehW7PxjojzyWMrVSuhn",
  "key14": "H7su7TVPUADpnmXJGJ6DA79uwaV1ELsheaWjk9bVq3ddhqqHF5WSa8rWjzCs1hbfQuioXY9nixSsaunPX8gtYXJ",
  "key15": "2BwD4A2AQZTP6TH1QX7k5hk1528gLMo782pQnQyGXjd3r2tP8HgYyMfmVoBP5F7RUrpjPXPd3QTAxHPohG5bsZ7V",
  "key16": "TVyZ9PCM6Vj1CFxTQWRqDgvZW3ZtP6ihNikckj8jwyrbmRZWKs7MktR3rPC4zc7Nipc9giCP5zWtYFXykvxfCJJ",
  "key17": "4XdMxVxzVjMku8G2hMy4JWuJHDvPLXnN6KpAAc65HGXonCVN7JDG86fhQ5fGreN6ZuF3xWThgN2VT8TAw2UzRryq",
  "key18": "3ADch1sbBjrFyNemXBt5XRejsEwSe5yesgQZEWAZYUibdbp97X8JXhXjYmzoYTYH6x3juVFkZ4bS9CzcEJCejESd",
  "key19": "59VwuUTUfwwfnk4B3w2djtGTVHxDEP2aY7kuEZC67AEKXvGwxNt3GfS43Sy2t6Ji1avTW3JaFuvaiwJV9Nim2qY7",
  "key20": "3dU9AiYXTXQhSjGPkyMacWMuDMV26CWmnmaM8DdeLNAZMQidngZSd31TKcYrReEjsbhzSousGmLc3MxygEE1T2tk",
  "key21": "634dre1nnUxWKxRzkMWXqgKaZ5vbWczjam9fVSb3kvjhvRq93VXoTuyoyWXrrZS4kcKdpbgrLwcSnpnQL5SynKA",
  "key22": "3KssSZTimDHWxfxsLcqm6uUHwKmsZ5e2Mh9wyu1qbaLWuLPUYx55FJUgvc5gXpb3Te8RPPoY1vA7a8bikk2deUwg",
  "key23": "2bpEWt5Nebmi9HrnccAQFXzh65QTcwLFftHNiRe5kYs2ubF4y1pFph54Et1Xucitc2hVqUiEuZBiguBAUwKL9BBh",
  "key24": "67YTtszhRobndLL3VEaANtqZz1uEdSUE6RsK63ArS52zosfx1kX5NTQxJbn7kfHb57d3BaWZ2dZmKNewsDC4AzCw",
  "key25": "5QSa3sQSunKZPqK4fro5gm1n8nZNn4ndJMoMfwwkxRSPgWG1j6HftmSM94CS4mUGBrQ6De2orXujkeH6joBMBpba",
  "key26": "2g9Xm34Z8SFEYS4XeSZuM51JqdvJ8H3UarnoC4Hq8BUreZ1AiXKo4pUb8ctXrksSpiTtv3QeEJKCVCkGxJWfbEQr",
  "key27": "3hiHDzuoZ2qUhaUs4grvVztY3vFg7GmADqEbGL8Ms2cnSeA8bAeCZ7ZaNhy6xxKNzuNU3mPZhk7x3bHKRgwJH9h",
  "key28": "4f1RqDGaVF39qpxCLz8HrwP7PUhcVNquFXhreRdYkYLm5JQthgQUmGV2dhU1XdAneqJ347kxb2QMVA7mn6J78hAi",
  "key29": "4dwTJ5exVDMWUuPoSHi4THyvfDWXz5uCgBcvHwbP8byrbrXYUiCMGtEcdBLjuMBU9rqGKFsvF5mPG62XK1sPzep4",
  "key30": "3VGYMYHVtj3rLoZErshCMrLaNvPm8UDse86prpFGTc1wA8RhjcQ1M2rF4diCLdEWsVmt5PYU1hHtkHm7vSFpXvtV",
  "key31": "2BZrW1uHBWEJ5j2SAqKaZh2FZKgoygApRyKVcfRcXskiPCafySrVeiThysD3RLME9rRhxX6jWisfbPCurE8Eporq",
  "key32": "3TdqE74Yg2cAsQCx5ZtkCd3SaHWL1Tk6z6TkNKzs8jxWgQDxEikXLi9tAQyL5cn3i2EZ8DVXDWtE9xicVhuVTLan",
  "key33": "TYAbK6us9X1q6e3nv9ST7GujQy9TADSyRRUM7wkbB3dcGCWFU4sDXYc6bLiC8Gr45UxpxVMCtfM465h74y4kXfc",
  "key34": "5UKfzuk9pNiV5QKDozDrk6bALSqcCmr5F2fsKKP2BoZkQFWAdyYPRfKkGyFP82G4Z4M4wRxjyk9LjvFkk3hdnt9W",
  "key35": "4UmUq78EsVgpUq3SCzv2e6keTtxpMsq1D8kNFL4X8XAUU9XFiaXDsnz41LogPLgNvw7WbYcSsfiGAgYY7bB41f5w",
  "key36": "2D3PmVQi6QL1xJVxwKxbU5evPL8fznKYKtowMfUSJyYbdRtQwQHFTNHkynyAuqzT3Xh8QA4cRFnoYZr3cey7d1si",
  "key37": "3sMMxkTWqbXBYnGTigShznjFW354FhcE2vPY4RaHaf9xrf5yDXRYqNw2nwZ2ynBrtPaPGkN9EeC44nnAEEkAKnNB",
  "key38": "4jMCGv7QbYGCh7U6rimEWLCFsvDRsvcFkzXepoKE7e4x9ZJspj6HvNM6sUSmTSvcJoajuJBgyKiT8ZYQcTjxJfGW",
  "key39": "Sw6KnAh5Rt18T4bnHVxidbUaMWQgav9p2ouXbPoyRkMgqz1qrTMykfAJkA7joUUay8qVnAwhUkcrcRN9qp8YJhy",
  "key40": "nKkuDDSu4d4FPVv1TGqTh7DHDts2ubPcKmC4fnfDvLtFfnXTraKytRhTQgELRLzTsPN7VqBvVJznunWQHs4CQnv",
  "key41": "4sZaX2vDMKTTbxjjYCQcBdMB5r7zE7yhW9pGFZppFUtqkAAcJ473A434m2AkDkGyNhojUqDGE2oVysBjAvZXb4ic",
  "key42": "3Mb1Hkcs7KgHqQwPCmRr1NU1WBqcAFuDn2SGCZfsNaxQ9Rg7RSYnQ1aZEPYp6zFm7Z6o11kMFsjFvWA1UBmC7MvQ",
  "key43": "4BVbENJVpvmj5QeyJbzc7VoCgQSEshdf6zJNviEuDZGtPngCjzHYZVDTMRi9rwTWi9toquavg1YD62PG2AbFigmE",
  "key44": "2Y3Dv3eF2numxS1EG2bRWAdjqtfTXf8QcNxidGGjA1bpbE9hWZzMNy3FdNRdyuGLxqL1G3V7aGUanfM4aBkMpLUA",
  "key45": "2uSxSf9qZmLPgkzgrUq64HicgmeyYAmprTjGg5F1481uf2V2LnvYByDnKa4UXs4fWt9BQhCgUHS2b4ScqMvdFKiE",
  "key46": "55nB6FSg3HbfaJoTTvmfCh7buLvXWbDWCctNH1QeBmzZtEb96ooy77VKnoMvwE2YqskEkxWizQbNksS9sAGiDvG8"
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

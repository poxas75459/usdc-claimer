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
    "VrHojwZ6yjHckxMPaLYiU1myYLvH91vFmUYH99EHMSSLaNemmNtaoi4yQZFmKyfnhwjzCULkPXZj2UjVZeqpv4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Zv3qZUm1xdN1GzDedSnQd8caRiFndWRy1AurP84BtQkFwjgnFygxwZfQhFoFZKVv9CSAyQJEG9BfjKYq226cgm",
  "key1": "66rqAk6L7vqNhyTkfWPMvafv25x8BBoEAyKgirqR5jjcFwr7igPGNegLoRC7amZZ2M3AT3pXjrycQCmrH5HD8bnG",
  "key2": "57AvUMzkV5rvTMwYSPbo3acT2CqLSrUQ53FwRGtsY4nHiLNPTZGdKMTCzLdEMWBfvQZGF8gtoJ68183HeDZuP9Gm",
  "key3": "52DxmBQhJxd8c9FQ3FszXKMufGQ7TwBptSrqvKbM4RmouGz9gFNKV9YTryL44kxZFKec1KTSxxf2rHboimmoZkq9",
  "key4": "5Qa7txvh6kUt7Ab9Ywe5bDsk2zcgEYpgqbGAr3jpVY3uxei2hdjA3vsJZAMdKK7xs8zsd2nMguGW1GgbuHkef28C",
  "key5": "22j9qbZAm4Khut5K8WYMF56L8Z3yGVi8TYvb2upLxmdz2eYKwQo9e1uh6nXcVjVzieKC7okzxEM15dtCCU4LeVeL",
  "key6": "3bQjdCKeenXCNwJHDX9zdigddcdjj8WVdVecztZv7L5WrGC1XLiRJ1yiUWZymSoaybChvErwj2hvivAhZFFm4oKq",
  "key7": "4JaaqnNrhekvNRKWhhXwtHepAfMcoS2rn9kUUfW3Wc9iznwLLjwL9Jja3GmL4fabHECm9QS4eDX4DaMBCkqMtKCz",
  "key8": "5gft7hLnhpTSdMy3KSfkGJRNgCp9sQTCeCh4UdzYoQk1yE1f2btjXsYvAAYaed5f6MKZzyp2TdQZi3faiDh3ciNg",
  "key9": "5pneSQVX4q3kQmLjpqivVmiS1pebfgWTvGbSd9nuMm9L8QJn1NHVzsC68HQ7GZCHbZXi14mEkAvPMLhGNKVXdStg",
  "key10": "wp1YM15CXij4i4oxYw1Kh4e4uToj7PRUBRYAHrJErSpEv5QNcXFWyYKyyyjECS4yPn3z3TEQjdxMV4gURJKoTNv",
  "key11": "2geLWwKQsy5xy2Z3TytWyCobumprZLT1cCScUXhZ8P5aPWFZcecQGZQQyCzmwWqCLBPtyAka2aSTKNH6CMYRrKXH",
  "key12": "2ghUNirEwmJKdH5M8aSjp38FNgvTzS9rziqN9YCV2NY1gjqvKB2s4bczFKJgycGdj4ZrFQ3SrCMhhRj3DMdbggkq",
  "key13": "CmQ7d4iFnkCMKZ6fQ9BgdTUQKcE25vQK4juCETJXXjedfPcq7yobKYu7oZQofWWiJFbW4wpp5bdN1952HtFvUuS",
  "key14": "5AhV7d2fwzvjd9xsWMQVxSsJUwctR1uKZjThz5DbsN9f8JyYjwWfBjTuWVrqpAuEs2NNBd8dHfkEWcRCwoyECeTK",
  "key15": "4PRRQyNGTR4cNBCUR5oqfdJyo69TcGBJywLAWeZUisXtDnNhkyV9PZ9H751Ubd9ohBCU1dD3Ja2RmqS7mr1g2GyC",
  "key16": "3YNe3qGbPX86ATMpa3d8mEEQrag2f6Er6ew5FDfgMJ3TAk9mZCgHh6yhLUfYnNFXzq54vAAm2mrgqe5Q751rBdDy",
  "key17": "21eE2M4cv8b7RytjFK1PNfsTmhXYcsUkr11HkykonpDw1aAv2uBNGSngd1VdK9TPWr3D34Pj6UREomzJJkKAPR7Y",
  "key18": "2Uf2ptn7EvBdjY11Lfr5W1qsPCd8uL4WfsR7XAcPXdHWx94HGveJ9confxeqXasi1hq2tg1mtMoRzh65kmnUX6RZ",
  "key19": "3xCmX812FmwvcP3cWJcdFnvvmhfZua2JBe1jsmY4FWtiKGzazV1jvhfJwtK2o1uvwascnADEpKWHNNh8c31FQAgd",
  "key20": "2Y3byPtQDcdKWSE62uXSFh4h8rsWYYeo4hrK9yAzuhvbfNmCytz37XHqLiqq58xu97xr1A1pCkoqSW2fzctw5RRN",
  "key21": "5ffUMeAYtheoHn8LZShRHEeB8Zr6DPPPJ1Xow372US6aCWXaP7kC6E9eQVkkoPbxVYJh1qJB57NC4CV7gryk3b2M",
  "key22": "5tWvVWPhNbprPggcW8v3nm6dw1sG9qKyRpLfRjtF6js5kdF9WRAf5RTfMFKgKwzdsABujaZusRtE5wkEDiMzAgJA",
  "key23": "2apDBtcJBsdoQNXsz5pGqSZoqChLXbij7vvxnRFLyS7HLZytjWrEgjJhBxEGRuYAk3UvicQ3uW6YQqhUiW3uatki",
  "key24": "3qyeZstBJhDYbZuZq6r2KUyUhvDChtg17Hff3M7QKaMkjPQUrYHFmhVrQL8n1m6QLWecxTQD53tfypdbep3UmRJf",
  "key25": "5gHkH6tYa9xqfoNQFjNnrVKtwP51qPHnhoDszB9E3LMpccmMrysEWT24axEUdXYhqU7WBycnwzyauVAoQ2xgfEaA",
  "key26": "5oGRjZmAUas35ocZcPDyJLraBLTR13natbRW16fVnuw9yVVRKs8nM8BX3LvTaiXAwfmJESnt4DubyNxJH4FS22Hf",
  "key27": "4hqBBaStzVvUU8jjn9cmrAXJnryAdNkSZd7uNZJiRJLXxrh2eZYfGonFLUQYnQQG9mJVeXnwfAVYFXJo1y8miGz4",
  "key28": "2NFeSLXp2J9mngryydBL4K2vjm2Ayv4pAHKCbDqPGHwYnn5rgP3Rv6JaHauT7efehjAJHMoDkF9NMPM6iorTpwGE",
  "key29": "4onoNiE3yfKRQ39jjyQTSmHdjGXhCJ6sEg9GRPfxQrLpaUyLqG5SDLVwwRWkWatkc7AmgBmePADuYHxMV1C5dqBL",
  "key30": "4D1cXsWCtHmnMCT24Gk7savmbtqpk5Gffp4mJdpzho2gdHVE41VQZdqDdm7HnbTJXFerKxUN2kXQpC8Xi1naXs2o",
  "key31": "2b9QKxwAtuVyY9sgfPC8PLcrLa8cXDwPyWjp9TDKwwvBaVP9BeCxEqsKctTpHcW6Y92HMXyUAQuiQg9zUNRPdkyU",
  "key32": "5QaeGRDdAPykti2JU2Bfh5NSzgEmkqXPyXcr9zevcNGLCpadtg3LugmittSQo1uzMCZedCjxoREh9An5g8FE9gGh",
  "key33": "5Het8J45XtEugBYihb2JJS5N9i5zCynG6FFx4d17iqrezB4YN3pbAU9u8SS2JPKWuMJ5P25PcM1EzwYnReH9ACFE",
  "key34": "5UbJYKbZbVpZVS44eh5fur1wD98x1cq7ZGkkQ82xk4DVTrq1DfD79C8bazfbUDG9P9y6gUs1CeueHAepMHF8e6Hk",
  "key35": "ToWm4xrPUnKkvtsaynkcyFrZSZgTARG3qYWqEUQghMZrzSUGGBdmeeRA7ucxDTLQCnq7iSXEiDRs5dW8gJQDuvL",
  "key36": "pFzkRKkkav3X5DZWxnGuyXeXtH3PZgufgCw7XtoRT58rQ8Z1zJojtzysWVibRJodL5mP4mF5DT1XwYrgCM2pA3L",
  "key37": "5Fo4XmNJgNj1CahQLbgbR8CaweVTiUJcq1EGTwaTiCr7NqXinFpGC6xFTZN1U7SMyoEosurSKWA98mtqAeEK1BMx",
  "key38": "4CQ1dJcBMQigCKVRP8ocz97LsXvWGXiMwqFP9UPMy2GBCH1k3rF7UbNRU1EyEu37iGiWnMyuTpJksHz59wCcvRPL",
  "key39": "5KA84xjWFkxzBdKfSfd6hf1kyXakBS49ivCo2gqFdNuEFAxTxJ4foFN3vwfQkDodBtD7TNsVGVv9wsXADYHti5b",
  "key40": "uR22z5A22xZvEwbYVNTFcS1V5odyZqkFpEMtHzsvoJHVJFRXxsYjWBQtr5vPob3RsbGdomLuq1ETP7BjAX8CLsz",
  "key41": "4gnCou6eqwX9FFyPCL3hXSq1Y1aUvkSxJn7SugKdhxwXroBWXtNBqCkhgH33CtW1tujec4N5t89hvMbtc2bGawek",
  "key42": "5Twu1jEMYGq6Adqxo2gQAxPWznyQUjGK17r8wEtJntQJRYCFxbmp9YaQsQrXu5B7jpbXY94uhBzb6ztVE8L7bsBV",
  "key43": "29TqDRJGdA1gaLU1LqHjS3QLVngXsq1YoqtLK54tFjb2aXxrZSsVTKHu3DeLPkSaDREN5wM5W5VwrDhP6ftFULNm",
  "key44": "5BE5aAx59zYcgZbCYysh5RtcAAti1yCaWfNHWd9VvoLbb4B9yLYE5qMHXKTLEEXm7fEDJ1246kjXeW8K52scrbC2",
  "key45": "AMTiXV5LzVyXm78xCZRbThcYjLBapAFRH1tdyTc7WE1mk5Zh26mgKNt2ZT47du3M2gJpQYmszPUWjp3jqfjoBBs"
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

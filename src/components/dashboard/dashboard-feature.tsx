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
    "38k25RzBJ793JChKdTdP6LgY5WgFFmzmGmMxgyftf9gWa5WmcnWmLsf2dDpzqKiM8i5ytfNXY9pu9fAfJHQQeNn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUbHBEQnRV4soti2iUNg4ZxTvJQRGKgp41aygkoeQiGq7SQYKeqDooJYMbFQunSNqzeHnKH2P5xX7Tj6jTHrsTH",
  "key1": "29k2dim4xuUAFjVLbNjFFQ56Fz9tJt2xbaQG1SbdEBLAwDb54HtYENhafWdmdgYwTqpthkcxSdQLDHTkRzwx1CoN",
  "key2": "2PGg8AUMAsfqxXqh3gorwNRhQSbHkdcwdDToQZJYs7DbE83MZEPgexLezvXnnFSbqCUKEBr5xYp6TU7T9LxFaTZi",
  "key3": "5uGLrieNvNZ1t8GRvpkYYG7rdfY9YdZoqKD4BZj27yWisXyuL2YCRHzLGc1qz8WyQXUYM1p6pFXNdDWDXcchLCos",
  "key4": "2GRamC7Dw8SEzfnCwPBGfm9mZXpdBugz5XuUwxURm4o6Koi5vhdNHABG9kPaCw5uWxdzzLFFXRHNE9bUbuo1Norm",
  "key5": "4Heqksxm1LAiuN8aeWJ4psHxWaLgvfusUTNpnTTDwEsutbyK8djYpEMGLcmmUFwnpNUKDFmPTuS3tvcyUwo1b7ct",
  "key6": "5mDtzxatgwcRNeqwifDaoux5AEG83ZKsSfL6hTUUxteNs4wGv36PU6gPGrcw95mJ9pdgixFRTXpUTNP8dZPMB87t",
  "key7": "woN5ikCAXZRzqrQK1zzGRSo9MVh9yKHmooS2nxoncQwbu4WtAG2wiVRgvRfqPNA16wdHbHZ3VzzCpnGkC2yeWsh",
  "key8": "mVbPXomULqGneyurJu1MekAH6ZBjeSAv2dV3CcEkJ6zS1vFaBKvZ8CFFQxxAP3JDsu3EihhR3aqCfhbw2PasbVF",
  "key9": "2ztmfBumysU6rbH2CZThs82wHVa1zq1gjmJieyUnJiNsZnQ2Q9hoGYkLAYmUARGiu7tPPnEDbeyz15FypggWMQ1o",
  "key10": "24AkM4rhhGj5mmTNMWssdUrwcjW4DE7GY2fWpTyB7JXwLDLmmEd4fE4xaNnq2aCqEpUJUGWMQei6eoLwgnWnqPKd",
  "key11": "iNVKUykipLYEZmvatoEjomNKVEjY15HRRSF33DcyndkhEQ7ssTbU6pPXtN2PWqBEhY1BDkPbhM9qdeCKcJJbcT8",
  "key12": "42wCaJVhsBEKruzdERx7CWUcZU32xm9rjRXfMJawRQbWsGi1rWeMHajKHs935YuM2ujHBu9rcKgWLWQpA5cdpJhk",
  "key13": "3ymG2EsrPP135z3M4bQvbgEarkeRbhdETKKxvDuh6weDH4DTqQ5LyHTrskhfkoqS1JG74zsFWWY9WKhBuwoodbsy",
  "key14": "3yLueLkXzPjoqnmoHC37Mdq7eKHgfrYfG6ctPfqcuBtgEZ2jbiMiWfbkRAUiCTtVeh13ejmBkMpDPrx72VTPEd9u",
  "key15": "jK24vK4u8SpN5KFvDMbLJT9yThB3Z1ASkChD3hDP2ink6ZSKpDjSEjUYoQZgghwsfcJ1WaT3BuUmqH8ktwanhcn",
  "key16": "61j8pfmyoD3Jo6DZsjLCeP3NcgzPG8tgi9GS8cqabqo3QoSvPzNLB7R1yonkmNB8WrR239Kkx9Za383ck9oZZNwn",
  "key17": "5eoyEjjFZ8T1JjdsWqE1cEXBv8khCMcsohP3TwW1uEGEuvz61NrEv5vZrkXukQra5Su7jwLgjfV6HgGZWuRibEyG",
  "key18": "3fRfpxHAA9aftXreMNH3pf1Ts9j1m2YPC9FbPBuKiuAGR6ym6KqWqKJAstnQpGxqeL2uk4AtJYHQazWJxQgjZaBw",
  "key19": "4SB3HNYxMctjcoFXm1V7ne8m5AxxfZseGTwLt1X5wo2JPrAmdnQopFgxvWtF1SiNSqckXihwviz7iZT3urZpEwAk",
  "key20": "3Sagv6mr98H4nftUzaavVaYRQiSh9h3ZbUJaJpeRjpU9JVchc2Y1uqhShuR7PNrsmJDU6JNGSxvY2n5QNQwmjcTv",
  "key21": "3qNa2B9wP9jz331XTAucx7KCyoas9r52VpCms8qpbGk7MUQNBWtCkjec7VKiu62SsL9Nor3Xprbg3dEb4fKenEKM",
  "key22": "63U7peUqKSLt4RTxGA9CKmGJkktNPGETWNDG6Wb5Cusb6QqhMckYSVkjbPqJ6kysZoAUCemk6XNfZJ2rq2LBwAYs",
  "key23": "2e5ZbS88mVX8JPrpJfcocQhgDNknqmAMJHTgLCtzkiuqKj8bRAy1EVox6MzCHpYB9yixKcS75QiRbo7oL61TgmDb",
  "key24": "3MA15FgS2fPu81j2NiXx1nLkNByWrXcE749eVBJAUNMUE4cfjdhL79Yna4JivLCHJcCqwdvEFgtX9McspDXGX2ku",
  "key25": "4hCS7LyqDpoBWWz88JpJzgcsFBJmoCnFnnQhkmzNw3osUhsLmmr4ns6v4hYqq4bUySGcUQr6bpVeDoXfHGqkVypc",
  "key26": "5TaYmh3VGETPw3BXLKe2RQL2wF8LZG4L4D9Xp3187eBDDuKr3ehYMo8NQNYWyMshL96Piakv9f9jS98kVYQPQ7ba",
  "key27": "8katEhVg8HmM1q86JLcsGzoRXbeGs6p6u1sfUpkXDVaxDsHxLD5otKqZkyHwK63kEuQEJQxMUXeZfCxpXR4pPJj",
  "key28": "5K1BHCtCSzhSpuM6Vcq39HGuRbtFyDHhNH5MZMi6xYkj3TZs9KFkSWd1RTo13g6Jnphu6qt3ozgHnLdZGYdNCbqz",
  "key29": "57z3prkz2qunL8Bf3dJ4ZakN9JU193rUxnFfJAvyBy5QuRa4pQoavMi5Ld5PRBDRBfro9B3Ls4TFDScB3LJ2dTvM",
  "key30": "3AmszMaSYqyMGb9owu2GUrSQ6h4J7EbvbuYAmjc9AvPA2oGoG3DJncFtTYXcrNS3egstgGnkYwRRyRkfWSJcAzts",
  "key31": "5wnUMARUNsrs8RrKmg5zYJYwGzZpiUT2gMmHP5MrrPUBcuAk2YL52g2nMt7fDib5ZusvH8TcJH7GzrQUvW3UUsCA",
  "key32": "2jEVdyKsc88yzZvtA1MJK7srMzdVkX9E9rQVBch7thuxWguyQNsRA1XJGKTGmKkqq59a8V63mTgvRvvCFGRmREYV",
  "key33": "pogq7jgmgB3TvoTKVLmFYMnDYeShdPsL67NvddjVowPdToXqD66AvrcaUHR7z1RGgfU6enLZdKkVEtGB53btCwj",
  "key34": "rvQLu6rG4fvHhSXm55jDAWwusaEaRa8odcVAVCjJ6oQD8PxDSy6z565Zbys7T68USnw9qwGVS65DaRCvWD7fa6q",
  "key35": "4xZ3yQU88EebtFN4Z1X2vrLnuAdr6FR7E8r3pBxph4ukFxYCYMTSUZxvmyTPx7UxnJWu9JTYAZJizqaFG8sSSVa4",
  "key36": "5MM9SMnrmXcaZCeyBAJZvhctE2V9T5kEB2q2rJwd7jouB1pUM78oFpXQpRzDYfcrFVMLhFGJW2H4NziJo8TxDRrU",
  "key37": "28QFmXQHK14fvdSjvFiFLqsZRFfvSXtDbdJZcFsvvhwP12sw9KiMJMBKKFg3zc3hYNa65eXyvnKuCyzrRYPVhwCf",
  "key38": "48L1LTxYZcvkvZit9Mf3AGkAajrPGiWVJSeSvNb2uVZzvGq7A9ZKxiuehXpmFTgNgy3KTw9X4N3QxV9rFJQFDKps",
  "key39": "66mhKQ44jfa4SAWNwkCQME84FBGVfVQNmLeyjZJSV3g1LeRxx9CwZh27v1yYbULFLQMiJsvXxHVGNzwKpcjdoFyZ",
  "key40": "211QqcxXosxBcTcsdCU15y6s2CKYmWd81i7jpBoaWQNDq5yLHFiQeLtPcJQRMVXUKby5hGRyrJqpnLMLZeeHbCCe"
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

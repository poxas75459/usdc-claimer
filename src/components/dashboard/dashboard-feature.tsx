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
    "Nz2YzvofTD7iii7FovyMQ8j4mh1WFSfdTJ6rAt323gk8W6UgCPkyywVV1uJQqga6Y4LmVN7LnYzomhJCaxjSUS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPHPMb7LdRQm3bU7tUWEBd6qqL5o99GMBXbn2JAAyFYmy3MDvRq3FUHCZznXNZSfBxfCf3V3YuNCV9RMvdfv93K",
  "key1": "4nuRFzLXcbo6HSgUEJHPXoGeN8fKKdzUNabhPmYSAq9fWAJ7x3HA9A5nJSqT5PqbWQiRXBiX1BgcqgTUvqDme1vt",
  "key2": "A76a5591zhJ9QzXq9pKDj1YeKMzVfBb9Y9ySQzCGBqipAqWQiGPyf5Eu6wvzSNxdt5Chkx6zoGJofqsUAJ3yXhx",
  "key3": "2GzLtx1hqnTxPAtKfzQFcAvujTvgF8rMH1KVEfAhY86RANC1TgNg7hhK2gFsFpMNW12LL5QAZszbu8GRpR2Sh6x5",
  "key4": "36f8EdeGoNUYrqY5t5TQpth3cY5NXYth1RQ9JR7UwnH17X3C6Urwec9wSdXLGxNvEMyyquKWX1XCQyzVsXPdDVo8",
  "key5": "2nee6EQ86yJD7XLF7YWrhmixdDFFVLvDsMrEo9Tit76UKzaMm3ogK33sbMnphNMcw1ah39kQMzLHYC8NW625EirW",
  "key6": "4gYmeYEisFhLFQ1ptySk1iVtQco3C5Uk41DUH9XFA8TEeYYxoqN1o4wvFw2YxR6r6jM5hiQBV8Pcdi7qkezHkasC",
  "key7": "2VTppRdYi2rCKdxt97F2B8KXW33tdKBvgR49PwMmfQ5WUW1sk99DTzYMuPD1zZ2S58NmTSBjR68WiqiNzYgettg1",
  "key8": "bgexRofT9zcan9TyEDncCTKNdc2zwPxYHdnfmPdaRPxKPJ89YMVWUZbNa8amiTvuXpmmHhKvjLvnKYZCuwHtbSC",
  "key9": "4CNkvbCiDdi46prUJp7SAsx641ZHpvGFe1jAhyjJaRuDtzgVba1WVjEC4z3Y8JTUJGobcwxKTyeGQAJtAmusp7RY",
  "key10": "5tkzKrbuZnL48k8fzoMJJqDczSGh6MtkB4wMgabywp1RUPxA42JJfm1fG6SG6etbdoHAyTzcTiWQLw3h9TMWpAs3",
  "key11": "75AfZ9qdfqDqTW3z4rZRsLSY3XkaH122hPXhzfx5khXsMRqxzmzT5Mb44CHkeeqo24RvCh5a5VJm3KGTawH3SqU",
  "key12": "3heKsGeQNJVVYA24VpcDQC2NN3otxoaFqDLoG8KvsNiHsfmDfjTPniWqpvHrwEjsofX5BuHWh53PYwzZH8eKBGHW",
  "key13": "w14QwqtBjvRNCoDjpX8U7MnuXDvzteP9eGR2rgv4fFBRA3apEuqjdtP1CpEToUipg2N4UgCRtLX5FYKy1H5Z7VP",
  "key14": "5MXTcpeJwgafrBofyySyAduQQsaQYB2JEop6G9BnnXmSCAitaBeVyrW86Q3YRb4APq91n1J1Nrujhu2GtnENWBZZ",
  "key15": "3XDpEzsSHk6Vrv4rnrXLtcbjLYF3uVkeYJYEYAd32y8K9sMiR4JhgJNG7uuknL6zKS2Zq5DJePgtPBHyqsdEUhE5",
  "key16": "66o61BNnwqU6czs26GnEKNrN2abkEcHrFoeN6SkjJB3CmcXmYctoLWBt1YHPphKi22Ayr8jJF4e4XGg1oXq8VeU5",
  "key17": "4LWeTc7zHLi4fNVAH3FDhLSEFNj7iDV5jk4ZXWH841Gdz6sboyoAqLSPcbfrdnjNNcgrNgJyUcBb68khzDyHRCE",
  "key18": "4nxuMXiiiJcj1bVKdzAngNaABtBu3gpRxy123cFtS6q7iza3rnsb4t1bwtpWfX2qjBKLZ4PiKbzzSQQMRznKkPMm",
  "key19": "48z3r9d9anWS3p7b2r15J96sEcoXTfgch6eH5MfyP89ic7tw2KSLoUHfDm7LQ2hhmLg3zq7kbL58CrP4TVQiyWsg",
  "key20": "4JWRkf145FRpM1GUGpE7F8uU3XDqYHNbw3CcYVnz7Pmcz97Jwh9w6QzKd8rF5WJT7uNzeBSNPKfS7BNRDSF8V2fU",
  "key21": "aihinMQBDEt2rgxphkyozQPihZGg5hrzrLjm6SxWCAd2sVskiQrGY9dLjNW5MF5NhRwWU4CdNqg787JjK1vgoC9",
  "key22": "52NSLLd53PBzoyuqndh6wf71ccefUpGn7AN47iu4vq3XFegmiuKiFv35qhiNCN8jA9UsvoDZZWA6HcxUyEANGmAu",
  "key23": "3PA8oojhnmojThkNo3mZgDotfhHTfwWEVc7i9fWNjhDtz1wFo8UMNJqJAuq6PvGuHpQQb8BwzGiFJQz1NMxwKGmD",
  "key24": "JDaCuhXLBHEE9bRyKA2AEca9dQD5dnqdvvkHhY8oG47k4LCPBaBdHGddCkWyhD4VPVjjhzAZg2DSLcxbjmPN6zs",
  "key25": "2DvphibUVGsFjz79wBAB3u6PApSicTFoGFpQa3h8HAsLjg5es8ZrhbQDYZWNBMUeG55FJFyvsW4mZQRqorfPzFcK",
  "key26": "3re93K8QZiPoJCnHonyp9XaRpuneFNPxK6fxmPfFF9c9RTC5AwVCYy1ZChjNBQU5zgs2qoZ8aXcwMq7pEZuTexkh",
  "key27": "53NAf8roJ2jF271FTjTPstPMXVudeFiFWdMW9SR9N5U5gbrBGMS8r4VRdQGZtpnaamdE7pVeei4mxiDyfsNGGKkm",
  "key28": "3vttQnaWN23dJgt7TWoSXPHaUYNXTJEiWA6UZag6C5yobkndHrRox7EqaEvdnK2trJXSJA3mPeUCARPN2qLEiEqJ",
  "key29": "3Gt7MkphESZSYxQJY4W2jpZKvAVyRUxrJnYhdixJp4GNqqPLCEU3KvkjwPVnkxHJ4km9rWCT6sZrrWMbtV3nqWHy",
  "key30": "66EeuaH3Niz4YNqw3u83N7n5AZsetHK79e2iFDFbF4JRKekBrstsncC5hS3jEW4tG8MJthVAJCnJfzFiqW5FgMgv",
  "key31": "5oy82LQFfairDuw22um2d8PtWRNiPm23nNJiDygcweZwK9N5W4Av82jiBv646nbVxvVwcSEkKxAq1cYfC28URiVR",
  "key32": "2FUYfT4vUbuAAoG9DNxVT8GfKZoGd35eEMMAddQkzgjgCXqQnJchTjGAGGyVRhM34528FGViae1FsxGXWuVP9BFf",
  "key33": "24ASzUFkVwc4a2ej6CgBdfhxNZRGaGg9H2tURLZypcTcr5tjkX8rRB4NyNYW5KqMQj5LBsKFdHefTEhQJrseFznL",
  "key34": "5uneEakdsxuXQQQvD6S2c9zbwNbHVANUGxcmDLSU89kEeMCSb89JezBbBUjamNZNvnYJLFMiQs3DamHBYwTM2STh",
  "key35": "7yi92dVeqjZieLaZffu2HbtFJRKipfVbtwBSBvWTnQZ6wzNfH8ggxKXFzVsrg5h9RLdXd8sug7WuDZxD71JWjrQ",
  "key36": "4zaRp6LoJJg6Gj52AZguDQaPA28Yy138EXS29gHTi3XWS3AU5G8ZrAYgcWCij9BP96sVJZbeakcG6zth6Q9wTYdu",
  "key37": "32NY3uXCaw3uZooHYFu13TMGNHeMhkkNDdqnSY5BTeG39XKrz2aHro3ih5PxVHG7nB6MrYwpsEhWu2gdvjmpXd5J"
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

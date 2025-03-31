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
    "L8p82bF8tTQuXE7Pb6WNUaevU1WFbLNcWySRsZtqpPg3XJueRrpaCqV3HtUKaEPQyznrdPBxxXxnMAJ42NRAHF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uw8VaXRHdo1Poi4FK4z8gy45SLZnUeHk6fzxuLKagocXXKp4WQfF5CHFphTpW5XhMTVfYNmCNEwb6ipWbxeuXUo",
  "key1": "3hMVLPwTnDFveyz3PzKHx1icUJQ9wUPFhFiQbHAsh9UgocuP78Uc4kAoe96fwa9hYRQiMGK8amnPudUV2nd7EHFj",
  "key2": "gLqxoifUKMAETMM9ejMkUuu5QEcqmo4drEvr843P4zcGhC37yC2x9kPT9zmhD9mCyZRsvvshq5hQ6zHK1GvBQf4",
  "key3": "3BMyKTU1cX3LSWpp4aBwamrdNrdfhFnkBvXDzSsWjeMJi74mHiJGqtcALQJbQ53j35xHRC4Zfi7Wbez14UhqMsUC",
  "key4": "52srGPSqi9c2LxLdVpkTibcd9ARBgkHd9DuEnJw8XyYtyk8meC93eimDiCn6keEBL7WAvWana1rbdbkqxUXyVdto",
  "key5": "2yxrxCq3hTcHW9JZHJPEViR47zcaEAxqpfXg99bMBxaZi7ZZwRHkFWLat5QsSvTGaaDYJcsq3Q4C4xTtuCyo3wzZ",
  "key6": "5HFvpBFW4i7hPVmGLhPkrFdbgcpvM4MwBYUfiXY5FtpCD8UBEYKKpErLA3WRdJDTRSHUsa1sZ4PLqqeSNZcj89Y4",
  "key7": "5ZCUGZzJtRnRWYpbBbh4M3EGzfgqegTXLMZcydTCJg86yjAG2jy6Cuovcxzct6DV2xLRwcbF73FBgyRDJDFDBd4J",
  "key8": "p2BZbx8RB5aqfhNRHMsAaKxbYmvfCib57MJAHrKdyMohFFzQRkCe5uRbEq2TqcyU99XGtKWW3BAADGxvEUaQgvf",
  "key9": "5TCVuobX6ySgn2jNd3LWJHk9wNTpDTLMT3VAysFihZUAjqkj2mVUtQgyTsynDA5acP84f1MokRpJmAmCiXZBWorj",
  "key10": "3hprZdU8iZSowPCEsMNLc6PgqTRh3UGv5ozb5cdvPHHmFK5DyeezZoxTHwo7RHutc6rCpHoCU4qJRxv2dx3nqhFq",
  "key11": "4mWjrSyEhV4N1tV14a8Lc61JeEZMDqZd2BRKiVUkU3VodHnu1c4zVubQaxQENyYYT1VgnQ4e9SCpp6prQC7gckbq",
  "key12": "LApzDhxpxMLbKovtguEFetJTzo3iDZvVe8iVbUZmBmRLY1ehX6hvgR9nsoLBS3MW4gawuyYXdM9qqLjyYNJxsv5",
  "key13": "4L23aoKQeKYUVmtdHYo5a9J67rcZR142QT4bwgjaHYCCv7XD6mhbg2fdMK5aXQMzsQgnbVUPYBzSnhi8yEdZG8kL",
  "key14": "3Z8kryLE8oTtRv9Lj2qH4Azuh7SsHu7hDsdJEBsP7JeDb1uEnSSKeXR1jdyn8wgTqAL57BR75Jhiz4U39TLA6WMc",
  "key15": "3nMjbM8gabvMtpMdErMthk3aUgNKPhg2cSu775zFt2wQNZPAHYR8r1ipuFx814782W5GsxnZ15eofx2UwaHCW35A",
  "key16": "3nhDvu39rsXghUxHP7powG8U6U7Y1FQYDYXqysTWish6TstZoSHmokCynGTYMYmZpbTtCyqDNJc5Eo2ftT5MCrtV",
  "key17": "47jHUV2oxj6VkL2XefFLTwgseyrRTQmAugJQy5cVwSfrTVwJVyu4dgcvsyMvg1a7GkCWncaJHnthJW4Aoi4K35cF",
  "key18": "3PkEF7xpP2qBVwEocEx8sQjc7uaNcgj3owaGoQywANvN6UcC3wYxMpPhPxsZx1toVoeY5vcqD4M8k5DNeT4FLH8W",
  "key19": "5gvepLNGM2rDpuL6ybe9xe22ic69FT1A2qYjJqQePiRSBXhMgrnXCLLSD95cDgiYx78T7t491SsENjr2GseeiBgd",
  "key20": "oxksY1YjGLA7peCyyDRXMuh2pJitc4vu2Vk2rUQALEbQY5LenwjM7afJ8A1W9ho1tyNe6ATdhhAesDK4rki6Bfi",
  "key21": "2nAgvrBvxd5Px3t6md2XhWrJs6JQ2c5cDfezhSwHqmTb7C3SHBe79GMmhAQnubwz2Cm3tjhdtt5aGsnLsphVLjRp",
  "key22": "5VDR26ZNxG2fJYLMpFxxDTDtkP2XLtXnfWvyQcRfhSH6zTCYRcUa9mSmY13WEnDkvCdS5cFRKDYqc2snZUJaSfC6",
  "key23": "4rX3Lk4fQzqejDF4qwtx2XHytrRmV6GeQgysdNnrpgUYkxyyKnz5oEm9qMrDEjWMeCKfL3cbCoLV7gStRhtwxXEk",
  "key24": "5CmmH2p9PkV1SujPRz3mziBvM8SEjmjUp2xiLhkFRnMTDfoqgt1XxQ9nzBuCCxemFXgh53rpsarQU1WWvsHTkknT",
  "key25": "5YdtVCYuW3EKGY18SGCtvrTPDJm23RiHtk7FaiH7EjVBQp9rUwVnp2UEB4hqYMVk7qPwZbbReiKzpPEtn3Uego5n",
  "key26": "4hEBySL96sbskPepVoQ3e9mkSzqcv8NFNYvvWM2rjy5uXzPj894JBqayNL12aNQUfqbCoEXYCLEbBN2Df8CRmqn3",
  "key27": "4sBt7rFCboUBQjcb3UZQakXZrCs4mbpZTPTfAe7sSEVJVwmWXYZMrcr7KcwhHezXLNJM5bcYLzaZ1DGgh8LB3KSH",
  "key28": "3mYdHa1349TgUUZa2vHA1RhSWdJcGfvwwDJeAwwthNLM1tamjvYGEoXvhLgrhwfJgNTxEvchTTaJxjYMC1pz42TA",
  "key29": "4pBeTyHiiCWj5sBog5gCb3daVJgus2ax2ewy6Q6KaXVSZfXBiqisW2NPXd9hKuc4csCSWbdfrr2Gx3Y6x7qGMTEs",
  "key30": "JJuEcFmj6QP1NiBLmYj9AqpM3s8SizAts2zYCe635WU9aW4khgGT8bRExfwmTAuthNyJdEXKpPfHrtFCcxxPhuU",
  "key31": "uxJWh2aPt8XdWvjbRGzYsi3kTnXW7k5EFPyByQrqgRSGH2ESY1AcqcYYa7fvBqRYuiU8iJiNpTQhZoohiJvN75b",
  "key32": "58C9ZjuzZb6M3zPUKJ7kXKdwWnJKqdBdiLEGuh9Cnz1ysre6gvX5M6GkEdpzjmdYgcEUQcSzsruBT1oe7qaBZANC",
  "key33": "2HqHyk7H6eivBrkCYpeRKoxoQYM51QFHDqADhGc1NSfnErrSLLEYbVXxLZsH8BB3hCmwx8WBjwbqto4TJMcAE3rD",
  "key34": "XMsiomZPtLMGKTCeAEQFcTv8gN1cLTtyX23Z6ns2ZWg9UMrhGBuoTXfz7hyH8L5h9r8ja597RFvQCCEXfpkeiMb",
  "key35": "Ht7RRP3qeCie66h1V8nT5yQ21N3NdF7jqjNFjuuXhUjFQdYRcTKFv5buKyRwhnrEtgyYYVPaS6XXsVzcg57UrLX",
  "key36": "dKvzmz7Ki5fh6ET2FRg9hsgjjQgFd2H4d7yWruQysm8uPpcwe9YtDukddpZEGBMtqpXFLa99zpzhoQJrMSdUpsc",
  "key37": "3R51gNd4M1sQn9pzN7Rhmfh3v4udFGfBVNB3xEkZAAc2Ze1YjpQyr9vtWZ3KSkpwpCrTY5veb7Xtaj2u5CMcQ8u1",
  "key38": "2tbzk5ofYFVFTNLeLGkBPGGqTYELAwcNEL1xWUrwhEP1vaFNnAYU6zCuwFyDEH8QAWYHqbbXPSRnJJcFaXXhUdjk",
  "key39": "5VFR3MZs8Mhb14bHtT4J9UYoZWZ8uvVZMCEeQJXo6f1gQCmpZ4cXsBoA2GhtMNA2zzoCqPxx6hHrcJUauDb742Mb",
  "key40": "4FMgkNk6rpRCikQX9UqiuuJMecYV7wV2z62DKx7oUbqhe38orEJ6dQ3vvxUNQRkUYCLXYyaMnLWMkoerjpiTBjNB"
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

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
    "4nVoRYZxdjVsVgTkf9P6CksDDyaorxBv7CEoawcLGpubqae5Ssob5rZQdJtj55mC2dLjtpBqRnt7yFAE7VyJPiaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z3PXEcy9mDzsQ892GtSGj7vTVWrhtZLvBoY25Yuy9wDHhMg86hxinUKZJps2YCrwtEJESESPDCUp32jeGuqzT5n",
  "key1": "3eDZWJDY1Uu2z9UgwUzUE3CZvGVZhbrcXETBPyBaWWdYsBiQ2FCfm4c4E5CcL9uuubGD6Fyn8SLM7YG3W3gJaKmg",
  "key2": "5CjGyygZr8qWmz6XjHeQXqkiEAjZY9E4UZSokmnk7TwYu6DUAXo8P47D1PjLtCsuDVw24cTc1txbZdaYuZ6jdak7",
  "key3": "3HCkHXsvdHZjw7mmGpELctgvFhscMTTE39igH3vQzd3vKBxm5dhqu8hzHJ1ssYW1sB8M62byvrCXwmRKu4QtAjM5",
  "key4": "4uaAZTaz5VDSrM5Zcbt5af49kNDSu6uoAgM7km4qkFxQxScgibAdmYPCHvNMsYMQ5caMNzY7xJWHF3jUXXKuqwDt",
  "key5": "5vvVgnftmQDs2AFDLcnMXpif4ja4A55Eh97sY2z1Wk5F4LjQVSrh7WTyMCjbfiehKopvjR7QPhk4NC5mtJfqWP8W",
  "key6": "5m2rowqYZZpTQfUHoBb6a6eht94sx219tkTiFVSDfFZdxh4FJqYYLFDNt5DyaYgAyvdBo6R969PDbDm6ZmrhpeA2",
  "key7": "4kjNDMPLZHoeMSQTUejxYiAhUdm2Vpy39J2mSqVSiNtkH9Q6ZWkWfBESFVvB7MLh8p8PJmHAvbsauUytLRj2SsrU",
  "key8": "3vzgHV3FWVaD9CoyFWYbfFaLDACzFVJUzvfXnwZnNEpqxH6mgTo5GMx52q23sfzZCovcJyEFG75rK8N1ggK4PpEv",
  "key9": "58nzStoVgQkafWDBVkt5NSXP7ezm7Y9rLeSyC2usdZ1qTUNFCw9gYyxL6UjNyfeQfMRrewsZuz9MfDjrAg3ZEUKK",
  "key10": "KtSobCrNCSrqy4e8acGi2hghNbjPrCFmghbuQLjMVtYnu7nSXySMeaUh3buvWSihPgJdZdb49eo61ws95SJwcvj",
  "key11": "5NtCqrvTtzUe4VoU3A7DUTKrHNrwXLM9NcH239ShfQZv8j1EieaMGf55pUkGUt1AezCd7qMVaTkn8kpbX8KWLXWu",
  "key12": "4vAmBkRXqb9uSJYYrVqauSTsAR96ouEFbEhrx4aMnTYgR5vEUxMJbkRnpGtEsvYMhuKv4ji38jK3sCNUY5VE9Hcj",
  "key13": "62QNAmM4aUDEDXG71EtBe1rLJUqv1VR3gTyrasXFKj4Ygy4nMap2mMsZ4v3wNpHUfGMUBwVDEiNbkLyXHSjTDnQ9",
  "key14": "5vXvj2XHXJE8Ag475BYy2R9FTctBbrvuPTmbTE4eBnSGX4ZWfX4GpzAWQrrBpfht44i84Xk4ViastkfCcSyu3s82",
  "key15": "3cvzT5fRQf8ZSnJkpYszUvYothKuywyXhLPigPGaBYAW2Qqy4ZSDNTi4TqaSfz7xZo9mdWHAPDadgvRLnFcUTM4",
  "key16": "YxmmpcD5ga2Ze5e8GCscCcygQRvBajMiAWiGwDwWw64vatAZ3pqtjCnmn4H1nwBdBURqfd2JcWnTRzzkPsqFaCU",
  "key17": "N5peUczKr1zhmvetmp4su5DmL7wbwc2SoRaJ3WqfjmpTJovxG6FYiLh1kkXuLps2M3wxHQNZj6CEA6Gt2pm5BgH",
  "key18": "3FGRb9xgjNPEdMxdKY2JP213qNLJtBcNKnBcm2E3VxunhmTJ3JZ44wgctkCvAvdaedS8LTpt7RWZKkq1KohG5ruS",
  "key19": "2oqg4SzTEcitUw5xc9k7X3KmjVaCy4kpN5N4nt6MCFhUodS1wAWUvgMeAd749Qeb3XTSSSBPmezknVGNDtLaVHug",
  "key20": "kr8dNif2TwB2HRw1aeZqrc27mzFwv1mTKZnbsJFF5P3zRPDNmjMQQYX58K4jKApKgaDRmAKuyN2j4WdA4HENmLp",
  "key21": "5CFcAHqU2DjM4hewfY29Ukj3WpxwJphz2PAK3hzbwh2ALPPwNzYF8Vw2P7xXMVZYcYYkJUgHn6URKjtEg1z72Y1v",
  "key22": "4EyNQyFuTactpMkrBNhKej2vk6LYqNMqsU6fHG2cy3oFZSM4yXaGdMMvedfKNmsfgC81Pndc4iu87MxnX2aM8b79",
  "key23": "6nDcrxSDLoVkrcv6WBKUYT6wmcrqwCMmoVjD2UyY4i2MbjkZaKWB8rnoBfJ57SG4E31zvuiMExyhDQpvT16fvYw",
  "key24": "3pY3NBJb9s95WrWwFNTUETf5QKaYgX7ruanuSVm7og7BYRKPNGsMXaq5f6Pj8bLVCamL23E7je13Ha9zwuYnShqq",
  "key25": "3t9GtSP2v2RfQXkbdStmJUcBtVvLvus3VoiwaJQ3veb9GKzR3VKsfX8KBUq6WKVW6TgAtRFgTb8r525Susta8KSX",
  "key26": "4jrTw5osp6ygojNfCBJQYDzwjP6HTi8wGow3JbdTnFnXpXskHDwJVyj1L1KnC3kLRs7SyDACdU629pRyPHRLGiEE",
  "key27": "5bd5w24XR6esRtBfX6kagYrA4KmgCo46TBuhEdqVuQZjhhs6sdmQPWviCXGXKecA1oPRsSpw81fCVGmUFU4m4W5",
  "key28": "3Z3wDJ8DfRA96QdT3xKidPpZR36DcFHAHYqNUP4byQaBNp4BGhVZcDWKDYorLm8KAojzvU1bL7tTGMnCC9XvUt9q",
  "key29": "5TZVDwNCS1axusQHhBkw2YxfrEep7MxXxW1XFdVXBTNRpW5Lzg5cdDF8Re5xHuFAa9NNcXdJ6D6fvg1oij1d6sty",
  "key30": "2v4h8WzBEY3usEv9nVc8yMvvmLwsSigshHZ246fwEXKdWqNHZdVnW8BKovqjuqVPowMeLbieDj6ZYMvxXTf6CBXM",
  "key31": "3UYRDLHDgjb19dDtinZLYNnTV5rizXAiKJAKJH74HLSi7Lt8nPjNqzgPdTq7a6sbw5225GuTBC4U2W3M13PU7Kfq",
  "key32": "5wqiYn3U1wxSL4bAxJZYfEjSLr8n6ENATdMCDP11w8nY5YzynthKkMHhsef5W2g6tKgUBZaAVuYxqEermZM4RcEG",
  "key33": "wLgyimR2AGGAA1tvadXPGMNWA25s1PgteFHYqeJYwsZvnKSsZhZN1H7n2nG9buoAARkA46Fdy9CQ29svQXQb6zL",
  "key34": "upkxwEZ52gRttvFcuChsLfyMpTJYvdQmCHaCP51R4gLKAe1yroBgcSS5hAJhF7d4rk7yREVcG8iHeMWkcGM7bnp",
  "key35": "5sy34FbKVWW4ETSt2tipSoAf3XdeysE8JF3oe8x14xxarNNDjWtGG19Xw3DbW4CG36FW8NmLrkcXpAuRrHnowTjM",
  "key36": "2uqh7JtCZavUEvPrFH4UpRzVu7tbn5Nfs4bQbp7Yp2jK4XeLx2BvY8HkTwNELxN1eDAZ9ocJWTg43tbirbcgQcBP",
  "key37": "5f62rSLLEWkbY2UE2KnVU6UZNwNzGtgvibnbyFqVzcBA5Se5x3dwEca97b1F4f5PPTim3rREQPCeLLiscEKnXBAQ",
  "key38": "42WXHrDhu43VKG7CFXawvehGHuMFuFgfhV51nyJqGjtKnQcNzYAyPCDpG8C6LehehfyGtYkEoh1r2ArH2ncmCNgZ",
  "key39": "3qJ3gxA4uzp65cEUjXXoCLinM5zQWVLZUXwUngYbcu2iQvwhPsXLygsgSK1wXP7vPMFqayvedx9716wkhKepkVxQ",
  "key40": "2tvBqMFdtLxCJ5MeVtxrEoUByp6dYTisUsRE59pshC1gVFSKDT2ZgaHeKHxP7s75KVsVcRXWnPEgWCJe7o8pTT3v",
  "key41": "3ni4w6jWAoEysW9cB1fo918E1qXR98ceRxa13CPAywUPDqbZFzVAaTBBV1VVUh3r2CTJ8iitCCkouowRs6MZiJXf",
  "key42": "5zGj4Ghnqdv5HYW5k8BDKfPB3CQhSioM2VNRAiYqmBgXKTUywphh6ycMJB8nVo5TefK4hegfy3Pn3U4KrRgGZinD",
  "key43": "59hYK7ediu8YbTvnyzSx3FqYMGK6HEvtiNfcmV6oSsPsA5wXrFuKHfMpxBTTRumg2aHurExKdFUKu8hPQkqTnqHy",
  "key44": "tJpU91N4QFbar1r2YdEQubiesFxemxrEmFt1HGGzG2srz5fj6YLw4584A4PgCChEw6CFNurKNzJ5EZTCvt4zdpj",
  "key45": "5NwpnzcYSwioL6yVXCHamrMNCbpB1YoH9D3AuzDKRJG93kYVmLBpfGgqexYhZ4MEMCt5aYCkwrqgBX2TpVSheTmu"
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

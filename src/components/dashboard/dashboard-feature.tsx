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
    "4Z3RmmeKK8rHHsG9WCxHePf5Vvy6YxxLeiMoKThGK4hHjKmPKw3YCs99Ayh73b1arzjMT7smNHEi8kGjQPyKhHo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YYXx5Z3YMuqgEqgkt1BXtrrVGRLNBgdFB8ZoiUACdqZZR97UEDBhyoeixZwgYCR85LpyErZpMKixpS2gxzwMUci",
  "key1": "cF6WyxfTHj53hM1waZtUEBpcKnnfu1KB5GMvzDC7nksQqNrjRgcatzVK2g2fmpFLaGqtvFouwRJNmJYohZ3N3Fk",
  "key2": "4KSDTchmnEyaKHAaY3bmk3B9APguLJQt88gHgZAGuzB2xX1EjbxQgH6AjJM2iWzPNt3cBAAeUJPgkyH4CDZ9bfiu",
  "key3": "1EvgrFqeeNBcZU5A5GpBuk8EayVvzMPiHkiyGiDkLPgvi8YyrWvnfuskRt1gTMvSADYTwJ7Lv2udx8KbLvy3evY",
  "key4": "2C8pJxEHUYxkMDNdhepiFPN1vHGhbHv6GCLzhk8qgjFjGmkFWkod8wNND4oD6Xxa2v3RpXJFCh2HKsU7V8EeAg1Y",
  "key5": "S1XsGT1WA2iQPRTTaXVMdMqM1RPCpAwhDWg9tEQ6ikR84USBCR8NJaYcU8mqbRkoayekMCJbdHimumK5u8Zk6rT",
  "key6": "2tMnLunr9hkQVTvGkBfNzha3VWWC2qFnhW2a9NEkDcHSCEiYgGUvRHewXnAgoEoqeGsXP1mGm4zo1nwJ5Pt81npW",
  "key7": "2YKziYGc9V9NGmENZSSLag2UsmRmjS998baHVsZLxCmwymSKj9tycA4iDpLPZcSQ6i2LwCxB7CcthXgFFGaX9CcG",
  "key8": "3pLkbzZBeuML6yDkvd3pFt6ZxbxZwexVtfeze3gPBNvY2fBT38ZDwAPxjFU3FqWNFrMwxapJomzfurgeSd6xvXPF",
  "key9": "5FsotN8JNxSBSuzXHizW8kf4nqRV6W8xZzdupagv1pdAfzywKaHS1k8UMTy4L7K5WGtXtrttA5ggbe7caWbHABLA",
  "key10": "4AckuYCrfnbDziZkg6yMh3SRUBCVyfkqa5MbMSseqLZoqhZfpdTrCTT8XfZarc4aJ3iKnGtzENkrVVG81j1jD65W",
  "key11": "4MSdM812c8NJudVy9caK7SykFbtm5UPJCB942Kh6HYDepyvxAk168Vs5kAdCBP1kBvXS1jqtgyvpU2vNXmQumgbS",
  "key12": "5srYYgGzJpuUUP9wPneuJrft8k5bPgiHxEsqxEKhhKjmoFriUj1YfEhBazkjVDqNSQebpm6YZK27cynu8K6NUK1x",
  "key13": "WKHWk9nUhQWaGat6vxiehQZiTUxg88B4i9SMmAJ7kjNF4NgDeVAo18vd2TSSH8825dwKyXdNjHBupgtDxkapJ7q",
  "key14": "5KfU32yprf3f8sJoe7jqi6Y3tNA9ibZS2bw45ZXMZgSNEnRM4et4QsiDG9btjPaCwaj7x9oqP4X9rGtcP36ZCU5m",
  "key15": "4D21zU5PViebJVLTZ8gu6NH61s7cxvbkSqeteeWZ5NC7ZsqMSHtkPeJ9pURqJVzeuTYRnCBPfUuvQ3DyxPhycpkp",
  "key16": "3vgxVzU6qwo8U242gtEd83QS2BvXdA8wpiVmnVqnVDPhZkX1JAuVM5T2Lw51R1Gs8hX51QeHXa9uESbS5Zca1R4Q",
  "key17": "3m46CfDZzeVJYswyp1tQ18uU6PJzR4hJCnivNgFk11zrXoAEMi4qxqJ1FKfxhAJ6B5BGwj6x3owBJdZCMSF6uacT",
  "key18": "4v3RvmtE3aYpKE2L4iUBcXmotqcdnmCs37k2iE1uLa46gcJcU99GEuu75wJE6TKthNvL3vogSQtXfbv1NxdSGMit",
  "key19": "5UAYK6pcgnytmT7RoP5UQ4cSFEhGP9emU58PFfUfUeXLBa1wzQvV6pQs3ZSCWBQBY8EDGWopmL1qh4x6n5CDskWq",
  "key20": "3CAkWcBCF54f5aYkUe9LiuNwCqEKtLgm7HyfUoKdRidAErXPaV9wzdWXMquTaj2QQLRfZHe2m6j477nmN9QqyD9x",
  "key21": "57uu8NuxuoA5ZuBjYWmbqV44mEdpahx3rQR5dbhbeefEJ6afa9RCwfaxVRCezHz9qPEveAYQ26qCrkWZuXf7f7zh",
  "key22": "27EeGmZyQGAfQbNSLARzmWwibdtsVxe7QSxAhEotNQxZzsAaGz2oX7aesjidhbHhuMhJRsbe2S8Tx2yi4g965J1k",
  "key23": "4kHDxBAbURLSdW34swtoievuXigmmico9TentRVm3hXfw2U7qC5gboX29vRgMcGrYdauDFhcjUxqWQqzjj4XpXfj",
  "key24": "5HgpUFPGxZbB4b7fkWEWeduyEo7B2juaEhzpFpMzEjmratCR3ax8GYTaQHxL5Pz5ijHyuAGzmV4KXGcL67DCAf64",
  "key25": "2cn5iZXTp9UHmprGmg3WKFPpFBC823dr32VBEDo3jz1oXay2pTuEpHCnuSgG73JRsoDZF1EtVqQU7bptxj2U8VpC",
  "key26": "5UYWfoWGiEDu6UNJKYa63BtJejth5gPpoVqZKH4FBhVa1podT8dvpppmnxEwr3MXgc1x96mvfEhzLEKuJK8ZWLHk",
  "key27": "39vpJnYv737YGQ91gEGuHcvzCs95wTGYWw93QqA2mVVt1ytxBawtmRPVaNsM8dSYhQ7kkqMbH7JT6gM1JvLRxFvJ",
  "key28": "x6noZH94d6FoKPNz9YCA5DHUdCu34Y3BYzpDA9MzvEMA1nyCirvwjrnP5bDyYSbaeYwqa8tY7wFAoYLc4M4Mw8d",
  "key29": "3nnQKFGgXmp8vDc51EAveP2WQf7ywP82YeYKaXphfjjFtc3v2xqqVhZDkLszctrztoKHKruyqBdxrseNeJp8pYG",
  "key30": "34iSbLAp9gNZnBJB87r6Segji5cdpKkS4Mot4YVshEi7LwH1JwyYnawxKqFqGfz3qjwX3narvee11UEo7vau6oqM",
  "key31": "3ppfPrcxwuAPLT4X6S87cPayaKTC8e59YxsFxDpTXGhSS4FV3WhdVH1HjT6BQwjZ2KdHgdaz9KsA4fnaUcL5qoDE",
  "key32": "3tCL118ECohh9wwr2JSj36YJ3D8jYTrGW4bdJB6djExWXj3iatDjahx5S8BKjisLsKZGajdZSEwGJm5uiR7ojRzY",
  "key33": "2QF4EQiVVKXYZgmHTAXifmAc5U4t2qzY4CrE8RvmwX44Q6YSyYDv2TJQi88L7tszjJwsyZwU6foJRXjwxYhfdV2g",
  "key34": "5zbdE3ANvLu8tu4gQ2bitPwwPL3ExrbfTHYxEZqcZZwvJ4U6v8HtA4fQsXhAnhfXyHK5haV4VM1FW69P9RTDAUq9",
  "key35": "Aznq8K5xURGfnWFB3M55ptVQQQ6GcELvBEDnqsRtCNSfrQqpCxrDqJR2sAL7R1HmKiYpSNyTSpk9n4gE9dFJWsc",
  "key36": "621jLxjFHw8MLFfX6dXaWC6HhX7VzYHb2FnPHRjaj6xYUqZnY9UzVYQQBBHnK3sDjW2KP3Bm8Uyy5PeSiY5gEzTj",
  "key37": "HXQwVeQBWc5JjUYSu39N8qqNE1JbuYiWscT71SKed8UmZ8UuH24E8uj4L44a1eZ8wK65m6d5fZ8LmGUSpnU5RAk",
  "key38": "61fmmwGcUu6MXdrBKvDjj2Bc3cKBumez1Eeq8Ed3kRVAQon6HvZkfm7GubRcpcyT3TXwyvN86JYR4tyu8LUDBBnH",
  "key39": "2tknJVTncgSz3YW9MLd7erfhdCwWCnXqMq2JzwW776S2skKS1HpcPPZKJZkGrr2xPXWPGFpesabhD4tpmxsj8AVh",
  "key40": "3rokEUu4jYffbpiYERQCvFLUukCihy6icvQLfoCd7mZ5osY43jM6BeLEDuqbd9Eod8jqDJXoL39qGcFo3QMtMDvG"
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

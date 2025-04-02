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
    "Ar9PSHpE7XnufJ9i4JDRvMooB7zbA7yYPHi5ecxbqWTvzA7Q9kSdsqLMyh1UKg5eCGoVzhpaXMkc79uyjL7ndB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67NpCR1X7knqtBcEQJ4xopkxznodHj8bVKnVuoFgQR6LzZGTNSuhpcd1a5PXbSMTXB2HA4DksUeHudqd5rbNTWjD",
  "key1": "4Fxuecxe7rSgsXYqNbSyFDLaDPiUF4Hpssc9bguK3hMmBrEDM3APP4ezVoY1d5qAsPVJ8hurDYHwBoFT4jRUt4ee",
  "key2": "4H4VqEfVPaawPQfyAJf8Lwiy82TawueWq4hdy9hwDvBGK5ggirsAXmq3BjKjw485ruXzKh98vb5DGW1DzZJUpEfi",
  "key3": "3YfLGwe8G55AzP2aDU2oGiN9nLPMViimbBgAyvVPT2q87riXFyJWM663ca6nSeRs21g9wVASb6b6aDXEPYxRmqMH",
  "key4": "U3afHxpB2TsFLpB29TQjscKvZXxT7qbJ8GnSEULK9TfTuCuKWCHdfXVdPpyWyG9NW6fjxYYVMV1ETsp58qicW8t",
  "key5": "AV6hTjp8gS5ozSQ9bXuWautDASv3oGttqcgiJMdLoGB4nsdzccXBsQctUdUvPLBFagxxniLXUJVRW8GuJt3Avty",
  "key6": "5X7QsWgo1wJ5sMgBGebTdV2HKab9DituimnSFVp21HLqBA2BERMYmey4tPZtLFAiT3yjSq4bgDbq2SWrbEWeJ8pe",
  "key7": "4YVjaFwAWPJgPXCQ5ZXtnuY61tVTg7X3QUnPBUApoBJ1MuXtM2CW3rHT4HZTENf6t3gr6YZ3PL94RvDGo2zFAaLa",
  "key8": "JVHF73ccwnRKEVdTcZdWya54yqVa1t4rZ5bwzAp57eY1HhveAVowTtUFbaHy2QxMjo44hswWd4gna8JPDKtdJVR",
  "key9": "362jraWi8jPhzCFHjW27cTC2E3wGfc3S1CHQVSmTif2Lq5C8QUTn4sLa1wgZjvmAD8FMrHUAZ1GniN21AxDcPQMD",
  "key10": "vHNf23Q7cRDSxVFFXxprCKXaLw8fbqf68mZFDwyoYLv8ZjXDbqh1tfv5Q17dmAyuRzZAjXer6oXZA7V3bS5RL6w",
  "key11": "43oryov3b3AEWLrdGVWdLV1TsZ8CU6JYRuJ1HbqDSyqVXjHEowkpF2pzZMLUmHcjUCTMpWrjGxg5B66TviGrAhBN",
  "key12": "4JUbcV9JrDWzqQJzGc9LRXvRftGLGwrzgqNAjhGzUqH6TZVD9KDbPa3juePgr3wFFu5wSBaT33tpLrJ6CggmAXLX",
  "key13": "4TjVi5pNV1vvpKxRpyLMkq8bVbmRHc6cecdWLB4xUnnz28uYtBngMvW3yaJubRxrpqmdiCSNGs2Rf8XEQEyF98BH",
  "key14": "52JJYk36SdqJ1igdetqAYWdJUtFQd2BKWQ2s8xxGeVRumuCAhrsfEQAmuHGcS52vaw9aHvpLEhn9hUEcvACBkirT",
  "key15": "4rWvQAGRd2XyuXBkTR71vogBqBz9EMBKzoJK7DSwLUzFbBwbbJ5r5Zv3g4KaaxVouYvx6j8BmMnjwNN136oFhajE",
  "key16": "nEmPQQSnzSaji5qYVTEEEZi5e3xBLpab3TN7EsPqir9J13xk91qKDhFki1pBQCREo2mW3XnFj3Xcos4CDTVd2Yz",
  "key17": "23PbqcqiYdDfUoF9KwRRBi52iKAmc6jgJ74b7g5Q9sNrmxuZ7c6p79sd3M5HrHT8Veo5T8EzwdBL2ZCEWMBm12s7",
  "key18": "5iPMkfq5JkNhPEhXu3KNCJ5McVFwsKWPDcUphHP3taLkgcrgpuznixkhvxyNrGXzen2Mm4bckDhDX6oMXUC2cFgb",
  "key19": "59HfeZqoQkwF9aBKU7LLTM7HQSGSAEJqmp414nCH34BAr69cssYKjEVPVvHPDAiNDzPnwfN9Ko88pa4TiekiEDBz",
  "key20": "36z2TvEuktXukKhXEb61SCvwTwFFpUUaAvcy6EsXUBzactdtdCiuudQLAD5fXpUCGfpmgLmRPGkKw6ffr7A4K8Uu",
  "key21": "2saywn2dECwaTZXK5nGGaSrEkCpvG8YPGTmVX6cughdvmub5rQndB6SZHSgou4rxeahSnjnSHZSuk2TueB47YaE6",
  "key22": "2mPUxSkNwzkvx1c2anCXLKeJYUNB5Hhywruvk3TxerMeGhYvjpTsU7UyR7zhjz6NKawXEPyy8QHzz6TbSxbUNfLb",
  "key23": "4GSr7TZPH7dC6bURP8wCqiVkqijMdPs4pq8k6aKBJELKf2re9xzGtNeSj4rKZKvcR2aQGN3GH4drJoaRcGxpGrx4",
  "key24": "2DFJH3E9WUdxcA9E8bSAZ2wegU5pfSUmJprp9L7qm58a7yx7boNCeWJcGtzmykddwR6RtDLZAfgJWHAyfHwYPpbS",
  "key25": "4wprUKThkXenwGCUuLQPpbc1cFmN9e1mGMUzE4jbEj9AEyM9sSpEYU39cYmhQyDfyygfJRFb9SFYPdLiGULbuGfc",
  "key26": "LztGFWWbULRUZxVK5Csn5ewjv4Ts7LhgPeLMqZwLXpkEmL2LDmNSSD4BED9jutbeEGFBNgFQAYKMth1vP3ByZS6",
  "key27": "49Co6caYqJdBs8r82KNPgqYZmazNBQvxCfWVXiLQ2hKhPHokDP8mPiC9egxnUS3fijB1wWJXtU1ZBqAzn4PL6kDW",
  "key28": "2PLESqeUR3HcQkU11vdpsDHB1YDJF17h4KmRmgG1DMDmomXZmorfxTcbsqUB7k3HB2pysYSH9xXfQYgpQC2yzDXR",
  "key29": "2D9GtEHGKXjyaS64xrL6cfpTg6YXLpLWvV6xcyrGjjcYsZQQ6XKcmfDqdYhVznMoJ3W6F1nzBNbGLRoChC23njyD",
  "key30": "ENHLwQwT3t7GjUPEtNb66x9vmiAKEyjzq8F4HrYibDUTnWHyMEUk8nFT7ReypuNfohgU4b88w9yPG6E4wY1i6Lq",
  "key31": "5xoaAqCTqQJmGpe2ciLa7AqLSx8kPMZWeRdBkkP9z9LQkTARb967sUg4fdSYKK5yDVRENGtWoehcVaagD7iENFqb",
  "key32": "2xap8dkPg5Mzz8CE9kej91AqwxTZVF1Svk3DHPpjSqvDQzbzb39mrZdxq1CqwXN3aHbjgWThHDpWy6jtMvMkyofN",
  "key33": "5B5mjodYXrExQ9dcce7cojWzndMP24kzh6F9MDfQLq52nYx67gep2UDirPVnDPhCwwPUJPLLww4jNRKQN8vb4jus",
  "key34": "49t4TmYjiE1tbWFpoUo2w4p6PAhqW5k3vMRcHV95ejC8Sv5C4UGskip4je2TyBkDRWjCeYnvS7JsjbQzZctJb9NJ"
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

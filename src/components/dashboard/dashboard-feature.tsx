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
    "266n6ZNXnkTxNyaoKMTSaMFLDmiKc8TEQMemNQPphP47b4R9vxxJKnb3jh9tVBiT6Wcmhrbv6F6tG2sGHGWMEimy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTe43aJNW9xb7LCWZ33FA7Sg9LXuNYuJGQqmXWHCLhNftUswvEtdJqcPDahb2ia6dcdFc6v4vN52bi6LTWYrtG6",
  "key1": "3os5vG5EKPwE4mFpio9owdrtkF2TZjqfJsY3RAMJsmfeKePE6FS3mUgJLxBTDn5DjXEeLe1JcT9952V9Kx8ua9fQ",
  "key2": "wxXcVbgAqjhnmdPm9bEH7WpvLB476ch1FJjMzXF2txhJGHFjNbU4UCxygsWd5tPtBF2Z2nb7Q858EZTetLSB22m",
  "key3": "3B2eZUGuZWyiz1Wx4h3PysnMW7XCD4gPKZv17K2PYhik9JEwtKGH5vNkM7Ff1pajCchGE7QJbvYTrzsHzJpeewCc",
  "key4": "4uEWJyFuPgfK6cxv5dXycw6fTjC4tonEuJWYfWx8RgNodYznYKunaarysUPsLf54AhrvQrqGkhicoHRk9MYCgeuY",
  "key5": "2nNteWVKcYzAZYLTAveTVd4fW5HGqxkxJNCFTSsgk7kMDSsnfzYmx62bJ6banKqwPwahv8SYFAQx4nxYoLwY6vJC",
  "key6": "3tAYy67nKRCNGtnB74N2m17Gc3PWhT7kwyfkFixRjSnvUe41e6BDAae2PUv8yW81TkSF4h4i6YEhj6riDASzDMFn",
  "key7": "9uYoSiXuJjSb2bwNqhwYS67mMyNVazgwfJAwW75sx65vPwH6bFMqiJJdt8bCGMsDc2TkYwN8wbdNMDbfTEigQJ6",
  "key8": "49khwNCVN3fDN4vRb3WiGH57PVSypKFFJG3DK9jk5TnedPaHvXxMPGhrYeVQQTAonhL2XCXVfi7AH42FP8nPhEFi",
  "key9": "2TcpcUywVYQ51qhHMC3G8d2WxpNi3btjG69RzYJucja2JsYJgKYZX3HU72eDXUFbaQAsEEVzP6WThZvBRCJZ512w",
  "key10": "2Lj4W4tRQrKK6Afd7sfkWHFM3p9DU7SX4eigEXPBrR7u8xk7BZ6FDNW1wHgbMd8RQ88hpsfqqxBGR8iC7KeYheo1",
  "key11": "jo3PENVpR5T3PDMs9BLceSuZvTKBXTWztAQby5TgK5LZPmcD6vXRZNa8DtaTgZ6mKZE952xrc8H41gWke9d2XP3",
  "key12": "3uKxJfNSTc2cVpCVxztbPc3eEVt4Ub7HpLKeJtQuNdha474FK9D8qoAbmE7VxiQsY4rW8oGgJMm2gM1NdL6VzjMk",
  "key13": "5Ec9aChwMazCjG3GVMLNik1jb6rfBsqccbaZW6AwTAU5TtdhzVhH6Atzj5xZWKEyguewnnaAE3FHTvaacm6EaFAg",
  "key14": "4gZnz85Mi8PrVBQoinFZh6WfbZqNzaUsDpUP47fZxf9NRGoFfWWH4HnsxaE58yMLq2Mp5zr3sW1DKj2S3TGWvbeu",
  "key15": "4DAJC99hwChHPovnkGhJd9Q1PbYXycpAaEWWiPT2oDNXhPYBGSc9osaHXMyXJomeoNMzDN1jGyVc6NHrHtsJx1R4",
  "key16": "5MhVQx2mt3C2s73qdhPgtL4r5ZhzrawicBdS64yAB6f7QN36HgH2wMbjBLGtaKEHanBTzVnTjSsK8btfdATTbBJH",
  "key17": "HKD2psDRbhNphFs3HFLwY5rqDn73T4U8XmdwCsMqUsYVy1EkpJdsNqdygWmoghFmiFpvN7eidFt2nzHmZkW7iwZ",
  "key18": "3iDY7QXhBjYk2FVkHvEoWZJaPCsHwJ2FybWbcgTLUESWuAoeGDbS8USFaJxZd3EeTH9V8HChxLxhffvw9SJ6pSLX",
  "key19": "LgkrH9YqCZba67y3TcKeS7ETmcLnte4jVeTPJhJjg2WmYQeZnhM6SPVwg42sKxRNMWxyMJqVmvkRngEnGW9KnCj",
  "key20": "2YhFHnBvrsxtEdxRsThCgiSYeqAvKPFcH3xrAFpFELhrbM1fNBWvBnXBevQVTpsq1iyCcS5rTwUz1WAP7NNX3aC4",
  "key21": "4PzvTdAjxEM9i4jzH9NLU7R39oQSeR7tZKqTGoGb9ZfEm7nq9EwyCg7eaDnJ5UgfQgvgJdEcoRXBfj4HkbWizSmS",
  "key22": "3c5Yv7fzRTb7Gw2JTVGx8P6PTzEr8L5tD1TJcngt5trdKTMcd1hXfqmUijHSpgsipDiz5W9dRSLhNq9ZBaean5Wo",
  "key23": "5i5Z689j6Z6w2jKAui79CMV1sZua5EqCcFxHaoc9WpGnxSF9zqtbxnka7JEahPVvULayroncXCeDt6bopMnR37rV",
  "key24": "4VK8uyuWiKEt3vaAJfawsNpgTXQrjAwBk72yDE9CLfiykHsM7KH7nJiuU2EeUj3EijTWhseaVkdBWNGeNWAiHwpL",
  "key25": "8PoVQeMx8KnTtrzGTLJUyYPyaoQLE3QZUPPXKmjBPhKtJKmwLxf2HaxugfMPz72bP1jX9vCoEcqHVv5JZh4TGRn",
  "key26": "GzrawyDYmuVeQkCdUgZiZh6cWZPbFRjCCUHURFRk3XXd2s2yzEaAfCpo4zkggKs82zjvUNpLzNiK6cACNxeUzhD",
  "key27": "4gZwnacZzQN9kAeB7d4zN158oRf1G24iTHv3imzH39H4YQTWav6AFrNEVajAZXCTUUVNuvZPYapshfJdXeLaSbp1",
  "key28": "4NeGmnHnKnuu6GFkK1qrHLpkLWQEqhZDjFDXH3Gu6SB7A3TcYbXwrXJTFu4j826NrrgVoQopWXCNe4qeK1yrrf4o",
  "key29": "36hquYRMU2U16QM4sCzUw1JuAeMFR2SwkorNbg28bcUQAPhV7GqM7Ufer2NyfLeW2nxF2gYVLf1kcMdqHa8GBSVX",
  "key30": "8PT4B9V9kTc7AqtJ2Mt2zhyHrVetQtkanPBo2RVwLhY5F5jktkBkkFrbkkekqEv4MuaEPrw3zuhFLzjVLuC9tCN",
  "key31": "4QdTbUz3EBn1fnQVXGvc5foBVNW8Qu5tKm6hkMmSnQMhx7VVH1GnNaNsPKyXJoxx8e5tzWutXs56yoAFsifSX3gP",
  "key32": "2NuMQfDd3U5wZYKck9iZzVzoHzVmB3gXynrbUPVH5Rtkdm9YzRAA7WKZpJQED8ymqmsVDodg5kz9LjNp5W1sBuHc",
  "key33": "Yp1ASvVKR4gcSACVxMrgg8gpuVpt1anTv1CabDegP4wuBc2fsgALXNMuiGRk1rTzAUdFC9WxV2Yrr7HQEiihbyx",
  "key34": "v2tz1TTgWozfc3T7ueeYwrA4KJDzJELSfpMkeXFxZf31DyzXRLw8Qy74WRdHtsaaJiU1grCS2sB5VsQFpyiSBfR",
  "key35": "2ceGCmXv9f8XzBgrb6VsjY8harqcH8Y4b3L5uadw8XsEfQrWtKcoMo5oJwJjvW5o6g2QgSPha6rgaya2reCn8r4V",
  "key36": "Nsfr5dcAXHvvBTfYMAqVCQC6gFLYimB99AohR2SWJkRYwJpV1EqcuRApoq3eyEjdFo6vsAjRnrNdLEoaK1Lhd8a",
  "key37": "21j47Kyu2pCzvoaUoWjTzBUb4oHoRbPhQxMXDyBkNXPz3ncCiEGvfVR6aSuMUnhRUcfTVVGfoiRKJYb3gPvRm23L",
  "key38": "W3J8BFsMNiqhy6dYYEF58TkTBYpr3cVrN95PzPMvR1tXZR4eGNFt6oyonbreFtsmnnxC9J3iWaF36ref977SiZ8",
  "key39": "5i4JMAENMN4S7zGtvVXjFv6qmYfkuNd1teiFHzTqwmrTtfrmmZxvoLax6xzftB93a1xt3RkjeUgDi1RWoYzSh8uE",
  "key40": "3eHD8Pf9xsJqS29FE2TGtEYRKANt5p4CsS8dKSnmem7yqtJUrS5zWpSJ4kdj7GRuNNVoPy96azX4vYfFeBHL9vjc",
  "key41": "4uJKpWtyvdaxgT51sncd6gcDujLgZBcsUQbUFdDw7Qzq5iqpTniP5mQbqGhQFZc425zryfKvUDQ6hNbeKVNiMU2D",
  "key42": "2uGVFZDbL2Hu6vhtSfmSd5iaRuQsGiNcKt6Wr4xZtpixPPhgjhrdT9bnaQe9c6sqNP54WrjV46Ja4t5P36pQYMxa"
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

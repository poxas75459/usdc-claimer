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
    "4kAwwKA5HXKJJQefy2nojMXDHSvsE9x5fiLH8QzVuLYSWiPQmtxzERfVWSQn7pU1AU8s8ghHRFCb9nRHSmS61jZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66c1tQ74LtxWWBug549LR8n1JwDQVhHs4W5nueSbPPmbFHxt9RzK25pM1zzJxUpiRqApE15Lsibx8FRyJ6TQfYpC",
  "key1": "456TviKuZQUB8FEm52RrQ3i6nbcGauk14QsqMUMqGZBbz4pycmLSTeKktwTWXHdxCeMuap6hmsbg7bSNUBhFdBsy",
  "key2": "4FMqkgpT1Zae9aVpLwptJ8kXrjsxaxyATV9eJWwvMphdNa8kL9AJWWkKyf24GkVT26t5u8tJ4UqejZMJJN3BMV5n",
  "key3": "5Vepq34tsGztCoPaqeoBAN9n77BJGbkqZupBtXzq9H5Ausz9AQvya6LRHz7yDzfmJNrnuBYa4cusQCG54eyhpUsi",
  "key4": "L7BzhHSSX6hM6CJqufVg4jTVCGVnLjNbnUs5FcoawhZdisaMBJJTPgG28xwVf8TGTGCW1DejZZQwbu9mwMWUJXg",
  "key5": "3pLvZwtB3NjXACXWfC9G7ZkaLXX3MMjHSLqeUskBGk4t4geenrhTMqGSZV5yWbsohX1AJ1x8w6yrASj7kUBamk3E",
  "key6": "5it1BrjxiWWKy1H1ZXmFemMmZ8Xhhq16JgyuFtBABcpgCAdBVPmydhn6tKw7m34LbfqrzmAjkpnpEDVnWnA8qUq4",
  "key7": "2A4i2uf5Z4QsJBdiPbmZuH8hs8qGpFREqLURRF7hAnDgXRnSVanbtedCCPwNqArGo9J8kyMLmFgUUpn5b32Yrr79",
  "key8": "51dwLPhAyzfC9bJenzdxoTngdHbF1k7iizUZ4V1KwPoVfGCDuWfTKNV1ismPfDPd3nfGUgxob61xAmERpY1sft4Y",
  "key9": "367YVveqFChUjAPZic5X2CYm3Qz3oNtuHQQBrGZ7N8yFuFFDkM8Zo6N7sZb1yWvxr8E37VskQvkJhsiaroktN6Bj",
  "key10": "5C9ChAmotDXSY6edtqiLP3VVhJeGp82rk66UgZXDSmuzCh9YRNhKHGV3WzTgE2Co2R3PzAV1Tn74CXkEXDCYdD88",
  "key11": "2z42LPonf3VbjqKSqb2E6aYc1Z5sRCscPH4iKDjgRW37jts8TCcPcHnQdVTSyGNYxhF68NgfBiiLjyGj43wsiPDn",
  "key12": "nxMCzHZEbmHG861KC21Kt8ZK4A96vq8fK5FgTRHFvKDYNYeLTMzbeCaG4SmVTYEtj2HPSv7wspo7H19pS1RFSgK",
  "key13": "2FzL7NVRfivpHa8RN3eR1wHzm5FqXhaTh7zYvjBj2aFD7RochXEF22wFnkQhL1ihq9tC5ggVUD97ifG3PnobCyLr",
  "key14": "438vJRfs8rdjSMZFyWntbseue4cTrwUrqtuaBQyzzajLs7ge8bbLVqJ3GiDVyRz6h2SZVPqPLyjdGQEY5NbY41FJ",
  "key15": "54oQAKH5tj7FyweNyBui7Ce3P39nLwYCTDSSDdAseasnBmg7zxuNVWLPRzRyUVZG8qU1pLYidE8oAPia7cT55acS",
  "key16": "5LhAwc7gdNVpjDeUktLGCU5nNTJzhUGjyBR8jSZTfG73kjeNd4ubpFUsgqf2mRp7MiELdrn99DWgQfL95KTsuRsH",
  "key17": "5udPEUo9xVBches7ZTQYuwf8SwXj6eDbbL2RZcuaQuqNRhqyXjEr4Q1skTC6ufjZB7a6w2E9gzBE7oQFS8g9tqo4",
  "key18": "3V22f92oHWW8iRk7TZQ6v8xTCgrUsUR885C3LdEs6KHHpwB4Z6dy1bSQ1NL66vp4KM72bycfzZe45tKnAXWDaCr3",
  "key19": "2rn8U1m1GT4q9wpDAvh3njxm3ViE1VJ2xSu2qAdG45PY4AZFo47a3agdcQBQchjaRKdf3gg4YXNUScJ2CnZPBqwp",
  "key20": "3PjZfC4WgyY8B7nLj78n4CiMTcXkJxzrhd55kXUWqL5ZZTwDisQQ1AFGymnchqAwWUThYiySwLQS83FaXBwDnNWW",
  "key21": "5vskFQAKToLj2QUKTKey4eC5EvJtYv5j7uXZZVzcY4vfUzPdXiMiEKyiZHaS1TEvVY6LyURNN9LnbKiAtdUTq4K",
  "key22": "5vD7gyVtXiXWJVN1VbzBDhwn7avaWzJQe5FXKuX9bjauMESXn1T1GHiQ39d51Y7XjoBeb1VV4PM2Yk812dSFZok9",
  "key23": "62fKoTaAxgALg5UFbkrDz2TinBXnwzP8iqk2P1g32vkGh611kCL9zgrALp2Zkxfc6mUYHAyTY94VfzemSEpAv7sA",
  "key24": "513hJV5Xj43PFYnN7uWRkGRX1oUgYCWsJGiCufnri2GHFbuH8RArGRQoGa5F9s8g3qf1kVLcz2r4dZMLkDTxhfvw",
  "key25": "3NFHigSum1HfLcUgYr3yjzigXjhw2qFiuGu6EgkdpRg8NCnJD7N7b4zzq73VHyeNJHN2Wwks9SULqcm2uzdtNcvT",
  "key26": "5jiXNtUwCznG1x3AvEDPLRg6MWio89xmQu5R1TRRHfEbLFt96DVWZ2LDHCK9mrKKpbWhYFWCadTYK3a38jvCqjSb",
  "key27": "5befVhrdyWKe1atRoXAhXdfww362xLDoUyXWKr7U4BYp4ECqxP2JbaEoEqHz8Sr3t3zGdmn3ZCcPa7FzriTzrNWc",
  "key28": "5oNWuDbVFGcY3nV43WAP2xSfoRVX6647VijGfVw96iMXCp5B6NaCkVG9gQ7CFeXcbLrdMmWk68dZub88cGrGJuVs",
  "key29": "41SgZhm86TZVvJCSG854SEFS9PR6X8Ku8MBB1ibHFj3Y3GbtT957TA6JmAd4NQ6gfz5jcoUo8a9jsxWB43gZfqrT",
  "key30": "PCMpByKYbJcdH4Wug8eC8ddCZ57PpXZVPcHZa3VRn6ZfvacKKXG4fgkKFVUT2AwnBor2w4cnxytTPjCo6QvduKM",
  "key31": "5HrCNqYWfJHpvgzpqDuJACtPX8PRNLo1HC4sSSEpFyYExTqwFxRWNnp43DbjKiTvkkA6hxKAZyM8JCDjsucdPNCV",
  "key32": "3SDRAaRcSNGi3kupcirLQQM7L2PUqjrLracqdjhHynHmJK1p4XT86GPKHF4EvmrmVHVaYTuwvsaDEC1KSW6Du4W6",
  "key33": "JvtDBgF6U52EtMuMRAjKy6pVXmYLy5gg4XENRGSobZdAj4QbDm7ru3MpwnDhG6EwFfvAQ5Y78CZZrEpU6beC8nh",
  "key34": "4VM4DHM7QFqqooJoJdr94rJj5Ci4XtEskQYRE8aTRRKLMVbC4hibaLwZeMXirNB4YnrPpMT6jFnG2dwoeK3PmDkP",
  "key35": "4yu8FT348ES4gv6aeD23s4jRyKbYMybf2JBVLtZnrTjWcA6jzp676zkgXFtGmhm4Xu4wWY9SLdqEZ14J8sP5ewZf",
  "key36": "2NcnY3BkwyUmhyKiUNm7dLchy6g3CohZt1T6738Rqoh6UJVKqoyiEycysmPWUCEJVMz8afeDHLCaxGaRpG3Rdjcd",
  "key37": "2zsk5sw6Vi8UygwPS3YRqNhM91ruXz3qpNGoH7dpzjp2W8Sn45cyC8iHoLu8cGhgTPzUoURdxHn1Dq978Sb6Ggvj",
  "key38": "2CXvAAzXitff6PxExL1NjSynbPv1uRehMdYEbk1hJopoqnujwWteFF4bJ22J2sGSpHSdS6fomXbK5aHd3LXiY3GH",
  "key39": "4M9uzseiHgqvajQRVCyW32hDbD2TNh8oAyDjhsu2eSp2i9Typ5aLoGEMMh92s7g4qaW7DhiKaK6eG3dTcCT9toFZ",
  "key40": "4cU6uk1HYAYzFbNCCSyZWbb9BcdDfbQRiYW6o2uAzVhMNFxrxS945xZEBBcv2zom8qDqbzhgjuZKVwffSSeMR8kU"
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

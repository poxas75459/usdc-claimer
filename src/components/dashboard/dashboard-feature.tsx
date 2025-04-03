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
    "fUP33mAWBPnTKuzfr2fzS7CzqzhEg3urEw1fZg7qMJXtotCiWk2WtyXx8tMnx2LNLdnCPftVmrEHweqfTDgMKtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46MwLGvxBa46ezeKybAgMKvAg5wkrypTbWCYcY2G1cxd3uBUKHkqDcnXht5TvrvrgrtH7AHmC81w5NutduofMfvE",
  "key1": "5rJShkyNEzaESkfeX8o3dTD1CnHwuSiX2e2PckaNmDcfaU31MG7aBw4yeZwhPy2ZWCgCrfJvH5URjBYAB6yKNNSM",
  "key2": "2ZnojHVoXq28xZNdPqJdgCn1nrGd3sV2zxfjnhb38CSiSW21EbYNDGSmKoDheXEpFVXAZNVxo59RFbYLDv9SDAvt",
  "key3": "5AU8oyqjdPgtY5LxMEaEBAnXDwxVMHV7ZQ2J5ACzqtUoaUX5bgX7cPnmz5aGidEEoAiFiT6LnKoz9CyECLXnfa1z",
  "key4": "2Hcc1BBZc85wA3hY3hk2653p4maxjKvRSLhUtLtQP9wNQF4JhUuCPt4e4mZ4iCjWQyMZVJp6Yy3W5LHtb8icH6AE",
  "key5": "3TMPJFCedbcm76RwNELm2o86DsqEcgQzNMAXaGoZMjF2NdGjjHikQXrK7K6QNTyaE8b985fWv53ZtdVcjThfKMWz",
  "key6": "2LTJ7kUYbF9HLoeBDH7FQGnBawAu1y8FUGwxeFJFmFDWUMrurWDfeY2yRQAXkWMKaNReH5uE1eRUqBcjwdLpkmty",
  "key7": "2nouDETxNRTdwv7CdbBkjyuPJTavFsEdqTqMPrMQxSoE86RKpq3S4BewQS7mktncAGUuzENo16voDnUm8kmJ9hW8",
  "key8": "3xhC282VzMFud2T8gFJpiBUc9A2aPcC7Az2Pd2rAxVGkwjuYA4tscj3svBz7vfQk5DCA2LyVzVkjBUywzuv1AGwM",
  "key9": "5uHo9UbiButXX4qGmyqRiq7sbfpNz2XKxPhxpx3zM6vbog5EJfFQRDBjAgubSNnZkGQCT7TGPD8hSrkLBM1bw9hh",
  "key10": "33BnD7GgFCdtgEtMYvpEHFuXMimdHPyufTiLpgsSXXauSpXWmjKuaUZZYi6BpsBYbUGvwnrK6TnjLqjTeDFwdR54",
  "key11": "4WQmLzCczSkGWobxDFfkrnfV7PGD2EbATjGvXQQA3FsZp3nWhJ4NR6ER2Ab7e7RovNY1GNCR3sfycH99Bpu1fDHp",
  "key12": "5aN3KDPX6mp5Gqzunppk2XpRL3xghxQ5weVSVQQZr57JBrWwoJ4x7tCpLHcS1r1m1G4xZjznJBYDKnEDUZaecJkG",
  "key13": "4BtNhQJXxeFJ7kQkTD26xzCcy2sDYsPMswunphk91RsS7AtoqCN9s8XA3p9kd91T9zscXYwPQf2xQQgKmrrcW6p4",
  "key14": "VX7aKd9pSkyihV1j3TxgAfeRMAgHskFGFQDsdEtttpg8rkGy2mJiS1sGgaHoC7S3JuTFzMnLaqwZ443EN3Qetdm",
  "key15": "w4sLrw1MgjSdfPVjXGw4d3B5BQBQUxQZYqez5PQQ1CyrWvPaRsp3KpypVWztaARyytGqyByhqcCBnWtcd95LzTc",
  "key16": "4gHDacu2eLjiSXC8gHsHFSmXQBU9cfbMLq3Ng5RcL7ACJSVakagRf6LSkM8aLCMPCT85wp83c3xEPqNZowUsRAug",
  "key17": "SkmEwc7p4jyWNRjtXzAwD3CCcD6G4sfaTpY122xxBVPgmJboKJdbnZoY9vrfbHRHHAckGqiKHhJARCVycUaEEMs",
  "key18": "577ojbxqMfjHamLeLARQRj8kFj6nDVQUKSaV9atF3zgevqYoFyjCwQ571oiTz4DX5vXccXjmv6bf9314xQFzBBkK",
  "key19": "5KsSwvS8B9LgQhdGH2tVGkBaTRs5F93vvbERLhsSYQ7hgNYfJYCGjcXL5R5ziwBE9nk4yCg3cp8ZFdhVszxa7YBL",
  "key20": "2YxG7bTePtSrACrdkWYMVMpUUxu3AiunsP5gHv3EmTFLedb6mWuGwtgNKQxdH4T2jucwG2tFPKKT39NzngV4Q6J4",
  "key21": "3wUsmAWRzNsbYEQmsmGfht4sy1em5AkaPVGbkRoavSbTHtGMcJekNxrF75k5jkvcCPxAke57FkxFyyWZBHgisRvA",
  "key22": "4TdVgATdbMwnJf2D9YAf5MJzSApJLHAJ3j12rd9jK5V79Z3rzAKn4WGWCKXu4enD1WCBXS1DhVQrvn77GtDizthm",
  "key23": "5vKbXbYmhT7UXbBp2VGtEwuLZWNt7aEM2pF95BuZgDQ6oBEQg9Lc5uXfwDKk3tXLp6UvmxFLQgDexfuW1veuMqB2",
  "key24": "4XDhp88AZAsaEDQQkmkZ3UySxuSDqXDgjFnHbKKuBg2LbsQaWDmn7zBsuGj6BJ8nfT6cyNZ7s4cVnA1PkZv3N1wL",
  "key25": "4kv81Yr2THryNFAV7W5h1iUbsNYEn2b2ENrzsYXJ4vgpcpUfgyy2ocoiU29GDNzUm64WM3bLqLgz3viXFEdvHzwx",
  "key26": "49CSESH9hL58BGN725UF6dfRzKfVTvG7A8HYtnYh1T38JuDRQeVSPhaa8rWT4Uab8VPx9e19XW2UhXAc7wixAz4y",
  "key27": "5nfzvJKDDmMuEP6atdxGAZCoubvhgoXbFcga5VsfTvxkwoxMknmxi8mnsPgLKoVcHqA3zoyyvTis4eLLQkjGtMTW",
  "key28": "2Gzf2XLwSkJGKsFgujQskSropfkofsu5UbGrXrgPFHgeaZfza3S6XqfYuh82uxWDMhq9mJCAt5cXNNwhErVgE7c8",
  "key29": "4Q2b7PJhVSQKPEN6zBcAvWEx9NGyoUBujCK2SB4aMMzVj64FZXX2TfR3sTMto5M1aWBEgDcYxhAahbuoR75Z1RWo",
  "key30": "64Yfhiy2VVpyK8pHcDQrRdw3mUrnVkqDRx1J8Jkop2zqcdq6Jm1UtxjKbVvc5oyyveEo1tTG2tEkxQ2pePhcRSQj",
  "key31": "ffzrTwsbLGbRunoZXE5caGJih6oypwowBY6QT4oYizdfqX1fQbiryk5E6iwAAU5m5KriZmFBQaWpTrezYHLSRW6",
  "key32": "4xxGbkDPz3mKTpm8JTSutYtSVDpDGnnwwMSKnkj1BVYRgGLs8McYATZFYN7ncKy5Y9DoiXtoJtzcWWZpKsZnuwzs",
  "key33": "DJtqhS7ZCYPiKggW7JBB3RcT1MvuR2oe7UXrRNVZhNSv9QAJt8DVdVcBnkhRrbo46THGanmVk5GQjJ9JbWhW49J",
  "key34": "2EGAFLM7UveMz4VfJyBR7f2tu4FuTJB39qye4wQfGDJWSC9STdzXRB1HDJ3ujKEYracx7M5mNm1zEFrQS9vgJex3",
  "key35": "2cNjezaqiZ9tpQWgTq1rvL97HooEtowjbtC8bSTee4StDykvt12nhMofQ1A6aMXTwVj7LgbFecvrD6AXmtRjMgAB",
  "key36": "5T6y9GLiomGguX9fNvxBVGHjhLngCYK198VwJ4yniUsQJhkyEp3MjbN9GkCGuFi4x9GvjBjmp2KnAzbWqhCEexYQ",
  "key37": "3ziV3tE68UKRSzxbFQVma81f6tijJSPq3KN2tvq2beih5GoSYFYi4TqPCfQ3Z7JoBPp68Qe1m9fKU5HjJQxr6bXr"
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

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
    "675GoPQz1FT49NdvEYGg9qjuuP6Ma4DrjcrRpCCWUS78VmdeGuuW2RgjPvM7kuPCdoJSy6M5FFvo5GeN7g23E2qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fijGvYVUcuudN1mEHZSNm9JwhrRAHmMQWggBWzeccTNMVXBz3sNZC9AfKZmuTLKDFDXz58KNAddu6eMfZTpJz7G",
  "key1": "2vtrntAM71TvKTydiqxCKNFUbXBUysC1f8iUFWD1F1UWS46gcvRfX5xGPcy1WW2LrFspneWc6GJNBz7mFFUMQSS5",
  "key2": "3kmn8cXNWnKggeNdw9h9hmRfY85jchna5Qxj6G7eV5tUN6S95b35DPVGiUN1tmb3umLAz11fbYArWwcCEREyDpA2",
  "key3": "2vLWFsSo6c9NMrHQjsK1jxUCd5KQXPXXni1DQuwKNN8jaGf3poYN2jA1fXVKt2kPRcPwbzSZ9greNo4dt7SYAfBu",
  "key4": "4S4pWodDqBzqLPNBwXHEmwnP5gT2ZpN2GqsJJezJ4NJ6mdnsETKxtsTQisKujwPwjhvsQf7e2WjtrLAPpTdZJX6P",
  "key5": "2gcYw3mdTM8MRi2A3pDY6uVbFNn16LUvLujsCinztzr6oVBpHuYUthK9n2HLQqye4xXtEAMZvKVFr5qWadGeXy8g",
  "key6": "3ogC28bGMZjVkSKYjhqwMR5XBFRb1r4oDxuE84D1TqkMpcR4Kmv3cCYWkCDVNzYkRJSpXXvLNPcrLPeY26wUCwv3",
  "key7": "5s9qqYL1jLPfcPy2sUXnUJRwtxoPkNAjeaUCbJJUYWB1ada9DC8t2oEzk31mv4fhZW2ATQVChmFKM4YXLKhcQPW1",
  "key8": "As6RU4GtLKWegtk6i6jk9hoQRpyPodD9RqXGUn5oi5krhUhq4gCC92Rqvu2JaQGHhM9Z2PCsbTfL9Ewwj1WJtvR",
  "key9": "2AMDpagCf5XEkpk3KP27cXCTQEYGBHGWxaoZhq7awGKqM9tVfa88sNQUnidCAnnHjkgea1sFeYebwLXPuQoJgTpc",
  "key10": "3AgjXQiTa64WiA1w9auh9B9R17ASyY4L2dpfHVJRrZWnnXF1PmxUfxewvn9Qf7GDoZaDfsGSX2inTZM4ocv8GbPM",
  "key11": "5z9FrywVV8Y8jPbCqio388FGLP228ETFsBHyLJivyfSEkdAdWXuBH98oGRcf4VyjK9nXJn6AFh9yWqFTxAKJ17F3",
  "key12": "5Uadw7xbArh8DP9BFLJ83Wc2tE3TVaW947rVbAwKDEn1sZMQ4gexjogwwVCd11sURf2RCUimEjD1tqCSyRMSTNd4",
  "key13": "4EruVDoeWw4QE9w3EeqT66EotBTDFEF3hcid5tipZcvZ9wRVSyp7AXqeHrDU2MAvyU5HmDwy6kfMNgLUUjcjHm7z",
  "key14": "29HNMf9sFsAdrcPARh1jKikrGvtonhSmymJNrtmMcozHz7ZhAhYEs8bwXkfFdukVusWZCQXnSbxpPobboGMR787J",
  "key15": "3uf9XP4Q6uZDpVGRLhgsiRvBk8GkwNe2QRHhZ7CHyPpYB8j7qnXYb5SQ5q1YTSpBJpot6ZyVrskVzXBYszr5zyMD",
  "key16": "3q4HjrpdcDMLjP697QiQqU2TAEKcbNtqk1eAzZom7fodpXqfE4198WEUuCgknyjkazWeYLTdtj1dWCi7s2Lc23Wm",
  "key17": "ptVR6Nq6rYuZUYe5oyLABk6Gvv8AauSWPYD2RJW8Z44twZz2uK3WcSgbtKPdGqMnFNhmtQjiR87w9RDSmDgz5h8",
  "key18": "z1VDoPdK87UZeW4BwmwqV3xV1XQQYvAU3tJdqqhumHkdyHqU9nFtVAi61DM9hmWqxe32ndqFdCxGqQDKvLaoULs",
  "key19": "3KWHsC3KZtzNPLPY41L3oUxpqA1GZ8d19ZEMzZ4gPz8bBTmqAECFyc92E44Zihc3cLpNHxTfoEF2LnfazZJBrN3J",
  "key20": "4AmYB3pasMEUYutLAWoYYoH3bE15YMsitM3U1CR5opvYbWSGYuHQVT25tG1fQsCDpQVeqsd75g1jgpALo4GkrATY",
  "key21": "4qtqfTsz5UXzJRPigVrtd16xDTgufPZ32QZWSRJgBeVeMWnBdzqngFq6CRU4g9FyzrmjmhwFVAF1UXk2xg7TDSJF",
  "key22": "2hFwF6kx4LaXhRMocpz9KhRi81smP1Ms1YrK1h6E2JcDGZdgiAs67FMSjLSnydfAPnTf2SuKXmWtyMBxTDSNT9Xp",
  "key23": "xiQfA8cqGzZ5qifspSU5eNo8NwF5PQz4Z1papx4pWZWVLjJFatbNoLwBLumjVHv4NZJAYZqDSqTxnidVcP5dxXc",
  "key24": "ugLjtVjqA3xdoC1KYyRNUAdtf7TGaado1uSCA7oP7QtGs5cgmobQhum1ouzmobcF5KCifKM9izWQLsQtYSNwfpP",
  "key25": "3q3u5nhT6av7gv5XGB4qhqSqw7jyvVQk7T57cR5mVcTpJJVCLtWhjUTBS4NYfSZkgjZzZZ2fYBf9TankyuSDD2t9",
  "key26": "3Hrq9sXgShV3pieaNA1aDvVXFguJwJ82XXetwM17xY2oSmauDfqTPuVvnvSLgwnGDo7P9qqGV3moLMUSztbg9c4S",
  "key27": "32o2bEsRRqnhnMzndTLUGp4sQCCf48iYXQxVdvefwenk9zq8pvj3aqQ9orU6pWKLNQeuv1Zr5AprCiXF9RE6MCeo",
  "key28": "4TZoV8Eia82MJ45dSxcTY2YagsaDUfZCABnZRsUPXK1sa8EKLk54jsMcQmn1QoWaPFN55j1WNGBtu4XLDx7GneiP",
  "key29": "33GmvjZmN58dVVzkeTvz9jxGTktgTtGa8DTYoeN6JZA9VhLdzkDBBspotA8Xpcxed9kL3zmPqjkYNp3fcHj4Swb2"
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

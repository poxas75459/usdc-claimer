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
    "3BXGSzFhcuJD9W14KcarAaubUBRdnuS6A8oXTLMw9V5RUdhiCj611aiejNQbfrQYbpzgda6oLFDqGXawCaLqyNE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhEndfNZRTQYH4mADBkAYscCCvNWRymJVViCbYMPCoA3NLY6qticCWbKdwxtvyZZjKyRrQ1LMfdf8eHwL7JX77R",
  "key1": "4nauEy3Lk8tBzCeRRzfigFgaWuKVWgT3xxbjWXciKXZDt34Gy2A2arHmADeFeHQc7PxBjDpt2ngMBHrAgjnjobwW",
  "key2": "126H3SFipv1qiper8Eox8mXRVwQQ5gEUXCsGxUtkSdeDc5ib6NZHuGYCYRmhMaGxekVsd5bvixL9pmXmmqwPDK7n",
  "key3": "WFppnnQWXyaMVkZopuqSDhLw3QrXg9GSVsdueG8vhyYwoZPKvFF16LH7hv7m5fzEjxuXGSLVJUJSzFg7znsVhBY",
  "key4": "66oZWjyNvBWhxet8iB25LZa7yoRtSCM7UMowzpeoeQcGYcqMthH4qZGFy9K3WW8mhsU8bEnGkXHWzBWbCvQqeQPL",
  "key5": "4KuMqgQEyhN4cKaVGNfGMCV2Taece7BE5EnbztqxATgRJMHeSx7c4MdUEQXSzNMtALj8T9MU4LE962G9abTY8JN2",
  "key6": "4y7WqWLh8tScCpTmwnWUtJ26iHXDzpwLpEggVa9RfkcCFbTT58jPE5neAwqDZMUDzmM2TeNEAuPHY6ucoy7BkVkN",
  "key7": "5YZrW1X1N7M6dJi11oBTWfExT6F5K8d6Zbjm94GcM6TXMVq85dHT4pUSBdvq4T2J2My4P44GuoA9mZKjMajCqZw6",
  "key8": "fqhaVBPmf7uu29JqfUMghQT6hPKgNtQ1Mghkwc8rFzqW5C5rbchPbDtaxjs6E11geusSbbDKeyz92sy9SpHMPh3",
  "key9": "5rHFbq8k3zyyKC8aDenwhnRbW18tuiPk8KPZ3zqwhgxFgxJhUwSnLSMMaepmcayENkjGKg7855oSh6KxGzfSKsG4",
  "key10": "38y121HJ5MPvJoR8UqgCWw1UakSameHug83SvY9SR7AvwcDggy3DeLXjLRbSJoPfjEoS64top9t3LRG1WXFMzFx1",
  "key11": "5vGdKpGf5r2cagS4Z7XpWPKXvVtJfY7AfotdzNuFDno1ryE3oC9QRBbNYxqpficSjpHWWB1wzEV94vu73526WDEd",
  "key12": "4PrC6WT8DS73BidhqZwYaxZmxc5a4vPdaTXeAb25itX74sQbgn67hZmEQZACSYx1hkWXCn7XLxZrgtEuZr2z1NUX",
  "key13": "5WtR1n981SuWoLyrkYeEJ5AtyUaWgpGUKK7cYpZVvnzyXhfNRonbaYHFCJvmSzCJ5kKGHDWcpuGsvTtH1ezq6JTA",
  "key14": "3c5exoRKpE9G3xyyFRw5MQvm7iXvjEFcwxKVQXz4b6Mihxy46dYd7h7RqqpSPorKCuBAsvQpntUmwFSZZVQLsxWj",
  "key15": "5gSeeHWPd4KCw2461GzkcbPxTCuQoN7w65MEFcifsgeb9Ga2YSoTJxyBcStEW2sKuADvgio1EyTJp532kpScaWbt",
  "key16": "629E3xktiT46VqZxqt4AhmJREKgeX1vuk4SxFHxcieSDbW64tYBHiJg1AmKXjeNhZsBWKwURJY6EUzQy5ktVi3KT",
  "key17": "4KMixGK7AqXQZZbY6wRNMw9hdaMgoWNYQ3cCJ3RuHkXKo73aBsHPT72Zi9TbciUPP4jEhVxXdbvaqnRxJU4RCzRC",
  "key18": "5fjmKFcY5e6rFAkZgsLTzTcd3duaEnuq45UZ2E1NMozL9WJd7EWQKGUbFHeQFdbnYEVn4WbdBKXkxfU1jEb7i2oG",
  "key19": "omGQTWfHyaDhSnpymn1ko1cxUDnzxhocnfFFE1gSxw5pCLPtmjrvtUU7KSpLPPruatos8ySn5ySFenhVRQqVVss",
  "key20": "2kbfrGhJQpJcaS7pfPc2ZXV8vLWS5UhtkqC4JgD1V4BsxRop1Sh7zr3dcZTedZkjmGDdMvEcKNnk28oFQn8KdPke",
  "key21": "25dSNExjb4KmahH1t39NeW66x6kMeKjEwHVK1pJrjdeVR7W5YQ4rtGysV2HS484DYz25Y9Xgf4B9kVu8SRGyZgbZ",
  "key22": "3k5ykVxzSsdfvm66XNFZ5ehKYuQdLcQscRahvhba2vWxYhbE6ACa94wEQ64NsC5WMqH1kH79ECMgteYe4Pzoeuts",
  "key23": "4PXPTy6CJtk1hXkMfnY469qpx5qhreUAT7ofSMjttsXoiNjV9Z8tXJHiiZJtgfftzuGGfdutQDMpczNMnH2UVw4s",
  "key24": "2RZ9ThJUq7Mharxn6fKo2XRFSczGif57zhRaefoCE7V7MDzb31V5muem4XvNGwGS95DtfAD3T2xnvB7t6tthiUPT",
  "key25": "35eCdQfgaYuKz4SmgsFivzsWuX7JN2VL7X3MRpBCTxrytBjWDX3gNs426sE2Diktp8BjWKtdPRLyyok8XeBtNwAx",
  "key26": "hvPkQ4zWQtuD6cr8URr7PpvWZB2unQ4WVmpeYXrQY9tNekAKYnaTQAZa7BkkrLv2F1xMoHNuWix88wTPm6Z8fZs",
  "key27": "5dNCSUwa6eG4xbtgeDasQTm9b7NDHTCrU19Q2TBfCuJY8rwtj2vrjwmCRNvgRs9GMtdSSr4Q7ZdxtDkKyh8HsPdt",
  "key28": "RecnNHX2GFBneJXiNHAs3jkcwfPngNcrqup3Mq8MxyzAetJvcBNd2KRE3PzDdPcDzMZLiYJZyoJshCjnLGa76Sc",
  "key29": "44GM7j9khDK89LZ8RpdMUUGQQzgSMXYSAbCiJjiNS9moVDZ788atJnhnYDUHe2c3GQL1qWMj8fT7ma4SgwSqRjzy",
  "key30": "4ZcsP4h5hxSjQqGXSLDGnhFuJ89JpvbtTSMzb26GucmNR2t6jgkLXtVNqjHAMrfmnGBGqbVzperc54Y2gaNMJ6YD",
  "key31": "3Vjy8ZaAiMtgKK9UuAWDkvNDf1ZPx5uMKGArCjvvtYvv39gq7CBAvWERQw8PhELKUZQCfwuHFQ84jAPnhs34AguJ",
  "key32": "2tjVPrTjEcAk3yk6pq7vDX3QrZy6K2VRV4ciDZF5qhwgi3TnZSYv2dyCBCqQug9FFGDgCLg4ZU4HpUjSasfzg9MF",
  "key33": "2JYAPKgKpg6MTXn6Sy8s9WaoWpNk4RwDvGRQYT8cRHZtKcK77kHKYde4oDWsxM6Aew5yjDvaRd7wMUtEgQWXCpDU",
  "key34": "4YJFGwnqhfk2GviW7dR7e8rsM578AA5QqTqxvKiUgxnTo5cZcLwWhKhzwa7nMGEADUrDmh7L7LiwxEaGB1iqkVNi"
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

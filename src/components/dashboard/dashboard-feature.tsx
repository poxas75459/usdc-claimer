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
    "5iD4kjS6PHtQi7YWitVHsUwYHFW8LgFGiTCk31QWY8d4ARTdmoJVoXZMnAAHRwpPTu6EZ3ih7ouGY1b5xNPtA4oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NgEGt8jc6ZqsDGaYMvxcBbFHKQVtdTtvJwGAVfSmx2tkZJ2ikXeXQZr29LtmPTCp9WyW6LSnUNLFNjncvCvTTuN",
  "key1": "5VCmhF6qvGUhRZFAAVs3pVFReB2UTjeRDVsM4zL14YYqyx4EacNsu6MV1vippnR2SfZRAQ4ynSXZf9kcc6R3Ub1X",
  "key2": "41mEb5Q5wPvrQPsJGc6zrFTM6iXDmrcJgsJ2e6PtpPC4jDehZSxxyRBY46AuxnHN9ccaG6jHDvyDJFfGFU9Nezd7",
  "key3": "5BrzK6jCjFxbuB6LsHig3s5AiREJekEwPX5B9j7ha8aaKuhxya6PUH1TgTvNk5rSEdRHgU62v2uK1a8mPRxUZQqr",
  "key4": "4k4WCC6B9HKgRP3rEcSoJFAjpXncQbsiTQRtyk2L1KW8FvDSbDCaxd3MHpzmnDMuEabMmZ8KnvpyBudLXRCFenhN",
  "key5": "4uMpUebT3SXgrwq4FuSgcQ2VUhQioWsvY4Ho4v3FdFgBoJfnkjC8FsPAgWa5ZnMqPhJvUnbtnyrJBz6pPgRP4pdr",
  "key6": "5xo5G78MBaTmVpDTkBKuHTQZ7QmFeXP4DAiDHa3oZw2NQhHitZ5aP2tdmspe4wqWXorsLMJaQ6yQJ2mcYhNv9JvX",
  "key7": "2jsxzFuUmEmuwYzhDAEowNFEb1f7FoKvDCtmZGCxomNdev5dqLFYAh3qReJigofaFNY6oXA1LZyHzk1i9YaxmL9H",
  "key8": "5TXX7HxjKsj6GqeoQEhD4mPru1KQP7vSSBAueQyZ7dvd72tTFGAR83SBdGgwXwy9Xmr2hkVUELUeUzYpZuBV2jhi",
  "key9": "5vjmqjQATcbss19wJ9VUoX2hNz4mEQbvfrTqAa1tPKUnXAShuQRuoUyvFKx99bMWxRYZaDkgfa9HkgrVhSUdcJ4J",
  "key10": "4UPcm9LnwoW9Gda4jjXDgexCbC8o78tScHiC69SP9CGQYEY1UKV7mafgbAFsUotzjPTjB1xMN2HFTJEgqvkjKrtz",
  "key11": "4dzkWvkDf9sX36HUypCCN9xzyHwH2LW4q9abykLcLkCm5XTtAzAVA5i2scVf38fe1mbXgNMEV4yuG8QCJHmakizy",
  "key12": "2jdhsfkscsWroKpnxXZHPzSYqpdgN5BW44A9kYi6wAaX7LDzubiFexZDfMe38AiiJcu1eh7VbUeV9pVq3xKhRY7h",
  "key13": "GRV8W19YR5fkg8ZCbZxgHmAnDXmdHfp3CzXfz9hDWNrfjiJD1224fBGGp3qMEb68WSCTRhpy2qRjc83HninG2yg",
  "key14": "nwtgfWwdqdu7eJcb2EJwZjVbxofXP6Ao7SyiLUHC7WzDMDEbFcmvVcbUdYsNDfVKe9G3BAysa2e3PEb5wQgjCUU",
  "key15": "2rETq2pMHgAd8Eqemt9949MRaTyFgDo4vh8qMeCuQAboNFA9dB1y3FBcQewiFhSSbHTyEmVkiUUz9cpEFhjy5UyB",
  "key16": "Xs4rMoPSqcFiWcbTrPv28zEuK9ypQt5xnViL3w64KCTb9DfrdATqxrCmgKKw5Y8ZfbzKRLjyBXpS4foyaVZh1M6",
  "key17": "2wuqT1cqpXAcVNbRWucmV1XLmPuiQSaRmWZwtBBrPgQn76xLsypvPCDPR5VonyGvzkS5Fo59MJxdqkiMunvgZpF1",
  "key18": "5aVXACjZtQrQ3TJX9uLTcuYduahWZ4iPLkim14Atr9QzufGgE7xNVzt2CTq5KwyL6eXTWuM9NehrsnXhemxL3e4c",
  "key19": "2S1BkkwFomQ7YMVpgc8gKXwi1ioQNkL1gBC3C542y8ErQdAGgUYCHCn7KZUbWGfEJyoUtt2bvQcizHKLsYYAWU64",
  "key20": "V4QcfT4QxZZrv8ghDyae4jRDsw1fa2CMpymGDcqKKQKB3unoNLFwMcDR4JAbm6oRsh4C9ff8p6y7pGAL6CeytZ9",
  "key21": "4R4buHqCZL2TSRz58bLG4TisaZ7yb5FckJySjbDNQDxR32aRxbvQ4o18fX6rWeov71qibXSjLeh8c8iHsBVvgxAM",
  "key22": "5b3djZHDCtGBJPHmdNYYgPBRjDJBSg9zwtZpVuXcKidWVYusqNMzT2BfbmdNNxjWAfAjkB7ReGR2UTgvE86MhBz5",
  "key23": "SwHKu47QWUCCSPoADkuApAypM7Z5duS35w7Xeprgcfqvs2gnPFfQV1RsG1Qb6KEuMvhxAhsTPeiZ47MbeF7mDV7",
  "key24": "2uNSFBVbfue6FTJYXP2fTRhZvEEcnV2HSUwq9gRyHpMLz12LGubaoyTDYSmb3UsDCj8w5e7LNCFbLnUWKXypo67B",
  "key25": "5Xvfn1F8FgTftQK2jRZQhoYBPynk2szXLBypnePNXjqdWQCLQZk6HkHeszAP4h8hHyLajQtibzUQQTwiV3NhcDvJ",
  "key26": "38jbbWuh59WiWnhzshLHeFy1fDBmvo2Cqgd4LHCXzkVceEFCt5EtB17wHvbQGRb26Es8ctxF6ouNgdDM2eUtznyj",
  "key27": "2CjuTgcffScmG8NP3Ymk5hg6hN8WuAyacBPNvN7HucvdDuLGiLk5gqZN5xPXtB3MBy5LvN2YhuP69ZRL9dHcbTmy",
  "key28": "5h5fYqLMYkHEYCxLCn2FRjMxhSsxJKtTDkbdoDkXn1TwLWM6eJovZjRERo6cUtoQZmvM6SHJJrWtK1sLQtS3ZLQh",
  "key29": "4GX7MNW8oXEmJi6SpEnjrnG5p2LFwwZhYvELTve6Ejud71kqx8wDebgUSQBAZ6jH2d2kKCnBkdjctDLMUX27LxoV",
  "key30": "4euYAF1rzQGHGVSayGGshYNY5pmVPEUoyG3AEHTSXSBbWJPHqbKkJQaxZoSpD4qaC5F4GX4bh53trtHpiPRfFyzv",
  "key31": "te2eSSYUbzbUEf7qFqZMijVpR9c3mdnfCUenHxr9H7bEFU6XqcN6hNGDVWGPUzhoYbdsa2hVpFTtDQ4kGW2yeCV",
  "key32": "SRceok6GFXRQ3u2ohZKietNFg65xyxLSz63nLinpYAf3byECoth8GTpEJu4S1JZWWd6eoQZeGsJiM7LkzbwLUf9",
  "key33": "2zDa4G7pGW8dVXRPHD4ULS5msfMYAdUFwM7uWUdewKLko2A25w8zH6h4zbsLFGNSY8APAkT5iJuH3i8gu1RR6AQU",
  "key34": "5m6LVrNAKP1GLHcX3PvTz9XdHBoUZivsqfqEPXNzfHuFWtEQWjWaPYByNA3Bhx3hfgta2V5wkVoQ3WLrCccRtRKn",
  "key35": "563YmZcbaYvzLNUvGBoWQMDZViCkiMFZvLt9my31NVAxtVkX5kS7JhCh5J4eNYJZ6KZkptXQg8DYwQHfckEumzAA",
  "key36": "bwWLEx1BRAc8ThEKq4aTTKCtFbdzXGDPjkfAb8w1YufP6TSBustYEePGfTt4yy2RM61XwzZciRRSe2qj77r69LJ",
  "key37": "5J935qXPpf8nbyZFf8tM9RkaHyss8LR3uRPmKW11Hz4TqPoysNz5c3o21DMqg78h85EtdTLMWd68HEHQBQdiF73a",
  "key38": "32JrRuXxMaqG1MfmJGcWCgGS1Lhk1KyA398QhruVJBEbxWgLj3k1GMQXb21xJgX3m5cGLqWBdZtKVEB1B1zdSdec",
  "key39": "5AYKVgUcbHh8CVUKrLznJvCeWQay8QEiz8fPJBe3zHNE6kc2sC4FExLeRkMs255fiMjUXaJyweP372s3ZEfeyi5B",
  "key40": "WzJqBzk5QWqRVpMwudwnLRavsxKKRWMKY94ZqivtEbVeDdWVrBHwpZ6Qunymh87HiQ4BS8ySCCYZedhSyLzSMWR",
  "key41": "4LWKBHYqymzU2dKtE3DeAvRmwmSCjeo2WH3qRnUSoED1Ca4sTGSz2gSKzDFVZnSxbvaQCGDbFM1UgUaWgR1j9yNu",
  "key42": "vLmiwLUpXwn5TkhVWg38zY6Ae6G5LcQxrhe2AYK4qvR7Na7eNtEY5SJefwbMvF26UAW1PpYz4EeSmBHJu23Dj5j",
  "key43": "spKF4CSjYu7uZ22KtD1MbfvEvz3JsTwmjBgVtKA2ovweGbnYE7wHWaFBEq7SDw8ECezEj2w2dewXCURpsj8MKr2",
  "key44": "2gkVN9Uom2LFb3Bt61iNBGW9vkvsonzVjBJcSXwSVwGx8myCCDoxiRW8hWxave85GSCXxBtrDGwUX6kGRu95kCEV",
  "key45": "4qj1Ru1hcqVdP66PbRDpdPk8g62967dgpR1PpCFUSnrZM21nsS1M2Z3mkWhFpSXPYPn64QV8ZivmPs7F7QNcGkBQ",
  "key46": "UCof2gk8anp382fUzwsqveRX7GF5HhMxqHGXDYHmCSdQZKpjSokWqdXUuYPx1EPrhH94KccQpT7EToNjWoNsPSS",
  "key47": "X8b6KtCgnLsrYe1bPrscPt91kNU7evZSwkV39H3r6xpXBttFE7fhk2CGAeZeMgD4PqBPa7KoxCbXAxF8xdnUb2c"
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

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
    "2t31nJ9BWKGcfQ4yGgWMb6orBPfovP18ipzxh9Di8Bh5fBBdfohSiM5NWzXjwGXjQLxQzcHLepNHLAmwLiNGFfNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZcAiKcDFvAjwAN7WhDZL8s8Q8CfvyFgoTY1eHHYNVe5P2SaWYD6Ag61oZ6gs12RndNEZyPfypxLDDwx5jDdaJe5",
  "key1": "4QMeAsYVio3oCn9fS5AyWKGquVRvDSCtjVWgUtmgytbZ1hgyxjSGWsQcmjCXL8bcaPMDYS48GZQQk6zhYGmXzsYp",
  "key2": "4FaWQtxSDA5J9bmwCxYXJdBzQu3F3MPB9BmJasM59irXkD8FaEeRb9yeX4oa5YWHFVVvgLDRdBFcdGVAz7EAQn3",
  "key3": "4hCJWSAPURUo2DraBUF9y838w3CDFiZb7sEYwP6YbWiVhk2rcEdG1HzTJJXNPV2rqjapAvFkLykgZHf8sqBY4CZG",
  "key4": "4QHu2o6rZ7zUw6jshhwB6hExj9SddiVVrTPEAUYapiuMVK5QMBvtwHZSjC4qCSubBShnmZ2kBoqJUwQfdVjMHuXC",
  "key5": "5V7asqJWDwitesW81H6gAM35rbvjuAtupsy9EWgcZY4xxdp1eDbMtCJgN29Q2p5PTFBXY7LLjjneT8ywcYhy9hvD",
  "key6": "2UM4SPFzXdJ3txLuzkEqnPGfWzn1F2QV8Z3Nu5ZSxdHtsYTnHyNfxkuWnQZksKUnRSbieGwWyrKc8T1qgJKfXqMs",
  "key7": "2H8jAtd6Tx6ujv1dVJNTuN2Zz44BD7ZFDUbLeijCFTPrm6iqGZtJ9BnY1NqoZZGQKrzEhcWZzxHZpEderbZyW2HE",
  "key8": "4GmyJsEZVrS7w2g3aoHWpcAGCmbs9WzYaipZcRpHpgujiwYMtRqoecJxDf8P6mwowTdAhbFWCyQZbHyhMM2rtPQC",
  "key9": "5CJ7RMPXFGjyKcGJfQe6SA1QfbTMGkVBmo86E4UNqWg1mmCSvRQaqK3WLX2u3XtAoA9JtXNHjHny66ECBwxiVXFR",
  "key10": "66LVHwJA5C14KGaUZFchj4FqC7TAC2NS661xEHSVs5QRa4iQb161fGWWxMkJNiSbR6SDYntLRtid8zTmh6w2dRaB",
  "key11": "61FhSAYwQj3vn9DfXSTzhHjnheDhczowXvxPHzfpmtprdq1G9DEbJWQkDeZyRashYPnAKpELzk7j3zhbBiQLhqjL",
  "key12": "2mysbyTHDSBvuqwnrJC5wdfY4fUXPa11TVmgN5Abtw36UkY27bi5s81BbbY8mWc9KojKdVGpPVeUBXDSSMi9VJef",
  "key13": "1kH1ygRYNTUS4K6whtfvtFgRALzxruh3vE3NoYydqpjruG8XDCWt3EqfTybDgjfRrEfKKR6JafhfEac1RcbQS4x",
  "key14": "5DCQj1XSRnR4Xup1NenL4rEvTibxP5d3rXhQPCEn9UCey7o7jvWsWPU2JDCE7rJvXxccyWqpUdTCeQykmyz9VHbk",
  "key15": "5gUCFQKHkyttB1CG1FygiyAjkVvorWsbKmftaAwQ5u4bDyvvgdzviQA9iNqs3qACZGJEyt7ALS3WxRiNRttdw2Qy",
  "key16": "5sW7gSwEkQv3Sk5s4pcSGTMUxwQVssPYnVT9TSoJaCiRAyxgdc6pvtKzi1ENoR3DTuTBcn7geJugvkDySZrpbFWp",
  "key17": "3pzfSwws3dhmAR6R7KcfMvhatPMxpY3YMXe9urghTqcXxSz4YeinxAFV7nSPNP4QrA5Vz3GvT83gEqpa6ceob2Hz",
  "key18": "44meKijUg6QsfdDzE8Cg9Jint3SMLERFo2am47TmdqzsY44CRKQsqC5WSvwUMAUwhxfaHgFwYv5RrLdsVpNtZ671",
  "key19": "2LdvtCNFQoExR8pZ1gFjaV7TgtuCd7MBSxUmiFRUZ1hwnsANuujhcKJ5q7LJ67jWWrTYSzmpctth4pQbZDQMqGSc",
  "key20": "49hSovQSmnziUmJmNCRFRUY2FDKhhvue8Qvx624P2F6oZFhgSmd9sfwJmn4dH89vYg7rRTUCNCzgr5XQcjDVk5Bv",
  "key21": "5jxhGzyg2bt6DMbpvNkzfUAUju1pz2QNCkTejPMoQmaUzriAhuybMwCi1BAefE4CB6ck5ydL8YT4PPAgERNrbcRo",
  "key22": "D4H4awQk9s9AVss9o4H1nPW52mc2LopzZao9ZVmz1aRqEiVf5oPUuU3CDvqKVHnxQrrKvrXGwJxHj4AgyULdaEV",
  "key23": "5VvL8JLscwpv5xLbHBkHmaZQ1g3zF7AmLcEwTL9NMQJH5m54W7wipKGrgcUHLsS9fhGf4M4kS9G54rv2XcW8qw5T",
  "key24": "4eeP8NTkqb9MRCBhsn1EpHQQGcH2btvEiC1eSJBu3ssuZAUsaoLQNmRjKw4AZiVfW29v3n7jLQ1SMe3E2Hzf9Wew",
  "key25": "4DnfyzDb11FAJry9UMskCq2RqxHouUfBgGeSS4X2wi8atopPmFquFLDWHup8do6jL5s3jyGGPFMQY5Y3Kjuf6LEF",
  "key26": "2yHMEddTgAKFfTVFFuy9qyTPUcsaVrsfsgkYuTjpywGmMADa8xgANPWiZzP75WPxfDL1oFxcvCT8vcC2bBPEQUuj",
  "key27": "4Hcvw4FoBBLs77D2gYt5HrUBhZ7isXra3jFpgE9U6USpoUgRT1pgHKcxf5jQhLbby49SC13RW1WG4xzUTTLRSFxC",
  "key28": "3hXad6enecwz7k2GCpML4s5Q8PipopWz6696N3dt3PPH5moWAkRzceQuAsXTAawQ2JzjiNUjEFTTykU6cX6sTDoB",
  "key29": "2yMbX4MrrauKgLnRQn8HFLaJYm5RTDUvMqKPukSYvdxVCfRkcpkCm1ez9TYMrTMCAjhFZjzgvHWEYWG3izK6LZVV",
  "key30": "2iWr7tErr5yQLDPffu2Wofc4XGXaMym3S9e5tHnLxgYHrYTyWSjenn7duMz7s9JCu9ULpzrCD5P4FpHKDPAYxngd",
  "key31": "4456gf8gZd6e5RwV4YkvLcg3oCXKhV9G5Fimr2C8SDDsbxP7CGCGjCdPCppGVDcFCC3bKPmd8hDRSsiVq4bXgp1",
  "key32": "4pmxkpqw63LFmuyqEANCcQFvQfBTHJ9JT8yPLcjwg4wsHnechUg2EKjZNEoC5gRgDZJ7hJCYn6VZ6gfmZXWxzArb",
  "key33": "5qTQuUGWV6Eejd3sEaJaRnwNEDggGcDi19TsHELHV6VbHvxJkpw5ddZdViXgGn8h575bpAGWAnAz2kuiSGzNYKhj",
  "key34": "52G6FCBQKVaYXa3AXGyPA8oFPm5GGAx7mWvYH3MkgwxsGcgzkVSUxi3iXxLrRHDkqBenkrLzWUz1ECJpe3Am2Dnf"
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

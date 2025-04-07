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
    "5Gu7MJ4YbnCTyvP9ZcZbDTSfdwwqirrdHNq3auP8VeqH1A5oneS3sMRSCEZuLnSvGm6ZmcjnTwgQGoXuhb5Ri473"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mitQGE1AqSk51ecbUxoAZoShpuHXv4mza2Tju7qoAdqcKq7pgUjiEa187HsQPQJ4fJrsyDLADk4kjjx6bvmy3H2",
  "key1": "Cdpdr2zmn4FHQAyFFo7wxtLUDXMT5UciWgozWPXt1GvmTG3RWMZaPB4QYaVe9YdmomKNkGp2pWCYJkEKAk7T97W",
  "key2": "4aDWq8gDXohCL1Arfifyzs1jCcFoukaE8pJFUeXNPzjAeZ6cBYLJxtdTMj4peSX3yBGPhy2Q527m2AACpvXqNPCT",
  "key3": "5jyBNRN37mDtj7gW15WRWdjqfnt4ofgw2SLMk3Kkz17q6NyZZ7QEHfcgATSp5mTHri7KJgyace4gJpVWMLBJxAZd",
  "key4": "4gw5VFwr1pqfKERWk2ZSwaJTC1WEGvoSsQKf6gomUnjJvb6D2hm9y3JNUnR4JLnccoiWtPn9XRcaYFhXfWRKVPBh",
  "key5": "65ZxZQMtvm7uuFH5WtGL3urmm5CbEUh2KxaDp9wGBEdKMP7Vt9x8bhM1bkgrsovtzthyz41u8dRjRjXvbjmx5Scb",
  "key6": "5Kx3DVAXF7yfDdhcuCnKv1sqsHkEHyVjkBwivdgamhcgrKqmm72pHo7sp4vMguPZMawUF5DWVCkyfLmSnUir7eYj",
  "key7": "3n85q45W5uFdd27f5wdXkWdBcqHzqFdANu1R1CqJ2H43GjuKJdwLFYSin6M95vGNUDC9bjcHM6pVwL3vpE2V3wBE",
  "key8": "3qYKHrytPzx5di8V8JPBtYbjGCq9bptCWnE8ZH2gQGCsNTx9HmEDumAkB4cEC2PERuFWoYk5wz8VygZHVw3eeUiR",
  "key9": "5oRtM1hrm8yMU9meaSYKVkXxvyoYR4nutrbmXrRuHBMXmpBiwQ7NmsjM1oekPQdBt9oHTHonxKcCzgubnfNVciEy",
  "key10": "c3bPLVXwpXovXB1xLg9gQAQuM85zDdg5LYuuJSZhhTaxrYM98j1AHU5pCQnuqAgn8eUSEwmmyS5o1wNXUsybXDt",
  "key11": "5NhFBxkZpggMPUkhhAbSmdesDnYWxygogdsQYUKZo1GaBRpRjrJFgrPyzYseuPcZ3fDsMzyRN4znn6FVDtKNjmCY",
  "key12": "4ugnM5TNuYu8BykHmqPDhdwEybYaoKV2t4v7SSLUHbgc79oGTFsQ1FLbQfK1FveF539SipnRm3rAdnXWZeFp5VgP",
  "key13": "36omkAUvENr3SbWCfrJEQDS2ejgxRBvnh272xcryyrsj3AzHvrvRN9XSLe4Q5VAAQLTutU11qHW9trdbfSBjGVKU",
  "key14": "3Vv4zfmNyiCQ62MYoZ4gtauN4wgGHGKsRYQdYSZhg5asQGo55D5GjAMF4Qk2jHZGJC96PLRoTwvxhbLxB5GWeuA8",
  "key15": "561j1wNKtNAwxrvzidhq1n7WuK9qeK3EjMbPzA5Xs1VLoz6egi9AZowUMPbvXN1n998H9awu9Co9DUPQZ9dTpbHm",
  "key16": "5Wq9Fm2WgAUrsQc4MVVu8MmJRD74t13C6NtYsHdXyhYn8VnF1FFwEqqXcHeEYmGby5YqRzWFnKNBziUiGfi4aiAt",
  "key17": "3vrMZH8AhYF4G4uCUhN6ZGP2pmHRcV5e92EajWfWiLjzUSWm8tyXdUZkhJZH4W7V5fgiS49uLqUxdLn6yznyENGa",
  "key18": "2uTstYqoN1RqzU3MzVJtFh4CnUJmAa3U3PzQPkMXBLPZVD4sMzxBFgML2pYe8KUuzbj4cQg84V898bGQCFz753kF",
  "key19": "47sAbWQjtWuXc4UquK11KVwdSU9fQW3fshFVb1HAnqSbrs9Vycd9QVY6xH3WRkzLg6VGfGpEVbrrBeCDVQzfGJVo",
  "key20": "4zYyrLwogNJ86w9j4ed2Gp7V5K2dGAw7dicRBn4TpnSgRkxRbrwky6VB7tdBMVvcMUGEsooZghH7RFAFhGsWGQkX",
  "key21": "5S4j3AL2nYfiwM3BhA7MUHqtGMUCfbmrx7BQWAiB9BkTeZEtj7LRhqRsS6oSwSaNamfinWja6xmpk1qmzreSXPhW",
  "key22": "UaFbZL1yuAAw9YjCXHaEqJFKDp3mui1uzwaEGGJ4Y9sDee84fYnucjVCLp6pVTbq5kLMYypDv6ceAFdBXDPHQMr",
  "key23": "2CxP3GHPgPM3FVGmBCBy1zkRiQpmo6NamHLvmxb3ijkk2MNmh9Sjd8JVnj6264tQFehFE7wHbU8C9hT9mNFSVV5Q",
  "key24": "zZPaENSqEC7Y9uVgAN1DkBYGEDC1tG5YJG2HqkdYm6RDFjhHteC7XvcqdZqoKH4E9MSLF2ochezmHzrA4Wo7f3g",
  "key25": "3mJ9CbbxaHZw3YY5X7fg81nHj9WD665FSYDnTS8L9Yixz2PBQX4tj9cXWNYiGafYAZx2H5p7xqmYvz5BdawDig4",
  "key26": "ZQp1cURVZGu4hkx6jUw6qCa5BgqHqg3BbmXowNPyrKvZd8aRCxWx51SdHaKjzf3jSrsrHypZ94azbgDdqYchyyu",
  "key27": "42Sd2sfjcJJaSD9c1bs3Z8x3CjUhRkeBdgWTvVNGXnNcWBL9re4KPQru51PToufJhZU3WPSsq2zbtXQmpTPHxaVd",
  "key28": "3n3NcQnGro5YtuyU1hJ3QAb495WF3WFk5yh2Msf39VxBrD5ZJpBHJVGgGYmihobXdSJfFSTXiZzjmttwFzNVKaXn",
  "key29": "FAEnH8s9dSwtwjrFk9Xc42jMXvpoAGyXwiPAi9KLeUv1Nt91tTRBsmP3zcJXTi8NSEpMToN3FjuGTF6xeyMqCKE",
  "key30": "JZAebWv47kPhmCQF2buEUeNsCM5MaLSMaT3Yk716vqq9GauqJRwcB2jrtv3zAHF7vqWGanmpeycrc5x19Vz2FBp",
  "key31": "4eNrWAKZMJRyDgumKiVtYD1eZYgTE1KLQXXV51Qh7F32yLp9YMzkP35DLjTAeV4KLXWAPEpxkFuuJe94DtJvwk6y",
  "key32": "3FRTBvbRcSdj76UieWNe8ASui6b3zE7xSWbVKNo67xxjB467V8bR3K1u9BV1DgZPDddJQYHcWPUKKHtoupMJavMY",
  "key33": "5CyykgZuRYeqhA5nfj5e6ta3jHufSgfYCYWtM9RcVc4BXs5ovNj1RkarEcSvXYGYnoAS28KwQHDEkCqsA7hC6uBL",
  "key34": "GTKugHR9LSYUkhMDk1gU6YAiUK4TphGiHW93zye4hg5niJx6sNvme9y4e9vZVU31FecMURnrEpouzt6WdHxqQRu",
  "key35": "3okkuw77vgwiRB4pkUDDBixGRoeEnRytDQqzF1nE3mGHE8Tt5uHyLveGoExL5w5kCEesBzYCoB4LaBViz4b2wtcH",
  "key36": "3WJDyPkiFzf1GEA7mT4xfN2XttLhCnmYWUmNLwwqCBfikb6TQ9hrkNMsqhnLiWWyJCu7kTtjxmVuVpr3Qog514wC",
  "key37": "sbwtti2e97NVW5bGRBQzAz4M73dTFbCTVduN8J4iPZu5dhhyTGdoZG2KEjCwtH9YLJZuTwEJ3MMbWrNC5Pud9he",
  "key38": "2KqmgC1mzJB5GA4jThYk3pykwXeKKMteFLWFWU3WJ12QckHw7WLJ8rTJMNDpkkLGPANvzYP7Jr4dyNN5Wj8tAkjq"
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

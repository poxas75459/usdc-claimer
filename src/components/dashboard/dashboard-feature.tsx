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
    "44JtHpGN7S9XcMJRpB8jqxe4YugkbvHprBMxSZ9a6hQqh57SLBAsa2zyoMoKscFBzvnK15JQ7veiTHkKbpqyaSUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xtuZMUb4e8zWFFTwZ2CNd2a3ZCUaNUa7C3kVxVC78VY5BzibcYqm4nPBjMHKsMfobbLP8nnPUbqpoWrcFupAJBR",
  "key1": "ykvtBG4fziySpgqrxikSYyvUvKG15qw4hoVxDa79PXZFY7xUJ6MdEDhD1i4wctkTiJikJEmqR6qTDfqNDCfqXmC",
  "key2": "2MTUAiBsQj3kLYexJNqPjqAamWR9qMFbponHZosCjRndV1b1rCaaCGPBnPkHJ3saLozEgGZ5KSFnpubP1rsrMqzG",
  "key3": "2BCuQ7HZidQau8oNYEzsk54t5buJ4RdwaPU5uJPvC8efjuhW971TNAU7nMWghVTutFcNg5gtrG8diCFK8P3faXUC",
  "key4": "5GqCi9Yrjg8raVeTFj3wDL4aDH7XX7nYDBVWtCq7rQC7q325j7LabAQ9W6qKMEDEh47vvB3xtk6BUzuVW1D3SCNe",
  "key5": "23aTpZQAiSk2yGXNMB5u2oESjQkaHsNEiFUFGXQqwERo6QGRDnFnntmkL7igzwkvBiC776ZxvdEmLqTmA551xSpc",
  "key6": "NiGVyC3HnnbHhk1iQKj3deUAT3GFuBt5pvnTqvc7bCQjzvEQ1jv89L2gwzM9mAsmxKBSkshuZH2fabh5cyPJqED",
  "key7": "3jQ1CjKRz5cgrEfSy8rFXcqFSoxytRkxftJjrCo654V7Jce2sjbUjhqRcmDz4bpjuTaW3FXHsZ4jPbicrvPbRZUx",
  "key8": "piC6tPmdLx1meEJZWvHv5AGoqrCWH7ZhErFptk6CE5SnVjXR8pegi8SRJDHN5uXcioPjz8MJbLGNm1J5s67Qf3z",
  "key9": "2SbsvVhS3Q8dioRxdApJcQxgpMZKzDtEJZcpCZGzAMoMawAKMsRnR7ermYWmzdL2iiBg5LRprVr9MzVDAazmboSt",
  "key10": "2GpaTE5s4ab38JexozsdPYgovXUwMZ5h6UHr8VcdQusKNGRwYgQZQPr6PqvGAhnW1cbxpWKRyGoQ82T5fazBvYP5",
  "key11": "3vasTh9Df2ThePhrgMh7sBbqCgiQ8PEh3n9bhFxjumYJTXSNjPNzjmUqeZsyWUzST7AhhFkhm9tLD77E7LaPLDwG",
  "key12": "5VZKerB8uQhJXi8DTYEAdpvdhPG3ZHCf4UGBJEp49AMM3HDFrkHTZEUybLgrdHyg985UDmoZj939CMDwLTyZtbGX",
  "key13": "2xmW3eXjYRPzPYaULxt92JFw9gRCn5buAFETHbeEewhuiHuRBp15nZcgFfuBuYRNRG49o3HubvCeNf9PKhccAbWH",
  "key14": "65k5HdxWhU66QjuyZGkqtXyaybXMgE7Lt7anExH5zqxXm2CYYJD9geK9D4SU8sx3ar4egc8TpjejAbQyro6UTJpK",
  "key15": "2FAbfoUGg8PrtFBea4RKc3XSaT7jY84c11BhK6ksSVq5bc3AWrQcySPVDPmJ37ZY2Cp7hcs97YiBQNGLnx9bYwvC",
  "key16": "5jSmqdh2cb53YCFngtPFoppmiGZYdthBpYSgT6S7Eia7H38QfxgCypJqKABaFHPtbSXEM2fodAZGkD1Lcy5uu5Lx",
  "key17": "65YDRkpFpbRtLsRhu1ypiSXhHvhVfF96dyMUqGZViogU8Py6BqLGen4zW9eg3f1A6bN1KfEutDEaPNSFzgtpvnvL",
  "key18": "3LmzhYsjPgLVbivEd9oGgtshk8Q4hBAaYx1YAxCd3rZScMFaXny5gtygpVBbhFDT2g6S5CEGrLRNyVG525FwXvpo",
  "key19": "4nv3rejqSmoFJ5Vpgu52creDHYKcNLrcDJL5jfk2GyypSm98dYw3kaYqpuuFQFd6YHJimDn7UjGgiG7CSHEjoEsd",
  "key20": "5Y2WhiYB7aA4H9mRbGTzCapRbxYspLbft2xwhorBXEwDq7cWJvXZkfW7oumjuiYNbF3LEUYNDNkfc9g3RBtJQxct",
  "key21": "5wFd9p5zfh67fwGNbfLcDK1LsGRjVc3XcnY91CQKoPCpLFPCNhGxywdQH1Dy96jpBgtbn2zUbEFmywAvnKdJosZd",
  "key22": "3UqsmqwVQztjsPKjNDmnxu8n8i2vTiL3VEA36AKKTxMTzTY15EUtpgLH1hQ1Vs13k78pnnbzsfoNRAJiuMPnnB1Y",
  "key23": "2xjQXBeszMDtNSHP6UkhTVeatFtcSnt7Prp1UmHp4NYakxMSXg9KCXYL5xVPWjEoE6HbMwi3vrTJg31dfrjaJ87",
  "key24": "62ESnNqMuW7s9HCBFiousZbQsGUnVF94G5Yke5HwVw1SZHamGL34Rix8PP9CZtno37y9cG8Ud7GbJxUUaZ6KCFP8",
  "key25": "2XE241dKYR1wzRco3A4VaR1teN9t1GHTHMvTDBebKuAhKrpPgyhNDWjnL3s5MnAc7cHauecZuYepVHiMzrpUZHgE",
  "key26": "3frFLaVCA9WgCNSB5jUYaMBZn8JkYp3mBH5bGGGVBTdkqDs4ibZih26ZtVRYMEtRQMDXCaYQuRfpypdSfNg5GAwn",
  "key27": "3g9F9UM8Fmk2VPCvDhDkH6TKmPsycTSDFCe6XVDqp2CU8nR1PMnZUbM3CBXLCs4sDakcqtohr4PNKx3krprnbqdg",
  "key28": "2a7jtMESCka6VcJAjzG9obJpJp3nNDqKAu5JcrRHYdR7LUEiUoG6cvo8dQw5MiVjegttnKdipgWp6inHwPx8y4gL",
  "key29": "5MTwCTJPjBjSU657Fy7FvY47DUK9bckfWtEszNu4PUypC4FciLQm4JRJ3R9Sa5rZyFKhNr3yjmzxsxqdVWWVn47w",
  "key30": "nUVZ5j8uimyG4MtEMCmw7ZFS5R7413GGPLSEwa7tcXVDWGN2daQnAD5ms1j6UVjPBFSrGnJRSjVFrNvtKuVmo9Q",
  "key31": "3t92WQdryJyFb1fhX88GfqLj5tcLbt9Qj2TgapL6o4m1LJkG89QCCfVy55h8NVgxGaDLChBQJjU8n4zrtgLWvHHa",
  "key32": "2gEr5JVCHz8rMcyLJzoowPfaJHZ5V1uv5SJmVc8wcyw5UxLWZG6VvAbL1nAEdDeYHabj9QUe87GnvG6RCDjTYPJ3",
  "key33": "RQz4gwH8csgd2xk9VS2fJ9nBm44LUUkfx5Ktymnnj3wFPYabJFMYsrLvMUAPsFTi7FKbqHnUXtzybui66v6HZk3",
  "key34": "UqEKBWGPzvPoyyX2rjHuSWSswbjonFyyWNwaYGLCLJhvXastxaaPhhafwSnTtJwBUJRk6fnGP2jzCgZxwFTeKva"
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

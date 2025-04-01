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
    "3FL4uTJEhRYENz6QuAaE4DDUJrzJTg8Jn8eACrgrcshtwdGD2Bt8Y2wDMM7ZX6ec2Esf1NXRDU9w1fYTvNiJSt2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55XPPJbcT8WsBno9TPWUV8ygxMzzLrU6dcvDrssdyh4bNwbM9B65uWrATxpaVzHkxcHpuV7PhECBmbt4qfeu7uqw",
  "key1": "2zXmbzH6HBBxZNjN8UtG2tHYkthHhyiV1SPQRsUFTcbVoXVUMB472FX6FbaUqzKKHtaZQ4Gsuxozmio98v6MyB6e",
  "key2": "3Q2LkYbU53fpFFJeMUjkP9Z67NAqGuuRZfFy64pqCdWMyf2phHcAahX9mBPxDSoRGZFjS6nXnjB6SeuG3r5je7SJ",
  "key3": "4otDEfwhg8H65FZGFoBigPPk3EgyStV1guuvoAeRXv4S2dVLXL2xpWPcbmUDCmsAeESLcnaPTo7EJ6WRdXCq6Em9",
  "key4": "2HNjy3e57M4ZaxB7TB3ctpqQpqfpHpJANHjPvNaNjTVn13cRwU4ooUqsp9DcLA7uU4NbH3G7fatSd89YjMVWquXW",
  "key5": "FL6FWPPhm4qa6defoGmDNRcaja29NVtXxvuxLcDuUSKpLMh1DczwdjnDL6UWAHAfdo24ECS4g1YGPX8vuJVyu4M",
  "key6": "4dv93fPHcbMogMddvHPy89dE1e22vhwPpQKxx6wc2QieKnz2RShfDgXPQe9TeoJGpGEEAB1pY1uf5D5nWKzmFSUP",
  "key7": "3fuUwrAFgjZF8EWsTjAXGpn8wyV13jin4afqnT66YLt2PqCn1cJs7EMUpSmZHh3c83MQDMmTZYasGLhxvcqxBimb",
  "key8": "ayQX62Zevt7XrgmBiT41FP6uhA5msHndp6GNwug2RHGrWx4TXburdCj7NM6f29EreS15Vc9dXC4qKmc8Bdd3hQE",
  "key9": "5YxyqRjnJSzAnC5iMEa4ET7t9eJzwAnZTYzkc89LoWsUiSk7NivFKtNg2hVNzj8yowPo9XjxxaWqVGWgJNXpdaFt",
  "key10": "5zP4nUCo2B5qMYhccJjwpQC8yqpuAtWUcoHGfHKaNfo73ub2kFh6MR46R5fRRUcRqrQpQjAN7dT7hspUz8Hu84nJ",
  "key11": "3RGxCCpSN7eLTABWvFMkJUyje8zhFsN7EvHwGa9TQQyJe7o2HM2Som5EHd8PHGBBQdFmjHKQ6SqTSgy231bXLdHE",
  "key12": "3DA25j9fMXWJiXvznBbNmsTSdij6551TkbW3KBFr6QRTZYznWXTn7zYEDowP4HSreJgV1k69DWrDk6t6VMCcVVCX",
  "key13": "37tmuZd6qb1B4jxgFWLLsZme1Jf63evRmRocnzEq4ByChdoWDX6w8jV1M4oK1YYsBAZV4wn9JYpjyXvADYkqT4j",
  "key14": "4Ae3EbcDoSdNPZ59CphsFQjPDLspHy2iuveu69nBF2Bru5QzQQNDZJct1yrnKsSaKgdyNckkpMKcecm7DawfMNo7",
  "key15": "5Ja3RcuTAAqt81qeaJdrtqf1CDjF1WD52a3AznTCo3DnureG2iMejgprQmWUMJbDGvpj6N1xva9o9SKqcjt5v4mv",
  "key16": "61uRetBSTpHVeNy9hT2jExuXUiMzui1rCUKeMZ8YjDuTr8DvaLT8Te4oUDENvoxtG2Cj6L6JMBrf3KdT2kmmNaie",
  "key17": "22SgqWqoWBNurUitWVYAfY98b61yXJRWn4RMpZuYDPYtvpkKhnrqun4n3HDVHuke8izNeMyn56GDF6NFPGH1JfcP",
  "key18": "tc8jwMSKgSD3kUftaqcPboRwCi5uLQ1WrFvtc6GcW5Asmt9YLNyg9KZHtyb8qsDqWVyMdWqBUXR8pshAy6HnkSA",
  "key19": "5dQHxpUsweQMDL5o2wCKyarijsVXhVMw5tw6Vq5tHNANUL2EQX4s6NLAU7XH3CfrPHGHJia98TNZWy1eLYPBvWwK",
  "key20": "3BYUcQ29TvCCAg45yq9GW6QWvfUxFQFwq5q5TSQxLUzTwPemhcDMhkUWgizj75hKJNAF1n434ifMrAd4Wttcvhsv",
  "key21": "56m86pigb8GmS9NpqTqTkEbLm8dT9gFH724LRTKrUGNHZpAAhPfZJghNRFZezs83tmMRo2P9rKyNwr7iLJtSqrYX",
  "key22": "GJjFkpZ5eaTHnFubwdvtBA8vASJXmqLtqe7qAdjbECNGcA3GruTCky9giz1MUqM2pVDRzjTCcKstBiPZq8MGJEu",
  "key23": "59aXKA1bT5hGgzfmnecFqAsi33yFnr8q5N4jhys1ttrp8XyZqnqorVHLtLbyYhYRgZpEq9jtcpZ4koFStoBU5m4F",
  "key24": "2S4gogDQB7YNt6icMkUSkPgxWLVgm9coKRwqSZMyheLs8xfKY87mQSVRDCFbb7CawKhV35fY48wsCuMPFHWxG8zR",
  "key25": "4C82UvbntmNqyJXYyyb4VqZRAqZSZZtg1aEP8FgEXhtGkKiLeYzakbwCLxutfUzhL9nJrCQN2YyPPwzJ2FqEyRtG",
  "key26": "4T4GbnP7CNDN7vVCiqYiTM1kU1F7qWnUoBVJV6XCNhMB3o4Tatss4xxBYnbrzdrWmki578usvsa2h6Yu8zVpedNm",
  "key27": "3d5CCwSyewX1u35qwK3btWunsSgch69fedou7P75Chk4UFq7xwypNc4JyHE69US2zPmtr7mr3ENtHRp1H3TV23Kf",
  "key28": "4cxfQjtLxQHb94S1qRESbHFMTmxQadRjLSHdTzui6ZX9FZTEtmxHM9vXs9ybYazHpovSNEKjzMqrd14ARwLhdjVt",
  "key29": "3zWYY1PAvG48ng3rRt9GQRKzzyTMUvfg2YLqGGy6wba8ZoDPmcwm18qQL19o6EBVJra3KFqLdiceH3csTsqrMSqh",
  "key30": "PaDDCeVXbktmnHmxTCLLCcowz4MR12QemxMUjjEvW5vmPpiAXdWjnJjxnmbSdUQkBx5531uSXwZhMkJE1HH7XkH",
  "key31": "2cKejWNsN7Jxn1p2B2mqQhuEsYz56LNwTVGbHLRVxZs68L55TtKh1PcRd1xhtaBRHjSNjJBCaz86zBmYUavaaQ8e",
  "key32": "5uNoTCJdAVPkxr6tuXP7pT1YkmUQBp3PnLiN9t8Yqim9s13D24FAdgvNsFHZZXEZ5vJbMVq8cNV8be2RFexu5QNV",
  "key33": "5PsD6xxC1Jb1WYJwE6oDcGbz4EjXfAp6R8UQFWy3i9H3kkeYANnKpErJuLhXVJV4vZHLnKgK1pFGEAuB749PRndZ",
  "key34": "39hy8yiD8kxigSZ61M1cE5R3mAQcgME4Fy7YQmEa7ECHu8TVBmXRjZ9q1kkQhbgKKRfuUt1gRWagMuUf4GwnVkYa",
  "key35": "5UMRgVhNUZTSU5ZvpEy5riq5EpPgg492jeFjZVHcM7c3y2eJyjN5CVu4jbrV49MNvNS9fhJVyi2iLeyZiW2xYeAL",
  "key36": "4Q7LrUK2jhPDuXAfFnVpKMooJFpfb98kymq7RoFirN8vQ2CnrCYpX8L4FTiChJUAEH2LutQwXWWRdMrLrwEr6hdd",
  "key37": "42U4736tLycpkJ4wbB3ymVF12AYx1tFQU7JaYhEjVJWakK385NktxeEwTVeVpwU5ngajw94anh3kpy2kJEhiDQPe",
  "key38": "42vhAudRtoNR5TZ1Fvk6cy9ufz4bkboe7utJeRNKZr8UESPsiyqJK2DAnVC6JRSaraYBBnw7nuKGy5NaAY7NXxqH",
  "key39": "3AiJvw9HkfzcNdMKsZ5uV6R86pE7CVSPzv4kYgAcxNuacLWexKB6cZ5W7G1hf13j47HJcsgpmeMxL728PG9CKZzY",
  "key40": "3kXUuQ7nNee3gnx6NXLJTdBvsPccL1eSMCoHf2zYh1rCDvWLY5dJzAYyuyxB81PiUjTJ2eRex3dbkb2GAJYjwf9K",
  "key41": "5usGQfHwGmDRGaHuiZ79AYhweFdEkSzPFtq6oacYjz6i6BW7h55NUqmvKJLopCBnRxhumatrD2vqDr33i8BuH2un",
  "key42": "2CcEgaZRsxUkegreQP5X9NB5T55Bo8ojbmnSXeKygqnzyBX9wnCV7gcoUwwX73fCo9FSEnM5PKGnoE31UaorDwoG",
  "key43": "664uX4Eqf1iLNXFkZMG4LUp8zVTdCppejaYXeEd13AJGsDUKe9p5XAdgFLcVqvatKLFME4L5bLaFndoiQbp6D4Yj"
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

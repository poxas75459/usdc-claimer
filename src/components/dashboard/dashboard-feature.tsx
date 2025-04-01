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
    "57cHgHEEjoYbj8j9DbNi8uGfD7ei799WZgAubvKbZ9hpbivHiiFMq3ndSXqo7VNMpPpUnLSqJwxCq3S6hHGQmxFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcb4eLZLa4FnDJ5zV7cP8NmEiJgxzxbBKDnDtYHzA9amERseeKcWtQpQ573YYWt1r7SUELxVtPVLrRmuZWeipKr",
  "key1": "2WguhbD6n6qcatpbNeea5yX9hoinoNoysYdLRUFutm9obKDiZGFhcJUReGBCJdFrGznsTfoWwS1mVmKJj78TJoGr",
  "key2": "2xvf6ot6Q7Z5DpVdg3BUv8igxikozi3HdWXvY54s5ps7eQSTfY9eVDxaG8rD4iD7X4t8b3tox3kFraUKZer82Tg7",
  "key3": "3BTXkps6kb18uNaYx17iGKsA9kebxBitRVgYZybryFcgWMjQmMfMQBiR7CzpsLJQHf6UCfgtPvJaoBR1SoaEZXi4",
  "key4": "5Ri34QkSZs3QTSBC34uqmxXL6SNEzbWRjE2moRUnReVwtwrMx5oWmYAjuD71QjCAZfjGeud2copFNmwauuRrjtCE",
  "key5": "25dG1ZMbPgBVgzGFnwKoDY3SmGtfVmkB1jEwNB9mzPDmY5FK5mWoG2UVbvceo74ZXH7uSBJq3vdRTxhowwXpaGXi",
  "key6": "4rvhdhRYHZhCekQ7ff2Hqo7bJPB4ZbYzne1Kr2UtVfhMvqTz2qqjXogws6rBUVn9xwfHV7z74iaeBiTz3aHXhM3",
  "key7": "499gL5wgKTi7wWU2EhSdBwhW3gWA3QqnhocnPWHgRJ4rF8ot1zdCqF6jWCPvBsd3Erzjc46Ehj3pRonVBJMepR83",
  "key8": "96Fu7LaYB9LCgEMqNpYhcE95WNmCL7rbN4PTMJdjcJKscgHh2SpPoFEpz8PBouVFVAbgTBJKovTSpemjgZdB39c",
  "key9": "i5SgdHvZ2BW5QiWCH5BZ583RuzsW3vJkjSHJKx56eQzEbNVQ2p1fHvSuPbaKx1mrdHcM34SZYEYaDyyDLRZBk1n",
  "key10": "4mCnjAiKm2UXyaocBSEmnZJLMvhxLN5QmeLkCD5YazPBHEPKaU4i5D7h7gU9J95GhU4JWhzkzQvkeDrptBaVLySL",
  "key11": "2yDFH7zC9Q896cGeTFkqpmwy5mWnGRYoRjLGoZ2iYS8Z1hzmZoGU7aj1viQbzcaLsg7ctUMwFH1T6o9EkbDVELwe",
  "key12": "3KJV3TsRXskSW5JFq5AjHcGhdDMKaR3VqHsSsNqcTporc3epiKkt9zHhsXNmfkwL7SfVJG79YTmUfrg9DG9b3hiF",
  "key13": "4U8DqCHKE6hpeWuUeu7DiKY2WvwsmgDAHVJfWFtNwxg4s5fLogm7Xfxd432uvAT6cHFsKLWpqkxsJb1Zjc9skHP8",
  "key14": "43bFBhnc1xz6iArRUaTXjdrVDFwguqsyqQfud57hxiU6yUQJang5SYaQaVwaBeCLLcAzkGF3DD1i2pwVHnmp4FLa",
  "key15": "44SsY8APz6vK9H6PD29BfvXZMG7fYDbkP4HmNwUqBkysUqqhEaccwpaUL4iRHnzShmRKGHvMYr16TnwR6GpegmDQ",
  "key16": "4dXv46uy4wpCCTkPuycS8R9wAAdKYoTg5o1P1Zm7HytjxTFqrqB2Uho4ki9cLuoySVcPFofb1BnS8TtS1zxSCaqf",
  "key17": "wuYKLcBZGG13oAVBg9tsAuRQL4XcgCWWVRp7dJg3nbsxKKc42gNrXVzw7bqdt1Rs88thC65RaJPmizu3e1oghpT",
  "key18": "5ToJSKGhSRUJEHS5C7hM4TnAaQRmu3KTUJmW3nuVfx5Fb7am4fWzgfHLfs4V8FPHgXmz1daR6ncpv1gkmrEb7qWB",
  "key19": "91gNEMrvn5qBH2hi9bXkVsCqQraDtKAeTUygZJJV9X7G5MTtg3WER5KDzoHwmwjHVJ4HM1PCDXYkRgV243ggRpD",
  "key20": "AQPGZSdhC46iqxs1HePVbCqtKPZsC8hzqrzo6hxzybXpeJyWXoGrCLNjgp3C8JcPL9QZcUqXNf4FLeJ6wkR7ydL",
  "key21": "5XvaftDFgcBEKfz1VCN5KqBAVsNh6TAf5HLfPhWwd9WRg9ZDCctbCtZ4K9ngFotQgKQ7vjmkTJjxYigyMcyoFDnP",
  "key22": "2nemDe8eHy4YCnZEFzWHK6J9Z8qNsBJ5qdjaK5uoPcee43jRxCxhbRgUc1DpK5YXMtGCsx6KGpQhaibCcaKQfbmP",
  "key23": "2AUVZH29N3Kvnx4kXFvJQKznfzVeSVsxkrxzJdqThH7K8T2TmkdVNwUMEz9ji5udhXGbCCSGLzCiy6GUkgvEbiVG",
  "key24": "3j25VGhYXDiUX3rtRH3RwSxPxJuYYWB1XqmDniEEgFRuTPujFYBVZwAt9Jedesk68U2XbykpSckUfYRa7w8xNhy7",
  "key25": "XGqkmycrf5ci5wARKVuLHQfvAYoh8cZ24eKCFvSxcratNDpQjcphsdeBN6k52Gwnv85zD5uYVimSm6tDphhmvun",
  "key26": "5hii4GKMLHURtKwyHGTLK6xjemFQSgDSzQn7SBUuW1pp4ETtdjJEEMaVtXkK5PRFwmrAwVaYCrmuuTPDiYbud9Jq",
  "key27": "32ghm4fGgz4ejsuoP6mzaxhtwss5vSqPrekQCdDskshJ2oG5sSRUxzHLyuZgBhYsaE3aUegScZ5j7uUCwo3w9Gw7",
  "key28": "3yrfvjgSfc5xVYEycSaF6NykXCeS61oWsn4oSazRerAdVTTvhA7YoN7srV5NXHE1HjEGSjEV8kMfQSvFuaUv6GCK",
  "key29": "5U2az2WpFkrnycrZb9kN8YNsPvpS1rLzpsf4JVsAFy97u1RSZkmdkMcQAj7KeMwpwnotNhFyxN9D9LJEhCY6SjkV",
  "key30": "3Ffhqp8mmPzvRWmWAiXFrQK4TzU4V4zMmLJMVgRnPCUV2qmNuQcQeEd6VX3Q83Du7dvs5DikyuFu71CP7Z6JVqaw",
  "key31": "2SMjj76NP9MgRa8tT2w1yhEUb6DppETuTm4QcLcDhG5v4pAqgSCt93bXKgL84xZh8d2mJazP6TwL3PkHetBRv4J",
  "key32": "3UTpEn2LRNHnWuzP9MD18Zk9GuxXZdYr3ghp5MyG5jLo694cKCibUioB1dvRuH9WUrBosBHBCkeRQTzDSGsayo45",
  "key33": "2fJ9qFjxiLhghrDWwgrz3k98fxG1EtRMcpsntMFfrC8UvpxyXxqd8iwL5Bu3Hgo8XX2BZfhBtzF8sLtjPiWH7Rv6",
  "key34": "41TbdM5oKUXS2YcBWxQVNJ2vuWwvN17tuMB9z7QiZkRzduUFCJUAi4fAHjr9dhDGcrxigmfwnd3kuYsg25hnLUK5",
  "key35": "5swN6fGgTF12f7Zwd6yQm7E74HanHGVg9487JMMwYnfUzVxiDMA5LY2PTvjtiYwk18A4DxSNQ9s4Ncvsovmw1UN",
  "key36": "5catY2RW9DkeqzhGEbHsCvSKPufdm7New6kPxVmQPx4qFtAs1WbBxxrNiQzSG1YvKphHHBaFqDQKpdv5RcjRvryh",
  "key37": "jNZ1bYjaadTTeJNt7DEYVxWUWcJ2ctreXeJsGsvUNvG5kXHDRqitzBLqheQPGHTiHu5XbJmeky2tciSutU91M2H",
  "key38": "4WxRSH9BKKXXa4uD1e9JrPTAJvCNFUTTeFWya3sWpLFkEJfTzBXBchWSjDq4bFiFhxQHZJEYfZ48rudC2TK4PWEy"
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

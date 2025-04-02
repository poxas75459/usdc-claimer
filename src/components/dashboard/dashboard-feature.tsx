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
    "5SyUTG5DqAMc58PVHKgtXF5iczRocWxEFBHafdoFfAVgMpEYka1LKaWYQhzNm5ZUdtrZzCsFFxrunZteW7gbkSXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzguNTdesnxG1VCcAJbpc2QgfAD6tMvD2v66KrvH8g3wSuRgpqQDqYVjKqzsdZveScUFpZ4S4h2ye3pmzsfdudt",
  "key1": "39ZDn3DqatTsm9hZeMdp4HaQY8w8j4xJh2U9HR1JFwS13fCB2TkycbMnCePWhUn38C9bwofMqXErrMq4SjU5ST1h",
  "key2": "2oSbHGhUUW9g171HPb53RR5dJJWYvk5yQ6KSWpsQUNbqtw4Y1J5cauhcYnCVfMBZwGvBe6qpgWZdkHvJ7gQiUPXm",
  "key3": "4mZTYTadc3nbKpgTenvKNLoQVDQZB1fQ3g6b49ytf3rXRuZfPLWdq6wV8idaf5UhocjapVLZMHrfjh1vy2zXwNDz",
  "key4": "3zxaeTFNB1CDURmKkPdDURZkbrbok5dN4Zo5wbRtqKmup1dvMUdMeJYR3x96tiNYRGCyUgUB8WHwyxjKCgHuPiG6",
  "key5": "2UnrmhAfs8CiyYU3xwQae47yjjxeKUc4XqySWCPu5VybLka3nXFNc7Ud9ohn4qSiWFkUVSmrCTTsjgoaQRk5tuQy",
  "key6": "5TqYmNyTQxTnBfFbLXNBdf5GEU5DkhRQrFoSvuimAvMVeajecZAgMVL3xVLfnS8BuxFJXNavJYkDg1Dja4bgtrGv",
  "key7": "3VVjTMWWyT8M9ACc1iXFHmmhXH4ts5pjG5M4if3ENu4jmLGFg3ec7gufHAstNnk9w8Z6iwUHS4vskb4ymX86jZF9",
  "key8": "31BHNpqBhePQHhtDh6HTU74Kz8TtnK6VTrWrG4nY8EuTQxMCU9qPtmQYsdaZGJ5vjZ4uTJ4rmwVNE8xdWe8dKPiM",
  "key9": "2ZZ8oZBMJ8PbDbmwkt9739GuL42SnJp8312jaf1LLjfELBfLvhFMwzPJvnUooJHtmAJ3WD97Np4qa1wsKNh5ar3s",
  "key10": "59Xvw51oRhR6fyXV9CgHRh6qq1zPngzxvi9BruX7XxLhrGZe1wnp1tqaYNG2bBdUf4mYjdrauY214XJSkExqYu69",
  "key11": "4GrXgxDN8gAAH3q1SZhHhMQqh91aaTXysJzqh4ahTRhQRH5VRAoXt29w6dFXXWhCbzdEozq4BBxQPQuawKp2uHG1",
  "key12": "4JdfcmpTZVhqq3mMJ2uHW4n9WayNSXoJpNFrYNq2KSjzwrKsTxLR4iegmsjUwnDn5Q1PAA1J4QZKTKdmNfoMPM9K",
  "key13": "2NVQACQeqRBz4Bu3P5KwtTbSSc5hJwT4eD6gdhYpSpXrzfk6g1SWXdTHnwYGKsCtHjHB6N6cCi1VwJJvFMCAcuaF",
  "key14": "3qT6cAQkGVVZ5sYaaSSh3f3tgktXkXUV6sJMfPakSAZSe2i4du6WWBEsJSwgL1RriiShaL3kDJfjxoGonBAPC2XC",
  "key15": "2rxwDAeDh8EPV4AgKjRNoc7zrZxQKDc4VuVMVXhFxxvct2VEknPTHc9Han1Uu5F4Xe5yX8ogHrVvsddRXWQHvNoa",
  "key16": "4VFG5s8sBbMS6gq5psaSwaUG8ZkLdaPqXiKxC6EY4ZTmKh3sGtGT8y5QXE7hcSxwNYMu3VdtwfU8JHyThLwiu7c5",
  "key17": "2W2r893qouuCw1JwUNuhiJsyvjFo5s57g6Kbp4Eb4Y2b375Zj7rHmUFCrx1BiSigBMvwrQCea8EtJ39eCi3XPCqq",
  "key18": "61k5QuUnZ3TWgBcdQKMcf4AKU7kHh2CVkmsEGfXYEJ53MgDMWhqhFnEcpnKuMX1VYUyXgEfcBnpFfgMkEDFyEszn",
  "key19": "2f8Xv7o2chS8FYinzgLxyWq4PLt6b6KtZiJneUXS8xPVhVQ6YcvLtu6nJsy3NTLSrQHrMxMzrAcuXmYNMChGybxi",
  "key20": "4SKyPn7SVemMH7nFghg2bScAZA1fUM2vDA7xRtEskaLx59mRcFHsDLfeHddi7gK5zh6zRJRSUTTRv163ucZHUNrh",
  "key21": "23bjREBBimjbHaGB8DsvPvocidaVyNfyv1XGrCR8bpz4N8rAK8KNA4QXvwnGibojv5iwrnH4WJGv2E5tg56MbhiR",
  "key22": "4GP4vCNMnH298ZcudErzxLjmLUA2asznGoB7HNPd1GUZ4QoecokS9CmhuzHjZ7uWW2TmMg1NiWia7AVX4FAdf8N8",
  "key23": "23MdXNS8WG5fd5oYdDAYq3Ffo1VpbzxwDpg36eRk8kL4rkCuUyNt3BBPY7yWTyGi6h2T242Do5nZk9hrTGnJTYzf",
  "key24": "jMzMRmWZybf2yDTREjWen74K1XChq45DRAW2X98ses9rkti1NMq93Vo7Pom1rZeFQJG8FMKmoGcVwYMNSA4ANJf",
  "key25": "5WvSSYtrKGf1SCTKtZFreUGmMkbKbfuQiuCAzFHMEFCQACSjPojgwrBhJVkucB9vXH1dgKjFsaVewpeqshUkHHkk",
  "key26": "2LWzfxgy74rX3XsH1o6hbLtcpdqxVLud8fdmRTNVzBNUeu43qkwJrDbfMSgvMqChCeF8Y2uWBSJ19UyfwD1U6UtC",
  "key27": "2PdfWwRytm3ryFkM921NtpaUVwCjfU8auNNtmW3hj5JuyaFL2YS53WEhauGy7QojNjYALgY9c3SizAxRyp9s8X2U",
  "key28": "3vpoBx9Ptn3gVXKgcD6JHYRzpizuDeuSGAGPYA5U8B9DPkREKaQa8tFZFK7MTt8mVD9wR8Jzq1zhBLScpTvmsxqH",
  "key29": "2kKteDFhbXq4NL9A2KghJzU8z618E5dXJuKQjZAMULupmjL19e3gzc7VbcpriZAzurpbXiNq43tfCfJVPsVMPQ5a",
  "key30": "2UBG6LjmbdMW2ccbXz2V6sY9BkAsBHiFJK2gKGfsyKhoJVWeeVEtDEmMxiYYcwV8sBNEfr7SHUVtpfyiv3XhwGfj",
  "key31": "3DJC42HBgDyaubuuhAau7XWLdUEWxQWHQ1hjpQCdgaXEoz9bcTjrBnhXDbi4o57hK7XakTSCSm6v8StseeRFjU5k",
  "key32": "3NigEGkYiEBawHAfDPju7GzuV1Yj76cVF2jqDYyw9oPD19LFhWiBSvuGxJiFR9jnaSsQQyVhM2HmRYyShjaxbVQj",
  "key33": "2EzZC5QFQiCTCuuzxRhq8KnqZuT4JJPqhBCpsbuigJEq4c877QHwBhrxFFifbV8x9mQkDvNq6LraFyJJ3iZivjNs",
  "key34": "27c3EFY7EaNxYfHjUb4FMj7s7Y35r6gm3SNiP7qzkciViuWhPRqjjoz576PKQ2dQ8EPuxS5oktooAavfBLUpyvqE",
  "key35": "418KErDmVjcCYgGMqKr8YFSWt2ZuzkgRG7DWq1zeJXxYdhHrVH3pLnW98zMN8JpnQ1FczCQ8VqDmaSe8J2K2bpGL",
  "key36": "4AEJci2puh1NbE53iwwdCyJe32NuYntvtJEtmPaBw5PwFPSQiQNXs7SKYHqNetARBbKg51tTcUUJrffCE5xjzWQh",
  "key37": "4AGau7sNR14tK7u5E9a8X5EUQUmW8oQppQzEq8gDxxiKXjGdrjDv2Tf1kCbzG158Z6kedKzytYGv3Mc37mzqAsmQ",
  "key38": "4z3c7bpR176W9yhMXBHAuSKas1UgqGNQPcfE4aXayaiYKifvRkgRnm8HNR1GUjwbHNMRVaW36n9gQb5f4NBZnsZ2",
  "key39": "589Mq2MG1xJNuSqvo6LdJiQkMTnhYvkuDvsqNB4gHwoZE4s3ptayU45gzYGcsQLAX4DsM5TWKUzGUfxAJfeyq1Uj",
  "key40": "669M4KHWeVVMeYpKefSXK8gVsHgiwp2neK4ehGQbwLCzK2WFtrug8FVP1jXfqFYCGsspHzuYQnu7p5WJNruhNqAt"
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

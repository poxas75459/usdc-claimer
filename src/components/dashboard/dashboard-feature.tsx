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
    "cZzjYUnyDwMrbhyh8k2vD5yc8X75fxnD7nQCgdottbVgngEmEmPnQn3CMdyGyajn3xCRz37NcsHM1iLuP2iQ9xB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pczMk8zRQWv6Vfm6QT6JfPv14cSdeVW3wwHevXvXyyfBsboAeGhBFTDJw94w1syiGsVvjHdNVMQe7FpjwnpagU4",
  "key1": "4zy2WUqr1A34KXtXnaf5bPJKw8vRDDCSmGjYWDN3PUGV71a5GtSmUpwKFtsEihamAgqpby2hd9Zw8H5rWQnA8W6Z",
  "key2": "52Qrdm6aZxy5PUpv9EgYEFeQbjTuy7LzRupuTJx652d6RMhthY6WZtmnZxTh2s8bxABQFUWSAHXAP9EXpZyJ9WgQ",
  "key3": "5urder7YvrRjLeurgkQRSo9SEdigsuuHsfVfvrhVZxqLxQhNnmu8WJ4qNaVEUzq1L2sUthfQKG2viW6kvjAME3RB",
  "key4": "2bM6bUUVH2LybFGgWyTcBP9Pp3T19AETk9XE5tmwrUNsrG3eekwKtJRY3qQqRfiduTbNeTiE7dLYU3H26nta1DwJ",
  "key5": "4KWmqBpoqFvLAYBMwtdhWa263k2jRwnEhQzxCeCbmKf34mbhEiLv9CB2wcgzsM6kCFYyXiXQ8wVt1iurcce4pqMx",
  "key6": "ipz5K8XH7hUEYW6zcAnDhb9yW2airdJiTwZkSb6aFXCvTAT9j3A99NuSjBAd7afQm2Qdwcp5Nh6NFpwqmzur9ZU",
  "key7": "4m76uH54nFTfSX6kXNPQ4SCCLfnAM638BPX3yvWDBVxgbg4L1vv6NgGgvZpWqQDkyjSJ5roAWcuZVLdVM7QhGyaJ",
  "key8": "vctcGS3VoRyP5NDjSYQ1GJwVLfcR4MDiqNC9bsoXmMemsZDzADMAUvafZwpKM2cFGdEc9S2cMQLZBGVRGD72rYe",
  "key9": "q64KaTUqmpBm9GsiUEsid8fKzN21udmFeUxMsgkeubbg3CNsJrR7onbj5zXf3A4GHxjD81bboMnwZHPzsCyyi7y",
  "key10": "sMLYbAiHmmSAv3ADhBr5PrCzt818jiVcCsioy31HRQPKS3AyDg1iFZJHZ1vnDsKbBN8i9ctCXt98UQ27SYwxJaB",
  "key11": "3CVGcYwDPDG3Dtx3KsvwTj5kABF75g1tgHMwZVSnFXXJvUZc6bXrR6atFKGQg95aai3AtL2VdybA9j3VW7sXhZ4k",
  "key12": "2cCWfkkEEVDTkoemURf87vWKhD21NVnNLUBGsa3skqS6gq63GmWj9HZzBVEgSpAXVvtdkvbUDHH9SHyCjpdemjo9",
  "key13": "5tfei1U3kpFJ1zj8mgwXjv4GwxTmykgb27Qb9s1ptTCJL9Kt8YHkRYeqpBAQnMnUJ42NuweGt5zmdgdUN8azZ7aS",
  "key14": "5q7vjLzVMyBdtmU8oTnqskbixEwN2esCj3C8ZwqDz89m8VTZZcperBtCsrkv7WjZihqGkiZRWjkYV1Eowqd2dvWu",
  "key15": "2LzU4FsDfunWxQH4uByvcRfbc8M5Xa4Pu9CAaW17WS9JM6sygs6ketsEBxRnahXVsCN6MaJbr8LhkUTUKQyMx9Ks",
  "key16": "7BvaiHZruabDRMxGeDjuYfYdcCAzRjNGqjDYyGff17MSNNZKndVRWmyPPLS7ofhjegwPEFXVG8nyodXnLfVNRQ8",
  "key17": "24ALLtbwhwmp79jrrdf7G7pHBACP15xL4dDKaiTCz4BgPMZCZGa3NeS1uVPKQ5urGL2XNZhfiFL6NVuRPpq67n8v",
  "key18": "5ghoVCywKi7d7QwWkiibcjYpnZ1AwDFhHFNqG9CNJaQWzfmqCJGyw9Cmto8wCnuA6LwLf8MoysU29YPwJa947YD",
  "key19": "4mwCzViW8XeaAod8P977ABRdDiXkkA7WuCPacLigkjfzaYt3rs9mRKBWNZgYG4uEkRnLmBidu38ikhKnYXmTSwu6",
  "key20": "YyDuQWQnjupgn7y8bMjckadtVNLfcJheAcMuZtdvA6hj73UkPFbWLuNDvhiEBqPSzf9bkQVHkc2QpS7CucFyHx8",
  "key21": "642BP2SRqbfjWfvr4NEtnandyAuHAoWi6CUGMzToP3hm5xvwWuYbx3dP7AAJ9xfnHLSQzNRveRRswMq4maXwtgCq",
  "key22": "4pSGckRLV63MhkzK85P2Q2CZaTYEiSEf7AyNxVxjVQowNgR6qmsBVzJRmyYbwjxc2x9nkDQPc8GaxJTHih7rPfGw",
  "key23": "4EeSpTfzL9izjHN6HQoRM7CYhDtPSi8FwL6zvwBbrfhXPLghChfyrTw8U8QjVuEVhzaHVsRAikGE2tHNWSwtctb5",
  "key24": "JfwQPukV4gSmENo3ZQ6D6UkZWVUsVXL5JZUaioL5LyU5aVqdrCKpuBqVCPooxwopSaPw2HKHs2tTCtZSSf13ZxD",
  "key25": "3iqarpfzk6RTqbpUpZ3oREHZ6ccQaT4638zxJrwG9icHprva9VRy7zCBQsma5p4cbsMnxAAFGGE3xk7Q48b3sfAh",
  "key26": "55Qbgzcp6ie6CKEsTHJ5gDbPzXwvGELW51Z5qt2GkBY7EkCJqo7yeFRnADXi4LiDX8QhZNphYvwTbUfn41MQ21DV",
  "key27": "4EdSVdWJ6JyUwCeytdhKqHZDaP7B6UWcHhWVyqNhTYa6wzibW3ZR88A32WbRv3TmmdNDCd8ozEzXaSVBBkQGYbgX",
  "key28": "5ZZkVM1TeMDM6xf66ur9ACKGtw7Hegm9BFzCf5VXFoLoyftYz2WXyMoHqJQEvZnorGLn2LD66odNSXFHB1GU35d2",
  "key29": "59AhPNApuQk3g5j7utbwe1Sqq1xJxXBiRACh8Eowo6TH4VMWbpez5eT72zKfsow831A9bXUqnHKKRMwWzK5dSVJi",
  "key30": "3bZsK8jMYEd4gsyoFSkkaHPQgyoDHkN7FoSGaNEm31pBGuAXU2DfJiekcunN8dRJnzRthk854Bix93FdKZLS5i8k",
  "key31": "59EEgj7XUtYknYwASqyhQL8gZbGRCDZiLNoemQiLx8JWBD1xgKQZ3rKiuLK1qjxx8m9D4Fjw2g6VAEGxAijd41kx",
  "key32": "4qvtriwXWDxs9GzUBe66B2CT622V57FGzihTC1dGZ2yENTArzMGKcbwYFpSVcqPqdcvSrL27B6XEtktTYz9KRyyf",
  "key33": "3LyPbJNzjy9K7peqCoX1R26tppCmpYVDm3omHUWxLe635Josssd5VobT354grYzkTPLvDL57kW1suaJb6VDoHpum",
  "key34": "29A2XnhCtKsTAUDkJRGL3TW3ahE8AU9qWdthB9hq7zNZa3s8v7sWNwELhRKSDR64QfdWx7uLo7AvxejTZcJjrhe9",
  "key35": "3Q6HcrShaoArNmdeyRejCDj9aLFRh8B3cY7wGMhs6ZsZ9YWreRdoknYdH3j2ShwxYvt4FTapUjgqrauBZvDyTxyo",
  "key36": "4BwPD5kcTdwyxeovUPvV1Vro7Ne4VXgkRBSuuufMrCmWd4DowkweMs5NDF6fE36P8auFrf5eStDuv8fuat3T1Wdc"
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

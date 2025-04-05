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
    "67ppQiJ6yyySQVHY3ajNnad5UbGW1Ti6R9KvNmoXMmcu5JFdQd4X8NJz1JuPdWEr6RohUZyxMKsf5QciSQpMjXiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "263GYEvBFvq3kHnUQHAP6dhQQfqA7Gy5azsRvdGyEpkhEUtFVru5t51a51uYUWzQUG1F5Bo1rYXWv4gd9xTPPbLH",
  "key1": "nVDdDgMeMcN1zmPwQBpaT57YApT1t9k1TawjjZpjBTc6SsbUvdfzDUGagAJYcJVsHdb9E3YZLTrq8dUJ7LKAZso",
  "key2": "GmqLFtfRrT37p6A8JXWNAtAL7gADYDYj1yTWE2ahR68mhF5GePPyQh2ECtw4hvf2tdKa2EMmeA7iP637MJcJmBV",
  "key3": "5sXi1UvJ5yKmV5qTjQcqsVmuevJ9pAQhrNnAQXfkhsCbmSKhfPM4dVPkKUkFxzz3vNZhGcXb5keZwtvzVcrurZD4",
  "key4": "5SrXdSJtT1gJxLdfG81MDkyTLVhhtXR1qYBhdqfJ4vmuhgtxiUbChLyK32LQtRzUxUjzLS1NibPrRuG6mVDKRSoS",
  "key5": "4ZhDCJ8bZW9iQX4CCjxyNVhTrmDBeo2CdTtzYJfrrvGgnatGC7hUBu3baDu36HJ5foNLDePrxVSF5U4XH76EkArr",
  "key6": "4dtGCikNtoQK3o5GC6Yc7Xi3EgStAXZvkvcY1Ct7wXZowjHKB5eF6dXu38c7ePMejA2iUF2zn1wDrA8GcfETgheb",
  "key7": "z7z7vioWrQKD8qqwgPAPnRaAn2TZsgJwWyMpZKeiqVvP266rp9xpWTvWcJDEsn8PvCjWct85r1jury26eGTCpqa",
  "key8": "MtYtNywMnSwSNVDfJwt8dQLGB5qeN3TWApQvmKRU3mZPodZfk4HZAdjTS2WT7sYa17FJR9jvxXtNTy9WNNxWYXo",
  "key9": "661SQ1nSx5xxYVrZTdDaKRRVLPoBy9QHbbkW8pk2i6toqQPhmZbCeZ7YrzBBZUJxk3aHCJRKuT9XVLBFEufRytr9",
  "key10": "4Rimiayoj4WNwymWQBC1QLkVBGSuro4Av49j9RFQVnBQNVYGg5i785sJn5f4J28jANReHgcCkKHUA3aGDn4R5Ejt",
  "key11": "zHzHJJqMNCWXtp65yxkqR886ULvLqkStvmcLfL496qJw1xCKht2bdSMTDiHxPV8s8JgGM3d3bQCDqp5yAF7fvx6",
  "key12": "47B8HLtHxpwzs5AsUBWrMJd4RzvrKbT2MDkrguhrVRMWmLeiF7iUzfCvteDsEwVU5UE2o2VULfkpwZummLVcaZKs",
  "key13": "64NLzmbba8FRAHmkru3f4Vj2C3KiWu3LXHRLNkX1iUyKj7jTQUfKUPqdzdBig8ew2BSNZiUbjiYocN8N19FF1LC8",
  "key14": "4iCP6ES1p76YTccnzGyy7n8z8tS1JoPe72qQFLen3zKKR3qP3e19jngTYntvUZFL5J8PY5NbckwgW4RdzMDqZTUX",
  "key15": "5bPzHhR9QVongKmKxkmy1b38epuRgpGCyuVGTMaZcWkETmoKsPex4ja9Dj7kWPAZeFoKAYRTAN3yc7i9Jh2eHTnR",
  "key16": "5x2w9wxEQ4FohJNMpo1iorM2Ktbir7wsStFmYuSancpsLGPhzMpoGWnt8weX2FbSZAWdwhwBqZHQWrVZmpwPYB8V",
  "key17": "3SaHuR4qK8H9vcsATsA9enRaoBiuR5ZFySpBceSPcrcfYwA3XahsQR1YeznfvURbTPT8AWvqVLGFRwhpoYb2SZUv",
  "key18": "35Q9rqZaVUYNd5pFevCPmL3o86s2ijGa9i2d4WcDnAFDEVhTmfTsaEQ4MFAnCJj3qXdyQTVKNnudYYX3esqfvXJb",
  "key19": "2aCDYJrW2A1ZQdwMQKik7HBLwstrsUivEaXCieYVXvdKoPXyDM4toJadvWTYYVvBYorp2RZwL8giBdHLXhpYxjq4",
  "key20": "3VPc1KKGL1MV7g1ovV48YLRaFu2UzqymShRTrajeQ3pS5Ycisb7eqWPi6TN313r3DvdM53jpLYgQ9uFcAjsUk4b6",
  "key21": "4bRvMGab3YmiFg9hiHZ7qge9HkU1qdjZYWg5RC3WPTACrfDWFYbbGqYxrpUfCZESdmNVLwSs55ivdX6esudATbeF",
  "key22": "gkAvABgborZwEdVnKTrT8qUK3YqfSjccntvSBcafVK9ZXaJhkz1GcUgfV8DnR8e6m2DQRtVd8i31uxZBJAWJTwZ",
  "key23": "5rfuUrD7W94mvVoeGQEfuLCmanpiD4mjTq9QY7pND7FZUkHCCYRAexVtzqP8374Wh36Q1YRfuDWSFpBAK4HAhrkf",
  "key24": "5fMdaBcxQ8YEtouThW1zUNyWmDt1Y3P8kz33bKwL3tK3H3pJgCKNiTek239xL2UYRVv3toATXUSEum1vEjFfKJ6k",
  "key25": "5Zjkvwf2mJKftrJbhj9JWDGwt1qkqHK3gJQccr5FF68ggGFM8UbFwL7C7PLRCXVkgjgZLG3W6iyKDV4p61hxrFjb",
  "key26": "ryaFKWMGJJ3wZkvYqwzopxkGZS7frvwu2b9qkhHXG6myzYPX5ftZS69ggsH3WayDWMr5jw1Ei8MVVkHzq2nso5K",
  "key27": "45mk2r526toVqj6mE7tRn1pKriBVfjnEJLrjwHdiBTvVafqKfTFeU47QALpKcs9HhZ7GAJ7qyFb8nSXuEuSqfzQq",
  "key28": "2bzumkiXvMwf3cyAQSJpkeJPUrhBrK4j84e7wHW6QDrto5d1DQDfthzvrLgDk8hEY7qLdL8QEXe4yQoAMB11WMno",
  "key29": "3ym9Jw4RiY1nosgpAfHTfwHNSbtRDqshuyiY2h7ya4QySMKEXc4PZXZfbM4tFKAuvoQkiSjmxoTmEpc3ULiAmhkC",
  "key30": "EZHxbW9hrJwGBdRP327d4six6yFCbvrHqUhvMrAYfvwb9E1rRe12Wxg9gZfZVAi5xJtyTRUJe6caE4Q19P8aCPu",
  "key31": "4pQYqYLSUbkKqSqZc5x9SNnxAKGTY19pgikZ1o16AFkDL36VaDNYQqkx125hwXB9Jo71DGkfbxVaUDXkc2oywgpH",
  "key32": "2u8TS2tDVEQyuokL5PwqufMFKG7pMmcHMj578jckmCFiEHD7hLztMXQxMY3SMjYSr7QLwsyRhk1rcFPkhKA8NBNQ"
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

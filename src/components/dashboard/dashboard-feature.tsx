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
    "38Rgk5hNfVEZagBov5CLNpm11NAJt73j5tXfBqFXue8WP5oRrhLiqh96yuGXpy8VbncfW1Jfusiq5p4DNwhRjojS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gw5P1od9nZTHj3wHpCjAF2cYsMS38FbhHyATsqf5YV8MM2yTV1uSqPaYbKozFDp82VDdB5xUDPgJh9Mq9epg7Ho",
  "key1": "3ULhqoHXbfxucbDXNDDPnLGSuT7kUAUhU1xGttWL2AHucupTZVfEEAtZhYHXzi2RckCUacvbP7NvkSahGZ6wDJTo",
  "key2": "fETTvuNCaUx45TjjzMJ5MBF4kEC1mJdrQdkWXrngXjQVTW9jNA18P9APwsUjsSQHKxL3mcJK4zJQGUC1rsaiExw",
  "key3": "24EtymaR5fj95ujhvuXGmgww65PmXQCEstXvpjLZmXrhyzCChgct3MrVupT4yb18PTj85rjUhdmqy3UNBehCRU8F",
  "key4": "H8yijL6aejqucH935FFtAU8JxDiZ9EKGSH1EkAcUY1JPeqZGsGV5javWkvvQAiZ7F4k376HcnCTnkYUSQW1a6wc",
  "key5": "5fkyCVcdBT9UUWWQ98BfPtSnEGrARXykMNcbPeVgF7HfcMsBaj38vN4vsARtNw6Lb8kBs7N3JoaybwsiaGA1kaU3",
  "key6": "3wnUri6v9mVspbTtKyEMZAsjPxPF7tVejjRf9RqdbAEDG7Ftu8tzUUbLi5toqZoTcFix1JncFHnq2dayyhuBjstK",
  "key7": "34X89iGB5MPrwvNhhF5zLt1Pcu3amebm6K6746UP3KEgZFRR49ee1k7YQ45Z6JmDP1AQFVnXhDXFtL1JNHv4qprb",
  "key8": "9rk7iWwYQuhTBAgVWsjiiRpFzsrzMtcJ9U2zkcwuWgZ8mqsJXoBimsoh8Qo87gpDNQjPdx1dczfdKNidn54BebL",
  "key9": "54Q2FgMzPRs4VMX41ibDVPCZ1oxcP5GDZatv6kqxvCupwQrrjTeUvxWSw6hpiDC3UjUsChmWLuMw4BWeTMxduo52",
  "key10": "HR7gQC63a6QKpBvcX8URKxGf8LqoGBZYZ2KZGk4z1wmXWs1QX1vdoAsZJirbmikitjeZDszDRccpkJ8Bxzp3GDE",
  "key11": "2LyHdzUgBTiah9EUSUWTt7PKzVnvYztNgSYR5StuoQUjngkAAwbMahXbycmMw7bBFBAkDJJxG64fohPLqPBdFnh2",
  "key12": "31PpqfwB3KrXNhPykrcsfQhP9cvneJuttZj9HjZ9BckiuXMT7qaHaT9w8qUitt7ope7Fzr8mbrSLcWZBFKKHiJbw",
  "key13": "2XFFvDkiHqgD7d4CtvSF87U9sQea82P5GHuUf8EvRGEduVr4mioq1Nn332PjQDStL71B6LxpsB4Ttp3MyKTePNNY",
  "key14": "2aCFjaGTqQpuECunbb3wjUFvyVNWCdCa8LbRfMneYteF5tTppH5fYWg2gBVG8mSVY6FuDgVjnxzBrbihVUZXp6Sd",
  "key15": "UtStY2Xw3nDonkhGxYFE2MK6UWWL2DyUkyDum9veNPeePrhCABKvWieYopKwSJDajYa15HonQ4EyCvcjMkJhW6T",
  "key16": "4wqQr76meF1BZLFVr1RHHgz9VP6EhjkNqCDpNhCNw1ygkuEKhBMXnFkNKik2NtAPuhJtBWjfAKenqfYDSdQuLwmc",
  "key17": "2T6guY62AxzVfxSZ3BUmHFC5pzxQxcrqnmZBeLNjuXwokYqWATS6xVicYVFYQVamjH9ABvcZc7nKc2CTJRRX98K3",
  "key18": "4c89eBig42quvQtuAASQM9rEsPwpGPX7hRxRHmcrRe9aVmUS8KPZpcg31J7Phyp8sVvWAn86NKUsiLp1Lg7bWKHX",
  "key19": "5C8iik79qZs24WQhFd9H82qt6RuZJDU5rwjWQBmWoaisbd2EwuY4UKytt5bC2H3e1cnFQLgZdffsbmzYbgYy4WCF",
  "key20": "3GbBuc5tzeDGmGBqio3155W2k2vDD2ues1VmKyTCh53eSotGoSprusCuQznpRRd4UGL6a5vrZjzuvKrABZWM3bsV",
  "key21": "oqpcEgs7owYS436EzPyReiYQUDmSgFUV5Uk2UEKd26GRgQgavmskBL8nfAAsw4zSdoeFQBbaaVgJR74G9fsDTAP",
  "key22": "5r9DWGznyBUW9bQjAskbLDhM4CS9rqzQQaeDzW7Zb7LMcAagntyMz4CNZvnhVhhcdTPq9MgXhRFekA6w6PBa3KHz",
  "key23": "45swgU6WLLGE9V9myZeEczve3jEMu8hQz7ps36rDfbLXVd2bVAqyhHsALYSAmu1qatbxGDX1BPepqxva47qZG2o9",
  "key24": "4jAUiELCZRR38UzfZb1ehtL98amvymkSxmL1fUAtT9b52mBxvxv5kdgExWUcVHpEpgEakDqbrNcaKky5qjk9AVxQ",
  "key25": "428yy3w65qfXVgdAYqDAAyXggvsw47ST5YifvJP5BchtVWf9o1LLqtpLrnYw1djjM6J7yyeYg4rUEAzxetagbrJV"
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

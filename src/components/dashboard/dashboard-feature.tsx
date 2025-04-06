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
    "4qHf3qVVdCfo8oTMZwrXzgg3uSTNJU4Jt7VMmkuwCxd9fvx3xPzC5MtX4aVcRnT7AzaqsVMWvRmX4rzrKZ3JqsX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sS6Vpkb4KkTUBARsv6QxDysuWq889LPkSd5d6YhfZPbajM2yj4ASP3hgXzjSr7jkjvsH1yzcCoGEPQxzv7vGbMk",
  "key1": "2MnwzTfBSkPZiMza5AYfZYEPvSmTGMpkygRzBrKw5FvV1FHf4bwebPTTG4aTy4aTJRRovdRYyB6PznZSHuzfHxLD",
  "key2": "5KEY6oS7rD7DAeHevg6eXJUbPKaZqW44AJS556Z4AgtChmtDX8974FsDc8wPcZqdwSBVNqM1sJ4uJiuYHqqZssCi",
  "key3": "5HjYobNZ8bCP6JkRwSmhMwvfYfFRAsCiGfVw3qAf8WJZDMFwtnBKnRWwEuN7bTRbzsfKgL7hML9bip5g83Yy3RUU",
  "key4": "5qXxswCyR9fXwm93c1UCmFtedsYc6EduRVYjvDznYKrWxHXb6cZ1j4xZmQroSz6snspGFdZGPBm9VLgSoav5nb2Q",
  "key5": "5yPbebXVcCbPLQkNXxBrjEHBxkYxgSwp58GqDGxXeV6B3fG8rpFbWGAcDYjdKX6NvEoQqxBdF84nk22Lyfsjt2JW",
  "key6": "yFg9JWfHLSAS4MGx9E5sNS59qAazeb6Dc3Zkkz9Nevj8Mms5yfVBrDh5DFETKFG6a56gEbgh2fTcCpfgxGfCpLF",
  "key7": "335f3KZNw8pSk8iVCdURy3ieXDpmKvFN74QSSmFWJgFCjyCfJf2qDR56WH8RJDPvNvYmNLawR4BPSYSsbYeRJEKE",
  "key8": "5W22YvP4fyXgMtU3vwerLoY2ENq43veH6ixJF1mZuLcLN2uTaCAgDvj632XPmZNLqsL9DkaMT2RdNcBV1pPpyxHv",
  "key9": "5AfPZDZ4jXVCs4PgYvnikSRHfDo1LMjgurthrQYTne6LP5vZcaS1ePNtmxbkk9cpT1E3xm33MV5XYKTbavZ5m2Z6",
  "key10": "YtmWdMpVyh2MzEFQERRdvGSGAps9Vxsgvvc4Y9oZgB57cKYHgdwsUN8xiFKPpEYHgy3arAX6mHWZpwU9UcRvKdf",
  "key11": "3S2YQVngkMGkDHUK7wZC7H8ZUQhhHAm2Lii9D6haEPrcfGLo4vxLWBeBEAXjvdpHawmy6gg1fM5bWrn4gDFFJHcq",
  "key12": "5qptwQLJAQHdZ16XUzKk9QkixjTgybLEnTJqsedmEVXK9fCqkABUq7CKSaHEuPouMfvbwY3kHXKT5rFL3mapK61d",
  "key13": "4ckjpF5qCQLyjQTFbDYYU8jiRscbkReRAWnZc1G3Phka7gqxRTwFkNtc6rTrHGPTZsgK8yPcyMMxW9q5vxTvmhe1",
  "key14": "2SSph2X7iv51J5G46W8DexLraXx8kWt1n3K1YSafuoCgSv9RyHbG69yRKvvKPZLXAin4CWWQ12ZJnSzMXSSd4Eui",
  "key15": "65Mc5Z7jaZ7gvpKuH4yCgUDAq3UZhfAPbN2vxK84wiyrfNJPq1qq3pdbzbK7qVLcgU1q1x9RxpDzBEfirHHQBycg",
  "key16": "4yzY7fAZBK1ym9EFdEThDHQPeHGUy4wAszHnaP9vzmPNMcAauHB1VZghpXXTdNLJK1fvXjmFdBvXNYmjkHkPXZwD",
  "key17": "2ERvLoDXs1BKNepBsRPurMb8DPB4t8YNcoJMSzFrPPeVPNYV5qkw6UD6CCpSUojEeudzS7zq5iz93P4anMdB5EYB",
  "key18": "2MdeUSRPdSPtkKYHYz88Jm39knAeiszQ7yesmZmEeynWEgZFyLGQx9xghfkB6V43PzmWZguWn11DjWFFF9XQhrKS",
  "key19": "32ab7Z3EJbvzpHRXtVMVKd2tBs3yBXFLdRLPwozH3teyDhxUzUcutrvqybrfGRSE57ZZBXgsbqHuVog5hgRQCi5J",
  "key20": "rjss6gM3xs6XUPBoModLZukAiPv9YxqBJixpMMsCKSarj1WPdvF2jUeG2rCJqKpXAaGbDn7dcrTRU3aSjyj4NBM",
  "key21": "5KAaBuSbfAcncikg6KSTiow9tY8i9chQnwiXbEB7jv9MZZxrwSeXTVbjkKJjQLEhk2BCLqTF3YxxFV2AkrX5fXpS",
  "key22": "3sEv9L3cp8fvJeyXErLLrgcPx65YTc5hssooMLwu69GMnkn6BU7yL8jHxBWmbAAbzcoCGAmSQS3pZ86Js4fVTfzq",
  "key23": "5r7py8iywjQvBHRdG68iSJhBDSUT8wMczu7ZgfBSMBFH3vh1WYggG9rMTPRMwyv2BT36miGZK3wSN9sWG2FE8xiF",
  "key24": "5FdqqWnNcueNWzbm2Ej3DpSH8kSLRvPrsdKSaMreJGyXiELNJ7Qh3pVwrkN6MQewS2ajP236tVM91Xmq67Zkc3u9",
  "key25": "3iZ1KMBaJ2RP5WpssELFz1nTCCRdPCEgqCT24Rx8e62Dkvay1Xq3hCpuZKAcJ4odTMD3Hh1FepKULsWcr7fMiSVT",
  "key26": "436xiXH2KzocNoxmBrtEDgeh2HjgBa34BbFmfX2Lj1TuTnKgiMVbCJ2HCmr293hfJ4qruopTXEafkAx1hCptAk8d"
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

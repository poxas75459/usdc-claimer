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
    "us6mMUrNzS8qaedVJak6FLQzJ6MxjGu256ZAxPeSaLpnwmqgAMhXk9etFRcUe7TXnG9cRb2seda5tg5FwR5bgBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MybYYm5fiCbpfdzjZgM6CpcZE5acVo4TqFf6H1Zu7cg6jKp8bHxtKGHnaRxihfcwG3qdyMZ9MCQZy48W4VG169U",
  "key1": "e7zRka5rFXUsP8YoamEHUi2hfNrWVi8RxFz6Ft5rrJpkRvyRBF8PbF1wAjY76VNNEHqML8nPNEchrsENYKr4JMS",
  "key2": "3PxUGc5u1XjcQXnZPpYvSzwUaS6o1ezSJjhvzUQiqw5hc8GH7QQKYw42F7RKzLoSxL23dFJRUjVd85WLXcWi3MbB",
  "key3": "5ZTHeP3xmsnXW9YiNaqnhWG9gN9PQ4VJ6GVyiZGu69g9HzQ2iEnyyscqrDi8BYATJYGXtsWHYZGNxJafAZP2oVBH",
  "key4": "4zHHXvqnF6eoN7nXNvHNhhsk8kuxiqLNWgFxkXFiDGd1CbuXQuqcWdCjdXozc1QCyoxZabWBXvq9Y3TbaP5P4P9o",
  "key5": "3RNVHGySw6x2eXzaKGe7Smk7Yw69WUuJiJCD5HuoqyyauUHjBw262NgHjgGzKwTtVhZNEJVDECWBKRBw2omkxdJn",
  "key6": "65hjJ6eqvMBBc31XyMxnC6gUrQzeWLKRyKEW6GgpdpNvV8RtifpqQ6WVBmv6ACzNUj9sPyGvgm1GKsvYxiN5v8B9",
  "key7": "3a4fVYdRfFdaLmdxJssisL7yYGEtwdCnt3knu6ssCY8Po7r8Jm11yhNo1qhat6N8ADBb7ALtUKz3Q1Ra93VSMPB8",
  "key8": "4GicuxWyh8CC4GQUvEjo6TuPxvwKkFbZ4NMzVpffFHbMbz5UssdNf8MQ9JCU3XmybAxYAvLJJbwT9U5DSokMjDmF",
  "key9": "5n9SMuuDwbMUa2qijYcFHpCC1h2i1jGtcXnzQF2UzMhri4Px1ndPE6aCHWvUxm2xypw1SrzpDJGj5HSRJ1PKVYSx",
  "key10": "5CzpJew8EMKzFcKf6wgajizuE4m16t56cGFzm2k1ogvrFmoSbwu99U1saNHZw6yovyFsus9SiGWs3BPBJ8msQcXG",
  "key11": "5RdnLA6pVPYjr5kw3qFUnxBLWpwJVrXdpDQg3W8AQn6ANe3yZTkTDec6vGz61cgtdeRb8MfosXKxGRXnRgY9Mm9R",
  "key12": "5xDemqACAWNuLipYykHWGUwyjwgJBWVjFHuRu9ovNXY7VDG497EzjfWBJCVpyqQjVN1BpLF62a4PUp3CvrKW8jAA",
  "key13": "2ieRFmwhZno9svCGzZ42KbYTBzdUFFHtTnEk7MSuw3kXbsP8f6PfBYCjPDgsNnGwEvbj7pGaN5kQcdjGVaC29LbZ",
  "key14": "22NntM84BRfRUjevXgGH4fFDgcQfx4ANV6ELYkPmP6ejEvDyRSdDVrfpjtbU2fb7GFzRhixNvgmNVfCYJJFG7Mts",
  "key15": "3wswF4VX9rsjUYd7WrBAPNsZDww9iXZDGBmGipR3v5CBWGBvX3gttMUSYvd1nZG26Vc8BoDm3BHTw8E97MLfbT3c",
  "key16": "3sfpsXKcJB8RnCCv9xappaGJoX2zsN2fnc2qbzQAQ2c6dRYpmejJM73htmcvNhiUXe2eJHfMbnxRCk3gziszZLZg",
  "key17": "E3Ftfyv3huM6XbLLRAxmfmVGqq7YkYGNt6czgPAUUENmd1J6RR2k2iWw5W3jDHFLcCLSh5FK4xN67FKSizuHZ2w",
  "key18": "46aPLjeny9Px8dZ9qdMrs1zBv15Ms3MuonhuM39jTVN7Tyiia1c4wwexdAdostLktykLcM2pEtELUXLz3vghhqCP",
  "key19": "33V8GvLTagYxrhA6FEg87QaiMqrs94d6FivQ6wx5NVE4VvwkuEnB52JKqEEwS8DHTNDE4b1pmMjGEMNJ4U8f4Cno",
  "key20": "2uHrZEGMFnYiGK9PpjSad7G5uZMak1Kmgriu2k9TR2PwhmZ5Gmw91Qi2pLK2dbPGhuvHnzyyaLNGPrBwy9PGgHKL",
  "key21": "xQ1cik738Jy6Xh2wQ8XjwAsSoTd4SUCykYxL9dGCfkXdYfNqaXGLYypunEXEmATLY9hY6QCyCWD7PghiT26fegm",
  "key22": "37uw31hjs2d69uQg7CxHnL8pKxoXxhxau5LQeQjjfJp2oDm46ZwxKeBRYBjmKYCdT8d1U5ooag5BpXZxnTstHaZN",
  "key23": "2FDyVARNcQDdxdQnjQRCVChHuYGrEBPrthpxMn8SQDni7H4SxKYggJDebPS2FBxLhobjy1XKySLD1yw55uSWF8NW",
  "key24": "44wQbrsc5wmmwWm51ECYXX65fQ5tV38ALiHy8xsGtskbwecTMedJ7nrrPUS3678UKwzoDEAkwfgV3dzsiPxssp9b",
  "key25": "swDEfYNh3HW5U25qMgDwUmY68piFYu1EHQjZXUggaCUDcYxMTJjZf8CqT4XDbnq1TzhCNJfMJzZ2refp5jPthXq",
  "key26": "5Er9UYive6UgsTv6ba72EHrmWuWCkhiYi7AgPRRTMCzdjkdaYAgYvkqodbjMUQw2kQcX2TTnfvZ74KPXEAjvgUZh",
  "key27": "g3NexosZw5obFzT8rNMrQfpnxmx5CTCUzSd19eTCr6UKwnfkJL9g2LXua9Pqbhfq15Jw1gsbMtKYF2WKe7naGmh",
  "key28": "5gyDksTGJESSCTLH8h63Jx9mbErn7iRv4PJzqCcZiB3tA2aeVSR59uk8UsvxKPUJjEEZEpCyQnAD2r1SVbuTFhxD",
  "key29": "3zkqdA35befiZdhBqroEzGGCkadqBUUjL273YDNcTwJmTAQVwhzEWVToHksZ5bW7ccpyvV8XWnA4k7Gm4k8B9xYE",
  "key30": "3Rjxe6SVn7Ls9GF3HWAGBGDuCcGet8bByepqDKH2HYkUbQ51PbSZaXPYoJhQxi5nYgCSKP3wpSjs1nb7UUP3vgrH",
  "key31": "2Eoy6LyGJoFnjhtmRRaxoucwEeQWgM9hsvgCJja5PSJS3182cMuradP7LSZn5xNPjNPUarjNFN1wT6ioMjdQPZ5i",
  "key32": "5tS2EZDbw7Jxa6bBQZYZX3kwDyWcUvp5UdTKkLh5ytBb4iyfRHVGM88dj1Bpgycc1Tx9XowqwnsEGNTsRkVC4wuN",
  "key33": "4m3nvfRHbVGpGm1QDRLi7miFhfH1DWvSoEiLvRxjkzHRGmBSWhvMiEVBngTEkGwQt1Fw8VjgLYKWmhVLCx5QjehG",
  "key34": "3u6zmMc4purpCBYok2P2KFEucy8CBEaBhbAWupcFKHvk1gZDJ9YaPhTRjaczqDR8PhhFrBmQ1rmG9j2eTq7cETio",
  "key35": "5KvUakVyeimyCvCg848ewU9mrHFn438wSEAv5qW4G3KWQST3U87uSEvSyTWmT2rPydg3VCQs7Sra5mJT6vdcVa3V",
  "key36": "2HYFQ1f3t2DLe4VHqY1DxXYd7MDUoap2hwZ3g7E1sA6YSQ4qj2rXDV2EPDQRP57MXrAqUJeXWqTPSMxk24B6731b",
  "key37": "5VSktdVNNTBTUNeFJcaLHeFJHtVXNmuD4afC5S48c7Vr5v1ymfR87WrR2ahWZAAGpuCPZaDbHfUEvVXTvonUzH29",
  "key38": "Lv8zmmiJSXezdG1dUpStmhH594omuqqiB6y9TmPsxX68aVmYUKhUVkL69uTNUVhyBgWAT8V3iL5hWqTDGNedrmk",
  "key39": "355UydBr5ttE9odwjN6SgfKZFVovxGHHPVQ8zx6YyYbGi8eZ5tW6rCvEBTUuRd6PBbSCRiBcUYsYCkzZkpBuXRwn",
  "key40": "2rKAMyMYUr8vgRH2dogduYr4Xod9vBqhabubrXit1f68ekokcc54fTRhsnKgCTmeVc2kgL4dtJL3nw2baeLVYVs3",
  "key41": "3LL8UgmUuwu6iUFj3LvvF8AMQKzYe3N99Qnh7ZU6sW5ZLaJdPdoKLgrgbFXfHHB4yE94uZXdkCxMstj9Lc1NFrQy",
  "key42": "2L6rwUJbQGS3r1kogypyRChaAJpTfyXRv5hgPUisN1dmV9yM8m4aM6gvAxjkidaieKf15yRP2GYjKqsiK7yHStdp",
  "key43": "4uSQKdjpCR7nFBjCMNrXn98vTHmx1QkzUHByJTM4y9YsN8VZGoeefN1kMASeVGY5iVC2KkQDPETpmRzzy9MssXf7",
  "key44": "24o6bwAxiZREY5z3BiHZk4dTh3fXyGmzeBfhbcs4VAbjJGXa2dtyywAJfEhdUEm5c3nvtZ8v44R7JwUJL6d592WK",
  "key45": "2ZDeJ5KthkVmC8ceAYKWGw8wrKgcV9xZNK7aTQFzHFZEREfDtLwEXxxPWuN4Rap1iYQHetD3mdtgfMQfXs1NAsae"
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

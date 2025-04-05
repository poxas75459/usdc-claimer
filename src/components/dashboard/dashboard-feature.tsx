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
    "4uJFkvYXzAN9UizuYQ7DuqELmX7z2yBQyAyiYS9YzRXbH7qDg4bv8q6Pz1YHB7uqP94ouiV65xr7p3eNkf7QZ1Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b2Qqn96rsjURxopgZbVT54RMveVhjXY6pPJcqBnZAGHaKGJXmdqaKbUiadcfySS6CnaGZtKWm194N9xfXWa598C",
  "key1": "5YKmYe8cBigPAqPsVingw9rke1Crz1fcYBZNS8ncRKbzfem1ywDpUXRcYkH2WqsSq5SBsqBYmhaLm5A9UAHofED7",
  "key2": "2ryCijqgRNsZFZpJcbcNUcNErMiJPrZqyfV35SvqfCAFWgWZJevsfthBqGYfPqDjS7kTmKCHxB4czNGR6ywRCRVh",
  "key3": "3Gwrntg2bHGAT85uVF6UCqZ7Zj3CEn8PKgre3ZQTnCfZDXxKUppSQt6R7a4J5KUWJ2QLZw7YAng4ybtuKDr5RPbY",
  "key4": "2U5sPRmzFJF8G8By3jhohcXtQPx4Prd1s6Sfg3gyS2qSBjyRNHqxno2t7nvGVh59Mmstj13cdEerb8cuuesfuDog",
  "key5": "51mqD5SWD8tAxEp2V2fYU5znppkGek6WoDJkCuBWESiz5F5uEppHvxjmW9KtXgw8bYsrGHL6aAQ6Xj6zzhDJ7tai",
  "key6": "4fHj7PMn3W1z1Xk8tuRq1zhNGN9ash6oZMLz3X9BPUPGCUhY2jXWzy5Uw3enHe3Ggd9TnBZssmetQiTX1HzJPyRv",
  "key7": "63HRSRHxeu9k4XrCTdSG5A3mQfEC6EWDZfzoBkBRSCoxPVyuNhRTXUQYPoqf1FiE9tYu78j5vY363BXKz1qoRs9Y",
  "key8": "3kF97ixvJSgPbCdTDSZy1bVmUQKi8qYWs5hgn468w9RPrpAJTJSCYK6DksELgbKgd6FFJ8fcELM2kH2amAdThzsf",
  "key9": "eYJqVH8HcgHrb4MhAxfcVEp1eYNrTH8FjckPHSdnjLc8BHe7SKZVJTcXgtS88wM8dzjDJEc2FgeaSa3MCXWxTL6",
  "key10": "5KzFuYcXy7hWW9PRfaJjPdB1CpK7DpFwLKvD4raSvVC6m15JjWJVZcy2X8aWFYmFE3uYRQwQjc3irjyqRhSPEWQw",
  "key11": "3iAnVXkZmtENo5yGSQtn7LQ9Xd7y5vP8DmhCscp1dZ7HQ2vWm9NExpB6FyumFScniv8QaQMeLWSE1ksaLjXgd9Ux",
  "key12": "1KDGtn3Wj6YKrW9HYtoKtVUR9azJPzLjv3iyeqd67HmjKVZsaAXGdPYWM7bbgLmam2TZBRjRRvH9HDG4m7sUWWv",
  "key13": "58rEB2edgawi6HGXv2rGcw9TMitcFa7SHNRvhAs1EoXhEvkC1FuiahdC1tM1moefsRh4w9HiCZbxopUgZGGjaV7y",
  "key14": "T89UV2fBzQgkvn51sdtpbt44qthzKKoXMs5fL8xDe8KcGMGWy3zgYmwSs2os9PcxQdoytbSVatvucno1teqTsfQ",
  "key15": "5N3xXQ43YsCu1TLwPmzpzpedEfuowtLKLimN4s9dmUo7TTDB5trupvNqz4tV8zrCkeg4KaU2nNotKe78Xs5c1zjY",
  "key16": "2VKEvmy4JVmJ4V3Q5c6AeBstKLsgdf8yPBG6GDPAzqK9FiV3TvUakBphattavjTehnDyjk28Z6TgERbxqSTVjyf4",
  "key17": "3RHXD7uftLajmXRtMqMAVLZU5d7SMvr5MG1ibFVXZbYe3AYEGSpT9NJtZf7padEZh9YcF5kNXJNoiRXvkkC5aCWJ",
  "key18": "35oQZDnkoiBdYEZuith7xzCZhYQ1eA435ftjgre8xxw6V24WJTj71DjBieL3vCGXSQkgEVo7Dyr27YvYyAiTwWoX",
  "key19": "bdXHypqtF38NZuWEwyRs5xdvrDhzKf2hhNsbZzG7pG76fAtq5mvbBzCk4mhEknPnMWzpfA1idyLtax7APJ2eYzQ",
  "key20": "4ui3iAwcMtQWrjp1TvFyaZSKDdANuQG2pGZSnYkzTdjgm6deWxYMMUgWNw53xGxeuc6zdTuT4pJpLmpijm2ndm1m",
  "key21": "5YnshEXGMYiLP9A5bzKriuGsnHFwhnprg5ADtDhQC6UcRoLRZbmJFeQyRBKAc7xsc172hxZUoaoGqp29esUMGUw9",
  "key22": "uqL8kWxQByqjLFXGiMdP6uiW1QtZGASXj2NVdCT54W5XJRLzKvxPb3cxvLJfGgUS1nEH6V2TGJ8SBrcYQhfru9G",
  "key23": "3EQTsNjxUvmA5jGGwSW13jAyx5QXjAbHW9FCbkDzxhPi9hyEkcHEHsFBXaBGsMAJGLq212Q6HAMSPiv7HcEwTFmw",
  "key24": "67NQx6pNwuoq7Z4dzytrNvkAA7WPvtShwJV3sHGF4CiSK3CFC7zghY7tpMw4dJsiNnm64py6EpsZ8rKfZfuzr9Gj",
  "key25": "4KwHBCJqVQYijAQHKH7dc8QK3W8yf89QQBt6YZFz3YdwbSbrMXeKtRWLGmXj7GTEYaEVKErvwyw21VkA3ofG1Dhm",
  "key26": "ntghXDCp3kPkZJTYdVz2dGWsxFYMuEwjXb4zSCVKYRrL4CgwGNcbrmUhuvgPbb3tMFedJtoN3NGPECrJRf9UcvZ",
  "key27": "3VWU4N2YZoPRYA1WoDuhrqarPiR7nhhFpsoV3V9RQCHeKexywAYKDLuLjLiBD5Cps7XEChVHV6WZYoH52VjcVG26",
  "key28": "4bj8NLPN7mGLNzm1DyfrcztirUnqdoyfpEsQJ8WnaqwMXmV932fYPmw89HoNnghp8WJbSdYNKtrTYpoqLNjkGXhD",
  "key29": "29hu1q9XKLbYC8qnMm4yAoHBx92VrWp5XZaKAown6T819FihsE9ZwQ6n1tBqkkkwLEiEErH6JB3aa1tAWHdAxEoM",
  "key30": "2m2pkHhbqikkQP8nYRGFCucQNy5nxSt2EgzJNhs5L7M4kQb3oHpYyUaQGY9o1qE5xTsWZLAUyeteiKBidG6cTEpr",
  "key31": "27Cv51raMMszuxiyyjFyW8gbjbB9cjQhHLfcvi3pvDai81wiFsS1k5EqKxezRbq6RePK5XD8GHxmuaygb8xKuWx4",
  "key32": "2GKgVQoPv5LbvvUMmbTf91XwK8wL3UVGc9RpVrReuAdQe1XZi6Rmb2fch5sZ49d33GAffyFTCWfM1n6fZAvgziub",
  "key33": "2e4JucKh2qXu6XcAz4rxNrsHzmoALBVrDfQKAF2Zs6CM6XB8PsxuKjD1Ag83vowpeSyi2jzM3N5ti8oZ4xxrtuxG",
  "key34": "2E6MfVdMmTkesmqp12VD4i8xWn63wp1qxD9DLuRzmU75yTSVhwhvagMQoXqYMspx2b1AijZmXjwA4VgeiBCDBUxw",
  "key35": "4RKikEi8uUmUzJACZqBZg3bHyWVCpxcK5qMrNJgo4gwabt873oiEJPcuow6kzuMSKMyEdP2EVcg1HSUjsn49g6id",
  "key36": "61XyRvuDXTKDH8TnpsmBtiS1whqBuwSPBSnNYNGRJKMqvj3R9u5397hFgRjAameamuXjMYjNn9bUftxQhYQ6ZGmB",
  "key37": "2PXk82mvi2FA7qJ4o1mc7RdBEwrKjPkH66kCo3VXaPxdMR5WxKTN2hrrM1NPRc3RckKxKc4dw3JhYUWHunh3tTze",
  "key38": "4s8qvDSHmcKq6Jc8LG33g7XsK8ktG86iEEJYh8zqiqhmbVKGKRebyahFfDmhzaVnKJqcNUerJ3H8ePqYbdWhvdLY"
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

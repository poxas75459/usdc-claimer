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
    "AnnzqeeaCfHMxctjKJ8qtjDkAPV2rqYxYUcZGgFsSYN1SWoUbCjz6GisLGtvLRsz62L3yEpFc6zZmZgR1yjRKKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RH544A16CaZzVnXwsRTiScyLt5W2aX4QUxcMjZJKZeC1rRBvN34BtZfSt8eYeo6DRqmvVtKJC5hfjaZZ8wTUD1H",
  "key1": "554dD3pnKP2KQ8fyrNcBzYUtSHZ1BNuEHyY9nPpEmiLJWgDqXN3NCjoXUJeWGmgAnLrUPvfrUZxr4SGqvZpnPef2",
  "key2": "dii3xBBCEtz6ueVwfi8KgGfvWtt4qCvYFAHo6yEHZVDNgEYpVMmvNDVj2xrTbnn5tgrgkgiVbnKbRt1dPUDWBoL",
  "key3": "2rNMejAWhLmpoEzoT7jt86Yk7MzqmW4M6P9buCa7Wg2kAjUaHrYFokP2Bh3DXqi7bpXqvg3BTXqupJvzAANqM6vQ",
  "key4": "5JCyhvnBGaNUzQvRLFXrc4ngJ2FX8KVBW5m7tvRBdJm9rhzybpJGmwc6gwtFQk5i6yWbS2WYANrQ7zSw3dQ6YZji",
  "key5": "4uCCyrM8n5hR3iTFkYZiHtt13ShqBz6saPekzjLAWehPbUVVVKdVtuN7pPNYD7eASDq9KuXWwHuLfDjFU3ryhQ9q",
  "key6": "2JSFYSVppW1cgvNo2LU7F89rREahJg9rrEZG6YzDErwT5pUFVpYerTQNcRxZqiCdyGdEQNqEFCAdwKBFCxz1p4V5",
  "key7": "2xgwKzJkMYh2fAR48ZU3vQcLGsBmsw4EPmZ5QpvEokR9Ppwc7ZHEw2RHogFqRNehXbThpH873pLp4YCYwttSav3b",
  "key8": "3tM8UMY8g1yoZYodMEb1gF95uXf2iRiByomHUQFX4oFV1zWxjUE5GvdWjF7bNWajMUcwQLQ1zuFi9qkDkoX8jzDd",
  "key9": "7GmMGq2wMBw1xZzVAMUTXhkkVJVR9CowSV2FYYvETe8yVZJPXnvg444Z4zNuQ9TVSTkqER8EkfvBRqKQgFBXaVD",
  "key10": "32F5Q5tS7iRM9PHkNiuVUrrbp9DjnGjRcRvDmZ17MvnZxFBRLCquLNt14fzPeidvUsn9uL94RVnD6uP9eTBu8iSC",
  "key11": "2kki8ULkrw9rdP8RZbQJoRWensybHxj9vTPeiJkc9JdZh1TAzwkB39gLWErRWy4A9MVQjQQmkh3qmUvRcPEnc6be",
  "key12": "217KMRp2GaEnqUTnqnkhm21Gqpe4fYNznWh7xt12vQEUvNrzv9mjhikFPdL3rMPCxQx8oSNVGQc3Z33u7tHo8nob",
  "key13": "4ug63iJ3hN4e1y2n6FEa71zjDAbkz2boGDTDPC27eMGh7dfqGu9d8MwTLPakKSmV6ym6AreqNhgRi62aRWvT3P7U",
  "key14": "61i1cXgx5cVBia2jvWaDKgghUqtTjCzicjnCckLWApJVBsrNENLJvcPcXTUychfg51kUEeyCFts5gsMvVumK23cG",
  "key15": "2QKsUko7KGrJsWvozDRLDfH89kRtiyR26kYdmTU3ZPK5HdLyV9iPYLrPExenqvJFZVvn9y6Khzo5GYzWhqbHiZNg",
  "key16": "4BxMP8WsVqNkhFgju13mpcTmLvq7Pmey6j5AoMeKdZKzwvurVzX33rix8bGLik1ZAmeNVC2hg62ian46YAvCZCh4",
  "key17": "5FPzR9uky7TgNfrMJfC5UQRFvSB3PT1Kwmqwdm4pu6ytZ8nTH9GCbULMd6Dk3DHLwD4eYiVwzKXTCJBQoPwwBgTb",
  "key18": "4RGxQKR7CvbLndRkQLLuPgYRxQAd5D7reVY21SdsdratEr6mmmEmPNyuMDFCTnQxN6soT8ik5S2Qu5q3uqhcwPFX",
  "key19": "4zjZ1ectiT849gEKcM8RmL9A162B5K75s2Tq7nFdT8o6wVqmjo8NnKZf3BoXnnDo4o9ejD8ghUsyJyAhP4o3GXrC",
  "key20": "2UZz4EP7N7CDGnc3TgqgCBQbuzvusjLcfU4wAgYCmaFZcgQVjb6b3vyAr3ttywXd2f7yxSgTEpLif9agpB36MCGD",
  "key21": "3tiCR9He6D8QLqTu7XCgT614J3vSpeCQ4r4MQHtdu7YxEEFxW5gJRdpSWigG4C9mgP4S92xNMokNMUMRukdMyGKs",
  "key22": "2mJh88qw2qE12YoG1n2tv2rVy9jYGnYaxAUzj2gZjG7hs2SJHmrGRTSSuSqG5ac98YrqS9iYuuv2wxbqqhnE6YGx",
  "key23": "2RhrefCMueRzKa8hZBmsUwkrTBgWWp1aR7xR5dUKvK9tMRSJdiW8NkzTJKeAijvV7GyjkQUV297xGkNE5Q2bYFhR",
  "key24": "2obzJF3JzNmgjRyvHnu3thuGf82atNxw1P7Ho4bTjn3hTAFsbCnBgDegrNAdaR1tthnoWaVF1jYzoLRHbpwSegth",
  "key25": "uMzyBwu9pNRnsfNiXWsf95HFJAFEu8XonvPw18GNvyQ2ZmPhNLPe3X9UZ6mcWLTDq5zBLr8XLAg2bJi5QfzS3C1",
  "key26": "3RGx6AForHUatuoxTZAQMBG3TAE3ZB4GYGtJ7NDdmoZ8ZZy8TQHzpw1qVXPqCy8eNCMak7EBfCXgRmvvoMnhJQjH",
  "key27": "3a2Uhj2S1VqmcT89SK6A28D2bYKCJRF8ksv2npJPUtv2M368pMnU7h2HJnd19ZqzkMDaEXpB1DAJ9SoMJxvjJ8A9",
  "key28": "DBDTKEpiaLeqxY7E8XRmehrqGDU7LxjasCt2ETBa6W1LshSX7PurQqt35v96aJDE1JQxCXNit2JF3PhSp3cVuKf",
  "key29": "2hC1Zb1HeSFRpyyCV7XoBKLMCYZDpUjEDWW1hdtLcEV3eUz17pwoF4jLEH7UdHHMdStXJahWVwHdkJveM7sCFEto",
  "key30": "5VZ9XSEa9vH5fjRc4nn6Zq48qESQya539n6Q87j7USCWbaoY2A9ePgGBXsGkkZ2feM8zx9WQ5fcAossmZUsRLEQq",
  "key31": "4zYbAKhLNh5CSKozWcgyL39WqPFrVXh2P4FbG3nehUuk2XmUWs1xqc8CAWc6SDMsMDJfZrPTb6oK7UJqAW1R9Rkw",
  "key32": "4aWkn7pcX1e2ndftT8gQjysZG79sHcH1SBFuXNgomiXQLELrt93XoHwyhrkwJMkLPDRzyLAPYi5n3vU44pY3mwXD"
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

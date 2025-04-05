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
    "5m3xHWzPJ5RfD2cgZ8NHAXHerBZDvTUCDTToLffqP64cgGFt6EwDi7YqpX9qLe3dtUoGogKqLfXVD8QDQCYWJgYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dsMS2vBrNvr8qR5N2EYZpwhh4nHzrJH5GoLEHt841CbkbMEjGQ5SDbCfa5ruzEE9Tqhy97besDGKQ29FLx1EzEw",
  "key1": "67KwF7BkSoVnGdF9ZWLAeN3Vnx8Ld4KyFqpWyWKDtVnuNU4GyupXaJmu77gnkiNDfcETdy9nPUxSu7yYRkfPDSvD",
  "key2": "3Hv51oaFVrign3jeZLb5CMMmJwcXLfB48mHDAivNdnn3n5XWaFKaygqQaaxCwHiZUefVS48yuqE5qJRc9SHPZRZR",
  "key3": "5aB6ghA1CduTYdvvMKAvxMmphEfC4zKMsFyKFBcRQESd34WYHkubZ3ykWDK4xe1AWGEzCB2edSUAruJt4bN2hvpN",
  "key4": "4nAnxDtKqsRwLLzdUJdUPGLciQ1JtY2A15NzzHjzJuAt4V9Ja1rbx73XiFhdUdaT1NJuCWVHxNdhaLCgAUGxEk7p",
  "key5": "3hG5hGCigksnCykvo6MQRYnydFnvk3guNynxRq66xiYkQo4fUXfRsFnCbPejGeCejEuN6cqc3WyKfeTmydDLNP9Z",
  "key6": "zdRJT8R56NbzVSqyhp5wxMMXwig7HrbCF5NmrskMoMSZwtapDfqQBhof63sr8eKZv9Hk24Mir4gtukxhWrNkf9v",
  "key7": "3r6GW2ZzuR1WbhdsD1dJjcu7PcH8cZrdug5XvZfRgHLjFNTVvhpisYgvRJdXmMeUPKUrVKNSJRaotcBnribJKaoT",
  "key8": "25PxsNYQEXV2Gbdkzt1sYatfR8jtkBbcqa6mBgmdPbWZPrK5yRg5SDgr8zWPbnYewaCJLCHwYwb66jWrNQbivFR9",
  "key9": "5fQf9uM4ugvbgjbXTZJr3kM2kE3JqAbMMjMSP8xj7Ma1sjjQ41W7WJifA95JJvZgvsn4RHfLfrtEJgMKGEKAgtmf",
  "key10": "5KZyqLbfKqCc96zCLJb4DjoMjJFJKT1nmoZAnN5gsJW4aAnJTbQDUNBNY2HUNByWtmgLJj6YwVgKwX8CYs8B8KiL",
  "key11": "5hZk2oukgqNCeQXRyT18hwqxrfQNmEVFjzRzdpUiXzVintVDLXNsSgUd31PABbKUsnv6krSyGqVZtAz4g4f36Jgv",
  "key12": "2oVFA1hecFxbw6LTxu9AR9Kqqozr5cXpiuR8bFVNcJBjujDGGnKMHpvMTEzmoxyAbYczPRECr7ceoYAJNHG4zNBn",
  "key13": "5RNQig5cByhTvSQbuPm5VkKtKuyhe1kw6EWS7EKGgZoFzP3srnJ72PpEbtB7CAfU8h8bMkjuY7Wh4Ch12MWNKWoH",
  "key14": "5d4Eb1XPZmaHpEcoY7zyPhoyzHTUSpu5ebgxVCwFra6Md4sCSZS2owVKBa2CcauzE6JGWcvQjybUQPSvLsLBcRj5",
  "key15": "3juTVnqizNafEb9FAZiUcYurBeocaVFNrdfxtD2sTSd5rEp6UE3sjpvzvUTTdzJBJDoZrCbgwaq2kmU9HwfPW9ky",
  "key16": "5J4ZaiL2U9De7d2qfb7VSHX5fMkoP44x8Y2UxNMeV7RaCkLLMTJdK8aTfJHhMD1sXZit64uBx7fEu11qfgRiyFPC",
  "key17": "2TbMs7ziWUmEArmG1QbVeapQAyBfsPDRJSLccf1WcXbsAftsFy3kjcYh9JZqu2VHJ2kaFLiNejM8dieW3m6HqFB9",
  "key18": "2xVcAMK5Xhw9TPYkYCt43xoQGE44NEenUpz5EnrUpoKt3J2aQqvD3D3PyoeD2YFvhx4Yk6VL4syLi8t4jBFqW5dj",
  "key19": "39fBjkbRUwomDPadqRVLWD7LWzcDtom3PLYuLJ1XjgouSzAmJU5XCUPsHem3h1rZHrpxKjUGim8fTsSytnz2hZDj",
  "key20": "5AhPBxsdxedJVHDVQZgdzmUQx9yi8VNnv28NnpzdLyoDroz1HEZv2JB5zFKTByJU7EtMme7XG4UXMQCgmkHRCqxn",
  "key21": "4CWhyeVy7KoWNX6wj6BJmZkA2NNGJbYne2GZwHZaCgmZQ47cNsx58opSDHPWAJ74SZGMVX9eNnvvpB96sXnksUCe",
  "key22": "2PQKkLrGpuCTVabgEKJqDpJL5w9Z23Dw62Pi15KGCcGB6292xcgwt7XKyVm7gER76gaKzt35tsvBMKpumZyQDDwr",
  "key23": "54QFqxC9w4xcxnk5FxyFEkqyiNcp81mRQaeVx9474jB8HUaML67tiFgFjtRJnfo17t34D9jUbzy661CtKpuM7dNG",
  "key24": "4vCS7Mcr9X4mrYDQQDrwhBiHyQ6f4L2iAGNaNUCTHKTH1RbdHbp4hYxRcqDSmpdfoQSrnV4ek2F7QA8b1NnyjgKj",
  "key25": "2td43mNhV581nVartT8oRNMv4iUQ29RMEEGwjt9DFMy37NsxgkHdbs6VRmQA6YpYwUkKbNZs1z5HMDwBmGCtHvm4",
  "key26": "2fnohdjGbdZthxgwCGfR1tjg9vLjXjdQ7tKYDtcUgiHUcwrh7oHgVsH5xk33g26BoGVd8A23L8n8uzZP3xm4ehkf",
  "key27": "4o5HPThGkREcYzvM2vrtqi5tGY4dqypVV25VLP6LMN6S2QF8HuYYr9kwk53Kour4ZZVVK92QYwJJQuzXo2eBDTcL",
  "key28": "5eXSGTNHd7zJnAXGsT6eJE65w38k98DFfxcBrpTALxfhNT5GxoiH8jjS852nNhmDanGBbqko1TT1hjpYuck38uVV",
  "key29": "24MbJkq8PZRv68h3QzS3w3WatMCvud4hEpXuFJhJg9LxRbRW5kZ8vV2MPQfMgcQQdwNyBUuRpeLqRvA9dF1xGvqZ",
  "key30": "5GFh5g1fFDQ7BcBRrK3yqBzHcLpsT3ZX43Gd4fajFkcCxYaRWebNqQYiwHQAyJibeaEep14utkvbP1ksosbeSvFD",
  "key31": "3qkAi17p175d7SFfw14ZYLm9V8NpoNYbYCZUbBkAr8ZQeA5NwJT5UaJYq9CNCbkfzPBTCCgBaD6URqJp8iMcmcTw",
  "key32": "5C6WMiU3rhmVciryCaiknDGcmMEqHxnU6hfpGeX2jAhwvHxRdEMZzFk2gCPLdzLMWPnMfBZ5eqxeDTqvc73iPekU",
  "key33": "pDrRfiHqm9HwYB6ao8WdeMRTJhRHsPs9L3kRMoCuGN5ia3fBHW1MMQkR7nNHvBacXS1PynWg3MZsQtW1uDq89F4",
  "key34": "4d4ukDGaVPVG9qd1PN77Vv3J5bz5ajxMjnabTbJKezrUL375cBMYi8CxtW1fbfxprkfBGEoPhtVFTqvbrDzXQEc9",
  "key35": "62ZVDQkWm3w5WBPUG3TzFHiHWHRL26m5BtJ2dknGejLyRp3qGw2JV9T1QQ3SMH5oyZwg6dkcm3fCtukUoydfCDcD",
  "key36": "3ttjfuqbPD2XRzQ9hHXtiWQT8trcc9FsQJj5FszXRmmj51TrUkMMkvwFY7mDDGnQZDukPJbNdnwP2sQTTXNExx1i",
  "key37": "2Er4xuP14j3JRyG3RapJHeRqDsMiZYmeYLbRaeqXxMCtYhPzoZFdfB6RqSQgEYR8hLYBgWjxenodYwNFSZdjqigB",
  "key38": "4WQPL15k5Br9TXV8thwQVRy9qSLhB9MnDJoLBKpf3Rr7LZi7ZvhXXMTN5oG82WW57nBnv2xWY3qrqew7iC77GcRc"
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

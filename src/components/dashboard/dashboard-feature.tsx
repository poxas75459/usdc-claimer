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
    "4fEhCNb9Hh66ZqowRffjciG6LCvfzYvPNVPPih5r9pUK9L7yHEJknstYNCGZQMXUF7ks4eTPkjjrFkxX8ebUSeEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XeJnvESyTq5Nw2E1PW5Qkq3VXyk8TgNGYqzkW1QPed64C2nEX8x6wGC2yJ2AfNU3TjXxUqe1QBX67b1UgXweTwS",
  "key1": "3kCfx1f5zYLD6X7z9sm1F6ouM68kkcdw87MbUixQKPyoi6mDfgv1rr7QXWSf5TnNW81o5cimZTedVKvj5YtdhreC",
  "key2": "56iPrWPe1LqdPwtNnuYHWcjxmYVBALHmYojSLNKVF5wyRTJFLRuKGTm1bP6EBLD33QmZQNbabdeUaizYRGitHK3r",
  "key3": "2qBheWcF37wAPDNWhv6BjE1f998j9L74QZu5rAm25YDuqcnPHuAHeuEgrQbnCf4ZYdo8mCy1tsCmNN8G2wjoSUun",
  "key4": "2g8f5fCsAdo7SCVniW4fjg4U5Q2pMLFGE8UGPxS2TEnpWxTGtTZFrcV6HLomXCBBG8N63cWuTPJJVdqBopDuUtNh",
  "key5": "5cDFVxkbFYdc39UpWpoS6QPxrj15DTBxcmzdzH6gFtdNRdb88ZHsVnmk4nKSjDDSsZ23qFS2Sgjo1ajreWiSF7pZ",
  "key6": "5KobMUhsCF6zpQtsPM58Z5ifEJRZiPQ9DuVoo9EUmM87q5KXaQTnjio5avqwDiPVHJTRGKvLHqzxEndAYS1dLwFH",
  "key7": "2PFqoxV3QZUjfNPGYwmHYse513TpibpeH645FJpJ4tmpAgJbeEPsgSSqSZMVpcjndhYPgfRDF1mpCr8m85y2DR2v",
  "key8": "3CZ5kguUZuysUbx6wQMZrC4Eq6q6X8AWV3CNccxFBqNoDWEVqdF1Q6ECVxGGAjph7LNypC1jRwwvKmpBDRvpHbRY",
  "key9": "23ckHJvwrfnsJvVLckmbZyHTys4ZiKrpcZCH6SvwvE6k7BTMee5D2ShwEkS9p6dXqn5MJ4BS2sRcRBkw6ir2ih9p",
  "key10": "5UdjhvrNttVhtRTMgwyNirn7rg8WtDmcFqUtDRs8vhX59XQi61GrJtUfAGai1jyWJDNX7K1X6XAtU5H8RUyJgcKn",
  "key11": "3bkheFqKYxo34pm53JkExxUeoFV7SmqgktYKoyzomAWQxvwh93CWXJB2KXMCSdgwb7LW4nbfKFjFNKEizGoCjEsK",
  "key12": "34RGxtUEp8U62rfgBV6kcMjgLUn43JNxgRftuQtGpNGiMuZFLuGedfVT4W8dm1DiJJsmizBCPH84T6tuyWQrMNaE",
  "key13": "5VuFF2m56VS34W5JFw5XV4mczv5x5EhYD8hf5vbmMnhZqgD7eSqLMaTEna8wNfCf7Y7km7Q959sPpr7vXqMqDe7n",
  "key14": "6VdSTdCdpmDwL2PGiWkUK2Kq2Lcp5kHDSqeoDCuV69kDrdDFfPT2JtDPTBHSZevAj6jhYd5ZcygETSC99zmcmoz",
  "key15": "6B1fy9xfTSjjgfkJMbbSVdzu9Wrr5GFmB9S4o4SzeWBCySzTnMKXLmcCk9uNDgmDxYt6DxsKPhPVWHp71HD2rpz",
  "key16": "3H7uxpZAhkbsRnQa1AyiMze1f4p5qXR4vXpdvumnBF9zFBviP9mo8nkpsfSXSAQnUVaUYnhS5ZRGy24mDGGprxLR",
  "key17": "53mdnHrmiz5qEWQKoWq7YJhRtbZ5opRwPCgog6vDAiM5LpyvmGsfGt7gJRnpgJsT5t4HAFeMRqbGopyqqVLZuEtR",
  "key18": "4nb8rfsythDawWmqWLD7RtfypYLygZWbXVzqjXjipR5Zzr62Ae9FLmh5Zjjy3JLnV1WLqGAFBiE6Cd4CPMjUF5pp",
  "key19": "vYyUj68QHYASpP47Zjq4MSKzYWQaBkcft3RBakWiD3A5fzEt6CyvBUMHuEf4TuBZrHpJmrCqfjcqYJtEZD3M8GW",
  "key20": "64YdhrXH5B8QbYgYjZncXnK6ovC4cm95EwwFRmP5fx4cXE8Jf2ZtXhJ9u3duCQe5WfMRXvqHkjnbfQXCDksHx7Wx",
  "key21": "4btexf4huh1uE4QbuTQLkUFsSL15jv8czocpmwtejk82NyS8ZhxGCoWSr5EcVYX8mXs1QrUbhaUdNLXackecUmwo",
  "key22": "676F3MSNdx1Z4SLmnbExBW6Afdj5oTK2wV3Tssg7o8k8F3FaSiRN6n6Uy8UAen6NLfiL6u2gySqJCrDh6Rg8A8ka",
  "key23": "4t2KRK8End45phpz2HSpZsjo9y8jfrTvYHByN4BX27Kpyy1DCmwk38oJqFy7BJZrWfsXHVVQRqgQJmFWCUUSBaJW",
  "key24": "5hoBFeve5pfdKnWidGfrMsmjg5Jn9KWXuSq2pYu2u2yjNJd2c9enBrNvpnsE7iQ3r9CBUNZXNB7YPmKuJ3TvNQKr",
  "key25": "5PSpubjtpASeY9afMfFjkBq4oE91mR2mnwcwnreRpVSXCrsKKTMMHoGEzn7FwSrHzBgXWsnrHxWq7M8Jji4s5RyR",
  "key26": "5uUWwR3CDe5awnmv2Br9zcPvRR9sjNkdp5xmrEZmjxwknLPyZwBetxMNHfaat5mRa5UZn52zRP8gKrWb1fPut2o1",
  "key27": "AGmxXbWMBZWxWs5kCNN5FtCYvMZW3sfRXUgF8z5eiCf8HrHFSPDujG6yQt7n48yXwnpKDDtxhHY2jv16VT1gfvZ",
  "key28": "mTfXvZF6mDdSoftiB9bmzwVztf5yBvC77FPasqmjEhV9XLT2V9yhvaRYvoDy8VRa2pGW2xX4LX9LLVekMPehXJL",
  "key29": "46cbWCWtQrvCDHsiKFzVWuexX68ybaTmQe1z7U4xEWFa2wJLPiyZPRKFpRampqmGR55xRD7xoGXWvEWHpsQU18ci",
  "key30": "3A1XipC4v7yMd2J3x2HLHrBUs6zDAHRHSZfH4n1QiuV7cS2aGuheZ7z7Lp6JZPyBHUu6jUxFipXYawVcoN1xV1WL",
  "key31": "5Prfh9CPpdF6WDocVeBc4BjKZWwPBcsnzGVs7gjzcc1MRoGa49ariHC9Y89xaozE6SdBdPwgdKkhpU8LaVXL4LGg",
  "key32": "S2V3J7Ud6p9tDZaTi53TgWiue9gjUQ22uTRjLmiMnxcfHsjWnveiJ64KxyoNUwyq2fTHVUN6uz7KfdiTmDtsgub",
  "key33": "23fYJxnQkBwJ6Zcku7zMBZojd9MByf1PeUabHw4DZstPrHUy7jkqFRMvDoHYXHGV18SiS8pdt4gCEpe2W8JJKwud",
  "key34": "4fTHfhCbYVXbjGJdZwWNmBKC8tE33Bd55RQDnctxpJBnmYtuj6WQ4VzLHX2uFn4C3hE4jb1rcxBBQ1r9Ye4DFLmS",
  "key35": "3n2GpMvWHrsrHFPsjpygYHyL49QmJD8nJ9UhofeAFqayWr6qDnmotsF2rPQpH8ZVhFJURXXEhh9cUNoig4SXwZpy",
  "key36": "QHJTsR3q2HkMeXy59Q9D5VdWjbWGaKynQFu6SLE9epxv74g5vBnAfZJoX6bYac7ewXsfPJqWkVoZKXhYFsWWDWz",
  "key37": "2av996n3zUSPjZKXUnnHGMymmgMLQhTNG1jyBF2nkL2vpD9DfywG65jbisCELwp2xMLyjX1WiQQo6dHiBgSjYYXF",
  "key38": "4ZfY2TPj8tNVEo7h9CvJ9dddZCySVnsBpX99qD2tDiCoSuXnPetEg38W97CG19SE2ADVFf3YAS2k8bfpfnRzMtjJ",
  "key39": "31xzUgkx6diPpPgT6RbtjFkJTcqFWUyMcNHVAFHyf52ck4cVFKZUzuxQnwW4KDBcrFKZ6JZAiHm75js2L7U9rEYp"
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

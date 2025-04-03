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
    "5z3PaKZuw669BxdbmwAA8FaW7Zz1wRSx1vSLYSdePZfyCUna4e9SxPmbPRL5y8bDu9CV5npbsYPNKSw2pFgExRxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2Zvo3hmqPbpkCnxRwasiwLxBrPWnFj7Mq37eTWkUdCHCcLq27XoycXqcQtRen9924f8rg7wNeUAmReoLSReZsT",
  "key1": "1iESMG7v1B7AZPqWej2Zn765eRiez6PRKV952aj7c4XThog7RttMyHucUSq3vGtG2FuM1qvRxzCFjBooeqaPtjr",
  "key2": "yB5cSsfTeE5HhD2aidrEv4izmv3Y8Ay1nQ7xoUZZ1mttbRhWSCXXb4KYU1q5wWDTiQeG6zLcK6VrWLGQMHB7kwT",
  "key3": "4r1LViJ51gVuUAKyV4DNvwSfrSzWUKNE1QUopb27wEQfsoHtpKrHtk4ooG97D4iHDyRgwNd4hVfuZyKF24vafr36",
  "key4": "3j72Ka1xgLGYSRFqLbAvGnqLwwj7ABFsmds4n4v8tTRMc8Z614taLP6r6SBBNCcmKPuomXs623j9G4LdYEWHM3SY",
  "key5": "21mWDqdWbqkfxWiCciUBV6me3p1Hvi7SRNQEpWdKokFQmUKL946kGr1d2Hnzmu4rs4KZ8oyoXjBvcngYooeYorKz",
  "key6": "5WbNNNxCmTtC7dGx1UyfGqqj545m7w3boz7mzv4YvYyA2jETYMPjSQwpgULFgKXP7zaRfpuxAJssD5Q7cJSGSd29",
  "key7": "SPQjrfK2b7cJt7AXQ97ntP3vhsSfiahayQ14zmG5XSkwffXeTYKSh9jeWvBpcxJXNmmnrusdzcZF5Roc2ahezVS",
  "key8": "5da7zC67FWd75zexipN9eg4xAgfSAm8aeE7CRnvHC8zTPfGxDWUvAuu5E7Vb4Ls4m9fLiDbK4wNTXoB5361JhFjL",
  "key9": "az9UQ9WNQQzoWHfUiJ13KStEAqKZCtGo6x78X3mhuSyAEK3CTjC1RLf2bExtnL4m3GUnud4tHaKVGfNKiAbwCSV",
  "key10": "qB9xndQZrbZR6jNN5AYtiZWrdwCjXiEzWFT1HZ9ZvEeS6avfh1wQoZ57fhEvEgKonznQMbLE5VRrqdn1RFTzYpJ",
  "key11": "5p4DnvG1xD8PjucCqgpHm8mDP2KEY2TmWpyy6u3XMLB5TRzabYmDVrRH266HFKPkMpf7ohkjC6uSaeMrJ9Yn2Vfg",
  "key12": "3JM28TgFvcHRuqB3BfDyMiK7kziXMZHd4FwS3vp8jJmvKhEmi8db4bXkQP1rDcysp52GeqwfZBykCuGmc6ScfejD",
  "key13": "aX5FHeJRBE5MrYNGbgD9sfcnANYVUZZN4zrmDBGC5wogEPGHuwPsjKCysqERrariHxtWehkD4d9zf6zS5J4wK5R",
  "key14": "4nAZrvcRunNuDUhY4eNrMxc6b8vUxsm8AbUBxEbCtehDifV5EPZaKzqMHp4mBULRBwjYyUNqJR7kaCiuiHGEEMcH",
  "key15": "27D6ZFMttQGeQxYoFcqF3D7iW2iLJSGske4yBCAs91yCrWqpzrwKxJBXWDXsci8hawkgqqC5xyXCZRJMX1U1F5RM",
  "key16": "2bskYnFUwAW8ijpt15kZKhLeybcAXSgdafRNJHJqtrbKPxtYQCi56USGL3mpCEXhg4S2rnPWLsJsrhevkUE4jpPu",
  "key17": "2J7xU1Xgx7Qvh1SsoTqgZ3XCwWWnJhHmMrDFQyNXQEvDgE3uuRgUmRasmgVBjkBvXySnhWgWzJYtAnXWtdKX44eW",
  "key18": "4NH9etYe2m38ekKcyPGBZwGB2rX4tsDmbNxXEkmZ5XPC2h4RvvkdJFftTEQkWU3w6DFnaVM1vnWcz8VngxF2zKDG",
  "key19": "45ZG13yhgBoH9baYWbrJRp2NhSQPpHX1oVY4tHE34D1woxp8GDH8m77cjqYDrsAnakPnWPgCV5tECWU9YKvgkK3N",
  "key20": "c7aVFmZREWGKqwfTUdnMTbJ6d52r4SeKovPKFAJc6FzMD8mboWpSknmKkNAHNLqoXmJPTqqXBGVWMaqWzdfPdpf",
  "key21": "7n2nfvaktjw4FVv5YtH5qh7KAXV5k2XpBVr9PKEmS67GEmxtrugHUmevmHKRtxfvYn5JTobtpAL7V7YFEqboB2z",
  "key22": "5v4hJy31rsfo6YBRTF7LoUKYY7W1Kastk9zky2FSsrym9M4hiPqFZuwtAid9fBHGpZhgruGyRYjDpNR1Xgy89nyn",
  "key23": "PCbPsbVZSbXs81aZSqaeEP4hABbMYaYAdSUYbhMV2ngvQhJ3UvYbJ9RYmQ9QnxDYh7vSvPwRc3SB17z21SaA8pc",
  "key24": "5n79oWaqzNb7RzEvhkHhNiRjAWgRym7nKHc9AJMs4kaG3ANeDu2Vyab7f7arUCivjps4jAzH3s2sDKcKc4KngkAL",
  "key25": "5cYdJJXpWZCGeRu2s1AAAxuASBfiJ9fqzoBMw6Q1np9NngPEtWbLyRxHYyQ1Gg8hcdtxG5vfnF5CH7isX8TvWqkA",
  "key26": "4C8Eivejnbv7NTbhVUT7YKHPyNNUsQdtPyXs3w2toqG2CbNpW6R679MHYGwK5w8WNzHRgr3p6CdMupdi89DRZkhH",
  "key27": "4QA7rsVgrX7FPtshhDxhQeNPyZoVZpyQSGzqm1dtyLMBNupJti7qmqFXZWgchuv1zbqKQtrQUFMvA4Y2v5dpCq98",
  "key28": "5ougYdeouZ16hDdJqAGfXdXYvzFLeHP8isHVpgsSkYptKbB22Sv3nm7UhDX9MmyVqmLGLzE2JDBK7WWoF635YGt8",
  "key29": "5wWCkLrTh9u9EETLWBHLNfUMn9DWuqyxp5UCBfQeE9TsPPt3rqSLKL9cE9AiXvQggp98w8BAN356yrJtww5feBGc",
  "key30": "3QmnHoSVDacwGzmrBikBst1uMDTeX7LuXYxbJD43sowmtfzE2iVJFeHgzm6KXAhg53uFqrhhV2WQTemhPnmth41o",
  "key31": "2rY8psqMpAdvcCv6LrAxNA65jQF5arM8bm4FiS6tXYUEDLig6qkjvg1hJXTi5Qf1n5Z1FDbLQFpNkiG3fjdNLHrF",
  "key32": "2mBTieqNgRxuYZEvJwmr1ooM12KETmtAwvqFBX5uaeqqPRVGu3YVjXjTt8hjSQyjxhu3bvsqJMfqNQHQHtnCHsjE",
  "key33": "2VgTtv6p5f3YQLAXhaKsPJCnpcqQE9GEtQU95AMpmFs5sMFyHsQC9fNU95xHWvEmPYKRvrMy3BeNAvUVxC5f6gFk",
  "key34": "4oRzMHzJTfHfXK4KUmVnw2GeP9HtPqzHoerJGewvm4bp7wwMEghCrpAFEtTPphbpRURaeRgiN3xewgiqRBsdyzgE",
  "key35": "3Zn39dwgyVSDPeZ9XuBDqVjz2XhNNqomYFYkon6kQQxFxFVzvdnMoRCeWfP3MXnmjntknLkTim2hRBZQbXxJHDiK",
  "key36": "3wKxdTWriewEAH56ME4EdULoSqDcPKq6AFngjPiFynJsDKLTv72dAM9LZ3ELjnVCteXcJqyroMiHY8VSqGEVRg2M",
  "key37": "5YGKxRxy1knodnDbsV6jwhvjU5hJ6xXdc4zA78MrNYAwmvNZSsHYVosT8wppKj8QUKFXcNnTpzz7oS8U1Lr2fou5"
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

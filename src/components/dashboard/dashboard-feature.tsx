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
    "4Ew6RQEfXXdCHC7j5Kmr1aQrHp7PE3gPJRfCqSGfzh6c57mmf8n1z5oG5DHz5uDVqHxdorYxkfESridPDgZFSYge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DiCJBNF6K24EkxN1aY3HuS2LcDYPCxyiEw3RKexQ7EBDRkSpivxS2rPtbbVVZMoNp816zrSpmjk2qvAYiuNwvqB",
  "key1": "5T9RZHpQHshZdQmiL2Ky1ssdiUYx56c5A5cwNJuCNa2dqhrbELRqyE9EgArwLVifSS9npGXVqWuTPEAeYTyFZCXe",
  "key2": "2WqYvdFoAT5SgQDRfQaW9VnLmDwSDqCScjV5b9XesRA7bDUcBH89TS1j8v9qBTWJ4DgmfR8bd5LhP6tMDd3qY6aK",
  "key3": "5TWHG5LQA6qpZMbnGjJGqdxYhidHqdW6mzjAK12ZfviD4FNvi6WsdwvgVG5cDSwXx72WuMTtc3DVsmxyRPPGcspZ",
  "key4": "28ERLVa5bVL9DtMmzEXthXNXYhSku3fxzcAyrhpLZNckiqZErmYgs4eQsNeznhJJiamNVZ6G24qp9EUdgmiBURzs",
  "key5": "4CKA6cuX78QXqzcrkqun4XU3zpbxQuMZkpAhqxBhWr9zpwQ9foxuH2J9V8UtDJom2tsTCoFRRfHEwe9EH8nZSuC8",
  "key6": "2AqRfFDaJ2oTdmYGixNc5ZyLnYfDPBirCA6MH6UUS5VmsjB4BZ8qJhB41BTeq8p7nt7Xpv9i1GJiAAzYy35z4pCe",
  "key7": "3BoKkfuMcBD12emWDNuawyXaj8ZEzZ4PiJSw796kjdqBXxZWRnChafRmJFEdNMVDuNPmWafMFMXAaqbPGfLS5M6p",
  "key8": "5Ke1r6s9YE8FTFtAc9UngAJCH5FziYBZbDqswSnsPfNHgYpCSShUpAasr9Zk7hY5gv3B7kjmCpKEns4g2Tgw82Xe",
  "key9": "4eS8jxbg61UQdmE8cdR6tfpzu7RQ29ebiQZp1QKAWTjzCuJBh4FkJ5eM6UzWa55grx6hKM7QAXJu4DAPJgRuPRaY",
  "key10": "2dGVPzWkVZ818uVj8yW6wvXEWTZdTVaG9gqNLWRDvmgw9FmeXoP6t18V8SnckjF33URqJXwWyDWgRvsSpWc7XeVN",
  "key11": "2Yjovd6KBbDpVgAvWi88L5RqHr8KfGgejD2x2beuKgut5yh5xymrmecXs8yvGr8FhSWXpiNeRqafcNLTtKNtHAov",
  "key12": "3pvfajys8WKf3yApjfcsZtZpPUPxHLC9T7xq9JffxwtEX9xbeHaVD9Np7UuLpVZ1BPxrwGUA1YyaSiNfNW4UqSqM",
  "key13": "56L3rYVUvPYXfXv2VGiYHp98FZSWWpNYC8fGXApJCBb2jMxkVCv8p8z8V7QpaQ3U6SwpZCSkcf5Sgchdt1mmen3E",
  "key14": "4XSaDkcs16UEdUPDinrcMwUswT2m4QyMaxg4STaigJ1njrgkD9GiWAjthfzqn72SiKHnAyQynRzLHiH8kL2Y6cuq",
  "key15": "5HYJipsLCzgCRUw8keax6yZ5ESfDA1esLkymBd85GzHAXeA4uXcNrkGicCK8AJGieUb7Xty88wcF7KWjiTDSVw4s",
  "key16": "4iTNPBW4EeuJ92G1T3YcGyxDnTrfnDnVjADbq6RXnsa3vZhgB7ZeH8AiZ7HjRovBmPcHt2ywJaSXtW4kQLn5bc6f",
  "key17": "2h44NBz3pScCWEWLuZ76XgvuaSyLcy1HXuRbt5KpBTwEqL8hSwUFtRT3bVKPjXZoDqskxYutEpV9U64unWSjyNxZ",
  "key18": "ZH1TH6pfc7Vw8pHjuhx7bf2mEzK52XchtZWcVHTqYg2nSe96QRQRD8mnof3fvzpzSq7qmpBXykfgFX6nn9aUzfs",
  "key19": "5tELXaei8BBtTLGBdF3DhrkeweULxmM69NeNzwLUtGzLLVrTzHLuG1CoUHqFF8QStV3iVvEpLfVfoEqzNC87FjAx",
  "key20": "27r6GgzCYrLusPbqWrLzgVhdwrFsGVdEbHuXLtdXNE1eTuRHWb28f29evJdRP5dDeH8CFzQs2ozqEXTRuQ8T4tBd",
  "key21": "49NveoKLQtGmAmhfkX8bANy9pQtKPD949tGwTmDwE21pTRk32FSVP7WNEz9KDJAswLUQT3zCA6gubJGPakzwDAHB",
  "key22": "4f1kUAJo6EBLP5wtMmSzQTfkjixRvZQAS8p7nk7jJBv3ANfnjYtmKCQJmxYDE7JxFsxHWEjNWHZM77d5SVwnoCk",
  "key23": "3e6cvWWGSTcRvasF5ubFXixcWXcV7RGZfsVZHmgkRdrsyhzqiThupvGTTW3gnrpebyvXjpP3XuXxqVCibMsKqd1y",
  "key24": "4AwBNDMX8k19zfJAJuRiGFaW7JbvZg1tRXJYbMY89prdtAwMWwhg9kqjoiywK5crg5THqKRm7MzChroGBZKbKrhV",
  "key25": "56QnuVCH7M9PLdF38X7Yk49nzkKEnp5TsV2YnD42tJbW5bSKfSytYTFSetyWWwUpf48WhczwPy8QaKRnbmdmqakb",
  "key26": "SQMHdMyta8d4b2mPir1xiFdmNFhom9mo9YwSMPP69ZQUGLU9Y7LhdgwXsaJyiPx8ZTWcZZ3nQCXKxL2vLQ1THGA",
  "key27": "LzdWsZrraoEfmdZ2wFHJeeEAi5AjLH1zH1toeUpr3yTGUuqCBHNNfhtWJwrtcPdBQmM3Bx26Tye5QZcr3x4nE4Y",
  "key28": "qfxYVucNnDJiEsYRPmiKKToAdQ9P7V8sL9za5CT5mx95pb3fz8WrBPKfhQwLanW491W2AVASc4f4qA1aZBefRJH",
  "key29": "2TFn4fcjyJoJQfjywcW9h4rP73MDTQXqZDjp2QreVGf2Zmn9xTLNu2wZ9dQaPqEUE4QcHWjgyxMUw4Vhb9Laz8sb",
  "key30": "5KdF98pSTzq8WBH5UyTRg84A6zHhJLnrPVzx5p8L7fNtPcrrwank1kSr1r6ypfZ6qvP2bhPTQgciKMpsq86erwNF",
  "key31": "33xzSpSRysQd1Ca6xkD9YQy3pkQyk6W3P7PLDRs3qiZerkaRToexnTq1Nu1BYDRZxvd3rukr71QtS3oVLXnA7H3",
  "key32": "5XJw1dBmpKWvWdV9rA1a3jQhtr499QYZjVUxAKVC8AjH77eF6zmdL5gqkY2CTnZQZxUqUtjjzBwvQFe1jC35aRrM",
  "key33": "5XaM3UWy7KMQ9qLchKsSgQTkrU9d45ncpYaEShyQ5R1qhrjaZKKcZQTH9AmsqEhfdoqxmsLTMZvhDqGq5aotbFxw",
  "key34": "3ZGhVgVr2carqxD7wwbxWJDRk1LNH3J4sqTnBCpdrAnWdNbZ7Q74mZaL7W252CEtwtC7nuxussfYSqvfHnansNsc",
  "key35": "pXfy4X1mP43cApkowvnHpemz1JQUKtf3N3PmZXTwjYeJhPXjLihRvGJ5AYwBXW7UnV2xiA9F39Nx2CWVziDp4jK",
  "key36": "5dGvAfZLThQS2XpchBaWmVJhNSB2tgGNLuwL1Kf39ZpbvXNMBXr7oEbLKHe2ffPXoGY9q5DBqY7mzPjtuzMCes3v",
  "key37": "5mYd6kJNLCSVLcM6TFqXX32tjLRAwrsEZAWAHmYEdoMoPzgJkWdHpcGPN6E7HNc4Q9kN3sxzJcn3cDdA8iXo9Beq",
  "key38": "WewpEVQ4piT71ckU3w4mo8Wf9zLveTN3VWxxesAH9iWeYnu6Q31Rn6Qc9YBeFU6UVhpcRCo9ER8MUFTbv4SmcJ7",
  "key39": "5NT496WPepqkkz7fxyxkUchaxYiWZJ4NrA8XAheQnSCFnqDddcuaoFvUNzUM2M7vLrfPnZJuhNcjSWKiFEnXJzVc",
  "key40": "i4dWukYLcQbmyd5NDVjqbi2crowrVipTuzEJxrCNNW5111JHvdAhikTUQCTK3vLdGJKD454HBbGi1Up7hKCcD2T",
  "key41": "4hdDwgNQVgJgqhMney7iHCUeiKAH3SZqXdTnmLP7Qeb6ywpUpMgcHVDuL7tfSGifLnYjw7o4B6J5DNnjqWy57aXd",
  "key42": "pkjbCinSVLif29EwxKRww38cbw9QGmdfTkrjaDcp8WeoSa1rLCDHCbXp4y4Y7Ud9Tx5dG6NNmYiBCoCYPptX5yX",
  "key43": "5cgfv2qE8ujMBYoDX6NX1xCm6E76591RiyD9GRtLvvJKoMqEwVYAKz3phFq1LjvVPn7zsX14YSvLk1YJ94VaYDUA",
  "key44": "3CR64fB7whwUwCVQL4gHrCd7gxz8now4sQPxVidLvSNcYcmd9vGpZzYPhKWCYjTnKMBSyUqvS4K6Basasott6QaX",
  "key45": "62GbdvwfaiCWEVhytep5kALGmCSq7fD6wMFZ5C7VV5ShaXwUXfBkkDUN87F43QkcJoFRwyV4YET7wrSWConDJJqE",
  "key46": "4D6ZNZq2h9L5o1fRMb43gM5nLGdXMiMzRiMooVHunSJDiyk4nXNET9hzBWNgDmruq7Sg3xEgpgEHBTHetsKcJVht",
  "key47": "3G9w1Hy8kRY6dQft5FxbLhEpJEXtCgC4StocvDxRKfrPdppMk1ZWjuptd6ihtyNuwZhobzC5L1frUzu4FS3DzcoT",
  "key48": "2MnRyrN7o5xhicGVB9w336gg89mMSvgX9WbT2WL5swtW5gTd72YimKZumt3xFjUMiY8qAX2sQ8QNea5MANRm1pYL",
  "key49": "3tZaQ7d7V31pfkqSbZmbFhzkeytmsH8kTGevMKp4K7GGhn6Tsth735gPFw7tYuC68g51VpVEkkg8AjRDhfTPshuf"
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

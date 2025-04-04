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
    "2p3tQLhyDLzJyqWP6FqvsWSGvXdJ8qQUQrzq9kBJVgJ4VqkpnAwqDp8NDAv2zx38RToTWe7k3HbgktesQ1XtYBNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ushHHH99xAadf4bN1rXCgBRXKXDJT48Fev7ujPxS5eh6jw8XG2m7AD3ZuxRfe7dzYxgjw5oKbvub2mAuzMjn7A",
  "key1": "58wJmqrLntY1JUGwAM82p4PowTVVN2Dvm8p2GzxfSMR34wsaCY8cKkLNy4HS1dsVeobHakvFqtVLCPrJergzgDJ8",
  "key2": "45nswi2RWPqPKhnzqRTQsx6zynDkDAFBLXZbxXC7zRjBJJ1aFNM85v3qSKeGL7D6bmnSk44hnsv1XxHnBqQsbuDE",
  "key3": "3tyVK5ZH1QoWTQi8mmRoHytCs1EugH4hMcMNwrppV4ZXUgYhoQX8Zpy5Fx6fx5jxZFfoCfY1QDNrtJtTj4ekpNU",
  "key4": "5ZjxMqMPSUjT4PayGZcxs2RMsrzgEfedwhm62dytPyBPvqLyL3vB7kiM1jhBG4ZJMFJyFXPY41mtc1y985Kia7ug",
  "key5": "4tMwvq9fgzMxn6ypmv7rgKDVV5Yk5TY9bTYbyng9B4nFcgZgJ9rgaSn3cwRLM8Kqf7ZQiNBs1VtkCHYtWuHEngV5",
  "key6": "4bQmJfCTwWHjxNU9gHR6iC3t4do54dgao8ujqwdmaos7jNVpShQczeH1tzFCYcg7Qa3o1yu7pfKuzcdD8vauL94b",
  "key7": "4SDYRDJpZsFsct8hYvz5Y7wcc9NZV8h6n2xLmyZBabLvitbXpjAuoQuaKKQ3gkemq9EKLKwNGGaG3HmXCBi6t34X",
  "key8": "3P27HyVnUBhPqJrTMJVXGS32cn8ZQ9vNQJDhvrRPxS3P2yLBrrjowxTr5a6ptGXUkVVtR8P1Romgp87UxDkGkUFY",
  "key9": "62EPWtgHC8LNB2mm4ytvMhFyeBqdrJXP1qU6NvLWYtz1Y5ZTyn7ygZhPBdYN27VebV1N97t8gUvisa2tYtXkkUAJ",
  "key10": "5cEFgR4CbknW4QuzjQGQDNrkjwF6xTUkfrv4x6EAbR5qtsYdbVK5gnoZCdZkXzBLEzi7Yssh1Y4ekkGenzSNWFk8",
  "key11": "48QVTWS9dj7JziGhp8ZC98DRc4LfSsWvsneD4uxa3toU1qqLepqRVYxzsFXVgg4YeV6TmF1yT2BiNuTmBJN1zHo3",
  "key12": "5mswULSvc814m33TP7Xo2V2Ah6fC61RVkshSZWm6P7BcJR5AnzZa3mNfsH4n8q4HnVQtZA1ZRrpkMKinST9kDRBy",
  "key13": "3g4D1n4DVjdCyyckfnM2qsizqSGsQjiKCnb43pDVeHHFL7zsAYWf6voStSpG74uN4W4Bg2f1Da7TEEqM8ckXP6pQ",
  "key14": "3N8HniRrYsgWFvScKQmcn2aRuaWEm6tRkrRdPpuCUzTNxdhMHL51TRUxFNGeiULFZS8bMAXeB5UbeTXektogYRtB",
  "key15": "4cjkUpdCwPF65mfTg5UJ2L7gHiAjZKHDDoP6MuhBanG3qF2MoM5UNxq7YhbuhL2uoQVewPkN3XvB3vmpx6Yy4xdM",
  "key16": "3qPwxntvxgHbgHASmcjqofJDaDcN9vGXhQf41Z9Me9U1tyswdt4BacLJBYAdKrBW9zUDKUXJFHb4zjgiaj2jNWSt",
  "key17": "5tKkXFDhHmH2xsbHFZfNGjMreVrUjvRmTiriYR6sQUSmrN3oj5kbVC7QLfPDTy6geg83nGs9FFK5yeY8wuCkXcER",
  "key18": "2XPCDT1itn7VwwWKjBfPMBy79u8Mh6nppMyJegrecQfbfrDC2DNePg54Ykc9n1J5TqPPRDetx7EkuGoo71WUwGni",
  "key19": "2cksdAg6P488rFY3viXSRPqm8SKpgSmtm5kJtqxooFTYttdazJzDiFY5Wmq8XR1a8WJ2n7LcnCJXpd6DWpAvmZDr",
  "key20": "DgLy8JMwwGdXnh3Rw8agQLWGmM8fa5M2AAQBcBQq8ApKEH9gCkzePcSDQp6hnNziv4ToQY4PYfYMUD8MnTLXuBt",
  "key21": "3vEQJwewNf3siqVacsE3DSA7MWP7hn1DgE56igB8RQG9kCsmSCmGMsSR1KLv2gg2tJUquPJRMSMos1sSoUnp96Z",
  "key22": "5m9qRusXcZZqeu18QMDxYRS14y6LuFfy4cyyJmV8fwJsLyzjM6esp5uRXmJPmEJixzSgTdYAeAPm2mtQG5SxPoNo",
  "key23": "4NB7sDaR3WhXfX9KabC8JD4woVF4kdKayQiAEK88Mjf9XqFosayup93aCT7HwS4CaqXXN36kaUDyiJd8aH5wHVDH",
  "key24": "5gdp9fC6d7ZhBCdcqdKL9EZan1f4TQP3cv6dCjcbucCDmcba7CzxJZJqfDhdjfedcB42y651UZmHbXKv4AJZmMuf",
  "key25": "2avyvZiC5UAD9ushuChvRp1Qd1K6bMsJ2fnweKKFGZKv4BRWA1RSeLFLZQVKL3ShXUoEv33RX43oPTDWC5vE1tsS",
  "key26": "5rn2REXPHXaB7HkN21cgCZuMFNrW83gMMQMN5jUzTbeRhZdGPA7c7tjBQswXWE6qtAb8zXKBEAsVksVNyVzaUThg",
  "key27": "52LBH57Rs1jYPEWebs8tFJeYWdSf2AL2D6Pz5h4YGyzY6Snuk6cbN3SgwbXAR9JVnnAYvaoWHXs93LdrDtQLKXYt",
  "key28": "3uW7QtK57thRA922qHLmU4Mb2L3HQ1PMN4KahHiHevWW7UjzEftd39EaT2AKT4kwdJ1JMZKcS75QHU6szL9xThzX",
  "key29": "4mfFTZDxPVtL9ZJBoLG7PGz7WWWFszexsPkNw8TNDLpvsbgwAGXoEiked9Ln927dCKbXBrit9GgWW9mJZ42HNiqw",
  "key30": "319r8Sb211P2E5xt7qkQ1yLzt3A4UioVeDPoUDBFBdJF58Z9vspvCD4JCuv9tvv8ynBaDeTZPKK7kCtnzAuHmkkw",
  "key31": "4qaEi5B6yza6xNkT5BVVXqfJczLuUZZBeuTaa78fxRfcMQbiVu9S6DnwPRduzSXSoPFVr1X5gKYfpHaz3RixQ725",
  "key32": "DvjYZNhNLe5ScbqyeGEZzyQR7vtBPRELpdiud7Pa2bWhT3Vnpic3Buv3NBRNmFUvtJnFesBrpJ4mcqtQamCWfPQ",
  "key33": "rmwzob1PLBjpxEa6754gnh2NDyExfikkFjEJhSjJYFzBx1wDq4vtyiDnRvCvePeWQjNeZF3S8ofXGqeS1nCyDXX",
  "key34": "4g4xiYHQcDvifSTvGLPW3dGtdv3VQdPwJDYRZNWP9LbYNKPVcgqE1zLpLnmffVo92BzbqExTwPmuL1hFDuvrbm1m",
  "key35": "uwW8MjVrmhqeccUkimBFcwHafSfWo5DQwtutp887nhuxXSDLtRjyjW6EJTp22F3pADwBtgRWw3CYs8ntnFgh6wm"
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

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
    "yZkbw1SHtu2Q2uGodZFw5v2uw8EopS4LqnGqkz2QJPKzqejpeTmeUYPUYnnMKGEUkbCiJ78B4nfB4Le9aigfSWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "552YkxT4uV4259Vk1HYG1Nndrod2MYc7mDZwuENDSh8CbpEvmhXXJeTqGGuu3NLkBWkzJuMGaR4a79w3x3K1gax2",
  "key1": "55HzdVggTJA5vW2quu8b3Sa3X1ZraraRGgRfdCRLB4JPRavrXZ5aNA5mquHrbz21FePsMWVic7GNLtGteAi8xwp5",
  "key2": "5S1VK8fvmTpp3YVfw6imhHXvkJeqvSTmKd4WX9fUmFE1pGg6fULZenToCMxQMFFzBmyQf5YfxHnmnzrpSxA6C1Fs",
  "key3": "2GDWYkZSQn2t2iek9NWGAiASK8NcdPftqr4XvZN71CTLg5Z7zLPaxu89eqvxQwPtLaTcnzrsFoz4atLFhks4Bh9E",
  "key4": "36BCfhqQimkCJRkbARGq5MvE1Ue8idPAqcFWtW8EEwjQZPaLLt5AzfwK3qctb94XF5tPwqGCZvSfj2p8AAsA3jv3",
  "key5": "4C19kfGbYp5cwjYxB9xHnX8dRfCQnJmPK1pKVzG6fCcaPieXqaKwpdXgtssK7715Hx6skCjpLxFEhRKQQAEDDxJy",
  "key6": "46LrpRXE46jhwn76gFK7uVCMZcaQVPVLTG3fDSfTmMAV6T74mGMYfkpGfBXXZSRyCTKs9PRsTYGzsHqK5BEvw8vz",
  "key7": "3KAR1WRw9RSqzVf9Dgs9ouvH22rJU6FTSdC45tPAARNXJThdoqwFpFSUYhrL5mn9RZpicKWMsBwKgKqLHXekvNP8",
  "key8": "3wVEpE9YkyDH3tAZaGCJMrHxgRCjx938iemALv8gW8LJP7BTTZXaDKSMqhVAtWgG4aSezwvjPXc5s9JrcJGqszXF",
  "key9": "3LZWG6DGr1UV9pJU6C7g1ZHsezrQRuKDhAZUmiKYHQJVZr4enF73rqkpxy9QZHgadJy9jVtSjdE9e5xuBpG1c42N",
  "key10": "2wJ1U5JPEM73f1h3ckBvQfsnDm5G4BNw3cRLJDTQgLzJUiZdh4aZosa4TQTkRi8gF5s6i6ZXccBvTwz6ohnA6s7g",
  "key11": "3PFZVEAs8CDNzpATEtNh88oZ74kNG4MoQJAGv1aY96xWXnPkEtSaQJXf5ydzqDraQmcWzKqY8jMeeALc6836g7hj",
  "key12": "3k2C3jqme2uD3PHASJkBeuGGcjN9XW5eE8hzpTBLvCgMKccFcDPXVRwH2NzPNH3gCT48CWt5F7AjKrhkPmTHX16E",
  "key13": "5WfTsrpeAbTcSk3LvLmQaWt1MaS4gbM6VzCJdRSaQVvrwWzyWzbt1yAhkcPQaQ5jG73eSJy5FULQeFibVbb3hPdd",
  "key14": "2C52HwuZX6wLWpmHei7YHGYT5DdvXP56poV5SWXXt5AkgjjYRZKNbozmbwtZ3eEfZix2UU4WYv5YfBWt2XUiSgwc",
  "key15": "moBXo5tjU5CD1N3B1Pq8hTJ7ZcjUiZMfvdjQb1mzD1ZdViTycoxcfLSmaB9JcPfCJEjEoHvD4YSq17kt4pC7bMg",
  "key16": "4h5E6BfTJUaLxncYXkJ5m5hP3dMELNzWAvf8kAWUXZGQiTS6uURvzBCGGNGwsoWPV3g6W12jxegobQ7msWaxujSb",
  "key17": "4Q3jdtAhRiXjX618seq8MMGK1SoSquQCLyqAWvRUFjgMGt699tvGxf527Km9fz65KGdwNY9y4ag5T44565SWJEak",
  "key18": "27g7wMqTFBJvTcLwAT2rzrTFKR6ADH2Aa2Cy3CKkScPpjwDPisEHe3PNmcuxEEcvsnBLkhe5UTAvNd4tVSumuvwx",
  "key19": "41TizfvMiQ479gz3VF4vx4LhkWBZVqGApaLJ5bPHSHszh5bG1DtFmFuUqiju3k4YPvTSGdZPxSh9yAzKUjcuerWZ",
  "key20": "bNJmS3aXpu2jeHzFcCzmF8mgZ7bpR3y3qAvQ3Ub1LhjeBscEU1vETFfBCaW3iUP6WneRg4eGHqvECPDvddjGiZm",
  "key21": "cwMCMrL6x3Pawn3f8SnLQri65giVK4ryS4eMbtJaJh1K4U4mQDAsA7vL1ZmkC1bskNbjjRevHqud8URiTsZSqJ8",
  "key22": "2wS7QCEXCxvRYuVgBRnszbneNHSzJF64t1n6EAz2PJnh94fFJAuRzPeLgtnRAjjTD8Ntccue7L9eheT7ZNXz8H1Y",
  "key23": "612LW31zasvUZiR6MX7ZtjPDL6WftP9Q9k6TbfuARjHj6hfPUymYAKDRKCViPeCVG1Y5idsJpijCgRMh9SZdk56U",
  "key24": "29jqLVscp2Y5RKAXtGV9cnzMZWMbrwB96VmhwndkCz5uB4bZwjtr67BXM5PbLL4wcsppHKzH1RdZySWbpmHJapUX",
  "key25": "9efz8banSctwh6Ag6dTEcUnqjidn5wKrkjgyFVrALqV1CXtvRBYT197WcQFHFB2JCYAdPwh5Cs6geKysX3p6RyF",
  "key26": "3VyDg38ayMkY2M1ypoQJR81FQ8FG9DXFtx8jDaudLtiyVGwtktYXCfgs2FQSXKVYjgK8gCQmNXTraoiUaNHAQvVh",
  "key27": "4PSJ97DxgfvqN7LHnddPyJWJd2KjNGp8Y6KCgRF3aKXEuY22hyN46nTLjmRcGvchWqb1froiZc1igaXADywwPP6Y",
  "key28": "2FNZYBDf9SqP5Mj7SrXVs9khythjRXKRaSPbDs6Kg8vpXcddrYW6YgoKfDPCuFtv9dxdTz8FdbWtMUjgNYYDGCgv",
  "key29": "2D6Nk5Z6ESHHCfg6K9hRDe1z9XgM12VJJcnKgWrNwZmRHxNavfZ7h52pjVwkjQzWPqGT5i8KSjGkCvatwnkmoso9",
  "key30": "5D3uZp195tAsAcGXNyiaBBi3QXpFvk4rzJQu4Q55WAhsn84DHo4HssbwGgRxpM4LcsEodC5azvLTh9dUq5YBFUD7",
  "key31": "2KtmV71RCTkPG1NGeceHtnqkX8wQXbzDc9rBK8DNQTQ965U9qykDJEfVfkmUHt3KbJ8ueidtUT19BCScn6yhRy5s",
  "key32": "2PGunenwhCn8wA8tp9pdnBYxcvF76B6x461GydAE4FmSiAVN5voF2KmbWGtGVSoUqRhqHtNTdjypvdsJjYNvGfeC",
  "key33": "5gxGCTKmQmyJgdagQFZoZJUkCSBKn9UJLRtBiCUzKAYPLwU6drhpmhjgLwpjfegH4cQqxnzq3WPfFLRwbZNrpobW",
  "key34": "5BQj1a8nWP7Kmh2Rt1QpCYGrMx5Y4EWX419KoxqTC9tWirxpJxivVYzMf4hGdhefFnSjuSukrLkbzqhdThNYCZbd",
  "key35": "2bWDTcKTqAgQwhdHqBqtLvX7RhhDAYjPAWLJUqZVkc5vtAs5zZsNc4s9q7ZTPg9Q3PQoidJ7WxEiKxGZBXY189QY",
  "key36": "Uh6JuBNu9FoXKWj5hcNwDCBPv5AgJnK5G1kqZuivPjs5DRW3zo8ZP9E37opb57umgGmZNvdGpd2kip18rRuREWb",
  "key37": "dCFAwLMdLJ5nFPJHiJwV43fFgkLvML7Wky78EbYhx8vAB2CVmuxrGFbMzpvKaMjbobCiiKeUxbUxkWji1YsEXa4",
  "key38": "3K8SBLiJB9a5djcfdYKQPtHx3U2c32VptUGWTb1D6TLm9LeZAnNSyEVU2Wee355qEQu3w6WaA95XjPZcMLv8iVSm",
  "key39": "3Lvu9EDpYVS8jcz8LXcf6TcX25Ne27Hi9K9o7Eo95yPwKCmYcFKjwK858Ey6SjLNotBLtMx7a3McAaEBp4Do1ATX",
  "key40": "Rf5EB9NzT2T9Wqb7SB7W6W5i6WvjZNMHhjPD6YRfnvXGQCGTNuxCWM5kQMwafJuGjqFn51ww2wKxAHaerwVjzhZ",
  "key41": "Gj6PS4fvYAwsQpAx9kE1dLaPvGiGSLv87c1CnT7hB7E94wFoyYAkJN7pnsruSUkk3Q5Zdkq68NQ8Uu2eohzFfaG",
  "key42": "EwgXLjaAKWx8kvYe1q8cdJSiqZ3LYyJjgvco1Q8rJEgV3Byn3WWAvNPLtjhEx24hpYcHnhtc9dyEP887gbU4H95",
  "key43": "JzfG7XfKAXLgLunaWqCry6vq2VgrbNsfjNpkVoa3EoUwvz9eZ3LGfNK8bmQTfQ7vMUvvbawqRyvHNJFYnB6kpez",
  "key44": "4E3A4dV6sAMHYP12c81MtRSaPWc1NfDDZFBx7rgGKKBjGNcsybC4K6ZodPvQ6dmdTc3Sq1DkC7cntAdvpZjcHNNz",
  "key45": "z9ypXYdPyTLDVRag6NqQmZisu7V7RGGSBXSEBtr4ozhaje91VSJ1dYbVjLc3qrB3tUWaz3zeQV5g6nGRxLVyrrn",
  "key46": "5yrvw5rCcgp4Jce51EVd57zUBqP3T7BgqEhF4pWJCRtE1HHYzvZzzQJo2YiRK4v3YRjaDfTd3AMyDsGtWp8G2SGE",
  "key47": "xfDQyg13hsbdvTtVGAFELmLihE2ajRzXiK52U2mXK2xY2g2PCuXqiZAMYXewmNwD7yMbfG5dGeFJnLJGAmJU3UX",
  "key48": "3Pa16wT32LzUK9uJUK2Z7gWBvokAJhA1ykcs7d7yaHw58zmKFcDDLSDYAKVjcAMfytf2cPQkjanPNJzwFoi6V8k8"
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

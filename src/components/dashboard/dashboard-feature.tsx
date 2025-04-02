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
    "48Msq6f6Gy3EKEmJ4GGYe2kvcAc7AvbJu3V3vLeoSPXMhrzTqackYfgnic7gXKpeuWyEzm1a3mpnCMXU44SJrTRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cf3Ud9iNvjmLxWMt5YH1p887CiW9ap9aCAevBnTE25GHQs7Qr392zHdikvN7Rr7YzG71cEfbjWgj3n2g4J7MAcC",
  "key1": "5SctB2sf5uuKCnjV1DdYSRtNM6F8Q9WQm55LxCRai3E4gwXSr2pTr6XuHahczex5EJiNu4rcJFNvSdD37HYLuHnS",
  "key2": "3T8kSDxcTXM8Ezm5q5JpNJhdFGSVWm2t4g1JzrZMEfg3inpDZqF2SRU5Cu5zjaT9c3q343GhX7fAAxt3r8s2nZea",
  "key3": "2yrJzgJ7XdQ3wAf5XARnhZ8EbUs39ta8fgLuLA3pYVuhjMi3MMov4WeBzLq8LJketVNWzu321hXBG4WLvj2ZKM6j",
  "key4": "3SozxuMVLeyGNzCRnRiM5TimbCCjYy5Rq6UYB1WWFmWoen85HTsopq7Z5s44EVeJXRv5oaw4M6ysLJ1d75FsfG3b",
  "key5": "qGJ4JuK6x7LYtnUEmaU3ot6kqzaz2jRUBtDQ3SsHjRFx7VUPq4cQLdaM23qKbyzaFcM9KjR86RwNMDHJfAkZxJM",
  "key6": "5NcvyZ2YwcdYQJrgA45a52FsMWbW8RSvi3g5txi2VoKc9sg2V4aoPYtknRJWXDcMYR2ohk6kHuN8BVguJ36t8jet",
  "key7": "u5N7V84vAuCGJPASKTcBeQZEk6C9QeRiE8opHX4mXgPnNw2PK7o5Lqt2ogSEq1wKMy1HAYVPSaGtuqRGkT7aZ7C",
  "key8": "38uZyhaPE5Pyj9AfnARKDte9wBGdheaEe95KwNC6qqGCDh3rkvJrZfd8DuUridJNEhL4mhmHVz5nYnA5byAMFxKY",
  "key9": "5wWXHre9ZKGwLeqVEvkzmieMQTS4res3Hu5jbPjfLkFgvYBmsS3NSco3FSUt2o6GqwQEJeamiyWS59b4uQs8HV4o",
  "key10": "2ZFnLik4STAMCWbnn92mMyLXEqwikLGyyzZVDqcxEW3pCasDPcjaVEKGJX9GDALjov3P6fspLjikPXzjiDVpw2YR",
  "key11": "48hur9FmJ71NNscH4RVdYhAsLNJ78dB1qxPbsbkkQTrwrjkRMmWLxuUwokH2xik8aESm7oGArEfNpVFwyNCiJEYQ",
  "key12": "59jBYeEucpfZn1sfo6Uy8S8UmKfgbLY22c6gqiixs999kKMTU1Aawhh2qUeJJtu2qzQrHJKSw1P13wGFkuodyk1q",
  "key13": "5u2wthqJYgyxfqTWPXtWPpYQPFUsnmUQ4UbgGAFfMUEiUKzJzKj9rx4ygGmWeFGsQpbqUF5T5SQ4aetfkWCEHfRw",
  "key14": "5T1TZALQSo3rWJQqBWMgCtRkMVz22CZeMZW3WuUyAUMLPA5HrJ2xxocB4KrNdExiZPUjjNjSVocpJXouF37Heqxn",
  "key15": "24hXKu4WFkK6qBa14mwc2ygtwZ5Krfr8yQbvEAT6roTuEXA2hfcCcfD3caT2CGQSPhBsPonrdYRjThQHUPgedzLJ",
  "key16": "25HUpqQznA8aPrdMxHC88QFKkQ7whEGgfnJ6TXcnNBewKZakBzMbmjM57SubarpzPGiwT3Ya7Xw4w3BT1coz6bGs",
  "key17": "5oDYKU7V5EAb2XLpsmQ9VBR1mRVoSf4keBvZcoTVKMzSM9oigZfm5cXm1hDjbJJuLmeBNjtRxsco2zjnXKqFmMyY",
  "key18": "4BgTko5Ff3XpSy2aGNXXPL8TeicSepbuLVVMVEuEhRa69H8E86nAWGoJUSwPCnJ95FnpQPsfkiFbZRAGuLcW1U83",
  "key19": "3XwGAKr215y3PscMPgUQjqXKmbiGxwQ4immKup4x8vHR5esqGc6v94nr7Yq8UC6DL1PuoNYgSZY7sHqJufSyEHYM",
  "key20": "3m4cPK6HU16FUU7DoyFcYW54jZAe1QXxwAv9PbN53t9FEzsqHX74GR9cFWGECLPMUaJaHrTY1QHSTKsxLcRyj8eg",
  "key21": "4famBctM24FwzrSZofKYeSRNonTvhu2pH6wCgM2u6VWu5r1iSc7A2vKBGKJgmoz5cnCpNGtBM6zRfVnk4bbY9D4d",
  "key22": "5v5wMXzzf5Vj59FKNt5UiCVKcUdf4JcSycc3WPrtZa8cqYwQQLJi9QZMigLBTSTErgWqVrvBb3oZiz2CrVdRMPpD",
  "key23": "2J2WJsuhtoVfHgF2csitKAUFN3pAttjtPqNvieSB2wK9A6opuQmt4MZ3j6M1oM9dQ4WRt1gtGMpCc8QULrNdwgv6",
  "key24": "2DoR6dRD5U2QtsCTDY73ZVoJrq1KsemsakN81EcekKHjNQCo5Z1BjHSYgaHcAgznSd8sNfhp4y2wx9EFCvnQfhUG",
  "key25": "FvNnfyvFVznDU9g2RL9BsnkdtuPDgsxuV4yPZyeYF66Xh9eU1MJpJPuZJYmW2hAxWZ67cYpF4W9qTK4PGzHo5EV",
  "key26": "4KttBHGpvd9x29umdWHiAwZsWrbZNc5okKWcQHAWig8opwhsj73xSPseVXbp6ePjjGpucQHUiFq5yZwqw37NmKZQ",
  "key27": "5GgpzfWEBJZi18owP1RvNzzDhxsJMeLd8C6xg7W5rQP87eE2z4Ps3YNqRoPBbfRaUM8UL9Bpmyb8idPM1txP1fwx",
  "key28": "4Pgy69kgRiGEYTGF4iyyVPfyXETkTEu8KVwY8KxfKBJQfFaQTxcdeeH3Sdg892ygVcrkeyiNGFyNrpJrf1PhCaSU",
  "key29": "2dLLZsH1thRywBeTGby6Zz4UUmyUgXZNZ4CBWAVUFtJKz3b5TSD9Kt3pTU9MvXZbkj2J9xF6Z5SxxkXzihkMNWxS",
  "key30": "4PJBCtJyjbcuR4ncZZdxMTVH3B8tJDCmYKmXqi6UAAbkAGrMvRFv4eZeFDoZ3H1hs5J6yejGoJauHhaygB3bQddz",
  "key31": "5Fuw7A96FcZbsgpjYChFRvV4mAg5CR6WzHZDNdrT3JVXk8WpT1cDrN1o271yJ3ovN6EtkwbH2VRYuBSdYYGUevrg",
  "key32": "XtgF1RvEmQWLMGCx3wWucNsmVg5Xujwe3y7d69fR8njRbALCYc299p3qFEw4Jr6wQgfYa3TAzHNJA4Z2B8ErLkY",
  "key33": "3US75YqGD6yj4BpSMXx5UL8Rqtxo2EJme87QThrqyBYKUQyK5JfMcqDeAS1iMFxHeWgkaLGukVWXoB6FjjFY5DL5",
  "key34": "2hMCbAkAnJbAkHgfvYSYaxHTG5iQUFX4VrnyJVa2uyvKKkaKpbQ3QG2gPFQZRo2hYjgKxGiVLbUmyTGWzhmKiiBU",
  "key35": "5J3K2ehYA1MJJcHqgqBNtf5dsc2hr9xy8LGZQAuc4h5Pxg1qoJtdG78jtZXrktkrtMtLHkx1gdYLnUjVW8g4dFBJ",
  "key36": "4pqHrpMs7gVV13s4PmtDyMYcxjeq8CjJgJsV7jMCvgEh5NF4RoMPzh6JMmUDDor5qHgp9J8V4PrUhFwYyiJqydF8",
  "key37": "5GPR9PUincQGWEJbGGi1YLyWzboCjpzuFe7hg9Yj82vQxZ7sswyyvCJKZZLKPcmB7omZtH6MvFPrqhZBLMjqXmih",
  "key38": "3grRDxpjKavG2K3UH9szwh5usugbAAR3HQ5wzB4mABcuFZdbKYYwzkxPNt1Dn79sphpVaAo6xCbSbYcdLnAg1rAF",
  "key39": "4DVYiMB24ZJi6KgqWsBgjSh6RSxiRkaRGFWZy16DQwWD7bxR2yiGuMXQTsQjdKzgw4TsmRc6uczgU3RHHoopa1qR",
  "key40": "2kp6jJhShJBnvCpZsg3Gr217YUbP8cfDjB6zDVf5JLjY1d1SmRgqffzMoB9BjBefRFjDirgJTgNK15Akk3mvhB7Q",
  "key41": "61Kjipj1JKcTaaGUfJQn9151GE9zNjqx9emzWHKvv98wBuWsoLemzEvz9q68B6MmkF2QSanMM95hSvqFG4r3WCa6"
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

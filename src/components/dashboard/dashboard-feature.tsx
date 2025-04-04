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
    "5CYow3yc93y8b8xhzGMB3fSG7aC1X9fRgW8xUowXaabXZLDT3PW3sLDnqZqZoXkwG1toauXcqkk8VcsixiUVyCfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36vzSXijNpSYJ8c1fTnwfxfffKHpcEpQmukocn6zteNwn4mn4adwmjKbA1FEfY9wuuDV2vACNd6W5Ei73SJhHPUK",
  "key1": "3ubW5MYg74vZNK79bfXiMVd1DtqoD4MdPowQVTrrWecaamA47t7kNLvB9Mvwv3qPDCmKazFqfGPGBf3zF6tyec41",
  "key2": "4JYii5jzoogJmrPfj52jau5foDnqALUyzpxUSCKcry6tEX2iYSrGkprEK6iL3KGkRmBrzCLpF9ixHVYuH9uB8q6R",
  "key3": "Vtozrr77N7hyULPYK5paF5jSk3zGUvezTyddv6ZiD2YdKwXmKHxCv8Rt27PHEGbYECToJqX33YmUzY64sLwjoEk",
  "key4": "vjTJSceLQ9cT7TSy7LC6EtPMnMc4gBoDUbAZG3qxgN6EbWJLvQffsbDLmApuHY7Qrw2Ff8UZXeofe6n6av4Na7Y",
  "key5": "P2BRZRi4bYdJZRZMK4md4fzxPQedWHp8BvSHAUbMvPCBuS7Wkvf297VmZePo39PHqV1o6ZUCFBzL3Sanq6hxP3f",
  "key6": "44D5a2Zvrym7wkf6xcCG2XshU63JiTPPDRSRc7rPErM6LW65CXARwEx4nnRw9qngfroxGuEgpxjs6aGh5ztfaqkQ",
  "key7": "35a3inhXSaVmrpBuwobhtbHx2eDrWQfFT7M5wjjMbqMhNDtQ5by1zh4wskV2aXaLYdjJhAmw7JGMRAQdqBMx7neQ",
  "key8": "m4rKEsfJkQTAoYRYJ2xPUnhGM4XfiE6YGFjEfcdFAQvs93x5sQcArnDhcyDXKhbKFpg62q5q7kosfSH1SP2SwLr",
  "key9": "5WWamqS1SkaJNMcm7S4Xs6PNEvrJB5uLNHPMYSPFRBfVxgCYUgbe1U7mYei59KPbkKxmXoBzdowBLnoUspWmV3QE",
  "key10": "3uNHvWtmD2MW5cAb78nKujK49Aq5WcKVV8Vxyqhwk2DjDiDpou8rN99XguXEgX7PgV67yYSjBurk1vEasoSLt5n2",
  "key11": "5DK6NQhjxTPWNUeM4E2WHpiE3U8ey8ybhmLj72vE2zQwhmaXEpdvUsSmRZJhrZoshbtE8yxB2mvn6BG6zWkJTwVS",
  "key12": "4KtAFncKgsws41dnK7v8tBgNgT5xnih6X1A2ANgLYM4tPfdXYCaMxiDfdvWhvJ7R29GBvW2xjbYyUnjAkxvdqpA8",
  "key13": "2LsL6vCkn3YqtfrUrQtcYCCSevF5MEjxpWGjZTyqodtB5vut53mi8hCmA1oPp5t6j6hmyarwyf1etbu6Z1hJFGhi",
  "key14": "3HfDThvQyins27oXeU4ztJh1N1tXdwgVcECPFjui3RaaBHcuV4MejUdBzFsDbtzBTLW1z3qK7YLBsVDQ7tDTikHR",
  "key15": "58JgYSSi8kzz9Eta5ZEpUanstNTVyPRoBvirMF8rRRehMyznnxgYhDthYPV6D6XmkQ37oQKb2Qz5HZHJdYMSpiMk",
  "key16": "svcVgiWmFYx9EoSHWr4WDotDk3vCbbRcb8vYDiB1LLascVXUT2sLqCJ4zPFfyM6YNt3jYsE54F8dWakhw5WvcnW",
  "key17": "2RTgctX4E5WQMkQuncafpQ7KMig8vtwFoufpySaC6Dw1mkawxxiCGPx7Z2LetPr4NkwgjqV5Ady7MNpqydKFSiQh",
  "key18": "5Pw6NPuYMJ5ThXNtucziK44ZX7uitLWz84ZW6oXaaVVo8GFG4zfSw45kjGkZRgFnj87Ef6LPD2aQq2TnWoMKTLxt",
  "key19": "3tyqcoPJ3g3s9d1NNbESqWBekVakYSH5VDgVRvFWxnpdMEu9aLZXxSYZpr8h7fQmyDUD6p9sht8cmkvhEic8z7ps",
  "key20": "rYhNksqTdgn5nVrXhp2aFVwW233833DaaBvwqfgUikqFdg1qH8sqqp3UJFVAkV8eqhZupjzk1W2Lk2QswhYi8sU",
  "key21": "3rBSEAM6vD2oigr12CEDN7EzTLrk2RTtqzfUKPFWkzCdFoGeuQYtWyfq3jHT3QnkaoXjB9WY9vrAcBMVxt8qDtiJ",
  "key22": "2BR5hQC6BEsvdAoLxzzKdrmwTnGMHmYpJrU5TwXSH4G3PbpA68wBLRnEixWeMTZ9LSibgcpGibTt9GbS6mgTvbk9",
  "key23": "2Yjp4W9ofWdU2E86ioz6gPqXAqHTwyUp9SAaP8ecELWy8SdGgfBPs9A862uKHU4pJ7xv9RLEYSpeY1DSMbtJN9eF",
  "key24": "5uThAwcci4nYhDr5twK8M6ofSDG3o4oqATw6ZfUF8sdbLBD6upRu8n3WLDcV6nb8RWZaLpzvDReZjXKxHybi4Vx4",
  "key25": "2N862wqkAQ96RioGm75b4RNLzmGPM9i4nmq6Emmc2Y1rKSqb68XY6VbAqjyZosm9rMYYbr6suxnCSzEAGY1oQNGT",
  "key26": "486mi94fzKQULc22doBTVa2Ym9dRYcxtJrgTskz5EWVrKj5cKh9sjwgQBYwUsn9Kekuec4FmVGL23zfMpVpQwNQn",
  "key27": "4NS5KCxJCRnp8DQajP8sAr2Gk7944Wzthq2n8YbTb4A16xd9VuurRmFzwUzsT14McCKQnWdBmCN3mYfoSdq7RAoZ",
  "key28": "jsGpNJzGDvmgpbnxXAFLTHzAvuLNW1TSF76p4tYBKrNRcgQXpC9CHmQaFdP6WV4io22v4bHfgqiCMgCSZXDz8f9",
  "key29": "5dTuGGRXbSd6rgiZNiHSv8sKzLg2cn6t79zdqnTNZuWwNgTwbPysajzKGb5yTvL1phcgVQNzHMCxAuGQd2j4EjF1",
  "key30": "2Gu9GhUbcCFSLbDBPPVGjw1jqWnoNXbwBMgvuqQ6Qh4PxPbn7D6cxtkzfdZ5FNYhmZZqgZb8vrgnfjHJYmibkFnD",
  "key31": "mDUzKp2mrnghHa94w9jHcvFnqdeKcwQEJPAZwm21dLFzsqoEwYHME2cmwtuhxfhjv5EX9mUr4NnU7K11Vybwg4S",
  "key32": "24fKUQzjQ7j5muBDtVfvXYFij2BSt523Tk3APEH84MJThtr8KuiUS26UHQXhyXrzvirtHNBL7KJPf6ypjL9dtdvj",
  "key33": "4jW9XJuKfMCSSjuZwmTUsiz2RNPVvQHmBnM7rDYuehfxZxNJjrX85mx15z5UA85RMD6vWozZz9DEo9J3Eh7A7H1w",
  "key34": "4Ms5FtAR1FPVhp6ZsiKZBBfbwVymaDuMw2cfq3EzcbqmUnzVcL9AL51ZUX2yAmy8fMEvaPyQiVh6zjxSh6ypFRBE",
  "key35": "3pVDGumq57WTzj3WnvQz9ZS3e12JduXC4aVo6AFYgt71oiK5yjNV8BAemwdmULXZJwVdk4J3mfpQRQQpJnApq4nS",
  "key36": "4ztj7LKU2D1ArX8ysiXyzfrL6RU6TF89pqyJL566FuqSAUi3vNp5D1bqWapVbQs2BWZ9mE429bz3aAf6UFsM7HGX"
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

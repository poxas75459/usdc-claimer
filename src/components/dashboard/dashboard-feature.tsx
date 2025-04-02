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
    "5qgQwrxhCz4yT9fmaYqDRQK3v7DoMqHaG3PereSzpVui2K99NGHsEFn6byspz5riPJmdnsvbasRLeC6thbovLLEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bZeQL154JUkbT6VHCjW2qox5R8ZB25NDCBQJtaoyQYHK13hvPbcVdVfwJYXDaboPAtya4FTK9VWtaDwd1X17o9h",
  "key1": "5fmKKvrjrsa3a6S5C9MT23JW9YBZnrEG8zo49nZXwkL5PkX1wrRv7bVukSSpym9fEemKYrgZs7xD3gDXQAdtRWWU",
  "key2": "5DSBkW7yRwivZq2Y6hQXuyPoJUSezC9Kh4eoka5DosatDfwTocdyXnK3Vq1D7HuFxVLJ6VwFp7DS8SNxDHkgZttK",
  "key3": "4y1RykqEyN4xoU4tUxaMmEV9DBczifctPHitrfcN2amotEbvfptUzapnJQtJu1K5hoCzY9YWErXkmuKxSpgrxLuN",
  "key4": "5gPKxeLNW2VoJ9o7ETwJzFxTJr86oLWq9zvxRzy9VcUxfVsUG2AeQctapUEomFgaFRs47KSBKjBx1AeuDjzaYTDG",
  "key5": "p6zVctjgWdJAjfyAHW3zNWQh1mXQVa7AKYZhxe8iH83VuVnDjSARsdGXVwpZ7tk4EFpCZUq1tFAhutJuzh8gFaH",
  "key6": "5eKvSzndvpeVR5BFv89TLf5KpSmjW2H9HpQ1ay7F7PuxXPBKxX5puocbdAiv2tKGZkojZ3D41mKUAsqGm4KbKJyS",
  "key7": "2HKGP4WYtxMxGMmyTED1H3qgu2Gaty3vGE41N8yPfWNr4fnfLbWkxbzduTiKtDx3UzkY8N93gPfPPkTb8bS6cCwR",
  "key8": "4B4xKVRWa1cDGYbkaDENXdXzY8WAWXgWzRViHx5PxDjCnkkGqXnVs35sP26f8zcbpugXH61dsAJfKCH1VtzGFszM",
  "key9": "5qnvLh2GvdtSdpiVZwudofXrytBWpUXgpxSVHr5UwUBbXGnnXqYWtECWLFUb6ea97mCDoaLxhB3gdFc5d8LQL7PH",
  "key10": "5sNJXaWU5QPwtMRBYYcVSJTvz2eXJm6csW1SALWspR1upFKFWULqKcnEKwYDEbCeHHYfqntvMfGP7FbDJ27THeFT",
  "key11": "3jHWHEMXw63K3bMGn6vj5eELpsTohi6j8bk1dmtDHhtk11o2YvgLXZMP3BqNmN7RTVzPsB5X1hMrwKXq3V1c3fov",
  "key12": "4VCFqRWuseptjCPw2J4g6GqvUGLuq4hrJUbn24zBHihtv3g33pQ6rJT8TDF7Mt1Ehkm9svNLn1MKLVma8PzjmvCP",
  "key13": "f6GFXoEsRdVVk8Ka2wnJSVVrQtosz8g8RYvP9gN8LftRD5X3cnM7XNHXV8vYF7u7W7QZ3B3bqFU4ir83Q8kQwe2",
  "key14": "3GdDQEes7NQdo7VdcgKkD5wfusm2cqLuGUPao1fgeAexVE5rdxabe4haKJLQZvjbr8vguBnfuEeJJtEFn9McjU8V",
  "key15": "5bpxD1wtuXTDrvDVjS4KqRBcXEhbgtRmnQ7YnMDkjwghr1jNuTeU7FGYXjHPyZaL5yzaaEeuDYpcZvsuxPxkkRmc",
  "key16": "3squaM7K82KA3KpZNfkSum2yXtgW28jBYVsWqh2JmGBqUtEqzeawXrTAUQ7mw2LYP5dnhqSdFQiZvyh6RqvkXCVh",
  "key17": "3qFfAw8uaQVmuLEU5sstKDsuHReVDyt7YWrFtuYiaKT8CLUoatQonJoAsYuBM3GCz2A3CM7q7dAPJ8CavsZMWFX7",
  "key18": "gNB4thLhWEzfpF7rmNtDw1AkM5Wqq4Bv69SsaKuYHmh1HGEbdSQNRcAKaFVNiSQRB8exZ6VMAunudtCJnNq7yLw",
  "key19": "5scptJ3i19T6dUVKxrtkEKDAAiq5ks1AP9aTHQbg2xXkZ4zaPd2H7W84KS9W72S6hpr38eNQGgy8bn65V8fWSHLL",
  "key20": "2QQ8Lbk8ggMPteJD7b8cRnNHf7VKujpKNbCDG4ujF5W64RLKGU4pgY27tQw5fvhj98bgB7AjKceZgDBKZL96QrdE",
  "key21": "4VhnHaHxVwJvY9fnm1pDjJmjP3GTrAKoeDvngY16WueBN5J96vgfg4vxk3SeK6reMjjXJwkkMwAcKpPfKVVWEsMk",
  "key22": "4tGuKrmokCwmkxK1FgmJa7HTN3dfaHeR2Rf1MEJywEwuzg6fzGiGm1sRRDV4sdLoPxjzfCQHMKLeM1KMfBiYog4o",
  "key23": "61emdJgjc7Q1vdErUNgnnBx4ps5zyzuVtsrYJ5vCDfnkERwuAdxirF3VQNV7k1nTJozGuqXRMkaWJcKpET7fdLZz",
  "key24": "4GV3HikjJnJJpRDmxeRqJMhEPos4kfY8wzz3c6ViRLGjyFQ7d8NNfrDxA5bq2hNMQWnGaisAKfdQR1JqQLTtnm3K",
  "key25": "2Q1CFYJBQPUyFLDzBGWezEoFs97z3pt6Z1skXbVdxHdAVcdowXXpbxUbU66EvNZQjddHKXgzqLK5uswb3BFEVAXR",
  "key26": "oRM3QAHVMUR98z6HxW7v8cv5HfkqpTNCTs23LDBp18MotangLtgE5vGnVNQUiWyzcURCiyTnYnnDJ21roWEagnL",
  "key27": "46dbeQ9Jss18dfXtYkj6bhkEygM6zq8pRCgyRTwaTBbC3dXNymga9wZhEwSyZG8PAhhgjkFNHAMgM8RL6SUoygQA",
  "key28": "2ueN8uS2p5anN8mTuYq8ern3hTCgoEtx1rPRx17RGCM46eS9QEaKHVNpPKfV1kiGPkEpCTpXyPYwz9UTMQhHYzKA",
  "key29": "3dwmPuVqmG64wGcUbtjwKH1E2sJ91PY4J12ehCS5V64EbPyFyqMSQPAcok2jsHjLV77Fc9EvC2jugF8ggm2RgSPm",
  "key30": "5TKWAaxVaPAH9SDdXn3UB6pyvmGVRbo8yKqD4jPkhwaFPC2bC2zRSXtpqFWSDbzJXPK7hCG3mBUs8RzwWeeXfaUC",
  "key31": "2SM8ND3sTMukAY4jMYQLYY8wDnypKLfZUaWNS8aNkGwcEgbhgp7AQqo7oVM8KusBSVngCYv7ZxArV7WfH43aL8js",
  "key32": "3LpVbFRcVQRDsoE1AwHvCJNikfWMFe7f1bRymR9yRnEFSoWeyvoSZ3zonScgQy7SXbtk1taf2mGoM5PJZ9QVoPVx",
  "key33": "5W1eknCaQaPKjbxuyGZUDQmsKUAgY6gRPJ7nfKKPxEgKekScogTEdecuM3ckWkNkVMQA4X6g3RPTh2p1CUUPpVGY",
  "key34": "5DcZMo75ooNPQAbKJPUgkb1o7GReUuxn49VZKHYeM2V8nNqfYRNFSuXSj8fmQzeFWpL33zURrmcc46Tb5jN1XR2T",
  "key35": "3165N9uz9WxGH3yA2MUDvC4UcgWUawPP1stpmkJKk76reDkPrYxuyatCC3o5rTknDhxHds4vSgrpp7oRew1gUmZZ",
  "key36": "3kJizhijkPyEx2HAowSDVEQaTwXjkPNcqCxT8KT9FfzMkx1zz13m7VTPeP5zs7t13P49dmqVbTYzAJYjxwEdjoMS",
  "key37": "4BJkGsbH1gWs4fkmpiVkaQHQx7jJqsendgW7wBH6xCJbQ11hjpmGceXT3Sw5AjKy1P8XauKUEdgvuRzmSsTbkzJC",
  "key38": "2FMd71x5wKVETk3EUCZMfUPDzww8piU6d6CbzzFadPyMkEoyiGHhRgMPeuMt1QdiQjUCYEKUUBVfh62bM7gv3zt2",
  "key39": "wB1VbsHr4oFDuyLe7VoEtQpK4eHj3GEr86dnjWqiHPmMe26fDSijPwmfD1NyHZsh65LLHtwrpXyBmst1gSyGMG3",
  "key40": "RL1yzKnEKAXYYZRy9r3bn1t3x4s9huByu22QW6SbiVA3BUNKaDumsGNM289pec1RChuu7cf89v8HVXhvAGDDrJD",
  "key41": "1gMNh4fG2gKd4Gaci2v1JDHUcCNC3BUUHHc1Aw6qm36HTBE7xQsQiCmnEM7k7t6xZe5yoqQx3TFfNTqHqxPU5gH",
  "key42": "32thLke1CszjWe7CFfwuJnQ1gWQio89tE5sforPRQd9UfpZ8HojVkQ2f2gg9kaBu9xChxyChAWCtkCSZDbcbYisV",
  "key43": "5RhsrGpm65HuMAqybbjRiStDmPnTsDBxPcuF1mLjTFxcCwBcAScycLSu968bQzDZmT8jT4m79CyScjn6chibLhJ5"
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

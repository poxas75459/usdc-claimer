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
    "2w3CDuNX8J5UMPGyHLwHk2M9BC2FRkzQ8fAx1LdPqrTw1rK6vwwPxPdz8F6pDht7EYQNSTfUF1XDpfYvuoKFRB1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNmTBHbm4qimong9NbEQTAZfmJXvndqhyAVtSXJEquYYjNnkLnT1SpBvtKK78oYrtjtZE8PHUQGe9fLPpFrrbVv",
  "key1": "58pmsi2W8547EgDgGuD2vnALrHw4ncZwDHm1DXRfr8vPZHYvFjjLFykA6A59kjfo38BZBXK48XNu8kH9cAnBX2Hw",
  "key2": "3oXajkA8mYVGYXv6t19bQ3r3R32Ms94Nhdkhp6wSKiboxBU3WJ7hYq1jXLEcidpvnYHp6BrwttQodrPTgFCkesWT",
  "key3": "2GxB4BBErfVcmtKZuaXZ55ejYBysnDsMi5LRDxGhAZoKYHJa1UBHW2tCJ3ZSv9PJybpuvGYgJLnGDGa3rr3wYKqe",
  "key4": "3mPdkBBpLn1gGWVeNAYkf2gsaRYeXdhdHeSMtHvZvbpK26twbB8ojPaYHy4PoHPUkRnQ56JeyKRPcedaYaAWKgPu",
  "key5": "4Knso2fYpQBkJBJ7NBoS5x1fXh2UhRWAiGkAPjqqExEBZzZAU2A3st6195M4PWu6XmgL1YabUafDJQBfvhfwSrEU",
  "key6": "4v2Brv6kE35NA6siSdH4Hnw2s8D53tKjt9e2hpF67xm6RD55UWeSGBsLPzJNCZ8XAZzg2r7wNPwxqaPvRTW2Lx29",
  "key7": "Y9jFMKjDCbToYFzGrDJ5FdKJhneigDbA2v4rqRXgbk9YuWnXyHTmuVHUiAE8DgGXPP3uPewswch7CTpPu5cCF6c",
  "key8": "wjYAnCvpaS1nwAsxDEeF9ApbhMUdKrtR4X1gxJPhf1RRG7u3qXQAdjBdLQvsaLzCh9bHuENAJSN3ahYwP6fgPyH",
  "key9": "5pYo3QaNBv3L3THdES5M8T7e5h5W1S8MoYMWa2ZZEey53NUx2Wf56R1PX4erywqFya6ZCkY1S6X56cBXrkxvpjAY",
  "key10": "5nemUhrAW6ff5svK44jFpFUk58AHrGWWGbptsJVprekbiLi3vCMpXGZqZdDRfE7YrQtXTxDfTR8yj2ZSSTj1EMPN",
  "key11": "2pt5ms6LUm8P8L2NEN96orAxewU4dQ5FcWVLEQ432FQVz3RGx8WXvNuvUZ18A6FrqpLbYBrJoLNRtPCuUBGBrXgk",
  "key12": "3BqSP5MjhSJCLN7iWu5tjkFf8eBhdf4obdtmWiMzVHkZCLGPqXJ3F1DyjvyHBsVJF3sP16CCJJBhK1ncndYeh6G6",
  "key13": "5bkEzkBYwd868MtvqTcsEJLdnd5wLdVmYXNtnb5nmtAFPKNKTGZehQPsoTrndWNc8Uxhp14Q3uxdozdB2pHd5YaG",
  "key14": "5saZBBoA9mt6FQgu4gm6ATtUdXpavsxXpALmWUnxbGMLt9cU9sS84XBB49baMWRkKhdyJYKLw5Yhc3PKqmtPcVgE",
  "key15": "3BDVme2LaeGR4vmA2sFqdccrYc3HJAtGPdnjCqA9QN4xiZgYHzLgnpDcQE86eoFFtLwhzyoRRDUntnQ7fV5VusP7",
  "key16": "4hZC8uZSZ45gEkVzbVwtqwdY5N9fDC45fxvuwQ2461NkecWoFSyiP18u7Cm2C7fnyDT474N3qJasXpr3LQasVSMR",
  "key17": "3HMyfhuvk2VBDeBGzRGHqwSQXCHNWTxarjDFrFLVa5xH5wywWiTHkWX2cnmyLgjK9pyFrGS99gxAuyybh1PngfFf",
  "key18": "5CsQ48GUefjbVvYL8T5RDuYdCAZVs5Fn7XDWoUZdJkbjGY9byNKdCCwQfg7njA5NgaedPKVoPtQHwGhPLTih4CZQ",
  "key19": "4JuzWruGw92mBs6jjWXV26Ubv9sx9tS1tNuL1pZnq1J8dCy9FUgQUpLewcvgwEPMKzM734Uo3E5mak3gNk38AhQ2",
  "key20": "4rgX7vBHUUNGF2WA4iKV3UALQqM1C13TinpTUrBjFZEjSRbcQm7pybdVVBhczxxRwSjMB2Zciy5xxP9yJAScmwkM",
  "key21": "2eVQ9931o5zt3drf9jZhTYDbZreP4TtSps3Zk3pVe4a1ym4ohyW68gnspbWe6vZpeMXH2HpKdkz9Cc1BHVKDrWdZ",
  "key22": "4xdMdwQeev6LEv8bh9zcaXtVDkLSwa38kBK7hACwLzV22rYfzi5P5bu1escLBL3EV8ejcybo6RSvjz7YVZmeC9V1",
  "key23": "4wf1d4YEMqd6wAv4cpGSVvbNfZkUh7wiAj75cx1s8tqaaZVHx2ALtN31jN84Dm6fG65bPaoeux1iUZGwj4Sjf9ga",
  "key24": "2CjyS4L9get22SKHHQgix5KxFrSmopmVU5WVVBjAZGCevBuzRceZhkD4st9NYeGyFEvt6KsjtvtAbP6aoVQ81wuh",
  "key25": "4QpLvjGdWVMrUEeS5ymU7FoJG7PZTxdKLjAvMxWurNNzLKGR1R9yTyYX5wCx1z8Mog4Ps6mnEESpg74dAb6uKC3D",
  "key26": "5hzfHwbNutxFdprPtZm83xkQJqbuBH1PfR2jVQTFEPaLL6XsAovkYTcDpGggLuV4o9BW4tdcE7S9CHHqDcEERJeZ",
  "key27": "5vpEfqAPB26QbKooxrQSWCrwkJvHToPJ15M4F7fA2R73HUjBJFZkkaTFEwJNN8ra7XrxpZGMvFFiXf1funMvGKRS",
  "key28": "4z2F5NE5kN8vZfvXaUSFXnBYwVLe9BhYSVTgkmKMZEeBJnkYYLasDtV6X1mRFLYg3ozGwmpyA1vrkVJHdSAJbpdu",
  "key29": "37cwhECQZtNa4kwvo1ebReVXuzn2PYEhne1gZuueymNDpohqnkJt7U6Bt8CAoWtVa9NeyFevCmuh45qcfLj82Mjv",
  "key30": "5DMgWzCJeTrBv1nBuo8scNYt22UoWcRQNzbj8Y6uhV1Kwpvhnh63Dvia21uJaydYgWQtBNoZvw6z54eZ3n7NXB4K",
  "key31": "4AZRmjkUnboE9bwj2vZQ6NF69d5kBpLQwigvqAnsduavqW8SCbdz9G7EysmK8HuErFjBUtS3maWYgnMS6RfBD1G5",
  "key32": "5TpBpi837SerFdhwDzWzdoATP6RQUFZLxHtNftPxtnxkXSG9nsEZXsZYFCh1JJjnLBAAGCMETVUcX56LvXXoain8",
  "key33": "2hkgVyEeoRkAQU2em4yWGqfNWwhxhdAR2o38wiAvxrxLhgpXkG6uhYScrRt7Eh5hc4v225hk7vSyvgcTGGFCuGPs"
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

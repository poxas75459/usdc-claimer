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
    "35mX1Kfq8zdnW9yrQMRc7cbDUyGx7fPstCWybJcSYembh9dFJYi5oihG2h9TG9JMjxH1jfN8uqooNzqPtWxr24Ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JWRqTeY14aKKHEFmGA9mk7n6cL44zp644jDijWfg2tHg1yYEwzFE1PzWN5fQpT2EovmQjV47mXXPJCFSYdazjTa",
  "key1": "44CoreKq6DmD4733JeKNuujTGVV9qw7dFLdubp5KuuhLpY45yJA5fSYey4V1yYQu2ejkaCWaGZ8SoKQwZ1ahQbAA",
  "key2": "61xLygVs7ATBTAz3BMvxKEL8kTTiWEbVvWp6mkHGFis2EdSsM5D4dDnpGLU5Uip6f2a4JWBtF8d8tCgSd228g3eT",
  "key3": "RAMGBCbzNc5dTJyFKekCAphEuT1M8G8bQjzuBJ2PfqHNo4zhhR3hvhW8dLsEXcd4wsUyY1P57WwyXAfDEWrz3NT",
  "key4": "58hUA28DQoxMSzLHzhnz4yG3SYEBjp3JyucBG8RvwSMpuaMcJPZdATJzQ3SbzruDHbLsJvUg5Poyff9mPVnLvhZw",
  "key5": "27YtFxuJq2NqiTgdipATZKp7GBv4VL1jc5YbGnn3Wvp4rdPH15CzkQi15WTUN3asmd5YBLN9t482J92psJy78ogY",
  "key6": "5rpDzmdwUZYAd3GiJK7mE8TXsf8RjDC667n5u46MzLnQQxCmAH6A4taVwNfUKG6QGyY6higqhxAYqydPcDHmjp2b",
  "key7": "3gDytfc9B2tuFzqwFoRE4D3LCs3c8XQQq9tdC73ZZK1jHUNo8UPYWL4zhEG2EABf3PFSegYv3jQ7uFxmtAYawDir",
  "key8": "VbzkkGGvAsFDmnPwC3MwmAJuQVNnQyesqASHmUmiEDNRePexsBbgpkDiybzgw1X2z4aVCqF1LVD5Cw5xp3a4525",
  "key9": "dvzJrp5nxmvSsdAthmmcsXR6rBBXnzTPCmhKmn2sX9h9hXJaFN834GuHSDmLQGBLmG7QRyP8NhhJ1v5rzySHQxb",
  "key10": "3ESGB91brMGgJK1GivkZrKNyT9YfQmnkMKi2ovDK2s5PBnrm6J5uxf1yxr5svTMKbgWBid2iu5rWrUUwVHxjAGqA",
  "key11": "5eeUjXkzdhfBTcZj5zgWxchWV8NT2UGmaCAz7JFcEMeJuixgEGSFpD5wSzH6aSNpBpYetNWfxdHiTq7wUDgcXTaH",
  "key12": "3nQPk8Ag1pAU9ziCaXmEye79KLCGfH6RR65jnGUhEaN6y4qtUiGZ3ndDDj9HZzramkjZvxLTH5tBKkSLpzqnAu14",
  "key13": "3MaEZ1zCZUiusrKzJY7Sb3gzoYh9tsmEwgNkjYdgiLajTS6c25twXpLQPZWnvV2AemSNdXwr6RGcBBoXKb598qnW",
  "key14": "5hg7RGEoWypTiyntMbDzdJu8zW7nAL5nFTRFCYvEh2k6c65qDf1H9nncDoJjyzAskscRr559W38r3q9SdKkMZ4CC",
  "key15": "5GpuZnpn6nCdgtea6YXi6Le5VPY3Daryw1K7qdahRMdjkNSf6FGXxJhRc7T5VFVUTcqaYApUQdnq1deKpUFcdz9C",
  "key16": "27WLWQSg5wfYwFBeLc62VLMxxU2tWDAhixtbrxjVPssAyCW2vupwqVBqm9VaSpWY9fvqYPF6Xiu2evETcQUkaazi",
  "key17": "UygGLQd76koPysENEGHnHagy7z7LBRG4W49LHmKXK3sPQNYP8bHRgDA97f3jdnhkebSGc7EG2NNuc1UYgxyYSfW",
  "key18": "w75wwc7JLWrwXcRAGsyLLTFvCr1qsQURGxkNM8Nr1xQcWvmxaTuwi4FbqeFz5VUNNmxEzwZFeWo83eY5B6NAXHu",
  "key19": "3P6hfWthW27g4v1yBRay8ukFfg6fRTPyb63aKcNfC3nac9WM6QKnrZuJM3bhQEA4jGYXWeHP1zZqH229Q3DoUa1s",
  "key20": "4BQA5UbsTXBfSGW7EH4GNLDJ6bRgBpz6CYoanRzQtpEL5oyFqXod3B8kG5bCFXhBoSwvd9LCeHeyFkayGbcwAe1S",
  "key21": "zqVbrGKPknv8BygRoov44gS5zF2wEk21o86tWdivSKpqnAt42NK2ac27hhxN3nFximTk2LMY2Bi7Dx4Ym4y9P3Y",
  "key22": "3XhAHPNZ8oXgeS7pr4Sw6iUfL548SV3PAnvcRLjg5kMDCKczwpe2tgAgWRAKNMxKYEKgrWAgxKHMdUJBXkkD4MRy",
  "key23": "3XicCn38r5jV2Tnx3pEmXiWkbS4ApNGtcYjxS1r8rcyQSFK83H5USUGDNTEZeLSUpqu5utWp7j9a4eYrGk3G3cH9",
  "key24": "4uioCVWc46GJWq2qQFvFyJG8L9FQYj7LCVyf5JUWUPs3MMLuRHKMkNk4VkADBz7Q9UZWcr6SRx7WvsBTamS8HmnZ",
  "key25": "PK5KuBbVLsRMWzz79zDXreD8hxHuPE6Hk3NFrvkCM7iQgzcJh7FR8sLsZBYixnMDNmGkX2i14P6uDaFi3o4eA8Y",
  "key26": "r392Ec92MHxGoCU726yVh5krEZ6T1uA6ynnpLaWptE6N8ETd1M54hPfHeVTSJzY1LkZrmWMxMAKfmfTZEZ9F8n3",
  "key27": "3YztngycuQsAneLocaxtkg2DL8HPwHvpihPYgK1mazxRK2X3GGCsNhcTUuow269PqLDrcf9JLU1KmgtGihFrgt2f",
  "key28": "jC8cYFNKUN1nGvmu2SHTaKUDMrk4B8opJ8w1NZZ4WkMgHRxoLkLtB3isezKEgHxsiFvouNNWuf2Sww3JyPHzCBe",
  "key29": "4UmiQCBTLJMhNfdPstjFayQbtKzAGqCX4rGUsBS6t8e1NFwqZTT6Uz3Lo7HAtQodEWyMvWi2dvFKTjgWxjoD2zga",
  "key30": "3UdCk8T2EE7chVjVNVs5iCPUknAPkqQrXCzSx7R5vZX52sBLJEHVeAgNATSnvo9R4A1s3uaAnsJdM1jaSXeWHYfj",
  "key31": "3GfNdXKmheoGgfHDt8auWNK6Rsf95rjpsHXLgLAzhj9mPm75KHjjggKFLex9nQbYZbJ9NpF2Qzu29q829SUjcNud",
  "key32": "4abuxG4aBD2Aba2JCXF57QsvoeD1dtxRFR2s7KgeKZCLB3pEDxb9KeYHdfrSTXDdLG5dyBZESXvetcJfkMnmRFCV",
  "key33": "4VxhSbehLVCnshNXjdTNgivnYSC3tvhaFMdLuGN4mpDokzY6RacoxFVjpYy77mAoW3DJUtg8CMRsnoGfP3HWkJTr"
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

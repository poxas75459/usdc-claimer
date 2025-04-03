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
    "4Wju8Lrvh8yRERWKdhtTnupCS6qcrZx5o4N2VmdCcL27w7VsZdrbe9qcevuTCoCMVVanLtq3kNNSTHM1aec2UQVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45QSruK76M7rAsE7knCFoxbTe9QGMgsJ8UpquDE9zW7oY1vFmpfsgbYQvoEwTYXcA7G9zAJrim84J89GnrYRhHKU",
  "key1": "2sctqfUooaepXPWuNRtcHTxoC1KLyTRzMhwJNb44fueYcUquPec3Yu6uqXMzq4FL4j6Qv8ywx771j6MKQX9369tk",
  "key2": "57RTFEarLr9y2xm3zNGKhY2fBgcd6JyJg1m6yu4p1Yt36y3C11gyxXLThDbCu2kfFyW2o14LixYXnnLoMKfpcKV7",
  "key3": "cyoCeSVxnrhmeo6xmxKxvfBUCQT5NaWNd4a27RsftH6DPSpvegZvG6UQV1sTFtepicXYvEY1F8yg9Pw9vxcR6Vm",
  "key4": "3rCcVikeMph689zENavDiHwaidzL9aiwh1fjXvWPRArSbgFuX5yJjofUQRqVEccP94Vz48DYQEwcMWbA5Zhj6SmP",
  "key5": "3VhfDzJroX1Q3FhQkG8rFWJN5jFu6bM4G8a8rPjsRw8Poe25jtdhYLqeJ46LfV6w4xmfCDhwPJJZiBBBoYFJkxVS",
  "key6": "2nkgapXhZ6tkp72kwBiMUz93V5gDwAjD9DBBXKmCQo7V8raLLC9Sy3HwQ39DSJtboAGoNmaNgRZBJ3HsWmbnse7w",
  "key7": "2Xkf6FqLS2zP3UTb8RahsopUBGCX4iYgW6FGMGSvPE8HUN4qW82Lg22X8DQ2CckA8vdBcHtRh6vu3Y99skUawUdw",
  "key8": "idmf7awpSthYCVczfUe6QoRUCSRivtXgdnzzJznvWcMve4y1vFLCk2jaxs3nfZ39auaPjn2XN8o4h4Qc1byP8V8",
  "key9": "4KRJ7pvAci54gePCxfmRswuY3MzEuY5dWP9sCNzwawGJwwNyTeksH7SMVjPW3Z8EQ4uyJD8oc9KkBPWALm9hM7Bu",
  "key10": "MGLZYLpYCnBvNPo55HbVozVjHoi2BnJ8aWqUtvc4F52oFuYvUC4r6926YsgCTveqBLiu7mAfAurpR2oWRQ6QE7e",
  "key11": "2cucJUQnv2rPuTDV5CRsVHMyLteZXtznyfTrbSfaNtx9JQrTrbNg77YvFzqrmQVgZ8Siib9E4SAUNAoxF9mSqMAh",
  "key12": "XvtEpxB1aQkR5coit7FTX52AtKGiJh3azTTH7DQCdou5upZWyUUxq7qxjG67h4zCqgygvTH9X3FeZwc8xoRKDu2",
  "key13": "5sCaPZVqueXckGw8YxYEqZvi9zV7UX5a52WFGiAcqjG2KXMSBZfFykpBXr7DBwgJDiXKi6z84yPfPKhbeU6TzP1r",
  "key14": "4Sokf79YEqq2PmXywmUzkESW6TBJdgDAEDYA63H7o3aNELHDsdPRTFzGrF6JaoGNrvv5weYm3m1mqtu8bJyMQjw7",
  "key15": "652i1Qi16A7efkvT4N1ugpGg1hiYHJTkT89AFf83iuDeGjTaDY1rHotjx5vhakG36UXwMvx4FUGNyTCbN8HSbaS5",
  "key16": "4QBibibSWoFfQ8fTbCrbMfXb5m5t2nPuZ6EHgBGHzKP1SrhZmNyAxzXXMTzDPVKu6jBA6dDW4g2xDjvrE3pyBLh2",
  "key17": "2QbsG3pRQSXRpz87K73CX8DLMtLJGgQdupne4EfVJSE7FPpxTuF1UG9rVCKuT5QzMRhgt8bLR72TtFZ1F2nQTix3",
  "key18": "29TpYnvEMGJsHf5wa2TKSr71fdzwHtXaF4h9yG3j3pwkW9sndJjA3p1wAr446tLTb9A8VREppY7BAgk8bW5dfx1Q",
  "key19": "3jQ9WxWX995f4p3UzL38pdBqGHDAQgvPVih6pMmXD6csW5kFu6NaVGxdXadSmcsSCNxuC8gvKLx1XtnYEUKidp5o",
  "key20": "5dut6ZtiUvMrvfyttpdBobuxbgpxaaysL8qT4FiNRXXfYjGhfwwuNnc37Pc6kteXjGTYPn4w5cg31vGeW6HQVN9v",
  "key21": "2cRAPyLApCngUPhkshQyychjsyVdYANsMAzFHsEsHx2Gb9mfnCTu2mtaeYFEGZ9eJFAV7riKn5LX1eZZbv3XWZFd",
  "key22": "3LLPbzaoomSrKW9hHRxuK9DMn1dvR5dfWjK3sqEN5LBNWW6qHCpisW6XccfQdrNZC8mA4b2zFcXMzh9EodsGYJhR",
  "key23": "3UtG7azmFqkjjAvkosZvc4ezPeSHWH4s5jUNT2bgvCV1AdahFLVpSSQX5XbqKgLkcedhuBWyTNWhngDunnSARaox",
  "key24": "tDjdh5EkkS1ur7fsw8W9wSKzx3S55XLwSZ5RCQUk1yB2tPBTc4wkFckAXrJYqbkomM2anLV8JbB5imXaiiTudMs",
  "key25": "3c72KPWwz7sjF4UzYpFDxTdj7VsnV1RyK7mc5H8UPbo8wEcCCJFjerrRUkVNdCH6VkDyTxruBEQrw48foA8zA7eU",
  "key26": "3Q1gsqV6JccDmNuZ17mgejcsFKbFqk3hcAa2eyP9z6dAJD68XAkhe8C5LLwUaRCQ2o2apyednhbVYeAViGFBnNiG",
  "key27": "4u6T1AS6G1rj2JMLQ2b6rFNhH3Aos4rhm8CFVoq8GeHUKsGEE2PP46swTCWhLEkoaLNeX5eK4fqiJmLWVwS2LbuC",
  "key28": "4354Ytu4P4jkEGiweoo3Ph1jq24oZvBFpvJFdHczNjTvBZaWFRXqzZ9NtGoADXvjCJaXcWDk8g6fzZmhgcVaf9XV",
  "key29": "3i6J4jYk1cWqMifrqcdYvW56Y8ngnderfp2i3272ZhrJuGjtgeC7FozMwNXg6skud253Q2EBz2Z2N6dLFpAfLLo8",
  "key30": "5k4j21ThjhiNGfdzFWf5v98Cc14zaBSBCy3ZQh9afPKzePoDGYy4YWHzAY1XB2kboKwhoeBQ4BGX7iatrUe3KeR3",
  "key31": "3J5ELoWbi92RCcr5jsjaFJLMByhYXAfDpgLbAYcSxH1A4i3wYmiPg12Jwm23NzyeCSTE8rFrw5qAUHieA7Emd7VU",
  "key32": "2ahwSikiDrxoBbMrjnTBuJYbbWWNMWf7pJUNVTLX2Jpvs7kuLtpaoKwMWLnfsJPccwEup9aDpVwHQarFFmPwdEZ",
  "key33": "2RjvTjTBwgWa6h16oZ43PUVcndt7neUcDrJEvWdBWs6FLz8Nv1Jch9hqZn5ojc1NiHjj7PoHBCSSw7mFVUTfADVj",
  "key34": "5qaSgELogNDWEECf7UKHzBiFatFAcE4mcLGjdzMJFJhbtSXr2rLmCrwwurERGPTRvphBvT34cczq33NFWATU9rmg",
  "key35": "2j5LufaqceTnB1gvCQ5SccDk9USzopwYGuAHzbHRozREDobYRqwRxZpkMkgPTqgvaUC8M5totJnYygzwHkeCxVba",
  "key36": "3TdyE2HvSRcsCDe9L9s3vh3pTaXLfmjFb43S6wU5ggjbTB2dizBJ2TQXBbPNFacTS6Q5ssZPB6gGY5CeNyHYdzJv",
  "key37": "5wjB3dKUbkNbknUpp7RMAxqqS7sYp4saRzSgDrfwBhfm5fSnt4LV48PNYJsKxrSZjruARGy4njZfBsFoamjetpBA",
  "key38": "Z2JXECRvzKW63DkiAFWBySXa6zMCGgz2qdCAuDLJxyT3TPgBcbzUzUYfGpDByBMGjvFLLe5w6kinudnVx9dHsVC",
  "key39": "58FkNQy5PGVtNuaRWFctMp3M8UPzo1cR4Qke1gYWs7Pst72hwKivn7PV2SG5vpmpSjjt6CZK9GVRPfeWeFZuzTu7",
  "key40": "4PrmS7Ug2oC5oqtsbB8uA8bDSb89u3bRYKqdDqNtfF1pztp8VxTKxEpm66nfiFrvQouRPVxEsuTMVNVW4dSJRZYD",
  "key41": "fx1ofC8XDpdBP8mPWKAuXJnuN9BTs31XCpm8oiVcTmQS9tHfAJ24eeb7odxw2PNa2dv6mPBKyk4aQSLqVCtSzok",
  "key42": "3EVf1o76PTmRrD1u9G2TGsBZPdnZ2jMskDGpgT3tSUJp8Es7F7xhVGa3U9RdevjrR3TSZVXsgHUSANKWsMg5hFrC",
  "key43": "2DMpBJ9tP25gBi3BDT2XU5xV7uuHyk3derQguyW1qLn2SRKZEM9tA4fwTPJqU1ZhatFMNKbMP5EjRi1mMKigDsCm",
  "key44": "bZUMkhPMESBt8WgVdrvaSgfsAgrFkt96YiHZrGYcE4QXyPgvU4MQRKn3WthXM8YhyC3DKGy9uSV9SQzmgEvGqQg",
  "key45": "3A7hfp3AqaQ57Zx1yHcEPXUQ64Ju52E7cYhk9MRapBwkq7WNyujv8apEmBqxArXdD7EEV4CYEwLWEZbrZUj5fyBm",
  "key46": "dEiD73qEHk5SSH8yjztBquQsazjPVoKuqKxTpi3MroUo9S71xre14Mjpn5DMrBsdpa6N5yEY3n9UnHV532cYwyx"
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

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
    "4CThvMbr1rmK95zPVTzSLhyDvot525RBSU1u3bCRKAg9PcTY7ERSAb2PSR9o7QhQSdevyHXxz8FGB71Z59ZsUYW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DMsi9e21SFCJAcbF8FYNbSvxMZPQqWHUfk7oksgHer89yR2kzUm5wfDGHzQVe338bHowZJZhA8k3wRNKrqjbq7Q",
  "key1": "4j5YPxbDtyMgHCEfcjhjzBKYAhnwGx7u4TnKB8dt3Uqsg1i7TtWrqVMSTeQ11dUo5xs97m3ocxmFxzcQ6nZiJ9wa",
  "key2": "2SGBZ7gCLPFETKPiGR66UHiR4rppRXb48sr1Ymytkmxckh5eGwSw1R1UVXgsjDWnVyDuAshxnnJntsa6pmTo177r",
  "key3": "xThf2EGt6a1jGrAp7pcG2xpbbrqqX2YZwp5RaWbv4Qk6jXqkBbSQjcNRsCPHfrcHxqKevB9xS8cjiFpGsx2bnbn",
  "key4": "5wM9Ft9MRvvVKeQqGBWMYBhYco2YNQhc5p9fvXSe3drqpB6vYf6NhwKRMM2fCcdVaRudetfwFMoiRRs2G63gu2xd",
  "key5": "LiZyY9Vq5onEVEJHj9g4uCVR1Dxt45HVvb2mNgarek5wnBvDmRg76mTRHtcp587PihH4wtkc6HNfBTQu2djCiSf",
  "key6": "4ra518upoYTbc6c6RJNjxsuUvhwMonHaXmtE7CZ21ahhnCTdcAf4xCqteGoHX4byQoMGw4mxBg6RYZNCDe394xKD",
  "key7": "25kC1qtwZSRBNwquAd3bLx3brFKgtMCMDZZtiQfgrp9KT9c6abykASe46tjrpUTQ17uFG3UZBazmWA5pyCfaWn75",
  "key8": "3yTMf531aJyDeqMcUZQQxZEpM6725JXsafZRHxPZx93NbRsfhjUZdjpYX2wSt63MyfPBeZQwANaxW3PRRdwA95C",
  "key9": "sr2hwuejgPcr5R1rcf1YhSKNYE2D3HBJcRGSdvENsipCzRmd9XKarami9sJrr66MfdFsvUmp5hCE9HE28FedrV3",
  "key10": "23vLncWyzvS5ctid136nbZuaVb86ECeRAGD7yKHNMV6ftwRUBxf5tzCzeqAi61mAYrtFF7gpNrfizYADBiAY2G7c",
  "key11": "5vabrkYyGbQCNHEewqnLWBeoxka4yf1YWHdVmPhzQAGLhoUnzXj6wK1JqudDkc7AJVjHEFu73C3WocNGSWfCfmQE",
  "key12": "3vWjKayBdkPHJnSXuFvcUU37AbwtJa4y2ErQfR8t3d6cypMVVXAtFP3MkJHzuBkjAQYVqwJivQaHcn8KJkgY9x5Y",
  "key13": "5KVYwgoN5o8Y73XTwx2kCXaTsmtnXyejCSa55zFxqdfPAu6jzxCwY9jvdgeWkNfDGLMHPBEnPoDo2LyeQJWagvid",
  "key14": "4epFQNnLSNLoyArXwtE27bUA5BRQQoyPJbh5GGuxBZCJpDMo2DXfqh3s1iwjaRh8BjW2TaN2wm8MzM47e6WH7Bod",
  "key15": "2tJqBfxwzjXqz96Pe4ankmPBf6mHWMfFp4p5S2p1UWBCFQC4vSXB4pruMD1qe5WrGFPxQEcUsoyz7EneJuzsHkf",
  "key16": "XfybA9iS3nv5T3ksP1xLncciM1ZwVkWmyiaJqcmUMzx2dAo28zHuVECjbig7yt8anZB526FYN7EGuwXi8oQDSVB",
  "key17": "5EixmDzJGNECUrEGWwwjRwZREmiNysihSBUzDiCbErSMxhpNSd95Qq8LuvrvTYnJouBZMEhpnLS9rTiWgkmfFqLd",
  "key18": "55eWvC1ZbswTDpRmMgTrRViq5XGquBCXf2zHV7zn8kumCL9fsDBVaDoToch6QUcuC3N2EJuuYXuS2dFCimKDMMc8",
  "key19": "4UJMW8JF9kX6HYE3A3TuDRQfCLWnTHDWGTWsG3Kt4bqgDa4i2DdRWYSYJ9b5e6wpEVpQT5GkthxXGh1CT79iesQg",
  "key20": "3dUggv3QNPWP9P5KoEk5sDz1kKYSQtTYiupwWW3XjqDuwR7yqaut8k2N588KQb24Rywe6MZHyq1QnQfUrehGcT5",
  "key21": "5VDbRJcbcLJx4WFk73FA88RjLDFzzg6GV1ivfrrfNB9QrsEWfPQ6DkmYenawGx8uEryfC9JWL4WHTbUXHdshqggN",
  "key22": "35W31PUUehA4wCZnQaR6qkNJnzh7zzjGZBRWWDGyt4vTMY2x9R4n9huNu1C8bdPvBb4SWDYiio8cg82MHh2aBoFW",
  "key23": "2YQ4YHWmKF9hibqjBeeGV4AKKMyEpLiehvKLpSeG7JLqdAv8jURPMwMgJHpWhSbZ3degFQ34VzKjAXgZM41MhfYv",
  "key24": "7nEcM2gpxXYs7izHrNwdgxz5uMsFC4ruZefYwRRPicKQp48NUfhQG2wUTLS3Qp8kgNzb3a5tGTGSg2kBCuFKYwX",
  "key25": "5sngHHL4U9DuGxbmWtqBC4MxgsmKniDkabhHRSiZbxGmaBywXJPwZHjmK9Rkq9XbYr712dUrfkF4hrP3o3fo33LH",
  "key26": "26y8ECWsKFRXU73wKvAuwkiZqk8DjAtyVJk9BKJaWRzNCyqz9gDHtdAffXHQJPeB5jY6oPQv7XzkoeJKwaWUen96",
  "key27": "5Lv4jKwGBBP7Tw6JxEJaG2DBEDWeN9MgMsXmFQtx9GM3P5DLw2KzjG1oUrd8Zv9AUbLGVhezmX3oHuZoeEhg7E6J",
  "key28": "FYP3kb9PzHqA9K3gXy3WoHTcgZtyEVM9wKonpqBd45DTH7EXe3DydGbnyTkGeWwJdhpghu6KysGaheb1n5B5HQy",
  "key29": "5PzXZke7iGvUqnbzegykyB6FVSkpUAN9TKwsDrMZXQi1Ku4iyayiyjDqKF7vdGFFz3Zf2uLCojRzMLUByoUW72Wf",
  "key30": "3JyJZ7RnWemd3efjoqfCjZV72MgYWkDwakzr3PeYmF6stUr2D1nQUekVfbDKUh87bWQo2ytGxzFx65oxGNWKMzeM",
  "key31": "3uBrsz9Wfpb12MUaieChonBRTqPCfeWfaTb8xGyRPjkXp7JCWZQ76hCk7XmudsQv1X8Lotgn3QKbF56UTUtMVF6W",
  "key32": "4bkTQdczoweC8pX185zbpKjJKYFNW8SLrv1MiuhkBcJxCMYUWtou61EY3DiDpmZ3yxrJhVkRAgxGFTGc2wqgcEAo",
  "key33": "4cvTiZXHJyJNvHxJvP4rbivJKVy5C1DSHNQfz72ZC9haZJHVRaP1KmcAdnSmEAwhAim7TixNFhYPKTttj7eepqaG",
  "key34": "NXt2qErvcXifqnqvviMcucWDF2Xjpod1QHqV1h1ciFwrieCDGWec9DBAEejE7HrwiJZ8Pi15vNifeFqDhtP7dzz",
  "key35": "5iH1zDHFJCAKgJrYdcxKSp6Nu5YT8ZjLtRmUSQbG7eyCp4BN12ztsS6FkhrtP4soLTnTnh3rinEBztVd6fpDNK3U",
  "key36": "5LVhmphdqB8x7VJVZUZeLaGGCAqzwaGj7oiCAQCcVFmCBK9WL69MWs6gTxbwpqnprdVTXtWiVT15sxyYMRiExtiA",
  "key37": "swiBhoBySg2CrqcfpoXhwAjuwWkWVQGpa8HTtLBsqNwFtDnjPEy5cChV6tfnNVh1dk266hix6yGk8XhHD7PoaoS",
  "key38": "2dGg7To3fTT2YrXb8cUxtdeFB5JPYEj9LFjZZNXKFsPeRjWVcr1yTUTQdAU2PPMZZ6PP2jjQSoEKpEW7Z36Nq9z3",
  "key39": "2F7kyRSJFJ9aE5kMtz2kAdsBThPtEiQGQKR1JLq3q6GdtKESV7JmykgswAvqGhDjod59TWduohWbQ9urCTeqfLU",
  "key40": "3yd4gVrDmcEGWDS9ttKXJp8dv2m6DQmuiuXwW1G7QVpjRbz47PjDtFfrCRU76EEjBYd7bexPQJ9Z5Rp7D769LQSC",
  "key41": "5jTJr79YkQAwP5obvwyt9WNejFyv8x41KD8b258kApRM7g467PaP1tdac1XyFrv3QgpdsvoGXobvpx9pTYGkgDyK",
  "key42": "EGshed9rQZoBuunMfhAdmwFms6s3tauKQA2RhpxwPdjWDRj6n112iaQtH9WcNKWn396yMTLiBmmpVfr1gKFJcKW",
  "key43": "2WRN4Qxwxofw7WwqT8dWdrBVH4x8qRea5GRPWZ6nqdNRGpTD9CejPMdaVNFtuy7VyhizKUhbMefuzyedy1RP5N2h",
  "key44": "2qkWXKiQQwThjMk7etQPbM5iK676k3mNmGJRMd6qhXwxcjV2W1CA7KKZW2euReNwV5Fe2QDFUFvKZVmS8LXzCLr5",
  "key45": "2tddemfWy7FASb17igZ3vhLTq1tLbPdt5pPUm1JjeYNeUUpGdjWinohkzhBxpEEFh6x5i8SmJeXiut65j8NWRuwM",
  "key46": "VtdK5sr64zsZpf8sqfcfU7toWHGw4YZbmddxcpDNziRgAphrk5DGR71D8aM8T41BtobH4DAfykgHuAcqXaoRCzw"
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

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
    "67AaKpqcDhNSHnzndbPNwipqWdtRD18f4ATWKVMHY95gQcjjnN2n7X8wKanHFQqiC1tSUsYEGzTn1qUDiHkaBGkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkins5yvfhtyuJBDAYj4aSkLkvjgjKBBr8E2dDWUpunx6exiFhAjhueTgFUcxv9EwSLvT6b7DyPbKvftQsVV2s",
  "key1": "5vSUF8Ma14hRSPjgzNeHQPp4jxaBZQ1gFpQhE1FiLbk4RGC8Sup855pSax3zvuztrBgDbgWpD4AgPRU5jvygFuvH",
  "key2": "VjWrUHxrBW4ACUhZ6MiMu7AJrcxozMporZYtTSNDeam2PAv1vwWuSuoQzzmm9ktozQd7pE53FVLUhiJfseiU9nc",
  "key3": "n6W8Bs3DX2HiwFvydNtVdhzWZLsBtcV678iHqw6x5Go5xwpRhZ9M5aQ2EuUx8KRnowrNXTk7UM3dzfQLNaDg8bH",
  "key4": "3Qf3QwHC8FqDiHYu2uFkN6XB371EFp9oigZkPYnZsFURYGGQgfeXmQPaCcqWk56DJcMbYteukCQNHKQyeFCvNG5o",
  "key5": "3QG1t1CVdEcb72HVf8aavwqBdLiBPmGHnBd1mC6umuLf9K8XcXkXZ6TMTzjqsAPUTKTbP9eHjs7r45Vv5QBFAnbt",
  "key6": "3bSd1RzdyWXAucV5KCwAJE2wnBn7ThuL4MYBUbmQeQt6BoYvesxD3tD6JqfxdibZf81fNoTH8KdUKgEWzKmy4trS",
  "key7": "2vpbw2cWaJUYBMFgRsZ8aGTaeKa4YRNK75yDE3iFqWLGHsNKqRh3LdcyLgVSYESreGU8SigkANfEQtB1ufaMekDE",
  "key8": "cpBo3FPdp5GmSqfwD1BVjFBZ4Us19dkVai1fU9KqXz7RVYbtQ8y65tcjUyMBUj3yeBGBW1Tz9NYFGnzYgkiPBWR",
  "key9": "2t8eP7qRp8yzmvjMumHJFiHZrFJuKMPYdgXTxAr54KkMuryEi2rzsop8gUxSz2BkYuPP75F4EUrSUbCV1L6w9wGk",
  "key10": "2Ro7UWQE8ifyw3KebT5S114Z6epcqWhAJELEHajrCv4vLmfPW5hvbwdaTXXPBHBr2Tu8X159YeudegtCroBytz9a",
  "key11": "594XX1dQdfY6fR6nyPHA7rgjPWYFkw1GjJuyDYXmFGLX7MNP4d1ZfHZU4LgzCb1Pjtm8uz2pf73Vi11A4Yy3tniS",
  "key12": "3DRxkyS7AvcTVXrsiJPRX3E8LNrd5ptKJ6zDYJatrjdDht9kXmggmDvSdFhnS2bKmxsyNnZugxdN1A4rEFhcaZVH",
  "key13": "4rHqvu4LyyAgwCs57XuN3soG5PBrtjmRFKzSbpttJQ4q1bFdVDsabYovqr3J48We8MzJCMRHZv3o7EJj13JyaJX4",
  "key14": "osGiZhWQzMiqwFEejEW8f9QCv2EPuN3WWA8JMBBVCrJdNpfzMzuFkL5VqfX52381kjLoiEHPcSh77PvDkZAEmue",
  "key15": "3BHXk8feZPuTpz9Q3ZUGBUgV3GuKx6GSZ3XJC4dNAVeoVhzTooabL6bqmG63rRaysAuVfoBh56cSCUmDdQG42qko",
  "key16": "2VvHLKLz9ZRokgDpE4haQBR97GKuA5ZdvxBKPejgGLHsAFpgA5r5ciAfiZQDAWYGK27X2jXUM2J8NwryKHodU8r9",
  "key17": "5aWoXeVeUvAbZqtumPJtcaq8C6J543mtsaXAZt54pqXSBAUoQy3RsTSwuzHUqNvr2ome5jt4bhmXXXjTPaFMUnDq",
  "key18": "3o2EAEwA679po5yxJtDLZ15RkmeMvUyNezbedwb94xJHvShTYH5HerQ1sLH4B8Y9RLwUfLBM2oGRCfMhwRhoFpMi",
  "key19": "yBiSBctduakDaPUc8AfPfXeDFsjzyrpGPKv7NZUqs8oA53LXUB16gXEJz2foP4HqCJCpsQh9mkVtwac4eMh2BW4",
  "key20": "2SwqoWkS4ubcY8Xh9b6j6TjhMQu5fASCdpNwyERf87R5g7VyhZMYaF3TVs7aB6bMTnEiC1Xpb2EvKkdypvhyowXh",
  "key21": "2USkKwStEDg3Yj3kX5YYaBxAurrhEJ7r4oh8j7StFZBDD2Q31Vm8xra5yGRvPpLWgTqgAo3Rc6Evfen8M38k9CSw",
  "key22": "666LZgB4fZQBT8Agdb1rfV64xD3KPWJzw4bhkhhgBjMuUVvC4s6F2is8Ttxr6kA3h6zETRkuCpXaEVvxsmhEQEYX",
  "key23": "2nW9b8vQCj4Hq6aS5YhdMgZyiAdhLLnXYt9xdYvTY3U64XPfSioC8xGRNqH5VPa8PJty12isTnPxVWfGAYeFrdCj",
  "key24": "2t5HgfyCzsNj6ZhR94kSqSenFGR8781A3J8Qf6apkvKr3SGUYEPoyu3jdp5Z4RpLBhmnRTkDhC6vpniWCDCSTbeZ",
  "key25": "2xSMya74ZydonDDhfDawEFEBPuLCZu68r4jkLF4X3eJqsShGCfUxcKd4FfnVtpiXR8SuJ8rHwBjmMZcoRf9wkfcs",
  "key26": "2jAcU6REVrjT4Q9B5dF3zn3AVTRi7M2BZmVkMGjMGfbTSvJmUeYtSymmKmLUeBNG8qwVQpAMaTEiVpddgcPUduN1",
  "key27": "x8zqa9daZmw3nFNKYTEDuPxZSbAp6wWZHwk9UYaeWjZEnWLAmaQnGJ4yQTd5ZhU4PK8pBSCFTVw9HVVirFr8PoT",
  "key28": "3nHGCpKBrJnPCtE1hQY2C7xrrHK56zZyHM64wrZmAs8bTDUwDiMPKpFoGxGuuMceiVKu6a1JUFfU39L7hE4PAu7u",
  "key29": "4Me7cDqf4paXAa8hQkeVBCqsfL42Z5qfZoakVXjKbJ9jinSx72eonPPccu83NjCMY1iEHHuufznQESvzC9ukX8B5",
  "key30": "3u8MDXUMHtDb88LJg6bSkXzbWkD5PbvkAvBVqgsD2vVvbqTz6RivL3hS8nrD2NQQx5HbFXPpZtv9hQmCHgBSWNpS",
  "key31": "5hKCBVirZ7Jy9wF99ceSsdFV3QXcyMFXVA8vrcCaWF7t3noy1PBMZxR8J7ah9ZxCxoezr8FZ2ZGVV7SqpT2Nx4CQ",
  "key32": "4i6M48EhmWVUhXkZF82wMLx5WzbMMLt1B5Q8JdG3AwkEqwMuNMk4Uupkoja33qmMB6JatyX2U7JejtU4wKguXWTV",
  "key33": "5XR1aeVbZZQ5XPkbimH2n7c3v6d3qJaj6fdET1TQi2UYNtAwcVTAb2TRSFzZYuV1acV8SfjkrmGAuxiMNbBYqgUq",
  "key34": "3k4E6yKFKvF94sJ7jXMZaFLE6wHdK5Kk8Rr8kqCMZUk7eEMGnbf7o4hyJR85oaVr1Fc9XLV5tBwaS1yGFy12p14",
  "key35": "3b6sHrTSDQGyKHT3yuu3JKfYc1skD3xQkdL7KbE4FYksWf7KqeF3aWe1389FfvBTZbenT3Nc2WopU6QFtDQaN8bZ",
  "key36": "5XvnzFsqDVRqvQt8rz1yPmAE3BxhWu2tqYwtvaLMS1hgZSXaJWXuCe5z6qCZgCTGCAbkNYv1bJZw5WSWzaqcwGrz",
  "key37": "5eKEiRPQtkZstEhJCQMr3nArGo21x4wCSZWPi6qhc1wyJZhCjqXiZG4Hn9tp388AgjbJwhcEH7msha4EnaNoiHKE",
  "key38": "3AednSLZG6b4Pi2gYiLrik4KFeHWhJtpX7n3jYnMCH3DvmrFaQXD1nMfisf1yHwCwkGx82wZ5ctpv1YEyNkcKD7r",
  "key39": "6AJDGKXkfcgbJp6mofQUTfUvxV7pFYqfk6C2Qa9X5srS5pjT2iQFPBaW1Pinw26exAkUvR2k57WfeRLXSYam7qP"
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

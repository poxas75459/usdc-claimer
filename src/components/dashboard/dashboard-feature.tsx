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
    "qdKyuNytXNoo1kDWgAVHNNJSNxj39gXsN9QRVVBdiCPiDw6XmQPFcYTDP7G5NdrwDitQCC8MiYscbEhpvPNhYSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKG6sM3GiPutU5bZqD6x8AdpxXerT1gEdX1YjY7q3hEj4uXX8f3GxpqDYXeXC1ThTJHSn8nS8WC8L7qCrQf98wg",
  "key1": "3bdiw8nPmV7TYN4jFsrVBQHvu22QdWVie8kgeEgPGQcSbhztrdp6LpckVDj97dvtVFoLeVstCeboZ9KyY5LKPoSX",
  "key2": "2B886Tnoc8Vfj2PmoQBAjRLDSxriWNKw8N2ffnEsMvdUoMAm6kQSH7RU2ggwK1aP9DncWst2317t9Bfwg2CBgBiL",
  "key3": "3QpHCRgfuWqeKNACsGnGC5aX88QvGjS6YHyzWpGEjx2DydYwN8c8hGsuqmnU4FG6rGKNs9j6gMpPSkdCVVEmJcpH",
  "key4": "4NxMYb47k5kTQpf4wWGGhkUy3v1HuoBskFeYaKxnNLfKnTBW3F6ubwotMbHW5Kff3REbjvVy5C3weELVV56RLv1L",
  "key5": "4kr9p4W7TU7zJw5Vf657aCqhtuFQSSxrdxZ3kzyhetjt3Cap2maczz1MTy7mMnbWQbDY6ifSECmQpBMcNmf4VEts",
  "key6": "4Q8XfioNtBtJsyWE1qCwrsv7wDNb16sug9gopzU3eAFL5dM17foHdHj4ksVvSof7i4Gg6CYUZQUsLtQ7UnEQxMhe",
  "key7": "3Ey5hzWrdx8yDNZNcP7GCkG9TrhAmiGFfi5xYfbFoNwL3qxG4vmhgHpuwKdiyGp93dVrdpz3U1J2rPjEx7tMJAGY",
  "key8": "3r7LGoUMUtjgkGUERuiiMp9kUArwLpbTtdEm2PBN91xoG64AgWDMmVfGrjh4tcAZcqLGQcrpT2UbApjewrtZeFj4",
  "key9": "37SboycqBikZJguzhpardTaW59h9hnT3ekeZmuZbnWD64M2tCw3okfkyG8etmoGbrkcXCzcJPbLADPazUi6go5rd",
  "key10": "2pohEUw6SCgLtQeTLss8wyt586DfVKYMRsBGVU9VFp6PyP9VRSLkkrrQfyJTrmhGPGiPHHn5LoC9MdQaUMhuBqMp",
  "key11": "2W4kPdmmr6sJZi6oFnbAxJ7gRnrnpkCyY6rCiFJGyLBVPttH6zeTfCcQLC4vJ629iFTFQTRkXG2SgQ2e8GwR6rdd",
  "key12": "KEkBZtNmu4QPxBoQWRiZwsanuBDyo3YmU6XeGdLA6QpbNtyy3yEomTzyQuSvLzRrQc4gLxDia813YVyama12JPV",
  "key13": "vYssscY2MJTQRNaWCRSRSkhxoTgbXvsinMbVmvJP9jAM1VVPRVSxw31PZr3UFH25EuuKqteyEpRWA4jAwfv5NRC",
  "key14": "51e8ZJDDAvjGQPb5c9Rbn1DE7KWtYsxrJj3Mkdm5kV4mAeiS6SgkazQT1oHtaW7bpQoRa7PkfxnXrwg9KNiLYmb8",
  "key15": "3Dp1oXVHyCxNJFm2bh51si2XM8vTGQCFjxpjjKx4qiCLcAU3mgT2v1CBzth2cLV9q666BuZKGePQWc9V4pxLWk2A",
  "key16": "2Ua1ceg3ZZrQYwkFuHiTmeWDYoa8BeFkdixk2bBhoPwyXzkR4Lnpo4z9R59nHqmFaE3RNmisoVrCrcVUXMnSthgt",
  "key17": "4XVbCN495woDGUuDDcviiPBHBa9UsttWTLfaTipHgbSibBaSRQkYghXgSY7sgdVhnz6KDVbHjEArZabGnE8UV9h",
  "key18": "57dJ746qvWoPpcdcM5j1YKFx86SXwHWPmGC8eUHmifRbgoXSTAWstJ2rPDDNDTt6xWTJvZyaSRez33Sr7wpywRUq",
  "key19": "24iVnL9AsJZfLQyoSrye9iZuQ5VWrVp22WYGAprcR8gCNgUMq83kDKkXQzfdjRwwy3qdFZSP7JqwbUaoHPAWZheu",
  "key20": "4vwf3qkqZuaofJdNtPuWxZEH9BW4JP2eGnpQkExU2Qfos4F6HasGBWRhUuKbtuGv6JWFxHzSas9vb37P6SB7farY",
  "key21": "5dhTVZLB5cWj6zAWEt3MELABcxQ29vYbQiQnekQDMGhbYrVccuwTsk7M1ioHVFeypGTrDbf9Xt5egbFNzsNf2ghe",
  "key22": "363CBuWMNeVn2TNbupr3jrreT2nbrZTkDJqzY1SipsHkTSxLrqe9fqnQfhxryunKPiYJWAsj9f8jm7PVqRXDdvKn",
  "key23": "2h8wz2pntSbz83Ps1nRR4cNatj1h4Lgdct7KXVU16gmJjhgrG8gVH8UdArK8aksqeC5W9PehC7bRGQ3RyijVXH81",
  "key24": "65QggrBsy1bspXMoZeWSh6Z4Z7PMYtSQiixX5YQ6HkKEALMgU8XBDKP5YFFw13q5ZXMy2L7sGQa7EgJvuLmV2jQY",
  "key25": "5E6DWQbg22r9SLNYysBZvcYJBs7n45dnM1M3veVnNCHoSWsbPdd3TLCu2eC17w2wgAxDuzz8E2PDSA11aLbbArJZ",
  "key26": "kNbJQ6zNudHbk3ssrx3G2x4vzGoVmGJdWNU4qFd7CicSsB7p73S3YS5XiMQ48i5s7mL6DnUjxna6rbw9itA3yEr",
  "key27": "5Xz141yiMYpg34pmEKwYXEY7vx76sibQBneCi6q2KWfmBRdLLLqxiRaNhSh1ju12f6bZQm57Ne4WTTBEQkBhEb2h",
  "key28": "16C57DeZWud2zRTNDQKEMvT5KEwsd8n1xmy5wXSShZnPZLvQJMgkJBBk6pUtQH5hDBGr3BjYKj89Yw4myRNRv2t",
  "key29": "2SLRYN1WLdcSpyWcQUTVDDcmr3PbGYFwWD1gMwF4Sc6wK4w8fADsYqhkJaSrRArP8EmJ5Sdj5iWdkRkLMnW6cR64",
  "key30": "3MqxUcBUzykWgSPVgN27zEdYeGXTQ4aJ6TrhVRP6vPFVryrvetn6QTvVbqUNzPBSRccTDAGyYDtu2Ffz9qVjc21T",
  "key31": "CqC61V99uXvmJfgMft5SCWKWBaTNnd6se6Bz1jz3BVTSheCbckyv4jVqNtJz6HjZt5AETVJEthGHdEzSNY8PFwf",
  "key32": "5adQv6k6ipMnghUyBNhEjhuuME8r6Y6g2gjMvbwnBTCeSapTQcmPtbdZnKYED1HYxWWKh3Zc2dJbJZrWTU9jLxxh",
  "key33": "3vydu3BszbPZUAC4qu7B6TLJho866UpDmGNnojehxe927qv7woPYRm4yrAvLx8x6HWcADvXzT7ei7EKTVwc5i24W",
  "key34": "E1JbvNSvFfHfE96VYuGoL9GhHK2X1gVCNNC2f6mKcaJY5V2rNhxdwLmmafGnVeEC2RARNQwZR2FcPpjZR9noSwt",
  "key35": "44hZbTpkhqvk6ogHXrFtDK4LXJhSRq6QUoWwnuDJAV2f5HQ3NifYe6BDrrDbeVBUqhYGjRM7DP6rG9Do3LtmK8N8",
  "key36": "2ekx6rU62CtCtDAd4A6jGy9F7Yc7Z8YjKHSJpn98GikFU4mBNo4FSUWWts7PDqhRtAM3bdVUeUG1Haui3KQwmitt",
  "key37": "54GfSfGfLEiJPBkBzRzAHv1HiZJxwaNpLwTtZG5ETrZttgaMmY7fvtovPZ9HBXNG8xpFoPA5cVq4ccUngrTN8jTe",
  "key38": "54XQTC4AMfGXDYVUttowb2a7D9twTvzYTTiBFxW2vpLGvdfVxHurp2RLmhxs2iVzgqzxtrxEQ4htVtej12WvQkFC",
  "key39": "CjG5PQNKbnVyRyyjWd1NcwbSA9zMZD2hrNoDNRJGRf7mvSqW5sQNYkR9QmUT8dTua35rdGJXv5YzGM4VeFnEC9i",
  "key40": "5ExwUN9bSEvvBSzotRW2nzKFGqMETbPoEQAuYJDEEyJ9pZb9ViKdJ8d3DN5tHX6U2Wz6LfyiupY9oouRdqSvV4AV",
  "key41": "25GtFLLaTRNU6TNN93KeBpwngZLtqPKhww55YzzkL5As57cBkCwtBHF1GJKUbRB3VYZbXnA18jDqvtppYNMTpevT",
  "key42": "rnNcdJSCwTicQtA3vQ3xidcmqRKVUBRFQF4LJ9ZCFTWDbYkrifVDzdiYXD5FxCm4r8omG37mUn49VB8axWoc3J2",
  "key43": "4iU51LNDFGEHpPUEj6ZVXpRK4Ab2NoibTx9EEPRyxV8CnJ2Eqhx8Mi9bCngsbQSyHyosreDRVRpECL7cAfqeFs8k",
  "key44": "4Rs1zxHLWY347pQUBwP4J5yXnaps5FUKpo4WmA743JEeGvKQkZB5KrMemxpTaE44eSmDkCyhnVPNh3G1zbtLN223",
  "key45": "2x6UWd9na1bZLZmGGmBjWNZszMKbUeCoA8ngacz5haraGhZTiD1qoKMQCXGUjp7P6LkRvQydMzMSq3yQHmvDzhwa",
  "key46": "2iUKuvWtm2WLmbPKsDnMQhV5pcxmZ8tyYF1tNzWZw7HLHurmqPxqfZUvemQhJEKCntpotpXpPnEQA6buG5M6M5mt",
  "key47": "3c74v6Dca7AfSKy8fDFSDYrutn1MJT6X2PBdgVVYGLkMac6R67X9EwjHV3tsx2pruQGCpQppJpCf3o57jYTNCRMT",
  "key48": "Xpa2mgd39JzoKgyEA2PMZJ4aqHc13cxmcftvyqn1jS35AEs4DPmSgfweoTiatNooWEGPxWZcaCE7r3PQ12WFfCw"
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

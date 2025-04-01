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
    "2AsXuwoEvMVfUMoafU6FEpoSTfcvWirifLAamKnbuK67e3ABwnLWPshW9kU5PGSUrBoPFsjpAaTxhmJwm5sNUUJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QefPQEGK4YmLtiabv6rPYLvUAhdbxZehYDMDGqARXR9kJ7nB8UAMsvc8h4rYz4ByUsj5VgkMFMXRsnJ7uJxhF43",
  "key1": "5Huxgu4APa72RrGwxBCMWFhPJ6XWp1NwthHJU2HFkbCQh9gAhQS9SKqYWvoeRJrML7GEbKx48vWECsFwEEDgUXwY",
  "key2": "3ZVfnKjzrWqCoCFsMuiXLMKXYS8t6K6jH4JureoM5u4fRiRW3X29is6GgWzreNtjyU6CPFCZ8hwWZurTxXUq6nV4",
  "key3": "29wKEbVADVcNrD8eSvTaXGHNWV56syw6epdNBzAebna2iPgvtMkEM56tUeLw8PAK6MxTwTLQideP6qCVNajiZyW1",
  "key4": "urUdqAHB4Wisr4FLUmpdF8Kmg7w7rkcAPvXXg3jnVEVGuQG8j4zeQdgxDCYJ5WejvGEzLXH1owxvZU2oFxdU6SL",
  "key5": "2s1Kmy8XxAHdcXeQHD5NbVwp7qt6jxhu249wUaVcdd4pxg2158kRZSRgveioGPvMMiEaiT1SDoHRF82c4xCspCaG",
  "key6": "UwjjWicRqx6YVhtCqPyokfWPjZn7sJ6evqe9atGmTVHTCYeLhmiUP3AYKXsepvxqFn4STK9wcbvgGwA2ftyFTvs",
  "key7": "5NBT3XjKXw7usGba4tmQLPet6mALNypaRDS2C4tzEBdewTLoPkwKvF7ya4FsHBXM8S1yt9QCLudETpaecfW8vPi4",
  "key8": "2oQnHhoRXUggxC58vvB8T5YrreYCoP1Lh5GFYGKdkwxDsYvBbmTV5qX5kAkTm8ssBpryK97BggaUwxfDfvnC57fi",
  "key9": "4zokyCuNgnmfui22QHRQBUtnnQW3hepatiKE4sxuHinvbHPRwWi4BqRycYzzCvwG3D2LfB2vfbpKwJdUPY167xE6",
  "key10": "5o5u9zVUkF2NvJxSUN7AGAuGjTtixsHPYRj5LfBcPkJxVxwKcvqUVTGiHUEqgH7ikDJuKHzscR9e4dkTaMex8BKk",
  "key11": "KKY1pe7wxKXug8DTmYxP8T7WSjeJTyz3rwDqxcp8PdSvzw5D9w2GqMb9uvSqdu2FPdmNQ9u76whgxqmyaa5w5im",
  "key12": "dPFgCvaPSYFJuzsgYf4cXjxJCD5j5pgpPFo2hamrj8YcpGFkBXGrnGud7aJu6sdoc5XxFGN15hgD5T4T9kQZFfH",
  "key13": "4ZtUpoitzC4fuV6gq5HJ7AGq1Dd9QFWD4nqRBKXTQj9JnRSTjAeK6Ls7iEbJUJXG1ouYPRAw7yzpNuhsZMvpTVLK",
  "key14": "5QSaURq9fbhXycphUkUwhgQzhFvx3WPSi3EwfN2f5FTgVQjiP6mM4U7ZGmvLFDdnMm3TkNqcdSFZ1aeyrkmHgq3U",
  "key15": "4ZSgmEH9xUNXkyLYBequ8hTCpBdbdsrxxMVKTVVz4GuB5aazC4sJjxnWMfuU4RpfJ92xygiYyCp18DhRx66Bi6A4",
  "key16": "fs8xxs7zXEgWYWfyoBGSB1eu6mzfqVfbf5rACsz26NYXHtCDgHCdMSyDr1Px6Gt7u8NT57hxD9UC5BEfHFuWqgW",
  "key17": "5qk1ehXeEpyJiQHajqAhqTBg8zawpru2uTiF2oBDsCVDswRRv49RJhk18yjPDjZUZwH6dSsc7b2QSuLdmiH2qpGs",
  "key18": "5RwBXPL8ZszJ1eu5kbszqQZH7v5Tg5ZUYXXHjnED4rk2gnTxi2nCLkg5Mq3ryqBEqfUEE4viHkwkstFDubfCfrSn",
  "key19": "4EYjt5J8WHkqGeeU6nTFaoRVkR43povfgQksASn6FJ7AzxNsxYmcj7j5svCkU5UGz5nmDg6jFxprqrUfa3VLxA88",
  "key20": "4CZTypM8x2y2a4HQFxs2Ati7RbgsgmchQKznxTaGpUccLWbnh5uYm4tseTnELMddLM5CyEKVhQ6TermRcmLMRy1e",
  "key21": "4A8Vhid8ax4f2CZnLDCqnmiE1X1ghyxfxhX6SAHxxvrQvEkhkwbWTjJCj9XRfJ3FKiu6NnKdwraEYHRFWacTFJPz",
  "key22": "5W6yUWUJSrB69Zh6J3P7CUedFap9PaHx3mfjFKaN5XT4yuErsXH2GQmbJ68aPFCm74iP9V9HEPboaopeJZ9PMX1e",
  "key23": "4b6pa3k69cXLTYF6HFqYtPPCc8LtejNQ8Gbp8ac9KGzsusGB4v4HDnbBGa6ELp8o9bhdV6rbfAT9WUqSHdncRfzg",
  "key24": "BTf6aDV5nh8UBdZAnCZ8KbpKpjK3m6VXhJjVWz4KNS71qTH7P3QjpndBXUrrdqW68VSK3oeSNKEcZHAvj6oWLfF",
  "key25": "2bNxgFVRraPDXk7fgjT65eYf1aAhCSrAr5PQEZaRATD2A4zb4HVGRgEw3CQwQrRvN8cQCvtSL8TA8Bhqu1CTp7U9",
  "key26": "R7KF2A1KK2SoyR42gXXEtPrcBV1x7qJfFMptC9XVn3tPfGG2Uz3vXW4C2BkKrMWvdJpz31V13zvavVMindmfdro",
  "key27": "4epFmtTLk7F7dLVjz1uHWydBLYdmsAXzHtuY7DdA7iuFcJwWYbkCkWUQLB7wZ2gwUsneDvXM82oUnaSaYaoCfvDK",
  "key28": "4HBA6rFKMo5obYakruy5EJrzYejntQ6ChnSxgrXGRGUi6oTv2DMeXeDPyGns6LN3ha1Hu6q8us6QgrnuTSeuJBZP",
  "key29": "3HzLPqgwTUxNnPtXph6Tte8QUSGF9wvX6cy7VwL6ELsd9UuYCJg4jacapufqrfZerAXtyWU74kBM6YsohryY8uUa",
  "key30": "42QQLtfqJTaD91tHqStr7TegeXGz2UF6AB9ksmk3S5TEGpxFsAJMvamsa76irmxHVaif4v2Fc875kRYPL3bdvsq2",
  "key31": "44w3CwEQKUGLhzC4UDtJoCWmq6KhRxFWYovPR1VhiVxQowd6qFL87AcPr98PQBHDMvSvCSALij8ewQwHzeEw4BHt",
  "key32": "24ayTXQpeAYKqAbaHsJqemBmm45JGmRoTrUaLQJyaQSnDRK4jDqG6ojEzEBuSQQjLcnmyn3WpLRALpiUH4UAns3h",
  "key33": "59DgyCeA6KvtkQkiwc4uvw1gtChitxts2bCYmaDQdBYqEtmgHcXAvWvGxPf25bZbGfKx8DESFWUeSPERTXmKpJHb",
  "key34": "4gWH8sxFY6VFCYd2MNeo6CRHF4trmiF7tQFcvEDTjXeiSbgA3WnabzUMLNDC36oHEG8NrNTP7o6cZiwfP9sSbFtZ",
  "key35": "66pZpDkSMSxGK8wEG7UnDkcb9vZAjPUFGP416HNZdqmWptqhRgaNf3nWeJ8F6x391xpkXmnvNLYsPJ4NS3yGBojn",
  "key36": "3wtaC6R5Yte4Xyi4D59cdNcRmGw5Z74tZqvhN111mZtKZCUmfWHkHzHinDiixRuw4dR6XsqdDTs3JGxjgARGPqzD",
  "key37": "2HvjrjqgfTrtFVrZs3UtUUYpwyZtVkk3X9v2a8PvUoKBpkZnEj7cfuxi6coMCfJkRSSCjMAmddSvPJEnx5UMcLjC",
  "key38": "UjTsW2QvCNLXxgzPEazR53594bUq2jeeYUE2Bwk6jHvzwCSqT8ivhwToxmFbsQ7JvHPDwr8XU8SD1wPT8c9JJgd",
  "key39": "WAH8oB9vWkPGEAz8kBzhPxfz13wZMp6T7gS9AdBX7dnRfEh9KryCLttYMJRoxVtfjhSxHTrPeE8GRnjUeLJ9zCN",
  "key40": "28PFjUHGhNnoDWjrvgVDmLjh6cqLmrBhWoD75uoCNmUWvwwU77tVPnE6wRuzwYtVEyM3NSV9Nd8zKzSs2DExHEqb",
  "key41": "FajVnGgtNxY7U74S4bFfBngn32Kiorj8UymY8HMubc2TrbTaXaSiV2dfERzsxQx2uCX1orNovyNybKj2Dgb8KxJ",
  "key42": "3u5KqL9xqfo5N4hxoFq3L63rPFa41N9E6tHzZzT7wZnSdVVTMVQWwGfJmZdv1CuZukYp7R7bWgAG3gk2VmsXVt7k",
  "key43": "2V1oHrpCDKxVEnhTkw6qBvRkT12vYtb5w2wkxcDiAFu6bHG7xR6VmHzCTL4BEGCR6L8NdJnKAC2UG6ivzTXS56ix",
  "key44": "5FnTxG5Pkg3BbsW6ykGntjaGm3zJZMXvTKFyixU9kKCzafFsVReJbB4jprPTYoWLYDmGUgzg8JvVBYhxkCfrpwBC",
  "key45": "4C1DMkx2ewFzS8cNGRTM1S5wMUmmBwpQyUr775gTdb9YayGnDVRqU2Q7PL5Q1SpTfkZun7mKFngXREz6hAbpKF64",
  "key46": "3FiqtEJA3whdgBboxMjaXzXHpgVVGroUmFdQwG6Uu4fYAZnxmDsodkdiVxVcxPLhWrHEvLsnn4ZM89SZnnMWkpVR",
  "key47": "J7H9yd1R9bz9URpvjPs7VTBJ12x1Gr4xMqJjGkouujEfbivXs5X4JQu8cRscaY1C5zyFXAit9ziPnZV3bAM4mJo",
  "key48": "3LbE9rLFrvd665FcoJ2bpxHWYGFPKkXZtUbaGzHpadFvxbVX1vpMRNGMenT2LJ7NzEAVgYwcQkaKiwzzzxwLegx1"
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

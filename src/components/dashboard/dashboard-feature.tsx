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
    "4YFcRYnJzaMUMDcJnvEUQzceaAuLVzSyCunwnmtJYsTNiVNC7wtR2JXRpF4nT9DEmyMR6y7hjEY1Du8MThXnTpWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibYzTd1XyMMLNjLaBowQUeWu2dDHETncZ75Q7JkBDzoxwQz5H7F4FJCK2SP2VEvSGRVLU8ebpMi5jFgvQ4uXHkb",
  "key1": "3WY5ctUH4yxPQENTyieV9JdSwKBktToYkTJ1edvVCsFQYEJeYGALUYee4WEvkMiu2FMz7JwiknsNEnp8eyTWgVJE",
  "key2": "639e2fi4DgAM7qy57jtYRzgijqGMeu6HzJANp8X1ZdAt8LkueFFPr1FaQPLot9JNMKihD2tE1nNy7UqKTB4A8jra",
  "key3": "bK9yH5DGcPuEcJjEj9YsmNp3RLPBjTuqwFr1sWzjTSAaRhkpNvsc25HBP5geB9qbNZSNfjFCQYYNak1tmwTxatY",
  "key4": "5VFGz3SNeiEvPWXD3fetmCf6eXjZZHFncGDiUPBhDXp7WoyeaMoiuNSbH84pPQfXHkd39FhRvVknCoMT81K9cMws",
  "key5": "54yMxVPuFtbDGs4pdHUiLmZMcU6vCDR9kh6Lnb98rpRtxaMGi1nfcvvh4hQTc7Nf12bsY7Vz6AzZfj32UuCrr1W1",
  "key6": "2ppjzaQNa8M6DTrUT1SNpMPT6SvP5XCXBWXiGM7aQnHhxBPhxJv11uf8tEqXHR35XoCFFouJy2SLQCnvceky5tzm",
  "key7": "3fWpq3knfRHCbFFUixfmyv4BWiQpVXjtgfj56EPBVCAFRvhd22tmbAPiKpyEXBoxLLNbRNYgxvDVZKEchDbsZ916",
  "key8": "w2pT7tkHgb1QtBRWRoy2qmg9RJqSFnZQsv56ekYwvZKeRkLZV9MJJBzoK1uoe3mWeUmMG4NFaEQjUhzbapxxoNC",
  "key9": "jhWz2CGkKBQNjmBQ8fu4dpukRwsqff2LfWSaF5SA6PJSHc7HKWZE8wbWRx9PYJchmbqxGeeeCZ3LLmxAe6EK65M",
  "key10": "44BYd6xAjoi6uWSnyCHkAWsFRYw8nv9Bwb2TMFQbtZjqxapEN2kBTKJcoPKJFAP6S6QECboBWfm7jNqy7XkpML18",
  "key11": "mTY2aouztAooiyReH7spRfd8Lwd3ysbV51uTMgD9X149NMuMx1pmnT4mR6jr3yidGsSwQrwpoBGqEKwbSK95Pn3",
  "key12": "4M8hD26YhgGeXXQXCuX2vMyz8V9vZsKZ3qaK6SojFRAc6byAkB7npo5SrgMJVC1PkZXP9ZdVZGQ53AziZhevsBJs",
  "key13": "5Ts186ViRbbiof7HPT1a6BUVAdwtGYA8RnwGTjFyb9wFxy6wqQAQ7un28yssybj373q59TK7ojLd69WUbigCWWAz",
  "key14": "3S4jKS51JJ8GeNjHqjaiNwEfpS48PxqyPhXqv3Go9j51ezTc1jeetbenDVc3gPuBTvjLbcAbLSD4wV5KGW4BwyEJ",
  "key15": "4Aa6fwBoSgWYiN2UJM3DoJ6UDbZAJmWXkYe7y2CMnTEanEQfqu7PHih3FaRvcK4n5fCAeBNd9oexignjJKZu1ySe",
  "key16": "4L3D3pPck7EKr3i1cBxsGCYo2ijWH53FLzdhXCz45VksQVQ7VwdQvFUtBRGtPZJdQ7RBSkq1RGngZfvjEGmwu63R",
  "key17": "2FMY3MvWj62Tt7MFNfqHrEPVo6GBCjP8HPTsdRiX7h5csWLArGudnQswpPevUJGuKUtmD7mLdBUztuyCSDqkNukX",
  "key18": "2UevWrGBh55o7qkyFcNWTT2zKi6rpSKpNvvc8Po4McGkHVigyqF8iyKvFQeDS3PhPMDqVnr7aqF4EuzJ4bi44rxd",
  "key19": "34MNtfbFXL9SJhphLx4G1d7oTpXoLRJ2hKcN1BqQmuuTmqQWPk2AP2NAyVFEAP4WKAZtBJYdtTz25g7y8gH68hrE",
  "key20": "4aG3FTEmZgo17NwpgrvdMgF7xGD1QToDPTLVEohsK2mvzHj3nRsyK6KV7BP7nxLwB1uq2daLrxyJk3r4aGpHstR6",
  "key21": "fciF91UjMQgT9nUkfkA4Dv9Jn139wrkndq5AfoLujbxVP5oRPbCY4muK9obJsgK3KdomAn8XkyoqkWek94dYMFP",
  "key22": "4cozJXUkRzv4Aq76xXc4c1ny8AeKwsHDCQBuNkB94p1x9KFKbG4T9nepbh2RuiRysYu81Xbn2AnjrBjArrCCdeZa",
  "key23": "2kwZQhjppRtRFsN6K23FoZKq4eJnxuikXtPRMqtmBk1QhtxXqH7fddVUoFKPREv64QRQ8jwtc3jYGXKHZJwXKKxR",
  "key24": "2WvH9nnZNvcMZuhmKExKty9gFUd2Xgt3iAcik1quRQqeSoyoTyVTTwtmXhcYjZpyrszetjfQomMWc4V6YUczqpv9",
  "key25": "4hqXBFKhRbgFA1QXT4WD14oYEpuVVF9s8ThP4YCBKzoJhZCdGHxCq6Xcb8iGnSV5EVxovvc9LfVZtAe35WWKhQk9",
  "key26": "5e8tM9DRg7dW6B3a4HbSG36D85jE5mEeLm1cubDrBLeTAZNpLHg4YhSHYTzoMeTytf9FQZ3Srvh3ozqpcvpNXDLH",
  "key27": "2b6goQnKqwX3xVDPqaB7EY6hi7ywtzsDqhtkT5CcCLo7pULeW4WXwaujfafhyee3Vg7ToXbcUvMWWtgZsCNs1J5j",
  "key28": "2B9zUwNKS9D8soA77dAfYqa1ppLbGmdVTMR8iDr5naBbF2uYPWrRLeqEakKMXJrx5GRg4cJRb9rEXwXtW1SLgkxJ",
  "key29": "Nsbp9Sag3ZEg5YoP49b1EMcRAAXSXrHLdfx2Zx6cLLoGM3VQkEXsYd7QNpoFZZ2dsekh6R7tWvrfLMrZiZkZgBY",
  "key30": "3KbiPXfJ4aAYgvWfc5ewa3TPdNabuksQaDxuVnH2xKD9ayPdBnAj1aJyWicXJsmqBZMqe8J8zGsMqEVkz6Qa4YRC",
  "key31": "4t9zSrNHqZpj4tRe4NE6vZPsyAtEpSprG81FFYAEPxnXHVR4kVhgkazbkCxAsK1K5NmBZdruoYrXkupDESggnXD8",
  "key32": "2E4zuVuJETWVQD3kPSLaigXr7Aenyw3AXFkgoUprnNhrvcVCi4bTsUDzt8hADYgD1bdMaogfBsP2G7PQFjar2dz1",
  "key33": "cMiFpV7nik9iEYzPkMS7jLQuJJxr7TRb3vcjUjYo39mWWbtFMx7PKtMekZ9Z8bfzeGkF63Dmzsp3ijwgiaQGTmR",
  "key34": "42ELKAJE92iCFApQ3P2sBu2FGMQaA6xZF9zUoHcAqgwb1HGwDS4UgR7UqrvowRLqbaAdGuR6h5xQ6sJFkbAhK6fa",
  "key35": "5dLgGdJKS53B3MhanrV42szdpi38vHZdkhXXjjm3qZfM7VVp5uugZR74evk4o6Huxe2XDuQ3UCMXTttqQEcKtSda",
  "key36": "aZ3m1qxPh8bZbV6frAsahsKD1rzztbEvPXDXgXczfpDhKs2KhHXREH4keyc8erRqrkESGCdDqet7cv5hWgzLYmf",
  "key37": "5QdoHUNR8sAYPD5p4TpPeindTaC11TnLApcdHRABhEMoXsTaAF6Jwhj3TCSt2sndMjBBEWETxHfHAaXKDofDeaeJ",
  "key38": "4iR8aN5ZrEer1uaoaMBg5YUXFT6H82AdnZV3ecUS39whasTGqmG1tj3R1YKoaLmuy273mTExsJSGKNAVK519ye4X",
  "key39": "44pjFqcNVmd2GXJZPUGdTiPANEF1wwGZq6idxRxtbwj3hBNUxKnG2qduuWM47KzCX8VWfpqKVqbVHrxkHxy4khU",
  "key40": "4uiZcY4ZccGHJUZmZm2qKCHeUNiBFoZF8CePVSGF5REsQqxrWq538Tong6uVCRzREySPLFjuLjwPdUu23cZVtthC",
  "key41": "57eDfkiV5FQmduN33upQnzG4g1GgqQ3fky2nJHeShgmF1svcRCmAuup77UXEHpWHVa3ZGk5zS1RNZo9iD1RK33he",
  "key42": "31ogeV6ovFmLyUTaoQAY8WhFnRWg59x2eAhDnC17reNAYNG2kZueWRHkKbpn8udhADV1JbLiuBwF4ZNAgdqvUYSk",
  "key43": "YySZgjWZ4tsR2ZT7PWns8NeysEKw67BE4AZ5DeTaqnTuYC1gwTCUFwpXNoU5XXuYVvkYMbmvXzgcpzGxuQYciuS",
  "key44": "35ZF9XqfZHzcE3Qs8U5Zt2K284Ws57ZTDSaikTCPABMBTkWLZwH2YAMmLkHVvxWiJsCGWPBAh4th4Z4oxjTtUefj",
  "key45": "66XtDsdvHmkugsJHZedfauDyTtkpBepzippWr8Nq9pd8jhmZoiamSL5naaDuaeCo7dZmZm3YXeuM9BPzyKxLyDpW",
  "key46": "65QZU5s9kNbpyGDWf7Cf2VKSbGK68KD5s2svm9XrVdpaS78Hx3NtXn9xpxeG3XUEfpqdggmZH3dwPnrpFjLyYPN5",
  "key47": "5cAwVtvwcbYDgKizXMzhEjWDJM3VG5d4Q2643Gyhcfdu64vFX85coEGqMgtUGLPtMvhYc4AnjJg72zy52xzbQT9d",
  "key48": "5wzhTvrfAce8xQfYNsxCxriUtE8DYG28FjNzDtxba8WcteHSKWGRK33e75KmfMejW1zsKr33nc7uKPXZXdtczidp"
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

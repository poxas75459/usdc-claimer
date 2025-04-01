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
    "2vW6rfnCKCNdeJNzd8jHYxThSjpg5eQoiZDToQV5fkCxadUcGn7YDPPvT5PH7hDobv9vFW7h3Np32HWiXt4FAsQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCKShXtrDiFbxAq9T6SLWD9MzLNz38sFFncDE64n4PAKkG4Ep2J7Ai6q2mPwiWePwoMNtjgZoVoJALjRKhrEhHG",
  "key1": "2nCiJTVoE1uym1D73u2uazy17gutMa5cmTk5GcC7t7DyLcj1RWGA3yENRKzxQwh9p9heop4VEv9bj3pG7DQYDssu",
  "key2": "4TNvqjMRG98QFyqhSFZXApbqMxszk2jfH7VJqbN8wJhcKhHuMEX4rWvdU3MStMuHBfjHje5KdTUGg6PHauR6GFrJ",
  "key3": "BYXNXDcPTYzco65m46gfuv4fc2PZyN792WhP9bVM3XRBRYppcBFfjQqoGMdmqGQZW2vNmrwSr5d9692cbn8HBXK",
  "key4": "37WipXboeUnTmEJHvLwvrt5QJiNFVgPx2aMssKqVzA7mbbWDtaB3oM3XV5azvA5E4cxvNPmMgk4W444CGJyc7Bw8",
  "key5": "2Egq4m4NLR4iMyS8BQ61oNzy3DG19kujYoyAEHJcmNvYRsHXiweiMkmeB9E57PEw6PRqfRJZqUbgGpiLVDTN2Bmf",
  "key6": "5JNbpxRanB8soHBGCwihzeH4bMJXPBuydRAAETPubPEY61qBiUeJRMLZju2za3o4FnsicadDE97FJSVB5Fsd94yP",
  "key7": "3XzGpRyofNqeF7BrQCKtrpR9P6Q8NNNsjcZE3AmVPja8iTS4umuf9zjyABzxavfdhcM9ojaJHhA5E37t5eXoouiJ",
  "key8": "2mXu6LruCa87UNa9VjGjZDj49KK5c2kzmhbxNQPAWS76HoZJ9yQRZ3NaRSge5kRAJEjZoQ6tVTaFZ3rrs93LJtfB",
  "key9": "32rtXfYbw736VDQv7EPQhYbxozT14YS9DsbZ2CV6ugoiPtkPzHKAGjeJDLrXfzZkwSzyQZuLL5SmykyGKDaRvAX1",
  "key10": "4WGptGfvbQadwAcAwH5PDxggrnNbZpBw8UUUupK6hbbqvj44duudQnBt91ijkmeaj4A3Vv7wdrw4cxkWCyFiTHNT",
  "key11": "52PeKMHyJdDMYpb7rd9hdWxRvWRdMZwSeSNch4YYv2Br4QMd7WbscN67HWn5PbCgpgSuDnX2fKMZUfzKtQZ7vYxV",
  "key12": "4srEmzDp3dySLJBiBBtsQak6XEe5gcPB4SC8XuWHEQJM3q6nV5rYntbPNRtDEFKL4y7y1eEY3TgJ1bRv8LhjbVFy",
  "key13": "HvEyRmvtpin8TBd7WABtuyF8QomCTXdAmBb9yUZiGrSGAU6JCtvqd52YwzdKHEPLmfsDC2VexsgHcSF1hm8ZzK3",
  "key14": "3wZG5yd9ykYwhKKiqmyKExX2tqUm1aAVv6rtgfdcvYxAzPGEemoNhtTdQCbj964zsHsz8JfXcohJK8BYfU5JwKQz",
  "key15": "dX1ispnTd6b13X1SwkSPZMRUQX2yy4WrPHuKCcJJoKrjgvyKWANc9vvLYQnRsjK8CP892FwYE2pHBUVz54CckxS",
  "key16": "4wMonCSZtHXsNxfHWKy9u8aQpZneppYmQLdRQvFCRHFkwDhjbsyA8iWuhggFL1eJYSkNkZ3sARY623cQsCwChC43",
  "key17": "7apdiiVMum4V4vB2zDjgPhvvrAT989iPZQbNtPqwC1zFWcPthbWWWhENvWv2XWbQNecYDEs4W9TL8fh9Hcuy6F8",
  "key18": "3P8Keek4mUK5ALaCLfniTrJkmrnL2f8gNxvp379eYmNbC4RHaiQcRHSwCsWMDG5jXSqWopbj151vcTzNmPuxW6kc",
  "key19": "4dsD79BDn2QuACNpNbjYRTh2drRzF5UTZn5hhBX5wLny2egKcR8rAXHXXpQdKiXUq75UXsN76rYB592cAs42JgKq",
  "key20": "5xc5YdtHPhh3j8vjhFhdMai4cpzs3XHTCHvY3oQ6RF5bEdRTGWMRjyvAsgtEz2gqaHeAScx9sk9yrg1Zac19EP9y",
  "key21": "47yTMN66rFksNuquM2C1WMf7ystoNWkayjm4inrUqVgG5iJ3YLKiBM11bSb5ci4MGYRoae6uzyNuDAoyQJToK37r",
  "key22": "3DTi7JbVBxvwwAcqkyzvH7KAV1hRUtykEjfKS5LHgKJNoB1uqikRBoADhwRxLDicSSz6CD4wpnfvx4PoWbAw92Ud",
  "key23": "3GibGjHASEJNy6CN7ACe9LHWhmMWH9GTxgHkZB9QZwPLStKqLDvqkezmTQDoQhLJWsbUVW7NytQny7estiHYH3gD",
  "key24": "RDrwPQzFj6wVy75Q2GKkkg1snCEvJfiJCYkPFWMS3cAoetL4ipi7FMxpNprZhh1veRMMEwb1nAWMbhHjZvkYEic",
  "key25": "r7XgVDSbj3YfVt9FhH88FkkddPM7NLafM2ar6gUdofgt8m7bhhY4ZyGTmJPwWiMvwiYRQLPCKifKGXSphDa54m9",
  "key26": "3gBiADfRCFnvtxWZ9PiL7n9ka76xPBezVjpJG5Ut1aLHy8CTdFekMDeDfUeBVBJRDxmVoZFo2BrjCxTNgAKGQVfh",
  "key27": "2pq1Mt8dnt4cN2h9bT1NqXoCmioC6cDtkarRgJYDcNWPZ4MMwAdBeKJzopPsCVHTzjuWQ6iNXD7ZWDRedtcSb33v",
  "key28": "2yrwjoTgmzaNym8hdUySijRD4tQTDiT43jotC2YBMo2C3qbJpr5LQh6445jVN7m19Q2X7eHTV2v7Yo9WvdUguXid",
  "key29": "2vHFPhP8aB6cqoYpg1n5jauwHpxYrpefJte5v38TFHj7rDXtm1dtX46NYKgp7MDa5e7Zq6vHajZz3tyBtSGjzZeo",
  "key30": "65dB8YdzPyTjLqAWYCr39F1k3Ky1oF8BxA27CAjMUEXdkQexoFZLXkUYWYSiFKejdMVhMBmzjhEd2n2Bo6ti2avE",
  "key31": "4x3szRss4q5oMM4DHoQV59ahZbGKrmdj7s7oQA18xpJaQPZGfBjDVaxtGcf5YBkXxc7WETZctwmk3EgmRFdm4AUw",
  "key32": "3o9hQM3xSh4Y1QAjzaFmMPs4T3sNToBEmmMV7faJVP4Tznb3c8uh38j6XAo4quWr64eTgWwY53YAzY7SBefwtGFB",
  "key33": "3g1wQ1eN9MBZkCtR3LeDVcEzA16dSRd2UZfP7x85SxxKJ45v4A44TEeKyEtmoJc888D5ZKuBhYdoxbdBexZxvZ2L",
  "key34": "514cXyPq2wQit9af1xakuN6BML3RkmH7hHzrMbnCmikzTwRDzTwtPvXgGjM9jhP12rrs5bZSuTP15ruy3nddQN2d",
  "key35": "57Wdtzjmx18YrXvbjScvp379DaUqNJT4izWQnvEtQQMKELcq7rQFZwkU6oXexhzyDyqxPwkAuhRVTuurqphMRJL3",
  "key36": "hWwaSRJCirrk6A4uahY8rAEnY6deY9PJ9BiNhqnVtkMmMVRadndyJLAtgLXCy5FvG7AsiedyKaCBzVv98PSHDi4",
  "key37": "4V1S1pwRRhmA1Q5B4465TVjPi1bny7RbDFbeA3XxcRBdP7QvJbuiEwWNRFeJQRqw9FPVywD86U8a4hMHHpU8gj8o",
  "key38": "3y3ywSG56DGitYRTv97xCufCPi7F3qaBJk7MqvhnCiRJNotk9JoAweomC19MjhgBJLy2EYs57HD5FXhUUGmY96SG",
  "key39": "814YW5JsAZGc4Zskgz1X7CNAWzwMjpSfDtt3gLr6kKA9Ltxq6sqK7XR2wMHNCoyyzwZpy1K9NasRAQNd5sXyaQH",
  "key40": "29zLErFepAqemykqYryJtw4pjy1opS77gWM75QeFoGnqx1pLTSYSvsieWE2oUszR3pFfc2WXdxE9Pddwe8HWZv9g",
  "key41": "3o7YRzo88YxAr6kyE5rXyZPXShwEBbaAc7mJNDqZgpfujjtBj6uimiCjgevLjXowKzxPMk1yL693GeiRZ9xwxt31",
  "key42": "5ntxkAGLUPmFp6chVGJxzbHk7yj9WbU8acBS1mBafVzpJdNEWi954XfqNMora5PBeWW9KKv9quBeBV9HPZzJKxKg",
  "key43": "5v1biNDKo4VKRrm72QPAF96tJexbKCfTPxeGL8pi4Rt4DVdg5Btb34RYaZs8321kRA8r1NP5SeRWmh64akubf5J4",
  "key44": "5YHvLPvXkfy4qwVmZaTQS2Q7Kq3eXMqJfZYZQJw2WGHTxkX5yWtrab6h9omPryBCfG6p6fv5LizwmPMJxsHbJEwb",
  "key45": "BakhwVLWSqb9p2GwVVoTZW2Gph8PPqHA3br9pocipNzYAwUNnm6yQUbJLCDjV4CRoneFmvwoVmFZEYDnofXKrzd",
  "key46": "3duQBfC8i1G6GUKDyyg5sr8ax8jEMgJmSXTUTJyKy4dLV9J1viVuYZ2JsGhofPKR5hiGe9awAn8T8GaRuEoAZFnW"
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

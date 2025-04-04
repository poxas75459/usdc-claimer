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
    "3yqs3TBXEgWySHFTd2aajJ2zVMZ3RMKP2EmPFJjKuino12gJ1Gr1YoD2XEbdsUi3UhYvvSRJLRUoXxoiG3G2Wr3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28EK5Pm7BZyVt3MWVfD2nDZ11gAUeBx5vqEZ7ZNxtDVhPaFUaQhWwoqhVPsNYx5p93zbQQ7HPfj12v1fFcBjYcPB",
  "key1": "2zWm3PxAJ4adbESaSia8P24eUZpsqT4S5dguJYECeDc7jZtLhKa5Tqa4JhL2GyKFFKMN3p697A6RuRGEM2TRzf3w",
  "key2": "5LQHPcq7eFACteaiLuxi38fLAT1Z5j2cTv5bKocHaP6twFV8Q1QCQ85pv1dA2eJ7DSGdRrR3Z2qmoua1EWG5xbMH",
  "key3": "JNXcwTzpWcWvuc3JFmNzQGnGfgDkeeHxZyrdF2iPpi63MzJiahk4pHm2w2SmRcQsVNWJAUAWG4SJShTWBQbs3vF",
  "key4": "4GSY4Mivoqfi7ax2VaikfecC55v7qMwRBisfzryE3bq28Kjyey9Vg6pJWHoGSPw94WyAZADX5fzDSvVw8oem9sQb",
  "key5": "4TRy8KH8Lac1uYasZQqh7JDUwESqdo2dTTUKV2P1rm19FhnSfxZSMKZ4FXYttV1QMWNYExZgqC9jD9mN9SJYPAMg",
  "key6": "a5FEcMhKBMunnxANBGxJTMnScsNPt2YcqW29dqESb7oe9tQvmxKBDHtyr4JgzCjhZXTtarAsoMXFJgQTtocnDGC",
  "key7": "Rn2rGRBz3ts5DHFGaFTx9rhtE6YGdSv1N9Tq7YXWhBhiVXw27E44CgTvRbmaEyFCYCzErk7PXVwEWnkte5EDGMQ",
  "key8": "4rDL4R9RjyUm81xV3jjiHj2sbXaGZS6HoowYoo54rrNPwNr6DNRxvxkcVKWmATZNNo3m4grGu2ujmMGDxPDqcmk3",
  "key9": "4uFHEfZZAycYPB5HAeAsmw2LxfunTXkLsXmog3RfxhAwe9sB8iVasGtpUcNZ2hxQ2wsDz1niueScevuMsyVFuSjv",
  "key10": "3jczoCcaHgFhzYJakDtBzFKBB4K5TKcWmnQm6vfqsooGQgKWPN8gGJLeS4o8J4h4zNWzKwgY7zDPfpBoptBDgTm2",
  "key11": "23ifHafX8Vgj2bHVkSPyEQTfPfTNkAdFVSDvfmXDTAQKCFAJ7HP8PetkMoZrn8f69LDCpvRptJC6tjaPMBTvADRk",
  "key12": "3k9WETkhnA4xA5T5Dr9Wm6GNi4vp6TG2jAsuro5b9bJkFsKBaEeSQRUkXPYGEomDMX1QsPj4ar3Fmf6LhhhGZYJf",
  "key13": "3PSEYBetHkVfCvZzu9MW86uXDjWNZcKQ1HbGJ6zBGbCPcDA4kJUQx3wcP2XUfcgALiuSmbt5DfGp3upgzN1Kfjmx",
  "key14": "4vSUhgLXjMCV6DS13vpof4LVWTokKioV76VooDVcLRXgi15LaHtkGK68Y6GhxgVh9AG1C4haU9ffjimZhwpXXbA9",
  "key15": "5DHrH6k4iQDmZzn1Uy6TNyZ8bvSrke7GT3b1LiRcDYWHa6352D3jugJHK6qNc44R8wrYcptzZJi6y4ac5rptBgQD",
  "key16": "4hxcuXxJAB8kfTEeXq8yyXnn9MwN32iCTcMkd15nzxPGd9T4q7hwEtrYURcchLxA885Em9EMezBQ2ebA4HuqaWU",
  "key17": "2jEMHNYcVrNADxxT48Z1yFzrUCM1Zyz7jFaMXs3r9fggkwEBNQmez2RQjckFGwQEqFrUf7v2rDiEA5Rr6dTrfPDz",
  "key18": "2VnCcbhL1Cwu7Zr5xB3js6jz1tZDwR5CPhM6PocY25rP7jb2f5k1hn1isoJ9mDNf4dt5p26f36K6ixCUAdZ4QUVf",
  "key19": "3nbvFmaa2eKXsQEmzemThe4kJvosgqKGff5WrXdRTgUgsxVYEWz1oyXdhSkwbjEDkNANWHtfss1v6LcWXycA6YiL",
  "key20": "4zGQ56o9XFr2hatfgES8YvEB4ZYuFEEgQcxDZTPHzPuFg83iGpATLXUTttxwWVB7BK6TBNVKLRRms47jkLYdUzcL",
  "key21": "3VL6xMNAsVnn5y8eqJALXnVo7sau1mswrwjE7qrF5F4TSueBrZY2K3ZSRLZPuxjmCoV65zCvZ1M9sVttHvVFxywe",
  "key22": "4NhUSkbWbzdWeheHsLb8TWWEWRpfw1Quss4XfajMCNxYuCb2weSBagDx2mVkSESZq7iLuUFrAjQr8EMk8X2h9CjD",
  "key23": "2S2F4z2Ag1rWyHCLaruzWqeWLgPQETtrBkKYBCm3XByrYnxtf2WPRysQM2Jz8ggVsbtnw98fzDLzdVaUXPWT48bS",
  "key24": "4FaFSfy8gn2KaSxvTyxoQ7s5LuooLJQdYcNTPsiKe3JxXR7yW2DyX1skctaZ1jn74HS1AnbyT4TP65FD3oZ6PYfn",
  "key25": "3pv3755PEuoVfPEBFcwQKcSHwpmJB3UDypai7QB9zFFdwNqvSsGZGqNbym9RTns8xKtz4wcb3F5BfZk1Xvt6HSvn",
  "key26": "nx3iWJzBSNDm71vMFk65Mub2hiEpeT515zwycyG3zxxupzAXbwbyPyP7aHvQffrxzRFguWKXDKD1Wefok5AoA9k",
  "key27": "4ESHX5JnGRsrJ1H1K6tm75a79JWsv1Es5DuQ9SfobjKpiPcWFd9QRMURkv5c2WYupujkdTM8jBtKtW8ContrRNRU",
  "key28": "3WjxLx4GKBWUKYTkKL1PkazUY8PybMECoPpb3X1Qxr3gXw8HoUxQju4Gr7gY6BrnaWhZHHBo4dUykjuBDf4BJrWe",
  "key29": "34Vw965zb9FkjaeCqnUTEcbC8wvd3rqFzKVjx1p3Xc6huMzgGzJYUwZXfZTxHFRdmMBRDYfnBRRh2gq7j4T6a43T",
  "key30": "2RmjbbvHvhrCyJMobEKSgjRcrhNG9tAov9vye15FVYXWdbJaBjoPdUmGXCxEsbPBAosUfGj9gZ5cMwsGzPLeXizt",
  "key31": "5QZ8tYDHKFbGC38Xs8EbymrkqhH2Wzu22YsRooVJQVgo6YAXgYtk4AGD4HbKyhfL341eD4NBf4amFMyNzPGug5Nh",
  "key32": "2Qi8szAskAYmDbRMGPAUS6gGcxztxApTBQfXrTKZcuWGmzHSScJbXZUBC1kQ2QdeWfnbdZ9WXiQNpqyBBumzi2dt",
  "key33": "32wcJmsdS7eaNfZq4tMCnVLQCZajt1jQAH6ncHiqSXLKbfYNVCu37yTSRxvHhr8GRKr3wyJRiEFtT1e7bAqrJjUb",
  "key34": "WmweHzY72jA3SXKa1s4XobE3T2hwpgscDfDMzG3nnafi9Wf1wEkuZB2LWSE9Kmrs9fwLzK62daznk6uwZ4LhfeZ",
  "key35": "3y4UY97AMwB4hdY1A6V2cXawc7y9qqNPeZWtPj9TXwiieCjXwj8FUgzGoebUCBfRXemQHFYGgf1Q54p3qN72aJZH",
  "key36": "sH2iihU7dgjs5ByxAExDxiFMmsie6BEoJTNA7ojGpisVn5JyrA6dB71vmuNgFgXSCdHqxLiY8Z9w2zGp6gTjxZo",
  "key37": "3xg7b68jBc63pq2xdxxWS6CmzgkcGGENdXRGhCm5AE4S37s1XiB54pVRp8tiCA8mgtcWH96Fnuoyi1SC3bFMA1Ta",
  "key38": "5WXnEoeZg5AaeYHJQsjW24CDL4B6g1BqVEDZxdkzf3aGb8i77om3v8PJmkxMfej8rnf4XvmisBZvv97fCmKz2d87",
  "key39": "3zA35BGvTgJryCNGy31xJo1kh48Wj3e1ZAx5HPnsucjesncrKhP8p66771Fo4t4cpjGe6sjURjx9mgb3b1trBrsE",
  "key40": "5xdRdvUtckXbzVCZq89owaxGUtof2F4xJLPPqJz9xDJ2eP78FWo1P4gRqKhd4JkrHtdKow3pymk8bg99w78f5kEt",
  "key41": "4tLpePCHFPvEiuSoQ3L3T2daPyg8GBBvVuDdZze3Sq29SfkghUo1sGTqDKgf7m5uUmjcnq65K6Aq2DwciyvuAA3d",
  "key42": "4k8aaUJnphgwTKibhGteZvcs5GvUuofk25WxzrcoFcFNM3xMpwxUS2PTSwmxTE5CzZ6JGAoVoRnARnCPpJtKpVBF",
  "key43": "38xXusDtBWPtymywFGUAn3XQ55wj22fhtiTXRaGDfRi7EJ2zH3xSKjYKLMzUm9KCC93gCG8fjEpPFUtea1EKhACc",
  "key44": "oPHKA6QJPyizmSpKd9gGqPPGhQZ8uvB9gFGcSNjPXJaBuarEvG8dVdSihqQCEpkUFmBtkcgzQzxkn9hyiwm1yrL",
  "key45": "3SsnC16gmHByABEHenFx5gMP8uTCB1herUYcatYJC9JwZAKoW8hJzkG5EgpRdz4pWCkBNxcpHnsY8n6N2GeQke3b",
  "key46": "2pg3hWuPWPgLYzQYJZSRy8c9jsLbXJCzaDPGQXvfUH6F4VnFbXoKAxmUyHXnq8n8X9dPzzuoS9v9o566oF96gQTh",
  "key47": "5cre8T2oRGm16EiUX2BTcTUwL4fjGQgw6FU6XPfcp6cbMqnKFazigNCCEyt2MxwY7HfD3oud3NjjEgVdKBjErZcb"
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

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
    "5P61zNt5YTSv8EeZxFk1L3NR58iDy33ur2QbyNbWdbTrrozZw6HAvXPRvDKGnm6G2dFMLt5hhGzmJViV1f4DEXFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSnkVqW39kUBwpKvcwQvN2fykDnCvRDRx1NdvkXagZGhf8omRnHsLpSpH9wizBcF9pudM1BePGWkjvtBbvGQcSL",
  "key1": "H7KwWLj2vtak2s1wf6RKBfVnBPyYjyRxXj1vdnTvn9tjQjVgTiMtRXn98hKzjqefK5p983HCxTAe4iAw4NYkX1C",
  "key2": "35jCu1iZ8dW7n6S5suR3b7idPFYraRCgzrK5NwDhheDuPg6cecbV1YJPbd8HLTYjAdoSAtXRQVzFLm8fWruAgWvW",
  "key3": "5jxtzWkkMc4x85q1NcjYKxGT9SBEVVAPyfRP5m1o51GRqsWPk7kvEcraUZK4gro6STQQdsUSagu7C6bcsKqvvgaV",
  "key4": "2iovi49TR5kkLcAxhimmJcmswg7yzforXotLMV9CvBaCj6LvEjtNqcueLv118dacFdWSSEbzjxwRsta8HZieVWkN",
  "key5": "4huHjZ6kwxk6je9NPhZ5eGUPxGurVko8byV3qKvoJxAYYPJcunUSPEhucWaPQTrrPV1d2sVgeotZseybc7knXpLv",
  "key6": "LVjzShiP2tq8NnMLWpjS3mQcGfG63cdKXF7taJqz1op2cQ2EfRvexBbF2dqzk7ZrhxxkPdZArVkUp3tCC8Wb12M",
  "key7": "ZAYDH2PuZDwc68SSd6ZRAykeZR1EMprnTVGt8Zor9A315VGbLrdEB3jqh818wT3XN2A5R7t3y9x1kb5JSd3C4PY",
  "key8": "4g1U3ncEE3RuRrBDnvAq71djiXVzr8Npmpm2HhXym486L7Y1LFQbZKMPmCCzoATDB2cw4nQsqtqCLSWeKxpkAVoB",
  "key9": "5p6gRctafUmaPA7Axmoc7LzeXZgmoLZJnyCyKia2QUVUrPofrqe11G52da4nDL2hzPsinT6cTyxQ5o6A647bMM75",
  "key10": "5ZAQpBsL2ksL6vC9nrHk63mKaSqFQZPS6GC73FRbWhuWECoVSBtpRdhPUPqMKTQ5WR8krGmQwZfM8GGMVpZLMTeM",
  "key11": "2esZD4uTbgA9hBiVQdapYDV3oeSbK7xoccoUdNZtQYMKqEHeUQd2KyWvqfztzudqiVmGWLM51TXLCyTaUDJ6jG7j",
  "key12": "4jCe1fzBgA8C6kVDv3AFu4kdfMFX8n6qgbvkkgWUYc8x74TbEPYPFLVQvpz4R14y3ZCoY6vpgb6aspjExQM9Peqi",
  "key13": "5SDJajARc7wDTnr76RyWCkbtCHkK457X8TCF5o4qSbfNS6XoxNQaifMCJrFoL98JKJbFqBY8qfe5wbZ8k6ho7yog",
  "key14": "2ZQ8QH5EgVhpZWE3ucEich5eH3qiBiQ7xXxew5qT6WukUsbsutgcm6UeWCJPG8XV9KQBRPHVtVgVhphpGfZfAZBA",
  "key15": "5R3tpxdQj6wRceLKznrR1hFfcncKwxsbWzCNCWs1dDhuNx4KqybVPnBGWgmYHfVgEEnq7ub8VxL8drBGGyKSEjTK",
  "key16": "5mmpTBFeLRXNeLHpFn9CiscfaRmabQrfSsgojRoV9m37RBGGooHitF2LyMck98BBdw5RJHDbwztzxxTQG3wVzLpM",
  "key17": "2hFybYo3jLeToDzKjFaGLBtDPx76k3y8adfDqt52KVhQVsUzLgiMTpmrVCN8e6FGZuvrVMDppXCwZxHrzWGDUWiL",
  "key18": "dr26e4d8pRVuUdJ5pTpHEtH7QADWqwXTTy4fbXwbmsbhMVr3Ngo7EnGsfVPFh58KuVJ3ZQtGEXgjaDG6JpEm7st",
  "key19": "49KTSoc4xxv9RzxVMPcZuf8n6jhxBik3TPMJpmmasQCizbSZhpZsucAqkBS1i83FcPqqNygKECs2fWZ57h9wgNZa",
  "key20": "2SZkgs1EjEfYihVMhujCNeu5ch5p49rtaVXFBbC8yN2CrXoYrTFG78uYSU8HNPz3M1qfPmooY3KRaadpxjUweeiK",
  "key21": "2v2Uf7NWYbW1gmxi9WaMLEFi2uocC1tQsnim1A2RRcmJG3sgWZuRVYhcnYprgZcni3oqxxJEdAgLq5kjB7pXwzYH",
  "key22": "2WmcPbDPFXQrYmosqwcDcXS3ZvchTTJAEfq7JuVHqTVipDoaPLsibsSQwkmSZwehnVAFMTYsWdBj64qEe7Zoqx9i",
  "key23": "yHR5wBAtJVs3jKXSKjE3nxs1mmWpBpeMLKFSAtbSn2GWa5zyuNWhwLY4K8eF3rok6Jk319C8qbk4uTsZmacuvFQ",
  "key24": "uQRJ1m5q6m6hGnngKRvokH99PceWKDjJn2R5p3mFN4tEhm6NuXGUxWkey7B4Xyq27vLvD1brchNitXMJDQFess2",
  "key25": "4e5DoUGEMYJEbCCbeh3ZBBrXZFwSGHQPbLg34TN5XKzbw72T7yMwGgqmUzUExC6pADwgxZ4H6hFM7VvwRYj8Dgh5",
  "key26": "2YFZ9bcBk9z8DbNYHSA4AvUFxViRVXyLrjKiWnSziYK6zrJDBcf9xRNLUPzsiqf6UA1xiHNiv4pHYzAfvwTo7xaw",
  "key27": "2q4ehHTfs84xSt4z9ynx3onXscPXU7SWrTxQC2FoEip7fPkbahuRtaZf3zeR7G5fNwUJGFrXVuvVUWk5Ft9pHmv5",
  "key28": "2sHjmVPk2oyx9FbPjqeMjJWc1N4M37gvpRn478EX7yZ9oUMij5pu2xWyBkoacfY87ZbcjEvmxujzGw3gt2P2FhEm",
  "key29": "4AojTjaZ2A6S1HHXhL6pUKeAq4qVnGH8zragC6u56cjrc3MKEBqLdCZ8Q3rGycLiVgWCn7DinkZYs2qmaWCzQnGw",
  "key30": "3WoHwd8gYRGcpZZU9y7bkNey8xXdZBGZFkhhmyP5G8U89CyfKvHt6u27bctsFmAJZiXULCJwZwEnPNy83DX3maq3",
  "key31": "2mxttJXPn7aZiZX4bsQJDr2sUbnkc6f2Rr5w6qtjWqFoxXfpnKod6KxrW9iw2gdXDfFhgQTEUc3C9qJJA5Em8DJS",
  "key32": "5we7EokVLivGCUtDKwXdd9C4sji5twNbqkhuBqXakTtQHgqK5MgqBYwjxhsiSR8TAUR6WyT6yVvktzKfF72jtaNU",
  "key33": "5C77gKEiHRjJdqqjpoUdYrnCFL9sCMbzzDSUFxrjHo9UBQ3xFofCKGECT3sdu9Z2xKUJyAYdvqua6QrqEtXLHWZa",
  "key34": "2Y1YWzv4B24Z4KaXYQB9TjDR26Y4rMwwozZRYu2UqUsZEWh11NFbrDAZ5pLKywaobFeGz5ff5NezH2J7ATMNv85",
  "key35": "5meneZv8muBZX2bEUuvu7SCvhdfq2dPbwqCWsgPUcUkj8MMcMpine6Q4hN1VTQSu8jEmsNznGJu9GodHrS8s5KyB",
  "key36": "4JS88Bpnh7v8eraQndyvkbTxQ7JjDtcXiRqsmNRPjTmN4VxK5LnjEJfsYCRgRTGj2xf7jW2PgGxDnVwmq6bp64vw",
  "key37": "227zRTSr6QrDPBJGKpkvd5mGkfLdc3qQACYqzNSvs4aTWZ8PruiejCbqPBJHe4gi4quo35V8KTMnxenDxFDNyJUu",
  "key38": "4eodbv9kEicEz64NZUMskeWL45bXt48bGb5AeLG3kSRorsgvmKx3W9Y92eBDmwMTPGaeX15oc3ig68MNu7dnBW9j",
  "key39": "5NLzNY97JZkBsLxG2gqYtvpyjN9XaMRTSGZynjtqejtgQtVYp9K4oQqa8iPC8gxzWDZgYrnyb9SbRtpQGmz685aM",
  "key40": "5c914yLgaQ8Dj8HjmYVA3YeEgq2mET6LgvSiSpLLDQCoc9zAhAspkc9Fr9PWHgjuASmeEwegkdS44WgFSem8242x",
  "key41": "3eA4zq49Wg85fux4fL8CgBWJ2J6Lpq4LcjmHpPu9GS8JCsFkFyWDbBTGfteo7mjBNixmMi2FdAeU4M7JSW7bQdpa",
  "key42": "w8PFmHcZ1yL9edYHSAB8xjdpxyCCTER9MBm3yiCL71nYBmvvW8ZkCcZDgfXq2goaGspCzTKNyfw6auAG1TFzTC1",
  "key43": "5SLfZ2CdLZv2vhvGmgKQBSHmPnCRLBHRArgaWutZX5E2dhcCRzjyPEi1u2QZustdJ36Frq2uUDjAgHJ9k28e2obK",
  "key44": "25LLcDZ3PEW96LNbWsWCYSiVBuaRMkxzHMNaxGaPqoudFQL4LFjpsoSEqmKhffZcBZG3zUED8VVJfiks8tEPiTwy",
  "key45": "5gWY1ST58xo2cXUpKyu9oKHpU751srfYVc8kstexsPyTeD1dJJevSc1s14GMLMu3gDo7AiPnxDBoKzW3is5JbamD",
  "key46": "5KBsAkzehARvhnB7GgR6mCnP7wMXnMJASBCYwFp8BES8uku7W8mGi6ZhUJAE2o5mExNrqPM5Qna6AKzPH73E6CL",
  "key47": "13t9uY9e1Y1p6QN61hptLmMtBbRkXr8i6Q68RENCLUM4Gouy1xyunyNdni1KCBBHxuAaoVvYYhGMvyC3zCo5dHd"
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

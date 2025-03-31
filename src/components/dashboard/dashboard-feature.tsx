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
    "5oph5tJJJUYj82XUfMM67CgWWSEoEcQmzRBHYC74XjXf6KV3Raa1xnAJtAiVJPNnbzrm2Et6NH1kUttXc29wkXVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSKhynMSvN3pCAiNdLaetygXLRarHKNxGf29bCsyuw7VceJSA3MZRcpZY864FjCb4LC1kJPZJ5bYuLsxciLeMRX",
  "key1": "ybtEiNDQGZKhpx4vmuMQqk7D1BLu5gLj4c3XuG9KsdPHfry8eMoSDoBWAVtMGWvHDFqrG5NPvNseptPCrL9B5Hs",
  "key2": "n7Kq8Pr4cMaP8pCdGHV4HvfAq8dNceGg74yWJf8Nsuqb2k9amKwdamCvNN8ust9CjwcnGpEz5ndrzRqNGiFgK3Z",
  "key3": "41DeoRB1i7WpwQVRGYSdX7ZMGfoXmFCDKshjtLXbDjoGcQRuh6GGmKxBPBjzRV6QsKUauf9T2VifPnFoVxM4m5rB",
  "key4": "4VEAaUexfhp7w6We3FPxWkHNnnHaL9udzch6QXqc8guvCe5pRNRHAhSREWxV65yHB32MbARrnKKCjvEoKVtkdBVf",
  "key5": "4Am99q6qVj2JgRzWFuiaun3eQhtyErA5TD3z9zS3Qqwb4qXTzyeJMAi5WHEhRMVrjwVrfVF1G9wH2SkBx5d6m2Da",
  "key6": "66dd1AFsNownFLUru1sUr6DijdcpJ7CRdAXtwr8WbX16GUJXwjHa1hrjSfYurR4AvGyo9NaJjLkT4pPEMcLiYRep",
  "key7": "2BrBobSwhX1NwCVSNeWseE2pVpeqj5TGRJGhFMzqYHwRsR9wWfjWh1cegGTUYvCcGU5Zf2rfRBptKUHjfqumpKxy",
  "key8": "46p7bBaSk7evdKaRb1LQGKg64FSozXCz9sagUtT3XUahLeMzPqyiMtESaQDiiGiHDw1tBHe5vT9uBUsbUbRSsswW",
  "key9": "32s5anptkj2KMyAZpnq9GGTEvahx9XuKK1m3qc9BPJHh64Gc1cEJrvQzpWHZo9jMbUSZf8SwXyzNtnM7Cf4b1AED",
  "key10": "3vZeZRKLbT5fn1pJFB5GsRzmJfjVQLKEWPyHcrTMrfiqhQBwfKzfGZhhsUuXi3rkYSKb6MiVoBSiyBa3EyuNWhM5",
  "key11": "uPQdnzNpu6icU2NWvJzRE6NMK9NtuqiztscM5DZzqQbP7LjWVvKr1hMM5bQffY4jp8cyMaAiJRutGTxibRGMgUQ",
  "key12": "Lg24susuVKBSQvT6frX84avmCcPY6SzjLYQM8GXg2eJauLCQXtqq8t6aaDwn5Qme4LF5wBpVoBj9qJTAJXxZbJc",
  "key13": "5Bpd2dHrSZtALWZYzeGyE5T7Jvs8ZW1Q45kK45wvMPoT5qkrp7CwQWoLFPsPMdmhCg8cNSWyaLj4mBNAzSSB8hqR",
  "key14": "2ZYuVCQU5QM9GenTqAgiQMcrRbPD7TrjsV5k6hJHNDLVWRCojrpBDi7cy6ZLtqZmMLRiWnWWCiQyjCZhpWrU9w9q",
  "key15": "3aqsR5azeeorSV1o3NiYikibEmavo13ddokr9wDwrSXimwNSEwN2MNPGaPCoSFZ8A2C7FuXhuP6DfuQmP7oBQCZ4",
  "key16": "4TuSvseEBTZiXmw7LC6MBRsNCGZ5rqw2pbZkzVetjhs4jx8A99s6BALVFaphM2ZJH2DcqzQVLpZAmuN4wRwRckNy",
  "key17": "2Ki85CeDyUTV8PwnraKC1kSrzKJqL8ZEr39T9t4DkGxWJNrkeucj55HCkYLUoKSteJN21RXs1Jvne446wZT1C1GK",
  "key18": "bJYMDVSsLqQq8h7hyuCXs1xekgyBkmb6TEi3Axzrg63BLt4E3AxUNEW9hUTboUmsxn2dGsF8v5BJM76mz2Ue5Sz",
  "key19": "44te9SvZ93mhuvkMgjXQK3zd9XY9zmsU9H4aE8xNFsYVVNGoVXqPJveNd2p6dFTpMScXSVcBcPYbcj2D1VTSf18d",
  "key20": "3szczTsWWpUPaeFndkNPmJhXP5KZMJdiHUwUK1XfLCL4PL4euWT8wZQ2T1hFYbjpkPTN7tyL2zWwSFqL3DUgmoVr",
  "key21": "4y4quLncHyqR9zEhMi8oPLAavvH1YBeshCmVMU1jX4paztSaXej5VaA5meUPry4BksWifRJ8E9Q6YgDC5sBT16St",
  "key22": "TZcvRAzJ5tW8XvsDwYCchyKEfVCZYWxHuvCorCnAyHHFKAEv4fZaKDLme7nSdCtAKkuCXEjw9nGry9Yz444yBA3",
  "key23": "2SjmX2shRBkbzmSq2faySifuyYM4NrvX5Sc1Pz9JpPQ178iqR1m98G2Hco8i4VdVe1So4UrKgUa2k8e89pjfz4t9",
  "key24": "64Mi21FXwtzFCpaZ9iJftjy4fCr1v18yCFpeeFH1EU67pcDhDZNPkk3UYYiHEPjzFxSzVCcPJtHdoGB5jFuNczEV",
  "key25": "4EpUSUDLbxJXa3UZC2mV3pf9NYaNos7exZMBrDrtXxcmoBMaWmYL3t9rx1QY9Sq2SeWS8ywd5eyR1Rn4Z9HkJjzj",
  "key26": "3gbpanEUKaPCVEcocw5JryxGmggBSHJz9mU1J8tMFefZL3iJkc7d2n96cjq9TqNvHCxt7AizQqDdxwH5ebxv9Z45",
  "key27": "2nn8CsPZcvBd6MsTGsorMcNQ5DFCyyjyYPmSQ6kVH8YTNkyxQFuTBExpf2E4HUrDG6gvB39hn6arYXenzN3MVTPS",
  "key28": "42eegbaTULn2s8EpDvPuGPDGhvU7s2m9BGo7ww4fF1AnRBLHoHpf7c8nR98CuzgVZpoyX1h8mfUr8zZeAhRjCccR",
  "key29": "2jdn9kZpSFy6YXtcuNx1dqfSkWKC1SAG4HJytvfguFc6NczB63B4X3R6au3a1GzSxjg9mPQiTSxrpb5gJ2qZUx7r",
  "key30": "22cuxLZD8bMK5n898xmBmqw4fUow4YPpUfaqARDsFKii6zmoJb28Rd1idqCPAfnby7WfrceLRQBQ4jQsGHSnoXch",
  "key31": "5aRvLGRCs7Huoy4McyriXcLvhZ8oaqvZUxz1XVGjB1yit8DKn94EywqHS59uP2BPwr6QHydujPFYw6CqL7ySm3r",
  "key32": "4VE4dhDFzoZAkERuxnzg91iZxTZaiamWbHokjNFmj21CG16fkhr6GVFgKdbWpKMzaz1oJY7b8dGruiRWSfUXU16k",
  "key33": "2qStwtGYjWUqeG9XfcrgjmDtpZptHNfc9yD5FdrZudLY2kgsfr31QWDeb77V13f8Bfr2Dq4sp5UVNSmPCo4zS8JY",
  "key34": "5UYqfEQpZA55Er8Pv3QcesrEZoAJr1DpA7sbor6RU5CPr14s9quJVy5sYPYWm3yfh319B2HJT7BmySLE6BXQWCNK",
  "key35": "2GmeCXneuAE8xXiKWx7wCB9umeEZheZ2YvNY8knQyJrjfxzqaN9LS5LarRpH4r6PjMoRudYyy5KcrWC4DSZgvth8",
  "key36": "5pMXazKBShUaF9K55BqF8eUGaki1QfJpsvBB9Wm6YAhWCbVBrm5g46eYXH7yfNAXmCg6o755Pw5kLQcsf5GRtGUh",
  "key37": "4NKEKZaP9paMFxoYJstq4gMPpsRKr97geXe582UzMFJcVfZfea7jt5TQHg7FA49cESMhAcivUNkMVAUitSzTb2J5",
  "key38": "3Mqn6W1qkxTGm1GewBMraQ25UpEggo79nbrcowwKer2ZJ29tfCYQ6UqPGxmRbYUQv3ZsUvqHHNM8ctpWVY63oT1C",
  "key39": "iFfv6ToQgwF6K621rZTTr978bmWhb1noJQQ4g1mkFLvXzJ4zBcwNJppCUXkPsfT5EZiMLqXWtQBrHtn3E6VrzZP",
  "key40": "4w3TqAnvggu4WztNYBUj2PzNPCHDhzhrPdzoZBEVLP4D7yFtYJk4SJh2cM3KGpxxhfHtsjohd9dhFzKfKcw1hdtc",
  "key41": "J3RLpQaW6pjvLnPewM2xEvtHTbJSgn6qckKybqd8DuPXZ4vAAEBtJvtkgdBSjnisa5ShiYn6c91WjQN3XKsKFQf",
  "key42": "4J7zrrMsUgXvcHPQ5Pi6cWMJgjwbz3nw8BxBww7dntRLhpife4yvLFd8LKvA49kZHkQw6vVKBSjguQKKQr9xcKBs",
  "key43": "4sauX2cXuncB74y5NuSLhqmDEsTp5jQfeRwfAU2J6vNiApYL3vYZvEGXsYasSp9CfrB4nSoJkzHeSDKjET5Eic7U",
  "key44": "3udzVyjayCjBL658eLwRY6MFK1GoYw1obv3SKVeWPPEW8MpCnBthjpVLa8HbqKgA5cVyWwY59L7bB5Jb1mwaP6tZ",
  "key45": "2Bbydrn66GirwjcPNnZVrmDxXKeKfdFnqqJHkvg6HsShpxTuHDuS3BjcLui7mgExmZDrPVd3H8Hnu9oYyasSsyLR",
  "key46": "k9DiDyvKFDBuWkwQZhPkfx4chxKWHmqbkoEcLuFZrooDjprNxwChhwWwyTAzxaR8k5yxjwUZ7RvFqFod5vxYHLS"
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

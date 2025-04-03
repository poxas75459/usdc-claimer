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
    "46o4nyzC8Mo4SJmd2HELnz6TMqHYreokSjvj6F63vCEEMUckMtFepyVLmH7doBML5puf5Mk7nMTAvdZYzjopYNta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUFHAysArLs4nWhnroUu9bb3nWtBjQRpQqZnUZmBoVhzdtWTUYKLkXtma1igYDNwpc7HGfw9H2hoGw4Xy9L5Ufn",
  "key1": "31grr8XfrzhLMdGurUWZPJmobJVfdm5Y2mo2EkNWet1zdYvjv76t9fN6EuUWtShkWhGcH9HoZsLNuzBPY4bqmRah",
  "key2": "4V5ftYPvr8VZ4Nrfz89KZ7v6FwDFH7rfQ2pzTH3dMirZ3tCyoTctWqx7M8E3deHm38NN9XCmhzPwH2kG2vMHq49K",
  "key3": "2rkhoqCg1XWxb2QsRGEAngL3AsFPuhKVbdu6vFV4fks2wYP8frsRrktxkCwmKAXJvrJi8h84ZhpjSR6WT5SmmemR",
  "key4": "2g5VD2stZUi2w2FqDLtsKdZhiBGLMoDwFEuDotQNo6JKrdqAxt6kDh5pXAEUgaRSAKqEaWnq6Qauxb5YF35zBwxh",
  "key5": "3Rawk21oMpjqeqa2qjschNVMhX8fh6HuiPvVitkxjZzJ4hGh8UPgkE44jUzF2t5fKAuevLGPgYX5EcfEQ4W9GQWX",
  "key6": "1mD9UEqaDnRsdKghHKXXR6AUuv36VyDciYmWh9Qfhug5chaTSfaXXmPunvuN3QkvpRStV5pBkeUmR6PM3CpaZNb",
  "key7": "5rG9jbvmdPvVmFMHwGqFS84Zxm1AMwWLtQyy3bbsRxQnsvNye5rsGWmXaib351oaA2ckBeU1WD1zEWb1ztRvPtDD",
  "key8": "2WTH5NWTZTnEr8EyKU46hHQeomL2BuGPTsGuphTj9KXnSgKvXP9i79jX8jm1tinfrrdQw2NgxuSBPBnHdRoiBhPd",
  "key9": "4U9LJ5NrM92uTU1wccxMx1xuVSC4vVhHyTrHiqk7hzBgDZJC9xfi7byG5NcJGwjBpYeCsUH1kjt5AfiaqoAju34i",
  "key10": "3Mr51Qp8W7PRxRex4t6EmPev7n7ipYHphjss4fQFJhwmfAjBd47YV9JBXU5MmnR8UGumJNtcG1FGgmQ553H6P7nb",
  "key11": "4ye4bMPgkixotVkyrtXQAAqnJo2qdrFaVMvU535WwYyifFQGLBJkJt5CGJgtetdhH1sMYEU4YQKxJ7ckRTzW33SG",
  "key12": "34GkwuGHFgtTUTkTmQof7WQ9S55EgaMhPsxMd5AJPWDMS2VkLuvue41UUnrBwtaKnYiQUAjFs3SsbzxUtYSivVTf",
  "key13": "3tAkkCKB4iHHG1xTRBFHG1uQHdD22iWzkx2fDs1vKFa3VDGc25LzJTSCNc3usmQXBy5CtDdpGgoZmxWDs5gdD1HK",
  "key14": "3LpADg3H6zEvcNrvzDJHfsPhKuYdzSMqCJF3TH9v7szYp7rBoCdAAgkbkSwB3CzcXpt5QHusaZYZDYW233D5KVQf",
  "key15": "2BKWburRyvoTRdomXB5YopFZ15vuV9Vgcyaao6So9BaLxHPq7vkXR5f9QpsLtoCC1PFVbRBo61wg3BQaPfYAf76W",
  "key16": "3A9LwjjEk8apmfLxTmNpcjY5G3APFmootoAKWpavQZyML8wv3tZG9uMhPunAfiXrk66jJxof2jKLYZm4mykhSaP1",
  "key17": "2hS7oMHckKbsZi6mnUGArZTGJ6FXfdETSh8bMYYBSzXABRgG3W9crbQBXQTRY4ZY8ZaFKh7zmvoJpXC7FMgyZq8k",
  "key18": "51BPEXSbST1w4gHn7qEvD5FWHEqLBveThbJNqR1qBwoNQ57ist2uiPwFoDbdpv3aLm6jjP87MQ6gUCQMv75xEG21",
  "key19": "4KUaGoynfbnPnxNm7hfGDH1F9Y4HTYqgir4mref9h5Y97L9QzgtyBWePbVGuFgmViRfWqeod42AAkW9fLiZr9peq",
  "key20": "4hvFcJnfGPjutksTzeKtpK3K1GP8dmBLTXP8VLuYU1A9e9Kgb8B8j3zDHC4Q2c6nLPGG5QxTdUqchnsWUC2hgwqd",
  "key21": "hKc6j3fNdVKA8ESp1nXwrG1pQVxZVneas7HEuchGNEDvvz79A9mZBQGZEfoeyzVwY4NdNXYyBt6Woh1iA5qmbLb",
  "key22": "3jmQULMJs7xE6KKTbAgNkAub6jk54HxdwxEZZAAQtigshTfzAds7eakmQohLjfFof4NUUZ5HdjRo3wa9m5JNLg7G",
  "key23": "RyKhobj335dtbcM7zC35QAXziYGLwJXd21vzPjWzo3bpQsaYmvQYEAkvuHkETR16QZEKV45BFCo2sx6L2tXrNWS",
  "key24": "3zzi7YZrJ6phq84iU6qkiGFibN595MpFtZ32GRFT5556T6F5w9H5mUDktSqwQi8VFET7EdHSXXqKRcQNKN41RJeK",
  "key25": "3ref8UVqko2m6DGsm6PSLkkheBS3uLPvaYCuKL9RbYKRtzYP6dKAfzf1rYM3wCEseUTj4e9bvFeanuiSJiGJ46wH",
  "key26": "4bTaNE1XyYkKTa1fiW8VVke1F8DbgdvaLTackoTT1arz29bjohwiykSwKVNZHgXcPNAzj7gyHJrunq6cnRMYQxfL",
  "key27": "4WpD11KqitKmpuVUgwKnDjRBbwG3URNWcf814tXM2gtvJLycKLMCW24z5CjKAjKSrz2is33w6Zy1rBG6bATtxziD",
  "key28": "FMbEKpCkGxRnA81fmSMoF3CkTfKz4HiqxzJgSYm1yCT2p9ezyhe8G1ivRR1atN5EfMme4a5mgksfM6fE1hfbxS9",
  "key29": "4P4LfXtNtGMhejdnEskoZdjxvcoyXbUHw8mKNSZ2fj766TKPH2ikifKs3i3KeNzsZQoKjjkG6Yqx7rQUw4QcHtmN",
  "key30": "3qSGHs3DKeJwFjcMpiEdEZZMAw2yyquvvtWH5fLNYyzkvnwHEbhnoazAq8gheoeQE815Gf4ktU1fN2tV52mSk9mN",
  "key31": "3dfw68nCedhXQE3JiVWaDZcByrh3yVFJAh3iDSMfcsP2LgQuJKu9gr6wqeXHpvihFSrSi1xMgQv1BWPMw9YPFEqn",
  "key32": "29LffQz7oYRXFDv47GctuGv9vpHt6qkrdpQzPJpQcr4UaNJuRPnw5vK3UoLSfRb1kHrHK2YqJQaTkHU14bmPh2Wt",
  "key33": "3P5YcdoUpjQjqkuLXkRy6roHh7JCtazWhHbUhiHTinteS3aXogPVx3rwBsxfAxbP69WrEHcPweZDSreGzRZ7WM7c",
  "key34": "5quYoLkJjfvX9yJT5Ggz3yyEBSaEBrkvRAAKabLuWd5TYFfqfmuB1KVTa78F2S7qnSYg34HBKZ7VVPWMpUsYGUKb",
  "key35": "d1p8hb3JTR6U51aUx9kuhPewTiGp2i3eYZQ8hdjUSx7HizgV5o4ZFQrrWzzjDrn8EEm6VyoJ8oxYoPJxWTNwDRX",
  "key36": "4c34nsHANQJFXkw2Hi97irQKj4GwzH92w4m7aCAckznKaT1JwnPhVbjXfGxJ6MZrd1Lf4spUEduDAypDAHNfhjWm",
  "key37": "4z452cu2tCABh1opniLas4W4qSv6ipBg9NjXcoFHGXXyQDe9WN2JUMc1P1d7FGVEK7eLGKLaxsvcHMT7uEHkML5k",
  "key38": "bxAwaujH1KMsn9anjTMFEbUpk6r5xGMdjfXN961RSa7pw9HTjdhKFbtiKEghsDDZL6pNdbhHNXxKj5ntLMgN3Kb",
  "key39": "3HaaDkx3Yb3K1898AwgqVKGCvFhC5YPtFvKShDtZvT6Rq4nij5wb8zsXuqVFkjULM2jA5SB5zAoiMiyDab6iQmKQ",
  "key40": "49x8GtmWiC2RCebcedBUCmwCp23q9W6mcKa2u3ycq6zFtKzRWvyG4MyWBq6rvmyxoPbJsD7vR9Kb6dJv6ziKqZGk",
  "key41": "d82Sb3hdwydZJq9rT8YxNo8LAiiCyiYBK19kcgXEDPCHHrbNXzFKq8pgMcKEVdZ3HAxsrsQPS4aYGK2H5CynAzW",
  "key42": "5zvyzbECBfLU5YujpEYuN7RFhLoWAd4Bs3e7E7h96vUuWx9DMhbqAPS8pdLmMyvAS7mF6iJfYM1eb3tBQDZzWi5K",
  "key43": "2ZcpdfWCHjtXVVSSBQ46xSJGbAXFkKQVceCsPnu3pogmpjgkLog88ufYDETPshyKtdyddCnKryaiRLWmzhpBYAZM",
  "key44": "2MUYuvTWm2dreD9KWYHsVNtAGUzPBMARmu7yS3m8b5Ln7HxLfJahsBuRMy3BnF4y2XeABVvMPccMp1S2EqVnz4Mc",
  "key45": "3q2prGnYzd24LKzRYRPXoeJrajd37Ziokhe8AbvkJ6AaPJiX1AZY76qFbTUSqY5qyDippme3JMeypZKkyUazMh3Z",
  "key46": "55e6CTrxqkzJKkbXP2J9PL8SMteasyR9mhV2t5Z2PbVxEFVi2PsR8SC83DiMdnR7vtkVZvHcbiyi5gn85u6znjcS",
  "key47": "4E36EdbgbNgg1VjNt9mCJgp6G3p7ZUHZg7rxbvrg9f5eyLa8gEgCVeuPHdrL7PqyHBvv6TaGXmejwtCTygQ7sVEf",
  "key48": "3MkPYMXKcH4ack6bU61Be5TfugcS9eMmhGoV8UKanZhCJEDCcVaFx3FTWBUXoraQbUxgUQHSjJ1nKGYprQr4enfz",
  "key49": "2SPdZt8whYsWrX37MHHqotvZiBz5FRHSWX7uPkzWEzj4FZa2iBsdWeusP3GeC7dWWDepyKcomz9QmEGmvvotRLM2"
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

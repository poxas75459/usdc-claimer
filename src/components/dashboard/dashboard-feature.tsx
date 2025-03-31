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
    "5ywF1WLoC9Pr2SHHSCJC6i3bpAupgMyU9pY4zMza6m7krGWwrp3vErNM9p2LmgTLY18ZWWuAGBS2jwwRvJuxzhwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rf7Synhmzy68U6ryDBtuo6ypBZzsgEPiUJMsq9J2HefBPbyv1U5iF5iffvLry5i8fuMRBXZGMQiM5qazRtL3RK8",
  "key1": "4rhGhFBwhBdCrsS1ZLZYHwWL4uh2fAAvG2XAzt4JzoJNmHSZaVMRMFg3xyhLnmgaUvtJAZzwo9fUHA2vCKaaUGRh",
  "key2": "2ABadEKpAF5Xqngqo8GT3CeRM2VtKZBiuS2zLabn6RNwmQ3woE84wMwMzYnhkLJGQCmbBLcMLkdg1kkrmgSPSxGh",
  "key3": "4s4HFQksf6jDGMcNC2JrUS6N48D1VdMf4kux7c2tnCSqrfHCsn5FXwj79BFGAG4nTs411U1eF7ZBLoX3k8T3QvQA",
  "key4": "56M8bQ6EAqn3GdSJkG9uwBoh8LUSSsSfxL8P7Zp3NLXhggqDH512bvB1qcKSBpEob2wcKrt83jnYT3DrE7K45V1Y",
  "key5": "urfk92NM95UfTtjT2gU7uUjzG67M5z4VLpQugqLixAzv637x31ALKHfFEozw9bBmzjUdBhR3FekW4t9rTxVchrH",
  "key6": "3eFxSFj5BYm3T8Pt2rVYvCMu3zvhxnNZe9Lwj4qMyS6Pd7GURRZwi3xXa41s9vVrDm7MecCwgoGMECa5RdEXtvxL",
  "key7": "5msznYotD63oKN4Qz48TPHJZVruNXgwz1GVEbPNjd2s48SFkaND2aBDNxFTCRcnr3b2mntzYXnRbE23fjDC611QB",
  "key8": "5hTTa1biuMkdpTQr7kYvbVgsDq2RtMJhdv1Z4XfFo8ZXfujU1BNSfZ6FKh4WuySJcqcLWU9T2v1WCEb2ArJLXVAv",
  "key9": "4RoEUJVmzZxJwNShdHSM3bGQtY1yQFXyDTzaFsXFvCUmpb65955oNxvt5T9u9MgZ6BAgJvJm6w2ogTzPBANUPk5A",
  "key10": "4YB8p6rZ3Kf419Nhk6tfbwPqam559QLHZAbP5mSi1LgttkfXnxjbHf8eVctuQDEhPLo7HEdBJtJKoKSD4ptW3Ggu",
  "key11": "XQ22RdAR6bjKETnQ52DhvJo5wbhwQZrPsZuZiQe3uAqgtYdwWPpiqu1jXgWH5MH9ZRTkmbyGMF5jcoy7jBh67Mg",
  "key12": "24bAUeYc2rV12nAmXUaXg3GvQ4NF9x4RLsYuAia4SyamHeVuGp6hoJbL2bawYYKXA97yVXHr4GoNCNrdu4h6RAEs",
  "key13": "4fxaEXZ9ooWZEf487DMT7jTP3JZveeZDbRrTmnYejUP7ciq8DWEtpmcHB1jvwDYZHHAsF3aYiT3djAA3Q3QaGTKg",
  "key14": "2T9VokhrtpXhE34oVirsdmFFpfWJHhS1eB5d7amVgoUHz5BBbamuJuXUMJPs38S6pvjuTHwFNqg8JtwpqQ2NzhAA",
  "key15": "P3Avj5NTKfC9gD7Z4ue32xmNvQvahb2NfFJtU2QCZ4JRZheHGtfoXVj55bjaJYq3gG1RYod2ckA6Z7Xtaa5GQZ3",
  "key16": "3SdVxoHR6AN6oWRVnEs8m3eVDJ5YWHmsNPPt8LARb2bKmdZM5maLkwXM2483zcjtzUXwsTVZkrZJvFdnqyQzGCyU",
  "key17": "5LWmKqALqzG21sXCdGSQ2NFP8qSyQZoCNpW6RYh5scbk4Q7rSEAk5CXQjdLukGgbZE7C3C4akEzRKP618A5ZaPoL",
  "key18": "56nnUt3KZbuBkrLCnsDVv1EGnWLFM24pH2ssgrAgAphQcA8dQuZgkx6MQaMHsz1W3GjWqEgmhm7fdcq2jRDsqF1Y",
  "key19": "3XEcofHeoLaoofTCLTKBmLjGGKZ6zYoEAuHYSV8cJZcjzXYnxgywiZzKnWQptPWtf3JpC5sDSR588wbAa8mdZE5e",
  "key20": "5vBpqisFunBnUUToPX6Dbhgphemi2NBuv66pb39g2r1zyhLcoK7rqd4veEu9RkzUod688CKdyWZW68NRKiQqYK4t",
  "key21": "46q1JioMFvGUmR2squaZHK8AJdrY2qyBP3TkLUrzupiWkf9upXPoB2dFMatqXoi3jzsgJLrrQn95kUnSAj44GB4P",
  "key22": "25Ww4ZoDfzdSEKcztPx1sUu2RnwWHCWAfvaQJQpV4sLfhN2RfdV8widtR2NN9rBN1hJoqgQPNa6wPbfEZrVi2SHg",
  "key23": "aJT4avxspQGsPvt9TnVMiTbvMr7ueqZG3FiYWMA3rhpf9gU1g1gvFR9p2MyXBrsRWJySesx3zTvaYZsBpgf9Xyq",
  "key24": "3XZXvg8ncKZs9sGzThzJvFKWccioascRJx2syDixpaKjXuA9D9Ei3HArczoiWvYQtNQtQ5HTaqo8dfdwuuEcPz4v",
  "key25": "2ayWzt7jo926ThYAeHhHLjG4JAicnkAeBLRWWT3HaidGTzDpPkPq3TfKonMrx9Axcf3zPkL8keDry76jU8y8AGfG",
  "key26": "dhMHh1zJz4dTDsLkeN51FPzjNW55juyVfL162buo8rKPwnD1uggGGxVtSKS7YyiG8DrCiWqi4yVhJUHeHkq4zMe",
  "key27": "5k9Z72eHVmwL6pgrq6eL85dRMWniDbpaYB2gt36cwaqce9pBiBb28PmAnMVZGSzNKtBbzLsTzXHfzbMoKkDGkGSG",
  "key28": "aQHUv2wf7ZfKYEj8e1i54aitEHss9rEho5nfPTG6tEksmiXx5iKhwhWrE4s7rV5P5UgzXjx82KB4L2gYLGMXjDz",
  "key29": "4y22FHxV4hFTXPQdcNva8b7qW1cLdJHRjapJxxYpbJjpwNybgJo66TTapHuUpFGxELf7tyD8RiHy8VqPwpJYUzUS",
  "key30": "54uKefx2anDb3wo6pujHAEyotnvgUyusNVFTikv8CqFNT3mFW9SebMWDfXtWW1mpHGzaTFcv9UYKRWVvvtS9Sdqr",
  "key31": "3rw6CiDgs15pJxVWjKiZMaUt4LeNDaoqergbkoEZk2VLfkq5aQNj1YuYHkt1Uvj4yqickn6MD5X9WGmZsVWytVc3",
  "key32": "2EPTqk7qwopxVHwGxqNKpwovtjpboeDXmSmzX2FpVRypZ2A5z9sDsnfn5eZT9VkAyWzvPojsoFxvawKzzmACfKqv",
  "key33": "2LBpkZhVEDW2qnHaQSSJZpWoCREqKGjhRBvwQ3Ymt5JqmiKQ1hHZNE8XPSWAopudNTkKAoPBYBdyeEtZRcVRNc88",
  "key34": "UTavnmWWNHE3DUFPzBApixpS4FBZLqryy6eLbVV54E3uHsiiAjnALaMgbLB4KuGE1WXu8uoHvghvUxnRR3jPWhb",
  "key35": "2mCBZM7KtPdzr6ZamRaxt39GAmUhVfD6A5LTLKcYw9PZSSJJf2fi7TVuf3Bh5bifEF9ag3wh7HruEnNCxYGKzbXP",
  "key36": "4EHxR9zA1xxBeXA7QvzBUZfrujmDP8BUFy1tStHXQVUApJgEeLLdijmpikHo4WpiTzipex1tbcScARrgYSDebEuY",
  "key37": "2tWXX5hpcQAsGJZ1Nqz5ANCxJUb3S5PC3tTqjtmXa1CpmSFiHSLayCm3aViwLyAc9eTf5dqeXFrCDqYNAQPZL7BL",
  "key38": "5tmePXNWjE2yxzUkqrYUBy4MaaC8TbhPpsaAswJsySm3h8GUuBPZCBmohp3mWL9CAnY7Du4xjNsdTc1PBZ1KMGTy",
  "key39": "69tuRtC2cyGf9fsfBWenbbkZfwhGBx65MNUrNViubkoaTNhPcgobEEduLCQY8gLFYrym3iQ7UVm7Qd1XA7Fn2XY",
  "key40": "5WMNZT5o21zH1Zuk8mRcaTZJ8H3uP8j6in3YjMsbWVLB32Ppk3mumr6fbuCmpYMr5cfERnmSPYKhtuYLkwzkkUy9",
  "key41": "4yeKPRUiZJv2V9aaVcnEytg94W9puVm1sM1kE49PNTGGaGSCU6KVJN16cK1ncv6vD3rzbbUjjTLMTrVcE8fcYB34",
  "key42": "4MMezyQCzCpbGkPCNy5QaH48uNtw6eM5mGNdVgGDkT3JnN4Gc4cXW7Z1PsyjLVKze4n9Tp2Nwr3mmzsixKq95toX",
  "key43": "51psaCKkSWY8D6EfiynoQfkWa2iWPGKi2Aq1Dv4GtAi79mZKuMUjqrKMuEsSVdnSfRKAESr21rLxHco9BmG6qHrQ",
  "key44": "mSeMhzXfqTGsh9YAmYFfc72Hy9ieUNrKjNoHVncm4HoKRS9bPUwuVTWPKvDN8dFuB2WA6KXnWkWvYr5eqE9xQte",
  "key45": "4itKN4ysFp23UfeuhY4wsWVwA8ceCLujaohhim1MQ2EZi2sLrz5EBx9avMnMZ9iKig7vYPQ1LGMz9byykNkTwcp8",
  "key46": "3xSi7DpCbzJTQR98HyFTiPHsRnunHrFx6CSgL79FoYbkjuix8sDRMSvbKjxgHAqxqiJhWmpgW6DEjwRYH2YprpEg",
  "key47": "W3h499VmqzrJ7kCBJcSqGQhGgbvVdggQGKrPw3Z8M9QiHiTXXcaDvbTue6HgGJ917bS1ghsSSrSf5CqQacQHv9i",
  "key48": "33XTqhEgTWcsRtmq3kmA5HRXhqjoaaj1eDdKE6SVXC8oXMrcRb36CBrWM8geXMHjXnn6C7P3nYH1MugD9Y96NyNd",
  "key49": "388XKZcmXSRircyoAWXfSMecoKF6xFFpwMZj1Bs7qxv2nnAf7p9NV5sVE6Hatnwzt4X5gvT9PC2ucVoCFcLJ7GXr"
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

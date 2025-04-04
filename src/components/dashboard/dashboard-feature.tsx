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
    "61KPadAiELVRT1b4dyzVV3Wmm3SkdmdyYShDAEUEpr2Jd2TT8FkLgGfsZnib9vayWkpSd6v7gXpcJ87wFmEHLDL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HePXDwKVs3XThEXnr1RMKH6GAQviCJ8VGjaktEjYQPtPzYAgVpYm4LAvqtP5LhHz8AiKxkfqHRW2EhbfjxrsP6u",
  "key1": "4P9zvPmA71m3m8QjYao5sWaKS97hcjqr2MynZ7UHBGh75xQXGb4fmgESrMVgNE9n8r2neRQkL8urVYdnQ6w3GQRJ",
  "key2": "28ENx9JfgcULoSbqktMdRBD8X7R4qnag7Hg4xbAvA7TSJgNYyNpBFgPmxvLvMbbssgMB9kKCKqNkANeHqvS1Lntb",
  "key3": "3nuqWzURWcx8bue8bGwNMsbxeCZtHk64kr9Y9kqWdynVnZnVN7LQEbDjxVeBxoQxPnEYdbA3JC9asJL6DjWD3hKc",
  "key4": "3SzG4gbQ4TWWT4TAVx1RpaRLAtUP4esSCV9oXWXk51nptmRSY2QuDwHyjdvD1rKaXhf5y97Z3qh67zr8YRi4RCdk",
  "key5": "5SDutMctKAzVun965LMtMxZRNCPEpxrxwxYRmShoUEYqGwgBod8vY9pM3EvBtyYztpr2cehkrCr6aKTpRobNu6fj",
  "key6": "4pop2fL3nbAwtf8KNG4LBcFua4nWDqki5wxGN9yYBKTauJwA1qSpzio6zHu7BGktCt9uUvrKrngpc919nmHWebZA",
  "key7": "4vxfuCwsL8U64w945e136hDaK5Vs1GE9J2zmCHNFLajgz95DyEcVbCLpunJMwhopjMSrp7EsUwMcufpbfoAFtDTU",
  "key8": "5BxZ5TwZT2zBqm9G8i8UqLzSJXRmNyYSjX8AX4xdJGKF1WyKrcMax3uNRejZ8PxeRTNRLkyY5B3exTZTcvGyRQS9",
  "key9": "sHTAMPtwAbA8WNypmAuD1iJLSbpRmvxjxzugn5TQvyLGaAcmoVAByGEJu2VT5Pfjxyf1gH8CAcrbxJ5UJT2cvEv",
  "key10": "38xniS1k3VCT2TZmJBuy7SdoR1dB3UqxbkiF84qburmzQC8JVFy5Z79P8pZwW8c5v68NspSmLoZkPAH4S6ugrPnM",
  "key11": "49nAP4VLq3QvVCCPUKVRP462AXnSsyQj2ySHzmLnCkyfU7Ki1AyCTFzzNXJjTVkg4NsFNRH8W4WkC21XkaNmJzio",
  "key12": "29LywWf5uMKFQbPhb1GfvgPeC28t4dUmLtKLuAemSjtZQBs8GevzhU5zfRm92PfU1qcvxxzTQjRs8FS7h1Kf4UxX",
  "key13": "2wJEy9Suq3m9BRhWVXSNEkUAHqUf2vchdZa7DWHRQwmEkAm4qDAkz7YPidYPocuPjdkoEcBV3tWgoatRiFdytjnC",
  "key14": "3tco1xFL97sjXoB8quR2gPXp2YToYt2sLQ4qTskaZfCVyR1QuQX5UMR7Cirg5tugTQhDGrspsfQULmkjzZXEfkba",
  "key15": "5tmM6Cv5XCa19NodahC4op8ZaLTpuEmDBuodcJ4ZGWCwSvcEkoMkeYwC6QeJDM9W5PNeBp8NbQoJx2BZKEPFcmRv",
  "key16": "HE1PT8BLvHQfx9rBm33SY6z9LsHEpXz9oAQEK1Ei3Mxcjzg94AEvBhS7uzcrYWytmQbJTtR7WsHZAinDJ62Bhim",
  "key17": "4b5aExg3ubE8b9vg4mFz3wJC6BqDNMP6MHiABVjJ3YzRougdsR4JRWwvGRMcs6WWLkWorMmEPiYmXdSFqx86dUBH",
  "key18": "3ppcc76NG1B4SKid2T1YRJdDYWMUgt5i3sFEZjo8WPJstXXY2N3WMYtvZCYwDGX6mJR9rj6VLrDpptK3gZN21RdV",
  "key19": "3Nn7fScrBK1ycn2jFapjhNfMgWTZDq8NY51t7zBqH64rKRjKrvaWH1bZ3U6PYxxJD2S1oxBEkL7gmtaex1pm6sYJ",
  "key20": "2dEHu7SA3QFi9czrZQBvYA171fAdjzmNZC9DvLLgGZSpDC7Ws7dPuWqSvEH2SHECt5z62MoAnr9cxCbdJjnHtCo7",
  "key21": "4zmAuxpvRLfRYCZCr2tYM9roNTRznUxa3EnRfrej2ooJtqHLaZggympSjRX4Dziopm7qp8p7FTpzAWudPtjiSKgr",
  "key22": "5kTFKJbw2BjfAKJc9AZaBNkyW5qhZqjkQGPYVFibMhG6ruzQew6Db7MFNFSfNbkxSDNegTS9JMiaJjeMgGjK7WeQ",
  "key23": "2y5penVAF6MFG7U3ieysweNFVmcbT96JJuQVcxeAKT3jkyxDk22yj5DDGpoudtQaY53RNASTMnvYJ5QaGYqwcyjk",
  "key24": "3hn5vfTmV9CYRDjtRWV2P6Utx6X5rZ1bisEMAqHJQzKtzVJQQssEtok3UJixS8Aqdky3pazCR1pTUrxWsqtZgzNc",
  "key25": "2fcPymhfEhd1K4NLPUQdKbhkQDEm58aqY4VrPckyv1CYqpkRUBf9uqo9usQBXsKVCkHNKZdWfa4fFXumhNL7FwTh",
  "key26": "bVqopH9jiAwjiMM2mNc5GnfEkmm1WUAmcZkLnm3Lwpad8PcYRAPfNtoPWLyc1VQCmxifjX3WYHM91ZZreTYQuAH",
  "key27": "QaPM5bkLmD6XQRuB7oXXE1xgZkbNqQJ7wtaNahASM8XLCYsnNXctSG1gu6zbBrtbj5Cnvurp7uTiwQFumuRRYCZ",
  "key28": "2TNBGsMj6LLAa4ubr5ctnXoDP1FZxunxhQNZKnH8hsRv6KvkwrQzw5fevuQQsA9xbvUz33QKZMXBC1tsbZZJA2x8",
  "key29": "3XR3YoGEkHpbycqAorYxrEMwX4DtAq3bcziZ6i1v85AJwn7nhig7ZuxG1T6u9hGat5EgMgQkouoCCxph525W3Jrg",
  "key30": "25FvVzRayYgUVi2xaYt8kbTQuZczCy7CyrzT22UkBHUyAKSfmY5uU39tvVLMyqhcv1dddiqUzvoa62abkUNLP3LA",
  "key31": "4S7kELeAQNXZmdnnLTLruA6YXjrqvE9L6D6gzusxWSZtKxLDvvGXXsLqVVfsSKuN9wjtkN5nzEcU1yTL6APjioLe",
  "key32": "4h9uQ8Vhj7R5cPZpqVSe6JfDewP7QCSG7ALzGWXEqjrHZMbrHFYYN9395Fk1So9Q7pvqATFPawtqkeuf5qJV3kXo",
  "key33": "4RLnVd1nhd1bmt5mw6gstXJ2YJHHDLyoCqDjpvwaxNQFJqokpDmhTGWLFpYJo1UR2xVMPLiLzVEPdk6EDHXcqGn2",
  "key34": "dkYgLLZm32nq7Lko2JPX5T4dekMKfmLcHYHgqZehokuggtB3LKyZ9QprRNUVjuKdTqPzPxKyHqCBzwfrSHs8PXs",
  "key35": "3ScLKe1cmjLqXCXxJzNoVomQcb7NBnDfqyHvzpv9Tfgekb7UZNypwPq5TgxzM6aQha19KNDpWzn5kbVjd5YLJeZu",
  "key36": "kzcZcRdHEPGajEJJwBYV5HXx1fw9dYvZbK81aCNwUqw6hL4rfb3i9SqxkJZhtbDpKXiBCFTYYrq9mXHNwv6UFiR",
  "key37": "58g9vq74kv1RKM1CKufZMdumzqEmtm6UYnorpAjTEVBQrfgoEoqJZv7EVxvQkXfnijQGHYw5ZGxSPLSmDUqnK4DG",
  "key38": "5Xa81kAavq56u63eTGE3y8235e4BU3Kt4ENLhBFUpQGuAGGWXUQMs91dJhf52UW6BTMjLdZ5WzyrCox9qyDJVebo",
  "key39": "4z94qjpRxWPzuMpQ99rs5krbgv21eAuezhyMrpaTfLqpsqLBucQrH7toRGc5kciaAjKU57cTr7aoVNXYsD92KtPv"
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

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
    "2PvDoK3tWvfBwAsGdE9CsXRonEbED4qdvdaHWenLiesiXLvwx7ThPvEwTW3Jgup4UhhHKF5e3YVfuWoYG8FG9pv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eoaXhnk24voETpgHwWY2Kgi9PRbLHvKPtM8kX5SDyEjp5jkiCe8n9effWjRKW5s1MitYpywrJXedvyyRKEDqs8H",
  "key1": "nV8oJnWfR2Bd2oxyywJ7gzwpmGvKp7qBfczq2wSt65MrD5m2Mxyso6i1LfAe9U3PCpCUQrCkxTsNxdx4XCmpYm5",
  "key2": "5BKzvaheVrfhFA6wQokzgEmZKtvNAVMtgsVkzQVAWuYqgWEUsg18qe6owiu56pKzqziNUanx8TvjwtNkjLJkMyGt",
  "key3": "5ZptFFYvx3G2DX2hqcSdqFCLV5t3uQAHS2rg4HWcJxkGZeAfiKFNpBLfNkFYXF3WvD57CC84vCbBUcykbCFszwyA",
  "key4": "23hz98F43Eda9F88bgvpYfqozFKWpLHwsjLv6Ac8RkLR61vyWcy1L5a3HLN768Y8MzqhWM4xEDoXegHytif5FVzA",
  "key5": "4hb4PfyEvKrD72vXPsz1NQ5c9BvuMcTjdj1SVYDixpsgqPZ9wksdQWHmtdzVuQfVSkpqvzTWog2AkUYoBLPXh3EP",
  "key6": "5WxEvUx8jBVxFNMW2dWFRHvu3XUJod8z184cDzuN5LGK3g8GR3MVc1bWK5QkBjZccYvR6TRFHmAq7BX2WE7rhdtb",
  "key7": "5k3WBKY7d9d2jLoP5mjaFDtXsa9BF9sEi3Q9iCitAWiTxSaoTPiR2uz5AE3vWGCqwPo9HZbHrfpCcunhWcxxw9MC",
  "key8": "4M6wgFHuvrXCUE4vP8tFYQvHLJvUwthKRRmLk12kND7yayDcqu6b8aAP3Bt2Nsw8nCm2KSHXH6E6eaxQZ4bCrBX1",
  "key9": "3nFk13fS8GqmZY7gsxxdmd18T26PHBXBV6zErSzWLePfM9j2bFJhBDTkeNP6WEGBaL1Ef38ehkiZ472E1MSEGzVa",
  "key10": "5g4sahcCN85TgD9LuafSjsqXcVzqcWHyBE74bs6NHqKf2NtDbTGD24CkhKx73xCivtCzD6ig2VM7W1cwnFJdSQj7",
  "key11": "2N4zAeKMEd65HHE4G9DNVvKiYWBHFHDzeU5mW2nvE1ia5o4LYoM27nEsdKroCg6Tq98fYKmeLSx8eLXh6rCZKrcR",
  "key12": "5uTQNVxDhyKko7DyyWi1LNuYRuueEqWkaxf9gGCayQzDR3ZmRR3KqUjGPrBQwrmUZeAUtrtGCSYiiUWoKQ76eXPw",
  "key13": "4eZV5MsDwcUan3oU8WKqihqTysu3CRbtaABmY7EyVUjWkQzmZWQ7FqwJmKHA8FcnvgFoMqhYcXXN9fCERGMyefJA",
  "key14": "5CYBKbypdkQesJmTY5KufXkhZwNGbxNDmqFYLtuYQU1Xd7KNYJu9uYkA4tAPd7fmDoGe6yiHZw85ZgoqgRUWoLCP",
  "key15": "33BxgVE7fUuNgqtegDkKKmZNH68Xp3AHZWR3JCfcxXMemqWVfH8y5YRts2zSjFb8EdcHbzrSjsiQAYFoLSuV3Jgt",
  "key16": "3bb9sBosfSVta24X35DeJLMZ89WiRGArs1aforkWq3dTtbrSWGperhBbbbaJ3HzyyiGLww6sekTkYeig4LS3uzB6",
  "key17": "62GhkM6YmKvbQEAJTpf1dpVKvZE8KTjvsu7Gc7M7PdHaY2Qog3CW77RNAbc1CMwuX8ms62i6CoQCoCQBeJqENXGK",
  "key18": "3er2avNiFLmFxXLSfEoLTyc8FFXmmgmuJvW25weMmErpsFbwo65XsNnApUWvujGhSAubhEUv8ButqXLYf5TAAPZM",
  "key19": "4GGyeAMZ46TaJ6iEgtJpqfHgbBHDqdZ5EuCc8SMHj6z7KsfV32ot94mBt8uDAgfyowZyLVoh2kqxb62e6ZGhub7a",
  "key20": "3vwj82GVYf7bsypmCgQxKDmWDgS9yyVSEUvpMaGuBzo4dmJCwfY9uVcRJqYKhiHpbzuEe5bDFG1K9uNCo2QoaK6R",
  "key21": "25Ljmbmr8JxjKWNJqdTeHVxrwXNQwikAAvTJMyRZc9vN4jkZVk64BRSVoze3PcBDWq5HVjoBHv9c52kNuSZvshpx",
  "key22": "3ArpugX1BkWia9hw65frT5RyYrsnDA1vgNYGqm8SvR4Ld91b5hTept7SiUhUfnwYMBhVfKj61KhdN5kxqSrH2Cmj",
  "key23": "2ibdKt7KarH53JSg5f1Ff9m3fynh9AMxfoh74NPKMrfx3WCouZyyMs3J4mTcaJ2ZSUvCLjU61iWUCzF6f8ZjGyPm",
  "key24": "2uvGiabeEVom9gde12XbjkJW1WT2ptUYS1NR9tkwg6NCmtzcfyBdTgvJt1UH2ZrcJXxsfwHCt84hi9ydUKvcu9pK",
  "key25": "xhC8fpCq7tyQSW8Gu1MD8fFuB6KHe7wJLxC5Ly92Lu13hEQj7pC51oM9e2bZAn4mKLVZ95pddrBgg5cVvmjhd7E",
  "key26": "4r3jEirMdUH2qXVipMn7vYRbjhN1GjhQyu6ywCoRZ65j3jSS3FnWSTyGoUXFqyMVJsKaTb8dqTCyVFEm1p8dLfVr",
  "key27": "2qU3Vffw3QHte153RdT6oMg1XwnpYXCHPmQBxxZnEB3XKcyFKNSVRgaehkfXJqvCbXkHjAZd8wHVNKxuH8MqfLwF",
  "key28": "2FQj3rm3mcU2q6c297ou8giDxLdLuJyS86bmXZT15K9BvRrqTdn3ZZeTnyHizMHv6v4nFVagSh4QJgpaaNjRxJKG",
  "key29": "5RupHrFf8v4D55WN3ePAphmybbq6uNqRiXrv53hETVyhi6kRs7q4tsMizRCCbnSN1HSG9vSsfRnqbev7qeYVVTfF",
  "key30": "VEWJA6RBwNQLPfcQev37iikpHH2cK73EfMFHL935NtmU4apzYfVHZJnGuoqHdCMRh2PpnH5uH3xJjdn4Nrh7YpC",
  "key31": "3kBL1b69vud98svrqqbRtLzeWjMSzayBsMKpJYDmR5A2VsyS1ZrzWtKY2CY2nS9dDTtmfap56tvbgo4RQhKnrbBg",
  "key32": "3ParGKV9v2KxE1sPMof9c1ePsd9TBijATdCaBzzNCHjUc7hoWSjov1FbEgCTyXBdTRQrTv1a5rbmLqk91wUpCs2s",
  "key33": "2FYRnnxsP4B43KDv32v3Y52ZZZD1eZihrui1EZeWvpxHxTfReu91Xgboh26c1vrutj1PDWGMnfb2UYrdEhWys6xM",
  "key34": "2mnmF83XkoDoY3vWrhczGp6w7u56oeENNdHVDQ7E8R79xG1aFNg26PqC6WJ8WvV1oLLbtGQjxwHCGbH3oGQqGeff",
  "key35": "5Ptd1D3Vfgkfjr9rAyyTDpofShJ4ZTAw7k4nboFhPMUrAUa3LAx2aKfPuhP8Bu7vskBdoRBF4z6mkBt1dgoWyUi5",
  "key36": "3Tt6V1rBdayHB5U974LpncgDSyCWR62UmJRQ9xQrqjPf5hXy4an3K9dgCUeXgFVZ8ptciDCcgxw6EV2p7vcDab2o",
  "key37": "5xCwxkXhVdLZuw7DroP2o9FRJvFSeseAf1FSrFzumE9FEiRktoDJTwKuunnz2uvYVr64oLPMX542kQU7VaZtRhUh",
  "key38": "3Bc8kfgWQUwX6uz6YAgtAHu6xHXTxgLE8Dh6GExvn53Mwwo9PwCrZ5hA4141QDvLo9wm6iHYFGtbDjxQm9TsHWJZ",
  "key39": "3Z8CUdikehqS84ZFpcihs26rfNLjo3gxX4uSsXkYLZQYGH8H8Xehykqx4n2bHQYhiiYyMN2kBbPxQcipjwCwuVaQ",
  "key40": "26sA3cKPMrxoYL9maWSWq448Ynj9sCP8MV6bCaw9ZAaLumiQk9FaBWtDEufWhSwUJsgRmXRxYSXmCxSeScZdNoSz",
  "key41": "2FDG3ff1Tp3N6vizu9pVhSkHezvCvU1rZJohJWuAvKpzKZ6q2GJ71CSAuUpx6VxebkoDQVocHKDnkvUA47X4L8tq",
  "key42": "62G3KnutRSnGaSpdsZKyUCbQ4uSs6xNwW2ZDqcgUsmxwmNhrVRUNVDkWhPPWVefBeh6PTH3LgARmgAEyaPgAAG5f",
  "key43": "3ZAZx9QqkPBqzuvuV8of5xCnh6oGSy59VgZKGhFNsR4fhHt11xCbrULdyeSs5an9hTTXurDmWAxZEF1rJzoGtMkZ",
  "key44": "3Wyx3sCcaDF2R6JgQNSHNHVeD9hiWmqHnSNUkLnebFGTwhF5SWj6V35MzAMLXCNgXM6QnjsRvhkEHdfqhDrn5jvC",
  "key45": "28LZRpwMHMYL38kpRHknEA3vz9ANek8HMhBuHywnqStS6eTbLb7BmccWX7V2m8SaMm3UJ3qQgQi1Gn8ceRkuHSzd",
  "key46": "3XzSyWnfAeX21oZdc217LgMAxNx8zrWtB4CxbbCEbPrx9VL457sMyNQS1Rq68NP4earwwU48HVqg31NWpinKrXEc",
  "key47": "5mXTW2BahwEEyENZNTwLWVwjTBFukheds7CqKA292etTjUTRCgh21Z1bsxQFW6Y4eVTtUWF26vhsk8AtvoLS4xeN",
  "key48": "5dzCGzDiwG9PWYmPraFVE5untNmx9SsXqhmUNkJk1EY8B43xunC6qJTEWKj3UbhPVdUmtoPppeJJVcyUNorg76QQ",
  "key49": "3ho1ECzdXKgap7Vd3p9qzTDrKHuNApdCKRymBMSSxUowFihQ8FcVoEU1ZamQee2bn2qMuJMa331KbJ6YCmkcXJeG"
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

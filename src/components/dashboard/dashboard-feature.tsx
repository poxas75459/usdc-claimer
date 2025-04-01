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
    "Cxt1t8dg3UQVy1AhjvHqZyb3Mzv18qB8FxqwFe9fjzAK8eUkQP4XX96YNkXBdfza1T127JxLxGZdfUBkbnWqeyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mmo7EVjWWU6sQz8cxVpAGG3s5bj42DsGJtQ5RpewuLsx7rYPLSjY5S644vpQ1e1TrsaiACD4dqrjJkhpGyo5rXx",
  "key1": "2XbLETuuvZrQYyzNRPfmDb5CPikzFroDkRvG5N6MqvkGiLPqHPbBb7JbMKcV6hFY2RD2q7Qpghi6GzjM1PYRbkem",
  "key2": "5hPE8c2smWTsRF39qLHKG1s8bD22nURSSjRTJRowUpm5Rzb8MdJNbXABdmTS5BdNUAG9iCR9s6Mekc26AFM5DGy4",
  "key3": "2KGQ7xbGUyiZf5pC8c5sdtsHbpKbUa319Z4Kyf4CGQFDTUiw5qE687ThhMwP8Cq9yBQTZJgnNmuhvb7CkAAhUb1R",
  "key4": "4KS3EqVQxgJAvPELCuLjY8SGnhhVzLkt8wxWG1y5UwmQdqeHkNnocSxVFRtw7fznVdVRMtZUpLhjDwdXDJLLDax6",
  "key5": "5cQS5vspyHRuGfzpfQY6hvbgQ9zJuN4xuMQFrLWE56u7bM3VHo9yCsagkCDt7BYmm41hjhi4LvG8KKp1rnzwSsJC",
  "key6": "5o84qjSXNzMZW9XdfbXN1CSQJJ6bXopfMJUjZuBzyLPB7f7y9VPYb9ZrRJiQkDAwJxzjWHRA95a4N8QFCmzVEXXp",
  "key7": "2PUf9tHTto1d9RtTX2RTN4QEaj75dgFfmBxFHkxdgDt1gHqiKuPSmUsa9voauuEY8oEhpccecBVEnDR9MfFx5UTR",
  "key8": "e37tV4KPUKpf7Way8Tti6dpEqqmoegWvX4RyvBJdjmbPjLZhqLFf7rm9e1AYi8DR3NhwHBoYEKxFa29iTMt12UG",
  "key9": "Bm8G8SKBTtfKDJ3qWWs7MWPTSi8fSy3bbMnEoCDgqv5VqMg7bs3bze2UjRZf7a6FAdTgEFtSAnH2CZ8bxyFXe1h",
  "key10": "4dmgRYvGksaZ7Ye9Xc9EVmArBUt5zbZUPQHsjqkpxM9SGZFE6Acr6KRxW2Y2MvikzmEW45MkFZ2WBemh1XQuF5YE",
  "key11": "5cJvDtbnPseozuwfnLsUDuSBmCuisCC6sBqJ7KHMFtob4GKAh4xenRRxBypdkyYKrFHzxtWUBBQUZMDGVLzTgaKL",
  "key12": "2sEQGqubPYJyhP7JFmPZfYmUXL2iJgAaR3D7882phXv85A8RqGKrfkAiXVhD1EdZDe4YsPrGWtksYoQGFxALHH1J",
  "key13": "3rACeyY8t8yj7bnJbwpnUmtgrpp5qkEEAKn5vjT5SZ9zqSFqdHjpKngy8pHvuRBkMuvNWMpotVmgqKjtDhCuCQf1",
  "key14": "mnjSuet49USATi25iDPvJZXAbEC1EqkFEsAe8c4itdM93UsVSxGMFjhCDLUCJdfUrjrfUDPGQB2NNDKWr6GZVbg",
  "key15": "4Lusa6uvr3PRTaLn8mVE1BDRFB1TomREG19V1q1SrxoW8HPqTyS2uVkHWijKCj9evRUCKR1mrKu7hmJ7SyA6wkQA",
  "key16": "56mb19arEsP2vQ9K1QSpbe7eov6jmCPuTQiE7gtYvgYMZm1z9yrzYkE4FK32vTZVoHn2JSH1ioX6Ptymn55QiLBj",
  "key17": "2pQRgffEaZLimaBD8cixWZtSoa9JRVP6DV6dr6wouWtV1e5vzLLuK1P3b3HfVeXqquCC5hQXCDB33g36NpsjPWKF",
  "key18": "5PAtjGfZ7nMT6X7ts7WauX6yFg68SQuRnMcgUVDyLJy96QMXuZdhh4wSjJWyEUEByakM8KsyqxAToj1oUC6xBvAQ",
  "key19": "2Rd6keG1F7daBL8YzEoPCu253aDXeSmwEzceTLZ1h2dUrhSWzEbNLKFqdFhbVs5x74jTm3J3eqUfxgwc1vBkocEE",
  "key20": "4AL9w4j28hfBoPHJBcFAv4mbVkYZC5NRwpi7FoLJ1oxSqmRbDREwXHrtkz9yxmMdfw79ftnBc6npuWKZ9euye7E9",
  "key21": "GnU31b4mKMtmY1iNmGSipNT4ZxLz3qTXa5pJ8wQEsUQ4Vy5YZdFXnk87wmnjwQGRmcwbqP8KpVy7Wqyz3DT2Uzu",
  "key22": "4kTVgoDoCDo2LwtCz5DwFujbqzMxgwKqrLayc1DUvYJu6MQeBHET57KW99wobJhDmfAmp5SzZ2CpzR3ZPv5G4Pnz",
  "key23": "52yu2KvjqJwG1Ewi91aETU7m4umhFxuAsoK5fMiPRrYfMKuJF431crtX7NMdVL8iFWqdbHXme7Posr1R4HZdZpfJ",
  "key24": "3CqP9gRChNmPiw6Q718h1bjwRiz9LeWHi1cUbPWCt4Y8juGnGREMUYGLS23SY7dfYpvFHcBc3hTveKLokwqbFUc1",
  "key25": "4xkUoJcFYkqJmKQyKYNf5juF3ZxNrZzw488xRx5QBZw35kgn1fVyGLmQ8Dm3UTSKyXkygS5n74qRCA8szfkjZXv1",
  "key26": "65V13HrDT1AimirqVgaSPcLsj8BT9baCZibC5fgGY2iFvC6sgcDZZrgf4eafQ2ZtucCCLnFznxRybr6YvC6bkj8j",
  "key27": "4tyFCTt2QvqBJnGLNoDZUYR7kSf2q6yGvgN9qxsWqifQHnudwWxZmHuQGu5ECbsWUjUWwKeRzGfgihVAZtUjSnU9",
  "key28": "4KujjQsNb6NUn5abYHtLbPC8A8Fas1MBtUtAvC9BD4CKKzahGJL4yqQ2W6M1pBKmpAuLSihEJ46322v64PALFe1R",
  "key29": "2EDyubtvi26g6WpJ3mNLEAoE6xnt8MzYtyn9ZN8HFZzV7umyyUU3eDYECSuua2VLeQrAfnPJvRnkuLtw5Qfr4Juf",
  "key30": "qmK9e5RwCsyRNCVgL7yX5Gygv83GhTZozEtFrqMbAKXapCJSDJNDeJbuLCpvjjPohYnR7zw9GyTeziJX9Xi6TCn",
  "key31": "57f252hFqZPCfVcCyFQYXf1PtNqtSiQeMT6k4rKiPJU3ZySK6Jd9MkLB52iV8XrGYV4YTPrcgHBvGgukU16qLpXc",
  "key32": "441tkr9N9DA77x2Tbh6oazwig4BXjNwZ7c1enfASizeVghYhBnPmNqYZYdRy9DKizvJgAwKkGsd5gt6e2zAJtrxt",
  "key33": "2Y8BFM6b8xw1cSvZMt1WuNEv78MCAZsTPxXKokjbqGK1SJW8ZsrQfi6pmPDMuTZsaQRp69dEmPXJobg6PsPdBoxM",
  "key34": "4B3EoJySpdLsT5PdemwJKEHJS6SeNXe8dygwzVgjnihUdd668S1cLjnUyus8yrSajEpoyhPybe33YBLfYhCfg2Bq",
  "key35": "wg5Z5BTJXuQVQmTiaaqure4HNJPjXtyFWpRdZZjtP66u5RivbEr7sENSreatkaXNtQFWuZegtLrRepBcaW4wf2T",
  "key36": "4LNZrUZ1uhcd4x8RRhRCjGMDmhZDPCxPi89VuDwXg5Cje4pW75w7CJSA34JceQEEuwpmD5KBJdi4ShS8a3HksVq2",
  "key37": "e6AAEoB5XVX7Q4iZT1AQu6d4FPu9NswTDj5R2ZQdqmVifytKU3HnPMKJTj1Xz4PHB2buNLc3NwzXCdWdfyX6sFa",
  "key38": "516kKb5at8ZUNusjujdZfHc6GRbMECJswUKi2643mCznwARc3arXunpp9Srg6aJRqk3w2Jq4LLfxBdTEhjgXM2T9",
  "key39": "JJ2vTs3eqxtz6tSwt5moyjSCWQDzgNMzHNC5ZAq34WeAexvkzpjNWgUaASnLsdKMA8iMCXa6RDQrFjfGqrJJawR"
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

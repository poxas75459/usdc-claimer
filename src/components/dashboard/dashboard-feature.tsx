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
    "5CXH9vndTTLE78HqLE541Go5eouBk82uWGiefzL7XPgeHJHNAoeKd68mhjjtNQ4eQ9tFBFcNJWsL7AXrzuep9u9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "129FLjTkDqeFoWkh3oS68D8hsv1shBqz74ppBz2ssSXktWH7XQVGhj33wEv26yK3qPFkjoDVzbknpkiYaPkYioaD",
  "key1": "g1HkHE5QDR2gtoGfrFNuQ8358VmoVWoZ3554tzm58Q82QQajCgBvcCpaiPrxLTghaV6BaMJrXLAGDgw5DUHKpho",
  "key2": "3vwRH2H4S6Pfrv3wffbpW3SBNM5CKXiCDgF9SYijK6kgJDyVn3E9nu59pMrLRZAR8XNqX3hhMxo5vsqtZ5x3RsQD",
  "key3": "2svyyRSK6kbdvMNsAQsL5pCAm3NrLwocevRvjijiW5HS6YmDMKZ5wkcFKUxtux3tPNYQVfBkxmqzAJw61ihtGPLX",
  "key4": "2B1f7XWjLgZdTH9hYGUmbipu8qjtuc4xRuiqeSbqvzR3pdFwC453xnkLeeWh4ckKVTj1XMGAzt8QS88m8eFweZ1h",
  "key5": "27XnkJ8UR2ZonZ8CZ712odFVXqjyyzQP5xbhkUPvjhcy5R83zRu7aXr9e7pknqC69fGwm1Q1G2dHdT9Ene1w1Uie",
  "key6": "EV2EgTksTXs5Es4bZePPniP2BbGDaR5m7rMFxyUfFtbYuupDGSpdMjx2VxY8TsRfAMmLUNyxHRvRewhdPBwpQwN",
  "key7": "63KNb2VKC8eMx43jajk91yepZZ2oD2ZjVvQesjsPX3n12Y7ePofvnPVk4xQM5ENJKffacYGH3Ga7GW4QwVVnR5Yz",
  "key8": "5V4uQRtRWKy7nv89cJiJuMqxEkee3s4vf15CWYpF4zEsZE1Gx3zZdn9dre3Y6cWNTYtYjmfFPhU5BSRa5iPAyey",
  "key9": "4KWcrAujdejzKYd2iM88tLDwUNu9op4knS32iJ37C9NWmS2fnfJRLfz88mdekabyqwoYc5fQH7q7MrekQ8ZSifes",
  "key10": "3hEDAgHbZFW7NkLj9jGg4S5GCNGbabi3vrdKYw2G56nDXWh9tqNvXXjSucLvd2wHVBAiK2DGnYCvF5DmGFr2sjdJ",
  "key11": "4rQ6fGkHWUN3joUQfVSB34kYLxEZXcusFAWhb3cNhGwb65trQW1mvqopjY9NVGMTnfdrWBePvCxPgLgzgxZvwfxb",
  "key12": "2dErB77bvLWSRtpyWCY3gWZoLWLLc6MJ45ZB29AJUivYrcdTWBQ7KptHGHKZ1hzSVgLSEcFAvPrAjsgyVrLc6R4H",
  "key13": "tCUx5maQ7PwVGatyy82kK2VWWhQ22kX3zXusz66ojZvjFycUTh1JvuXRjnTQq2giGSEukanoK6bWUJ1cFU32gzD",
  "key14": "3ajZHuivSYjnK2aPwQnStEjSHaGoTvX9TCAAG46e7Eyx5dP6BRYRS9cjiJU3DZDPsCU5q6aDerj2KLcR6cSxChfi",
  "key15": "5MdwpVmTh5mH2KYB9DzgzLvDofJZzSQUYY6oAvTpnfS4y8DHiE8cjdjoEkaouoawyLSawGWXhVugxsuj6Q8ox6n3",
  "key16": "ZBM9sCgrQdNJdqx6CHxQhC1zdrxxUYVXVUtcZFf6njZrXJLFLtzNC8eNCaeuAPdNcRSz2SnwSnU9CSA4Hsp6f8F",
  "key17": "3vfucub2VCTRvjvFaS5gDdczADZy8kVMtxcquNgWqFGqNqcXQrFM9baE8x6kLVgdAA9sEKNezvgC52SVVzBFqPRo",
  "key18": "4uu8sZnZnodEST6AH6tJREcHbbAQ1z8VrNv5pJs6H23DQaN7gpqxfoQMcnA4C8mMUHsoBMn7dqNDxGmQG7LjPP5b",
  "key19": "5fSsWozCctfgG8H2oAvLWqyx6wYczhBCXCP5GpdctEQ7XJJqo1m8WLqvxSeVZ7T2vdN6JEeGdaXXQqACUDERHxMG",
  "key20": "67ChzRQBGbvBSzCyfmK3uTL2YKtkNbbFky7FXnPBqsFWN5FEoBvDEeXt6EDonkckRnMZH2oGQKbPmidubWxAar3r",
  "key21": "4KUUUK5aPCzK7RcN8972kbjBBwBfdukrdGBKKQbLgWTgLQuJCgYWQ1GNQ9fCnrjKk2DzU34dFzFG2fYVh1kXJNQM",
  "key22": "3HqYp94Pf4zRPincG6SMDCaBdibqxrAzcxC273diSk7HjWTNhmRvdmRC38ZZJpvEpXAfxUqg5rRjRKy9VB5vKLvB",
  "key23": "34xnHDiXHG3gWp4vkZ3vyW7C9tm83Us4uDB65QjoCCuU1mkLPDpHoAi2B1SC2tRwqgGumFTjR4F9UcsrBhNjqwiu",
  "key24": "4B83V3C9ikRTsVqMgQNkT5amxRn9G5GdzTRU7X6TUULGY9Sa34tTB1GkGKsjmJHAwygwqZ5yntmAqC525wv7k3LC",
  "key25": "2dCD8xikXWsaBs4uPdLpYrskqAeo1t47yKdcQ1qLePHpqXUM3BQia4wCfjkt4dpGpHNZKz3kw35wnkRRckQEpfTM",
  "key26": "5qdRuQY3jjbFLVYyKySVe6bxn66ubwWCo9T5rSnaB6RTQgNJg9RiwGruzxCW9FWaBZEJzVDNMTwSKVGMUE9o6SqM",
  "key27": "2zJ14jfJusnvuhmvEhecTZxc6AJNP5zQTwHn1fDRao3KiETCPnL62GFdMQCHbNdR4ukM2u6zxNGziTXZqY4AsdmS",
  "key28": "2goJQGiyFaVJtEvuSz8CKDoeG5RT3UYsDLyrf3SjnUFyfFR42MeG3kfKpNgWHGuePBPyAE4VsYPLfo4fgH4RNQrj",
  "key29": "329pRYbd5HsWZrkghgXELqBhens6yEyJMwFHzGWHuVmVQJXNww8bfjojvmoZZRCXeeyFyUMEUZMatYBCz2V7hAuW",
  "key30": "oQkpeD1QMAbj2DZwEWQTpacg7n4LJCDbvdFcuMgGvV47nJvzDD23ty3JvoNjvfv9JEXrRkXmhEcXVuZXvmr4CDM",
  "key31": "HkCXfuqQsB1qnLoayDwGAKbKskAyhzMGTp1Z7oT4pLPMYXzfxSpPNekkYzd7rWFAnsho77QDPPcraXFWoyAWh7t",
  "key32": "2g4tViRb1fbAzmAWjhrN5ywUEJ9QsVADnZNt9W63zq3cLPUJaciReZ9jdSrZF65nJkEikVKpf5Wofip5yVHwhac6",
  "key33": "54Lza8gZPcyNc5fdrQfW9hY2WfH7Pz5XHNfNneWdnAHhsqdetg3uH8HUDxtpYb2gP3p2hTDYUzNstH7oU6b9LZjS",
  "key34": "2BHYi92NNDHvHRGDwpF8fTirtp3xiWPQvj4aKTJMXi66yLQU8vrVPvv8wiNZyJutLcC7iEK9npUZRD9yPNfoDJLL",
  "key35": "52vGAuyPGfiMFLFPxWgpf4FRBE9JpqVWnTRYqh8tTrQEAhosw22GjswoVvjMsqXUx4ej4WYyzXVrwTtuCPXgkniJ",
  "key36": "2E4eQhPAxBHJM2YYgs23LnqsMv9ti5FDmwsNBWb4no84PxN29beQ1zECSjK1qhmU2FRPswJgJoMeKc4MzMXhHbei",
  "key37": "62FQfauGm5RuBjVRkGmzQfAz9e5m84QqSVbtJKXn8yn3EzhT9UPMS6VWw13LjJ5WMBw3KcBERGmpnVujaA5yLq39",
  "key38": "59Gy3yCUwJvEVWxQF6DpgrxP8HsbjRW7T8BW1261MoeQVLaiRHnmBgXUJt9CMX31Q1UTrVFAQR9uZresPNBxi6LZ",
  "key39": "DgMPE6QtzcRM6ZbYRxvV1MjkJ7nAgTCrBXJUT6du6qsmJMtpmxU4Dd24zKmj4cmazXFFdMa6JJRA8qBCVA7WDek",
  "key40": "2Hr4AULJAMF5ajFiSEVv5WzuEnigneRomHNgsE6uPLapnqcdSDgBnWZsrzMkNGKSdBquLHkv9mRLbByThV8SgT5j",
  "key41": "2dS9bv7UCKTnMqNbVUPW955JzUapFgi54L3n4m5sNTYSNCd26Vpc93sHhmqx3UwbaswWizjHrjToXkJoDUtbzyJz",
  "key42": "29yQEuXrDfUBdYC4XcRKNXZZRRwhBWWt1kK4u3nsjxYzEjn4ueCo1XhxqRcoRQmxvCvBjvyYtoKtGXT1VtFvkfMw",
  "key43": "66ReAnhgiFrp4xXFAuoy1MoGntwMfqpVtWwKGyHRREitqHS2n2g1VhcWukSjmEopV38VsUaww6XHxuWpxw49BpsP",
  "key44": "2tGaUuZcutG33VTKcPzyMzdSEwkTcnZuoXWXLvxpVfFLYVSU1q17V1ZxpGhQtLnpjWZnPQe3VyeKGn8RiDx1FKVi",
  "key45": "4aPr1vC6HpUMNWRYrXJLwgcjS2oqu5AL9dsjgqEhqDF8tVprLDoznGkT9HRGY6Gd9PKwvMvP6mYjDicAjCfbR9o1",
  "key46": "2nDkz317gCZ7HPwRRcxc8zgWhihZzetki42zpnVXmeETs96wvn7joRYpU44uhVYG2HjbpRGVz1FPJ542uygJEMWw",
  "key47": "rXQepAQn6TxLdp1WAru8oR1Mvk1VKwZX4Ruvu3NtN8ueZnsL6PwtNQKugDj9fQW6EUULZw3nCd14S6s2hjE9GdZ"
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

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
    "63Nitr9eka6Zyg1Nz5P36BA91wYPNJtTfr6sftjf4Z611XJ2YgU2c4V4mLXwYpoRgJKC8LNSARGq3d22AaTAXN85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VySouD3p9vhPWzSKJsdWLe5NH3X1kVVsuiywgifiVwGUfqU7y2z6zUNhjhY7DsHEuZXS1gPHotSL5jEeRwgh6Ba",
  "key1": "2XPpQYe96VAAK4JkwiEVGeuifiz19PLnbYhZWpqwbecD1zUhMzvzDhmsTvFz8ZqThBoKCVDkxnYv7cuDEXCifHEg",
  "key2": "4WD1S4YXTcr1vX27WtF5gaQGAGjz6p5VRDaBCnTFXHShckLXBBHP97sKJE9JrLTaxFEYK6pY7cGKAcadEEUpF6Uc",
  "key3": "2yKwrmRxx9WsA7nQ7n5cDzE5efC42VnDJvnRQ8vCu1Vnv3jHZtrKeZMT8xKTVGKdAptpt6QziX3jZYaM75i8RWbi",
  "key4": "2h5PbdmpCCNbLDcuLnHC6V4eAskXtb1heAJfJW94HKUfHmaRBVoMfPxtYqwEf6xV4cTG9qVkRV3BvvSmGyo4XX6N",
  "key5": "kmctwoaURXis8ybRR1mzviivBfyr2PjKHyHypcjNatgQMDH85LEeoePRmFzXMcvwNwgoybJpzf1RTFBAZ42u4Qw",
  "key6": "4tB8vypcvKK2iyuci9F9SD4UQpBw1rAFcnzNZD6Bb9qAzEJKRAbHMgKLFwTpW3bSGUyPNys8MR8S62NHQaALLmhe",
  "key7": "39tzwaGcCVwi6dVq2uYMVv9UvJG5WcbTej7ZMwK2z1ytmmZsJG7q3EHauijtDk7PDQ7nwEq7d9pLVi2ZxW2b1xpw",
  "key8": "61dHCBrK7axhJpaAkALGYuxni7oD8U4CASqcWMC9FXfdkNcwbKs2yfzCCdFoe6PgTQ4sqMQJ4yPC8ydQUoRqf6VA",
  "key9": "3WtLZiFjymfdZ38Zr1rD6Fr6MJS1zgXnYYBx6ZASiDF6DTr8xwb6F3W4gHKXQsGBfwjLKJHhzTh9baxtjbymYt6K",
  "key10": "4kRDjG67KkWBz1635jiMmc3UrCe3K8uoZrrQmA21Co2NQypotAYut7itYK369Jmri9xtMfPKujPP8Gr3k858Kmtd",
  "key11": "3cdAVTH4tMvMBNG4JMgyhkjGqtJrhhfmqsBAYJCnfvZzHS9QRLkF7RkSb7ja18UhoF8UNE5KJnHhQu5kwYzMSZDy",
  "key12": "5JV5ToBeEv9ryKaCm7uYUfTgWbvJLXPPLBNgVjN5PkE2eJWSdfp3Y9dASJKcb62fshUa8h9KCjeZaEdEfUPSgCzH",
  "key13": "4eG6bYH9NeZC7Va1PMAAEupRxKDBNZ4bF1ZLYxtxjFN2mHcpcUJffcVfjpnpnguRAmSFYRWuoHTpmPFJjHEXt1MN",
  "key14": "CUQ49rhKHyM5vU3mY5HjXFyG432S6aUjZSvjTvN5y1SzKiWe268ezWapmUpjYaPuSDJcXRqWkgUxM9dieib2oks",
  "key15": "3NDrz2yHvsnPZQ9CEUeZqWEuSSVdNaPH5dd1jwFHuHtJd6LPSW7wdesaWSjh1rEPMWJRgcYVLd9p9XFChuZM58MK",
  "key16": "2KcFJVEWZoNM6eizooqrCVnpR65dVbFMShrmK2WDTPcEDCBoTcbxGEYPG5vYmK3XWYUrapb7fPYvodwNRgQH1cV7",
  "key17": "2ASqa53dhtYTd1eGjagC3yL551QdKWFVrRaptwbXdwE5YUBDzCTbBNejAVXs4CP3T3QieJYAQZDr4Y8EC5ihTrp",
  "key18": "3SNZJqAdsxBL4JxbFoamEtoLywXC6kbPjaKy8Vap6WkC2BCmS6gsAhBXX8fEALaHYdrofv59HCHbNBE63t4qw7CS",
  "key19": "2h7Vsj8xQXFeP4K5Td6S4fYQGZD6kqeBh9F9vD6VbTgrkpqgZFu5sQ1sZHdE1mbt1mUMiMHAx9xuQc5oNrF81ZjS",
  "key20": "2boNSMj3WoPSbWceWgHutBD76VmFaxCG175QRgAAcSQ1uxprdfEZH6C4KTcZmYHtMkZB54HMmKgGCH8zckX2J1tt",
  "key21": "3QLyQ9QFVSSK4A6HvwuyLW5ZNRM4KqT8HRTFTM6H7YB8TVmpnSZDViovxzjmFhr7M4nf2U6mvGEx6MpMgzGugapM",
  "key22": "4Q7v9ko5cD4bNZbdzgZbKsTuGMg6hW5ZhboKEG18VBzpQuCczntHWNUzXq4NBcQ1sL4uar4wgSGk2fR1FRHALoeQ",
  "key23": "dnWJGoADhHrCCUtg3oNs2yjGN4bGK2YsqKLwwwiMzePiiUUGtfKzSQn6CHRCyKziecKXZvstmDYjZfUkN77PT3Q",
  "key24": "LoPJpbaWur3XgnAEDBHLXfc4THk2FUASG4jNbijgo6DerjiLY7uHWDHZnSFFztH29GpMfR4ngNxVQjupy9wPpeB",
  "key25": "42NRKwaWRxs7CJvZeXFkk4QBBMSyDtoVvb1DqbPyTcH5rjUZdDFs9uZjsZfcVwTnUEjiPf3AgQxfXwq9wF3ysV1L",
  "key26": "3kgkyyZMUt8Kc7LQmJLH83GQh8mTVbwEUBsLrnnoiXUNDavWXrhCSB6acc9xk6fNJ6hPzBGPbaRCWWzVGQKezf9t",
  "key27": "39GBp3eYnofXRbX8VUsrbCS5zMDxJvX3Me7bQMZaMNvNtqZEuFLXmwotqXRhak49zkCd3cnkQvzjhT9hW8G9r7QS",
  "key28": "36NAW993BfZmVxPrgarLbVBqX2irGVq6XTphkYpAv1xVRWAMUzHidjmH2j56p7ewUG7LDnbLo6J1fsM82u7czx1M",
  "key29": "2a6V89eB2ffe8rocCA1jMTMpZaiC63QdQwx3SXFTJp71ejLTmk6pvBjHqA16TRMMifmxzi9WtE4pid3prZfrp99Z",
  "key30": "2TMBVAEaNZGg8TZvJsPjLoLCcb9gDVWyJMaMqPnLYSHFaoZbQ9GGuDTFM1urNZzmLTAJzzXVT9F8kLaRy36GhF7x",
  "key31": "43bDcH7FahkDswsekQD4GCtLtxsgN8Pay3qnS4WLMmHYMNCRNMxjumVM5vZpTAQJSe7iWiLV9Tf7xkgVTRYPT21F",
  "key32": "3XzBLNK8caTAyMAmkt7gYkeKPaqx5ddbP5tn2TQFPE2BXg1nNyRVv6jBRuAGC5qBi5ZBdB8w4sRNn55ZSUVzd6xc",
  "key33": "5oPcKm1m9vsbZ9briuNujewKnRR2ABvAJxCegcRejpnzHiBLAvxMjwpiaPuUtvQ5MaekkX2A62fbkPCcqQ73H3TQ",
  "key34": "3egzfSRH6weywExLjh5XtbhGCPaRLY5pXBe6diRABxQKtm4bB1JxtKrmSyXWXPNFkxWc8pZ553bfovekcWrjLZgk",
  "key35": "2PzZBk77Adiun6nTiWgCLs67vhHBRM7fqs6gke8BA6okH1SMebyncmhTPbTk2zSpoCQgb25QmchTxeE8qbQtHGot"
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

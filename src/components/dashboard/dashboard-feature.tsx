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
    "43GcdQrsRdKf3SG4sE4HD87LVKHeMXbBJaWx7T9nXgjU9qWELJDid5KhnRxLMzWwejdLLWxyEJFmCoikR2v5SkuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UiXGqciAH4UM1fGMvpFZSgyzpps3f4VqAdxoNvXEuV9iTJf5vNmzxAeMkAD75hvNqQ8ov1EupJDrokAKPhjCbUk",
  "key1": "25HrnPNf1J4nYo919RnAj6mEsAsjR8HUCG9MqR8b3UzC5uF41CYkf6GfESKU25QhGsmCahzbhuaaTUpfJmntBU51",
  "key2": "4t96K8rZVQer3N9xPmu9NU2FfUpWCvDYSTnZRJK2n9hJ4wzYBMzk9iF95UcUZcnuvwUwXtzXJttbQVEYcM8iZLbN",
  "key3": "tq95arUX6sxCUWnEmcRdZaJyWfvepDJnr6r5yY5hqCkPD62Cm6c6HxFTB1d9wM4fG7LUZdH4TUmLsJt23u1imtR",
  "key4": "4WhMbMdgMpgQnTNYyzxsKq9XZ74Cmfiv67DfEMUPEj1ADEyifM1s2XrQQ951apc9fkrra2sAR8F6jXpvM8W6Jffw",
  "key5": "3Lsspqek4VqwMCL4ny4ZRxpcd8WdRxDowGdJtKDBSbbFdhJPjWrcYHGAECP22XgtaR2xh8tZ83vTx15Yf5b3hGTL",
  "key6": "H4sWtRVonuMT9XKK72ux65XWANd6oUSAh9bMrr4Ymu6SgNmbpN8jKBQWvZcCpJEuyiffmnbGU4QraPNjw5dz4dj",
  "key7": "5dzax4TJnoD1ysP38bDpfopzgrten94DprFudVpm6jcw9cFswJDaUTmRM84sZqvjMNC9fFKwuwM1dyRKsKNeyGda",
  "key8": "4hbd98EqQN8DxkD7RA9zvzTXp4rcXJMk6qoXSyE9oQ6DroMXvwAXKeURZzNAvkhXfX5fBxHCFh6G6a3VNx5gn7BY",
  "key9": "2au7rK8TQFFt7Jhj7dGPfZzPQaa4i9QofojsvLH73vNDdkj5fMFb1xTQEbTqisk8AkoqdrrqjZkDEPPD49M1n8va",
  "key10": "M2hBTXVDiy3yKdmo11JjTxPYFsByZNyHN5wu4tpBd6hSuAYYWU8khUhavVrRdKHzov5kMGkpUcVqWQauaVaP9oC",
  "key11": "2K3AtisrtYBAVnoYMEQqLaRsceiikEcyJKs69ySXwcET2Qj4hnGQ2HfZb9NzFf9f4Z1yYDW5AdXzW63SSukJxbWe",
  "key12": "5apKaCfNKHYDDdaBkwEZiQQ2P5XDe4igDTeHgjnvkYAFVocuEtVJihCz3w5GoApiRs9Uq8DytduGcU682wUKLh26",
  "key13": "UDD8XGmhkQP7nCgDTG8zFXezjo8WKbhTtr3578fWLksWdHY39wGZneQvPYwZfw4C12ETXsBAMXXswaynDGz2hb7",
  "key14": "u1hU3RvmCPw9EiEUDavMn7ZJ1vVjjKXFStrHm9LUMJcvQCcT1jveAiZhRZiC12QNS5TiTLEhkSy1mhkBddX6yJk",
  "key15": "4xi3vg9o3xpfpoiMhowosWupoEq2hustjUSLZUTWtZ4J6xM25ZpXRkEnxvQQ8i28bdEmSQV6mwv8Xd9g3Yu5uc9",
  "key16": "3gdS6QmjzHHmchAveBaKiTRfLeRJnwaMJZxagRtQRxx8sToVFYQAs7uUi1iX8XkDiT1xMk3cBXaAMc3SgrbyDeFF",
  "key17": "2QcdMeJnjKz5XdB5fMLiLQzvexzoKJrxsJMss44YjmxYjcbZozRpcE4NyaMRhBKNg2px9fWTncgXWb7GYFBm2RAW",
  "key18": "3PTUf57Pd8oN8DWYFeN9xuZQMcijUgx93B3WsMFczUErrPvXghscqbDey1BXaSdGU6KuFQTzD9Vo7SFZR73xiaLK",
  "key19": "FZx1WN4rK34h2mozPAxrr5hiLQwSzTmG9XMPKYCjHK21uhBh6rxbDSTKYnbvBqq5vDxhEAoKAKm8NKsqQYQ3LkB",
  "key20": "1sZFwdZQb25u6pQacEKztWGC3fDQmkz7XTbpdn4s5SJKPfPiE472JEFKBMLStNew9UE2nABy16ZGLKmfDUqgXjL",
  "key21": "2RCVw3hvRvViJRJqremLNMCDC7UZzWEZrPV28PL6pzzaHSCf4U8HbMJdm6bWaCcSYD8MW1jajiM9TUUQnGxhnaUt",
  "key22": "2GHW4Y3QynGnUYnrnjQ1s6pcxtaSYaQzhL3cr824A7F1eFNDL7jfAocW63ak8VxMPaoZEqmdFzPSiLsMaMevgsLD",
  "key23": "aV8B9RCCVboMiKBkRFJdRhmUyfFNPmRNdYMH8KsAs8nvG649joshLHatfknN7G3XfFnyY9SqVDSaLAVvL9HYee1",
  "key24": "5MRnTfFPov75SjffLg9K6YhEvXHQnYBr8VkJvFESsBTCRNeFoWqc1791Lg9eQQjJgB8QGC6wHRctGf2fDYxq9yf5",
  "key25": "7GYjBP5R3BV8iXcJKsgdHiPFUiEB7g356FMXYSZHocG2vveFr1agkWC2KRH2kNwBPFRuU915pnCxEsjbAXMCrxG",
  "key26": "3yEWUpwRHVno1TtA7aChBieBZTNoVa9z2BgHagHiSd4nX4BFnaUVpWWhkucCZ2z5SZQEcz98pYu1BpPxV8nmXGnQ",
  "key27": "4MebUMoszFwrFmKrwHALmcB4Cn6USHiZV5cvcJsofEvH6FtoQSpivYvpkYZkZeKSCgT6azDv7N3hW1f7KBNnet3p",
  "key28": "2f4QjCRYTktBta1jvD4cEMwkzzNHEg9DygCcwPiosSNjjzzmAgj4oBjheYEiU99japLTEpPmM47KcRqrWaCBRP6Q",
  "key29": "3rL5LMToxKJf8Vx8R4vP3YmccBdXhTKHFw1EKPcnwgwmb1EnyBLRbUfZ8HncmrntJy9mZh5ZcRjLkLp1R7RbAGNi",
  "key30": "3epqDLs2HvxP5xLtPAMdjsEs7Vaw6NzzNFRWNu6jTn3zSyZLXdU5uUmfyjrDbBQFUXPN4q7C64LkCCCGz2HbCFMC",
  "key31": "41WKVQDoTNN7w1o7JoCP8u1apaVUWjtU8TTm36Z6fVTDqSeRaNcHabrYyNrfMkwq2Mq3W6KDM443QzZNYXDB3Apo",
  "key32": "AQW1BbTLNHeAqW3C2bEK3U3PJoFFTxEUPEeuZhXC6MJPLoQjFSeAv4DgzwYM7cRrAN7CF1taCRZpJ9LPNXafNzB"
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

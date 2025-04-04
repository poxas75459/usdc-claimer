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
    "2sfzPqE76DCn29Uj27T839Pq1xNt529Mdo3KDhsZYoCLJMf5FGg9VQmGzn3vsU4RSSWfk3jnRoYG4x5ksJrbTuUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AbyMsdUM8MqwuqSTeAjqHM2KU1b8KgMguALDKxLRN69hD6eR97Mq2sFgBLEqRz8BLP3etYiF6FV6ndHsn4un5Ct",
  "key1": "36Ew5gmgAUb7SbAorMvTm5fdSRC1WwthtGpeTh7wciDzLJtNp5wYD2orQR3MX4bXJvEYWTNsE22pnQvjihNmeCCy",
  "key2": "Mkx1stEnCe6BShKKs8GTpZzwGi1rKtijcYqMAUi2bsuKPwZnHZckAWAxbEAYiiraq8Mk1CnNXzPDsxMV8nEF1y2",
  "key3": "2EMwsHsJq1h11X9mavdeza7XMpoQNYCg89ZCUxcMfa4ZjQPbYMh9N92cUBJwiWouoMmVwoZfjSjz53e16svGJrYh",
  "key4": "3PNakZioLBvo8bbB4kmCWj3QHFSmoxGz3pLZRhoAHdPgwGshXnDASZQ8NPCBJNqMqSEGEagSezCV4EnaELZgJVHP",
  "key5": "2jccyFV5xCgEJcMbTH5FCQ5puXyqaUt5Mc2r6nrreLxBwaSHfgg5LMG5aqnjbyKP9ed7z1Mk5S2CggXpa5eq3QDu",
  "key6": "3uxHYEtwrwzWttxKTqH6MFAeCZCk5U7Q1wkk3Xg98XXooZWDin9TYhECn4oyCKpu1sCxp66gZBdiaTThNgzRWUEz",
  "key7": "5U7nVcYxZFALsZzYBqNR2ctuxNedxMTvFUqeTrwfMwD859uUkPbAyzRWcK4m645ihRkk4h1Z9rVcuxdGx7xrbfWz",
  "key8": "mQom2KAM3XNKtQikWayyDntmZVD1uMtLACAiNeZRgLEint6U7oCBw9H7B5rkq71bpVp4ogCGi1qCzoeQkzbNdCi",
  "key9": "Lw8JaHYEGKs1BvJStH84f1jRt1wZFvUfLo6bb1ckGepE11cmsYqa1byAw43ZraJXfcxu7CWUeN9oS4sU3XwHnQF",
  "key10": "3xZ3cKuxX9gjn7fd2eTAmHchUy8k3zPiFyzhq7NAicqXc92VST9CkzWL3mmJfvXd3qpkZyxb9qgRuojS3LSYTwp",
  "key11": "4XL9MCGLhFDAfLxpVyWfpae6JTrCpBquDiasYMaZYrHHrbHMtAe5qcsJ4UZeQZbrB7uxsbm1Zdg7iASTr2hTLssR",
  "key12": "5Le4aNF21LH6Hxgyt3Cw2uFcQf7HHo886DFQ6udHaqk6LyZFdGuetdiRSfA1LYtyeuaEAQ6fMjN4mbCWrDYPrTMy",
  "key13": "67icaus84ACM5xnj5oYUj9PYxpZYN8XcbzoxM8e4L54baRvzFn8hHtXtWLFijMo9zZJCk6KVVY99UnnTJrnLzxrG",
  "key14": "2a1JTnYZyKEe3SD2UiqSwkWuW8SnSFKf6vd92DL3vRMkXT88VQy87Uza8sydsUzmd9M5rekcVEXfZ2s5ceMi37Hn",
  "key15": "2Q8b39jSSbyCQbXnuzThvrpCGPUw8r53qF95TTbyQoDP7UWoSPNMTngNryqUt1tYxWdfpY7TP5ZoRdTERghUBbE7",
  "key16": "5DjmwwMXQkCFgBcS9LTf2uiYFrCDnJPwX2CxUCjuZVUGBBDKH58kuEbfPqTEX7fbv7E18UCQiqbhGx8kRYtGSKWc",
  "key17": "vViY3ArN8wmFZVNqao6fBPYMYxciMCoHcV9diJFiWssfsJv21Mu6jzbLppp5LJUrroZzSsGZxoua31vqpyLGj6k",
  "key18": "3WFiofNkD6XMQdKCPHsRiHzVdRnjiPrQd4cqPBoeMSW79fX8t8ey7gzmVMJZfeX5AGLXNrQAN8QkFkkzKvtr9KFo",
  "key19": "64xot7FWHBXf8Cv63YBkrYEaMp97d9HfuXRcC42FrdjjmHHg72vkvbnbiXAgByHZvcDZs3uMHroTY27FT92WEWjN",
  "key20": "3zwo8y8enRVEFgH871AqnwACaDRQKgi8FxA5rQU5ATCC8ShwBLWTvxn3r8JabVajEEccrnEiSdu2imgJxkDJjqYM",
  "key21": "2KH54RDjyisbfAEHxaTVu2BGn67D4ywUmHFpSwiBCMF4M7XmKW5qbWQEhyqNp6nH5rGSM2tyNnja1hu1B6gPfgDS",
  "key22": "2emDFFjWZuQJ4QvvS8HD4pEyeEjZdEU1r6bHLsfL4GBNujnJEYaudHUyW9T34aRWcBRCM1hYRfYtQke1iwAAUcDK",
  "key23": "nkKyu5MK7HDFiFvpxdRiSM9D97Rs7LYbFCjLthYZU6YyJk9VHKHT2vmgPktiyuAT2WxmqdbCU6sC2Cs9hsDVFMo",
  "key24": "2YMCeSNP7mYFP6FJ7d1DgQUDNBx8xwQKZudGx5jiWs6uGwPR9nJWkfyjTk8HttbKWZdtdoWerieDGrMsbVb2HruY",
  "key25": "3nbLY8sF8CAymuPvDXH1kAsY3XpdFiTCZKyWUqrKg2vMrWk8cyiAU4ZNFprWRKyXtKDGsygsKM2SLpyhKLKf63We",
  "key26": "4woicmdqBhNRVuSCboQT8qkr19JPmi16bsbntRLrQg5CZLfmgLgutkx8UHaNjZjU9SpJSkFELvrC9QEUgjnAt5Dk",
  "key27": "4kTcRks8RzYnjvSPSWE9SDdSgGzNWBkBXkdDeLcTsCGf9fgw2vgZ8gtatKn4jHEub6XxN8CivnuB5GUANaiqyhGB",
  "key28": "pSTEj9M2McpUHQoFgPuZzAvGBUY63XbtpLNyASceq8pVjFrMcTfWMrGa6eMVkUrE6jkjM5DZX6sxngNQuESZ1qi",
  "key29": "3TLABkckoXxikeZtnUAMinUzQFjwNnMc4Q2e3b9njKskwMeAsFpzSmbjpvBMWuagHfkLMYjTaeUKxoU86qJ7xZoH",
  "key30": "3nJfr8MDxWoHDd4gHjZvfbVcxTZBU9saAMDQaFGVfzXRm9oaXFnp54UKThhLefbECUR3rXHQYdxHxXiEYuXYeuBv",
  "key31": "5uXSkvGKzR76VPERm2WDrSfaMidskWTK5NfvVrJ5rGfoh5eqTBNBgkLEs9NPqZtqSaxbmYGka718D8LcoFHBBE7t",
  "key32": "42JDR8p1XkUpaGYunLhCfFa2zDUsNhgNutVVBBHr11Kpav4m1tZ9ajrrBcDs3CuvZf5XXh6WReQUYhVeDiGJtDaQ",
  "key33": "5XpCe7SHhhrcqQpuq2CVLr3VLL6SBfVBETSFM5Tq5rirdBtmvwKU763a1jkkbUhoFExk5Nb98VEXhRULiJ1wR9vk",
  "key34": "TmorefdMYhnhENBAyQ7yg2gYgnNCQ3Fi71ZsDWSF6gSWx2FRqSBRCJh2YqoD5UYopsDan9jPRBxUBiF6p3KtYss",
  "key35": "4pM6aCBo5qEAwdVqPfgQdocCEoJ2Chc2bfAiBt7nLmzgYt5MqZ71MC1hy1Y6i48iWq7ZufEtgcLgHLB1A7d6rVZT"
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

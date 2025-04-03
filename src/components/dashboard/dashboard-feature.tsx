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
    "2rpTQnQ3WmmuGoK7cPgR8RYrfUFDRV8Q9tUoR7yJBv7xMDtZT1Rn9d62TAPPZZ4iMdZhXvcuCQ8wNFvNXDFMtAXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ASaMdLQHCZWYQV4NGNgNDxivRSLQ8UMSoUWo9S53FgFPzsX2VXK5wL7ntL31oTamVWis5VbxEByzyXJrG4Bw1c",
  "key1": "Ai6BGNvXgJ5AmAUB22NAob37eqtL1j6gUe2eHyVi7sUV3CSp5JmXWzSoLm1xrqBHnxPEyTYgQLLQ2PtkpWtiJyX",
  "key2": "qfZdqz6nqNd5SwHrsmjD4fwCWSMkKupSGqoEjBjuwmimFJXpeCpqv7FTxa31rc8nT53gJMWVvmkTtfBt9NjoNqF",
  "key3": "2n6dj3LuTVFquaZNduahtvkE9THaBiDiLvGNg2YmnUziG1f9GvhNF2ifkMXcDDw2sCtYMN6KDXh6ZT3sE9jeVBgA",
  "key4": "3BPHf6kJ2q8PpM9y3p5RyMUb4YEUqQDXt1F1EMjiBh9y36cit5euJc6XgHuAoNofqUhKRRmqitNWdMaBwXXg3BCT",
  "key5": "4mp5qcLSzgB5JxRuNHY8qbdZcfzYort3CTorAqZAEyK9M2iNtqoANnSvEX1DvwpEdWw72GKq5Rdy8G2CXGurHYNB",
  "key6": "KeFrXEJdrDu7NtKu8YL3xmiZa8Gs7MkDG869vvjoazR7wE1mdAAGAMeMTb47SWW56bF6ZsTjRcMVJ9wkkxdeD8C",
  "key7": "3rPVcS2dqhg6TunwJKDCqPKiZrRQULYsa7duA5j7byzxMCqYkDfUPfAANMTkH5C5gTmvRcho9sn8kn5TZxrvMAZq",
  "key8": "2dWKDe6be9yinR4FAZqQbNJ2Qb631yzkENYzyruoG2nS2Z77ubwEnZ4gn8ry6QVnceVSDweqcBCR9eAhd7VKJ8VL",
  "key9": "p8j7TPKo3APrkqjgVeL4xhQZAHPqb2UFqSLbLvGfYtJgqzZsMoN2Bwti4FBked8hqaXAS7pC4K7jfqakhKi7Emc",
  "key10": "GAEM89bJHBMKgWk9h3NY1DyKYh6XmRmCUxtaH9vrUCYa36jiC5AckakdXvsLfQKUDNnxSPftC2uDtG4gJC7u9Jd",
  "key11": "WyQaEESpjzXUA7QkPRVfaY2yH4JTMyteAEMwgFf37mJFDWZnECWUqtcqjucR93Aexdx1sWgiAnTRUbq4mRpyao3",
  "key12": "29de4RxrDGycbKCWqjdQDsnvutsNaRNK1dG1xW7L44BLuGPV4MwxAy7zLPa5mzqh5r4qQ8gKyaEXUHqRdjTAASCV",
  "key13": "4iUf8TNpupP2zUmcEUmVNdoLLzXXtmtxMZcN1MQ8RKYXBMYUE2woZRnN2duenz9KyAFyL8uJwht4RbY1dx26GCGk",
  "key14": "kMCLbAicucoReDNNnEUKqw66S7j29KbwkTbXj6LfiMi7QcdAt1eGJ6sJVNZTQrMZy5F29tKcJRBAtC7eghQaRq6",
  "key15": "58sKNXbvBNJAW5bqtV2DaLeoL6DX2fMpLdhtyvAf7XqxbRr4EA8vvxjrwheGx5RFzePZ4BZfnSHDAaGyaLnopGsT",
  "key16": "2ggoyzVd55CAYC268Sa9ssGuf5ZNDHixfmH7V9Jr21Zid5bRhysiNdSVz5RBhk7XYor95KtnYkZM4bWTYsGqPsWU",
  "key17": "4YXyGqzQMn79PvG1xyQjvN8LCp7hj4uA4oWBaaKHrpjKy5cgKJ8ECtu8NBQySUWPLorhxRrh7fv16UbCw2YeHFay",
  "key18": "ppLtjKJfxW6DzkD6LLkjpTG1EfLfzetDNkXZDAbyGqL4KymxF7hPuQLCfJGXEsgKHvcq57UXqhcgZKDfeRGY5K7",
  "key19": "32FY4CsncyTHCt9bnn5MMinTYm751R913wFhF3ADppU3FGgyX95JfZV1fmPZZ9SqvUuTaajEU7LSsDUt9kaebpCA",
  "key20": "5zw1JMhbU7iBt89R4NyqbP6MkNvAFRsT19UM1gp98YKf8NcogSCUxcW767HXUht4KHmTrfN84AhjY9SyjFn7Mo5P",
  "key21": "3q3A3USCmyKHY9CgBqFcwptHrsxTESDCnMSHELWJhXG8ptM3SpVxwBNPmx2PARvjfWyYhFnjVeurHqFf2Xb7AAyY",
  "key22": "57c9ZypjnFsPr6qraFPZWD3CL4RguXEGn7gcYCppeXQNq4Qtk9bR3Vwfh7TFYkJSNm38FxXVjP8upZemMr7Ur57R",
  "key23": "61uRtnpGTf61mJhcgdWGHwK3fs8cr57LmNRsnEEVGWJC6jKWenQ3VohTnN6JQqS6ZKYkMPbjBw8jHs3Bq5L8B6Sv",
  "key24": "49dC2VZRAriDyKZu9BCNtTBrajeyJKyg5EgRKbaky74jVDvonKQtu72Jc8DosEm2Bnv9DMBUBNMfM4dXnmTnci55",
  "key25": "uK3tK637hQ7PAxodk2C6WAaSUN7qp9DAjej2mKRNsbHkdwyEXJ32vFRTqTk3p1yjX6PWzDJQ4DVYTm5nqHTbjzq",
  "key26": "3bKuEJWHsCqyUKFdWLdL3EjjdQjfRKxh2CrsNHMzQeEbCw2t281MYf4knUtLayvQtDX48QtuLZjJZFg48voUSj3k",
  "key27": "RtyXSG8kHGCNciXG86V58EyLuSnb3kEhK82docpUG7S2gKYiqaxmX1GcXrM34zYQbZwmFzhtpPkT9qwyFfAmzQd",
  "key28": "3k6ictTbiF9qygiw1zuihpYsyBe8ZX5ERFTaLMXom4mWJWFm1fuyXxpfKYFj4W3a4njmxV74eP8BJsd6rjqtg6NU",
  "key29": "2FcYBfSbYjKe1RH21QV8GbxvsGBtPnwiceDjwpBYxRLDh1WQiFU7Xid3uUZYE3NuJf9qSgk9jANPbQ2np3fVsTyo",
  "key30": "35Xsi9w9DZQDtyf4AMMJyaWmSVRpyshvXJcfKxn6zE64v1H1aqckoQeDfLtyGDKZ3PJuC4DGqCqdnx5WKoMJfPoN"
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

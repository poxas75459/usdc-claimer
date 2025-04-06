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
    "2SyYztrUWT8gk6QPdtEALw4QFxQhGtnEupyaicvTDYJGEmgAvbiXhxHjT4sPzwWNsxY68ee9EV6wkHU46Dw7R1uD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zHLdw5iUAUZ9srijEFxY2yRkVuEtbJFr2rGGMk9Photq72nVc4Z9hmVnHR8jSAmHQZ8tqfRtJGXB1k9WNjdkaHX",
  "key1": "3Ltt32LAS4EL4JKTYuak49C1Y6RkXTpADnEf8npQ9XCj6ebakhUdxBfUE4ZL98G82v4UZAC2m2YunDdYmaLsVQha",
  "key2": "62YMcox3qUW1LKVvmPXv7rdMjqkvFdL5bj5DkXJa9WakwTSKkGwcuW73snKRyrU382B4CwgK17VMuH7jPWRBzXTN",
  "key3": "5P8k4XtaqzxVZZZZ7V9ieu749tQpACmDSJhLBoYkXqd2dtTdcXmgL2qMBm5oj6w827rgA4DNaszcd5mFHXHwYDob",
  "key4": "3VpzTta6eDCKjtZiVmHBT74QnFgvua4pmQs65mJcJmE9SpCAR2GMqXsthFPnuhnkX5CkppwWBMHw9dwKWECRKP63",
  "key5": "8bob4DMwXtKc6uWtjPsSvqCncQ5hzcjfVKtycRbE8Sd2rhguCs2eFqCsivcpsniSA4zERA3Ah2K1kbAgXpPjFsv",
  "key6": "TeyFV9ggSs8TDh6CZpizVNoJSDZQHEuRgrG32bEEcFtyKaQD2zsqmJJ5naiRuJ1Gxg7FNu3KMi5bNQo8u4jDUU6",
  "key7": "5KBMptTWBy9Uxg8C2b1KDSTt9gW2LywzLYrfH1XBHXeMZFWBZGqM3RCj4dkf6ZLggibaRJykgNGYFkVh81389dBp",
  "key8": "5dXn7hNhbyNKscwVzZpKKxYxMCRwdBsKopEWNSFegDuyeQKXRf1vRZuhp7c12ZK8aG1jDpxRH99UhXKr9tcXXddb",
  "key9": "qv5KzvJBKkaG58poeV2muvNwYj59LmDZeSBLjArfcMkqTZYMRBugdQzP9RKesQkWuhTN8RfHBMMGbjwWJLVP5b1",
  "key10": "3X5SfMMhFAhoFaTGBxQATARGHHYeWRyUUPdXg4HjqE4esMnP6E8949XnNtiZ7s9K98YU6SRQofSZ5HKcAjQ51cUb",
  "key11": "5SKw3zr66m9UYqBWaEirpAAXbvZ65CGbNWWpK4eYXj6Kk44EosLt52xdE6QFf5yH6xjJAUYaxYER8xPCcur8RMAS",
  "key12": "a17RD2NFcEiYfCwyk1meKkbrjyXsV2n7DCt1Q4kjsvQfJ3cSnWrgyxqKnpBg7SowyEfMgVrfRma56LqW41cqBDw",
  "key13": "61MfWsF2173y7sP7LLQLBwNCBbkL5fNG1C1YQuDXVKGdAKJnYdu8v4iDfpypeFHYWxje2kvJ44ScasvHjrjgciYB",
  "key14": "3ap2iAg7EpnXLhDMM4NtLj4cWoDmgKGNUPHFWNk1fhBWAiK7o9WHDDAYRVtz3K3eA741wuPt8VP6crLTHhUFgkdf",
  "key15": "5T2vMj5yd5ecphjsa9CJMxaiKNj9PTLNs8fF3Uj3RUnwEWWZ8QQmSp5wxmMFwLXTjWUXEoc4Y9Zk4r3nUW9VPqUg",
  "key16": "519zR9GSeQEVBwcMx7wZdifw4E5hJqMUHL7fkttkJDwcWWRJobUfGKL3SUEe5mSmKQmXn4giTFXDV3UKgNyoUZVG",
  "key17": "2hY6rWRAY1naVmaEmrfposXdGhx1RryQ3Ak6MYJNipTLLxEams45wawBogyjZ6KLur8zgbn3zd3ybRQkyXCQh4eZ",
  "key18": "2NdAgHZiYFA5AC9xATyihy16oUT7wKxbirVdwp3o598kcVKUGyRvWQhHLFmGSqwY1Xd3poHwXSc9kivMQR6tjkht",
  "key19": "3Tm1GC81yMubgYbdyAfQ57tAnL2RDRRjfboH9xTEsu7cbeH89WS3uTg6pS166o2L2hwPxa4ZtwDHMdYsey2XWi22",
  "key20": "25NCSa6UA7fsSksJSpGphptv2jv3fVYk96xkzPMyER2gCYf8gXAWyiXuQANKqr6usCET1VD7ZgRDZ76oawDAwZmc",
  "key21": "4suYvqqDnAMWjdZTdirg1xbcTscDjs3kyNZuemXUKnji3Nyhs2TKkyNQRLnh9AodSeSLf6rJMVpoEdEs1HRJq2oE",
  "key22": "5m1xe7juBAcJvfNp8XNcwx57vH6PcgV84T7NGpc1XZ4jrayRg6HY1JpprWaCzpaqLL7qvmardAhmMKcKJioR32Vr",
  "key23": "5RAWdh33C91UNrX9jbAuCJooC2zqFbMdFu2JUcuVqqd7cD9yiFci8WNkdchX5P8Xbr1HFfte1JkjfvAEbXqnquXk",
  "key24": "Buvzw2nStZpajM4Aaj9d2Uwtg1ngrg7RZWUiF68RV7cgfHe3hye1Rx8zXWiAPMCE2V4eVeXFyjzK5YfS5X83AJM"
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

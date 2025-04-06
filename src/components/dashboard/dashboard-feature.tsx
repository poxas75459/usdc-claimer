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
    "3CDVUMsbkLzgWhcUZzWoayfrvWxiW6K8QNWGbhF1bT3qAX6fGjMxisRmPVzU96yFNbAUXkEbbKEWaSNZEQDsx43K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EaZzv3WLEfAppaMDvqBMcb9Q5DUbs7Q9NhE1yyLCG5PpZz2ctamMF8R1JSjvzKFZYue1XrBhYEGrfikFeHKUmsu",
  "key1": "2um3TYWQ9DHtS7cMs1TLGPNWk36FZZ3etqL2J1DW3nSiHVwFCUryvZzZxU8AWcs9RbQ7AMCqzxbBcB4Sa8kozZMg",
  "key2": "24XhUBEzSQ1YS98cbqm7hDbcirBCUa4R7SgZgGgfTwmv8e5AbVe7i9prBbKyCXSTsAkub4NZABuxtCwX3cggX2Gt",
  "key3": "65BMTcr4tUrbLZ327GtwG5fbj6JJngLJBJfX5mazMCp4PpsuPNE1rBDucSAXC9k3bw61N2YTeFWpiGG6fqtwsDnr",
  "key4": "22B2YFR6ukwggFx2FDdQMqb8oHovZUXaPv2uiqs28saXTFHRCrKpLy9jhKGMKom9gzk2NNwttQzq5Dn9n2ryEB3L",
  "key5": "5fsaaj77GWp1UW4F5Rnq1h7Rhhbo29NwbKVdBdFrw731kSaE9jLmAucDj8QK2BT2qRqUyNHkxH1V5VbcNGDoh4df",
  "key6": "4JLy1JUPLUHadd4UZQ8TC2EX7Eu2tpY7jLsR2FYMXXbeHD7tBFgTBM8tHMqAJmfYNazfayHcjjjuroxbFytJmVqh",
  "key7": "4CRUYSSqswphtSmNdBfCa5MdRwP1Ajez3kbVT3L4z6MPnLTMeLJNFddLoo7ZveshzXfgZxXszvUz2P1uwG3US4K7",
  "key8": "4jdCpoj4vMsBHbtXtLtZzP8qbFvsBWnsfjyudyffiR2emX6QLRi6s2YWfakwYAcKpAeuTXqcgcKxvbnbay8vSizQ",
  "key9": "237KEfpeKn8PiUBbVPLQsqVnT2m18NZhaPp2sNc9EDfUhrsAYzzQ11zFFbpYSD4qQFrK5tWEkCN5C9oAKLnJg7xe",
  "key10": "47EeXeyCPnC432T4CqC6BXB3qgwjYodtP1av9WvqDvegiSW2tDHxHBYEeK5vdTNLdozwDKqaRxi1yRUqozj7t9JN",
  "key11": "2372N9XixTPR1d9JMvz9BAmftB7LuWQymXGETv7MzczEF5Qv8cjbLnEEcpMsmnFP9yxvbgQpmNHmMCPvvaGPR5CG",
  "key12": "65dVvnMx2uj1aDFFGpqKddiG23kWVezsmmhAgyynQGu974KTGoWntfVZdg4UX86aKVA3TcsxTu6a79vVkgDuxYgg",
  "key13": "4ojF4x31Y7k3s7MLBGHAwTxLjF3kW9tKVXamC5JwmUq7WXrC8Dx7CMjQWCGSnmzpiJV3XHuqFnEFDMDQnUrE2PJs",
  "key14": "qojcMNbTD3Ayz4k7aFUWiF8aaEcMgTNKQGhJ9DEFBPEL291aqaURhseR7rtt8Y64LE41EgM1MHd4pFvpEgCSTvL",
  "key15": "3gbSZ5DRiLP8KGcHDxgMz67xTUnE9mrTNTt6986XevTxwEcTZxecbmaqyRfYhXyH2nwo3s63XCJnkgkBbsakydV8",
  "key16": "3zDEAjzYwK8SjuDwSrJq5iZrXimRCJbwvxrkvXAq6s34n9oKvhHrW2cSEMFfL2MxsZZULHqEV3Q93YSaamoDoiLo",
  "key17": "2sYKxnXt3b19kUMjLg1wCfNUD7w9iUooVNxAEJm3pw2WbHFSmSmHJgmSeuLhdTwySoEN5CgZyBuGGXaAN2BdqvkC",
  "key18": "2JCNmo2DxSeZ9uDvNR56eKBuyimNsC6UqjnZQjWASmnmMKRBRhbXKegWS6bMM1S76gfMsK8MTy22xiAu5M1cMLcg",
  "key19": "24aw9uxyNWUVf1w2s7eZHXqJUsMN1e1UCG11XRmkV9CPFcrHJeEDhfp6iVtHzfdA7MmAkkNHtdnGmfTFsRRijv4W",
  "key20": "4z1KgfaVVCSFuZspNj4bZbdd5sxpvMA1XjZuUSwg38DxCV2y63R6VisE2qSHQPE69WkC8AdjtV9aRaEkh6RpvmPw",
  "key21": "4dMkGhLieVenEjBdT2isC98VgyRe6sy1TJBBTqf61AMDLXgR5izUWrqH5gb33K4CudtH7RGpsJPsaM9accqtxQrB",
  "key22": "5jQzyDt5s2Y1LndZeU4uGhP8BBizu81ejFQMEkEdW6UaWNg1gYwAjdKt7YeK86WQchNgoqFu91ovEPxSB62sUwwa",
  "key23": "HBaSK9Di2hZocYUwHpx35B3wVEhXENufgrSZnXBhYcHuH34oYjG6jTkhKUsnrz3CmoB5Yr48zBr1cweWfaSLa9s",
  "key24": "LCdt6JUbur1mGX7m2yAtHDQg7gMGaW6vKRaK7hhk5cMp9rQ1mGCiSXWiXCSoUuNAPAokNSN35Ba3EibLfcThiNQ",
  "key25": "2VtA9DFxbp4YjRXGj68hcAyBsfzY4ahbmah5LfS3Y4GBCDQDqjQvWNb312GNZrXnACyNZyYXVpWi7ufG7KqVWDA5",
  "key26": "534NpSwfsiM6GntvDxHEzTpEnmzY5iarX3v7U1oVuXtdaw6qXjemb2pdPAyGzah6Y87vAdeM17bdk5sYAM9WJ41C",
  "key27": "U9YJcKKDK529kmUvhLZb4u3cNURJeEvnfpU2LXaA2YsYF2zKcoJXQM9H8eHpsH6VxuD8YnqUL6HxJrsdjGyddQY",
  "key28": "3eGBsGcdBEKeCidEJj4tJggGx15PHuMr99KpAfySJvBJuNruaYkBbKjwEvDJg2XF3h13A2eiRbKDcTSYewhsmrZp",
  "key29": "zYarHiAaaEpbmheuY8dzS4dAEhXr8BJAxWWUu2W3Artxi89pcTFuvNVwYBtGrvN9D9QcaPgLvgs78C5hoFaC3WC",
  "key30": "3XmEbZqEdZFVX6mz9YzhHiVMuRdDy3UjSNaooCwgHbT8ZH9KNiJhmgcbJ2dQucuztsGgenp5BDUuQSFiu8jmm8uB",
  "key31": "RoFja8gN72YdDoCUcVirwCXkZsw8uMDRWreAEJXH1k9dNUQkE4qvxpoQngkU61NP2qs3XEnZ5ThWQWLfvSyEKbK",
  "key32": "Wqkrk5PB2SWgtnXzjcC6rz5qkaZ1eYywqZFuWvYto1Y4EXWzmEhPnQLAWUzAUiJJSQvzfFabmGcpVoRR424qg1t",
  "key33": "FfcShtJc7qbk9JRFFdsNVFVTFRrfqAzWhRECUbUjmD1DRRna2GbQa19z7GhpgmsUkB4ReBj5CUyZs7WARHDkv8r",
  "key34": "4jKmeNvXT6czuk3ADj9dRC1m1Am9KmwFWZJeWZrsR1XrTAabU1zSWVmyTSrn9svwpRJkURz1SqZBeANc364buWeU",
  "key35": "4GjPuhFAsbqjem2uTdGGhvpx6rXDDr3yqsYUoRDRz5MUsg8qRNRbRkWqN1zRP8wrK4Uc86JP8r2JTgE7as5ranqb",
  "key36": "5aQ6csB5pAtzVyfMueXnoFDA27LWiRQPVFe7fzciStadNss857Uzsg6aSpvFUjeLmCVL3mcWRRzvbNjdFktvWZHV"
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

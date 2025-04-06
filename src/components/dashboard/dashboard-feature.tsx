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
    "3jmA9dA93iVfYAMyNqTtsKD5Ks8SuVd3k1wyRNS5JTeSVGBs18kVyRse35Tp4AeCzuiLePt84TUdJQzCn98m7L8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fbb3kyRLTxpC8NiLjMakqa9b9v8EKeGnf8NQf839HrRLsAErxB5mU2HseS7Lo478EpKdGafMWVd65UEqWgUvULq",
  "key1": "4UFri8hbxxxbKz75MADJw6ZHL35SwWNh6TokJszurMCf9iZSLuRksEGfpkhVZ6iFJjY6BegjqdPzXtpWb1BVoJUF",
  "key2": "3jNfuZyLoJ6f4bzXnx8mxwYJwQVnwcJAJDyiaCPXEkTbDZ7xu7GpxYMdhKXF3zPrKSeANovRBjn8L81776PMcKCo",
  "key3": "2E2y4ZVma62Z6yXP8bZBEiXQV5qSg1WTWTNxTXAcjcesgQvDp4mXZGqus9HyaiPDZw9ycTfNuRf8v8xxi8DsJkJe",
  "key4": "5kJrKWsQbCjpAGAH76CijvVaeezteuSuZdyY3nx6PsrDbqa1VSd4Ju9UcLK5ToNHZx6TmxxEqPNs39gV61ipHu6f",
  "key5": "4rnMXyBfwSjMmqGoVWMwBNQqRwkV3A5kFbhSKC3NHFZd1fS9ah1fBbXf3m6y2hW6WFaVQR3er4wCAe6XiQj3Lfao",
  "key6": "27ADYMBLKnKFhqJrmYzTV2WwrAf5Mmxx8uPZAnB1LDSGU5dQhoCULpNf13Jv8CquiNAP7ptP5L8zi1mTC9pWoaim",
  "key7": "MLotK88EVMSocjNWg2Ae3nPfK9HevHcca1VUfapZq2MG87MRVVNf6FbagBnciWx33TKRZy1jzfiAuptUaoVtQ5g",
  "key8": "4VmR7RKPmviQ1QB8Tnx6zQWBqb1Q5M6K4Mr7QdVngwmnvQERczSPaZLKJzWipCiB4hWaLCxjvWs4DdKs8FqVscDv",
  "key9": "5vWmiPzys7ctnwULgJqu71FD4RNh47wEP62mfcmCRQ4yW8gu5nSr38h9yCBgp2cYWhgbZ9N7SfLye6vtFo3FgRW4",
  "key10": "5XAARmYFa3GkNYGNdhsdb9xG3N7386qR7WCM9Mxoaepv1ca9v5uCfY8DJPvz9xRhAiJVAc6SJJZQzhN5MvNj541c",
  "key11": "4BfHkXmg6ySxpFCEq7WyAh4SPPtzjbkHHYCe9LRCjQBZ53Di2iGz5PGoXM76NLmS1jJZr97Ld1paxnWKbiogVAvM",
  "key12": "4qTnPpeMXiV7EFayqY6JF7H4SSkFDnJPs9af9vs5YnfpmxNaBJBp9XDShz49GjW8hWuUw4FVRcq4gvkfyLz76gnK",
  "key13": "NcAPPLT9ueHZhnC4QuiaVZHF8AxE6nQFf9bCor1LTZ6ixfXfsTxyibTD24DihfWoEfbPqPZsac9WZr7artmBfPp",
  "key14": "abrPMSc4BbBTxaBueTruAoh7HJG8s5Bp3qq6ymUFjoUQ9Atv2BhmChEYatpmuGtChgaK6qjrKgDarVJZXdGdssY",
  "key15": "5YZq65Et6dx2Zp9js4KBh3yqCTbuKsS87eLiEw5VjicNiwTMbxLwcG365wcHqG3jBZ7bFgK3kvuBrBduigJQUamN",
  "key16": "48AYwXTYgoroyitzGEuYi5ukBkgYJ9gSqHJ9dXXn13e9iSJyRMU7i84QPaQ33HArHnE9qXm1HZATiuuqPsvLBoYV",
  "key17": "51rAg3RrBxLgA1EYj7iAupxJrXdjKBEtKf5neJsfnaQwdaeRWWnmNqJGR5kbBwiDcaQ6q29yUmfyjhuvcCVDMoau",
  "key18": "55rNWAcqfdKEeTq11SEGpNL7gCegHiypKXLVuZ28TJgpEp2HNxoLNLG9RbEny1Tm9K599yeta6XhKSjSvgL7YRxQ",
  "key19": "3aLprVopp6XQxjZxcGr4UNKt53WMpCxgv5y3ppbUF2auXP97YLkNTvE7BzgeJdekbounqMkP9mhj5A984TAmYyn9",
  "key20": "3reCVqdMn6a1VnzKfqNK6QxCyXhTt4hyTuuTopk4Gw3P7rLa44SK35AQyDWr6cYyGM3ZKobDKTH4FJY3RKXoNZFH",
  "key21": "2ahKF8cLFuT7jgPoKNNqVU5CcaQq2x6499U845YYLi5sSLgqxbGw2Quq5BWBL9obVnd6KQ8b7ut4NYLtXZXMkgJH",
  "key22": "5KuS2teRPXHuFMHdgcHecygosFjnww7QMv1WvSmrJQNkjS7TrYjqsBuvJmvnRCf4nnFwJidkfzKHh9YrspoH9ps8",
  "key23": "5QTqJnLvP973ePCS8cSDMDCGdqeZ8v5NrgRwgSz9VjuLZGFrbGy1gvp2cJdbfga1k3AQEZb8nELi8qF5yzPEoiwh",
  "key24": "X13t5Swg7vnRCYLR9TVS3tgHKr8Xmoec659PFyD54bUFqxz9ufTvwbL3PtF4RNDj6Zr3SKytewZrxBHbAVmtsDv",
  "key25": "3k2rbBJscQjt7iy8iU51RZEwhntKPeV6G3QqGp66JWcDLquoEYAqbMuuKWZSd5JvZm1djZLPNfTEfCpFqse7tUQ",
  "key26": "3DrG9obBacgFrxfCmjv9RGja73sbceC7uP5BMKEMgdhRpvjZbXNp91sxpyBmT398eSk8f5TN4XHgSfMTD1aGE2UU",
  "key27": "3K4YHoXASHe6CzFQ4uwxQpUomu2uLhDqhuyDQ9ukE8SA8eATNjAcNMFTotBJ3iTVuCXwBn2ZkKhA4pkmvDwUwQfC",
  "key28": "gWXwv7XwpCpmVyn86c94ic4Kj6ecPyR4MihDX3BhFCsJsizwqr35Jy6vAaz9aDdktuufC1r6MiGJL5GBwWwYRu7",
  "key29": "2HCUBeWDgtASzMAYvUxUaHfDMTiL7x1LSv7fDAjW3mKxcmh3JKE5zbbUzT97yZL1VM6sUKh21jN7UMt2k2dHSM1d",
  "key30": "62gX85XbzCP8NhpnRMWkEnagxixsJMcNbFQscVYbTzHiEUsSntZQGUPRYdcYheXgsAcvEDcWWckuo8RdqTL1kcQ6",
  "key31": "3hbVCq3A3jXcF1bYKCsTEqY1VXxhgD2fm4KKi4ZRN9rrRxrFDmyMNLZknkcfZb6JkvRtQGYsBuXjKq73uvAHvcTZ",
  "key32": "5FhtbnhDTGTcKUabMbEtRC35C7xeqC4R5D8cydxvbtDy2bL3xyYaTZjWqSkXJdRS3ojBus3Qtz5heDCPeTf5om9p",
  "key33": "42KN6vsvbjicgwWQcFrdMPVrePSY15QJdQnqfadamfmPq9qtjedKLuZFdYYD7wY5uMn9sRCpuJUSyi1kVgmYstvi",
  "key34": "57tXqKEEFPs22SNuXxcWgtyxjZvJuBzhJLuNFa4aNQ5jC8oZeD9F2RpJDqaKSxZy19bcNYu7s4RLDY4UfwwgLCF6",
  "key35": "3WDgQZ3HxM8qZqSAQU5N8iz852oL1gARwMxiYw9CHj9b4CesQdxoKn15cjWeLjVetj4gWh6yi8AkAVNWpcrYVxnQ",
  "key36": "du286QsXNh8VQiEkDcrLibXUrUGSkQruNZK5Y7bJt7EhoN2K4NFkGssyVXNjsbo4M6UpvAzE1cx3mtFLFvMwMeh",
  "key37": "4DBPEfVmbom3238vcBoRvEHv2pWhaAqVjJogs7aNwAixkKpujn7JvjhAEa77qPnRxdzgJVUfoVfNcur5DMya6yjN",
  "key38": "2y1CGSh5QepJxk6qzGF5LiwHUAWW5C8o82B1ScFuK43Hd25Povq7KmkfJQJQCcJstCzxDqVwNjSmvVdphMyJNhbo",
  "key39": "2KaBiRNQFVvjTJ8zF4617zNHFNVQpa9di9VgYHxCx9DdmcucMMVGSPZoLrsH7BBL4LfnnS6D9es4ERF1GtnErriW",
  "key40": "5eP9xCpphbM1YrbZE3hfiTGJ5k8WZciyzvAD9F1C9bX3vUxkKTvprgAikzXLRFVFbsMYvknYi446xKXtWu43Pmge",
  "key41": "3q6RYiAmcha3yG1phDUkYmsJKaX4QuB17Gq6NsjJmStQm8baHmvT19dDX89Qu1Q2UkWNEhZtYvvXF7N1UXpyqecq",
  "key42": "3WSVZf9WQAPDUD7nZpBdG5a3LpkKGrepFKbJ7Sj3rFt6wGnqERNQHfASKreSvyt3qF8rMg9CcqDGuLGJqszYX6g3",
  "key43": "wKo5HczR9Ug3ZqN8JcBv2T4iCmEFJ6MDCnJG6hurDPxLBVinfQKJRMwdJnf5AR4kSvRXFC9HMugpspLy9QkjbHy"
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

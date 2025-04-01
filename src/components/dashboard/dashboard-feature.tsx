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
    "3umfrVtY2rKaZiA7weMDdxRyUb9RtrqKh4WyHNQnAw2RXtGydNpoRDZWafP7RBx2WdVB7kNiMhA5JgCyAP5HGoMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMXPrb3gyHe6oqsesTwNRhCvnmoSZ5K3W8LHLANdJoWWYHHjJKpK5BN8xx5BtgcpjxAaagT2pcpVan7T9igdoe3",
  "key1": "gnLSZ3We9Fw1TMeoELtmqbkbXStvYMeUazULArGxL4yJ67UWLtiXnmuV7juvVFXt4E1juFXk6gzJqye7Xy2SbiN",
  "key2": "qAdUhXrvWy6rcryeEEth8FBjRPqQweVQ8i6Tttt7rzZNXH42NGJtJdkGixUu2a9cwaVUYbb4STTjMvnhvne6mku",
  "key3": "52jKLkZi6Thihkd3wE4KrdeNkm4SVyv3Ar6wJvdtsLJtcNqBzP2Z1aBN3K8Wz915rDLkeTjfVoPxvZbKyXHNMk3Y",
  "key4": "4JYjXde9q8xAx617WicxrftXUWx81Q3xq7bQPwb8wASMqoT8qq5ba7SYjJF8BUX2JZ84kHR9UTvrRWSv2DeF22Fk",
  "key5": "5kSwi9s7ijnD3Gpedew8NNWwaaFERejvGsXLHtriwpCG6U1x4JvK9b8YY8TPR3WSEP4uHiSMW7oZTwqwBVZJqdGC",
  "key6": "5AxUWtfMcpc2b7Qux7u3fwSF6zwVCtu9Dqh1eqYJoU9VRLSm2xdpfWZuXKumJXjgYbEyzdaSdvBDbAZUU4gVfAkJ",
  "key7": "35feSiGCAQwpMRsyDSs7w2psNGqXR34HByndbvLrN75kE97mdfC5baHWeLYYWuXmaT6fdfqCqZiKQb6DJXejXP9R",
  "key8": "4S6KjUoE4c89FaaSt7njQ3BzVkv9WLFHZsRjJZjwh4z6kcbPRD5Xw1Xf8n4sYCV6p5JDBninx7dwVnx4VH2m51vG",
  "key9": "5MZ4piyQDTvpZJaFu8tQaK86LrrxQUVe6AXEFuQiNuXS1wSns1h2axLJCzaETZy6fCGkKj1bxiHRweXWxRB1U5uF",
  "key10": "4HNP2QsFfvWDN7eDfL8ZVY6UhMidEbdM4wFB3Uf4Q6xS4gydwZEVk2wm2QsxVaNiTZ7mK6rmUWgGx39jmg4K2yWk",
  "key11": "5otr1wEo7568oi3LxoAHK5NEcE4Fq3ZPux124oDYMM5B42obQSSCwaboiCuLfUE9PpfFLzeqyHNFj4t9uDYeXoy8",
  "key12": "2sBAieVSjA3n3hw6jehVLReqvBb6JrJGAtzwD2Rid7YbbBXaQWbSK2axDvz2Yq3PetvPDq9M7VUBgpDNgcTHSLbv",
  "key13": "5zW6UCeLtZx4NwHiiexgdJGdk9qDBhzZrzvcs2U7TUYNrQEDqbWUttzpy6R9QJeSn3BHq1aK37LZRfxStrTMeLWM",
  "key14": "5QVrYAZQdNiairFKtnTGwngurrDKtVLUzkyqeHAbLc2ymu4ceaYsgviXkgu2q4RZu7ZFkxhnFyJW91GDadTGuZUB",
  "key15": "3ADy3e3AapZHUr7XHXQiAGMetv7NamTmJnLtdZUTX9GKqKjpKVrwydYga68PzVuq6BrbFkprKaGczBqgQXSCWgvr",
  "key16": "458LdNE8JX7vyqgjYge4tGtupZt5uHXLBU3pWWWgDA9x4w8H1B2MEpugwmcaHxTMExA8mge92WWNScjPX7asHDZs",
  "key17": "3y3cN1juXxmVzu1ZrR8jQAqLhwkhZpqYK8AUEcbNA9fUpEo3t3ASeFH9T6U7njtKFFnTzTsLYArSC9iSQ9efUEpn",
  "key18": "26aoSc1ACqUAF616AxtSZGbbc8Y8NkCDd2cQDB2C8DixxrHATYTwwtMLcCz5H79ieTzGs5cyVM5ZqCT8JwwCdziZ",
  "key19": "21oDvvJpNL5gLB81XKRb3hBz9MwWPPgivZNhB4nyGyV2HMuGVmC2VbdVmukMxpFWva9RijBhSgeEBk6DFpazNnD2",
  "key20": "3vTDjov2QG8qK9wrqEzEfueDWdoMWHvg8PeZiswPGbfvaUnXxZSUT2LLdgkFosJZ1gqZBr2pWhcTPVW12LMAvW2e",
  "key21": "5ztewDGdTfciPXbTLfVBsd14MsosGuZvQ6fVidWm8E7dURo7XdBvSpngH6DRTh8vZ8iDw9mpgNYo7RW8ncnjJxGt",
  "key22": "2sTxdiUvd3bdKxmNHLms2njp9L4vYwBEpvkSC7husAVdREGUaHSYAU5GbBHM6jFXLQvo9q7grK4uoCcj379TM7gb",
  "key23": "se9t1T6Z5JafmuTwQschS9PdrbXSJbYjzfrfSB8XtQieaNiUvU66MTY7k2vv5c1p7ZndJJdRx1sZ5VVTmatg11G",
  "key24": "LKsykuc9MJ2WoZmhXvQiEg7dMXzHfuqGFwjqZkFtcL4p34teCcyMTHRN5QTeVj2HXmaRYMz95h2NzirKLcUFqJg",
  "key25": "49JKBBuz2x5jfVfF7a9MjAVk9JmxdXbaAR91j4GBHXSj6QYQhboU2zCusT2zoVgqMPy9QMWQzgsQuh5qQYGpCQom",
  "key26": "5WnoasvUjSLr7aE1kUNqVWjUnXxhApvnmvwW3XaVAcFWXhT93cagpFmQoX9SdtqK5w6fPEUjj6evChpRrDgaXQZv",
  "key27": "3FhvVFbL71jjgg38uTc8qyXiAYrZMPr2EdyZVivYQQRmrEQReYT72PwFZQ2XU6iBbk519H4Muxo7xkycj2VVZhr8",
  "key28": "2ueu5LjEmHS81BVFdNV3kSUZWwLLGk7sW13CFnFRJ82PocmxkSQLkGZ93BkBFmVG9NS5e9ZQFCw6w3VAoTWT6gTR",
  "key29": "4TJWVmuuVfpEFSyb68cXj9BaDWsC9VjqGiGGHHtvTNCPDoSiEHDzwKAgNwdb8mR75yHRDvX9JUMFUeXmo2mPc2Dy",
  "key30": "5getwe5h38NR2YPZauGDJDg59FihaJRFFxkZ2h6SH3varn1eNromMaQTgyvS1BhMBdcNDEaGYkLb7WTBG9kiANAQ",
  "key31": "38sZoQZDbnTtGLAdPT9Q1HmkgLhHD5MzEfPtWZM8GTVP9abhkBSMwh74Uk556AWPTNCvphydcBwsBSoprKMAGras",
  "key32": "3AchjdkjUVsEb2ZDZXWQbfW15vnTcRqKN1ZQovZ31FW9ENBWcEfj8VjBj8YhAv7qpakVUL6MiHECnWGucPPcE6LR",
  "key33": "43ZRmhy5byfbT5WU2GS2BCUVzweBd4Mc1XrtwtCwDz1KQUwi3jVhYTqefSP5zjsg5u7GZFjae5tfHQNtF6ye9VCy",
  "key34": "2Rhfif4stHLGaUrat235BmKUeFnez8LSt1aGtjak133JsYC7kAswcdEJZCi3kwUuMWun1wnnbKPeawRgid1yVgZy",
  "key35": "pW8gpWY1UEGgurMEkwcd1Cov5HGn9L87tGoTXtxgT2ZowocRYMnTvTsm8U3rCXzGhMRcg7S4TqfnRZk7WzYXZy5",
  "key36": "dZRv2gE32sQdYgaMDa3SXERH4mBtyMbbwRR6RwgZEVZif5opHTBMkMU1ekdppPf3B2cVzGuk9dq9Z5L23twPgks",
  "key37": "53YH5U4vwmz249xPR4LsCvE9KSSDnDK84e4DfKR1ZGKx9m865eV8yr7dJTisDqC1USa16Lhm5xStELWvQECN8a1y",
  "key38": "5BuD47LXH18TYQNjaXtJdyQGDqXGfxyuqx7V8uH8ZKGDanPMb7BsZbH6TZDXvfrjDw3gcyyzALxYW8w5b89fqyfJ",
  "key39": "5zKpFWqqWqK1BChw8VrK5JohBgWbbik7A2uuxWHKxWxfhBfGd5MTBmQiCJ8SboZ5Qzu5AY8qEuKRombDR2jezssu",
  "key40": "FGwFBVfxDVKqDf171t8FPS75uqAxSsn7ZnABPEeHNNtRrfp77DuJdPKMretf7enYssBTjtD2Y2hgSRhP9TsSNsv",
  "key41": "3QqpbsSDtEf2iTrbHAaFq8KABQYeswogWAiSq3EiKRSwanGYcFYWmTthTtHGGN8rGg9dyrZALgxTLi8XYQG4465c",
  "key42": "5hMh1waWaJe7Vn9KSVGyD1iVX7m8Y3UZ5HNtacFZYegC28StvUm1SLySDK2dHuKcAfqopRpigWCt8C9p7EX2Zw2Y",
  "key43": "Hx2WztPZgp8wHZKbyz5E3appqX8NkShX9gB5G6PAtWtT1LRozmUB3rWoaPvhUQJkf22xaZAbVYmzU3yjPzWo7E3",
  "key44": "MsUVcXiogJgwp1HUbd8q2K1TYQNXZPL7AbyWdbucSYt6u8WUdFeHU6CxPChDSumcitQfX6VgLiehUNHD3UhRX8K",
  "key45": "F7k52UBgiEkcHzpPSJaRNgSQQp2frxEj5vEdiyyrx2qYgSyJp1ij7TQmvu5yahjsYeN6RtBSheJvvjdjkWyZStt",
  "key46": "4rmEiroaEJeqPfwTmTUTpqgTqxGZ1absLWWHnXfVuZjJrRw7P1aJjTJDPK57nfMb8te8suRT5YCHEq1WinayD9v9"
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

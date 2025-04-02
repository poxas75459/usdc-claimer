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
    "5wjtKoTXoxwDQTqA8q5Y5vdFAbswxWMPXByVMJTNzZweSt62oUAc7Dq32KyHCpFg9KxS7akY9gu1qqTeFBsLvaew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CN6i2P6rdE7p9qkkfD8NHfGxwi7t9mvfJ75uJ1TmHnyQEk9jMQWFjjT5ZNUKNaJ2UvKeBgnXnJyiDjhJMHpszii",
  "key1": "215XHEtpcQVhXKmgeEjNMYpWmsZDLCTxnsu8s3qN2t8LFqPdtoYVGUbA6uEtykXjiGjBaeAoHqRmGFmuDsAoFn1z",
  "key2": "3z2FMG7VXeyQhStuaPHaZ1oi9gcbz8dX3y4DcqjECd7YNyPfE2UnSEUfd6UeUHMQ3L1GB3ANT4LWa1VdjStM1HxD",
  "key3": "3KrxkfgyaEZPyRTDNMPdRvYqRiQ4zKi5fjxTg6tqSSdnTkNUwMojTK52Wi8NGpJZPcRvzpsTvjnY8g9y5mdm2oWw",
  "key4": "3KQVcwt7Vs5J5oBtzY7w363N2HDNHowWbSqWwNnLtUikpmgVrQpg44AVQub24g7xJx4Vv7wJWPhLjK8H48E6PntU",
  "key5": "2KiWNdMC83iXHLzTBsqrAhsfYniM3tG9wK8xHdpnBYnVMZ4MiU4UKziscDXpGth9zQM7xxsWtE7j63iKwAwPuJKX",
  "key6": "4h9yJwNCDCpXtoNNB8qgsQsYMFM5C74GLVGhExzGemjUA9uAzqJkc3aheD8jTAZ28JuHxq8dADRzP7Miv7hKa2Eu",
  "key7": "5HQzQw9yn17KRGrmkuWy8aNG7eG6HVtmwbkMdN7r3BRw8pKKK5vytDH7H3oSpkuAXztaXZWEoAZowARbHZfLy3af",
  "key8": "st4yPiTWNe6ENvbxcwjfFK69y66fTzicnjJMjZUBuyhUA6uRuQxiuHKYAxuQaofnqbwDpKdBHtipj3jLqQqjbkB",
  "key9": "6noFxyAQVzEfmfzY4RF3ZZeVqhAzCccuKZGKaJUy22QVz4S64jJMF6TDp38uUYkNpRz3QgPHHfmueGktQ1Ze3xL",
  "key10": "2PHvjJ9vD5oJPmQXa3SW8HGuj9aHu6N7MPQdqhQGCXtMaSvqgVcAXt2fauWvvJ4cJcViT1tqFFZ9FiUrRdAnUwB2",
  "key11": "2jfzGrnn9DQZpHjFpViqssyJ4PUk2NRG8bwAuwnLypq2TvocsWi1wzZzUpvsxJLbtfxVoJgaHbVwFAd85E5cSLc1",
  "key12": "4GcRBfXxZGS5DaEbXrQREBRJCu8Xa5tyDXWhtNMif1tk4QdRhMQKSgZNw5BbNbJSeuvCXGDdvQ7SzxVn5HGTUFxt",
  "key13": "3NDDXLXYZPU9roaGfuteKRuLJqjBD3Cqebuxmuf6RhQeYnLXvvcvmEBbVUQC4x49UsSixJBiWcXcNLPCNJ45ESAw",
  "key14": "cpcStvEf6dAfF4HUdELvM2uiHo1FPKSDJdBoCU8GgWZ6inbohyWdTydRLf6jJA9o1we4maeNRPfa7u2Vcq3Dupu",
  "key15": "v5prSoLt2wsCBgJfKdWZBxTUrVYPA3RvwdVhE5AZ1HhwXWxkynEaqwxKayyubFj76f7rz8E4mR4e4cynX4KffJY",
  "key16": "5PExg8U1bnPbqW93eYrgig8Fm1gCg5igGGu7mh36FfzUgTQGJh3HMdHHpzEU8Dz4hJ7uWe7mCHeqKX773KPm5sh6",
  "key17": "4y7ziyeRvaU9zgzWWJ77FoyqzHFjB1GsSfbbchjHJWuJ3uKkDNcEPJnFJmQG7qgVjaA4A3GE662h8jQMaCCsyRAq",
  "key18": "8H3Q8fFtsiMq6hzNaGZE6w7ymhfBoDhT9LkLYJEFA8ocvbiaiakee5SF92m6BVchVvp1mnTvVb8dDpi9ug9W11X",
  "key19": "4H9rvsMtWQhWJhGJJ31YKbRjP4xNsri13GQ8mSwwaLiWbn6GQuyJdwhqiaKWb7GNVYvdxJ4ipEBc48cJi91t2rGf",
  "key20": "4x8Cwx7Gr18Uf1yiEKssoz2ozrP6gq6p8wA3gWqWKdGY7CbBDRNMNBdkKMVVD2tEERaLEwMv8dDA1VyjHYCqbGFQ",
  "key21": "5Mo4jZ9sKFECHjFHgPyDoz6xYd1PEQaj7uRU6nuCkPae8YjxNjwzRTbUxGmYgFe4MgAYT2thmAefSHXvTZggN3RU",
  "key22": "3bYp2hM2svX4msmXrdCb552ikMdqSC61DQGfuARQTD7cJK8GCmm3NrYiGNJ6Dy4K5o5y1JFQbnJoStDSThZMkUSW",
  "key23": "4m73KZd3UCdFyihxpa58uHYtSrS5ZCWyK7mvZrrpuCXdF6912mxRetSP1tJZBpkW8agkM2w1qvM8Mw3rh7Q4pG7g",
  "key24": "5DmTHbm2hu1TDhjB5V4oJv857KzPVuppvaekJKujQTnyr2g3PoNeVBuGMdDHHYwRoreeBMbkJmaHbp6AEEdLZKo",
  "key25": "3UEAbWk175YKhcfCs3AsaZwZT2FbVBHxyGNvZqGSxLtFvBBsH6ZMDptscNDH19RTGHc5oQcvSM4N25xSWVEMYqnF",
  "key26": "TTEq29oBtGfUwKCbdeFc5S6EHcZppUqsKYkBepygsrQi2XKuibeSWPqfx7EdNWHz5PcecFAMwAbqom7EQ6hGYGa",
  "key27": "5FUzHGQQfoRDehWb6LpSrYWKBXbsuz5AEKuy4MV5Qqx7JBMJKgKe2vPxsyeC6R1DmTnnzEBVKhkwe5cVXrKB7Lor",
  "key28": "5Wb8DbZHF2jPmZikXsHeLXgwFQQ9M3es7VHTYQVt9TvpN9KSgCDKyJ4oWUThVGTTqJLTuU6QXteF4XJeeuGzyX3o",
  "key29": "4j4YWu9qTdeaPKyhWeY1bwu2K8MoXHTAAiMceuDtS1xihmX3pgR3fvLU32NSknUtFobHiqsXCpiA57NN1dNx6n7X",
  "key30": "2uKavSNQgtRFEaKaVojg5E1MpH974FeaGC19K6sx6Ex45WsGFfNnQpfhdwD9kHwShZELd98eyWZBLAnPRqU8xBnd",
  "key31": "CzN41kKjjXuL6NQuQ1aQeWK9g3913aTkQhj6MpU2jLMk1RxUkNVEftpgLCRvBBRamX7oC8LneUpomCD2mxkGR68",
  "key32": "4DPpNRr3U8RW8bu6ZPYWWLA6e127AxUNizST8PjU6b8gPeKDFM1TF8xtQZXEYudBftPCy8avfBDoQnGAm5uwwNJC",
  "key33": "4mo9Wide9x4i39ZNZoq86CJuXf7jHars4Me3ZHS1ChWsHgyTu9r4Fx8Esx5XAc7sCEDmwUxV9PXRNfVbKFKsovqa",
  "key34": "3d8CaN9mAAduQdgXZ26yH94Max7EVSQxL5vkFGGMQC5EGgM7WBbuQJxoUVB5GYJLVh6gxFSEDmuteZ6m5XcG94Mr",
  "key35": "3QzQNbnp9NYiX9DP3KDusCWnSpzEnrXD7Co8vwLJYdVSLJnqKy4UgJbiAHkBUA8bxM9z4aWCt1wJG4zVqYtwzYBj",
  "key36": "43JaFg8h1EiWUY5W8xDXDtjHvmM6YBSNtN8zZpoojPkn3ZjyZ2oUDAj5tXUVUa2M62SUf7HmtvyaSr41PGKstoQu",
  "key37": "3a65ChYcbyvXanPVcxV2jMWfty27hr8bTjrumpJgBv6Gut8386W49xcxoiL1gMVNcDZYHNWEnhrLpw8L5KUC89gL",
  "key38": "3gNDiWBEU1upvwPThgAm38Mp8X8y89Aa46fHdGyPimz8HErnwW5fEShLjBMNck9tXetiyqfhmrGXJmYTRqfUoB6k",
  "key39": "4kJqBhJBipq6xnyyTF4EhoAYXLjAc86845sS9mdw5chha629WeobPQcDeJxaRLiBdVZr9bQ1V9UkQvSdCsnnuiWW",
  "key40": "5hVsDAAUs2UzFjs1y7mJrdJFkPp3QwXeY3eJNTvpYx2krtWgxAggfx5K25DxWdCnqVdAaZ4rWCFingbz53DKeqcX",
  "key41": "2T2JdXpNaQjTDwfk9dg9uQQoKtx2qPzjLStC7e6o7scLrgi759w1SgGYU1wkrDVxhgg95bmWu49JvY4NwoAbu1wx",
  "key42": "4Qa3K8djymx8Gs3g3awyVnFXnTfd69S9St5Zhy1WDhVzstcqjWYQiCMsrMk2ERyh6KtAwdQHB5SynZFUPiEiBQwc",
  "key43": "56Jt9fFPNYDWbzb8kVdiMGiGWySPMZ9Akru7yNh32oaJB5QA43WpvCxrDvhpmMU52sSzcvKygGWDjNAr5FnmLRCM",
  "key44": "27zG8L44mnRRCD4vraCmojaxz2VVTSeWKkpsvNZV1xznjxrjJeKtAJNVg56d3Xom7ucnb9fHhWWRyzUHEgk4kv3n",
  "key45": "2Lhb113Xw3gnZesW8s3mMNpGuueCBrVhTu2wMgJUQ3DM5qAVxCopMDWU3oo6fSGQtXwR384E6EmKNv74UrzPN7TQ",
  "key46": "5Sy2CKTgBPLm4c9aDGGayGak5zq63vzGQq3czsh3pDo54wLh9MjTJ4d5Rq1FUEKRDAXKtdGtmM8ZC4sBneFbgWkD",
  "key47": "z9bSwqRQEu8eyr3xdJ8ND9rrQyynGQSMwxCZeHofdruxPxk3zeKrncbZGMhgupaPnwSpAWKaQCWGafrymAwM8oX"
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

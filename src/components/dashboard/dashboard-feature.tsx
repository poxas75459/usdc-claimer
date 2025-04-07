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
    "gfw5tVX4cvVQxjmwkjJ3iNTcVGkbciJQexw3hGfh9j5uCVCC5mH2XMainifKGRtQf6PZozX8jzTHFDV2eKhc7cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdwEXZrPTxSrQaoDRpj9SCNQc5JL4fxAGfWDo5qnR17bGrKvQX3AqdLfPGo9ZPjoaFERUBpWit517MD6Lsu3t7H",
  "key1": "3rHh9KQTNjRPbUa7vZ41LYBsFYCJacrRPLPgwY68Yp2Y5iSeCxQc47jZrgGuHGXXzPxmuBgn3e4axexAtDr9ATWG",
  "key2": "hASdEk4dDAkojmyo2nBgQRaWGJYNLfvzTcwK6yRTXa1GCnMYsht56XFzCVtDUo7aqBUi2wWKKskbaZJGcUYsQiv",
  "key3": "5M23n6VBCFHmPGXZM3XJ54d6auzWLP5qBVogY12pGstKDTkxEWfegYXdyf3crCAFbtcBwtd5yrarXqKvsrCxYizq",
  "key4": "2AhugUTtgDmRNSURcewz5owP7YByzmPNV1xufRbywRQYweo69FdyCy1NduQyubAVVHvC96K3EVhnffL7nxYaUPp2",
  "key5": "3Ypkor6xGnG6mwBak17giV548i4SZzENuoBSpAg8gTvUjnVTrsrUoEYWCbW4effZ9pwk8dp9CkEMAxo4p4hhSXuh",
  "key6": "DTKTRkARmTs6qiYdj2CXNdFFDYdQy5gMLEtipfMUhXazzYaLwonpwAdLQWvf6CT1WyjBA53EpvsXTDCb8udjntH",
  "key7": "3v9yLnX8xAvEn2QdD7ALSyt7LQ38GzFiCZxJmYrieQYZ3GLTrGRbWX2Z3oQjnF9B7HmE4fxUxTjFVojV6Q4AHtJr",
  "key8": "2Jyprz4J5dNmubgddtbAJBEG7UgvnWUd4gqTLE1nyUUKk31ZeYC75m8UqjWZsXgxT4xhRMkJcdJBHtDC9FoutPUp",
  "key9": "q3MgeutBTpt4QZa7eF4uJbX2ifzrTBg72aNiaDU2AoCmsJESG2CGAJbQZ2ZbGLVQP1jtGLxcsMR3BuvLWMEcnbS",
  "key10": "2jsoBk4R7W6hGK2Tsj24x6AjLZTT2rWyhA6Dr5WL6PNjr17ZcfSZWzyDBpQPetUGoTtuP7myn3uNRhX9EbmjfnXz",
  "key11": "4v5YqvGM44HHyFbuxsjNw8FcvNpt81ECEEe8taWWtzcw92fhqjuzEgoGrD1qbdNib5Vyj3NnuXZgemJMVXFtDjMt",
  "key12": "4YieJ7Z5YaZTh4c7C1xCnCpaqkE8FZdBpQhyHbyoYGAANzWxhByQXB1JQKsJJr5Bi1dzduCk7EwypP5zQR2uyFr2",
  "key13": "67PxBaiaRkdXggexkVrTpHzzFQ57GfDXZbHJ75U34ZLWuiA1QPjMyLe8g6PXCRc5Etu9iYuq6oJLVcsSpE1mheMF",
  "key14": "2E9dJA6amRW6RGGX2Py5CEhs3BnRMM9jUBynRgKDZMtrEGdBtWWdDjp3HEhLgKTVg3ynEJjM674TyPieYrXC1y3U",
  "key15": "34JSsHv3LF7vFrArdXpLAhDydXCnAZULmsgu2ZQHBhnJmcdkMBe926198ddVe23PeW9Q7CVyoAc9DHjNiuANX5xC",
  "key16": "3yiDu9kan5cdXdrmxcG2vLmMSVQ5XNv3TniaYn9uBDTEC8jUUm6cFvtFUB8fpwx7UqPne6wXeJE8udbegK2npJ2R",
  "key17": "jHQoX2NG2GbWQ6KAa5KPXB8HptsdfNoWGXD66KNCcg7CHHLTFYGvvGTehMuT9cDsfUuGF4hcsyhgWjibLhNoFZB",
  "key18": "38HWjU4DEVfhNK29odbYwiGcWunzPUHTUGgZ3gsmDEiZCknHGCHDjV2Vb1rx9icX27aHrFZUEKkTbB4Bg54rBTWq",
  "key19": "3qzErrbZyeaFCMgzrmbSv2QZa5CTcsi3gHc5KRCC1hpcPJqCZGJBxPHqixg6dq5k75sC66zfpGgLQkkjXodsa2wA",
  "key20": "ZikRHQXtmB9iQEpTUU382QJQLAuZesGbbDPz5JQybP4DSXEnxu8YPCpw3QPVKi5FuLiDyBieQPNhtVwuEkbJKhy",
  "key21": "5jkgNe52G3TewRt9PQ3jaKjmw9z1UvL5ZyWDGLBbtZ7bnbwLojU72CRk49JofzWNgoSa2VUCyhuud5ogn7t7kaWW",
  "key22": "mJ8GX9k3ABCrGpkHan1mFn8EPLpznPQd9MiH2ew883v13hmvsVCYS5zXCLGzSxJq4XWvkaxFkMrQedvm2BqCcoJ",
  "key23": "umMuoUMifkwy7J9v6pKDKFuZwP9gRvbgkphLGhE3mYT3nCQzr6xkRhwuvmh2dCs4RdRGZvvjhgdHFJKqpykphSL",
  "key24": "MhzZAV38niziYcW6WriWPmzJw1xQ6L3LhUNpf2Wixd3mC4wJFzLVjYTtt4f2fY5Jg3CXqagyQSf6ApL1utGWRQK",
  "key25": "281gNxXM4SgF8AcDi9Zo5CQbE5RCysatP2un2QhLptKPdzZSkkTBsj4XPtWmCot7HpZJzV6UMLt2f61Dtz6AWrig",
  "key26": "33v32stkix8KLnW1DrhqaRTQf4KrgGqPPkMjkNcVoEkXTu3aVuGdbKe6Bdc1FBXbwUSKVQmA7bW38q3vePA8iQwe",
  "key27": "3UbAYZWdMJrNAgdzQCddEniLbr6TmZSQmsEUe6kF5yrhupmSPwQDvdtxzBPd6EFJQg8nGU6gH19Wdh2pCUUwpmDe",
  "key28": "65fx2b7MGwyxuLZHHdAEW58EaeUNiBWefFwR8fguUSJxgUTGfzE59vtRyb5YaJNdK52V7T1DoXwQkyn1ZJo6pApM",
  "key29": "65zUNTWyfqL9WHbU8mvvmWEEaYhEd1SRaXLssfaW6GE7mGzrUvAdLPJ3wHW6a2zKE6trhz1ExABgey6zSyfJMZXp",
  "key30": "2pBfpcfeSz8Mjy6ZdK7bTg7QeduAZpJ1xaMAwgFyRpsfoeEMC11EkdoNiMGRGvE1DC5R9GJegTq78CgGrsZ7WYUW",
  "key31": "2yhz74fDBnEc6LdXd4uGWxJ7UExVJp1cSkNHX8KEfRkXu2yGFsJHHg1zjNbKfsemHqtz5ubnydBrtoJadmDHAYBM",
  "key32": "5BjUUNV5kh5YMcGL9AwwUqwihzt5CFAr76C4Cbzyx3JLnzgzUvXZdGbuzRvcRNbR8Cji8vrBtSfT81cEK4JkW9YU",
  "key33": "SfdMgkqXrZsC2oXNo9b4dnCeqc8phq9E7gzGC5VVarKbF12GLFEZXQXY1gSNuy13D7iBZQVM3dZmovrwt3Ncjg8",
  "key34": "3o8JwWWXe17JjLjJnMRWY7xMy1orMuagnWSJ1jAm7jpwnszsJJ9TZbkukQsTeNsZoMKp2DZqTJGTCkVqbzwSWGa",
  "key35": "2u6dchSqBHc8tP8h9rSVC4hWd763rFeeKxGvdBuGSRVY2TKWXyrrrMf78N59tqH7KhWRfB1QMS9BqhbZGDZ8eUAS",
  "key36": "JQKzMyTLBXnfAQmcq7pHh1u3pKZFgma9V4zcuoHmedtH89RRiFGSSKqAcu3BuGTJrWDCtbzr8phkYRpj8dcrm2c",
  "key37": "42PgAXhETyWEYirx5nbaaBkjoGUd2KCNU2V7F15w1QuvB4AXiQxGKrDFwVo9ihCNpfuWYY6Lk7Ts5Nos57jqChJC",
  "key38": "4XYaDWAeJHu5DrMA1DNHVG4bd8NKBkuA4Ds23sHNyzhvgR6bT3V4ZtFSz7mijdYCWcsgQjC4WCSiS6AsQwKvtiXK",
  "key39": "u9rexksAFFmwFp72WehipzJYaoH7YfH32ZuS7dkVWtZTjkwV36qPghDCsAWuHpT6pFV3waexFjCeUc38FrDHPjk",
  "key40": "4cQzTs9SvCuVRyAcjyHmMq5NwVTAfnekRrp888NRPB6ohcVCURZEYcVz5HvYZU4Eso7qJPqSviMayV7gnzL4HM6B",
  "key41": "5LiigwiozyWgncDr8wzATDqooZNBBqMeqzNc33J1KoKwr4nBHghg5T1ACztJAXCSAtZwm1PQW2C9XpvHBqEkCGFY",
  "key42": "oCjTbRyz9PmcyXa6g47VxTVTDQZZVMhhq1i7C93s7anSq2qti9Mtz979nfvu5wYvukpjPZV6mXtWyPy7UNoJQxw",
  "key43": "4cExTfvfNZN275wkubjNVTwPPgi2FqWZpghNKSP1W29rzgHsruumJ4psySfkgpAdewqoNvzUvQ2xxC87835MWe3p",
  "key44": "4GcbiXWnZTuZchLJBFGES8dC9QvwSSAKq6EY1aDkTY3fqZw7nuxfPbzFsNA37iB3MZvvQLrqMCGPhvJUnTscUjse",
  "key45": "erW1xmBpZvtaiS2sLZWtPCeEWhnpLPDwbPBNXZrTNP8yJof2etN6PB2Gj7kys9Y7EGmQ2sDQ2ypScTox8aepU7q",
  "key46": "2RNrjgWqXrUxqSS3SxbWzsSfj75jyPeR3ngiTvAahvBmFCkvWm4mkrNiAkWdNiFEaQQHWPApojqdojqStbmGk1da",
  "key47": "24z6jTkjQTm28psbmu4tXoRggnk5he1k8tHzdJntEX4bJNbFoWhEFjGsHiMCiswSYUNmpEm9JwzDkM6eWsdS8H19"
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

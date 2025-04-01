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
    "57PPiaYTCfRXiytKAVbNTRbkDXGZuSVZvaQnciSbfxi9WdtCFbmA8qnHWYA8zhJRfDo1KaWtjhvuYNAnz9g28Gqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47rcgTwrNmkDULY4piJcshu8duKZCAX3z33pipmmeBH25q2W3NYqPpiQHZGLjcwGzgqznnQ2qVN9NSiHCCLwier9",
  "key1": "31NexRQQayFmJs8VJwUWCZbMRTrVVYAQzK6Z1ym6etuHXkLFBFS4ed832MkrCLT7N2pgTthThuNP8fPcNKV6gpYu",
  "key2": "2uJ5tqwdBdgv8q5UxeS2sox8oh2nTd7n57Br9JBzgkxpvDGtHhefThNKGkM4GkH4RZd8NGp1ALTTf9WdyhEgzVh8",
  "key3": "vZGK6gRo6fh62GuHzXungsPEdb9GxWSJmfSpMM5sY8UvB3zzZtyA9cSTrKJexbyZFTLU8GsiRgo7fzwihs4zEhs",
  "key4": "5mvUAA2WwS4JZxTL5FjYRMJdn8T111RVrxZSbcJzXUn22acgdtPfPzQ5HkEifTsytmPwmZASb1me3MvGyuh98Ecc",
  "key5": "26vWqRpFo8AVnWEKL88Xk5FbsnH48HNkdGwxMQn4Kq6veuQCKq6HMuFSmnQQDnWJFuZNGBTbgj541EZtQ14EhozR",
  "key6": "4qzRTdVtiKHj86AoVyZRYaW1iPhc8P1bGyHKdXZuRL38zdYjDPpYEkvhuNrbQFHqNvXQc7hKj7bfoTaKCEKP8FUX",
  "key7": "46XxmKyhosHpQBqZmwLJN2dJ9x7JtKAwzWR7XD6gfEVepaWfxMcT4MpTuTzqa2kNo2icjb97XDHCWttwjT7ETyg6",
  "key8": "2xeMTs8DgnVN4WaUt4H4mj8Xp83xUXB9JyYaQVfB6eMMno4DNVmSHVgtmzcfWNSfMTeingeDibDBa8ANUmo1KQnJ",
  "key9": "fue5Vc5R7quLJXtWajyfvUDbGXjWy6m3ntxrFnfxqRd16QC8FWTbTAwhBrgTu7F6W7ofX3T3ahYHM27MbhZLhyH",
  "key10": "4MaZ9RHPErEerL5Bt6T8Byim9wb2RYNjJTt16nSCCuDjJEKKNPcpuU1NkrCouEBsiZyYHbvkLepMgkgziS8eft29",
  "key11": "5wccpdRwR4giVSttb5EoMkYQL5T4wGkLQfJU4NjLbPVe45evGHARhGJtEJnUScKmrMkKHuUf7gsZiBi897hPB4pB",
  "key12": "2gJGY9oE1vZ7P3dsn8X2BmRama6RoqJmP4eGv4MdtdG2P5CKTn4gemSGi6RBS1oXveD8gzXFiWLpunbYzqzLdubE",
  "key13": "318SQup2PTeX7ZxfnFrHpC48GdocSSXLaVw8Gmmokg7QPWNJu3cToEF9o8xuuCY3A7sR2nC8sjUQpRp8S1Q3EUMi",
  "key14": "2jV54U3uR5FBT42MSsE19jzLzWGRXzym6MV8DUuBzuj5V6u6tixLpwKKsvB4CrLTPDk2EK75tXKRgh7nN8bgUqaN",
  "key15": "46D6S7iVaMaGNbaKqR9Uxu5atinUMdoGSnLxRS2BdKXVprshDRMQ1o8yHhW7bTxYVQnEqZg7YR4ua1g7z3MDNfUp",
  "key16": "kTqvkLVEv9qnnNaTJ9mJuk3ACUndA7Qt871YoijEdA9teLTTPGonJaa1qPPGGpDFQyMTtG1v4hSEwrTPJweWU9Y",
  "key17": "42xn4yfpU9odKiuqiKJB9QoWmv4QoKJHsQo6BXySjbFiinE2Jtuh6sZSfiUJNdzepHa2CpbxJ6ZUBwvWqEL8yCnf",
  "key18": "5JryS1Sb2R8k7mqNdB7R9JEmrBphNejGWrNy8RRLQ9chT7qHre83XaoDme5dw662WvCGZz1Z4oNnBhCpFkzsgawo",
  "key19": "4kbX8hpVPZ2J1ypZR6GyPGj5VVJyA188RZiPN6znPpXySTbdQYzDHWTtXx4e8ZcntvQTCqwTTzHoeub8rMUpf5Ma",
  "key20": "2irZcXMfnHWdK1jXXEdbcoNFZtMp9tRX4VeFEtdRByWSRVxc8hxXzAZyErTahAKa3f6QrQXq2anSLyjNQgUCGEHT",
  "key21": "5rf7WU93jyjNPkxymi8EZVGBUjcyUgzKjtu3javCTe3eRzZ9vGPFVq1Z4B6DyKJFX7qrbR2eUrt5aZZ5v1Ahk1Wp",
  "key22": "D6DraxEDAcjtPv5qg8wfFvFDmwRsGdkoJUq3jjEvPg1q6gDk3xsLLdjpiRJbrbVkPKmxsUGw5DyGkesjVXSa123",
  "key23": "5M8Gpvv3Agh68QChvnx6ABdhoXzpyZrzgR8Mn5UTdNgdyYTSttjzsutnPAPpfc8vnR5h5kqWntNh7Y1u3okMNR24",
  "key24": "2mGZoP3cmSkHRyprkYB8TfuztcMQ1bfPRZmy8zxck5fF4eYsPtW7yFim2v8s1K1bwGJmzWbd3tWCR8UEBq5DCQQU",
  "key25": "u79vyEWoSoPpCGQdMXq43hLHpr5PA8vzGwWWop5AtA8dMdQNAnVHYKEVj19wqSdwt2dfJS5XM3YHz1d5bN4u1nq",
  "key26": "3VXqc6N81jGHPSpGr7oaJ6DfCGiBnwLwB5F5VaM6gNUSa7Ya848hLLs9PhNnMZ1vQvf5mSKcMqJBf4wv1jYSpQeX",
  "key27": "5G7HZuCDNjVpyDHGPQw7zjh46oerapj4mEmQ7e7vtbaBYGCYzHW47yR1psHaHfcPjFhmW2GrZj6SyzN8GWUPAHJs",
  "key28": "bfc1t3xjQu9hj6trzY8t1QyjxbJXzaaqyXHwuWzDdEPfAB7VWJZFREmJxNdZcyDmWVb8F8XaBBzMLuvRKcbvVzd",
  "key29": "4vKf95NgBXAd98oYZ3v2LxmvEKEE8BJtS5uqv4Cif3C6EkyN8Hn5G6hbUc8vgPrpPy48Z9Y6gGgbMvEicSfzMNni",
  "key30": "qQxFgntCW9k5Yu8cXEMC6JHXeeu7WifTWUToX9h9SAM7h7dhbSoiEAKBzXiUdtFGCKNqLUn9as23gVm6k17cx89",
  "key31": "8jxdrmZyxqX2bHf8HXMrdRLRoLTHJHv8YTBPHbPVVdRHmBXxGWtL4SiHhE4tGXgsK8VNJfotxyksxm2Hf5JNGh2",
  "key32": "5zspy7UK8HtVJB4Swxxra2f2Nm7hnpzosCgi1E9WG3G6FqjSzEewqvRf6gEHMUKmHmGpXgcBKhjYkh79wFWm8oTc",
  "key33": "3mkGuFY8uPJZ94gqqmLzP32FcPWKjetHRUWH1r5bhcRKPQUJPtfBZ5MPFaQcBRGEZGs7MN9V3QDS2Mx8D8PUP8YH",
  "key34": "4ZKL8eBRrszMj4igSb7DhYzTJGHuwT1weEP9DDf8BXMcxbuscxcBbXJJkxfXMdQPPkhCXtudmWSRsb8Zm8PN3x6C",
  "key35": "5bbGENgQreUXSCRuZfunqU6BE4c5WqUdAr5H782t7LAqkoapVqU6HXAMBL8qfrGjgaSb8ZgU5AptJCi8dEngYYAK",
  "key36": "514ou63UBav6RimLrrzp5qVUU1xGdtkYESP1p8bVQK2fUjujJWeQyTDKvRA85PaYJMjgwCtN3yCixfcqqmY6DAT4",
  "key37": "AwL3gkpGTguqE2TpVWzcwbbXywhJgE1by1nUBb5CnV6a3sTvRS4AhqUyAHfwpojFydyziR8imt8RxJGwiZwiypy",
  "key38": "3j77QjKjMkmUVuZgc4TnQKqXpkCtCUY6bVnZUr4kBJczuSKwwr6PTi6XdBimbj6vxEQqi3aUgtfomuUh76edaZt6",
  "key39": "3sjYcYjiGg8DdsKFoaQZxUj8HWBNpGURU6CgMBuiyZuWmu9PndzAduJ8TRAgq66hC3FT41UxGBwZk3tjqvbphH2S",
  "key40": "5uLDNeQqxbjfTdiXZ6yqHNrjnYxsjw4rviB6gjwzquxZ4LvMnZDQZ6P769UBfCiKnU7g9BEt6e8CWySQb7tXcW8d",
  "key41": "2P12mungPKKCSHh8ry4NCZ72xnDSXhgs1293PNufQu4zZdmTQksFZnxJZ5ooARR3Yy7i41AvoSanWNtFNajZAVUt",
  "key42": "3qrdoK74qi6GbUqa7mMmtjnuAomKR9PeGJUdTyEauMspnFcKF156r2B3J5VCAGTQZQpYUEeVXefwvRSeejzG2Ea3",
  "key43": "2XZHTy6gjWJ6NdWkRSvAo3v2HaAdxsGdhYaNbRPxVsGh61cg5ejj9hub5EUdcne4U5V9NPa26v2NqoeD2564xMvA",
  "key44": "47Mc7UbzKa7etmjFoWRR6vzgpmzk3J2m1222AdCHPnYYWb2VyS8i4xtGZjFGozZGaoLoEiLsJiS8HgwSJFtNfj3U",
  "key45": "5JFmFgS4k7sZEPtvLRKHBUPG3RM9CdxUgmxLqe82HMi5yKEdydS79oGRpzU3ZDgfupqQFrmU8t4GMBss3MyAeCVQ",
  "key46": "2pHh1ED4aRNRYvp8tGo3jVE8bMyRwhyUp4Luas3YuiSFjLypn5VDJzjPG9effx6Y3hMiUoZRvSuXoe6s47PYT4o8",
  "key47": "4BMHpRMRey5EXi6yk2bhYDc6ETvoeUSfdbDJCguWmzi1he8zPQgN4Fw9p7DZQHQBDeUyCXvsjiEp4kjga2mCiHhP",
  "key48": "3pcgX6S2i2PP7DhGnF4LuzHqXS7AR26Mc9LZLKgE6sjQjeeydeasqpH615B46bKXaHJtWw6W8CeudJkcegdtjpdm"
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

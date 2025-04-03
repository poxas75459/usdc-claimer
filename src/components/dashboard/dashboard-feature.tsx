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
    "zeu8MSWm4jYVAGfgfsYXcZAvbTdRueP6zaNBRqLmUzs9jzjfHs3PuecrZuJT5SZFZbJmndN15fmA2iyEoVdrGMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLvrApuC8L3mKSSdwJqskfxm9J51CrvnbrdSz8NTNEFoZpyJtgCCJNwyhiLgbnEtGG136YNKWr3h3trLzyfamfS",
  "key1": "21diuRgqTf6Tjrt6hSbTHaYMrj4SSzjEY2zKkTh3SLqcS94MbQE6U4eVhbBnn1oGdD68skgf6SszEM92uBa1obJB",
  "key2": "4MR5Y5q3k61HCxrXZzVjh517CmgXyH6r3Yei9Tn6daZYoq5QSjqZ6Qf3fa7bZ9yzDZsMhTQVpmZF2H91Ujm72119",
  "key3": "57Mnk6suBM2M2BbxGasxovjN7oMr3kwEYsFaZznyP9g8vjRaivUc1GdVwfxcm4PY9WDETN2AbYEEEpzMw23bbhsH",
  "key4": "5XZqYGwzNTGgVXACxwMBVsvyhCDfBFekgTfqBjEfePMn7ruXHJh2G8g91fmTPmSrwrybZLfHJbGuDrSGQrQNZuF",
  "key5": "5oaATgtt9SxJWnX9BGsaLYN1a6vTacoK5MGjKhxWoD8o919JRvg7hxWQPNAkmCiGa5HpgY2D4yXVkDwrBxBXHtnD",
  "key6": "326T2MR5mAvbn5hMfij2A8jzK3Tqcct2SeKwsVE1euLPNPPKgViwo4gcEoqkzj6AaWR99SjxHqt8cNNTFCjzHwhJ",
  "key7": "wXHqJKq3RQ7MDjSWKsZvqbjxzEvbHwBddPWkworYZcb8LUxXTh9enFwyE34FUNcswqmQ4mUESHmzCYmLdFbkWSy",
  "key8": "3qWgL39WHyGVYcCPi2JNS95RjFsFxMXHYjCEExGFvpWzReJFnk3zaZVUKsuqYJhBhmAhoYiZYGTycgrzW4s1RVw5",
  "key9": "aqLCuiczS9TARemohi89y9c3yzbEPuaYqsNm3mdgs61MoSJs2Un1hX6CpFzWVuNXqiYhctgHfNhyhsdQoDVWLHY",
  "key10": "2tUCuvRgV341pnWokp7MezMfta6qUVm9cQwk84Xf4V5aWDFgkdEtsXJyt1beGgsUEcETiEwuKjTZC9ZFpFKHqV86",
  "key11": "3Lwp66w5MpnMgGLxfAYfjRMwtRFUBhRiCXYchgWzi8ixagp5RUf2tCSpqYkgE6ZRzNwd4WZrzZz9A8jfkPr1y9ci",
  "key12": "5DUhsTSkGWSW8BM4aFSvArA9qkLC8uTknfDEhGkKv1RSJk4cQH86XqqUY6si9b3wUrdptUQCdbc84ZqTZZM7Xb1s",
  "key13": "3ZLiLzcgAf2woyiLXeYbUjJwZ6SRWh1UT9DWa3z327busYF7tBjVvwjtpJj8MAGcP2B1usxq1GJcr1LwvoLhpTr7",
  "key14": "43t4vCVbRmA79Q5urfxZXdqepQA3SdV48BsoxDoVmF1AtkPNp8HeQv5mt9LzZf56D7vgBPpCZxbzvyuncJvVp1Nk",
  "key15": "3PVnJQ1tcy2H4xhERQzy6fUg2akskAqH81HKzhL21FvWtLrAYgbfFBmFFL5NTozhpL243XZ8iK8XpcmDQd4SXgh",
  "key16": "5AbnEeWpDHmHqvKxFFs9bEGJ2WsisunSGbtYwHBGiqMGa2DFe4Duyn2JowokRa6XaV3zoNPzFut9jyJUJyipTKr6",
  "key17": "2eFcBKgkTeJAMmDb563iyn1YQCG18gByaiQfxS2bHJwLQqADVkrmNCeKfN5aaRm4XQ3oSYrH5wzSSd6rftbfDxcr",
  "key18": "3DdP4zYZc9jXCXLDHeJPvTQTDAA5Z6waJxaqEfCzHzJyd383neNMmEd5nUWu9mnDdUGK298Qde8CL8ooiEKGR5G9",
  "key19": "3dsuPshgc26g9cvHe4HebNMyL2HLjEkHwFuBtSvw7VsLsuhRj3mTch6Ty2SEesys9ef16twpFzebXYMvkdDi7xRw",
  "key20": "4yQWxfaVaRE32GqpMZGZWbcsKBDS3FEs6B1RqxYeNwW9yhThjYoeoFJnredpJiKkmyu8tF7u3VphjKLDvvE3h3MY",
  "key21": "35QguxrzoMpjoRLiLUZLAmxYw9X4wnJg2ZRiGcRbfxs7vqgnnCPMqnyLqdRsxkYdB6uLcmT81r7qnkqQcJPucewE",
  "key22": "3hpqybKyjSPUPmDGdu5Wkk3fC6PaxFTJaTPW6V7WiEpD8zzDwDE4aMcWygfEfVFT7S4MJKLijND2kXQ6oFyuepdg",
  "key23": "2Uki2RBjRUKhDwcyWRG4DL64XGwQHsgRKHNjQhmx5uUqZzumFHGHokzAMvi7wqM74RFQeLqXf89PujkKEfZFqUMw",
  "key24": "3axqUV4f9TQo9iRpvVzg9z5222y4SM5Z51pumGeDUEUdJJpiggDzMbU7RV8DFfmiF41DvKkpnXnVShhD748KNXim",
  "key25": "51D6FHsTDXRGcPrQrMBzXK3HLop9MpzWJiSvxNwoPzqbA2bSctnUBdZ2NHqXungDX6XWCjp34S45LbYDSpg8joY3",
  "key26": "2XyfqYrpgat8JC6AovEPhncY5Miw7SmLTbfMZNQhF5nVBFxDipHQvto5HSm5roEreFr7NXS1nmFHmg82KycRqAHB",
  "key27": "3M6iGFhoDbah7LgNaiBmEy84nDXmi1T2f3LzLCfRfCWeQNpEdumYN9pU76A58jFDTcsBfyTdWjd82R2qta5FE834",
  "key28": "2GmHMhJ7SkWCRSCsdM9F7dnn3EwvNUU1Mt2ykS4i33yZQH3wYXs1D6WNrvt312Kxc6NwWgFs7wV5bEJ9qoAPb9ij",
  "key29": "2wNexNAsmXSYgzqzzdTgRPYistTb3dA66CX6ZQ2tGUPUtoreKYsHSGAfKs7kbKZfgsETBgWMkVVuXrnnvjjqDrah",
  "key30": "2TkaZoUEY3LQSu1DARy4RqSVr8o498FNrDVtuuWhxHB7QVAyzgjubjQqnekzpHeytdrLuc3YTXrhQLzvRsxMeFc9",
  "key31": "NLbys8ZFzV3gVUquBh35ZHBcB1FQknnarWnLgY1L2x22XJzybMzTGvQdNwBTSyqYxGkgsgLaCUY4qymtrsRHVPS",
  "key32": "4ahFqi2U9HGjbGj95QaxxnNwugtmRQAGZL2nc4oakpRfzcDq1nk3RM2KVwwzzzVxhPNqw69D7jJyUuvjGyL89ueh",
  "key33": "a7wj7WJAPuaVAHzPCXLJYBz9arcZr12N7wxMfj9qfQJoQ4Fc5GpxgJMK5NHFNwJJkwXowgPJTgLMAVMKfCt3UCo",
  "key34": "TzxJGLFtDen3jK5u8wDJBiqbBWAu7555mf1TdD8kZxHHJJhZDmYD9BNaF8MZh9YJ4asbKDSZdxZKpt1zg1pmnjM",
  "key35": "JGKobGgUemk5Ryp8AReAwLb3igu7v6hbdRvQEV3V1CEh2s3BFDS7q2oaW7Bj76ZzVioY2yCQZBbT4ZdVEvTwSjg",
  "key36": "5DdfZTABLc9G1S3bZTToE3WGmUqmignNy33uu3V7oHr8Nuqoe8BVqgLjmjbgWTiQrwHzs48XsNeQgHKivjgpQ3mw",
  "key37": "einhx3xtfW4tVxWdy6MAz4V43xzH7UQVSyHhyibWSzs21eqNf7HZj93hb4LRPUzC1Aa3hUE5Ld4B4EBFDqpcxYX",
  "key38": "3YfLvXHNfht2Kmg3Aprpdom2QQzR25uz4SAisxouD7eRQLrpBQNd7MzJPCALVGzZ4vkScFuJhe6vTQtYPGEvej17",
  "key39": "5NBNszGaxzuFBobvq5dn59EcEUKUH3D9XZVRFnXNnAxiR6VteiR7eskwhziLCFSafngsQfpZysN9jkWHSvERPtA8",
  "key40": "GaNHyFc4CBMPdYcSfLLASHfMP7LZmAAeisaKuZ9FnS9ZhsmKCZPXbMkY78jvTuFVarzCJthdkeacSfWLNyCV7LF",
  "key41": "3X6NraavUEynJnEei648JrnCr6vTH59oLfYKNdYurwMHVkm1wHPNgxYWYM835E3W2fEKoUQi2EiyLXYBzMg11Jvn",
  "key42": "2ATBHEvoqCarkTbsdFhda8wL6hab57H98ttBcb7mH25bNwxZpjdkZmaZokztXDnVvo1YfUNdb4sRDZAZh1mJFXHs",
  "key43": "3EnD4TXfFuu8nBxTkAG8KfExL2buDASghSCQ7ULBHWihj7xubDutJuD7Aqfu6eVcCoDfaH9JaNyYbfZVEZcaKPwk",
  "key44": "47KN5fSK5wkRWsPv4LqgDWTAnfhA68xzHcNsutUVpZhyHnzhH1SSMaUgVMPnexP8Xeyu1egNYPoFS1ujjKVkrxpm",
  "key45": "4LMZEbTMzmk9jtzbCUiRXQqvVHDKjCDZ7X6zb4wY6LhMVnszEhiGQcuUJwnD8ARn5tLCYB2r7uMvSXdN3sDDJvtc",
  "key46": "48pVgJFf4naM1gq1wEWnFComxupYmMvCwfyREF9oUaJhgsTPgu5wiuMZD9XByGHzFz93fW6BdooHS6RGXK8pBZKo",
  "key47": "5AVqfswzEfrn7cbCwpgmSuk9sL51UmJCdvLksRwiPCTpeddFAVizyAstaKBV8HN3sd38quANZDh8JCRA2AjWBZpE"
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

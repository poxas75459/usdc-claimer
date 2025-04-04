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
    "2MQcY8DStJDvEdskfc2miMMcvwkxCqBJRuVnbuwy5zHbVpreaZD9LfyXmScDoq7dvEDEhmsk1xW1tLtZ1mm8WNva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bBB3hXATCDhL4uF9sq9zxnuqyw36VAdBpwT4cgxG4nGByJMd5uURfv6kduxCXGzYxJPuQJoNEnH1WC9WjoDdEZG",
  "key1": "2hdfiAtziL5SKvtvQowztquKk4R6VgDr4EZ6ua7LHGYh5GDjmHhxXSmgJTzqSHjEibaTT6buinbJTFbMESf84fAk",
  "key2": "47ie5vZQDsUgufrXZQH8rDG84VFRajy2z5sMRq3XMdmeMwTQxPnZwNUKUoeQTsbZAkDsK7kVKaDvVBsrGoqjKByF",
  "key3": "4Nsipjg5zx2wZnnPcM4jET5qPyDGXMLqoJKP7r4qhijze7yGSDNchaauvurMMEqcBV1JCGJ3eZEZwJBJZvpPWaUg",
  "key4": "5MUaqH4pWdexWehzL3zaisA45rSyAQBw6LWDr8WsrDQeMmirWvWYTZacY1jGwJzXnTtwRoTBQHpFmyNDN6UniDfY",
  "key5": "uRpsTVeX6CMaU7nUAEF4zw88cTcBhwKXdMYXAoRXeqY61LsrpFphSdPeoYWk6A73Q4uitV5yqYFLLn51FGCnoSW",
  "key6": "4csWXSkK6ksKyPfTxqt9XTQ8C9C5gQwdg3YMwUrHqLqzLpL5PAhS78riqeHccrjhsKbqUHZv7neEnuvckS2x9pCz",
  "key7": "36Lag6vuhZVX3XGfBoqkdyuQEKcciJzpyEghveXStpcepmyM5QrsP4bAMon4QMDKjMtkJKK3Nt6EKwKf1ATaGLmh",
  "key8": "4EoLPDVJx42Q148oFBHzm5uscriTLbkC1vg4YA62NuUhZeHTy9MzTMq5YNzxjDHiRjrNn4eNFmpPTvVqEc1gHKY5",
  "key9": "2h2H3hKqajKQWCP8cVci3kj6hbMabsBb8ziz5W9WXEbHmGMaZXZk5KycucbS1may4nUgB9iFcVos8NpUwDsmqEwS",
  "key10": "64Bppw9yWKC4kRpjoPHMpe4vrmCCXZ1HHP4cNeduKYEJQj8FDDDh1NxqgEEwJWsipVEQe28oYRzbeKSrT3Xrqvjt",
  "key11": "2aayFryiNCtSECT3mZ1LhNRK2nt92sqSqQRMVVpm26jjRp7hAHdT6DfdT9n2KVsJxg7KXNwiFHxf5AFnBAD3jNGu",
  "key12": "3Zevh1ozetLdzKsA36jCgZ7CRFfD7RTHDMC7gcPnzWS3D7sZLnML9nzanK1D1B5Hp8TbNrJuQGt8x5MJvS3K39G7",
  "key13": "2YT4wUpmvrk1S71K1NHq865fPHhUVb4cUahzY9pDErAFzhjrrhm81YbVyHrNKa1bcAM6wA3DGDHFvaLuo1Nq5F5J",
  "key14": "4yca4Snkit46G8XWB2ZnEjf9JJUscYxG6b5F8c63VPTyNJhnVLtt2K2iKNny2npqJcDVd9TJAycsKLjd9pt99dou",
  "key15": "3DqKZSFK229KVVokQqkfFQ5m9oDAuEmAGKutJXrwJB9CNakJKW3rUizCKAYRwi1XUYQZB7r7zhBeVKP8TxASgyYD",
  "key16": "4qEqZQgfn7CN2VwroZUdPhPq8mGaxg3wxGTDwvgz9vX6PjainPH8JZEXLAMYr3TumXbtVPiQJc2BqCiH4836uwBo",
  "key17": "adWk8Hi3k4Uih79AHkg9y6mCAsPeMouM7QveG7ztLRvkKZEbn1yKbJ2w48M6A4Wz1YyFeohpcHqpPWkaWKjc2Up",
  "key18": "5dnYjbYVEfJCxPfs67K83XZoxEZCa2aFiF5LbdWNiJpAF9xD3P34WVuPvGfCUQ1QeScYcg7nsfgNXrG9KKRTvYZ1",
  "key19": "4d3sHnVyuGqzHkfp4UP1DUCGMD7iJBfnS3nX7EKvYQ8bJK7xTy2Mcj7nNCVu1oWdqL41go6pMt13dJfuSnyYjPNW",
  "key20": "3QbuVKFgTic5rDsdK4CtVRhBHRH9G28FqK9tCWffSZxe7PqDdNvQ54BSdhkp662tociAn4kDX12REbdbedcUqgdB",
  "key21": "654QjUMo127qZ4U6jMNHVDpRzvvyden56tq6MX88KfSfiwrDJYH3J5MQaExtH7LTAqdFQ1HgJAdxGUEEgWeU8sdN",
  "key22": "3bbgnbbPcFpYSvnwhgkRczd7S1CZUPA25H8VibVn98YopSjX2i5789fFiNqtnZr5EBGGhjA1tRPf8ToouoE9raML",
  "key23": "KtocTpvFAfp1Hk6F3CQN9y9gAih7qng525WqenHKoJLhcdxG2S9oAkMrMh2mLCqb3EdcVsSJ3JjcrPZ8Z4jKhAs",
  "key24": "346tAQFqTkiGyki3nvpHWiUzUKJfpAuBvVvA3TCaxeVYYmLpGahC9deC5qyaHXeC9JmFR4GhYizJap6fWubt7mhg",
  "key25": "2oA1pSbCCo2CwEA1xwLdMPvzwb1hXHR1m5bqhu3PomTKtrJNCXNnSmDxU8umNjUaYJyZf2uufGLUTBDQVbR9vDsr",
  "key26": "54pmYjaVAZ6Re43ZePMTtJ8K3G2kCmcU2XLVfH39LDHy7e2Wa841GbFstYSGG6RPnnQfvfRN9kHoAnBJ9LRMB5MJ",
  "key27": "2RqFRyc2jUbJsJRvzU3jDfRhGq7NeusTx8MuSDMW9Xhye9GKLAMT8ex9nPRvdMRS5wBKaRoyyrdPacirrvaPj2PU",
  "key28": "61aMfyiJchQsFMnqs5bz1gHysfiuwUFz9b51FvpC1hUCGqepguRXYL8KuC9wrvKH6ZZ9hQ6u4QZsQtSm9xG95Sa2",
  "key29": "BE7c8xdRvSnVBaJPrqP7AcVWQqLEvcWP9MLc8QLBapyP2SMWrRVD2ZoqMLu2iLTRX699pVJkoYhMysvcCA32js1",
  "key30": "mRm1fXQVwUKV3mrVjfUFyeUJYtBPnr6tbBprb7oDqgmHGoYeM4Ez6o6nNoVQ29yvXmpMoM3DTTEbUrGVdcj5r78",
  "key31": "3x17x9RmYEQegjHFKmTNzRdk1bQyXGEJPTPnZz1kVtToXc4GvftZqVkv9r2YwR6dq4DK8FhabdUVUkdtVtH7wSXQ",
  "key32": "Hhb7NYPpq9t63rSU3WbC2w5gLPnho1xB8Xm3asVDA9nWQKex3R64y3ScWXp2UPhMYzuRQFNjAPNkm8Yp7K7wgNJ",
  "key33": "ZSAsXNXWUU1wsdrHGJBesPNy1hdSCsvATfouhNCp4GdyLpc3YFrh1rweBkYHQ9dRqawsg5Mq8EahHdM5sNi86Ss",
  "key34": "4XMF9APpgkijEb72kdMAPwUakBLEoLmbW55rsZhpB9A19HbXDaxkk8guekxiXnRM7HunPYEdqAcvCekPxuSnBaqf",
  "key35": "zQH9rhVtA9bZqVjhpBrXyYH7b18zGBFWg2iWMLQNrU2CKPR8FEh4JyNXR6uu2eyT7vsS8L5Pd7g1JU2AHVqPUZq",
  "key36": "4rB3rigAvvfC4VijicVcw12Cf5bwu8MGJXuGMraeg98RxuBsSS3CXP7wj2N6UTrYgtzTk8N1Yeae3KjgEZKmnnNS",
  "key37": "3n3SvHdccucCJjzeH3eQWqmQEixGf5qz4TfQWCdhGe2A9ZdpwGRAaVz28E4hViHxwERvx53xwraVMBjBP1m4b5nf",
  "key38": "2SF5w37sHdAvQK32aj8EeGXAJtUhQjDZ2AGBtwUXATjY9h1oNTHkfkmVQbZWZqBTncJ6D2oXcHLWA15WaHMr8sWG",
  "key39": "yK1G92CRqqypLbDFsPzqaTBQ9tXX4eKrtKMGzGAitH7gFHkBpx4JoeRNtJw1VjruzDB5cvjQTszoCDdpVJ3GL8S",
  "key40": "2xc2fBraENB8L4Nq8HpA8JmKZaEq7dC5chKuezwDbf4YCpETaexriT9uUHMQ1dbSBfDp6Y1wcVMPVnVYa9FhDRAW",
  "key41": "LaVbKtyYCxT9JjgmiawRARPf6QfyzZWSj5Q3Ly31JAJ76BdYUB1GLCiLFW3u31iDfAJGtNnZD6XCmYko6ewhpjd",
  "key42": "3WDdx8dJwkSVVrVq61itqBFJ8GCLKDVQx9a3CxWZxJnxfGgQyh7hoCxSj7FpDVC11CmULHRoUTocszNm57gYWnzm",
  "key43": "38c3YkA6BpE1DEE68oohQ4PJCKxko2VgskWamCbbGnNLjrgDn2UTVi7a1M2aJn7tGyoaDVwwQsfsP8aerFFrsUJa",
  "key44": "3JJdwQcDZQTj1rTs5MeBMydcEHcckk3Zbhi4k2nwDigHwSLK9iPFLPf3R9pcH5NxUwYnK52TEtLocuVTmKyCbfp4"
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

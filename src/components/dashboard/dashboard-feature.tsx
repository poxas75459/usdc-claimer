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
    "vSmGAzty3MNfxVwZ7cjmPYUZowEbv1WSfnVRL2iGrHDd1vGfwSS2j9Hhg6noeKygRAureccATnhqkRgpQwEVv5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BukRUH2vqgghM5DtgQxwAjoZdXPCAirZHmm4FUBcQqYqv6jWQQUfTGtbgehH6H5fySmkU5wF6ouiZcHNEgTmmfK",
  "key1": "3cuFDGvqYAptMjCebPyoFXpWo6isBmBpKF6fBS1FnNGfMz1od72yJUbTiLm1VzM5H3nf7pPFhbQFwDtgNdnNg72w",
  "key2": "5cGFdawA9CEYc7GJy9JCm9eoYk3PchFRUiFkZnqvzY8HCesaREGtTzApMYmcnSuENFkPGGxJga3FCfUXkn2bwkm7",
  "key3": "4uceENWortB2YGgCt4WPbLwY3S8hXBQyPBmZ5usjcN7tHCHYPQcShr743G4hUfrYi1kUMjqYnDYaaeuxzrqixBKW",
  "key4": "63md4fG5aDYqWPYZBXjbsyoj6ppTvfyoeeyNjKVUqww4btpnW3AbK48qkAjaPPECFGTghSMEYvgW1WrsoJZWxEo9",
  "key5": "4rfFMv6CdpVG2G4JSJs4SSaPujuZh1EFVQNcLBMcLtVtstpTR3jNu2gSqYKpyBLifm9CicNYzYShxkQyF9mrpr28",
  "key6": "2nnd4oAGgfKra5fQYDxsLxtDUtYXunRimbx4wEM3QpS3YWf1tfGgxNX5GhPzGVyDTeFLEkXngdJsbNujT9stsexu",
  "key7": "RVYiEDBkrHwtJUDEcXzAdw8yJtyMkmkPCSgNEhRfLNDy3RGJ7NSa7xfuCRdYL2HBvcbHr3iU8ZAW2BgoU1pxAsD",
  "key8": "xDbgzu16boSR1nVHM1qf7X4AtzGYErovAULWaPAtLnodPLFWBvmNeEsEyMCc7GeeRf91Un5AiemUSXLD155ubBp",
  "key9": "41dg9Fx75cqA8B8cnx5hAHVmTkQkCJZttHj6L8zdyVUZkGwpKr9Wx7rHfysQ6qGRRbxuAT5eWd3NVujHPht9S21V",
  "key10": "5TGMGxrMfFXPnLX9kURmuzzoDHdntW6xfJnbcVhtb2nB59zUK9JFCS1xDZuJx8PtHcx1YSj5tfVF3en2YUcBz3Dj",
  "key11": "5VBMQwGRFks1ztFVFGUbLQYz8aHEqoK3rzecPm3HZwsoU7RaYKMKesKKQeoUDLjSr42gDUkQZo5f5WAEA3958cv6",
  "key12": "63zZbMD2GJURYF8C2i1bZvysZoFbNzxVPrdiDf27z4txHqwTHPToXQFqT655p2u2h8yaFEsgqXtUfDZTDANXUi6f",
  "key13": "5JnERhEbpA75G12j1SWHwFPYAYGjSrEzb1GJtAC9Tv7Wub5kCDNSVJfdtXTUXjd6dw5ytSvqkDsWvdgzfErsuXFv",
  "key14": "9AxGtVLBjsCN7TehsgYAoQqZ4Qpw9vD2BQGRvwEwGjSMyyTrhqDAqF5YmSnmrh4BXsb6yxjnYHPYnzNNdb1EYzo",
  "key15": "4KUPMZ5NMviDRRy7gp1Nsj6gEwEAZvLHBZsZkbywzb9kQutoanx4wLzFom1MTb1o3Xv2Qk7h6p1jyUneFZbVzsfh",
  "key16": "244P9ya7oenubjBM2ekW3LtTktybdGocSvoTKAtPnWXCaE7d7t66GRFXghHNYQeQz533m1KUrZ7mSzQ86LaudnAs",
  "key17": "fpRKBjDQ4pBCNU7Lw8sFr7ig9RDS3uSd1o4fPTArBYTjgg6wBDGM2mG1qaZfSiJpi1krNuCzZ4awbmPNGWQry6d",
  "key18": "56UgKJt16wQLbQQeuvqVrUcy61iRViYH8MzKkm1HWAzxNUSx8sFXi4qXoxkDKpezogYpz4G4nhwXLnheXpZ6eHUY",
  "key19": "52PFT28G9twNZcpBJumLpb4TCd2D9ZR9TCqXaT1TdrkwTHPZiQDMs1jCvk1mAWrMn3V1xEzdkfsj86EjKN5Cfu4E",
  "key20": "1jTKwfEZKp1jf1JmG3AqDmoRZ6pirY63YvLyMFCJwoJqVUFyB2joFzkA56StNTLaDaCaudkUo3LzeaJ6aVdGn6p",
  "key21": "3egcX63hhjjP16nEus9T482xWNdBENDK7Nw6fWHioc3m4y4x3MggqaCYQAg59dZsogpUyp4V4JKqQKZ1ci8BAcsF",
  "key22": "2hrWN7TJNmnFh52ndZcshxFsJX8kCpEc1tBBji8LabftzchLZfb1EyD6FAxk41zpB5Di9sihLPe48cT7obLNGcqq",
  "key23": "24daHfGJqqY5S7vkP6oTYz3gJW9SnVaoyvk3dgpwPY5tNjDY8ZaHWBpodFJwNUZju5vdA2kMtiym9sbVNVdVjbZb",
  "key24": "zytQkFy83ZGLmYo7w8aG2LKfkKoovZJiwfhZB1C2pYypHqsRyuzY1k9n4WRUQkWq74cDzo5bFmtdwZ5sapfZUk3",
  "key25": "5Pf8RyGfSE2zD4un12S9wRRV6NPKKKxrhihXgBr5KcnSds5bSUvdn3oxPuWcqLsSm5QecWvMvs14ta4PX8Mqd2xD",
  "key26": "1ibxj8rxuWCVR2S8T2hH26Wk8hAU2xtPKCqkX7hj6MqiFc56zVUtRpYc1BQY9Ae5VAP8a2kcWJWEgGBaHst79EU",
  "key27": "5Wz6nWhd5pUswnJY3VULxSqmVgQVefjvMc2k9F5YwBkXmwHUqnSYCbnjxsSheZX33hMbp48b5JD7GusWjHEu8pt9",
  "key28": "3kiyTNfVNADwhsgVueZo2Kti2sAw8fMJfUV2hFZbC55N7xbRfnN7m2QNSJATxHTT53fu6ENASncao6WQWaE7dGEk",
  "key29": "2iDA4vQShDpsZsomWjTHx8e2ZxrBLYRiTL3PzsUoByzBQZh4trcmpMYzA9VNKBTyoGahxcmoSyXhFZLTK9Zhow8n",
  "key30": "2a4KwEp47uX7VJZnT7ZBoQWJ1SE7WFijNw2Qs7Ly272DhRXfBzR63vGnZ4ugCLhDjPkk1bWTXYgCD23jQUsQiQV7",
  "key31": "34P6Ydcy1k6Txf1zUmFmN4HyFwKUvquM3RMtX69zUTcwU1qMGnMTimS1mYZUzEkfuWh7pHFbk11NgxdZvL6M68c9",
  "key32": "4KEnRh9DFDFT8jXj5FLGyDqy5ZVnx1Q9WYwm5vSRRpnj99VXreGwQuNxRpZ6YWJySfJ2T7JC13GTqy4h8cRhJ43H",
  "key33": "3uc3kcfMW8pKYbfRQF6sHaW5oVSASagnLoUDQA8KdyAWWeKdHKL7EuJ3qpVM6a5QECUkQt4R4Tt92hi4tyK2ZDzz",
  "key34": "4Z2cdYvmAZ7ep1EpBGTj2ZoeJJiDJr7NVs5pXm2Cz6UuriqGbwxRagfTaBgAdAdkgup3ZRPHS7soYzLv17SHnUap",
  "key35": "5YXhiU1HSxy2AR1gLv9povAoUZiNpcqZsgapumRg7xaa4BBRTT3qEHeR7fX5xLsRGZpy5SmUCkRXSxooLZV1R7nL",
  "key36": "rhAhzZx3syKFA9fPh2PKQu9796fLCPA6ayg5NxtBUy3pWkZmEebFLDGLU45a5Uk42Hh13NgjRvTCRwNRcnzJQpu",
  "key37": "3LBCapyubqizqRcDChNpCtMrbyHChw4xjCforoRQbm5FC1AL8FJnnicDCEDUdxvGdJLMT7jqcbHX4uhcUrF2V5sk",
  "key38": "5HnT5dauNgjY3jJf7rxs6MpmfTqgjQLi4kiiqwz4krLVVLd4yRPQ5qn4ojw7Kjy34npcX6SjVGfjwJXwxj4ffteW",
  "key39": "3qTBLPWr42bLXtJ9smytwXZhVB6uiSpHbJZKpii9AsuG7F2S2sLyXWDHXUbgBjbWujb6ww5FSWZAYwyyuUaSTnxE",
  "key40": "5isTrKyCZcW1BSiGuWXcEzra7xQEaiH2MzJ3XcT3FA92gLxZzhXY5KG6WJYgcFNKanSsL6v7wbWvnsxkCVnELgJ3",
  "key41": "5qiKrbXM77P3rLmGUi5jmDt3TK5xUwGrjDcK9LpowMyS4k8Nz1EPSJxY5MrbAey5ZSJf7Guoap3vSmTLvyTRyv8G",
  "key42": "558SS2rZZw4wGEgyK2qhXiC9sFpxWu8xpHWcrU6J6TrJmRaDL8KN4wDQw8ejEZnfqSwZMGe4Kg2rGxrZjbsScgUr",
  "key43": "44JYempZ225ZfKXz2AWAmRy5diEiFwHbGrnmY2oEmbeyqFxcfBsRYBUP5zWDhq39xKx1tr1X8vZQ1ixzZqDUxWSp",
  "key44": "48YAwxnP2FKCz4nnGaqQ9oie9kFEPkheY5GtD2p1BxzyaNpGoime1JwQvTgbz99Kw2nj3DEm9JRNHZ9vy16RVYTD",
  "key45": "2AAYEVBiXj386Ax4A7SzQU3ZHsX8HsmH4tvTc72hLeDmSPkm7k6S6ixMBmM7TdB5Q1kmRKbYWzCrRmJJZJUCq1Ky"
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

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
    "4R6bTKVXjUDiFH2f1rr1E7A4MpwH5fCrYHyzWpJdJkqtAwEAawY3wgGKiXyLenjDHX89HGD8oNDiY1HrrzsoXFaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLHGcB6Y9eUDAinVQkvUQ2m5QEaqjKLQHmMqbJqAV8LMKvcvjXac9uXzZNbDwjYNJNhoD486D1MRP3nN5vrKYFq",
  "key1": "2q7pKJ1hRqs7eFyM2vG18J3LhVrpFdC33k9aDqKYV6B91PT96npqAWa52YpKZT75MWUpzrzjUD3F93CVyvpuYJfc",
  "key2": "443osTCkJqiCw8HpuUo9z1VkdTvWfiBn1CjVfWSYCcTCbgZ23knwhg197F4B3PqtYJcY6btrqGhkeA1mn48bX3Lw",
  "key3": "4vkKYdb3zQbyTwciyd5fjTrENZMhoF51n6wGa8221WZvHsC6nehctjtAiAqmhbkvNf7eHYobBkWqeXu8z1tATKKW",
  "key4": "4161X19iqtUzMrCyoLg4EAmMnTNaRqHBmzkwGM9THUtsV3U8rSTTKwnTnLqSHNMDcqEw2fFJ6edfSzcDosPGwtz",
  "key5": "3L8UDZTc9wCG6F4QFXfsA7GnpKj1mUeqQqbdsTzzVSfLRJXcRoCwtuH6YaFLpaLYANTgCufW1R3TiBRi2N7CgEB1",
  "key6": "5WZGyMsLwFnMwwNPUdgW68Q4s1zm3jdCuBZ4fn7qcsnod15H1aWPnx69o6XLJZe4FW7WdHcwFwwP2tPoAotEsd1A",
  "key7": "35bkoSfksK1pxBC9B2GYMmHLDSWWK6Qzd8fNCWviaLNsnq7CgfsHrgg16wSbUuQTr8fLkgxpSqBbNgmaGVyF4n9p",
  "key8": "499oMcvEfAR3qpbD4exLYXEczCgtzF9FqiXe1BDEwjPt6XX24JUFa5temQeBmEh3PTwYDZRsjEi2yYM76z7bkVPg",
  "key9": "4S3pUuh1LEmGuC4S7RmLGBoKYmaFv1DrPbrcXAoqCsxbchcv1NqUjHsry4yYVSnWh9EqVmCCx3Dnvr9H5SW6uHLX",
  "key10": "2nkZwbeo75FYXWDUPenR6qDz6ZvykCNKXroZo82bGWAgxVvGDWebc2HftmgnRys7FPuHmsA24emzoa7bcxC4eYWH",
  "key11": "2vbg7eE47HaK3zs6umYS15wGKuvSez9V6wFyZYBom7Ju5DgvNFHFb7JgB6jWthycVJtN4Mz5jzgNN4ekaQTpz2Hh",
  "key12": "4w8baA76PcyZtwtsZnYUc4VAAi8YXcWcQs98fQYipk2yFRa37sxRjfZKsjtUiKibEKMKL6hDTYJMHzExHNmdWNPr",
  "key13": "3BnvZjJChoA6vYP3m2dgUPqUduS3df8cUTf1rSTGRiHDVU9TwDXYb6EvMmxARULRUceReKkBnGiVzyk2d541ZE5Z",
  "key14": "58NYPKymBAaVWPHQYfPCpqADuBxcAf8WUZcN3cheEwpGfP5bfiKFMfhZ2AMgjgEJFSgTrLTociavtjj96UrQAHp4",
  "key15": "QFTiLL6xz8UQSmx4RcMa6ZQvjHu2QjSwyvJVwwnWyRYxofYyddRsgefyHou3xkVbRtwVAdrBgqsVJm1xcR6Xibh",
  "key16": "2CapSYFzwDbfkW4fYDZ4x2XBHX2uZSu6zwETy4pQxyvJsgay8mnV8m55fwV2uhY1GoABqqWWkkt6tSTDR1kce64J",
  "key17": "269gMgKwem5iDkBJpjtbswqtBvH48itwHWZKtac8s7PV1zLiLVE1Pu1H7G67GmFVvRzwGWsJBDkqv42MzpBZgEDw",
  "key18": "8WXrYgBQzK8Uq29uGamW567EtXq2ACqnFWQ8XNM6LpH8CHR2YVr4NxkyDaAkxCHTjgDgWPeGNapTwacryaESMJK",
  "key19": "4e7VMF7um7Sfg5mAJiTXdihoHFNFCuAk8Lgd9X4kWKRafQrq7XD4hgyfTdbFTNkR3tys2QF8xgJ9MYBrAykq4D9Y",
  "key20": "6JBGgxEiRxZF2ork4X82wWzUDUMCUFGEX64Br5548zse5vDJhBrXkrjvNdvtVsz1adZq7DBdw5LKYUrmVZbkXE9",
  "key21": "2w1hfKJDk3XPZGJAHbLE9ZKtodsK28xKjmsVN2UYyLTHejqe5j1W1A5myCwXaHBSBzpKq28QcoPGa4bTSgzXFfQH",
  "key22": "2QFPmrCGPRNRu4aAfL7xk2dtarzi8aMfdgLBVcC82ZZ7L75qTYt7qA7GWFUYB2WAo5zJ4eLaRjh7oUxGjfWJcqVX",
  "key23": "4gZrAjHEW9SanAxCifxi33tSG4QYxnpGUys1KJF4WXQKutzF5pGfpa3KYhQ4gaKLC7z9WssdNToo7F73TkKh2Zoa",
  "key24": "3gpVjdxVUkLyfuftvMvCMLr4RQH2vsV1VyGftrfVwZDSgdyhLXKggGRVmhbsHzWQdBcDGHYvkCK9Q4jd9YaVQke2",
  "key25": "4F86dKaVXeXEUvKEJaNxRBdomnU6dobJM2wUxmu7ar9GzP3GXoctfZKPjfjXCXAB7SZeoQyWp9XaeiBvKBHvddot",
  "key26": "37Hty8qwuPtKAaZTYQd5RGnQBDYmHE9WXAB3Ac5HT4rcL3PVvutCaXXKtNmS4Dm2EZsKtoKTqSkESCHoTzQVxUBL",
  "key27": "33A3LZzxF8zXe7H43QhMYduT7CX1RwpqpxtzNsrxP9LBbuhZXEYCexCNaaqqk3QF4mspQ23pJhMveKavQDDmRF8L",
  "key28": "33vheTe5L1WjFtGCAgKpNgAnaWyCvnrtkWwNvJyZgyCsjrG8Nu9ipixGNgXKSYUgEVa388qE2hhCpCLH89je4FJp",
  "key29": "4wbw18CjKbhXSteTqm56umqxpGR8MCfsCi7juHEk8LD6nUHN3hcmLeKT9zmSyprcrkjWPomCpSok3ZghBPWUPoVU",
  "key30": "3cYDLRGEpeRwTL8NF9UWsP4zCphcTQ9mLy4ToTxchx1cy1hDdJmeG2VowhM43y8sggFoqSvLpYCcDjT8yv3zsc3E",
  "key31": "49TiqNWvqqfDZFiS46uGdZnT1GkXHdY3h6ScQoU623nF6Vdmz8uX648FzNkKvJEbX7m9oVXMVy8BZ8oQdiFxZ6Wm",
  "key32": "2i75ry1UV9CRV3nqJfo8LYF39gEo9p64BQA2ndDZTTwRB9vE75mqbuXedBqURGhAiF4xT5igmdC8c3wBX3dJqqJ4",
  "key33": "5wYcgTGRkKg1jUKLDMNVu3QLfaQyKd4KMq7yDUN9N8pofGiUpSMxnSoEWqQGAa9X6TD2v6b6ZHLs1oabdGoGXcsU",
  "key34": "28nJikC8LmkJhciX7mivPRZvVxSfUEkvJEVwVu3XqJZ6YwfCQA66jMzSDuYKVzUPtPziLtKhRZc812D7gxFGTWe6",
  "key35": "31CghevRDWDC4uf42RgeeBUKLPVUU8fzFXho8oH7M9t3ucneMsmN4wK7pxkwzLbfHWe7Pefsg6A9c4ZF8hzdP7aF",
  "key36": "5W8uqM3zoeZWHNpyDspxuz1Nmb3FFRTyJTZyqDvwiNKvZRjvArcwuYio3WZkg9r8YQ7UN9Fvu5jK8pfAz2PMvpfh",
  "key37": "2SvKKT78JavHocsFSKQhKm4cTZ1fNWemz8r8arPotxVc7PDDiBR8sMEde7VcPJ2P5WnR6LDkTD9rwCJ67AtneYgo",
  "key38": "5U5jvRiVTcaMnuDq8z8oq3VyR6UEa6ut7Yvv6wE4tj5DLTHRSYZxV5pUTSMYkN8Jg5ib15EKizyAC2ZT6hXQF51j",
  "key39": "64dQvgsLdTYbe2aC54qXzGNWdF8XSjDFN1CsridCZ3Cj9oun8XbCKavMaJnLcnY4Cbf7BZyxjRJ2xoFq9nTSUvet"
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

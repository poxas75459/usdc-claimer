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
    "3etXm36qgVMg6f4UFLDZ6qxV3nM12VrUtQqjSJ3jtgxga4hZwNJm8cn1itPQAyMHJ5NuE4U2BXpbwxhNmvVL7YLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8hzNqFbTbg4XinER8UVcu2BvMdakCRfjcs4AvU4PFSnSKYTVtuSoXFBb2ge4RSWYyXdcaTZM5zGx2WxYa76FRA",
  "key1": "5hUmiusU9o5R9Yv1sZXfSu6tjnuLVaS8dBKdLuzWQfv7TG1x9XLUw9BVHjyFLSHhrmUjdVMdjzo91Y4TeZNrzb1b",
  "key2": "29kJH2gAJCjNyN9P23u1Tne47tRb3AhRnL6pY5apnwhZcNq8eWiYV74aVsPdXA2MD3nAa6sHnifKUJ1QV4b34YLn",
  "key3": "LUCp37rTEu3HXFbTKwEMNPv9P19HqHXnc9bsD6gYMNmYK7yTDkGRD41NHcoyDmfFLn99MTJ1YUTZy3kMJpncrA9",
  "key4": "5Aj4QKyzjpqKV87r9HLHQ4axag3mFiXjpNc8rqTvjdqNRG3HH76uuWUMMMDZ9TSyhQTQdBrBArRqeA9TAn7bJNX3",
  "key5": "3Z3FFjYVJGwKgSRzgKYScxtzhy6yFxdRXMB7ZCL4jDx9cRDfD81kjHzCtADuVd2XymtsSw2KtzPoQwwWnAmLYXiw",
  "key6": "44v5TWtPDxxpqVXLZLgpTdRtLbV2sj2RQN7rWcvvZejkcWpuivg5szmxwHfobxfyD1x91ZKr9k97spnXs6wRPum2",
  "key7": "soyBbq7RzLD8BFFJNxpQWq6BZG2Dx5DJ5VfsXE8i5wU15PdyCzcTPco5o6cBsZq2swGGyf8kBKLZyhi7XbYdom6",
  "key8": "4kS3mHApCku9TsxnivEi87AhsgSy8nkPpLPFZWzYW8moa9EWyjvAjTQEEwDXR3xpUQWufJhcpchbWd1BycpPzQRH",
  "key9": "btHk3v9JY4K39TShTE9u4i56zY5tTQgdKAGtsexgKge8cCD9KT8hwqQPxC8W5r4TDvSMmaq2wJGnRG1iBThyKVC",
  "key10": "5L8f1VrEdcgNxEsZXg65EA3skkDBCF1VD1vpUnJ7GJmf6Xnn5gnNDZTnDX7BQF6UeEDC3QxPGKceJdqd38U66PKk",
  "key11": "49b8tRjf64X6tTkGsi6rKMiTaaqPCPCocZK1qvHQhsfRtF8Tqu8aFpbV9qtSSYEkAtydwcQcccLC4v8m2ipbNYeX",
  "key12": "4Yoj3NZH64woA5FmyecGuL75F8up98Ybcete7L85tFgjkmxkik8iDzvyFymEMY3U822vc7rCMWpKeggTZFC24RR",
  "key13": "57W7mG9h9XVqNoq82vkk62am95Q1zv1mXfwNgExnYdQbCkMGZRuwdYD2iJrQBRQqzpGbq9gUeaxcUuQzGZpob3MN",
  "key14": "4SLX5DxMgfA6VJtJRGQAbGAmKZqDqyt3CaE9ioTP4DCk6uNzjXhCGqcRbBvhUJ9k6PF1Wqwo6k8hNfJwPDwfnxjB",
  "key15": "4Tp3vAKrVSTwSscsV5P7YeBrMR4SJm4Wuade6tEMkws3nqZ5PHzG4aQGR1PuGakhV6uk2NW8De6oHcPiEs9ax11e",
  "key16": "2rekk3uzSDqZVQhMvbocpFozMA9pubrhswnBvWPKY7pHVGrqig6ymXDEui6RTtRZQeQXEVcRJ6VXwQZUxbwtopYd",
  "key17": "26VauSHZ5KZRgyaTGT15BpkioZ9CwxmpbGpBTCgerAdHG5hHrgycaTd7TbNxHHV8BS9tZjwyoQNkUJNWagGidZtv",
  "key18": "5iPMwrqHr47GLMHymZvLXV5aoaLnK8HCj6GnC9Dng9RjZHDeu2gNUz2YyLmGvTQbQBp15p43iugSMyejeA646dbD",
  "key19": "4XSKbjuNC3e8J6xxaK3dMrXxRX17CAXGyo3RN1n7cFMFx6TVyPPpB94DorQpAQDBnPbrtovnzbW71nxPAZt8LAgi",
  "key20": "4ToREUXLBv48EFumiZ7pSKe76ke5tFrhyM4GsvdR6seam8yyNh8eK27wA4gWzFTZ5dcK2Y66KW5nTd8tuitR54BU",
  "key21": "5JapNhpugraMYYvLX2itcHtS8NAEcwByshn2RRw3RDAVSkpZT2DfLrYLmwAVFSEttRWEZYcAi9pTJLEvVDnGCRWE",
  "key22": "bNWBxHTJjyLc7jcV2Wx3LuaDc9uXspAeccr6b83HtxXGAAuE8GTZoPQiqr32jV5CsmAPMpSHCp2nD7mmLueEv2y",
  "key23": "bchE32NDs5ZEVJjZeNCKPFmPaaW2oe2MAyFQ8rSTg8H23TTDmvyKVxQJwN6kjA4Xi7tw46m5WDPTJtWhKuX3yYK",
  "key24": "4LUD46DQKGd88o9a7Rprft2AG7gEDdh4KXcrkS49dnKZppZYFwh6aXK2YsrtmLkNBcqiDYnggSBCN7ADjH7aq1cZ",
  "key25": "4yvrMGyvrZ5z1ruk9unqJ22CzbLZB3CdJ62U9ZhAxZKCXUD7UzaYnyHNrDzxCtYsyQSjtxRThqEdUsXCXfW3JA3e",
  "key26": "8REjhtLDvAEGVRdRn1XfWHEbKREXXrDGTL7Krm425bgc93fKqWP7XwtRAYMcnZrNHoWxqfTUxEgg8kvNY2BLRA5",
  "key27": "4wz8KqDBLRNwfK4sb6TJq1tREVDbnYFmdMDss65XoiBZs9KMdddBryhC7ZdUKBcy2zmB4vtSqCYFTEb4cMf548dh",
  "key28": "5RbNHcg1Q7sLUMgznyPJnhGLK1MQQX2WGqoaZEEAw9AAdNRSfVwBHd5ZH2S6eHtRY2ibm5qV33JfPfuN4qEsfwg6",
  "key29": "2XTQPbr6pPJtrJqsstCBH9VCcHkbTwdVGD9sn8hXDMJ41htVGxrMkfGndrTM586Dmz7RJtPT9LkKLRyf6Y3DqG7R",
  "key30": "2ALVhPjZZynamRKbMNiW1ea3jDfFKA4cmN4UwXEf5vyb6Bs6VxGFt7vhGDsksQ3nNEWc4k7GLznnbKhSp53X7PoS",
  "key31": "63AxM6fGD6Z27NxYxkoG7G5AYeMmTtBZbg19QNZXnoydkrwdTDFZ28P4i6tfVCTE9r62yTSasBvuDc3dMohvAuQU",
  "key32": "26jC2doeRu7vLjtcdQzDcGXhiib3EuBjnYeTF6thNr9KQZECdAUgzFNgSU7AcjMJvQmxgJ1jYHjtTNAPkq7v48dh",
  "key33": "4X5TZisJpRd2FjGa5CCU6KSvafNEnzUGZQRHPGTppcP6u8ycnSGCeywDmcQUPYdDQkCfZtuqYDZT6AL6fQs1MFZE",
  "key34": "2URyf7GsKQYnvGG3JLP7EhnuxwntdWMdWwMPqDhSDRSMfguTvuKUxTU2u4iPxCHJKr5JHCP6TYTEd7R4AgGa13sZ",
  "key35": "4hksijdCwnLK8s4GkP8CCvxhjbLpHm9VPxqN4MURvjgUUgLBCn7nVQ94r44776h4woe1Rv8hKUCcvgWNNL1T7Xzc",
  "key36": "3h6MJjG5HFGkiWicxp4D6vPfsthA5pQDbQG7NV8VY8LcWK69q9rNXe53oj4FaFPEgBr5ukJWoByrDQKgqST8pFhU"
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

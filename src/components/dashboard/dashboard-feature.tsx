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
    "3thG5NyHBnD3ZE3n1TaWgfVDBvnxhkMUACyp11Pjtf53Zn8tNUbfZp4NRjrWvYRSc1zKbqA7Je8KCzUdZJwASXGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t9mX1YoT144sZTpgvb2eRs12zQNt6yehkk9JhsbZpvgo2oghbUdQQBfP4J6TWVbpSxyNfNczQu7B41bT3H8XLGK",
  "key1": "6e9NdxJbHBtUJiq8r8KaaiHLiRW7WG2WQ66gkUqmteesnazNvYBVaUAjMkZXVbocE93fHED9Dd8ZEU4TiApnjEh",
  "key2": "4TPDeisArfRjdJaLk4Wkwbi44Q27V71hxttfgUzjY8tVvstRqsY9e44C1qxisKyJj4YnDfvvrgj9vMcF9jCTGEze",
  "key3": "h5qrXMS5ZNwgLKkK7nGdom21BdDaRGyoQ8JaXhDiYvASvnjiuki2QPXxeVUANgn62NEjuvJwDa9ZyVWicgDBhPR",
  "key4": "5TGR8XEBDSAnRknSm77rEygtvqjX3Xct2tAkkGsj78J5jivsRdZpvFfK29qdzPKz6VaZZkxHbDRygXSk9KcQj4PY",
  "key5": "4WCGSZrB2w46iy1R2Q2wC8gQQnxFmRKZiTh6ikEoKabgLyQes4WR5cGWorVaWjCZCCCUmjymTmPBzNgdvz1di2py",
  "key6": "66dnbHRjetbT64uygnUZ5wgefZd3z4FeMtp16g1t5SJBZdHaKUBkvtBofPyACxFLcdb9skjHEr5LRR6i8qsHykhJ",
  "key7": "2DbwCs3XzeGfzLcVztTwREuRPPdaRFmin33Uqrs9obL2FgweCFRTdM3zaR2TjuSLGthjDxVTFgocsBiDpVRhs9eL",
  "key8": "b85YJNF41AeYjN1oy7x4LfyRgcvSGX2qgQK54KePeJABwUzHwNBd5sKqwMQWZjXmoctXCjCLWS9daXA95TJtJUv",
  "key9": "23UPY78gzcGZbagcCVL4A53qQCQ8JGVYCSWV3tU8Rpb1rCjVG3xnewmT4RCQGrhHfeJJu6NMVU27DLWhxPE5BAkU",
  "key10": "JVysBMdi5LUn1PpkuAQd1rRhwXs6NQ9gdtfU1EvFhX79KrDwSnVet8xxqQY4ph31XDFKhHgwdVN7fL4C7RzbqKU",
  "key11": "5SjuFqRDn2sZqAgPkDX9CJQYPhSvCqHoTCFEA8NTDcTUi2vz4EfW5nzKGTDX9tKVS1KEoCkC9N49LJB77QSP4orE",
  "key12": "3cde8AsEU8vfHKSS9uUgzVkrn7txFsspYBiy8Ne1TY7H9BDp4cjVQK1ywZxd7V3n8FpvMtzhXifN5UHRaDsFuEYq",
  "key13": "EvnFkVmqL7FyBwt33cBKAicGFttnAkETbNogksmqFvqcuVUEQumC1BW7dNnFB9HZVXY9NfHx6ed6YEXhoWoVw6w",
  "key14": "CUSSKhxCe3oyDUsrAdpZivcqhoRju9skEnoPvy9WuiarMhACTKAQghApU26zkzRZ9FNWgcXLEaSR8QkQwmkJ2rd",
  "key15": "4zooiFQdzyRnC4Yk74CKvbY4KAxh29pNyU17WLn1t2EGbvuxUMvdwn5P3xFMyEr4Z74DeSrs1DFc9uPZu8VcPvKv",
  "key16": "2FUrM6JvGSgGtyTF2Eg1n1RtbuXPzokSi4bGQ7pskfzJBd6HrNdpqSxdjLur33wA38hCgj4cm2MiUiS2huDH8KEf",
  "key17": "53nXdDzQY4mT8xxP1nzGgM6SnCpdJcJcYyFDpUeKqpvivx2fjchmhp2wFWdwLJQ7uqZKhF28jLnoquUiRszS5tDC",
  "key18": "5VapHfsDjXWrdoLJoEGTbv7hRFVnVZk1YoywLtip6GqSTJ5d5MR5ax4bYvYv2tqo7JMsHGwcf3zhVtYRvMHNGbw3",
  "key19": "gwPFVRdVgZZZ53Nv5kMzUzj5zec4AFcdBr9P6URuFgYZXm7r5SU8otyin7unvrbjgzCuoXxXdXZUqaCAGQ7ugaj",
  "key20": "45NUb8FuguLK7rK8EAQ3LCnJ8WhE9fmWndXqkgq4XkEmASBkgvhocCDFdk35tGPGwYXauEiHUiAaqcccLTFbjf4b",
  "key21": "5ibg3vZVgEdSsEFGGHiAq2xo9hS8C7XHQowwQv5upxiNdNkHRtS9Lf5ec2kgXeUaXmy66Qebo3PoWcTHpwuKT8wp",
  "key22": "sVNi7DEMiGmCMXJF3qQdkzK8zmPnz8fYRmr18x4AoACdGs9j4sN1UB3E9jpSaangnpDkcvfcRj1emwfZj3k6B41",
  "key23": "5MDpKWYDJrR8LJDaniqXERyMAw2KnnQz7VWLZb2pnQKBYqKaozpZEyBBQF5EyjQ6hWkG9RMxZRx6kJaBhGMtoyuh",
  "key24": "32H296pdR2HxBAC74tHJmy3hE9JVf5WhHKAfNwBMiz3omc12ucyMB6yf5SQnXkYXsEG3tCk9vy6Vvhq2VYoFjphN",
  "key25": "4BSYgxSmvLr4TvSQwaBbV8JDQKk3ERbH291Kg2jh8HL68R1K8jAzxr6yTmBXZ7amF4hEbBghUWggccxcsKsAFew6",
  "key26": "5FvtrAzbQSa71kZgNQFtpa9mnCdK3hXT4pTcNiDLSvHjz8UbAMbZnQsqoyxRJqxFmcWmv8rqVjFiQUrWEnSqWaDn",
  "key27": "4x8D63LTASoeHBkZdny8RJLwJQx89PYqQRGQ1VyMne9qRFSQKiThgFxKjn9bWYXa4nWxCy3rANAEgPCRAjuyLrUU",
  "key28": "3dTmYepi5yr8mjnvdDU3DJ6tzUQq8u9vXdrbo2ZiTXKxYLaM95F1BwqzFcibqrG8AKxv67LtKhKX3M6GxptTLAFc",
  "key29": "4NriHJsptdk6kwFZX43dPKBbiZiHiRZP5qcBMag9qHFiksVJveUYP6UwDwBvD6Ey24cF5zJUP59v8ikRSsW16875",
  "key30": "irAYXpSZAoRQtkshBDhczD75vw35Q569twenuQtYdJjCorHWxrqDTCr3qC2CRYyYNXidMZuCsrjQuctufW9KdzF",
  "key31": "66YN7nWidqN6uBF6ju2tdNTPregG4UTvUL926xqXiGwwDMpGZwgFTnqRirhA1NDKkT5BspBexqzTdmLqnhBpBps8",
  "key32": "5TyXxfq4bPvUrsmrWyrWP4YzS5MBR3Fz23H8XFXJtDySJwwHYrbQrTBxePHtuUNZYWSCJ5uZpJwswBsicGmvT7Qi",
  "key33": "67Gy4CHSLemWhqnGoSZUQTMSYnYBR6uRA1hXVknndUaVtChdoStCo7NENJjV8275BpFASRh8SJ6hHmYzF12ULaLW",
  "key34": "eW9Yujn4bcE64zGDYJzpbDD4WyeLYLsbmz5b2eBrhqPCmduMXJ2mHMkzw7cvTWGDmJWZiFMMmPhAmBLBxmp6r1p",
  "key35": "36a5bBqSkDVsfgqT6XpQ6N8iMTENf2BNv5MdDEp4G3kmvVgxtWUHYTopcjjHpjTgjX7UunDSm2dMyyWHCiaYUUVp",
  "key36": "2BpYT5ohNrRLyKJ312f9TE4V1mPTXs418ZU25M67WfzbhwzxLzkyAQQBWm8RUw9PM9gB7iQeRLbMSGZtMwA8Y7Fv",
  "key37": "59QfFabgttutk2ZAqdAzxUTQuax4j4K6qmpa7hKpohZmjsax93vVBx8VG2tcmWGtY3DXG4mpFFTBFN7ko5rpDwm4",
  "key38": "5v4vQK8QCR9VYvUBpWqwauXWT5KgperGKvuPGyjGNBQj6DurDHDY9tGA7afW5ans7JL3uQFZTsrRvdWueifVUFAQ",
  "key39": "24sWXzKr6gCuvFMnXMhySCjSXBKMnb9tNKvmQ9MuBYBeW4z2BcvraxnBBL8JRq4vQv1MVjSjicQPJUEuxiFXxaeR",
  "key40": "55UibYbTrjSuQkzGyKaxZkqEvahohGozwgnA3SD7hc1ZPo6JMe4kfYUrtnfKuFkzeHHxqVySaaB2fTqBG9BJ2bAB",
  "key41": "2xgfpnzbMpRNKb6wypDcmoRjyk4S3G2eTn4Cw9PjUB3JbmhmpE48gqbfFERZaUXPPfHSHcBcCEwjymJuQJtsCzsi"
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

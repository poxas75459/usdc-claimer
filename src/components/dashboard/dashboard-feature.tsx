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
    "H5mCD9WbkLh2rk6eKoMFSEyyYDBGSGKCSzoqtcrpwmE7Dodt3pK7fEdhhpiErE4CbwKcQ2irEMxM431tzcKiJne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JReaQtfZRD1fZDY7btJY9RkFgvexYWKbdgdTMYwsziDJtgLW8S6UWdvGdKJ4ZNDUWGsfPrLcmUXcpsdzVknJuRY",
  "key1": "3ujrWcF3dsouk2eD8Tavm7SPiZtu4eop24eF4cBoaoYkDVAbFK4FZ6g5SXC9A3rVbxHfm2NvyY72sLkbJAWUs6Fz",
  "key2": "4g43Tzv4TZu5zngjsw5PrbruzEu1cjtpsAKaKtmb4iBABmMQC4miY4c4rNitzYxbmXeYtPMTPgjhmj6rovSQH6Tt",
  "key3": "4EdfCPdXFGPqMLR8E4g2veXMVqqtgRwwHSXYK9ht2z5hKF6H2kcgmzmzwQmmhUmN9NqZPBwLkXtkz2vHzziiqo5y",
  "key4": "5CrtoPT2owDoRkRpV6VDCkx3KTuu8xfoCepzDJxYUxg25KUM1zrfqsvnsjkhWawai9XtfB4MKujc4ZafTtch8Qz8",
  "key5": "3ehCpH7LxGv3VYc4fRcU6VAkPgvJ3TKkWmnL9Wsp2UMHQu79MR19QsgwfgraW8ZjLSqNNV5wq2pDU6NP3KDvhBGc",
  "key6": "3r622wdVDCWfyoXPyNjNtJYsBwSr6USRv6MQJqYXEStsfbVm1Zp8WLniJf6mpm68NKikxSkegeNgfCtpUUNt5bnZ",
  "key7": "5Dyneb2xykDw243gSb8iYULztq6enFgwxLq6EgR59yW6gn9HGSt5ege5GK3nyLAhou6WzpijP9qM2MLMRjKj6Upf",
  "key8": "3iHxzRAQ4mVx27UCCc66yQpKE68xLNESzbPxejYSmYrbysL5C1CwmGJjYkcwsBD3PCNHLTcdJqgKNxNuGRM7WiDi",
  "key9": "2bsRcyMT5t6AodA9HdSzoa3ZdcFyM5oxcsjZtiP7EMKfvcv4ufH9RV5SS7V4ruYWk14QyZLLZnzAZw8wA4rVSjDB",
  "key10": "63Fex8ZMcewQKrZXkzN3vU44jqmVqMTYKEr2S2JcdDmj17n5ewrERT8oPHNjYoScvbL1fF1kx9uHw8GMWYct5Cbe",
  "key11": "4TaXCvtUZJf7jbcVKkANDmqPs8cPEr1cbYCAdEvBGR3DHUFBCCLN2QaaKmJGPGEAdEgswjCfTHsWWB5uRujaMJ9z",
  "key12": "3yWUZKwCMexuaQqWuyPH9zUXLR7M6SrtU8mXrRWBG4FDaSU7DpxNnwxq9b75VEh2uQeY2LYFuwNcw61xoHwAXTew",
  "key13": "26cfQtYuUNAKTU8SAiGJ3fGXSXq7h4tSnGhpEdRnt6r1hFn3eA6hiHi3WdNCMuE4S4SuuAES42LtbYxVckwVAgpk",
  "key14": "3EzxDkusnN2C94PoGD8o27hYwz1UPQf3QWpBaQxwZYovY9usJQySM94BdbNQfhYL2bE8LRJQZ73KfgDxPbcFaiRD",
  "key15": "5Jq37uAE1iY6sMfsMDfY6yUQ4m51AiZzZbwrCW2ANN2HVfFTm9eXbZpGgLqZCveSWHx99xDdnPMBo3Pt8UWex8vG",
  "key16": "4j4GuxKmf4hrcJe32jwM3qJsTCYNNwDShhpXSnu1vX2f6xaDkdYVx2imMUXbfKC9CcyMk9VResggSZSrgxw7nfC",
  "key17": "3NnWrmHXdKHZZwEyoBMj5MA9DgKq1aV2C8Pdqoig3s2MsbSzdvwfTCQVUwDgpu22jbqXNU9E5KUpo27t2vsfyYKD",
  "key18": "4rSH7ouxCKSYxSTjjVbLARk1679LsuHk4Vo6NWuJ6uWGJTC9mt6bHomjVYzRPGi6ysTtdavcxRfffmgPD6QFW6HF",
  "key19": "43PxVQ4Fjs8CJgRZpszPBv4PdUdvR8Da413VJhepy6iXxwQ86vCd7j2Z1fJ7wifT5DvFPwvGgyz32xXKPeNVuaa3",
  "key20": "5PKQaUhBbMvebY4cyPf8hQqMKnyzzp3e8rJRhwrWrRzx6yvfdFScokPEvj42wy4jY5aAwXZbaFTmsHNBu7QG3GVP",
  "key21": "21dsXGjqgAXVsj7uwWhD98jH2Z3FYM6ujcPpiTAJ6brDtNwXVPdn1vWT6YBXE9RG73sAvndb8tq9MgjvGBnLK35Y",
  "key22": "4VdRU5TZmDFsPsEwesZGvx1aUN5q7rER5NnVSzbgx5JVdg8ks4VuyaurNpL3RTjMcXYMXHLbkwyP2AYs9XBAMQyu",
  "key23": "4WQoNdjXcdMJW4L8CjTjkKQCE8qM5LhKjTpPyfJ4GGSFwSVRdBFMP3AEZYwiLNUqDsafcPCDn4iQz9b5VsupJ1x3",
  "key24": "4YGnChWsMj4i49yWNAMAn3isjGEehYbga3ms7F9WrvYEroYJv4U6eDiDpJPqc3tzMHkBwbnBBrLEJMtvdcT6tkbL",
  "key25": "br3bKZdcwy7LjUbnQ5Nr7pu3Kn1PGgmYh16jzKsfVPGk8UQa7gtYen8wHqTM9pyki9TDmwNtbTidMURB2UMG3Yv",
  "key26": "vxCcJ1uKcyzUivGpG6xD3jza1TSnYVcKNM7pnwh75jiKSTzQTjFxTNRJZXwv8gE4KpE4jKKwgwqbuDbzzeGCb43",
  "key27": "HijCidJ81fwnWQMNDYy7JvfhQtiGjeBYAF4kb3Ny81QiNkxs4GQsgf86Vg9T4uP1Hi8cNPq9VqtEvEgdNVxSFzG",
  "key28": "GBNYsZhRxaahRfafKGyURQQzyWrYZUiwyEWEjTchUY1wdCrBkkvrFbzDixrRfKfWKz6Ry7Gey5LLRVQz32w3nrr",
  "key29": "5mKAHKmNNght6wwbAXhucZv35BbcQDUVFcNEynUH9DfrqtUofvv7LDqoaw1g6ehCQrb6SRirdYCzZh3PdxPp7JEs",
  "key30": "2Bniu6i6EPMkr1Jw9zsSDMb5t4LveRDgw4KNZQYbP2E7xKw5PKZGyqvgxxSaQ7ys9TRZiWuG3GyKJcnVSLKmKddo",
  "key31": "YFCs2KgEKpnt1nNSkx6EBy2gV1ByS7spwfzBTXmRd4jhCQMzX3NUifdvkhWCmhMoczufwrhMQ9TicXqrSuxkU9u",
  "key32": "7rRV4J2mg9dHKG37iPhPz13CyhdCZuX5YmVi9Xk1R6ZfKmZ5JT19faQGxFH9HqiSZ6cSwCAghryJmHHwS9F8hAk",
  "key33": "YdDN41fMza8ejzMfCS7oogzZpnRqkphbwg4fr6NfWaCRYFjRi6Xa7QhLZZNPhYEmvimgVwJYiKupEMZqH9qo4x4",
  "key34": "5iFgVKZNHx1tncziDxpVCtRmEJEDUZjs8GDgfwp8zT22nCb1KJKk53DYhCy2LED81TxjDDK5AkC4aTpyrFnxRi3a",
  "key35": "2z7euE5TFAttd57JYp5DLWc9fdmP9yKwstAKnZeBJE8WgUcwe5Hj9bD4SbiZ2CUg6PZ2xbHM5S6Uv6oPgpPTmydC",
  "key36": "5SiSGYpxfKvvBb3oBn7CSHKttyNkScPvtpanDJW5ewre2aohwwfHGHnWcdP8dBRQAHTHzLMTHMWPYaA5Ce4Pjyqq",
  "key37": "4ra1nroTSmydaYjhF7EqX58veHFaBqJeWLMeZgkFUxZDgUq3AxBfN6x6PKhG6dbCjALSQipaams4t77yp2PQPEas",
  "key38": "5B4L5DjSmKZAWmfyRhgRsrSHvAxLFgXvmdu5yPVNfRddSKXP8NJ2ybpx1EpFQz81kfUD15Kpyq936N676ehY6mMf",
  "key39": "3HeoLcprrV7uBmFAEXhyWqfdJ71ELftZJoCeXobmPKaC3nqrWPRdqN99UnWLtLgjKyjbS7PN8M6wXXtXT7o33H5j",
  "key40": "bjymHtbAR5K6cDeFbnJVzyxoWhvFSDo9igG2Gz7DG6R5m1uZKDqymZocc5UtMVd2irm2vs2eqoTmAfwzCAPD3tX"
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

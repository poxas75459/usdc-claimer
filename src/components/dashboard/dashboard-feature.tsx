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
    "65zmciCjYMkvbm4o8MKJDSxhzwzDJKdXQyj63YYfmjka7kmohLj5PqqVc65mvZuc3Cs8akVLaoZuCU54eHreruQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55SAhMd2yGCyGR77CYfEXyGpjMV8iV2KCUkJaJSCw9rq6Z2ZhAtdorA85Mx4o84ENkAZv2eVtu1vv7ycNCQUjBqF",
  "key1": "DV8EEaNpc9BFdypgsYMHYTpAbUBEnn8K4QwbvyDodwPiqwpJ7oY6QUZZrxMZGRJsaT3kZvqsPN3oi8RqPxouDoL",
  "key2": "2r8X5MkCyGYaqDWxmX4e5Q5EmKtYnGmQu7RgMHPstGcX4V9yXR6XVSiUqe8G4LrdcJ92Au4Ld9th5M4iHRC1VjNf",
  "key3": "3xX76JqowH866DKpuHPGbMbWHzXzEdBbXoyjS8p2XWHnvHNE6jXyL1gLaNJUMUM69bHnhXicZifzTi5D7iEL2BB1",
  "key4": "41n2d4qa4zfpKgMg3PZ7sTmR4jDib3WhRTKXDThhCmB2PFzY5oukZd9KrqmnPoLwQKFSLeXLsf2HMYC8FTvpRFwd",
  "key5": "62F5q9wHGJSyqFsKocJviFkuPdmt8dgkTAXE9skkMsxCFT8yvzniefdx1c2g4FnXMTQ42xQbGdnrHjGk8reX56mA",
  "key6": "5uWetvoTRzGhF7Kqk1KAYrexSTRiB7b9nHJUEV7gTb3TPLbDQE9JRfKDTqFQY5QAXQHXTYLFxEPPdM3XgZ8Rackh",
  "key7": "2PEeSdPChYbbswouqBQzxzinNpP4Tuqi4iHzziXqtuNDjLFg8VyU5RtzHS9EiJgj1uTfXFcadyS1tmAmwKs2K5gQ",
  "key8": "5oaqidC6HKHvBMXjEg9vZfxK8cTHiaT9qEwFkQ7UA7XemeVN2SpP4Q4WghRGqhnBXA8uTVpqr5GZ8kNLyCbzkch",
  "key9": "4LfhBRuZTdHeU7ngHfzFCiyTXSzaDLubq2td4P4XNJbjsgwyh76NKeoprFtmFVrAaAZk1MnhgcXPEp7cTzrXPNP2",
  "key10": "bK3tdsXkAWfSUBHbqBKeRRUymiCVnT6aS9D8pfcrUb8spwJMy6oNvKeJHTyRU4UQoahxhADXbyuC1XiUX1RRtY2",
  "key11": "3NN9BA6vwr3EeW99v51m9FCQsGqEexRKobDSge6u3M3xGnc7d6GEmq9QFBAEuDkTqYSvU2YfvFHSrEHN6Gm1cPT3",
  "key12": "rQbEb72xZYCds3mTQhL7PQBF3qZpyG5UxwuMyNk32eZq3FTfRq2mX8LnabcvixUh5wMb6PdBZNXthdPHwHU36rD",
  "key13": "o6u9JkWcuZQMzdffUNTt1wvT85zk2nXLHgAkiVsMZ1evwf7bdVWAGQojG4oAbXhv28QQxAWY8iaALyYqSP146vo",
  "key14": "3mnGobGJj5z1qnwpHMCmvFsuYCYevMHk72KJ5aGZF76xS5HHKCcZbKMuo3SPVJRFFoajP14b149yqfr76ZgASetJ",
  "key15": "8V2CkLS5GXfii5aABEhSxASVXJw7PZ9QE1oLBJRZo19hciTHdi7JK9Z7945uGdyRTHXcWncpS7RRwEySyvN8r5B",
  "key16": "44JTECDUsKUuQ5wz9QnkxNKqDp7gwmMpwXNwuoFt617WanQT7HPtKpoB4Fm65RHg8tyPamwdK7XiTmhQAPf94QTV",
  "key17": "27kjXR3KBJ2ryPByrXnLytuJKmSnD6bs7ZPPwQ6dFoiD2rSC9eXByFFQwZA7jWya3ofwRQQEZfwkmQRFjL4wJtzp",
  "key18": "5mPfbyUoTHjdX4K8xZ3t8iDGpvbs66ZxjWFmzMzP4gH9HnbjW812s56EwnEoKsreVqw1H2Zv7mhTPTvwudYK5Btv",
  "key19": "4nDZAYRJZb18NeLCFc8tvfPPvsnKq8m4Ahiv7BPxZbAv9M8KPKBMFzfzR9aD6VqL7VCzWVGECcSRnTBXAXAdZgvs",
  "key20": "5hKxNtFzMbM34yqo8MKWHec7TPc3SwbQGH6Wyw3LSxoTh3uX1oBLJ73zyhGNw1jqbrYvENEt5Z8wELxEu5c6qHfA",
  "key21": "26r4urJfVHHRwC79s2o97Af9gjmuLsi8uK6VLU23rKjFJTPP33dsYMh9WGezcLLaDKVLWqc8LUgCJXMAogty3KMC",
  "key22": "2DWAxgvJwXLYU5bQ9BGWbmeHozbgqEAFmC9dnY61PBEqfdxEbG4maevcAUYiuKoJByUdrjEPWiGQ9vtGrZNtnccY",
  "key23": "2Ut3h459ViQiRVWqk7tbEEKjKqPiXdDHkoYYZjaohk6CbMJTmeWXZHpN6mEBpn7bgPFtHntGPiC3Wvba9F6jtuap",
  "key24": "3AD7s1GZ7Srdx5k4rQSxDNtJnUYh6YFkNNENtnj8DFbfgknRbk5SL5WJYKH44RermyiR3QUWme96R5JZcL418SD5",
  "key25": "2jEfr6jPpdqc5W9VToUB9BnV1smLDjzFzkkNMwX6D4wMbA4WiCDYGF68prpP4QgZwBHFMSP5SteLephA4VfJQaA1",
  "key26": "33RaJsjxwubwwQKPJ8rTfPqHdqC18QLLDuBk8nDmdCZWKJNd7rdUJLyiuc7un5i76qzUxWmcr7cHADF5dz8kqsTx",
  "key27": "uwXjrySdeNU8CJGchM2UFc3AAMxLHJsbb5xBb7umnB8ZxnvTr7VE8Q1vuBEBefnVaQdxdPva3zzobfmjhQLUevn",
  "key28": "4Kjjyg7mtVfDCRCb5Q21ZiDKTQEoPyajMiQmE5DKgfgm4pWoxBTLvNncotKkDejBJ1r23khncxifT9XLWTdaNie1",
  "key29": "4ziwExmRoJyLLRUCsuZ6511sBqhT1cwEBgpDFCw73gdeTFunRJbZu6upZRH8G5h8pyziGZFHfC5h8WmHPW77ZRF3",
  "key30": "fb4mxxAJGbSBP5mphJ7vAz6jFGdLj5rtx3n6PWn5dtrUQLuXJStUyxmvqCu1tpm1ExZzW9aymFLke5FPipCuGjW",
  "key31": "1cWz8B5e28xo9UmL9uid4oPjSnEriPvhGz9y4UNzoGU6HcZBKPXfJy7tGJ4FYeYswHRXaQLgpDAGiy7A431sYA",
  "key32": "2PXv4E1V53F4js5c3NWjdUyV7c24hYLNicb3eqJAVcWb6XTR1EHPr3vdVm2otDKJBV6zkNPXY2iQWgo2jUZAaFm5",
  "key33": "2ZJpHiTyGjhmqH6EMp7W4W5JwA8QJA8vHtGbwuVYaCqMiZcykzPU4s3FHJA7RSGRhGKHKKwtyGP5tqtpM2yVhzQf",
  "key34": "B3wLbKeDEo4midke8DynARnhPxvGRjFSCGV7C15oRJMm9qiim8FwZDdLkudkvF3ieTxPu8pQP6tTQvPrGLC5tRM",
  "key35": "63UQNMCL1srApYaakGNsXKqfZwos8uay4xWaZDSgRd6Vkpz5aLPnEQb92gF27ikuYfFsWK7uqa5moyD9fw6bJH4v",
  "key36": "61myvUd4hV68j9aEPrvQNUq76H3JqcbTh9T1Xix5SG1R3CMVuqDJNT1zZ5dczNNZa28DXjqijhvneExL17kBQiSN",
  "key37": "2bjdsER652BthMxpayN6Zt7VDEZgkXZu9iWCsBXVDvxG3LupDCtjDYW2MHQwTRLrWkrPzo6gQMHvoSjzvBoNiz2B",
  "key38": "5Tph8TreeYpYmXaWkMu5RzrcyECypNDn61q1FbLV5AfBNkw2hi8hg3BxzBo7CgjzHh7yRXo4cQWcL6AyLNMLdfAC",
  "key39": "4yiNcY24GwcAWzfGGXFMsrkKUUxuU2DEQZeR8q8efN8FeHFNYkj293HoTeZhksfPRP99ERQkM3H7pP2C9muYnZGs",
  "key40": "4aUjS6u3RbUauxHaMB1sa5EMDqePdSKH3u4CfBHefpaX1qAPQB73d9RJmixnSc3xZ2ajT5BedWGTbHmErsn6E9Jt",
  "key41": "2uEHfQzLHtFP7JUDMenrZ278CCL62dki9YayD1asXcPV5yvAdL4NCL2ix5GB2MjyMsfSgBV9v5sLTkKuUSLUPusR",
  "key42": "2zdSx3DFMyPQRDhsSZSsfiEc6FLRoH3SLdYKPUKZjjkDXqViWG7wcemaD2pF78zJEd9CDmLDofjdgkFnvdMDvHTB",
  "key43": "47JDpcXyjy6AbzGWK6Re26n1VEw5bK4uvEcbgSfbXUBWxrYHQXaLBBDt6qZZJ4GJTjUnDqAi3T9ocTyWX5rkLMEb",
  "key44": "2MM2TMD2Swq7Ea6fAsvtPJF5ETQdWCFy1Pxk8iqdebuXC1sFBQNjdp7xJ964TbEemp2FcEp3NiKtTWP4v2P8Dzqq",
  "key45": "3S8jKS95KPy8kjN6XXMkFBfQose2eMcsaNMnaVXfH2rjvcC5tyTWgXM2FKpfiAVvRPEAefaMWhk1U9SiDHSoe9sR"
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

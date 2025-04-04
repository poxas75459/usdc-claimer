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
    "BXV7JETXVKPBduYCwAPDKifAzFW5jm2H7pZskftakUdVqRwQo3sQdivQKSdg6sqRe1wt55hfxHsLGdeZRqQqHqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GakMUXFBepJY4yQykBTLHrTghprexMMzSRJZCV8r3TyBkxBTNnfRRuEwdoTmEmL7oLQSxUvW5yqoavHsTVkM7k2",
  "key1": "42iCBi3kSix77ijLrh4mEmJ9d4nBp1wz4zFhv798XLDc9sWgDd5UXipxCN5jxP8gTfSsNh7TSnQuDqN1K8KCFZsq",
  "key2": "2DycTm8EvZNdjnk1tJRXe1JWpUrFFHPDRy2vsqsHrxm1W5PKbBPPJWDvMdMJyypPEMhwjLZJr3VXN7oCqULY48CT",
  "key3": "4dCo4dryuwNW1DCzhNMZkVc8RrJvQWGaxghXwvQKkYMgXr6fxcCDbCbXBynJUWSFFtMF4sxNLN5fGBTsjWbNHhvN",
  "key4": "tJXWZy3pNFvXqnJBCQ8vR9r7DU3VaBYTs7AG4j7fQpcHSMLgvpcmLXHnxK3CXQc2jA1MZBPDwsQ7iizABHrcXPP",
  "key5": "2UCW7tMCMxSoLGKDSbbfyYNFAZ5qTbXbXQBBJ6qyv3PPHYxhiWC7dHfd9TLp1HGKiByTUNTLooR2orkrBxx4fRdJ",
  "key6": "v9JpZ8CAXv3ACdwX6sfRKrj5FNtiHvQPyFHk4wvLmybjbFyXKYyhiNLx9ayjNvLgx6Xd1kwkfAqAJCuwa5K3RQn",
  "key7": "3Gg2qoq5kohqwmWumFpmNxxb1NSmF6VTyEU6KySGxvNhQyxgrKccXHSkH7s5ZqM6dXgRsdK3yp1LpPmF97rt3YpG",
  "key8": "2gUHANWfv4SLZbh3whskPzndHfwKoeiY3aRbueWcxB8pJg8zruXSykDMMyBuQAkDFxhFZDgNPeJikkw1oSPZgRSN",
  "key9": "5Js6DMLYtWR2d3DxT8aX4zK5nsthS5N9CTMiAsge4nop9ors7YA6cLR9M21FGHJdcCeTRSfspB85BrX7fix2hP93",
  "key10": "iZ1gNQ5coyuDQs297Hcao7pQMNak9Zv8GyDHUkG6PxokfMA6M2xssUUSd17AYLu6mjCCVJFucLcmJ7DZ6cNofuB",
  "key11": "2XVKTb71RwANojYjScfTjTdgjE4ViDmMDH82ZxbxinRCPzSPJHeGggyCNRwr3RER9MNSgNANEUzAz3UdrkGjmNTG",
  "key12": "4dPjwBbh7VL4feGKgW4r2AoLZGBSWxcsEs6cxmkjBbzYtDx5usjL7Tzw5nF6xJHBUS1tNVa57Bvg1TnKNREBEpCQ",
  "key13": "2Zj4EGTqqyPSXPcwat2kcE8cZB7xVPNsY1kXLzRhTWRakZZMvb5aJ6Nr7zjaTUQ5HjU8tDGiE1gYJx2XH1aY7UF",
  "key14": "5QhZtCjKggz23udHhGbviDjEuqq7Wyw7CAiEEEepNBSsmtvM5Sdg3eoPdAjA2JUZiLZp1bWCkAAGyMQT8Ucgowce",
  "key15": "bhkVFFRZwZDH7QQUb8NBCnk6kzLyrUKq5eRju8dadpYdQuoBPV1qNVuWZVNWck17PYnSLfn7wW2HteQc3eUBQ4g",
  "key16": "2N87Ayv8mh5DmrtGDsTLELyRfDrKsi6TCrX9FfgqHrsMDw9X1JGJxxREPzXyRMytnhpogy4pAXyHumYwXMSAVyrY",
  "key17": "eka4c4sZMzKK8EdCizDaUiRW3E3Rxb7K2AjvtvAv2UtF7MefjpshJf9rsfznaVgK39PX2ZKq282A5TGVmEvfc3J",
  "key18": "5D8jFHUSZE1TGcmTMDNKE1oxCS5YCMfUo7u7XNLgAVY4WNwKf9CbKfKCgPB59XgJiHpZ1aGUf49zfuuY8xLvGCKN",
  "key19": "dKZzx2ZQ3W5dBxbkguqT5os1cvJ6LHFwrerFNybp7i95dQa888QbXWdPNia7ysAenNY5UcJxogFbbtrPCQG3PBf",
  "key20": "54bg1W3Xnrfx25Ct1HUi3MYoNfkLq8absHacV9CpqSuXCaF6JQESai5WUUDEbQCS7cyF5EV4RWi4pQW3bh33BpqD",
  "key21": "4r73tDBbkZg2Z9TePNvwgxVg9AT7RcNfzzGn6qLahWq9tixuDKbmUvRc1fdXw5bxbtK6Gqjm4Nad77b6oqmnSwHL",
  "key22": "2YcGsbooZW47Jdze7eZ1naZjp2yvJUZH7rbbFdvBfCudteLZb6Qd3DGTsuPvgS3YwAFMrbupKce36vbZi6CiYqT8",
  "key23": "43CUJTNViEJ33MBw7NVnCsNRNzVyoE38jjXLemHZsUQWu7kNaDgfduovHHWzMem4UYn7NZWwkYtk6iMt2qrRmM5d",
  "key24": "5y1W1mU9CHAJfKAAHMsdYw51synJK1cRKndzxSpdTnJoHKypgSw6LbNwCxdz61FgzziEArCc4KoAYJxRDYYaiKjc",
  "key25": "42K5hQXN2FjNEyGLZX4SpUs8aUvkahXdoFWvVM5V2SNskksdCBchP5qhQQuTtt9PTGTfGrJb7Do54zRoKQjN3bYd",
  "key26": "4XCYzc5Mhdrxa4CmrBujK9AZnC5LMkCSuD38VPQPJSs66Gg7d2itDmiMnjpZuaUEYGkBd8NXB54CvrRshYbTruTo",
  "key27": "4xj9Rd5mYTgYuksWmpnphgK1JT8avLn3twwDqoXcboN3HvmaM6kS16GvAo6NZ46c9itk4n41yBHE3xapnvuSggUS",
  "key28": "5bM5F7AoJBKQCoh3xmyUbZFiPgBME6fynaHURpDaBsi9PJZjGW8uyBnbKS7txTUoaBcMdCgGK3HPU2LbACjSJzjW",
  "key29": "34umMYP4jSxHbpMSsMu1x8ZAmWBABABZxnSuD7Pq8zMvJDhoDSjH1zf8t86eMUQBFktKeGs7DvpT7cE5hRVS1ytM",
  "key30": "2wduto3JKbUjqh5e2FBvdAVCbw6k3E7X8dFLpLZRBHmYsiubrqpTHatGEJdUL89vSUyPxVafjSvZqghhU6S5Qzkt",
  "key31": "EZupbjJ6kFMBJJniRCZbe2bR3YkAbKov4CPyhwLGLn7t5KwY7XhHaHdo4hm6pBhFsqoDpSAo5f1vJnzZc1DZtxk",
  "key32": "fTfdkGu8AxhrbEdPkeaLfVftzaRjmCmRcSoYFqfnXzmCzY7C53z22J6vNLknq8FZZyULruYJ1tbVrw8HqnA9ipn",
  "key33": "PNejQVnCW7GKXKh4v4nLuQkDvN5yuaXQgMtShddoQokJVe3ms1YeXdu4JJDviz7PMgCX9ZFxJajsxYe9CJWA6Dp",
  "key34": "5HCFtWS9gf5Tc8gpYSKui6J7QdBLGQsyT9cfy1nKa5T7sAirPDYdHQuzfGugLpqw4oyuRYPo1CPC1V9vaSUNGD4U",
  "key35": "5ECVk9QqeoraKBnYJWahMkXii94wvdSvm2vxH8XGAufGnjNY5t4qnmFGVH7A47GQfTJCwobUnVjDWsvfsVsnjTFD",
  "key36": "nJmxTfN1ffKyMN2gVVfnAMona8oHxaauXRXBh5SfQwUYD3An2jKU34A13iYBb5KwJRbEwEMPxXAmEP5GTGbVeFT",
  "key37": "dh1WcmmJ2uWu6a6x6VELSx2qqqdZFzVC7hHaZGFcapbz5Xf9x328Nfmc9QUepHVSHSHWjjuiuYgrsnTV2Xq4Pte",
  "key38": "Q4CJLRcUQj2dkEGzWyWGF9nNTy74Lp1r4PFCrJJRJrFFb9aYjSj3HfVtYQNrALNXShBYTHnKkg8U1jgeb37VkQD",
  "key39": "5w5XdPuU6RfTh5mVr3qqN2U4FYRP3fD76Zux81YxjjJ1dKDnQZxRAxMKf3L3xsfRBV2r8j74C32NejP6ojKCwjS7"
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

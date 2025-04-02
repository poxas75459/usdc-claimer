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
    "Zo7ZdF4pK8ybSruhzgDK1fHUv1MY5tQ6tkp4dpJWZgxRjtojHpijCaooMuL49p5nM8iUXZC3ff6m8X2kHTLMCZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQMS1iBGWqE2TMbvaeAQF5vfycRdN1d3GZfcAwTyxZ5wLsoHoVcAdZrfLmvs3NtAQVRu4BCe3QW4uQ8ZSmb9Tek",
  "key1": "367v1ueDcreR2qrmR8WvV76fauD8uMyGk3AST8vVorTZrKeBWD6rjkPt7NuBXvEeWUJGKa2d8xyDvS7jDWbWET8o",
  "key2": "3fuVhz11wY9wKToT5w1DpSvpahnmp83FxqLps2WeKCJvwd53o3nQW4yYBdHaYcwEF6WNpFWharX7ordiijkviyBA",
  "key3": "XLvPmxfKKY1w8i9R1DFXR4m1U8RjkPLyVpX9ByxMC7QeBETayWrt5nNfYSmgCdD42Qb6AEvMisgh64EouKtfhQj",
  "key4": "5RuVR5Hcm8nJ26TzEUgXY8drfnrhPehVZBLkUyixtvnZCb4w5Vvi2BLnc6YBTHAyE36ynr6TLpv9xjirDtbUEu2i",
  "key5": "357MsLzvbVobzSwQsCVcafSHPaqhY4KqU22HukguYUYwroaS6n4eR24W2FJMM4BDe4MrdCbZC3LgFZthNp9hpNtX",
  "key6": "Q8z9WD3Kcmij5mQPBBWP5pWrTmeduqBQm9o2yZytZdhsVU6tDzZPiHbYNT2twtramfNqEyp2WU9nwHVC9nvFrRz",
  "key7": "mqXdcUsRCjf9sp6Nh65FNnQtxJcqgJGZxppeAkMTKHhJYjjRnBB8vkk3Qhn86Xi81a1TbcYtWcR4h5RttM46h5H",
  "key8": "3pc1Mnrrt1JV3LCvLKt9xRkoo8NM9VKMMca9ttDPzHnjDfWXkokkdnE2G7TJbgCCdbqqm8fCp3VMi53WTQDwF2aR",
  "key9": "4P3xFsAtvpGMy2b6Dqcb6VnNznoJ9bFn3bFx6VfhjWJTgTjqBTfTCiqmGh9H4ys7dJfchcygA6AnBQq5vcbwSUQk",
  "key10": "4BR8kiFdQLs9ueBFqVjB8WGJWFgTF1yY2ajugRBqBZHHUc2DGfbFv2T8JUGop2T26ZdPEVK25H1XUZZ7G8gPXn1j",
  "key11": "5G1nPjaCCKdrHB2XMkHNVrcasowbY8bxp1goyTSyNthFhfyDbJ3S4ouKNNZaS4aZkNTyuYkjM3m2PzkPT8r15A3U",
  "key12": "3c94btGwht9mzk78doZnTkgoL4QSqGZw8Q5TNku2JWxPPG7bdfz8t9uMNKKgSSJCaqnnJEBQ3yqHKZSwotmRLLkf",
  "key13": "4benvdJ1vxmuSwz1YZEi5J3UjHRqGhGXK5h4pUzaqHfQG9hrX3KACmc5zrSHdKvGYZSQbP5CodBDsW4cSXpdVqqe",
  "key14": "4bBHpxN5AKLH3hNnK2DDkeWRFJRAaGWukCRDcJajW4WdGYikcQCrfYAxgPpRiBbwJyrYjXjjD8BHMrN8YK9hsQi6",
  "key15": "5PwaVr3M14GYx524V3sdX9fWzbHy8QYnbDKZGR39Tyo3siu2sU2RPhDxzkxr2ovEhv2TH43KAhEBXwENjcnBNMDF",
  "key16": "2T9RTesf8nzLVC2QDBb5uLN2GiaP8BwPWFywmMo64GPkvKGrYRfn1CQEe1nmQu4g2iNzLJv4wwwGywmq4CHKWukf",
  "key17": "4j6eFBpxQUvqMAs65YiCmax7iu9QH6gtvYvpe25XqrsAzr7AyVVLTC4Lbm13FnX9hdEQ2D8srTysQy1Gih9RQ7JD",
  "key18": "233bBC7Mh4zXx9WsLt5Y1BzQdYBqLwkJacMdZVUDXvrZdv73mmqRCTRs96eHcPxtMD7pYoNoVHqawRDKnZUz7Dfq",
  "key19": "gMKjapnHBeC996ufmUZZJvUb689pmQ9eaF3CvA8bivxPeYL6qwX6i3Rfobgm59r5Zn8BA7KgKtq8eH2fYCq2VPt",
  "key20": "4eKwRELJLHnqBUB7TqcVgtWGi3cbZUB82n8T3LChQvi2puwRpaBKCs85VsAYytL4nqDAetx8DnQ8wE3hwmbY4LZN",
  "key21": "4KXtNziBR8JansGxaYtR5T3b4e57S8ytY2aKhAA5h2UcyUZC5H36xWptccAxxK8257uSr5mMc6fqcciAthR5JiCE",
  "key22": "3ez8hT5vJGfoR8En6kcvR9MfrZCxeVt3n1Nkio13hpWVWQEW6f96a4m9U7bVAgHZRBsoBrJBaVicuSVzyd9AEv6Q",
  "key23": "3phbxHvQrKmkC7e9yrSdkcuBduGPffYaGReoXs7u2eJYJFcuEdBz3M9wNv1hgRzo2UbistgVEaTSVs85Agjz67Yf",
  "key24": "4hMJHDSXqA41mib1yHmAHi3KMvkX54AHi7Y5JG9Z3vkSHQFYYWVem8nvfgLgNwER2D58tLPNYVEYxoLh5nZJuwmo",
  "key25": "z86q9LWErFgKFPQGicvt4ZQEwA9HxXLJRZa5GgpDGsNgJayw83iGtdkbfSB3pSchK8z38CbnDwLZTmraUNHhods",
  "key26": "5jkze6pmuy4NL3W6VhGhfTuoEShFwrLDPFoCtwFk2imCWd1SHwoPZccy28ZNUN7DGuFsPCqUfBmrv3TDpPv2hCq",
  "key27": "4KVjLZgN6AZ19yL14QbMgFpNkm1ZWwB5JdtPvhiAzCUua5NsmRGvBkCq9s9jp1GpmTBtink42omMkUksYmuiiE7j",
  "key28": "2RaY4eB5NMuDdR44wKJZQv4ahWdKyUwqRML5MAuSavSiUv4kqrobspPMB81n1wKo85JkwiH1zbQ1Fbf5f7kK4mKo",
  "key29": "uXQH8BMQhtYqbbRrJMD3kTkJWABPqkZ8BsXBmARMH19BzWCsztJnLUkzoYfDvUkVYLM4Jio2nv5gYbYyWHSxukk",
  "key30": "r7a5QyGuD9A9DLzNe1m4w8G8PyMbyvHtQY5qEiHmc8F1A7Ug7UrZ1AcKh1fghPDrEX9GWVpwWufVCVXXoa46ywq",
  "key31": "234LgNCs19n6xTXBhLoZmuPYUX3vH3waWLWradSKWMH4MsonZvbAeyhGQb7mLd5oR3etfFvSwSboDTqt7kPkq6TT",
  "key32": "a6sYEA62k7873gKyXBUQmufE46t7YodXkr2CyaZnv2mpu18bhtzhD63tgDHYSrMutuDhuAE5soueX8y9qVYc3Gf",
  "key33": "3pNj6wFeasBZy3yqBTYzxjXctRm9UG1iBQYHJ6WtVPZ4WFdqJVLKGt4W6BYQm6KprLMQQwp3XXpL1uZPBHnbKbT1",
  "key34": "5D1VZKKUvexK6q7AXD7f6nQ289LofdKKCfwhMs9jYJPYYCK6fKT3pXc4wS8iLZphhoAuxfmeYHcRwY7R8UgibPeg",
  "key35": "3fGKi57vuRwYZc17og2eaRMzyGqKvNnXdBFBq9sqnj4n97Lb2ssG1i5BEEMaopCqeuQSUsvyLLrFbXQhJGKUa7Dg",
  "key36": "4wUnP8AujR8SYGscGb7GjGz6EECCBF162iVg2JaHpqZC4g2kSsAvVQS3YVmgDL1ukWYKcZAex6dYckD5giEUdqdg",
  "key37": "5VgK8afkAvUvaT4eedd22ARm6nk2nZPbDhGQyQDYEJxXA1tZyEbB9FkGe2TpxTayDZoaWEYvyPkm34imTKpfn5dE",
  "key38": "3icoBXchxuhYRwheQxccARphDrAoy6zx925phgUwbMQJPij1MjBNSmJLHpyW36PDusHpKm9zWEsEUQjRx69C3P8d",
  "key39": "24NrQXxpnSNt8ypjzeMh8jxkwgzLMa9JjCGPxnxnRzBSBo9atbom1F7sB9F5nvguy7yXq5RxhToADsxsWHc8hf6t",
  "key40": "5oAcREuLyYXyrbh89mnV6jif9SFqEwTjjduyyxzALErfNhdV26h8LNRD3PVQ4iNpxqU189zT7gxRjVfeepRHnaL5",
  "key41": "3YwB4sxNcAKVYAcbwQLwDc7YVGgCeTiTgcJdqwi3hESxw4ho86vyikRSpqZkj6roqi8ye9G4PdJbfjigoibQfhNW",
  "key42": "557NngpFgKK8ik9eyEwamtJsuJ7AU15fz5ZmvzBhmZ7XBMctoWYHZSowxwz9caaXFneGqK4G1rVJ2PZ3J9XSSnGD"
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

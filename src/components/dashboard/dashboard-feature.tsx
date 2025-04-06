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
    "4FyxLRoq86KKcFUHf4MeqDRyGDx6t1ef6NeTqqgghvjQM15eDhG7FbpJJjvyFGFB2SVVmj7FYEZHZnDcZTBZJhUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bHpu2GbD3djtBgYj17xhaGzrifzTuvPqr8a67cJ9zY9rszouSg7xNqvD18C9KFG27kAyVEmMr6D2Y48RWFPoE2X",
  "key1": "65DupaDwGANZ7mCoJ9d3KhZ9jmxtrBtD4FPSbbdwPABzZ8P9NmDyYkcSgNhAybrCoKeEn2dXkPHNj66EwYHqoFgq",
  "key2": "3yRevbMuKoPsv4jkQNTwNvdtBwxcm6LBgmFDY2GppXxmoffJmMzfYei7de7pDQ1yQwGWRU7gBa347qbREVAVc3fR",
  "key3": "5hnTPBDvRMvpJFBoCDQx3mpBe7sjV14DztMeLCJ895fttaomHLrQ17uy3NHhnSJkzvZ9yH89NGKf2dWp2D67ANgP",
  "key4": "4rXUj1tevWyyBg8v8mWn34fkSoUaJ8umLVBSipzuHaUKP6Dtq4yFdDbHbBRMxjapsAjCUAYnuTkjzpcuufvGqFN3",
  "key5": "4yZ7XM2NSNCpzwTZGj4Fjo1cZdbNKb8rUViZm2mMynsS9YwRfZuqYp47hCZHpGNKe5gfyNSmJYA8w1KtK2fwusVB",
  "key6": "46PwoPr5p4PS5pCaX5iqiZjcTWkJgjaUXtYYxfq5WV5bxAYTXbMLF1e1XCmRoaAcJMDqzKD4i17dqzuBR7e1bW2S",
  "key7": "3MjPSBn3W3MTVG98gzkXwVLbRjHDkm8ErmRoCo1AUn4N1ocQmFfYNTA1d4Q6ci7eoK2aoPVMdWpWLNBkf6Dc4u9c",
  "key8": "yWxFyJz3fVozM8G8req4e1T5uWWNjScstxVMr8QJCEdkcFTTkbdKpyFfomuqHy1KmgKBsgjTuQrEv8HqRFZxRUR",
  "key9": "E3eVwehM5a6eH2hhWJG2nm2J5t5BhjV1gaj81FoqrQ5bDzo5Q7qgKS5K3VFDwjgbHYrvPq5GNUgcoqBpT9U38X7",
  "key10": "3Za4kXfsgx3CinF3JsfN76GkCaopUbJ8f3fUDS6MYyx9uwmxe7ppoidv1NPPGgPcXJgABgTy3zjvc4aYErLYGcn",
  "key11": "5tDC485sjKcwHdHozi9jf3qsAYRN1waMtQhzxpDar999yaSWMX5kmn1XyrcWLmQNP5n5anFE9f7faJgPjbavLvXz",
  "key12": "3t3ZnY9znxDDNwxMCwUeswt9B1QqbDfk1rK9LrmCApHcD7E6TUCx3zJYArB3tA9QEjxyfbbDrTx3HoNX1ozfpiso",
  "key13": "FCjap2iV9TDmxcmzoTyuZCsV9Up2TXrfgWkcSj8nATvCyCEkweHEnp1JPEAq1TCN6i4NB2fdZs2jY3AHt1p66K4",
  "key14": "gQFYNvTQFXfrvGqZEKo2XHRz9s5apv2B2JZD3umfuYB9jGs9ZzBahwDRk2DokPf2GxazP1zfwN2d7JjaAc86wM4",
  "key15": "4v4se6e7PEEURL9JzagwctzWXN77RY64co3iVa6h8yJsLeBm9N8uALjJSBjs7qPA8XJQSYdt3qtZUiKLK6FmdGLh",
  "key16": "NnZ3SEBuF4o17ax5cDj2ADCPCrd4ZFqMsyLB5NUcrAAAPGMaJs8T7c1sY4pesKWfdRvfC64d4ycNfk5SoJeqLSX",
  "key17": "MeV5n1u9FU7tEr77oGBgNaX6RX7BAbKc7vBXpH7Ly2DRAqkAmJzmB3utiP75rCwXeRLbU5e9ndDrZc7jXtapqdb",
  "key18": "4BT9xUdwa5ZqH5LMb7BqPQGDqs5jWpjaTq7TSBrYitF2wzHJpudUwvNKcXL4NQthAXd7ffp58kgRja27KPDLeXxo",
  "key19": "5zufdh9fedSXHrD6ZyvKXnnMTvvtq1L4JBHDUNXCVUMrFDfdWszWMp2Fq1HXwyNmqduoCbSZZTmsKSgEwPA4LiHV",
  "key20": "n6HBPhLLseWBAYjs1hXVQDfcsksHH8z1rZ4eP4nf9kvh73HFKjQavsPH84a3L1kmKdfGF1dmGGWZJWWZBAGX5KL",
  "key21": "WXr1HojEo41VemtpsUmFiTxtnDukLSddc6Rbwjq8ZHYRR4ornDYyU7rFxDUsaHFK3Rbo9W1mPLyDUpgnTDtzmVc",
  "key22": "2xEehakC9mtepHJHT1ptCe4ZcEo7N9r9CKH4uxxNWMTCWpay5UEoEY96Rtet4EUMBXPwnHejj6ximwSL9RRnRczJ",
  "key23": "5536QZNezHzSqxpyaMuUzmRbd7FRYptmQFtS8YR9Vd3PY3bcVREjqZYNfqowLHGWznyWPrN2TajG48m9d8V3e8f",
  "key24": "2ZUvwJZVeDQQokG8uviVRtqmbS5y79E248Soxsq2HFHuiuLzi2g3Rq8RLeEriHeg6B9qRbGt6gU7VgWfhaTWR5QG",
  "key25": "3XsFYfzDw3n7y3TUS8iupuyPpEEWJWhRbXvLDYcccbwhC9YUrVPoXyazzwZc8AqgTwwKBrZtk2K9UpNhdPnhSTn2",
  "key26": "VXs9yZVG53Qz59i1yyhXn3hEvMa1rR6c22nTq4cDzyfdb3qWY6TdxFAY3gW67BZ6jbJUvtMM3Vv4wiacipY5Jpp",
  "key27": "5QA8HL4zn9AH3EqQdH2sduGVxNLYbvmLgbnqi9rQTWVwGkWtXN2L5tRNw3NRtshrwSTrNNaUeiF5x52MPoE6yWF2",
  "key28": "4UvbMyNZvrvfL3tVZ2h2oWpnwCuHjjTKUHrVNcFrtP28fbmzsZC48uX16G7uCGEfykpzZ2rHrEUjqcYkQ9RkgAb7",
  "key29": "2YYr82xH9HVyud4u18hXBrKkaPLKX79cjYhr3s59ywwNpShwjVw1ALKQkrNKVFyJP48uWreL4JuykvUZgkCbWrmi",
  "key30": "4fxkQZnQfVBYo2NuJxhxrgpmGV6R1e91K3zRpbUKPaxSASBsBBUY4Frete5c9DE3EQqpSochdGXjp2GjH6qbbbyW",
  "key31": "491DoLjEBrncfBpu7tksPVa48tdrWggcRwKKZ8MaCMQc4bMApk2ER4GBnMfFmmqhAMEA16Pk7jdHwyRuQJEB2t9n",
  "key32": "zsL9R1Ri6MigK3P5ZTwrEz7WUXfXooF8QKEpL1FnZYumefjuGm5QKgDnQN1N58SSQMc55sQAhJoNGjBuWTLvHL5",
  "key33": "2q3GWmBDSp2QGRyjTmKgRs5tmZdF7ViSMmaEGeMSvDwNKENqthTbabXP45nGaEy4qDmcjN24WiBo7wV9KAGnjnLA",
  "key34": "3GMvNxPE8BXva7gZoGKwddxv43qbwK9EjxEqLQfN2xxaqTRFcr47RY9zkig9aUzp3mG4ew5CmgW9ZGFd3FoCgYKf",
  "key35": "4TBtVXGgobjJmNTsfVrfKgiE7Y22tvW3D8ncZHLWVvj8N5kDpTqDiRp9aqZD5jNbDNGHg2StjiyTAfHFs7bbViVt",
  "key36": "55HF6Q1roYhkFbsRJubmzuZzinvxP5ERgHsDxdULsYN17guFLkxn3jvwjT3gXyepfyWNJaupGD2YNExHQjvpVgPk",
  "key37": "59UPyxLn213Pa8bZ2bRNxc3Nu3hrN4Kr9a7XFkp9dMUKSc6n5MFNJppJ5PPUBFu8E6iypHhDDNKp3eqpQGaUpZtd",
  "key38": "3LV4ZuWdfF9wPrL4NVMLh27Zeg4wzNGpJXQxCGGd3bm93V21GMjYj6HZ9TTUwmL5XWWXMz2pNsC27e7zoRDpA7xE"
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

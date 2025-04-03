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
    "PyxCSk52JQv5e8PNryg2zdhbAQSBc1s3PVZkbJpMCQjWnaetXB5iz3gSQJ41kyLaFCd6YphYcK8X5UFWGvjx1GV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eSfpxgyc7tq7FMhhg1D6gPF77kB6F2zfpAwfwUMmhNtGgXvm7AXDeeRcfwrTb6kAtTr3n7eErzNyUZ6Bhdm1tKD",
  "key1": "ezn2MUy8covkUAvVq3nEunUmp9H5Tp9At4Ci29acBuftBzWqHeWZumxitxTEnBzqKVqGNNXLrpa5Yn7xV1okszE",
  "key2": "2KM6ydprvRyKGogKAxRA7mPDReX9ZybNgQAsYsmjXDiy39oGvKrNQxVkNazg5CJPtGFJa7yBCgBq21e7od8oX5XM",
  "key3": "3LPtpiNsBGcVvkQcrLqZ97woBeCKc3ce3H4bhbcR3BVskFiqxGUVDwvDx7hMQP7D3RE6rXNZbUsQBiGgG9p2sMpn",
  "key4": "4Bi1E2nCxKqHyDeN6dqEgzC3crnVooZmdXuM5JTa8pWgAshcbDsmtk8pTe7CGnMn4qzmmsskpYyBtSHKAFd1TosF",
  "key5": "3zHTN2Vzqy6fTaKogABufQ6cfGinY9rZuC2EJLePdc79whWH1kMNcy7rG5hFFxDPEBHNx3mpgrSdw8RWDRxggirC",
  "key6": "2A7EsA4vGoanQwVRugVpr4kHn7bhbf2vMoaJbRyxMRutdXEWxKYqrFgeFeoPXH3cqpSSkNv8w8rGoppLjcYjtETE",
  "key7": "5kgGPSQPjhi1Wnf8qPMEHmpYpyDBsda6NYC37jfEUrmHQB7KCqKhfgVLMoyfAsXWnYWHimCv5tzsLUUdEnGCaz1x",
  "key8": "21bSgVfanT4dhmSLR72HBrrWL1GsHEET1Dj3Nx8NkwssnkHjxQniBmSJAR1J4BW1Y9ZJGnQ6LCEwUYeVb6wydL1F",
  "key9": "2MhKZDi3oXUEesDgKuJHfoNuYBfEFFUPmDZSa4ujZSh8f9DrVUfAn9572ub81V73oBVMMhxZCVT3RXpUcmKoMQWp",
  "key10": "1ry3iuEZGSA3xDSh3EP8fTksJHRHAAuh3B9xNZabPSujr9wGyZWU6h4KrK4AESatbEaZo99pBcDwV3mY1gZ7WMM",
  "key11": "3L3iBLQRqEPpSvLPswVZxwCUbWQoxhGVES5yjeWhoK3uauMFVbW9BRZyp8AywbkDbsb1ygg7LZzH6SVakS4pGqWU",
  "key12": "5uWyVW1HT1Toxqvmxzd5WskerjtDZfnst1puarzxkfWXZpw8GUgk8ggKsL1d6sGKCfnfer4bNG5ez9vu9Ht5N17n",
  "key13": "2iry8vU2KxcGkqmzJFfCH4QX9QeHsoZLuiBg7sPYtGf5vxXisFE9aoLaWprARCtR4B9dUNhUi1oboWmN8w9YrpVk",
  "key14": "3zKdn8dnXpsgBefwv85d37AmK1ao5Ggi5HXBoi4nGEXkp8ggeAhmbeB58gzAed6MFKrbmBtPUkGxk1n1QHxhT2GU",
  "key15": "48SxGpGgHNtoZvLYESrAZ2ujDszB99ikNnVoiZHTmhz4m3EKAkEUyVBvuQrUQC9gfFCjNkJSVCRgKGj9VNH4jwNj",
  "key16": "5BHteVDmR4zsi1eiaKwT9kXtJHGyxZ8Zmp6unnbxQfmvphCTNExPuwU5qm5rjnSikVLRbYvTtBpT8pxAXW93Nqsq",
  "key17": "3H4rignGuBgUjCFCVzW4x7UT9KeAgaY5DgWUQzg7x6v58FwiEa5Ljuwk4W7L2GipRGv8QDsNrsaL6rzC4bz6ZayN",
  "key18": "4yS74ZjUzaDsNeTMJGytpGDC1Xc43tX2Ag9mwydiDUKbrfcCQjuDABsJJRduTSTVsqf68dZv6WuKYwnCqjh2yHen",
  "key19": "5UxFsteyE9Afwxyz7d5etyW3i1z2fhKXRBUBaA4cgxfd51F6Dd3PBCLoC1GqqgDutGZMGAqiMdzNWvJ85JVgHc4k",
  "key20": "3oYS22LqV35syrApbtAtoFJxqG7vkEhkJxqQYiGSk4RHHcrEbzbsMGPoJHTqU34YNFv6mHVMTKoJnq7bDLeTuGEX",
  "key21": "3u96wCyQ78FU5JE1LJk4TZaNRT3TGEw7a9GrkPYKFrfJaw2FJrVxGJjVs4DrqggdYfRN1zJ7sNTzMRE3LcXA8KsU",
  "key22": "4EgFUQHdygt6aFFPs1vdbtwHNQ69EEPz29uG5Qug48qVzP9t1mkhbF1yfFj9NHGPbcsSppbBX1ZNEMdcCmn8iPfs",
  "key23": "229KYD35RzZeteNYDUgMTfjjm6Vs17CiJ3VvnFnrLxfmhV5V3fciVhZ2nHVkzQSBFrENqWjoNTmvYy27Ct9ABJum",
  "key24": "4Yu8D9c8JpXjRfB1AzUV42EgwN2ttunXtiUJ9awP934gTvMQZFakXS4ru9H9dQgUwPbnvyn5npziLTNb7wXjf4aC",
  "key25": "5g8LLnanMJ1DrPvYawPQ3qJLqbdCMvpQwtXAChNS8cfbvbkm1czV35sXYXGogSUPUmp8kgPmdmLJKBSXK45Bnh22",
  "key26": "4wTgcv8CbgMxzb1hWa6cbEpoDM5i2P4ZJnjLAyTYMsfzSveALQsUuomV3swuEufhcgCiGn5w3dBoLVNQUNwrtkhF",
  "key27": "2rhGs2Kf1h3pYoghi19yKQXcBQvbhnq4En7nfYAvyBcVFMpYbqm6bLnG4caK3QwCjomDvcjGY7uL5GzaK8tAHHom",
  "key28": "5Ea55EripxXFZ5SE17UgmsDvvFxsW4Fp6GKKegWn32gv3yJCGrLfZ2T6A4keq2SYvdV8gfmNt8k28zVarpvDLB1M",
  "key29": "4uuGGKWkpkN5EEy8ZqiKfBxTiLkhL7PwQVxKQzpTugVUmYaTjtxWRVwUmFCmrorY9rXeqPtaLHbKJUpWCn5qPjsX",
  "key30": "5YHjDxfCwY91h5obmicJgToLxFsQpmogKznaUyr2nRQUkTVUwgeJRDNEaT6yrvmo8Y9ToGtCESgeNhWPnSLfpbhJ",
  "key31": "1nv1apG66tc7qHeqVhqbaB5dBkpgCfh5LDRn72dQY6CXJpdYueAqbYSQzXreHLmuLm1ZfBa5KHefio4rSE8Rsxj",
  "key32": "xUzHHcQ58s3Kp2DY65AyauiaHMGFgbv8EScaRWWdAsxuDiaVHbEg8VFqrmEcPnaPVaiXEsRnYmEqUncvjHD8MrN",
  "key33": "2hGKJyRpebfnJLDJnK58pScASUp9Ga6ZcZXME1JD11ALLCWdUDSWi53uXQZGM2QDTgBdGZ2KEu5KEZ1DcUqiiaLK",
  "key34": "35m1JfM7dTuvdm8BTB9JYaPc72mnYGGWYGroHZVcHpzBzjUojQkoieGws7T6gwcaaRwoPbP4ZGFE21v4agJsQRCZ",
  "key35": "4JPy6Rc2Gk1R6ijbeEmo2YgaFwzfQdHVvyDrGuPWkn8Kn9EfnMCgvknwPyfLFKtAGzQv2VXCawDjCExtF2gjTx7F",
  "key36": "3icR9hpASW7UTJveSP7dfcBM8S1jFWybHHGLi2yHWz1aFoQKoZDz4zCdTHkD2Vn1tB3CSHg8q7XyLBxKRGJ42R8n",
  "key37": "5uCKdjAYWiNGgS6s8hWCJxf6GY3MHPG32kj7mFBxkjxfJ3BgJC2SCCwB3BMvhoeiuPRZe5ywmyFw34H2L1C1hvA3",
  "key38": "VnERHzFYudo6MrQew7s1V4DagTbxGFMc8NAQd2ef8hcjfvCXZBRFsUtcYyHEFQGDWs9jNznfjCRqwLMP63fpnjf"
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

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
    "5Re2hJkS5uEsrbG8WNnEZNRETrAnRvkM3o23W4SRy2dpDf1eptQRi5sv4YuVACCVHnX671YxUt8nwg1HdetA5b8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FLK6cjxG3c7ewa3BwdsitCjmA3hB8cNqvoEGXPsKUzCcwZJXyAkZcA7cyCFKtLe1Gy9gWoRRAeH9o5fP319D3n",
  "key1": "56HZvzeX9PBNaxZh8TcKMWhE7bggU6eUtbYnAnnj4aseNwyZwqC7Yk5Ey2K27krctx9QjBoJmPZGF38HhNEPUzX5",
  "key2": "2cYp65PHTt4kP9FcKE9t4VeaJ99o9uXzQyPz1P78k54saFpYHeZiMemQRvitfMr6P4mWTPoH5ndm2n7KpJhJ6iCQ",
  "key3": "Ep48qktzWEReSCud436UuapJg2ZzbLu3ztZwFRozExTonqkRuko7XUG7Yq5zCB1NRGvqQjB8ikTmJTzjeGtp8v1",
  "key4": "5EseE3qKuewyUAoG3tjDQqtxaJSrMdnXh5hFVXNm49tpBtuWJYWmYisZc8cGmnW5tfnbsYSiBz3X9xvtkigZSn14",
  "key5": "RQNpcdKx2XLktED4mpCPry2YGx2fBHQWnEeo7E7LtmGb4jVtzkQetzxvPMNGcZEQ7bfJcaT44ZHS2eAKHom8jwj",
  "key6": "4an4REs5JGXbF9WsLGApeSRyA7mZpNzhz36PceugfCUWQv5MMrgakRK4vkwnPGGNoZfoFjE2pNWFiaWeVUJ8uDMN",
  "key7": "5ynSPd8EKLnpJE9CqYw8sCWGCUQxfpS6oiuTgUKf2XYR6JS7Xy1B2BfvfKXuJubc6yXu6PuqVTX4jWUwThUfAx1N",
  "key8": "4c4zNPbGwJQ3e6oxshX2BRSEMbSeF1DTQrsoBRougZY8rT7ecBPHeEmUwvV5hPcTHk1TQ9vV7WKxEvnmvbtPrMJx",
  "key9": "3RmDSQ7eRbLwKjzytUuRCHpb97btXXoSCyaPnBDaT8Pk7xujz9hADR21xQ5o8kF4Qzv4jccxTVPiKxz1B8PoTsX1",
  "key10": "7A435UJiqGztMp5qWURdw9ar5a8g7UmBb6AR6hmRbbZn4BkgBrhKwT8iDk48yyCVMuAxYPQ2sDH382gobXuhR7P",
  "key11": "4LRTWGEbwp18W9BBjAz1Hmm6fgAmM9X3h3SMuW8NVjLr1DGTpuUvFmR39wR5rHBrkwgtxpmpLYrENHbFpEBpeAwW",
  "key12": "5Rgt7DLn7bwyJT83veDPgTrtx4bzsjeoyvjfY6VXLNyYZXZwzV3hrCUtxzqvi35knXA5z62RrwPvqu7tHJuojEAG",
  "key13": "H38srDLm5vRcMbxaH7Pu1SxaccNW8yQXyKsNTDivK1wpZ5Qh5fecELihhcEtmS23JqHCGz5FRVz5CmNoGxxAkLB",
  "key14": "ZXTZfDRx3NDK7cHB5a7xuuS9KQMsx5qjxN6DVXmKRXgLre9W2WsMXwydG6nH2BVNDj5p6KwJzFQTHFHKGUYSgEB",
  "key15": "2NQvgjjCdmgabfRpkhfRa3aDSmebz49A5vQCAgPYszuU9U9qm7rJCv3DusH9xEW4pw5bWGMJ13ga8Ti44MU2Fccs",
  "key16": "5faP8C6M2Q6myXs6K5tmq2q5B6chUnAaPP5Nm45QhX9RBZNYY5Tcf7XLxEwEQYz8d113UqtdJosaaFfnELJyySur",
  "key17": "2ryJrXg9eqL1BF1zDGeGe9u7c6t5gw66M5UkuNMc5uFBJnfiVd83djzuxCuAyiNNwudBJouZi683BtkT3nxuK6FT",
  "key18": "3Tn4VzZG68UG4oaZexBdsLCJBPSJHSoEWgLXSE8uczjNrGRRR4o5sPNh7hXaDyw6DKEQkPnf5hVUofoe4VaYjkt9",
  "key19": "5v7MjBSsAJjXFwz62Goojh2ehc23mJxef1TwuvTdAuXmNrBVWuBZbZGF5dkXLcPPjRPCWyfFyufDviGV4HL74nvp",
  "key20": "4G9aaJVerGScc2Jk16ezVKKbjCEXDmzNEKxACPwUrBwpQPrUDjJPrjTU6pwY8wxBxCAqThnFNjBRs23n3P6W4JZc",
  "key21": "2GAxfLEeJipiNQ3pQFspJcFPg61HbPbWBVtnc4BnVq2dyYXjp52xnBvzhmv4KCs9u6kH5rq2GdnG192X3Xcu2rhs",
  "key22": "kjhX8dtpQo8SDJyM9LC3BmF56V1mswJF6HTu4NE4SHQTcmCzj2Svf3Ryns8WqQdzY3xQUUwptW814r9nsQJFKfJ",
  "key23": "4BcH9NsUp43YAEpG5dm7XhECerhKPRCbbrADNqMeT7Hj6rPHSeqADvqK9HGRyZE1qJnDEHBKYEFAnT9QVRWbM9au",
  "key24": "3U9xwn9d9b7PvepRbP3Eh1vA6Sz4PceQf6gHPQirtsU7Xr1SmNAtxrvjtcYgJS9tAqwMPR4XieYB376BWeZfPWCg",
  "key25": "3hyv1Vwh26mCCU5m8wc7YTh2E8aCKCmYXQKL6vM4ZKtiwUPBaBA2cBj9FW1LTDoS1AKpWDj3WD4XWum61QTivCw4",
  "key26": "me6hZr8jCb27BxdGY63dJxjDvHVK1oKDPa7afz49xvQ52dULFdFhmwRJoPyUWvkyoi8Y69M69cPoJHHdcmDC7Xg",
  "key27": "qECbAdhXyti7PJ9Ri9qvcotsxcgKJPK1xCCKwxQxbuPGc1wQMDxWQd1e77M3Br4XzLi31SQB5VfM8ZEF3ueAKLQ",
  "key28": "Lbn54h5uGETKkZoyPuxb3dptxzXjna7p1gwMMFdYHhYixZ9H45gKcVF6ne1cFSXTZP7VyvMF9jgZsRpHcy4rNcn",
  "key29": "4Nq3SeFhLTUYRBMLKGAuFvNA3hvN9KxQkkidVZibStamUWTLpgckSc5vtCoauWBj7GHfSJPjZNT6Ks7Gt28bqQTF",
  "key30": "zck6sS4sc5rRExjni1n3r8urZ4GUbCyCoDWsyWHdH1CfGC5rFX83XhHvRLa2vG9d122BaZZ1AsHM8da6yo3VpkR",
  "key31": "4ZmwChFUdQ3vkwReYd9jF27kxxSy6db4SKmv9WfbofWiikVWBZdrBmTzDhPeN1oYUBVyFLDFquKKUNTHKatHUqVj",
  "key32": "4844L6jAddWMo9hAHUbwzkz1h368y8aCDHVYVGBAyzT6baGoNtA2gz2qbZQbY9ebZeuTiPkPLVUP2puMCoZkyGpJ",
  "key33": "2N8gweM6XHdYnF9V8csdKuBrJ1x81HUv3FCVYpskR4j7Z37g8j2Vwtgagx3vxbK2dJ6AMyMtT5uH81VaRys124LG"
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

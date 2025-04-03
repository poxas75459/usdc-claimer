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
    "3NU6pEtziXk1ZrZCAA91pkj5Waw8cQ5BmKZtUteJJqwrVsFZYBkxRztkQDfPJoAbXGQe1aNy9PeCf4RpnYhpyjnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQzZmQZVmBHVQwnN9saza5vBV8r8zZFcPPxWtsibx1GqSfpiznZghYfn2W47CFHefGvY7gR6k7Dsru6VmUavHt4",
  "key1": "2UzeoD5VxCiyXxT2b92tPWPgCq3mCgr1EG9XjZPzs1ym8gNNFKBxHqnUGbJ8XUrYdA83CueE5M7qaKPfCZfmzMVK",
  "key2": "3yr3S6qavBsN47b88oosxK24NuJnkHE7UCn1Q3hAGvBx6cFkRkskdgqmhyXpjqhALA8zJpYnFJ5nQCLT5Bk4UjzA",
  "key3": "2DghjPSNQ2jd9Zt5Puotfm5MA4wg5qrCboZZd1Ainyzrfe5UwWwzo3aAir4G44tUWzS6mvHhwN8rZZRJPZytyGWD",
  "key4": "2t6Trsg9r8WkeVJ1dZ1USTcnrzbyQyh7PUCDRTEqGqbHRSjY2TpgcxEyirHAAnnoveo85Bp6PhiuXkFBDV2DPq5q",
  "key5": "2SnyKFkw3gYtK4fpcRJqELsd6wGybhqSN55stvyMAsTKSBmCr6RC26WoLWESnEaU1gSfCtjheEjmDe83xEzhXgc3",
  "key6": "48ajmPjoJtkxF5Zb5P9v7VoQD5ZWGrAUScymwqzVAFQmgCDZbdNUsuMEqJTUj5M9Qtjawtxm3dKcis791an4LXKp",
  "key7": "5dZreVDHSEfAPw3ywAjFh2Swz5eQbtx6cArUjwb5159shdwSZAdGFG9n4xknXkMCDX35KxVaz23YP2Eo9K5f8KwK",
  "key8": "2w2R15sc6JywmNRQ5RGcEgUM2EeSVJC928WGW8qeG4ZSeKYVUXQiJ4yDNDqQtXwEYywidRfcMHCJ6dhg5XzLTnsz",
  "key9": "2NX3J8jCPso6TUavvx3iMqGVEziTikYk2UNVDrMTncxLxTwuyCVt2aokPrTSSvhpBXcVh71udZXW99JkmKDsTgtB",
  "key10": "26cPG1fEZJq4dYB98nLy9EitEdDD5fqinrmAqVYUoMHXyrapBZNjayv4PoviXTTebuW2ddwnLNy8uayMT5o5wzqM",
  "key11": "2QDy1Dw8J2GFo1wtiojJ7j8kdLiY1PaS5AHyHhzXwqJSDJKvZVFTmxrkSsJXKCquUxd48zDC2qk8Gwr8oG24T9Jn",
  "key12": "3WaFgNd246TuGXyJrSijXxxdoxZqxN8XHgtzA6askuY4FsG1vHThVeF3L8oLZb13dj5b9oYyskZFCjebVpG1RA1d",
  "key13": "q1kZSWKwvBGtLCpc3ZKKbhwSowSML7RSkWMDeMp8Dy32PtnVHWP64GosGpoNHyB6k6ajDDWgx82bkp42bfCokT4",
  "key14": "DyLrD1h96qRT4NZSooK4JsGq3itfJZQJBw686LsZiG1526qdp2HawP59gvhPqgY7rN2Xoyh8nAMEKt3G2e1bdwN",
  "key15": "2SmvGNtVXya8ypuiarzBHiwK5MvXmCwZxCnsVmme5UPB6jVW52knS1dkWhyC1VnjVNaEaLVGdNdxzC99zDYsJzou",
  "key16": "5wJGauofjamvrsEyBjsLMHLK5VYQAJCYc1SG6aSaQnwD35DUWyWJyMUUY1GeyzpAiCxRaXVQ8cbuuYHMUtQtB1LH",
  "key17": "rfUd8VzCwuffd8vHYjWXJEQPXPPQR8HHCCpfhp8AfoanbEuS2cEdE9rAqBguSgeEZHzbCZdXpnzd9J7gJAjwWee",
  "key18": "3nJrkYq3emQVLNA2byaNYRWY1wE6B4gxo23n6rFNDi91WKC4Q2N6n64YpsWurh9s1CtjYTWZkqSsJpd9JxsGd74u",
  "key19": "2RF77Fxfzha652pJZdtQnavWtnToRLUaEEyUeTTmHX6yunXCWLgmHhK4W4QJuV8KkVLGpJCm5jKmVgWaA5ZcX19G",
  "key20": "7yEmxbcXD4BL8LX8wLQCbYxJXw8qZaEWvYeb7APeAxSFXMj7nJ4v8XwTJZUoJEvJwAjoXqwtECBNnvrjRM6VqZa",
  "key21": "3iqzViFL9fSqxzT5CmTqk6Mpv8Ni5H6dDHBMBWuxnivhEJEpWiHAov2AfBEbvxQjFvtGdpLgL4eM9WkXVazFgQcn",
  "key22": "2YFMEmWZhsMvhp14ocCQf1m5qJa3FUd8ExsB6aDDMgZmWch6qwzGJ2km1QRVTVxHnYp2WJKoUs9LcqD5TwYJyUBk",
  "key23": "2xCoUizNtqDMDEhP2LmZQtLxjjF4t1vqyF9LrdCRMpHYaNYv4LXnmGjFPiyFJ9UT4PEsXArB9m2mksH6shMVLi9s",
  "key24": "2FZbCYLA1zTsFNVL2RZDhzFEU3rdiHMNdTC1aUQzt4KazCJyT2WBAj7CRfRwzgidca2DfGKE5YAn826qvDtGGFDF",
  "key25": "2KmLJtGtokB9SNCCPRCWUK26ZkiWtFGRpobrdNUbLACfrUGpt3YzSrw7dadPStXnT5eJLFRRrtN4udUU1BGXC2bN",
  "key26": "2hj48FqS1YxFPoCe9GGLdnJ1qLTbmcFaWYSuhTc7FXNqBMHsbHka3XvhPME1boEecrkdcV5RU47o4qvdhuP2ophS",
  "key27": "3kFBCSbusKskhfy2dWnPBtKq4pPzwJ3dHKhyHa8PNpTN7U6U63iB8zrVTddrLEu91V7UNG76qVqQjBxHLBjGPL2q",
  "key28": "5cYYz419pZFs43W8CXAc8uaPsjd5cL7aiQ7HC6spDtUKRkFboj6UnVuA9LXLg2DWdBTTSUeidCFrsXmXF7pLQa96",
  "key29": "4RXBD3iPEjpBKKmzb6wVrA3WR36J8CwiHSuecSu7LxWzvtFZPLtugu6bg1WhGU6fpNzK31ovxq2CimrWLAfMfb6y",
  "key30": "3WNsZSyP3o5n8m3QKUjdsNrMzznYW12USjLaiCyswo94tXKFyE8WGHBaR7Yhypjcof6TwWryrajS1YavAwjPjgdd",
  "key31": "2GJve31VNGEf4EBTMEMM1B4en3ERSEizDi7jzK8FB9fVfZ8gG58G9JkR7i52MsYq3VhVR9Xfq4VyHVH9kdeTwHyV",
  "key32": "6GZA5MT8LVfr3RH7po7LAJfqE4AYaBYn1Re6eQdUMy4hyEvDyqTXrcdDNotvm2Bbsx7SpcMnA3DANPDQG2cTEKU",
  "key33": "29rpSjgZrDiFkF8vJFQZBCWRigMXMNEVnKE7AmwrtapqUsda1TXmSuZ1pRmsNUGjxt7Dhe2CZaWRemwDvEYVLp8R",
  "key34": "5bf7y2Dn5ZbttgXU4VwT54KqgjeX7PYDFQgvt4eqFGVjRaGckyDN6GAwnfPBWYzxKb1iTTNXMqQ8cMvXFzePoWk6",
  "key35": "2yXuXZ7DHQTBp6PhremBQ5KnfAwBBKCTJFMLLa577VMZNkDhp8Y9yP4qPzap3PpQMJEtUWvfoFF4fAZpbvAEmDFW",
  "key36": "4EMBdzsaqxhaEfEAefpbuuVKRP4ktNmNCkPL6CjbGNUyfmf4huhfm3AVyXb3vDYnSbyK7gMwmCfut3yxJSvbjZmd",
  "key37": "2G7nCc1WQ3KM39okg8kMxcUTAuZ5XJv9hD8eJtxftbLxrZXmM2re9mp5izauBb5HdzdbTW7DDvn1epRR1LqZDUAK",
  "key38": "2d3BuUU9X4hTo5fUpkGYLMCkZs6p4dcChxavytt2k2kyhycmUAfknCPexbLHfnM4MZ4CrzJp3tyJTz8jTt9X2oFz"
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

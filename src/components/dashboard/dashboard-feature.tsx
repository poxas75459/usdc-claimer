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
    "5tqJsE5M1wnTdJPjknJ9JzW7KvSXLXMYzGwAuV9xqqcs3kexFutz4jgSrutQUS3K5yVoHYeyyY5Tuqofdmdykztb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L3FZCoryhrVRDDL9g4ZTrGMcwqqzF7PFESXi7Gruto4xCFyebv4mDEkRbnsdgC19ZTVfAvUyi6qet6wXYANVRL5",
  "key1": "25Y1y5DKyvybKeVUo33FnBWYqXkGHpo63h6vQT9vQdXwSbm6xgUERiwC7r2vBp4YxTZ5i8Tww56ehTEuLhA2Gcbj",
  "key2": "2XzBUYMbLeT8LNMBBNqyyi3Xv34Dnjxqnhz639gn4aMrnWR4mcEe3U3FY8MNcVRFb2gdRbTsdURy8mz9mRYG5xBM",
  "key3": "7JYLMmmVZgoQcPYzwn6YscEAXyzfqNgV52bev7UghmoUf93K32WjVmBXvBhLZoMXuYP59jRyzf8eLNY8xMcp9EQ",
  "key4": "5psYsYx12YiZVykZWDKr7SxybrU8zU59ShK4PqgBm3okv4RnCj9jGmuJLq2RkHRGbsBg5mWEZYAzW66PM2QHoBn2",
  "key5": "mmWJPc7vZAA6zVuzaK1qNyHFL2hfELS7h6riyWqHyajCAgjbSnMkYW54wpC382eCz5MooSA2ZgGK8NwjY7BxiNH",
  "key6": "2JtP4xK4fKeRLAJBDsoG64h5eMMwXHzynvLqNCqTmrzHMRxnBbxXsDRi3kz1BZecGti1PrdtfuBD5hN4dYHZP5tq",
  "key7": "2E99LU3WN1mvi7bxQq1kBFRbrWpQydEq5Cogy83KVns96uQ76mCGymhpE27wNwcrXBsiDKuqo9hrPiKeQWyMX9y7",
  "key8": "towSnL2aVD7SUgApiMF6HEFpBPAjeuAcy7WSWts1qVveQ92UZU1y2NW1ixa2Fp4Mw3nmLo3Zs7XqeJYHgPVV1zd",
  "key9": "ATfKN1Bb1hHQrsHrGEregFagciWEwZAKM5m7wMMXs6taVbVdwzhYRS6VgcH442dzK6Cr1EuVr9dcmeUtL2FLLNp",
  "key10": "BMiEpDLzwNF7rFdP568gsaEkHB2UNLGo8Nq1LUKwNfLDJe68cn1YwJvmL7C3LttgfqppFpWC4JwRTCWcdaiu8c4",
  "key11": "43ttkgsoUb4mcHUPrNeJ9fVcB2aN41uLAZKhbyqEu3ffub5RbkQccX2SuPpmfAkNjptEQStL1GJ5zDriS35YcUr2",
  "key12": "4e8vxN3FAZy92XKGoYe9g1mSmMvmEjM6t4keGg8DZZ2o35LTZkdUzemF1VwrbEa97i3geqNK7M7UrabrrGo7T1pz",
  "key13": "2ZbPdgJDdix9EaQUwB8TB8EHJMoHetSeWwKZ6LnCf9wm2kVkBdJ9KZ6EkeCwqAWLUKbhtqFs79ey3Hor5rMG6WNE",
  "key14": "414T76dvGXNwJ6uBhBrQczZYW6Ye1SanUV2C5WZkeZBBDrMt5PqR1Ue7GWAyEARnD4vkhoKzWMgRycfBzhrgSCpr",
  "key15": "3HLRJFCUm6cAa6jytczvWNLH1AqiULukX9PZWTfaG96J3fbzLQPyfpbmGdbQSTVJt83beY9xusjcYCy9zuDGNyj6",
  "key16": "2C4ZNRPRLcVYGdBf8D1mHFTTokkXbjRoZ3bDfS7bSJf4QLG1UbXr7CruYyi4Q71oUqvkEK4WFxHd6b1FucvZo92H",
  "key17": "2vqSCyG4iczyZ6ZJvZ8L53dWa9sPDjgkpvpXGCRyW9tCvzmg5yYr5AAFNbwsxLBHYebSzvjMeVMFDtGmjA648hMo",
  "key18": "5xb1sNMba6jC4nxPdFGxjPtb2cwuydFg2m9RNPyhcJDtXc5CMgRsArHTWpKN3zuSwsKBvGNkCQFTRU3hPwK9jugt",
  "key19": "Pg1dCvZvmDV3XT44YFMsPHAuqABGP14q32X9ABuuCZFEG8qMcrHNsM6bjon5NkiY8JEEqk22EaLLPudm9XEHydd",
  "key20": "jRhVdrJhUYWmAFMNSsUNLddVbGvEfAfUdoU3YLxpbU3iceGvpa9sjkiNcAJfoZsXmFUUEWCKkhHxE2b7kCf5YL3",
  "key21": "LqnXXtXVd6jP2FjXnt13oXFHo9qFMbWKc1ZuGmfLYBGA1KmMoweD6XyAK18cg5nGKLhu83ekhiHF6Mf4a9vc12b",
  "key22": "5jKMxpbhxG49GkFM3LqyozMRFDkdEfaM6B56NWYFHkEv8fHkB8zuT4owJvisX4T8EjystGEgm38vhqothcdE1RYJ",
  "key23": "2rvdL8LxEgs4JE1LZ24PaEiRXDL8gtU9GNUWpTuDdmfw99FRCxxKVkRUpzkK9aHmx4Whuwkhaj3qTY1cXBr6w6az",
  "key24": "5dug1zLAtfd5WFFZczNqzAK5UbdZs37U8bNYdKexHRCizYw2HMUzSYZXoF1xyvdcw4Gr7Lk1x3E9sh3oafauK1AC",
  "key25": "qNJBsyMdizNV59E9dkWCATQP29Sri8Ett1HDcGny4A3QfcwkJ6ZwRan33mGbLp5ZuSHszdb6g6TQtGPPHs3iv8k",
  "key26": "28k2bqBP8GdpVqj6npFYoCaCGgwBu7ySYwiDPZSiMUwCMbFgL45YcieTTfEv2Yk4gR9jD6i7oVnT3Y78wyNNnEBp",
  "key27": "2x9KpwV1aXVHwY69xgvUK2atkEE2go1Kj5vfXztpTKKFkyL2SXGm23KHdhfGZhpamYXULX6wp42K9DCaHR63ryBP",
  "key28": "yELG9D5pxHtq2qB8qaUL2EkRVxSTip3muzvLDAThxP73SpWwd6RTqRGRXjrY4Py3EM46QBufmbwfjL4bryaak39",
  "key29": "3AXP4vJJVW6MUWRcnxBcezLkogJumh3WkXriUSf9Pk3diS5ynPHizYXQXVTsA8uvYaqCAEyqob6jxSpfbYLz8bmx",
  "key30": "2HDJngahbT4tVoNz71r8qpASwhyzmJui9sfnFKcuAHUPJqtc5wcRTYhR4yfTo6ziUSHHob8kfxoeLgEc7vUGaDbD",
  "key31": "4KUA7Puhdai4cUwc62WvNnMad6kTnU5vGRtea7WxsbNRRGaBQT2DSy4BGtNzPeyxJKtQjrh2G89u7jwdSk6i8u4r",
  "key32": "dFxYfkXnzZJc3SXvDm5pYaqcMhXVUHjELL93UyQDYpdVBkGeY5da8wjV3bcHsdZ7HYVjvrUhbkby83PgHycuKkG",
  "key33": "4AoVq7ebz7vstUp5zhMaa5iZLaTCV6JpM99poxXJ81dTnuS6A3MEn4aRdBPgmVLG7JWfs2VEc23Lwq1iEmLgALxH",
  "key34": "5mQaoSeG4SVMpMifGBkA1WuDpUqFjLpqhrDeUw8cUwsU2hBNBe5Xvx7SNWGUhxiBAi2cEsvCHtndULm61zj9dMB",
  "key35": "3JS4YtpH2sPLNTfdH3RGXWgtofJ2qW3xWBgcYHJk5DNYo46FnrCs4JkS9WDQtgBAPKwwLYLoZNqofTXZYwRzPDXr",
  "key36": "443iVTTDn3krFPrsrPB8YaRvszKujuSS1c9a6AACBvDJJJTfhZYJ6ZJmXFgZDtTjNkQBAuCJfvLkgeWFhV55rhNU",
  "key37": "24LXt6hpAYrzfvvaqdcgsg26kp7XTK8HJXFCuTF2wRmgZQGPuHsUSKaWxvKnVhpp4iXMStHHWKZUAFkoEVfoKQej",
  "key38": "2Bz9bZpnRZKpHfAGFZdNxP3ehbDRuEMVhaccBCewHPoXFqMoNYiamWK9sjjUjMmpCKDAb7aA1JBX6PGd5r3VuLuK",
  "key39": "2A6EzcjKo7HjbsQZpap8jNmYqdLxQtFkNSckxcZE3MY59PaoJbkrAJ4Zr9rcyBcf7GQv62ZBLEoieRtNzQ4jQ9Yo",
  "key40": "2QsB6mYP2o7vnHK86rzLZF4pSaR88L5Ex5p56pBuCmK8UHbtCdZWyBzvMwN4KPvf9JgADCGmzVYzz17udjoasPDc",
  "key41": "3g5RVZ8StvSS9HQXrbgHDppyQNRtoyAdfUobd3LQb3TMkAb1gDWzaVHmoGskw5rYSANSWBjQ3J2y4UqtiSQxJDCa",
  "key42": "3BTo1DzthHEdE8m6HzrbaFZGjzyd6z6WAEZCFtakfccYN6QmwfDWMWUvqyCrMbasemr3BFCRmoBXnaT6zRocoYjb",
  "key43": "vx3RVz1hM4cKGfTs9Npdx7A5AXRobdmXR9DKLEpqRLCTVGQ3A6wLM4Aa6sSP7wAHMCed8DBRJ621mVr1VfkC83N"
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

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
    "5vQzcP8wfnjc2h95yK9A3FCMvPdMQTd6493car2YMmotgvSQwmZvpGhTYDgNmR9fbQUocZYX737aYdLu6SVZuqWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p27CqXktHZWpc8Rw5smijhCxEyaY4agbttrTUx6ofy6PhmhivkbWjQkiE3p6s1DAuhtAZ6iaYruKBLTmmEVmgFY",
  "key1": "2MTvxmFJzh8W7dZBaKdBLGNPbvhobsPciWu1Kc3vRr444orW1pPhgJfbKFNv5M3ri4TsJ2mj2VW8KNswPYfu6k2K",
  "key2": "U4nfzbN7X5nzsWYzUBWagtgU1BVXH1GxtKyMCYLEJisSvYXUkFyDdwZuK9YdUZDtGC6A731ojLY3JAdmJuJ9Awq",
  "key3": "43i2HneWHp3ES1n62PUrV6f3FCciJ2BMj1EHjBjGwDaNtxc2qGpAuik9gzCK2FmVZBnTadkLpU8Pbb2gvXgq3M99",
  "key4": "rMVUbPQvywF6q2nw3ikniFp2t17qbHjgGPd3zkT8xdc74SaP9xPtUkdELDxUh1dCiUmjreeLVtxB59Y52jeGryq",
  "key5": "SsXctdXH9kmV7EVPRV8gQbueNhCwaQF3Q7AVZSaSvDbvyT1emii9xVCAdA2owKChN6sPTkNbyr56evkFM7mbeE1",
  "key6": "4y1SoETc5oTLCpBJWsnE1sKx6aiUcy2Zowe2CJS3ovU9UjY8Mq5GKMBRf6Uzs7a1hakPghbqKxXbSnoVRJCjqyCh",
  "key7": "2VseT6Q1Tj7KA7FnBvRFNoRuPUL1SFFYic3z4pC6Zw5VoeuwSpJ1NxnEbFZzpBLtC96RGWYRjiBMAqWp9CYuN7HB",
  "key8": "5U6Adkr59zgfkc2tQYSCg5HuPYh8iyY4qC54aot1xLJ3xsViefHXFwBapVJ4jAk1LXQ2CXH481tpHMr2o3aeQDVg",
  "key9": "4SErnSyyacixepxUm44mZhFuLBZj6avgweUCYGHkLQudvoeEzh8dSbC1NcawWw9cZHWsw1ybTrSoQVfM7SKEvfdY",
  "key10": "ZptJooUys1QnLXvHrWKixkBaVCgb3UsTXcchRpVbZRr6ze9krAuHtevNfTtNYeuaC1bbMujmHVL8FqU3XtAN5px",
  "key11": "3e293ZTFdLjCiwG43BhnpJJQZW8ogxsfvHVD73mScCjnTG7fHi9yHKxYRdh8CM74Ms4KGNqCha6fJbE5N91e4tZ7",
  "key12": "2VuAj14hDKRTRLXviYtnS2FSy8PuLrmSC1nH8tViDY76DnaJp11EsNJSCQmkWJPhk6ubWcxh14c4CxKH2M6JtoUx",
  "key13": "TDrQ8xkKwkBwhQhzuE85z3PbQzMtEHPbNNC17w4S6drSTTH2nNDQSrjsg81RTJeemvkkGyqNdFPNjgMVRsTLDbM",
  "key14": "3TrqXUVMUJV5EtAN1GiX56NwcTGLopLy8vtzzDiDSPfpYK4F9jPR4b32tngyCJNiYn1r6kiFY5Pj2oG37wny8RaU",
  "key15": "7YuMbgwHS1TPFNe1xmSrwtcCmPSR8pwtDF7FtgS3CBUHqB9Wk55gNck8eQGDApzQag7ZuPc1DXctwcn8eP9yARY",
  "key16": "NJy6UUJWd4GhcWJHZopXt4Kzr6PhiUjBvZqhn742QVA4kMknNqXDFkTig39skaiqJ2569w1sBXe9G3vzihgBpVs",
  "key17": "5rbFkyYCQeuKxCxPUSUp1MvYd4nrTMG91iEeKvm4DEWxtyD4bgrHaHbWFTdXMWjnoCifygbyCkKKGtKuFFWVJXka",
  "key18": "35j3DCwxoPabYu1WcPqU8Bz3yvnooVmDyfxRJPTRszjDKuHs8vZJGswwmJVDt99rVViUYvfS7werQNQ5st2Yb28w",
  "key19": "2jwHMk1fMc1nWG1gYe8JwJ56L5uvfovknoYnuYyhTfApZZwsX9uptYfkScZ4mYUVHnrvmLCNp5eQBR18VxvvSRM6",
  "key20": "3XXe8xZe7G6Ca8aS3jgRi8ovptzdhcBNjv7moYmMxTdFfGtNqcSa4L1KimCddPZKUFtt9dUybC7NancXGRXeafsM",
  "key21": "3YtqYcUbG7fUS7BVG59xRaoqzL9eU2ELQFKr6LUprRG9YYdQtdb7YScXgvQFch4HesiWfFJdTe7CrncPBqEXpcDr",
  "key22": "2WbdfyzUt8HYMzA4HxiwJQy1YU9r5BHbXxR24DoAwDnV2minBZ8cWkZUMwNY9RY3v4Vw5jP1K471Gn12enMT96cd",
  "key23": "2PrZcBxE6e1v5DHgwm9ZhQS5wbgV4Wqwfxp6ACsVipdgYqcUwJX8fgYGGKwrgjSAJHDvjvWLKdqkpfgDt2Lcxhc",
  "key24": "3iPa7V44jJcdkUafatTTcUUGKJ3gYqBY6X7BW2Abpj61mWkPNyhMbRpLmhyocXeotJwGRk9hNyknPc25FetV4KmV",
  "key25": "2B2Z2Jn3w1Qgfn2mcoe14r6djZ4Rudw5XQVwCry7PGWPJfVhg3cCPXr44xm6uqia9EPBbWRrtNXMpBofB2oWLs26",
  "key26": "3XzCJi6dUQPVAp1seLsgcFi5jugmDUh3GSiM9QZkd3ACZQHwhSwDBCPinfqMieURBLK1TKBpjPHjn4AGWoJfrxnD",
  "key27": "c3vMJKz8zCHwPaTfvxh5YHEsaxb2A85YKALw9hrnXiE9RJwyuEAg5Z7LPKQfAANL3k9t1GkeDoz3bNtXen3oCT8",
  "key28": "5QTrDZrwkA7FGRS2ZRPkp17UxqFdFxsAy3HYHUwBHD3jAUF7oQ9mkxf7a5F7YsQEEhdpeGa9PdZjnnyb1GgseA59",
  "key29": "3mZvDQHCUzFqjrW33az79vBd9KBEsKHAsHsVgb9eWuA5tZkf8K1a79CiZHwzt6KLS6Nq7twimvhwEGkeMV7hAdJn",
  "key30": "45zc8NdFBSjKs2eK7eHdFRzAbi5tuMDim7bYuWzrN4FEyqjQ9fg2KNZTkCBZwGuTYBjm18mFaJXGhGAJdE8rRvEa",
  "key31": "23Uay7Z1hipcHZFqK99JbbMXeGv7GAmctqkBvkgK9kHc3dwwQzNxTGWUCEhinKCGJe41JERx8Ayb5bN7XswNmwfz",
  "key32": "2pYThupJVaHEjakhft9Sev5MvEAdFJps6DV9kSyeE7Rc72JmHycPJFq3vuUEgpXX7rA4BfxG228VGdMDCPRRKpMZ",
  "key33": "5kDPp66RQyBmP9DFs8d97ptsnn7CztGH8TJZuCUv8K1ZuAS4SNFhDs5TTPNidx3tH6fjHvN16GrdrkwQFLSJBDtm",
  "key34": "2g5P8LA9UNv8fo6FxPKUQGZJEx5ASYjWdR4qJ5oJKqeGXUZrLwiRPmjK51bN9aTwVWqpPGjdbmA1cQjL1TVrtjuj",
  "key35": "42HHbJFQy3cSkbApdkQZ8f6PYUSN1CSWcnsZBK5uZBjNXLZ5y3xicU9cou6TrDo4vJycMa3ZwKCA3RCsCC5wUWpz",
  "key36": "4rH4HLefFEBKNYu15qum4Ym1dxqyUTrukbkyvZtysBJKyUGcQbywrLHuPh2F6BPXg4qaHPc3xcKku489o8EzKFBi",
  "key37": "4GVgyDeyV3wz42pnk3hnCPhamVj1ENxioZRDbtXDRjW2Wj7hzvV3fTfXF4YZjjehLomFe4p2rz5amK9HdNTPRsoV",
  "key38": "RL3SMBaPJVdzuYKEgMkyFxNJLGitp5wgYoQkCGnfkQg2ZzNEvat4kuiN4swFf8632VtrFfPfunUn51hzF1eiNHM",
  "key39": "oK5ysu6PQzXUTFkemq1podYo7UdDSqaZkXxw7ZGNimGpjT3opDzQyUvSHdFxarNEJmdzGbPNFgJzYkEBssQJLzs",
  "key40": "5xNY9wP68SJBfDCgUj8TRFSTMrrAmevwoW6sTnzpNkxUGza123yRg6gTgRQ1f8b5GNSj5bSaM8BQ7M5MUZancux5",
  "key41": "5km9uAFswpyFgL7qfhq26q944uQT5y2itqV5bGGAchVhwHv6bdWZVBGn6rh3tJbNQ9jMszbfitCrouEhJNPkp1Pp",
  "key42": "tUDpBzRWYCXFw8YZfCxdP69JmT15YXe1ydGdM3qZTMDtDb9oZVp5GjoKPXzxaUW8BAQ7u77eqQBm1yMRedPGQCv",
  "key43": "2t7uzp2wRA7GXzZdw7qV2rN236BXYyh2or4LNuo6MsMdD9489qX9j8tTkdfGTLHrYJNABjE5JPzdoBtRrKJjwm9F"
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
